export function geolocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        console.log("Geolocation is not supported by this browser.");
    }
}

export function onSuccess(position) {
    const {latitude, longitude} = position.coords;
    const url = `https://www.latlong.net/c/?lat=${latitude}&long=${longitude}`;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    document.querySelector('.popup-link').setAttribute('href', url);
    document.querySelector('.popup').style.display = 'block';
}

export function onError(error) {
    console.error( error);
}