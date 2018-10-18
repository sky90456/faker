// const address = require('./AllData.json')
const address = require('./filterData.json')


function getRandomInt(min, max) {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return `${result}`
}

function getRandomItem(array) {
  const itemIndex = Math.floor(Math.random() * array.length);
  return array[itemIndex]
}


address.forEach(item => {
  console.log(item.CityName)
})



const getRandomCity = () => {
  return getRandomItem(address)
}

const getRandomArea = (city) => {

  return getRandomItem(city.AreaList)
}


const getRandomRoad = (area) => {

  return getRandomItem(area.RoadList)
}


// const city = getRandomCity()

// const area = getRandomArea(city)

// const road = getRandomRoad(area)

// console.log(city.CityName)
// console.log(area.AreaName)
// console.log('--------')
// console.log(road.RoadName)




