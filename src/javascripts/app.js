var modernizr = require('./third-party/modernizr-custom');
/* Your app code here. */
//Velocity(document.body, { opacity: 0.5 });
import './modules'
var FastClick = require('./third-party/fastclick');
FastClick.attach(document.body);

console.log('app.js has loaded!');
