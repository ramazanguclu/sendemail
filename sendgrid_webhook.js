var localtunnel = require('localtunnel');
localtunnel(5000, {
    subdomain: 'asdfasdfrtgblk'
}, function (err, tunnel) {
    console.log('LT running')
});