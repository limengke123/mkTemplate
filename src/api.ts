import axios from 'axios'

const getRandomPoem = () => {
  const apiUrl = 'https://qqlykm.cn/api/yan/gc.php'
  console.log('datadata')
  console.log(JSON.stringify(axios.get))
  return axios.get(apiUrl)
    .then(result => {
      console.log(result, 1231232)
      return result
    })
}

export {
  getRandomPoem
}
