import axios from 'axios'

const url = 'http://www.omdbapi.com/'
const apikey = 'a828b43f'
export default {
  obterFilme: (serchText,callback) => {
    const resultado = url + '?s='+serchText + '&apikey=' + apikey
    axios.get(resultado)
      .then(resp => {
        if(callback)
          callback(resp)
      })
  } 
}