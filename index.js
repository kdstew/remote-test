var sa = require('superagent');

user = 'pharmacy'
pass = '123456789'

baseUrl = 'http://google.com';
path    = '';

var request = function() {
  sa.get(baseUrl + path)
    .auth(user, pass)
    .type('json')
    .accept('json')
    .end(function(err, response) {
      if(err) {
        console.dir(err);
      } else if (!response.ok) {
        console.dir(response.body);
      } else {
        console.dir(response.body);
      }

      setTimeout(request, 5000);
    });
};

setTimeout(request, 5000);
