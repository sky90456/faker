const address = require('../data/filterData.json')
const emailDomains = require('../data/email-domains.json')
const prefix_phone = require('../data/phone.json')


const names = require('../data/names')
const _ = require('lodash')

const nickname = require('nickname')







function getRandomInt(min, max) {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return `${result}`
}

function getRandomItem(array) {
  const itemIndex = Math.floor(Math.random() * array.length);
  return array[itemIndex]
}


const getRandomCity = () => {
  return getRandomItem(address)
}

const getRandomArea = (city) => {

  return getRandomItem(city.AreaList)
}


const getRandomRoad = (area) => {

  return getRandomItem(area.RoadList)
}



const getRandomAddress = () => {

  const city = getRandomCity()

  const area = getRandomArea(city)

  const road = getRandomRoad(area)

  const number = getRandomInt(1,99)

  return city.CityName + area.AreaName + road.RoadName + number + '號'
}

const getRandomName = () => {
  return _.sample(names)
}


const getRandomEmail = () => {

  const nick = nickname.random()
  const number = getRandomInt(0,10000)
  const domain = getRandomItem(emailDomains)
  return `${nick}${number}@${domain}`
}


const getRandomPhone = () => {

  const pre = getRandomItem(prefix_phone)
  const a = getRandomInt(0,9)
  const b = getRandomInt(0, 9)
  const c = getRandomInt(0, 9)
  const d = getRandomInt(0, 9)
  const e = getRandomInt(0, 9)
  const f = getRandomInt(0, 9)
  return pre + a + b + c + d + e + f
}

const getRandomRemark = () => {

  const array = ['', '', '', '', '', '', '', '', '',
   '', '', '', '', '', '', '','','','顏色','',
    '', '', '', '', '', '', '', '', '', '', ''
    , '','早上','下午','幾天到貨?','','','能早上送嗎?','能下午送嗎?','','','','想買兩件','只需一件','','','','','無','還有貨嗎']
  return getRandomItem(array)
}


// console.log(area.AreaName)
// console.log('--------')
// console.log(road.RoadName)

// console.log(getRandomName())

// console.log(getRandomAddress())

// console.log(getRandomEmail())
// console.log(getRandomPhone())

// console.log(getRandomRemark())



module.exports.getRandomAddress = getRandomAddress
module.exports.getRandomName = getRandomName
module.exports.getRandomEmail = getRandomEmail
module.exports.getRandomPhone = getRandomPhone

module.exports.getRandomRemark = getRandomRemark
module.exports.getRandomItem = getRandomItem







