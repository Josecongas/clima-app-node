const axios = require('axios');

const getLugatLatLng = async direccion => {
  let encodedUrl = encodeURI(direccion);
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`;

  let resp = await axios.get(url);

  if (resp.data.status === 'ZERO_RESULTS') {
    throw new Error('No hay resultados para la ciudad' + direccion);
  }
  let location = resp.data.results[0];
  let coors = location.geometry.location;

  return {
    direccion: location.formatted_address,
    lat: coors.lat,
      lng: coors.lng
  };
};

module.exports = {
    getLugatLatLng
}
