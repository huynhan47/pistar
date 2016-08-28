var res1;
var response = function(res) { 
   res1.view('user/result', {
  	imgURL: 'https://blog.periodiccorp.com/content/images/2014/Aug/Rainbow-Code-Wallpaper.png',
    feeling: res
  });
};


module.exports = function search(inputs) {

  inputs = inputs || {};

  // Get access to `req` and `res`
  var req = this.req;
  res1 = this.res;
  /*.view('user/result', {
  	imgURL: 'https://trylumiaphone.com/images/home/phone2.png'
  });*/
  var indico = require('indico.io');
  indico.apiKey =  'a04fac11826481d1d397c45d816f297c';

// single example
  indico.sentiment("I love writing code!")
  .then(response)
    // Otherwise if this is an HTML-wanting browser, redirect to /. bb

};

module.export = function getTag() {
var indico = require('indico.io');
indico.apiKey =  '22f3900a6f36a63516ec81c8b030acbd';

// single example
  indico.sentiment("I love writing code!")
  .then(response)
  .catch(logError);
}