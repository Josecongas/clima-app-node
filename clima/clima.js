const axios = require('axios');

const getClima = async(lat, lng) => {

    
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=040df94c92cdd5f242ed0aa178c6793c`;
    let resp = await axios.get(url);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}