this["JST"] = this["JST"] || {};

this["JST"]["js/templates/state.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="state">\n    <div class="state-profile">\n        <div class="stateImg">\n            <img src="http://lorempixel.com/140/140/city/" alt="">\n        </div>\n    </div>\n    <div class="state-info">\n        <div class="name">\n            <h3>State X</h3>\n        </div>\n        <div class="results tid">tid</div>\n        <div class="results count">Count X of Universities</div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["js/templates/university.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="" class="university">\n    <div class="name">\n        <h3>University X</h3>\n    </div>\n    <div class="university-info">\n        <div class="type">public/private</div>\n        <div class="location">\n            <a class="comoLlegar" href="https://maps.google.com?&daddr=' +
((__t = ( latitude )) == null ? '' : __t) +
'+' +
((__t = ( longitude )) == null ? '' : __t) +
'" target="_blank">See in map</a>\n        </div>\n    </div>\n</div>';

}
return __p
};