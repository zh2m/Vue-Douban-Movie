import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3301'

let options = {
    timeout: 5000
}

export default axios.create(options)