(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjohneris%2FDocuments%2Fworkspace%2Freactjs%2Fjohnerisvillanueva-reactjs%2Fsrc%2Fpages%2Findex.jsx!./":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjohneris%2FDocuments%2Fworkspace%2Freactjs%2Fjohnerisvillanueva-reactjs%2Fsrc%2Fpages%2Findex.jsx ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./src/pages/index.jsx */ "./src/pages/index.jsx")
      if(true) {
        module.hot.accept(/*! ./src/pages/index.jsx */ "./src/pages/index.jsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/index.jsx */ "./src/pages/index.jsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-particles-js/cjs/particles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/cjs/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/PolygonMaskMoveType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js")},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(11));t.Particles=i.default,n(r(7)),n(r(9)),n(r(8)),n(r(3)),n(r(4)),n(r(2)),n(r(17)),n(r(18)),n(r(1)),n(r(6)),n(r(19)),n(r(5)),t.default=i.default},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=p(r(0)),y=r(0),v=f(r(12)),b=r(13),h=r(14),m=r(15),_=r(16),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,r,n,p,f=(t=y,function(){var e,r=c(t);if(u()){var n=c(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=f.call(this,e)).state={canvas:void 0,library:void 0},t.loadCanvas=t.loadCanvas.bind(a(t)),t}return r=y,(n=[{key:"buildParticlesLibrary",value:function(e,t){try{if(void 0===window)return null}catch(e){return null}var r=new m.Options;return r.load(h.defaultParams),r.load(t),_.tsParticles.dom(),new b.Container(e,r)}},{key:"refresh",value:function(e){var t=this,r=this.state.canvas;r&&(this.destroy(),this.setState({library:this.buildParticlesLibrary(e.id,e.params)},(function(){t.loadCanvas(r)})))}},{key:"destroy",value:function(){this.state.library&&this.state.library.destroy()}},{key:"loadCanvas",value:function(e){var t=this;e&&this.setState({canvas:e},(function(){var r=t.state.library;r&&(r.canvas.loadCanvas(e),r.start())}))}},{key:"shouldComponentUpdate",value:function(e){return!v.default(e,this.props)}},{key:"componentDidUpdate",value:function(){this.refresh(this.props)}},{key:"forceUpdate",value:function(){this.refresh(this.props),i(c(y.prototype),"forceUpdate",this).call(this)}},{key:"componentDidMount",value:function(){this.setState({library:this.buildParticlesLibrary(this.props.id,this.props.params)})}},{key:"componentWillUnmount",value:function(){this.destroy(),this.setState({library:void 0})}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.className,o=e.canvasClassName,i=e.id;return d.createElement("div",{className:n,id:i},d.createElement("canvas",{ref:this.loadCanvas,className:o,style:Object.assign(Object.assign({},this.props.style),{width:t,height:r})}))}}])&&o(r.prototype,n),p&&o(r,p),y}(y.Component);t.default=g,g.defaultProps={width:"100%",height:"100%",params:h.defaultParams,style:{},id:"tsparticles"}},function(e,t){e.exports=__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Classes/Container */ "./node_modules/tsparticles/dist/Classes/Container.js")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(2),i=r(3),s=r(4),a=r(5),u=r(6),c=r(7),l=r(8),p=r(9);t.defaultParams={particles:{number:{value:40,max:-1,density:{enable:!1,value_area:1200}},color:{value:"#FFF"},shape:{type:n.ShapeType.circle,stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:40,size_min:0,sync:!1}},line_linked:{enable:!0,distance:150,color:"#FFF",opacity:.6,width:1,shadow:{enable:!1,blur:5,color:"lime"}},move:{enable:!0,speed:3,direction:p.MoveDirection.none,random:!1,straight:!1,out_mode:l.OutMode.bounce,bounce:!0,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detectsOn:c.InteractivityDetect.canvas,events:{onHover:{enable:!1,mode:a.HoverMode.grab},onClick:{enable:!1,mode:u.ClickMode.repulse},resize:!0},modes:{grab:{distance:180,line_linked:{opacity:.35}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:100,duration:5},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fps_limit:999,polygon:{enable:!1,scale:1,type:o.PolygonMaskType.inline,inline:{arrangement:i.PolygonMaskInlineArrangement.onePerPoint},draw:{enable:!1,stroke:{width:.5,color:"rgba(255, 255, 255, .1)"}},move:{radius:10,type:s.PolygonMaskMoveType.path},url:""}}},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Classes/Options/Options */ "./node_modules/tsparticles/dist/Classes/Options/Options.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/index */ "./node_modules/tsparticles/dist/index.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js")},function(e,t){e.exports=__webpack_require__(/*! tsparticles/dist/Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js")}]));

/***/ }),

/***/ "./node_modules/react-particles-js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-particles-js/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ReactParticles = __webpack_require__(/*! ./cjs/particles */ "./node_modules/react-particles-js/cjs/particles.js");
for (const key in ReactParticles) {
    ReactParticles.default[key] = ReactParticles[key];
}
module.exports = ReactParticles.default;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.0";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.0";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Canvas.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Canvas.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ./Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var CanvasUtils_1 = __webpack_require__(/*! ./Utils/CanvasUtils */ "./node_modules/tsparticles/dist/Classes/Utils/CanvasUtils.js");
var ColorUtils_1 = __webpack_require__(/*! ./Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var Canvas = (function () {
    function Canvas(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    Canvas.prototype.init = function () {
        this.size();
        var container = this.container;
        var options = container.options;
        var cover = options.backgroundMask.cover;
        var trail = options.particles.move.trail;
        this.coverColor = ColorUtils_1.ColorUtils.colorToRgb(cover.color !== undefined ?
            cover.color :
            options.backgroundMask.cover);
        this.trailFillColor = typeof trail.fillColor === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(trail.fillColor) :
            ColorUtils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    };
    Canvas.prototype.loadCanvas = function (canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Constants_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
        this.element = canvas;
        this.dimension.height = canvas.offsetHeight;
        this.dimension.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    };
    Canvas.prototype.destroy = function () {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.dimension);
        }
    };
    Canvas.prototype.size = function () {
        if (this.element) {
            this.element.width = this.dimension.width;
            this.element.height = this.dimension.height;
        }
    };
    Canvas.prototype.paint = function () {
        var container = this.container;
        var options = container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                if (this.coverColor) {
                    this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.coverColor));
                }
                else {
                    this.paintBase();
                }
            }
            else {
                this.paintBase();
            }
        }
    };
    Canvas.prototype.clear = function () {
        var container = this.container;
        var options = container.options;
        var trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.dimension);
        }
    };
    Canvas.prototype.isPointInPath = function (path, point) {
        var _a, _b;
        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
    };
    Canvas.prototype.drawPolygonMask = function () {
        var container = this.container;
        var options = container.options;
        var context = this.context;
        var polygonDraw = options.polygon.draw;
        var polygon = container.polygon;
        var rawData = polygon.raw;
        var path = polygon.polygonPath;
        var path2dSupported = polygon.path2DSupported;
        if (context) {
            if (path2dSupported && path && polygon.offset) {
                CanvasUtils_1.CanvasUtils.drawPolygonMaskPath(context, path, polygonDraw.stroke, polygon.offset);
            }
            else if (rawData) {
                CanvasUtils_1.CanvasUtils.drawPolygonMask(context, rawData, polygonDraw.stroke);
            }
        }
    };
    Canvas.prototype.drawLinkedLine = function (p1, p2, pos1, pos2, opacity) {
        var container = this.container;
        var options = container.options;
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        if (container.particles.lineLinkedColor === Constants_1.Constants.randomColorValue) {
            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
            var sourceColor = p1.color;
            var destColor = p2.color;
            colorLine = {
                b: Math.floor(Utils_1.Utils.mix(sourceColor.b, destColor.b, p1.radius, p2.radius)),
                g: Math.floor(Utils_1.Utils.mix(sourceColor.g, destColor.g, p1.radius, p2.radius)),
                r: Math.floor(Utils_1.Utils.mix(sourceColor.r, destColor.r, p1.radius, p2.radius)),
            };
        }
        else {
            colorLine = container.particles.lineLinkedColor;
        }
        var width = container.retina.lineLinkedWidth;
        CanvasUtils_1.CanvasUtils.drawLineLinked(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, options.particles.lineLinked.shadow);
    };
    Canvas.prototype.drawConnectLine = function (p1, p2) {
        var lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        CanvasUtils_1.CanvasUtils.drawConnectLine(ctx, this.container.retina.lineLinkedWidth, lineStyle, p1.position, p2.position);
    };
    Canvas.prototype.drawGrabLine = function (particle, opacity, mousePos) {
        var container = this.container;
        var options = container.options;
        var optColor = options.particles.lineLinked.color;
        var lineColor = container.particles.lineLinkedColor ||
            (typeof optColor === "string" ? ColorUtils_1.ColorUtils.stringToRgb(optColor) : ColorUtils_1.ColorUtils.colorToRgb(optColor));
        if (lineColor == Constants_1.Constants.randomColorValue) {
            lineColor = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        container.particles.lineLinkedColor = lineColor;
        var colorLine = { r: 127, g: 127, b: 127 };
        var ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        if (container.particles.lineLinkedColor == Constants_1.Constants.randomColorValue) {
            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor() || colorLine;
        }
        else {
            colorLine = container.particles.lineLinkedColor || colorLine;
        }
        var beginPos = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        CanvasUtils_1.CanvasUtils.drawGrabLine(ctx, container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
    };
    Canvas.prototype.drawParticle = function (particle) {
        var container = this.container;
        var options = container.options;
        var colorValue;
        var radius = particle.bubbler.radius !== undefined ? particle.bubbler.radius : particle.radius;
        var opacity = particle.bubbler.opacity !== undefined ? particle.bubbler.opacity : particle.opacity.value;
        if (particle.color) {
            colorValue = ColorUtils_1.ColorUtils.getStyleFromColor(particle.color, opacity);
        }
        if (!this.context || !colorValue) {
            return;
        }
        CanvasUtils_1.CanvasUtils.drawParticle(this.context, particle, colorValue, options.backgroundMask.enable, radius, opacity);
    };
    Canvas.prototype.paintBase = function (baseColor) {
        if (this.context) {
            CanvasUtils_1.CanvasUtils.paintBase(this.context, this.dimension, baseColor);
        }
    };
    Canvas.prototype.lineStyle = function (p1, p2) {
        var container = this.container;
        var options = container.options;
        var connectOptions = options.interactivity.modes.connect;
        if (p1.color && p2.color) {
            var sourceRgb = p1.color;
            var destRgb = p2.color;
            var midRgb = {
                b: Utils_1.Utils.mix(sourceRgb.b, destRgb.b, p1.radius, p2.radius),
                g: Utils_1.Utils.mix(sourceRgb.g, destRgb.g, p1.radius, p2.radius),
                r: Utils_1.Utils.mix(sourceRgb.r, destRgb.r, p1.radius, p2.radius),
            };
            if (this.context) {
                return CanvasUtils_1.CanvasUtils.gradient(this.context, p1, p2, midRgb, connectOptions.lineLinked.opacity);
            }
        }
    };
    Canvas.prototype.initBackground = function () {
        var container = this.container;
        var options = container.options;
        var background = options.background;
        var element = this.element;
        if (!element) {
            return;
        }
        var elementStyle = element.style;
        if (background.color) {
            var color = typeof background.color === "string" ?
                ColorUtils_1.ColorUtils.stringToRgb(background.color) :
                ColorUtils_1.ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = ColorUtils_1.ColorUtils.getStyleFromColor(color, background.opacity);
            }
        }
        if (background.image) {
            elementStyle.backgroundImage = background.image;
        }
        if (background.position) {
            elementStyle.backgroundPosition = background.position;
        }
        if (background.repeat) {
            elementStyle.backgroundRepeat = background.repeat;
        }
        if (background.size) {
            elementStyle.backgroundSize = background.size;
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Container.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Container.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = __webpack_require__(/*! ./Canvas */ "./node_modules/tsparticles/dist/Classes/Canvas.js");
var EventListeners_1 = __webpack_require__(/*! ./Utils/EventListeners */ "./node_modules/tsparticles/dist/Classes/Utils/EventListeners.js");
var Particles_1 = __webpack_require__(/*! ./Particles */ "./node_modules/tsparticles/dist/Classes/Particles.js");
var Retina_1 = __webpack_require__(/*! ./Retina */ "./node_modules/tsparticles/dist/Classes/Retina.js");
var ShapeType_1 = __webpack_require__(/*! ../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var PolygonMask_1 = __webpack_require__(/*! ./PolygonMask */ "./node_modules/tsparticles/dist/Classes/PolygonMask.js");
var FrameManager_1 = __webpack_require__(/*! ./FrameManager */ "./node_modules/tsparticles/dist/Classes/FrameManager.js");
var Options_1 = __webpack_require__(/*! ./Options/Options */ "./node_modules/tsparticles/dist/Classes/Options/Options.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Presets_1 = __webpack_require__(/*! ./Utils/Presets */ "./node_modules/tsparticles/dist/Classes/Utils/Presets.js");
var Container = (function () {
    function Container(id, params) {
        var presets = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            presets[_i - 2] = arguments[_i];
        }
        this.started = false;
        this.destroyed = false;
        this.id = id;
        this.paused = true;
        this.sourceOptions = params;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.polygon = new PolygonMask_1.PolygonMask(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.interactivity = {
            mouse: {},
        };
        this.images = [];
        this.bubble = {};
        this.repulse = {};
        this.options = new Options_1.Options();
        for (var _a = 0, presets_1 = presets; _a < presets_1.length; _a++) {
            var preset = presets_1[_a];
            this.options.load(Presets_1.Presets.getPreset(preset));
        }
        if (this.sourceOptions) {
            this.options.load(this.sourceOptions);
        }
        this.eventListeners = new EventListeners_1.EventListeners(this);
    }
    Container.requestFrame = function (callback) {
        return window.customRequestAnimationFrame(callback);
    };
    Container.cancelAnimation = function (handle) {
        window.cancelAnimationFrame(handle);
    };
    Container.prototype.play = function () {
        var _this = this;
        if (this.paused) {
            this.lastFrameTime = performance.now();
            this.paused = false;
        }
        this.drawAnimationFrame = Container.requestFrame(function (t) { return _this.drawer.nextFrame(t); });
    };
    Container.prototype.pause = function () {
        if (this.drawAnimationFrame !== undefined) {
            Container.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
            this.paused = true;
        }
    };
    Container.prototype.densityAutoParticles = function () {
        if (!(this.canvas.element && this.options.particles.number.density.enable)) {
            return;
        }
        var area = this.canvas.element.width * this.canvas.element.height / 1000;
        if (this.retina.isRetina) {
            area /= this.retina.pxRatio * 2;
        }
        var optParticlesNumber = this.options.particles.number.value;
        var density = this.options.particles.number.density.area;
        var particlesNumber = area * optParticlesNumber / density;
        var particlesCount = this.particles.count;
        if (particlesCount < particlesNumber) {
            this.particles.push(Math.abs(particlesNumber - particlesCount));
        }
        else if (particlesCount > particlesNumber) {
            this.particles.removeQuantity(particlesCount - particlesNumber);
        }
    };
    Container.prototype.destroy = function () {
        this.stop();
        this.retina.reset();
        this.canvas.destroy();
        delete this.interactivity;
        delete this.options;
        delete this.retina;
        delete this.canvas;
        delete this.particles;
        delete this.polygon;
        delete this.bubble;
        delete this.repulse;
        delete this.images;
        delete this.drawer;
        delete this.eventListeners;
        this.destroyed = true;
    };
    Container.prototype.exportImg = function (callback) {
        this.exportImage(callback);
    };
    Container.prototype.exportImage = function (callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    };
    Container.prototype.exportConfiguration = function () {
        return JSON.stringify(this.options, undefined, 2);
    };
    Container.prototype.loadImage = function (optionsImage) {
        return new Promise(function (resolve, reject) {
            var src = optionsImage.src;
            var image = {
                type: src.substr(src.length - 3),
            };
            if (optionsImage.src) {
                var img_1 = new Image();
                img_1.addEventListener("load", function () {
                    image.obj = img_1;
                    resolve(image);
                });
                img_1.addEventListener("error", function () {
                    reject("Error tsParticles - loading image: " + optionsImage.src);
                });
                img_1.src = optionsImage.src;
            }
            else {
                reject("Error tsParticles - No image.src");
            }
        });
    };
    Container.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stop();
                        return [4, this.start()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Container.prototype.stop = function () {
        if (!this.started) {
            return;
        }
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.images = [];
        this.particles.clear();
        this.retina.reset();
        this.canvas.clear();
        this.polygon.reset();
        delete this.particles.lineLinkedColor;
    };
    Container.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, character, character, _b, _c, optionsImage;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.started) {
                            return [2];
                        }
                        this.started = true;
                        this.eventListeners.addListeners();
                        return [4, this.polygon.init()];
                    case 1:
                        _d.sent();
                        if (!(Utils_1.Utils.isInArray(ShapeType_1.ShapeType.char, this.options.particles.shape.type) ||
                            Utils_1.Utils.isInArray(ShapeType_1.ShapeType.character, this.options.particles.shape.type))) return [3, 8];
                        if (!(this.options.particles.shape.character instanceof Array)) return [3, 6];
                        _i = 0, _a = this.options.particles.shape.character;
                        _d.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 5];
                        character = _a[_i];
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        character = this.options.particles.shape.character;
                        return [4, Utils_1.Utils.loadFont(character)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        if (!Utils_1.Utils.isInArray(ShapeType_1.ShapeType.image, this.options.particles.shape.type)) return [3, 15];
                        if (!(this.options.particles.shape.image instanceof Array)) return [3, 13];
                        _b = 0, _c = this.options.particles.shape.image;
                        _d.label = 9;
                    case 9:
                        if (!(_b < _c.length)) return [3, 12];
                        optionsImage = _c[_b];
                        return [4, this.loadImageShape(optionsImage)];
                    case 10:
                        _d.sent();
                        _d.label = 11;
                    case 11:
                        _b++;
                        return [3, 9];
                    case 12: return [3, 15];
                    case 13: return [4, this.loadImageShape(this.options.particles.shape.image)];
                    case 14:
                        _d.sent();
                        _d.label = 15;
                    case 15:
                        this.init();
                        this.play();
                        return [2];
                }
            });
        });
    };
    Container.prototype.loadImageShape = function (imageShape) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.images).push;
                        return [4, this.loadImage(imageShape)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2];
                }
            });
        });
    };
    Container.prototype.init = function () {
        this.retina.init();
        this.canvas.init();
        this.particles.init();
        this.densityAutoParticles();
    };
    return Container;
}());
exports.Container = Container;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/FrameManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/FrameManager.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FrameManager = (function () {
    function FrameManager(container) {
        this.container = container;
    }
    FrameManager.prototype.nextFrame = function (timestamp) {
        var container = this.container;
        var options = container.options;
        var fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;
        if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + (1000 / fpsLimit)) {
            container.play();
            return;
        }
        var delta = timestamp - container.lastFrameTime;
        container.lastFrameTime = timestamp;
        container.particles.draw(delta);
        if (!options.particles.move.enable) {
            container.pause();
        }
        else {
            container.play();
        }
    };
    return FrameManager;
}());
exports.FrameManager = FrameManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Loader.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Loader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __webpack_require__(/*! ./Container */ "./node_modules/tsparticles/dist/Classes/Container.js");
var Constants_1 = __webpack_require__(/*! ./Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var tsParticlesDom = [];
var Loader = (function () {
    function Loader() {
    }
    Loader.dom = function () {
        if (!tsParticlesDom) {
            tsParticlesDom = [];
        }
        return tsParticlesDom;
    };
    Loader.domItem = function (index) {
        var dom = Loader.dom();
        var item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    };
    Loader.loadFromArray = function (tagId, params, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader.load(tagId, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.setFromArray = function (id, domContainer, params, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader.set(id, domContainer, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.load = function (tagId, params) {
        return __awaiter(this, void 0, void 0, function () {
            var domContainer;
            return __generator(this, function (_a) {
                domContainer = document.getElementById(tagId);
                if (!domContainer) {
                    return [2];
                }
                return [2, this.set(tagId, domContainer, params)];
            });
        });
    };
    Loader.set = function (id, domContainer, params) {
        return __awaiter(this, void 0, void 0, function () {
            var dom, oldIndex, old, canvasEl, generatedCanvas, existingCanvases, newItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dom = Loader.dom();
                        oldIndex = dom.findIndex(function (v) { return v.id === id; });
                        if (oldIndex >= 0) {
                            old = this.domItem(oldIndex);
                            if (old && !old.destroyed) {
                                old.destroy();
                                dom.splice(oldIndex, 1);
                            }
                        }
                        if (domContainer.tagName === "canvas") {
                            canvasEl = domContainer;
                            generatedCanvas = false;
                        }
                        else {
                            existingCanvases = domContainer.getElementsByTagName("canvas");
                            if (existingCanvases.length) {
                                canvasEl = existingCanvases[0];
                                if (!canvasEl.className) {
                                    canvasEl.className = Constants_1.Constants.canvasClass;
                                }
                                generatedCanvas = false;
                            }
                            else {
                                generatedCanvas = true;
                                canvasEl = document.createElement("canvas");
                                canvasEl.className = Constants_1.Constants.canvasClass;
                                canvasEl.style.width = "100%";
                                canvasEl.style.height = "100%";
                                domContainer.appendChild(canvasEl);
                            }
                        }
                        newItem = new Container_1.Container(id, params);
                        if (oldIndex >= 0) {
                            dom.splice(oldIndex, 0, newItem);
                        }
                        else {
                            dom.push(newItem);
                        }
                        newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
                        return [4, newItem.start()];
                    case 1:
                        _a.sent();
                        return [2, newItem];
                }
            });
        });
    };
    Loader.loadJSON = function (tagId, jsonUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.loadFromArray(tagId, params)];
                        }
                        else {
                            return [2, Loader.load(tagId, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ;
    Loader.setJSON = function (id, domContainer, jsonUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.setFromArray(id, domContainer, params)];
                        }
                        else {
                            return [2, Loader.set(id, domContainer, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ;
    Loader.setOnClickHandler = function (callback) {
        var dom = Loader.dom();
        if (dom.length === 0) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
            var domItem = dom_1[_i];
            var el = domItem.interactivity.element;
            if (el) {
                el.addEventListener("click", callback);
            }
        }
    };
    return Loader;
}());
exports.Loader = Loader;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Background/Background.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Background/Background.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ../Particles/Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var Background = (function () {
    function Background() {
    }
    Background.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (this.color === undefined) {
                    this.color = new Color_1.Color();
                }
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.image !== undefined) {
                this.image = data.image;
            }
            if (data.position !== undefined) {
                this.position = data.position;
            }
            if (data.repeat !== undefined) {
                this.repeat = data.repeat;
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return Background;
}());
exports.Background = Background;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMask.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMask.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundMaskCover_1 = __webpack_require__(/*! ./BackgroundMaskCover */ "./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMaskCover.js");
var BackgroundMask = (function () {
    function BackgroundMask() {
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    BackgroundMask.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.cover !== undefined) {
                this.cover.load(data.cover);
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return BackgroundMask;
}());
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMaskCover.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMaskCover.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ../Particles/Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var BackgroundMaskCover = (function () {
    function BackgroundMaskCover() {
        this.color = new Color_1.Color();
        this.opacity = 1;
    }
    BackgroundMaskCover.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color.load(data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return BackgroundMaskCover;
}());
exports.BackgroundMaskCover = BackgroundMaskCover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/ClickEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/ClickEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvent = (function () {
    function ClickEvent() {
        this.enable = false;
        this.mode = [];
    }
    ClickEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return ClickEvent;
}());
exports.ClickEvent = ClickEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/DivEvent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/DivEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DivEvent = (function () {
    function DivEvent() {
        this.elementId = "repulse-div";
        this.enable = false;
        this.mode = [];
    }
    Object.defineProperty(DivEvent.prototype, "el", {
        get: function () {
            return this.elementId;
        },
        set: function (value) {
            this.elementId = value;
        },
        enumerable: true,
        configurable: true
    });
    DivEvent.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var elementId = (_a = data.elementId) !== null && _a !== void 0 ? _a : data.el;
            if (elementId !== undefined) {
                this.elementId = elementId;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return DivEvent;
}());
exports.DivEvent = DivEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Events.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Events.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/ClickEvent.js");
var DivEvent_1 = __webpack_require__(/*! ./DivEvent */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/DivEvent.js");
var HoverEvent_1 = __webpack_require__(/*! ./HoverEvent */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/HoverEvent.js");
var Events = (function () {
    function Events() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = true;
    }
    Object.defineProperty(Events.prototype, "onclick", {
        get: function () {
            return this.onClick;
        },
        set: function (value) {
            this.onClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "ondiv", {
        get: function () {
            return this.onDiv;
        },
        set: function (value) {
            this.onDiv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "onhover", {
        get: function () {
            return this.onHover;
        },
        set: function (value) {
            this.onHover = value;
        },
        enumerable: true,
        configurable: true
    });
    Events.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
            this.onDiv.load((_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv);
            this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
            if (data.resize !== undefined) {
                this.resize = data.resize;
            }
        }
    };
    return Events;
}());
exports.Events = Events;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/HoverEvent.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/HoverEvent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parallax_1 = __webpack_require__(/*! ./Parallax */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Parallax.js");
var HoverEvent = (function () {
    function HoverEvent() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    HoverEvent.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            this.parallax.load(data.parallax);
        }
    };
    return HoverEvent;
}());
exports.HoverEvent = HoverEvent;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Parallax.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Parallax.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parallax = (function () {
    function Parallax() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    Parallax.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.force !== undefined) {
                this.force = data.force;
            }
            if (data.smooth !== undefined) {
                this.smooth = data.smooth;
            }
        }
    };
    return Parallax;
}());
exports.Parallax = Parallax;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Interactivity.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Interactivity.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InteractivityDetect_1 = __webpack_require__(/*! ../../../Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js");
var Events_1 = __webpack_require__(/*! ./Events/Events */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Events/Events.js");
var Modes_1 = __webpack_require__(/*! ./Modes/Modes */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Modes.js");
var HoverMode_1 = __webpack_require__(/*! ../../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var Interactivity = (function () {
    function Interactivity() {
        this.detectsOn = InteractivityDetect_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
    }
    Object.defineProperty(Interactivity.prototype, "detect_on", {
        get: function () {
            return this.detectsOn;
        },
        set: function (value) {
            this.detectsOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Interactivity.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            var detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
            if (detectsOn !== undefined) {
                this.detectsOn = detectsOn;
            }
            this.events.load(data.events);
            this.modes.load(data.modes);
            if ((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) {
                if (this.events.onHover.mode instanceof Array) {
                    if (this.events.onHover.mode.indexOf(HoverMode_1.HoverMode.slow) < 0) {
                        this.events.onHover.mode.push(HoverMode_1.HoverMode.slow);
                    }
                }
                else if (this.events.onHover.mode !== HoverMode_1.HoverMode.slow) {
                    this.events.onHover.mode = [this.events.onHover.mode, HoverMode_1.HoverMode.slow];
                }
            }
        }
    };
    return Interactivity;
}());
exports.Interactivity = Interactivity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Bubble.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Bubble.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bubble = (function () {
    function Bubble() {
        this.distance = 200;
        this.duration = 0.4;
        this.opacity = 1;
        this.size = 80;
    }
    Bubble.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
        }
    };
    return Bubble;
}());
exports.Bubble = Bubble;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Connect.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Connect.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectLineLinked_1 = __webpack_require__(/*! ./ConnectLineLinked */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/ConnectLineLinked.js");
var Connect = (function () {
    function Connect() {
        this.distance = 80;
        this.lineLinked = new ConnectLineLinked_1.ConnectLineLinked();
        this.radius = 60;
    }
    Object.defineProperty(Connect.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Connect.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            var lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;
            if (lineLinked !== undefined) {
                this.lineLinked.load(lineLinked);
            }
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Connect;
}());
exports.Connect = Connect;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/ConnectLineLinked.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/ConnectLineLinked.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectLineLinked = (function () {
    function ConnectLineLinked() {
        this.opacity = 0.5;
    }
    ConnectLineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return ConnectLineLinked;
}());
exports.ConnectLineLinked = ConnectLineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Grab.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Grab.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GrabLineLinked_1 = __webpack_require__(/*! ./GrabLineLinked */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/GrabLineLinked.js");
var Grab = (function () {
    function Grab() {
        this.distance = 100;
        this.lineLinked = new GrabLineLinked_1.GrabLineLinked();
    }
    Object.defineProperty(Grab.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Grab.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            var lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;
            if (lineLinked !== undefined) {
                this.lineLinked.load(lineLinked);
            }
        }
    };
    return Grab;
}());
exports.Grab = Grab;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/GrabLineLinked.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/GrabLineLinked.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GrabLineLinked = (function () {
    function GrabLineLinked() {
        this.opacity = 1;
    }
    GrabLineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return GrabLineLinked;
}());
exports.GrabLineLinked = GrabLineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Modes.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Modes.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bubble_1 = __webpack_require__(/*! ./Bubble */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Bubble.js");
var Connect_1 = __webpack_require__(/*! ./Connect */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Connect.js");
var Grab_1 = __webpack_require__(/*! ./Grab */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Grab.js");
var Remove_1 = __webpack_require__(/*! ./Remove */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Remove.js");
var Push_1 = __webpack_require__(/*! ./Push */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Push.js");
var Repulse_1 = __webpack_require__(/*! ./Repulse */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Repulse.js");
var Slow_1 = __webpack_require__(/*! ./Slow */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Slow.js");
var Modes = (function () {
    function Modes() {
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.grab = new Grab_1.Grab();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
    }
    Modes.prototype.load = function (data) {
        if (data !== undefined) {
            this.bubble.load(data.bubble);
            this.connect.load(data.connect);
            this.grab.load(data.grab);
            this.push.load(data.push);
            this.remove.load(data.remove);
            this.repulse.load(data.repulse);
            this.slow.load(data.slow);
        }
    };
    return Modes;
}());
exports.Modes = Modes;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Push.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Push.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Push = (function () {
    function Push() {
        this.quantity = 4;
    }
    Object.defineProperty(Push.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Push.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Push;
}());
exports.Push = Push;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Remove.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Remove.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Remove = (function () {
    function Remove() {
        this.quantity = 2;
    }
    Object.defineProperty(Remove.prototype, "particles_nb", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: true,
        configurable: true
    });
    Remove.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
            if (quantity !== undefined) {
                this.quantity = quantity;
            }
        }
    };
    return Remove;
}());
exports.Remove = Remove;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Repulse.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Repulse.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Repulse = (function () {
    function Repulse() {
        this.distance = 200;
        this.duration = 0.4;
    }
    Repulse.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
        }
    };
    return Repulse;
}());
exports.Repulse = Repulse;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Slow.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Interactivity/Modes/Slow.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Slow = (function () {
    function Slow() {
        this.factor = 1;
        this.radius = 0;
    }
    Object.defineProperty(Slow.prototype, "active", {
        get: function () {
            return false;
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Slow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Slow;
}());
exports.Slow = Slow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Options.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Options.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Interactivity_1 = __webpack_require__(/*! ./Interactivity/Interactivity */ "./node_modules/tsparticles/dist/Classes/Options/Interactivity/Interactivity.js");
var Particles_1 = __webpack_require__(/*! ./Particles/Particles */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Particles.js");
var PolygonMask_1 = __webpack_require__(/*! ./PolygonMask/PolygonMask */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMask.js");
var BackgroundMask_1 = __webpack_require__(/*! ./BackgroundMask/BackgroundMask */ "./node_modules/tsparticles/dist/Classes/Options/BackgroundMask/BackgroundMask.js");
var Presets_1 = __webpack_require__(/*! ../Utils/Presets */ "./node_modules/tsparticles/dist/Classes/Utils/Presets.js");
var Background_1 = __webpack_require__(/*! ./Background/Background */ "./node_modules/tsparticles/dist/Classes/Options/Background/Background.js");
var Options = (function () {
    function Options() {
        this.detectRetina = false;
        this.fpsLimit = 30;
        this.interactivity = new Interactivity_1.Interactivity();
        this.particles = new Particles_1.Particles();
        this.polygon = new PolygonMask_1.PolygonMask();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.pauseOnBlur = true;
        this.background = new Background_1.Background();
    }
    Object.defineProperty(Options.prototype, "fps_limit", {
        get: function () {
            return this.fpsLimit;
        },
        set: function (value) {
            this.fpsLimit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Options.prototype, "retina_detect", {
        get: function () {
            return this.detectRetina;
        },
        set: function (value) {
            this.detectRetina = value;
        },
        enumerable: true,
        configurable: true
    });
    Options.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.preset !== undefined) {
                if (data.preset instanceof Array) {
                    for (var _i = 0, _c = data.preset; _i < _c.length; _i++) {
                        var preset = _c[_i];
                        this.importPreset(preset);
                    }
                }
                else {
                    this.importPreset(data.preset);
                }
            }
            if (data.background !== undefined) {
                this.background.load(data.background);
            }
            var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
            if (detectRetina !== undefined) {
                this.detectRetina = detectRetina;
            }
            var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
            if (fpsLimit !== undefined) {
                this.fpsLimit = fpsLimit;
            }
            if (data.pauseOnBlur !== undefined) {
                this.pauseOnBlur = data.pauseOnBlur;
            }
            this.interactivity.load(data.interactivity);
            this.particles.load(data.particles);
            this.polygon.load(data.polygon);
            this.backgroundMask.load(data.backgroundMask);
        }
    };
    Options.prototype.importPreset = function (preset) {
        var presetOptions = Presets_1.Presets.getPreset(preset);
        if (presetOptions !== undefined) {
            this.load(presetOptions);
        }
    };
    return Options;
}());
exports.Options = Options;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Attract.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Attract.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Attract = (function () {
    function Attract() {
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    Object.defineProperty(Attract.prototype, "rotateX", {
        get: function () {
            return this.rotate.x;
        },
        set: function (value) {
            this.rotate.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attract.prototype, "rotateY", {
        get: function () {
            return this.rotate.y;
        },
        set: function (value) {
            this.rotate.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Attract.prototype.load = function (data) {
        var _a, _b, _c, _d;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
            if (rotateX !== undefined) {
                this.rotate.x = rotateX;
            }
            var rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
            if (rotateY !== undefined) {
                this.rotate.y = rotateY;
            }
        }
    };
    return Attract;
}());
exports.Attract = Attract;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color = (function () {
    function Color() {
        this.value = "#fff";
    }
    Color.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Color;
}());
exports.Color = Color;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Density.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Density.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Density = (function () {
    function Density() {
        this.enable = false;
        this.area = 800;
    }
    Object.defineProperty(Density.prototype, "value_area", {
        get: function () {
            return this.area;
        },
        set: function (value) {
            this.area = value;
        },
        enumerable: true,
        configurable: true
    });
    Density.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
            if (area !== undefined) {
                this.area = area;
            }
        }
    };
    return Density;
}());
exports.Density = Density;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LineLinkedShadow_1 = __webpack_require__(/*! ./LineLinkedShadow */ "./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinkedShadow.js");
var Color_1 = __webpack_require__(/*! ./Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var LineLinked = (function () {
    function LineLinked() {
        this.blink = false;
        this.color = new Color_1.Color();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.opacity = 1;
        this.shadow = new LineLinkedShadow_1.LineLinkedShadow();
        this.width = 1;
    }
    LineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blink !== undefined) {
                this.blink = data.blink;
            }
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.consent !== undefined) {
                this.consent = data.consent;
            }
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            this.shadow.load(data.shadow);
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return LineLinked;
}());
exports.LineLinked = LineLinked;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinkedShadow.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinkedShadow.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ./Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var LineLinkedShadow = (function () {
    function LineLinkedShadow() {
        this.blur = 5;
        this.color = new Color_1.Color();
        this.enable = false;
        this.color.value = "lime";
    }
    LineLinkedShadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return LineLinkedShadow;
}());
exports.LineLinkedShadow = LineLinkedShadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Move.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Move.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Attract_1 = __webpack_require__(/*! ./Attract */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Attract.js");
var MoveDirection_1 = __webpack_require__(/*! ../../../Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js");
var OutMode_1 = __webpack_require__(/*! ../../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Trail_1 = __webpack_require__(/*! ./Trail */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Trail.js");
var Move = (function () {
    function Move() {
        this.attract = new Attract_1.Attract();
        this.collisions = false;
        this.direction = MoveDirection_1.MoveDirection.none;
        this.enable = false;
        this.outMode = OutMode_1.OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail_1.Trail();
    }
    Object.defineProperty(Move.prototype, "bounce", {
        get: function () {
            return this.collisions;
        },
        set: function (value) {
            this.collisions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Move.prototype, "out_mode", {
        get: function () {
            return this.outMode;
        },
        set: function (value) {
            this.outMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Move.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            this.attract.load(data.attract);
            var collisions = (_a = data.collisions) !== null && _a !== void 0 ? _a : data.bounce;
            if (collisions !== undefined) {
                this.collisions = collisions;
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var outMode = (_b = data.outMode) !== null && _b !== void 0 ? _b : data.out_mode;
            if (outMode !== undefined) {
                this.outMode = outMode;
            }
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.straight !== undefined) {
                this.straight = data.straight;
            }
            this.trail.load(data.trail);
        }
    };
    return Move;
}());
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimation_1 = __webpack_require__(/*! ./OpacityAnimation */ "./node_modules/tsparticles/dist/Classes/Options/Particles/OpacityAnimation.js");
var RandomOpacity_1 = __webpack_require__(/*! ./RandomOpacity */ "./node_modules/tsparticles/dist/Classes/Options/Particles/RandomOpacity.js");
var Opacity = (function () {
    function Opacity() {
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random = new RandomOpacity_1.RandomOpacity();
        this.value = 1;
    }
    Object.defineProperty(Opacity.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: true,
        configurable: true
    });
    Opacity.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
            if (animation !== undefined) {
                this.animation.load(animation);
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Opacity;
}());
exports.Opacity = Opacity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/OpacityAnimation.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/OpacityAnimation.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimation = (function () {
    function OpacityAnimation() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 2;
        this.sync = false;
    }
    Object.defineProperty(OpacityAnimation.prototype, "opacity_min", {
        get: function () {
            return this.minimumValue;
        },
        set: function (value) {
            this.minimumValue = value;
        },
        enumerable: true,
        configurable: true
    });
    OpacityAnimation.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return OpacityAnimation;
}());
exports.OpacityAnimation = OpacityAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Particles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Particles.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ./Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var LineLinked_1 = __webpack_require__(/*! ./LineLinked */ "./node_modules/tsparticles/dist/Classes/Options/Particles/LineLinked.js");
var Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Move.js");
var ParticlesNumber_1 = __webpack_require__(/*! ./ParticlesNumber */ "./node_modules/tsparticles/dist/Classes/Options/Particles/ParticlesNumber.js");
var Opacity_1 = __webpack_require__(/*! ./Opacity */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Opacity.js");
var Shape_1 = __webpack_require__(/*! ./Shape/Shape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/Shape.js");
var Size_1 = __webpack_require__(/*! ./Size */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Size.js");
var Rotate_1 = __webpack_require__(/*! ./Rotate */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate.js");
var Shadow_1 = __webpack_require__(/*! ./Shadow */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shadow.js");
var Stroke_1 = __webpack_require__(/*! ./Stroke */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Stroke.js");
var Particles = (function () {
    function Particles() {
        this.color = new Color_1.Color();
        this.lineLinked = new LineLinked_1.LineLinked();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.rotate = new Rotate_1.Rotate();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.shadow = new Shadow_1.Shadow();
        this.stroke = new Stroke_1.Stroke();
    }
    Object.defineProperty(Particles.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Particles.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map(function (s) {
                        var tmp = new Color_1.Color();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.color instanceof Array) {
                        this.color = new Color_1.Color();
                    }
                    this.color.load(data.color);
                }
            }
            var lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;
            if (lineLinked !== undefined) {
                this.lineLinked.load(lineLinked);
            }
            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            var strokeToLoad = (_b = data.stroke) !== null && _b !== void 0 ? _b : (_c = data.shape) === null || _c === void 0 ? void 0 : _c.stroke;
            if (strokeToLoad !== undefined) {
                if (strokeToLoad instanceof Array) {
                    this.stroke = strokeToLoad.map(function (s) {
                        var tmp = new Stroke_1.Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.stroke instanceof Array) {
                        this.stroke = new Stroke_1.Stroke();
                    }
                    this.stroke.load(strokeToLoad);
                }
            }
        }
    };
    return Particles;
}());
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/ParticlesNumber.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/ParticlesNumber.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Density_1 = __webpack_require__(/*! ./Density */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Density.js");
var ParticlesNumber = (function () {
    function ParticlesNumber() {
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
    }
    Object.defineProperty(ParticlesNumber.prototype, "max", {
        get: function () {
            return this.limit;
        },
        set: function (value) {
            this.limit = value;
        },
        enumerable: true,
        configurable: true
    });
    ParticlesNumber.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.density.load(data.density);
            var limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
            if (limit !== undefined) {
                this.limit = limit;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return ParticlesNumber;
}());
exports.ParticlesNumber = ParticlesNumber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/RandomOpacity.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/RandomOpacity.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RandomOpacity = (function () {
    function RandomOpacity() {
        this.enable = false;
        this.minimumValue = 1;
    }
    RandomOpacity.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return RandomOpacity;
}());
exports.RandomOpacity = RandomOpacity;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/RandomSize.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/RandomSize.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RandomSize = (function () {
    function RandomSize() {
        this.enable = false;
        this.minimumValue = 1;
    }
    RandomSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return RandomSize;
}());
exports.RandomSize = RandomSize;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Rotate.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateAnimation_1 = __webpack_require__(/*! ./RotateAnimation */ "./node_modules/tsparticles/dist/Classes/Options/Particles/RotateAnimation.js");
var RotateDirection_1 = __webpack_require__(/*! ../../../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var Rotate = (function () {
    function Rotate() {
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = RotateDirection_1.RotateDirection.clockwise;
        this.random = false;
        this.value = 0;
    }
    Rotate.prototype.load = function (data) {
        if (data !== undefined) {
            this.animation.load(data.animation);
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Rotate;
}());
exports.Rotate = Rotate;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/RotateAnimation.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/RotateAnimation.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateAnimation = (function () {
    function RotateAnimation() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    RotateAnimation.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return RotateAnimation;
}());
exports.RotateAnimation = RotateAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shadow.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shadow.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ./Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var Shadow = (function () {
    function Shadow() {
        this.blur = 0;
        this.color = new Color_1.Color();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000000";
    }
    Shadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.offset !== undefined) {
                if (data.offset.x !== undefined) {
                    this.offset.x = data.offset.x;
                }
                if (data.offset.y !== undefined) {
                    this.offset.y = data.offset.y;
                }
            }
        }
    };
    return Shadow;
}());
exports.Shadow = Shadow;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/CharacterShape.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/CharacterShape.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CharacterShape = (function () {
    function CharacterShape() {
        this.fill = false;
        this.font = "Verdana";
        this.style = "";
        this.value = "*";
        this.weight = "400";
        this.fill = true;
        this.close = true;
    }
    CharacterShape.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.fill !== undefined) {
                this.fill = data.fill;
            }
            if (data.font !== undefined) {
                this.font = data.font;
            }
            if (data.style !== undefined) {
                this.style = data.style;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.weight !== undefined) {
                this.weight = data.weight;
            }
        }
    };
    return CharacterShape;
}());
exports.CharacterShape = CharacterShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ImageShape.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ImageShape.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ImageShape = (function () {
    function ImageShape() {
        this.height = 100;
        this.replaceColor = true;
        this.src = "";
        this.width = 100;
        this.fill = true;
        this.close = true;
    }
    Object.defineProperty(ImageShape.prototype, "replace_color", {
        get: function () {
            return this.replaceColor;
        },
        set: function (value) {
            this.replaceColor = value;
        },
        enumerable: true,
        configurable: true
    });
    ImageShape.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.height !== undefined) {
                this.height = data.height;
            }
            var replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;
            if (replaceColor !== undefined) {
                this.replaceColor = replaceColor;
            }
            if (data.src !== undefined) {
                this.src = data.src;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return ImageShape;
}());
exports.ImageShape = ImageShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/PolygonShape.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/PolygonShape.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonShape = (function () {
    function PolygonShape() {
        this.close = true;
        this.fill = true;
        this.sides = 5;
    }
    Object.defineProperty(PolygonShape.prototype, "nb_sides", {
        get: function () {
            return this.sides;
        },
        set: function (value) {
            this.sides = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonShape.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;
            if (sides !== undefined) {
                this.sides = sides;
            }
        }
    };
    return PolygonShape;
}());
exports.PolygonShape = PolygonShape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/Shape.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/Shape.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = __webpack_require__(/*! ../../../../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var CharacterShape_1 = __webpack_require__(/*! ./CharacterShape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/CharacterShape.js");
var ImageShape_1 = __webpack_require__(/*! ./ImageShape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/ImageShape.js");
var PolygonShape_1 = __webpack_require__(/*! ./PolygonShape */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Shape/PolygonShape.js");
var Shape = (function () {
    function Shape() {
        this.character = new CharacterShape_1.CharacterShape();
        this.image = new ImageShape_1.ImageShape();
        this.polygon = new PolygonShape_1.PolygonShape();
        this.type = ShapeType_1.ShapeType.circle;
        this.custom = {};
    }
    Object.defineProperty(Shape.prototype, "images", {
        get: function () {
            if (this.image instanceof Array) {
                return this.image;
            }
            return [];
        },
        set: function (value) {
            this.image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "stroke", {
        get: function () {
            return [];
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.custom !== undefined)
                for (var customShape in data.custom) {
                    var item = data.custom[customShape];
                    if (item !== undefined) {
                        if (item instanceof Array) {
                            this.custom[customShape] = item.filter(function (t) { return t !== undefined; }).map(function (s) {
                                return s;
                            });
                        }
                        else {
                            this.custom[customShape] = item;
                        }
                    }
                }
            if (data.character !== undefined) {
                if (data.character instanceof Array) {
                    this.character = data.character.map(function (s) {
                        var tmp = new CharacterShape_1.CharacterShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.character instanceof Array) {
                        this.character = new CharacterShape_1.CharacterShape();
                    }
                    this.character.load(data.character);
                }
            }
            if (data.image !== undefined) {
                if (data.image instanceof Array) {
                    this.image = data.image.map(function (s) {
                        var tmp = new ImageShape_1.ImageShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.image instanceof Array) {
                        this.image = new ImageShape_1.ImageShape();
                    }
                    this.image.load(data.image);
                }
            }
            if (data.polygon !== undefined) {
                if (data.polygon instanceof Array) {
                    this.polygon = data.polygon.map(function (s) {
                        var tmp = new PolygonShape_1.PolygonShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.polygon instanceof Array) {
                        this.polygon = new PolygonShape_1.PolygonShape();
                    }
                    this.polygon.load(data.polygon);
                }
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Shape;
}());
exports.Shape = Shape;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Size.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Size.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeAnimation_1 = __webpack_require__(/*! ./SizeAnimation */ "./node_modules/tsparticles/dist/Classes/Options/Particles/SizeAnimation.js");
var RandomSize_1 = __webpack_require__(/*! ./RandomSize */ "./node_modules/tsparticles/dist/Classes/Options/Particles/RandomSize.js");
var Size = (function () {
    function Size() {
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random = new RandomSize_1.RandomSize;
        this.value = 3;
    }
    Object.defineProperty(Size.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: true,
        configurable: true
    });
    Size.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
            if (animation !== undefined) {
                this.animation.load(animation);
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Size;
}());
exports.Size = Size;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/SizeAnimation.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/SizeAnimation.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SizeAnimation = (function () {
    function SizeAnimation() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 5;
        this.sync = false;
    }
    Object.defineProperty(SizeAnimation.prototype, "size_min", {
        get: function () {
            return this.minimumValue;
        },
        set: function (value) {
            this.minimumValue = value;
        },
        enumerable: true,
        configurable: true
    });
    SizeAnimation.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return SizeAnimation;
}());
exports.SizeAnimation = SizeAnimation;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Stroke.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Stroke.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ./Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var Stroke = (function () {
    function Stroke() {
        this.color = new Color_1.Color();
        this.width = 0;
        this.opacity = 1;
        this.color.value = "#ff0000";
    }
    Stroke.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return Stroke;
}());
exports.Stroke = Stroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/Particles/Trail.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/Particles/Trail.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ./Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var Trail = (function () {
    function Trail() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new Color_1.Color();
        this.fillColor.value = "#000000";
    }
    Trail.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.fillColor !== undefined) {
                if (typeof data.fillColor === "string") {
                    this.fillColor.value = data.fillColor;
                }
                else {
                    this.fillColor.load(data.fillColor);
                }
            }
            if (data.length !== undefined) {
                this.length = data.length;
            }
        }
    };
    return Trail;
}());
exports.Trail = Trail;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Draw.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Draw.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskDrawStroke_1 = __webpack_require__(/*! ./PolygonMaskDrawStroke */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMaskDrawStroke.js");
var Draw = (function () {
    function Draw() {
        this.enable = false;
        this.stroke = new PolygonMaskDrawStroke_1.PolygonMaskDrawStroke();
    }
    Object.defineProperty(Draw.prototype, "lineWidth", {
        get: function () {
            return this.stroke.width;
        },
        set: function (value) {
            this.stroke.width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Draw.prototype, "lineColor", {
        get: function () {
            return this.stroke.color;
        },
        set: function (value) {
            var destColor = this.stroke.color;
            if (typeof value === "string") {
                destColor.value = value;
            }
            else {
                destColor.load(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Draw.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            var stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth
            };
            this.stroke.load(stroke);
        }
    };
    return Draw;
}());
exports.Draw = Draw;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Move.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Move.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskMoveType_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskMoveType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js");
var Move = (function () {
    function Move() {
        this.radius = 10;
        this.type = PolygonMaskMoveType_1.PolygonMaskMoveType.path;
    }
    Move.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Move;
}());
exports.Move = Move;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonInline.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonInline.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskInlineArrangement_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js");
var PolygonInline = (function () {
    function PolygonInline() {
        this.arrangement = PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint;
    }
    PolygonInline.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    };
    return PolygonInline;
}());
exports.PolygonInline = PolygonInline;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMask.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMask.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType_1 = __webpack_require__(/*! ../../../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Draw_1 = __webpack_require__(/*! ./Draw */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Draw.js");
var Move_1 = __webpack_require__(/*! ./Move */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/Move.js");
var PolygonInline_1 = __webpack_require__(/*! ./PolygonInline */ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonInline.js");
var PolygonMask = (function () {
    function PolygonMask() {
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new PolygonInline_1.PolygonInline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = PolygonMaskType_1.PolygonMaskType.none;
        this.url = "";
    }
    Object.defineProperty(PolygonMask.prototype, "inlineArrangement", {
        get: function () {
            return this.inline.arrangement;
        },
        set: function (value) {
            this.inline.arrangement = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonMask.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            var inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement,
            };
            if (inline !== undefined) {
                this.inline.load(inline);
            }
            this.move.load(data.move);
            if (data.scale !== undefined) {
                this.scale = data.scale;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            else {
                this.enable = this.type !== PolygonMaskType_1.PolygonMaskType.none;
            }
            if (data.url !== undefined) {
                this.url = data.url;
            }
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMaskDrawStroke.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Options/PolygonMask/PolygonMaskDrawStroke.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(/*! ../Particles/Color */ "./node_modules/tsparticles/dist/Classes/Options/Particles/Color.js");
var ColorUtils_1 = __webpack_require__(/*! ../../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var PolygonMaskDrawStroke = (function () {
    function PolygonMaskDrawStroke() {
        this.color = new Color_1.Color();
        this.width = 0.5;
        this.opacity = 1;
    }
    PolygonMaskDrawStroke.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
                if (typeof this.color.value === "string") {
                    this.opacity = (_a = ColorUtils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
                }
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return PolygonMaskDrawStroke;
}());
exports.PolygonMaskDrawStroke = PolygonMaskDrawStroke;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bubbler_1 = __webpack_require__(/*! ./Particle/Bubbler */ "./node_modules/tsparticles/dist/Classes/Particle/Bubbler.js");
var Drawer_1 = __webpack_require__(/*! ./Particle/Drawer */ "./node_modules/tsparticles/dist/Classes/Particle/Drawer.js");
var Grabber_1 = __webpack_require__(/*! ./Particle/Grabber */ "./node_modules/tsparticles/dist/Classes/Particle/Grabber.js");
var Repulser_1 = __webpack_require__(/*! ./Particle/Repulser */ "./node_modules/tsparticles/dist/Classes/Particle/Repulser.js");
var ShapeType_1 = __webpack_require__(/*! ../Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var Updater_1 = __webpack_require__(/*! ./Particle/Updater */ "./node_modules/tsparticles/dist/Classes/Particle/Updater.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Connecter_1 = __webpack_require__(/*! ./Particle/Connecter */ "./node_modules/tsparticles/dist/Classes/Particle/Connecter.js");
var InteractionManager_1 = __webpack_require__(/*! ./Particle/InteractionManager */ "./node_modules/tsparticles/dist/Classes/Particle/InteractionManager.js");
var HoverMode_1 = __webpack_require__(/*! ../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var ClickMode_1 = __webpack_require__(/*! ../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var RotateDirection_1 = __webpack_require__(/*! ../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var ColorUtils_1 = __webpack_require__(/*! ./Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var Particle = (function () {
    function Particle(container, position) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.container = container;
        var options = container.options;
        var color = options.particles.color;
        this.size = {};
        this.angle = options.particles.rotate.random ? Math.random() * 360 : options.particles.rotate.value;
        if (options.particles.rotate.direction == RotateDirection_1.RotateDirection.random) {
            var index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = RotateDirection_1.RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = RotateDirection_1.RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = options.particles.rotate.direction;
        }
        var randomSize = options.particles.size.random;
        var sizeValue = container.retina.sizeValue;
        this.radius = randomSize.enable ? Utils_1.Utils.randomInRange(randomSize.minimumValue, sizeValue) : sizeValue;
        if (options.particles.size.animation.enable) {
            this.size.status = false;
            this.size.velocity = container.retina.sizeAnimationSpeed / 100;
            if (!options.particles.size.animation.sync) {
                this.size.velocity = this.size.velocity * Math.random();
            }
        }
        if (options.particles.rotate.animation.enable) {
            if (!options.particles.rotate.animation.sync) {
                this.angle = Math.random() * 360;
            }
        }
        this.position = this.calcPosition(this.container, position);
        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            this.initialPosition = {
                x: this.position.x,
                y: this.position.y,
            };
        }
        this.offset = {
            x: 0,
            y: 0,
        };
        if (options.particles.move.collisions) {
            this.checkOverlap(position);
        }
        if (color instanceof Array) {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(Utils_1.Utils.itemFromArray(color));
        }
        else {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(color);
        }
        var randomOpacity = options.particles.opacity.random;
        var opacityValue = options.particles.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
        };
        if (options.particles.opacity.animation.enable) {
            this.opacity.status = false;
            this.opacity.velocity = options.particles.opacity.animation.speed / 100;
            if (!options.particles.opacity.animation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.initialVelocity = Particle.calculateVelocity(options);
        this.velocity = {
            horizontal: this.initialVelocity.horizontal,
            vertical: this.initialVelocity.vertical,
        };
        this.fill = true;
        this.close = true;
        var shapeType = options.particles.shape.type;
        if (shapeType instanceof Array) {
            this.shape = Utils_1.Utils.itemFromArray(shapeType);
        }
        else {
            this.shape = shapeType;
        }
        if (this.shape === ShapeType_1.ShapeType.image) {
            var shape = options.particles.shape;
            var index = Utils_1.Utils.arrayRandomIndex(container.images);
            var image = container.images[index];
            var optionsImage = shape.image instanceof Array ? shape.image[index] : shape.image;
            this.image = {
                data: image,
                ratio: optionsImage.width / optionsImage.height,
                replaceColor: optionsImage.replaceColor,
                src: optionsImage.src,
            };
            if (!this.image.ratio) {
                this.image.ratio = 1;
            }
            this.fill = (_a = optionsImage.fill) !== null && _a !== void 0 ? _a : this.fill;
            this.close = (_b = optionsImage.close) !== null && _b !== void 0 ? _b : this.close;
        }
        if (this.shape === ShapeType_1.ShapeType.polygon) {
            if (options.particles.shape.polygon instanceof Array) {
                this.polygon = Utils_1.Utils.itemFromArray(options.particles.shape.polygon);
            }
            else {
                this.polygon = options.particles.shape.polygon;
            }
            this.fill = (_c = this.polygon.fill) !== null && _c !== void 0 ? _c : this.fill;
            this.close = (_d = this.polygon.close) !== null && _d !== void 0 ? _d : this.close;
        }
        if (options.particles.stroke instanceof Array) {
            this.stroke = Utils_1.Utils.itemFromArray(options.particles.stroke);
        }
        else {
            this.stroke = options.particles.stroke;
        }
        this.strokeColor = typeof this.stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = typeof options.particles.shadow.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(options.particles.shadow.color) :
            ColorUtils_1.ColorUtils.colorToRgb(options.particles.shadow.color);
        if (this.shape === ShapeType_1.ShapeType.char || this.shape === ShapeType_1.ShapeType.character) {
            if (options.particles.shape.character instanceof Array) {
                this.character = Utils_1.Utils.itemFromArray(options.particles.shape.character);
            }
            else {
                this.character = options.particles.shape.character;
            }
            var value = this.character.value;
            this.text = value instanceof Array ? Utils_1.Utils.itemFromArray(value) : value;
            this.fill = (_e = this.character.fill) !== null && _e !== void 0 ? _e : this.fill;
            this.close = (_f = this.character.close) !== null && _f !== void 0 ? _f : this.close;
        }
        var shapeData = options.particles.shape.custom[this.shape];
        if (shapeData) {
            this.shapeData = shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData) : shapeData;
            this.fill = (_g = this.shapeData.fill) !== null && _g !== void 0 ? _g : this.fill;
            this.close = (_h = this.shapeData.close) !== null && _h !== void 0 ? _h : this.close;
        }
        this.updater = new Updater_1.Updater(this.container, this);
        this.bubbler = new Bubbler_1.Bubbler(this.container, this);
        this.repulser = new Repulser_1.Repulser(this.container, this);
        this.drawer = new Drawer_1.Drawer(this.container, this);
        this.grabber = new Grabber_1.Grabber(this.container, this);
        this.connecter = new Connecter_1.Connecter(this.container, this);
        this.interactionManager = new InteractionManager_1.InteractionManager(this.container, this);
    }
    Particle.calculateVelocity = function (options) {
        var baseVelocity = Utils_1.Utils.getParticleBaseVelocity(options);
        var res = {
            horizontal: 0,
            vertical: 0,
        };
        if (options.particles.move.straight) {
            res.horizontal = baseVelocity.x;
            res.vertical = baseVelocity.y;
            if (options.particles.move.random) {
                res.horizontal *= Math.random();
                res.vertical *= Math.random();
            }
        }
        else {
            res.horizontal = baseVelocity.x + Math.random() - 0.5;
            res.vertical = baseVelocity.y + Math.random() - 0.5;
        }
        return res;
    };
    Particle.prototype.resetVelocity = function () {
        var container = this.container;
        var options = container.options;
        var velocity = Particle.calculateVelocity(options);
        this.velocity.horizontal = velocity.horizontal;
        this.velocity.vertical = velocity.vertical;
    };
    Particle.prototype.update = function (index, delta) {
        var container = this.container;
        var options = container.options;
        this.updater.update(delta);
        var hoverMode = options.interactivity.events.onHover.mode;
        var clickMode = options.interactivity.events.onClick.mode;
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.grab, hoverMode)) {
            this.grabber.grab();
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.connect, options.interactivity.events.onHover.mode)) {
            for (var j = index + 1; j < container.particles.count; j++) {
                var p2 = container.particles.array[j];
                this.connecter.connect(p2);
            }
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
            this.bubbler.bubble();
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode) || Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode)) {
            this.repulser.repulse();
        }
    };
    Particle.prototype.interact = function (p2) {
        this.interactionManager.interact(p2);
    };
    Particle.prototype.draw = function () {
        this.drawer.draw();
    };
    Particle.prototype.isOverlapping = function () {
        var container = this.container;
        var p = this;
        var collisionFound = false;
        var iterations = 0;
        for (var _i = 0, _a = container.particles.array.filter(function (t) { return t != p; }); _i < _a.length; _i++) {
            var p2 = _a[_i];
            iterations++;
            var dist = Utils_1.Utils.getDistanceBetweenCoordinates(p.position, p2.position);
            if (dist <= p.radius + p2.radius) {
                collisionFound = true;
                break;
            }
        }
        return {
            collisionFound: collisionFound,
            iterations: iterations,
        };
    };
    Particle.prototype.checkOverlap = function (position) {
        var container = this.container;
        var p = this;
        var overlapResult = p.isOverlapping();
        if (overlapResult.iterations >= container.particles.count) {
            container.particles.remove(this);
        }
        else if (overlapResult.collisionFound) {
            p.position.x = position ? position.x : Math.random() * container.canvas.dimension.width;
            p.position.y = position ? position.y : Math.random() * container.canvas.dimension.height;
            p.checkOverlap();
        }
    };
    Particle.prototype.calcPosition = function (container, position) {
        var _a, _b;
        var pos = { x: 0, y: 0 };
        var options = container.options;
        if (options.polygon.enable && ((_b = (_a = container.polygon.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            if (position) {
                pos.x = position.x;
                pos.y = position.y;
            }
            else {
                var randomPoint = container.polygon.randomPointInPolygon();
                pos.x = randomPoint.x;
                pos.y = randomPoint.y;
            }
        }
        else {
            pos.x = position ? position.x : Math.random() * container.canvas.dimension.width;
            pos.y = position ? position.y : Math.random() * container.canvas.dimension.height;
            if (pos.x > container.canvas.dimension.width - this.radius * 2) {
                pos.x -= this.radius;
            }
            else if (pos.x < this.radius * 2) {
                pos.x += this.radius;
            }
            if (pos.y > container.canvas.dimension.height - this.radius * 2) {
                pos.y -= this.radius;
            }
            else if (pos.y < this.radius * 2) {
                pos.y += this.radius;
            }
        }
        return pos;
    };
    return Particle;
}());
exports.Particle = Particle;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Attracter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Attracter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Attracter = (function () {
    function Attracter(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Attracter.prototype.attract = function (p2) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var dx = particle.position.x - p2.position.x;
        var dy = particle.position.y - p2.position.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= container.retina.lineLinkedDistance) {
            var ax = dx / (options.particles.move.attract.rotate.x * 1000);
            var ay = dy / (options.particles.move.attract.rotate.y * 1000);
            particle.velocity.horizontal -= ax;
            particle.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    };
    return Attracter;
}());
exports.Attracter = Attracter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Bubbler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Bubbler.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType_1 = __webpack_require__(/*! ../../Enums/ProcessBubbleType */ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js");
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var HoverMode_1 = __webpack_require__(/*! ../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var ClickMode_1 = __webpack_require__(/*! ../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var Constants_1 = __webpack_require__(/*! ../Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Bubbler = (function () {
    function Bubbler(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Bubbler.prototype.bubble = function () {
        var container = this.container;
        var options = container.options;
        var hoverEnabled = options.interactivity.events.onHover.enable;
        var hoverMode = options.interactivity.events.onHover.mode;
        var clickEnabled = options.interactivity.events.onClick.enable;
        var clickMode = options.interactivity.events.onClick.mode;
        if (hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode)) {
            this.hoverBubble();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
            this.clickBubble();
        }
    };
    Bubbler.prototype.init = function () {
        var particle = this.particle;
        this.opacity = particle.opacity.value;
        this.radius = particle.radius;
    };
    Bubbler.prototype.process = function (distMouse, timeSpent, data) {
        var container = this.container;
        var options = container.options;
        var bubbleDuration = options.interactivity.modes.bubble.duration;
        var bubbleParam = data.bubbleObj.optValue;
        var bubbleDistance = container.retina.bubbleModeDistance;
        var particlesParam = data.particlesObj.optValue;
        var pObjBubble = data.bubbleObj.value;
        var pObj = data.particlesObj.value || 0;
        var type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        var value = pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                        if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                            this.radius = value;
                        }
                        if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                            this.opacity = value;
                        }
                    }
                }
                else {
                    if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                        this.radius = undefined;
                    }
                    if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                        this.opacity = undefined;
                    }
                }
            }
            else if (pObjBubble) {
                var value = bubbleParam * 2 - pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                    this.radius = value;
                }
                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                    this.opacity = value;
                }
            }
        }
    };
    Bubbler.prototype.clickBubble = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var mouseClickPos = container.interactivity.mouse.clickPosition || { x: 0, y: 0 };
        var distMouse = Utils_1.Utils.getDistanceBetweenCoordinates(particle.position, mouseClickPos);
        var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
        if (container.bubble.clicking) {
            if (timeSpent > options.interactivity.modes.bubble.duration) {
                container.bubble.durationEnd = true;
            }
            if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                container.bubble.clicking = false;
                container.bubble.durationEnd = false;
            }
            var sizeData = {
                bubbleObj: {
                    optValue: container.retina.bubbleModeSize,
                    value: this.radius,
                },
                particlesObj: {
                    optValue: container.retina.sizeValue,
                    value: this.particle.radius,
                },
                type: ProcessBubbleType_1.ProcessBubbleType.size,
            };
            this.process(distMouse, timeSpent, sizeData);
            var opacityData = {
                bubbleObj: {
                    optValue: options.interactivity.modes.bubble.opacity,
                    value: this.opacity,
                },
                particlesObj: {
                    optValue: options.particles.opacity.value,
                    value: this.particle.opacity.value,
                },
                type: ProcessBubbleType_1.ProcessBubbleType.opacity,
            };
            this.process(distMouse, timeSpent, opacityData);
        }
    };
    Bubbler.prototype.hoverBubble = function () {
        var container = this.container;
        var particle = this.particle;
        var mousePos = container.interactivity.mouse.position || {
            x: 0,
            y: 0,
        };
        var distMouse = Utils_1.Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
        var ratio = 1 - distMouse / container.retina.bubbleModeDistance;
        if (distMouse <= container.retina.bubbleModeDistance) {
            if (ratio >= 0 && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
                this.hoverBubbleSize(ratio);
                this.hoverBubbleOpacity(ratio);
            }
        }
        else {
            this.init();
        }
        if (container.interactivity.status === Constants_1.Constants.mouseLeaveEvent) {
            this.init();
        }
    };
    Bubbler.prototype.hoverBubbleSize = function (ratio) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var modeSize = options.interactivity.modes.bubble.size;
        var optSize = options.particles.size.value;
        var pSize = particle.radius;
        if (container.retina.bubbleModeSize > container.retina.sizeValue) {
            var size = pSize + modeSize * ratio;
            if (size > pSize && size <= modeSize) {
                this.radius = size;
            }
        }
        else if (container.retina.bubbleModeSize < container.retina.sizeValue) {
            var size = pSize - (optSize - modeSize) * ratio;
            if (size < pSize && size >= modeSize) {
                this.radius = size;
            }
        }
    };
    Bubbler.prototype.hoverBubbleOpacity = function (ratio) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var modeOpacity = options.interactivity.modes.bubble.opacity;
        var optOpacity = options.particles.opacity.value;
        var pOpacity = particle.opacity.value;
        if (modeOpacity > optOpacity) {
            var opacity = pOpacity + modeOpacity * ratio;
            if (opacity > pOpacity && opacity <= modeOpacity) {
                this.opacity = opacity;
            }
        }
        else if (modeOpacity < optOpacity) {
            var opacity = pOpacity - (optOpacity - modeOpacity) * ratio;
            if (opacity < pOpacity && opacity >= modeOpacity) {
                this.opacity = opacity;
            }
        }
    };
    return Bubbler;
}());
exports.Bubbler = Bubbler;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Collider.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Collider.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Collider = (function () {
    function Collider(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Collider.prototype.collide = function (p2) {
        var p1 = this.particle;
        if (p1 === p2) {
            return;
        }
        var dist = Utils_1.Utils.getDistanceBetweenCoordinates(p1.position, p2.position);
        var distP = (p1.bubbler.radius || p1.radius) + (p2.bubbler.radius || p2.radius);
        if (dist <= distP) {
            p1.resetVelocity();
            p2.resetVelocity();
        }
    };
    return Collider;
}());
exports.Collider = Collider;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Connecter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Connecter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Connecter = (function () {
    function Connecter(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Connecter.prototype.connect = function (destParticle) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            var xDiff = Math.abs(particle.position.x - destParticle.position.x);
            var yDiff = Math.abs(particle.position.y - destParticle.position.y);
            var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            var xCoreDiff = Math.abs(particle.position.x - mousePos.x);
            var yCoreDiff = Math.abs(particle.position.y - mousePos.y);
            var distMax = Math.abs(container.retina.connectModeDistance);
            var connectAreaRadius = Math.abs(container.retina.connectModeRadius);
            if (xDiff < distMax && yDiff < distMax && xCoreDiff < connectAreaRadius && yCoreDiff < connectAreaRadius) {
                container.canvas.drawConnectLine(particle, destParticle);
            }
        }
    };
    return Connecter;
}());
exports.Connecter = Connecter;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Drawer.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Drawer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Drawer = (function () {
    function Drawer(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Drawer.prototype.draw = function () {
        var container = this.container;
        var particle = this.particle;
        container.canvas.drawParticle(particle);
    };
    return Drawer;
}());
exports.Drawer = Drawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Grabber.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Grabber.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Constants_1 = __webpack_require__(/*! ../Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Grabber = (function () {
    function Grabber(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Grabber.prototype.grab = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
            var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            var distMouse = Utils_1.Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
            if (distMouse <= container.retina.grabModeDistance) {
                var lineOpacity = interactivity.modes.grab.lineLinked.opacity;
                var grabDistance = container.retina.grabModeDistance;
                var opacityLine = lineOpacity - (distMouse * lineOpacity) / grabDistance;
                if (opacityLine > 0) {
                    container.canvas.drawGrabLine(particle, opacityLine, mousePos);
                }
            }
        }
    };
    return Grabber;
}());
exports.Grabber = Grabber;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/InteractionManager.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/InteractionManager.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Linker_1 = __webpack_require__(/*! ./Linker */ "./node_modules/tsparticles/dist/Classes/Particle/Linker.js");
var Attracter_1 = __webpack_require__(/*! ./Attracter */ "./node_modules/tsparticles/dist/Classes/Particle/Attracter.js");
var Collider_1 = __webpack_require__(/*! ./Collider */ "./node_modules/tsparticles/dist/Classes/Particle/Collider.js");
var InteractionManager = (function () {
    function InteractionManager(container, particle) {
        this.container = container;
        this.linker = new Linker_1.Linker(container, particle);
        this.attracter = new Attracter_1.Attracter(container, particle);
        this.collider = new Collider_1.Collider(container, particle);
    }
    InteractionManager.prototype.interact = function (p2) {
        var container = this.container;
        var options = container.options;
        if (options.particles.lineLinked.enable) {
            this.linker.link(p2);
        }
        if (options.particles.move.attract.enable) {
            this.attracter.attract(p2);
        }
        if (options.particles.move.collisions) {
            this.collider.collide(p2);
        }
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Linker.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Linker.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = __webpack_require__(/*! ../Utils/ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Constants_1 = __webpack_require__(/*! ../Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Linker = (function () {
    function Linker(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Linker.prototype.link = function (p2) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var pos1 = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        var pos2 = {
            x: p2.position.x + p2.offset.x,
            y: p2.position.y + p2.offset.y,
        };
        var dist = Utils_1.Utils.getDistanceBetweenCoordinates(pos1, pos2);
        var optOpacity = options.particles.lineLinked.opacity;
        var optDistance = container.retina.lineLinkedDistance;
        if (dist <= optDistance) {
            var opacityLine = optOpacity - (dist * optOpacity) / optDistance;
            if (opacityLine > 0) {
                if (!container.particles.lineLinkedColor) {
                    var color = options.particles.lineLinked.color;
                    if (color === Constants_1.Constants.randomColorValue) {
                        if (options.particles.lineLinked.consent) {
                            container.particles.lineLinkedColor = ColorUtils_1.ColorUtils.stringToRgb(color);
                        }
                        else if (options.particles.lineLinked.blink) {
                            container.particles.lineLinkedColor = Constants_1.Constants.randomColorValue;
                        }
                        else {
                            container.particles.lineLinkedColor = "mid";
                        }
                    }
                    else {
                        container.particles.lineLinkedColor = typeof color === "string" ?
                            ColorUtils_1.ColorUtils.stringToRgb(color) :
                            ColorUtils_1.ColorUtils.colorToRgb(color);
                    }
                }
                container.canvas.drawLinkedLine(particle, p2, pos1, pos2, opacityLine);
            }
        }
    };
    return Linker;
}());
exports.Linker = Linker;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Mover.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Mover.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var HoverMode_1 = __webpack_require__(/*! ../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var Mover = (function () {
    function Mover(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Mover.prototype.move = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.particles.move.enable) {
            var slowFactor = this.getProximitySpeedFactor();
            var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
            var moveSpeed = container.retina.moveSpeed / 2 * slowFactor * deltaFactor;
            particle.position.x += particle.velocity.horizontal * moveSpeed;
            particle.position.y += particle.velocity.vertical * moveSpeed;
        }
        this.moveParallax();
    };
    Mover.prototype.moveParallax = function () {
        var container = this.container;
        var options = container.options;
        if (!options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        var particle = this.particle;
        var parallaxForce = options.interactivity.events.onHover.parallax.force;
        var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
        var windowDimension = {
            height: window.innerHeight / 2,
            width: window.innerWidth / 2,
        };
        var parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        var tmp = {
            x: (mousePos.x - windowDimension.width) * (particle.radius / parallaxForce),
            y: (mousePos.y - windowDimension.height) * (particle.radius / parallaxForce),
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    };
    Mover.prototype.getProximitySpeedFactor = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var active = Utils_1.Utils.isInArray(HoverMode_1.HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
            return 1;
        }
        var mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
            return 1;
        }
        var particlePos = particle.position;
        var dist = Utils_1.Utils.getDistanceBetweenCoordinates(mousePos, particlePos);
        var radius = container.retina.slowModeRadius;
        if (dist > radius) {
            return 1;
        }
        var proximityFactor = (dist / radius) || 0;
        var slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    };
    return Mover;
}());
exports.Mover = Mover;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Repulser.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Repulser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = __webpack_require__(/*! ../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var HoverMode_1 = __webpack_require__(/*! ../../Enums/Modes/HoverMode */ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js");
var OutMode_1 = __webpack_require__(/*! ../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var DivMode_1 = __webpack_require__(/*! ../../Enums/Modes/DivMode */ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js");
var Constants_1 = __webpack_require__(/*! ../Utils/Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var Repulser = (function () {
    function Repulser(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Repulser.prototype.repulse = function () {
        var container = this.container;
        var options = container.options;
        var hoverEnabled = options.interactivity.events.onHover.enable;
        var clickEnabled = options.interactivity.events.onClick.enable;
        var mouseMoveStatus = container.interactivity.status === Constants_1.Constants.mouseMoveEvent;
        var hoverMode = options.interactivity.events.onHover.mode;
        var clickMode = options.interactivity.events.onClick.mode;
        var divMode = options.interactivity.events.onDiv.mode;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse();
        }
        else if (options.interactivity.events.onDiv.enable && Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
            this.divRepulse();
        }
    };
    Repulser.prototype.divRepulse = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
        var pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2),
            y: (elem.offsetTop + elem.offsetHeight / 2),
        };
        var divWidth = elem.offsetWidth / 2;
        if (container.retina.isRetina) {
            pos.x *= container.retina.pxRatio;
            pos.y *= container.retina.pxRatio;
            divWidth *= container.retina.pxRatio;
        }
        var dxDiv = particle.position.x - pos.x;
        var dyDiv = particle.position.y - pos.y;
        var distDiv = Math.sqrt(dxDiv * dxDiv + dyDiv * dyDiv);
        var normVec = {
            x: dxDiv / distDiv,
            y: dyDiv / distDiv,
        };
        var repulseRadius = divWidth;
        var velocity = 100;
        var repulseFactor = Utils_1.Utils.clamp((-Math.pow(distDiv / repulseRadius, 4) + 1) * velocity, 0, 50);
        this.particle.position.x += normVec.x * repulseFactor;
        this.particle.position.y += normVec.y * repulseFactor;
    };
    Repulser.prototype.clickRepulse = function () {
        var container = this.container;
        var particle = this.particle;
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            var repulseDistance = container.retina.repulseModeDistance;
            var repulseRadius = Math.pow(repulseDistance / 6, 3);
            var mouseClickPos = container.interactivity.mouse.clickPosition || { x: 0, y: 0 };
            var dx = mouseClickPos.x - particle.position.x;
            var dy = mouseClickPos.y - particle.position.y;
            var d = dx * dx + dy * dy;
            var force = -repulseRadius / d;
            if (d <= repulseRadius) {
                this.processRepulse(dx, dy, force);
            }
        }
        else if (container.repulse.clicking === false) {
            particle.velocity.horizontal = particle.initialVelocity.horizontal;
            particle.velocity.vertical = particle.initialVelocity.vertical;
        }
    };
    Repulser.prototype.hoverRepulse = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
        var dxMouse = particle.position.x - mousePos.x;
        var dyMouse = particle.position.y - mousePos.y;
        var distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        var normVec = { x: dxMouse / distMouse, y: dyMouse / distMouse };
        var repulseRadius = container.retina.repulseModeDistance;
        var velocity = 100;
        var repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(distMouse / repulseRadius, 2)) * velocity, 0, 50);
        var pos = {
            x: particle.position.x + normVec.x * repulseFactor,
            y: particle.position.y + normVec.y * repulseFactor,
        };
        var outMode = options.particles.move.outMode;
        if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceVertical || outMode === OutMode_1.OutMode.bounceHorizontal) {
            var isInside = {
                horizontal: pos.x - particle.radius > 0 && pos.x + particle.radius < container.canvas.dimension.width,
                vertical: pos.y - particle.radius > 0 && pos.y + particle.radius < container.canvas.dimension.height,
            };
            if (outMode === OutMode_1.OutMode.bounceVertical || isInside.horizontal) {
                particle.position.x = pos.x;
            }
            if (outMode === OutMode_1.OutMode.bounceHorizontal || isInside.vertical) {
                particle.position.y = pos.y;
            }
        }
        else {
            particle.position.x = pos.x;
            particle.position.y = pos.y;
        }
    };
    Repulser.prototype.processRepulse = function (dx, dy, force) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var f = Math.atan2(dy, dx);
        particle.velocity.horizontal = force * Math.cos(f);
        particle.velocity.vertical = force * Math.sin(f);
        var outMode = options.particles.move.outMode;
        if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal || outMode === OutMode_1.OutMode.bounceVertical) {
            var pos = {
                x: particle.position.x + particle.velocity.horizontal,
                y: particle.position.y + particle.velocity.vertical,
            };
            if (outMode !== OutMode_1.OutMode.bounceVertical) {
                if (pos.x + particle.radius > container.canvas.dimension.width || pos.x - particle.radius < 0) {
                    particle.velocity.horizontal = -particle.velocity.horizontal;
                }
            }
            if (outMode !== OutMode_1.OutMode.bounceHorizontal) {
                if (pos.y + particle.radius > container.canvas.dimension.height || pos.y - particle.radius < 0) {
                    particle.velocity.vertical = -particle.velocity.vertical;
                }
            }
        }
    };
    return Repulser;
}());
exports.Repulser = Repulser;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particle/Updater.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particle/Updater.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OutMode_1 = __webpack_require__(/*! ../../Enums/OutMode */ "./node_modules/tsparticles/dist/Enums/OutMode.js");
var Utils_1 = __webpack_require__(/*! ../Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Mover_1 = __webpack_require__(/*! ./Mover */ "./node_modules/tsparticles/dist/Classes/Particle/Mover.js");
var RotateDirection_1 = __webpack_require__(/*! ../../Enums/RotateDirection */ "./node_modules/tsparticles/dist/Enums/RotateDirection.js");
var Updater = (function () {
    function Updater(container, particle) {
        this.container = container;
        this.particle = particle;
        this.mover = new Mover_1.Mover(container, particle);
    }
    Updater.checkBounds = function (coordinate, radius, size, outside) {
        if ((coordinate + radius > size) || (coordinate - radius < 0)) {
            outside();
        }
    };
    Updater.prototype.update = function (delta) {
        this.mover.move(delta);
        this.updateOpacity();
        this.updateSize();
        this.updateAngle();
        this.fixOutOfCanvasPosition();
        this.updateOutMode();
    };
    Updater.prototype.updateOpacity = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.particles.opacity.animation.enable) {
            if (particle.opacity.status) {
                if (particle.opacity.value >= options.particles.opacity.value) {
                    particle.opacity.status = false;
                }
                particle.opacity.value += (particle.opacity.velocity || 0);
            }
            else {
                if (particle.opacity.value <= options.particles.opacity.animation.minimumValue) {
                    particle.opacity.status = true;
                }
                particle.opacity.value -= (particle.opacity.velocity || 0);
            }
            if (particle.opacity.value < 0) {
                particle.opacity.value = 0;
            }
        }
    };
    Updater.prototype.updateSize = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.particles.size.animation.enable) {
            if (particle.size.status) {
                if (particle.radius >= container.retina.sizeValue) {
                    particle.size.status = false;
                }
                particle.radius += (particle.size.velocity || 0);
            }
            else {
                if (particle.radius <= options.particles.size.animation.minimumValue) {
                    particle.size.status = true;
                }
                particle.radius -= (particle.size.velocity || 0);
            }
            if (particle.radius < 0) {
                particle.radius = 0;
            }
        }
    };
    Updater.prototype.updateAngle = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.particles.rotate.animation.enable) {
            switch (particle.rotateDirection) {
                case RotateDirection_1.RotateDirection.clockwise:
                    particle.angle += options.particles.rotate.animation.speed * Math.PI / 18;
                    if (particle.angle > 360) {
                        particle.angle -= 360;
                    }
                    break;
                case RotateDirection_1.RotateDirection.counterClockwise:
                default:
                    particle.angle -= options.particles.rotate.animation.speed * Math.PI / 18;
                    if (particle.angle < 0) {
                        particle.angle += 360;
                    }
                    break;
            }
        }
    };
    Updater.prototype.fixOutOfCanvasPosition = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var outMode = options.particles.move.outMode;
        var canvasSize = container.canvas.dimension;
        var newPos;
        if (outMode === OutMode_1.OutMode.bounce) {
            newPos = {
                bottom: canvasSize.height,
                left: particle.radius,
                right: canvasSize.width,
                top: particle.radius,
            };
        }
        else if (outMode === OutMode_1.OutMode.bounceHorizontal) {
            newPos = {
                bottom: canvasSize.height + particle.radius - particle.offset.y,
                left: particle.radius,
                right: canvasSize.width,
                top: -particle.radius - particle.offset.y,
            };
        }
        else if (outMode === OutMode_1.OutMode.bounceVertical) {
            newPos = {
                bottom: canvasSize.height,
                left: -particle.radius - particle.offset.x,
                right: canvasSize.width + particle.radius + particle.offset.x,
                top: particle.radius,
            };
        }
        else {
            newPos = {
                bottom: canvasSize.height + particle.radius - particle.offset.y,
                left: -particle.radius - particle.offset.x,
                right: canvasSize.width + particle.radius + particle.offset.x,
                top: -particle.radius - particle.offset.y,
            };
        }
        if (outMode === OutMode_1.OutMode.destroy) {
            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.dimension, particle.radius)) {
                container.particles.remove(particle);
            }
        }
        else {
            var nextBounds = Utils_1.Utils.calculateBounds(particle.position, particle.radius);
            if (nextBounds.left > canvasSize.width - particle.offset.x) {
                particle.position.x = newPos.left;
                particle.position.y = Math.random() * canvasSize.height;
            }
            else if (nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                particle.position.y = Math.random() * canvasSize.height;
            }
            if (nextBounds.top > canvasSize.height - particle.offset.y) {
                particle.position.y = newPos.top;
                particle.position.x = Math.random() * canvasSize.width;
            }
            else if (nextBounds.bottom < -particle.offset.y) {
                particle.position.y = newPos.bottom;
                particle.position.x = Math.random() * canvasSize.width;
            }
        }
    };
    Updater.prototype.updateOutMode = function () {
        var container = this.container;
        var options = container.options;
        switch (options.particles.move.outMode) {
            case OutMode_1.OutMode.bounce:
            case OutMode_1.OutMode.bounceVertical:
            case OutMode_1.OutMode.bounceHorizontal:
                this.updateBounce();
                break;
        }
    };
    Updater.prototype.updateBounce = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
            if (!container.polygon.checkInsidePolygon(particle.position)) {
                this.polygonBounce();
            }
        }
        else if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            if (particle.initialPosition) {
                var dist = Utils_1.Utils.getDistanceBetweenCoordinates(particle.initialPosition, particle.position);
                if (dist > container.retina.polygonMaskMoveRadius) {
                    this.polygonBounce();
                }
            }
        }
        else {
            var outMode = options.particles.move.outMode;
            var x = particle.position.x + particle.offset.x;
            var y = particle.position.y + particle.offset.y;
            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal) {
                Updater.checkBounds(x, particle.radius, container.canvas.dimension.width, function () {
                    particle.velocity.horizontal = -particle.velocity.horizontal;
                });
            }
            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceVertical) {
                Updater.checkBounds(y, particle.radius, container.canvas.dimension.height, function () {
                    particle.velocity.vertical = -particle.velocity.vertical;
                });
            }
        }
    };
    Updater.prototype.polygonBounce = function () {
        var particle = this.particle;
        particle.velocity.horizontal = -particle.velocity.horizontal + (particle.velocity.vertical / 2);
        particle.velocity.vertical = -particle.velocity.vertical + (particle.velocity.horizontal / 2);
    };
    return Updater;
}());
exports.Updater = Updater;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Particles.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Particles.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Classes/Particle.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var PolygonMaskInlineArrangement_1 = __webpack_require__(/*! ../Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js");
var Particles = (function () {
    function Particles(container) {
        this.container = container;
        this.array = [];
        this.interactionsEnabled = false;
    }
    Object.defineProperty(Particles.prototype, "count", {
        get: function () {
            return this.array.length;
        },
        enumerable: true,
        configurable: true
    });
    Particles.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline &&
            (options.polygon.inline.arrangement === PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint ||
                options.polygon.inline.arrangement === PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint)) {
            container.polygon.drawPointsOnPolygonPath();
        }
        else {
            for (var i = this.array.length; i < options.particles.number.value; i++) {
                this.addParticle(new Particle_1.Particle(container));
            }
        }
        this.interactionsEnabled = options.particles.lineLinked.enable ||
            options.particles.move.attract.enable ||
            options.particles.move.collisions;
    };
    Particles.prototype.redraw = function () {
        this.clear();
        this.init();
        this.draw(0);
    };
    Particles.prototype.removeAt = function (index, quantity) {
        if (index >= 0 && index <= this.count) {
            this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1);
        }
    };
    Particles.prototype.remove = function (particle) {
        this.removeAt(this.array.indexOf(particle));
    };
    Particles.prototype.update = function (delta) {
        for (var i = 0; i < this.array.length; i++) {
            var p = this.array[i];
            p.update(i, delta);
            if (this.interactionsEnabled) {
                for (var j = i + 1; j < this.array.length; j++) {
                    var p2 = this.array[j];
                    p.interact(p2);
                }
            }
        }
    };
    Particles.prototype.draw = function (delta) {
        var container = this.container;
        var options = container.options;
        container.canvas.clear();
        this.update(delta);
        if (options.polygon.enable && options.polygon.draw.enable) {
            container.polygon.drawPolygon();
        }
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var p = _a[_i];
            p.draw();
        }
    };
    Particles.prototype.clear = function () {
        this.array = [];
    };
    Particles.prototype.push = function (nb, mousePosition) {
        var _a;
        var container = this.container;
        var options = container.options;
        this.pushing = true;
        if (options.particles.number.limit > 0) {
            if ((this.array.length + nb) > options.particles.number.limit) {
                this.removeQuantity((this.array.length + nb) - options.particles.number.limit);
            }
        }
        var pos;
        if (mousePosition) {
            pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
        }
        for (var i = 0; i < nb; i++) {
            this.addParticle(new Particle_1.Particle(container, pos));
        }
        if (!options.particles.move.enable) {
            this.container.play();
        }
        this.pushing = false;
    };
    Particles.prototype.addParticle = function (particle) {
        this.array.push(particle);
    };
    Particles.prototype.removeQuantity = function (quantity) {
        var container = this.container;
        var options = container.options;
        this.removeAt(0, quantity);
        if (!options.particles.move.enable) {
            this.container.play();
        }
    };
    return Particles;
}());
exports.Particles = Particles;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/PolygonMask.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/PolygonMask.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType_1 = __webpack_require__(/*! ../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Particle_1 = __webpack_require__(/*! ./Particle */ "./node_modules/tsparticles/dist/Classes/Particle.js");
var PolygonMaskInlineArrangement_1 = __webpack_require__(/*! ../Enums/PolygonMaskInlineArrangement */ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js");
var Utils_1 = __webpack_require__(/*! ./Utils/Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var PolygonMask = (function () {
    function PolygonMask(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0
        };
        this.polygonPathLength = 0;
        this.path2DSupported = window.hasOwnProperty("Path2D");
    }
    PolygonMask.prototype.checkInsidePolygon = function (position) {
        var container = this.container;
        var options = container.options;
        if (!options.polygon.enable ||
            options.polygon.type === PolygonMaskType_1.PolygonMaskType.none ||
            options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            return true;
        }
        if (!this.raw) {
            console.error('No polygon found, you need to specify SVG url in config.');
            return true;
        }
        var x = position ? position.x : Math.random() * container.canvas.dimension.width;
        var y = position ? position.y : Math.random() * container.canvas.dimension.height;
        var inside = false;
        for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            var xi = this.raw[i].x;
            var yi = this.raw[i].y;
            var xj = this.raw[j].x;
            var yj = this.raw[j].y;
            var intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) {
                inside = !inside;
            }
        }
        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inside) {
            return inside;
        }
        else if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.outside) {
            return !inside;
        }
        return false;
    };
    PolygonMask.prototype.redraw = function () {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none) {
            if (this.redrawTimeout) {
                clearTimeout(this.redrawTimeout);
            }
            this.redrawTimeout = setTimeout(function () {
                _this.parseSvgPathToPolygon().then(function (data) {
                    _this.raw = data;
                    _this.createPath2D();
                    container.particles.redraw();
                });
            }, 250);
        }
    };
    PolygonMask.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var container, options, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        container = this.container;
                        options = container.options;
                        if (!(options.polygon.enable && options.polygon.url)) return [3, 2];
                        _a = this;
                        return [4, this.parseSvgPathToPolygon(options.polygon.url)];
                    case 1:
                        _a.raw = _b.sent();
                        this.createPath2D();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    PolygonMask.prototype.reset = function () {
        delete this.raw;
        delete this.path;
        delete this.svg;
    };
    PolygonMask.prototype.randomPointInPolygon = function () {
        var container = this.container;
        var options = container.options;
        var position;
        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            switch (options.polygon.inline.arrangement) {
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomPoint:
                    position = this.getRandomPointOnPolygonPath();
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomLength:
                    position = this.getRandomPointOnPolygonPathByLength();
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.equidistant:
                    position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
                    break;
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint:
                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint:
                default:
                    position = this.getPoingOnPolygonPathByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.dimension.width,
                y: Math.random() * container.canvas.dimension.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPointInPolygon();
        }
    };
    PolygonMask.prototype.parseSvgPathToPolygon = function (svgUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var container, options, url, req, xml, parser, doc, scale, len, polygonRaw, p, i, segment, absSeg, relSeg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = this.container;
                        options = container.options;
                        url = svgUrl || options.polygon.url;
                        if (!(!this.path || !this.svg)) return [3, 4];
                        return [4, fetch(url)];
                    case 1:
                        req = _a.sent();
                        if (!req.ok) return [3, 3];
                        return [4, req.text()];
                    case 2:
                        xml = _a.sent();
                        parser = new DOMParser();
                        doc = parser.parseFromString(xml, "image/svg+xml");
                        this.svg = doc.getElementsByTagName("svg")[0];
                        this.path = doc.getElementsByTagName("path")[0];
                        if (this.path) {
                            this.polygonPathLength = this.path.getTotalLength();
                        }
                        return [3, 4];
                    case 3:
                        console.error("tsParticles Error - during polygon mask download");
                        return [2];
                    case 4:
                        scale = options.polygon.scale;
                        this.dimension.width = parseFloat(this.svg.getAttribute("width") || "0") * scale;
                        this.dimension.height = parseFloat(this.svg.getAttribute("height") || "0") * scale;
                        this.offset = {
                            x: container.canvas.dimension.width / 2 - this.dimension.width / 2,
                            y: container.canvas.dimension.height / 2 - this.dimension.height / 2,
                        };
                        len = this.path.pathSegList.numberOfItems;
                        polygonRaw = [];
                        p = {
                            x: 0,
                            y: 0,
                        };
                        for (i = 0; i < len; i++) {
                            segment = this.path.pathSegList.getItem(i);
                            switch (segment.pathSegType) {
                                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                    absSeg = segment;
                                    p.x = absSeg.x;
                                    p.y = absSeg.y;
                                    break;
                                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                                    p.x = segment.x;
                                    break;
                                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                                    p.y = segment.y;
                                    break;
                                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                                case window.SVGPathSeg.PATHSEG_ARC_REL:
                                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                    relSeg = segment;
                                    p.x += relSeg.x;
                                    p.y += relSeg.y;
                                    break;
                                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                                    p.x += segment.x;
                                    break;
                                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                                    p.y += segment.y;
                                    break;
                                case window.SVGPathSeg.PATHSEG_UNKNOWN:
                                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                                    continue;
                            }
                            polygonRaw.push({
                                x: p.x * scale + this.offset.x,
                                y: p.y * scale + this.offset.y,
                            });
                        }
                        return [2, polygonRaw];
                }
            });
        });
    };
    PolygonMask.prototype.drawPolygon = function () {
        var container = this.container;
        container.canvas.drawPolygonMask();
    };
    PolygonMask.prototype.drawPointsOnPolygonPath = function () {
        var container = this.container;
        if (this.raw) {
            for (var _i = 0, _a = this.raw; _i < _a.length; _i++) {
                var item = _a[_i];
                var position = {
                    x: item.x,
                    y: item.y,
                };
                container.particles.addParticle(new Particle_1.Particle(container, position));
            }
        }
    };
    PolygonMask.prototype.getRandomPointOnPolygonPath = function () {
        if (!this.raw || !this.raw.length)
            throw new Error("No polygon data loaded.");
        var coords = Utils_1.Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMask.prototype.getRandomPointOnPolygonPathByLength = function () {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        if (!this.raw || !this.raw.length || !this.path)
            throw new Error("No polygon data loaded.");
        var distance = Math.floor(Math.random() * this.polygonPathLength) + 1;
        var point = this.path.getPointAtLength(distance);
        return {
            x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
            y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0),
        };
    };
    PolygonMask.prototype.getEquidistantPointOnPolygonPathByIndex = function (index) {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        if (!this.raw || !this.raw.length || !this.path)
            throw new Error("No polygon data loaded.");
        var distance = (this.polygonPathLength / options.particles.number.value) * index;
        var point = this.path.getPointAtLength(distance);
        return {
            x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
            y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0),
        };
    };
    PolygonMask.prototype.getPoingOnPolygonPathByIndex = function (index) {
        if (!this.raw || !this.raw.length)
            throw new Error("No polygon data loaded.");
        var coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMask.prototype.createPath2D = function () {
        var _this = this;
        var _a;
        if (!this.path2DSupported) {
            return;
        }
        var pathData = (_a = this.path) === null || _a === void 0 ? void 0 : _a.getAttribute("d");
        if (pathData) {
            var path = new Path2D(pathData);
            var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
            var finalPath = new Path2D();
            var transform = matrix.scale(this.container.options.polygon.scale);
            if (finalPath.addPath) {
                finalPath.addPath(path, transform);
                this.polygonPath = finalPath;
            }
            else {
                delete this.polygonPath;
            }
        }
        else {
            delete this.polygonPath;
        }
        if (!this.polygonPath && this.raw) {
            this.polygonPath = new Path2D();
            this.polygonPath.moveTo(this.raw[0].x, this.raw[0].y);
            this.raw.forEach(function (pos, i) {
                var _a;
                if (i > 0) {
                    (_a = _this.polygonPath) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                }
            });
            this.polygonPath.closePath();
        }
    };
    return PolygonMask;
}());
exports.PolygonMask = PolygonMask;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Retina.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Retina.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Retina = (function () {
    function Retina(container) {
        this.container = container;
        this.isRetina = false;
        this.bubbleModeDistance = 0;
        this.bubbleModeSize = 0;
        this.connectModeDistance = 0;
        this.connectModeRadius = 0;
        this.grabModeDistance = 0;
        this.repulseModeDistance = 0;
        this.slowModeRadius = 0;
        this.lineLinkedDistance = 0;
        this.lineLinkedWidth = 0;
        this.moveSpeed = 0;
        this.sizeValue = 0;
        this.sizeAnimationSpeed = 0;
        this.polygonMaskMoveRadius = 0;
        this.pxRatio = 1;
    }
    Retina.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        if (options.detectRetina && window.devicePixelRatio > 1) {
            this.pxRatio = window.devicePixelRatio;
            this.isRetina = true;
        }
        else {
            this.pxRatio = 1;
            this.isRetina = false;
        }
        var ratio = this.pxRatio;
        if (container.canvas.element) {
            container.canvas.dimension.width = container.canvas.element.offsetWidth * ratio;
            container.canvas.dimension.height = container.canvas.element.offsetHeight * ratio;
        }
        this.bubbleModeDistance = options.interactivity.modes.bubble.distance * ratio;
        this.bubbleModeSize = options.interactivity.modes.bubble.size * ratio;
        this.connectModeDistance = options.interactivity.modes.connect.distance * ratio;
        this.connectModeRadius = options.interactivity.modes.connect.radius * ratio;
        this.grabModeDistance = options.interactivity.modes.grab.distance * ratio;
        this.repulseModeDistance = options.interactivity.modes.repulse.distance * ratio;
        this.slowModeRadius = options.interactivity.modes.slow.radius * ratio;
        this.lineLinkedDistance = options.particles.lineLinked.distance * ratio;
        this.lineLinkedWidth = options.particles.lineLinked.width * ratio;
        this.moveSpeed = options.particles.move.speed * ratio;
        this.sizeValue = options.particles.size.value * ratio;
        this.sizeAnimationSpeed = options.particles.size.animation.speed * ratio;
        this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
    };
    Retina.prototype.reset = function () {
    };
    return Retina;
}());
exports.Retina = Retina;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/CircleDrawer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/CircleDrawer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CircleDrawer = (function () {
    function CircleDrawer() {
    }
    CircleDrawer.prototype.draw = function (context, particle, radius, opacity) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
    };
    return CircleDrawer;
}());
exports.CircleDrawer = CircleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/ImageDrawer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/ImageDrawer.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ImageDrawer = (function () {
    function ImageDrawer() {
    }
    ImageDrawer.prototype.draw = function (context, particle, radius, opacity) {
        var _a;
        if (!context) {
            return;
        }
        var imgObj = (_a = particle.image) === null || _a === void 0 ? void 0 : _a.data.obj;
        if (!imgObj) {
            return;
        }
        var ratio = 1;
        if (particle.image) {
            ratio = particle.image.ratio;
        }
        var pos = {
            x: -radius,
            y: -radius,
        };
        context.globalAlpha = opacity;
        context.drawImage(imgObj, pos.x, pos.y, radius * 2, radius * 2 / ratio);
        context.globalAlpha = 1;
    };
    return ImageDrawer;
}());
exports.ImageDrawer = ImageDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/LineDrawer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/LineDrawer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LineDrawer = (function () {
    function LineDrawer() {
    }
    LineDrawer.prototype.draw = function (context, particle, radius, opacity) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    };
    return LineDrawer;
}());
exports.LineDrawer = LineDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js");
var PolygonDrawer = (function (_super) {
    __extends(PolygonDrawer, _super);
    function PolygonDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolygonDrawer.prototype.getSidesData = function (particle, radius) {
        var _a, _b;
        var sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
        var side = {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: radius * 2.66 / (sides / 3),
        };
        return side;
    };
    PolygonDrawer.prototype.getCenter = function (particle, radius) {
        var _a, _b;
        var sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
        var start = {
            x: -radius / (sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
        return start;
    };
    return PolygonDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.PolygonDrawer = PolygonDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase = (function () {
    function PolygonDrawerBase() {
    }
    PolygonDrawerBase.prototype.draw = function (context, particle, radius, opacity) {
        var start = this.getCenter(particle, radius);
        var side = this.getSidesData(particle, radius);
        var sideCount = side.count.numerator * side.count.denominator;
        var decimalSides = side.count.numerator / side.count.denominator;
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    };
    return PolygonDrawerBase;
}());
exports.PolygonDrawerBase = PolygonDrawerBase;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/SquareDrawer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/SquareDrawer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SquareDrawer = (function () {
    function SquareDrawer() {
    }
    SquareDrawer.prototype.draw = function (context, particle, radius, opacity) {
        context.rect(-radius, -radius, radius * 2, radius * 2);
    };
    return SquareDrawer;
}());
exports.SquareDrawer = SquareDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/StarDrawer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/StarDrawer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js");
var StarDrawer = (function (_super) {
    __extends(StarDrawer, _super);
    function StarDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarDrawer.prototype.getSidesData = function (particle, radius) {
        var _a, _b;
        var sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
        var side = {
            count: {
                denominator: 2,
                numerator: sides,
            },
            length: radius * 2 * 2.66 / (sides / 3),
        };
        return side;
    };
    StarDrawer.prototype.getCenter = function (particle, radius) {
        var _a, _b;
        var sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
        var start = {
            x: -radius * 2 / (sides / 4),
            y: -radius / (2 * 2.66 / 3.5),
        };
        return start;
    };
    return StarDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.StarDrawer = StarDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/TextDrawer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/TextDrawer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TextDrawer = (function () {
    function TextDrawer() {
    }
    TextDrawer.prototype.draw = function (context, particle, radius, opacity) {
        var text = particle.text;
        var character = particle.character;
        if (text === undefined || character === undefined) {
            return;
        }
        var style = character.style;
        var weight = character.weight;
        var size = Math.round(radius) * 2;
        var font = character.font;
        var fill = character.fill;
        context.font = style + " " + weight + " " + size + "px \"" + font + "\"";
        var pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    };
    return TextDrawer;
}());
exports.TextDrawer = TextDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/TriangleDrawer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/ShapeDrawers/TriangleDrawer.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase_1 = __webpack_require__(/*! ./PolygonDrawerBase */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawerBase.js");
var TriangleDrawer = (function (_super) {
    __extends(TriangleDrawer, _super);
    function TriangleDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleDrawer.prototype.getSidesData = function (particle, radius) {
        var side = {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
        return side;
    };
    TriangleDrawer.prototype.getCenter = function (particle, radius) {
        var start = {
            x: -radius,
            y: radius / 1.66,
        };
        return start;
    };
    return TriangleDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.TriangleDrawer = TriangleDrawer;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/CanvasUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/CanvasUtils.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeUtils_1 = __webpack_require__(/*! ./ShapeUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ShapeUtils.js");
var ColorUtils_1 = __webpack_require__(/*! ./ColorUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js");
var CanvasUtils = (function () {
    function CanvasUtils() {
    }
    CanvasUtils.paintBase = function (context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
    };
    CanvasUtils.clear = function (context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
    };
    CanvasUtils.drawPolygonMask = function (context, rawData, stroke) {
        var color = typeof stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.save();
            context.beginPath();
            context.moveTo(rawData[0].x, rawData[0].y);
            for (var i = 1; i < rawData.length; i++) {
                context.lineTo(rawData[i].x, rawData[i].y);
            }
            context.closePath();
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(color);
            context.lineWidth = stroke.width;
            context.stroke();
            context.restore();
        }
    };
    CanvasUtils.drawPolygonMaskPath = function (context, path, stroke, position) {
        context.save();
        context.translate(position.x, position.y);
        var color = typeof stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(color, stroke.opacity);
            context.lineWidth = stroke.width;
            context.stroke(path);
        }
        context.restore();
    };
    CanvasUtils.drawLineLinked = function (context, width, begin, end, backgroundMask, colorLine, opacity, shadow) {
        context.save();
        if (backgroundMask) {
            context.globalCompositeOperation = 'destination-out';
        }
        if (colorLine) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(colorLine, opacity);
            ;
        }
        context.lineWidth = width;
        context.beginPath();
        var color = typeof shadow.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(shadow.color) :
            ColorUtils_1.ColorUtils.colorToRgb(shadow.color);
        if (shadow.enable && color) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromColor(color);
        }
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();
        context.restore();
    };
    CanvasUtils.drawConnectLine = function (context, width, lineStyle, begin, end) {
        context.save();
        context.beginPath();
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();
        context.restore();
    };
    CanvasUtils.gradient = function (context, p1, p2, midColor, opacity) {
        var gradStop = Math.floor(p2.radius / p1.radius);
        if (!p1.color || !p2.color) {
            return;
        }
        var sourcePos = p1.position;
        var destPos = p2.position;
        var grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromColor(p1.color, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromColor(midColor, opacity));
        grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromColor(p2.color, opacity));
        return grad;
    };
    CanvasUtils.drawGrabLine = function (context, width, begin, end, colorLine, opacity) {
        context.save();
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(colorLine, opacity);
        context.lineWidth = width;
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();
        context.restore();
    };
    CanvasUtils.drawParticle = function (context, particle, colorValue, backgroundMask, radius, opacity) {
        context.save();
        var shadow = particle.container.options.particles.shadow;
        var shadowColor = particle.shadowColor;
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromColor(shadowColor);
            context.shadowOffsetX = shadow.offset.x;
            context.shadowOffsetY = shadow.offset.y;
        }
        context.fillStyle = colorValue;
        var pos = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        context.translate(pos.x, pos.y);
        context.beginPath();
        if (particle.angle !== 0) {
            context.rotate(particle.angle * Math.PI / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        var stroke = particle.stroke;
        if (stroke.width > 0 && particle.strokeColor) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(particle.strokeColor, particle.stroke.opacity);
            context.lineWidth = stroke.width;
        }
        ShapeUtils_1.ShapeUtils.drawShape(context, particle, radius, opacity);
        if (particle.close) {
            context.closePath();
        }
        if (stroke.width > 0 && particle.strokeColor) {
            context.stroke();
        }
        if (particle.fill) {
            context.fill();
        }
        context.restore();
    };
    return CanvasUtils;
}());
exports.CanvasUtils = CanvasUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/ColorUtils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var ColorUtils = (function () {
    function ColorUtils() {
    }
    ColorUtils.colorToRgb = function (color) {
        var res;
        if (typeof (color.value) === "string") {
            if (color.value === Constants_1.Constants.randomColorValue) {
                res = {
                    b: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    r: Math.floor(Math.random() * 256),
                };
            }
            else {
                res = ColorUtils.stringToRgb(color.value);
            }
        }
        else {
            if (color.value instanceof Array) {
                var colorSelected = Utils_1.Utils.itemFromArray(color.value);
                res = ColorUtils.stringToRgb(colorSelected);
            }
            else {
                var rgbColor = color.value;
                if (rgbColor.r !== undefined) {
                    res = rgbColor;
                }
                var hslColor = color.value;
                if (hslColor.h !== undefined) {
                    res = ColorUtils.hslToRgb(hslColor);
                }
            }
        }
        return res;
    };
    ColorUtils.stringToAlpha = function (input) {
        var _a;
        return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    };
    ColorUtils.stringToRgb = function (input) {
        return ColorUtils.stringToRgba(input);
    };
    ColorUtils.hslToRgb = function (hsl) {
        var result = { b: 0, g: 0, r: 0 };
        if (hsl.s === 0) {
            result.b = hsl.l;
            result.g = hsl.l;
            result.r = hsl.l;
        }
        else {
            var q = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : hsl.l + hsl.s - hsl.l * hsl.s;
            var p = 2 * hsl.l - q;
            result.r = ColorUtils.hue2rgb(p, q, hsl.h + 1 / 3);
            result.g = ColorUtils.hue2rgb(p, q, hsl.h);
            result.b = ColorUtils.hue2rgb(p, q, hsl.h - 1 / 3);
        }
        result.r = Math.round(result.r * 255);
        result.g = Math.round(result.g * 255);
        result.b = Math.round(result.b * 255);
        return result;
    };
    ColorUtils.hslaToRgba = function (hsla) {
        var rgbResult = ColorUtils.hslToRgb(hsla);
        return {
            a: hsla.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    };
    ColorUtils.getRandomRgbColor = function (min) {
        var _a;
        var fixedMin = min || 0;
        var minColor = fixedMin + (fixedMin * Math.pow(16, 2)) + (fixedMin * Math.pow(16, 4));
        var maxColor = minColor ^ 0xFFFFFF;
        var randomColor = (Math.random() * maxColor + minColor).toString(16);
        return (_a = this.stringToRgb("#" + randomColor)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
    };
    ColorUtils.getStyleFromColor = function (color, opacity) {
        var opacityValue = opacity !== null && opacity !== void 0 ? opacity : 1;
        return "rgba(" + Math.round(color.r) + ", " + Math.round(color.g) + ", " + Math.round(color.b) + ", " + opacityValue + ")";
    };
    ColorUtils.hue2rgb = function (p, q, t) {
        var tCalc = t;
        if (tCalc < 0) {
            tCalc += 1;
        }
        if (tCalc > 1) {
            tCalc -= 1;
        }
        if (tCalc < 1 / 6) {
            return p + (q - p) * 6 * tCalc;
        }
        if (tCalc < 1 / 2) {
            return q;
        }
        if (tCalc < 2 / 3) {
            return p + (q - p) * (2 / 3 - tCalc) * 6;
        }
        return p;
    };
    ColorUtils.stringToRgba = function (input) {
        if (input.startsWith('rgb')) {
            var regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d\.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result ? {
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                b: parseInt(result[3]),
                g: parseInt(result[2]),
                r: parseInt(result[1]),
            } : undefined;
        }
        else if (input.startsWith('hsl')) {
            var regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([\d\.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result ? ColorUtils.hslaToRgba({
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                h: parseInt(result[1]),
                l: parseInt(result[3]),
                s: parseInt(result[2]),
            }) : undefined;
        }
        else {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
            var hexFixed = input.replace(shorthandRegex, function (_m, r, g, b, a) {
                return r + r + g + g + b + b + (a ? a + a : "");
            });
            var regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
            var result = regex.exec(hexFixed);
            return result ? {
                a: parseInt(result[4], 16) / 0xFF,
                b: parseInt(result[3], 16),
                g: parseInt(result[2], 16),
                r: parseInt(result[1], 16),
            } : undefined;
        }
    };
    return ColorUtils;
}());
exports.ColorUtils = ColorUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/Constants.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = (function () {
    function Constants() {
    }
    Constants.canvasClass = "tsparticles-canvas-el";
    Constants.randomColorValue = "random";
    Constants.touchEndEvent = "touchend";
    Constants.mouseUpEvent = "mouseup";
    Constants.mouseMoveEvent = "mousemove";
    Constants.touchStartEvent = "touchstart";
    Constants.touchMoveEvent = "touchmove";
    Constants.mouseLeaveEvent = "mouseleave";
    Constants.touchCancelEvent = "touchcancel";
    Constants.resizeEvent = "resize";
    Constants.visibilityChangeEvent = "visibilitychange";
    return Constants;
}());
exports.Constants = Constants;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/EventListeners.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/EventListeners.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = __webpack_require__(/*! ../../Enums/Modes/ClickMode */ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js");
var InteractivityDetect_1 = __webpack_require__(/*! ../../Enums/InteractivityDetect */ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js");
var PolygonMaskType_1 = __webpack_require__(/*! ../../Enums/PolygonMaskType */ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/tsparticles/dist/Classes/Utils/Constants.js");
var EventListeners = (function () {
    function EventListeners(container) {
        var _this = this;
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchStartHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchEndHandler = function () { return _this.mouseTouchFinish(); };
        this.mouseLeaveHandler = function () { return _this.mouseTouchFinish(); };
        this.touchCancelHandler = function () { return _this.mouseTouchFinish(); };
        this.touchEndClickHandler = function (e) { return _this.mouseTouchClick(e); };
        this.mouseUpHandler = function (e) { return _this.mouseTouchClick(e); };
        this.visibilityChangeHandler = function () { return _this.handleVisibilityChange(); };
        this.resizeHandler = function () { return _this.handleWindowResize(); };
    }
    EventListeners.prototype.addListeners = function () {
        this.manageListeners(true);
    };
    EventListeners.prototype.removeListeners = function () {
        this.manageListeners(false);
    };
    EventListeners.prototype.manageListeners = function (add) {
        var container = this.container;
        var options = container.options;
        if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        var interactivityEl = container.interactivity.element;
        if (interactivityEl && (options.interactivity.events.onHover.enable ||
            options.interactivity.events.onClick.enable)) {
            this.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            this.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            this.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                this.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            this.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            this.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            this.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            this.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            this.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            this.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    };
    EventListeners.prototype.manageListener = function (element, event, handler, add, options) {
        if (add) {
            this.addListener(element, event, handler, options);
        }
        else {
            this.removeListener(element, event, handler, options);
        }
    };
    EventListeners.prototype.addListener = function (element, event, handler, options) {
        element.addEventListener(event, handler, options);
    };
    EventListeners.prototype.removeListener = function (element, event, handler, options) {
        element.removeEventListener(event, handler, options);
    };
    EventListeners.prototype.handleWindowResize = function () {
        var container = this.container;
        var options = container.options;
        if (!container.canvas.element) {
            return;
        }
        container.canvas.dimension.width = container.canvas.element.offsetWidth;
        container.canvas.dimension.height = container.canvas.element.offsetHeight;
        if (container.retina.isRetina) {
            container.canvas.dimension.width *= container.retina.pxRatio;
            container.canvas.dimension.height *= container.retina.pxRatio;
        }
        container.canvas.element.width = container.canvas.dimension.width;
        container.canvas.element.height = container.canvas.dimension.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        container.polygon.redraw();
    };
    EventListeners.prototype.handleVisibilityChange = function () {
        var container = this.container;
        var options = container.options;
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            container.play();
        }
    };
    EventListeners.prototype.mouseTouchMove = function (e) {
        var _a, _b, _c;
        var container = this.container;
        var options = container.options;
        var pos;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            var mouseEvent = e;
            if (container.interactivity.element === window && container.canvas.element) {
                var clientRect = container.canvas.element.getBoundingClientRect();
                pos = {
                    x: mouseEvent.clientX - clientRect.left,
                    y: mouseEvent.clientY - clientRect.top,
                };
            }
            else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent) {
                var source = mouseEvent.target;
                var target = mouseEvent.currentTarget;
                if (source && target) {
                    var sourceRect = source.getBoundingClientRect();
                    var targetRect = target.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
                    };
                }
                else {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
            else {
                pos = {
                    x: mouseEvent.offsetX || mouseEvent.clientX,
                    y: mouseEvent.offsetY || mouseEvent.clientY,
                };
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            var touchEvent = e;
            var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            var canvasRect = (_a = container.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0),
            };
        }
        container.interactivity.mouse.position = pos;
        if (container.retina.isRetina) {
            container.interactivity.mouse.position.x *= container.retina.pxRatio;
            container.interactivity.mouse.position.y *= container.retina.pxRatio;
        }
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    };
    EventListeners.prototype.mouseTouchFinish = function () {
        var container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
    };
    EventListeners.prototype.mouseTouchClick = function (e) {
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
            if (container.polygon.checkInsidePolygon(container.interactivity.mouse.position)) {
                this.doMouseTouchClick(e);
            }
        }
        else {
            this.doMouseTouchClick(e);
        }
    };
    EventListeners.prototype.doMouseTouchClick = function (e) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (this.canPush) {
            if (container.interactivity.mouse.position) {
                container.interactivity.mouse.clickPosition = {
                    x: container.interactivity.mouse.position.x,
                    y: container.interactivity.mouse.position.y,
                };
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            var pushNb = options.interactivity.modes.push.quantity;
            var removeNb = options.interactivity.modes.remove.quantity;
            switch (options.interactivity.events.onClick.mode) {
                case ClickMode_1.ClickMode.push:
                    if (options.particles.move.enable) {
                        container.particles.push(pushNb, container.interactivity.mouse);
                    }
                    else {
                        if (options.interactivity.modes.push.quantity === 1) {
                            container.particles.push(pushNb, container.interactivity.mouse);
                        }
                        else if (options.interactivity.modes.push.quantity > 1) {
                            container.particles.push(pushNb);
                        }
                    }
                    break;
                case ClickMode_1.ClickMode.remove:
                    container.particles.removeQuantity(removeNb);
                    break;
                case ClickMode_1.ClickMode.bubble:
                    container.bubble.clicking = true;
                    break;
                case ClickMode_1.ClickMode.repulse:
                    container.repulse.clicking = true;
                    container.repulse.count = 0;
                    container.repulse.finish = false;
                    setTimeout(function () {
                        if (!container.destroyed) {
                            container.repulse.clicking = false;
                        }
                    }, options.interactivity.modes.repulse.duration * 1000);
                    break;
            }
        }
        e.preventDefault();
        if (e.type === "touchend") {
            setTimeout(function () { return _this.mouseTouchFinish(); }, 500);
        }
        e.preventDefault();
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/Presets.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/Presets.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Presets = (function () {
    function Presets() {
    }
    Presets.getPreset = function (preset) {
        return this.presets[preset];
    };
    Presets.addPreset = function (presetKey, options) {
        if (!this.presets[presetKey]) {
            this.presets[presetKey] = options;
        }
    };
    Presets.presets = {};
    return Presets;
}());
exports.Presets = Presets;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/ShapeUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/ShapeUtils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeUtils = (function () {
    function ShapeUtils() {
    }
    ShapeUtils.addShapeDrawer = function (type, drawer) {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    };
    ShapeUtils.drawShape = function (context, particle, radius, opacity) {
        if (!particle.shape) {
            return;
        }
        var drawer = this.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity);
    };
    ShapeUtils.drawers = {};
    return ShapeUtils;
}());
exports.ShapeUtils = ShapeUtils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Classes/Utils/Utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Classes/Utils/Utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection_1 = __webpack_require__(/*! ../../Enums/MoveDirection */ "./node_modules/tsparticles/dist/Enums/MoveDirection.js");
var Utils = (function () {
    function Utils() {
    }
    Utils.clamp = function (num, min, max) {
        return Math.min(Math.max(num, min), max);
    };
    Utils.isInArray = function (value, array) {
        return value === array || array.indexOf(value) > -1;
    };
    Utils.mix = function (comp1, comp2, weight1, weight2) {
        return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
    };
    Utils.getParticleBaseVelocity = function (options) {
        var velocityBase;
        switch (options.particles.move.direction) {
            case MoveDirection_1.MoveDirection.top:
                velocityBase = { x: 0, y: -1 };
                break;
            case MoveDirection_1.MoveDirection.topRight:
                velocityBase = { x: 0.5, y: -0.5 };
                break;
            case MoveDirection_1.MoveDirection.right:
                velocityBase = { x: 1, y: -0 };
                break;
            case MoveDirection_1.MoveDirection.bottomRight:
                velocityBase = { x: 0.5, y: 0.5 };
                break;
            case MoveDirection_1.MoveDirection.bottom:
                velocityBase = { x: 0, y: 1 };
                break;
            case MoveDirection_1.MoveDirection.bottomLeft:
                velocityBase = { x: -0.5, y: 1 };
                break;
            case MoveDirection_1.MoveDirection.left:
                velocityBase = { x: -1, y: 0 };
                break;
            case MoveDirection_1.MoveDirection.topLeft:
                velocityBase = { x: -0.5, y: -0.5 };
                break;
            default:
                velocityBase = { x: 0, y: 0 };
                break;
        }
        return velocityBase;
    };
    Utils.getDistanceBetweenCoordinates = function (pointA, pointB) {
        var dx = pointA.x - pointB.x;
        var dy = pointA.y - pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Utils.loadFont = function (character) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, document.fonts.load(character.weight + " 36px '" + character.font + "'")];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Utils.arrayRandomIndex = function (array) {
        return Math.floor(Math.random() * array.length);
    };
    Utils.itemFromArray = function (array, index) {
        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
    };
    Utils.randomInRange = function (min, max) {
        return (Math.random() * (max - min)) + min;
    };
    Utils.isPointInside = function (point, size, radius) {
        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
    };
    Utils.areBoundsInside = function (bounds, size) {
        return bounds.left < size.width && bounds.right > 0
            && bounds.top < size.height && bounds.bottom > 0;
    };
    Utils.calculateBounds = function (point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius,
        };
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/InteractivityDetect.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/InteractivityDetect.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InteractivityDetect;
(function (InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/ClickMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode;
(function (ClickMode) {
    ClickMode["bubble"] = "bubble";
    ClickMode["push"] = "push";
    ClickMode["remove"] = "remove";
    ClickMode["repulse"] = "repulse";
})(ClickMode = exports.ClickMode || (exports.ClickMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/DivMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/DivMode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DivMode;
(function (DivMode) {
    DivMode["repulse"] = "repulse";
})(DivMode = exports.DivMode || (exports.DivMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/Modes/HoverMode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HoverMode;
(function (HoverMode) {
    HoverMode["bubble"] = "bubble";
    HoverMode["connect"] = "connect";
    HoverMode["grab"] = "grab";
    HoverMode["repulse"] = "repulse";
    HoverMode["slow"] = "slow";
})(HoverMode = exports.HoverMode || (exports.HoverMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/MoveDirection.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/MoveDirection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection;
(function (MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/OutMode.js":
/*!********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/OutMode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OutMode;
(function (OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["bounceHorizontal"] = "bounce-horizontal";
    OutMode["bounceVertical"] = "bounce-vertical";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
})(OutMode = exports.OutMode || (exports.OutMode = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskInlineArrangement.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskInlineArrangement;
(function (PolygonMaskInlineArrangement) {
    PolygonMaskInlineArrangement["equidistant"] = "equidistant";
    PolygonMaskInlineArrangement["onePerPoint"] = "one-per-point";
    PolygonMaskInlineArrangement["perPoint"] = "per-point";
    PolygonMaskInlineArrangement["randomLength"] = "random-length";
    PolygonMaskInlineArrangement["randomPoint"] = "random-point";
})(PolygonMaskInlineArrangement = exports.PolygonMaskInlineArrangement || (exports.PolygonMaskInlineArrangement = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js":
/*!********************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskMoveType.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskMoveType;
(function (PolygonMaskMoveType) {
    PolygonMaskMoveType["path"] = "path";
    PolygonMaskMoveType["radius"] = "radius";
})(PolygonMaskMoveType = exports.PolygonMaskMoveType || (exports.PolygonMaskMoveType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/PolygonMaskType.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/PolygonMaskType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PolygonMaskType;
(function (PolygonMaskType) {
    PolygonMaskType["inline"] = "inline";
    PolygonMaskType["inside"] = "inside";
    PolygonMaskType["outside"] = "outside";
    PolygonMaskType["none"] = "none";
})(PolygonMaskType = exports.PolygonMaskType || (exports.PolygonMaskType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ProcessBubbleType.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType;
(function (ProcessBubbleType) {
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/RotateDirection.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/RotateDirection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotateDirection;
(function (RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/Enums/ShapeType.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles/dist/Enums/ShapeType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType;
(function (ShapeType) {
    ShapeType["char"] = "char";
    ShapeType["character"] = "character";
    ShapeType["circle"] = "circle";
    ShapeType["edge"] = "edge";
    ShapeType["heart"] = "heart";
    ShapeType["image"] = "image";
    ShapeType["line"] = "line";
    ShapeType["polygon"] = "polygon";
    ShapeType["square"] = "square";
    ShapeType["star"] = "star";
    ShapeType["triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));


/***/ }),

/***/ "./node_modules/tsparticles/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/tsparticles/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Loader_1 = __webpack_require__(/*! ./Classes/Loader */ "./node_modules/tsparticles/dist/Classes/Loader.js");
var ShapeUtils_1 = __webpack_require__(/*! ./Classes/Utils/ShapeUtils */ "./node_modules/tsparticles/dist/Classes/Utils/ShapeUtils.js");
var ShapeType_1 = __webpack_require__(/*! ./Enums/ShapeType */ "./node_modules/tsparticles/dist/Enums/ShapeType.js");
var LineDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/LineDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/LineDrawer.js");
var CircleDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/CircleDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/CircleDrawer.js");
var SquareDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/SquareDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/SquareDrawer.js");
var TriangleDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/TriangleDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/TriangleDrawer.js");
var StarDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/StarDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/StarDrawer.js");
var PolygonDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/PolygonDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/PolygonDrawer.js");
var TextDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/TextDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/TextDrawer.js");
var ImageDrawer_1 = __webpack_require__(/*! ./Classes/ShapeDrawers/ImageDrawer */ "./node_modules/tsparticles/dist/Classes/ShapeDrawers/ImageDrawer.js");
var Presets_1 = __webpack_require__(/*! ./Classes/Utils/Presets */ "./node_modules/tsparticles/dist/Classes/Utils/Presets.js");
var Main = (function () {
    function Main() {
        this.initialized = false;
        if (typeof window !== "undefined" && window) {
            window.customRequestAnimationFrame = (function () {
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    (function (callback) { return window.setTimeout(callback, 1000 / 60); });
            })();
            window.customCancelRequestAnimationFrame = (function () {
                return window.cancelAnimationFrame ||
                    window.webkitCancelRequestAnimationFrame ||
                    window.mozCancelRequestAnimationFrame ||
                    window.oCancelRequestAnimationFrame ||
                    window.msCancelRequestAnimationFrame ||
                    clearTimeout;
            })();
        }
        var squareDrawer = new SquareDrawer_1.SquareDrawer();
        var textDrawer = new TextDrawer_1.TextDrawer();
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.line, new LineDrawer_1.LineDrawer());
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.edge, squareDrawer);
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.square, squareDrawer);
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.star, new StarDrawer_1.StarDrawer());
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.char, textDrawer);
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.character, textDrawer);
        ShapeUtils_1.ShapeUtils.addShapeDrawer(ShapeType_1.ShapeType.image, new ImageDrawer_1.ImageDrawer());
    }
    Main.prototype.init = function () {
        if (!this.initialized) {
            this.initialized = true;
            if (typeof window !== "undefined" && window) {
                var tsParticles_1 = this;
                window.particlesJS = function (tagId, params) {
                    tsParticles_1.load(tagId, params);
                };
                window.particlesJS.load = function (tagId, pathConfigJson, callback) {
                    tsParticles_1.loadJSON(tagId, pathConfigJson).then(function (container) {
                        if (container) {
                            callback(container);
                        }
                    });
                };
                window.particlesJS.setOnClickHandler = function (callback) {
                    tsParticles_1.setOnClickHandler(callback);
                };
                window.pJSDom = function () {
                    return window.tsParticles.dom();
                };
            }
        }
    };
    Main.prototype.loadFromArray = function (tagId, params, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader_1.Loader.loadFromArray(tagId, params, index)];
            });
        });
    };
    Main.prototype.load = function (tagId, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader_1.Loader.load(tagId, params)];
            });
        });
    };
    Main.prototype.loadJSON = function (tagId, pathConfigJson) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson);
    };
    Main.prototype.setOnClickHandler = function (callback) {
        Loader_1.Loader.setOnClickHandler(callback);
    };
    Main.prototype.dom = function () {
        return Loader_1.Loader.dom();
    };
    Main.prototype.domItem = function (index) {
        return Loader_1.Loader.domItem(index);
    };
    Main.prototype.addShape = function (shape, drawer) {
        var customDrawer;
        if (typeof drawer === "function") {
            customDrawer = {
                draw: drawer,
            };
        }
        else {
            customDrawer = drawer;
        }
        ShapeUtils_1.ShapeUtils.addShapeDrawer(shape, customDrawer);
    };
    Main.prototype.addPreset = function (preset, options) {
        Presets_1.Presets.addPreset(preset, options);
    };
    return Main;
}());
var tsParticles = new Main();
exports.tsParticles = tsParticles;
tsParticles.init();


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
/* harmony import */ var _ui_library_Hobby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui_library/Hobby */ "./src/components/ui_library/Hobby.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/about/AboutSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__Container",
  componentId: "t5p5rt-0"
})(["width:100%;height:25em;background-color:#1B262C;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__Wrapper",
  componentId: "t5p5rt-1"
})(["width:calc(80% + (0.9rem * 2));height:100%;margin-left:auto;margin-right:auto;display:grid;grid-template-columns:repeat(3,0.9rem) 25.5rem 0.9rem auto 0.9rem;grid-template-rows:1fr;"]);
const ExperienceContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__ExperienceContainer",
  componentId: "t5p5rt-2"
})(["padding-left:1em;border-style:solid;border-color:#1B262C;border-width:1px;background-color:#FFFFFF;display:flex;flex-direction:column;justify-content:center;"]);
const InterestsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__InterestsContainer",
  componentId: "t5p5rt-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const HobbiesContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__HobbiesContainer",
  componentId: "t5p5rt-4"
})(["margin-top:2em;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:1fr;grid-column-gap:1.5em;"]);
const VerticalBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__VerticalBar",
  componentId: "t5p5rt-5"
})(["width:0.9rem;height:100%;"]);
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
})(["color:#1B262C;font-size:4em;"]);
const ExperienceInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "AboutSection__ExperienceInfo",
  componentId: "t5p5rt-9"
})(["margin-top:1.4em;color:#1B262C;font-size:1.5em;"]);
const InterestHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "AboutSection__InterestHeader",
  componentId: "t5p5rt-10"
})(["color:#E1E2E7;font-size:1.5em;text-align:center;"]);
class AboutSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }), __jsx(ColoredVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }), __jsx(ExperienceContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 32
      }
    }, "4Y"), "EARS"), __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 32
      }
    }, "7M"), "ONTHS"), __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 32
      }
    }, "5D"), "AYS"), __jsx(ExperienceInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, "in the professional software development industry")), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }), __jsx(InterestsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }, __jsx(InterestHeader, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, "My hobbies and interests beside", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 60
      }
    }), "software development"), __jsx(HobbiesContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, __jsx(_ui_library_Hobby__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Run",
      logoSrc: "/images/ic_run.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    }), __jsx(_ui_library_Hobby__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Hike",
      logoSrc: "/images/ic_hike.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }), __jsx(_ui_library_Hobby__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Swim",
      logoSrc: "/images/ic_swim.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }))), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ }),

/***/ "./src/components/sections/contact/Contact.jsx":
/*!*****************************************************!*\
  !*** ./src/components/sections/contact/Contact.jsx ***!
  \*****************************************************/
/*! exports provided: Contact, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/contact/Contact.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Contact__Container",
  componentId: "sc-356ttk-0"
})(["display:flex;flex-direction:column;align-items:center;padding-top:5em;padding-bottom:5em;"]);
const TitleLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Contact__TitleLabel",
  componentId: "sc-356ttk-1"
})(["color:#1B262C;font-size:2em;text-align:center;"]);
const HubspotFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Contact__HubspotFormContainer",
  componentId: "sc-356ttk-2"
})(["width:40em;margin-top:3em;"]);
class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '7066917',
          formId: '43535f8f-187c-40c7-bdd2-0b41d59c0142',
          target: '#hubspotForm'
        });
      }
    });
  }

  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }
    }, __jsx(TitleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, "Have something to say or just want to say Hi?"), __jsx(HubspotFormContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "hubspotForm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/sections/footer/Footer.jsx":
/*!***************************************************!*\
  !*** ./src/components/sections/footer/Footer.jsx ***!
  \***************************************************/
/*! exports provided: Footer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/footer/Footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer.withConfig({
  displayName: "Footer__Container",
  componentId: "x0dxmo-0"
})(["width:100%;background-color:#1B262C;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__Wrapper",
  componentId: "x0dxmo-1"
})(["width:80%;margin-left:auto;margin-right:auto;padding-top:5.3em;padding-bottom:5.3em;display:flex;justify-content:space-between;"]);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__InfoContainer",
  componentId: "x0dxmo-2"
})(["display:flex;flex-direction:column;"]);
const SectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__SectionsContainer",
  componentId: "x0dxmo-3"
})(["display:flex;flex-direction:column;align-items:flex-end;"]);
const LogoWebsiteContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__LogoWebsiteContainer",
  componentId: "x0dxmo-4"
})(["display:flex;flex-flow:row;"]);
const InfoSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__InfoSectionContainer",
  componentId: "x0dxmo-5"
})(["margin-top:2em;"]);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Footer__LogoImage",
  componentId: "x0dxmo-6"
})(["height:1.5em;margin-right:1em;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Footer__Info",
  componentId: "x0dxmo-7"
})(["font-size:1em;color:#E1E2E7;"]);
const SectionLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Footer__SectionLabel",
  componentId: "x0dxmo-8"
})(["font-size:1em;color:#E1E2E7;"]);
const SectionLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Footer__SectionLink",
  componentId: "x0dxmo-9"
})(["margin-top:1em;font-size:1em;color:#E1E2E7;text-decoration:underline;text-transform:lowercase;"]);
class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }, __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, __jsx(LogoWebsiteContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, __jsx(LogoImage, {
      src: "/images/ic_logo.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, "johnerisvillanueva.com")), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }, "This is my personal website that shows my portfolio."), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }, "It is created using React.js. The code for this website is available at github.com.")), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, "For my blog about software development, visit https://pinoydev.com."), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, "For my blog about adventure and recreation, visit https://weekendersph.com.")), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, "\xA9 John Eris Villanueva 2020"))), __jsx(SectionsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, __jsx(SectionLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, "Section"), __jsx(SectionLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, "Home"), __jsx(SectionLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, "Projects"), __jsx(SectionLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, "Skills"), __jsx(SectionLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, "About"), __jsx(SectionLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, "Contact"))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/sections/header/Header.jsx":
/*!***************************************************!*\
  !*** ./src/components/sections/header/Header.jsx ***!
  \***************************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");

var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/header/Header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1pmwqnk-0"
})(["height:", ";display:flex;align-items:center;"], props => {
  return props.height;
});
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1pmwqnk-1"
})(["width:80%;margin:auto;padding-top:0.6em;padding-bottom:0.6em;display:flex;justify-content:space-between;align-items:center;"]);
const LeftSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__LeftSideContainer",
  componentId: "sc-1pmwqnk-2"
})(["width:10em;display:flex;justify-content:flex-start;align-items:center;"]);
const RightSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__RightSideContainer",
  componentId: "sc-1pmwqnk-3"
})(["width:10em;display:flex;justify-content:flex-end;align-items:center;visibility:hidden;@media ", "{visibility:visible;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptopL);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Header__LogoImage",
  componentId: "sc-1pmwqnk-4"
})(["height:1.75em;margin-top:0.4em;@media ", "{margin-top:0;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptopL);
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Header__MenuButton",
  componentId: "sc-1pmwqnk-5"
})(["background-color:transparent;padding:0;display:", ";"], props => {
  return props.isOpen ? "none" : "block";
});
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Header__CloseButton",
  componentId: "sc-1pmwqnk-6"
})(["background-color:transparent;padding:0;position:absolute;display:", ";"], props => {
  return props.isOpen ? "block" : "none";
});
const ImageIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Header__ImageIcon",
  componentId: "sc-1pmwqnk-7"
})(["height:3em;"]);
const NavListContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__NavListContainer",
  componentId: "sc-1pmwqnk-8"
})(["@media ", "{width:100%;height:100vh;background-color:#1B262C;opacity:0.95;position:absolute;top:0;left:0;display:", ";align-items:center;justify-content:center;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptopL, props => {
  return props.isOpen ? "flex" : "none";
});
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "Header__NavList",
  componentId: "sc-1pmwqnk-9"
})(["list-style:none;padding-inline-start:0;display:flex;align-items:center;justify-content:center;@media ", "{height:100%;flex-direction:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptopL);
const NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "Header__NavListItem",
  componentId: "sc-1pmwqnk-10"
})(["@media ", "{margin-top:1em;margin-bottom:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptopL);
const NavListItemLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "Header__NavListItemLink",
  componentId: "sc-1pmwqnk-11"
})(["padding:0.2em 0.4em;margin:0.4em;color:#CCD5DB;font-size:1.5em;text-transform:lowercase;:hover{background-color:#22A055;border-radius:4px;color:white;}"]);
class Header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      isResponsiveNavOpen: false
    });

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    this.setState({
      isResponsiveNavOpen: true
    });
  }

  closeNav() {
    this.setState({
      isResponsiveNavOpen: false
    });
  }

  render() {
    return __jsx(Container, {
      height: this.props.height,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }
    }, __jsx(LeftSideContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }, __jsx(LogoImage, {
      src: "/images/ic_logo.svg",
      alt: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 30
      }
    })), __jsx(NavListContainer, {
      isOpen: this.state.isResponsiveNavOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }
    }, __jsx(NavList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }, __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 28
      }
    }, "Home")), __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 28
      }
    }, "Projects")), __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 28
      }
    }, "About")), __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 28
      }
    }, "Contact")))), __jsx(RightSideContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }
    }, __jsx(MenuButton, {
      onClick: this.openNav,
      isOpen: this.state.isResponsiveNavOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }
    }, __jsx(ImageIcon, {
      src: "/images/ic_menu.svg",
      alt: "menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 15
      }
    })), __jsx(CloseButton, {
      onClick: this.closeNav,
      isOpen: this.state.isResponsiveNavOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, __jsx(ImageIcon, {
      src: "/images/ic_close.svg",
      alt: "close menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 15
      }
    })))));
  }

}
Header.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/sections/home/Home.jsx":
/*!***********************************************!*\
  !*** ./src/components/sections/home/Home.jsx ***!
  \***********************************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _ui_library_SkillPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui_library/SkillPreview */ "./src/components/ui_library/SkillPreview.jsx");
/* harmony import */ var _ui_library_SocialMediaLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui_library/SocialMediaLink */ "./src/components/ui_library/SocialMediaLink.jsx");
/* harmony import */ var _ui_library_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui_library/Button */ "./src/components/ui_library/Button.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/home/Home.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__Container",
  componentId: "qlmz77-0"
})(["height:100%;width:100%;@media (max-width:1439px){height:auto;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__Wrapper",
  componentId: "qlmz77-1"
})(["width:90%;height:100%;margin-left:auto;margin-right:0;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto auto;grid-column-gap:2em;justify-content:space-between;align-content:center;@media (max-width:1439px){width:80%;margin-right:auto;grid-template-columns:100%;grid-template-rows:repeat(2,calc((100vh - 4em)/2)) 38em;grid-column-gap:2em;}@media (max-width:767px){grid-template-rows:calc((100vh - 4em) * 0.75) calc((100vh - 4em) * 0.25) 38em;}@media (max-width:424px){grid-template-rows:calc((100vh - 4em) * 0.6) calc((100vh - 4em) * 0.4) 38em;}"]);
const HeadingSkillsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__HeadingSkillsContainer",
  componentId: "qlmz77-2"
})(["grid-column:1 / span 1;grid-row:1 / span 1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;@media (max-width:1439px){grid-column:1 / span 1;grid-row:1 / span 1;justify-content:flex-end;}@media (max-width:767px){justify-content:center;align-items:center;}"]);
const ContactContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__ContactContainer",
  componentId: "qlmz77-3"
})(["grid-column:1 / span 1;grid-row:2 / span 1;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;padding-top:0;@media (max-width:1439px){grid-column:1 / span 1;grid-row:2 / span 1;justify-content:flex-start;padding-top:4em;}@media (max-width:767px){padding-top:1em;}@media (max-width:424px){justify-content:center;}"]);
const GreetingsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__GreetingsContainer",
  componentId: "qlmz77-4"
})(["grid-column:2 / span 1;grid-row:1 / span 2;@media (max-width:1439px){grid-column:1 / span 1;grid-row:3 / span 1;display:flex;flex-flow:column;justify-content:center;align-items:center;}"]);
const FullStackLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Home__FullStackLabel",
  componentId: "qlmz77-5"
})(["color:#FFFFFF;font-size:2em;@media (max-width:767px){font-size:1.5em;}@media (max-width:424px){font-size:1em;}"]);
const WebMobileLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Home__WebMobileLabel",
  componentId: "qlmz77-6"
})(["color:#FFFFFF;font-size:4em;@media (max-width:767px){font-size:2.5em;}@media (max-width:424px){font-size:1.5em;}"]);
const SkillListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__SkillListContainer",
  componentId: "qlmz77-7"
})(["margin-top:2.8em;display:grid;grid-template-columns:repeat(4,minmax(7em,10em));grid-template-rows:10em;grid-column-gap:1em;@media (max-width:767px){margin-top:1.5em;grid-template-columns:repeat(2,minmax(7em,10em));grid-template-rows:repeat(2,minmax(7em,10em));grid-column-gap:2em;grid-row-gap:2em;}@media (max-width:424px){margin-top:1em;grid-template-columns:repeat(2,minmax(7em,8em));grid-template-rows:repeat(2,minmax(7em,8em));grid-column-gap:1em;grid-row-gap:1em;}"]);
const EmailLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Home__EmailLabel",
  componentId: "qlmz77-8"
})(["margin-top:1.4rem;color:#CCD5DB;font-size:1.5em;@media (max-width:767px){font-size:1em;}"]);
const SocialMediaListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__SocialMediaListContainer",
  componentId: "qlmz77-9"
})(["margin-top:1.4rem;"]);
const SocialMediaList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Home__SocialMediaList",
  componentId: "qlmz77-10"
})(["list-style:none;display:flex;padding-inline-start:0px;li:not(:last-child){margin-right:1.4em;}"]);
const SocialMediaItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Home__SocialMediaItem",
  componentId: "qlmz77-11"
})([""]);
const MeBackground = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__MeBackground",
  componentId: "qlmz77-12"
})(["height:100%;width:19em;background-color:#212B31;position:absolute;top:0;right:9.7em;z-index:1;@media (max-width:1439px){display:none;}"]);
const MeImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Home__MeImage",
  componentId: "qlmz77-13"
})(["width:auto;height:38em;position:relative;z-index:2;@media (max-width:1439px){height:auto;position:static;margin-bottom:3em;}@media (max-width:767px){width:22em;margin-bottom:0;}@media (max-width:424px){width:100%;}"]);
const GreetingsLabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__GreetingsLabelContainer",
  componentId: "qlmz77-14"
})(["height:0px;width:10em;position:relative;top:2.8em;left:12em;z-index:3;display:flex;justify-content:center;@media (max-width:1439px){height:auto;width:auto;position:static;margin-bottom:1em;}"]);
const GreetingsLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Home__GreetingsLabel",
  componentId: "qlmz77-15"
})(["color:#CCD5DB;font-size:1.5em;@media (max-width:1439px){font-size:2em;}@media (max-width:767px){font-size:1.5em;}"]);
class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }
    }, __jsx(HeadingSkillsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 11
      }
    }, __jsx(FullStackLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 13
      }
    }, "Full Stack Developer"), __jsx(WebMobileLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 13
      }
    }, "Web and Mobile"), __jsx(SkillListContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }
    }, __jsx(_ui_library_SkillPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 15
      }
    }), __jsx(_ui_library_SkillPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "iOS",
      logoSrc: "/images/ic_ios.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 15
      }
    }), __jsx(_ui_library_SkillPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Web",
      logoSrc: "/images/ic_web.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 15
      }
    }), __jsx(_ui_library_SkillPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Backend",
      logoSrc: "/images/ic_backend.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 15
      }
    }))), __jsx(ContactContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 11
      }
    }, __jsx(_ui_library_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 13
      }
    }, "Contact Me"), __jsx(EmailLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 13
      }
    }, "email: me@johnerisvillanueva.com"), __jsx(SocialMediaListContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 13
      }
    }, __jsx(SocialMediaList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 15
      }
    }, __jsx(SocialMediaItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }
    }, __jsx(_ui_library_SocialMediaLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "LinkedIn",
      logoSrc: "/images/ic_linkedin.svg",
      link: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 34
      }
    })), __jsx(SocialMediaItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 17
      }
    }, __jsx(_ui_library_SocialMediaLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Github",
      logoSrc: "/images/ic_github.svg",
      link: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 34
      }
    })), __jsx(SocialMediaItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 17
      }
    }, __jsx(_ui_library_SocialMediaLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Facebook",
      logoSrc: "/images/ic_facebook.svg",
      link: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 34
      }
    }))))), __jsx(GreetingsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 11
      }
    }, __jsx(MeBackground, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 13
      }
    }), __jsx(GreetingsLabelContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 13
      }
    }, __jsx(GreetingsLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 38
      }
    }, "Hi, I'm Eris")), __jsx(MeImage, {
      src: "/images/img_me.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 13
      }
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/sections/projects/ProjectsSection.jsx":
/*!**************************************************************!*\
  !*** ./src/components/sections/projects/ProjectsSection.jsx ***!
  \**************************************************************/
/*! exports provided: ProjectsSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsSection", function() { return ProjectsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_library_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui_library/Project */ "./src/components/ui_library/Project.jsx");
/* harmony import */ var _ui_library_NavIconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui_library/NavIconButton */ "./src/components/ui_library/NavIconButton.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/projects/ProjectsSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsSection__Container",
  componentId: "jgrlco-0"
})(["width:100%;margin-top:4rem;margin-bottom:4rem;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsSection__Wrapper",
  componentId: "jgrlco-1"
})(["width:80%;margin-left:auto;margin-right:auto;display:flex;flex-direction:column;"]);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsSection__HeaderContainer",
  componentId: "jgrlco-2"
})(["width:100%;margin-bottom:0.5rem;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;"]);
const NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsSection__NavigationContainer",
  componentId: "jgrlco-3"
})(["display:flex;flex-direction:row;"]);
const ProjectCountLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "ProjectsSection__ProjectCountLabel",
  componentId: "jgrlco-4"
})(["color:#ADC6D5;font-size:1.5em;"]);
const NavIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsSection__NavIconWrapper",
  componentId: "jgrlco-5"
})(["margin-left:1rem;"]);
class ProjectsSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, __jsx(HeaderContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, __jsx(ProjectCountLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, "1 of 10 projects"), __jsx(NavigationContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx(NavIconWrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx(_ui_library_NavIconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "previous project",
      iconSrc: "/images/ic_previous.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 31
      }
    })), __jsx(NavIconWrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, __jsx(_ui_library_NavIconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "next project",
      iconSrc: "/images/ic_next.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 31
      }
    })))), __jsx(_ui_library_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ProjectsSection);

/***/ }),

/***/ "./src/components/sections/quotation/QuotationSection.jsx":
/*!****************************************************************!*\
  !*** ./src/components/sections/quotation/QuotationSection.jsx ***!
  \****************************************************************/
/*! exports provided: QuotationSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationSection", function() { return QuotationSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/quotation/QuotationSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuotationSection__Container",
  componentId: "wzqbgy-0"
})(["width:100%;padding-top:8rem;padding-bottom:8rem;display:flex;justify-content:center;align-items:center;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuotationSection__Wrapper",
  componentId: "wzqbgy-1"
})(["width:50%;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;"]);
const Quote = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].q.withConfig({
  displayName: "QuotationSection__Quote",
  componentId: "wzqbgy-2"
})(["font-size:2em;text-align:center;"]);
const Author = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "QuotationSection__Author",
  componentId: "wzqbgy-3"
})(["margin-top:1.5rem;color:#A7ADB1;font-size:2em;font-style:italic;"]);
class QuotationSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, __jsx(Quote, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, "If life were predictable it would cease to be life and be without flavor."), __jsx(Author, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, "- Someone")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (QuotationSection);

/***/ }),

/***/ "./src/components/sections/skills/SkillsSection.jsx":
/*!**********************************************************!*\
  !*** ./src/components/sections/skills/SkillsSection.jsx ***!
  \**********************************************************/
/*! exports provided: SkillsSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsSection", function() { return SkillsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_library_Skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui_library/Skill */ "./src/components/ui_library/Skill.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/skills/SkillsSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillsSection__Container",
  componentId: "sc-83ah7x-0"
})(["width:100%;background-color:#1B262C;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillsSection__Wrapper",
  componentId: "sc-83ah7x-1"
})(["width:80%;margin-left:auto;margin-right:auto;padding-top:3rem;padding-bottom:4rem;display:flex;flex-direction:column;align-items:center;"]);
const SkillsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillsSection__SkillsContainer",
  componentId: "sc-83ah7x-2"
})(["width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);grid-row-gap:2rem;grid-column-gap:4rem;"]);
const TitleLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "SkillsSection__TitleLabel",
  componentId: "sc-83ah7x-3"
})(["margin-bottom:4rem;font-size:2em;color:#CCD5DB;"]);
class SkillsSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, __jsx(TitleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, "Tech Stack"), __jsx(SkillsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, __jsx(_ui_library_Skill__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      level: "Intermediate",
      title: "Native Java/Kotlin",
      details: ["IDE: Android Studio", "Libraries Used: Dagger, Retrofit, RxJava, Gson", "Architecture - MVP, MVVM, Clean Architecture", "Others: Play Store Deployment"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }), __jsx(_ui_library_Skill__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      level: "Intermediate",
      title: "Native Java/Kotlin",
      details: ["IDE: Android Studio", "Libraries Used: Dagger, Retrofit, RxJava, Gson", "Architecture - MVP, MVVM, Clean Architecture", "Others: Play Store Deployment"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }), __jsx(_ui_library_Skill__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      level: "Intermediate",
      title: "Native Java/Kotlin",
      details: ["IDE: Android Studio", "Libraries Used: Dagger, Retrofit, RxJava, Gson", "Architecture - MVP, MVVM, Clean Architecture", "Others: Play Store Deployment"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }), __jsx(_ui_library_Skill__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      level: "Intermediate",
      title: "Native Java/Kotlin",
      details: ["IDE: Android Studio", "Libraries Used: Dagger, Retrofit, RxJava, Gson", "Architecture - MVP, MVVM, Clean Architecture", "Others: Play Store Deployment"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (SkillsSection);

/***/ }),

/***/ "./src/components/ui_library/Button.jsx":
/*!**********************************************!*\
  !*** ./src/components/ui_library/Button.jsx ***!
  \**********************************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/Button.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "emcvhi-0"
})(["border-radius:3px;border:1.5px solid #23A155;padding:0.5em 1em;font-size:1.2em;background-color:#23A155;color:#FFFFFF;"]);
class Button extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const children = this.props.children;
    return __jsx(StyledButton, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, children);
  }

}
Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/ui_library/CustomizedParticles.jsx":
/*!***********************************************************!*\
  !*** ./src/components/ui_library/CustomizedParticles.jsx ***!
  \***********************************************************/
/*! exports provided: CustomizedParticles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizedParticles", function() { return CustomizedParticles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/CustomizedParticles.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class CustomizedParticles extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: this.props.width,
      height: this.props.height,
      params: {
        "particles": {
          "number": {
            "value": 40,
            "density": {
              "enable": true,
              "value_area": 2000
            }
          },
          "color": {
            "value": "#27363E"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.75,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 30,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "bubble"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 80,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    });
  }

}
CustomizedParticles.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (CustomizedParticles);

/***/ }),

/***/ "./src/components/ui_library/Hobby.jsx":
/*!*********************************************!*\
  !*** ./src/components/ui_library/Hobby.jsx ***!
  \*********************************************/
/*! exports provided: Hobby, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hobby", function() { return Hobby; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/Hobby.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Hobby__Container",
  componentId: "sc-1el8gr0-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;"]);
const HobbyIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "Hobby__HobbyIcon",
  componentId: "sc-1el8gr0-1"
})([""]);
const HobbyLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Hobby__HobbyLabel",
  componentId: "sc-1el8gr0-2"
})(["font-size:1em;margin-top:1em;color:#CCD5DB;"]);
class Hobby extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      logoSrc
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(HobbyIcon, {
      src: logoSrc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }), __jsx(HobbyLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, name));
  }

}
Hobby.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Hobby);

/***/ }),

/***/ "./src/components/ui_library/NavIconButton.jsx":
/*!*****************************************************!*\
  !*** ./src/components/ui_library/NavIconButton.jsx ***!
  \*****************************************************/
/*! exports provided: NavIconButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavIconButton", function() { return NavIconButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/NavIconButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NavIconButton__Container",
  componentId: "ot8flt-0"
})(["width:3em;height:3em;border-radius:1.5em;background-color:#A7ADB1;display:flex;justify-content:center;align-items:center;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NavIconButton__Button",
  componentId: "ot8flt-1"
})(["background-color:#A7ADB1;padding:0;display:flex;justify-content:center;align-items:center;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "NavIconButton__Icon",
  componentId: "ot8flt-2"
})(["height:1.5em;max-width:1.5em;"]);
class NavIconButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      iconSrc
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx(Button, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx(Icon, {
      src: iconSrc,
      alt: name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    })));
  }

}
NavIconButton.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  iconSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NavIconButton);

/***/ }),

/***/ "./src/components/ui_library/Project.jsx":
/*!***********************************************!*\
  !*** ./src/components/ui_library/Project.jsx ***!
  \***********************************************/
/*! exports provided: Project, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_library_ProjectFeature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui_library/ProjectFeature */ "./src/components/ui_library/ProjectFeature.jsx");
/* harmony import */ var _ui_library_ProjectPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui_library/ProjectPlatform */ "./src/components/ui_library/ProjectPlatform.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/Project.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__Container",
  componentId: "sc-15r1a24-0"
})(["display:flex;flex-direction:column;"]);
const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__DetailsContainer",
  componentId: "sc-15r1a24-1"
})(["margin-top:2rem;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto;grid-column-gap:15%;"]);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__InfoContainer",
  componentId: "sc-15r1a24-2"
})([""]);
const FeatureList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Project__FeatureList",
  componentId: "sc-15r1a24-3"
})(["display:flex;flex-direction:column;"]);
const FeatureItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Project__FeatureItem",
  componentId: "sc-15r1a24-4"
})(["margin-bottom:1.5rem;"]);
const PlatformList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Project__PlatformList",
  componentId: "sc-15r1a24-5"
})(["margin-top:4rem;display:flex;flex-direction:row;"]);
const PlatformItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Project__PlatformItem",
  componentId: "sc-15r1a24-6"
})(["margin-right:1.5rem;"]);
const RoleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__RoleContainer",
  componentId: "sc-15r1a24-7"
})(["padding-left:0.8rem;border-left-style:solid;border-width:0.25rem;border-color:#24A255;display:flex;flex-direction:column;justify-content:center;"]);
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Project__ProjectTitle",
  componentId: "sc-15r1a24-8"
})(["color:#1B262C;font-size:3em;"]);
const RoleLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Project__RoleLabel",
  componentId: "sc-15r1a24-9"
})(["color:#4E5F69;font-size:1.5em;"]);
const DevelopedLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Project__DevelopedLabel",
  componentId: "sc-15r1a24-10"
})(["margin-top:0.6em;color:#A7ADB1;font-size:1.5em;"]);
const ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Project__ProjectDescription",
  componentId: "sc-15r1a24-11"
})(["margin-top:1.3rem;color:#4E5F69;font-size:1.2em;"]);
const InvolvementDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Project__InvolvementDescription",
  componentId: "sc-15r1a24-12"
})(["margin-top:2rem;color:#A7ADB1;font-size:1.2em;"]);
class Project extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, __jsx(ProjectTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, "Mall\u2019s App and Website"), __jsx(DetailsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, __jsx(RoleContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, __jsx(RoleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }, "Role: Team Captain, iOS Developer, Backend Developer"), __jsx(DevelopedLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    }, "Developed at White Cloak Technologies, Inc.")), __jsx(PlatformList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, __jsx(_ui_library_ProjectPlatform__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "iOS",
      logoSrc: "/images/ic_ios.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }, __jsx(_ui_library_ProjectPlatform__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, __jsx(_ui_library_ProjectPlatform__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Web",
      logoSrc: "/images/ic_web.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }
    }, __jsx(_ui_library_ProjectPlatform__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Backend",
      logoSrc: "/images/ic_backend.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }))), __jsx(ProjectDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, "Z!ng is Ayala Malls\u2019 mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards. Z!ng is Ayala Malls\u2019 mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards."), __jsx(InvolvementDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, "Involvement: January 2019 - May 2020")), __jsx(FeatureList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }, __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, __jsx(_ui_library_ProjectFeature__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Loyalty and Rewards",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx(_ui_library_ProjectFeature__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Indoor Map",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx(_ui_library_ProjectFeature__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Cinema Booking",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, __jsx(_ui_library_ProjectFeature__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "Mall Information",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 26
      }
    })))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/components/ui_library/ProjectFeature.jsx":
/*!******************************************************!*\
  !*** ./src/components/ui_library/ProjectFeature.jsx ***!
  \******************************************************/
/*! exports provided: ProjectFeature, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFeature", function() { return ProjectFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/ProjectFeature.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectFeature__Container",
  componentId: "sc-127s4ou-0"
})(["width:22em;height:4em;border-style:solid;border-color:#4E5F69;border-width:1px;display:flex;justify-content:center;align-items:center;"]);
const FeatureTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "ProjectFeature__FeatureTitle",
  componentId: "sc-127s4ou-1"
})(["color:#4E5F69;font-size:1.5em;"]);
class ProjectFeature extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, __jsx(FeatureTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, name));
  }

}
ProjectFeature.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectFeature);

/***/ }),

/***/ "./src/components/ui_library/ProjectPlatform.jsx":
/*!*******************************************************!*\
  !*** ./src/components/ui_library/ProjectPlatform.jsx ***!
  \*******************************************************/
/*! exports provided: ProjectPlatform, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPlatform", function() { return ProjectPlatform; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/ProjectPlatform.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectPlatform__Container",
  componentId: "t09fwi-0"
})(["display:flex;flex-direction:row;align-items:center;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "ProjectPlatform__Icon",
  componentId: "t09fwi-1"
})(["height:1.5rem;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "ProjectPlatform__Name",
  componentId: "t09fwi-2"
})(["margin-left:0.5em;color:#4E5F69;font-size:0.8em;"]);
class ProjectPlatform extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      logoSrc
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(Icon, {
      src: logoSrc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }), __jsx(Name, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, name));
  }

}
ProjectPlatform.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectPlatform);

/***/ }),

/***/ "./src/components/ui_library/Skill.jsx":
/*!*********************************************!*\
  !*** ./src/components/ui_library/Skill.jsx ***!
  \*********************************************/
/*! exports provided: Skill, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/Skill.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__Container",
  componentId: "uiljte-0"
})(["width:100%;min-height:10em;padding-top:2em;padding-bottom:2em;border-style:solid;border-color:#90B7CC;border-width:1px;display:flex;flex-direction:row;position:relative;"]);
const SkillContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__SkillContainer",
  componentId: "uiljte-1"
})(["width:10em;display:flex;flex-direction:column;align-items:center;"]);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__InfoContainer",
  componentId: "uiljte-2"
})(["margin-right:1em;display:flex;flex-direction:column;"]);
const LevelContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__LevelContainer",
  componentId: "uiljte-3"
})(["width:8em;height:1.5em;background-color:#90B7CC;position:absolute;right:0;top:0;display:flex;justify-content:center;align-items:center;"]);
const SkillIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "Skill__SkillIcon",
  componentId: "uiljte-4"
})([""]);
const SkillLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Skill__SkillLabel",
  componentId: "uiljte-5"
})(["font-size:1em;margin-top:1em;color:#CCD5DB;"]);
const InfoTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Skill__InfoTitle",
  componentId: "uiljte-6"
})(["font-size:1em;margin-top:0.5em;color:#CCD5DB;font-weight:bold;"]);
const InfoDetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__InfoDetailContainer",
  componentId: "uiljte-7"
})(["margin-top:1em;"]);
const InfoDetail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Skill__InfoDetail",
  componentId: "uiljte-8"
})(["font-size:1em;color:#CCD5DB;"]);
const LevelLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Skill__LevelLabel",
  componentId: "uiljte-9"
})(["font-size:0.8em;color:#4E5F69;"]);
class Skill extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      logoSrc,
      level,
      title,
      details
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, __jsx(LevelContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, __jsx(LevelLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }, level)), __jsx(SkillContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, __jsx(SkillIcon, {
      src: logoSrc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }), __jsx(SkillLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, name)), __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, __jsx(InfoTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, title), __jsx(InfoDetailContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, details.map(info => {
      return __jsx(InfoDetail, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 22
        }
      }, info);
    }))));
  }

}
Skill.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  level: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Skill);

/***/ }),

/***/ "./src/components/ui_library/SkillPreview.jsx":
/*!****************************************************!*\
  !*** ./src/components/ui_library/SkillPreview.jsx ***!
  \****************************************************/
/*! exports provided: SkillPreview, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillPreview", function() { return SkillPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/SkillPreview.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SkillPreview__Container",
  componentId: "sc-14147sb-0"
})(["width:100%;height:100%;max-width:10em;max-height:10em;min-width:7em;min-height:7em;border-style:solid;border-color:#90B7CC;border-width:1px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const SkillIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "SkillPreview__SkillIcon",
  componentId: "sc-14147sb-1"
})(["height:50%;"]);
const SkillLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "SkillPreview__SkillLabel",
  componentId: "sc-14147sb-2"
})(["font-size:1em;margin-top:.75em;color:#CCD5DB;"]);
class SkillPreview extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      logoSrc
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, __jsx(SkillIcon, {
      src: logoSrc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }), __jsx(SkillLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, name));
  }

}
SkillPreview.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SkillPreview);

/***/ }),

/***/ "./src/components/ui_library/SocialMediaLink.jsx":
/*!*******************************************************!*\
  !*** ./src/components/ui_library/SocialMediaLink.jsx ***!
  \*******************************************************/
/*! exports provided: SocialMediaLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaLink", function() { return SocialMediaLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/SocialMediaLink.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SocialMediaLink__Container",
  componentId: "mye1cm-0"
})(["width:3em;height:3em;border-radius:1.5em;background-color:#26343C;display:flex;justify-content:center;align-items:center;"]);
const SocialMediaIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "SocialMediaLink__SocialMediaIcon",
  componentId: "mye1cm-1"
})(["height:1.5em;max-width:1.5em;"]);
class SocialMediaLink extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      logoSrc,
      link
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx(SocialMediaIcon, {
      src: logoSrc,
      alt: name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 24
      }
    })));
  }

}
SocialMediaLink.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SocialMediaLink);

/***/ }),

/***/ "./src/helpers/MediaQueryHelper.jsx":
/*!******************************************!*\
  !*** ./src/helpers/MediaQueryHelper.jsx ***!
  \******************************************/
/*! exports provided: device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
// all size is -1 to real size
const size = {
  mobileS: '319px',
  mobileM: '374px',
  mobileL: '424px',
  tablet: '767px',
  laptop: '1023px',
  laptopL: '1439px',
  desktop: '2559px'
};
const device = {
  lowerThanMobileS: "(max-width: ".concat(size.mobileS, ")"),
  lowerThanMobileM: "(max-width: ".concat(size.mobileM, ")"),
  lowerThanMobileL: "(max-width: ".concat(size.mobileL, ")"),
  lowerThanTablet: "(max-width: ".concat(size.tablet, ")"),
  lowerThanLaptop: "(max-width: ".concat(size.laptop, ")"),
  lowerThanLaptopL: "(max-width: ".concat(size.laptopL, ")"),
  lowerThanDesktop: "(max-width: ".concat(size.desktop, ")"),
  lowerThanDesktopL: "(max-width: ".concat(size.desktop, ")")
};

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _components_ui_library_CustomizedParticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui_library/CustomizedParticles */ "./src/components/ui_library/CustomizedParticles.jsx");
/* harmony import */ var _components_sections_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/header/Header */ "./src/components/sections/header/Header.jsx");
/* harmony import */ var _components_sections_home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/home/Home */ "./src/components/sections/home/Home.jsx");
/* harmony import */ var _components_sections_projects_ProjectsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/projects/ProjectsSection */ "./src/components/sections/projects/ProjectsSection.jsx");
/* harmony import */ var _components_sections_skills_SkillsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/skills/SkillsSection */ "./src/components/sections/skills/SkillsSection.jsx");
/* harmony import */ var _components_sections_quotation_QuotationSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/quotation/QuotationSection */ "./src/components/sections/quotation/QuotationSection.jsx");
/* harmony import */ var _components_sections_about_AboutSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/about/AboutSection */ "./src/components/sections/about/AboutSection.jsx");
/* harmony import */ var _components_sections_contact_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/contact/Contact */ "./src/components/sections/contact/Contact.jsx");
/* harmony import */ var _components_sections_footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sections/footer/Footer */ "./src/components/sections/footer/Footer.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__MainContainer",
  componentId: "l606ox-0"
})(["display:flex;flex-direction:column;"]);
const HeaderHomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HeaderHomeContainer",
  componentId: "l606ox-1"
})(["height:100vh;width:100%;background-color:#1B262C;@media ", "{height:calc(100vh + 38em);display:flex;flex-direction:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HeaderContainer",
  componentId: "l606ox-2"
})(["position:relative;z-index:3;@media ", "{position:static;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL);
const HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HomeContainer",
  componentId: "l606ox-3"
})(["height:100vh;width:100%;position:absolute;top:0;left:0;z-index:2;@media ", "{position:static;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL);
const ParticleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ParticleContainer",
  componentId: "l606ox-4"
})(["height:100vh;width:100%;position:absolute;top:0;left:0;z-index:1;"]);
class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(MainContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }
    }, __jsx(HeaderHomeContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, __jsx(HeaderContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, __jsx(_components_sections_header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      height: "4em",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 28
      }
    })), __jsx(ParticleContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, __jsx(_components_ui_library_CustomizedParticles__WEBPACK_IMPORTED_MODULE_3__["default"], {
      width: "100%",
      height: "100vh",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 30
      }
    })), __jsx(HomeContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, __jsx(_components_sections_home_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 26
      }
    }))), __jsx(_components_sections_projects_ProjectsSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }), __jsx(_components_sections_skills_SkillsSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }), __jsx(_components_sections_quotation_QuotationSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }), __jsx(_components_sections_about_AboutSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }), __jsx(_components_sections_contact_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }), __jsx(_components_sections_footer_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 1:
/*!*****************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fjohneris%2FDocuments%2Fworkspace%2Freactjs%2Fjohnerisvillanueva-reactjs%2Fsrc%2Fpages%2Findex.jsx ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fjohneris%2FDocuments%2Fworkspace%2Freactjs%2Fjohnerisvillanueva-reactjs%2Fsrc%2Fpages%2Findex.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjohneris%2FDocuments%2Fworkspace%2Freactjs%2Fjohnerisvillanueva-reactjs%2Fsrc%2Fpages%2Findex.jsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map