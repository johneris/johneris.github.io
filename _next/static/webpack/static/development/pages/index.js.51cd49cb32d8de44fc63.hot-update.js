webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/moment/src/lib/create/check-overflow.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/check-overflow.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkOverflow; });
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




function checkOverflow(m) {
    var overflow,
        a = m._a;

    if (a && Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).overflow === -2) {
        overflow =
            a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]] > 11
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]] < 1 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]] > Object(_units_month__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["YEAR"]], a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]])
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] < 0 ||
                  a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] > 24 ||
                  (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] === 24 &&
                      (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] !== 0))
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] > 999
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]
                : -1;

        if (
            Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowDayOfYear &&
            (overflow < _units_constants__WEBPACK_IMPORTED_MODULE_1__["YEAR"] || overflow > _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"])
        ) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"];
        }
        if (Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowWeeks && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["WEEK"];
        }
        if (Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowWeekday && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["WEEKDAY"];
        }

        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).overflow = overflow;
    }

    return m;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/date-from-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/date-from-array.js ***!
  \***************************************************************/
/*! exports provided: createDate, createUTCDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDate", function() { return createDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUTCDate", function() { return createUTCDate; });
function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);
        if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
    } else {
        date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
}

function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        args = Array.prototype.slice.call(arguments);
        // preserve leap years using a full 400 year cycle, then reset
        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
    } else {
        date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-anything.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-anything.js ***!
  \*************************************************************/
/*! exports provided: prepareConfig, createLocalOrUTC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareConfig", function() { return prepareConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocalOrUTC", function() { return createLocalOrUTC; });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/map */ "./node_modules/moment/src/lib/utils/map.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check-overflow */ "./node_modules/moment/src/lib/create/check-overflow.js");
/* harmony import */ var _from_string_and_array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./from-string-and-array */ "./node_modules/moment/src/lib/create/from-string-and-array.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./from-string */ "./node_modules/moment/src/lib/create/from-string.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _from_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./from-object */ "./node_modules/moment/src/lib/create/from-object.js");




















function createFromConfig(config) {
    var res = new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__["Moment"](Object(_check_overflow__WEBPACK_IMPORTED_MODULE_11__["default"])(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig(config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_9__["getLocale"])(config._l);

    if (input === null || (format === undefined && input === '')) {
        return Object(_valid__WEBPACK_IMPORTED_MODULE_7__["createInvalid"])({ nullInput: true });
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_8__["isMoment"])(input)) {
        return new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__["Moment"](Object(_check_overflow__WEBPACK_IMPORTED_MODULE_11__["default"])(input));
    } else if (Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_5__["default"])(input)) {
        config._d = input;
    } else if (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
        Object(_from_string_and_array__WEBPACK_IMPORTED_MODULE_12__["configFromStringAndArray"])(config);
    } else if (format) {
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_13__["configFromStringAndFormat"])(config);
    } else {
        configFromInput(config);
    }

    if (!Object(_valid__WEBPACK_IMPORTED_MODULE_7__["isValid"])(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__["default"])(input)) {
        config._d = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_10__["hooks"].now());
    } else if (Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_5__["default"])(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_14__["configFromString"])(config);
    } else if (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
        config._a = Object(_utils_map__WEBPACK_IMPORTED_MODULE_6__["default"])(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        Object(_from_array__WEBPACK_IMPORTED_MODULE_15__["configFromArray"])(config);
    } else if (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_1__["default"])(input)) {
        Object(_from_object__WEBPACK_IMPORTED_MODULE_16__["configFromObject"])(config);
    } else if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_10__["hooks"].createFromInputFallback(config);
    }
}

function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (format === true || format === false) {
        strict = format;
        format = undefined;
    }

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if (
        (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_1__["default"])(input) && Object(_utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__["default"])(input)) ||
        (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && input.length === 0)
    ) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-array.js ***!
  \**********************************************************/
/*! exports provided: configFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromArray", function() { return configFromArray; });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/defaults */ "./node_modules/moment/src/lib/utils/defaults.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");









function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].now());
    if (config._useUTC) {
        return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(),
        ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["DATE"]] == null && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MONTH"]] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]], currentDate[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]]);

        if (
            config._dayOfYear > Object(_units_year__WEBPACK_IMPORTED_MODULE_2__["daysInYear"])(yearToUse) ||
            config._dayOfYear === 0
        ) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowDayOfYear = true;
        }

        date = Object(_date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"])(yearToUse, 0, config._dayOfYear);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MONTH"]] = date.getUTCMonth();
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["DATE"]] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] =
            config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] === 24 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MINUTE"]] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["SECOND"]] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MILLISECOND"]] === 0
    ) {
        config._nextDay = true;
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] = 0;
    }

    config._d = (config._useUTC ? _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"] : _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createDate"]).apply(
        null,
        input
    );
    expectedWeekday = config._useUTC
        ? config._d.getUTCDay()
        : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] = 24;
    }

    // check for mismatching day of week
    if (
        config._w &&
        typeof config._w.d !== 'undefined' &&
        config._w.d !== expectedWeekday
    ) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(
            w.GG,
            config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]],
            Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weekOfYear"])(Object(_local__WEBPACK_IMPORTED_MODULE_5__["createLocal"])(), 1, 4).year
        );
        week = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.W, 1);
        weekday = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        curWeek = Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weekOfYear"])(Object(_local__WEBPACK_IMPORTED_MODULE_5__["createLocal"])(), dow, doy);

        weekYear = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.gg, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]], curWeek.year);

        // Default to current week.
        week = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to beginning of week
            weekday = dow;
        }
    }
    if (week < 1 || week > Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weeksInYear"])(weekYear, dow, doy)) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowWeekday = true;
    } else {
        temp = Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["dayOfYearFromWeeks"])(weekYear, week, weekday, dow, doy);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-object.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-object.js ***!
  \***********************************************************/
/*! exports provided: configFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromObject", function() { return configFromObject; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/map */ "./node_modules/moment/src/lib/utils/map.js");




function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(config._i),
        dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = Object(_utils_map__WEBPACK_IMPORTED_MODULE_2__["default"])(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function (obj) {
            return obj && parseInt(obj, 10);
        }
    );

    Object(_from_array__WEBPACK_IMPORTED_MODULE_1__["configFromArray"])(config);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string-and-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-array.js ***!
  \*********************************************************************/
/*! exports provided: configFromStringAndArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromStringAndArray", function() { return configFromStringAndArray; });
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");






// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore,
        validFormatFound,
        bestFormatIsValid = false;

    if (config._f.length === 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_0__["copyConfig"])({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_1__["configFromStringAndFormat"])(tempConfig);

        if (Object(_valid__WEBPACK_IMPORTED_MODULE_3__["isValid"])(tempConfig)) {
            validFormatFound = true;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).charsLeftOver;

        //or tokens
        currentScore += Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).unusedTokens.length * 10;

        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).score = currentScore;

        if (!bestFormatIsValid) {
            if (
                scoreToBeat == null ||
                currentScore < scoreToBeat ||
                validFormatFound
            ) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                    bestFormatIsValid = true;
                }
            }
        } else {
            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
    }

    Object(_utils_extend__WEBPACK_IMPORTED_MODULE_4__["default"])(config, bestMoment || tempConfig);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string-and-format.js":
/*!**********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-format.js ***!
  \**********************************************************************/
/*! exports provided: configFromStringAndFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromStringAndFormat", function() { return configFromStringAndFormat; });
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string */ "./node_modules/moment/src/lib/create/from-string.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-overflow */ "./node_modules/moment/src/lib/create/check-overflow.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");










// constant that refers to the ISO standard
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].ISO_8601) {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_0__["configFromISO"])(config);
        return;
    }
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].RFC_2822) {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_0__["configFromRFC2822"])(config);
        return;
    }
    config._a = [];
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0,
        era;

    tokens =
        Object(_format_format__WEBPACK_IMPORTED_MODULE_4__["expandFormat"])(config._f, config._locale).match(_format_format__WEBPACK_IMPORTED_MODULE_4__["formattingTokens"]) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["getParseRegexForToken"])(token, config)) ||
            [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedInput.push(skipped);
            }
            string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (_format_format__WEBPACK_IMPORTED_MODULE_4__["formatTokenFunctions"][token]) {
            if (parsedInput) {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).empty = false;
            } else {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedTokens.push(token);
            }
            Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addTimeToArrayFromToken"])(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).charsLeftOver =
        stringLength - totalParsedInputLength;
    if (string.length > 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] <= 12 &&
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).bigHour === true &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] > 0
    ) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).bigHour = undefined;
    }

    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).parsedDateParts = config._a.slice(0);
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = meridiemFixWrap(
        config._locale,
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]],
        config._meridiem
    );

    // handle era
    era = Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).era;
    if (era !== null) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["YEAR"]] = config._locale.erasConvertYear(era, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["YEAR"]]);
    }

    Object(_from_array__WEBPACK_IMPORTED_MODULE_1__["configFromArray"])(config);
    Object(_check_overflow__WEBPACK_IMPORTED_MODULE_5__["default"])(config);
}

function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string.js ***!
  \***********************************************************/
/*! exports provided: configFromISO, configFromRFC2822, configFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromISO", function() { return configFromISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromRFC2822", function() { return configFromRFC2822; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromString", function() { return configFromString; });
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");








// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
    isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/],
        ['YYYYMM', /\d{6}/, false],
        ['YYYY', /\d{4}/, false],
    ],
    // iso time formats and regexes
    isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/],
    ],
    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60,
    };

// date from iso format
function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

    if (match) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_0__["configFromStringAndFormat"])(config);
    } else {
        config._isValid = false;
    }
}

function extractFromRFC2822Strings(
    yearStr,
    monthStr,
    dayStr,
    hourStr,
    minuteStr,
    secondStr
) {
    var result = [
        untruncateYear(yearStr),
        _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonthsShort"].indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10),
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .replace(/^\s\s*/, '')
        .replace(/\s\s*$/, '');
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
        var weekdayProvided = _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__["defaultLocaleWeekdaysShort"].indexOf(weekdayStr),
            weekdayActual = new Date(
                parsedInput[0],
                parsedInput[1],
                parsedInput[2]
            ).getDay();
        if (weekdayProvided !== weekdayActual) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10),
            m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)),
        parsedArray;
    if (match) {
        parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"].apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    if (config._strict) {
        config._isValid = false;
    } else {
        // Final attempt, use Input Fallback
        _utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].createFromInputFallback(config);
    }
}

_utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].createFromInputFallback = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);


/***/ }),

/***/ "./node_modules/moment/src/lib/create/local.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/local.js ***!
  \*****************************************************/
/*! exports provided: createLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocal", function() { return createLocal; });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");


function createLocal(input, format, locale, strict) {
    return Object(_from_anything__WEBPACK_IMPORTED_MODULE_0__["createLocalOrUTC"])(input, format, locale, strict, false);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/parsing-flags.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/parsing-flags.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParsingFlags; });
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false,
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/utc.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/create/utc.js ***!
  \***************************************************/
/*! exports provided: createUTC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUTC", function() { return createUTC; });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");


function createUTC(input, format, locale, strict) {
    return Object(_from_anything__WEBPACK_IMPORTED_MODULE_0__["createLocalOrUTC"])(input, format, locale, strict, true).utc();
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/valid.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/valid.js ***!
  \*****************************************************/
/*! exports provided: isValid, createInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return createInvalid; });
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_some__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/some */ "./node_modules/moment/src/lib/utils/some.js");





function isValid(m) {
    if (m._isValid == null) {
        var flags = Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m),
            parsedParts = _utils_some__WEBPACK_IMPORTED_MODULE_3__["default"].call(flags.parsedDateParts, function (i) {
                return i != null;
            }),
            isNowValid =
                !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid =
                isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        } else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid(flags) {
    var m = Object(_utc__WEBPACK_IMPORTED_MODULE_1__["createUTC"])(NaN);
    if (flags != null) {
        Object(_utils_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m), flags);
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).userInvalidated = true;
    }

    return m;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/abs.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/abs.js ***!
  \*****************************************************/
/*! exports provided: abs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
var mathAbs = Math.abs;

function abs() {
    var data = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);

    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);

    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/add-subtract.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/add-subtract.js ***!
  \**************************************************************/
/*! exports provided: add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


function addSubtract(duration, input, value, direction) {
    var other = Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add(input, value) {
    return addSubtract(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract(input, value) {
    return addSubtract(this, input, value, -1);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/as.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/as.js ***!
  \****************************************************/
/*! exports provided: as, valueOf, asMilliseconds, asSeconds, asMinutes, asHours, asDays, asWeeks, asMonths, asQuarters, asYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as", function() { return as; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueOf", function() { return valueOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMilliseconds", function() { return asMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asSeconds", function() { return asSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMinutes", function() { return asMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asHours", function() { return asHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asDays", function() { return asDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asWeeks", function() { return asWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMonths", function() { return asMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asQuarters", function() { return asQuarters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asYears", function() { return asYears; });
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ "./node_modules/moment/src/lib/duration/bubble.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




function as(units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days,
        months,
        milliseconds = this._milliseconds;

    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units);

    if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + Object(_bubble__WEBPACK_IMPORTED_MODULE_0__["daysToMonths"])(days);
        switch (units) {
            case 'month':
                return months;
            case 'quarter':
                return months / 3;
            case 'year':
                return months / 12;
        }
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(Object(_bubble__WEBPACK_IMPORTED_MODULE_0__["monthsToDays"])(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hour':
                return days * 24 + milliseconds / 36e5;
            case 'minute':
                return days * 1440 + milliseconds / 6e4;
            case 'second':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf() {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(this._months / 12) * 31536e6
    );
}

function makeAs(alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms'),
    asSeconds = makeAs('s'),
    asMinutes = makeAs('m'),
    asHours = makeAs('h'),
    asDays = makeAs('d'),
    asWeeks = makeAs('w'),
    asMonths = makeAs('M'),
    asQuarters = makeAs('Q'),
    asYears = makeAs('y');




/***/ }),

/***/ "./node_modules/moment/src/lib/duration/bubble.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/bubble.js ***!
  \********************************************************/
/*! exports provided: bubble, daysToMonths, monthsToDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysToMonths", function() { return daysToMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsToDays", function() { return monthsToDays; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");
/* harmony import */ var _utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-ceil */ "./node_modules/moment/src/lib/utils/abs-ceil.js");



function bubble() {
    var milliseconds = this._milliseconds,
        days = this._days,
        months = this._months,
        data = this._data,
        seconds,
        minutes,
        hours,
        years,
        monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (
        !(
            (milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0)
        )
    ) {
        milliseconds += Object(_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__["default"])(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(seconds / 60);
    data.minutes = minutes % 60;

    hours = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(minutes / 60);
    data.hours = hours % 24;

    days += Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(hours / 24);

    // convert days to months
    monthsFromDays = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(daysToMonths(days));
    months += monthsFromDays;
    days -= Object(_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__["default"])(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
}

function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return (days * 4800) / 146097;
}

function monthsToDays(months) {
    // the reverse of daysToMonths
    return (months * 146097) / 4800;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/clone.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/clone.js ***!
  \*******************************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


function clone() {
    return Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(this);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/constructor.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/constructor.js ***!
  \*************************************************************/
/*! exports provided: Duration, isDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return Duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDuration", function() { return isDuration; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _valid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid.js */ "./node_modules/moment/src/lib/duration/valid.js");




function Duration(duration) {
    var normalizedInput = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = Object(_valid_js__WEBPACK_IMPORTED_MODULE_2__["default"])(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds =
        +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;

    this._data = {};

    this._locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])();

    this._bubble();
}

function isDuration(obj) {
    return obj instanceof Duration;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/create.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/create.js ***!
  \********************************************************/
/*! exports provided: createDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return createDuration; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/abs-round */ "./node_modules/moment/src/lib/utils/abs-round.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/duration/valid.js");










// ASP.NET json date format regex
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration(input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input)) {
        duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months,
        };
    } else if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_1__["default"])(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
            duration[key] = +input;
        } else {
            duration.milliseconds = +input;
        }
    } else if ((match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: 0,
            d: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["DATE"]]) * sign,
            h: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]]) * sign,
            m: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["MINUTE"]]) * sign,
            s: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["SECOND"]]) * sign,
            ms: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_3__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["MILLISECOND"]] * 1000)) * sign, // the millisecond decimal point is included in the match
        };
    } else if ((match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign),
        };
    } else if (duration == null) {
        // checks for null or undefined
        duration = {};
    } else if (
        typeof duration === 'object' &&
        ('from' in duration || 'to' in duration)
    ) {
        diffRes = momentsDifference(
            Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(duration.from),
            Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(duration.to)
        );

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"](duration);

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input) && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__["default"])(input, '_locale')) {
        ret._locale = input._locale;
    }

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input) && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__["default"])(input, '_isValid')) {
        ret._isValid = input._isValid;
    }

    return ret;
}

createDuration.fn = _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"].prototype;
createDuration.invalid = _valid__WEBPACK_IMPORTED_MODULE_8__["createInvalid"];

function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {};

    res.months =
        other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
    }

    other = Object(_units_offset__WEBPACK_IMPORTED_MODULE_6__["cloneWithOffset"])(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/duration.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/duration.js ***!
  \**********************************************************/
/*! exports provided: createDuration, isDuration, getSetRelativeTimeRounding, getSetRelativeTimeThreshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/duration/prototype.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["createDuration"]; });

/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDuration", function() { return _constructor__WEBPACK_IMPORTED_MODULE_2__["isDuration"]; });

/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humanize */ "./node_modules/moment/src/lib/duration/humanize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeRounding", function() { return _humanize__WEBPACK_IMPORTED_MODULE_3__["getSetRelativeTimeRounding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeThreshold", function() { return _humanize__WEBPACK_IMPORTED_MODULE_3__["getSetRelativeTimeThreshold"]; });

// Side effect imports









/***/ }),

/***/ "./node_modules/moment/src/lib/duration/get.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/get.js ***!
  \*****************************************************/
/*! exports provided: get, milliseconds, seconds, minutes, hours, days, months, years, weeks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weeks", function() { return weeks; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");



function get(units) {
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds'),
    seconds = makeGetter('seconds'),
    minutes = makeGetter('minutes'),
    hours = makeGetter('hours'),
    days = makeGetter('days'),
    months = makeGetter('months'),
    years = makeGetter('years');



function weeks() {
    return Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__["default"])(this.days() / 7);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/humanize.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/humanize.js ***!
  \**********************************************************/
/*! exports provided: getSetRelativeTimeRounding, getSetRelativeTimeThreshold, humanize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeRounding", function() { return getSetRelativeTimeRounding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeThreshold", function() { return getSetRelativeTimeThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanize", function() { return humanize; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


var round = Math.round,
    thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month/week
        w: null, // weeks to month
        M: 11, // months to year
    };

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime(posNegDuration, withoutSuffix, thresholds, locale) {
    var duration = Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(posNegDuration).abs(),
        seconds = round(duration.as('s')),
        minutes = round(duration.as('m')),
        hours = round(duration.as('h')),
        days = round(duration.as('d')),
        months = round(duration.as('M')),
        weeks = round(duration.as('w')),
        years = round(duration.as('y')),
        a =
            (seconds <= thresholds.ss && ['s', seconds]) ||
            (seconds < thresholds.s && ['ss', seconds]) ||
            (minutes <= 1 && ['m']) ||
            (minutes < thresholds.m && ['mm', minutes]) ||
            (hours <= 1 && ['h']) ||
            (hours < thresholds.h && ['hh', hours]) ||
            (days <= 1 && ['d']) ||
            (days < thresholds.d && ['dd', days]);

    if (thresholds.w != null) {
        a =
            a ||
            (weeks <= 1 && ['w']) ||
            (weeks < thresholds.w && ['ww', weeks]);
    }
    a = a ||
        (months <= 1 && ['M']) ||
        (months < thresholds.M && ['MM', months]) ||
        (years <= 1 && ['y']) || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var withSuffix = false,
        th = thresholds,
        locale,
        output;

    if (typeof argWithSuffix === 'object') {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
        withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === 'object') {
        th = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
        }
    }

    locale = this.localeData();
    output = relativeTime(this, !withSuffix, th, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/iso-string.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/iso-string.js ***!
  \************************************************************/
/*! exports provided: toISOString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toISOString", function() { return toISOString; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");

var abs = Math.abs;

function sign(x) {
    return (x > 0) - (x < 0) || +x;
}

function toISOString() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs(this._milliseconds) / 1000,
        days = abs(this._days),
        months = abs(this._months),
        minutes,
        hours,
        years,
        s,
        total = this.asSeconds(),
        totalSign,
        ymSign,
        daysSign,
        hmsSign;

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(seconds / 60);
    hours = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return (
        totalSign +
        'P' +
        (years ? ymSign + years + 'Y' : '') +
        (months ? ymSign + months + 'M' : '') +
        (days ? daysSign + days + 'D' : '') +
        (hours || minutes || seconds ? 'T' : '') +
        (hours ? hmsSign + hours + 'H' : '') +
        (minutes ? hmsSign + minutes + 'M' : '') +
        (seconds ? hmsSign + s + 'S' : '')
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/prototype.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/prototype.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony import */ var _abs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abs */ "./node_modules/moment/src/lib/duration/abs.js");
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-subtract */ "./node_modules/moment/src/lib/duration/add-subtract.js");
/* harmony import */ var _as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./as */ "./node_modules/moment/src/lib/duration/as.js");
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bubble */ "./node_modules/moment/src/lib/duration/bubble.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone */ "./node_modules/moment/src/lib/duration/clone.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get */ "./node_modules/moment/src/lib/duration/get.js");
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./humanize */ "./node_modules/moment/src/lib/duration/humanize.js");
/* harmony import */ var _iso_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iso-string */ "./node_modules/moment/src/lib/duration/iso-string.js");
/* harmony import */ var _moment_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../moment/locale */ "./node_modules/moment/src/lib/moment/locale.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/duration/valid.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"].prototype;












proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_10__["isValid"];
proto.abs = _abs__WEBPACK_IMPORTED_MODULE_1__["abs"];
proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_2__["add"];
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_2__["subtract"];
proto.as = _as__WEBPACK_IMPORTED_MODULE_3__["as"];
proto.asMilliseconds = _as__WEBPACK_IMPORTED_MODULE_3__["asMilliseconds"];
proto.asSeconds = _as__WEBPACK_IMPORTED_MODULE_3__["asSeconds"];
proto.asMinutes = _as__WEBPACK_IMPORTED_MODULE_3__["asMinutes"];
proto.asHours = _as__WEBPACK_IMPORTED_MODULE_3__["asHours"];
proto.asDays = _as__WEBPACK_IMPORTED_MODULE_3__["asDays"];
proto.asWeeks = _as__WEBPACK_IMPORTED_MODULE_3__["asWeeks"];
proto.asMonths = _as__WEBPACK_IMPORTED_MODULE_3__["asMonths"];
proto.asQuarters = _as__WEBPACK_IMPORTED_MODULE_3__["asQuarters"];
proto.asYears = _as__WEBPACK_IMPORTED_MODULE_3__["asYears"];
proto.valueOf = _as__WEBPACK_IMPORTED_MODULE_3__["valueOf"];
proto._bubble = _bubble__WEBPACK_IMPORTED_MODULE_4__["bubble"];
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_5__["clone"];
proto.get = _get__WEBPACK_IMPORTED_MODULE_6__["get"];
proto.milliseconds = _get__WEBPACK_IMPORTED_MODULE_6__["milliseconds"];
proto.seconds = _get__WEBPACK_IMPORTED_MODULE_6__["seconds"];
proto.minutes = _get__WEBPACK_IMPORTED_MODULE_6__["minutes"];
proto.hours = _get__WEBPACK_IMPORTED_MODULE_6__["hours"];
proto.days = _get__WEBPACK_IMPORTED_MODULE_6__["days"];
proto.weeks = _get__WEBPACK_IMPORTED_MODULE_6__["weeks"];
proto.months = _get__WEBPACK_IMPORTED_MODULE_6__["months"];
proto.years = _get__WEBPACK_IMPORTED_MODULE_6__["years"];
proto.humanize = _humanize__WEBPACK_IMPORTED_MODULE_7__["humanize"];
proto.toISOString = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.toString = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.toJSON = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.locale = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["locale"];
proto.localeData = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["localeData"];

// Deprecations


proto.toIsoString = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_11__["deprecate"])(
    'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
    _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"]
);
proto.lang = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["lang"];


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/valid.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/valid.js ***!
  \*******************************************************/
/*! exports provided: default, isValid, createInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDurationValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return createInvalid; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");





var ordering = [
    'year',
    'quarter',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
];

function isDurationValid(m) {
    var key,
        unitHasDecimal = false,
        i;
    for (key in m) {
        if (
            Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(m, key) &&
            !(
                _utils_index_of__WEBPACK_IMPORTED_MODULE_2__["default"].call(ordering, key) !== -1 &&
                (m[key] == null || !isNaN(m[key]))
            )
        ) {
            return false;
        }
    }

    for (i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_1__["default"])(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid() {
    return this._isValid;
}

function createInvalid() {
    return Object(_create__WEBPACK_IMPORTED_MODULE_3__["createDuration"])(NaN);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/format/format.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/format/format.js ***!
  \******************************************************/
/*! exports provided: formattingTokens, formatTokenFunctions, addFormatToken, formatMoment, expandFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattingTokens", function() { return formattingTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTokenFunctions", function() { return formatTokenFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFormatToken", function() { return addFormatToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoment", function() { return formatMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandFormat", function() { return expandFormat; });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");



var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    formatFunctions = {},
    formatTokenFunctions = {};



// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(
                func.apply(this, arguments),
                token
            );
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '',
            i;
        for (i = 0; i < length; i++) {
            output += Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_1__["default"])(array[i])
                ? array[i].call(mom, format)
                : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] =
        formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/base-config.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/base-config.js ***!
  \***********************************************************/
/*! exports provided: baseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseConfig", function() { return baseConfig; });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/locale/calendar.js");
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats */ "./node_modules/moment/src/lib/locale/formats.js");
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalid */ "./node_modules/moment/src/lib/locale/invalid.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordinal */ "./node_modules/moment/src/lib/locale/ordinal.js");
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relative */ "./node_modules/moment/src/lib/locale/relative.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");






// months


// week


// weekdays


// meridiem


var baseConfig = {
    calendar: _calendar__WEBPACK_IMPORTED_MODULE_0__["defaultCalendar"],
    longDateFormat: _formats__WEBPACK_IMPORTED_MODULE_1__["defaultLongDateFormat"],
    invalidDate: _invalid__WEBPACK_IMPORTED_MODULE_2__["defaultInvalidDate"],
    ordinal: _ordinal__WEBPACK_IMPORTED_MODULE_3__["defaultOrdinal"],
    dayOfMonthOrdinalParse: _ordinal__WEBPACK_IMPORTED_MODULE_3__["defaultDayOfMonthOrdinalParse"],
    relativeTime: _relative__WEBPACK_IMPORTED_MODULE_4__["defaultRelativeTime"],

    months: _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonths"],
    monthsShort: _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonthsShort"],

    week: _units_week__WEBPACK_IMPORTED_MODULE_6__["defaultLocaleWeek"],

    weekdays: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdays"],
    weekdaysMin: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdaysMin"],
    weekdaysShort: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdaysShort"],

    meridiemParse: _units_hour__WEBPACK_IMPORTED_MODULE_8__["defaultLocaleMeridiemParse"],
};


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/calendar.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/calendar.js ***!
  \********************************************************/
/*! exports provided: defaultCalendar, calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCalendar", function() { return defaultCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L',
};



function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(output) ? output.call(mom, now) : output;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/constructor.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/constructor.js ***!
  \***********************************************************/
/*! exports provided: Locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return Locale; });
function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/en.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/en.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/locale/prototype.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"])('en', {
    eras: [
        {
            since: '0001-01-01',
            until: +Infinity,
            offset: 1,
            name: 'Anno Domini',
            narrow: 'AD',
            abbr: 'AD',
        },
        {
            since: '0000-12-31',
            until: -Infinity,
            offset: 1,
            name: 'Before Christ',
            narrow: 'BC',
            abbr: 'BC',
        },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (number) {
        var b = number % 10,
            output =
                Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])((number % 100) / 10) === 1
                    ? 'th'
                    : b === 1
                    ? 'st'
                    : b === 2
                    ? 'nd'
                    : b === 3
                    ? 'rd'
                    : 'th';
        return number + output;
    },
});


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/formats.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/formats.js ***!
  \*******************************************************/
/*! exports provided: defaultLongDateFormat, longDateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLongDateFormat", function() { return defaultLongDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longDateFormat", function() { return longDateFormat; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");


var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
};

function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper
        .match(_format_format__WEBPACK_IMPORTED_MODULE_0__["formattingTokens"])
        .map(function (tok) {
            if (
                tok === 'MMMM' ||
                tok === 'MM' ||
                tok === 'DD' ||
                tok === 'dddd'
            ) {
                return tok.slice(1);
            }
            return tok;
        })
        .join('');

    return this._longDateFormat[key];
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/invalid.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/invalid.js ***!
  \*******************************************************/
/*! exports provided: defaultInvalidDate, invalidDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInvalidDate", function() { return defaultInvalidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidDate", function() { return invalidDate; });
var defaultInvalidDate = 'Invalid date';

function invalidDate() {
    return this._invalidDate;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/lists.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/lists.js ***!
  \*****************************************************/
/*! exports provided: listMonths, listMonthsShort, listWeekdays, listWeekdaysShort, listWeekdaysMin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMonths", function() { return listMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMonthsShort", function() { return listMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdays", function() { return listWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysShort", function() { return listWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysMin", function() { return listWeekdaysMin; });
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");




function get(format, index, field, setter) {
    var locale = Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(),
        utc = Object(_create_utc__WEBPACK_IMPORTED_MODULE_2__["createUTC"])().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl(format, index, field) {
    if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get(format, index, field, 'month');
    }

    var i,
        out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(),
        shift = localeSorted ? locale._week.dow : 0,
        i,
        out = [];

    if (index != null) {
        return get(format, (index + shift) % 7, field, 'day');
    }

    for (i = 0; i < 7; i++) {
        out[i] = get(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/locale.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locale.js ***!
  \******************************************************/
/*! exports provided: getSetGlobalLocale, defineLocale, updateLocale, getLocale, listLocales, listMonths, listMonthsShort, listWeekdays, listWeekdaysShort, listWeekdaysMin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/locale/prototype.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["listLocales"]; });

/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists */ "./node_modules/moment/src/lib/locale/lists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listMonths", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listMonths"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listMonthsShort", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listMonthsShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdays", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysShort", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdaysShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysMin", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdaysMin"]; });

/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en */ "./node_modules/moment/src/lib/locale/en.js");
// Side effect imports











_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].lang = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'moment.lang is deprecated. Use moment.locale instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"]
);
_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].langData = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'moment.langData is deprecated. Use moment.localeData instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"]
);




/***/ }),

/***/ "./node_modules/moment/src/lib/locale/locales.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locales.js ***!
  \*******************************************************/
/*! exports provided: getSetGlobalLocale, defineLocale, updateLocale, getLocale, listLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return getSetGlobalLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return defineLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return updateLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return listLocales; });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set */ "./node_modules/moment/src/lib/locale/set.js");
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/locale/constructor.js");
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/keys */ "./node_modules/moment/src/lib/utils/keys.js");
/* harmony import */ var _base_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-config */ "./node_modules/moment/src/lib/locale/base-config.js");
var require;








// internal storage for locale config files
var locales = {},
    localeFamilies = {},
    globalLocale;

function commonPrefix(arr1, arr2) {
    var i,
        minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return i;
        }
    }
    return minl;
}

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (
                next &&
                next.length >= j &&
                commonPrefix(split, next) >= j - 1
            ) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return globalLocale;
}

function loadLocale(name) {
    var oldLocale = null,
        aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (
        locales[name] === undefined &&
        typeof module !== 'undefined' &&
        module &&
        module.exports
    ) {
        try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = require;
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
        if (Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(values)) {
            data = getLocale(key);
        } else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        } else {
            if (typeof console !== 'undefined' && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn(
                    'Locale ' + key + ' not found. Did you forget to load it?'
                );
            }
        }
    }

    return globalLocale._abbr;
}

function defineLocale(name, config) {
    if (config !== null) {
        var locale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__["baseConfig"];
        config.abbr = name;
        if (locales[name] != null) {
            Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_2__["deprecateSimple"])(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
            );
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                locale = loadLocale(config.parentLocale);
                if (locale != null) {
                    parentConfig = locale._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config,
                    });
                    return null;
                }
            }
        }
        locales[name] = new _constructor__WEBPACK_IMPORTED_MODULE_4__["Locale"](Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);

        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__["baseConfig"];

        if (locales[name] != null && locales[name].parentLocale != null) {
            // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(locales[name]._config, config));
        } else {
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(parentConfig, config);
            if (tmpLocale == null) {
                // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
            }
            locale = new _constructor__WEBPACK_IMPORTED_MODULE_4__["Locale"](config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
        }

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                    getSetGlobalLocale(name);
                }
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return Object(_utils_keys__WEBPACK_IMPORTED_MODULE_5__["default"])(locales);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/moment/src/lib/locale/ordinal.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/ordinal.js ***!
  \*******************************************************/
/*! exports provided: defaultOrdinal, defaultDayOfMonthOrdinalParse, ordinal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOrdinal", function() { return defaultOrdinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDayOfMonthOrdinalParse", function() { return defaultDayOfMonthOrdinalParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
var defaultOrdinal = '%d',
    defaultDayOfMonthOrdinalParse = /\d{1,2}/;



function ordinal(number) {
    return this._ordinal.replace('%d', number);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/pre-post-format.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/pre-post-format.js ***!
  \***************************************************************/
/*! exports provided: preParsePostFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preParsePostFormat", function() { return preParsePostFormat; });
function preParsePostFormat(string) {
    return string;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/prototype.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/prototype.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/locale/constructor.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/locale/calendar.js");
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats */ "./node_modules/moment/src/lib/locale/formats.js");
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid */ "./node_modules/moment/src/lib/locale/invalid.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordinal */ "./node_modules/moment/src/lib/locale/ordinal.js");
/* harmony import */ var _pre_post_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-post-format */ "./node_modules/moment/src/lib/locale/pre-post-format.js");
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relative */ "./node_modules/moment/src/lib/locale/relative.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set */ "./node_modules/moment/src/lib/locale/set.js");
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/era */ "./node_modules/moment/src/lib/units/era.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Locale"].prototype;









proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_1__["calendar"];
proto.longDateFormat = _formats__WEBPACK_IMPORTED_MODULE_2__["longDateFormat"];
proto.invalidDate = _invalid__WEBPACK_IMPORTED_MODULE_3__["invalidDate"];
proto.ordinal = _ordinal__WEBPACK_IMPORTED_MODULE_4__["ordinal"];
proto.preparse = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__["preParsePostFormat"];
proto.postformat = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__["preParsePostFormat"];
proto.relativeTime = _relative__WEBPACK_IMPORTED_MODULE_6__["relativeTime"];
proto.pastFuture = _relative__WEBPACK_IMPORTED_MODULE_6__["pastFuture"];
proto.set = _set__WEBPACK_IMPORTED_MODULE_7__["set"];

// Eras

proto.eras = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeEras"];
proto.erasParse = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeErasParse"];
proto.erasConvertYear = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeErasConvertYear"];
proto.erasAbbrRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasAbbrRegex"];
proto.erasNameRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasNameRegex"];
proto.erasNarrowRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasNarrowRegex"];

// Month


proto.months = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonths"];
proto.monthsShort = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonthsShort"];
proto.monthsParse = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonthsParse"];
proto.monthsRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__["monthsRegex"];
proto.monthsShortRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__["monthsShortRegex"];

// Week

proto.week = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeWeek"];
proto.firstDayOfYear = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeFirstDayOfYear"];
proto.firstDayOfWeek = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeFirstDayOfWeek"];

// Day of Week


proto.weekdays = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdays"];
proto.weekdaysMin = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysMin"];
proto.weekdaysShort = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysShort"];
proto.weekdaysParse = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysParse"];

proto.weekdaysRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysRegex"];
proto.weekdaysShortRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysShortRegex"];
proto.weekdaysMinRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysMinRegex"];

// Hours


proto.isPM = _units_hour__WEBPACK_IMPORTED_MODULE_12__["localeIsPM"];
proto.meridiem = _units_hour__WEBPACK_IMPORTED_MODULE_12__["localeMeridiem"];


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/relative.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/relative.js ***!
  \********************************************************/
/*! exports provided: defaultRelativeTime, relativeTime, pastFuture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRelativeTime", function() { return defaultRelativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeTime", function() { return relativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pastFuture", function() { return pastFuture; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
};



function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(output)
        ? output(number, withoutSuffix, string, isFuture)
        : output.replace(/%d/i, number);
}

function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(format) ? format(output) : format.replace(/%s/i, output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/set.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/set.js ***!
  \***************************************************/
/*! exports provided: set, mergeConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeConfigs", function() { return mergeConfigs; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");





function set(config) {
    var prop, i;
    for (i in config) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(config, i)) {
            prop = config[i];
            if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' +
            /\d{1,2}/.source
    );
}

function mergeConfigs(parentConfig, childConfig) {
    var res = Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentConfig),
        prop;
    for (prop in childConfig) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(childConfig, prop)) {
            if (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(parentConfig[prop]) && Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(childConfig[prop])) {
                res[prop] = {};
                Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(res[prop], parentConfig[prop]);
                Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (
            Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(parentConfig, prop) &&
            !Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(childConfig, prop) &&
            Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(parentConfig[prop])
        ) {
            // make sure changes to properties don't modify parent config
            res[prop] = Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, res[prop]);
        }
    }
    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/add-subtract.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/add-subtract.js ***!
  \************************************************************/
/*! exports provided: addSubtract, add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSubtract", function() { return addSubtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/abs-round */ "./node_modules/moment/src/lib/utils/abs-round.js");







// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecateSimple"])(
                name,
                'moment().' +
                    name +
                    '(period, number) is deprecated. Please use moment().' +
                    name +
                    '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
            );
            tmp = val;
            val = period;
            period = tmp;
        }

        dur = Object(_duration_create__WEBPACK_IMPORTED_MODULE_2__["createDuration"])(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__["default"])(duration._days),
        months = Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__["default"])(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        Object(_units_month__WEBPACK_IMPORTED_MODULE_1__["setMonth"])(mom, Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(mom, 'Month') + months * isAdding);
    }
    if (days) {
        Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["set"])(mom, 'Date', Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].updateOffset(mom, days || months);
    }
}

var add = createAdder(1, 'add'),
    subtract = createAdder(-1, 'subtract');


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/calendar.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/calendar.js ***!
  \********************************************************/
/*! exports provided: getCalendarFormat, calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarFormat", function() { return getCalendarFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-moment-input */ "./node_modules/moment/src/lib/utils/is-moment-input.js");
/* harmony import */ var _utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-calendar-spec */ "./node_modules/moment/src/lib/utils/is-calendar-spec.js");







function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6
        ? 'sameElse'
        : diff < -1
        ? 'lastWeek'
        : diff < 0
        ? 'lastDay'
        : diff < 1
        ? 'sameDay'
        : diff < 2
        ? 'nextDay'
        : diff < 7
        ? 'nextWeek'
        : 'sameElse';
}

function calendar(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
        if (Object(_utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__["isMomentInput"])(arguments[0])) {
            time = arguments[0];
            formats = undefined;
        } else if (Object(_utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__["default"])(arguments[0])) {
            formats = arguments[0];
            time = undefined;
        }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(),
        sod = Object(_units_offset__WEBPACK_IMPORTED_MODULE_1__["cloneWithOffset"])(now, this).startOf('day'),
        format = _utils_hooks__WEBPACK_IMPORTED_MODULE_3__["hooks"].calendarFormat(this, sod) || 'sameElse',
        output =
            formats &&
            (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_2__["default"])(formats[format])
                ? formats[format].call(this, now)
                : formats[format]);

    return this.format(
        output || this.localeData().calendar(format, this, Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(now))
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/clone.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/clone.js ***!
  \*****************************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");


function clone() {
    return new _constructor__WEBPACK_IMPORTED_MODULE_0__["Moment"](this);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/compare.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/compare.js ***!
  \*******************************************************/
/*! exports provided: isAfter, isBefore, isBetween, isSame, isSameOrAfter, isSameOrBefore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return isAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return isBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameOrAfter", function() { return isSameOrAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameOrBefore", function() { return isSameOrBefore; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");




function isAfter(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween(from, to, units, inclusivity) {
    var localFrom = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(from) ? from : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(from),
        localTo = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(to) ? to : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
    }
    inclusivity = inclusivity || '()';
    return (
        (inclusivity[0] === '('
            ? this.isAfter(localFrom, units)
            : !this.isBefore(localFrom, units)) &&
        (inclusivity[1] === ')'
            ? this.isBefore(localTo, units)
            : !this.isAfter(localTo, units))
    );
}

function isSame(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return (
            this.clone().startOf(units).valueOf() <= inputMs &&
            inputMs <= this.clone().endOf(units).valueOf()
        );
    }
}

function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
}

function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/constructor.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/constructor.js ***!
  \***********************************************************/
/*! exports provided: copyConfig, Moment, isMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyConfig", function() { return copyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moment", function() { return Moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoment", function() { return isMoment; });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = (_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].momentProperties = []),
    updateInProgress = false;

function copyConfig(to, from) {
    var i, prop, val;

    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._i)) {
        to._i = from._i;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._f)) {
        to._f = from._f;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._l)) {
        to._l = from._l;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._strict)) {
        to._strict = from._strict;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._offset)) {
        to._offset = from._offset;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._pf)) {
        to._pf = Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(from);
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        _utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment(obj) {
    return (
        obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/creation-data.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/creation-data.js ***!
  \*************************************************************/
/*! exports provided: creationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creationData", function() { return creationData; });
function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
    };
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/diff.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/diff.js ***!
  \****************************************************/
/*! exports provided: diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");




function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = Object(_units_offset__WEBPACK_IMPORTED_MODULE_1__["cloneWithOffset"])(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_2__["normalizeUnits"])(units);

    switch (units) {
        case 'year':
            output = monthDiff(this, that) / 12;
            break;
        case 'month':
            output = monthDiff(this, that);
            break;
        case 'quarter':
            output = monthDiff(this, that) / 3;
            break;
        case 'second':
            output = (this - that) / 1e3;
            break; // 1000
        case 'minute':
            output = (this - that) / 6e4;
            break; // 1000 * 60
        case 'hour':
            output = (this - that) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = this - that;
    }

    return asFloat ? output : Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(output);
}

function monthDiff(a, b) {
    if (a.date() < b.date()) {
        // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
    }
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/format.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/format.js ***!
  \******************************************************/
/*! exports provided: toString, toISOString, inspect, format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toISOString", function() { return toISOString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspect", function() { return inspect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");




_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true,
        m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(
            m,
            utc
                ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }
    if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                .toISOString()
                .replace('Z', Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(m, 'Z'));
        }
    }
    return Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(
        m,
        utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
    );
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect() {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment',
        zone = '',
        prefix,
        year,
        datetime,
        suffix;
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    prefix = '[' + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format(inputString) {
    if (!inputString) {
        inputString = this.isUtc()
            ? _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormatUtc
            : _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormat;
    }
    var output = Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(this, inputString);
    return this.localeData().postformat(output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/from.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/from.js ***!
  \****************************************************/
/*! exports provided: from, fromNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNow", function() { return fromNow; });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");




function from(time, withoutSuffix) {
    if (
        this.isValid() &&
        ((Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_2__["isMoment"])(time) && time.isValid()) || Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(time).isValid())
    ) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])({ to: this, from: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow(withoutSuffix) {
    return this.from(Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(), withoutSuffix);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/get-set.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/get-set.js ***!
  \*******************************************************/
/*! exports provided: makeGetSet, get, set, stringGet, stringSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGetSet", function() { return makeGetSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringGet", function() { return stringGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringSet", function() { return stringSet; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _units_priorities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");








function makeGetSet(unit, keepTime) {
    return function (value) {
        if (value != null) {
            set(this, unit, value);
            _utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get(mom, unit) {
    return mom.isValid()
        ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
        : NaN;
}

function set(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (
            unit === 'FullYear' &&
            Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__["isLeapYear"])(mom.year()) &&
            mom.month() === 1 &&
            mom.date() === 29
        ) {
            value = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(value);
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                value,
                mom.month(),
                Object(_units_month__WEBPACK_IMPORTED_MODULE_4__["daysInMonth"])(value, mom.month())
            );
        } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet(units) {
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_3__["default"])(this[units])) {
        return this[units]();
    }
    return this;
}

function stringSet(units, value) {
    if (typeof units === 'object') {
        units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(units);
        var prioritized = Object(_units_priorities__WEBPACK_IMPORTED_MODULE_1__["getPrioritizedUnits"])(units),
            i;
        for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
        if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_3__["default"])(this[units])) {
            return this[units](value);
        }
    }
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/locale.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/locale.js ***!
  \******************************************************/
/*! exports provided: locale, lang, localeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lang", function() { return lang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeData", function() { return localeData; });
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");



// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_0__["getLocale"])(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_1__["deprecate"])(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData() {
    return this._locale;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/min-max.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/min-max.js ***!
  \*******************************************************/
/*! exports provided: prototypeMin, prototypeMax, min, max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prototypeMin", function() { return prototypeMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prototypeMax", function() { return prototypeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");





var prototypeMin = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"].apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return Object(_create_valid__WEBPACK_IMPORTED_MODULE_3__["createInvalid"])();
            }
        }
    ),
    prototypeMax = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"].apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return Object(_create_valid__WEBPACK_IMPORTED_MODULE_3__["createInvalid"])();
            }
        }
    );

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_1__["default"])(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/moment.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/moment.js ***!
  \******************************************************/
/*! exports provided: now, min, max, isMoment, createUTC, createUnix, createLocal, createInZone, createInvalid, momentPrototype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnix", function() { return createUnix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInZone", function() { return createInZone; });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocal", function() { return _create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"]; });

/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUTC", function() { return _create_utc__WEBPACK_IMPORTED_MODULE_1__["createUTC"]; });

/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return _create_valid__WEBPACK_IMPORTED_MODULE_2__["createInvalid"]; });

/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMoment", function() { return _constructor__WEBPACK_IMPORTED_MODULE_3__["isMoment"]; });

/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./min-max */ "./node_modules/moment/src/lib/moment/min-max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_max__WEBPACK_IMPORTED_MODULE_4__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _min_max__WEBPACK_IMPORTED_MODULE_4__["max"]; });

/* harmony import */ var _now__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./now */ "./node_modules/moment/src/lib/moment/now.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _now__WEBPACK_IMPORTED_MODULE_5__["now"]; });

/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/moment/prototype.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "momentPrototype", function() { return _prototype__WEBPACK_IMPORTED_MODULE_6__["default"]; });









function createUnix(input) {
    return Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(input * 1000);
}

function createInZone() {
    return _create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"].apply(null, arguments).parseZone();
}




/***/ }),

/***/ "./node_modules/moment/src/lib/moment/now.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/now.js ***!
  \***************************************************/
/*! exports provided: now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
var now = function () {
    return Date.now ? Date.now() : +new Date();
};


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/prototype.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/prototype.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subtract */ "./node_modules/moment/src/lib/moment/add-subtract.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/moment/calendar.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone */ "./node_modules/moment/src/lib/moment/clone.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compare */ "./node_modules/moment/src/lib/moment/compare.js");
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diff */ "./node_modules/moment/src/lib/moment/diff.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format */ "./node_modules/moment/src/lib/moment/format.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./from */ "./node_modules/moment/src/lib/moment/from.js");
/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./to */ "./node_modules/moment/src/lib/moment/to.js");
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale */ "./node_modules/moment/src/lib/moment/locale.js");
/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./min-max */ "./node_modules/moment/src/lib/moment/min-max.js");
/* harmony import */ var _start_end_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./start-end-of */ "./node_modules/moment/src/lib/moment/start-end-of.js");
/* harmony import */ var _to_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./to-type */ "./node_modules/moment/src/lib/moment/to-type.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/moment/valid.js");
/* harmony import */ var _creation_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./creation-data */ "./node_modules/moment/src/lib/moment/creation-data.js");
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../units/era */ "./node_modules/moment/src/lib/units/era.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../units/year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _units_week_year__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../units/week-year */ "./node_modules/moment/src/lib/units/week-year.js");
/* harmony import */ var _units_quarter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../units/quarter */ "./node_modules/moment/src/lib/units/quarter.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../units/day-of-month */ "./node_modules/moment/src/lib/units/day-of-month.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../units/day-of-year */ "./node_modules/moment/src/lib/units/day-of-year.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");
/* harmony import */ var _units_minute__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../units/minute */ "./node_modules/moment/src/lib/units/minute.js");
/* harmony import */ var _units_second__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../units/second */ "./node_modules/moment/src/lib/units/second.js");
/* harmony import */ var _units_millisecond__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../units/millisecond */ "./node_modules/moment/src/lib/units/millisecond.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _units_timezone__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../units/timezone */ "./node_modules/moment/src/lib/units/timezone.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Moment"].prototype;

















proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_1__["add"];
proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_2__["calendar"];
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_3__["clone"];
proto.diff = _diff__WEBPACK_IMPORTED_MODULE_5__["diff"];
proto.endOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__["endOf"];
proto.format = _format__WEBPACK_IMPORTED_MODULE_6__["format"];
proto.from = _from__WEBPACK_IMPORTED_MODULE_7__["from"];
proto.fromNow = _from__WEBPACK_IMPORTED_MODULE_7__["fromNow"];
proto.to = _to__WEBPACK_IMPORTED_MODULE_8__["to"];
proto.toNow = _to__WEBPACK_IMPORTED_MODULE_8__["toNow"];
proto.get = _get_set__WEBPACK_IMPORTED_MODULE_9__["stringGet"];
proto.invalidAt = _valid__WEBPACK_IMPORTED_MODULE_14__["invalidAt"];
proto.isAfter = _compare__WEBPACK_IMPORTED_MODULE_4__["isAfter"];
proto.isBefore = _compare__WEBPACK_IMPORTED_MODULE_4__["isBefore"];
proto.isBetween = _compare__WEBPACK_IMPORTED_MODULE_4__["isBetween"];
proto.isSame = _compare__WEBPACK_IMPORTED_MODULE_4__["isSame"];
proto.isSameOrAfter = _compare__WEBPACK_IMPORTED_MODULE_4__["isSameOrAfter"];
proto.isSameOrBefore = _compare__WEBPACK_IMPORTED_MODULE_4__["isSameOrBefore"];
proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_14__["isValid"];
proto.lang = _locale__WEBPACK_IMPORTED_MODULE_10__["lang"];
proto.locale = _locale__WEBPACK_IMPORTED_MODULE_10__["locale"];
proto.localeData = _locale__WEBPACK_IMPORTED_MODULE_10__["localeData"];
proto.max = _min_max__WEBPACK_IMPORTED_MODULE_11__["prototypeMax"];
proto.min = _min_max__WEBPACK_IMPORTED_MODULE_11__["prototypeMin"];
proto.parsingFlags = _valid__WEBPACK_IMPORTED_MODULE_14__["parsingFlags"];
proto.set = _get_set__WEBPACK_IMPORTED_MODULE_9__["stringSet"];
proto.startOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__["startOf"];
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_1__["subtract"];
proto.toArray = _to_type__WEBPACK_IMPORTED_MODULE_13__["toArray"];
proto.toObject = _to_type__WEBPACK_IMPORTED_MODULE_13__["toObject"];
proto.toDate = _to_type__WEBPACK_IMPORTED_MODULE_13__["toDate"];
proto.toISOString = _format__WEBPACK_IMPORTED_MODULE_6__["toISOString"];
proto.inspect = _format__WEBPACK_IMPORTED_MODULE_6__["inspect"];
if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return 'Moment<' + this.format() + '>';
    };
}
proto.toJSON = _to_type__WEBPACK_IMPORTED_MODULE_13__["toJSON"];
proto.toString = _format__WEBPACK_IMPORTED_MODULE_6__["toString"];
proto.unix = _to_type__WEBPACK_IMPORTED_MODULE_13__["unix"];
proto.valueOf = _to_type__WEBPACK_IMPORTED_MODULE_13__["valueOf"];
proto.creationData = _creation_data__WEBPACK_IMPORTED_MODULE_15__["creationData"];

// Era

proto.eraName = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraName"];
proto.eraNarrow = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraNarrow"];
proto.eraAbbr = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraAbbr"];
proto.eraYear = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraYear"];

// Year

proto.year = _units_year__WEBPACK_IMPORTED_MODULE_17__["getSetYear"];
proto.isLeapYear = _units_year__WEBPACK_IMPORTED_MODULE_17__["getIsLeapYear"];

// Week Year

proto.weekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getSetWeekYear"];
proto.isoWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getSetISOWeekYear"];

// Quarter

proto.quarter = proto.quarters = _units_quarter__WEBPACK_IMPORTED_MODULE_19__["getSetQuarter"];

// Month

proto.month = _units_month__WEBPACK_IMPORTED_MODULE_20__["getSetMonth"];
proto.daysInMonth = _units_month__WEBPACK_IMPORTED_MODULE_20__["getDaysInMonth"];

// Week

proto.week = proto.weeks = _units_week__WEBPACK_IMPORTED_MODULE_21__["getSetWeek"];
proto.isoWeek = proto.isoWeeks = _units_week__WEBPACK_IMPORTED_MODULE_21__["getSetISOWeek"];
proto.weeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getWeeksInYear"];
proto.weeksInWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getWeeksInWeekYear"];
proto.isoWeeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getISOWeeksInYear"];
proto.isoWeeksInISOWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getISOWeeksInISOWeekYear"];

// Day



proto.date = _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__["getSetDayOfMonth"];
proto.day = proto.days = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetDayOfWeek"];
proto.weekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetLocaleDayOfWeek"];
proto.isoWeekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetISODayOfWeek"];
proto.dayOfYear = _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__["getSetDayOfYear"];

// Hour

proto.hour = proto.hours = _units_hour__WEBPACK_IMPORTED_MODULE_25__["getSetHour"];

// Minute

proto.minute = proto.minutes = _units_minute__WEBPACK_IMPORTED_MODULE_26__["getSetMinute"];

// Second

proto.second = proto.seconds = _units_second__WEBPACK_IMPORTED_MODULE_27__["getSetSecond"];

// Millisecond

proto.millisecond = proto.milliseconds = _units_millisecond__WEBPACK_IMPORTED_MODULE_28__["getSetMillisecond"];

// Offset

proto.utcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["getSetOffset"];
proto.utc = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToUTC"];
proto.local = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToLocal"];
proto.parseZone = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToParsedOffset"];
proto.hasAlignedHourOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["hasAlignedHourOffset"];
proto.isDST = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isDaylightSavingTime"];
proto.isLocal = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isLocal"];
proto.isUtcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtcOffset"];
proto.isUtc = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtc"];
proto.isUTC = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtc"];

// Timezone

proto.zoneAbbr = _units_timezone__WEBPACK_IMPORTED_MODULE_30__["getZoneAbbr"];
proto.zoneName = _units_timezone__WEBPACK_IMPORTED_MODULE_30__["getZoneName"];

// Deprecations

proto.dates = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'dates accessor is deprecated. Use date instead.',
    _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__["getSetDayOfMonth"]
);
proto.months = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'months accessor is deprecated. Use month instead',
    _units_month__WEBPACK_IMPORTED_MODULE_20__["getSetMonth"]
);
proto.years = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'years accessor is deprecated. Use year instead',
    _units_year__WEBPACK_IMPORTED_MODULE_17__["getSetYear"]
);
proto.zone = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__["getSetZone"]
);
proto.isDSTShifted = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__["isDaylightSavingTimeShifted"]
);

/* harmony default export */ __webpack_exports__["default"] = (proto);


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/start-end-of.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/start-end-of.js ***!
  \************************************************************/
/*! exports provided: startOf, endOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return startOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return endOf; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");



var MS_PER_SECOND = 1000,
    MS_PER_MINUTE = 60 * MS_PER_SECOND,
    MS_PER_HOUR = 60 * MS_PER_MINUTE,
    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

// actual modulo - handles negative numbers (for dates before 1970):
function mod(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
}

function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return new Date(y, m, d).valueOf();
    }
}

function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return Date.UTC(y, m, d);
    }
}

function startOf(units) {
    var time, startOfDate;
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;
        case 'quarter':
            time = startOfDate(
                this.year(),
                this.month() - (this.month() % 3),
                1
            );
            break;
        case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;
        case 'week':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
            );
            break;
        case 'isoWeek':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
            );
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;
        case 'hour':
            time = this._d.valueOf();
            time -= mod(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
            );
            break;
        case 'minute':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_MINUTE);
            break;
        case 'second':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_SECOND);
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].updateOffset(this, true);
    return this;
}

function endOf(units) {
    var time, startOfDate;
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
        case 'quarter':
            time =
                startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3) + 3,
                    1
                ) - 1;
            break;
        case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
        case 'week':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                ) - 1;
            break;
        case 'isoWeek':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case 'hour':
            time = this._d.valueOf();
            time +=
                MS_PER_HOUR -
                mod(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                ) -
                1;
            break;
        case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod(time, MS_PER_MINUTE) - 1;
            break;
        case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod(time, MS_PER_SECOND) - 1;
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].updateOffset(this, true);
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/to-type.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to-type.js ***!
  \*******************************************************/
/*! exports provided: valueOf, unix, toDate, toArray, toObject, toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueOf", function() { return valueOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unix", function() { return unix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
}

function unix() {
    return Math.floor(this.valueOf() / 1000);
}

function toDate() {
    return new Date(this.valueOf());
}

function toArray() {
    var m = this;
    return [
        m.year(),
        m.month(),
        m.date(),
        m.hour(),
        m.minute(),
        m.second(),
        m.millisecond(),
    ];
}

function toObject() {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds(),
    };
}

function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/to.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to.js ***!
  \**************************************************/
/*! exports provided: to, toNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNow", function() { return toNow; });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");




function to(time, withoutSuffix) {
    if (
        this.isValid() &&
        ((Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_2__["isMoment"])(time) && time.isValid()) || Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(time).isValid())
    ) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])({ from: this, to: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow(withoutSuffix) {
    return this.to(Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(), withoutSuffix);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/valid.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/valid.js ***!
  \*****************************************************/
/*! exports provided: isValid, parsingFlags, invalidAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsingFlags", function() { return parsingFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidAt", function() { return invalidAt; });
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




function isValid() {
    return Object(_create_valid__WEBPACK_IMPORTED_MODULE_0__["isValid"])(this);
}

function parsingFlags() {
    return Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(this));
}

function invalidAt() {
    return Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(this).overflow;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/parse/regex.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/regex.js ***!
  \****************************************************/
/*! exports provided: match1, match2, match3, match4, match6, match1to2, match3to4, match5to6, match1to3, match1to4, match1to6, matchUnsigned, matchSigned, matchOffset, matchShortOffset, matchTimestamp, matchWord, addRegexToken, getParseRegexForToken, regexEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1", function() { return match1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match2", function() { return match2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match3", function() { return match3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match4", function() { return match4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match6", function() { return match6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to2", function() { return match1to2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match3to4", function() { return match3to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match5to6", function() { return match5to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to3", function() { return match1to3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to4", function() { return match1to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to6", function() { return match1to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchUnsigned", function() { return matchUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchSigned", function() { return matchSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchOffset", function() { return matchOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchShortOffset", function() { return matchShortOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchTimestamp", function() { return matchTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchWord", function() { return matchWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRegexToken", function() { return addRegexToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParseRegexForToken", function() { return getParseRegexForToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexEscape", function() { return regexEscape; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var match1 = /\d/, //       0 - 9
    match2 = /\d\d/, //      00 - 99
    match3 = /\d{3}/, //     000 - 999
    match4 = /\d{4}/, //    0000 - 9999
    match6 = /[+-]?\d{6}/, // -999999 - 999999
    match1to2 = /\d\d?/, //       0 - 99
    match3to4 = /\d\d\d\d?/, //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
    match1to3 = /\d{1,3}/, //       0 - 999
    match1to4 = /\d{1,4}/, //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
    matchUnsigned = /\d+/, //       0 - inf
    matchSigned = /[+-]?\d+/, //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    regexes;






regexes = {};

function addRegexToken(token, regex, strictRegex) {
    regexes[token] = Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_1__["default"])(regex)
        ? regex
        : function (isStrict, localeData) {
              return isStrict && strictRegex ? strictRegex : regex;
          };
}

function getParseRegexForToken(token, config) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(
        s
            .replace('\\', '')
            .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                matched,
                p1,
                p2,
                p3,
                p4
            ) {
                return p1 || p2 || p3 || p4;
            })
    );
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/parse/token.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/token.js ***!
  \****************************************************/
/*! exports provided: addParseToken, addWeekParseToken, addTimeToArrayFromToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParseToken", function() { return addParseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWeekParseToken", function() { return addWeekParseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTimeToArrayFromToken", function() { return addTimeToArrayFromToken; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




var tokens = {};

function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_1__["default"])(callback)) {
        func = function (input, array) {
            array[callback] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/aliases.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/aliases.js ***!
  \******************************************************/
/*! exports provided: addUnitAlias, normalizeUnits, normalizeObjectUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnitAlias", function() { return addUnitAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUnits", function() { return normalizeUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeObjectUnits", function() { return normalizeObjectUnits; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var aliases = {};

function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string'
        ? aliases[units] || aliases[units.toLowerCase()]
        : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/constants.js ***!
  \********************************************************/
/*! exports provided: YEAR, MONTH, DATE, HOUR, MINUTE, SECOND, MILLISECOND, WEEK, WEEKDAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR", function() { return YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH", function() { return MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE", function() { return DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUR", function() { return HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTE", function() { return MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECOND", function() { return MILLISECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK", function() { return WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKDAY", function() { return WEEKDAY; });
var YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6,
    WEEK = 7,
    WEEKDAY = 8;


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-month.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-month.js ***!
  \***********************************************************/
/*! exports provided: getSetDayOfMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfMonth", function() { return getSetDayOfMonth; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");









// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('D', ['DD', 2], 'Do', 'date');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('date', 'D');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('date', 9);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('D', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('DD', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict
        ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
        : locale._dayOfMonthOrdinalParseLenient;
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['D', 'DD'], _constants__WEBPACK_IMPORTED_MODULE_6__["DATE"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Do', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["DATE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.match(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"])[0]);
});

// MOMENTS

var getSetDayOfMonth = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Date', true);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-week.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-week.js ***!
  \**********************************************************/
/*! exports provided: defaultLocaleWeekdays, defaultLocaleWeekdaysShort, defaultLocaleWeekdaysMin, localeWeekdays, localeWeekdaysShort, localeWeekdaysMin, localeWeekdaysParse, getSetDayOfWeek, getSetLocaleDayOfWeek, getSetISODayOfWeek, weekdaysRegex, weekdaysShortRegex, weekdaysMinRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdays", function() { return defaultLocaleWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdaysShort", function() { return defaultLocaleWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdaysMin", function() { return defaultLocaleWeekdaysMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdays", function() { return localeWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysShort", function() { return localeWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysMin", function() { return localeWeekdaysMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysParse", function() { return localeWeekdaysParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfWeek", function() { return getSetDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetLocaleDayOfWeek", function() { return getSetLocaleDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISODayOfWeek", function() { return getSetISODayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysRegex", function() { return weekdaysRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysShortRegex", function() { return weekdaysShortRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysMinRegex", function() { return weekdaysMinRegex; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");












// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('d', 0, 'do', 'day');

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('e', 0, 0, 'weekday');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('E', 0, 0, 'isoWeekday');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('day', 'd');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('weekday', 'e');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeekday', 'E');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('day', 11);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('weekday', 11);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeekday', 11);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('d', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('e', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('E', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__["default"])(config).invalidWeekday = input;
    }
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES
function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
}

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
    ),
    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    defaultWeekdaysRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"],
    defaultWeekdaysShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"],
    defaultWeekdaysMinRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"];



function localeWeekdays(m, format) {
    var weekdays = Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_6__["default"])(this._weekdays)
        ? this._weekdays
        : this._weekdays[
              m && m !== true && this._weekdays.isFormat.test(format)
                  ? 'format'
                  : 'standalone'
          ];
    return m === true
        ? shiftWeekdays(weekdays, this._week.dow)
        : m
        ? weekdays[m.day()]
        : weekdays;
}

function localeWeekdaysShort(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysShort, this._week.dow)
        : m
        ? this._weekdaysShort[m.day()]
        : this._weekdaysShort;
}

function localeWeekdaysMin(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysMin, this._week.dow)
        : m
        ? this._weekdaysMin[m.day()]
        : this._weekdaysMin;
}

function handleStrictParse(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ''
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
                '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._shortWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._minWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
        }
        if (!this._weekdaysParse[i]) {
            regex =
                '^' +
                this.weekdays(mom, '') +
                '|^' +
                this.weekdaysShort(mom, '') +
                '|^' +
                this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'dddd' &&
            this._fullWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'ddd' &&
            this._shortWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'dd' &&
            this._minWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex;
    }
}

function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex;
    }
}

function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex;
    }
}

function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
        minp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdaysMin(mom, ''));
        shortp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdaysShort(mom, ''));
        longp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdays(mom, ''));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._weekdaysShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
    this._weekdaysMinStrictRegex = new RegExp(
        '^(' + minPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-year.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-year.js ***!
  \**********************************************************/
/*! exports provided: getSetDayOfYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfYear", function() { return getSetDayOfYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");







// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('dayOfYear', 'DDD');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('dayOfYear', 4);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('DDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to3"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('DDDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match3"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear(input) {
    var dayOfYear =
        Math.round(
            (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
        ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/era.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/units/era.js ***!
  \**************************************************/
/*! exports provided: localeEras, localeErasParse, localeErasConvertYear, getEraName, getEraNarrow, getEraAbbr, getEraYear, erasNameRegex, erasAbbrRegex, erasNarrowRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeEras", function() { return localeEras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeErasParse", function() { return localeErasParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeErasConvertYear", function() { return localeErasConvertYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraName", function() { return getEraName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraNarrow", function() { return getEraNarrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraAbbr", function() { return getEraAbbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraYear", function() { return getEraYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasNameRegex", function() { return erasNameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasAbbrRegex", function() { return erasAbbrRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasNarrowRegex", function() { return erasNarrowRegex; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");









Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('N', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NN', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNN', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNNN', 0, 0, 'eraName');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNNNN', 0, 0, 'eraNarrow');

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['y', 1], 'yo', 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yy', 2], 0, 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yyy', 3], 0, 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yyyy', 4], 0, 'eraYear');

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('N', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NN', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNN', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNNN', matchEraName);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNNNN', matchEraNarrow);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
    input,
    array,
    config,
    token
) {
    var era = config._locale.erasParse(input, token, config._strict);
    if (era) {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__["default"])(config).era = era;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__["default"])(config).invalidEra = input;
    }
});

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('y', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yyyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yo', matchEraYearOrdinal);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['y', 'yy', 'yyy', 'yyyy'], _constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['yo'], function (input, array, config, token) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
    }

    if (config._locale.eraYearOrdinalParse) {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]] = config._locale.eraYearOrdinalParse(input, match);
    } else {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]] = parseInt(input, 10);
    }
});

function localeEras(m, format) {
    var i,
        l,
        date,
        eras = this._eras || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_5__["getLocale"])('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
        switch (typeof eras[i].since) {
            case 'string':
                // truncate time
                date = Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].since).startOf('day');
                eras[i].since = date.valueOf();
                break;
        }

        switch (typeof eras[i].until) {
            case 'undefined':
                eras[i].until = +Infinity;
                break;
            case 'string':
                // truncate time
                date = Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].until).startOf('day').valueOf();
                eras[i].until = date.valueOf();
                break;
        }
    }
    return eras;
}

function localeErasParse(eraName, format, strict) {
    var i,
        l,
        eras = this.eras(),
        name,
        abbr,
        narrow;
    eraName = eraName.toUpperCase();

    for (i = 0, l = eras.length; i < l; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();

        if (strict) {
            switch (format) {
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNN':
                    if (name === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNNN':
                    if (narrow === eraName) {
                        return eras[i];
                    }
                    break;
            }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
        }
    }
}

function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
        return Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(era.since).year();
    } else {
        return Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(era.since).year() + (year - era.offset) * dir;
    }
}

function getEraName() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
        }
    }

    return '';
}

function getEraNarrow() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
        }
    }

    return '';
}

function getEraAbbr() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
        }
    }

    return '';
}

function getEraYear() {
    var i,
        l,
        dir,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        dir = eras[i].since <= eras[i].until ? +1 : -1;

        // truncate time
        val = this.startOf('day').valueOf();

        if (
            (eras[i].since <= val && val <= eras[i].until) ||
            (eras[i].until <= val && val <= eras[i].since)
        ) {
            return (
                (this.year() - Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].since).year()) * dir +
                eras[i].offset
            );
        }
    }

    return this.year();
}

function erasNameRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasNameRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
}

function erasAbbrRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasAbbrRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
}

function erasNarrowRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasNarrowRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
}

function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
}

function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
}

function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
}

function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"];
}

function computeErasParse() {
    var abbrPieces = [],
        namePieces = [],
        narrowPieces = [],
        mixedPieces = [],
        i,
        l,
        eras = this.eras();

    for (i = 0, l = eras.length; i < l; ++i) {
        namePieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].name));
        abbrPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].abbr));
        narrowPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].narrow));

        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].name));
        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].abbr));
        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].narrow));
    }

    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
    this._erasNarrowRegex = new RegExp(
        '^(' + narrowPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/hour.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/hour.js ***!
  \***************************************************/
/*! exports provided: localeIsPM, defaultLocaleMeridiemParse, getSetHour, localeMeridiem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeIsPM", function() { return localeIsPM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMeridiemParse", function() { return defaultLocaleMeridiemParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetHour", function() { return getSetHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMeridiem", function() { return localeMeridiem; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");











// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('H', ['HH', 2], 0, 'hour');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('h', ['hh', 2], 0, hFormat);
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('k', ['kk', 2], 0, kFormat);

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('hmmss', 0, 0, function () {
    return (
        '' +
        hFormat.apply(this) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.seconds(), 2)
    );
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Hmm', 0, 0, function () {
    return '' + this.hours() + Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Hmmss', 0, 0, function () {
    return (
        '' +
        this.hours() +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.seconds(), 2)
    );
});

function meridiem(token, lowercase) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(token, 0, 0, function () {
        return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
        );
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('hour', 'h');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('hour', 13);

// PARSING

function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('a', matchMeridiem);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('A', matchMeridiem);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('H', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('h', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('k', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('HH', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hh', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('kk', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3to4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match5to6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3to4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match5to6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['H', 'HH'], _constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['k', 'kk'], function (input, array, config) {
    var kInput = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input);
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = kInput === 24 ? 0 : kInput;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['h', 'hh'], function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input);
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos));
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos2));
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos));
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos2));
});

// LOCALES

function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Hours', true);

function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/millisecond.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/millisecond.js ***!
  \**********************************************************/
/*! exports provided: getSetMillisecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMillisecond", function() { return getSetMillisecond; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");









// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSS', 3], 0, 'millisecond');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('millisecond', 'ms');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('millisecond', 16);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('S', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('SS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('SSS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3"]);

var token, getSetMillisecond;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])(token, _parse_regex__WEBPACK_IMPORTED_MODULE_4__["matchUnsigned"]);
}

function parseMs(input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MILLISECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(token, parseMs);
}

getSetMillisecond = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Milliseconds', false);




/***/ }),

/***/ "./node_modules/moment/src/lib/units/minute.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/minute.js ***!
  \*****************************************************/
/*! exports provided: getSetMinute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMinute", function() { return getSetMinute; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('m', ['mm', 2], 0, 'minute');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('minute', 'm');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('minute', 14);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('m', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('mm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['m', 'mm'], _constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]);

// MOMENTS

var getSetMinute = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Minutes', false);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/month.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/month.js ***!
  \****************************************************/
/*! exports provided: daysInMonth, defaultLocaleMonths, defaultLocaleMonthsShort, localeMonths, localeMonthsShort, localeMonthsParse, setMonth, getSetMonth, getDaysInMonth, monthsShortRegex, monthsRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInMonth", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMonths", function() { return defaultLocaleMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMonthsShort", function() { return defaultLocaleMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonths", function() { return localeMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonthsShort", function() { return localeMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonthsParse", function() { return localeMonthsParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMonth", function() { return setMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMonth", function() { return getSetMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsShortRegex", function() { return monthsShortRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsRegex", function() { return monthsRegex; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_mod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/mod */ "./node_modules/moment/src/lib/utils/mod.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");


















function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = Object(_utils_mod__WEBPACK_IMPORTED_MODULE_12__["default"])(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1
        ? Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__["isLeapYear"])(year)
            ? 29
            : 28
        : 31 - ((modMonth % 7) % 2);
}

// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_3__["addUnitAlias"])('month', 'M');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('month', 8);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('M', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MM', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['M', 'MM'], function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["MONTH"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) - 1;
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[_constants__WEBPACK_IMPORTED_MODULE_8__["MONTH"]] = month;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__["default"])(config).invalidMonth = input;
    }
});

// LOCALES

var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
    ),
    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
        '_'
    ),
    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    defaultMonthsShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchWord"],
    defaultMonthsRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchWord"];



function localeMonths(m, format) {
    if (!m) {
        return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._months)
            ? this._months
            : this._months['standalone'];
    }
    return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._months)
        ? this._months[m.month()]
        : this._months[
              (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                  ? 'format'
                  : 'standalone'
          ][m.month()];
}

function localeMonthsShort(m, format) {
    if (!m) {
        return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort['standalone'];
    }
    return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._monthsShort)
        ? this._monthsShort[m.month()]
        : this._monthsShort[
              MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
          ][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
                '^' + this.months(mom, '').replace('.', '') + '$',
                'i'
            );
            this._shortMonthsParse[i] = new RegExp(
                '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                'i'
            );
        }
        if (!strict && !this._monthsParse[i]) {
            regex =
                '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'MMMM' &&
            this._longMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'MMM' &&
            this._shortMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_11__["default"])(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth(value) {
    if (value != null) {
        setMonth(this, value);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].updateOffset(this, true);
        return this;
    } else {
        return Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(this, 'Month');
    }
}

function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
}

function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex;
    }
}

function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict
            ? this._monthsStrictRegex
            : this._monthsRegex;
    }
}

function computeMonthsParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(shortPieces[i]);
        longPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._monthsShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/offset.js ***!
  \*****************************************************/
/*! exports provided: cloneWithOffset, getSetOffset, getSetZone, setOffsetToUTC, setOffsetToLocal, setOffsetToParsedOffset, hasAlignedHourOffset, isDaylightSavingTime, isDaylightSavingTimeShifted, isLocal, isUtcOffset, isUtc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneWithOffset", function() { return cloneWithOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetOffset", function() { return getSetOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetZone", function() { return getSetZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToUTC", function() { return setOffsetToUTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToLocal", function() { return setOffsetToLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToParsedOffset", function() { return setOffsetToParsedOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAlignedHourOffset", function() { return hasAlignedHourOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTime", function() { return isDaylightSavingTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTimeShifted", function() { return isDaylightSavingTimeShifted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocal", function() { return isLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUtcOffset", function() { return isUtcOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUtc", function() { return isUtc; });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/add-subtract */ "./node_modules/moment/src/lib/moment/add-subtract.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _create_from_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/compare-arrays */ "./node_modules/moment/src/lib/utils/compare-arrays.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
















// FORMATTING

function offset(token, separator) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_4__["addFormatToken"])(token, 0, 0, function () {
        var offset = this.utcOffset(),
            sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return (
            sign +
            Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(~~(offset / 60), 2) +
            separator +
            Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(~~offset % 60, 2)
        );
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('Z', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('ZZ', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"], input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher),
        chunk,
        parts,
        minutes;

    if (matches === null) {
        return null;
    }

    chunk = matches[matches.length - 1] || [];
    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_11__["default"])(parts[2]);

    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff =
            (Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_3__["isMoment"])(input) || Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_10__["default"])(input)
                ? input.valueOf()
                : Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset(res, false);
        return res;
    } else {
        return Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).local();
    }
}

function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
_utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"], input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__["addSubtract"])(
                    this,
                    Object(_duration_create__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(input - offset, 'm'),
                    1,
                    false
                );
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                _utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone(input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset() {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchOffset"], this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        } else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime() {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted() {
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__["default"])(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {},
        other;

    Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_3__["copyConfig"])(c, this);
    c = Object(_create_from_anything__WEBPACK_IMPORTED_MODULE_8__["prepareConfig"])(c);

    if (c._a) {
        other = c._isUTC ? Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])(c._a) : Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(c._a);
        this._isDSTShifted =
            this.isValid() && Object(_utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__["default"])(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal() {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
}

function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/priorities.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/priorities.js ***!
  \*********************************************************/
/*! exports provided: addUnitPriority, getPrioritizedUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnitPriority", function() { return addUnitPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrioritizedUnits", function() { return getPrioritizedUnits; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [],
        u;
    for (u in unitsObj) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] });
        }
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/quarter.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/quarter.js ***!
  \******************************************************/
/*! exports provided: getSetQuarter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetQuarter", function() { return getSetQuarter; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('Q', 0, 'Qo', 'quarter');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('quarter', 'Q');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('quarter', 7);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('Q', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])('Q', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["MONTH"]] = (Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter(input) {
    return input == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((input - 1) * 3 + (this.month() % 3));
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/second.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/second.js ***!
  \*****************************************************/
/*! exports provided: getSetSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetSecond", function() { return getSetSecond; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('s', ['ss', 2], 0, 'second');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('second', 's');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('second', 15);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('s', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('ss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['s', 'ss'], _constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]);

// MOMENTS

var getSetSecond = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Seconds', false);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/timestamp.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timestamp.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");





// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('X', 0, 0, 'unix');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('x', 0, 0, 'valueOf');

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('x', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('X', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchTimestamp"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])('x', function (input, array, config) {
    config._d = new Date(Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_3__["default"])(input));
});


/***/ }),

/***/ "./node_modules/moment/src/lib/units/timezone.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timezone.js ***!
  \*******************************************************/
/*! exports provided: getZoneAbbr, getZoneName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneAbbr", function() { return getZoneAbbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneName", function() { return getZoneName; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");


// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('z', 0, 0, 'zoneAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/units.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/units.js ***!
  \****************************************************/
/*! exports provided: normalizeUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _day_of_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-of-month */ "./node_modules/moment/src/lib/units/day-of-month.js");
/* harmony import */ var _day_of_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _day_of_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-of-year */ "./node_modules/moment/src/lib/units/day-of-year.js");
/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hour */ "./node_modules/moment/src/lib/units/hour.js");
/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./millisecond */ "./node_modules/moment/src/lib/units/millisecond.js");
/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minute */ "./node_modules/moment/src/lib/units/minute.js");
/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _quarter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quarter */ "./node_modules/moment/src/lib/units/quarter.js");
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./second */ "./node_modules/moment/src/lib/units/second.js");
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timestamp */ "./node_modules/moment/src/lib/units/timestamp.js");
/* harmony import */ var _timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timezone */ "./node_modules/moment/src/lib/units/timezone.js");
/* harmony import */ var _week_year__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./week-year */ "./node_modules/moment/src/lib/units/week-year.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeUnits", function() { return _aliases__WEBPACK_IMPORTED_MODULE_15__["normalizeUnits"]; });

// Side effect imports





















/***/ }),

/***/ "./node_modules/moment/src/lib/units/week-calendar-utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-calendar-utils.js ***!
  \******************************************************************/
/*! exports provided: dayOfYearFromWeeks, weekOfYear, weeksInYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfYearFromWeeks", function() { return dayOfYearFromWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekOfYear", function() { return weekOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weeksInYear", function() { return weeksInYear; });
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");



// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"])(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(resYear) + dayOfYear;
    } else if (dayOfYear > Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear,
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear,
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year) - weekOffset + weekOffsetNext) / 7;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/week-year.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-year.js ***!
  \********************************************************/
/*! exports provided: getSetWeekYear, getSetISOWeekYear, getISOWeeksInYear, getISOWeeksInISOWeekYear, getWeeksInYear, getWeeksInWeekYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetWeekYear", function() { return getSetWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISOWeekYear", function() { return getSetISOWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeeksInYear", function() { return getISOWeeksInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeeksInISOWeekYear", function() { return getISOWeeksInISOWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeeksInYear", function() { return getWeeksInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeeksInWeekYear", function() { return getWeeksInWeekYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");










// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken(token, getter) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg', 'weekYear');
addWeekYearFormatToken('ggggg', 'weekYear');
addWeekYearFormatToken('GGGG', 'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('weekYear', 'gg');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeekYear', 'GG');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('weekYear', 1);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeekYear', 1);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('G', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('g', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('gg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('gggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GGGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ggggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 2)] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(input);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['gg', 'GG'], function (input, week, config, token) {
    week[token] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
    );
}

function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
    );
}

function getISOWeeksInYear() {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.year(), 1, 4);
}

function getISOWeeksInISOWeekYear() {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.isoWeekYear(), 1, 4);
}

function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.year(), weekInfo.dow, weekInfo.doy);
}

function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.weekYear(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weekOfYear"])(this, dow, doy).year;
    } else {
        weeksTarget = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["dayOfYearFromWeeks"])(weekYear, week, weekday, dow, doy),
        date = Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_8__["createUTCDate"])(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/week.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week.js ***!
  \***************************************************/
/*! exports provided: localeWeek, defaultLocaleWeek, localeFirstDayOfWeek, localeFirstDayOfYear, getSetWeek, getSetISOWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeek", function() { return localeWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeek", function() { return defaultLocaleWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeFirstDayOfWeek", function() { return localeFirstDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeFirstDayOfYear", function() { return localeFirstDayOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetWeek", function() { return getSetWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISOWeek", function() { return getSetISOWeek; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('w', ['ww', 2], 'wo', 'week');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('week', 'w');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeek', 'W');

// PRIORITIES

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('week', 5);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeek', 5);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('w', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ww', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('W', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('WW', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['w', 'ww', 'W', 'WW'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 1)] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

// LOCALES

function localeWeek(mom) {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__["weekOfYear"])(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6, // The week that contains Jan 6th is the first week of the year.
};

function localeFirstDayOfWeek() {
    return this._week.dow;
}

function localeFirstDayOfYear() {
    return this._week.doy;
}

// MOMENTS

function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek(input) {
    var week = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__["weekOfYear"])(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/year.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/year.js ***!
  \***************************************************/
/*! exports provided: daysInYear, isLeapYear, getSetYear, getIsLeapYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInYear", function() { return daysInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetYear", function() { return getSetYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLeapYear", function() { return getIsLeapYear; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"]; });

/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");












// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__["default"])(y, 4) : '+' + y;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYY', 4], 0, 'year');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYYY', 5], 0, 'year');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('year', 'y');

// PRIORITIES

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('year', 1);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Y', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['YYYYY', 'YYYYYY'], _constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('YYYY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] =
        input.length === 2 ? _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input) : Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('YY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Y', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"])(year) ? 366 : 365;
}



// HOOKS

_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear = function (input) {
    return Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) + (Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('FullYear', true);

function getIsLeapYear() {
    return Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"])(this.year());
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-ceil.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-ceil.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absCeil; });
function absCeil(number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-floor.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-floor.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absFloor; });
function absFloor(number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-round.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-round.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absRound; });
function absRound(number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/compare-arrays.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/compare-arrays.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareArrays; });
/* harmony import */ var _to_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-int */ "./node_modules/moment/src/lib/utils/to-int.js");


// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if (
            (dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && Object(_to_int__WEBPACK_IMPORTED_MODULE_0__["default"])(array1[i]) !== Object(_to_int__WEBPACK_IMPORTED_MODULE_0__["default"])(array2[i]))
        ) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/defaults.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/defaults.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaults; });
// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/deprecate.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/deprecate.js ***!
  \********************************************************/
/*! exports provided: deprecate, deprecateSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecateSimple", function() { return deprecateSimple; });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");




function warn(msg) {
    if (
        _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].suppressDeprecationWarnings === false &&
        typeof console !== 'undefined' &&
        console.warn
    ) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return Object(_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        if (_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler != null) {
            _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [],
                arg,
                i,
                key;
            for (i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (key in arguments[0]) {
                        if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_2__["default"])(arguments[0], key)) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(
                msg +
                    '\nArguments: ' +
                    Array.prototype.slice.call(args).join('') +
                    '\n' +
                    new Error().stack
            );
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler != null) {
        _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].suppressDeprecationWarnings = false;
_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler = null;


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/extend.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/extend.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extend; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


function extend(a, b) {
    for (var i in b) {
        if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, i)) {
            a[i] = b[i];
        }
    }

    if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, 'toString')) {
        a.toString = b.toString;
    }

    if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/has-own-prop.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/has-own-prop.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasOwnProp; });
function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/hooks.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/hooks.js ***!
  \****************************************************/
/*! exports provided: hooks, setHookCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return hooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHookCallback", function() { return setHookCallback; });


var hookCallback;

function hooks() {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback(callback) {
    hookCallback = callback;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/index-of.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/index-of.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return indexOf; });
var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-array.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-array.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isArray; });
function isArray(input) {
    return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-calendar-spec.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-calendar-spec.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isCalendarSpec; });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ "./node_modules/moment/src/lib/utils/is-object.js");




function isCalendarSpec(input) {
    var objectTest = Object(_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(input) && !Object(_is_object_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
        propertyTest = false,
        properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(input, property);
    }

    return objectTest && propertyTest;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-date.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-date.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDate; });
function isDate(input) {
    return (
        input instanceof Date ||
        Object.prototype.toString.call(input) === '[object Date]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-function.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-function.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFunction; });
function isFunction(input) {
    return (
        (typeof Function !== 'undefined' && input instanceof Function) ||
        Object.prototype.toString.call(input) === '[object Function]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-leap-year.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-leap-year.js ***!
  \***********************************************************/
/*! exports provided: isLeapYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return isLeapYear; });
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-moment-input.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-moment-input.js ***!
  \**************************************************************/
/*! exports provided: isMomentInput, isMomentInputObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMomentInput", function() { return isMomentInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMomentInputObject", function() { return isMomentInputObject; });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _is_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-string */ "./node_modules/moment/src/lib/utils/is-string.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-array */ "./node_modules/moment/src/lib/utils/is-array.js");









// type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
function isMomentInput(input) {
    return (
        Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_6__["isMoment"])(input) ||
        Object(_is_date__WEBPACK_IMPORTED_MODULE_3__["default"])(input) ||
        Object(_is_string__WEBPACK_IMPORTED_MODULE_5__["default"])(input) ||
        Object(_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(input) ||
        isNumberOrStringArray(input) ||
        isMomentInputObject(input) ||
        input === null ||
        input === undefined
    );
}

function isMomentInputObject(input) {
    var objectTest = Object(_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(input) && !Object(_is_object_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
        propertyTest = false,
        properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(input, property);
    }

    return objectTest && propertyTest;
}

function isNumberOrStringArray(input) {
    var arrayTest = Object(_is_array__WEBPACK_IMPORTED_MODULE_7__["default"])(input),
        dataTypeTest = false;
    if (arrayTest) {
        dataTypeTest =
            input.filter(function (item) {
                return !Object(_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(item) && Object(_is_string__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
            }).length === 0;
    }
    return arrayTest && dataTypeTest;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-number.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-number.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNumber; });
function isNumber(input) {
    return (
        typeof input === 'number' ||
        Object.prototype.toString.call(input) === '[object Number]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-object-empty.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object-empty.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectEmpty; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
    } else {
        var k;
        for (k in obj) {
            if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, k)) {
                return false;
            }
        }
        return true;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-object.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
        input != null &&
        Object.prototype.toString.call(input) === '[object Object]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-string.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-string.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isString; });
function isString(input) {
    return typeof input === 'string' || input instanceof String;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-undefined.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-undefined.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isUndefined; });
function isUndefined(input) {
    return input === void 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/keys.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i,
            res = [];
        for (i in obj) {
            if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/map.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/map.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/mod.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/mod.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mod; });
function mod(n, x) {
    return ((n % x) + x) % x;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/some.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/some.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return some; });
var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this),
            len = t.length >>> 0,
            i;

        for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/to-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/to-int.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toInt; });
/* harmony import */ var _abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");


function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = Object(_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(coercedNumber);
    }

    return value;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/zero-fill.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/zero-fill.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zeroFill; });
function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (
        (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
        absNumber
    );
}


/***/ }),

/***/ "./node_modules/moment/src/moment.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/src/moment.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/moment/moment */ "./node_modules/moment/src/lib/moment/moment.js");
/* harmony import */ var _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/moment/calendar */ "./node_modules/moment/src/lib/moment/calendar.js");
/* harmony import */ var _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/locale/locale */ "./node_modules/moment/src/lib/locale/locale.js");
/* harmony import */ var _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/duration/duration */ "./node_modules/moment/src/lib/duration/duration.js");
/* harmony import */ var _lib_units_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/units/units */ "./node_modules/moment/src/lib/units/units.js");
/* harmony import */ var _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
//! moment.js
//! version : 2.25.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com



_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].version = '2.25.1';













Object(_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["setHookCallback"])(_lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createLocal"]);

_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].fn = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["momentPrototype"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].min = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["min"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].max = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["max"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].now = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["now"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].utc = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createUTC"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].unix = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createUnix"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].months = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listMonths"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isDate = _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__["default"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].locale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["getSetGlobalLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].invalid = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createInvalid"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].duration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["createDuration"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isMoment = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdays = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdays"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].parseZone = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createInZone"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].localeData = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["getLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isDuration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["isDuration"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].monthsShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listMonthsShort"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdaysMin = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdaysMin"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].defineLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["defineLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].updateLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["updateLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].locales = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listLocales"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdaysShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdaysShort"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].normalizeUnits = _lib_units_units__WEBPACK_IMPORTED_MODULE_5__["normalizeUnits"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].relativeTimeRounding = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["getSetRelativeTimeRounding"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].relativeTimeThreshold = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["getSetRelativeTimeThreshold"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].calendarFormat = _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__["getCalendarFormat"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].prototype = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["momentPrototype"];

// currently HTML5 input type only supports 24-hour formats
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM', // <input type="month" />
};

/* harmony default export */ __webpack_exports__["default"] = (_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"]);


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/sections/about/AboutSection.jsx":
/*!********************************************************!*\
  !*** ./src/components/sections/about/AboutSection.jsx ***!
  \********************************************************/
/*! exports provided: AboutSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSection", function() { return AboutSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _ui_library_hobby_Hobby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui_library/hobby/Hobby */ "./src/components/ui_library/hobby/Hobby.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/about/AboutSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__Container",
  componentId: "t5p5rt-0"
})(["width:100%;background-color:#1B262C;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__Wrapper",
  componentId: "t5p5rt-1"
})(["width:calc(80% + (0.9rem * 2));height:100%;margin-left:auto;margin-right:auto;display:grid;grid-template-columns:repeat(3,0.9rem) 25.5rem 0.9rem auto 0.9rem;grid-template-rows:1fr;@media ", "{display:flex;flex-direction:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptopL);
const ExperienceContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__ExperienceContainer",
  componentId: "t5p5rt-2"
})(["padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:1em;border-style:solid;border-color:#1B262C;border-width:1px;background-color:#FFFFFF;display:flex;flex-direction:column;justify-content:center;@media ", "{margin-top:2rem;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptopL);
const InterestsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__InterestsContainer",
  componentId: "t5p5rt-3"
})(["padding:4rem 2rem;display:flex;flex-direction:column;justify-content:center;align-items:center;@media ", "{padding:2rem 1rem;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanTablet);
const HobbiesContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__HobbiesContainer",
  componentId: "t5p5rt-4"
})(["margin-top:2rem;display:flex;"]);
const VerticalBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__VerticalBar",
  componentId: "t5p5rt-5"
})(["width:0.9rem;height:100%;@media ", "{display:none;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptopL);
const WhiteVerticalBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalBar).withConfig({
  displayName: "AboutSection__WhiteVerticalBar",
  componentId: "t5p5rt-6"
})(["background-color:#FFFFFF;"]);
const ColoredVerticalBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalBar).withConfig({
  displayName: "AboutSection__ColoredVerticalBar",
  componentId: "t5p5rt-7"
})(["background-color:#1B262C;"]);
const YearMonthDayLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "AboutSection__YearMonthDayLabel",
  componentId: "t5p5rt-8"
})(["color:#1B262C;font-size:4em;@media ", "{font-size:3em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanTablet);
const ExperienceInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "AboutSection__ExperienceInfo",
  componentId: "t5p5rt-9"
})(["margin-top:1.4em;color:#1B262C;font-size:1.5em;@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanTablet);
const InterestHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "AboutSection__InterestHeader",
  componentId: "t5p5rt-10"
})(["color:#E1E2E7;font-size:1.5em;text-align:center;@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanTablet);
class AboutSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  getExperienceDate() {
    let today = new Date();
    let startDate = new Date(2015, 4, 1);
    return Math.abs(today - startDate);
  }

  render() {
    let experience = this.getExperienceDate();
    console.log(experience);
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }, __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }
    }), __jsx(ColoredVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }), __jsx(ExperienceContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }, __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 32
      }
    }, "4Y"), "EARS"), __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 32
      }
    }, "7M"), "ONTHS"), __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 32
      }
    }, "5D"), "AYS"), __jsx(ExperienceInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, "in the professional software development industry")), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }
    }), __jsx(InterestsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }
    }, __jsx(InterestHeader, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, "My hobbies and interests beside", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 60
      }
    }), "software development"), __jsx(HobbiesContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }, __jsx(_ui_library_hobby_Hobby__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Run",
      logoSrc: "/images/ic_run.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 15
      }
    }), __jsx(_ui_library_hobby_Hobby__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Hike",
      logoSrc: "/images/ic_hike.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }), __jsx(_ui_library_hobby_Hobby__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Swim",
      logoSrc: "/images/ic_swim.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    }))), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ })

})
//# sourceMappingURL=index.js.51cd49cb32d8de44fc63.hot-update.js.map