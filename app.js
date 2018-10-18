
// const port = process.env.PORT || 3000
const { getRandomItem } = require('./model/tw-random')

// const { getRandomAddress } = require('./model/tw-random.js')
const { attack } = require('./model/fake.js')

const schedule = require('node-schedule')

const { getProxyList } = require('./crawler/crawlerproxy.js')

let currentProxyList = []



const goAutoAttack = async () => {
  let proxy = undefined
  
  console.log(`proxy pool數量 ${currentProxyList.length}`)
  // proxy = getRandomItem(currentProxyList)

  try {
    const result = await attack(proxy)
    if (result === 'ok') {
      return 'ok'
    } else {
      console.log('失敗原因: ' + result)
      return 'gg'
    }

  } catch (e) {
    console.log(e.message)
  }


}


let count = 1
//每x秒 attack !
schedule.scheduleJob('*/1 * * * * *', async () => {
  const result = await goAutoAttack()
  if (result === 'ok') {
    console.log('成功次數: ' + count)
    count ++
  }
})


//每個5分鐘重新拿proxy
schedule.scheduleJob('*/5 * * * *', () => {
  getProxyList().then(results => {
    currentProxyList = results
  })
})

getProxyList().then(results => {
  currentProxyList = results
})


















