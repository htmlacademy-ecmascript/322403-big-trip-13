/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: EVENT_TYPES, EVENT_CITIES, DESTINATION_DESCRIPTION, OPTION_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TYPES", function() { return EVENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_CITIES", function() { return EVENT_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTINATION_DESCRIPTION", function() { return DESTINATION_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION_NAMES", function() { return OPTION_NAMES; });
const EVENT_TYPES = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const EVENT_CITIES = [`Amsterdam`, `Chamonix`, `Geneva`];
const DESTINATION_DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const OPTION_NAMES = [
  `Order Uber`, `Add luggage`, `Switch to comfort`, `Rent a car`, `Add breakfast`, `Book tickets`, `Lunch in city`,
  `Choose seats`, `Travel by train`, `Add meal`
];




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-menu.js */ "./src/view/site-menu.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filters.js */ "./src/view/filters.js");
/* harmony import */ var _presenter_trip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/trip.js */ "./src/presenter/trip.js");
/* harmony import */ var _mock_trip_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/trip-event.js */ "./src/mock/trip-event.js");
/* harmony import */ var _mock_event_options_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/event-options.js */ "./src/mock/event-options.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");







const EVENT_COUNT = 20;

const eventOptions = Object(_mock_event_options_js__WEBPACK_IMPORTED_MODULE_4__["generateOptions"])();
const tripEvents = new Array(EVENT_COUNT)
  .fill()
  .map(() => Object(_mock_trip_event_js__WEBPACK_IMPORTED_MODULE_3__["generateTripEvent"])(eventOptions))
  .sort((a, b) => a.time.start - b.time.start);

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripsEventsElement = document.querySelector(`.trip-events`);

const tripPresenter = new _presenter_trip_js__WEBPACK_IMPORTED_MODULE_2__["TripPresenter"](tripsEventsElement, tripMainElement);

// Рендер меню

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["renderElement"])(tripControlsElement, new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["SiteMenuView"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

// Рендер фильтра

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["renderElement"])(tripControlsElement, new _view_filters_js__WEBPACK_IMPORTED_MODULE_1__["FiltersView"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

// Рендер маршрута

tripPresenter.init(tripEvents, eventOptions);


/***/ }),

/***/ "./src/mock/event-options.js":
/*!***********************************!*\
  !*** ./src/mock/event-options.js ***!
  \***********************************/
/*! exports provided: generateOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateOptions", function() { return generateOptions; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");



const generateOptions = () => {
  let result = [];
  for (const type of _const_js__WEBPACK_IMPORTED_MODULE_0__["EVENT_TYPES"]) {
    for (const name of Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItemsFromArray"])(_const_js__WEBPACK_IMPORTED_MODULE_0__["OPTION_NAMES"], 4, _const_js__WEBPACK_IMPORTED_MODULE_0__["OPTION_NAMES"].length)) {
      result.push({
        type,
        name,
        price: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(20, 200)
      });
    }
  }

  return result;
};




/***/ }),

/***/ "./src/mock/trip-event.js":
/*!********************************!*\
  !*** ./src/mock/trip-event.js ***!
  \********************************/
/*! exports provided: generateTripEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripEvent", function() { return generateTripEvent; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const generatePhotos = () => {
  const getPhoto = () => `http://picsum.photos/248/152?r=${Math.random()}`;
  return new Array(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5)).fill().map(getPhoto);
};

const generateDate = () => {
  const maxDaysGap = 2;
  const maxHourGap = 3;
  const daysGap = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxDaysGap, maxDaysGap);
  const hourGap = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxHourGap, maxHourGap);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()()
    .add(daysGap, `day`)
    .add(hourGap, `hour`)
    .set(`minute`, Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItemFromArray"])([0, 30]))
    .toDate();
};

const generateId = () => Date.now() + (Math.random() * 10000);

const generateTripEvent = (options) => {
  const type = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItemFromArray"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["EVENT_TYPES"]);
  const start = generateDate();
  const getFinishDate = (startDate) => {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate).add(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5), `hour`).toDate();
  };

  return {
    id: generateId(),
    type,
    price: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(50, 500),
    destination: {
      city: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItemFromArray"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["EVENT_CITIES"]),
      description: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItemsFromArray"])(_const_js__WEBPACK_IMPORTED_MODULE_2__["DESTINATION_DESCRIPTION"], 1, 5),
      photos: generatePhotos(),
    },
    time: {
      start,
      finish: getFinishDate(start),
    },
    options: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItemsFromArray"])(options.filter((option) => option.type === type), 0, 5),
    isFavorite: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1))
  };
};




/***/ }),

/***/ "./src/presenter/trip-event.js":
/*!*************************************!*\
  !*** ./src/presenter/trip-event.js ***!
  \*************************************/
/*! exports provided: TripEventPresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripEventPresenter", function() { return TripEventPresenter; });
/* harmony import */ var _view_event_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/event-editor.js */ "./src/view/event-editor.js");
/* harmony import */ var _view_trip_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/trip-event.js */ "./src/view/trip-event.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");




const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

class TripEventPresenter {
  constructor(tripEventsContainer, changeData, changeMode) {
    this._tripEventsContainer = tripEventsContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._tripEventComponent = null;
    this._eventEditorComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleRollDown = this._handleRollDown.bind(this);
    this._handleRollUp = this._handleRollUp.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleSubmitForm = this._handleSubmitForm.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(tripEvent, eventOptions) {
    this._tripEvent = tripEvent;
    this._eventOptions = eventOptions;

    const prevTripEventComponent = this._tripEventComponent;
    const prevEventEditorComponent = this._eventEditorComponent;

    this._tripEventComponent = new _view_trip_event_js__WEBPACK_IMPORTED_MODULE_1__["TripEventView"](this._tripEvent);
    this._eventEditorComponent = new _view_event_editor_js__WEBPACK_IMPORTED_MODULE_0__["EventEditorView"](this._tripEvent, this._eventOptions);

    this._tripEventComponent.setRollDownHandler(this._handleRollDown);
    this._tripEventComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._eventEditorComponent.setRollUpHandler(this._handleRollUp);
    this._eventEditorComponent.setSubmitFormHandler(this._handleSubmitForm);

    if (prevTripEventComponent === null || prevEventEditorComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["renderElement"])(this._tripEventsContainer, this._tripEventComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._tripEventComponent, prevTripEventComponent);
    }

    if (this._mode === Mode.EDITING) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventEditorComponent, prevEventEditorComponent);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevTripEventComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevEventEditorComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  delete() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._tripEventComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._eventEditorComponent);
  }

  _replaceCardToForm() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventEditorComponent, this._tripEventComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToCard() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._tripEventComponent, this._eventEditorComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._replaceFormToCard();
    }
  }

  _handleRollDown() {
    this._replaceCardToForm();
  }

  _handleRollUp() {
    this._replaceFormToCard();
  }

  _handleSubmitForm() {
    this._replaceFormToCard();
  }

  _handleFavoriteClick() {
    this._changeData(Object.assign({}, this._tripEvent, {isFavorite: !this._tripEvent.isFavorite}));
  }
}




/***/ }),

/***/ "./src/presenter/trip.js":
/*!*******************************!*\
  !*** ./src/presenter/trip.js ***!
  \*******************************/
/*! exports provided: TripPresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPresenter", function() { return TripPresenter; });
/* harmony import */ var _view_events_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/events-list.js */ "./src/view/events-list.js");
/* harmony import */ var _view_no_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/no-event.js */ "./src/view/no-event.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _trip_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-event.js */ "./src/presenter/trip-event.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../route.js */ "./src/route.js");
/* harmony import */ var _utils_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/sort.js */ "./src/utils/sort.js");
/* harmony import */ var _view_trip_information_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/trip-information.js */ "./src/view/trip-information.js");
/* harmony import */ var _view_trip_price_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view/trip-price.js */ "./src/view/trip-price.js");











class TripPresenter {
  constructor(tripContainer, tripDetailsContainer) {
    this._tripContainer = tripContainer;
    this._tripDetailsContainer = tripDetailsContainer;
    this._tripEventPresenter = {};
    this._currentSortType = `sort-day`;

    this._eventsListComponent = new _view_events_list_js__WEBPACK_IMPORTED_MODULE_0__["EventsListView"]();
    this._noEventComponent = new _view_no_event_js__WEBPACK_IMPORTED_MODULE_1__["NoEvent"]();
    this._sortingComponent = new _view_sorting_js__WEBPACK_IMPORTED_MODULE_2__["SortingView"]();

    this._handleTripEventChange = this._handleTripEventChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(tripEvents, eventOptions) {
    this._tripEvents = tripEvents.slice();
    this._sourcedTripEvents = tripEvents.slice();
    this._eventOptions = eventOptions.slice();
    this._routeDetails = Object(_route_js__WEBPACK_IMPORTED_MODULE_6__["calculateRouteDetails"])(this._tripEvents);

    this._renderTrip();
  }

  _handleTripEventChange(updatedTripEvent) {
    this._tripEvents = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_5__["updateItem"])(this._tripEvents, updatedTripEvent);
    this._tripEventPresenter[updatedTripEvent.id].init(updatedTripEvent, this._eventOptions);
  }

  _handleModeChange() {
    Object.values(this._tripEventPresenter).forEach((presenter) => presenter.resetView());
  }

  _sortTasks(sortType) {
    switch (sortType) {
      case `sort-time`:
        this._tripEvents.sort(_utils_sort_js__WEBPACK_IMPORTED_MODULE_7__["sortByTime"]);
        break;
      case `sort-price`:
        this._tripEvents.sort(_utils_sort_js__WEBPACK_IMPORTED_MODULE_7__["sortByPrice"]);
        break;
      default:
        this._tripEvents = this._sourcedTripEvents.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortTasks(sortType);
    this._deleteTripEvents();
    this._renderTripEvents();
  }

  _renderSort() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["renderElement"])(this._tripContainer, this._sortingComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);
    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderEventsList() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["renderElement"])(this._tripContainer, this._eventsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);
  }

  _renderTripInformation() {
    this._tripInformationComponent = new _view_trip_information_js__WEBPACK_IMPORTED_MODULE_8__["TripInformationView"](this._routeDetails);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["renderElement"])(this._tripDetailsContainer, this._tripInformationComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTERBEGIN);
  }

  _renderTripPrice() {
    this._tripPriceComponent = new _view_trip_price_js__WEBPACK_IMPORTED_MODULE_9__["TripPriceView"](this._routeDetails);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["renderElement"])(this._tripInformationComponent, this._tripPriceComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);
  }

  _renderTripEvent(tripEvent, eventOptions) {
    const tripEventPresenter = new _trip_event_js__WEBPACK_IMPORTED_MODULE_3__["TripEventPresenter"](this._eventsListComponent, this._handleTripEventChange, this._handleModeChange);
    tripEventPresenter.init(tripEvent, eventOptions);
    this._tripEventPresenter[tripEvent.id] = tripEventPresenter;
  }

  _renderTripEvents() {
    this._tripEvents
      .forEach((tripEvent) => this._renderTripEvent(tripEvent, this._eventOptions));
  }

  _deleteTripEvents() {
    Object
      .values(this._tripEventPresenter)
      .forEach((presenter) => presenter.delete());
    this._tripEventPresenter = {};
  }

  _renderNoEvent() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["renderElement"])(this._tripContainer, this._noEventComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);
  }

  _renderTrip() {
    if (this._tripEvents.length === 0) {
      this._renderNoEvent();
      return;
    }

    // Рендер сортировки

    this._renderSort();

    // Рендер списка событий

    this._renderEventsList();

    // Рендер точек маршрута

    this._renderTripEvents();

    // Рендер деталей путешествия

    this._renderTripInformation();
    this._renderTripPrice();
  }
}




/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/*! exports provided: calculateRouteDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateRouteDetails", function() { return calculateRouteDetails; });
const calculateRouteDetails = (tripEvents) => {
  if (tripEvents.length === 0) {
    return null;
  }

  const getCities = () => {
    let result = [];

    for (const tripEvent of tripEvents) {
      if (!result || result[tripEvents.length - 1] !== tripEvent.destination.city) {
        result.push(tripEvent.destination.city);
      }
    }

    return result;
  };

  const getTotalPrice = () => tripEvents.reduce((sum, element) => sum + element.price, 0);

  return {
    cities: getCities(),
    dates: {
      start: tripEvents[0].time.start,
      finish: tripEvents[tripEvents.length - 1].time.finish,
    },
    totalPrice: getTotalPrice()
  };
};




/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandomItemFromArray, getRandomItemsFromArray, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItemFromArray", function() { return getRandomItemFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItemsFromArray", function() { return getRandomItemsFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItemFromArray = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const getRandomItemsFromArray = (array, min, max) => {
  const arrayCopy = Array.from(array);
  const resultLength = getRandomInteger(min, max);
  return arrayCopy.sort(() => 0.5 - Math.random()).slice(0, resultLength);
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};




/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, renderElement, createElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const renderElement = (container, element, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"]) {
    container = container.getElement();
  }

  if (element instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"]) {
    element = element.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};




/***/ }),

/***/ "./src/utils/sort.js":
/*!***************************!*\
  !*** ./src/utils/sort.js ***!
  \***************************/
/*! exports provided: sortByTime, sortByPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByTime", function() { return sortByTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByPrice", function() { return sortByPrice; });
const sortByTime = (tripEventA, tripEventB) => {
  const tripEventADuration = tripEventA.time.finish - tripEventA.time.start;
  const tripEventBDuration = tripEventB.time.finish - tripEventB.time.start;

  return tripEventBDuration - tripEventADuration;
};

const sortByPrice = (tripEventA, tripEventB) => {
  return tripEventB.price - tripEventA.price;
};




/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: AbstractView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractView", function() { return AbstractView; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}




/***/ }),

/***/ "./src/view/event-editor.js":
/*!**********************************!*\
  !*** ./src/view/event-editor.js ***!
  \**********************************/
/*! exports provided: EventEditorView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEditorView", function() { return EventEditorView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




const createEventEditorTemplate = (tripEvent, optionsList) => {
  const {type, price, options, time, destination} = tripEvent;

  const createEventTypesList = (editingEventType) => {
    let eventTypesList = ``;

    const isChecked = (currentEventType) => {
      return currentEventType === editingEventType ? `checked` : ``;
    };

    for (const eventType of _const_js__WEBPACK_IMPORTED_MODULE_1__["EVENT_TYPES"]) {
      eventTypesList += `
        <div class="event__type-item">
          <input
          id="event-type-${eventType.toLowerCase()}-2"
          class="event__type-input  visually-hidden"
          type="radio"
          name="event-type"
          value="${eventType.toLowerCase()}"
          ${isChecked(eventType)}>
            <label class="event__type-label  event__type-label--${eventType.toLowerCase()}" for="event-type-${eventType.toLowerCase()}-2">${eventType}</label>
        </div>`;
    }

    return eventTypesList;
  };

  const createEventOptionsList = (editingEventOptions) => {
    let eventOptionsList = ``;

    const isChecked = (currentEventOption) => {
      return editingEventOptions.includes(currentEventOption) ? `checked` : ``;
    };

    for (const option of optionsList.filter((optionItem) => optionItem.type === type)) {
      eventOptionsList += `
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden"
          id="event-${option.name.toLowerCase().replace(` `, `-`)}-2"
          type="checkbox"
          name="event-${option.name.toLowerCase().replace(` `, `-`)}"
          ${isChecked(option)}>
          <label
          class="event__offer-label"
          for="event-${option.name.toLowerCase().replace(` `, `-`)}-2">
            <span class="event__offer-title">${option.name}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${option.price}</span>
          </label>
        </div>`;
    }

    return eventOptionsList;
  };

  const createDestinationList = () => {
    let cities = ``;
    for (const city of _const_js__WEBPACK_IMPORTED_MODULE_1__["EVENT_CITIES"]) {
      cities += `<option value="${city}"></option>`;
    }

    return cities;
  };

  const timeStart = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.start).format(`DD/MM/YY hh:mm`);
  const timeFinish = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.finish).format(`DD/MM/YY hh:mm`);

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-2">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-2" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${createEventTypesList(type)}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-2">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-2" type="text" name="event-destination" value="${destination.city}" list="destination-list-2">
                    <datalist id="destination-list-2">
                      ${createDestinationList()}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-2">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-2" type="text" name="event-start-time" value="${timeStart}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-2">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-2" type="text" name="event-end-time" value="${timeFinish}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-2">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-2" type="text" name="event-price" value="${price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                    ${createEventOptionsList(options)}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destination.description}</p>
                  </section>
                </section>
              </form>
            </li>`;
};

class EventEditorView extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["AbstractView"] {
  constructor(tripEvent, optionsList) {
    super();
    this._tripEvent = tripEvent;
    this._optionsList = optionsList;
    this._rollUpHandler = this._rollUpHandler.bind(this);
    this._submitFormHandler = this._submitFormHandler.bind(this);
  }

  getTemplate() {
    return createEventEditorTemplate(this._tripEvent, this._optionsList);
  }

  _rollUpHandler(evt) {
    evt.preventDefault();
    this._callback.rollUp();
  }

  setRollUpHandler(callback) {
    this._callback.rollUp = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._rollUpHandler);
  }

  _submitFormHandler(evt) {
    evt.preventDefault();
    this._callback.submitForm();
  }

  setSubmitFormHandler(callback) {
    this._callback.submitForm = callback;
    this.getElement().querySelector(`.event--edit`).addEventListener(`submit`, this._submitFormHandler);
  }
}




/***/ }),

/***/ "./src/view/events-list.js":
/*!*********************************!*\
  !*** ./src/view/events-list.js ***!
  \*********************************/
/*! exports provided: EventsListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListView", function() { return EventsListView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createEventsListTemplate = () => {
  return `<ul class="trip-events__list">
          </ul>`;
};

class EventsListView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createEventsListTemplate();
  }
}





/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: FiltersView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersView", function() { return FiltersView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFiltersTemplate = () => {
  return `<div>
            <h2 class="visually-hidden">Filter events</h2>
            <form class="trip-filters" action="#" method="get">
              <div class="trip-filters__filter">
                <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
              </div>

              <div class="trip-filters__filter">
                <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                <label class="trip-filters__filter-label" for="filter-future">Future</label>
              </div>

              <div class="trip-filters__filter">
                <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
                <label class="trip-filters__filter-label" for="filter-past">Past</label>
              </div>

              <button class="visually-hidden" type="submit">Accept filter</button>
            </form>
          </div>`;
};

class FiltersView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createFiltersTemplate();
  }
}






/***/ }),

/***/ "./src/view/no-event.js":
/*!******************************!*\
  !*** ./src/view/no-event.js ***!
  \******************************/
/*! exports provided: NoEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoEvent", function() { return NoEvent; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoEventTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class NoEvent extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createNoEventTemplate();
  }
}




/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: SiteMenuView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteMenuView", function() { return SiteMenuView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSiteMenuTemplate = () => {
  return `<div>
            <h2 class="visually-hidden">Switch trip view</h2>
            <nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>
          </div>`;
};

class SiteMenuView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createSiteMenuTemplate();
  }
}





/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: SortingView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingView", function() { return SortingView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSortingTemplate = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`;
};

class SortingView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortingTemplate();
  }

  _sortTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.value);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`change`, this._sortTypeChangeHandler);
  }
}






/***/ }),

/***/ "./src/view/trip-event.js":
/*!********************************!*\
  !*** ./src/view/trip-event.js ***!
  \********************************/
/*! exports provided: TripEventView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripEventView", function() { return TripEventView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createTripEventTemplate = (tripEvent) => {
  const {type, price, options, time, isFavorite} = tripEvent;
  const city = tripEvent.destination.city;

  const getFavoriteClassName = isFavorite ? `event__favorite-btn--active` : ``;

  const getOptions = (optionsArray) => {
    let result = ``;
    for (const optionsItem of optionsArray) {
      result += `<li class="event__offer">
        <span class="event__offer-title">${optionsItem.name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${optionsItem.price}</span>
      </li>`;
    }
    return result;
  };

  const day = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.start).format(`MMM DD`);
  const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.start).format(`YYYY-MM-DD`);
  const timeStart = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.start).format(`hh-mm`);
  const dateTimeStart = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.start).format(`YYYY-MM-DDThh:mm`);
  const timeFinish = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.finish).format(`hh-mm`);
  const dateTimeFinish = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.finish).format(`YYYY-MM-DDThh:mm`);

  const getDuration = (start, finish) => {
    const durationInDays = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finish).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(start), `day`);
    const durationInHours = (dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finish).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(start), `hour`)) % 24;
    const durationInMinutes = (dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finish).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(start), `minute`)) % 60;

    let result = ``;

    if (durationInDays) {
      if (durationInDays < 10) {
        result += `0${durationInDays}D `;
      } else {
        result += `${durationInDays}D `;
      }
    }

    if (durationInHours || durationInDays) {
      if (durationInHours < 10) {
        result += `0${durationInHours}H `;
      } else {
        result += `${durationInHours}H `;
      }
    }

    if (durationInHours || durationInDays || durationInMinutes) {
      if (durationInMinutes < 10) {
        result += `0${durationInMinutes}M`;
      } else {
        result += `${durationInMinutes}M`;
      }
    }

    return result;
  };

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${date}">${day}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${city}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateTimeStart}">${timeStart}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTimeFinish}">${timeFinish}</time>
                  </p>
                  <p class="event__duration">${getDuration(time.start, time.finish)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${getOptions(options)}
                </ul>
                <button class="event__favorite-btn ${getFavoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
};

class TripEventView extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["AbstractView"] {
  constructor(tripEvent) {
    super();
    this._tripEvent = tripEvent;
    this._rollDownHandler = this._rollDownHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createTripEventTemplate(this._tripEvent);
  }

  _rollDownHandler(evt) {
    evt.preventDefault();
    this._callback.rollDown();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setRollDownHandler(callback) {
    this._callback.rollDown = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._rollDownHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }
}




/***/ }),

/***/ "./src/view/trip-information.js":
/*!**************************************!*\
  !*** ./src/view/trip-information.js ***!
  \**************************************/
/*! exports provided: TripInformationView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripInformationView", function() { return TripInformationView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createTripInformationTemplate = (routeDetails) => {
  const {cities, dates} = routeDetails;

  const getCities = () => {
    if (cities.length > 3) {
      return `${cities[0]} &mdash; ... &mdash; ${cities[cities.length - 1]}`;
    } else {
      return cities.join(` &mdash; `);
    }
  };

  const getDates = () => {
    const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates.start).format(`DD MMM`);
    const finishDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates.finish).format(`DD MMM`);

    return `${startDate}&nbsp;&mdash;&nbsp;${finishDate}`;
  };

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${getCities()}</h1>

              <p class="trip-info__dates">${getDates()}</p>
            </div>
          </section>`;
};

class TripInformationView extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["AbstractView"] {
  constructor(routeDetails) {
    super();
    this._routeDetails = routeDetails;
  }

  getTemplate() {
    return createTripInformationTemplate(this._routeDetails);
  }
}




/***/ }),

/***/ "./src/view/trip-price.js":
/*!********************************!*\
  !*** ./src/view/trip-price.js ***!
  \********************************/
/*! exports provided: TripPriceView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPriceView", function() { return TripPriceView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createTripPriceTemplate = (routeDetails) => {
  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${routeDetails.totalPrice}</span>
            </p>`;
};

class TripPriceView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  constructor(routeDetails) {
    super();
    this._routeDetails = routeDetails;
  }

  getTemplate() {
    return createTripPriceTemplate(this._routeDetails);
  }
}





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map