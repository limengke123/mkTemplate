const axios = {
  get() {
    console.log('mock, axios111')
    return new Promise(resolve => {
      console.log('mock axios')
      resolve({
        status: 1,
        msg: '古诗获取成功！',
        data: {
          id: 1165,
          subject: '弹歌',
          dynasty: '先秦',
          author: '无名氏',
          content: '断竹续竹。飞土逐肉。'
        },
        timestamp: 1626707867256
      })
    })
  }
}
export default axios
