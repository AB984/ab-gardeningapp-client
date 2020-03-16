let APIURL = '';

switch(window.location.hostname) {
    // this is the local host name of my react app
    case 'localhost' || '127.0.0.1' :
        // this is the local host name of my API
        APIURL = 'http://localhost:3000';
        break;
        case 'ab-gardeningapp-client.herokuapp.com' :
            APIURL = 'https://ab-gardenapi2020.herokuapp.com';
}

export default APIURL;