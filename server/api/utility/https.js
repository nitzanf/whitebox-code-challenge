const https = require('https');

/* 
*   Return an object with a get method for a request using native 
*   https requests. Can be expanded for additional types of requests.
*   (POST, PUT, DELETE, etc)
*/

module.exports = (function () {
    return {
        get: (url, send) => {
            let data = '';
            https.get(url, res => {
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => {
                    send(JSON.parse(data));
                });
            }).on('error', err => {
                console.log(`Error: ${err.message}.`);
            });
        }
    }
})();