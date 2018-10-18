const Random = require('./tw-random')

const querystring = require('querystring');

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




const data2 = {
  protype: '平板电脑',
  profullname: '平板电脑',
  pri: 2099,
  productpackage:'',
  backurl: 'http://www.nwau.net/twpbdn/?cid=QQ&fbclid=IwAR2Xgfy-HWzeKTlvoj_OfvrRglp8oObChIUXWbOuR9Iu_Kl2tzm8-c3eWz8',
  fromurl: 'http://www.nwau.net/twpbdn/?cid=QQ&fbclid=IwAR2Xgfy-HWzeKTlvoj_OfvrRglp8oObChIUXWbOuR9Iu_Kl2tzm8-c3eWz8',
  cid: 'QQ',
  num: 1,
  proname: '白色平板 | 白色鼠标 | 蓝牙耳机 | 指环扣',
  productpackage: '白色平板 + 白色鼠标 + 蓝牙耳机 + 指环扣',
  'payment-method': '货到付款',
  username: Random.getRandomName(),
  mobile: Random.getRandomPhone(),
  cusprovince: '台灣',
  cuscity: '台北市',
  cusarea: '大同區',
  addr: Random.getRandomAddress(),
  postal: 000000,
  mail:Random.getRandomEmail(),
  addr: Random.getRandomAddress()
}









const attack = async (proxy) => {

  try {

    const postData = {
      method: 'post',
      url: 'http://post.odaq.cn/order_hwd.php',
      data: querystring.stringify(data2),
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36(KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
        'Accept': 'text / plain'
      },
      
    }

    if (proxy) {
      postData['proxy'] = proxy
    }
    


    const result = await axios(postData)

    if (!result.data) {return 'no data string response'}


    if (typeof result.data === 'object' ) {
      return 'ok'
    }else {
      return 'notok'
    }

    // if (resultData.includes('"status":1') && resultData.includes('"info":"success"')) {
    //   return 'ok'
    // }else {
    //   return 'notok'
    // }

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








// const postData = {
//   method: 'post',
//   url: 'http://post.odaq.cn/order_hwd.php',
//   data: data2,
//   transformRequest: [() => {
//     let ret = ''
//     for (let it in data2) {
//       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//     }
//     // console.log(ret)
//     return ret
//   }],
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36(KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
//     'Accept': 'text / plain'
//   },

// }