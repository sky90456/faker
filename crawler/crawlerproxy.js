
const axios = require('axios')
const cheerio = require('cheerio')



const getProxyList = async () => {

  try {
    const result = await axios.get('https://free-proxy-list.net/')
    if (result.status !== 200) {
      return []
    }
    return parse(result.data)

  } catch (e) {
    return []
  }

}

// axios.get('https://free-proxy-list.net/')
//   .then(result => {

//     parse(result.data)

//   })
//   .catch(e => {
//     return []
//   })




const parse = (html) => {

  const proxys = []

  const $ = cheerio.load(html)

  const trs = $('#proxylisttable').find('tbody tr')
  trs.each((i,tr) => {
    const tds = $(tr).find('td')
    
    let host 
    let port 
    tds.each((i, td) => {
      if (i === 0) {
        host = $(td).text()
      }

      if (i === 1) {
        port = $(td).text()
      }

    })

    if (host && port){
      proxys.push({ host,port})
    }
    
  })

  return proxys

}


module.exports.getProxyList = getProxyList

