var bsagpt = function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function (e, t) {
    window.googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [];
    var r = document.createElement("script");
    r.async = !0, r.type = "text/javascript", r.src = "//www.googletagservices.com/tag/js/gpt.js", r.setAttribute("dropped-by", "bsaoptimize"), document.getElementsByTagName("head")[0].appendChild(r)
}]);
/* prebid.js v4.43.0
Updated : 2021-07-06*/
!function (u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function (e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n) for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {}, d = {424: 0};

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {i: e, l: !1, exports: {}};
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }

    f.m = u, f.c = n, f.d = function (e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
    }, f.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function (e) {
        throw console.error(e), e
    }, f(f.s = 1029)
}({
    0: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "internal", function () {
            return R
        }), t.getPrebidInternal = function () {
            return B
        }, n.d(t, "bind", function () {
            return x
        }), t.getUniqueIdentifierStr = N, t.generateUUID = function e(t) {
            return t ? (t ^ k() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function (e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function (e, t, n) {
            if (n) return e + t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function (e) {
            var t, n = "";
            for (t in e) e.hasOwnProperty(t) && (n += t + "=" + encodeURIComponent(e[t]) + "&");
            return n = n.replace(/&$/, "")
        }, t.transformAdServerTargetingObj = function (t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? de(t).map(function (e) {
                return "".concat(e, "=").concat(encodeURIComponent(t[e]))
            }).join("&") : ""
        }, t.getAdUnitSizes = function (e) {
            if (e) {
                var t, n = [];
                return e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (t = e.mediaTypes.banner.sizes, Array.isArray(t[0]) ? n = t : n.push(t)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? n = e.sizes : n.push(e.sizes)), n
            }
        }, t.parseSizesInput = function (e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","), r = /^(\d)+x(\d)+$/i;
                if (n) for (var i in n) ne(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === y(e)) {
                var o = e.length;
                if (0 < o) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(P(e)); else for (var a = 0; a < o; a++) t.push(P(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = P, t.parseGPTSingleSizeArrayToRtbSize = function (e) {
            if (M(e)) return {w: e[0], h: e[1]}
        }, t.getWindowTop = q, t.getWindowSelf = G, t.getWindowLocation = W, t.logMessage = L, t.logInfo = F, t.logWarn = z, t.logError = V, t.hasConsoleLogger = function () {
            return I
        }, t.debugTurnedOn = K, t.createInvisibleIframe = function () {
            var e = document.createElement("iframe");
            return e.id = N(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = function (e) {
            return Ee(W().search)[e] || ""
        }, t.isA = J, t.isFn = Y, t.isStr = Q, t.isArray = $, t.isNumber = X, t.isPlainObject = Z, t.isBoolean = function (e) {
            return J(e, O)
        }, t.isEmpty = ee, t.isEmptyStr = function (e) {
            return Q(e) && (!e || 0 === e.length)
        }, t._each = te, t.contains = function (e, t) {
            if (ee(e)) return !1;
            if (Y(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;) if (e[n] === t) return !0;
            return !1
        }, t._map = function (n, r) {
            if (ee(n)) return [];
            if (Y(n.map)) return n.map(r);
            var i = [];
            return te(n, function (e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.hasOwn = ne, t.insertElement = re, t.triggerPixel = ie, t.callBurl = function (e) {
            var t = e.source, e = e.burl;
            t === v.S2S.SRC && e && R.triggerPixel(e)
        }, t.insertHtmlIntoIframe = function (e) {
            var t;
            e && ((t = document.createElement("iframe")).id = N(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", R.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close())
        }, t.insertUserSyncIframe = oe, t.createTrackPixelHtml = function (e) {
            if (!e) return "";
            var t = encodeURI(e), e = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return e += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = ae, t.getValueString = ce, t.uniques = ue, t.flatten = se, t.getBidRequest = function (n, e) {
            var t;
            if (n) return e.some(function (e) {
                e = a()(e.bids, function (t) {
                    return ["bidId", "adId", "bid_id"].some(function (e) {
                        return t[e] === n
                    })
                });
                return e && (t = e), e
            }), t
        }, t.getKeys = de, t.getValue = fe, t.getKeyByValue = function (e, t) {
            for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function () {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function (e) {
                return e.bids.map(function (e) {
                    return e.bidder
                }).reduce(se, [])
            }).reduce(se).filter(ue)
        }, t.isGptPubadsDefined = le, n.d(t, "getHighestCpm", function () {
            return pe
        }), n.d(t, "getOldestHighestCpmBid", function () {
            return ge
        }), n.d(t, "getLatestHighestCpmBid", function () {
            return be
        }), t.shuffle = function (e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t), r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function (e, t) {
            return c()(e, t && t.adUnitCode)
        }, t.deepClone = ve, t.inIframe = function () {
            try {
                return R.getWindowSelf() !== R.getWindowTop()
            } catch (e) {
                return !0
            }
        }, t.isSafariBrowser = function () {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function (e, t) {
            if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.replaceClickThrough = function (e, t) {
            if (e && t && "string" == typeof t) return e.replace(/\${CLICKTHROUGH}/g, t)
        }, t.timestamp = function () {
            return (new Date).getTime()
        }, t.getPerformanceNow = function () {
            return window.performance && window.performance.now && window.performance.now() || 0
        }, t.hasDeviceAccess = function () {
            return !1 !== i.b.getConfig("deviceAccess")
        }, t.checkCookieSupport = he, t.delayExecution = function (e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function () {
                ++n === t && e.apply(this, arguments)
            }
        }, t.groupBy = function (e, n) {
            return e.reduce(function (e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }, {})
        }, t.getDefinedParams = function (n, e) {
            return e.filter(function (e) {
                return n[e]
            }).reduce(function (e, t) {
                return b(e, g({}, t, n[t]))
            }, {})
        }, t.isValidMediaTypes = function (e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function (e) {
                return c()(t, e)
            })) return !1;
            if (e.video && e.video.context) return c()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function (e, t, n) {
            return a()(e, function (e) {
                return 0 < e.bids.filter(function (e) {
                    return e.bidder === t && e.adUnitCode === n
                }).length
            }) || {start: null, auctionId: null}
        }, t.getUserConfiguredParams = function (e, t, n) {
            return e.filter(function (e) {
                return e.code === t
            }).map(function (e) {
                return e.bids
            }).reduce(se, []).filter(function (e) {
                return e.bidder === n
            }).map(function (e) {
                return e.params || {}
            })
        }, t.getOrigin = function () {
            return window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function () {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function (t) {
            return function (e) {
                return me(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = Se, t.getGptSlotInfoForAdUnitCode = function (e) {
            var t;
            le() && (t = a()(window.googletag.pubads().getSlots(), Se(e)));
            if (t) return {gptSlot: t.getAdUnitPath(), divId: t.getSlotElementId()};
            return {}
        }, t.unsupportedBidderMessage = function (e, t) {
            var n = Object.keys(e.mediaTypes || {banner: "banner"}).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.isInteger = Ae, t.convertCamelToUnderscore = function (e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }, t.cleanObj = function (n) {
            return Object.keys(n).reduce(function (e, t) {
                return void 0 !== n[t] && (e[t] = n[t]), e
            }, {})
        }, t.pick = function (o, a) {
            return "object" === y(o) ? a.reduce(function (e, t, n) {
                if ("function" == typeof t) return e;
                var r = t, i = t.match(/^(.+?)\sas\s(.+?)$/i);
                i && (t = i[1], r = i[2]);
                t = o[t];
                return void 0 !== (t = "function" == typeof a[n + 1] ? a[n + 1](t, e) : t) && (e[r] = t), e
            }, {}) : {}
        }, t.transformBidderParamKeywords = function (e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords", i = [];
            return te(e, function (e, t) {
                if ($(e)) {
                    var n = [];
                    te(e, function (e) {
                        !(e = ce(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!Q(e = ce(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({key: t, value: e})
            }), i
        }, t.convertTypes = function (r, i) {
            return Object.keys(r).forEach(function (e) {
                var t, n;
                i[e] && (Y(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), isNaN(i[e]) && delete i.key)
            }), i
        }, t.isArrayOfNums = function (e, t) {
            return $(e) && (!t || e.length === t) && e.every(Ae)
        }, t.fill = function (e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = Z(e) ? ve(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function (e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t, o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function (e) {
            return Math.min.apply(Math, f(e))
        }, t.getMaxValueFromArray = function (e) {
            return Math.max.apply(Math, f(e))
        }, t.compareOn = function (n) {
            return function (e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        }, t.parseQS = Ee, t.formatQS = Oe, t.parseUrl = function (e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            t = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: t ? n.search : R.parseQS(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.buildUrl = function (e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(R.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }, t.deepEqual = Te, t.mergeDeep = Ie, t.cyrb53Hash = function (e) {
            for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function (e, t) {
                if (Y(Math.imul)) return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n
            }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++) t = e.charCodeAt(a), i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
            return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString()
        };
        var i = n(3), r = n(164), o = n.n(r), r = n(10), a = n.n(r), r = n(13), c = n.n(r), u = n(165);
        n.d(t, "deepAccess", function () {
            return u.a
        });
        var s = n(166);

        function d(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, o = [], a = !0, c = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
                    } catch (e) {
                        c = !0, i = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                    return o
                }
            }(e, t) || l(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function f(e) {
            return function (e) {
                if (Array.isArray(e)) return p(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || l(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function l(e, t) {
            if (e) {
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
            }
        }

        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function b() {
            return (b = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        n.d(t, "deepSetValue", function () {
            return s.a
        });
        var v = n(5), h = "Array", m = "String", S = "Function", A = "Number", E = "Object", O = "Boolean",
            T = Object.prototype.toString, t = Boolean(window.console), I = Boolean(t && window.console.log),
            C = Boolean(t && window.console.info), j = Boolean(t && window.console.warn),
            w = Boolean(t && window.console.error), _ = n(9), R = {
                checkCookieSupport: he,
                createTrackPixelIframeHtml: ae,
                getWindowSelf: G,
                getWindowTop: q,
                getWindowLocation: W,
                insertUserSyncIframe: oe,
                insertElement: re,
                isFn: Y,
                triggerPixel: ie,
                logError: V,
                logWarn: z,
                logMessage: L,
                logInfo: F,
                parseQS: Ee,
                formatQS: Oe,
                deepEqual: Te
            }, B = {};
        var U, n = {}, x = function (e, t) {
            return t
        }.bind(null, 1, n)() === n ? Function.prototype.bind : function (e) {
            var t = this, n = Array.prototype.slice.call(arguments, 1);
            return function () {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
            }
        }, D = (U = 0, function () {
            return ++U
        });

        function N() {
            return D() + Math.random().toString(16).substr(2)
        }

        function k() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function P(e) {
            if (M(e)) return e[0] + "x" + e[1]
        }

        function M(e) {
            return $(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
        }

        function q() {
            return window.top
        }

        function G() {
            return window.self
        }

        function W() {
            return window.location
        }

        function L() {
            K() && I && console.log.apply(console, H(arguments, "MESSAGE:"))
        }

        function F() {
            K() && C && console.info.apply(console, H(arguments, "INFO:"))
        }

        function z() {
            K() && j && console.warn.apply(console, H(arguments, "WARNING:")), _.emit(v.EVENTS.AUCTION_DEBUG, {
                type: "WARNING",
                arguments: arguments
            })
        }

        function V() {
            K() && w && console.error.apply(console, H(arguments, "ERROR:")), _.emit(v.EVENTS.AUCTION_DEBUG, {
                type: "ERROR",
                arguments: arguments
            })
        }

        function H(e, t) {
            e = [].slice.call(e);
            var n = i.b.getCurrentBidder();
            return t && e.unshift(t), n && e.unshift(r("#aaa")), e.unshift(r("#3b88c3")), e.unshift("%cPrebid" + (n ? "%c".concat(n) : "")), e;

            function r(e) {
                return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;")
            }
        }

        function K() {
            return !!i.b.getConfig("debug")
        }

        function J(e, t) {
            return T.call(e) === "[object " + t + "]"
        }

        function Y(e) {
            return J(e, S)
        }

        function Q(e) {
            return J(e, m)
        }

        function $(e) {
            return J(e, h)
        }

        function X(e) {
            return J(e, A)
        }

        function Z(e) {
            return J(e, E)
        }

        function ee(e) {
            if (!e) return !0;
            if ($(e) || Q(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function te(e, t) {
            if (!ee(e)) {
                if (Y(e.forEach)) return e.forEach(t, this);
                var n = 0, r = e.length;
                if (0 < r) for (; n < r; n++) t(e[n], n, e); else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }

        function ne(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        }

        function re(e, t, n, r) {
            t = t || document, n = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((n = n.length ? n : t.getElementsByTagName("body")).length) {
                    var n = n[0], i = r ? null : n.firstChild;
                    return n.insertBefore(e, i)
                }
            } catch (e) {
            }
        }

        function ie(e, t) {
            var n = new Image;
            t && R.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function oe(e, t) {
            var n = R.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                e = document.createElement("div");
            e.innerHTML = n;
            e = e.firstChild;
            t && R.isFn(t) && (e.addEventListener("load", t), e.addEventListener("error", t)), R.insertElement(e, document, "html", !0)
        }

        function ae(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n = n && 'sandbox="'.concat(n, '"'), "<iframe ".concat(n, ' id="').concat(N(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function ce(e, t, n) {
            return null == t ? n : Q(t) ? t : X(t) ? t.toString() : void R.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function ue(e, t, n) {
            return n.indexOf(e) === t
        }

        function se(e, t) {
            return e.concat(t)
        }

        function de(e) {
            return Object.keys(e)
        }

        function fe(e, t) {
            return e[t]
        }

        function le() {
            if (window.googletag && Y(window.googletag.pubads) && Y(window.googletag.pubads().getSlots)) return !0
        }

        var pe = ye("timeToRespond", function (e, t) {
            return t < e
        }), ge = ye("responseTimestamp", function (e, t) {
            return t < e
        }), be = ye("responseTimestamp", function (e, t) {
            return e < t
        });

        function ye(n, r) {
            return function (e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function ve(e) {
            return o()(e)
        }

        function he() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }

        var me = function (e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Se(t) {
            return function (e) {
                return me(e, t)
            }
        }

        function Ae(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Ee(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function (e, t) {
                var n = d(t.split("="), 2), t = n[0], n = n[1];
                return /\[\]$/.test(t) ? (e[t = t.replace("[]", "")] = e[t] || [], e[t].push(n)) : e[t] = n || "", e
            }, {}) : {}
        }

        function Oe(e) {
            return Object.keys(e).map(function (t) {
                return Array.isArray(e[t]) ? e[t].map(function (e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }

        function Te(e, t) {
            if (e === t) return !0;
            if ("object" !== y(e) || null === e || "object" !== y(t) || null === t) return !1;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var n in e) {
                if (!t.hasOwnProperty(n)) return !1;
                if (!Te(e[n], t[n])) return !1
            }
            return !0
        }

        function Ie(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (!n.length) return e;
            var i = n.shift();
            if (Z(e) && Z(i)) for (var o in i) Z(i[o]) ? (e[o] || b(e, g({}, o, {})), Ie(e[o], i[o])) : $(i[o]) && e[o] ? $(e[o]) && (e[o] = e[o].concat(i[o])) : b(e, g({}, o, i[o]));
            return Ie.apply(void 0, [e].concat(n))
        }
    }, 1: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "storage", function () {
            return p
        }), t.registerBidder = function (i) {
            var n = Array.isArray(i.supportedMediaTypes) ? {supportedMediaTypes: i.supportedMediaTypes} : void 0;

            function o(e) {
                var t = O(e);
                a.default.registerBidAdapter(t, e.code, n)
            }

            o(i), Array.isArray(i.aliases) && i.aliases.forEach(function (e) {
                var t, n, r = e;
                Object(m.isPlainObject)(e) && (r = e.code, t = e.gvlid, n = e.skipPbsAliasing), a.default.aliasRegistry[r] = i.code, o(A({}, i, {
                    code: r,
                    gvlid: t,
                    skipPbsAliasing: n
                }))
            })
        }, t.newBidder = O, n.d(t, "registerSyncInner", function () {
            return T
        }), t.preloadBidderMappingFile = I, t.getIabSubCategory = function (t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(), n = r.localStorageKey || n.getBidderCode(),
                    n = p.getDataFromLocalStorage(n);
                if (n) {
                    try {
                        n = JSON.parse(n)
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return n.mapping[e] || null
                }
            }
        }, t.isValid = C;
        var r = n(94), a = n(8), b = n(3), y = n(35), o = n(43), c = n(38), u = n(24), t = n(5), v = n.n(t), t = n(9),
            h = n.n(t), t = n(13), s = n.n(t), d = n(4), m = n(0), i = n(2), t = n(11), n = n(7);

        function f(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, o = [], a = !0, c = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
                    } catch (e) {
                        c = !0, i = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                    return o
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function S(e) {
            return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function A() {
            return (A = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var p = Object(n.a)("bidderFactory"), g = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            E = 1;

        function O(l) {
            return A(new r.a(l.code), {
                getSpec: function () {
                    return Object.freeze(l)
                }, registerSyncs: p, callBids: function (o, a, e, n, c, r) {
                    var u, s, d, t, f;

                    function i() {
                        e(), b.b.runWithBidder(l.code, function () {
                            h.a.emit(v.a.EVENTS.BIDDER_DONE, o), p(s, o.gdprConsent, o.uspConsent)
                        })
                    }

                    Array.isArray(o.bids) && (u = {}, s = [], 0 !== (t = o.bids.filter(g)).length ? (d = {}, t.forEach(function (e) {
                        (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                    }), (t = l.buildRequests(t, o)) && 0 !== t.length ? (Array.isArray(t) || (t = [t]), f = Object(m.delayExecution)(r(i), t.length), t.forEach(function (i) {
                        switch (i.method) {
                            case"GET":
                                n("".concat(i.url).concat(function (e) {
                                    if (e) return "?".concat("object" === S(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                    return ""
                                }(i.data)), {success: r(e), error: t}, void 0, A({
                                    method: "GET",
                                    withCredentials: !0
                                }, i.options));
                                break;
                            case"POST":
                                n(i.url, {
                                    success: r(e),
                                    error: t
                                }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), A({
                                    method: "POST",
                                    contentType: "text/plain",
                                    withCredentials: !0
                                }, i.options));
                                break;
                            default:
                                Object(m.logWarn)("Skipping invalid request from ".concat(l.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                        }

                        function e(e, t) {
                            c(l.code);
                            try {
                                e = JSON.parse(e)
                            } catch (e) {
                            }
                            var n;
                            e = {body: e, headers: {get: t.getResponseHeader.bind(t)}}, s.push(e);
                            try {
                                n = l.interpretResponse(e, i)
                            } catch (e) {
                                return Object(m.logError)("Bidder ".concat(l.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                            }

                            function r(e) {
                                var t, n = d[e.requestId];
                                n ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || A({}, e[n.bidder]), t = A(Object(y.a)(v.a.STATUS.GOOD, n), e), n = n.adUnitCode, t = t, u[n] = !0, C(n, t, [o]) && a(n, t)) : Object(m.logWarn)("Bidder ".concat(l.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                            }

                            n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n)
                        }

                        function t(e) {
                            c(l.code), Object(m.logError)("Server call for ".concat(l.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                        }
                    })) : i()) : i())
                }
            });

            function p(e, t, n) {
                T(l, e, t, n)
            }

            function g(e) {
                return !!l.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(l.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        var T = Object(t.b)("async", function (t, e, n, r) {
            var i = b.b.getConfig("userSync.aliasSyncEnabled");
            !t.getUserSyncs || !i && a.default.aliasRegistry[t.code] || (i = b.b.getConfig("userSync.filterSettings"), (r = t.getUserSyncs({
                iframeEnabled: !(!i || !i.iframe && !i.all),
                pixelEnabled: !(!i || !i.image && !i.all)
            }, e, n, r)) && (r = !Array.isArray(r) ? [r] : r).forEach(function (e) {
                o.a.registerSync(e.type, t.code, e.url)
            }))
        }, "registerSyncs");

        function I(e, t) {
            if (!b.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function (e) {
                return Object(m.deepAccess)(e, "mediaTypes.video.context") === i.a
            }).map(function (e) {
                return e.bids.map(function (e) {
                    return e.bidder
                })
            }).reduce(m.flatten, []).filter(m.uniques).forEach(function (n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays || E,
                        i = t.localStorageKey || e.getSpec().code, e = p.getDataFromLocalStorage(i);
                    try {
                        (!(e = e ? JSON.parse(e) : void 0) || Object(m.timestamp)() > e.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(d.a)(t.url, {
                            success: function (e) {
                                try {
                                    e = JSON.parse(e);
                                    var t = {lastUpdated: Object(m.timestamp)(), mapping: e.mapping};
                                    p.setDataInLocalStorage(i, JSON.stringify(t))
                                } catch (e) {
                                    Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                                }
                            }, error: function () {
                                Object(m.logError)("Failed to load ".concat(n, " bidder translation file"))
                            }
                        })
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                    }
                }
            }), e.call(this, t)
        }

        function C(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }

            return e ? t ? (i = Object.keys(t), g.every(function (e) {
                return s()(i, e) && !s()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(c.g)(t, n) ? "video" !== t.mediaType || Object(u.d)(t, n) ? !("banner" === t.mediaType && !function (e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
                if (n = Object(m.getBidderRequest)(n, t.bidderCode, e), e = n && n.bids && n.bids[0] && n.bids[0].sizes, 1 === (n = Object(m.parseSizesInput)(e)).length) {
                    e = f(n[0].split("x"), 2), n = e[0], e = e[1];
                    return t.width = parseInt(n, 10), t.height = parseInt(e, 10), 1
                }
            }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }

        Object(t.a)("checkAdUnitSetup").before(I)
    }, 10: function (e, t, n) {
        n = n(99);
        e.exports = n
    }, 100: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(57).find, o = n(52), n = "find", a = !0;
        n in [] && Array(1)[n](function () {
            a = !1
        }), r({target: "Array", proto: !0, forced: a}, {
            find: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), o(n)
    }, 101: function (e, t, n) {
        var r = n(33), i = n(102), o = n(45), a = n(46), c = n(56), u = n(30), s = n(76),
            d = Object.getOwnPropertyDescriptor;
        t.f = r ? d : function (e, t) {
            if (e = a(e), t = c(t, !0), s) try {
                return d(e, t)
            } catch (e) {
            }
            if (u(e, t)) return o(!i.f.call(e, t), e[t])
        }
    }, 102: function (e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({1: 2}, 1);
        t.f = o ? function (e) {
            e = i(this, e);
            return !!e && e.enumerable
        } : r
    }, 1029: function (e, t, n) {
        e.exports = n(72)
    }, 103: function (e, t, n) {
        var r = n(28), i = /#|\.prototype\./, n = function (e, t) {
            e = a[o(e)];
            return e == u || e != c && ("function" == typeof t ? r(t) : !!t)
        }, o = n.normalize = function (e) {
            return String(e).replace(i, ".").toLowerCase()
        }, a = n.data = {}, c = n.NATIVE = "N", u = n.POLYFILL = "P";
        e.exports = n
    }, 104: function (e, t, n) {
        var r = n(29), i = n(105), o = n(22)("species");
        e.exports = function (e, t) {
            var n;
            return new (void 0 === (n = i(e) && ("function" == typeof (n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) ? void 0 : n) ? Array : n)(0 === t ? 0 : t)
        }
    }, 105: function (e, t, n) {
        var r = n(47);
        e.exports = Array.isArray || function (e) {
            return "Array" == r(e)
        }
    }, 106: function (e, t, n) {
        var r = n(25), i = n(31);
        e.exports = function (t, n) {
            try {
                i(r, t, n)
            } catch (e) {
                r[t] = n
            }
            return n
        }
    }, 107: function (e, t, n) {
        var r, i, o = n(25), n = n(108), o = o.process, o = o && o.versions, o = o && o.v8;
        o ? i = (r = o.split("."))[0] < 4 ? 1 : r[0] + r[1] : n && (!(r = n.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = n.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i
    }, 108: function (e, t, n) {
        n = n(27);
        e.exports = n("navigator", "userAgent") || ""
    }, 109: function (e, t, n) {
        n = n(79);
        e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, 11: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return i
        }), n.d(t, "a", function () {
            return o
        }), t.d = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({hook: t}).length && e.before(t, n)
        }, t.c = function (e, t) {
            i("async", function (e) {
                e.forEach(function (e) {
                    return t.apply(void 0, function (e) {
                        if (Array.isArray(e)) return r(e)
                    }(e = e) || function (e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                        }
                    }(e) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())
                })
            }, e)([])
        }, t.e = function (e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            o(e).before(function (e, t) {
                t.push(n), e(t)
            })
        };
        t = n(167), t = n.n(t);

        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var i = t()({ready: t.a.SYNC | t.a.ASYNC | t.a.QUEUE}), o = i.get
    }, 110: function (e, t, n) {
        n(111);
        n = n(53);
        e.exports = n("Array", "includes")
    }, 111: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(80).includes, n = n(52);
        r({target: "Array", proto: !0}, {
            includes: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n("includes")
    }, 112: function (e, t, n) {
        var r = n(58), i = Math.max, o = Math.min;
        e.exports = function (e, t) {
            e = r(e);
            return e < 0 ? i(e + t, 0) : o(e, t)
        }
    }, 113: function (e, t, n) {
        n(114), n(131), n(91), n(133);
        n = n(50);
        e.exports = n.Set
    }, 114: function (e, t, n) {
        "use strict";
        var r = n(115), n = n(120);
        e.exports = r("Set", function (e) {
            return function () {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, n)
    }, 115: function (e, t, n) {
        "use strict";
        var f = n(14), l = n(25), p = n(82), g = n(28), b = n(31), y = n(18), v = n(85), h = n(29), m = n(64),
            S = n(34).f, A = n(57).forEach, E = n(33), n = n(55), O = n.set, T = n.getterFor;
        e.exports = function (n, e, t) {
            var o, a, r = -1 !== n.indexOf("Map"), c = -1 !== n.indexOf("Weak"), i = r ? "set" : "add", u = l[n],
                s = u && u.prototype, d = {};
            return E && "function" == typeof u && (c || s.forEach && !g(function () {
                (new u).entries().next()
            })) ? (o = e(function (e, t) {
                O(v(e, o, n), {type: n, collection: new u}), null != t && y(t, e[i], {that: e, AS_ENTRIES: r})
            }), a = T(n), A(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function (r) {
                var i = "add" == r || "set" == r;
                r in s && (!c || "clear" != r) && b(o.prototype, r, function (e, t) {
                    var n = a(this).collection;
                    if (!i && c && !h(e)) return "get" == r && void 0;
                    t = n[r](0 === e ? 0 : e, t);
                    return i ? this : t
                })
            }), c || S(o.prototype, "size", {
                configurable: !0, get: function () {
                    return a(this).collection.size
                }
            })) : (o = t.getConstructor(e, n, r, i), p.REQUIRED = !0), m(o, n, !1, !0), d[n] = o, f({
                global: !0,
                forced: !0
            }, d), c || t.setStrong(o, n, r), o
        }
    }, 116: function (e, t, n) {
        n = n(28);
        e.exports = !n(function () {
            return Object.isExtensible(Object.preventExtensions({}))
        })
    }, 117: function (e, t, n) {
        "use strict";
        var r = n(63), i = n(62);
        e.exports = r ? {}.toString : function () {
            return "[object " + i(this) + "]"
        }
    }, 118: function (e, t, n) {
        var r = n(25), n = n(119), r = r.WeakMap;
        e.exports = "function" == typeof r && /native code/.test(n(r))
    }, 119: function (e, t, n) {
        var n = n(59), r = Function.toString;
        "function" != typeof n.inspectSource && (n.inspectSource = function (e) {
            return r.call(e)
        }), e.exports = n.inspectSource
    }, 12: function (e, t, n) {
        "use strict";
        t.a = r, t.c = function (e) {
            return !(!e || !e.url)
        }, t.b = function (e, t) {
            e.render(t)
        };
        var u = n(39), s = n(0), t = n(10), d = n.n(t), f = "outstream";

        function r(e) {
            var t = this, r = e.url, n = e.config, i = e.id, o = e.callback, a = e.loaded, c = e.adUnitCode;
            this.url = r, this.config = n, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function (e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function () {
                t.loaded = !0, t.process()
            }, this.render = function () {
                function e() {
                    t._render ? t._render.apply(t, n) : s.logWarn("No render function was provided, please use .setRender on the renderer")
                }

                var t = this, n = arguments;
                !function (t) {
                    var e = pbjs.adUnits, n = d()(e, function (e) {
                        return e.code === t
                    });
                    if (!n) return !1;
                    var r = s.deepAccess(n, "renderer"), i = !!(r && r.url && r.render),
                        e = s.deepAccess(n, "mediaTypes.video.renderer"), n = !!(e && e.url && e.render);
                    return !!(i && !0 !== r.backupOnly || n && !0 !== e.backupOnly)
                }(c) ? (this.cmd.unshift(e), Object(u.a)(r, f, this.callback)) : (s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)), e())
            }.bind(this)
        }

        r.install = function (e) {
            return new r({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, r.prototype.getConfig = function () {
            return this.config
        }, r.prototype.setRender = function (e) {
            this._render = e
        }, r.prototype.setEventHandlers = function (e) {
            this.handlers = e
        }, r.prototype.handleVideoEvent = function (e) {
            var t = e.id, e = e.eventName;
            "function" == typeof this.handlers[e] && this.handlers[e](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(e))
        }, r.prototype.process = function () {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                s.logError("Error processing Renderer command: ", e)
            }
        }
    }, 120: function (e, t, n) {
        "use strict";
        var s = n(34).f, d = n(86), f = n(125), l = n(26), p = n(85), g = n(18), a = n(66), c = n(130), b = n(33),
            y = n(82).fastKey, n = n(55), v = n.set, h = n.getterFor;
        e.exports = {
            getConstructor: function (e, n, r, i) {
                function o(e, t, n) {
                    var r, i = c(e), o = u(e, t);
                    return o ? o.value = n : (i.last = o = {
                        index: r = y(t, !0),
                        key: t,
                        value: n,
                        previous: n = i.last,
                        next: void 0,
                        removed: !1
                    }, i.first || (i.first = o), n && (n.next = o), b ? i.size++ : e.size++, "F" !== r && (i.index[r] = o)), e
                }

                var a = e(function (e, t) {
                    p(e, a, n), v(e, {
                        type: n,
                        index: d(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), b || (e.size = 0), null != t && g(t, e[i], {that: e, AS_ENTRIES: r})
                }), c = h(n), u = function (e, t) {
                    var n, r = c(e), e = y(t);
                    if ("F" !== e) return r.index[e];
                    for (n = r.first; n; n = n.next) if (n.key == t) return n
                };
                return f(a.prototype, {
                    clear: function () {
                        for (var e = c(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                        e.first = e.last = void 0, b ? e.size = 0 : this.size = 0
                    }, delete: function (e) {
                        var t, n = c(this), r = u(this, e);
                        return r && (t = r.next, e = r.previous, delete n.index[r.index], r.removed = !0, e && (e.next = t), t && (t.previous = e), n.first == r && (n.first = t), n.last == r && (n.last = e), b ? n.size-- : this.size--), !!r
                    }, forEach: function (e) {
                        for (var t, n = c(this), r = l(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                    }, has: function (e) {
                        return !!u(this, e)
                    }
                }), f(a.prototype, r ? {
                    get: function (e) {
                        e = u(this, e);
                        return e && e.value
                    }, set: function (e, t) {
                        return o(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function (e) {
                        return o(this, e = 0 === e ? 0 : e, e)
                    }
                }), b && s(a.prototype, "size", {
                    get: function () {
                        return c(this).size
                    }
                }), a
            }, setStrong: function (e, t, n) {
                var r = t + " Iterator", i = h(t), o = h(r);
                a(e, t, function (e, t) {
                    v(this, {type: r, target: e, state: i(e), kind: t, last: void 0})
                }, function () {
                    for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {value: n.value, done: !1} : {
                        value: [n.key, n.value],
                        done: !1
                    } : {value: e.target = void 0, done: !0}
                }, n ? "entries" : "values", !n, !0), c(t)
            }
        }
    }, 121: function (e, t, n) {
        var r = n(33), a = n(34), c = n(15), u = n(122);
        e.exports = r ? Object.defineProperties : function (e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    }, 122: function (e, t, n) {
        var r = n(123), i = n(87);
        e.exports = Object.keys || function (e) {
            return r(e, i)
        }
    }, 123: function (e, t, n) {
        var a = n(30), c = n(46), u = n(80).indexOf, s = n(54);
        e.exports = function (e, t) {
            var n, r = c(e), i = 0, o = [];
            for (n in r) !a(s, n) && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    }, 124: function (e, t, n) {
        n = n(27);
        e.exports = n("document", "documentElement")
    }, 125: function (e, t, n) {
        var i = n(88);
        e.exports = function (e, t, n) {
            for (var r in t) n && n.unsafe && e[r] ? e[r] = t[r] : i(e, r, t[r], n);
            return e
        }
    }, 126: function (e, t, n) {
        "use strict";

        function r() {
            return this
        }

        var i = n(89).IteratorPrototype, o = n(86), a = n(45), c = n(64), u = n(40);
        e.exports = function (e, t, n) {
            t += " Iterator";
            return e.prototype = o(i, {next: a(1, n)}), c(e, t, !1, !0), u[t] = r, e
        }
    }, 127: function (e, t, n) {
        n = n(28);
        e.exports = !n(function () {
            function e() {
            }

            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })
    }, 128: function (e, t, n) {
        var i = n(15), o = n(129);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var n, r = !1, e = {};
            try {
                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), r = e instanceof Array
            } catch (e) {
            }
            return function (e, t) {
                return i(e), o(t), r ? n.call(e, t) : e.__proto__ = t, e
            }
        }() : void 0)
    }, 129: function (e, t, n) {
        var r = n(29);
        e.exports = function (e) {
            if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    }, 13: function (e, t, n) {
        n = n(110);
        e.exports = n
    }, 130: function (e, t, n) {
        "use strict";
        var r = n(27), i = n(34), o = n(22), a = n(33), c = o("species");
        e.exports = function (e) {
            var t = r(e), e = i.f;
            a && t && !t[c] && e(t, c, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, 131: function (e, t) {
    }, 132: function (e, t, n) {
        var a = n(58), c = n(48), n = function (o) {
            return function (e, t) {
                var n, r = String(c(e)), i = a(t), e = r.length;
                return i < 0 || e <= i ? o ? "" : void 0 : (t = r.charCodeAt(i)) < 55296 || 56319 < t || i + 1 === e || (n = r.charCodeAt(i + 1)) < 56320 || 57343 < n ? o ? r.charAt(i) : t : o ? r.slice(i, i + 2) : n - 56320 + (t - 55296 << 10) + 65536
            }
        };
        e.exports = {codeAt: n(!1), charAt: n(!0)}
    }, 133: function (e, t, n) {
        n(134);
        var r, i = n(135), o = n(25), a = n(62), c = n(31), u = n(40), s = n(22)("toStringTag");
        for (r in i) {
            var d = o[r], d = d && d.prototype;
            d && a(d) !== s && c(d, s, r), u[r] = u.Array
        }
    }, 134: function (e, t, n) {
        "use strict";
        var r = n(46), i = n(52), o = n(40), a = n(55), n = n(66), c = "Array Iterator", u = a.set, s = a.getterFor(c);
        e.exports = n(Array, "Array", function (e, t) {
            u(this, {type: c, target: r(e), index: 0, kind: t})
        }, function () {
            var e = s(this), t = e.target, n = e.kind, r = e.index++;
            return !t || r >= t.length ? {value: e.target = void 0, done: !0} : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {value: t[r], done: !1} : {value: [r, t[r]], done: !1}
        }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
    }, 135: function (e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, 136: function (e, t, n) {
        n(14)({target: "Set", stat: !0}, {from: n(137)})
    }, 137: function (e, t, n) {
        "use strict";
        var c = n(21), u = n(26), s = n(18);
        e.exports = function (e) {
            var t, n, r, i, o = arguments.length, a = 1 < o ? arguments[1] : void 0;
            return c(this), (t = void 0 !== a) && c(a), null == e ? new this : (n = [], t ? (r = 0, i = u(a, 2 < o ? arguments[2] : void 0, 2), s(e, function (e) {
                n.push(i(e, r++))
            })) : s(e, n.push, {that: n}), new this(n))
        }
    }, 138: function (e, t, n) {
        n(14)({target: "Set", stat: !0}, {of: n(139)})
    }, 139: function (e, t, n) {
        "use strict";
        e.exports = function () {
            for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
            return new this(t)
        }
    }, 14: function (e, t, n) {
        "use strict";

        function g(r) {
            function e(e, t, n) {
                if (this instanceof r) {
                    switch (arguments.length) {
                        case 0:
                            return new r;
                        case 1:
                            return new r(e);
                        case 2:
                            return new r(e, t)
                    }
                    return new r(e, t, n)
                }
                return r.apply(this, arguments)
            }

            return e.prototype = r.prototype, e
        }

        var b = n(25), y = n(101).f, v = n(103), h = n(50), m = n(26), S = n(31), A = n(30);
        e.exports = function (e, t) {
            var n, r, i, o, a, c = e.target, u = e.global, s = e.stat, d = e.proto,
                f = u ? b : s ? b[c] : (b[c] || {}).prototype, l = u ? h : h[c] || (h[c] = {}), p = l.prototype;
            for (n in t) o = !v(u ? n : c + (s ? "." : "#") + n, e.forced) && f && A(f, n), r = l[n], o && (i = e.noTargetGet ? (a = y(f, n)) && a.value : f[n]), a = o && i ? i : t[n], o && typeof r == typeof a || (o = e.bind && o ? m(a, b) : e.wrap && o ? g(a) : d && "function" == typeof a ? m(Function.call, a) : a, (e.sham || a && a.sham || r && r.sham) && S(o, "sham", !0), l[n] = o, d && (A(h, o = c + "Prototype") || S(h, o, {}), h[o][n] = a, e.real && p && !p[n] && S(p, n, a)))
        }
    }, 140: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(141);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            addAll: function () {
                return o.apply(this, arguments)
            }
        })
    }, 141: function (e, t, n) {
        "use strict";
        var i = n(15), o = n(21);
        e.exports = function () {
            for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++) t.call(e, arguments[n]);
            return e
        }
    }, 142: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(143);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            deleteAll: function () {
                return o.apply(this, arguments)
            }
        })
    }, 143: function (e, t, n) {
        "use strict";
        var a = n(15), c = n(21);
        e.exports = function () {
            for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++) e = n.call(t, arguments[i]), r = r && e;
            return !!r
        }
    }, 144: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(15), a = n(26), c = n(37), u = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            every: function (e) {
                var n = o(this), t = c(n), r = a(e, 1 < arguments.length ? arguments[1] : void 0, 3);
                return !u(t, function (e, t) {
                    if (!r(e, e, n)) return t()
                }, {IS_ITERATOR: !0, INTERRUPTED: !0}).stopped
            }
        })
    }, 145: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(27), a = n(15), c = n(21), u = n(41), s = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            difference: function (e) {
                var t = a(this), n = new (u(t, o("Set")))(t), r = c(n.delete);
                return s(e, function (e) {
                    r.call(n, e)
                }), n
            }
        })
    }, 146: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), a = n(27), c = n(15), u = n(21), s = n(26), d = n(41), f = n(37), l = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            filter: function (e) {
                var t = c(this), n = f(t), r = s(e, 1 < arguments.length ? arguments[1] : void 0, 3),
                    i = new (d(t, a("Set"))), o = u(i.add);
                return l(n, function (e) {
                    r(e, e, t) && o.call(i, e)
                }, {IS_ITERATOR: !0}), i
            }
        })
    }, 147: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(15), a = n(26), c = n(37), u = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            find: function (e) {
                var n = o(this), t = c(n), r = a(e, 1 < arguments.length ? arguments[1] : void 0, 3);
                return u(t, function (e, t) {
                    if (r(e, e, n)) return t(e)
                }, {IS_ITERATOR: !0, INTERRUPTED: !0}).result
            }
        })
    }, 148: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(27), a = n(15), c = n(21), u = n(41), s = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            intersection: function (e) {
                var t = a(this), n = new (u(t, o("Set"))), r = c(t.has), i = c(n.add);
                return s(e, function (e) {
                    r.call(t, e) && i.call(n, e)
                }), n
            }
        })
    }, 149: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(15), a = n(21), c = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            isDisjointFrom: function (e) {
                var n = o(this), r = a(n.has);
                return !c(e, function (e, t) {
                    if (!0 === r.call(n, e)) return t()
                }, {INTERRUPTED: !0}).stopped
            }
        })
    }, 15: function (e, t, n) {
        var r = n(29);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    }, 150: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(27), a = n(15), c = n(21), u = n(92), s = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            isSubsetOf: function (e) {
                var t = u(this), n = a(e), r = n.has;
                return "function" != typeof r && (n = new (o("Set"))(e), r = c(n.has)), !s(t, function (e, t) {
                    if (!1 === r.call(n, e)) return t()
                }, {IS_ITERATOR: !0, INTERRUPTED: !0}).stopped
            }
        })
    }, 151: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(15), a = n(21), c = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            isSupersetOf: function (e) {
                var n = o(this), r = a(n.has);
                return !c(e, function (e, t) {
                    if (!1 === r.call(n, e)) return t()
                }, {INTERRUPTED: !0}).stopped
            }
        })
    }, 152: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(15), a = n(37), c = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            join: function (e) {
                var t = o(this), n = a(t), t = void 0 === e ? "," : String(e), e = [];
                return c(n, e.push, {that: e, IS_ITERATOR: !0}), e.join(t)
            }
        })
    }, 153: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), a = n(27), c = n(15), u = n(21), s = n(26), d = n(41), f = n(37), l = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            map: function (e) {
                var t = c(this), n = f(t), r = s(e, 1 < arguments.length ? arguments[1] : void 0, 3),
                    i = new (d(t, a("Set"))), o = u(i.add);
                return l(n, function (e) {
                    o.call(i, r(e, e, t))
                }, {IS_ITERATOR: !0}), i
            }
        })
    }, 154: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(15), a = n(21), c = n(37), u = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            reduce: function (t) {
                var n = o(this), e = c(n), r = arguments.length < 2, i = r ? void 0 : arguments[1];
                if (a(t), u(e, function (e) {
                    i = r ? (r = !1, e) : t(i, e, e, n)
                }, {IS_ITERATOR: !0}), r) throw TypeError("Reduce of empty set with no initial value");
                return i
            }
        })
    }, 155: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(15), a = n(26), c = n(37), u = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            some: function (e) {
                var n = o(this), t = c(n), r = a(e, 1 < arguments.length ? arguments[1] : void 0, 3);
                return u(t, function (e, t) {
                    if (r(e, e, n)) return t()
                }, {IS_ITERATOR: !0, INTERRUPTED: !0}).stopped
            }
        })
    }, 156: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(27), a = n(15), c = n(21), u = n(41), s = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            symmetricDifference: function (e) {
                var t = a(this), n = new (u(t, o("Set")))(t), r = c(n.delete), i = c(n.add);
                return s(e, function (e) {
                    r.call(n, e) || i.call(n, e)
                }), n
            }
        })
    }, 157: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(17), o = n(27), a = n(15), c = n(21), u = n(41), s = n(18);
        r({target: "Set", proto: !0, real: !0, forced: i}, {
            union: function (e) {
                var t = a(this), t = new (u(t, o("Set")))(t);
                return s(e, c(t.add), {that: t}), t
            }
        })
    }, 158: function (e, t, n) {
        n(91), n(159);
        n = n(50);
        e.exports = n.Array.from
    }, 159: function (e, t, n) {
        var r = n(14), i = n(160);
        r({
            target: "Array", stat: !0, forced: !n(163)(function (e) {
                Array.from(e)
            })
        }, {from: i})
    }, 16: function (e, t, n) {
        "use strict";
        t.a = function () {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs")
    }, 160: function (e, t, n) {
        "use strict";
        var p = n(26), g = n(49), b = n(161), y = n(83), v = n(51), h = n(162), m = n(61);
        e.exports = function (e) {
            var t, n, r, i, o, a, c = g(e), u = "function" == typeof this ? this : Array, s = arguments.length,
                d = 1 < s ? arguments[1] : void 0, f = void 0 !== d, e = m(c), l = 0;
            if (f && (d = p(d, 2 < s ? arguments[2] : void 0, 2)), null == e || u == Array && y(e)) for (n = new u(t = v(c.length)); l < t; l++) a = f ? d(c[l], l) : c[l], h(n, l, a); else for (o = (i = e.call(c)).next, n = new u; !(r = o.call(i)).done; l++) a = f ? b(i, d, [r.value, l], !0) : r.value, h(n, l, a);
            return n.length = l, n
        }
    }, 161: function (e, t, n) {
        var i = n(15), o = n(84);
        e.exports = function (t, e, n, r) {
            try {
                return r ? e(i(n)[0], n[1]) : e(n)
            } catch (e) {
                throw o(t), e
            }
        }
    }, 162: function (e, t, n) {
        "use strict";
        var r = n(56), i = n(34), o = n(45);
        e.exports = function (e, t, n) {
            t = r(t);
            t in e ? i.f(e, t, o(0, n)) : e[t] = n
        }
    }, 163: function (e, t, n) {
        var i = n(22)("iterator"), o = !1;
        try {
            var r = 0, a = {
                next: function () {
                    return {done: !!r++}
                }, return: function () {
                    o = !0
                }
            };
            a[i] = function () {
                return this
            }, Array.from(a, function () {
                throw 2
            })
        } catch (e) {
        }
        e.exports = function (e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var r = {};
                r[i] = function () {
                    return {
                        next: function () {
                            return {done: n = !0}
                        }
                    }
                }, e(r)
            } catch (e) {
            }
            return n
        }
    }, 164: function (e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    }, 165: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e
        }
    }, 166: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n) {
            for (var r, i = 0, o = (t = t.split ? t.split(".") : t).length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {}
        }
    }, 167: function (e, t) {
        h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
        var g = "fun-hooks";
        var n = Object.freeze({useProxy: !0, ready: 0}), b = new WeakMap,
            r = "2,1,0" === [1].reduce(function (e, t, n) {
                return [e, t, n]
            }, 2).toString() ? Array.prototype.reduce : function (e, t) {
                var n, r = Object(this), i = r.length >>> 0, o = 0;
                if (t) n = t; else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            };

        function y(e, t) {
            return Array.prototype.slice.call(e, t)
        }

        var v = Object.assign || function (e) {
            return r.call(y(arguments, 1), function (t, n) {
                return n && Object.keys(n).forEach(function (e) {
                    t[e] = n[e]
                }), t
            }, e)
        };

        function h(u) {
            var s, e = {}, f = [];

            function t(e, t) {
                return "function" == typeof e ? a.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? a.apply(null, arguments) : "object" == typeof e ? function (r, e, i) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(r), t = !1);
                    var o = {}, n = ["constructor"];
                    for (; (e = e.filter(function (e) {
                        return !("function" != typeof r[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                    })).forEach(function (e) {
                        var t = e.split(":"), n = t[0], e = t[1] || "sync";
                        o[n] || (t = r[n], o[n] = r[n] = a(e, t, i ? [i, n] : void 0))
                    }), r = Object.getPrototypeOf(r), t && r;) ;
                    return o
                }.apply(null, arguments) : void 0
            }

            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(a, function (t, n, e) {
                    var r = t[n], i = !1;
                    return r || (e === a.length - 1 ? (s || f.push(function () {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created")
                    }), t[n] = p(function (e) {
                        t[n] = e, i = !0
                    })) : t[n] = {})
                }, e)
            }

            function p(r) {
                var o = [], a = [], c = function () {
                }, e = {
                    before: function (e, t) {
                        return n.call(this, o, "before", e, t)
                    }, after: function (e, t) {
                        return n.call(this, a, "after", e, t)
                    }, getHooks: function (n) {
                        var e = o.concat(a);
                        "object" == typeof n && (e = e.filter(function (t) {
                            return Object.keys(n).every(function (e) {
                                return t[e] === n[e]
                            })
                        }));
                        try {
                            v(e, {
                                remove: function () {
                                    return e.forEach(function (e) {
                                        e.remove()
                                    }), this
                                }
                            })
                        } catch (e) {
                            console.error("error adding `remove` to array, did you modify Array.prototype?")
                        }
                        return e
                    }, removeAll: function () {
                        return this.getHooks().remove()
                    }
                }, t = {
                    install: function (e, t, n) {
                        this.type = e, (c = n)(o, a), r && r(t)
                    }
                };
                return b.set(e.after, t), e;

                function n(t, e, n, r) {
                    var i = {
                        hook: n, type: e, priority: r || 10, remove: function () {
                            var e = t.indexOf(i);
                            -1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort(function (e, t) {
                        return t.priority - e.priority
                    }), c(o, a), this
                }
            }

            function a(d, e, t) {
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== d) throw g + ": recreated hookable with different type";
                    return e
                }
                var r, i, o = t ? l(t) : p(), a = {
                    get: function (e, t) {
                        return o[t] || Reflect.get.apply(Reflect, arguments)
                    }
                };
                return s || f.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : v(i = function () {
                    return a.apply ? a.apply(e, this, y(arguments)) : e.apply(this, arguments)
                }, o), b.get(i.after).install(d, i, function (e, t) {
                    var u, s = [];
                    r = e.length || t.length ? (e.forEach(n), u = s.push(void 0) - 1, t.forEach(n), function (t, n, e) {
                        var r, i = 0, o = "async" === d && "function" == typeof e[e.length - 1] && e.pop();

                        function a(e) {
                            "sync" === d ? r = e : o && o.apply(null, arguments)
                        }

                        function c(e) {
                            if (s[i]) {
                                var t = y(arguments);
                                return c.bail = a, t.unshift(c), s[i++].apply(n, t)
                            }
                            "sync" === d ? r = e : o && o.apply(null, arguments)
                        }

                        return s[u] = function () {
                            var e = y(arguments, 1);
                            "async" === d && o && (delete c.bail, e.push(c));
                            e = t.apply(n, e);
                            "sync" === d && c(e)
                        }, c.apply(null, e), r
                    }) : void 0;

                    function n(e) {
                        s.push(e.hook)
                    }

                    c()
                }), i;

                function c() {
                    !s && ("sync" !== d || u.ready & h.SYNC) && ("async" !== d || u.ready & h.ASYNC) ? "sync" !== d && u.ready & h.QUEUE ? a.apply = function () {
                        var e = arguments;
                        f.push(function () {
                            i.apply(e[1], e[2])
                        })
                    } : a.apply = function () {
                        throw g + ": hooked function not ready"
                    } : a.apply = r
                }
            }

            return (u = v({}, n, u)).ready ? t.ready = function () {
                s = !0, function (e) {
                    for (var t; t = e.shift();) t()
                }(f)
            } : s = !0, t.get = l, t
        }

        e.exports = h
    }, 17: function (e, t) {
        e.exports = !0
    }, 18: function (e, t, n) {
        function y(e, t) {
            this.stopped = e, this.result = t
        }

        var v = n(15), h = n(83), m = n(51), S = n(26), A = n(61), E = n(84);
        e.exports = function (e, t, n) {
            function r(e) {
                return o && E(o), new y(!0, e)
            }

            function i(e) {
                return l ? (v(e), g ? b(e[0], e[1], r) : b(e[0], e[1])) : g ? b(e, r) : b(e)
            }

            var o, a, c, u, s, d, f = n && n.that, l = !(!n || !n.AS_ENTRIES), p = !(!n || !n.IS_ITERATOR),
                g = !(!n || !n.INTERRUPTED), b = S(t, f, 1 + l + g);
            if (p) o = e; else {
                if ("function" != typeof (p = A(e))) throw TypeError("Target is not iterable");
                if (h(p)) {
                    for (a = 0, c = m(e.length); a < c; a++) if ((u = i(e[a])) && u instanceof y) return u;
                    return new y(!1)
                }
                o = p.call(e)
            }
            for (s = o.next; !(d = s.call(o)).done;) {
                try {
                    u = i(d.value)
                } catch (e) {
                    throw E(o), e
                }
                if ("object" == typeof u && u && u instanceof y) return u
            }
            return new y(!1)
        }
    }, 19: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var y = n(3), v = n(0);
        var h, r = (h = window, function () {
            var e, t = [], n = function (e) {
                try {
                    return e.location.ancestorOrigins ? e.location.ancestorOrigins : void 0
                } catch (e) {
                }
            }(h), r = y.b.getConfig("maxNestedIframes"), i = !1, o = 0, a = !1, c = !1;
            do {
                var u, s = g, d = c, f = void 0, l = !1, p = null, c = !1, g = g ? g.parent : h;
                try {
                    f = g.location.href || null
                } catch (e) {
                    l = !0
                }
                if (l) if (d) {
                    d = s.context;
                    try {
                        u = p = d.sourceUrl, a = !0, g === h.top && (i = !0), d.canonicalUrl && (e = d.canonicalUrl)
                    } catch (e) {
                    }
                } else {
                    Object(v.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                    try {
                        var b = s.document.referrer;
                        b && (p = b, g === h.top && (i = !0))
                    } catch (e) {
                    }
                    (p = !p && n && n[o - 1] ? n[o - 1] : p) && !a && (u = p)
                } else f && (u = p = f, a = !1, g === h.top && (i = !0, (f = function (e) {
                    try {
                        var t = e.querySelector("link[rel='canonical']");
                        if (null !== t) return t.href
                    } catch (e) {
                    }
                    return null
                }(g.document)) && (e = f))), g.context && g.context.sourceUrl && (c = !0)
            } while (t.push(p), o++, g !== h.top && o < r);
            return t.reverse(), {
                referer: u || null,
                reachedTop: i,
                isAmp: a,
                numIframes: o - 1,
                stack: t,
                canonicalUrl: e || null
            }
        })
    }, 2: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return r
        }), n.d(t, "d", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        }), n.d(t, "a", function () {
            return a
        });
        var r = "native", i = "video", o = "banner", a = "adpod"
    }, 21: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        }
    }, 22: function (e, t, n) {
        var r = n(25), i = n(78), o = n(30), a = n(60), c = n(79), n = n(109), u = i("wks"), s = r.Symbol,
            d = n ? s : s && s.withoutSetter || a;
        e.exports = function (e) {
            return o(u, e) && (c || "string" == typeof u[e]) || (c && o(s, e) ? u[e] = s[e] : u[e] = d("Symbol." + e)), u[e]
        }
    }, 23: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return s
        });
        var r = n(0), a = n(32), t = n(10), i = n.n(t), o = n(5);
        var c, u, s = (c = [], (u = {
            addWinningBid: function (t) {
                var e = i()(c, function (e) {
                    return e.getAuctionId() === t.auctionId
                });
                e ? (t.status = o.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid")
            }, getAllWinningBids: function () {
                return c.map(function (e) {
                    return e.getWinningBids()
                }).reduce(r.flatten, [])
            }, getBidsRequested: function () {
                return c.map(function (e) {
                    return e.getBidRequests()
                }).reduce(r.flatten, [])
            }, getNoBids: function () {
                return c.map(function (e) {
                    return e.getNoBids()
                }).reduce(r.flatten, [])
            }, getBidsReceived: function () {
                return c.map(function (e) {
                    if (e.getAuctionStatus() === a.a) return e.getBidsReceived()
                }).reduce(r.flatten, []).filter(function (e) {
                    return e
                })
            }, getAllBidsForAdUnitCode: function (t) {
                return c.map(function (e) {
                    return e.getBidsReceived()
                }).reduce(r.flatten, []).filter(function (e) {
                    return e && e.adUnitCode === t
                })
            }, getAdUnits: function () {
                return c.map(function (e) {
                    return e.getAdUnits()
                }).reduce(r.flatten, [])
            }, getAdUnitCodes: function () {
                return c.map(function (e) {
                    return e.getAdUnitCodes()
                }).reduce(r.flatten, []).filter(r.uniques)
            }
        }).createAuction = function (e) {
            var t = e.adUnits, n = e.adUnitCodes, r = e.callback, i = e.cbTimeout, o = e.labels, e = e.auctionId,
                e = Object(a.k)({adUnits: t, adUnitCodes: n, callback: r, cbTimeout: i, labels: o, auctionId: e});
            return c.push(e), e
        }, u.findBidByAdId = function (t) {
            return i()(c.map(function (e) {
                return e.getBidsReceived()
            }).reduce(r.flatten, []), function (e) {
                return e.adId === t
            })
        }, u.getStandardBidderAdServerTargeting = function () {
            return Object(a.j)()[o.JSON_MAPPING.ADSERVER_TARGETING]
        }, u.setStatusForBids = function (e, t) {
            var n = u.findBidByAdId(e);
            n && (n.status = t), !n || t !== o.BID_STATUS.BID_TARGETING_SET || (t = i()(c, function (e) {
                return e.getAuctionId() === n.auctionId
            })) && t.setBidTargeting(n)
        }, u.getLastAuctionId = function () {
            return c.length && c[c.length - 1].getAuctionId()
        }, u.clearAllAuctions = function () {
            c.length = 0
        }, u)
    }, 234: function (e, t, n) {
        n(235);
        n = n(53);
        e.exports = n("Array", "findIndex")
    }, 235: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(57).findIndex, o = n(52), n = "findIndex", a = !0;
        n in [] && Array(1)[n](function () {
            a = !1
        }), r({target: "Array", proto: !0, forced: a}, {
            findIndex: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), o(n)
    }, 24: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return a
        }), n.d(t, "a", function () {
            return r
        }), t.d = function (e, t) {
            var n = Object(i.getBidRequest)(e.requestId, t), r = n && Object(i.deepAccess)(n, "mediaTypes.video"),
                t = r && Object(i.deepAccess)(r, "context");
            return c(e, n, r, t)
        }, n.d(t, "c", function () {
            return c
        });
        n(8);
        var i = n(0), o = n(3), t = n(13), n = (n.n(t), n(11)), a = "outstream", r = "instream";
        var c = Object(n.b)("sync", function (e, t, n, r) {
            return !t || n && r !== a ? o.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== a || !!(e.renderer || t.renderer || n.renderer)
        }, "checkVideoBidSetup")
    }, 242: function (e, t, n) {
        "use strict";
        t.a = function () {
            window.addEventListener("message", r, !1)
        };
        var t = n(9), l = n.n(t), p = n(38), t = n(5), g = n.n(t), b = n(0), y = n(23), t = n(10), v = n.n(t),
            h = n(12), t = n(13), a = n.n(t), m = n(3), S = g.a.EVENTS.BID_WON, A = g.a.EVENTS.STALE_RENDER;

        function r(e) {
            var t, n, r, i, o, a, c, u = e.message ? "message" : "data", s = {};
            try {
                s = JSON.parse(e[u])
            } catch (e) {
                return
            }
            if (s && s.adId) {
                var d, f = v()(y.a.getBidsReceived(), function (e) {
                    return e.adId === s.adId
                });
                if (f && "Prebid Request" === s.message) {
                    if (f.status === g.a.BID_STATUS.RENDERED && (Object(b.logWarn)("Ad id ".concat(f.adId, " has been rendered before")), l.a.emit(A, f), Object(b.deepAccess)(m.b.getConfig("auctionOptions"), "suppressStaleRender"))) return;
                    d = e, n = (t = f).adId, r = t.ad, i = t.adUrl, o = t.width, a = t.height, c = t.renderer, u = t.cpm, Object(h.c)(c) ? Object(h.b)(c, t) : n && (E(t), d.source.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: Object(b.replaceAuctionPrice)(r, u),
                        adUrl: Object(b.replaceAuctionPrice)(i, u),
                        adId: n,
                        width: o,
                        height: a
                    }), d.origin)), y.a.addWinningBid(f), l.a.emit(S, f)
                }
                f && "Prebid Native" === s.message && ("assetRequest" !== s.action ? ("allAssetRequest" === s.action ? (d = Object(p.c)(s, f), e.source.postMessage(JSON.stringify(d), e.origin)) : "resizeNativeHeight" === s.action && (f.height = s.height, f.width = s.width, E(f)), "click" !== Object(p.b)(s, f) && (y.a.addWinningBid(f), l.a.emit(S, f))) : (f = Object(p.d)(s, f), e.source.postMessage(JSON.stringify(f), e.origin)))
            }
        }

        function E(e) {
            var n = e.adId, r = e.adUnitCode, i = e.width, o = e.height;
            ["div", "iframe"].forEach(function (e) {
                var t, t = (t = e + ':not([style*="display: none"])', e = function (e, t) {
                    return window.googletag ? function (n) {
                        return v()(window.googletag.pubads().getSlots(), function (t) {
                            return v()(t.getTargetingKeys(), function (e) {
                                return a()(t.getTargeting(e), n)
                            })
                        }).getSlotElementId()
                    }(e) : window.apntag ? function (e) {
                        e = window.apntag.getTag(e);
                        return e && e.targetId
                    }(t) : t
                }(n, r), (e = document.getElementById(e)) && e.querySelector(t));
                t ? ((t = t.style).width = i + "px", t.height = o + "px") : Object(b.logWarn)("Unable to locate matching page element for adUnitCode ".concat(r, ".  Can't resize it to ad's dimensions.  Please review setup."))
            })
        }
    }, 243: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {
            }
            t && p(t, !0)
        };
        var r, i, o = n(3), a = n(0), c = n(32), u = "pbjs:debugging";

        function s(e) {
            Object(a.logMessage)("DEBUG: " + e)
        }

        function d(e) {
            Object(a.logWarn)("DEBUG: " + e)
        }

        function f(e) {
            r = function (e, t, n) {
                b(this.bidders, n.bidderCode) ? d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides")) : (Array.isArray(this.bids) && this.bids.forEach(function (e) {
                    g(e, n.bidderCode, t) || y(e, n, "bidder")
                }), e(t, n))
            }.bind(e), c.c.before(r, 5), i = function (e, t) {
                var r = this, t = t.filter(function (e) {
                    return !b(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1)
                });
                Array.isArray(r.bidRequests) && t.forEach(function (n) {
                    r.bidRequests.forEach(function (t) {
                        n.bids.forEach(function (e) {
                            g(t, n.bidderCode, e.adUnitCode) || y(t, e, "bidRequest")
                        })
                    })
                });
                e(t)
            }.bind(e), c.e.before(i, 5)
        }

        function l() {
            c.c.getHooks({hook: r}).remove(), c.e.getHooks({hook: i}).remove()
        }

        function p(e, t) {
            t = 1 < arguments.length && void 0 !== t && t;
            o.b.setConfig({debug: !0}), l(), f(e), s("bidder overrides enabled".concat(t ? " from session" : ""))
        }

        function g(e, t, n) {
            return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n)
        }

        function b(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t)
        }

        function y(n, e, r) {
            return Object.keys(n).filter(function (e) {
                return -1 === ["adUnitCode", "bidder"].indexOf(e)
            }).reduce(function (e, t) {
                return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), e[t] = n[t], e
            }, e)
        }

        function v(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {
                }
                p(e)
            } else {
                l(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {
                }
            }
        }

        o.b.getConfig("debugging", function (e) {
            return v(e.debugging)
        })
    }, 25: function (n, e, t) {
        !function (e) {
            function t(e) {
                return e && e.Math == Math && e
            }

            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || function () {
                return this
            }() || Function("return this")()
        }.call(e, t(36))
    }, 26: function (e, t, n) {
        var o = n(21);
        e.exports = function (r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 0:
                    return function () {
                        return r.call(i)
                    };
                case 1:
                    return function (e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function (e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function (e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function () {
                return r.apply(i, arguments)
            }
        }
    }, 27: function (e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : void 0
        }

        var i = n(50), o = n(25);
        e.exports = function (e, t) {
            return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t]
        }
    }, 28: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, 29: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, 3: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return v
        }), n.d(t, "b", function () {
            return C
        });
        var r = n(44), t = n(10), a = n.n(t), t = n(13), i = n.n(t), t = n(81), o = n.n(t), c = n(0), u = ["fpd"];

        function s(e, t) {
            if (null == e) return {};
            var n, r = function (e, t) {
                if (null == e) return {};
                var n, r, i = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) n = i[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
        }

        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function l() {
            return (l = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var p = n(93), g = n(0), n = n(5), b = "TRUE" === g.getParameterByName(n.DEBUG_MODE).toUpperCase(),
            y = window.location.origin, v = "random", h = {};
        h[v] = !0, h.fixed = !0;
        var m = v, S = {LOW: "low", MEDIUM: "medium", HIGH: "high", AUTO: "auto", DENSE: "dense", CUSTOM: "custom"};
        var A, E, O, T, I, C = (T = [], I = null, j(), {
            getCurrentBidder: function () {
                return I
            }, resetBidder: x, getConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? g.deepAccess(w(), e) : w()
                }
                return function (e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    if ("function" == typeof t) {
                        var n = {topic: e, callback: t};
                        return T.push(n), function () {
                            T.splice(T.indexOf(n), 1)
                        }
                    }
                    g.logError("listener must be a function")
                }.apply(void 0, arguments)
            }, setConfig: function (n) {
                var e, r;
                g.isPlainObject(n) ? (e = Object.keys(n), r = {}, e.forEach(function (e) {
                    var t = "fpd" === e ? "ortb2" : e, e = "fpd" === e ? _(n[e]) : n[e];
                    g.isPlainObject(A[t]) && g.isPlainObject(e) && (e = l({}, A[t], e)), r[t] = E[t] = e
                }), B(r)) : g.logError("setConfig options must be an object")
            }, setDefaults: function (e) {
                g.isPlainObject(A) ? (l(A, e), l(E, e)) : g.logError("defaults must be an object")
            }, resetConfig: j, runWithBidder: U, callbackWithBidder: function (o) {
                return function (i) {
                    return function () {
                        if ("function" == typeof i) {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return U(o, (e = g.bind).call.apply(e, [i, this].concat(n)))
                        }
                        g.logWarn("config.callbackWithBidder callback is not a function")
                    }
                }
            }, setBidderConfig: function (r) {
                try {
                    !function (e) {
                        if (!g.isPlainObject(e)) throw"setBidderConfig bidder options must be an object";
                        if (!Array.isArray(e.bidders) || !e.bidders.length) throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                        if (!g.isPlainObject(e.config)) throw"setBidderConfig bidder options must contain a config object"
                    }(r), r.bidders.forEach(function (n) {
                        O[n] || (O[n] = {}), Object.keys(r.config).forEach(function (e) {
                            var t = "fpd" === e ? "ortb2" : e, e = "fpd" === e ? _(r.config[e]) : r.config[e];
                            g.isPlainObject(e) ? O[n][t] = l({}, O[n][t] || {}, e) : O[n][t] = e
                        })
                    })
                } catch (e) {
                    g.logError(e)
                }
            }, getBidderConfig: function () {
                return O
            }, convertAdUnitFpd: function (e) {
                var t = [];
                return e.forEach(function (e) {
                    e.fpd ? (e.ortb2Imp ? g.mergeDeep(e.ortb2Imp, R(e.fpd)) : e.ortb2Imp = R(e.fpd), t.push(function () {
                        e.fpd;
                        return s(e, u)
                    }())) : t.push(e)
                }), t
            }, getLegacyFpd: function (r) {
                if ("object" === f(r)) {
                    var t = {};
                    return Object.keys(r).forEach(function (n) {
                        var e = "site" === n ? "context" : n;
                        t[e] = "context" === e || "user" === e ? Object.keys(r[n]).filter(function (e) {
                            return "data" !== e
                        }).reduce(function (e, t) {
                            return "ext" === t ? g.mergeDeep(e, r[n][t]) : g.mergeDeep(e, d({}, t, r[n][t])), e
                        }, {}) : r[n]
                    }), t
                }
            }, getLegacyImpFpd: function (t) {
                if ("object" === f(t)) {
                    var n = {};
                    return g.deepAccess(t, "ext.data") && Object.keys(t.ext.data).forEach(function (e) {
                        "pbadslot" === e ? g.mergeDeep(n, {context: {pbAdSlot: t.ext.data[e]}}) : "adserver" === e ? g.mergeDeep(n, {context: {adServer: t.ext.data[e]}}) : g.mergeDeep(n, {context: {data: d({}, e, t.ext.data[e])}})
                    }), n
                }
            }
        });

        function j() {
            A = {};
            var n = {
                _debug: b, get debug() {
                    return this._debug
                }, set debug(e) {
                    this._debug = e
                }, _bidderTimeout: 3e3, get bidderTimeout() {
                    return this._bidderTimeout
                }, set bidderTimeout(e) {
                    this._bidderTimeout = e
                }, _publisherDomain: y, get publisherDomain() {
                    return this._publisherDomain
                }, set publisherDomain(e) {
                    this._publisherDomain = e
                }, _priceGranularity: S.MEDIUM, set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : g.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = S.CUSTOM, g.logMessage("Using custom price granularity")))
                }, get priceGranularity() {
                    return this._priceGranularity
                }, _customPriceBucket: {}, get customPriceBucket() {
                    return this._customPriceBucket
                }, _mediaTypePriceGranularity: {}, get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                }, set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function (e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : g.isPlainObject(n) && (e[t] = n[t], g.logMessage("Using custom price granularity for ".concat(t))) : g.logWarn("Invalid price granularity for media type: ".concat(t)), e
                    }, {})
                }, _sendAllBids: !0, get enableSendAllBids() {
                    return this._sendAllBids
                }, set enableSendAllBids(e) {
                    this._sendAllBids = e
                }, _useBidCache: !1, get useBidCache() {
                    return this._useBidCache
                }, set useBidCache(e) {
                    this._useBidCache = e
                }, _deviceAccess: !0, get deviceAccess() {
                    return this._deviceAccess
                }, set deviceAccess(e) {
                    this._deviceAccess = e
                }, _bidderSequence: m, get bidderSequence() {
                    return this._bidderSequence
                }, set bidderSequence(e) {
                    h[e] ? this._bidderSequence = e : g.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                }, _timeoutBuffer: 400, get timeoutBuffer() {
                    return this._timeoutBuffer
                }, set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                }, _disableAjaxTimeout: !1, get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                }, set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                }, _maxNestedIframes: 10, get maxNestedIframes() {
                    return this._maxNestedIframes
                }, set maxNestedIframes(e) {
                    this._maxNestedIframes = e
                }, _auctionOptions: {}, get auctionOptions() {
                    return this._auctionOptions
                }, set auctionOptions(e) {
                    !function (e) {
                        if (!g.isPlainObject(e)) return g.logWarn("Auction Options must be an object"), !1;
                        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                            var r = n[t];
                            if ("secondaryBidders" !== r && "suppressStaleRender" !== r) return g.logWarn("Auction Options given an incorrect param: ".concat(r)), !1;
                            if ("secondaryBidders" === r) {
                                if (!g.isArray(e[r])) return g.logWarn("Auction Options ".concat(r, " must be of type Array")), !1;
                                if (!e[r].every(g.isStr)) return g.logWarn("Auction Options ".concat(r, " must be only string")), !1
                            } else if ("suppressStaleRender" === r && !g.isBoolean(e[r])) return g.logWarn("Auction Options ".concat(r, " must be of type boolean")), !1
                        }
                        return !0
                    }(e) || (this._auctionOptions = e)
                }
            };

            function i(t) {
                return a()(Object.keys(S), function (e) {
                    return t === S[e]
                })
            }

            function o(e) {
                if (e) {
                    if ("string" == typeof e) i(e) || g.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."); else if (g.isPlainObject(e) && !Object(r.b)(e)) return void g.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1
                }
                g.logError("Prebid Error: no value passed to `setPriceGranularity()`")
            }

            E && B(Object.keys(E).reduce(function (e, t) {
                return E[t] !== n[t] && (e[t] = n[t] || {}), e
            }, {})), E = n, O = {}
        }

        function w() {
            if (I && O && g.isPlainObject(O[I])) {
                var n = O[I], e = new o.a(Object.keys(E).concat(Object.keys(n)));
                return p(e).reduce(function (e, t) {
                    return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && g.isPlainObject(n[t]) ? e[t] = Object(c.mergeDeep)({}, E[t], n[t]) : e[t] = n[t], e
                }, {})
            }
            return l({}, E)
        }

        function _(r) {
            var t = {};
            return Object.keys(r).forEach(function (n) {
                var e = "context" === n ? "site" : n;
                t[e] = "site" === e || "user" === e ? Object.keys(r[n]).reduce(function (e, t) {
                    return "data" === t ? g.mergeDeep(e, {ext: {data: r[n][t]}}) : g.mergeDeep(e, d({}, t, r[n][t])), e
                }, {}) : r[n]
            }), t
        }

        function R(r) {
            var i = {};
            return Object.keys(r).filter(function (e) {
                return "context" === e
            }).forEach(function (n) {
                Object.keys(r[n]).forEach(function (t) {
                    "data" === t ? g.mergeDeep(i, {ext: {data: r[n][t]}}) : "object" !== f(r[n][t]) || Array.isArray(r[n][t]) ? g.mergeDeep(i, {ext: {data: d({}, t.toLowerCase(), r[n][t])}}) : Object.keys(r[n][t]).forEach(function (e) {
                        g.mergeDeep(i, {ext: {data: d({}, t.toLowerCase(), d({}, e.toLowerCase(), r[n][t][e]))}})
                    })
                })
            }), i
        }

        function B(t) {
            var n = Object.keys(t);
            T.filter(function (e) {
                return i()(n, e.topic)
            }).forEach(function (e) {
                e.callback(d({}, e.topic, t[e.topic]))
            }), T.filter(function (e) {
                return "*" === e.topic
            }).forEach(function (e) {
                return e.callback(t)
            })
        }

        function U(e, t) {
            I = e;
            try {
                return t()
            } finally {
                x()
            }
        }

        function x() {
            I = null
        }
    }, 30: function (e, t, n) {
        var r = n(49), i = {}.hasOwnProperty;
        e.exports = Object.hasOwn || function (e, t) {
            return i.call(r(e), t)
        }
    }, 31: function (e, t, n) {
        var r = n(33), i = n(34), o = n(45);
        e.exports = r ? function (e, t, n) {
            return i.f(e, t, o(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, 32: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return W
        }), n.d(t, "a", function () {
            return L
        }), t.k = function (e) {
            var t, i, g, b, o = e.adUnits, n = e.adUnitCodes, r = e.callback, a = e.cbTimeout, c = e.labels,
                e = e.auctionId, y = o, u = c, s = n, v = [], d = [], f = [], l = e || k.generateUUID(), p = r, h = a,
                m = [], S = new Set;

            function A() {
                return {
                    auctionId: l,
                    timestamp: t,
                    auctionEnd: i,
                    auctionStatus: g,
                    adUnits: y,
                    adUnitCodes: s,
                    labels: u,
                    bidderRequests: v,
                    noBids: f,
                    bidsReceived: d,
                    winningBids: m,
                    timeout: h
                }
            }

            function E(n, e) {
                var r, t;
                e && clearTimeout(b), void 0 === i && (r = [], n && (k.logMessage("Auction ".concat(l, " timedOut")), t = S, (r = v.map(function (e) {
                    return (e.bids || []).filter(function (e) {
                        return !t.has(e.bidder)
                    })
                }).reduce(C.flatten, []).map(function (e) {
                    return {bidId: e.bidId, bidder: e.bidder, adUnitCode: e.adUnitCode, auctionId: e.auctionId}
                })).length && M.emit(q.EVENTS.BID_TIMEOUT, r)), g = L, i = Date.now(), M.emit(q.EVENTS.AUCTION_END, A()), Y(y, function () {
                    try {
                        var e;
                        null != p && (e = s, t = d.filter(k.bind.call(C.adUnitsFilter, this, e)).reduce(Z, {}), p.apply(pbjs, [t, n, l]), p = null)
                    } catch (e) {
                        k.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        r.length && P.callTimedOutBidders(o, r, h);
                        var t = _.b.getConfig("userSync") || {};
                        t.enableOverride || N(t.syncDelay)
                    }
                }))
            }

            function O() {
                _.b.resetBidder(), k.logInfo("Bids Received for Auction with id: ".concat(l), d), g = L, E(!1, !0)
            }

            function T(e) {
                S.add(e)
            }

            function I(t) {
                var d = this;
                t.forEach(function (e) {
                    v = v.concat(e)
                });
                var f = {}, e = {
                    bidRequests: t, run: function () {
                        var e;
                        e = E.bind(null, !0), e = setTimeout(e, h), b = e, g = W, M.emit(q.EVENTS.AUCTION_INIT, A());
                        var r, i, o, a, c, u, s = (r = O, i = d, o = 0, a = !1, c = new Set, u = {}, {
                            addBidResponse: function (e, t) {
                                u[t.requestId] = !0, o++, "video" === (t = function (e) {
                                    var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start,
                                        a = D({}, n, {
                                            auctionId: i,
                                            responseTimestamp: Object(C.timestamp)(),
                                            requestTimestamp: o,
                                            cpm: parseFloat(n.cpm) || 0,
                                            bidder: n.bidderCode,
                                            adUnitCode: t
                                        });
                                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp, M.emit(q.EVENTS.BID_ADJUSTMENT, a);
                                    e = r.bids && R()(r.bids, function (e) {
                                        return e.adUnitCode == t && e.bidId == a.requestId
                                    }), i = e && e.renderer, o = a.mediaType, r = e && e.mediaTypes && e.mediaTypes[o], o = r && r.renderer, r = null;
                                    o && o.url && o.render && (!0 !== o.backupOnly || !n.renderer) ? r = o : i && i.url && i.render && (!0 !== i.backupOnly || !n.renderer) && (r = i);
                                    r && (a.renderer = w.a.install({url: r.url}), a.renderer.setRender(r.render));
                                    e = X(n.mediaType, e, _.b.getConfig("mediaTypePriceGranularity")), e = Object(j.a)(a.cpm, "object" === x(e) ? e : _.b.getConfig("customPriceBucket"), _.b.getConfig("currency.granularityMultiplier"));
                                    return a.pbLg = e.low, a.pbMg = e.med, a.pbHg = e.high, a.pbAg = e.auto, a.pbDg = e.dense, a.pbCg = e.custom, a
                                }({
                                    adUnitCode: e,
                                    bid: t,
                                    bidderRequest: this,
                                    auctionId: i.getAuctionId()
                                })).mediaType ? function (e, t, n, r) {
                                    var i = !0, o = Object(C.getBidRequest)(t.originalRequestId || t.requestId, [n]),
                                        n = o && Object(C.deepAccess)(o, "mediaTypes.video"),
                                        n = n && Object(C.deepAccess)(n, "context");
                                    _.b.getConfig("cache.url") && n !== U.b && (!t.videoCacheKey || _.b.getConfig("cache.ignoreBidderCacheKey") ? (i = !1, $(e, t, r, o)) : t.vastUrl || (k.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1));
                                    i && (Q(e, t), r())
                                }(i, t, this, n) : (Q(i, t), n())
                            }, adapterDone: function () {
                                var t, e = i.getBidRequests(), n = _.b.getConfig("auctionOptions");
                                c.add(this), !n || k.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function (e) {
                                    return B()(t, e.bidderCode)
                                }) && (e = e.filter(function (e) {
                                    return !B()(t, e.bidderCode)
                                })), a = e.every(function (e) {
                                    return c.has(e)
                                }), this.bids.forEach(function (e) {
                                    u[e.bidId] || (i.addNoBid(e), M.emit(q.EVENTS.NO_BID, e))
                                }), a && 0 === o && r()
                            }
                        });

                        function n() {
                            o--, a && 0 === o && r()
                        }

                        P.callBids(y, t, function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            K.apply({dispatch: s.addBidResponse, bidderRequest: this}, t)
                        }, s.adapterDone, {
                            request: function (e, t) {
                                p(z, t), p(f, e), V[e] || (V[e] = {SRA: !0, origin: t}), 1 < f[e] && (V[e].SRA = !1)
                            }, done: function (e) {
                                z[e]--, H[0] && l(H[0]) && H.shift()
                            }
                        }, h, T)
                    }
                };

                function l(e) {
                    var r = !0, i = _.b.getConfig("maxRequestsPerOrigin") || F;
                    return e.bidRequests.some(function (e) {
                        var t = 1, n = void 0 !== e.src && e.src === q.S2S.SRC ? "s2s" : e.bidderCode;
                        return V[n] && (!1 === V[n].SRA && (t = Math.min(e.bids.length, i)), z[V[n].origin] + t > i && (r = !1)), !r
                    }), r && e.run(), r
                }

                function p(e, t) {
                    void 0 === e[t] ? e[t] = 1 : e[t]++
                }

                l(e) || (k.logWarn("queueing auction due to limited endpoint capacity"), H.push(e))
            }

            return {
                addBidReceived: function (e) {
                    d = d.concat(e)
                }, addNoBid: function (e) {
                    f = f.concat(e)
                }, executeCallback: E, callBids: function () {
                    g = G, t = Date.now();
                    var e = P.makeBidRequests(y, t, l, h, u);
                    k.logInfo("Bids Requested for Auction with id: ".concat(l), e), e.length < 1 ? (k.logWarn("No valid bid requests returned for auction"), O()) : J.call({
                        dispatch: I,
                        context: this
                    }, e)
                }, addWinningBid: function (e) {
                    m = m.concat(e), P.callBidWonBidder(e.bidder, e, o)
                }, setBidTargeting: function (e) {
                    P.callSetTargetingBidder(e.bidder, e)
                }, getWinningBids: function () {
                    return m
                }, getTimeout: function () {
                    return h
                }, getAuctionId: function () {
                    return l
                }, getAuctionStatus: function () {
                    return g
                }, getAdUnits: function () {
                    return y
                }, getAdUnitCodes: function () {
                    return s
                }, getBidRequests: function () {
                    return v
                }, getBidsReceived: function () {
                    return d
                }, getNoBids: function () {
                    return f
                }
            }
        }, n.d(t, "c", function () {
            return K
        }), n.d(t, "e", function () {
            return J
        }), t.g = u, t.d = Q, n.d(t, "f", function () {
            return $
        }), n.d(t, "i", function () {
            return s
        }), n.d(t, "h", function () {
            return d
        }), t.j = l;
        var C = n(0), j = n(44), a = n(38), o = n(96), w = n(12), _ = n(3), r = n(43), i = n(11), t = n(10), R = n.n(t),
            t = n(13), B = n.n(t), U = n(24), c = n(2);

        function x(e) {
            return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function D() {
            return (D = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var N = r.a.syncUsers, k = n(0), P = n(8).default, M = n(9), q = n(5), G = "started", W = "inProgress",
            L = "completed";
        M.on(q.EVENTS.BID_ADJUSTMENT, function (e) {
            !function (e) {
                var t, n = e.bidderCode, r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, D({}, e))
                } catch (e) {
                    k.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var F = 4, z = {}, V = {}, H = [];
        var K = Object(i.b)("async", function (e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }, "addBidResponse"), J = Object(i.b)("sync", function (e) {
            this.dispatch.call(this.context, e)
        }, "addBidderRequests"), Y = Object(i.b)("async", function (e, t) {
            t && t()
        }, "bidsBackCallback");

        function u(e, t) {
            t.timeToRespond > e.getTimeout() + _.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function Q(e, t) {
            var n = e.getBidRequests(), n = R()(n, function (e) {
                return e.bidderCode === t.bidderCode
            });
            !function (t, e) {
                {
                    var n;
                    t.bidderCode && (0 < t.cpm || t.dealId) && (n = R()(e.bids, function (e) {
                        return e.adUnitCode === t.adUnitCode
                    }), n = function (e, t, n) {
                        if (!t) return {};
                        var r = {}, i = pbjs.bidderSettings;
                        {
                            var o;
                            i && (o = l(t.mediaType, e, n), p(r, o, t), e && i[e] && i[e][q.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting))
                        }
                        t.native && (r = D({}, r, Object(a.e)(t, n)));
                        return r
                    }(t.bidderCode, t, n))
                }
                t.adserverTargeting = D(t.adserverTargeting || {}, n)
            }(t, n), M.emit(q.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), u(e, t)
        }

        var $ = Object(i.b)("async", function (n, r, i, e) {
            Object(o.b)([r], function (e, t) {
                e ? (k.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), u(n, r)) : "" === t[0].uuid ? (k.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), u(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), Q(n, r), i())
            }, e)
        }, "callPrebidCache");

        function X(e, t, n) {
            if (e && n) {
                if (e === c.d) {
                    t = Object(C.deepAccess)(t, "mediaTypes.".concat(c.d, ".context"), "instream");
                    if (n["".concat(c.d, "-").concat(t)]) return n["".concat(c.d, "-").concat(t)]
                }
                return n[e]
            }
        }

        var s = function (e, t) {
            t = X(e, t, _.b.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e && t ? "string" == typeof t ? t : "custom" : _.b.getConfig("priceGranularity")
        }, d = function (t) {
            return function (e) {
                return t === q.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === q.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === q.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === q.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === q.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === q.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
            }
        }, f = function () {
            return function (e) {
                return e.meta && e.meta.advertiserDomains && 0 < e.meta.advertiserDomains.length ? e.meta.advertiserDomains[0] : ""
            }
        };

        function l(e, t, n) {
            function r(e, t) {
                return {
                    key: e, val: "function" == typeof t ? function (e) {
                        return t(e)
                    } : function (e) {
                        return Object(C.getValue)(e, t)
                    }
                }
            }

            var i, o, a = q.TARGETING_KEYS, c = s(e, n), n = pbjs.bidderSettings;
            return n[q.JSON_MAPPING.BD_SETTING_STANDARD] || (n[q.JSON_MAPPING.BD_SETTING_STANDARD] = {}), n[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] || (n[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] = [r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, d(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType"), r(a.ADOMAIN, f())]), "video" === e && (i = n[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING], [a.UUID, a.CACHE_ID].forEach(function (t) {
                void 0 === R()(i, function (e) {
                    return e.key === t
                }) && i.push(r(t, "videoCacheKey"))
            }), !_.b.getConfig("cache.url") || t && !1 === k.deepAccess(n, "".concat(t, ".sendStandardTargeting")) || (o = Object(C.parseUrl)(_.b.getConfig("cache.url")), void 0 === R()(i, function (e) {
                return e.key === a.CACHE_HOST
            }) && i.push(r(a.CACHE_HOST, function (e) {
                return k.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname
            })))), n[q.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function p(n, r, i) {
            var e = r[q.JSON_MAPPING.ADSERVER_TARGETING];
            return i.size = i.getSize(), k._each(e, function (e) {
                var t = e.key, e = e.val;
                if (n[t] && k.logWarn("The key: " + t + " is getting ovewritten"), k.isFn(e)) try {
                    e = e(i)
                } catch (e) {
                    k.logError("bidmanager", "ERROR", e)
                }
                (void 0 === r.suppressEmptyKeys || !0 !== r.suppressEmptyKeys) && t !== q.TARGETING_KEYS.DEAL || !k.isEmptyStr(e) && null != e ? n[t] = e : k.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), n
        }

        function Z(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {bids: []}), e[t.adUnitCode].bids.push(t), e
        }
    }, 33: function (e, t, n) {
        n = n(28);
        e.exports = !n(function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })
    }, 34: function (e, t, n) {
        var r = n(33), i = n(76), o = n(15), a = n(56), c = Object.defineProperty;
        t.f = r ? c : function (e, t, n) {
            if (o(e), t = a(t, !0), o(n), i) try {
                return c(e, t, n)
            } catch (e) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        }
    }, 35: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client", r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function () {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function () {
                return r
            }, this.getSize = function () {
                return this.width + "x" + this.height
            }
        }
    }, 36: function (e, t) {
        var n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, 37: function (e, t, n) {
        var r = n(17), n = n(92);
        e.exports = r ? n : function (e) {
            return Set.prototype.values.call(e)
        }
    }, 38: function (e, t, n) {
        "use strict";
        n.d(t, "f", function () {
            return a
        }), n.d(t, "a", function () {
            return c
        }), t.h = function (e) {
            if (e && e.type && function (e) {
                return !(!e || !i()(Object.keys(u), e)) || (Object(s.logError)("".concat(e, " nativeParam is not supported")), !1)
            }(e.type)) return u[e.type];
            return e
        }, t.g = function (t, e) {
            e = Object(s.getBidRequest)(t.requestId, e);
            if (!e) return !1;
            if (!Object(s.deepAccess)(t, "native.clickUrl")) return !1;
            var n = e.nativeParams;
            if (!n) return !0;
            var e = Object.keys(n).filter(function (e) {
                return n[e].required
            }), r = Object.keys(t.native).filter(function (e) {
                return t.native[e]
            });
            return e.every(function (e) {
                return i()(r, e)
            })
        }, t.b = function (e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(s.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(s.triggerPixel), e.action
        }, t.e = function (i, o) {
            var a = {};
            Object(s.deepAccess)(o, "nativeParams.rendererUrl") ? i.native.rendererUrl = l(o.nativeParams.rendererUrl) : Object(s.deepAccess)(o, "nativeParams.adTemplate") && (i.native.adTemplate = l(o.nativeParams.adTemplate));
            var c = !1 !== Object(s.deepAccess)(o, "nativeParams.sendTargetingKeys"), u = function (e) {
                var t = {};
                Object(s.deepAccess)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach(function (e) {
                    t[e] = "hb_native_".concat(e)
                });
                return d(d({}, f.NATIVE_KEYS), t)
            }(o), e = d(d({}, i.native), i.native.ext);
            return delete e.ext, Object.keys(e).forEach(function (e) {
                var t, n = u[e], r = l(i.native[e]) || l(Object(s.deepAccess)(i, "native.ext.".concat(e)));
                "adTemplate" !== e && n && r && ((t = "boolean" != typeof (t = Object(s.deepAccess)(o, "nativeParams.".concat(e, ".sendId"))) ? Object(s.deepAccess)(o, "nativeParams.ext.".concat(e, ".sendId")) : t) && (r = "".concat(n, ":").concat(i.adId)), ("boolean" == typeof (t = "boolean" != typeof (t = Object(s.deepAccess)(o, "nativeParams.".concat(e, ".sendTargetingKeys"))) ? Object(s.deepAccess)(o, "nativeParams.ext.".concat(e, ".sendTargetingKeys")) : t) ? t : c) && (a[n] = r))
            }), a
        }, t.d = function (e, n) {
            var r = {message: "assetResponse", adId: e.adId, assets: []};
            n.native.hasOwnProperty("adTemplate") && (r.adTemplate = l(n.native.adTemplate));
            n.native.hasOwnProperty("rendererUrl") && (r.rendererUrl = l(n.native.rendererUrl));
            return e.assets.forEach(function (e) {
                var t = Object(s.getKeyByValue)(f.NATIVE_KEYS, e), e = l(n.native[t]);
                r.assets.push({key: t, value: e})
            }), r
        }, t.c = function (e, r) {
            var i = {message: "assetResponse", adId: e.adId, assets: []};
            return Object.keys(r.native).forEach(function (n, e) {
                var t;
                "adTemplate" === n && r.native[n] ? i.adTemplate = l(r.native[n]) : "rendererUrl" === n && r.native[n] ? i.rendererUrl = l(r.native[n]) : "ext" === n ? Object.keys(r.native[n]).forEach(function (e) {
                    var t;
                    r.native[n][e] && (t = l(r.native[n][e]), i.assets.push({key: e, value: t}))
                }) : r.native[n] && f.NATIVE_KEYS.hasOwnProperty(n) && (t = l(r.native[n]), i.assets.push({
                    key: n,
                    value: t
                }))
            }), i
        };
        var s = n(0), t = n(13), i = n.n(t);

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(t, e) {
            var n, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)), r
        }

        function d(r) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(i), !0).forEach(function (e) {
                    var t, n;
                    t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function (e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return r
        }

        var f = n(5), a = [], c = Object.keys(f.NATIVE_KEYS).map(function (e) {
            return f.NATIVE_KEYS[e]
        }), u = {
            image: {
                image: {required: !0},
                title: {required: !0},
                sponsoredBy: {required: !0},
                clickUrl: {required: !0},
                body: {required: !1},
                icon: {required: !1}
            }
        };

        function l(e) {
            return "object" === r(e) && e.url ? e.url : e
        }
    }, 382: function (e, t, n) {
        n(383);
        n = n(53);
        e.exports = n("String", "includes")
    }, 383: function (e, t, n) {
        "use strict";
        var r = n(14), i = n(384), o = n(48);
        r({target: "String", proto: !0, forced: !n(386)("includes")}, {
            includes: function (e) {
                return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    }, 384: function (e, t, n) {
        var r = n(385);
        e.exports = function (e) {
            if (r(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    }, 385: function (e, t, n) {
        var r = n(29), i = n(47), o = n(22)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    }, 386: function (e, t, n) {
        var r = n(22)("match");
        e.exports = function (t) {
            var n = /./;
            try {
                "/./"[t](n)
            } catch (e) {
                try {
                    return n[r] = !1, "/./"[t](n)
                } catch (e) {
                }
            }
            return !1
        }
    }, 39: function (e, t, n) {
        "use strict";
        t.a = function (r, e, t) {
            if (e && r) {
                if (i()(c, e)) return a[r] ? (t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), a[r].tag) : (a[r] = {
                    loaded: !1,
                    tag: null,
                    callbacks: []
                }, t && "function" == typeof t && a[r].callbacks.push(t), o.logWarn("module ".concat(e, " is loading external JavaScript")), function (e, t) {
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function () {
                        "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
                    } : n.onload = function () {
                        t()
                    };
                    return n.src = e, o.insertElement(n), n
                }(r, function () {
                    a[r].loaded = !0;
                    try {
                        for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]()
                    } catch (e) {
                        o.logError("Error executing callback", "adloader.js:loadExternalScript", e)
                    }
                }));
                o.logError("".concat(e, " not whitelisted for loading external JavaScript"))
            } else o.logError("cannot load external script without url and moduleCode")
        };
        var t = n(13), i = n.n(t), o = n(0), a = {}, c = ["adloox", "criteo", "outstream", "adagio", "browsi"]
    }, 4: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }), t.b = i;
        var l = n(3);

        function p() {
            return (p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var b = n(0), y = 4, r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = e.request, f = e.done;
            return function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"), a = document.createElement("a");
                    a.href = e;
                    var c, u = "object" === g(t) && null !== t ? t : {
                        success: function () {
                            b.logMessage("xhr success")
                        }, error: function (e) {
                            b.logError("xhr error", null, e)
                        }
                    };
                    "function" == typeof t && (u.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function () {
                        var e;
                        i.readyState === y && ("function" == typeof f && f(a.origin), 200 <= (e = i.status) && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i))
                    }, l.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function () {
                        b.logError("  xhr timeout after ", i.timeout, "ms")
                    }), "GET" === o && n && (p((c = b.parseUrl(e, r)).search, n), e = b.buildUrl(c)), i.open(o, e, !0), l.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), b._each(r.customHeaders, function (e, t) {
                        i.setRequestHeader(t, e)
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    b.logError("xhr construction", e)
                }
            }
        }
    }, 40: function (e, t) {
        e.exports = {}
    }, 41: function (e, t, n) {
        var r = n(15), i = n(21), o = n(22)("species");
        e.exports = function (e, t) {
            var n, e = r(e).constructor;
            return void 0 === e || null == (n = r(e)[o]) ? t : i(n)
        }
    }, 42: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return u
        }), n.d(t, "b", function () {
            return j
        }), t.c = w, n.d(t, "d", function () {
            return d
        });
        var b = n(0), y = n(3), v = n(38), r = n(23), i = n(95), o = n(2), a = n(11), t = n(13), h = n.n(t), t = n(10),
            m = n.n(t);

        function S() {
            return (S = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function A(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function E(e) {
            return function (e) {
                if (Array.isArray(e)) return c(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                }
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var O = n(0), T = n(5), I = [], C = Object.keys(T.TARGETING_KEYS).map(function (e) {
            return T.TARGETING_KEYS[e]
        }), u = {
            isBidNotExpired: function (e) {
                return e.responseTimestamp + 1e3 * e.ttl - 1e3 > Object(b.timestamp)()
            }, isUnusedBid: function (e) {
                return e && (e.status && !h()([T.BID_STATUS.RENDERED], e.status) || !e.status)
            }
        }, j = Object(a.b)("sync", function (e, r) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            if (3 < arguments.length && void 0 !== arguments[3] && arguments[3]) return e;
            var o = [], a = y.b.getConfig("sendBidsControl.dealPrioritization"), c = Object(b.groupBy)(e, "adUnitCode");
            return Object.keys(c).forEach(function (e) {
                var t = [], n = Object(b.groupBy)(c[e], "bidderCode");
                Object.keys(n).forEach(function (e) {
                    return t.push(n[e].reduce(r))
                }), 0 < i ? (t = a ? t.sort(w(!0)) : t.sort(function (e, t) {
                    return t.cpm - e.cpm
                }), o.push.apply(o, E(t.slice(0, i)))) : o.push.apply(o, E(t))
            }), o
        });

        function w() {
            var n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            return function (e, t) {
                return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb
            }
        }

        var _, R, s, d = (_ = r.a, s = {}, (R = {}).setLatestAuctionForAdUnit = function (e, t) {
            s[e] = t
        }, R.resetPresetTargeting = function (e, t) {
            var n, i;
            Object(b.isGptPubadsDefined)() && (n = U(e), i = _.getAdUnits().filter(function (e) {
                return h()(n, e.code)
            }), window.googletag.pubads().getSlots().forEach(function (n) {
                var r = O.isFn(t) && t(n);
                I.forEach(function (t) {
                    i.forEach(function (e) {
                        (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || O.isFn(r) && r(e.code)) && n.setTargeting(t, null)
                    })
                })
            }))
        }, R.resetPresetTargetingAST = function (e) {
            U(e).forEach(function (e) {
                var t, n, r = window.apntag.getTag(e);
                r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function (e) {
                    h()(I, e.toLowerCase()) || (n[e] = r.keywords[e])
                }), window.apntag.modifyTag(e, {keywords: n}))
            })
        }, R.getAllTargeting = function (e) {
            var t, n, r, i, o, a, c, u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : x(), s = U(e);

            function d(e) {
                return Object(b.deepAccess)(e, T.JSON_MAPPING.ADSERVER_TARGETING)
            }

            (g = (a = s, e = u, e = R.getWinningBids(a, e), c = D(), (e = e.map(function (i) {
                return A({}, i.adUnitCode, Object.keys(i.adserverTargeting).filter(function (e) {
                    return void 0 === i.sendStandardTargeting || i.sendStandardTargeting || -1 === c.indexOf(e)
                }).reduce(function (e, t) {
                    var n = [i.adserverTargeting[t]], r = A({}, t.substring(0, 20), n);
                    if (t !== T.TARGETING_KEYS.DEAL) return [].concat(E(e), [r]);
                    n = A({}, "".concat(t, "_").concat(i.bidderCode).substring(0, 20), n);
                    return [].concat(E(e), [r, n])
                }, []))
            })).concat((o = s, u.filter(function (e) {
                return h()(o, e.adUnitCode)
            }).map(function (e) {
                return S({}, e)
            }).reduce(N, []).map(k).filter(function (e) {
                return e
            }))).concat(y.b.getConfig("enableSendAllBids") ? (n = s, f = u, r = C.concat(v.a), e = y.b.getConfig("sendBidsControl.bidLimit"), f = j(f, b.getHighestCpm, e), e = y.b.getConfig("targetingControls.allowSendAllBidsTargetingKeys"), i = e ? e.map(function (e) {
                return T.TARGETING_KEYS[e]
            }) : r, f.map(function (t) {
                if (B(t, n)) return A({}, t.adUnitCode, P(t, r.filter(function (e) {
                    return void 0 !== t.adserverTargeting[e] && -1 !== i.indexOf(e)
                })))
            }).filter(function (e) {
                return e
            })) : function (e, t) {
                if (!0 !== y.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                var n = C.concat(v.a);
                return j(t, b.getHighestCpm).map(function (t) {
                    if (t.dealId && B(t, e)) return A({}, t.adUnitCode, P(t, n.filter(function (e) {
                        return void 0 !== t.adserverTargeting[e]
                    })))
                }).filter(function (e) {
                    return e
                })
            }(s, u)).concat((t = s, _.getAdUnits().filter(function (e) {
                return h()(t, e.code) && d(e)
            }).map(function (e) {
                return A({}, e.code, (t = d(e), Object.keys(t).map(function (e) {
                    return A({}, e, O.isArray(t[e]) ? t[e] : t[e].split(","))
                })));
                var t
            }))))).map(function (t) {
                Object.keys(t).map(function (e) {
                    t[e].map(function (e) {
                        -1 === I.indexOf(Object.keys(e)[0]) && (I = Object.keys(e).concat(I))
                    })
                })
            });
            var f = Object.keys(S({}, T.DEFAULT_TARGETING_KEYS, T.NATIVE_KEYS)),
                u = y.b.getConfig("targetingControls.allowTargetingKeys") || f;
            Array.isArray(u) && 0 < u.length && (g = function (e, r) {
                var i = S({}, T.TARGETING_KEYS, T.NATIVE_KEYS), o = Object.keys(i), a = {};
                Object(b.logInfo)("allowTargetingKeys - allowed keys [ ".concat(r.map(function (e) {
                    return i[e]
                }).join(", "), " ]")), e.map(function (e) {
                    var t = Object.keys(e)[0], n = e[t].filter(function (e) {
                        var t = Object.keys(e)[0], e = 0 === o.filter(function (e) {
                            return 0 === t.indexOf(i[e])
                        }).length || m()(r, function (e) {
                            e = i[e];
                            return 0 === t.indexOf(e)
                        });
                        return a[t] = !e, e
                    });
                    e[t] = n
                });
                var t = Object.keys(a).filter(function (e) {
                    return a[e]
                });
                return Object(b.logInfo)("allowTargetingKeys - removed keys [ ".concat(t.join(", "), " ]")), e.filter(function (e) {
                    return 0 < e[Object.keys(e)[0]].length
                })
            }(g, u));
            var l, p, g = g.map(function (e) {
                return A({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                    return A({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                }).reduce(function (e, t) {
                    return S(t, e)
                }, {}))
            }).reduce(function (e, t) {
                var n = Object.keys(t)[0];
                return e[n] = S({}, e[n], t[n]), e
            }, {}), f = y.b.getConfig("targetingControls.auctionKeyMaxChars");
            return f && (Object(b.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(f, " characters.  Running checks on auction keys...")), u = g, l = f, p = Object(b.deepClone)(u), g = Object.keys(p).map(function (e) {
                return {adUnitCode: e, adserverTargeting: p[e]}
            }).sort(w()).reduce(function (e, t, n, r) {
                var i, o = (i = t.adserverTargeting, Object.keys(i).reduce(function (e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26")
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                t = t.adUnitCode, o = o.length;
                return o <= l ? (l -= o, Object(b.logInfo)("AdUnit '".concat(t, "' auction keys comprised of ").concat(o, " characters.  Deducted from running threshold; new limit is ").concat(l), p[t]), e[t] = p[t]) : Object(b.logWarn)("The following keys for adUnitCode '".concat(t, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(o, ", the current allotted amount was ").concat(l, ".\n"), p[t]), n + 1 === r.length && 0 === Object.keys(e).length && Object(b.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
            }, {})), s.forEach(function (e) {
                g[e] || (g[e] = {})
            }), g
        }, R.setTargetingForGPT = function (i, e) {
            window.googletag.pubads().getSlots().forEach(function (r) {
                Object.keys(i).filter((e || Object(b.isAdUnitCodeMatchingSlot))(r)).forEach(function (n) {
                    return Object.keys(i[n]).forEach(function (t) {
                        var e = i[n][t];
                        (e = 1 < (e = "string" == typeof e ? e.split(",") : e).length ? [e] : e).map(function (e) {
                            return O.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                        }).forEach(function (e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }, R.getWinningBids = function (e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : x(), t = U(e);
            return n.filter(function (e) {
                return h()(t, e.adUnitCode)
            }).filter(function (e) {
                return 0 < e.cpm
            }).map(function (e) {
                return e.adUnitCode
            }).filter(b.uniques).map(function (t) {
                return n.filter(function (e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(b.getHighestCpm)
            })
        }, R.setTargetingForAst = function (e) {
            var r = R.getAllTargeting(e);
            try {
                R.resetPresetTargetingAST(e)
            } catch (e) {
                O.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function (n) {
                return Object.keys(r[n]).forEach(function (e) {
                    var t;
                    O.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), (O.isStr(r[n][e]) || O.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {overrideKeyValue: !0}))
                })
            })
        }, R.isApntagDefined = function () {
            if (window.apntag && O.isFn(window.apntag.setKeywords)) return !0
        }, R);

        function B(e, t) {
            return e.adserverTargeting && t && (O.isArray(t) && h()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
        }

        function U(e) {
            return "string" == typeof e ? [e] : O.isArray(e) ? e : _.getAdUnitCodes() || []
        }

        function x() {
            var e = _.getBidsReceived(), e = (e = !y.b.getConfig("useBidCache") ? e.filter(function (e) {
                return s[e.adUnitCode] === e.auctionId
            }) : e).filter(function (e) {
                return Object(b.deepAccess)(e, "video.context") !== o.a
            }).filter(function (e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(u.isUnusedBid).filter(u.isBidNotExpired);
            return j(e, b.getOldestHighestCpmBid)
        }

        function D() {
            return _.getStandardBidderAdServerTargeting().map(function (e) {
                return e.key
            }).concat(C).filter(b.uniques)
        }

        function N(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(f()).forEach(function (e) {
                var t, n;
                r.length && r.filter((n = e, function (e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                })).forEach((t = e, function (e) {
                    O.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(b.uniques), delete i.adserverTargeting[t]
                }))
            }), r.push(i), r
        }

        function f() {
            var t = D().concat(v.a);
            return function (e) {
                return -1 === t.indexOf(e)
            }
        }

        function k(t) {
            return A({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(f()).map(function (e) {
                return A({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }

        function P(t, e) {
            return e.map(function (e) {
                return A({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
            })
        }
    }, 43: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return y
        });
        var i = n(0), r = n(3), t = n(13), o = n.n(t), n = n(7);

        function a(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, o = [], a = !0, c = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
                    } catch (e) {
                        c = !0, i = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                    return o
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function u() {
            return (u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        r.b.setDefaults({
            userSync: i.deepClone({
                syncEnabled: !0,
                filterSettings: {image: {bidders: "*", filter: "include"}},
                syncsPerBidder: 5,
                syncDelay: 3e3,
                auctionDelay: 0
            })
        });
        n = Object(n.a)("usersync");
        var s, d, f, l, p, g, b, n = !i.isSafariBrowser() && n.cookiesAreEnabled(), y = (s = {
            config: r.b.getConfig("userSync"),
            browserSupportsCookies: n
        }, d = {}, f = v(), l = new Set, g = {
            image: !0,
            iframe: !(p = {})
        }, b = s.config, r.b.getConfig("userSync", function (e) {
            var t;
            e.userSync && (t = e.userSync.filterSettings, i.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                bidders: "*",
                filter: "include"
            }))), b = u(b, e.userSync)
        }), d.registerSync = function (e, t, n) {
            return l.has(t) ? i.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : b.syncEnabled && i.isArray(f[e]) ? t ? 0 !== b.syncsPerBidder && Number(p[t]) >= b.syncsPerBidder ? i.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : d.canBidderRegisterSync(e, t) ? (f[e].push([t, n]), (r = p)[n = t] ? r[n] += 1 : r[n] = 1, void (p = r)) : i.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : i.logWarn("Bidder is required for registering sync") : i.logWarn('User sync type "'.concat(e, '" not supported'));
            var r
        }, d.syncUsers = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            if (e) return setTimeout(h, Number(e));
            h()
        }, d.triggerUserSyncs = function () {
            b.enableOverride && d.syncUsers()
        }, d.canBidderRegisterSync = function (e, t) {
            return !b.filterSettings || !S(e, t)
        }, d);

        function v() {
            return {image: [], iframe: []}
        }

        function h() {
            if (b.syncEnabled && s.browserSupportsCookies) {
                try {
                    g.image && m(f.image, function (e) {
                        var t = a(e, 2), e = t[0], t = t[1];
                        i.logMessage("Invoking image pixel user sync for bidder: ".concat(e)), i.triggerPixel(t)
                    }), g.iframe && m(f.iframe, function (e) {
                        var t = a(e, 2), e = t[0], t = t[1];
                        i.logMessage("Invoking iframe user sync for bidder: ".concat(e)), i.insertUserSyncIframe(t)
                    })
                } catch (e) {
                    return i.logError("Error firing user syncs", e)
                }
                f = v()
            }
        }

        function m(e, t) {
            i.shuffle(e).forEach(function (e) {
                t(e), l.add(e[0])
            })
        }

        function S(e, t) {
            var n = b.filterSettings;
            if (function (e, t) {
                if (e.all && e[t]) return i.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                var n = e.all || e[t], e = e.all ? "all" : t;
                if (!n) return !1;
                t = n.filter, n = n.bidders;
                if (t && "include" !== t && "exclude" !== t) return i.logWarn('UserSync "filterSettings.'.concat(e, ".filter\" setting '").concat(t, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                return !!("*" === n || Array.isArray(n) && 0 < n.length && n.every(function (e) {
                    return i.isStr(e) && "*" !== e
                })) || (i.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(e, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
            }(n, e)) {
                g[e] = !0;
                var r = n.all || n[e], n = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function (e, t) {
                        return !o()(e, t)
                    }, exclude: function (e, t) {
                        return o()(e, t)
                    }
                }[r.filter || "include"](n, t)
            }
            return !g[e]
        }
    }, 44: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return s
        }), n.d(t, "b", function () {
            return p
        });
        var t = n(10), d = n.n(t), r = n(0), f = 2, i = {buckets: [{max: 5, increment: .5}]},
            o = {buckets: [{max: 20, increment: .1}]}, a = {buckets: [{max: 20, increment: .01}]},
            c = {buckets: [{max: 3, increment: .01}, {max: 8, increment: .05}, {max: 20, increment: .5}]},
            u = {buckets: [{max: 5, increment: .05}, {max: 10, increment: .1}, {max: 20, increment: .5}]};

        function s(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, r = parseFloat(e);
            return {
                low: "" === (r = isNaN(r) ? "" : r) ? "" : l(e, i, n),
                med: "" === r ? "" : l(e, o, n),
                high: "" === r ? "" : l(e, a, n),
                auto: "" === r ? "" : l(e, u, n),
                dense: "" === r ? "" : l(e, c, n),
                custom: "" === r ? "" : l(e, t, n)
            }
        }

        function l(n, e, r) {
            var i = "";
            if (!p(e)) return i;
            var t, o, a, c = e.buckets.reduce(function (e, t) {
                return e.max > t.max ? e : t
            }, {max: 0}), u = 0, s = d()(e.buckets, function (e) {
                if (n > c.max * r) {
                    var t = e.precision;
                    i = (e.max * r).toFixed(t = void 0 === t ? f : t)
                } else {
                    if (n <= e.max * r && u * r <= n) return e.min = u, e;
                    u = e.max
                }
            });
            return s && (t = n, a = r, e = void 0 !== (o = s).precision ? o.precision : f, s = o.increment * a, o = o.min * a, a = Math.pow(10, e + 2), a = (t * a - o * a) / (s * a), o = Math.floor(a) * s + o, i = (o = Number(o.toFixed(10))).toFixed(e)), i
        }

        function p(e) {
            if (r.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function (e) {
                e.max && e.increment || (t = !1)
            }), t
        }
    }, 45: function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, 46: function (e, t, n) {
        var r = n(75), i = n(48);
        e.exports = function (e) {
            return r(i(e))
        }
    }, 47: function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, 48: function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        }
    }, 49: function (e, t, n) {
        var r = n(48);
        e.exports = function (e) {
            return Object(r(e))
        }
    }, 5: function (e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {GOOD: 1, NO_BID: 2},
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                BEFORE_REQUEST_BIDS: "beforeRequestBids",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed",
                TCF2_ENFORCEMENT: "tcf2Enforcement",
                AUCTION_DEBUG: "auctionDebug",
                BID_VIEWABLE: "bidViewable",
                STALE_RENDER: "staleRender"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {bidWon: "adUnitCode"},
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host",
                ADOMAIN: "hb_adomain"
            },
            DEFAULT_TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice",
                rendererUrl: "hb_renderer_url",
                adTemplate: "hb_adTemplate"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {BID_TARGETING_SET: "targetingSet", RENDERED: "rendered", BID_REJECTED: "bidRejected"}
        }
    }, 50: function (e, t) {
        e.exports = {}
    }, 51: function (e, t, n) {
        var r = n(58), i = Math.min;
        e.exports = function (e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    }, 52: function (e, t) {
        e.exports = function () {
        }
    }, 53: function (e, t, n) {
        n = n(27);
        e.exports = n
    }, 54: function (e, t) {
        e.exports = {}
    }, 55: function (e, t, n) {
        var r, i, o, a, c, u, s, d, f = n(118), l = n(25), p = n(29), g = n(31), b = n(30), y = n(59), v = n(65),
            n = n(54), h = "Object already initialized", l = l.WeakMap;
        s = f || y.state ? (r = y.state || (y.state = new l), i = r.get, o = r.has, a = r.set, c = function (e, t) {
            if (o.call(r, e)) throw new TypeError(h);
            return t.facade = e, a.call(r, e, t), t
        }, u = function (e) {
            return i.call(r, e) || {}
        }, function (e) {
            return o.call(r, e)
        }) : (n[d = v("state")] = !0, c = function (e, t) {
            if (b(e, d)) throw new TypeError(h);
            return t.facade = e, g(e, d, t), t
        }, u = function (e) {
            return b(e, d) ? e[d] : {}
        }, function (e) {
            return b(e, d)
        }), e.exports = {
            set: c, get: u, has: s, enforce: function (e) {
                return s(e) ? u(e) : c(e, {})
            }, getterFor: function (n) {
                return function (e) {
                    var t;
                    if (!p(e) || (t = u(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                    return t
                }
            }
        }
    }, 56: function (e, t, n) {
        var i = n(29);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, 57: function (e, t, n) {
        var S = n(26), A = n(75), E = n(49), O = n(51), T = n(104), I = [].push, n = function (l) {
            var p = 1 == l, g = 2 == l, b = 3 == l, y = 4 == l, v = 6 == l, h = 7 == l, m = 5 == l || v;
            return function (e, t, n, r) {
                for (var i, o, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, r = r || T, f = p ? r(e, s) : g || h ? r(e, 0) : void 0; d < s; d++) if ((m || d in c) && (o = u(i = c[d], d, a), l)) if (p) f[d] = o; else if (o) switch (l) {
                    case 3:
                        return !0;
                    case 5:
                        return i;
                    case 6:
                        return d;
                    case 2:
                        I.call(f, i)
                } else switch (l) {
                    case 4:
                        return !1;
                    case 7:
                        I.call(f, i)
                }
                return v ? -1 : b || y ? y : f
            }
        };
        e.exports = {
            forEach: n(0),
            map: n(1),
            filter: n(2),
            some: n(3),
            every: n(4),
            find: n(5),
            findIndex: n(6),
            filterOut: n(7)
        }
    }, 58: function (e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    }, 59: function (e, t, n) {
        var r = n(25), i = n(106), n = "__core-js_shared__", n = r[n] || i(n, {});
        e.exports = n
    }, 60: function (e, t) {
        var n = 0, r = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
        }
    }, 61: function (e, t, n) {
        var r = n(62), i = n(40), o = n(22)("iterator");
        e.exports = function (e) {
            if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
        }
    }, 62: function (e, t, n) {
        var r = n(63), i = n(47), o = n(22)("toStringTag"), a = "Arguments" == i(function () {
            return arguments
        }());
        e.exports = r ? i : function (e) {
            var t;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (e = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }(t = Object(e), o)) ? e : a ? i(t) : "Object" == (e = i(t)) && "function" == typeof t.callee ? "Arguments" : e
        }
    }, 63: function (e, t, n) {
        var r = {};
        r[n(22)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
    }, 64: function (e, t, n) {
        var i = n(63), o = n(34).f, a = n(31), c = n(30), u = n(117), s = n(22)("toStringTag");
        e.exports = function (e, t, n, r) {
            e && (e = n ? e : e.prototype, c(e, s) || o(e, s, {
                configurable: !0,
                value: t
            }), r && !i && a(e, "toString", u))
        }
    }, 65: function (e, t, n) {
        var r = n(78), i = n(60), o = r("keys");
        e.exports = function (e) {
            return o[e] || (o[e] = i(e))
        }
    }, 66: function (e, t, n) {
        "use strict";

        function b() {
            return this
        }

        var y = n(14), v = n(126), h = n(90), m = n(128), S = n(64), A = n(31), E = n(88), r = n(22), O = n(17),
            T = n(40), n = n(89), I = n.IteratorPrototype, C = n.BUGGY_SAFARI_ITERATORS, j = r("iterator"),
            w = "values", _ = "entries";
        e.exports = function (e, t, n, r, i, o, a) {
            v(n, t, r);

            function c(e) {
                if (e === i && g) return g;
                if (!C && e in l) return l[e];
                switch (e) {
                    case"keys":
                    case w:
                    case _:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            }

            var u, s, d = t + " Iterator", f = !1, l = e.prototype, p = l[j] || l["@@iterator"] || i && l[i],
                g = !C && p || c(i), r = "Array" == t && l.entries || p;
            if (r && (e = h(r.call(new e)), I !== Object.prototype && e.next && (O || h(e) === I || (m ? m(e, I) : "function" != typeof e[j] && A(e, j, b)), S(e, d, !0, !0), O && (T[d] = b))), i == w && p && p.name !== w && (f = !0, g = function () {
                return p.call(this)
            }), O && !a || l[j] === g || A(l, j, g), T[t] = g, i) if (u = {
                values: c(w),
                keys: o ? g : c("keys"),
                entries: c(_)
            }, a) for (s in u) !C && !f && s in l || E(l, s, u[s]); else y({target: t, proto: !0, forced: C || f}, u);
            return u
        }
    }, 67: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var r = n(0), i = {};

        function o(e, t, n) {
            n = n, e = i[e = e] = i[e] || {bidders: {}}, e = n ? e.bidders[n] = e.bidders[n] || {} : e;
            return e[t] = (e[t] || 0) + 1, e[t]
        }

        var a = {
            incrementRequestsCounter: function (e) {
                return o(e, "requestsCounter")
            }, incrementBidderRequestsCounter: function (e, t) {
                return o(e, "requestsCounter", t)
            }, incrementBidderWinsCounter: function (e, t) {
                return o(e, "winsCounter", t)
            }, getRequestsCounter: function (e) {
                return Object(r.deepAccess)(i, "".concat(e, ".requestsCounter")) || 0
            }, getBidderRequestsCounter: function (e, t) {
                return Object(r.deepAccess)(i, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0
            }, getBidderWinsCounter: function (e, t) {
                return Object(r.deepAccess)(i, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0
            }
        }
    }, 7: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return f
        }), n.d(t, "d", function () {
            return l
        }), t.a = function (e) {
            return i({moduleName: e, moduleType: "core"})
        }, t.b = function (e, t) {
            return i({gvlid: e, moduleName: t})
        };
        var r = n(11), c = n(0), t = n(13), s = n.n(t), d = ["core", "prebid-module"], f = [];

        function i(e) {
            var e = 0 < arguments.length && void 0 !== e ? e : {}, r = e.gvlid, i = e.moduleName, o = e.moduleType;

            function u(t) {
                if (s()(d, o)) return t({valid: !0});
                var n;
                return l(r, i, {hasEnforcementHook: !1}, function (e) {
                    n = e && e.hasEnforcementHook ? t(e) : (e = {
                        hasEnforcementHook: !1,
                        valid: c.hasDeviceAccess()
                    }, t(e))
                }), n
            }

            var a = function (t) {
                function n(e) {
                    if (e && e.valid) try {
                        return !!window.localStorage
                    } catch (e) {
                        c.logError("Local storage api disabled")
                    }
                    return !1
                }

                if (!t || "function" != typeof t) return u(n);
                f.push(function () {
                    var e = u(n);
                    t(e)
                })
            };
            return {
                setCookie: function (r, i, o, a, c, t) {
                    function n(e) {
                        var t, n;
                        e && e.valid && (t = c && "" !== c ? " ;domain=".concat(encodeURIComponent(c)) : "", n = o && "" !== o ? " ;expires=".concat(o) : "", e = null != a && "none" == a.toLowerCase() ? "; Secure" : "", document.cookie = "".concat(r, "=").concat(encodeURIComponent(i)).concat(n, "; path=/").concat(t).concat(a ? "; SameSite=".concat(a) : "").concat(e))
                    }

                    if (!t || "function" != typeof t) return u(n);
                    f.push(function () {
                        var e = u(n);
                        t(e)
                    })
                }, getCookie: function (t, n) {
                    function r(e) {
                        if (e && e.valid) {
                            e = window.document.cookie.match("(^|;)\\s*" + t + "\\s*=\\s*([^;]*)\\s*(;|$)");
                            return e ? decodeURIComponent(e[2]) : null
                        }
                        return null
                    }

                    if (!n || "function" != typeof n) return u(r);
                    f.push(function () {
                        var e = u(r);
                        n(e)
                    })
                }, localStorageIsEnabled: function (t) {
                    function n(e) {
                        if (e && e.valid) try {
                            return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                        } catch (e) {
                        } finally {
                            try {
                                localStorage.removeItem("prebid.cookieTest")
                            } catch (e) {
                            }
                        }
                        return !1
                    }

                    if (!t || "function" != typeof t) return u(n);
                    f.push(function () {
                        var e = u(n);
                        t(e)
                    })
                }, cookiesAreEnabled: function (t) {
                    function n(e) {
                        return !(!e || !e.valid) && (!!c.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
                    }

                    if (!t || "function" != typeof t) return u(n);
                    f.push(function () {
                        var e = u(n);
                        t(e)
                    })
                }, setDataInLocalStorage: function (t, n, r) {
                    function i(e) {
                        e && e.valid && a() && window.localStorage.setItem(t, n)
                    }

                    if (!r || "function" != typeof r) return u(i);
                    f.push(function () {
                        var e = u(i);
                        r(e)
                    })
                }, getDataFromLocalStorage: function (t, n) {
                    function r(e) {
                        return e && e.valid && a() ? window.localStorage.getItem(t) : null
                    }

                    if (!n || "function" != typeof n) return u(r);
                    f.push(function () {
                        var e = u(r);
                        n(e)
                    })
                }, removeDataFromLocalStorage: function (t, n) {
                    function r(e) {
                        e && e.valid && a() && window.localStorage.removeItem(t)
                    }

                    if (!n || "function" != typeof n) return u(r);
                    f.push(function () {
                        var e = u(r);
                        n(e)
                    })
                }, hasLocalStorage: a, findSimilarCookies: function (o, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = [];
                            if (c.hasDeviceAccess()) for (var n = document.cookie.split(";"); n.length;) {
                                var r = n.pop(), i = (i = r.indexOf("=")) < 0 ? r.length : i;
                                0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)))
                            }
                            return t
                        }
                    }

                    if (!t || "function" != typeof t) return u(n);
                    f.push(function () {
                        var e = u(n);
                        t(e)
                    })
                }
            }
        }

        var l = Object(r.b)("async", function (e, t, n, r) {
            r(n)
        }, "validateStorageEnforcement")
    }, 71: function (e, t, n) {
        n = n(234);
        e.exports = n
    }, 72: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "adUnitSetupChecks", function () {
            return F
        }), n.d(t, "checkAdUnitSetup", function () {
            return z
        }), t.executeCallbacks = K;
        var r = n(16), i = n(0), o = n(242), a = n(43), m = n(3), S = n(23), s = n(42), c = n(11), u = n(243),
            d = n(13), f = n.n(d), l = n(67), A = n(12), p = n(35), g = n(7);

        function b(e) {
            return function (e) {
                if (Array.isArray(e)) return y(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                }
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function v() {
            return (v = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var h = Object(r.a)(), E = n(5), O = n(0), T = n(8).default, I = n(9), n = a.a.triggerUserSyncs, a = E.EVENTS,
            C = a.ADD_AD_UNITS, j = a.BID_WON, w = a.REQUEST_BIDS, _ = a.SET_TARGETING, R = a.AD_RENDER_FAILED,
            B = a.STALE_RENDER, a = E.AD_RENDER_FAILED_REASON, U = a.PREVENT_WRITING_ON_MAIN_DOCUMENT, x = a.NO_AD,
            D = a.EXCEPTION, N = a.CANNOT_FIND_AD, k = a.MISSING_DOC_OR_ADID, P = {
                bidWon: function (e) {
                    var t = S.a.getBidsRequested().map(function (e) {
                        return e.bids.map(function (e) {
                            return e.adUnitCode
                        })
                    }).reduce(i.flatten).filter(i.uniques);
                    if (O.contains(t, e)) return !0;
                    O.logError('The "' + e + '" placement is not defined.')
                }
            };

        function M(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }

        function q(e, t) {
            var n = [];
            return O.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function (e) {
                return Object(i.isArrayOfNums)(e, 2)
            }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n
        }

        function G(e) {
            var t = O.deepClone(e), n = t.mediaTypes.banner, e = q(n.sizes);
            return 0 < e.length ? (n.sizes = e, t.sizes = e) : (O.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete t.mediaTypes.banner), t
        }

        function W(e) {
            var t, n = O.deepClone(e), r = n.mediaTypes.video;
            return r.playerSize && (t = "number" == typeof r.playerSize[0] ? 2 : 1, 0 < (e = q(r.playerSize, t)).length ? (2 == t && O.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), r.playerSize = e, n.sizes = e) : (O.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete n.mediaTypes.video.playerSize)), n
        }

        function L(e) {
            var t = O.deepClone(e), e = t.mediaTypes.native;
            return e.image && e.image.sizes && !Array.isArray(e.image.sizes) && (O.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete t.mediaTypes.native.image.sizes), e.image && e.image.aspect_ratios && !Array.isArray(e.image.aspect_ratios) && (O.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete t.mediaTypes.native.image.aspect_ratios), e.icon && e.icon.sizes && !Array.isArray(e.icon.sizes) && (O.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete t.mediaTypes.native.icon.sizes), t
        }

        Object(u.a)(), h.bidderSettings = h.bidderSettings || {}, h.libLoaded = !0, h.version = "v4.43.0", O.logInfo("Prebid.js v4.43.0 loaded"), h.installedModules = ["consentManagement", "schain", "adagioBidAdapter", "adyoulikeBidAdapter", "aolBidAdapter", "appnexusBidAdapter", "buyselladsBidAdapter", "cointrafficBidAdapter", "coinzillaBidAdapter", "consumableBidAdapter", "criteoBidAdapter", "mantisBidAdapter", "nobidBidAdapter", "onetagBidAdapter", "openxBidAdapter", "rubiconBidAdapter", "sharethroughBidAdapter", "sovrnBidAdapter", "tripleliftBidAdapter", "adagioAnalyticsAdapter"], h.adUnits = h.adUnits || [], h.triggerUserSyncs = n;
        var F = {validateBannerMediaType: G, validateVideoMediaType: W, validateNativeMediaType: L, validateSizes: q},
            z = Object(c.b)("sync", function (e) {
                var a = [];
                return e.forEach(function (e) {
                    var t, n, r, i = e.mediaTypes, o = e.bids;
                    o && O.isArray(o) ? i && 0 !== Object.keys(i).length ? (r = v({}, t = i.banner ? G(e) : t, n = i.video ? W(t || e) : n, r = i.native ? L(n || t || e) : r), a.push(r)) : O.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")) : O.logError("Detected adUnit.code '".concat(e.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."))
                }), a
            }, "checkAdUnitSetup");

        function V(e) {
            var n = S.a[e]().filter(O.bind.call(i.adUnitsFilter, this, S.a.getAdUnitCodes())),
                r = S.a.getLastAuctionId();
            return n.map(function (e) {
                return e.adUnitCode
            }).filter(i.uniques).map(function (t) {
                return n.filter(function (e) {
                    return e.auctionId === r && e.adUnitCode === t
                })
            }).filter(function (e) {
                return e && e[0] && e[0].adUnitCode
            }).map(function (e) {
                return t = {}, n = e[0].adUnitCode, e = {bids: e}, n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t;
                var t, n
            }).reduce(function (e, t) {
                return v(e, t)
            }, {})
        }

        function H(e) {
            var t = e.reason, n = e.message, r = e.bid, e = e.id, t = {reason: t, message: n};
            r && (t.bid = r), e && (t.adId = e), O.logError(n), I.emit(R, t)
        }

        function K(e, t) {
            function n(e) {
                for (var t; t = e.shift();) t()
            }

            n(g.c), n(J), e.call(this, t)
        }

        h.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if (O.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                e = h.getAdserverTargetingForAdUnitCode(e);
                return O.transformAdServerTargetingObj(e)
            }
            O.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, h.getHighestUnusedBidResponseForAdUnitCode = function (e) {
            if (e) {
                e = S.a.getAllBidsForAdUnitCode(e).filter(s.a.isUnusedBid).filter(s.a.isBidNotExpired);
                return e.length ? e.reduce(i.getHighestCpm) : {}
            }
            O.logMessage("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")
        }, h.getAdserverTargetingForAdUnitCode = function (e) {
            return h.getAdserverTargeting(e)[e]
        }, h.getAdserverTargeting = function (e) {
            return O.logInfo("Invoking pbjs.getAdserverTargeting", arguments), s.d.getAllTargeting(e)
        }, h.getNoBids = function () {
            return O.logInfo("Invoking pbjs.getNoBids", arguments), V("getNoBids")
        }, h.getNoBidsForAdUnitCode = function (t) {
            return {
                bids: S.a.getNoBids().filter(function (e) {
                    return e.adUnitCode === t
                })
            }
        }, h.getBidResponses = function () {
            return O.logInfo("Invoking pbjs.getBidResponses", arguments), V("getBidsReceived")
        }, h.getBidResponsesForAdUnitCode = function (t) {
            return {
                bids: S.a.getBidsReceived().filter(function (e) {
                    return e.adUnitCode === t
                })
            }
        }, h.setTargetingForGPTAsync = function (e, t) {
            var n;
            O.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)() ? (n = s.d.getAllTargeting(e), s.d.resetPresetTargeting(e, t), s.d.setTargetingForGPT(n, t), Object.keys(n).forEach(function (t) {
                Object.keys(n[t]).forEach(function (e) {
                    "hb_adid" === e && S.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET)
                })
            }), I.emit(_, n)) : O.logError("window.googletag is not defined on the page")
        }, h.setTargetingForAst = function (e) {
            O.logInfo("Invoking pbjs.setTargetingForAn", arguments), s.d.isApntagDefined() ? (s.d.setTargetingForAst(e), I.emit(_, s.d.getAllTargeting())) : O.logError("window.apntag is not defined on the page")
        }, h.renderAd = function (e, t, n) {
            if (O.logInfo("Invoking pbjs.renderAd", arguments), O.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var r, i, o, a, c, u, s, d, f, l, p, g, b, y, v = S.a.findBidByAdId(t);
                v ? (r = !0, v && v.status === E.BID_STATUS.RENDERED && (O.logWarn("Ad id ".concat(v.adId, " has been rendered before")), I.emit(B, v), O.deepAccess(m.b.getConfig("auctionOptions"), "suppressStaleRender") && (r = !1)), r && (v.ad = O.replaceAuctionPrice(v.ad, v.cpm), v.adUrl = O.replaceAuctionPrice(v.adUrl, v.cpm), n && n.clickThrough && (i = n.clickThrough, v.ad = O.replaceClickThrough(v.ad, i), v.adUrl = O.replaceClickThrough(v.adUrl, i)), S.a.addWinningBid(v), I.emit(j, v), o = v.height, a = v.width, c = v.ad, u = v.mediaType, s = v.adUrl, d = v.renderer, f = document.createComment("Creative ".concat(v.creativeId, " served by ").concat(v.bidder, " Prebid.js Header Bidding")), O.insertElement(f, e, "body"), Object(A.c)(d) ? Object(A.b)(d, v) : e === document && !O.inIframe() || "video" === u ? (l = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."), H({
                    reason: U,
                    message: l,
                    bid: v,
                    id: t
                })) : c ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && ((p = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(p, 10) < 67 && e.open("text/html", "replace")), e.write(c), e.close(), M(e, a, o), O.callBurl(v)) : s ? ((g = O.createInvisibleIframe()).height = o, g.width = a, g.style.display = "inline", g.style.overflow = "hidden", g.src = s, O.insertElement(g, e, "body"), M(e, a, o), O.callBurl(v)) : (b = "Error trying to write ad. No ad for bid response id: ".concat(t), H({
                    reason: x,
                    message: b,
                    bid: v,
                    id: t
                })))) : (y = "Error trying to write ad. Cannot find ad by given id : ".concat(t), H({
                    reason: N,
                    message: y,
                    id: t
                }))
            } catch (e) {
                var h = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                H({reason: D, message: h, id: t})
            } else {
                h = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                H({reason: k, message: h, id: t})
            }
        }, h.removeAdUnit = function (e) {
            O.logInfo("Invoking pbjs.removeAdUnit", arguments), e ? (O.isArray(e) ? e : [e]).forEach(function (e) {
                for (var t = h.adUnits.length - 1; 0 <= t; t--) h.adUnits[t].code === e && h.adUnits.splice(t, 1)
            }) : h.adUnits = []
        }, h.requestBids = Object(c.b)("async", function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler,
                n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels, e = e.auctionId;
            I.emit(w);
            n = n || m.b.getConfig("bidderTimeout"), r = r && m.b.convertAdUnitFpd(O.isArray(r) ? r : [r]) || h.adUnits;
            O.logInfo("Invoking pbjs.requestBids", arguments);
            var a = [], c = [];
            if (m.b.getConfig("s2sConfig", function (e) {
                e && e.s2sConfig && (a = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
            }), a.forEach(function (e) {
                c.push.apply(c, b(e.bidders))
            }), r = z(r), i && i.length ? r = r.filter(function (e) {
                return f()(i, e.code)
            }) : i = r && r.map(function (e) {
                return e.code
            }), r.forEach(function (r) {
                var i = Object.keys(r.mediaTypes || {banner: "banner"}), e = r.bids.map(function (e) {
                    return e.bidder
                }), o = T.bidderRegistry, e = c ? e.filter(function (e) {
                    return !f()(c, e)
                }) : e;
                r.transactionId = O.generateUUID(), e.forEach(function (t) {
                    var e = o[t], e = e && e.getSpec && e.getSpec(), n = e && e.supportedMediaTypes || ["banner"];
                    i.some(function (e) {
                        return f()(n, e)
                    }) ? l.a.incrementBidderRequestsCounter(r.code, t) : (O.logWarn(O.unsupportedBidderMessage(r, t)), r.bids = r.bids.filter(function (e) {
                        return e.bidder !== t
                    }))
                }), l.a.incrementRequestsCounter(r.code)
            }), r && 0 !== r.length) {
                var u = S.a.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: n,
                    labels: o,
                    auctionId: e
                }), e = r.length;
                15 < e && O.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(e, " adUnits."), r), i.forEach(function (e) {
                    return s.d.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }), u.callBids()
            } else if (O.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                O.logError("Error executing bidsBackHandler", null, e)
            }
        }), h.requestBids.before(K, 49), h.addAdUnits = function (e) {
            O.logInfo("Invoking pbjs.addAdUnits", arguments), h.adUnits.push.apply(h.adUnits, m.b.convertAdUnitFpd(O.isArray(e) ? e : [e])), I.emit(C)
        }, h.onEvent = function (e, t, n) {
            O.logInfo("Invoking pbjs.onEvent", arguments), O.isFn(t) ? !n || P[e].call(null, n) ? I.on(e, t, n) : O.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : O.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, h.offEvent = function (e, t, n) {
            O.logInfo("Invoking pbjs.offEvent", arguments), n && !P[e].call(null, n) || I.off(e, t, n)
        }, h.getEvents = function () {
            return O.logInfo("Invoking pbjs.getEvents"), I.getEvents()
        }, h.registerBidAdapter = function (e, t) {
            O.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                O.logError("Error registering bidder adapter : " + e.message)
            }
        }, h.registerAnalyticsAdapter = function (e) {
            O.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                O.logError("Error registering analytics adapter : " + e.message)
            }
        }, h.createBid = function (e) {
            return O.logInfo("Invoking pbjs.createBid", arguments), Object(p.a)(e)
        };
        var J = [], Y = Object(c.b)("async", function (e) {
            e && !O.isEmpty(e) ? (O.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : O.logError("pbjs.enableAnalytics should be called with option {}")
        }, "enableAnalyticsCb");

        function Q(e) {
            e.forEach(function (e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    O.logError("Error processing command :", "prebid.js", e)
                }
            })
        }

        h.enableAnalytics = function (e) {
            J.push(Y.bind(this, e))
        }, h.aliasBidder = function (e, t, n) {
            O.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t, n) : O.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, h.getAllWinningBids = function () {
            return S.a.getAllWinningBids()
        }, h.getAllPrebidWinningBids = function () {
            return S.a.getBidsReceived().filter(function (e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET
            })
        }, h.getHighestCpmBids = function (e) {
            return s.d.getWinningBids(e)
        }, h.markWinningBidAsUsed = function (t) {
            var e = [];
            t.adUnitCode && t.adId ? e = S.a.getBidsReceived().filter(function (e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = s.d.getWinningBids(t.adUnitCode) : t.adId ? e = S.a.getBidsReceived().filter(function (e) {
                return e.adId === t.adId
            }) : O.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
        }, h.getConfig = m.b.getConfig, h.setConfig = m.b.setConfig, h.setBidderConfig = m.b.setBidderConfig, h.que.push(function () {
            return Object(o.a)()
        }), h.cmd.push = function (e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                O.logError("Error processing command :", e.message, e.stack)
            } else O.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, h.que.push = h.cmd.push, h.processQueue = function () {
            c.b.ready(), Q(h.que), Q(h.cmd)
        }, t.default = h
    }, 73: function (e, t, n) {
        n = n(382);
        e.exports = n
    }, 74: function (e, t, n) {
        "use strict";
        t.a = function (t, n) {
            i.adServers = i.adServers || {}, i.adServers[t] = i.adServers[t] || {}, Object.keys(n).forEach(function (e) {
                i.adServers[t][e] ? Object(r.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : i.adServers[t][e] = n[e]
            })
        };
        var t = n(16), r = n(0), i = Object(t.a)()
    }, 75: function (e, t, n) {
        var r = n(28), i = n(47), o = "".split;
        e.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return "String" == i(e) ? o.call(e, "") : Object(e)
        } : Object
    }, 76: function (e, t, n) {
        var r = n(33), i = n(28), o = n(77);
        e.exports = !r && !i(function () {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, 77: function (e, t, n) {
        var r = n(25), n = n(29), i = r.document, o = n(i) && n(i.createElement);
        e.exports = function (e) {
            return o ? i.createElement(e) : {}
        }
    }, 78: function (e, t, n) {
        var r = n(17), i = n(59);
        (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.15.2",
            mode: r ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
        })
    }, 79: function (e, t, n) {
        var r = n(107), n = n(28);
        e.exports = !!Object.getOwnPropertySymbols && !n(function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
        })
    }, 8: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "gdprDataHandler", function () {
            return R
        }), n.d(t, "uspDataHandler", function () {
            return B
        }), n.d(t, "coppaDataHandler", function () {
            return U
        }), n.d(t, "clientTestAdapters", function () {
            return x
        }), n.d(t, "allS2SBidders", function () {
            return D
        }), t.getAllS2SBidders = N, t.setS2STestingModule = function (e) {
            S = e
        };
        var y = n(0), f = n(95), l = n(38), p = n(1), v = n(4), o = n(3), r = n(11), i = n(13), h = n.n(i), i = n(10),
            m = n.n(i), g = n(67), a = n(19);

        function c(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, o = [], a = !0, c = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
                    } catch (e) {
                        c = !0, i = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                    return o
                }
            }(e, t) || s(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function u(e) {
            return function (e) {
                if (Array.isArray(e)) return d(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || s(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
            }
        }

        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function b() {
            return (b = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var S, A = n(0), E = n(5), O = n(9), T = {}, I = T.bidderRegistry = {}, C = T.aliasRegistry = {}, j = [];
        o.b.getConfig("s2sConfig", function (e) {
            e && e.s2sConfig && (j = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
        });
        var w = {};
        var _ = Object(r.b)("sync", function (e) {
            var r = e.bidderCode, c = e.auctionId, u = e.bidderRequestId, t = e.adUnits, s = e.labels, d = e.src;
            return t.reduce(function (e, o) {
                var t = Object(f.b)(Object(f.a)(o, s), o.mediaTypes, o.sizes), n = t.active, a = t.mediaTypes,
                    t = t.filterResults;
                return n ? t && A.logInfo('Size mapping filtered adUnit "'.concat(o.code, '" banner sizes from '), t.before, "to ", t.after) : A.logInfo('Size mapping disabled adUnit "'.concat(o.code, '"')), n && e.push(o.bids.filter(function (e) {
                    return e.bidder === r
                }).reduce(function (e, t) {
                    var n = o.nativeParams || A.deepAccess(o, "mediaTypes.native");
                    n && (t = b({}, t, {nativeParams: Object(l.h)(n)})), t = b({}, t, Object(y.getDefinedParams)(o, ["ortb2Imp", "mediaType", "renderer", "storedAuctionResponse"]));
                    var r = Object(f.b)(Object(f.a)(t, s), a), i = r.active, n = r.mediaTypes, r = r.filterResults;
                    return i ? r && A.logInfo('Size mapping filtered adUnit "'.concat(o.code, '" bidder "').concat(t.bidder, '" banner sizes from '), r.before, "to ", r.after) : A.logInfo('Size mapping deactivated adUnit "'.concat(o.code, '" bidder "').concat(t.bidder, '"')), A.isValidMediaTypes(n) ? t = b({}, t, {mediaTypes: n}) : A.logError("mediaTypes is not correctly configured for adunit ".concat(o.code)), i && e.push(b({}, t, {
                        adUnitCode: o.code,
                        transactionId: o.transactionId,
                        sizes: A.deepAccess(n, "banner.sizes") || A.deepAccess(n, "video.playerSize") || [],
                        bidId: t.bid_id || A.getUniqueIdentifierStr(),
                        bidderRequestId: u,
                        auctionId: c,
                        src: d,
                        bidRequestsCount: g.a.getRequestsCounter(o.code),
                        bidderRequestsCount: g.a.getBidderRequestsCounter(o.code, t.bidder),
                        bidderWinsCount: g.a.getBidderWinsCounter(o.code, t.bidder)
                    })), e
                }, [])), e
            }, []).reduce(y.flatten, []).filter(function (e) {
                return "" !== e
            })
        }, "getBids");
        var R = {
            consentData: null, setConsentData: function (e) {
                R.consentData = e
            }, getConsentData: function () {
                return R.consentData
            }
        }, B = {
            consentData: null, setConsentData: function (e) {
                B.consentData = e
            }, getConsentData: function () {
                return B.consentData
            }
        }, U = {
            getCoppa: function () {
                return !!o.b.getConfig("coppa")
            }
        }, x = [], D = [];

        function N() {
            T.s2STestingEnabled = !1, j.forEach(function (e) {
                e && e.enabled && e.bidders && e.bidders.length && D.push.apply(D, u(e.bidders))
            })
        }

        function k(e) {
            return e && e.enabled && e.testing && S
        }

        function P(t, n, e) {
            try {
                var r = I[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (A.logInfo("Invoking ".concat(t, ".").concat(n)), o.b.runWithBidder(t, y.bind.call(r[n], r, e)))
            } catch (e) {
                A.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }

        T.makeBidRequests = Object(r.b)("sync", function (u, s, d, r, f) {
            O.emit(E.EVENTS.BEFORE_REQUEST_BIDS, u);
            var e = Object(y.getBidderCodes)(u);
            o.b.getConfig("bidderSequence") === o.a && (e = Object(y.shuffle)(e));
            var l = Object(a.a)(), p = e, g = [];
            0 === D.length && N(), j.forEach(function (e) {
                e && e.enabled && k(e) && (S.calculateBidSources(e), S.getSourceBidderMap(u, D)[S.CLIENT].forEach(function (e) {
                    h()(x, e) || x.push(e)
                }))
            });
            var p = e.filter(function (e) {
                return !h()(D, e) || h()(x, e)
            }), b = D;
            j.forEach(function (n) {
                var r, i, t, o, e, a, c;
                n && n.enabled && (c = n, Boolean(k(c) && c.testServerOnly) && (e = u, a = n, Boolean(m()(e, function (e) {
                    return m()(e.bids, function (e) {
                        return (e.bidSource || a.bidderControl && a.bidderControl[e.bidder]) && e.finalSource === S.SERVER
                    })
                }))) && (A.logWarn("testServerOnly: True.  All client requests will be suppressed."), p.length = 0), e = u, o = (t = n).bidders, (e = A.deepClone(e)).forEach(function (e) {
                    e.bids = e.bids.filter(function (e) {
                        return h()(o, e.bidder) && (!k(t) || e.finalSource !== S.CLIENT)
                    }).map(function (e) {
                        return e.bid_id = A.getUniqueIdentifierStr(), e
                    })
                }), r = e = e.filter(function (e) {
                    return 0 !== e.bids.length
                }), i = A.generateUUID(), b.forEach(function (e) {
                    var t = A.getUniqueIdentifierStr(), t = {
                        bidderCode: e,
                        auctionId: d,
                        bidderRequestId: t,
                        tid: i,
                        bids: _({
                            bidderCode: e,
                            auctionId: d,
                            bidderRequestId: t,
                            adUnits: A.deepClone(r),
                            labels: f,
                            src: E.S2S.SRC
                        }),
                        auctionStart: s,
                        timeout: n.timeout,
                        src: E.S2S.SRC,
                        refererInfo: l
                    };
                    0 !== t.bids.length && g.push(t)
                }), r.forEach(function (e) {
                    var t = e.bids.filter(function (t) {
                        return m()(g, function (e) {
                            return m()(e.bids, function (e) {
                                return e.bidId === t.bid_id
                            })
                        })
                    });
                    e.bids = t
                }), g.forEach(function (e) {
                    void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = r.filter(function (e) {
                        return 0 < e.bids.length
                    }))
                }))
            });
            var i = (e = u, (e = A.deepClone(e)).forEach(function (e) {
                e.bids = e.bids.filter(function (e) {
                    return !x.length || e.finalSource !== S.SERVER
                })
            }), e = e.filter(function (e) {
                return 0 !== e.bids.length
            }));
            return p.forEach(function (e) {
                var t = A.getUniqueIdentifierStr(), n = {
                    bidderCode: e,
                    auctionId: d,
                    bidderRequestId: t,
                    bids: _({
                        bidderCode: e,
                        auctionId: d,
                        bidderRequestId: t,
                        adUnits: A.deepClone(i),
                        labels: f,
                        src: "client"
                    }),
                    auctionStart: s,
                    timeout: r,
                    refererInfo: l
                }, t = I[e];
                t || A.logError("Trying to make a request for bidder that does not exist: ".concat(e)), t && n.bids && 0 !== n.bids.length && g.push(n)
            }), R.getConsentData() && g.forEach(function (e) {
                e.gdprConsent = R.getConsentData()
            }), B.getConsentData() && g.forEach(function (e) {
                e.uspConsent = B.getConsentData()
            }), g
        }, "makeBidRequests"), T.callBids = function (e, t, s, d, f, l, i) {
            var n, p, g, b;
            t.length ? (t = (n = c(t.reduce(function (e, t) {
                return e[Number(void 0 !== t.src && t.src === E.S2S.SRC)].push(t), e
            }, [[], []]), 2))[0], p = n[1], g = [], p.forEach(function (e) {
                for (var t = -1, n = 0; n < g.length; ++n) if (e.tid === g[n].tid) {
                    t = n;
                    break
                }
                t <= -1 && g.push(e)
            }), b = 0, j.forEach(function (e) {
                var t, n, r, i, o, a, c, u;
                e && g[b] && h()(e.bidders, g[b].bidderCode) && (t = Object(v.b)(l, f ? {
                    request: f.request.bind(null, "s2s"),
                    done: f.done
                } : void 0), n = e.bidders, r = I[e.adapter], i = g[b].tid, a = g[b].adUnitsS2SCopy, o = p.filter(function (e) {
                    return e.tid === i
                }), r ? (a = {tid: i, ad_units: a, s2sConfig: e}).ad_units.length && (c = o.map(function (e) {
                    return e.start = Object(y.timestamp)(), d.bind(e)
                }), u = a.ad_units.reduce(function (e, t) {
                    return e.concat((t.bids || []).reduce(function (e, t) {
                        return e.concat(t.bidder)
                    }, []))
                }, []), A.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(n.filter(function (e) {
                    return h()(u, e)
                }).join(","))), o.forEach(function (e) {
                    O.emit(E.EVENTS.BID_REQUESTED, e)
                }), r.callBids(a, p, function (e, t) {
                    var n = Object(y.getBidderRequest)(p, t.bidderCode, e);
                    n && s.call(n, e, t)
                }, function () {
                    return c.forEach(function (e) {
                        return e()
                    })
                }, t)) : A.logError("missing " + e.adapter), b++)
            }), t.forEach(function (t) {
                t.start = Object(y.timestamp)();
                var e = I[t.bidderCode];
                o.b.runWithBidder(t.bidderCode, function () {
                    A.logMessage("CALLING BIDDER"), O.emit(E.EVENTS.BID_REQUESTED, t)
                });
                var n = Object(v.b)(l, f ? {request: f.request.bind(null, t.bidderCode), done: f.done} : void 0),
                    r = d.bind(t);
                try {
                    o.b.runWithBidder(t.bidderCode, y.bind.call(e.callBids, e, t, s.bind(t), r, n, i, o.b.callbackWithBidder(t.bidderCode)))
                } catch (e) {
                    A.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                        e: e,
                        bidRequest: t
                    }), r()
                }
            })) : A.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, T.videoAdapters = [], T.registerBidAdapter = function (e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                n = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (I[t] = e, h()(n, "video") && T.videoAdapters.push(t), h()(n, "native") && l.f.push(t)) : A.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : A.logError("bidAdapter or bidderCode not specified")
        }, T.aliasBidAdapter = function (n, r, e) {
            var t, i;
            if (void 0 === I[r]) {
                var o = I[n];
                if (void 0 === o) {
                    var a = [];
                    j.forEach(function (e) {
                        var t;
                        e.bidders && e.bidders.length && (t = e && e.bidders, e && h()(t, r) ? C[r] = n : a.push(n))
                    }), a.forEach(function (e) {
                        A.logError('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                    })
                } else try {
                    var c, u, s, d,
                        f = (t = n, i = [], h()(T.videoAdapters, t) && i.push("video"), h()(l.f, t) && i.push("native"), i);
                    o.constructor.prototype != Object.prototype ? (d = new o.constructor).setBidderCode(r) : (c = o.getSpec(), u = e && e.gvlid, s = e && e.skipPbsAliasing, d = Object(p.newBidder)(b({}, c, {
                        code: r,
                        gvlid: u,
                        skipPbsAliasing: s
                    })), C[r] = n), T.registerBidAdapter(d, r, {supportedMediaTypes: f})
                } catch (e) {
                    A.logError(n + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else A.logMessage('alias name "' + r + '" has been already specified.')
        }, T.registerAnalyticsAdapter = function (e) {
            var t = e.adapter, n = e.code, e = e.gvlid;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, w[n] = {
                adapter: t,
                gvlid: e
            }) : A.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : A.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, T.enableAnalytics = function (e) {
            A.isArray(e) || (e = [e]), A._each(e, function (e) {
                var t = w[e.provider].adapter;
                t ? t.enableAnalytics(e) : A.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }, T.getBidAdapter = function (e) {
            return I[e]
        }, T.getAnalyticsAdapter = function (e) {
            return w[e]
        }, T.callTimedOutBidders = function (t, n, r) {
            n = n.map(function (e) {
                return e.params = A.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            }), n = A.groupBy(n, "bidder"), Object.keys(n).forEach(function (e) {
                P(e, "onTimeout", n[e])
            })
        }, T.callBidWonBidder = function (e, t, n) {
            t.params = A.getUserConfiguredParams(n, t.adUnitCode, t.bidder), g.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), P(e, "onBidWon", t)
        }, T.callSetTargetingBidder = function (e, t) {
            P(e, "onSetTargeting", t)
        }, T.callBidViewableBidder = function (e, t) {
            P(e, "onBidViewable", t)
        }, t.default = T
    }, 80: function (e, t, n) {
        var u = n(46), s = n(51), d = n(112), n = function (c) {
            return function (e, t, n) {
                var r, i = u(e), o = s(i.length), a = d(n, o);
                if (c && t != t) {
                    for (; a < o;) if ((r = i[a++]) != r) return !0
                } else for (; a < o; a++) if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1
            }
        };
        e.exports = {includes: n(!0), indexOf: n(!1)}
    }, 81: function (e, t, n) {
        var r = n(113);
        n(136), n(138), n(140), n(142), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), e.exports = r
    }, 82: function (e, t, n) {
        function r(e) {
            c(e, d, {value: {objectID: "O" + f++, weakData: {}}})
        }

        var i = n(54), o = n(29), a = n(30), c = n(34).f, u = n(60), s = n(116), d = u("meta"), f = 0,
            l = Object.isExtensible || function () {
                return !0
            }, p = e.exports = {
                REQUIRED: !1, fastKey: function (e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, d)) {
                        if (!l(e)) return "F";
                        if (!t) return "E";
                        r(e)
                    }
                    return e[d].objectID
                }, getWeakData: function (e, t) {
                    if (!a(e, d)) {
                        if (!l(e)) return !0;
                        if (!t) return !1;
                        r(e)
                    }
                    return e[d].weakData
                }, onFreeze: function (e) {
                    return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e
                }
            };
        i[d] = !0
    }, 83: function (e, t, n) {
        var r = n(22), i = n(40), o = r("iterator"), a = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (i.Array === e || a[o] === e)
        }
    }, 84: function (e, t, n) {
        var r = n(15);
        e.exports = function (e) {
            var t = e.return;
            if (void 0 !== t) return r(t.call(e)).value
        }
    }, 85: function (e, t) {
        e.exports = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        }
    }, 86: function (e, t, n) {
        function r() {
        }

        function i(e) {
            return "<script>" + e + "</" + p + ">"
        }

        var o, a = n(15), c = n(121), u = n(87), s = n(54), d = n(124), f = n(77), n = n(65), l = "prototype",
            p = "script", g = n("IE_PROTO"), b = function () {
                try {
                    o = document.domain && new ActiveXObject("htmlfile")
                } catch (e) {
                }
                var e;
                b = o ? function (e) {
                    e.write(i("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                }(o) : ((e = f("iframe")).style.display = "none", d.appendChild(e), e.src = String("javascript:"), (e = e.contentWindow.document).open(), e.write(i("document.F=Object")), e.close(), e.F);
                for (var t = u.length; t--;) delete b[l][u[t]];
                return b()
            };
        s[g] = !0, e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (r[l] = a(e), n = new r, r[l] = null, n[g] = e) : n = b(), void 0 === t ? n : c(n, t)
        }
    }, 87: function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, 88: function (e, t, n) {
        var i = n(31);
        e.exports = function (e, t, n, r) {
            r && r.enumerable ? e[t] = n : i(e, t, n)
        }
    }, 89: function (e, t, n) {
        "use strict";
        var r, i = n(28), o = n(90), a = n(31), c = n(30), u = n(22), s = n(17), d = u("iterator"), n = !1;
        [].keys && ("next" in (u = [].keys()) ? (u = o(o(u))) !== Object.prototype && (r = u) : n = !0);
        i = null == r || i(function () {
            var e = {};
            return r[d].call(e) !== e
        });
        i && (r = {}), s && !i || c(r, d) || a(r, d, function () {
            return this
        }), e.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: n}
    }, 9: function (e, t, n) {
        function r() {
            return (r = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var c, u = n(0), n = n(5), i = Array.prototype.slice, s = Array.prototype.push,
            o = u._map(n.EVENTS, function (e) {
                return e
            }), d = n.EVENT_ID_PATHS, f = [];
        e.exports = (c = {}, (e = {}).on = function (e, t, n) {
            var r;
            u.contains(o, e) ? (r = c[e] || {que: []}, n ? (r[n] = r[n] || {que: []}, r[n].que.push(t)) : r.que.push(t), c[e] = r) : u.logError("Wrong event name : " + e + " Valid event names :" + o)
        }, e.emit = function (e) {
            !function (e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {}, r = n[d[e]], i = c[e] || {que: []}, o = u._map(i, function (e, t) {
                    return t
                }), a = [];
                f.push({
                    eventType: e,
                    args: n,
                    id: r,
                    elapsedTime: u.getPerformanceNow()
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function (e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                })
            }(e, i.call(arguments, 1))
        }, e.off = function (e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function (e) {
                var t = i[r].que;
                e === n && t.splice(t.indexOf(e), 1)
            }) : u._each(i.que, function (e) {
                var t = i.que;
                e === n && t.splice(t.indexOf(e), 1)
            }), c[e] = i)
        }, e.get = function () {
            return c
        }, e.getEvents = function () {
            var t = [];
            return u._each(f, function (e) {
                e = r({}, e);
                t.push(e)
            }), t
        }, e)
    }, 90: function (e, t, n) {
        var r = n(30), i = n(49), o = n(65), n = n(127), a = o("IE_PROTO"), c = Object.prototype;
        e.exports = n ? Object.getPrototypeOf : function (e) {
            return e = i(e), r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
        }
    }, 91: function (e, t, n) {
        "use strict";
        var r = n(132).charAt, i = n(55), n = n(66), o = "String Iterator", a = i.set, c = i.getterFor(o);
        n(String, "String", function (e) {
            a(this, {type: o, string: String(e), index: 0})
        }, function () {
            var e = c(this), t = e.string, n = e.index;
            return n >= t.length ? {value: void 0, done: !0} : (n = r(t, n), e.index += n.length, {value: n, done: !1})
        })
    }, 92: function (e, t, n) {
        var r = n(15), i = n(61);
        e.exports = function (e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return r(t.call(e))
        }
    }, 93: function (e, t, n) {
        n = n(158);
        e.exports = n
    }, 94: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t = e;
            return {
                callBids: function () {
                }, setBidderCode: function (e) {
                    t = e
                }, getBidderCode: function () {
                    return t
                }
            }
        }
    }, 95: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            if (e.labelAll) return {labelAll: !0, labels: e.labelAll, activeLabels: t};
            return {labelAll: !1, labels: e.labelAny, activeLabels: t}
        }, t.c = function (e) {
            var t = d(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : s);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels,
                n = void 0 === t ? [] : t, r = e.labelAll, i = void 0 !== r && r, t = e.activeLabels,
                o = void 0 === t ? [] : t, r = 1 < arguments.length ? arguments[1] : void 0,
                e = 2 < arguments.length ? arguments[2] : void 0,
                a = d(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : s);
            r = Object(c.isPlainObject)(r) ? Object(c.deepClone)(r) : e ? {banner: {sizes: e}} : {};
            t = Object(c.deepAccess)(r, "banner.sizes");
            a.shouldFilter && t && (r.banner.sizes = t.filter(function (e) {
                return a.sizesSupported[e]
            }));
            e = Object.keys(r), n = {
                active: e.every(function (e) {
                    return "banner" !== e
                }) || e.some(function (e) {
                    return "banner" === e
                }) && 0 < Object(c.deepAccess)(r, "banner.sizes.length") && (0 === n.length || !i && (n.some(function (e) {
                    return a.labels[e]
                }) || n.some(function (e) {
                    return u()(o, e)
                })) || i && n.reduce(function (e, t) {
                    return e && (a.labels[t] || u()(o, t))
                }, !0)), mediaTypes: r
            };
            t && t.length !== r.banner.sizes.length && (n.filterResults = {before: t, after: r.banner.sizes});
            return n
        };
        var r = n(3), c = n(0), t = n(13), u = n.n(t);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var s = [];

        function d(e) {
            return e.reduce(function (n, r) {
                if ("object" === i(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    if ("" === r.mediaQuery) t = !0; else try {
                        t = Object(c.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(c.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function (t) {
                        return (r[t] || []).forEach(function (e) {
                            return n[t][e] = !0
                        })
                    }))
                } else Object(c.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {labels: {}, sizesSupported: {}, shouldFilter: !1})
        }

        r.b.getConfig("sizeConfig", function (e) {
            e = e.sizeConfig, s = e
        })
    }, 96: function (e, t, n) {
        "use strict";
        t.b = function (e, t, n) {
            n = {puts: e.map(a, n)};
            Object(r.a)(i.b.getConfig("cache.url"), function (n) {
                return {
                    success: function (e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    }, error: function (e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            }(t), JSON.stringify(n), {contentType: "text/plain", withCredentials: !0})
        }, t.a = function (e) {
            return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var r = n(4), i = n(3), o = n(0);

        function a(e) {
            var t, n = {
                type: "xml",
                value: e.vastXml || (t = e.vastUrl, n = (n = e.vastImpUrl) ? "<![CDATA[".concat(n, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(n, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return i.b.getConfig("cache.vasttrack") && (n.bidder = e.bidder, n.bidid = e.requestId, n.aid = e.auctionId, o.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (n.timestamp = this.auctionStart)), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (n.key = e.customCacheKey), n
        }
    }, 99: function (e, t, n) {
        n(100);
        n = n(53);
        e.exports = n("Array", "find")
    }
});
pbjsChunk([60], {
    182: function (e, n, t) {
        e.exports = t(183)
    }, 183: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = t(6), a = t(8), o = t(5), u = t.n(o), i = t(0);

        function c() {
            return (c = Object.assign || function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t, r = arguments[n];
                    for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                }
                return e
            }).apply(this, arguments)
        }

        var s = Object.keys(u.a.EVENTS).map(function (e) {
            return u.a.EVENTS[e]
        });
        var l = c(Object(r.a)({emptyUrl: "", analyticsType: "endpoint"}), {
            track: function (e) {
                var n = e.eventType, t = e.args;
                void 0 !== t && -1 !== s.indexOf(n) && (e = "pb-analytics-event", t = {
                    eventName: n,
                    args: t
                }, i.getWindowTop().ADAGIO.queue.push({action: e, data: t, ts: Date.now()}))
            }
        });
        l.originEnableAnalytics = l.enableAnalytics, l.enableAnalytics = function (e) {
            var n;
            !function () {
                try {
                    if (i.getWindowTop().location.href) return 1
                } catch (e) {
                    return
                }
            }() || ((n = i.getWindowTop()).ADAGIO = n.ADAGIO || {}, n.ADAGIO.queue = n.ADAGIO.queue || [], n.ADAGIO.versions = n.ADAGIO.versions || {}, n.ADAGIO.versions.adagioAnalyticsAdapter = "2.0.0", l.originEnableAnalytics(e))
        }, a.default.registerAnalyticsAdapter({adapter: l, code: "adagio"}), n.default = l
    }, 6: function (e, n, t) {
        "use strict";
        n.a = function (e) {
            var a, r = e.url, n = e.analyticsType, o = e.global, t = e.handler, u = [], i = 0, c = !0;
            n !== G && !j || function () {
                if (c) {
                    for (var e = 0; e < u.length; e++) u[e]();
                    u.push = function (e) {
                        e()
                    }, c = !1
                }
                v.logMessage("event count sent to ".concat(o, ": ").concat(i))
            }();
            return {
                track: function (e) {
                    var n = e.eventType, e = e.args;
                    this.getAdapterType() === j && window[o](t, n, e);
                    this.getAdapterType() === G && !function (e) {
                        var n = e.eventType, t = e.args, e = e.callback;
                        Object(p.a)(r, e, JSON.stringify({eventType: n, args: t}))
                    }.apply(void 0, arguments)
                }, enqueue: s, enableAnalytics: l, disableAnalytics: function () {
                    v._each(a, function (e, n) {
                        g.off(n, e)
                    }), this.enableAnalytics = this._oldEnable || l
                }, getAdapterType: function () {
                    return n
                }, getGlobal: function () {
                    return o
                }, getHandler: function () {
                    return t
                }, getUrl: function () {
                    return r
                }
            };

            function s(e) {
                var n = e.eventType, t = e.args, r = this;
                o && window[o] && n && t ? this.track({eventType: n, args: t}) : u.push(function () {
                    i++, r.track({eventType: n, args: t})
                })
            }

            function l(n) {
                var e, t = this, r = this;
                "object" !== f(n) || "object" !== f(n.options) || (void 0 === n.options.sampling || Math.random() < parseFloat(n.options.sampling)) ? (g.getEvents().forEach(function (e) {
                    var n;
                    e && (n = e.eventType, e = e.args, n !== E && s.call(r, {eventType: n, args: e}))
                }), y(e = {}, b, function (e) {
                    return t.enqueue({eventType: b, args: e})
                }), y(e, d, function (e) {
                    return t.enqueue({eventType: d, args: e})
                }), y(e, D, function (e) {
                    return t.enqueue({eventType: D, args: e})
                }), y(e, h, function (e) {
                    return t.enqueue({eventType: h, args: e})
                }), y(e, E, function (e) {
                    return t.enqueue({eventType: E, args: e})
                }), y(e, O, function (e) {
                    return t.enqueue({eventType: O, args: e})
                }), y(e, I, function (e) {
                    return t.enqueue({eventType: I, args: e})
                }), y(e, _, function (e) {
                    return t.enqueue({eventType: _, args: e})
                }), y(e, q, function (e) {
                    return t.enqueue({eventType: q, args: e})
                }), y(e, A, function (e) {
                    return t.enqueue({eventType: A, args: e})
                }), y(e, N, function (e) {
                    return t.enqueue({eventType: N, args: e})
                }), y(e, S, function (e) {
                    return t.enqueue({eventType: S, args: e})
                }), y(e, m, function (e) {
                    return t.enqueue({eventType: m, args: e})
                }), y(e, T, function (e) {
                    e.config = "object" === f(n) && n.options || {}, t.enqueue({eventType: T, args: e})
                }), a = e, v._each(a, function (e, n) {
                    g.on(n, e)
                })) : v.logMessage('Analytics adapter for "'.concat(o, '" disabled by sampling')), this._oldEnable = this.enableAnalytics, this.enableAnalytics = function () {
                    return v.logMessage('Analytics adapter for "'.concat(o, '" already enabled, unnecessary call to `enableAnalytics`.'))
                }
            }
        };
        var n = t(5), n = t.n(n), p = t(4);

        function y(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }

        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var g = t(9), v = t(0), n = n.a.EVENTS, T = n.AUCTION_INIT, A = n.AUCTION_END, b = n.REQUEST_BIDS,
            d = n.BID_REQUESTED, E = n.BID_TIMEOUT, D = n.BID_RESPONSE, h = n.NO_BID, O = n.BID_WON,
            I = n.BID_ADJUSTMENT, _ = n.BIDDER_DONE, q = n.SET_TARGETING, N = n.AD_RENDER_FAILED, S = n.AUCTION_DEBUG,
            m = n.ADD_AD_UNITS, G = "endpoint", j = "bundle"
    }
}, [182]);
pbjsChunk([0], {
    184: function (e, t, r) {
        e.exports = r(185)
    }, 185: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), r.d(t, "VERSION", function () {
            return A
        }), r.d(t, "ENDPOINT", function () {
            return b
        }), r.d(t, "storage", function () {
            return T
        }), r.d(t, "RENDERER_URL", function () {
            return w
        }), r.d(t, "ORTB_VIDEO_PARAMS", function () {
            return E
        }), t.adagioScriptFromLocalStorageCb = U, t.getAdagioScript = R, t.prepareExchange = C, r.d(t, "_features", function () {
            return j
        }), r.d(t, "internal", function () {
            return N
        }), r.d(t, "spec", function () {
            return q
        });
        var n = r(10), o = r.n(n), l = r(0), m = r(3), i = r(1), a = r(39), s = r(68), t = (r.n(s), r(7)), n = r(19),
            h = r(20), c = r(2), u = r(12), g = r(24);

        function d(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)), n
        }

        function y(n) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(i), !0).forEach(function (e) {
                    var t, r;
                    t = n, e = i[r = e], r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach(function (e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return n
        }

        var p, f = "adagio", v = "Adagio:", A = "2.11.0", b = "https://mp.4dex.io/prebid", O = [c.b, c.c, c.d],
            I = "https://script.4dex.io/localstore.js", D = "adagioScript", T = Object(t.b)(617, "adagio"),
            w = "https://script.4dex.io/outstream-player.js",
            S = "AL16XT44Sfp+8SHVF1UdC7hydPSMVLMhsYknKDdwqq+0ToDSJrP0+Qh0ki9JJI2uYm/6VEYo8TJED9WfMkiJ4vf02CW3RvSWwc35bif2SK1L8Nn/GfFYr/2/GG/Rm0vUsv+vBHky6nuuYls20Og0HDhMgaOlXoQ/cxMuiy5QSktp",
            x = 65537, E = {
                mimes: function (e) {
                    return Array.isArray(e) && 0 < e.length && e.every(function (e) {
                        return "string" == typeof e
                    })
                }, minduration: function (e) {
                    return l.isInteger(e)
                }, maxduration: function (e) {
                    return l.isInteger(e)
                }, protocols: function (e) {
                    return Array.isArray(e) && e.every(function (e) {
                        return -1 !== [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(e)
                    })
                }, w: function (e) {
                    return l.isInteger(e)
                }, h: function (e) {
                    return l.isInteger(e)
                }, startdelay: function (e) {
                    return l.isInteger(e)
                }, placement: function (e) {
                    return Array.isArray(e) && e.every(function (e) {
                        return -1 !== [1, 2, 3, 4, 5].indexOf(e)
                    })
                }, linearity: function (e) {
                    return -1 !== [1, 2].indexOf(e)
                }, skip: function (e) {
                    return -1 !== [0, 1].indexOf(e)
                }, skipmin: function (e) {
                    return l.isInteger(e)
                }, skipafter: function (e) {
                    return l.isInteger(e)
                }, sequence: function (e) {
                    return l.isInteger(e)
                }, battr: function (e) {
                    return Array.isArray(e) && e.every(function (e) {
                        return -1 !== Array.from({length: 17}, function (e, t) {
                            return t + 1
                        }).indexOf(e)
                    })
                }, maxextended: function (e) {
                    return l.isInteger(e)
                }, minbitrate: function (e) {
                    return l.isInteger(e)
                }, maxbitrate: function (e) {
                    return l.isInteger(e)
                }, boxingallowed: function (e) {
                    return -1 !== [0, 1].indexOf(e)
                }, playbackmethod: function (e) {
                    return Array.isArray(e) && e.every(function (e) {
                        return -1 !== [1, 2, 3, 4, 5, 6].indexOf(e)
                    })
                }, playbackend: function (e) {
                    return -1 !== [1, 2, 3].indexOf(e)
                }, delivery: function (e) {
                    return -1 !== [1, 2, 3].indexOf(e)
                }, pos: function (e) {
                    return -1 !== [0, 1, 2, 3, 4, 5, 6, 7].indexOf(e)
                }, api: function (e) {
                    return Array.isArray(e) && e.every(function (e) {
                        return -1 !== [1, 2, 3, 4, 5, 6].indexOf(e)
                    })
                }
            }, k = {};

        function U(e) {
            try {
                if (!e) return void l.logWarn("".concat(v, " script not found."));
                var t, r, n, i = /^(\/\/ hash: (.+)\n)(.+\n)$/;
                i.test(e) ? (r = (t = e.match(i))[2], n = t[3], Object(s.verify)(n, r, S, x) ? (l.logInfo("".concat(v, " start script.")), Function(e)()) : (l.logWarn("".concat(v, " invalid script found.")), T.removeDataFromLocalStorage(D))) : (l.logWarn("".concat(v, " no hash found.")), T.removeDataFromLocalStorage(D))
            } catch (e) {
                l.logError(v, e)
            }
        }

        function R() {
            T.getDataFromLocalStorage(D, function (e) {
                N.adagioScriptFromLocalStorageCb(e)
            }), T.localStorageIsEnabled(function (e) {
                e ? Object(a.a)(I, f) : (window.localStorage.removeItem(D), window.localStorage.removeItem("adagio"))
            })
        }

        function P() {
            try {
                if (l.getWindowTop().location.href) return !0
            } catch (e) {
                return !1
            }
        }

        function W() {
            var e = l.getWindowSelf();
            return !(!e.$sf || !e.$sf.ext)
        }

        function C(e) {
            var t = JSON.parse(e, function (e, t) {
                if (!e.startsWith("_") || "" === e) return t
            }), r = l.deepAccess(t, "session.rnd"), e = !1;
            N.isNewSession(t) && (e = !0, r = Math.random()), l.mergeDeep(k, t, {
                session: {
                    new: e,
                    rnd: r
                }
            }), N.enqueue({action: "session", ts: Date.now(), data: k})
        }

        var j = {
            getPrintNumber: function (e) {
                return N.getOrAddAdagioAdUnit(e).printNumber || 1
            }, getPageDimensions: function () {
                if (W() || !P()) return "";
                var e = l.getWindowTop(), t = e.document.querySelector("body");
                if (!t) return "";
                var r = e.document.documentElement,
                    e = Math.max(t.scrollWidth, t.offsetWidth, r.clientWidth, r.scrollWidth, r.offsetWidth),
                    r = Math.max(t.scrollHeight, t.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight);
                return "".concat(e, "x").concat(r)
            }, getViewPortDimensions: function () {
                if (!W() && !P()) return "";
                var e = {w: 0, h: 0};
                if (W()) {
                    var t = l.getWindowSelf();
                    if ("function" != typeof t.$sf.ext.geom) return l.logWarn("".concat(v, " cannot use the $sf.ext.geom() safeFrame API method")), "";
                    t = t.$sf.ext.geom().win;
                    e.w = Math.round(t.w), e.h = Math.round(t.h)
                } else {
                    t = l.getWindowTop();
                    if (t.innerWidth) e.w = t.innerWidth, e.h = t.innerHeight; else {
                        t = t.document;
                        if (!t.querySelector("body")) return "";
                        e.w = t.querySelector("body").clientWidth, e.h = t.querySelector("body").clientHeight
                    }
                }
                return "".concat(e.w, "x").concat(e.h)
            }, getDomLoadingDuration: function () {
                var e = -1, t = (P() ? l.getWindowTop() : l.getWindowSelf()).performance;
                return t && t.timing && 0 < t.timing.navigationStart && (0 < (t = t.timing.domLoading - t.timing.navigationStart) && (e = t)), e
            }, getSlotPosition: function (e) {
                var t = e.adUnitElementId, r = e.postBid;
                if (!t) return "";
                if (!W() && !P()) return "";
                var n = {x: 0, y: 0};
                if (W()) {
                    var i = l.getWindowSelf();
                    if ("function" != typeof i.$sf.ext.geom) return l.logWarn("".concat(v, " cannot use the $sf.ext.geom() safeFrame API method")), "";
                    var o = i.$sf.ext.geom().self;
                    n.x = Math.round(o.t), n.y = Math.round(o.l)
                } else {
                    if (!P()) return "";
                    var a = l.getWindowTop(), e = a.document;
                    if (!(i = !0 === r ? (s = (c = l.getWindowSelf()).document.getElementById(t), N.getElementFromTopWindow(s, c)) : a.document.getElementById(t))) return "";
                    var o = i.getBoundingClientRect(), r = e.documentElement, s = e.body,
                        c = e.clientTop || s.clientTop || 0, t = e.clientLeft || s.clientLeft || 0,
                        e = a.pageYOffset || r.scrollTop || s.scrollTop,
                        s = a.pageXOffset || r.scrollLeft || s.scrollLeft,
                        a = a.getComputedStyle(i, null).display || "block";
                    "none" === a && (i.style = i.style || {}, i.style.display = "block", o = i.getBoundingClientRect(), i.style.display = a), n.x = Math.round(o.left + s - t), n.y = Math.round(o.top + e - c)
                }
                return "".concat(n.x, "x").concat(n.y)
            }, getTimestampUTC: function () {
                return Math.floor((new Date).getTime() / 1e3) - 60 * (new Date).getTimezoneOffset()
            }, getDevice: function () {
                var e = l.getWindowSelf().navigator.userAgent;
                return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? 5 : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(e) ? 4 : 2
            }, getBrowser: function () {
                var e = l.getWindowSelf(), t = e.navigator.userAgent, r = t.toLowerCase();
                return /Edge\/\d./i.test(t) ? "edge" : 0 < r.indexOf("chrome") ? "chrome" : 0 < r.indexOf("firefox") ? "firefox" : 0 < r.indexOf("safari") ? "safari" : 0 < r.indexOf("opera") ? "opera" : 0 < r.indexOf("msie") || e.MSStream ? "ie" : "unknow"
            }, getOS: function () {
                var e = l.getWindowSelf().navigator.userAgent.toLowerCase();
                return 0 < e.indexOf("linux") ? "linux" : 0 < e.indexOf("mac") ? "mac" : 0 < e.indexOf("win") ? "windows" : ""
            }, getUrl: function (e) {
                if (e.reachedTop) return e.referer
            }, getUrlFromParams: function (e) {
                e = e.postBidOptions;
                if (e && e.url) return e.url
            }
        };
        var N = {
            enqueue: function (e) {
                var t = N.getCurrentWindow();
                t.ADAGIO = t.ADAGIO || {}, t.ADAGIO.queue = t.ADAGIO.queue || [], t.ADAGIO.queue.push(e)
            }, getOrAddAdagioAdUnit: function (e) {
                var t = N.getCurrentWindow();
                return t.ADAGIO = t.ADAGIO || {}, t.ADAGIO.adUnits[e] || (t.ADAGIO.adUnits[e] = {})
            }, getPageviewId: function () {
                var e = N.getCurrentWindow();
                return e.ADAGIO = e.ADAGIO || {}, e.ADAGIO.pageviewId = e.ADAGIO.pageviewId || l.generateUUID(), e.ADAGIO.pageviewId
            }, computePrintNumber: function (e) {
                var t = 1, r = N.getCurrentWindow();
                return t = r.ADAGIO && r.ADAGIO.adUnits && r.ADAGIO.adUnits[e] && r.ADAGIO.adUnits[e].pageviewId === N.getPageviewId() && r.ADAGIO.adUnits[e].printNumber ? parseInt(r.ADAGIO.adUnits[e].printNumber, 10) + 1 : t
            }, getDevice: function () {
                var e = navigator.language ? "language" : "userLanguage";
                return {
                    userAgent: navigator.userAgent,
                    language: navigator[e],
                    deviceType: j.getDevice(),
                    dnt: l.getDNT() ? 1 : 0,
                    geo: {},
                    js: 1
                }
            }, getSite: function (e) {
                var t = "", r = "", n = "", i = e.refererInfo;
                return P() ? (t = (e = l.getWindowTop()).location.hostname, r = e.location.href, n = e.document.referrer || "") : i.reachedTop ? (t = l.parseUrl(i.referer).hostname, r = i.referer) : i.stack && i.stack.length && i.stack[0] && (t = l.parseUrl(i.stack[0]).hostname), {
                    domain: t,
                    page: r,
                    referrer: n
                }
            }, getElementFromTopWindow: function e(t, r) {
                try {
                    if (l.getWindowTop() === r) return t.getAttribute("id") || t.setAttribute("id", "adg-".concat(l.getUniqueIdentifierStr())), t;
                    var n = r.frameElement, i = n.getBoundingClientRect(), o = t.getBoundingClientRect();
                    return i.width === o.width && i.height === o.height && e(n, r.parent)
                } catch (e) {
                    return l.logWarn("".concat(v), e), !1
                }
            }, autoDetectAdUnitElementId: function (e) {
                var t = l.getGptSlotInfoForAdUnitCode(e), e = null;
                return e = t && t.divId ? t.divId : e
            }, autoDetectEnvironment: function () {
                return {2: "desktop", 4: "mobile", 5: "tablet"}[j.getDevice()] || "unknown"
            }, getFeatures: function (e, t) {
                var r = e.adUnitCode, n = e.params, e = n.adUnitElementId, t = t.refererInfo;
                e || l.logWarn("".concat(v, " unable to get params.adUnitElementId. Continue without tiv."));
                var i = {
                    print_number: j.getPrintNumber(r).toString(),
                    page_dimensions: j.getPageDimensions().toString(),
                    viewport_dimensions: j.getViewPortDimensions().toString(),
                    dom_loading: j.getDomLoadingDuration().toString(),
                    adunit_position: j.getSlotPosition(n).toString(),
                    user_timestamp: j.getTimestampUTC().toString(),
                    device: j.getDevice().toString(),
                    url: j.getUrl(t) || j.getUrlFromParams(n) || "",
                    browser: j.getBrowser(),
                    os: j.getOS()
                };
                return Object.keys(i).forEach(function (e) {
                    "" === i[e] && delete i[e]
                }), (n = {})[e] = {features: i, version: "1"}, N.enqueue({
                    action: "features",
                    ts: Date.now(),
                    data: n
                }), i
            }, getRefererInfo: n.a, adagioScriptFromLocalStorageCb: U, getCurrentWindow: function () {
                return p || l.getWindowSelf()
            }, supportIObs: function () {
                var e = N.getCurrentWindow();
                return !!(e && e.IntersectionObserver && e.IntersectionObserverEntry && e.IntersectionObserverEntry.prototype && "intersectionRatio" in e.IntersectionObserverEntry.prototype)
            }, canAccessTopWindow: P, isRendererPreferredFromPublisher: function (e) {
                var t = l.deepAccess(e, "renderer"), r = !!(t && t.url && t.render),
                    n = l.deepAccess(e, "mediaTypes.video.renderer"), e = !!(n && n.url && n.render);
                return !!(r && !0 !== t.backupOnly || e && !0 !== n.backupOnly)
            }, isNewSession: function (e) {
                var t = Date.now(), e = (r = l.deepAccess(e, "session", {})).lastActivityTime, r = r.vwSmplg;
                return !l.isNumber(e) || !l.isNumber(r) || 18e5 < t - e
            }, prepareExchange: C
        };

        function M(e) {
            e.renderer.push(function () {
                "function" == typeof window.ADAGIO.outstreamPlayer ? window.ADAGIO.outstreamPlayer(e) : l.logError("".concat(v, " Adagio outstream player is not defined"))
            })
        }

        function B(e) {
            var n;
            e.admNative && Array.isArray(e.admNative.assets) ? (n = {}, e.admNative.assets.forEach(function (e) {
                var t, r;
                e.title ? n.title = e.title.text : e.data ? (t = e.data, (r = {
                    1: "sponsoredBy",
                    2: "body",
                    3: "rating",
                    4: "likes",
                    5: "downloads",
                    6: "price",
                    7: "salePrice",
                    8: "phone",
                    9: "address",
                    10: "body2",
                    11: "displayUrl",
                    12: "cta"
                }).hasOwnProperty(t.type) && "string" == typeof t.value && (n[r[t.type]] = t.value)) : e.img && (1 === e.img.type ? n.icon = {
                    url: e.img.url,
                    width: e.img.w,
                    height: e.img.h
                } : n.image = {url: e.img.url, width: e.img.w, height: e.img.h})
            }), e.admNative.link && (e.admNative.link.url && (n.clickUrl = e.admNative.link.url), Array.isArray(e.admNative.link.clickTrackers) && (n.clickTrackers = e.admNative.link.clickTrackers)), Array.isArray(e.admNative.eventtrackers) ? (n.impressionTrackers = [], e.admNative.eventtrackers.forEach(function (e) {
                if (1 === e.event) switch (e.method) {
                    case 1:
                        n.impressionTrackers.push(e.url);
                        break;
                    case 2:
                        n.javascriptTrackers = '<script src="'.concat(e.url, '"><\/script>')
                }
            })) : (n.impressionTrackers = Array.isArray(e.admNative.imptrackers) ? e.admNative.imptrackers : [], e.admNative.jstracker && (n.javascriptTrackers = e.admNative.jstracker)), e.admNative.privacy && (n.privacyLink = e.admNative.privacy), e.admNative.ext && (n.ext = {}, e.admNative.ext.bvw && (n.ext.adagio_bvw = e.admNative.ext.bvw)), e.native = n) : l.logError("".concat(v, " Invalid native response"))
        }

        function G(n) {
            if (!l.isFn(n.getFloor)) return !1;

            function r(e, t) {
                var r = n.getFloor({currency: "USD", mediaType: e, size: []});
                i.push(l.cleanObj({
                    mt: e,
                    s: l.isArray(t) ? "".concat(t[0], "x").concat(t[1]) : void 0,
                    f: isNaN(r.floor) || "USD" !== r.currency ? .1 : r.floor
                }))
            }

            var i = [];
            return Object.keys(n.mediaTypes).forEach(function (t) {
                var e;
                -1 !== O.indexOf(t) && (e = t === c.d ? "playerSize" : "sizes", n.mediaTypes[t][e] && n.mediaTypes[t][e].length ? l.isArray(n.mediaTypes[t][e][0]) ? n.mediaTypes[t][e].forEach(function (e) {
                    r(t, [e[0], e[1]])
                }) : r(t, [n.mediaTypes[t][e][0], n.mediaTypes[t][e][1]]) : r(t, "*"))
            }), i
        }

        var q = {
            code: f, gvlid: 617, supportedMediaTypes: O, isBidRequestValid: function (e) {
                var t = e.adUnitCode, r = e.auctionId, n = e.sizes, i = e.bidder, o = e.params, a = e.mediaTypes;
                if (!o) return l.logWarn("".concat(v, ' the "params" property is missing.')), !1;
                var s = o.organizationId, c = o.site,
                    u = !0 === o.useAdUnitCodeAsAdUnitElementId ? t : o.adUnitElementId || N.autoDetectAdUnitElementId(t),
                    d = !0 === o.useAdUnitCodeAsPlacement ? t : o.placement,
                    p = o.environment || N.autoDetectEnvironment(), f = N.supportIObs();
                e.params = y(y({}, o), {}, {adUnitElementId: u, environment: p, placement: d, supportIObs: f});
                f = function () {
                    return {action: "pb-dbg", ts: Date.now(), data: {bid: e}}
                };
                if (!N.getRefererInfo().reachedTop) return l.logWarn("".concat(v, " the main page url is unreachabled.")), N.enqueue(f()), !1;
                if (!(s && c && d)) return l.logWarn("".concat(v, " at least one required param is missing.")), N.enqueue(f()), !1;
                c = N.getCurrentWindow(), d = N.getPageviewId(), f = N.computePrintNumber(t);
                return c.ADAGIO = c.ADAGIO || {}, c.ADAGIO.pbjsAdUnits = c.ADAGIO.pbjsAdUnits.filter(function (e) {
                    return e.code !== t
                }), c.ADAGIO.pbjsAdUnits.push({
                    code: t,
                    mediaTypes: a || {},
                    sizes: a && a.banner && Array.isArray(a.banner.sizes) ? a.banner.sizes : n,
                    bids: [{bidder: i, params: e.params}],
                    auctionId: r,
                    pageviewId: d,
                    printNumber: f
                }), c.ADAGIO.adUnits[t] = {auctionId: r, pageviewId: d, printNumber: f}, !0
            }, buildRequests: function (e, t) {
                var r, n = "https:" === location.protocol ? 1 : 0, i = N.getDevice(), o = N.getSite(t),
                    a = N.getPageviewId(), s = function (e) {
                        if (!l.deepAccess(e, "gdprConsent")) return !1;
                        var t = (n = e.gdprConsent).apiVersion, r = n.gdprApplies, e = n.consentString,
                            n = n.allowAuctionWithoutConsent;
                        return l.cleanObj({
                            apiVersion: t,
                            consentString: e,
                            consentRequired: r ? 1 : 0,
                            allowAuctionWithoutConsent: n ? 1 : 0
                        })
                    }(t) || {}, c = (r = t, !l.deepAccess(r, "uspConsent") ? {} : {uspConsent: r.uspConsent}),
                    u = {required: !0 === m.b.getConfig("coppa") ? 1 : 0}, d = (r = e[0], l.deepAccess(r, "schain")),
                    p = function (e) {
                        if (l.deepAccess(e, "userId")) return Object(h.b)(e.userId)
                    }(e[0]) || [], f = l._map(e, function (e) {
                        return e.features = N.getFeatures(e, t), e.floors = G(e), l.deepAccess(e, "mediaTypes.video") && function (t) {
                            var e, r = l.deepAccess(t, "mediaTypes.video", {}), n = l.deepAccess(t, "params.video", {}),
                                i = {};
                            Array.isArray(r.playerSize) && (e = Array.isArray(r.playerSize[0]) ? r.playerSize[0] : r.playerSize, i.w = e[0], i.h = e[1]);
                            var o = y(y(y({}, i), r), n);
                            o.context && o.context === g.b && (t.mediaTypes.video.playerName = N.isRendererPreferredFromPublisher(t) ? "other" : "adagio", "other" === t.mediaTypes.video.playerName && l.logWarn("".concat(v, " renderer.backupOnly has not been set. Adagio recommends to use its own player to get expected behavior."))), Object.keys(E).forEach(function (e) {
                                o.hasOwnProperty(e) && (E[e](o[e]) ? t.mediaTypes.video[e] = o[e] : (delete t.mediaTypes.video[e], l.logWarn("".concat(v, " The OpenRTB video param ").concat(e, " has been skipped due to misformating. Please refer to OpenRTB 2.5 spec."))))
                            })
                        }(e), e
                    }).reduce(function (e, t) {
                        t = l.deepClone(t);
                        return t.params.organizationId = t.params.organizationId.toString(), delete t.floorData, e[t.params.organizationId] = e[t.params.organizationId] || [], e[t.params.organizationId].push(t), e
                    }, {});
                return l._map(Object.keys(f), function (e) {
                    return {
                        method: "POST",
                        url: b,
                        data: {
                            id: l.generateUUID(),
                            organizationId: e,
                            secure: n,
                            device: i,
                            site: o,
                            pageviewId: a,
                            adUnits: f[e],
                            data: k,
                            regs: {gdpr: s, coppa: u, ccpa: c},
                            schain: d,
                            user: {eids: p},
                            prebidVersion: "4.43.0",
                            adapterVersion: A,
                            featuresVersion: "1"
                        },
                        options: {contentType: "text/plain"}
                    }
                })
            }, interpretResponse: function (e, n) {
                var i = [];
                try {
                    var t = e.body;
                    t && (t.data && N.enqueue({
                        action: "ssp-data",
                        ts: Date.now(),
                        data: t.data
                    }), t.bids && t.bids.forEach(function (t) {
                        var e, r = o()(n.data.adUnits, function (e) {
                            return e.bidId === t.requestId
                        });
                        r && (t.meta = l.deepAccess(t, "meta", {}), t.meta.mediaType = t.mediaType, t.meta.advertiserDomains = Array.isArray(t.aDomain) && t.aDomain.length ? t.aDomain : [], t.mediaType === c.d && (e = l.deepAccess(r, "mediaTypes.video.context"), !t.vastUrl && t.vastXml && (t.vastUrl = "data:text/xml;charset=utf-8;base64," + btoa(t.vastXml.replace(/\\"/g, '"'))), e === g.b && (t.renderer = u.a.install({
                            id: t.requestId,
                            adUnitCode: t.adUnitCode,
                            url: t.urlRenderer || w,
                            config: y(y({}, l.deepAccess(r, "mediaTypes.video")), l.deepAccess(t, "outstream", {}))
                        }), t.renderer.setRender(M))), t.mediaType === c.c && B(t), t.site = r.params.site, t.placement = r.params.placement, t.pagetype = r.params.pagetype, t.category = r.params.category, t.subcategory = r.params.subcategory, t.environment = r.params.environment), i.push(t)
                    }))
                } catch (e) {
                    l.logError(e)
                }
                return i
            }, getUserSyncs: function (e, t) {
                return !(!t.length || "" === t[0].body || !t[0].body.userSyncs) && t[0].body.userSyncs.map(function (e) {
                    return {type: "p" === e.t ? "image" : "iframe", url: e.u}
                })
            }
        };
        !function () {
            P() && (p = P() ? l.getWindowTop() : l.getWindowSelf());
            var e = N.getCurrentWindow();
            e.ADAGIO = e.ADAGIO || {}, e.ADAGIO.adUnits = e.ADAGIO.adUnits || {}, e.ADAGIO.pbjsAdUnits = e.ADAGIO.pbjsAdUnits || [], e.ADAGIO.queue = e.ADAGIO.queue || [], e.ADAGIO.versions = e.ADAGIO.versions || {}, e.ADAGIO.versions.adagioBidderAdapter = A, e.ADAGIO.isSafeFrameWindow = W(), T.getDataFromLocalStorage("adagio", function (e) {
                try {
                    N.prepareExchange(e)
                } catch (e) {
                    l.logError(v, e)
                }
            }), R()
        }(), Object(i.registerBidder)(q)
    }, 20: function (e, t, r) {
        "use strict";
        t.b = function (e) {
            var t, r = [];
            for (t in e) {
                var n;
                e.hasOwnProperty(t) && ("pubProvidedId" === t ? r = r.concat(e.pubProvidedId) : (n = function (e, t) {
                    var r = a[t];
                    if (r && e) {
                        var n = {};
                        n.source = r.source;
                        var i = o.isFn(r.getValue) ? r.getValue(e) : e;
                        if (o.isStr(i)) {
                            t = {id: i, atype: r.atype};
                            return !o.isFn(r.getUidExt) || (i = r.getUidExt(e)) && (t.ext = i), n.uids = [t], !o.isFn(r.getEidExt) || (e = r.getEidExt(e)) && (n.ext = e), n
                        }
                    }
                    return null
                }(e[t], t)) && r.push(n))
            }
            return r
        }, t.a = function (e) {
            var r = [];
            return e.filter(function (e) {
                return o.isPlainObject(e.idObj) && Object.keys(e.idObj).length
            }).forEach(function (t) {
                Object.keys(t.idObj).forEach(function (e) {
                    o.deepAccess(t, "config.bidders") && Array.isArray(t.config.bidders) && o.deepAccess(a, e + ".source") && r.push({
                        source: a[e].source,
                        bidders: t.config.bidders
                    })
                })
            }), r
        };
        var o = r(0), a = {
            intentIqId: {source: "intentiq.com", atype: 1},
            pubcid: {source: "pubcid.org", atype: 1},
            tdid: {
                source: "adserver.org", atype: 1, getUidExt: function () {
                    return {rtiPartner: "TDID"}
                }
            },
            id5id: {
                getValue: function (e) {
                    return e.uid
                }, source: "id5-sync.com", atype: 1, getUidExt: function (e) {
                    if (e.ext) return e.ext
                }
            },
            parrableId: {
                source: "parrable.com", atype: 1, getValue: function (e) {
                    return e.eid || (e.ccpaOptout ? "" : null)
                }, getUidExt: function (e) {
                    e = o.pick(e, ["ibaOptout", "ccpaOptout"]);
                    if (Object.keys(e).length) return e
                }
            },
            idl_env: {source: "liveramp.com", atype: 3},
            lipb: {
                getValue: function (e) {
                    return e.lipbid
                }, source: "liveintent.com", atype: 3, getEidExt: function (e) {
                    if (Array.isArray(e.segments) && e.segments.length) return {segments: e.segments}
                }
            },
            britepoolid: {source: "britepool.com", atype: 3},
            dmdId: {source: "hcn.health", atype: 3},
            lotamePanoramaId: {source: "crwdcntrl.net", atype: 1},
            criteoId: {source: "criteo.com", atype: 1},
            merkleId: {
                source: "merkleinc.com", atype: 3, getValue: function (e) {
                    return e.id
                }, getUidExt: function (e) {
                    return e && e.keyID ? {keyID: e.keyID} : void 0
                }
            },
            netId: {source: "netid.de", atype: 1},
            sharedid: {
                source: "sharedid.org", atype: 1, getValue: function (e) {
                    return e.id
                }, getUidExt: function (e) {
                    return e && e.third ? {third: e.third} : void 0
                }
            },
            IDP: {source: "zeotap.com", atype: 1},
            haloId: {source: "audigent.com", atype: 1},
            quantcastId: {source: "quantcast.com", atype: 1},
            nextrollId: {source: "nextroll.com", atype: 1},
            idx: {source: "idx.lat", atype: 1},
            connectid: {source: "verizonmedia.com", atype: 3},
            fabrickId: {source: "neustar.biz", atype: 1},
            mwOpenLinkId: {source: "mediawallahscript.com", atype: 1},
            tapadId: {source: "tapad.com", atype: 1},
            novatiq: {
                getValue: function (e) {
                    return e.snowflake
                }, source: "novatiq.com", atype: 1
            },
            uid2: {
                source: "uidapi.com", atype: 3, getValue: function (e) {
                    return e.id
                }
            },
            deepintentId: {source: "deepintent.com", atype: 3},
            admixerId: {source: "admixer.net", atype: 3}
        }
    }, 68: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = r(69), o = r(70);
        t.verify = function (e, t, r, n) {
            return t = new i.BigInteger(i.b64toHex(t)), r = new i.BigInteger(i.b64toHex(r)), r = t.modPowInt(n, r), i.removeExtraSymbols(r.toHexString()) === o.Sha256.hash(e)
        }
    }, 69: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = (y.prototype.toHexString = function () {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var e, t = !1, r = "", n = this.t, i = this.DB - n * this.DB % 4;
            if (0 < n--) for (i < this.DB && 0 < (e = this[n] >> i) && (t = !0, r = u(e)); 0 <= n;) i < 4 ? (e = (this[n] & (1 << i) - 1) << 4 - i, e |= this[--n] >> (i += this.DB - 4)) : (e = this[n] >> (i -= 4) & 15, i <= 0 && (i += this.DB, --n)), (t = 0 < e ? !0 : t) && (r += u(e));
            return t ? r : "0"
        }, y.prototype.fromHexString = function (e) {
            if (null !== e) {
                this.t = 0, this.s = 0;
                for (var t = e.length, r = !1, n = 0; 0 <= --t;) {
                    var i = s(e, t);
                    i < 0 ? "-" == e.charAt(t) && (r = !0) : (r = !1, 0 == n ? this[this.t++] = i : n + 4 > this.DB ? (this[this.t - 1] |= (i & (1 << this.DB - n) - 1) << n, this[this.t++] = i >> this.DB - n) : this[this.t - 1] |= i << n, (n += 4) >= this.DB && (n -= this.DB))
                }
                0, this.clamp(), r && y.ZERO.subTo(this, this)
            }
        }, y.prototype.negate = function () {
            var e = v();
            return y.ZERO.subTo(this, e), e
        }, y.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this
        }, y.prototype.mod = function (e) {
            var t = v();
            return this.abs().divRemTo(e, null, t), this.s < 0 && 0 < t.compareTo(y.ZERO) && e.subTo(t, t), t
        }, y.prototype.copyTo = function (e) {
            for (var t = this.t - 1; 0 <= t; --t) e[t] = this[t];
            e.t = this.t, e.s = this.s
        }, y.prototype.lShiftTo = function (e, t) {
            for (var r = e % this.DB, n = this.DB - r, i = (1 << n) - 1, o = Math.floor(e / this.DB), a = this.s << r & this.DM, s = this.t - 1; 0 <= s; --s) t[s + o + 1] = this[s] >> n | a, a = (this[s] & i) << r;
            for (s = o - 1; 0 <= s; --s) t[s] = 0;
            t[o] = a, t.t = this.t + o + 1, t.s = this.s, t.clamp()
        }, y.prototype.invDigit = function () {
            if (this.t < 1) return 0;
            var e = this[0];
            if (0 == (1 & e)) return 0;
            var t = 3 & e;
            return 0 < (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) ? this.DV - t : -t
        }, y.prototype.dlShiftTo = function (e, t) {
            for (var r = this.t - 1; 0 <= r; --r) t[r + e] = this[r];
            for (r = e - 1; 0 <= r; --r) t[r] = 0;
            t.t = this.t + e, t.s = this.s
        }, y.prototype.squareTo = function (e) {
            for (var t = this.abs(), r = e.t = 2 * t.t; 0 <= --r;) e[r] = 0;
            for (r = 0; r < t.t - 1; ++r) {
                var n = t.am(r, t[r], e, 2 * r, 0, 1);
                (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >= t.DV && (e[r + t.t] -= t.DV, e[r + t.t + 1] = 1)
            }
            0 < e.t && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)), e.s = 0, e.clamp()
        }, y.prototype.multiplyTo = function (e, t) {
            var r = this.abs(), n = e.abs(), i = r.t;
            for (t.t = i + n.t; 0 <= --i;) t[i] = 0;
            for (i = 0; i < n.t; ++i) t[i + r.t] = r.am(0, n[i], t, i, 0, r.t);
            t.s = 0, t.clamp(), this.s != e.s && y.ZERO.subTo(t, t)
        }, y.prototype.divRemTo = function (e, t, r) {
            var n = e.abs();
            if (!(n.t <= 0)) {
                var i = this.abs();
                if (i.t < n.t) return null != t && t.fromHexString("0"), void (null != r && this.copyTo(r));
                null == r && (r = v());
                var o = v(), a = this.s, s = e.s, e = this.DB - A(n[n.t - 1]);
                0 < e ? (n.lShiftTo(e, o), i.lShiftTo(e, r)) : (n.copyTo(o), i.copyTo(r));
                var c = o.t, u = o[c - 1];
                if (0 != u) {
                    var i = u * (1 << this.F1) + (1 < c ? o[c - 2] >> this.F2 : 0), d = this.FV / i,
                        p = (1 << this.F1) / i, f = 1 << this.F2, l = r.t, m = l - c, h = null == t ? v() : t;
                    for (o.dlShiftTo(m, h), 0 <= r.compareTo(h) && (r[r.t++] = 1, r.subTo(h, r)), y.ONE.dlShiftTo(c, h), h.subTo(o, o); o.t < c;) o[o.t++] = 0;
                    for (; 0 <= --m;) {
                        var g = r[--l] == u ? this.DM : Math.floor(r[l] * d + (r[l - 1] + f) * p);
                        if ((r[l] += o.am(0, g, r, m, 0, c)) < g) for (o.dlShiftTo(m, h), r.subTo(h, r); r[l] < --g;) r.subTo(h, r)
                    }
                    null != t && (r.drShiftTo(c, t), a != s && y.ZERO.subTo(t, t)), r.t = c, r.clamp(), 0 < e && r.rShiftTo(e, r), a < 0 && y.ZERO.subTo(r, r)
                }
            }
        }, y.prototype.rShiftTo = function (e, t) {
            t.s = this.s;
            var r = Math.floor(e / this.DB);
            if (r >= this.t) t.t = 0; else {
                var n = e % this.DB, i = this.DB - n, o = (1 << n) - 1;
                t[0] = this[r] >> n;
                for (var a = r + 1; a < this.t; ++a) t[a - r - 1] |= (this[a] & o) << i, t[a - r] = this[a] >> n;
                0 < n && (t[this.t - r - 1] |= (this.s & o) << i), t.t = this.t - r, t.clamp()
            }
        }, y.prototype.drShiftTo = function (e, t) {
            for (var r = e; r < this.t; ++r) t[r - e] = this[r];
            t.t = Math.max(this.t - e, 0), t.s = this.s
        }, y.prototype.subTo = function (e, t) {
            for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i;) n += this[r] - e[r], t[r++] = n & this.DM, n >>= this.DB;
            if (e.t < this.t) {
                for (n -= e.s; r < this.t;) n += this[r], t[r++] = n & this.DM, n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; r < e.t;) n -= e[r], t[r++] = n & this.DM, n >>= this.DB;
                n -= e.s
            }
            t.s = n < 0 ? -1 : 0, n < -1 ? t[r++] = this.DV + n : 0 < n && (t[r++] = n), t.t = r, t.clamp()
        }, y.prototype.clamp = function () {
            for (var e = this.s & this.DM; 0 < this.t && this[this.t - 1] == e;) --this.t
        }, y.prototype.modPowInt = function (e, t) {
            t = new (e < 256 || t.isEven() ? d : f)(t);
            return this.exp(e, t)
        }, y.prototype.exp = function (e, t) {
            if (4294967295 < e || e < 1) return y.ONE;
            var r, n = v(), i = v(), o = t.convert(this), a = A(e) - 1;
            for (o.copyTo(n); 0 <= --a;) t.sqrTo(n, i), 0 < (e & 1 << a) ? t.mulTo(i, o, n) : (r = n, n = i, i = r);
            return t.revert(n)
        }, y.prototype.isEven = function () {
            return 0 == (0 < this.t ? 1 & this[0] : this.s)
        }, y.prototype.compareTo = function (e) {
            var t = this.s - e.s;
            if (0 != t) return t;
            var r = this.t;
            if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
            for (; 0 <= --r;) if (0 != (t = this[r] - e[r])) return t;
            return 0
        }, y.prototype.am1 = function (e, t, r, n, i, o) {
            for (; 0 <= --o;) {
                var a = t * this[e++] + r[n] + i;
                i = Math.floor(a / 67108864), r[n++] = 67108863 & a
            }
            return i
        }, y.prototype.am2 = function (e, t, r, n, i, o) {
            for (var a = 32767 & t, s = t >> 15; 0 <= --o;) {
                var c = 32767 & this[e], u = this[e++] >> 15, d = s * c + u * a;
                i = ((c = a * c + ((32767 & d) << 15) + r[n] + (1073741823 & i)) >>> 30) + (d >>> 15) + s * u + (i >>> 30), r[n++] = 1073741823 & c
            }
            return i
        }, y.prototype.am3 = function (e, t, r, n, i, o) {
            for (var a = 16383 & t, s = t >> 14; 0 <= --o;) {
                var c = 16383 & this[e], u = this[e++] >> 14, d = s * c + u * a;
                i = ((c = a * c + ((16383 & d) << 14) + r[n] + i) >> 28) + (d >> 14) + s * u, r[n++] = 268435455 & c
            }
            return i
        }, y);

        function y(e) {
            null !== e && this.fromHexString(e)
        }

        function v() {
            return new n(null)
        }

        function A(e) {
            var t, r = 1;
            return 0 != (t = e >>> 16) && (e = t, r += 16), 0 != (t = e >> 8) && (e = t, r += 8), 0 != (t = e >> 4) && (e = t, r += 4), 0 != (t = e >> 2) && (e = t, r += 2), 0 != (t = e >> 1) && (e = t, r += 1), r
        }

        t.BigInteger = n, t.nbi = v, t.nbits = A;
        for (var i = [], o = "0".charCodeAt(0), a = 0; a <= 9; ++a) i[o++] = a;
        for (o = "a".charCodeAt(0), a = 10; a < 36; ++a) i[o++] = a;
        for (o = "A".charCodeAt(0), a = 10; a < 36; ++a) i[o++] = a;

        function s(e, t) {
            t = i[e.charCodeAt(t)];
            return null == t ? -1 : t
        }

        t.intAt = s;
        var c = "0123456789abcdefghijklmnopqrstuvwxyz";

        function u(e) {
            return c.charAt(e)
        }

        t.int2char = u;
        t.b64toHex = function (e) {
            for (var t = "", r = 0, n = 0, i = 0; i < e.length && "=" != e.charAt(i); ++i) {
                var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(i));
                o < 0 || (r = 0 == r ? (t += u(o >> 2), n = 3 & o, 1) : 1 == r ? (t += u(n << 2 | o >> 4), n = 15 & o, 2) : 2 == r ? (t += u(n), t += u(o >> 2), n = 3 & o, 3) : (t += u(n << 2 | o >> 4), t += u(15 & o), 0))
            }
            return 1 == r && (t += u(n << 2)), t
        }, t.removeExtraSymbols = function (e) {
            return e.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "")
        };
        var d = (p.prototype.convert = function (e) {
            return e.s < 0 || 0 <= e.compareTo(this.m) ? e.mod(this.m) : e
        }, p.prototype.revert = function (e) {
            return e
        }, p.prototype.reduce = function (e) {
            e.divRemTo(this.m, null, e)
        }, p.prototype.mulTo = function (e, t, r) {
            e.multiplyTo(t, r), this.reduce(r)
        }, p.prototype.sqrTo = function (e, t) {
            e.squareTo(t), this.reduce(t)
        }, p);

        function p(e) {
            this.m = e
        }

        var f = (l.prototype.convert = function (e) {
            var t = v();
            return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && 0 < t.compareTo(n.ZERO) && this.m.subTo(t, t), t
        }, l.prototype.revert = function (e) {
            var t = v();
            return e.copyTo(t), this.reduce(t), t
        }, l.prototype.reduce = function (e) {
            for (; e.t <= this.mt2;) e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var r = 32767 & e[t],
                    n = r * this.mpl + ((r * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (e[r = t + this.m.t] += this.m.am(0, n, e, t, 0, this.m.t); e[r] >= e.DV;) e[r] -= e.DV, e[++r]++
            }
            e.clamp(), e.drShiftTo(this.m.t, e), 0 <= e.compareTo(this.m) && e.subTo(this.m, e)
        }, l.prototype.mulTo = function (e, t, r) {
            e.multiplyTo(t, r), this.reduce(r)
        }, l.prototype.sqrTo = function (e, t) {
            e.squareTo(t), this.reduce(t)
        }, l);

        function l(e) {
            this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
        }

        function m(e) {
            var t = v();
            return t.fromHexString(e.toString()), t
        }

        t.nbv = m, n.ZERO = m(0), n.ONE = m(1), t = "Microsoft Internet Explorer" == navigator.appName ? (n.prototype.am = n.prototype.am2, 30) : "Netscape" != navigator.appName ? (n.prototype.am = n.prototype.am1, 26) : (n.prototype.am = n.prototype.am3, 28), n.prototype.DB = t, n.prototype.DM = (1 << t) - 1, n.prototype.DV = 1 << t;
        n.prototype.FV = Math.pow(2, 52), n.prototype.F1 = 52 - t, n.prototype.F2 = 2 * t - 52
    }, 70: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = (I.hash = function (e) {
            e = I.utf8Encode(e || "");
            for (var t = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], n = (e += String.fromCharCode(128)).length / 4 + 2, i = Math.ceil(n / 16), o = new Array(i), a = 0; a < i; a++) {
                o[a] = new Array(16);
                for (var s = 0; s < 16; s++) o[a][s] = e.charCodeAt(64 * a + 4 * s) << 24 | e.charCodeAt(64 * a + 4 * s + 1) << 16 | e.charCodeAt(64 * a + 4 * s + 2) << 8 | e.charCodeAt(64 * a + 4 * s + 3) << 0
            }
            var c = 8 * (e.length - 1) / Math.pow(2, 32), n = 8 * (e.length - 1) >>> 0;
            o[i - 1][14] = Math.floor(c), o[i - 1][15] = n;
            for (a = 0; a < i; a++) {
                for (var u = new Array(64), d = 0; d < 16; d++) u[d] = o[a][d];
                for (d = 16; d < 64; d++) u[d] = I.q1(u[d - 2]) + u[d - 7] + I.q0(u[d - 15]) + u[d - 16] >>> 0;
                for (var p = r[0], f = r[1], l = r[2], m = r[3], h = r[4], g = r[5], y = r[6], v = r[7], d = 0; d < 64; d++) {
                    var A = v + I.z1(h) + I.Ch(h, g, y) + t[d] + u[d], b = I.z0(p) + I.Maj(p, f, l);
                    v = y, y = g, g = h, h = m + A >>> 0, m = l, l = f, f = p, p = A + b >>> 0
                }
                r[0] = r[0] + p >>> 0, r[1] = r[1] + f >>> 0, r[2] = r[2] + l >>> 0, r[3] = r[3] + m >>> 0, r[4] = r[4] + h >>> 0, r[5] = r[5] + g >>> 0, r[6] = r[6] + y >>> 0, r[7] = r[7] + v >>> 0
            }
            for (var O = new Array(r.length), v = 0; v < r.length; v++) O[v] = ("00000000" + r[v].toString(16)).slice(-8);
            return O.join("")
        }, I.utf8Encode = function (t) {
            try {
                return (new TextEncoder).encode(t).reduce(function (e, t) {
                    return e + String.fromCharCode(t)
                }, "")
            } catch (e) {
                return unescape(encodeURIComponent(t))
            }
        }, I.ROTR = function (e, t) {
            return t >>> e | t << 32 - e
        }, I.z0 = function (e) {
            return I.ROTR(2, e) ^ I.ROTR(13, e) ^ I.ROTR(22, e)
        }, I.z1 = function (e) {
            return I.ROTR(6, e) ^ I.ROTR(11, e) ^ I.ROTR(25, e)
        }, I.q0 = function (e) {
            return I.ROTR(7, e) ^ I.ROTR(18, e) ^ e >>> 3
        }, I.q1 = function (e) {
            return I.ROTR(17, e) ^ I.ROTR(19, e) ^ e >>> 10
        }, I.Ch = function (e, t, r) {
            return e & t ^ ~e & r
        }, I.Maj = function (e, t, r) {
            return e & t ^ e & r ^ t & r
        }, I);

        function I() {
        }

        t.Sha256 = n
    }
}, [184]);
pbjsChunk([379], {
    274: function (e, t, n) {
        e.exports = n(275)
    }, 275: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "spec", function () {
            return m
        });
        var a = n(0), r = n(1), i = n(3), t = n(10), o = n.n(t), s = n(2);

        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function d() {
            return (d = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var p = "USD", u = {
            image: {required: !0},
            title: {required: !0},
            sponsoredBy: {required: !0},
            clickUrl: {required: !0},
            body: {required: !1},
            icon: {required: !1},
            cta: {required: !1}
        }, m = {
            code: "adyoulike", supportedMediaTypes: [s.b, s.c, s.d], aliases: ["ayl"], isBidRequestValid: function (e) {
                var t = f(l(e)), t = 0 < t.width && 0 < t.height;
                return e.params && e.params.placement && (t || e.mediaTypes && e.mediaTypes.native)
            }, buildRequests: function (e, t) {
                var n = {
                    Version: "1.0", Bids: e.reduce(function (e, t) {
                        var n = function (e) {
                            var t = s.b;
                            a.deepAccess(e, "mediaTypes.native") ? t = s.c : a.deepAccess(e, "mediaTypes.video") && (t = s.d);
                            return t
                        }(t), r = l(t), i = f(r);
                        return e[t.bidId] = {}, e[t.bidId].PlacementID = t.params.placement, e[t.bidId].TransactionID = t.transactionId, e[t.bidId].Width = i.width, e[t.bidId].Height = i.height, e[t.bidId].AvailableSizes = r.join(","), "function" == typeof t.getFloor && (e[t.bidId].Pricing = function (e, t, n) {
                            t = e.getFloor({currency: p, mediaType: n, size: [t.width, t.height]});
                            if (!isNaN(t.floor) && t.currency === p) return t.floor
                        }(t, i, n)), n === s.c && ((i = "image" === (i = t.mediaTypes.native).type ? d({}, u, i) : i).clickUrl = {required: !0}, e[t.bidId].Native = i), n === s.d && (e[t.bidId].Video = t.mediaTypes.video), e
                    }, {}), PageRefreshed: function () {
                        try {
                            if (performance && performance.navigation) return performance.navigation.type === performance.navigation.TYPE_RELOAD
                        } catch (e) {
                        }
                        return !1
                    }()
                };
                t && t.gdprConsent && (n.gdprConsent = {
                    consentString: t.gdprConsent.consentString,
                    consentRequired: "boolean" == typeof t.gdprConsent.gdprApplies ? t.gdprConsent.gdprApplies : null
                }), t && t.uspConsent && (n.uspConsent = t.uspConsent);
                n = JSON.stringify(n);
                return {
                    method: "POST", url: function (e, t) {
                        e = function (e) {
                            e = o()(e, function (e) {
                                return e.params.DC
                            });
                            if (e) return "-" + e.params.DC;
                            return ""
                        }(e);
                        return a.buildUrl({
                            protocol: "https",
                            host: "".concat("hb-api").concat(e, ".omnitagjs.com"),
                            pathname: "/hb-api/prebid/v1",
                            search: function (e) {
                                var t = {};
                                !e || (n = e.refererInfo) && (t.RefererUrl = encodeURIComponent(n.referer), 0 < n.numIframes && (t.SafeFrame = !0));
                                var n = function () {
                                    var e;
                                    if (window.self !== window.top) try {
                                        e = window.top.document.head.querySelector('link[rel="canonical"][href]')
                                    } catch (e) {
                                    } else e = document.head.querySelector('link[rel="canonical"][href]');
                                    if (e) return e.href;
                                    return ""
                                }();
                                n && (t.CanonicalUrl = encodeURIComponent(n));
                                n = i.b.getConfig("publisherDomain");
                                n && (t.PublisherDomain = encodeURIComponent(n));
                                return t
                            }(t)
                        })
                    }(e, t), data: n, options: {withCredentials: !0}
                }
            }, interpretResponse: function (e, t) {
                var n = [], r = {};
                try {
                    r = JSON.parse(t.data).Bids
                } catch (e) {
                }
                return e.body.forEach(function (e) {
                    e = function (e, t) {
                        if (e && (e.Ad || e.Native)) {
                            var n = t && t[e.BidID];
                            n && (e.Width && "0" !== e.Width || (e.Width = n.Width), e.Height && "0" !== e.Height || (e.Height = n.Height));
                            t = {
                                requestId: e.BidID,
                                ttl: 3600,
                                creativeId: e.CreativeID,
                                cpm: e.Price,
                                netRevenue: !0,
                                currency: p,
                                meta: e.Meta || {advertiserDomains: []}
                            };
                            return n && n.Native ? (t.native = function (r, i) {
                                if ("object" === c(r.Native)) return r.Native;
                                var a = {}, o = {}, s = {};
                                {
                                    var e, t;
                                    "string" == typeof r.Ad && (o = JSON.parse(r.Ad.match(/\/\*PREBID\*\/(.*)\/\*PREBID\*\//)[1]), s = o.Content.Preview.Text, e = o.TrackingPrefix + "/pixel?event_kind=IMPRESSION&attempt=" + o.Attempt, t = o.TrackingPrefix + "/pixel?event_kind=INSERTION&attempt=" + o.Attempt, o.Campaign && (e += "&campaign=" + o.Campaign, t += "&campaign=" + o.Campaign), a.clickUrl = o.TrackingPrefix + "/ar?event_kind=CLICK&attempt=" + o.Attempt + "&campaign=" + o.Campaign + "&url=" + encodeURIComponent(o.Content.Landing.Url), o.OnEvents ? (a.clickTrackers = v(o.OnEvents.CLICK), a.impressionTrackers = v(o.OnEvents.IMPRESSION), a.javascriptTrackers = v(o.OnEvents.IMPRESSION, !0)) : a.impressionTrackers = [], a.impressionTrackers.push(e, t))
                                }
                                return Object.keys(i).map(function (e, t) {
                                    switch (e) {
                                        case"title":
                                            a[e] = s.TITLE;
                                            break;
                                        case"body":
                                            a[e] = s.DESCRIPTION;
                                            break;
                                        case"cta":
                                            a[e] = s.CALLTOACTION;
                                            break;
                                        case"sponsoredBy":
                                            a[e] = o.Content.Preview.Sponsor.Name;
                                            break;
                                        case"image":
                                            var n = i.image.sizes || [];
                                            n.length || (n[0] = r.Width || 300, n[1] = r.Height || 250), a[e] = {
                                                url: g(o, o.Content.Preview.Thumbnail.Image, n[0], n[1]),
                                                width: n[0],
                                                height: n[1]
                                            };
                                            break;
                                        case"icon":
                                            o.HasSponsorImage && ((n = i.icon.sizes || []).length || (n[0] = 50, n[1] = 50), a[e] = {
                                                url: g(o, o.Content.Preview.Sponsor.Logo.Resource, n[0], n[1]),
                                                width: n[0],
                                                height: n[1]
                                            });
                                            break;
                                        case"privacyIcon":
                                            a[e] = g(o, o.Content.Preview.Credit.Logo.Resource, 25, 25);
                                            break;
                                        case"privacyLink":
                                            a[e] = o.Content.Preview.Credit.Url
                                    }
                                }), a
                            }(e, n.Native), t.mediaType = "native") : n && n.Video ? (n = e.Vast || function (e) {
                                var t = {};
                                if ("string" == typeof e.Ad) return t = JSON.parse(e.Ad.match(/\/\*PREBID\*\/(.*)\/\*PREBID\*\//)[1]), a.deepAccess(t, "Content.MainVideo.Vast")
                            }(e), t.vastXml = n ? window.atob(n) : "", t.mediaType = "video") : (t.width = e.Width, t.height = e.Height, t.ad = e.Ad), t
                        }
                    }(e, r);
                    e && n.push(e)
                }), n
            }
        };

        function l(e) {
            var t = e.sizes || [];
            return e.mediaTypes && e.mediaTypes.banner && (t = e.mediaTypes.banner.sizes || []), e.params.size && (t = [e.params.size]), a.parseSizesInput(t)
        }

        function f(e) {
            var t = {}, n = e[0];
            if ("string" != typeof n) return t;
            e = n.toUpperCase().split("X"), n = parseInt(e[0], 10);
            n && (t.width = n);
            e = parseInt(e[1], 10);
            return e && (t.height = e), t
        }

        function h(e) {
            return e ? "https://blobs.omnitagjs.com/blobs/" + e.substr(16, 2) + "/" + e.substr(16) + "/" + e : ""
        }

        function g(e, t, n, r) {
            var i = "";
            switch (t.Kind) {
                case"INTERNAL":
                    i = h(t.Data.Internal.BlobReference.Uid);
                    break;
                case"EXTERNAL":
                    var a = e.DynamicPrefix, o = t.Data.External.Url;
                    i = 0 <= (o = (o = o.replace(/\[height\]/i, "" + r)).replace(/\[width\]/i, "" + n)).indexOf(a) ? (i = (a = /.*url=([^&]*)/gm.exec(o)) ? a[1] : "") || h(/.*key=([^&]*)/gm.exec(o)[1]) : o
            }
            return i
        }

        function v(e, n) {
            var r = [];
            return e && e.map(function (e, t) {
                (n && "JAVASCRIPT_URL" === e.Kind || !n && "PIXEL_URL" === e.Kind) && r.push(e.Url)
            }), r
        }

        Object(r.registerBidder)(m)
    }
}, [274]);
pbjsChunk([375], {
    282: function (e, t, r) {
        e.exports = r(283)
    }, 283: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), r.d(t, "spec", function () {
            return x
        });
        var s = r(0), t = r(1), r = r(2);

        function i() {
            return (i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function n(e, t) {
            return t = t || e.slice(0), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
        }

        var o = {AOL: "aol", VERIZON: "verizon", ONEMOBILE: "onemobile", ONEDISPLAY: "onedisplay"},
            c = {GET: "display-get"}, d = {GET: "mobile-get", POST: "mobile-post"}, u = {TAG: "iframe", TYPE: "iframe"},
            p = {TAG: "img", TYPE: "image"},
            l = ["adserver.org", "criteo.com", "id5-sync.com", "intentiq.com", "liveintent.com", "quantcast.com", "verizonmedia.com", "liveramp.com"],
            m = y(n(["", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
            f = y(n(["", "/bidRequest?"]), "host"),
            b = y(n(["dcn=", "&pos=", "&cmd=bid", ""]), "dcn", "pos", "dynamicParams"), h = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            }, v = "https", g = 1;

        function y(o) {
            for (var e = arguments.length, a = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) a[t - 1] = arguments[t];
            return function () {
                for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                var n = r[r.length - 1] || {}, i = [o[0]];
                return a.forEach(function (e, t) {
                    e = (s.isInteger(e) ? r : n)[e];
                    i.push(e, o[t + 1])
                }), i.join("")
            }
        }

        function O(e) {
            return e === o.AOL || e === o.VERIZON || e === o.ONEMOBILE
        }

        function E(e) {
            if (O(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                e = e.params.imp[0];
                return e.id && e.tagid && (e.banner && e.banner.w && e.banner.h || e.video && e.video.mimes && e.video.minduration && e.video.maxduration)
            }
        }

        function I(e) {
            return O(e.bidder) && e.params.dcn && e.params.pos
        }

        function P(e) {
            return ((t = e.bidder) === o.AOL || t === o.VERIZON || t === o.ONEDISPLAY) && e.params.placement && e.params.network;
            var t
        }

        function S(e) {
            return e.userIdAsEids.filter(function (e) {
                return -1 !== l.indexOf(e.source)
            })
        }

        var x = {
            code: o.AOL,
            gvlid: 25,
            aliases: [o.ONEMOBILE, o.ONEDISPLAY, o.VERIZON],
            supportedMediaTypes: [r.b],
            isBidRequestValid: function (e) {
                return P(e) || (I(e = e) || E(e))
            },
            buildRequests: function (e, t) {
                var r = this, n = {};
                return t && (n.gdpr = t.gdprConsent, n.uspConsent = t.uspConsent), e.map(function (e) {
                    var t, t = I(t = e) ? d.GET : E(t) ? d.POST : P(t) ? c.GET : void 0;
                    if (t) return r.formatBidRequest(t, e, n)
                })
            },
            interpretResponse: function (e, t) {
                var r = e.body;
                if (r) {
                    e = this._parseBidResponse(r, t);
                    if (e) return e
                } else s.logError("Empty bid response", t.bidderCode, r)
            },
            getUserSyncs: function (e, t) {
                t = !s.isEmpty(t) && t[0].body;
                return t && t.ext && t.ext.pixels ? this.parsePixelItems(t.ext.pixels) : []
            },
            formatBidRequest: function (e, t, r) {
                var n;
                switch (e) {
                    case c.GET:
                        n = {url: this.buildMarketplaceUrl(t, r), method: "GET", ttl: 60};
                        break;
                    case d.GET:
                        n = {url: this.buildOneMobileGetUrl(t, r), method: "GET", ttl: 3600};
                        break;
                    case d.POST:
                        n = {
                            url: this.buildOneMobileBaseUrl(t),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(t, r),
                            options: {contentType: "application/json", customHeaders: {"x-openrtb-version": "2.2"}}
                        }
                }
                return n.bidderCode = t.bidder, n.bidId = t.bidId, n.userSyncOn = t.params.userSyncOn, n
            },
            buildMarketplaceUrl: function (e, t) {
                var r = e.params, n = r.server, e = r.region || "us";
                return h.hasOwnProperty(e) || (s.logWarn("Unknown region '".concat(e, "' for AOL bidder.")), e = "us"), n = n || h[e], r.region = e, this.applyProtocol(m({
                    host: n,
                    network: r.network,
                    placement: parseInt(r.placement),
                    pageid: r.pageId || 0,
                    sizeid: r.sizeId || 0,
                    alias: r.alias || s.getUniqueIdentifierStr(),
                    misc: (new Date).getTime(),
                    dynamicParams: this.formatMarketplaceDynamicParams(r, t)
                }))
            },
            buildOneMobileGetUrl: function (e, t) {
                var r = e.params, n = r.dcn, i = r.pos, o = r.ext;
                "object" === a(e.userId) && (o = o || {}, S(e).forEach(function (e) {
                    o["eid" + e.source] = e.uids[0].id
                }));
                e = this.buildOneMobileBaseUrl(e);
                return n && i && (t = this.formatOneMobileDynamicParams(o, t), e += b({
                    dcn: n,
                    pos: i,
                    dynamicParams: t
                })), e
            },
            buildOneMobileBaseUrl: function (e) {
                return this.applyProtocol(f({host: e.params.host || "c2shb.ssp.yahoo.com"}))
            },
            applyProtocol: function (e) {
                return /^https?:\/\//i.test(e) ? e : (0 === e.indexOf("//") ? "".concat(v, ":") : "".concat(v, "://")).concat(e)
            },
            formatMarketplaceDynamicParams: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = {};
                i(r, this.formatKeyValues(e.keyValues)), i(r, this.formatConsentData(t));
                var n = "";
                return s._each(r, function (e, t) {
                    n += "".concat(t, "=").concat(encodeURIComponent(e), ";")
                }), n
            },
            formatOneMobileDynamicParams: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                this.isSecureProtocol() && (e.secure = g), i(e, this.formatConsentData(t));
                var r = "";
                return s._each(e, function (e, t) {
                    r += "&".concat(t, "=").concat(encodeURIComponent(e))
                }), r
            },
            buildOpenRtbRequestData: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    r = {id: e.params.id, imp: e.params.imp};
                return this.isEUConsentRequired(t) && (s.deepSetValue(r, "regs.ext.gdpr", g), t.gdpr.consentString && s.deepSetValue(r, "user.ext.consent", t.gdpr.consentString)), t.uspConsent && s.deepSetValue(r, "regs.ext.us_privacy", t.uspConsent), "object" === a(e.userId) && (r.user = r.user || {}, r.user.ext = r.user.ext || {}, 0 < (e = S(e)).length && (r.user.ext.eids = e)), r
            },
            isEUConsentRequired: function (e) {
                return !!(e && e.gdpr && e.gdpr.gdprApplies)
            },
            formatKeyValues: function (e) {
                var r = {};
                return s._each(e, function (e, t) {
                    r["kv".concat(t)] = e
                }), r
            },
            formatConsentData: function (e) {
                var t = {};
                return this.isEUConsentRequired(e) && (t.gdpr = g, e.gdpr.consentString && (t.euconsent = e.gdpr.consentString)), e.uspConsent && (t.us_privacy = e.uspConsent), t
            },
            parsePixelItems: function (e) {
                var r = /\w*(?=\s)/, n = /src=("|')(.*?)\1/, i = [];
                return !e || (e = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi)) && e.forEach(function (e) {
                    var t = e.match(r)[0], e = e.match(n)[2];
                    t && e && i.push({type: (t === p.TAG ? p : u).TYPE, url: e})
                }), i
            },
            _parseBidResponse: function (e, t) {
                var r, n;
                try {
                    r = e.seatbid[0].bid[0]
                } catch (e) {
                    return
                }
                if (r.ext && r.ext.encp) n = r.ext.encp; else if (null === (n = r.price) || isNaN(n)) return void s.logError("Invalid price in bid response", o.AOL, r);
                return {
                    bidderCode: t.bidderCode,
                    requestId: t.bidId,
                    ad: r.adm,
                    cpm: n,
                    width: r.w,
                    height: r.h,
                    creativeId: r.crid || 0,
                    pubapiId: e.id,
                    currency: e.cur || "USD",
                    dealId: r.dealid,
                    netRevenue: !0,
                    meta: {advertiserDomains: r && r.adomain ? r.adomain : []},
                    ttl: t.ttl
                }
            },
            isOneMobileBidder: O,
            isSecureProtocol: function () {
                return "https:" === document.location.protocol
            }
        };
        Object(t.registerBidder)(x)
    }
}, [282]);
pbjsChunk([372], {
    292: function (e, r, t) {
        e.exports = t(293)
    }, 293: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {value: !0}), t.d(r, "spec", function () {
            return C
        });
        var u = t(12), y = t(0), v = t(3), l = t(1), m = t(2), s = t(23), r = t(10), b = t.n(r), r = t(13), h = t.n(r),
            f = t(24), r = t(7);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function g() {
            return (g = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t, a = arguments[r];
                    for (t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function _(e) {
            return function (e) {
                if (Array.isArray(e)) return a(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function (e, r) {
                if (e) {
                    if ("string" == typeof e) return a(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, r) : void 0
                }
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
            return a
        }

        var t = "appnexus",
            o = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
            k = ["age", "externalUid", "segments", "gender", "dnt", "language"], I = ["geo", "device_id"],
            A = ["enabled", "dongle", "member_id", "debug_timeout"], d = {
                playback_method: {
                    unknown: 0,
                    auto_play_sound_on: 1,
                    auto_play_sound_off: 2,
                    click_to_play: 3,
                    mouse_over: 4,
                    auto_play_sound_unknown: 5
                }, context: {unknown: 0, pre_roll: 1, mid_roll: 2, post_roll: 3, outstream: 4, "in-banner": 5}
            }, p = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {serverName: "main_image", requiredParams: {required: !0}},
                icon: {serverName: "icon", requiredParams: {required: !0}},
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            }, n = "<script", c = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/, x = "trk.js",
            w = Object(r.b)(32, t), C = {
                code: t,
                gvlid: 32,
                aliases: [{code: "appnexusAst", gvlid: 32}, {code: "brealtime"}, {
                    code: "emxdigital",
                    gvlid: 183
                }, {code: "pagescience"}, {code: "defymedia"}, {code: "gourmetads"}, {code: "matomy"}, {code: "featureforward"}, {code: "oftmedia"}, {
                    code: "districtm",
                    gvlid: 144
                }, {code: "adasta"}, {code: "beintoo", gvlid: 618}],
                supportedMediaTypes: [m.b, m.d, m.c],
                isBidRequestValid: function (e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function (e, r) {
                    var a = e.map(R), n = b()(e, U), i = {};
                    !0 === v.b.getConfig("coppa") && (i = {coppa: !0}), n && Object.keys(n.params.user).filter(function (e) {
                        return h()(k, e)
                    }).forEach(function (e) {
                        var r, t = y.convertCamelToUnderscore(e);
                        "segments" === e && y.isArray(n.params.user[e]) ? (r = [], n.params.user[e].forEach(function (e) {
                            y.isNumber(e) ? r.push({id: e}) : y.isPlainObject(e) && r.push(e)
                        }), i[t] = r) : "segments" !== e && (i[t] = n.params.user[e])
                    });
                    var t, s = b()(e, N);
                    s && s.params && s.params.app && (t = {}, Object.keys(s.params.app).filter(function (e) {
                        return h()(I, e)
                    }).forEach(function (e) {
                        return t[e] = s.params.app[e]
                    }));
                    var o = b()(e, q);
                    o && o.params && s.params.app && s.params.app.id && (l = {appid: o.params.app.id});
                    var d = {}, p = {}, c = w.getCookie("apn_prebid_debug") || null;
                    if (c) try {
                        d = JSON.parse(c)
                    } catch (e) {
                        y.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var u = b()(e, z);
                        u && u.debug && (d = u.debug)
                    }
                    d && d.enabled && Object.keys(d).filter(function (e) {
                        return h()(A, e)
                    }).forEach(function (e) {
                        p[e] = d[e]
                    });
                    var l, m, f = b()(e, j), c = f ? parseInt(f.params.member, 10) : 0, u = e[0].schain, f = b()(e, D),
                        g = {tags: _(a), user: i, sdk: {source: "pbjs", version: "4.43.0"}, schain: u};
                    return f && (g.iab_support = {
                        omidpn: "Appnexus",
                        omidpv: "4.43.0"
                    }), 0 < c && (g.member_id = c), s && (g.device = t), o && (g.app = l), v.b.getConfig("adpod.brandCategoryExclusion") && (g.brand_category_uniqueness = !0), p.enabled && (g.debug = p, y.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(p, null, 4))), r && r.gdprConsent && (g.gdpr_consent = {
                        consent_string: r.gdprConsent.consentString,
                        consent_required: r.gdprConsent.gdprApplies
                    }, r.gdprConsent.addtlConsent && -1 !== r.gdprConsent.addtlConsent.indexOf("~") && (l = (l = r.gdprConsent.addtlConsent).substring(l.indexOf("~") + 1), g.gdpr_consent.addtl_consent = l.split(".").map(function (e) {
                        return parseInt(e, 10)
                    }))), r && r.uspConsent && (g.us_privacy = r.uspConsent), r && r.refererInfo && (m = {
                        rd_ref: encodeURIComponent(r.refererInfo.referer),
                        rd_top: r.refererInfo.reachedTop,
                        rd_ifs: r.refererInfo.numIframes,
                        rd_stk: r.refererInfo.stack.map(function (e) {
                            return encodeURIComponent(e)
                        }).join(",")
                    }, g.referrer_detection = m), b()(e, M) && e.filter(M).forEach(function (r) {
                        var e = function (e, r) {
                            var t = r.mediaTypes.video, a = t.durationRangeSec, n = t.requireExactDuration,
                                t = function (e) {
                                    var r = e.adPodDurationSec, t = e.durationRangeSec, a = e.requireExactDuration,
                                        e = y.getMinValueFromArray(t), e = Math.floor(r / e);
                                    return a ? Math.max(e, t.length) : e
                                }(r.mediaTypes.video), i = y.getMaxValueFromArray(a), e = e.filter(function (e) {
                                    return e.uuid === r.bidId
                                }), e = y.fill.apply(y, _(e).concat([t]));
                            {
                                var s;
                                n ? (t = Math.ceil(t / a.length), s = y.chunk(e, t), a.forEach(function (r, e) {
                                    s[e].map(function (e) {
                                        B(e, "minduration", r), B(e, "maxduration", r)
                                    })
                                })) : e.map(function (e) {
                                    return B(e, "maxduration", i)
                                })
                            }
                            return e
                        }(a, r), t = g.tags.filter(function (e) {
                            return e.uuid !== r.bidId
                        });
                        g.tags = [].concat(_(t), _(e))
                    }), e[0].userId && (V(m = [], y.deepAccess(e[0], "userId.flocId.id"), "chrome.com", null), V(m, y.deepAccess(e[0], "userId.criteoId"), "criteo.com", null), V(m, y.deepAccess(e[0], "userId.netId"), "netid.de", null), V(m, y.deepAccess(e[0], "userId.idl_env"), "liveramp.com", null), V(m, y.deepAccess(e[0], "userId.tdid"), "adserver.org", "TDID"), V(m, y.deepAccess(e[0], "userId.uid2.id"), "uidapi.com", "UID2"), m.length && (g.eids = m)), a[0].publisher_id && (g.publisher_id = a[0].publisher_id), function (e, r) {
                        var t = [], a = {withCredentials: !0}, n = "https://ib.adnxs.com/ut/v3/prebid";
                        O(r) || (n = "https://ib.adnxs-simple.com/ut/v3/prebid");
                        "TRUE" !== y.getParameterByName("apn_test").toUpperCase() && !0 !== v.b.getConfig("apn_test") || (a.customHeaders = {"X-Is-Test": 1});
                        {
                            var i;
                            15 < e.tags.length ? (i = y.deepClone(e), y.chunk(e.tags, 15).forEach(function (e) {
                                i.tags = e;
                                e = JSON.stringify(i);
                                t.push({method: "POST", url: n, data: e, bidderRequest: r, options: a})
                            })) : (e = JSON.stringify(e), t = {
                                method: "POST",
                                url: n,
                                data: e,
                                bidderRequest: r,
                                options: a
                            })
                        }
                        return t
                    }(g, r)
                },
                interpretResponse: function (e, r) {
                    var t = this, a = r.bidderRequest;
                    e = e.body;
                    var n = [];
                    if (e && !e.error) return e.tags && e.tags.forEach(function (e) {
                        var r, r = (r = e) && r.ads && r.ads.length && b()(r.ads, function (e) {
                            return e.rtb
                        });
                        r && 0 !== r.cpm && h()(t.supportedMediaTypes, r.ad_type) && ((e = function (r, e, t) {
                            var a = y.getBidRequest(r.uuid, [t]), n = {
                                requestId: r.uuid,
                                cpm: e.cpm,
                                creativeId: e.creative_id,
                                dealId: e.deal_id,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: 300,
                                adUnitCode: a.adUnitCode,
                                appnexus: {
                                    buyerMemberId: e.buyer_member_id,
                                    dealPriority: e.deal_priority,
                                    dealCode: e.deal_code
                                }
                            };
                            e.adomain && (n.meta = g({}, n.meta, {advertiserDomains: []}));
                            e.advertiser_id && (n.meta = g({}, n.meta, {advertiserId: e.advertiser_id}));
                            if (e.rtb.video) switch (g(n, {
                                width: e.rtb.video.player_width,
                                height: e.rtb.video.player_height,
                                vastImpUrl: e.notify_url,
                                ttl: 3600
                            }), y.deepAccess(a, "mediaTypes.video.context")) {
                                case m.a:
                                    var i = Object(l.getIabSubCategory)(a.bidder, e.brand_category_id);
                                    n.meta = g({}, n.meta, {primaryCatId: i});
                                    var i = e.deal_priority;
                                    n.video = {
                                        context: m.a,
                                        durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                        dealTier: i
                                    }, n.vastUrl = e.rtb.video.asset_url;
                                    break;
                                case f.b:
                                    n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url && (i = b()(t.bids, function (e) {
                                        return e.bidId === r.uuid
                                    }), i = y.deepAccess(i, "renderer.options"), n.renderer = function (e, r) {
                                        var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                            t = u.a.install({
                                                id: r.renderer_id,
                                                url: r.renderer_url,
                                                config: t,
                                                loaded: !1,
                                                adUnitCode: e
                                            });
                                        try {
                                            t.setRender(F)
                                        } catch (e) {
                                            y.logWarn("Prebid Error calling setRender on renderer", e)
                                        }
                                        return t.setEventHandlers({
                                            impression: function () {
                                                return y.logMessage("AppNexus outstream video impression event")
                                            }, loaded: function () {
                                                return y.logMessage("AppNexus outstream video loaded event")
                                            }, ended: function () {
                                                y.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                            }
                                        }), t
                                    }(n.adUnitCode, e, i));
                                    break;
                                case f.a:
                                    n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url)
                            } else if (e.rtb[m.c]) {
                                var s = e.rtb[m.c], o = e.viewability.config.replace("src=", "data-src="),
                                    d = s.javascript_trackers;
                                null == d ? d = o : y.isStr(d) ? d = [d, o] : d.push(o), n[m.c] = {
                                    title: s.title,
                                    body: s.desc,
                                    body2: s.desc2,
                                    cta: s.ctatext,
                                    rating: s.rating,
                                    sponsoredBy: s.sponsored,
                                    privacyLink: s.privacy_link,
                                    address: s.address,
                                    downloads: s.downloads,
                                    likes: s.likes,
                                    phone: s.phone,
                                    price: s.price,
                                    salePrice: s.saleprice,
                                    clickUrl: s.link.url,
                                    displayUrl: s.displayurl,
                                    clickTrackers: s.link.click_trackers,
                                    impressionTrackers: s.impression_trackers,
                                    javascriptTrackers: d
                                }, s.main_img && (n.native.image = {
                                    url: s.main_img.url,
                                    height: s.main_img.height,
                                    width: s.main_img.width
                                }), s.icon && (n.native.icon = {
                                    url: s.icon.url,
                                    height: s.icon.height,
                                    width: s.icon.width
                                })
                            } else {
                                g(n, {width: e.rtb.banner.width, height: e.rtb.banner.height, ad: e.rtb.banner.content});
                                try {
                                    var p, c;
                                    e.rtb.trackers && (p = e.rtb.trackers[0].impression_urls[0], c = y.createTrackPixelHtml(p), n.ad += c)
                                } catch (e) {
                                    y.logError("Error appending tracking pixel", e)
                                }
                            }
                            return n
                        }(e, r, a)).mediaType = function (e) {
                            e = e.ad_type;
                            return e === m.d ? m.d : e === m.c ? m.c : m.b
                        }(r), n.push(e))
                    }), e.debug && e.debug.debug_info && (i = (i = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info).replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), y.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), y.logMessage(i)), n;
                    var i = "in response for ".concat(a.bidderCode, " adapter");
                    return e && e.error && (i += ": ".concat(e.error)), y.logError(i), n
                },
                getMappingFileInfo: function () {
                    return {url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json", refreshInDays: 2}
                },
                getUserSyncs: function (e, r, t) {
                    if (e.iframeEnabled && O({gdprConsent: t})) return [{
                        type: "iframe",
                        url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                    }]
                },
                transformBidParams: function (t, e) {
                    return t = y.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: y.transformBidderParamKeywords,
                        publisherId: "number"
                    }, t), e && (t.use_pmt_rule = "boolean" == typeof t.usePaymentRule && t.usePaymentRule, t.usePaymentRule && delete t.usePaymentRule, S(t.keywords) && t.keywords.forEach(T), Object.keys(t).forEach(function (e) {
                        var r = y.convertCamelToUnderscore(e);
                        r !== e && (t[r] = t[e], delete t[e])
                    })), t
                },
                onBidWon: function (e) {
                    e.native && function (e) {
                        var r = function (e) {
                            var r;
                            if (y.isStr(e) && E(e)) r = e; else if (y.isArray(e)) for (var t = 0; t < e.length; t++) {
                                var a = e[t];
                                E(a) && (r = a)
                            }
                            return r
                        }(e.native.javascriptTrackers);
                        if (r) for (var e = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, t = function (e) {
                            var r = e.indexOf('src="') + 5, t = e.indexOf('"', r);
                            return e.substring(r, t)
                        }(r), a = t.replace("dom_id=%native_dom_id%", e), n = document.getElementsByTagName("iframe"), i = !1, s = 0; s < n.length && !i; s++) {
                            var o = n[s];
                            try {
                                var d = o.contentDocument || o.contentWindow.document;
                                if (d) for (var p = d.getElementsByTagName("script"), c = 0; c < p.length && !i; c++) {
                                    var u = p[c];
                                    u.getAttribute("data-src") == t && (u.setAttribute("src", a), u.setAttribute("data-src", ""), u.removeAttribute && u.removeAttribute("data-src"), i = !0)
                                }
                            } catch (e) {
                                if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e
                            }
                        }
                    }(e)
                }
            };

        function S(e) {
            return y.isArray(e) && 0 < e.length
        }

        function T(e) {
            S(e.value) && "" === e.value[0] && delete e.value
        }

        function E(e) {
            var r = e.match(c), t = null != r && 1 <= r.length, r = e.match(x), r = null != r && 1 <= r.length;
            return e.startsWith(n) && r && t
        }

        function O(e) {
            var r = !0;
            return r = e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion ? !(!0 !== y.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")) : r
        }

        function R(t) {
            var a = {};
            a.sizes = P(t.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = t.bidId, t.params.placementId ? a.id = parseInt(t.params.placementId, 10) : a.code = t.params.invCode, a.allow_smaller_sizes = t.params.allowSmallerSizes || !1, a.use_pmt_rule = t.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0;
            var e = function (e) {
                if (!y.isFn(e.getFloor)) return e.params.reserve || null;
                e = e.getFloor({currency: "USD", mediaType: "*", size: "*"});
                return !y.isPlainObject(e) || isNaN(e.floor) || "USD" !== e.currency ? null : e.floor
            }(t);
            e && (a.reserve = e), t.params.position && (a.position = {
                above: 1,
                below: 2
            }[t.params.position] || 0), t.params.trafficSourceCode && (a.traffic_source_code = t.params.trafficSourceCode), t.params.privateSizes && (a.private_sizes = P(t.params.privateSizes)), t.params.supplyType && (a.supply_type = t.params.supplyType), t.params.pubClick && (a.pubclick = t.params.pubClick), t.params.extInvCode && (a.ext_inv_code = t.params.extInvCode), t.params.publisherId && (a.publisher_id = parseInt(t.params.publisherId, 10)), t.params.externalImpId && (a.external_imp_id = t.params.externalImpId), y.isEmpty(t.params.keywords) || (0 < (r = y.transformBidderParamKeywords(t.params.keywords)).length && r.forEach(T), a.keywords = r);
            var n, i, e = y.deepAccess(t, "ortb2Imp.ext.data.pbadslot");
            e && (a.gpid = e), t.mediaType !== m.c && !y.deepAccess(t, "mediaTypes.".concat(m.c)) || (a.ad_types.push(m.c), 0 === a.sizes.length && (a.sizes = P([1, 1])), t.nativeParams && (n = t.nativeParams, i = {}, Object.keys(n).forEach(function (e) {
                var r = p[e] && p[e].serverName || p[e] || e, t = p[e] && p[e].requiredParams;
                i[r] = g({}, t, n[e]), r !== p.image.serverName && r !== p.icon.serverName || !i[r].sizes || (e = i[r].sizes, (y.isArrayOfNums(e) || y.isArray(e) && 0 < e.length && e.every(function (e) {
                    return y.isArrayOfNums(e)
                })) && (i[r].sizes = P(i[r].sizes))), r === p.privacyLink && (i.privacy_supported = !0)
            }), a[m.c] = {layouts: [i]}));
            var r = y.deepAccess(t, "mediaTypes.".concat(m.d)), e = y.deepAccess(t, "mediaTypes.video.context");
            a.hb_source = r && "adpod" === e ? 7 : 1, t.mediaType !== m.d && !r || a.ad_types.push(m.d), (t.mediaType === m.d || r && "outstream" !== e) && (a.require_asset_url = !0), t.params.video && (a.video = {}, Object.keys(t.params.video).filter(function (e) {
                return h()(o, e)
            }).forEach(function (e) {
                switch (e) {
                    case"context":
                    case"playback_method":
                        var r = t.params.video[e], r = y.isArray(r) ? r[0] : r;
                        a.video[e] = d[e][r];
                        break;
                    case"frameworks":
                        break;
                    default:
                        a.video[e] = t.params.video[e]
                }
            }), t.params.video.frameworks && y.isArray(t.params.video.frameworks) && (a.video_frameworks = t.params.video.frameworks)), t.renderer && (a.video = g({}, a.video, {custom_renderer_present: !0})), t.params.frameworks && y.isArray(t.params.frameworks) && (a.banner_frameworks = t.params.frameworks);
            e = b()(s.a.getAdUnits(), function (e) {
                return t.transactionId === e.transactionId
            });
            return e && e.mediaTypes && e.mediaTypes.banner && a.ad_types.push(m.b), 0 === a.ad_types.length && delete a.ad_types, a
        }

        function P(e) {
            var r = [], t = {};
            if (y.isArray(e) && 2 === e.length && !y.isArray(e[0])) t.width = parseInt(e[0], 10), t.height = parseInt(e[1], 10), r.push(t); else if ("object" === i(e)) for (var a = 0; a < e.length; a++) {
                var n = e[a];
                (t = {}).width = parseInt(n[0], 10), t.height = parseInt(n[1], 10), r.push(t)
            }
            return r
        }

        function U(e) {
            return !!e.params.user
        }

        function j(e) {
            return !!parseInt(e.params.member, 10)
        }

        function N(e) {
            if (e.params) return !!e.params.app
        }

        function q(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function z(e) {
            return !!e.debug
        }

        function M(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === m.a
        }

        function D(e) {
            var r = !1, t = e.params, a = e.params.video;
            return r = !(r = t.frameworks && y.isArray(t.frameworks) ? h()(e.params.frameworks, 6) : r) && a && a.frameworks && y.isArray(a.frameworks) ? h()(e.params.video.frameworks, 6) : r
        }

        function B(e, r, t) {
            y.isEmpty(e.video) && (e.video = {}), e.video[r] = t
        }

        function F(e) {
            var r;
            r = e.adUnitCode, (r = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && r[0].style.setProperty("display", "none"), function (e) {
                try {
                    var r = document.getElementById(e).querySelectorAll("script[id^='sas_script']");
                    r[0].nextSibling && "iframe" === r[0].nextSibling.localName && r[0].nextSibling.style.setProperty("display", "none")
                } catch (e) {
                }
            }(e.adUnitCode), e.renderer.push(function () {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function (e, r, t) {
                    e.renderer.handleVideoEvent({id: r, eventName: t})
                }.bind(null, e))
            })
        }

        function V(e, r, t, a) {
            return r && (a ? e.push({source: t, id: r, rti_partner: a}) : e.push({source: t, id: r})), e
        }

        Object(l.registerBidder)(C)
    }
}, [292]);
pbjsChunk([348], {
    344: function (t, e, n) {
        t.exports = n(345)
    }, 345: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), n.d(e, "spec", function () {
            return o
        });
        e = n(1), n = n(2);

        function s() {
            return (s = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n, r = arguments[e];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }).apply(this, arguments)
        }

        function c(t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, c = !1;
                    try {
                        for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0) ;
                    } catch (t) {
                        c = !0, o = t
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                    return i
                }
            }(t, e) || function (t, e) {
                if (t) {
                    if ("string" == typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
                }
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function r(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        var d = "buysellads", u = {currency: "USD", netRevenue: !1, ttl: 360}, o = {
            code: d, aliases: ["bsa"], supportedMediaTypes: [n.b], isBidRequestValid: function (t) {
                var e = t.params, t = e.size, e = e.zoneKey;
                return function (t) {
                    t = t.size;
                    return Array.isArray(t) && 2 === t.length && t.every(function (t) {
                        return "number" == typeof t
                    })
                }({size: t}) && "string" == typeof e
            }, buildRequests: function (t, e) {
                var a = (window.optimize || {}).environment;
                return t.map(function (t) {
                    var e = t.bidId, n = t.params, r = c(n.size, 2), o = r[0], i = r[1], t = n.zoneKey, n = (n = (r = {
                        environment: a,
                        zoneKey: t
                    }).environment, r = r.zoneKey, {
                        local: "https://srv.localbsa.dev/bid/".concat(r, ".json"),
                        dev: "https://srv.buysellads.com/bid/".concat(r, ".json"),
                        prod: "https://srv.buysellads.com/bid/".concat(r, ".json")
                    }[n] || null);
                    return n ? {
                        data: {bidId: e, height: i, ignore: !0, width: o, zoneKey: t},
                        method: "GET",
                        url: n,
                        options: {withCredentials: !1}
                    } : (console.warn("BuySellAds - Request environment `".concat(String(a), "` not found; skipping bid...")), null)
                }).filter(Boolean)
            }, interpretResponse: function (t, e) {
                var n = t.body, r = e.data, o = r.bidId, i = r.width, a = r.height, c = r.zoneKey, t = function (t) {
                    var e = t.bidCpm, n = t.country, r = t.region, r = (Object.keys(t), y({geoId: r, geoType: p})),
                        r = t[r];
                    if (r) return parseFloat(r);
                    n = y({geoId: n, geoType: l}), n = t[n];
                    if (n) return parseFloat(n);
                    return parseFloat(e) || null
                }(n);
                return t ? [s({
                    ad: (r = (e = {
                        height: a,
                        width: i,
                        zoneKey: c
                    }).height, n = e.width, e = e.zoneKey, r = "window._bsa.init('iab', '".concat(e, "', 'placement:fromoptimize', { target: '#buysellads-iab', iabformat: '").concat(n, "x").concat(r, "' });"), "\n\x3c!--Zone ".concat(e, " served by ").concat(d, " Prebid.js Header Bidding--\x3e\n<div id=\"buysellads-iab\"></div>\n<script>\n\t(function() {\n\t\tif (typeof window._bsa === 'undefined') {\n\t\t\tvar adElement = document.getElementById('buysellads-iab');\n\t\t\tvar script = document.createElement('script');\n\t\t\tscript.onload = function() {\n\t\t\t\t").concat(r, "\n\t\t\t};\n\t\t\tscript.type = 'text/javascript';\n\t\t\tscript.src = 'https://m.servedby-buysellads.com/monetization.js';\n\n\t\t\tadElement.parentNode.appendChild(script);\n\t\t} else {\n\t\t\t").concat(r, "\n\t\t}\n\t})()\n<\/script>\n\t").trim()),
                    cpm: t,
                    creativeId: c,
                    width: i,
                    height: a,
                    requestId: o
                }, u)] : (console.warn("BuySellAds - Bid CPM not found for specified zone key: ".concat(c, "; skipping bid...")), [])
            }
        };
        Object(e.registerBidder)(o);
        var l = "1", p = "2";

        function y(t) {
            var e = t.geoId, t = t.geoType;
            return "bidCpmByGeo.".concat(t, ":").concat(e)
        }
    }
}, [344]);
pbjsChunk([338], {
    364: function (e, r, t) {
        e.exports = t(365)
    }, 365: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {value: !0}), t.d(r, "spec", function () {
            return u
        });
        var i = t(0), n = t(1), r = t(2), a = t(3), d = "cointraffic",
            c = ["EUR", "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "ISK", "NOK", "HRK", "RUB", "TRY", "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR"],
            u = {
                code: d, supportedMediaTypes: [r.b], isBidRequestValid: function (e) {
                    return !!e.params.placementId
                }, buildRequests: function (e, n) {
                    return e.map(function (e) {
                        var r = i.parseSizesInput(e.params.size || e.sizes),
                            t = a.b.getConfig("currency.bidderCurrencyDefault.".concat(d)) || a.b.getConfig("currency.adServerCurrency") || "EUR";
                        if (-1 !== c.indexOf(t)) return {
                            method: "POST",
                            url: "https://appspb.cointraffic.io/pb/tmp",
                            data: {
                                placementId: e.params.placementId,
                                currency: t,
                                sizes: r,
                                bidId: e.bidId,
                                referer: n.refererInfo.referer
                            }
                        };
                        i.logError("Currency is not supported - " + t)
                    })
                }, interpretResponse: function (e, r) {
                    var t = [], e = e.body;
                    if (i.isEmpty(e)) return t;
                    e = {
                        requestId: e.requestId,
                        cpm: e.cpm,
                        currency: e.currency,
                        netRevenue: e.netRevenue,
                        width: e.width,
                        height: e.height,
                        creativeId: e.creativeId,
                        ttl: e.ttl,
                        ad: e.ad,
                        meta: {
                            advertiserDomains: e.adomain && e.adomain.length ? e.adomain : [],
                            mediaType: e.mediaType
                        }
                    };
                    return t.push(e), t
                }
            };
        Object(n.registerBidder)(u)
    }
}, [364]);
pbjsChunk([337], {
    366: function (e, r, t) {
        e.exports = t(367)
    }, 367: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {value: !0}), t.d(r, "spec", function () {
            return i
        });
        var d = t(0), u = t(3), t = t(1), i = {
            code: "coinzilla", aliases: ["czlla"], isBidRequestValid: function (e) {
                return !!e.params.placementId
            }, buildRequests: function (e, i) {
                return 0 === e.length ? [] : e.map(function (e) {
                    var r = d.parseSizesInput(e.params.size || e.sizes)[0], t = r.split("x")[0], r = r.split("x")[1];
                    return {
                        method: "POST",
                        url: "https://request.czilladx.com/serve/request.php",
                        data: {
                            placementId: e.params.placementId,
                            width: t,
                            height: r,
                            bidId: e.bidId,
                            referer: i.refererInfo.referer
                        }
                    }
                })
            }, interpretResponse: function (e, r) {
                var t = [], i = e.body, d = i.creativeId || 0, n = i.width || 0, a = i.height || 0, s = i.cpm || 0;
                return 0 !== n && 0 !== a && 0 !== s && 0 !== d && (e = i.dealid || "", n = i.currency || "EUR", a = void 0 === i.netRevenue || i.netRevenue, r = r.data.referer, i = {
                    requestId: i.requestId,
                    cpm: s,
                    width: i.width,
                    height: i.height,
                    creativeId: d,
                    dealId: e,
                    currency: n,
                    netRevenue: a,
                    ttl: u.b.getConfig("_bidderTimeout"),
                    referrer: r,
                    ad: i.ad,
                    mediaType: i.mediaType,
                    meta: {advertiserDomains: i.advertiserDomain || []}
                }, t.push(i)), t
            }
        };
        Object(t.registerBidder)(i)
    }
}, [366]);
pbjsChunk([332], {
    380: function (n, t, e) {
        n.exports = e(381)
    }, 381: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), e.d(t, "allowAuction", function () {
            return b
        }), e.d(t, "userCMP", function () {
            return r
        }), e.d(t, "consentTimeout", function () {
            return c
        }), e.d(t, "gdprScope", function () {
            return d
        }), e.d(t, "staticConsentData", function () {
            return p
        }), t.requestBidsHook = k, t.resetConsentData = function () {
            g = void 0, r = void 0, y = 0, a.gdprDataHandler.setConsentData(null)
        }, t.setConsentConfig = I;
        var l = e(0), o = e(3), a = e(8), t = e(13), i = e.n(t), t = e(73), u = e.n(t);

        function s(n) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            })(n)
        }

        function f(n, t, e) {
            return t in n ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[t] = e, n
        }

        var r, c, d, p, g, m = "iab", C = 1e4, v = !0, b = {value: v, definedInConfig: !1}, y = 0, w = !1, D = {
            iab: function (o, e, i) {
                function n(n, t) {
                    l.logInfo("Received a response from CMP", n), t ? !1 !== n.gdprApplies && "tcloaded" !== n.eventStatus && "useractioncomplete" !== n.eventStatus || o(n, i) : e("CMP unable to register callback function.  Please check CMP setup.", i)
                }

                var t = function () {
                    var t = {};

                    function e() {
                        t.getConsentData && t.getVendorConsents && (l.logInfo("Received all requested responses from CMP", t), o(t, i))
                    }

                    return {
                        consentDataCallback: function (n) {
                            t.getConsentData = n, e()
                        }, vendorConsentsCallback: function (n) {
                            t.getVendorConsents = n, e()
                        }
                    }
                }(), r = {}, a = function () {
                    for (var n, t, e = window; !n;) {
                        try {
                            if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                                t = "function" == typeof e.__tcfapi ? (y = 2, e.__tcfapi) : (y = 1, e.__cmp), n = e;
                                break
                            }
                        } catch (n) {
                        }
                        try {
                            if (e.frames.__tcfapiLocator) {
                                y = 2, n = e;
                                break
                            }
                        } catch (n) {
                        }
                        try {
                            if (e.frames.__cmpLocator) {
                                y = 1, n = e;
                                break
                            }
                        } catch (n) {
                        }
                        if (e === window.top) break;
                        e = e.parent
                    }
                    return {cmpFrame: n, cmpFunction: t}
                }(), s = a.cmpFrame, a = a.cmpFunction;
                if (!s) return e("CMP not found.", i);
                l.isFn(a) ? (l.logInfo("Detected CMP API is directly accessible, calling it now..."), 1 === y ? (a("getConsentData", null, t.consentDataCallback), a("getVendorConsents", null, t.vendorConsentsCallback)) : 2 === y && a("addEventListener", y, n)) : 1 === y && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (l.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), c("getConsentData", t.consentDataCallback), c("getVendorConsents", t.vendorConsentsCallback)) : (l.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 1 === y ? (d("getConsentData", s, t.consentDataCallback), d("getVendorConsents", s, t.vendorConsentsCallback)) : 2 === y && d("addEventListener", s, n));

                function c(e, o) {
                    var n = i.adUnits, t = 1, a = 1;
                    Array.isArray(n) && 0 < n.length && (t = (n = l.getAdUnitSizes(n[0]))[0][0], a = n[0][1]), window.$sf.ext.register(t, a, function (n, t) {
                        "cmpReturn" === n && (t = "getConsentData" === e ? t.vendorConsentData : t.vendorConsents, o(t))
                    }), window.$sf.ext.cmp(e)
                }

                function d(n, i, t) {
                    var e = 2 === y ? "__tcfapi" : "__cmp", s = "".concat(e, "Call");

                    function o(n) {
                        var t = "".concat(e, "Return"),
                            n = "string" == typeof n.data && u()(n.data, t) ? JSON.parse(n.data) : n.data;
                        n[t] && n[t].callId && (t = n[t], void 0 !== r[t.callId] && r[t.callId](t.returnValue, t.success))
                    }

                    2 === y ? (window[e] = function (n, t, e, o) {
                        var a = Math.random() + "", o = f({}, s, {command: n, version: t, parameter: o, callId: a});
                        r[a] = e, i.postMessage(o, "*")
                    }, window.addEventListener("message", o, !1), window[e](n, y, t)) : (window[e] = function (n, t, e) {
                        var o = Math.random() + "", t = f({}, s, {command: n, parameter: t, callId: o});
                        r[o] = e, i.postMessage(t, "*")
                    }, window.addEventListener("message", o, !1), window[e](n, void 0, t))
                }
            }, static: function (n, t, e) {
                n(p, e)
            }
        };

        function k(n, t) {
            t = {
                context: this,
                args: [t],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return g ? (l.logInfo("User consent information already known.  Pulling internally stored information..."), P(null, t)) : i()(Object.keys(D), r) ? (D[r].call(this, M, h, t), void (t.haveExited || (0 === c ? M(void 0, t) : t.timer = setTimeout(function (n) {
                h("CMP workflow exceeded timeout threshold.", n)
            }.bind(null, t), c)))) : (l.logWarn("CMP framework (".concat(r, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), t.nextFn.apply(t.context, t.args))
        }

        function M(e, n) {
            "static" === r && 2 === (y = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
            var t = 1 === y ? function (n) {
                var t = n && n.getConsentData && n.getConsentData.gdprApplies;
                return !("boolean" == typeof t && (!0 !== t || l.isStr(n.getConsentData.consentData) && l.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length))
            } : 2 === y ? function () {
                var n = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : d, t = e && e.tcString;
                return !("boolean" == typeof n && (!0 !== n || l.isStr(t)))
            } : null;
            b.definedInConfig && 2 === y ? l.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2") : b.definedInConfig || 1 !== y || l.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(v, ").")), l.isFn(t) ? t(e) ? h("CMP returned unexpected value during lookup process.", n, e) : (clearTimeout(n.timer), A(e), P(null, n)) : h("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", n, e)
        }

        function h(n, t, e) {
            clearTimeout(t.timer), b.value && 1 === y && A(void 0), P(n, t, e)
        }

        function A(n) {
            1 === y ? g = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : d
            } : (g = {
                consentString: n ? n.tcString : void 0,
                vendorData: n || void 0,
                gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : d
            }, n && n.addtlConsent && l.isStr(n.addtlConsent) && (g.addtlConsent = n.addtlConsent)), g.apiVersion = y, a.gdprDataHandler.setConsentData(g)
        }

        function P(n, t, e) {
            var o, a, i;
            !1 === t.haveExited && (t.haveExited = !0, o = t.context, a = t.args, i = t.nextFn, n ? b.value && 1 === y ? (l.logWarn(n + " 'allowAuctionWithoutConsent' activated.", e), i.apply(o, a)) : (l.logError(n + " Canceling auction as per consentManagement config.", e), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : l.logError("Error executing bidsBackHandler")) : i.apply(o, a))
        }

        function I(n) {
            (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === s(n) ? (l.isStr(n.cmpApi) ? r = n.cmpApi : (r = m, l.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(m, ")."))), l.isNumber(n.timeout) ? c = n.timeout : (c = C, l.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(C, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent && (b.value = n.allowAuctionWithoutConsent, b.definedInConfig = !0), d = !0 === n.defaultGdprScope, l.logInfo("consentManagement module has been activated..."), "static" === r && (l.isPlainObject(n.consentData) ? (p = n.consentData, c = 0) : l.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), w || pbjs.requestBids.before(k, 50), w = !0) : l.logWarn("consentManagement config not defined, exiting consent manager")
        }

        o.b.getConfig("consentManagement", function (n) {
            return I(n.consentManagement)
        })
    }
}, [380]);
pbjsChunk([330], {
    389: function (e, r, n) {
        e.exports = n(390)
    }, 390: function (e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {value: !0}), n.d(r, "spec", function () {
            return t
        });
        var u = n(0), n = n(1);

        function s() {
            return (s = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n, t = arguments[r];
                    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }).apply(this, arguments)
        }

        var i = 0, a = "consumable", t = {
                code: "consumable", isBidRequestValid: function (e) {
                    return !!(e.params.networkId && e.params.siteId && e.params.unitId && e.params.unitName)
                }, buildRequests: function (e, r) {
                    var n = {method: "POST", url: "", data: "", bidRequest: []};
                    if (e.length < 1) return n;
                    i = e[0].params.siteId, a = e[0].bidder;
                    var t = s({
                        placements: [],
                        time: Date.now(),
                        url: r.refererInfo.referer,
                        referrer: document.referrer,
                        source: [{name: "prebidjs", version: "4.43.0"}]
                    }, e[0].params);
                    return r && r.gdprConsent && (t.gdpr = {
                        consent: r.gdprConsent.consentString,
                        applies: "boolean" != typeof r.gdprConsent.gdprApplies || r.gdprConsent.gdprApplies
                    }), r && r.uspConsent && (t.ccpa = r.uspConsent), e.map(function (e) {
                        var r, n = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.sizes || [],
                            e = s({
                                divName: e.bidId, adTypes: e.adTypes || (r = [], n.forEach(function (e) {
                                    e = d.indexOf(e[0] + "x" + e[1]);
                                    0 <= e && r.push(e)
                                }), r)
                            }, e.params);
                        e.networkId && e.siteId && e.unitId && e.unitName && t.placements.push(e)
                    }), n.data = JSON.stringify(t), n.bidRequest = e, n.bidderRequest = r, n.url = "https://e.serverbid.com/api/v2", n
                }, interpretResponse: function (e, r) {
                    var n = [], t = r.bidRequest;
                    e = (e || {}).body;
                    for (var s = 0; s < t.length; s++) {
                        var i, a, d, o = {}, p = (d = t[s]).bidId;
                        e && (a = (i = e.decisions && e.decisions[p]) && i.pricing && i.pricing.clearPrice, i && a && (o.requestId = p, o.cpm = a, o.width = i.width, o.height = i.height, o.unitId = d.params.unitId, o.unitName = d.params.unitName, o.ad = (d = i, o.unitId, o.unitName, d.contents && d.contents[0] && d.contents[0].body + u.createTrackPixelHtml(d.impressionUrl)), o.currency = "USD", o.creativeId = i.adId, o.ttl = 30, o.meta = {advertiserDomains: i.adomain || []}, o.netRevenue = !0, o.referrer = r.bidderRequest.refererInfo.referer, n.push(o)))
                    }
                    return n
                }, getUserSyncs: function (e, r) {
                    return e.iframeEnabled ? [{
                        type: "iframe",
                        url: "https://sync.serverbid.com/ss/" + i + ".html"
                    }] : e.pixelEnabled && 0 < r.length ? r[0].body.pixels : void u.logWarn(a + ": Please enable iframe based user syncing.")
                }
            },
            d = [null, "120x90", "120x90", "468x60", "728x90", "300x250", "160x600", "120x600", "300x100", "180x150", "336x280", "240x400", "234x60", "88x31", "120x60", "120x240", "125x125", "220x250", "250x250", "250x90", "0x0", "200x90", "300x50", "320x50", "320x480", "185x185", "620x45", "300x125", "800x250"];
        d[77] = "970x90", d[123] = "970x250", d[43] = "300x600", d[286] = "970x66", d[3230] = "970x280", d[429] = "486x60", d[374] = "700x500", d[934] = "300x1050", d[1578] = "320x100", d[331] = "320x250", d[3301] = "320x267", d[2730] = "728x250", Object(n.registerBidder)(t)
    }
}, [389]);
pbjsChunk([1], {
    401: function (t, e, r) {
        t.exports = r(402)
    }, 402: function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: !0}), __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function () {
            return ADAPTER_VERSION
        }), __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function () {
            return PROFILE_ID_PUBLISHERTAG
        }), __webpack_require__.d(__webpack_exports__, "spec", function () {
            return spec
        }), __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
        var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__ = __webpack_require__(39),
            __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1),
            __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3),
            __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2),
            __WEBPACK_IMPORTED_MODULE_4__src_utils_js__ = __webpack_require__(0),
            __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(10),
            __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__),
            __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(68),
            __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__),
            __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(7);

        function _extends() {
            return (_extends = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r, i = arguments[e];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                }
                return t
            }).apply(this, arguments)
        }

        var GVLID = 91, ADAPTER_VERSION = 33, BIDDER_CODE = "criteo", CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
            PROFILE_ID_INLINE = 207, PROFILE_ID_PUBLISHERTAG = 185,
            storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID), LOG_PREFIX = "Criteo: ",
            PUBLISHER_TAG_URL = "https://static.criteo.net/js/ld/publishertag.prebid.js", FAST_BID_PUBKEY_E = 65537,
            FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
            spec = {
                code: BIDDER_CODE,
                gvlid: GVLID,
                supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.b, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c],
                isBidRequestValid: function (t) {
                    return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t))
                },
                buildRequests: function (t, e) {
                    var r, i,
                        s = __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getLegacyFpd(__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("ortb2")) || {};
                    if (_extends(e, {
                        publisherExt: s.context,
                        userExt: s.user,
                        ceh: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.ceh")
                    }), publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid(), setTimeout(function () {
                        Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__.a)(PUBLISHER_TAG_URL, BIDDER_CODE)
                    }, e.timeout)), e = publisherTagAvailable() ? (r = (i = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "4.43.0")).buildCdbUrl(), i.buildCdbRequest()) : (r = buildCdbUrl(i = buildContext(t, e)), buildCdbRequest(i, t, e))) return {
                        method: "POST",
                        url: r,
                        data: e,
                        bidRequests: t
                    }
                },
                interpretResponse: function (t, s) {
                    var e = t.body || t;
                    if (publisherTagAvailable()) {
                        t = Criteo.PubTag.Adapters.Prebid.GetAdapter(s);
                        if (t) return t.interpretResponse(e, s)
                    }
                    var a = [];
                    return e && e.slots && __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.isArray(e.slots) && e.slots.forEach(function (e) {
                        var t = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(s.bidRequests, function (t) {
                            return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid)
                        }), r = t.bidId, i = {
                            requestId: r,
                            adId: e.bidId || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.getUniqueIdentifierStr(),
                            cpm: e.cpm,
                            currency: e.currency,
                            netRevenue: !0,
                            ttl: e.ttl || 60,
                            creativeId: r,
                            width: e.width,
                            height: e.height,
                            dealId: e.dealCode
                        };
                        e.native ? t.params.nativeCallback ? i.ad = createNativeAd(r, e.native, t.params.nativeCallback) : (i.native = createPrebidNativeAd(e.native), i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c) : e.video ? (i.vastUrl = e.displayurl, i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d) : i.ad = e.creative, a.push(i)
                    }), a
                },
                onTimeout: function (t) {
                    var e;
                    publisherTagAvailable() && Array.isArray(t) && (e = [], t.forEach(function (t) {
                        -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout())
                    }))
                },
                onBidWon: function (t) {
                    publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)
                },
                onSetTargeting: function (t) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)
                }
            };

        function publisherTagAvailable() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
        }

        function buildContext(t, e) {
            var r = "";
            e && e.refererInfo && (r = e.refererInfo.referer);
            var e = __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.parseUrl(r).search,
                i = {url: r, debug: "1" === e.pbt_debug, noLog: "1" === e.pbt_nolog, amp: !1};
            return t.forEach(function (t) {
                "amp" === t.params.integrationMode && (i.amp = !0)
            }), i
        }

        function buildCdbUrl(t) {
            var e = CDB_ENDPOINT;
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("4.43.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e
        }

        function checkNativeSendId(t) {
            return !t.nativeParams || !(t.nativeParams.image && (!0 !== t.nativeParams.image.sendId || !0 === t.nativeParams.image.sendTargetingKeys) || t.nativeParams.icon && (!0 !== t.nativeParams.icon.sendId || !0 === t.nativeParams.icon.sendTargetingKeys) || t.nativeParams.clickUrl && (!0 !== t.nativeParams.clickUrl.sendId || !0 === t.nativeParams.clickUrl.sendTargetingKeys) || t.nativeParams.displayUrl && (!0 !== t.nativeParams.displayUrl.sendId || !0 === t.nativeParams.displayUrl.sendTargetingKeys) || t.nativeParams.privacyLink && (!0 !== t.nativeParams.privacyLink.sendId || !0 === t.nativeParams.privacyLink.sendTargetingKeys) || t.nativeParams.privacyIcon && (!0 !== t.nativeParams.privacyIcon.sendId || !0 === t.nativeParams.privacyIcon.sendTargetingKeys))
        }

        function buildCdbRequest(t, e, r) {
            var i, e = {
                publisher: {url: t.url, ext: r.publisherExt}, slots: e.map(function (t) {
                    i = t.params.networkId || i;
                    var e, r = {impid: t.adUnitCode, transactionid: t.transactionId, auctionId: t.auctionId};
                    return t.params.zoneId && (r.zoneid = t.params.zoneId), __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "ortb2Imp.ext") && (r.ext = t.ortb2Imp.ext), t.params.ext && (r.ext = _extends({}, r.ext, t.params.ext)), t.params.publisherSubId && (r.publishersubid = t.params.publisherSubId), t.params.nativeCallback || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c)) ? (r.native = !0, checkNativeSendId(t) || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), r.sizes = parseSizes(retrieveBannerSizes(t), parseNativeSize)) : r.sizes = parseSizes(retrieveBannerSizes(t), parseSize), hasVideoMediaType(t) && ((e = {
                        playersizes: parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video.playerSize"), parseSize),
                        mimes: t.mediaTypes.video.mimes,
                        protocols: t.mediaTypes.video.protocols,
                        maxduration: t.mediaTypes.video.maxduration,
                        api: t.mediaTypes.video.api
                    }).skip = t.params.video.skip, e.placement = t.params.video.placement, e.minduration = t.params.video.minduration, e.playbackmethod = t.params.video.playbackmethod, e.startdelay = t.params.video.startdelay, r.video = e), r
                })
            };
            return i && (e.publisher.networkid = i), e.user = {ext: r.userExt}, r && r.ceh && (e.user.ceh = r.ceh), r && r.gdprConsent && (e.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (e.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), e.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (e.gdprConsent.consentData = r.gdprConsent.consentString)), r && r.uspConsent && (e.user.uspIab = r.uspConsent), e
        }

        function retrieveBannerSizes(t) {
            return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.banner.sizes") || t.sizes
        }

        function parseSizes(t, e) {
            return Array.isArray(t[0]) ? t.map(function (t) {
                return e(t)
            }) : [e(t)]
        }

        function parseSize(t) {
            return t[0] + "x" + t[1]
        }

        function parseNativeSize(t) {
            return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1]
        }

        function hasVideoMediaType(t) {
            return void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "params.video") && void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video")
        }

        function hasValidVideoMediaType(e) {
            var r = !0;
            ["mimes", "playerSize", "maxduration", "protocols", "api"].forEach(function (t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "mediaTypes.video." + t) && (r = !1, __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"))
            });
            if (["skip", "placement", "playbackmethod"].forEach(function (t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "params.video." + t) && (r = !1, __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: params.video." + t + " is required"))
            }), r) {
                if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return 1;
                if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return 1
            }
        }

        function createPrebidNativeAd(t) {
            return {
                sendTargetingKeys: !1,
                title: t.products[0].title,
                body: t.products[0].description,
                sponsoredBy: t.advertiser.description,
                icon: t.advertiser.logo,
                image: t.products[0].image,
                clickUrl: t.products[0].click_url,
                privacyLink: t.privacy.optout_click_url,
                privacyIcon: t.privacy.optout_image_url,
                cta: t.products[0].call_to_action,
                price: t.products[0].price,
                impressionTrackers: t.impression_pixels.map(function (t) {
                    return t.url
                })
            }
        }

        function createNativeAd(t, e, r) {
            var i = "criteo_prebid_native_slots";
            return window[i] = window[i] || {}, window[i][t] = {
                callback: r,
                payload: e
            }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')
        }

        function tryGetCriteoFastBid() {
            try {
                var fastBidStorageKey = "criteo_fast_bid", hashPrefix = "// Hash: ",
                    fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey), firstLineEndPosition,
                    firstLine, publisherTagHash, publisherTag;
                null !== fastBidFromStorage && (firstLineEndPosition = fastBidFromStorage.indexOf("\n"), firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim(), firstLine.substr(0, hashPrefix.length) !== hashPrefix ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("No hash found in FastBid"), storage.removeDataFromLocalStorage(fastBidStorageKey)) : (publisherTagHash = firstLine.substr(hashPrefix.length), publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1), Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logInfo("Using Criteo FastBid"), eval(publisherTag)) : (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Invalid Criteo FastBid found"), storage.removeDataFromLocalStorage(fastBidStorageKey))))
            } catch (e) {
            }
        }

        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__.registerBidder)(spec)
    }, 68: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = r(69), a = r(70);
        e.verify = function (t, e, r, i) {
            return e = new s.BigInteger(s.b64toHex(e)), r = new s.BigInteger(s.b64toHex(r)), r = e.modPowInt(i, r), s.removeExtraSymbols(r.toHexString()) === a.Sha256.hash(t)
        }
    }, 69: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = (v.prototype.toHexString = function () {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t, e = !1, r = "", i = this.t, s = this.DB - i * this.DB % 4;
            if (0 < i--) for (s < this.DB && 0 < (t = this[i] >> s) && (e = !0, r = p(t)); 0 <= i;) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, --i)), (e = 0 < t ? !0 : e) && (r += p(t));
            return e ? r : "0"
        }, v.prototype.fromHexString = function (t) {
            if (null !== t) {
                this.t = 0, this.s = 0;
                for (var e = t.length, r = !1, i = 0; 0 <= --e;) {
                    var s = _(t, e);
                    s < 0 ? "-" == t.charAt(e) && (r = !0) : (r = !1, 0 == i ? this[this.t++] = s : i + 4 > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i, (i += 4) >= this.DB && (i -= this.DB))
                }
                0, this.clamp(), r && v.ZERO.subTo(this, this)
            }
        }, v.prototype.negate = function () {
            var t = E();
            return v.ZERO.subTo(this, t), t
        }, v.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this
        }, v.prototype.mod = function (t) {
            var e = E();
            return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(v.ZERO) && t.subTo(e, e), e
        }, v.prototype.copyTo = function (t) {
            for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s
        }, v.prototype.lShiftTo = function (t, e) {
            for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, a = Math.floor(t / this.DB), o = this.s << r & this.DM, _ = this.t - 1; 0 <= _; --_) e[_ + a + 1] = this[_] >> i | o, o = (this[_] & s) << r;
            for (_ = a - 1; 0 <= _; --_) e[_] = 0;
            e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp()
        }, v.prototype.invDigit = function () {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
        }, v.prototype.dlShiftTo = function (t, e) {
            for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
            for (r = t - 1; 0 <= r; --r) e[r] = 0;
            e.t = this.t + t, e.s = this.s
        }, v.prototype.squareTo = function (t) {
            for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r;) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
                var i = e.am(r, e[r], t, 2 * r, 0, 1);
                (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
            }
            0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
        }, v.prototype.multiplyTo = function (t, e) {
            var r = this.abs(), i = t.abs(), s = r.t;
            for (e.t = s + i.t; 0 <= --s;) e[s] = 0;
            for (s = 0; s < i.t; ++s) e[s + r.t] = r.am(0, i[s], e, s, 0, r.t);
            e.s = 0, e.clamp(), this.s != t.s && v.ZERO.subTo(e, e)
        }, v.prototype.divRemTo = function (t, e, r) {
            var i = t.abs();
            if (!(i.t <= 0)) {
                var s = this.abs();
                if (s.t < i.t) return null != e && e.fromHexString("0"), void (null != r && this.copyTo(r));
                null == r && (r = E());
                var a = E(), o = this.s, _ = t.s, t = this.DB - T(i[i.t - 1]);
                0 < t ? (i.lShiftTo(t, a), s.lShiftTo(t, r)) : (i.copyTo(a), s.copyTo(r));
                var n = a.t, p = a[n - 1];
                if (0 != p) {
                    var s = p * (1 << this.F1) + (1 < n ? a[n - 2] >> this.F2 : 0), c = this.FV / s,
                        u = (1 << this.F1) / s, d = 1 << this.F2, h = r.t, l = h - n, f = null == e ? E() : e;
                    for (a.dlShiftTo(l, f), 0 <= r.compareTo(f) && (r[r.t++] = 1, r.subTo(f, r)), v.ONE.dlShiftTo(n, f), f.subTo(a, a); a.t < n;) a[a.t++] = 0;
                    for (; 0 <= --l;) {
                        var m = r[--h] == p ? this.DM : Math.floor(r[h] * c + (r[h - 1] + d) * u);
                        if ((r[h] += a.am(0, m, r, l, 0, n)) < m) for (a.dlShiftTo(l, f), r.subTo(f, r); r[h] < --m;) r.subTo(f, r)
                    }
                    null != e && (r.drShiftTo(n, e), o != _ && v.ZERO.subTo(e, e)), r.t = n, r.clamp(), 0 < t && r.rShiftTo(t, r), o < 0 && v.ZERO.subTo(r, r)
                }
            }
        }, v.prototype.rShiftTo = function (t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0; else {
                var i = t % this.DB, s = this.DB - i, a = (1 << i) - 1;
                e[0] = this[r] >> i;
                for (var o = r + 1; o < this.t; ++o) e[o - r - 1] |= (this[o] & a) << s, e[o - r] = this[o] >> i;
                0 < i && (e[this.t - r - 1] |= (this.s & a) << s), e.t = this.t - r, e.clamp()
            }
        }, v.prototype.drShiftTo = function (t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            e.t = Math.max(this.t - t, 0), e.s = this.s
        }, v.prototype.subTo = function (t, e) {
            for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s;) i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
            if (t.t < this.t) {
                for (i -= t.s; r < this.t;) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
                i += this.s
            } else {
                for (i += this.s; r < t.t;) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
                i -= t.s
            }
            e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : 0 < i && (e[r++] = i), e.t = r, e.clamp()
        }, v.prototype.clamp = function () {
            for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t
        }, v.prototype.modPowInt = function (t, e) {
            e = new (t < 256 || e.isEven() ? c : d)(e);
            return this.exp(t, e)
        }, v.prototype.exp = function (t, e) {
            if (4294967295 < t || t < 1) return v.ONE;
            var r, i = E(), s = E(), a = e.convert(this), o = T(t) - 1;
            for (a.copyTo(i); 0 <= --o;) e.sqrTo(i, s), 0 < (t & 1 << o) ? e.mulTo(s, a, i) : (r = i, i = s, s = r);
            return e.revert(i)
        }, v.prototype.isEven = function () {
            return 0 == (0 < this.t ? 1 & this[0] : this.s)
        }, v.prototype.compareTo = function (t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (; 0 <= --r;) if (0 != (e = this[r] - t[r])) return e;
            return 0
        }, v.prototype.am1 = function (t, e, r, i, s, a) {
            for (; 0 <= --a;) {
                var o = e * this[t++] + r[i] + s;
                s = Math.floor(o / 67108864), r[i++] = 67108863 & o
            }
            return s
        }, v.prototype.am2 = function (t, e, r, i, s, a) {
            for (var o = 32767 & e, _ = e >> 15; 0 <= --a;) {
                var n = 32767 & this[t], p = this[t++] >> 15, c = _ * n + p * o;
                s = ((n = o * n + ((32767 & c) << 15) + r[i] + (1073741823 & s)) >>> 30) + (c >>> 15) + _ * p + (s >>> 30), r[i++] = 1073741823 & n
            }
            return s
        }, v.prototype.am3 = function (t, e, r, i, s, a) {
            for (var o = 16383 & e, _ = e >> 14; 0 <= --a;) {
                var n = 16383 & this[t], p = this[t++] >> 14, c = _ * n + p * o;
                s = ((n = o * n + ((16383 & c) << 14) + r[i] + s) >> 28) + (c >> 14) + _ * p, r[i++] = 268435455 & n
            }
            return s
        }, v);

        function v(t) {
            null !== t && this.fromHexString(t)
        }

        function E() {
            return new i(null)
        }

        function T(t) {
            var e, r = 1;
            return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
        }

        e.BigInteger = i, e.nbi = E, e.nbits = T;
        for (var s = [], a = "0".charCodeAt(0), o = 0; o <= 9; ++o) s[a++] = o;
        for (a = "a".charCodeAt(0), o = 10; o < 36; ++o) s[a++] = o;
        for (a = "A".charCodeAt(0), o = 10; o < 36; ++o) s[a++] = o;

        function _(t, e) {
            e = s[t.charCodeAt(e)];
            return null == e ? -1 : e
        }

        e.intAt = _;
        var n = "0123456789abcdefghijklmnopqrstuvwxyz";

        function p(t) {
            return n.charAt(t)
        }

        e.int2char = p;
        e.b64toHex = function (t) {
            for (var e = "", r = 0, i = 0, s = 0; s < t.length && "=" != t.charAt(s); ++s) {
                var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(s));
                a < 0 || (r = 0 == r ? (e += p(a >> 2), i = 3 & a, 1) : 1 == r ? (e += p(i << 2 | a >> 4), i = 15 & a, 2) : 2 == r ? (e += p(i), e += p(a >> 2), i = 3 & a, 3) : (e += p(i << 2 | a >> 4), e += p(15 & a), 0))
            }
            return 1 == r && (e += p(i << 2)), e
        }, e.removeExtraSymbols = function (t) {
            return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "")
        };
        var c = (u.prototype.convert = function (t) {
            return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
        }, u.prototype.revert = function (t) {
            return t
        }, u.prototype.reduce = function (t) {
            t.divRemTo(this.m, null, t)
        }, u.prototype.mulTo = function (t, e, r) {
            t.multiplyTo(e, r), this.reduce(r)
        }, u.prototype.sqrTo = function (t, e) {
            t.squareTo(e), this.reduce(e)
        }, u);

        function u(t) {
            this.m = t
        }

        var d = (h.prototype.convert = function (t) {
            var e = E();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(i.ZERO) && this.m.subTo(e, e), e
        }, h.prototype.revert = function (t) {
            var e = E();
            return t.copyTo(e), this.reduce(e), e
        }, h.prototype.reduce = function (t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e],
                    i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
            }
            t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t)
        }, h.prototype.mulTo = function (t, e, r) {
            t.multiplyTo(e, r), this.reduce(r)
        }, h.prototype.sqrTo = function (t, e) {
            t.squareTo(e), this.reduce(e)
        }, h);

        function h(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
        }

        function l(t) {
            var e = E();
            return e.fromHexString(t.toString()), e
        }

        e.nbv = l, i.ZERO = l(0), i.ONE = l(1), e = "Microsoft Internet Explorer" == navigator.appName ? (i.prototype.am = i.prototype.am2, 30) : "Netscape" != navigator.appName ? (i.prototype.am = i.prototype.am1, 26) : (i.prototype.am = i.prototype.am3, 28), i.prototype.DB = e, i.prototype.DM = (1 << e) - 1, i.prototype.DV = 1 << e;
        i.prototype.FV = Math.pow(2, 52), i.prototype.F1 = 52 - e, i.prototype.F2 = 2 * e - 52
    }, 70: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = (y.hash = function (t) {
            t = y.utf8Encode(t || "");
            for (var e = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], i = (t += String.fromCharCode(128)).length / 4 + 2, s = Math.ceil(i / 16), a = new Array(s), o = 0; o < s; o++) {
                a[o] = new Array(16);
                for (var _ = 0; _ < 16; _++) a[o][_] = t.charCodeAt(64 * o + 4 * _) << 24 | t.charCodeAt(64 * o + 4 * _ + 1) << 16 | t.charCodeAt(64 * o + 4 * _ + 2) << 8 | t.charCodeAt(64 * o + 4 * _ + 3) << 0
            }
            var n = 8 * (t.length - 1) / Math.pow(2, 32), i = 8 * (t.length - 1) >>> 0;
            a[s - 1][14] = Math.floor(n), a[s - 1][15] = i;
            for (o = 0; o < s; o++) {
                for (var p = new Array(64), c = 0; c < 16; c++) p[c] = a[o][c];
                for (c = 16; c < 64; c++) p[c] = y.q1(p[c - 2]) + p[c - 7] + y.q0(p[c - 15]) + p[c - 16] >>> 0;
                for (var u = r[0], d = r[1], h = r[2], l = r[3], f = r[4], m = r[5], v = r[6], E = r[7], c = 0; c < 64; c++) {
                    var T = E + y.z1(f) + y.Ch(f, m, v) + e[c] + p[c], b = y.z0(u) + y.Maj(u, d, h);
                    E = v, v = m, m = f, f = l + T >>> 0, l = h, h = d, d = u, u = T + b >>> 0
                }
                r[0] = r[0] + u >>> 0, r[1] = r[1] + d >>> 0, r[2] = r[2] + h >>> 0, r[3] = r[3] + l >>> 0, r[4] = r[4] + f >>> 0, r[5] = r[5] + m >>> 0, r[6] = r[6] + v >>> 0, r[7] = r[7] + E >>> 0
            }
            for (var P = new Array(r.length), E = 0; E < r.length; E++) P[E] = ("00000000" + r[E].toString(16)).slice(-8);
            return P.join("")
        }, y.utf8Encode = function (e) {
            try {
                return (new TextEncoder).encode(e).reduce(function (t, e) {
                    return t + String.fromCharCode(e)
                }, "")
            } catch (t) {
                return unescape(encodeURIComponent(e))
            }
        }, y.ROTR = function (t, e) {
            return e >>> t | e << 32 - t
        }, y.z0 = function (t) {
            return y.ROTR(2, t) ^ y.ROTR(13, t) ^ y.ROTR(22, t)
        }, y.z1 = function (t) {
            return y.ROTR(6, t) ^ y.ROTR(11, t) ^ y.ROTR(25, t)
        }, y.q0 = function (t) {
            return y.ROTR(7, t) ^ y.ROTR(18, t) ^ t >>> 3
        }, y.q1 = function (t) {
            return y.ROTR(17, t) ^ y.ROTR(19, t) ^ t >>> 10
        }, y.Ch = function (t, e, r) {
            return t & e ^ ~t & r
        }, y.Maj = function (t, e, r) {
            return t & e ^ t & r ^ e & r
        }, y);

        function y() {
        }

        e.Sha256 = i
    }
}, [401]);
pbjsChunk([227], {
    625: function (t, e, n) {
        t.exports = n(626)
    }, 626: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), n.d(e, "storage", function () {
            return i
        }), e.onVisible = a, n.d(e, "spec", function () {
            return s
        }), e.sfPostMessage = m, e.iframePostMessage = w;
        e = n(1), n = n(7);

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        var i = Object(n.b)();

        function r(t, e) {
            var n = document.createElement("img");
            n.src = t, n.style.cssText = "display:none !important;", (e || document.body).appendChild(n)
        }

        function a(n, o, i, a, u) {
            function d() {
                l && m && m(), l = !1
            }

            function r(t, e, n) {
                var o = void 0 !== document.hidden && document.hidden;
                if (0 == n.width || 0 == n.height || o) return d(), 0;
                var r = n.height * u, o = n.width * u;
                return (n.top < 0 && n.bottom >= r || 0 < n.top && e - n.top >= r) && (n.left < 0 && n.right >= o || 0 < n.left && t - n.left >= o) ? !f && a ? (f = Date.now(), d()) : a && Date.now() - f < a ? d() : void (l || i(function (t) {
                    t ? l = !0 : (c && clearInterval(c), s && s())
                }, function (t) {
                    m = t
                })) : d()
            }

            var c, s, f = null, l = !1, m = null;
            p() && (s = n.context.observeIntersection(function (t) {
                t.forEach(function (t) {
                    r(t.rootBounds.width, t.rootBounds.height, t.boundingClientRect)
                })
            })), c = setInterval(function () {
                var t = n.innerHeight || document.documentElement.clientHeight,
                    e = n.innerWidth || document.documentElement.clientWidth;
                r(e, t, o.getBoundingClientRect())
            }, 100)
        }

        function f(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }

        function p() {
            return "object" === o(window.context) && ("AMP-AD" === window.context.tagName || "AMP-EMBED" === window.context.tagName)
        }

        function l(t, e, n) {
            var o, r, i = n || [];
            for (o in t) {
                var a = o;
                e && (a = e + "[" + o + "]");
                var u = t[o];
                if ("[object Array]" === Object.prototype.toString.call(u)) for (var d = 0; d < u.length; d++) {
                    var c = a + "[" + d + "]", s = u[d];
                    f(s) && l(s, c, i)
                } else f(u) && u != t ? l(u, a, i) : null == (r = u) || ("string" == typeof r ? !r || /^\s*$/.test(r) : "number" == typeof r && isNaN(r)) || i.push(a + "=" + encodeURIComponent(u))
            }
            return i.join("&")
        }

        function u(t, e, n) {
            var o = {
                referrer: document.referrer,
                tz: (new Date).getTimezoneOffset(),
                buster: (new Date).getTime(),
                secure: "https:" === document.location.protocol,
                version: 9
            };
            if (window.mantis_uuid ? o.uuid = window.mantis_uuid : !i.hasLocalStorage() || (r = i.getDataFromLocalStorage("mantis:uuid")) && (o.uuid = r), function () {
                try {
                    return window.self !== window.top && !window.mantis_link
                } catch (t) {
                    return 1
                }
            }()) o.iframe = !0; else try {
                o.title = window.top.document.title, o.referrer = window.top.document.referrer, o.url = window.top.document.location.href
            } catch (t) {
            }
            p() && (o.amp = !0, !o.url && window.context.canonicalUrl && (o.url = window.context.canonicalUrl), !o.url && window.context.location && (o.url = window.context.location.href), !o.referrer && window.context.referrer && (o.referrer = window.context.referrer)), Object.keys(e).forEach(function (t) {
                o[t] = e[t]
            });
            var r = l(o);
            return (void 0 === window.mantis_domain ? n || "https://mantodea.mantisadnetwork.com" : window.mantis_domain) + t + "?" + r
        }

        var d, c, s = {
            code: "mantis", supportedMediaTypes: ["banner"], isBidRequestValid: function (t) {
                return !(!t.params.property || !(t.params.code || t.params.zoneId || t.params.zone))
            }, buildRequests: function (t, e) {
                var n = null;
                t.some(function (t) {
                    if (t.params.property) return n = t.params.property, !0
                });
                t = {
                    measurable: !0, usp: e && e.uspConsent, bids: t.map(function (t) {
                        return {
                            bidId: t.bidId, config: t.params, sizes: t.sizes.map(function (t) {
                                return {width: t[0], height: t[1]}
                            })
                        }
                    }), property: n
                };
                return e && e.gdprConsent && e.gdprConsent.gdprApplies && (t.consent = !1), {
                    method: "GET",
                    url: u("/prebid/display", t) + "&foo",
                    data: ""
                }
            }, interpretResponse: function (e) {
                return function (t) {
                    if (!window.mantis_uuid && (window.mantis_uuid = t, i.hasLocalStorage())) try {
                        i.setDataInLocalStorage("mantis:uuid", t)
                    } catch (t) {
                    }
                }(e.body.uuid), e.body.ads.map(function (t) {
                    return {
                        requestId: t.bid,
                        cpm: t.cpm,
                        width: t.width,
                        height: t.height,
                        ad: t.html,
                        meta: {advertiserDomains: t.domains || []},
                        ttl: t.ttl || e.body.ttl || 86400,
                        creativeId: t.view,
                        netRevenue: !0,
                        currency: "USD"
                    }
                })
            }, getUserSyncs: function (t, e, n, o) {
                return t.iframeEnabled ? [{
                    type: "iframe",
                    url: u("/prebid/iframe", {gdpr: n, uspConsent: o})
                }] : t.pixelEnabled ? [{type: "image", url: u("/prebid/pixel", {gdpr: n, uspConsent: o})}] : void 0
            }
        };

        function m(t, e, n, o) {
            var r = !1;
            t.ext.register(e, n, function () {
                t.ext.inViewPercentage() < 50 || r || (r = !0, o())
            })
        }

        function w(t, e, n) {
            for (var o = document.getElementsByTagName("iframe"), r = 0; r < o.length; r++) {
                var i = o[r];
                i.name == e && a(t, i, function (t) {
                    n(), t()
                }, 1e3, .5)
            }
        }

        d = "iframe", c = function (t) {
            window.$sf ? m(window.$sf, t.width, t.height, function () {
                return r(t.pixel), 0
            }) : w(window, t.frame, function () {
                return r(t.pixel), 0
            })
        }, window.addEventListener("message", function (t) {
            t.data.mantis && t.data.type == d && c(t.data.data)
        }, !1), Object(e.registerBidder)(s)
    }
}, [625]);
pbjsChunk([199], {
    685: function (e, n, t) {
        e.exports = t(686)
    }, 686: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), t.d(n, "spec", function () {
            return o
        });
        var m = t(0), v = t(3), n = t(1), w = t(2), t = t(7), h = Object(t.b)();

        function y(e, n) {
            m.logInfo("-NoBid- " + e, n)
        }

        function s(u, c) {
            function e(e, n, t) {
                var i, o, r, d, s = {};

                function a(e) {
                    return e <= 9 ? "0" + e : "" + e
                }

                return s.sid = n, s.l = (r = "", r = (o = c) && o.refererInfo && o.refererInfo.referer ? o.refererInfo.referer : (window.context && window.context.location && window.context.location.href ? window.context : document).location.href, encodeURIComponent(r.replace(/\%/g, ""))), s.tt = encodeURIComponent(document.title), s.tt = s.tt.replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm, ""), s.a = function (e, n) {
                    var t = [];
                    if (e && e.length) {
                        if (n) {
                            var i = [];
                            e instanceof Array ? i = e : i.push(e);
                            for (var o = 0, r = n.length; o < r; o++) {
                                var d = n[o];
                                d && d.d && -1 < i.indexOf(d.d) && t.push(d)
                            }
                        }
                    } else t = n;
                    return t
                }(e, t || []), s.t = (d = new Date, i = d.getDate(), n = d.getFullYear(), o = d.getMonth() + 1, r = d.getHours(), e = d.getMinutes(), d = d.getSeconds(), n + "-" + a(o) + "-" + a(i) + " " + a(r) + ":" + a(e) + ":" + a(d)), s.tz = Math.round((new Date).getTimezoneOffset()), s.r = function () {
                    try {
                        var e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                            n = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                        return "".concat(e, "x").concat(n)
                    } catch (e) {
                        m.logWarn("Could not parse screen dimensions, error details:", e)
                    }
                }(), s.lang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage, s.ref = document.referrer, s.gdpr = (e = {}, e = (d = c) && d.gdprConsent ? {
                    consentString: d.gdprConsent.consentString,
                    consentRequired: "boolean" == typeof d.gdprConsent.gdprApplies && d.gdprConsent.gdprApplies
                } : e), s.usp = (d = "", d = (e = c) && e.uspConsent ? e.uspConsent : d), (t = (d = u) && 0 < d.length ? d[0].schain : null) && (s.schain = t), (t = !0 === v.b.getConfig("coppa") ? {coppa: !0} : u && 0 < u.length ? u[0].coppa : null) && (s.coppa = t), (t = function (e) {
                    if (m.isArray(e) && 0 < e.length) {
                        var t = [];
                        return e.forEach(function (e) {
                            var n = [];
                            e.uids && e.uids.forEach(function (e) {
                                n.push({id: e.id + ""})
                            }), e.source && 0 < n.length && t.push({source: e.source, uids: n})
                        }), t
                    }
                }(m.deepAccess(u, "0.userIdAsEids"))) && 0 < t.length && (s.eids = t), s
            }

            function n(e, n) {
                var t = function (e, n) {
                    for (var t = 0; t < n.length; t++) if (n[t].d === e) return n[t];
                    return !1
                }(e.div, n) || {};
                return e.account && (t.s = e.account), e.sizes && (t.z = e.sizes), e.div && (t.d = e.div), e.targeting ? t.g = e.targeting : t.g = {}, e.div && function (e, n, t) {
                    for (var i = e.length - 1; 0 <= i; i--) {
                        var o = e[i];
                        o[n] && o[n] === t && e.splice(i, 1)
                    }
                }(n, "d", e.div), e.sizeMapping && (t.sm = e.sizeMapping), e.siteId && (t.sid = e.siteId), e.placementId && (t.pid = e.placementId), e.ad_type && (t.at = e.ad_type), e.params && (t.params = e.params), n.push(t), n
            }

            if (void 0 !== window.nobid.refreshLimit && window.nobid.refreshLimit < window.nobid.refreshCount) return !1;
            var t = h.getCookie("_ublock");
            if (t) return y("Request blocked for user. hours: ", t), !1;
            for (var i = [], o = 0, r = [], d = 0; d < u.length; d++) {
                var s = u[d], a = s.adUnitCode;
                i.push(a);
                var p = s.sizes, o = void 0 !== s.params.siteId && s.params.siteId ? s.params.siteId : o,
                    l = s.params.placementId, g = "banner", b = m.deepAccess(s, "mediaTypes.video"),
                    f = m.deepAccess(s, "mediaTypes.video.context");
                s.mediaType !== w.d && (!b || "instream" !== f && "outstream" !== f) || (g = "video"), o && n({
                    div: a,
                    sizes: p,
                    siteId: o,
                    placementId: l,
                    ad_type: g,
                    params: s.params
                }, r)
            }
            return !!o && e(i, o, r)
        }

        function i(e, n) {
            var t, i, o, r, d;
            (t = e) && void 0 !== t.rlimit && (window.nobid.refreshLimit = t.rlimit), (i = e) && void 0 !== i.ublock && (o = "_ublock", r = "1", d = i.ublock, (i = new Date).setTime(i.getTime() + 60 * d * 60 * 1e3), i = "expires=" + i.toUTCString(), h.setCookie(o, r, i));
            for (var s = [], a = 0; e.bids && a < e.bids.length; a++) {
                var u, c = e.bids[a];
                !(c.bdrid < 100) && n && n.bidderRequest && n.bidderRequest.bids && ((u = function (e, n) {
                    for (var t = 0; t < n.length; t++) if (n[t].adUnitCode == e) return n[t];
                    return !1
                }((window.nobid.bidResponses["" + c.id] = c).divid, n.bidderRequest.bids)) && (u = {
                    requestId: u.bidId,
                    cpm: +(c.price || c.bucket || 0),
                    width: c.size.w,
                    height: c.size.h,
                    creativeId: c.creativeid || "",
                    dealId: c.dealid || "",
                    currency: "USD",
                    netRevenue: !0,
                    ttl: 300,
                    ad: c.adm,
                    mediaType: c.atype || w.b
                }, c.vastUrl && (u.vastUrl = c.vastUrl), c.vastXml && (u.vastXml = c.vastXml), c.videoCacheKey && (u.videoCacheKey = c.videoCacheKey), c.meta && (u.meta = c.meta), s.push(u)))
            }
            return s
        }

        window.nobidVersion = "1.3.0", window.nobid = window.nobid || {}, window.nobid.bidResponses = window.nobid.bidResponses || {}, window.nobid.timeoutTotal = 0, window.nobid.bidWonTotal = 0, window.nobid.refreshCount = 0, window.nobid.renderTag = function (e, n, t) {
            y("nobid.renderTag()", n);
            var i = window.nobid.bidResponses["" + n];
            if (i && i.adm2) {
                y("nobid.renderTag() found tag", n);
                i = i.adm2;
                return e.write(i), void e.close()
            }
            y("nobid.renderTag() tag NOT FOUND *ERROR*", n)
        }, window.addEventListener("message", function (e) {
            var n = "" + e[e.message ? "message" : "data"];
            "nbTagRenderer.requestAdMarkup|" === n.substring(0, "nbTagRenderer.requestAdMarkup|".length) && (y("Prebid received nbTagRenderer.requestAdMarkup event"), n = n.substring(n.indexOf("|") + 1), window.nobid && window.nobid.bidResponses && ((n = window.nobid.bidResponses["" + n]) && n.adm2 && ((n = n.adm2) && e.source.postMessage("nbTagRenderer.renderAdInSafeFrame|" + n, "*"))))
        }, !1);
        var o = {
            code: "nobid", supportedMediaTypes: [w.b, w.d], isBidRequestValid: function (e) {
                return y("isBidRequestValid", e), !!e.params.siteId
            }, buildRequests: function (e, n) {
                if (y("validBidRequests", e), !e || e.length <= 0) y("Empty validBidRequests"); else {
                    var t = s(e, n);
                    if (t) {
                        window.nobid.refreshCount++;
                        var i, o, r = JSON.stringify(t).replace(/'|&|#/g, ""),
                            d = (i = "https://ads.servenobid.com/", (o = "function" == typeof m.getParameterByName && m.getParameterByName("nobid-env")) ? "beta" == o ? i = "https://beta.servenobid.com/" : "dev" == o ? i = "//localhost:8282/" : "qa" == o && (i = "https://qa-ads.nobid.com/") : i = "https://ads.servenobid.com/", i + "adreq?cb=" + Math.floor(11e3 * Math.random())),
                            e = {};
                        return t = !0, {
                            method: "POST",
                            url: d,
                            data: r,
                            bidderRequest: n,
                            options: e = !(t = (n = n) && n.gdprConsent && n.gdprConsent.gdprApplies && 2 === n.gdprConsent.apiVersion ? !(!0 !== m.deepAccess(n.gdprConsent, "vendorData.purpose.consents.1")) : t) ? {withCredentials: !1} : e
                        }
                    }
                }
            }, interpretResponse: function (e, n) {
                return y("interpretResponse -> serverResponse", e), y("interpretResponse -> bidRequest", n), i(e.body, n)
            }, getUserSyncs: function (e, n, t, i) {
                if (e.iframeEnabled) {
                    var o = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? o += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : o += "?gdpr_consent=".concat(t.consentString)), i && (0 < o.length ? o += "&" : o += "?", o += "usp_consent=" + i), [{
                        type: "iframe",
                        url: "https://public.servenobid.com/sync.html" + o
                    }]
                }
                if (e.pixelEnabled && 0 < n.length) {
                    var r = [];
                    return n[0].body.syncs && 0 < n[0].body.syncs.length && n[0].body.syncs.forEach(function (e) {
                        r.push({type: "image", url: e})
                    }), r
                }
                return m.logWarn("-NoBid- Please enable iframe based user sync.", e), []
            }, onTimeout: function (e) {
                return window.nobid.timeoutTotal++, y("Timeout total: " + window.nobid.timeoutTotal, e), window.nobid.timeoutTotal
            }, onBidWon: function (e) {
                return window.nobid.bidWonTotal++, y("BidWon total: " + window.nobid.bidWonTotal, e), window.nobid.bidWonTotal
            }
        };
        Object(n.registerBidder)(o)
    }
}, [685]);
pbjsChunk([36], {
    20: function (e, t, r) {
        "use strict";
        t.b = function (e) {
            var t, r = [];
            for (t in e) {
                var n;
                e.hasOwnProperty(t) && ("pubProvidedId" === t ? r = r.concat(e.pubProvidedId) : (n = function (e, t) {
                    var r = d[t];
                    if (r && e) {
                        var n = {};
                        n.source = r.source;
                        var i = o.isFn(r.getValue) ? r.getValue(e) : e;
                        if (o.isStr(i)) {
                            t = {id: i, atype: r.atype};
                            return !o.isFn(r.getUidExt) || (i = r.getUidExt(e)) && (t.ext = i), n.uids = [t], !o.isFn(r.getEidExt) || (e = r.getEidExt(e)) && (n.ext = e), n
                        }
                    }
                    return null
                }(e[t], t)) && r.push(n))
            }
            return r
        }, t.a = function (e) {
            var r = [];
            return e.filter(function (e) {
                return o.isPlainObject(e.idObj) && Object.keys(e.idObj).length
            }).forEach(function (t) {
                Object.keys(t.idObj).forEach(function (e) {
                    o.deepAccess(t, "config.bidders") && Array.isArray(t.config.bidders) && o.deepAccess(d, e + ".source") && r.push({
                        source: d[e].source,
                        bidders: t.config.bidders
                    })
                })
            }), r
        };
        var o = r(0), d = {
            intentIqId: {source: "intentiq.com", atype: 1},
            pubcid: {source: "pubcid.org", atype: 1},
            tdid: {
                source: "adserver.org", atype: 1, getUidExt: function () {
                    return {rtiPartner: "TDID"}
                }
            },
            id5id: {
                getValue: function (e) {
                    return e.uid
                }, source: "id5-sync.com", atype: 1, getUidExt: function (e) {
                    if (e.ext) return e.ext
                }
            },
            parrableId: {
                source: "parrable.com", atype: 1, getValue: function (e) {
                    return e.eid || (e.ccpaOptout ? "" : null)
                }, getUidExt: function (e) {
                    e = o.pick(e, ["ibaOptout", "ccpaOptout"]);
                    if (Object.keys(e).length) return e
                }
            },
            idl_env: {source: "liveramp.com", atype: 3},
            lipb: {
                getValue: function (e) {
                    return e.lipbid
                }, source: "liveintent.com", atype: 3, getEidExt: function (e) {
                    if (Array.isArray(e.segments) && e.segments.length) return {segments: e.segments}
                }
            },
            britepoolid: {source: "britepool.com", atype: 3},
            dmdId: {source: "hcn.health", atype: 3},
            lotamePanoramaId: {source: "crwdcntrl.net", atype: 1},
            criteoId: {source: "criteo.com", atype: 1},
            merkleId: {
                source: "merkleinc.com", atype: 3, getValue: function (e) {
                    return e.id
                }, getUidExt: function (e) {
                    return e && e.keyID ? {keyID: e.keyID} : void 0
                }
            },
            netId: {source: "netid.de", atype: 1},
            sharedid: {
                source: "sharedid.org", atype: 1, getValue: function (e) {
                    return e.id
                }, getUidExt: function (e) {
                    return e && e.third ? {third: e.third} : void 0
                }
            },
            IDP: {source: "zeotap.com", atype: 1},
            haloId: {source: "audigent.com", atype: 1},
            quantcastId: {source: "quantcast.com", atype: 1},
            nextrollId: {source: "nextroll.com", atype: 1},
            idx: {source: "idx.lat", atype: 1},
            connectid: {source: "verizonmedia.com", atype: 3},
            fabrickId: {source: "neustar.biz", atype: 1},
            mwOpenLinkId: {source: "mediawallahscript.com", atype: 1},
            tapadId: {source: "tapad.com", atype: 1},
            novatiq: {
                getValue: function (e) {
                    return e.snowflake
                }, source: "novatiq.com", atype: 1
            },
            uid2: {
                source: "uidapi.com", atype: 3, getValue: function (e) {
                    return e.id
                }
            },
            deepintentId: {source: "deepintent.com", atype: 3},
            admixerId: {source: "admixer.net", atype: 3}
        }
    }, 693: function (e, t, r) {
        e.exports = r(694)
    }, 694: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.hasTypeVideo = m, t.isValid = g, r.d(t, "spec", function () {
            return v
        });
        var d = r(2), a = r(24), s = r(12), n = r(10), c = r.n(n), t = r(7), n = r(1), i = r(20);

        function o(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)), n
        }

        function u(n) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(i), !0).forEach(function (e) {
                    var t, r;
                    t = n, e = i[r = e], r in t ? Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function (e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return n
        }

        var p = "https://onetag-sys.com/usync/", l = Object(t.b)(241);

        function m(e) {
            return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.video
        }

        function g(e, t) {
            if (e === d.b) return 0 < h(t).length;
            if (e === d.d && m(t)) {
                e = t.mediaTypes.video.context;
                if ("outstream" === e || "instream" === e) return 0 < y(t).length
            }
            return !1
        }

        function f(e) {
            var t = e.params;
            this.adUnitCode = e.adUnitCode, this.bidId = e.bidId, this.bidderRequestId = e.bidderRequestId, this.auctionId = e.auctionId, this.transactionId = e.transactionId, this.pubId = t.pubId, this.ext = t.ext, t.pubClick && (this.click = t.pubClick), t.dealId && (this.dealId = t.dealId);
            e = function (e) {
                e = document.getElementById(e);
                try {
                    for (var t = e.getBoundingClientRect(), r = t.top, n = t.left, i = t.width, o = t.height, d = e.ownerDocument.defaultView, a = {
                        top: r + d.pageYOffset,
                        left: n + d.pageXOffset,
                        width: i,
                        height: o
                    }, s = d.frameElement; null != s;) {
                        var c = s.getBoundingClientRect(), u = c.top, p = c.left;
                        a.top += u + d.pageYOffset, a.left += p + d.pageXOffset, d = d.parent, s = d.frameElement
                    }
                    return a
                } catch (e) {
                    return null
                }
            }(e.adUnitCode);
            e && (this.coords = e)
        }

        function y(e) {
            e = e.mediaTypes.video.playerSize;
            return void 0 !== e && Array.isArray(e) && 0 < e.length ? b(e) : []
        }

        function h(e) {
            return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.banner && void 0 !== e.mediaTypes.banner.sizes && Array.isArray(e.mediaTypes.banner.sizes) && 0 < e.mediaTypes.banner.sizes.length ? b(e.mediaTypes.banner.sizes) : !m(e) && e.sizes && Array.isArray(e.sizes) ? b(e.sizes) : []
        }

        function b(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                t.push({width: n[0], height: n[1]})
            }
            return t
        }

        var v = {
            code: "onetag", gvlid: 241, supportedMediaTypes: [d.b, d.d], isBidRequestValid: function (e) {
                return void 0 !== e && void 0 !== e.params && "string" == typeof e.params.pubId && (g(d.b, e) || g(d.d, e))
            }, buildRequests: function (e, t) {
                var r, n = u({
                    bids: (r = (n = e).filter(m).map(function (e) {
                        var t = {};
                        return f.call(t, e), t.context = e.mediaTypes.video.context, t.mimes = e.mediaTypes.video.mimes, t.playerSize = y(e), t.protocols = e.mediaTypes.video.protocols, t.maxDuration = e.mediaTypes.video.maxduration, t.api = e.mediaTypes.video.api, t.playbackmethod = e.mediaTypes.video.playbackmethod || [], t.type = d.d, t
                    }), n = n.filter(function (e) {
                        return g(d.b, e)
                    }).map(function (e) {
                        var t = {};
                        return f.call(t, e), t.sizes = h(e), t.type = d.b, t
                    }), r.concat(n))
                }, (r = function () {
                    var t = window, r = window.parent, n = 0;
                    try {
                        for (; t !== t.parent;) (r = t.parent).location.href, t = t.parent
                    } catch (e) {
                        n = r === t.top ? 1 : 2
                    }
                    return {topmostFrame: t, currentFrameNesting: n}
                }(), n = r.topmostFrame, r = r.currentFrameNesting, {
                    location: n.location.href,
                    referrer: "" !== n.document.referrer ? n.document.referrer : null,
                    ancestorOrigin: window.location.ancestorOrigins && null != window.location.ancestorOrigins[0] ? window.location.ancestorOrigins[0] : null,
                    masked: r,
                    wWidth: n.innerWidth,
                    wHeight: n.innerHeight,
                    oWidth: n.outerWidth,
                    oHeight: n.outerHeight,
                    sWidth: n.screen.width,
                    sHeight: n.screen.height,
                    aWidth: n.screen.availWidth,
                    aHeight: n.screen.availHeight,
                    sLeft: "screenLeft" in n ? n.screenLeft : n.screenX,
                    sTop: "screenTop" in n ? n.screenTop : n.screenY,
                    xOffset: n.pageXOffset,
                    yOffset: n.pageYOffset,
                    docHidden: function (e) {
                        try {
                            return void 0 !== e.document.hidden ? e.document.hidden : void 0 !== e.document.msHidden ? e.document.msHidden : void 0 !== e.document.webkitHidden ? e.document.webkitHidden : null
                        } catch (e) {
                            return null
                        }
                    }(n),
                    docHeight: n.document.body ? n.document.body.scrollHeight : null,
                    hLength: history.length,
                    timing: function () {
                        try {
                            if (null != window.performance && null != window.performance.timing) {
                                var e = {}, t = window.performance.timing;
                                return e.pageLoadTime = t.loadEventEnd - t.navigationStart, e.connectTime = t.responseEnd - t.requestStart, e.renderTime = t.domComplete - t.domLoading, e
                            }
                        } catch (e) {
                            return null
                        }
                        return null
                    }(),
                    version: {prebid: "4.43.0", adapter: "1.1.0"}
                }));
                t && t.gdprConsent && (n.gdprConsent = {
                    consentString: t.gdprConsent.consentString,
                    consentRequired: t.gdprConsent.gdprApplies
                }), t && t.uspConsent && (n.usPrivacy = t.uspConsent), e && 0 !== e.length && e[0].userId && (n.userId = Object(i.b)(e[0].userId));
                try {
                    l.hasLocalStorage() && (n.onetagSid = l.getDataFromLocalStorage("onetag_sid"))
                } catch (e) {
                }
                return {method: "POST", url: "https://onetag-sys.com/prebid-request", data: JSON.stringify(n)}
            }, interpretResponse: function (e, t) {
                var e = e.body, i = [], o = JSON.parse(t.data);
                return !e || e.nobid && !0 === e.nobid || e.bids && Array.isArray(e.bids) && 0 !== e.bids.length && e.bids.forEach(function (t) {
                    var e, r, n = {
                        requestId: t.requestId,
                        cpm: t.cpm,
                        width: t.width,
                        height: t.height,
                        creativeId: t.creativeId,
                        dealId: null == t.dealId ? t.dealId : "",
                        currency: t.currency,
                        netRevenue: t.netRevenue || !1,
                        mediaType: t.mediaType,
                        meta: {mediaType: t.mediaType, advertiserDomains: t.adomain},
                        ttl: t.ttl || 300
                    };
                    t.mediaType === d.b ? n.ad = t.ad : t.mediaType === d.d && (e = (r = c()(o.bids, function (e) {
                        return e.bidId === t.requestId
                    })).context, r = r.adUnitCode, e === a.a ? (n.vastUrl = t.vastUrl, n.videoCacheKey = t.videoCacheKey) : e === a.b && (n.vastXml = t.ad, n.vastUrl = t.vastUrl, t.rendererUrl && (n.renderer = function (d) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = s.a.install({
                            id: d.requestId,
                            url: d.rendererUrl,
                            config: e,
                            adUnitCode: d.adUnitCode,
                            loaded: !1
                        });
                        try {
                            e.setRender(function (e) {
                                var t = e.renderer, r = e.width, n = e.height, i = e.vastXml, o = e.adUnitCode;
                                t.push(function () {
                                    window.onetag.Player.init(u(u({}, d), {}, {
                                        width: r,
                                        height: n,
                                        vastXml: i,
                                        nodeId: o,
                                        config: t.getConfig()
                                    }))
                                })
                            })
                        } catch (e) {
                        }
                        return e
                    }(u(u({}, t), {}, {adUnitCode: r}))))), i.push(n)
                }), i
            }, getUserSyncs: function (e, t, r, n) {
                var i = [], o = "";
                return r && "string" == typeof r.consentString && (o += "&gdpr_consent=" + r.consentString, "boolean" == typeof r.gdprApplies && (o += "&gdpr=" + (r.gdprApplies ? 1 : 0))), n && "string" == typeof n && (o += "&us_privacy=" + n), e.iframeEnabled && i.push({
                    type: "iframe",
                    url: p + "?cb=" + (new Date).getTime() + o
                }), e.pixelEnabled && i.push({type: "image", url: p + "?tag=img" + o}), i
            }
        };
        Object(n.registerBidder)(v)
    }
}, [693]);
pbjsChunk([193], {
    703: function (e, t, n) {
        e.exports = n(704)
    }, 704: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "USER_ID_CODE_TO_QUERY_ARG", function () {
            return f
        }), n.d(t, "spec", function () {
            return h
        });
        var i = n(3), r = n(1), p = n(0), u = n(2), t = n(13), m = n.n(t);

        function a(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, i = [], o = !0, d = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0) ;
                    } catch (e) {
                        d = !0, a = e
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (d) throw a
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var t = [u.b, u.d],
            l = ["startdelay", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playbackmethod", "api", "protocols", "boxingallowed", "linearity", "delivery", "protocol", "placement", "minbitrate", "maxbitrate"],
            d = "hb_pb", s = "3.0.3", c = "USD", f = {
                britepoolid: "britepoolid",
                criteoId: "criteoid",
                fabrickId: "nuestarid",
                haloId: "audigentid",
                id5id: "id5id",
                idl_env: "lre",
                IDP: "zeotapid",
                idxId: "idxid",
                intentIqId: "intentiqid",
                lipb: "lipbid",
                lotamePanoramaId: "lotameid",
                merkleId: "merkleid",
                netId: "netid",
                parrableId: "parrableid",
                pubcid: "pubcid",
                quantcastId: "quantcastid",
                sharedId: "sharedid",
                tapadId: "tapadid",
                tdid: "ttduuid",
                verizonMediaId: "verizonmediaid"
            }, h = {
                code: "openx", gvlid: 69, supportedMediaTypes: t, isBidRequestValid: function (e) {
                    var t = e.params.delDomain || e.params.platform;
                    return p.deepAccess(e, "mediaTypes.banner") && t ? !(!e.params.unit || !e.params.size) : !(!e.params.unit || !t)
                }, buildRequests: function (e, t) {
                    if (0 === e.length) return [];
                    var n = [], r = a(e.reduce(function (e, t) {
                        var n;
                        return n = t, (p.deepAccess(n, "mediaTypes.video") && !p.deepAccess(n, "mediaTypes.banner") || n.mediaType === u.d ? e[0] : e[1]).push(t), e
                    }, [[], []]), 2), e = r[0], r = r[1];
                    return 0 < r.length && n.push(function (e, t) {
                        var n = [], r = !1, a = b(e, t), t = p._map(e, function (e) {
                            return e.params.unit
                        });
                        a.aus = p._map(e, function (e) {
                            return p.parseSizesInput(e.params.size).join(",")
                        }).join("|"), a.divids = p._map(e, function (e) {
                            return encodeURIComponent(e.adUnitCode)
                        }).join(","), a.aucs = p._map(e, function (e) {
                            e = p.deepAccess(e, "ortb2Imp.ext.data.pbadslot");
                            return encodeURIComponent(e || "")
                        }).join(","), t.some(function (e) {
                            return e
                        }) && (a.auid = t.join(","));
                        e.some(function (e) {
                            return e.params.doNotTrack
                        }) && (a.ns = 1);
                        !0 !== i.b.getConfig("coppa") && !e.some(function (e) {
                            return e.params.coppa
                        }) || (a.tfcd = 1);
                        e.forEach(function (t) {
                            var e;
                            t.params.customParams ? (e = p._map(Object.keys(t.params.customParams), function (e) {
                                return function (e, t) {
                                    t = t[e];
                                    p.isArray(t) && (t = t.join(","));
                                    return (e.toLowerCase() + "=" + t.toLowerCase()).replace("+", ".").replace("/", "_")
                                }(e, t.params.customParams)
                            }), e = window.btoa(e.join("&")), r = !0, n.push(e)) : n.push("")
                        }), r && (a.tps = n.join(","));
                        return v(a, u.b, e), {
                            method: "GET",
                            url: a.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(e[0].params.delDomain, "/w/1.0/arj"),
                            data: a,
                            payload: {bids: e, startTime: new Date}
                        }
                    }(r, t)), 0 < e.length && e.forEach(function (e) {
                        n.push(function (e, t) {
                            t = function (e, t) {
                                var n, r, a = p.deepAccess(e, "mediaTypes.video"), i = b([e], t),
                                    o = p.deepAccess(e, "params.video") || {},
                                    d = p.deepAccess(e, "mediaTypes.video.context"),
                                    t = p.deepAccess(e, "mediaTypes.video.playerSize");
                                p.isArray(e.sizes) && 2 === e.sizes.length && !p.isArray(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), r = parseInt(e.sizes[1], 10)) : p.isArray(e.sizes) && p.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), r = parseInt(e.sizes[0][1], 10)) : p.isArray(t) && 2 === t.length && (n = parseInt(t[0], 10), r = parseInt(t[1], 10));
                                var s = {w: n, h: r}, c = e.params.video || e.params.openrtb || {};
                                c.openrtb && (c = c.openrtb);
                                p.isArray(c.imp) && (c = c.imp[0].video);
                                Object.keys(c).filter(function (e) {
                                    return m()(l, e)
                                }).forEach(function (e) {
                                    return s[e] = c[e]
                                }), Object.keys(a).filter(function (e) {
                                    return m()(l, e)
                                }).forEach(function (e) {
                                    return s[e] = a[e]
                                });
                                t = {imp: [{video: s}]};
                                i.openrtb = JSON.stringify(t), i.auid = e.params.unit, i.vwd = n || o.vwd, i.vht = r || o.vht, "outstream" === d && (i.vos = "101");
                                o.mimes && (i.vmimes = o.mimes);
                                e.params.test && (i.vtest = 1);
                                o = p.deepAccess(e, "ortb2Imp.ext.data.pbadslot");
                                o && (i.aucs = encodeURIComponent(o));
                                return v(i, u.d, [e]), i
                            }(e, t);
                            return {
                                method: "GET",
                                url: t.ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(e.params.delDomain, "/v/1.0/avjp"),
                                data: t,
                                payload: {bid: e, startTime: new Date}
                            }
                        }(e, t))
                    }), n
                }, interpretResponse: function (e, t) {
                    e = e.body;
                    return ((/avjp$/.test(t.url) ? u.d : u.b) === u.d ? function (e, t) {
                        var n = t.bid, r = (t.startTime, []);
                        {
                            var a;
                            void 0 !== e && "" !== e.vastUrl && 0 < e.pub_rev && (a = p.parseUrl(e.vastUrl).search || {}, (t = {}).requestId = n.bidId, e.deal_id && (t.dealId = e.deal_id), t.ttl = 300, t.netRevenue = !0, t.currency = e.currency, t.cpm = parseInt(e.pub_rev, 10) / 1e3, t.width = parseInt(e.width, 10), t.height = parseInt(e.height, 10), t.creativeId = e.adid, t.vastUrl = e.vastUrl, t.mediaType = u.d, e.ph = a.ph, e.colo = a.colo, e.ts = a.ts, r.push(t))
                        }
                        return r
                    } : function (e, t) {
                        for (var n = t.bids, r = (t.startTime, e.ads.ad), a = [], i = 0; i < r.length; i++) {
                            var o = r[i], d = parseInt(o.idx, 10), s = {};
                            s.requestId = n[d].bidId, o.pub_rev && (s.cpm = Number(o.pub_rev) / 1e3, (d = o.creative[0]) && (s.width = d.width, s.height = d.height), s.creativeId = d.id, s.ad = o.html, o.deal_id && (s.dealId = o.deal_id), s.ttl = 300, s.netRevenue = !0, s.currency = o.currency, o.tbd && (s.tbd = o.tbd), s.ts = o.ts, s.meta = {}, o.brand_id && (s.meta.brandId = o.brand_id), o.adomain && 0 < length(o.adomain) ? s.meta.advertiserDomains = o.adomain : s.meta.advertiserDomains = [], o.adv_id && (s.meta.dspid = o.adv_id), a.push(s))
                        }
                        return a
                    })(e, t.payload)
                }, getUserSyncs: function (e, t, n, r) {
                    if (e.iframeEnabled || e.pixelEnabled) return [{
                        type: e.iframeEnabled ? "iframe" : "image",
                        url: p.deepAccess(t, "0.body.ads.pixels") || p.deepAccess(t, "0.body.pixels") || function (e, t) {
                            var n = [];
                            e && (n.push("gdpr=" + (e.gdprApplies ? 1 : 0)), n.push("gdpr_consent=" + encodeURIComponent(e.consentString || "")));
                            t && n.push("us_privacy=" + encodeURIComponent(t));
                            return "".concat("https://u.openx.net/w/1.0/pd").concat(0 < n.length ? "?" + n.join("&") : "")
                        }(n, r)
                    }]
                }, transformBidParams: function (e, t) {
                    return p.convertTypes({unit: "string", customFloor: "number"}, e)
                }
            };

        function b(e, t) {
            var r, n = p.inIframe(), a = {
                ju: i.b.getConfig("pageUrl") || t.refererInfo.referer,
                ch: document.charSet || document.characterSet,
                res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                ifr: n,
                tz: (new Date).getTimezoneOffset(),
                tws: function (e) {
                    var t, n, r = window, a = document, i = a.documentElement;
                    if (e) {
                        try {
                            r = window.top, a = window.top.document
                        } catch (e) {
                            return
                        }
                        i = a.documentElement, n = a.body, t = r.innerWidth || i.clientWidth || n.clientWidth, n = r.innerHeight || i.clientHeight || n.clientHeight
                    } else i = a.documentElement, t = r.innerWidth || i.clientWidth, n = r.innerHeight || i.clientHeight;
                    return "".concat(t, "x").concat(n)
                }(n),
                be: 1,
                bc: e[0].params.bc || "".concat(d, "_").concat(s),
                dddid: p._map(e, function (e) {
                    return e.transactionId
                }).join(","),
                nocache: (new Date).getTime()
            };
            return e[0].params.platform && (a.ph = e[0].params.platform), t.gdprConsent && (void 0 !== (n = t.gdprConsent).consentString && (a.gdpr_consent = n.consentString), void 0 !== n.gdprApplies && (a.gdpr = n.gdprApplies ? 1 : 0), "iab" === i.b.getConfig("consentManagement.cmpApi") && (a.x_gdpr_f = 1)), t && t.uspConsent && (a.us_privacy = t.uspConsent), p.deepAccess(e[0], "crumbs.pubcid") && p.deepSetValue(e[0], "userId.pubcid", p.deepAccess(e[0], "crumbs.pubcid")), r = a, t = e[0].userId, p._each(t, function (e, t) {
                var n = f[t];
                if (f.hasOwnProperty(t)) switch (t) {
                    case"lipb":
                        r[n] = e.lipbid;
                        break;
                    case"parrableId":
                        r[n] = e.eid;
                        break;
                    case"id5id":
                        r[n] = e.uid;
                        break;
                    default:
                        r[n] = e
                }
            }), a = r, e[0].schain && (a.schain = (e = e[0].schain, "".concat(e.ver, ",").concat(e.complete, "!").concat(function (e) {
                var n = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function (t) {
                    return n.map(function (e) {
                        return t[e] || ""
                    }).join(",")
                }).join("!")
            }(e.nodes)))), a
        }

        function v(e, t, n) {
            var r = [], a = !1;
            n.forEach(function (e) {
                e = function (e, t) {
                    var n = {}, r = i.b.getConfig("currency.adServerCurrency") || c;
                    "function" == typeof e.getFloor && (n = e.getFloor({currency: r, mediaType: t, size: "*"}));
                    e = n.floor || e.params.customFloor || 0;
                    return Math.round(1e3 * e)
                }(e, t);
                e ? (r.push(e), a = !0) : r.push(0)
            }), a && (e.aumfs = r.join(","))
        }

        Object(r.registerBidder)(h)
    }
}, [703]);
pbjsChunk([145], {
    828: function (e, t, r) {
        e.exports = r(829)
    }, 829: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), r.d(t, "spec", function () {
            return h
        }), t.hasVideoMediaType = C, r.d(t, "resetRubiConf", function () {
            return O
        }), t.masSizeOrdering = w, t.determineRubiconVideoSizeId = k, t.getPriceGranularity = R, t.hasValidVideoParams = z, t.hasValidSupplyChainParams = E, t.encodeParam = T, t.resetUserSync = function () {
            U = !1
        };
        var p = r(0), n = r(1), d = r(3), l = r(2), t = r(10), c = r.n(t), o = r(12), u = r(16);

        function i(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)), n
        }

        function m(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? i(Object(r), !0).forEach(function (e) {
                    b(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }

        function f() {
            return (f = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, o = [], a = !0, s = !1;
                    try {
                        for (r = r.call(e); !(a = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, i = e
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                    return o
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n
        }

        function b(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var v = {};
        d.b.getConfig("rubicon", function (e) {
            p.mergeDeep(v, e.rubicon)
        });
        var x = {
            1: "468x60",
            2: "728x90",
            5: "120x90",
            7: "125x125",
            8: "120x600",
            9: "160x600",
            10: "300x600",
            13: "200x200",
            14: "250x250",
            15: "300x250",
            16: "336x280",
            17: "240x400",
            19: "300x100",
            31: "980x120",
            32: "250x360",
            33: "180x500",
            35: "980x150",
            37: "468x400",
            38: "930x180",
            39: "750x100",
            40: "750x200",
            41: "750x300",
            42: "2x4",
            43: "320x50",
            44: "300x50",
            48: "300x300",
            53: "1024x768",
            54: "300x1050",
            55: "970x90",
            57: "970x250",
            58: "1000x90",
            59: "320x80",
            60: "320x150",
            61: "1000x1000",
            64: "580x500",
            65: "640x480",
            66: "930x600",
            67: "320x480",
            68: "1800x1000",
            72: "320x320",
            73: "320x160",
            78: "980x240",
            79: "980x300",
            80: "980x400",
            83: "480x300",
            85: "300x120",
            90: "548x150",
            94: "970x310",
            95: "970x100",
            96: "970x210",
            101: "480x320",
            102: "768x1024",
            103: "480x280",
            105: "250x800",
            108: "320x240",
            113: "1000x300",
            117: "320x100",
            125: "800x250",
            126: "200x600",
            144: "980x600",
            145: "980x150",
            152: "1000x250",
            156: "640x320",
            159: "320x250",
            179: "250x600",
            195: "600x300",
            198: "640x360",
            199: "640x200",
            213: "1030x590",
            214: "980x360",
            221: "1x1",
            229: "320x180",
            230: "2000x1400",
            232: "580x400",
            234: "6x6",
            251: "2x2",
            256: "480x820",
            257: "400x600",
            258: "500x200",
            259: "998x200",
            264: "970x1000",
            265: "1920x1080",
            274: "1800x200",
            278: "320x500",
            282: "320x400",
            288: "640x380",
            548: "500x1000",
            550: "980x480",
            552: "300x200",
            558: "640x640"
        };
        p._each(x, function (e, t) {
            return x[e] = t
        });
        var h = {
            code: "rubicon", gvlid: 52, supportedMediaTypes: [l.b, l.d], isBidRequestValid: function (e) {
                if ("object" !== y(e.params)) return !1;
                for (var t = 0, r = ["accountId", "siteId", "zoneId"]; t < r.length; t++) if (e.params[r[t]] = parseInt(e.params[r[t]]), isNaN(e.params[r[t]])) return p.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                var n = I(e, !0);
                return !!n && ("video" !== n || z(e))
            }, buildRequests: function (e, c) {
                var i, t = e.filter(function (e) {
                    return "video" === I(e)
                }).map(function (e) {
                    e.startTime = (new Date).getTime();
                    var t = {
                        id: e.transactionId,
                        test: d.b.getConfig("debug") ? 1 : 0,
                        cur: ["USD"],
                        source: {tid: e.transactionId},
                        tmax: c.timeout,
                        imp: [{
                            exp: d.b.getConfig("s2sConfig.defaultTtl"),
                            id: e.adUnitCode,
                            secure: 1,
                            ext: b({}, e.bidder, e.params),
                            video: p.deepAccess(e, "mediaTypes.video") || {}
                        }],
                        ext: {
                            prebid: {
                                channel: {name: "pbjs", version: pbjs.version},
                                cache: {vastxml: {returnCreative: !0 === v.returnVast}},
                                targeting: {includewinners: !0, includebidderkeys: !1, pricegranularity: R(d.b)},
                                bidders: {rubicon: {integration: v.int_type || "pbjs"}}
                            }
                        }
                    };
                    "rubicon" !== e.bidder && (t.ext.prebid.aliases = b({}, e.bidder, "rubicon"));
                    var r, n, i, o, a = Object(u.a)().installedModules;
                    if (!a || a.length && -1 === a.indexOf("rubiconAnalyticsAdapter") || p.deepSetValue(t, "ext.prebid.analytics", {rubicon: {"client-analytics": !0}}), "function" != typeof e.getFloor || v.disableFloors) o = parseFloat(p.deepAccess(e, "params.floor")); else {
                        try {
                            r = e.getFloor({currency: "USD", mediaType: "video", size: j(e, "video")})
                        } catch (e) {
                            p.logError("Rubicon: getFloor threw an error: ", e)
                        }
                        o = "object" !== y(r) || "USD" !== r.currency || isNaN(parseInt(r.floor)) ? void 0 : parseFloat(r.floor)
                    }
                    isNaN(o) || (t.imp[0].bidfloor = o), t.imp[0].ext[e.bidder].video.size_id = k(e), i = e, o = c, (n = t) && ("object" === y(d.b.getConfig("app")) ? n.app = d.b.getConfig("app") : n.site = {page: _(i, o)}, "object" === y(d.b.getConfig("device")) && (n.device = d.b.getConfig("device")), i.params.video.language && ["site", "device"].forEach(function (e) {
                        n[e] && (n[e].content = f({language: i.params.video.language}, n[e].content))
                    })), function (e, t) {
                        "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = t.params.video.skip);
                        "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = t.params.video.skipdelay);
                        "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === t.params.position ? e.imp[0].video.pos = 1 : "btf" === t.params.position && (e.imp[0].video.pos = 3));
                        t = j(t, "video");
                        e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                    }(t, e), c.gdprConsent && ("boolean" == typeof c.gdprConsent.gdprApplies && (s = c.gdprConsent.gdprApplies ? 1 : 0), p.deepSetValue(t, "regs.ext.gdpr", s), p.deepSetValue(t, "user.ext.consent", c.gdprConsent.consentString)), c.uspConsent && p.deepSetValue(t, "regs.ext.us_privacy", c.uspConsent);
                    var s = p.deepAccess(c, "bids.0.userIdAsEids");
                    s && s.length && p.deepSetValue(t, "user.ext.eids", s);
                    s = d.b.getConfig("user.id");
                    s && p.deepSetValue(t, "user.id", s), !0 === d.b.getConfig("coppa") && p.deepSetValue(t, "regs.coppa", 1), e.schain && E(e.schain) && p.deepSetValue(t, "source.ext.schain", e.schain);
                    s = d.b.getConfig("multibid");
                    return s && p.deepSetValue(t, "ext.prebid.multibid", s.reduce(function (e, t) {
                        var r = {};
                        return Object.keys(t).forEach(function (e) {
                            r[e.toLowerCase()] = t[e]
                        }), e.push(r), e
                    }, [])), S(e, l.d, t), e.storedAuctionResponse && p.deepSetValue(t.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()), p.deepSetValue(t.imp[0], "ext.prebid.auctiontimestamp", c.auctionStart), {
                        method: "POST",
                        url: "https://".concat(v.videoHost || "prebid-server", ".rubiconproject.com/openrtb2/auction"),
                        data: t,
                        bidRequest: e
                    }
                });
                return !0 !== v.singleRequest ? t.concat(e.filter(function (e) {
                    return "banner" === I(e)
                }).map(function (e) {
                    var n = h.createSlotParams(e, c);
                    return {
                        method: "GET",
                        url: "https://".concat(v.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                        data: h.getOrderedParams(n).reduce(function (e, t) {
                            var r = n[t];
                            return p.isStr(r) && "" !== r || p.isNumber(r) ? "".concat(e).concat(T(t, r), "&") : e
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                })) : (i = e.filter(function (e) {
                    return "banner" === I(e)
                }).reduce(function (e, t) {
                    return (e[t.params.siteId] = e[t.params.siteId] || []).push(t), e
                }, {}), t.concat(Object.keys(i).reduce(function (t, e) {
                    var r, n;
                    return r = i[e], n = 10, r.map(function (e, t) {
                        return t % n == 0 ? r.slice(t, t + n) : null
                    }).filter(function (e) {
                        return e
                    }).forEach(function (e) {
                        var n = h.combineSlotUrlParams(e.map(function (e) {
                            return h.createSlotParams(e, c)
                        }));
                        t.push({
                            method: "GET",
                            url: "https://".concat(v.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                            data: h.getOrderedParams(n).reduce(function (e, t) {
                                var r = n[t];
                                return p.isStr(r) && "" !== r || p.isNumber(r) ? "".concat(e).concat(T(t, r), "&") : e
                            }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                            bidRequest: e
                        })
                    }), t
                }, [])))
            }, getOrderedParams: function (e) {
                var t = /^tg_v/, r = /^tg_i/, n = /^eid_|^tpid_/,
                    i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain"].concat(Object.keys(e).filter(function (e) {
                        return n.test(e)
                    })).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter(function (e) {
                        return t.test(e)
                    })).concat(Object.keys(e).filter(function (e) {
                        return r.test(e)
                    })).concat(["tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter(function (e) {
                    return -1 === i.indexOf(e)
                }))
            }, combineSlotUrlParams: function (i) {
                if (1 === i.length) return i[0];
                var n = i.reduce(function (t, r, n) {
                    return Object.keys(r).forEach(function (e) {
                        t.hasOwnProperty(e) || (t[e] = new Array(i.length)), t[e].splice(n, 1, r[e])
                    }), t
                }, {}), o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(n).forEach(function (e) {
                    var t = n[e].join(";"), r = t.match(o);
                    n[e] = r ? r[1] : t
                }), n
            }, createSlotParams: function (e, t) {
                e.startTime = (new Date).getTime();
                var r, n = e.params, i = j(e, "banner"), o = g(n.latLong || [], 2), a = o[0], o = o[1], s = {
                    account_id: n.accountId,
                    site_id: n.siteId,
                    zone_id: n.zoneId,
                    size_id: i[0],
                    alt_size_ids: i.slice(1).join(",") || void 0,
                    rp_floor: .01 <= (n.floor = parseFloat(n.floor)) ? n.floor : void 0,
                    rp_secure: "1",
                    tk_flint: "".concat(v.int_type || "pbjs_lite", "_v4.43.0"),
                    "x_source.tid": e.transactionId,
                    "x_source.pchain": n.pchain,
                    p_screen_res: [window.screen.width, window.screen.height].join("x"),
                    tk_user_key: n.userId,
                    "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                    "p_geo.longitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                    "tg_fl.eid": e.code,
                    rf: _(e, t)
                };
                if ("function" == typeof e.getFloor && !v.disableFloors) {
                    try {
                        r = e.getFloor({currency: "USD", mediaType: "banner", size: "*"})
                    } catch (e) {
                        p.logError("Rubicon: getFloor threw an error: ", e)
                    }
                    s.rp_hard_floor = "object" !== y(r) || "USD" !== r.currency || isNaN(parseInt(r.floor)) ? void 0 : r.floor
                }
                s.p_pos = "atf" === n.position || "btf" === n.position ? n.position : "";
                n = d.b.getConfig("user.id");
                return n && (s.ppuid = n), e.userIdAsEids && e.userIdAsEids.forEach(function (t) {
                    try {
                        var e;
                        "adserver.org" === t.source ? (s.tpid_tdid = t.uids[0].id, s["eid_adserver.org"] = t.uids[0].id) : "liveintent.com" === t.source ? (s["tpid_liveintent.com"] = t.uids[0].id, s["eid_liveintent.com"] = t.uids[0].id, t.ext && Array.isArray(t.ext.segments) && t.ext.segments.length && (s["tg_v.LIseg"] = t.ext.segments.join(","))) : "liveramp.com" === t.source ? s.x_liverampidl = t.uids[0].id : "sharedid.org" === t.source ? s["eid_sharedid.org"] = "".concat(t.uids[0].id, "^").concat(t.uids[0].atype, "^").concat(t.uids[0].ext && t.uids[0].ext.third || "") : "id5-sync.com" === t.source ? s["eid_id5-sync.com"] = "".concat(t.uids[0].id, "^").concat(t.uids[0].atype, "^").concat(t.uids[0].ext && t.uids[0].ext.linkType || "") : s["eid_".concat(t.source)] = "".concat(t.uids[0].id, "^").concat(t.uids[0].atype || ""), s.ppuid || (e = c()(t.uids, function (e) {
                            return e.ext && "ppuid" === e.ext.stype
                        })) && e.id && (s.ppuid = e.id)
                    } catch (e) {
                        p.logWarn("Rubicon: error reading eid:", t, e)
                    }
                }), t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (s.gdpr = Number(t.gdprConsent.gdprApplies)), s.gdpr_consent = t.gdprConsent.consentString), t.uspConsent && (s.us_privacy = encodeURIComponent(t.uspConsent)), s.rp_maxbids = t.bidLimit || 1, S(e, l.b, s), !0 === d.b.getConfig("coppa") && (s.coppa = 1), e.schain && E(e.schain) && (s.rp_schain = h.serializeSupplyChain(e.schain)), s
            }, serializeSupplyChain: function (e) {
                if (!E(e)) return "";
                var t = e.ver, r = e.complete, e = e.nodes;
                return "".concat(t, ",").concat(r, "!").concat(h.serializeSupplyChainNodes(e))
            }, serializeSupplyChainNodes: function (e) {
                var r = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function (t) {
                    return r.map(function (e) {
                        return encodeURIComponent(t[e] || "")
                    }).join(",")
                }).join("!")
            }, interpretResponse: function (s, e) {
                var c = e.bidRequest;
                if (!(s = s.body) || "object" !== y(s)) return [];
                if (s.seatbid) {
                    var t = p.deepAccess(s, "ext.errors.rubicon");
                    Array.isArray(t) && 0 < t.length && p.logWarn("Rubicon: Error in video response");
                    var i = [];
                    return s.seatbid.forEach(function (n) {
                        (n.bid || []).forEach(function (e) {
                            var t = {
                                requestId: c.bidId,
                                currency: s.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: !1 !== v.netRevenue,
                                width: e.w || p.deepAccess(c, "mediaTypes.video.w") || p.deepAccess(c, "params.video.playerWidth"),
                                height: e.h || p.deepAccess(c, "mediaTypes.video.h") || p.deepAccess(c, "params.video.playerHeight")
                            };
                            e.id && (t.seatBidId = e.id), e.dealid && (t.dealId = e.dealid), e.adomain && p.deepSetValue(t, "meta.advertiserDomains", Array.isArray(e.adomain) ? e.adomain : [e.adomain]), p.deepAccess(e, "ext.bidder.rp.advid") && p.deepSetValue(t, "meta.advertiserId", e.ext.bidder.rp.advid);
                            var r = p.deepAccess(s, "ext.responsetimemillis.rubicon");
                            c && r && (c.serverResponseTimeMs = r), p.deepAccess(e, "ext.prebid.type") === l.d ? (t.mediaType = l.d, p.deepSetValue(t, "meta.mediaType", l.d), (r = p.deepAccess(e, "ext.prebid.targeting")) && "object" === y(r) && (t.adserverTargeting = r), e.ext.prebid.cache && "object" === y(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (t.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, t.vastUrl = e.ext.prebid.cache.vastXml.url) : r && r.hb_uuid && r.hb_cache_host && r.hb_cache_path && (t.videoCacheKey = r.hb_uuid, t.vastUrl = "https://".concat(r.hb_cache_host).concat(r.hb_cache_path, "?uuid=").concat(r.hb_uuid)), e.adm && (t.vastXml = e.adm), e.nurl && (t.vastUrl = e.nurl), !t.vastUrl && e.nurl && (t.vastUrl = e.nurl), "outstream" === p.deepAccess(c, "mediaTypes.video.context").toLowerCase() && (t.renderer = function (e) {
                                e = o.a.install({
                                    id: e.adId,
                                    url: v.rendererUrl || "https://video-outstream.rubiconproject.com/apex-2.0.0.js",
                                    config: v.rendererConfig || {},
                                    loaded: !1,
                                    adUnitCode: e.adUnitCode
                                });
                                try {
                                    e.setRender(A)
                                } catch (e) {
                                    p.logWarn("Prebid Error calling setRender on renderer", e)
                                }
                                return e
                            }(t))) : p.logWarn("Rubicon: video response received non-video media type"), i.push(t)
                        })
                    }), i
                }
                var d, t = s.ads, u = 0;
                return "object" !== y(c) || Array.isArray(c) || "video" !== I(c) || "object" !== y(t) || (t = t[c.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function (e, t, r) {
                    if (t.impression_id && d === t.impression_id ? u++ : d = t.impression_id, "ok" !== t.status) return e;
                    var n, i, o, a = Array.isArray(c) ? c[r - u] : c;
                    return a && "object" === y(a) ? (n = {
                        requestId: a.bidId,
                        currency: "USD",
                        creativeId: t.creative_id || "".concat(t.network || "", "-").concat(t.advertiser || ""),
                        cpm: t.cpm || 0,
                        dealId: t.deal,
                        ttl: 300,
                        netRevenue: !1 !== v.netRevenue,
                        rubicon: {advertiserId: t.advertiser, networkId: t.network},
                        meta: {advertiserId: t.advertiser, networkId: t.network, mediaType: l.b}
                    }, t.creative_type && (n.mediaType = t.creative_type), t.adomain && (n.meta.advertiserDomains = Array.isArray(t.adomain) ? t.adomain : [t.adomain]), t.creative_type === l.d ? (n.width = a.params.video.playerWidth, n.height = a.params.video.playerHeight, n.vastUrl = t.creative_depot_url, n.impression_id = t.impression_id, n.videoCacheKey = t.impression_id) : (n.ad = (i = t.script, o = t.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(o, "'>\n<script type='text/javascript'>").concat(i, "<\/script>\n</div>\n</body>\n</html>")), i = g(x[t.size_id].split("x").map(function (e) {
                        return Number(e)
                    }), 2), n.width = i[0], n.height = i[1]), n.rubiconTargeting = (Array.isArray(t.targeting) ? t.targeting : []).reduce(function (e, t) {
                        return e[t.key] = t.values[0], e
                    }, {rpfl_elemid: a.adUnitCode}), e.push(n)) : p.logError("Rubicon: bidRequest undefined at index position:".concat(r), c, s), e
                }, []).sort(function (e, t) {
                    return (t.cpm || 0) - (e.cpm || 0)
                })
            }, getUserSyncs: function (e, t, r, n) {
                if (!U && e.iframeEnabled) {
                    e = "";
                    return r && "string" == typeof r.consentString && ("boolean" == typeof r.gdprApplies ? e += "?gdpr=".concat(Number(r.gdprApplies), "&gdpr_consent=").concat(r.consentString) : e += "?gdpr_consent=".concat(r.consentString)), n && (e += "".concat(e ? "&" : "?", "us_privacy=").concat(encodeURIComponent(n))), U = !0, {
                        type: "iframe",
                        url: "https://".concat(v.syncHost || "eus", ".rubiconproject.com/usync.html") + e
                    }
                }
            }, transformBidParams: function (e, t) {
                return p.convertTypes({accountId: "number", siteId: "number", zoneId: "number"}, e)
            }
        };

        function _(e, t) {
            var r = d.b.getConfig("pageUrl"), r = e.params.referrer || r || t.refererInfo.referer;
            return e.params.secure ? r.replace(/^http:/i, "https:") : r
        }

        function A(e) {
            var t, r = document.getElementById(e.adUnitCode);
            (t = (t = r).querySelector("div[id^='google_ads']")) && t.style.setProperty("display", "none"), (r = (r = (r = r).querySelector("script[id^='sas_script']")) && r.nextSibling) && "iframe" === r.localName && r.style.setProperty("display", "none");
            var n = e.renderer.getConfig();
            e.renderer.push(function () {
                window.MagniteApex.renderAd({
                    width: e.width,
                    height: e.height,
                    vastUrl: e.vastUrl,
                    placement: {
                        attachTo: "#".concat(e.adUnitCode),
                        align: n.align || "center",
                        position: n.position || "append"
                    },
                    closeButton: n.closeButton || !1,
                    label: n.label || void 0,
                    collapse: n.collapse || !0
                })
            })
        }

        function j(e, t) {
            var r = e.params;
            if ("video" === t) {
                var n = [];
                return r.video && r.video.playerWidth && r.video.playerHeight ? n = [r.video.playerWidth, r.video.playerHeight] : Array.isArray(p.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? n = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (n = e.sizes[0]), n
            }
            n = [];
            return Array.isArray(r.sizes) ? n = r.sizes : void 0 !== p.deepAccess(e, "mediaTypes.banner.sizes") ? n = s(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = s(e.sizes) : p.logWarn("Rubicon: no sizes are setup or found"), w(n)
        }

        function S(e, t, i) {
            var r = {user: {ext: {data: m({}, e.params.visitor)}}, site: {ext: {data: m({}, e.params.inventory)}}};
            e.params.keywords && (r.site.keywords = p.isArray(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);

            function n(e, t, r) {
                var n = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3], e = function (e, t, r) {
                        if ("data" === t && Array.isArray(e)) return e.filter(function (e) {
                            return e.segment && p.deepAccess(e, "ext.segtax") && s[r] && -1 !== s[r].indexOf(p.deepAccess(e, "ext.segtax"))
                        }).map(function (e) {
                            e = e.segment.filter(function (e) {
                                return e.id
                            }).reduce(function (e, t) {
                                return e.push(t.id), e
                            }, []);
                            if (0 < e.length) return e.toString()
                        }).toString();
                        if ("object" !== y(e) || Array.isArray(e)) {
                            if (void 0 !== e) return (Array.isArray(e) ? e.filter(function (e) {
                                return "object" !== y(e) && void 0 !== e ? e.toString() : void p.logWarn("Rubicon: Filtered value: ", e, "for key", t, ": Expected value to be string, integer, or an array of strings/ints")
                            }) : e).toString()
                        } else p.logWarn("Rubicon: Filtered FPD key: ", t, ": Expected value to be string, integer, or an array of strings/ints")
                    }(e, r, t),
                    r = c[r] && n ? "".concat(c[r]) : "data" === r ? "".concat(c[t], "iab") : "".concat(c[t]).concat(r);
                i[r] = i[r] ? i[r].concat(",", e) : e
            }

            var o = p.mergeDeep({}, d.b.getConfig("ortb2") || {}, r), a = p.deepAccess(e.ortb2Imp, "ext.data") || {},
                s = {user: [3], site: [1, 2]}, c = {
                    user: "tg_v.",
                    site: "tg_i.",
                    adserver: "tg_i.dfp_ad_unit_code",
                    pbadslot: "tg_i.pbadslot",
                    keywords: "kw"
                };
            Object.keys(a).forEach(function (t) {
                "adserver" === t ? ["name", "adslot"].forEach(function (e) {
                    a[t][e] && (a[t][e] = a[t][e].toString().replace(/^\/+/, ""))
                }) : "pbadslot" === t && (a[t] = a[t].toString().replace(/^\/+/, ""))
            }), t === l.b ? (["site", "user"].forEach(function (t) {
                Object.keys(o[t]).forEach(function (e) {
                    "site" === t && "content" === e && o[t][e].data ? n(o[t][e].data, t, "data") : "ext" !== e ? n(o[t][e], t, e) : o[t][e].data && Object.keys(o[t].ext.data).forEach(function (e) {
                        n(o[t].ext.data[e], t, e, !1)
                    })
                })
            }), Object.keys(a).forEach(function (e) {
                "adserver" === e ? n(a[e].adslot, name, e) : n(a[e], "site", e)
            })) : (Object.keys(a).length && p.mergeDeep(i.imp[0].ext, {data: a}), p.mergeDeep(i, o))
        }

        function s(e) {
            return p.parseSizesInput(e).reduce(function (e, t) {
                t = parseInt(x[t], 10);
                return t && e.push(t), e
            }, [])
        }

        function C(e) {
            return "object" === y(p.deepAccess(e, "params.video")) && void 0 !== p.deepAccess(e, "mediaTypes.".concat(l.d))
        }

        function I(e, t) {
            t = 1 < arguments.length && void 0 !== t && t;
            if (C(e)) if (-1 !== ["outstream", "instream"].indexOf(p.deepAccess(e, "mediaTypes.".concat(l.d, ".context")))) {
                if (!(j(e, "video").length < 2)) return t && p.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video";
                t && p.logError("Rubicon: could not determine the playerSize of the video")
            } else t && p.logError("Rubicon: mediaTypes.video.context must be outstream or instream"); else {
                if (0 !== j(e, "banner").length) return t && p.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner";
                t && p.logError("Rubicon: could not determine the sizes for banner request")
            }
        }

        var O = function () {
            return v = {}
        };

        function w(e) {
            var i = [15, 2, 9];
            return e.sort(function (e, t) {
                var r = i.indexOf(e), n = i.indexOf(t);
                return -1 < r || -1 < n ? -1 === r ? 1 : -1 === n ? -1 : r - n : e - t
            })
        }

        function k(e) {
            var t = parseInt(p.deepAccess(e, "params.video.size_id"));
            return isNaN(t) ? "outstream" === p.deepAccess(e, "mediaTypes.".concat(l.d, ".context")) ? 203 : 201 : t
        }

        function R(e) {
            return {
                ranges: {
                    low: [{max: 5, increment: .5}],
                    medium: [{max: 20, increment: .1}],
                    high: [{max: 20, increment: .01}],
                    auto: [{max: 5, increment: .05}, {min: 5, max: 10, increment: .1}, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }],
                    dense: [{max: 3, increment: .01}, {min: 3, max: 8, increment: .05}, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                }[e.getConfig("priceGranularity")]
            }
        }

        function z(t) {
            var r = !0, e = Object.prototype.toString.call([]),
                n = {mimes: e, protocols: e, linearity: Object.prototype.toString.call(0), api: e};
            return Object.keys(n).forEach(function (e) {
                Object.prototype.toString.call(p.deepAccess(t, "mediaTypes.video." + e)) !== n[e] && (r = !1, p.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            }), r
        }

        function E(e) {
            var t = !1, r = ["asi", "sid", "hp"];
            return e.nodes && ((t = e.nodes.reduce(function (e, t) {
                return e && r.every(function (e) {
                    return t.hasOwnProperty(e)
                })
            }, !0)) || p.logError("Rubicon: required schain params missing")), t
        }

        function T(e, t) {
            return "rp_schain" === e ? "rp_schain=".concat(t) : "".concat(e, "=").concat(encodeURIComponent(t))
        }

        var U = !1;
        Object(n.registerBidder)(h)
    }
}, [828]);
pbjsChunk([142], {
    836: function (n, i, e) {
        n.exports = e(837)
    }, 837: function (n, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {value: !0}), i.isSchainObjectValid = u, i.isValidSchainConfig = l, i.makeBidRequestsHook = o, i.init = g;
        var t = e(3), c = e(8), a = e(0), s = "Invalid schain object found: ", r = " should be a string",
            f = " should be an Integer", d = " should be an object", b = " should be an Array",
            h = {STRICT: "strict", RELAXED: "relaxed", OFF: "off"}, O = [];

        function u(n, i) {
            var e = "Detected something wrong within an schain config:", t = "";

            function c(n) {
                t += "\n" + n
            }

            function o() {
                (!0 === i ? Object(a.logError) : Object(a.logWarn))(e, n, t)
            }

            if (!Object(a.isPlainObject)(n) && (c("schain.config" + d), o(), i)) return !1;
            if (Object(a.isNumber)(n.complete) && Object(a.isInteger)(n.complete) || c("schain.config.complete" + f), Object(a.isStr)(n.ver) || c("schain.config.ver" + r), Object(a.hasOwn)(n, "ext") && (Object(a.isPlainObject)(n.ext) || c("schain.config.ext" + d)), Object(a.isArray)(n.nodes)) n.nodes.forEach(function (n, i) {
                Object(a.isStr)(n.asi) || c("schain.config.nodes[".concat(i, "].asi") + r), Object(a.isStr)(n.sid) || c("schain.config.nodes[".concat(i, "].sid") + r), Object(a.isNumber)(n.hp) && Object(a.isInteger)(n.hp) || c("schain.config.nodes[".concat(i, "].hp") + f), Object(a.hasOwn)(n, "rid") && (Object(a.isStr)(n.rid) || c("schain.config.nodes[".concat(i, "].rid") + r)), Object(a.hasOwn)(n, "name") && (Object(a.isStr)(n.name) || c("schain.config.nodes[".concat(i, "].name") + r)), Object(a.hasOwn)(n, "domain") && (Object(a.isStr)(n.domain) || c("schain.config.nodes[".concat(i, "].domain") + r)), Object(a.hasOwn)(n, "ext") && (Object(a.isPlainObject)(n.ext) || c("schain.config.nodes[".concat(i, "].ext") + d))
            }); else if (c("schain.config.nodes" + b), o(), i) return !1;
            return !(0 < t.length && (o(), i))
        }

        function l(n) {
            return void 0 !== n && (!!Object(a.isPlainObject)(n) || (Object(a.logError)(s + "the following schain config will not be used as schain is not an object.", n), !1))
        }

        function o(n, i) {
            var c = t.b.getConfig("schain"), o = t.b.getBidderConfig();
            i.forEach(function (n) {
                var i, e = n.bidderCode, t = o[i = e] && o[i].schain || c;
                n.bids.forEach(function (n) {
                    var i = function (n, i) {
                        var e = h.STRICT;
                        if (l(n)) {
                            if ((e = Object(a.isStr)(n.validation) && -1 != O.indexOf(n.validation) ? n.validation : e) === h.OFF) return n.config;
                            if (u(n.config, !(e !== h.STRICT))) return n.config;
                            Object(a.logError)(s + "due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(i, "'.  See above error for details."))
                        }
                        return null
                    }(t, e);
                    i && (n.schain = i)
                })
            }), n(i)
        }

        function g() {
            c.default.makeBidRequests.after(o)
        }

        Object(a._each)(h, function (n) {
            return O.push(n)
        }), g()
    }
}, [836]);
pbjsChunk([136], {
    850: function (e, t, r) {
        e.exports = r(851)
    }, 851: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), r.d(t, "sharethroughInternal", function () {
            return c
        }), r.d(t, "sharethroughAdapterSpec", function () {
            return d
        });
        var t = r(1), i = r(0), a = r(3);

        function s() {
            return (s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, n = arguments[t];
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        var n = "sharethrough", o = [1, 1], c = {
            b64EncodeUnicode: u, handleIframe: function () {
                var e = !1;
                if (!window.lockedInFrame) {
                    var t = document.createElement("script");
                    t.src = "https://native.sharethrough.com/assets/sfp-set-targeting.js", t.type = "text/javascript";
                    try {
                        window.document.getElementsByTagName("body")[0].appendChild(t), e = !0
                    } catch (e) {
                        i.logError("Trouble writing frame buster script, error details:", e)
                    }
                }
                if (!(e ? window.top.STR && window.top.STR.Tag : window.STR && window.STR.Tag)) {
                    t = document.createElement("script");
                    t.src = "https://native.sharethrough.com/assets/sfp.js", t.type = "text/javascript";
                    try {
                        (e ? window.top : window).document.getElementsByTagName("body")[0].appendChild(t)
                    } catch (e) {
                        i.logError("Trouble writing sfp script, error details:", e)
                    }
                }
            }, isLockedInFrame: function () {
                window.lockedInFrame = !1;
                try {
                    window.lockedInFrame = !window.top.document
                } catch (e) {
                    window.lockedInFrame = e instanceof DOMException
                }
            }, getProtocol: function () {
                return document.location.protocol
            }
        }, d = {
            code: n, isBidRequestValid: function (e) {
                return !!e.params.pkey && e.bidder === n
            }, buildRequests: function (e, n) {
                return e.map(function (e) {
                    var t = {
                        placement_key: e.params.pkey,
                        bidId: e.bidId,
                        consent_required: !1,
                        instant_play_capable: function () {
                            var e = navigator.userAgent;
                            if (!e) return !1;
                            var t = /Android/i.test(e), r = /iPhone|iPad|iPod/i.test(e),
                                n = parseInt((/Chrome\/([0-9]+)/.exec(e) || [0, 0])[1]),
                                i = parseInt((/CriOS\/([0-9]+)/.exec(e) || [0, 0])[1]),
                                e = parseInt((/Version\/([0-9]+)/.exec(e) || [0, 0])[1]);
                            return !!(t && 53 <= n || r && (10 <= e || 53 <= i) || !t && !r)
                        }(),
                        hbSource: "prebid",
                        hbVersion: "4.43.0",
                        strVersion: "3.4.0"
                    };
                    s(t, function (e) {
                        if (!e.userId) return {};
                        var t = {}, r = i.deepAccess(e, "userId.tdid");
                        r && (t.ttduid = r);
                        r = i.deepAccess(e, "userId.pubcid") || i.deepAccess(e, "crumbs.pubcid");
                        r && (t.pubcid = r);
                        r = i.deepAccess(e, "userId.idl_env");
                        r && (t.idluid = r);
                        r = i.deepAccess(e, "userId.id5id.uid");
                        r && (t.id5uid = {id: r}, (n = i.deepAccess(e, "userId.id5id.ext.linkType")) && (t.id5uid.linkType = n));
                        var n = i.deepAccess(e, "userId.lipb.lipbid");
                        n && (t.liuid = n);
                        e = i.deepAccess(e, "userId.sharedid");
                        e && (t.shduid = e);
                        return t
                    }(e));
                    var r = c.getProtocol().indexOf("http") < 0;
                    t.secure = r || -1 < c.getProtocol().indexOf("https"), n && n.gdprConsent && n.gdprConsent.consentString && (t.consent_string = n.gdprConsent.consentString), n && n.gdprConsent && (t.consent_required = !!n.gdprConsent.gdprApplies), n && n.uspConsent && (t.us_privacy = n.uspConsent), !0 === a.b.getConfig("coppa") && (t.coppa = !0), e.schain && (t.schain = JSON.stringify(e.schain));
                    r = function (e) {
                        if (i.isFn(e.getFloor)) {
                            e = e.getFloor({
                                currency: "USD", mediaType: "banner", size: e.sizes.map(function (e) {
                                    return {w: e[0], h: e[1]}
                                })
                            });
                            if (i.isPlainObject(e) && !isNaN(e.floor) && "USD" === e.currency) return parseFloat(e.floor)
                        }
                        return null
                    }(e);
                    return r && (t.bidfloor = r), e.params.badv && (t.badv = e.params.badv), e.params.bcat && (t.bcat = e.params.bcat), {
                        method: "POST",
                        url: "https://btlr.sharethrough.com/WYu2BXv1/v1",
                        data: t,
                        strData: {skipIframeBusting: e.params.iframe, iframeSize: e.params.iframeSize, sizes: e.sizes}
                    }
                })
            }, interpretResponse: function (e, t) {
                var r = e.body;
                if (!r || !r.creatives || !r.creatives.length) return [];
                var n = r.creatives[0], e = o;

                function i(e) {
                    return e[0] * e[1]
                }

                return (t.strData.iframeSize || t.strData.sizes.length) && (e = t.strData.iframeSize || t.strData.sizes.reduce(function (e, t) {
                    return i(t) > i(e) ? t : e
                })), [{
                    requestId: t.data.bidId,
                    width: e[0],
                    height: e[1],
                    cpm: n.cpm,
                    creativeId: n.creative.creative_key,
                    dealId: n.creative.deal_id,
                    currency: "USD",
                    netRevenue: !0,
                    ttl: 360,
                    meta: {advertiserDomains: n.creative && n.creative.adomain ? n.creative.adomain : []},
                    ad: function (e, t) {
                        var r = "str_response_".concat(t.data.bidId),
                            e = '\n    <div data-str-native-key="'.concat(t.data.placement_key, '" data-stx-response-name="').concat(r, '">\n    </div>\n    <script>var ').concat(r, ' = "').concat(u(JSON.stringify(e)), '"<\/script>\n  ');
                        t.strData.skipIframeBusting ? e += '<script src="https://native.sharethrough.com/assets/sfp.js"><\/script>' : e += "\n      <script>\n        (".concat(c.isLockedInFrame.toString(), ")()\n      <\/script>\n      <script>\n        (").concat(c.handleIframe.toString(), ")()\n      <\/script>");
                        return e
                    }(r, t)
                }]
            }, getUserSyncs: function (e, t, r, n) {
                var i = n ? "&us_privacy=".concat(n) : "", a = [];
                return e.pixelEnabled && 0 < t.length && t[0].body && t[0].body.cookieSyncUrls && t[0].body.cookieSyncUrls.forEach(function (e) {
                    a.push({type: "image", url: e + i})
                }), a
            }, onTimeout: function (e) {
            }, onBidWon: function (e) {
            }, onSetTargeting: function (e) {
            }
        };

        function u(e) {
            return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
                return String.fromCharCode("0x" + t)
            }))
        }

        Object(t.registerBidder)(d)
    }
}, [850]);
pbjsChunk([11], {
    20: function (e, t, r) {
        "use strict";
        t.b = function (e) {
            var t, r = [];
            for (t in e) {
                var i;
                e.hasOwnProperty(t) && ("pubProvidedId" === t ? r = r.concat(e.pubProvidedId) : (i = function (e, t) {
                    var r = o[t];
                    if (r && e) {
                        var i = {};
                        i.source = r.source;
                        var n = a.isFn(r.getValue) ? r.getValue(e) : e;
                        if (a.isStr(n)) {
                            t = {id: n, atype: r.atype};
                            return !a.isFn(r.getUidExt) || (n = r.getUidExt(e)) && (t.ext = n), i.uids = [t], !a.isFn(r.getEidExt) || (e = r.getEidExt(e)) && (i.ext = e), i
                        }
                    }
                    return null
                }(e[t], t)) && r.push(i))
            }
            return r
        }, t.a = function (e) {
            var r = [];
            return e.filter(function (e) {
                return a.isPlainObject(e.idObj) && Object.keys(e.idObj).length
            }).forEach(function (t) {
                Object.keys(t.idObj).forEach(function (e) {
                    a.deepAccess(t, "config.bidders") && Array.isArray(t.config.bidders) && a.deepAccess(o, e + ".source") && r.push({
                        source: o[e].source,
                        bidders: t.config.bidders
                    })
                })
            }), r
        };
        var a = r(0), o = {
            intentIqId: {source: "intentiq.com", atype: 1},
            pubcid: {source: "pubcid.org", atype: 1},
            tdid: {
                source: "adserver.org", atype: 1, getUidExt: function () {
                    return {rtiPartner: "TDID"}
                }
            },
            id5id: {
                getValue: function (e) {
                    return e.uid
                }, source: "id5-sync.com", atype: 1, getUidExt: function (e) {
                    if (e.ext) return e.ext
                }
            },
            parrableId: {
                source: "parrable.com", atype: 1, getValue: function (e) {
                    return e.eid || (e.ccpaOptout ? "" : null)
                }, getUidExt: function (e) {
                    e = a.pick(e, ["ibaOptout", "ccpaOptout"]);
                    if (Object.keys(e).length) return e
                }
            },
            idl_env: {source: "liveramp.com", atype: 3},
            lipb: {
                getValue: function (e) {
                    return e.lipbid
                }, source: "liveintent.com", atype: 3, getEidExt: function (e) {
                    if (Array.isArray(e.segments) && e.segments.length) return {segments: e.segments}
                }
            },
            britepoolid: {source: "britepool.com", atype: 3},
            dmdId: {source: "hcn.health", atype: 3},
            lotamePanoramaId: {source: "crwdcntrl.net", atype: 1},
            criteoId: {source: "criteo.com", atype: 1},
            merkleId: {
                source: "merkleinc.com", atype: 3, getValue: function (e) {
                    return e.id
                }, getUidExt: function (e) {
                    return e && e.keyID ? {keyID: e.keyID} : void 0
                }
            },
            netId: {source: "netid.de", atype: 1},
            sharedid: {
                source: "sharedid.org", atype: 1, getValue: function (e) {
                    return e.id
                }, getUidExt: function (e) {
                    return e && e.third ? {third: e.third} : void 0
                }
            },
            IDP: {source: "zeotap.com", atype: 1},
            haloId: {source: "audigent.com", atype: 1},
            quantcastId: {source: "quantcast.com", atype: 1},
            nextrollId: {source: "nextroll.com", atype: 1},
            idx: {source: "idx.lat", atype: 1},
            connectid: {source: "verizonmedia.com", atype: 3},
            fabrickId: {source: "neustar.biz", atype: 1},
            mwOpenLinkId: {source: "mediawallahscript.com", atype: 1},
            tapadId: {source: "tapad.com", atype: 1},
            novatiq: {
                getValue: function (e) {
                    return e.snowflake
                }, source: "novatiq.com", atype: 1
            },
            uid2: {
                source: "uidapi.com", atype: 3, getValue: function (e) {
                    return e.id
                }
            },
            deepintentId: {source: "deepintent.com", atype: 3},
            admixerId: {source: "admixer.net", atype: 3}
        }
    }, 892: function (e, t, r) {
        e.exports = r(893)
    }, 893: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), r.d(t, "spec", function () {
            return n
        });
        var l = r(0), t = r(1), i = r(2), m = r(20), f = r(3), n = {
            code: "sovrn", supportedMediaTypes: [i.b], gvlid: 13, isBidRequestValid: function (e) {
                return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid))
            }, buildRequests: function (e, t) {
                try {
                    var i, n, a, o, d = [], u = [];
                    l._each(e, function (e) {
                        !a && e.userId && (a = Object(m.b)(e.userId)).forEach(function (e) {
                            e.uids && e.uids[0] && ("criteo.com" === e.source && (o = e.uids[0].id), u.push({
                                source: e.source,
                                uid: e.uids[0].id
                            }))
                        }), e.schain && (n = n || e.schain), i = i || l.getBidIdParameter("iv", e.params);
                        var t = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.sizes,
                            r = (t = (t = l.isArray(t) && l.isArray(t[0]) ? t : [t]).filter(function (e) {
                                return l.isArray(e)
                            })).map(function (e) {
                                return {w: parseInt(e[0], 10), h: parseInt(e[1], 10)}
                            }), t = e.getFloor && "function" == typeof e.getFloor ? e.getFloor({
                                currency: "USD",
                                mediaType: "banner",
                                size: "*"
                            }) : {};
                        t.floor = t.floor || l.getBidIdParameter("bidfloor", e.params);
                        t = {
                            adunitcode: e.adUnitCode,
                            id: e.bidId,
                            banner: {format: r, w: 1, h: 1},
                            tagid: String(l.getBidIdParameter("tagid", e.params)),
                            bidfloor: t.floor
                        };
                        t.ext = l.getBidIdParameter("ext", e.ortb2Imp) || void 0;
                        e = l.getBidIdParameter("segments", e.params);
                        e && (t.ext = t.ext || {}, t.ext.deals = e.split(",").map(function (e) {
                            return e.trim()
                        })), d.push(t)
                    });
                    var r = f.b.getConfig("ortb2") || {}, s = r.site || {};
                    s.page = t.refererInfo.referer, s.domain = l.parseUrl(s.page).hostname;
                    var c = {id: l.getUniqueIdentifierStr(), imp: d, site: s, user: r.user || {}};
                    n && (c.source = {ext: {schain: n}}), t.gdprConsent && (l.deepSetValue(c, "regs.ext.gdpr", +t.gdprConsent.gdprApplies), l.deepSetValue(c, "user.ext.consent", t.gdprConsent.consentString)), t.uspConsent && l.deepSetValue(c, "regs.ext.us_privacy", t.uspConsent), a && (l.deepSetValue(c, "user.ext.eids", a), l.deepSetValue(c, "user.ext.tpid", u), o && l.deepSetValue(c, "user.ext.prebid_criteoid", o));
                    var p = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_4.43.0";
                    return i && (p += "&iv=".concat(i)), {
                        method: "POST",
                        url: p,
                        data: JSON.stringify(c),
                        options: {contentType: "text/plain"}
                    }
                } catch (e) {
                    l.logError("Could not build bidrequest, error deatils:", e)
                }
            }, interpretResponse: function (e) {
                var t = e.body, e = t.id, t = t.seatbid;
                try {
                    var r = [];
                    return e && t && 0 < t.length && t[0].bid && 0 < t[0].bid.length && t[0].bid.map(function (e) {
                        r.push({
                            requestId: e.impid,
                            cpm: parseFloat(e.price),
                            width: parseInt(e.w),
                            height: parseInt(e.h),
                            creativeId: e.crid || e.id,
                            dealId: e.dealid || null,
                            currency: "USD",
                            netRevenue: !0,
                            mediaType: i.b,
                            ad: decodeURIComponent("".concat(e.adm, '<img src="').concat(e.nurl, '">')),
                            ttl: e.ext && e.ext.ttl || 90,
                            meta: {advertiserDomains: e && e.adomain ? e.adomain : []}
                        })
                    }), r
                } catch (e) {
                    l.logError("Could not intrepret bidresponse, error deatils:", e)
                }
            }, getUserSyncs: function (e, t, r, i) {
                try {
                    var n, a, o = [];
                    return t && 0 !== t.length && (e.iframeEnabled && (n = t.filter(function (e) {
                        return l.deepAccess(e, "body.ext.iid")
                    }).map(function (e) {
                        return e.body.ext.iid
                    }), a = [], r && r.gdprApplies && "string" == typeof r.consentString && a.push(["gdpr_consent", r.consentString]), i && a.push(["us_privacy", i]), n[0] && (a.push(["informer", n[0]]), o.push({
                        type: "iframe",
                        url: "https://ap.lijit.com/beacon?" + a.map(function (e) {
                            return e.join("=")
                        }).join("&")
                    }))), e.pixelEnabled && t.filter(function (e) {
                        return l.deepAccess(e, "body.ext.sync.pixels")
                    }).reduce(function (e, t) {
                        return e.concat(t.body.ext.sync.pixels)
                    }, []).map(function (e) {
                        return e.url
                    }).forEach(function (e) {
                        return o.push({type: "image", url: e})
                    })), o
                } catch (e) {
                    return []
                }
            }
        };
        Object(t.registerBidder)(n)
    }
}, [892]);
pbjsChunk([102], {
    936: function (e, r, t) {
        e.exports = t(937)
    }, 937: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {value: !0}), t.d(r, "tripleliftAdapterSpec", function () {
            return f
        });
        var n = t(2), r = t(1), o = t(0), u = t(3);

        function a() {
            return (a = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t, n = arguments[r];
                    for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function p(r, e) {
            var t, n = Object.keys(r);
            return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), n.push.apply(n, t)), n
        }

        function c(n) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(Object(i), !0).forEach(function (e) {
                    var r, t;
                    r = n, e = i[t = e], t in r ? Object.defineProperty(r, t, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[t] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach(function (e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return n
        }

        function d(e) {
            return function (e) {
                if (Array.isArray(e)) return s(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function (e, r) {
                if (e) {
                    if ("string" == typeof e) return s(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, r) : void 0
                }
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
            return n
        }

        var l = !0, y = null, f = {
            gvlid: 28, code: "triplelift", supportedMediaTypes: [n.b, n.d], isBidRequestValid: function (e) {
                return void 0 !== e.params.inventoryCode
            }, buildRequests: function (e, r) {
                var t = "https://tlx.3lift.com/header/auction?", n = function (e) {
                    var r = {}, t = e[0].schain, n = function () {
                        var e = {}, r = {}, t = {}, n = u.b.getLegacyFpd(u.b.getConfig("ortb2")) || {},
                            i = a({}, n.context), n = a({}, n.user);
                        b(r, i), b(t, n), o.isEmpty(r) || (e.context = r);
                        o.isEmpty(t) || (e.user = t);
                        return e
                    }();
                    r.imp = e.map(function (e, r) {
                        r = {
                            id: r, tagid: e.params.inventoryCode, floor: function (e) {
                                var r = null;
                                {
                                    var t;
                                    "function" == typeof e.getFloor && ("object" !== i(t = e.getFloor({
                                        currency: "USD",
                                        mediaType: m(e) ? "video" : "banner",
                                        size: "*"
                                    })) || "USD" !== t.currency || isNaN(parseFloat(t.floor)) || (r = parseFloat(t.floor)))
                                }
                                return null !== r ? r : e.params.floor
                            }(e)
                        };
                        return m(e) ? r.video = function (e) {
                            e = c(c({}, e.params.video), e.mediaTypes.video);
                            e.w || (e.w = e.playerSize[0][0]);
                            e.h || (e.h = e.playerSize[0][1]);
                            "instream" === e.context && (e.placement = 1);
                            return delete e.playerSize, e
                        }(e) : e.mediaTypes.banner && (r.banner = {
                            format: e.sizes.filter(v).map(function (e) {
                                return {w: e[0], h: e[1]}
                            })
                        }), o.isEmpty(e.ortb2Imp) || (r.fpd = function (e) {
                            var r = {}, t = {};
                            b(t, e.ext), o.isEmpty(t) || (r.context = t);
                            return r
                        }(e.ortb2Imp)), r
                    });
                    e = [].concat(d(function (e) {
                        return g(e, "tdid", "adserver.org", "TDID")
                    }([e[0]])), d(function (e) {
                        return g(e, "idl_env", "liveramp.com", "idl")
                    }([e[0]])), d(function (e) {
                        return g(e, "criteoId", "criteo.com", "criteoId")
                    }([e[0]])), d(function (e) {
                        return g(e, "pubcid", "pubcid.org", "pubcid")
                    }([e[0]])));
                    0 < e.length && (r.user = {ext: {eids: e}});
                    n = function (e, r) {
                        var t = {};
                        o.isEmpty(e) || (t.schain = c({}, e));
                        o.isEmpty(r) || (t.fpd = c({}, r));
                        return t
                    }(t, n);
                    o.isEmpty(n) || (r.ext = n);
                    return r
                }(e);
                return t = o.tryAppendQueryString(t, "lib", "prebid"), t = o.tryAppendQueryString(t, "v", "4.43.0"), r && r.refererInfo && (e = r.refererInfo.referer, t = o.tryAppendQueryString(t, "referrer", e)), r && r.timeout && (t = o.tryAppendQueryString(t, "tmax", r.timeout)), r && r.gdprConsent && (void 0 !== r.gdprConsent.gdprApplies && (l = r.gdprConsent.gdprApplies, t = o.tryAppendQueryString(t, "gdpr", l.toString())), void 0 !== r.gdprConsent.consentString && (y = r.gdprConsent.consentString, t = o.tryAppendQueryString(t, "cmp_cs", y))), r && r.uspConsent && (t = o.tryAppendQueryString(t, "us_privacy", r.uspConsent)), (t = !0 === u.b.getConfig("coppa") ? o.tryAppendQueryString(t, "coppa", !0) : t).lastIndexOf("&") === t.length - 1 && (t = t.substring(0, t.length - 1)), o.logMessage("tlCall request built: " + t), {
                    method: "POST",
                    url: t,
                    data: n,
                    bidderRequest: r
                }
            }, interpretResponse: function (e, r) {
                var t = r.bidderRequest;
                return (e.body.bids || []).map(function (e) {
                    return function (e, r) {
                        var t = {}, n = r.width || 1, i = r.height || 1, o = r.deal_id || "", u = r.crid || "",
                            e = e.bids[r.imp_id];
                        0 != r.cpm && r.ad && (t = {
                            requestId: e.bidId,
                            cpm: r.cpm,
                            width: n,
                            height: i,
                            netRevenue: !0,
                            ad: r.ad,
                            creativeId: u,
                            dealId: o,
                            currency: "USD",
                            ttl: 300,
                            tl_source: r.tl_source,
                            meta: {}
                        }, m(e) && (t.vastXml = r.ad, t.mediaType = "video"), r.advertiser_name && (t.meta.advertiserName = r.advertiser_name), r.adomain && r.adomain.length && (t.meta.advertiserDomains = r.adomain), r.tl_source && "hdx" == r.tl_source && (t.meta.mediaType = "banner"), r.tl_source && "tlx" == r.tl_source && (t.meta.mediaType = "native"));
                        return t
                    }(t, e)
                })
            }, getUserSyncs: function (e, r, t, n) {
                var i = function (e) {
                    if (e) return e.iframeEnabled ? "iframe" : e.pixelEnabled ? "image" : void 0
                }(e);
                if (i) {
                    e = "https://eb2.3lift.com/sync?";
                    return "image" === i && (e = o.tryAppendQueryString(e, "px", 1), e = o.tryAppendQueryString(e, "src", "prebid")), null !== y && (e = o.tryAppendQueryString(e, "gdpr", l), e = o.tryAppendQueryString(e, "cmp_cs", y)), [{
                        type: i,
                        url: e = n ? o.tryAppendQueryString(e, "us_privacy", n) : e
                    }]
                }
            }
        };

        function m(e) {
            return e.mediaTypes.video && (e.mediaTypes.video.context && "instream" === e.mediaTypes.video.context.toLowerCase())
        }

        function b(r, t) {
            o.isEmpty(t) || Object.keys(t).forEach(function (e) {
                null != t[e] && (r[e] = t[e])
            })
        }

        function g(e, r, t, n) {
            return e.map((u = r, function (e) {
                return e && e.userId && e.userId[u]
            })).filter(function (e) {
                return !!e
            }).map((i = t, o = n, function (e) {
                return {source: i, uids: [{id: e, ext: {rtiPartner: o}}]}
            }));
            var i, o, u
        }

        function v(e) {
            return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
        }

        Object(r.registerBidder)(f)
    }
}, [936]);
pbjs.processQueue();
var bsaheaderbid = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 211)
}([function (e, t, n) {
    var r = n(6), i = n(73).f, o = n(34), a = n(20), c = n(95), u = n(155), s = n(66);
    e.exports = function (e, t) {
        var n, l, f, d, p, h = e.target, v = e.global, y = e.stat;
        if (n = v ? r : y ? r[h] || c(h, {}) : (r[h] || {}).prototype) for (l in t) {
            if (d = t[l], f = e.noTargetGet ? (p = i(n, l)) && p.value : n[l], !s(v ? l : h + (y ? "." : "#") + l, e.forced) && void 0 !== f) {
                if (typeof d == typeof f) continue;
                u(d, f)
            }
            (e.sham || f && f.sham) && o(d, "sham", !0), a(n, l, d, e)
        }
    }
}, function (e, t, n) {
    var r = n(13);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e
    }
}, function (e, t) {
    e.exports = !1
}, function (e, t, n) {
    var r = n(1), i = n(136), o = n(28), a = n(9), c = n(80), u = n(137), s = function (e, t) {
        this.stopped = e, this.result = t
    };
    (e.exports = function (e, t, n, l, f) {
        var d, p, h, v, y, g, m, b = a(t, n, l ? 2 : 1);
        if (f) d = e; else {
            if ("function" != typeof (p = c(e))) throw TypeError("Target is not iterable");
            if (i(p)) {
                for (h = 0, v = o(e.length); v > h; h++) if ((y = l ? b(r(m = e[h])[0], m[1]) : b(e[h])) && y instanceof s) return y;
                return new s(!1)
            }
            d = p.call(e)
        }
        for (g = d.next; !(m = g.call(d)).done;) if ("object" == typeof (y = u(d, b, m.value, l)) && y && y instanceof s) return y;
        return new s(!1)
    }).stop = function (e) {
        return new s(!0, e)
    }
}, function (e, t, n) {
    var r = n(0), i = n(12);
    r({target: "Object", stat: !0, forced: !i, sham: !i}, {defineProperty: n(19).f})
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    (function (t) {
        var n = function (e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
    }).call(this, n(153))
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }
}, function (e, t, n) {
    var r = n(6), i = n(123), o = n(17), a = n(98), c = n(127), u = n(158), s = i("wks"), l = r.Symbol,
        f = u ? l : l && l.withoutSetter || a;
    e.exports = function (e) {
        return o(s, e) || (c && o(l, e) ? s[e] = l[e] : s[e] = f("Symbol." + e)), s[e]
    }
}, function (e, t, n) {
    var r = n(7);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 0:
                return function () {
                    return e.call(t)
                };
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t, n) {
    var r = n(157), i = n(6), o = function (e) {
        return "function" == typeof e ? e : void 0
    };
    e.exports = function (e, t) {
        return arguments.length < 2 ? o(r[e]) || o(i[e]) : r[e] && r[e][t] || i[e] && i[e][t]
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(126);
    r({target: "Array", proto: !0, forced: [].forEach != i}, {forEach: i})
}, function (e, t, n) {
    var r = n(5);
    e.exports = !r((function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    }))
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    var r = n(6), i = n(128), o = n(126), a = n(34);
    for (var c in i) {
        var u = r[c], s = u && u.prototype;
        if (s && s.forEach !== o) try {
            a(s, "forEach", o)
        } catch (e) {
            s.forEach = o
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(5), o = n(77), a = n(13), c = n(32), u = n(28), s = n(78), l = n(102), f = n(67), d = n(8),
        p = n(103), h = d("isConcatSpreadable"), v = p >= 51 || !i((function () {
            var e = [];
            return e[h] = !1, e.concat()[0] !== e
        })), y = f("concat"), g = function (e) {
            if (!a(e)) return !1;
            var t = e[h];
            return void 0 !== t ? !!t : o(e)
        };
    r({target: "Array", proto: !0, forced: !v || !y}, {
        concat: function (e) {
            var t, n, r, i, o, a = c(this), f = l(a, 0), d = 0;
            for (t = -1, r = arguments.length; t < r; t++) if (g(o = -1 === t ? a : arguments[t])) {
                if (d + (i = u(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                for (n = 0; n < i; n++, d++) n in o && s(f, d, o[n])
            } else {
                if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                s(f, d++, o)
            }
            return f.length = d, f
        }
    })
}, function (e, t, n) {
    var r = n(111), i = n(20), o = n(161);
    r || i(Object.prototype, "toString", o, {unsafe: !0})
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(53).map, o = n(67), a = n(23), c = o("map"), u = a("map");
    r({target: "Array", proto: !0, forced: !c || !u}, {
        map: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var r = n(12), i = n(121), o = n(1), a = n(74), c = Object.defineProperty;
    t.f = r ? c : function (e, t, n) {
        if (o(e), t = a(t, !0), o(n), i) try {
            return c(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var r = n(6), i = n(34), o = n(17), a = n(95), c = n(96), u = n(37), s = u.get, l = u.enforce,
        f = String(String).split("String");
    (e.exports = function (e, t, n, c) {
        var u = !!c && !!c.unsafe, s = !!c && !!c.enumerable, d = !!c && !!c.noTargetGet;
        "function" == typeof n && ("string" != typeof t || o(n, "name") || i(n, "name", t), l(n).source = f.join("string" == typeof t ? t : "")), e !== r ? (u ? !d && e[t] && (s = !0) : delete e[t], s ? e[t] = n : i(e, t, n)) : s ? e[t] = n : a(t, n)
    })(Function.prototype, "toString", (function () {
        return "function" == typeof this && s(this).source || c(this)
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(36), i = n(79), o = n(69), a = n(37), c = n(106), u = a.set, s = a.getterFor("Array Iterator");
    e.exports = c(Array, "Array", (function (e, t) {
        u(this, {type: "Array Iterator", target: r(e), index: 0, kind: t})
    }), (function () {
        var e = s(this), t = e.target, n = e.kind, r = e.index++;
        return !t || r >= t.length ? (e.target = void 0, {value: void 0, done: !0}) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {value: t[r], done: !1} : {value: [r, t[r]], done: !1}
    }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(83);
    r({target: "RegExp", proto: !0, forced: /./.exec !== i}, {exec: i})
}, function (e, t, n) {
    var r = n(12), i = n(5), o = n(17), a = Object.defineProperty, c = {}, u = function (e) {
        throw e
    };
    e.exports = function (e, t) {
        if (o(c, e)) return c[e];
        t || (t = {});
        var n = [][e], s = !!o(t, "ACCESSORS") && t.ACCESSORS, l = o(t, 0) ? t[0] : u, f = o(t, 1) ? t[1] : void 0;
        return c[e] = !!n && !i((function () {
            if (s && !r) return !0;
            var e = {length: -1};
            s ? a(e, 1, {enumerable: !0, get: u}) : e[1] = 1, n.call(e, l, f)
        }))
    }
}, function (e, t, n) {
    "use strict";
    var r, i, o, a, c = n(0), u = n(2), s = n(6), l = n(10), f = n(162), d = n(20), p = n(113), h = n(61), v = n(114),
        y = n(13), g = n(7), m = n(71), b = n(31), w = n(96), S = n(3), k = n(138), _ = n(29), A = n(141).set,
        x = n(163), P = n(164), I = n(165), E = n(143), R = n(166), j = n(37), T = n(66), O = n(8), C = n(103),
        z = O("species"), B = "Promise", L = j.get, M = j.set, D = j.getterFor(B), N = f, U = s.TypeError,
        q = s.document, F = s.process, V = l("fetch"), G = E.f, H = G, W = "process" == b(F),
        $ = !!(q && q.createEvent && s.dispatchEvent), Q = T(B, (function () {
            if (!(w(N) !== String(N))) {
                if (66 === C) return !0;
                if (!W && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (u && !N.prototype.finally) return !0;
            if (C >= 51 && /native code/.test(N)) return !1;
            var e = N.resolve(1), t = function (e) {
                e((function () {
                }), (function () {
                }))
            };
            return (e.constructor = {})[z] = t, !(e.then((function () {
            })) instanceof t)
        })), Y = Q || !k((function (e) {
            N.all(e).catch((function () {
            }))
        })), J = function (e) {
            var t;
            return !(!y(e) || "function" != typeof (t = e.then)) && t
        }, X = function (e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var r = t.reactions;
                x((function () {
                    for (var i = t.value, o = 1 == t.state, a = 0; r.length > a;) {
                        var c, u, s, l = r[a++], f = o ? l.ok : l.fail, d = l.resolve, p = l.reject, h = l.domain;
                        try {
                            f ? (o || (2 === t.rejection && te(e, t), t.rejection = 1), !0 === f ? c = i : (h && h.enter(), c = f(i), h && (h.exit(), s = !0)), c === l.promise ? p(U("Promise-chain cycle")) : (u = J(c)) ? u.call(c, d, p) : d(c)) : p(i)
                        } catch (e) {
                            h && !s && h.exit(), p(e)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && K(e, t)
                }))
            }
        }, Z = function (e, t, n) {
            var r, i;
            $ ? ((r = q.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), s.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
            }, (i = s["on" + e]) ? i(r) : "unhandledrejection" === e && I("Unhandled promise rejection", n)
        }, K = function (e, t) {
            A.call(s, (function () {
                var n, r = t.value;
                if (ee(t) && (n = R((function () {
                    W ? F.emit("unhandledRejection", r, e) : Z("unhandledrejection", e, r)
                })), t.rejection = W || ee(t) ? 2 : 1, n.error)) throw n.value
            }))
        }, ee = function (e) {
            return 1 !== e.rejection && !e.parent
        }, te = function (e, t) {
            A.call(s, (function () {
                W ? F.emit("rejectionHandled", e) : Z("rejectionhandled", e, t.value)
            }))
        }, ne = function (e, t, n, r) {
            return function (i) {
                e(t, n, i, r)
            }
        }, re = function (e, t, n, r) {
            t.done || (t.done = !0, r && (t = r), t.value = n, t.state = 2, X(e, t, !0))
        }, ie = function (e, t, n, r) {
            if (!t.done) {
                t.done = !0, r && (t = r);
                try {
                    if (e === n) throw U("Promise can't be resolved itself");
                    var i = J(n);
                    i ? x((function () {
                        var r = {done: !1};
                        try {
                            i.call(n, ne(ie, e, r, t), ne(re, e, r, t))
                        } catch (n) {
                            re(e, r, n, t)
                        }
                    })) : (t.value = n, t.state = 1, X(e, t, !1))
                } catch (n) {
                    re(e, {done: !1}, n, t)
                }
            }
        };
    Q && (N = function (e) {
        m(this, N, B), g(e), r.call(this);
        var t = L(this);
        try {
            e(ne(ie, this, t), ne(re, this, t))
        } catch (e) {
            re(this, t, e)
        }
    }, (r = function (e) {
        M(this, {type: B, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0})
    }).prototype = p(N.prototype, {
        then: function (e, t) {
            var n = D(this), r = G(_(this, N));
            return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = W ? F.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && X(this, n, !1), r.promise
        }, catch: function (e) {
            return this.then(void 0, e)
        }
    }), i = function () {
        var e = new r, t = L(e);
        this.promise = e, this.resolve = ne(ie, e, t), this.reject = ne(re, e, t)
    }, E.f = G = function (e) {
        return e === N || e === o ? new i(e) : H(e)
    }, u || "function" != typeof f || (a = f.prototype.then, d(f.prototype, "then", (function (e, t) {
        var n = this;
        return new N((function (e, t) {
            a.call(n, e, t)
        })).then(e, t)
    }), {unsafe: !0}), "function" == typeof V && c({global: !0, enumerable: !0, forced: !0}, {
        fetch: function (e) {
            return P(N, V.apply(s, arguments))
        }
    }))), c({global: !0, wrap: !0, forced: Q}, {Promise: N}), h(N, B, !1, !0), v(B), o = l(B), c({
        target: B,
        stat: !0,
        forced: Q
    }, {
        reject: function (e) {
            var t = G(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), c({target: B, stat: !0, forced: u || Q}, {
        resolve: function (e) {
            return P(u && this === o ? N : this, e)
        }
    }), c({target: B, stat: !0, forced: Y}, {
        all: function (e) {
            var t = this, n = G(t), r = n.resolve, i = n.reject, o = R((function () {
                var n = g(t.resolve), o = [], a = 0, c = 1;
                S(e, (function (e) {
                    var u = a++, s = !1;
                    o.push(void 0), c++, n.call(t, e).then((function (e) {
                        s || (s = !0, o[u] = e, --c || r(o))
                    }), i)
                })), --c || r(o)
            }));
            return o.error && i(o.value), n.promise
        }, race: function (e) {
            var t = this, n = G(t), r = n.reject, i = R((function () {
                var i = g(t.resolve);
                S(e, (function (e) {
                    i.call(t, e).then(n.resolve, r)
                }))
            }));
            return i.error && r(i.value), n.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(116).charAt, i = n(37), o = n(106), a = i.set, c = i.getterFor("String Iterator");
    o(String, "String", (function (e) {
        a(this, {type: "String Iterator", string: String(e), index: 0})
    }), (function () {
        var e, t = c(this), n = t.string, i = t.index;
        return i >= n.length ? {value: void 0, done: !0} : (e = r(n, i), t.index += e.length, {value: e, done: !1})
    }))
}, function (e, t, n) {
    var r = n(0), i = n(6), o = n(104), a = [].slice, c = function (e) {
        return function (t, n) {
            var r = arguments.length > 2, i = r ? a.call(arguments, 2) : void 0;
            return e(r ? function () {
                ("function" == typeof t ? t : Function(t)).apply(this, i)
            } : t, n)
        }
    };
    r({global: !0, bind: !0, forced: /MSIE .\./.test(o)}, {setTimeout: c(i.setTimeout), setInterval: c(i.setInterval)})
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }
}, function (e, t, n) {
    var r = n(52), i = Math.min;
    e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var r = n(1), i = n(7), o = n(8)("species");
    e.exports = function (e, t) {
        var n, a = r(e).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? t : i(n)
    }
}, function (e, t, n) {
    var r = n(6), i = n(128), o = n(21), a = n(34), c = n(8), u = c("iterator"), s = c("toStringTag"), l = o.values;
    for (var f in i) {
        var d = r[f], p = d && d.prototype;
        if (p) {
            if (p[u] !== l) try {
                a(p, u, l)
            } catch (e) {
                p[u] = l
            }
            if (p[s] || a(p, s, f), i[f]) for (var h in o) if (p[h] !== o[h]) try {
                a(p, h, o[h])
            } catch (e) {
                p[h] = o[h]
            }
        }
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var r = n(27);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    var r = n(2), i = n(86);
    e.exports = r ? i : function (e) {
        return Map.prototype.entries.call(e)
    }
}, function (e, t, n) {
    var r = n(12), i = n(19), o = n(64);
    e.exports = r ? function (e, t, n) {
        return i.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(53).filter, o = n(67), a = n(23), c = o("filter"), u = a("filter");
    r({target: "Array", proto: !0, forced: !c || !u}, {
        filter: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var r = n(65), i = n(27);
    e.exports = function (e) {
        return r(i(e))
    }
}, function (e, t, n) {
    var r, i, o, a = n(154), c = n(6), u = n(13), s = n(34), l = n(17), f = n(97), d = n(75), p = c.WeakMap;
    if (a) {
        var h = new p, v = h.get, y = h.has, g = h.set;
        r = function (e, t) {
            return g.call(h, e, t), t
        }, i = function (e) {
            return v.call(h, e) || {}
        }, o = function (e) {
            return y.call(h, e)
        }
    } else {
        var m = f("state");
        d[m] = !0, r = function (e, t) {
            return s(e, m, t), t
        }, i = function (e) {
            return l(e, m) ? e[m] : {}
        }, o = function (e) {
            return l(e, m)
        }
    }
    e.exports = {
        set: r, get: i, has: o, enforce: function (e) {
            return o(e) ? i(e) : r(e, {})
        }, getterFor: function (e) {
            return function (t) {
                var n;
                if (!u(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(134), i = n(139);
    e.exports = r("Map", (function (e) {
        return function () {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }), i)
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(145);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        deleteAll: function () {
            return o.apply(this, arguments)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(9), c = n(33), u = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        every: function (e) {
            var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
            return !u(n, (function (e, n) {
                if (!r(n, e, t)) return u.stop()
            }), void 0, !0, !0).stopped
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(9), s = n(29), l = n(33), f = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        filter: function (e) {
            var t = a(this), n = l(t), r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = new (s(t, o("Map"))), d = c(i.set);
            return f(n, (function (e, n) {
                r(n, e, t) && d.call(i, e, n)
            }), void 0, !0, !0), i
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(9), c = n(33), u = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        find: function (e) {
            var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
            return u(n, (function (e, n) {
                if (r(n, e, t)) return u.stop(n)
            }), void 0, !0, !0).result
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(9), c = n(33), u = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        findKey: function (e) {
            var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
            return u(n, (function (e, n) {
                if (r(n, e, t)) return u.stop(e)
            }), void 0, !0, !0).result
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(33), c = n(170), u = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        includes: function (e) {
            return u(a(o(this)), (function (t, n) {
                if (c(n, e)) return u.stop()
            }), void 0, !0, !0).stopped
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(33), c = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        keyOf: function (e) {
            return c(a(o(this)), (function (t, n) {
                if (n === e) return c.stop(t)
            }), void 0, !0, !0).result
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(9), s = n(29), l = n(33), f = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        mapKeys: function (e) {
            var t = a(this), n = l(t), r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = new (s(t, o("Map"))), d = c(i.set);
            return f(n, (function (e, n) {
                d.call(i, r(n, e, t), n)
            }), void 0, !0, !0), i
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(9), s = n(29), l = n(33), f = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        mapValues: function (e) {
            var t = a(this), n = l(t), r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = new (s(t, o("Map"))), d = c(i.set);
            return f(n, (function (e, n) {
                d.call(i, e, r(n, e, t))
            }), void 0, !0, !0), i
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(7), c = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        merge: function (e) {
            for (var t = o(this), n = a(t.set), r = 0; r < arguments.length;) c(arguments[r++], n, t, !0);
            return t
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(7), c = n(33), u = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        reduce: function (e) {
            var t = o(this), n = c(t), r = arguments.length < 2, i = r ? void 0 : arguments[1];
            if (a(e), u(n, (function (n, o) {
                r ? (r = !1, i = o) : i = e(i, o, n, t)
            }), void 0, !0, !0), r) throw TypeError("Reduce of empty map with no initial value");
            return i
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(9), c = n(33), u = n(3);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        some: function (e) {
            var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
            return u(n, (function (e, n) {
                if (r(n, e, t)) return u.stop()
            }), void 0, !0, !0).stopped
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(7);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        update: function (e, t) {
            var n = o(this), r = arguments.length;
            a(t);
            var i = n.has(e);
            if (!i && r < 3) throw TypeError("Updating absent value");
            var c = i ? n.get(e) : a(r > 2 ? arguments[2] : void 0)(e, n);
            return n.set(e, t(c, e, n)), n
        }
    })
}, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t, n) {
    var r = n(9), i = n(65), o = n(32), a = n(28), c = n(102), u = [].push, s = function (e) {
        var t = 1 == e, n = 2 == e, s = 3 == e, l = 4 == e, f = 6 == e, d = 5 == e || f;
        return function (p, h, v, y) {
            for (var g, m, b = o(p), w = i(b), S = r(h, v, 3), k = a(w.length), _ = 0, A = y || c, x = t ? A(p, k) : n ? A(p, 0) : void 0; k > _; _++) if ((d || _ in w) && (m = S(g = w[_], _, b), e)) if (t) x[_] = m; else if (m) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return _;
                case 2:
                    u.call(x, g)
            } else if (l) return !1;
            return f ? -1 : s || l ? l : x
        }
    };
    e.exports = {forEach: s(0), map: s(1), filter: s(2), some: s(3), every: s(4), find: s(5), findIndex: s(6)}
}, function (e, t, n) {
    "use strict";
    var r = n(5);
    e.exports = function (e, t) {
        var n = [][e];
        return !!n && r((function () {
            n.call(null, t || function () {
                throw 1
            }, 1)
        }))
    }
}, function (e, t, n) {
    n(0)({target: "Array", stat: !0}, {isArray: n(77)})
}, function (e, t, n) {
    var r = n(20), i = Date.prototype, o = i.toString, a = i.getTime;
    new Date(NaN) + "" != "Invalid Date" && r(i, "toString", (function () {
        var e = a.call(this);
        return e == e ? o.call(this) : "Invalid Date"
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(84), i = n(81), o = n(1), a = n(27), c = n(29), u = n(117), s = n(28), l = n(85), f = n(83), d = n(5),
        p = [].push, h = Math.min, v = !d((function () {
            return !RegExp(4294967295, "y")
        }));
    r("split", 2, (function (e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
            var r = String(a(this)), o = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === o) return [];
            if (void 0 === e) return [r];
            if (!i(e)) return t.call(r, e, o);
            for (var c, u, s, l = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), h = 0, v = new RegExp(e.source, d + "g"); (c = f.call(v, r)) && !((u = v.lastIndex) > h && (l.push(r.slice(h, c.index)), c.length > 1 && c.index < r.length && p.apply(l, c.slice(1)), s = c[0].length, h = u, l.length >= o));) v.lastIndex === c.index && v.lastIndex++;
            return h === r.length ? !s && v.test("") || l.push("") : l.push(r.slice(h)), l.length > o ? l.slice(0, o) : l
        } : "0".split(void 0, 0).length ? function (e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function (t, n) {
            var i = a(this), o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }, function (e, i) {
            var a = n(r, e, this, i, r !== t);
            if (a.done) return a.value;
            var f = o(e), d = String(this), p = c(f, RegExp), y = f.unicode,
                g = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (v ? "y" : "g"),
                m = new p(v ? f : "^(?:" + f.source + ")", g), b = void 0 === i ? 4294967295 : i >>> 0;
            if (0 === b) return [];
            if (0 === d.length) return null === l(m, d) ? [d] : [];
            for (var w = 0, S = 0, k = []; S < d.length;) {
                m.lastIndex = v ? S : 0;
                var _, A = l(m, v ? d : d.slice(S));
                if (null === A || (_ = h(s(m.lastIndex + (v ? 0 : S)), d.length)) === w) S = u(d, S, y); else {
                    if (k.push(d.slice(w, S)), k.length === b) return k;
                    for (var x = 1; x <= A.length - 1; x++) if (k.push(A[x]), k.length === b) return k;
                    S = w = _
                }
            }
            return k.push(d.slice(w)), k
        }]
    }), !v)
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(65), o = n(36), a = n(54), c = [].join, u = i != Object, s = a("join", ",");
    r({target: "Array", proto: !0, forced: u || !s}, {
        join: function (e) {
            return c.call(o(this), void 0 === e ? "," : e)
        }
    })
}, function (e, t, n) {
    var r = n(2), i = n(86);
    e.exports = r ? i : function (e) {
        return Set.prototype.values.call(e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(99).indexOf, o = n(54), a = n(23), c = [].indexOf, u = !!c && 1 / [1].indexOf(1, -0) < 0,
        s = o("indexOf"), l = a("indexOf", {ACCESSORS: !0, 1: 0});
    r({target: "Array", proto: !0, forced: u || !s || !l}, {
        indexOf: function (e) {
            return u ? c.apply(this, arguments) || 0 : i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var r = n(19).f, i = n(17), o = n(8)("toStringTag");
    e.exports = function (e, t, n) {
        e && !i(e = n ? e : e.prototype, o) && r(e, o, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    "use strict";
    var r = n(84), i = n(1), o = n(27), a = n(169), c = n(85);
    r("search", 1, (function (e, t, n) {
        return [function (t) {
            var n = o(this), r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var o = i(e), u = String(this), s = o.lastIndex;
            a(s, 0) || (o.lastIndex = 0);
            var l = c(o, u);
            return a(o.lastIndex, s) || (o.lastIndex = s), null === l ? -1 : l.index
        }]
    }))
}, function (e, t, n) {
    "use strict";
    n(25);
    var r, i = n(0), o = n(12), a = n(146), c = n(6), u = n(129), s = n(20), l = n(71), f = n(17), d = n(147),
        p = n(172), h = n(116).codeAt, v = n(173), y = n(61), g = n(174), m = n(37), b = c.URL, w = g.URLSearchParams,
        S = g.getState, k = m.set, _ = m.getterFor("URL"), A = Math.floor, x = Math.pow, P = /[A-Za-z]/,
        I = /[\d+-.A-Za-z]/, E = /\d/, R = /^(0x|0X)/, j = /^[0-7]+$/, T = /^\d+$/, O = /^[\dA-Fa-f]+$/,
        C = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, z = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        B = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, L = /[\u0009\u000A\u000D]/g, M = function (e, t) {
            var n, r, i;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return "Invalid host";
                if (!(n = N(t.slice(1, -1)))) return "Invalid host";
                e.host = n
            } else if ($(e)) {
                if (t = v(t), C.test(t)) return "Invalid host";
                if (null === (n = D(t))) return "Invalid host";
                e.host = n
            } else {
                if (z.test(t)) return "Invalid host";
                for (n = "", r = p(t), i = 0; i < r.length; i++) n += H(r[i], q);
                e.host = n
            }
        }, D = function (e) {
            var t, n, r, i, o, a, c, u = e.split(".");
            if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4) return e;
            for (n = [], r = 0; r < t; r++) {
                if ("" == (i = u[r])) return e;
                if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = R.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0; else {
                    if (!(10 == o ? T : 8 == o ? j : O).test(i)) return e;
                    a = parseInt(i, o)
                }
                n.push(a)
            }
            for (r = 0; r < t; r++) if (a = n[r], r == t - 1) {
                if (a >= x(256, 5 - t)) return null
            } else if (a > 255) return null;
            for (c = n.pop(), r = 0; r < n.length; r++) c += n[r] * x(256, 3 - r);
            return c
        }, N = function (e) {
            var t, n, r, i, o, a, c, u = [0, 0, 0, 0, 0, 0, 0, 0], s = 0, l = null, f = 0, d = function () {
                return e.charAt(f)
            };
            if (":" == d()) {
                if (":" != e.charAt(1)) return;
                f += 2, l = ++s
            }
            for (; d();) {
                if (8 == s) return;
                if (":" != d()) {
                    for (t = n = 0; n < 4 && O.test(d());) t = 16 * t + parseInt(d(), 16), f++, n++;
                    if ("." == d()) {
                        if (0 == n) return;
                        if (f -= n, s > 6) return;
                        for (r = 0; d();) {
                            if (i = null, r > 0) {
                                if (!("." == d() && r < 4)) return;
                                f++
                            }
                            if (!E.test(d())) return;
                            for (; E.test(d());) {
                                if (o = parseInt(d(), 10), null === i) i = o; else {
                                    if (0 == i) return;
                                    i = 10 * i + o
                                }
                                if (i > 255) return;
                                f++
                            }
                            u[s] = 256 * u[s] + i, 2 != ++r && 4 != r || s++
                        }
                        if (4 != r) return;
                        break
                    }
                    if (":" == d()) {
                        if (f++, !d()) return
                    } else if (d()) return;
                    u[s++] = t
                } else {
                    if (null !== l) return;
                    f++, l = ++s
                }
            }
            if (null !== l) for (a = s - l, s = 7; 0 != s && a > 0;) c = u[s], u[s--] = u[l + a - 1], u[l + --a] = c; else if (8 != s) return;
            return u
        }, U = function (e) {
            var t, n, r, i;
            if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = A(e / 256);
                return t.join(".")
            }
            if ("object" == typeof e) {
                for (t = "", r = function (e) {
                    for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                    return i > n && (t = r, n = i), t
                }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                return "[" + t + "]"
            }
            return e
        }, q = {}, F = d({}, q, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}), V = d({}, F, {"#": 1, "?": 1, "{": 1, "}": 1}),
        G = d({}, V, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
        H = function (e, t) {
            var n = h(e, 0);
            return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e)
        }, W = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, $ = function (e) {
            return f(W, e.scheme)
        }, Q = function (e) {
            return "" != e.username || "" != e.password
        }, Y = function (e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
        }, J = function (e, t) {
            var n;
            return 2 == e.length && P.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
        }, X = function (e) {
            var t;
            return e.length > 1 && J(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
        }, Z = function (e) {
            var t = e.path, n = t.length;
            !n || "file" == e.scheme && 1 == n && J(t[0], !0) || t.pop()
        }, K = function (e) {
            return "." === e || "%2e" === e.toLowerCase()
        }, ee = {}, te = {}, ne = {}, re = {}, ie = {}, oe = {}, ae = {}, ce = {}, ue = {}, se = {}, le = {}, fe = {},
        de = {}, pe = {}, he = {}, ve = {}, ye = {}, ge = {}, me = {}, be = {}, we = {}, Se = function (e, t, n, i) {
            var o, a, c, u, s, l = n || ee, d = 0, h = "", v = !1, y = !1, g = !1;
            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(B, "")), t = t.replace(L, ""), o = p(t); d <= o.length;) {
                switch (a = o[d], l) {
                    case ee:
                        if (!a || !P.test(a)) {
                            if (n) return "Invalid scheme";
                            l = ne;
                            continue
                        }
                        h += a.toLowerCase(), l = te;
                        break;
                    case te:
                        if (a && (I.test(a) || "+" == a || "-" == a || "." == a)) h += a.toLowerCase(); else {
                            if (":" != a) {
                                if (n) return "Invalid scheme";
                                h = "", l = ne, d = 0;
                                continue
                            }
                            if (n && ($(e) != f(W, h) || "file" == h && (Q(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                            if (e.scheme = h, n) return void ($(e) && W[e.scheme] == e.port && (e.port = null));
                            h = "", "file" == e.scheme ? l = pe : $(e) && i && i.scheme == e.scheme ? l = re : $(e) ? l = ce : "/" == o[d + 1] ? (l = ie, d++) : (e.cannotBeABaseURL = !0, e.path.push(""), l = me)
                        }
                        break;
                    case ne:
                        if (!i || i.cannotBeABaseURL && "#" != a) return "Invalid scheme";
                        if (i.cannotBeABaseURL && "#" == a) {
                            e.scheme = i.scheme, e.path = i.path.slice(), e.query = i.query, e.fragment = "", e.cannotBeABaseURL = !0, l = we;
                            break
                        }
                        l = "file" == i.scheme ? pe : oe;
                        continue;
                    case re:
                        if ("/" != a || "/" != o[d + 1]) {
                            l = oe;
                            continue
                        }
                        l = ue, d++;
                        break;
                    case ie:
                        if ("/" == a) {
                            l = se;
                            break
                        }
                        l = ge;
                        continue;
                    case oe:
                        if (e.scheme = i.scheme, a == r) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query; else if ("/" == a || "\\" == a && $(e)) l = ae; else if ("?" == a) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = "", l = be; else {
                            if ("#" != a) {
                                e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.path.pop(), l = ge;
                                continue
                            }
                            e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query, e.fragment = "", l = we
                        }
                        break;
                    case ae:
                        if (!$(e) || "/" != a && "\\" != a) {
                            if ("/" != a) {
                                e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, l = ge;
                                continue
                            }
                            l = se
                        } else l = ue;
                        break;
                    case ce:
                        if (l = ue, "/" != a || "/" != h.charAt(d + 1)) continue;
                        d++;
                        break;
                    case ue:
                        if ("/" != a && "\\" != a) {
                            l = se;
                            continue
                        }
                        break;
                    case se:
                        if ("@" == a) {
                            v && (h = "%40" + h), v = !0, c = p(h);
                            for (var m = 0; m < c.length; m++) {
                                var b = c[m];
                                if (":" != b || g) {
                                    var w = H(b, G);
                                    g ? e.password += w : e.username += w
                                } else g = !0
                            }
                            h = ""
                        } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && $(e)) {
                            if (v && "" == h) return "Invalid authority";
                            d -= p(h).length + 1, h = "", l = le
                        } else h += a;
                        break;
                    case le:
                    case fe:
                        if (n && "file" == e.scheme) {
                            l = ve;
                            continue
                        }
                        if (":" != a || y) {
                            if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && $(e)) {
                                if ($(e) && "" == h) return "Invalid host";
                                if (n && "" == h && (Q(e) || null !== e.port)) return;
                                if (u = M(e, h)) return u;
                                if (h = "", l = ye, n) return;
                                continue
                            }
                            "[" == a ? y = !0 : "]" == a && (y = !1), h += a
                        } else {
                            if ("" == h) return "Invalid host";
                            if (u = M(e, h)) return u;
                            if (h = "", l = de, n == fe) return
                        }
                        break;
                    case de:
                        if (!E.test(a)) {
                            if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && $(e) || n) {
                                if ("" != h) {
                                    var S = parseInt(h, 10);
                                    if (S > 65535) return "Invalid port";
                                    e.port = $(e) && S === W[e.scheme] ? null : S, h = ""
                                }
                                if (n) return;
                                l = ye;
                                continue
                            }
                            return "Invalid port"
                        }
                        h += a;
                        break;
                    case pe:
                        if (e.scheme = "file", "/" == a || "\\" == a) l = he; else {
                            if (!i || "file" != i.scheme) {
                                l = ge;
                                continue
                            }
                            if (a == r) e.host = i.host, e.path = i.path.slice(), e.query = i.query; else if ("?" == a) e.host = i.host, e.path = i.path.slice(), e.query = "", l = be; else {
                                if ("#" != a) {
                                    X(o.slice(d).join("")) || (e.host = i.host, e.path = i.path.slice(), Z(e)), l = ge;
                                    continue
                                }
                                e.host = i.host, e.path = i.path.slice(), e.query = i.query, e.fragment = "", l = we
                            }
                        }
                        break;
                    case he:
                        if ("/" == a || "\\" == a) {
                            l = ve;
                            break
                        }
                        i && "file" == i.scheme && !X(o.slice(d).join("")) && (J(i.path[0], !0) ? e.path.push(i.path[0]) : e.host = i.host), l = ge;
                        continue;
                    case ve:
                        if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                            if (!n && J(h)) l = ge; else if ("" == h) {
                                if (e.host = "", n) return;
                                l = ye
                            } else {
                                if (u = M(e, h)) return u;
                                if ("localhost" == e.host && (e.host = ""), n) return;
                                h = "", l = ye
                            }
                            continue
                        }
                        h += a;
                        break;
                    case ye:
                        if ($(e)) {
                            if (l = ge, "/" != a && "\\" != a) continue
                        } else if (n || "?" != a) if (n || "#" != a) {
                            if (a != r && (l = ge, "/" != a)) continue
                        } else e.fragment = "", l = we; else e.query = "", l = be;
                        break;
                    case ge:
                        if (a == r || "/" == a || "\\" == a && $(e) || !n && ("?" == a || "#" == a)) {
                            if (".." === (s = (s = h).toLowerCase()) || "%2e." === s || ".%2e" === s || "%2e%2e" === s ? (Z(e), "/" == a || "\\" == a && $(e) || e.path.push("")) : K(h) ? "/" == a || "\\" == a && $(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && J(h) && (e.host && (e.host = ""), h = h.charAt(0) + ":"), e.path.push(h)), h = "", "file" == e.scheme && (a == r || "?" == a || "#" == a)) for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                            "?" == a ? (e.query = "", l = be) : "#" == a && (e.fragment = "", l = we)
                        } else h += H(a, V);
                        break;
                    case me:
                        "?" == a ? (e.query = "", l = be) : "#" == a ? (e.fragment = "", l = we) : a != r && (e.path[0] += H(a, q));
                        break;
                    case be:
                        n || "#" != a ? a != r && ("'" == a && $(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : H(a, q)) : (e.fragment = "", l = we);
                        break;
                    case we:
                        a != r && (e.fragment += H(a, F))
                }
                d++
            }
        }, ke = function (e) {
            var t, n, r = l(this, ke, "URL"), i = arguments.length > 1 ? arguments[1] : void 0, a = String(e),
                c = k(r, {type: "URL"});
            if (void 0 !== i) if (i instanceof ke) t = _(i); else if (n = Se(t = {}, String(i))) throw TypeError(n);
            if (n = Se(c, a, null, t)) throw TypeError(n);
            var u = c.searchParams = new w, s = S(u);
            s.updateSearchParams(c.query), s.updateURL = function () {
                c.query = String(u) || null
            }, o || (r.href = Ae.call(r), r.origin = xe.call(r), r.protocol = Pe.call(r), r.username = Ie.call(r), r.password = Ee.call(r), r.host = Re.call(r), r.hostname = je.call(r), r.port = Te.call(r), r.pathname = Oe.call(r), r.search = Ce.call(r), r.searchParams = ze.call(r), r.hash = Be.call(r))
        }, _e = ke.prototype, Ae = function () {
            var e = _(this), t = e.scheme, n = e.username, r = e.password, i = e.host, o = e.port, a = e.path, c = e.query,
                u = e.fragment, s = t + ":";
            return null !== i ? (s += "//", Q(e) && (s += n + (r ? ":" + r : "") + "@"), s += U(i), null !== o && (s += ":" + o)) : "file" == t && (s += "//"), s += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== c && (s += "?" + c), null !== u && (s += "#" + u), s
        }, xe = function () {
            var e = _(this), t = e.scheme, n = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
            return "file" != t && $(e) ? t + "://" + U(e.host) + (null !== n ? ":" + n : "") : "null"
        }, Pe = function () {
            return _(this).scheme + ":"
        }, Ie = function () {
            return _(this).username
        }, Ee = function () {
            return _(this).password
        }, Re = function () {
            var e = _(this), t = e.host, n = e.port;
            return null === t ? "" : null === n ? U(t) : U(t) + ":" + n
        }, je = function () {
            var e = _(this).host;
            return null === e ? "" : U(e)
        }, Te = function () {
            var e = _(this).port;
            return null === e ? "" : String(e)
        }, Oe = function () {
            var e = _(this), t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        }, Ce = function () {
            var e = _(this).query;
            return e ? "?" + e : ""
        }, ze = function () {
            return _(this).searchParams
        }, Be = function () {
            var e = _(this).fragment;
            return e ? "#" + e : ""
        }, Le = function (e, t) {
            return {get: e, set: t, configurable: !0, enumerable: !0}
        };
    if (o && u(_e, {
        href: Le(Ae, (function (e) {
            var t = _(this), n = String(e), r = Se(t, n);
            if (r) throw TypeError(r);
            S(t.searchParams).updateSearchParams(t.query)
        })), origin: Le(xe), protocol: Le(Pe, (function (e) {
            var t = _(this);
            Se(t, String(e) + ":", ee)
        })), username: Le(Ie, (function (e) {
            var t = _(this), n = p(String(e));
            if (!Y(t)) {
                t.username = "";
                for (var r = 0; r < n.length; r++) t.username += H(n[r], G)
            }
        })), password: Le(Ee, (function (e) {
            var t = _(this), n = p(String(e));
            if (!Y(t)) {
                t.password = "";
                for (var r = 0; r < n.length; r++) t.password += H(n[r], G)
            }
        })), host: Le(Re, (function (e) {
            var t = _(this);
            t.cannotBeABaseURL || Se(t, String(e), le)
        })), hostname: Le(je, (function (e) {
            var t = _(this);
            t.cannotBeABaseURL || Se(t, String(e), fe)
        })), port: Le(Te, (function (e) {
            var t = _(this);
            Y(t) || ("" == (e = String(e)) ? t.port = null : Se(t, e, de))
        })), pathname: Le(Oe, (function (e) {
            var t = _(this);
            t.cannotBeABaseURL || (t.path = [], Se(t, e + "", ye))
        })), search: Le(Ce, (function (e) {
            var t = _(this);
            "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Se(t, e, be)), S(t.searchParams).updateSearchParams(t.query)
        })), searchParams: Le(ze), hash: Le(Be, (function (e) {
            var t = _(this);
            "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Se(t, e, we)) : t.fragment = null
        }))
    }), s(_e, "toJSON", (function () {
        return Ae.call(this)
    }), {enumerable: !0}), s(_e, "toString", (function () {
        return Ae.call(this)
    }), {enumerable: !0}), b) {
        var Me = b.createObjectURL, De = b.revokeObjectURL;
        Me && s(ke, "createObjectURL", (function (e) {
            return Me.apply(b, arguments)
        })), De && s(ke, "revokeObjectURL", (function (e) {
            return De.apply(b, arguments)
        }))
    }
    y(ke, "URL"), i({global: !0, forced: !a, sham: !o}, {URL: ke})
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    var r = n(5), i = n(31), o = "".split;
    e.exports = r((function () {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function (e) {
        return "String" == i(e) ? o.call(e, "") : Object(e)
    } : Object
}, function (e, t, n) {
    var r = n(5), i = /#|\.prototype\./, o = function (e, t) {
        var n = c[a(e)];
        return n == s || n != u && ("function" == typeof t ? r(t) : !!t)
    }, a = o.normalize = function (e) {
        return String(e).replace(i, ".").toLowerCase()
    }, c = o.data = {}, u = o.NATIVE = "N", s = o.POLYFILL = "P";
    e.exports = o
}, function (e, t, n) {
    var r = n(5), i = n(8), o = n(103), a = i("species");
    e.exports = function (e) {
        return o >= 51 || !r((function () {
            var t = [];
            return (t.constructor = {})[a] = function () {
                return {foo: 1}
            }, 1 !== t[e](Boolean).foo
        }))
    }
}, function (e, t, n) {
    var r, i = n(1), o = n(129), a = n(101), c = n(75), u = n(130), s = n(94), l = n(97), f = l("IE_PROTO"),
        d = function () {
        }, p = function (e) {
            return "<script>" + e + "<\/script>"
        }, h = function () {
            try {
                r = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {
            }
            var e, t;
            h = r ? function (e) {
                e.write(p("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(r) : ((t = s("iframe")).style.display = "none", u.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F);
            for (var n = a.length; n--;) delete h.prototype[a[n]];
            return h()
        };
    c[f] = !0, e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (d.prototype = i(e), n = new d, d.prototype = null, n[f] = e) : n = h(), void 0 === t ? n : o(n, t)
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(53).some, o = n(54), a = n(23), c = o("some"), u = a("some");
    r({target: "Array", proto: !0, forced: !c || !u}, {
        some: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t) {
    e.exports = function (e, t, n) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(20), i = n(1), o = n(5), a = n(82), c = RegExp.prototype, u = c.toString, s = o((function () {
        return "/a/b" != u.call({source: "a", flags: "b"})
    })), l = "toString" != u.name;
    (s || l) && r(RegExp.prototype, "toString", (function () {
        var e = i(this), t = String(e.source), n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in c) ? a.call(e) : n)
    }), {unsafe: !0})
}, function (e, t, n) {
    var r = n(12), i = n(93), o = n(64), a = n(36), c = n(74), u = n(17), s = n(121),
        l = Object.getOwnPropertyDescriptor;
    t.f = r ? l : function (e, t) {
        if (e = a(e), t = c(t, !0), s) try {
            return l(e, t)
        } catch (e) {
        }
        if (u(e, t)) return o(!i.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    var r = n(13);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
        if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
        if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var r = n(124), i = n(101).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return r(e, i)
    }
}, function (e, t, n) {
    var r = n(31);
    e.exports = Array.isArray || function (e) {
        return "Array" == r(e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(74), i = n(19), o = n(64);
    e.exports = function (e, t, n) {
        var a = r(t);
        a in e ? i.f(e, a, o(0, n)) : e[a] = n
    }
}, function (e, t, n) {
    var r = n(8), i = n(68), o = n(19), a = r("unscopables"), c = Array.prototype;
    null == c[a] && o.f(c, a, {configurable: !0, value: i(null)}), e.exports = function (e) {
        c[a][e] = !0
    }
}, function (e, t, n) {
    var r = n(110), i = n(69), o = n(8)("iterator");
    e.exports = function (e) {
        if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function (e, t, n) {
    var r = n(13), i = n(31), o = n(8)("match");
    e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function () {
        var e = r(this), t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    "use strict";
    var r, i, o = n(82), a = n(144), c = RegExp.prototype.exec, u = String.prototype.replace, s = c,
        l = (r = /a/, i = /b*/g, c.call(r, "a"), c.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
        f = a.UNSUPPORTED_Y || a.BROKEN_CARET, d = void 0 !== /()??/.exec("")[1];
    (l || d || f) && (s = function (e) {
        var t, n, r, i, a = this, s = f && a.sticky, p = o.call(a), h = a.source, v = 0, y = e;
        return s && (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"), y = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (h = "(?: " + h + ")", y = " " + y, v++), n = new RegExp("^(?:" + h + ")", p)), d && (n = new RegExp("^" + h + "$(?!\\s)", p)), l && (t = a.lastIndex), r = c.call(s ? n : a, y), s ? r ? (r.input = r.input.slice(v), r[0] = r[0].slice(v), r.index = a.lastIndex, a.lastIndex += r[0].length) : a.lastIndex = 0 : l && r && (a.lastIndex = a.global ? r.index + r[0].length : t), d && r && r.length > 1 && u.call(r[0], n, (function () {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    }), e.exports = s
}, function (e, t, n) {
    "use strict";
    n(22);
    var r = n(20), i = n(5), o = n(8), a = n(83), c = n(34), u = o("species"), s = !i((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {a: "7"}, e
            }, "7" !== "".replace(e, "$<a>")
        })), l = "$0" === "a".replace(/./, "$0"), f = o("replace"), d = !!/./[f] && "" === /./[f]("a", "$0"),
        p = !i((function () {
            var e = /(?:)/, t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }));
    e.exports = function (e, t, n, f) {
        var h = o(e), v = !i((function () {
            var t = {};
            return t[h] = function () {
                return 7
            }, 7 != ""[e](t)
        })), y = v && !i((function () {
            var t = !1, n = /a/;
            return "split" === e && ((n = {}).constructor = {}, n.constructor[u] = function () {
                return n
            }, n.flags = "", n[h] = /./[h]), n.exec = function () {
                return t = !0, null
            }, n[h](""), !t
        }));
        if (!v || !y || "replace" === e && (!s || !l || d) || "split" === e && !p) {
            var g = /./[h], m = n(h, ""[e], (function (e, t, n, r, i) {
                return t.exec === a ? v && !i ? {done: !0, value: g.call(t, n, r)} : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {done: !1}
            }), {REPLACE_KEEPS_$0: l, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d}), b = m[0], w = m[1];
            r(String.prototype, e, b), r(RegExp.prototype, h, 2 == t ? function (e, t) {
                return w.call(e, this, t)
            } : function (e) {
                return w.call(e, this)
            })
        }
        f && c(RegExp.prototype[h], "sham", !0)
    }
}, function (e, t, n) {
    var r = n(31), i = n(83);
    e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var o = n.call(e, t);
            if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return i.call(e, t)
    }
}, function (e, t, n) {
    var r = n(1), i = n(80);
    e.exports = function (e) {
        var t = i(e);
        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
        return r(t.call(e))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(53).find, o = n(79), a = n(23), c = !0, u = a("find");
    "find" in [] && Array(1).find((function () {
        c = !1
    })), r({target: "Array", proto: !0, forced: c || !u}, {
        find: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("find")
}, function (e, t, n) {
    var r = n(27), i = "[" + n(89) + "]", o = RegExp("^" + i + i + "*"), a = RegExp(i + i + "*$"), c = function (e) {
        return function (t) {
            var n = String(r(t));
            return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n
        }
    };
    e.exports = {start: c(1), end: c(2), trim: c(3)}
}, function (e, t) {
    e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(177).left, o = n(54), a = n(23), c = o("reduce"), u = a("reduce", {1: 0});
    r({target: "Array", proto: !0, forced: !c || !u}, {
        reduce: function (e) {
            return i(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(88).trim;
    r({target: "String", proto: !0, forced: n(182)("trim")}, {
        trim: function () {
            return i(this)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(7), o = n(32), a = n(5), c = n(54), u = [], s = u.sort, l = a((function () {
        u.sort(void 0)
    })), f = a((function () {
        u.sort(null)
    })), d = c("sort");
    r({target: "Array", proto: !0, forced: l || !f || !d}, {
        sort: function (e) {
            return void 0 === e ? s.call(o(this)) : s.call(o(this), i(e))
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({1: 2}, 1);
    t.f = o ? function (e) {
        var t = i(this, e);
        return !!t && t.enumerable
    } : r
}, function (e, t, n) {
    var r = n(6), i = n(13), o = r.document, a = i(o) && i(o.createElement);
    e.exports = function (e) {
        return a ? o.createElement(e) : {}
    }
}, function (e, t, n) {
    var r = n(6), i = n(34);
    e.exports = function (e, t) {
        try {
            i(r, e, t)
        } catch (n) {
            r[e] = t
        }
        return t
    }
}, function (e, t, n) {
    var r = n(122), i = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
        return i.call(e)
    }), e.exports = r.inspectSource
}, function (e, t, n) {
    var r = n(123), i = n(98), o = r("keys");
    e.exports = function (e) {
        return o[e] || (o[e] = i(e))
    }
}, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
    }
}, function (e, t, n) {
    var r = n(36), i = n(28), o = n(100), a = function (e) {
        return function (t, n, a) {
            var c, u = r(t), s = i(u.length), l = o(a, s);
            if (e && n != n) {
                for (; s > l;) if ((c = u[l++]) != c) return !0
            } else for (; s > l; l++) if ((e || l in u) && u[l] === n) return e || l || 0;
            return !e && -1
        }
    };
    e.exports = {includes: a(!0), indexOf: a(!1)}
}, function (e, t, n) {
    var r = n(52), i = Math.max, o = Math.min;
    e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? i(n + t, 0) : o(n, t)
    }
}, function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (e, t, n) {
    var r = n(13), i = n(77), o = n(8)("species");
    e.exports = function (e, t) {
        var n;
        return i(e) && ("function" != typeof (n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    }
}, function (e, t, n) {
    var r, i, o = n(6), a = n(104), c = o.process, u = c && c.versions, s = u && u.v8;
    s ? i = (r = s.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i
}, function (e, t, n) {
    var r = n(10);
    e.exports = r("navigator", "userAgent") || ""
}, function (e, t, n) {
    var r = n(124), i = n(101);
    e.exports = Object.keys || function (e) {
        return r(e, i)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(131), o = n(107), a = n(108), c = n(61), u = n(34), s = n(20), l = n(8), f = n(2), d = n(69),
        p = n(132), h = p.IteratorPrototype, v = p.BUGGY_SAFARI_ITERATORS, y = l("iterator"), g = function () {
            return this
        };
    e.exports = function (e, t, n, l, p, m, b) {
        i(n, t, l);
        var w, S, k, _ = function (e) {
                if (e === p && E) return E;
                if (!v && e in P) return P[e];
                switch (e) {
                    case"keys":
                    case"values":
                    case"entries":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            }, A = t + " Iterator", x = !1, P = e.prototype, I = P[y] || P["@@iterator"] || p && P[p], E = !v && I || _(p),
            R = "Array" == t && P.entries || I;
        if (R && (w = o(R.call(new e)), h !== Object.prototype && w.next && (f || o(w) === h || (a ? a(w, h) : "function" != typeof w[y] && u(w, y, g)), c(w, A, !0, !0), f && (d[A] = g))), "values" == p && I && "values" !== I.name && (x = !0, E = function () {
            return I.call(this)
        }), f && !b || P[y] === E || u(P, y, E), d[t] = E, p) if (S = {
            values: _("values"),
            keys: m ? E : _("keys"),
            entries: _("entries")
        }, b) for (k in S) (v || x || !(k in P)) && s(P, k, S[k]); else r({target: t, proto: !0, forced: v || x}, S);
        return S
    }
}, function (e, t, n) {
    var r = n(17), i = n(32), o = n(97), a = n(133), c = o("IE_PROTO"), u = Object.prototype;
    e.exports = a ? Object.getPrototypeOf : function (e) {
        return e = i(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
    }
}, function (e, t, n) {
    var r = n(1), i = n(159);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e, t = !1, n = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
        } catch (e) {
        }
        return function (n, o) {
            return r(n), i(o), t ? e.call(n, o) : n.__proto__ = o, n
        }
    }() : void 0)
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(13), o = n(77), a = n(100), c = n(28), u = n(36), s = n(78), l = n(8), f = n(67), d = n(23),
        p = f("slice"), h = d("slice", {ACCESSORS: !0, 0: 0, 1: 2}), v = l("species"), y = [].slice, g = Math.max;
    r({target: "Array", proto: !0, forced: !p || !h}, {
        slice: function (e, t) {
            var n, r, l, f = u(this), d = c(f.length), p = a(e, d), h = a(void 0 === t ? d : t, d);
            if (o(f) && ("function" != typeof (n = f.constructor) || n !== Array && !o(n.prototype) ? i(n) && null === (n = n[v]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return y.call(f, p, h);
            for (r = new (void 0 === n ? Array : n)(g(h - p, 0)), l = 0; p < h; p++, l++) p in f && s(r, l, f[p]);
            return r.length = l, r
        }
    })
}, function (e, t, n) {
    var r = n(111), i = n(31), o = n(8)("toStringTag"), a = "Arguments" == i(function () {
        return arguments
    }());
    e.exports = r ? i : function (e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {
            }
        }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
}, function (e, t, n) {
    var r = {};
    r[n(8)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
}, function (e, t, n) {
    var r = n(13), i = n(108);
    e.exports = function (e, t, n) {
        var o, a;
        return i && "function" == typeof (o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && i(e, a), e
    }
}, function (e, t, n) {
    var r = n(20);
    e.exports = function (e, t, n) {
        for (var i in t) r(e, i, t[i], n);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(10), i = n(19), o = n(8), a = n(12), c = o("species");
    e.exports = function (e) {
        var t = r(e), n = i.f;
        a && t && !t[c] && n(t, c, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    var r = n(0), i = n(140).entries;
    r({target: "Object", stat: !0}, {
        entries: function (e) {
            return i(e)
        }
    })
}, function (e, t, n) {
    var r = n(52), i = n(27), o = function (e) {
        return function (t, n) {
            var o, a, c = String(i(t)), u = r(n), s = c.length;
            return u < 0 || u >= s ? e ? "" : void 0 : (o = c.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === s || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? c.charAt(u) : o : e ? c.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    };
    e.exports = {codeAt: o(!1), charAt: o(!0)}
}, function (e, t, n) {
    "use strict";
    var r = n(116).charAt;
    e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}, function (e, t, n) {
    var r = n(0), i = n(175);
    r({global: !0, forced: parseFloat != i}, {parseFloat: i})
}, function (e, t, n) {
    "use strict";
    var r = n(12), i = n(6), o = n(66), a = n(20), c = n(17), u = n(31), s = n(112), l = n(74), f = n(5), d = n(68),
        p = n(76).f, h = n(73).f, v = n(19).f, y = n(88).trim, g = i.Number, m = g.prototype, b = "Number" == u(d(m)),
        w = function (e) {
            var t, n, r, i, o, a, c, u, s = l(e, !1);
            if ("string" == typeof s && s.length > 2) if (43 === (t = (s = y(s)).charCodeAt(0)) || 45 === t) {
                if (88 === (n = s.charCodeAt(2)) || 120 === n) return NaN
            } else if (48 === t) {
                switch (s.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, i = 55;
                        break;
                    default:
                        return +s
                }
                for (a = (o = s.slice(2)).length, c = 0; c < a; c++) if ((u = o.charCodeAt(c)) < 48 || u > i) return NaN;
                return parseInt(o, r)
            }
            return +s
        };
    if (o("Number", !g(" 0o1") || !g("0b1") || g("+0x1"))) {
        for (var S, k = function (e) {
            var t = arguments.length < 1 ? 0 : e, n = this;
            return n instanceof k && (b ? f((function () {
                m.valueOf.call(n)
            })) : "Number" != u(n)) ? s(new g(w(t)), n, k) : w(t)
        }, _ = r ? p(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), A = 0; _.length > A; A++) c(g, S = _[A]) && !c(k, S) && v(k, S, h(g, S));
        k.prototype = m, m.constructor = k, a(i, "Number", k)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(84), i = n(1), o = n(32), a = n(28), c = n(52), u = n(27), s = n(117), l = n(85), f = Math.max,
        d = Math.min, p = Math.floor, h = /\$([$&'`]|\d\d?|<[^>]*>)/g, v = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, (function (e, t, n, r) {
        var y = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, g = r.REPLACE_KEEPS_$0, m = y ? "$" : "$0";
        return [function (n, r) {
            var i = u(this), o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }, function (e, r) {
            if (!y && g || "string" == typeof r && -1 === r.indexOf(m)) {
                var o = n(t, e, this, r);
                if (o.done) return o.value
            }
            var u = i(e), p = String(this), h = "function" == typeof r;
            h || (r = String(r));
            var v = u.global;
            if (v) {
                var w = u.unicode;
                u.lastIndex = 0
            }
            for (var S = []; ;) {
                var k = l(u, p);
                if (null === k) break;
                if (S.push(k), !v) break;
                "" === String(k[0]) && (u.lastIndex = s(p, a(u.lastIndex), w))
            }
            for (var _, A = "", x = 0, P = 0; P < S.length; P++) {
                k = S[P];
                for (var I = String(k[0]), E = f(d(c(k.index), p.length), 0), R = [], j = 1; j < k.length; j++) R.push(void 0 === (_ = k[j]) ? _ : String(_));
                var T = k.groups;
                if (h) {
                    var O = [I].concat(R, E, p);
                    void 0 !== T && O.push(T);
                    var C = String(r.apply(void 0, O))
                } else C = b(I, p, E, R, T, r);
                E >= x && (A += p.slice(x, E) + C, x = E + I.length)
            }
            return A + p.slice(x)
        }];

        function b(e, n, r, i, a, c) {
            var u = r + e.length, s = i.length, l = v;
            return void 0 !== a && (a = o(a), l = h), t.call(c, l, (function (t, o) {
                var c;
                switch (o.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return e;
                    case"`":
                        return n.slice(0, r);
                    case"'":
                        return n.slice(u);
                    case"<":
                        c = a[o.slice(1, -1)];
                        break;
                    default:
                        var l = +o;
                        if (0 === l) return t;
                        if (l > s) {
                            var f = p(l / 10);
                            return 0 === f ? t : f <= s ? void 0 === i[f - 1] ? o.charAt(1) : i[f - 1] + o.charAt(1) : t
                        }
                        c = i[l - 1]
                }
                return void 0 === c ? "" : c
            }))
        }
    }))
}, function (e, t, n) {
    var r = n(12), i = n(5), o = n(94);
    e.exports = !r && !i((function () {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t, n) {
    var r = n(6), i = n(95), o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    e.exports = o
}, function (e, t, n) {
    var r = n(2), i = n(122);
    (e.exports = function (e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.6.5",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t, n) {
    var r = n(17), i = n(36), o = n(99).indexOf, a = n(75);
    e.exports = function (e, t) {
        var n, c = i(e), u = 0, s = [];
        for (n in c) !r(a, n) && r(c, n) && s.push(n);
        for (; t.length > u;) r(c, n = t[u++]) && (~o(s, n) || s.push(n));
        return s
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    "use strict";
    var r = n(53).forEach, i = n(54), o = n(23), a = i("forEach"), c = o("forEach");
    e.exports = a && c ? [].forEach : function (e) {
        return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
}, function (e, t, n) {
    var r = n(5);
    e.exports = !!Object.getOwnPropertySymbols && !r((function () {
        return !String(Symbol())
    }))
}, function (e, t) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function (e, t, n) {
    var r = n(12), i = n(19), o = n(1), a = n(105);
    e.exports = r ? Object.defineProperties : function (e, t) {
        o(e);
        for (var n, r = a(t), c = r.length, u = 0; c > u;) i.f(e, n = r[u++], t[n]);
        return e
    }
}, function (e, t, n) {
    var r = n(10);
    e.exports = r("document", "documentElement")
}, function (e, t, n) {
    "use strict";
    var r = n(132).IteratorPrototype, i = n(68), o = n(64), a = n(61), c = n(69), u = function () {
        return this
    };
    e.exports = function (e, t, n) {
        var s = t + " Iterator";
        return e.prototype = i(r, {next: o(1, n)}), a(e, s, !1, !0), c[s] = u, e
    }
}, function (e, t, n) {
    "use strict";
    var r, i, o, a = n(107), c = n(34), u = n(17), s = n(8), l = n(2), f = s("iterator"), d = !1;
    [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : d = !0), null == r && (r = {}), l || u(r, f) || c(r, f, (function () {
        return this
    })), e.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d}
}, function (e, t, n) {
    var r = n(5);
    e.exports = !r((function () {
        function e() {
        }

        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(6), o = n(66), a = n(20), c = n(135), u = n(3), s = n(71), l = n(13), f = n(5), d = n(138),
        p = n(61), h = n(112);
    e.exports = function (e, t, n) {
        var v = -1 !== e.indexOf("Map"), y = -1 !== e.indexOf("Weak"), g = v ? "set" : "add", m = i[e],
            b = m && m.prototype, w = m, S = {}, k = function (e) {
                var t = b[e];
                a(b, e, "add" == e ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this
                } : "delete" == e ? function (e) {
                    return !(y && !l(e)) && t.call(this, 0 === e ? 0 : e)
                } : "get" == e ? function (e) {
                    return y && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                } : "has" == e ? function (e) {
                    return !(y && !l(e)) && t.call(this, 0 === e ? 0 : e)
                } : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this
                })
            };
        if (o(e, "function" != typeof m || !(y || b.forEach && !f((function () {
            (new m).entries().next()
        }))))) w = n.getConstructor(t, e, v, g), c.REQUIRED = !0; else if (o(e, !0)) {
            var _ = new w, A = _[g](y ? {} : -0, 1) != _, x = f((function () {
                _.has(1)
            })), P = d((function (e) {
                new m(e)
            })), I = !y && f((function () {
                for (var e = new m, t = 5; t--;) e[g](t, t);
                return !e.has(-0)
            }));
            P || ((w = t((function (t, n) {
                s(t, w, e);
                var r = h(new m, t, w);
                return null != n && u(n, r[g], r, v), r
            }))).prototype = b, b.constructor = w), (x || I) && (k("delete"), k("has"), v && k("get")), (I || A) && k(g), y && b.clear && delete b.clear
        }
        return S[e] = w, r({global: !0, forced: w != m}, S), p(w, e), y || n.setStrong(w, e, v), w
    }
}, function (e, t, n) {
    var r = n(75), i = n(13), o = n(17), a = n(19).f, c = n(98), u = n(160), s = c("meta"), l = 0,
        f = Object.isExtensible || function () {
            return !0
        }, d = function (e) {
            a(e, s, {value: {objectID: "O" + ++l, weakData: {}}})
        }, p = e.exports = {
            REQUIRED: !1, fastKey: function (e, t) {
                if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!o(e, s)) {
                    if (!f(e)) return "F";
                    if (!t) return "E";
                    d(e)
                }
                return e[s].objectID
            }, getWeakData: function (e, t) {
                if (!o(e, s)) {
                    if (!f(e)) return !0;
                    if (!t) return !1;
                    d(e)
                }
                return e[s].weakData
            }, onFreeze: function (e) {
                return u && p.REQUIRED && f(e) && !o(e, s) && d(e), e
            }
        };
    r[s] = !0
}, function (e, t, n) {
    var r = n(8), i = n(69), o = r("iterator"), a = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (i.Array === e || a[o] === e)
    }
}, function (e, t, n) {
    var r = n(1);
    e.exports = function (e, t, n, i) {
        try {
            return i ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var o = e.return;
            throw void 0 !== o && r(o.call(e)), t
        }
    }
}, function (e, t, n) {
    var r = n(8)("iterator"), i = !1;
    try {
        var o = 0, a = {
            next: function () {
                return {done: !!o++}
            }, return: function () {
                i = !0
            }
        };
        a[r] = function () {
            return this
        }, Array.from(a, (function () {
            throw 2
        }))
    } catch (e) {
    }
    e.exports = function (e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
            var o = {};
            o[r] = function () {
                return {
                    next: function () {
                        return {done: n = !0}
                    }
                }
            }, e(o)
        } catch (e) {
        }
        return n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(19).f, i = n(68), o = n(113), a = n(9), c = n(71), u = n(3), s = n(106), l = n(114), f = n(12),
        d = n(135).fastKey, p = n(37), h = p.set, v = p.getterFor;
    e.exports = {
        getConstructor: function (e, t, n, s) {
            var l = e((function (e, r) {
                c(e, l, t), h(e, {
                    type: t,
                    index: i(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                }), f || (e.size = 0), null != r && u(r, e[s], e, n)
            })), p = v(t), y = function (e, t, n) {
                var r, i, o = p(e), a = g(e, t);
                return a ? a.value = n : (o.last = a = {
                    index: i = d(t, !0),
                    key: t,
                    value: n,
                    previous: r = o.last,
                    next: void 0,
                    removed: !1
                }, o.first || (o.first = a), r && (r.next = a), f ? o.size++ : e.size++, "F" !== i && (o.index[i] = a)), e
            }, g = function (e, t) {
                var n, r = p(e), i = d(t);
                if ("F" !== i) return r.index[i];
                for (n = r.first; n; n = n.next) if (n.key == t) return n
            };
            return o(l.prototype, {
                clear: function () {
                    for (var e = p(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                    e.first = e.last = void 0, f ? e.size = 0 : this.size = 0
                }, delete: function (e) {
                    var t = p(this), n = g(this, e);
                    if (n) {
                        var r = n.next, i = n.previous;
                        delete t.index[n.index], n.removed = !0, i && (i.next = r), r && (r.previous = i), t.first == n && (t.first = r), t.last == n && (t.last = i), f ? t.size-- : this.size--
                    }
                    return !!n
                }, forEach: function (e) {
                    for (var t, n = p(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                }, has: function (e) {
                    return !!g(this, e)
                }
            }), o(l.prototype, n ? {
                get: function (e) {
                    var t = g(this, e);
                    return t && t.value
                }, set: function (e, t) {
                    return y(this, 0 === e ? 0 : e, t)
                }
            } : {
                add: function (e) {
                    return y(this, e = 0 === e ? 0 : e, e)
                }
            }), f && r(l.prototype, "size", {
                get: function () {
                    return p(this).size
                }
            }), l
        }, setStrong: function (e, t, n) {
            var r = t + " Iterator", i = v(t), o = v(r);
            s(e, t, (function (e, t) {
                h(this, {type: r, target: e, state: i(e), kind: t, last: void 0})
            }), (function () {
                for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                    value: n.key,
                    done: !1
                } : "values" == t ? {value: n.value, done: !1} : {
                    value: [n.key, n.value],
                    done: !1
                } : (e.target = void 0, {value: void 0, done: !0})
            }), n ? "entries" : "values", !n, !0), l(t)
        }
    }
}, function (e, t, n) {
    var r = n(12), i = n(105), o = n(36), a = n(93).f, c = function (e) {
        return function (t) {
            for (var n, c = o(t), u = i(c), s = u.length, l = 0, f = []; s > l;) n = u[l++], r && !a.call(c, n) || f.push(e ? [n, c[n]] : c[n]);
            return f
        }
    };
    e.exports = {entries: c(!0), values: c(!1)}
}, function (e, t, n) {
    var r, i, o, a = n(6), c = n(5), u = n(31), s = n(9), l = n(130), f = n(94), d = n(142), p = a.location,
        h = a.setImmediate, v = a.clearImmediate, y = a.process, g = a.MessageChannel, m = a.Dispatch, b = 0, w = {},
        S = function (e) {
            if (w.hasOwnProperty(e)) {
                var t = w[e];
                delete w[e], t()
            }
        }, k = function (e) {
            return function () {
                S(e)
            }
        }, _ = function (e) {
            S(e.data)
        }, A = function (e) {
            a.postMessage(e + "", p.protocol + "//" + p.host)
        };
    h && v || (h = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return w[++b] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, r(b), b
    }, v = function (e) {
        delete w[e]
    }, "process" == u(y) ? r = function (e) {
        y.nextTick(k(e))
    } : m && m.now ? r = function (e) {
        m.now(k(e))
    } : g && !d ? (o = (i = new g).port2, i.port1.onmessage = _, r = s(o.postMessage, o, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || c(A) || "file:" === p.protocol ? r = "onreadystatechange" in f("script") ? function (e) {
        l.appendChild(f("script")).onreadystatechange = function () {
            l.removeChild(this), S(e)
        }
    } : function (e) {
        setTimeout(k(e), 0)
    } : (r = A, a.addEventListener("message", _, !1))), e.exports = {set: h, clear: v}
}, function (e, t, n) {
    var r = n(104);
    e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
}, function (e, t, n) {
    "use strict";
    var r = n(7), i = function (e) {
        var t, n;
        this.promise = new e((function (e, r) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = r
        })), this.resolve = r(t), this.reject = r(n)
    };
    e.exports.f = function (e) {
        return new i(e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(5);

    function i(e, t) {
        return RegExp(e, t)
    }

    t.UNSUPPORTED_Y = r((function () {
        var e = i("a", "y");
        return e.lastIndex = 2, null != e.exec("abcd")
    })), t.BROKEN_CARET = r((function () {
        var e = i("^r", "gy");
        return e.lastIndex = 2, null != e.exec("str")
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(1), i = n(7);
    e.exports = function () {
        for (var e, t = r(this), n = i(t.delete), o = !0, a = 0, c = arguments.length; a < c; a++) e = n.call(t, arguments[a]), o = o && e;
        return !!o
    }
}, function (e, t, n) {
    var r = n(5), i = n(8), o = n(2), a = i("iterator");
    e.exports = !r((function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, n = "";
        return e.pathname = "c%20d", t.forEach((function (e, r) {
            t.delete("b"), n += r + e
        })), o && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(12), i = n(5), o = n(105), a = n(125), c = n(93), u = n(32), s = n(65), l = Object.assign,
        f = Object.defineProperty;
    e.exports = !l || i((function () {
        if (r && 1 !== l({b: 1}, l(f({}, "a", {
            enumerable: !0, get: function () {
                f(this, "b", {value: 3, enumerable: !1})
            }
        }), {b: 2})).b) return !0;
        var e = {}, t = {}, n = Symbol();
        return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (e) {
            t[e] = e
        })), 7 != l({}, e)[n] || "abcdefghijklmnopqrst" != o(l({}, t)).join("")
    })) ? function (e, t) {
        for (var n = u(e), i = arguments.length, l = 1, f = a.f, d = c.f; i > l;) for (var p, h = s(arguments[l++]), v = f ? o(h).concat(f(h)) : o(h), y = v.length, g = 0; y > g;) p = v[g++], r && !d.call(h, p) || (n[p] = h[p]);
        return n
    } : l
}, function (e, t, n) {
    var r = n(12), i = n(19).f, o = Function.prototype, a = o.toString, c = /^\s*function ([^ (]*)/;
    r && !("name" in o) && i(o, "name", {
        configurable: !0, get: function () {
            try {
                return a.call(this).match(c)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function (e, t, n) {
    var r = n(0), i = n(181);
    r({global: !0, forced: parseInt != i}, {parseInt: i})
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(53).every, o = n(54), a = n(23), c = o("every"), u = a("every");
    r({target: "Array", proto: !0, forced: !c || !u}, {
        every: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var r = n(0), i = n(147);
    r({target: "Object", stat: !0, forced: Object.assign !== i}, {assign: i})
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(53).findIndex, o = n(79), a = n(23), c = !0, u = a("findIndex");
    "findIndex" in [] && Array(1).findIndex((function () {
        c = !1
    })), r({target: "Array", proto: !0, forced: c || !u}, {
        findIndex: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("findIndex")
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var r = n(6), i = n(96), o = r.WeakMap;
    e.exports = "function" == typeof o && /native code/.test(i(o))
}, function (e, t, n) {
    var r = n(17), i = n(156), o = n(73), a = n(19);
    e.exports = function (e, t) {
        for (var n = i(t), c = a.f, u = o.f, s = 0; s < n.length; s++) {
            var l = n[s];
            r(e, l) || c(e, l, u(t, l))
        }
    }
}, function (e, t, n) {
    var r = n(10), i = n(76), o = n(125), a = n(1);
    e.exports = r("Reflect", "ownKeys") || function (e) {
        var t = i.f(a(e)), n = o.f;
        return n ? t.concat(n(e)) : t
    }
}, function (e, t, n) {
    var r = n(6);
    e.exports = r
}, function (e, t, n) {
    var r = n(127);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (e, t, n) {
    var r = n(13);
    e.exports = function (e) {
        if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e
    }
}, function (e, t, n) {
    var r = n(5);
    e.exports = !r((function () {
        return Object.isExtensible(Object.preventExtensions({}))
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(111), i = n(110);
    e.exports = r ? {}.toString : function () {
        return "[object " + i(this) + "]"
    }
}, function (e, t, n) {
    var r = n(6);
    e.exports = r.Promise
}, function (e, t, n) {
    var r, i, o, a, c, u, s, l, f = n(6), d = n(73).f, p = n(31), h = n(141).set, v = n(142),
        y = f.MutationObserver || f.WebKitMutationObserver, g = f.process, m = f.Promise, b = "process" == p(g),
        w = d(f, "queueMicrotask"), S = w && w.value;
    S || (r = function () {
        var e, t;
        for (b && (e = g.domain) && e.exit(); i;) {
            t = i.fn, i = i.next;
            try {
                t()
            } catch (e) {
                throw i ? a() : o = void 0, e
            }
        }
        o = void 0, e && e.enter()
    }, b ? a = function () {
        g.nextTick(r)
    } : y && !v ? (c = !0, u = document.createTextNode(""), new y(r).observe(u, {characterData: !0}), a = function () {
        u.data = c = !c
    }) : m && m.resolve ? (s = m.resolve(void 0), l = s.then, a = function () {
        l.call(s, r)
    }) : a = function () {
        h.call(f, r)
    }), e.exports = S || function (e) {
        var t = {fn: e, next: void 0};
        o && (o.next = t), i || (i = t, a()), o = t
    }
}, function (e, t, n) {
    var r = n(1), i = n(13), o = n(143);
    e.exports = function (e, t) {
        if (r(e), i(t) && t.constructor === e) return t;
        var n = o.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function (e, t, n) {
    var r = n(6);
    e.exports = function (e, t) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {error: !1, value: e()}
        } catch (e) {
            return {error: !0, value: e}
        }
    }
}, function (e, t, n) {
    var r = n(12), i = n(6), o = n(66), a = n(112), c = n(19).f, u = n(76).f, s = n(81), l = n(82), f = n(144),
        d = n(20), p = n(5), h = n(37).set, v = n(114), y = n(8)("match"), g = i.RegExp, m = g.prototype, b = /a/g,
        w = /a/g, S = new g(b) !== b, k = f.UNSUPPORTED_Y;
    if (r && o("RegExp", !S || k || p((function () {
        return w[y] = !1, g(b) != b || g(w) == w || "/a/i" != g(b, "i")
    })))) {
        for (var _ = function (e, t) {
            var n, r = this instanceof _, i = s(e), o = void 0 === t;
            if (!r && i && e.constructor === _ && o) return e;
            S ? i && !o && (e = e.source) : e instanceof _ && (o && (t = l.call(e)), e = e.source), k && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
            var c = a(S ? new g(e, t) : g(e, t), r ? this : m, _);
            return k && n && h(c, {sticky: n}), c
        }, A = function (e) {
            e in _ || c(_, e, {
                configurable: !0, get: function () {
                    return g[e]
                }, set: function (t) {
                    g[e] = t
                }
            })
        }, x = u(g), P = 0; x.length > P;) A(x[P++]);
        m.constructor = _, _.prototype = m, d(i, "RegExp", _)
    }
    v("RegExp")
}, function (e, t, n) {
    "use strict";
    var r = n(84), i = n(1), o = n(28), a = n(27), c = n(117), u = n(85);
    r("match", 1, (function (e, t, n) {
        return [function (t) {
            var n = a(this), r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var a = i(e), s = String(this);
            if (!a.global) return u(a, s);
            var l = a.unicode;
            a.lastIndex = 0;
            for (var f, d = [], p = 0; null !== (f = u(a, s));) {
                var h = String(f[0]);
                d[p] = h, "" === h && (a.lastIndex = c(s, o(a.lastIndex), l)), p++
            }
            return 0 === p ? null : d
        }]
    }))
}, function (e, t) {
    e.exports = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return e === t || e != e && t != t
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(27), o = n(81), a = n(82), c = n(8), u = n(2), s = c("replace"), l = RegExp.prototype;
    r({target: "String", proto: !0}, {
        replaceAll: function e(t, n) {
            var r, c, f, d, p, h, v, y, g = i(this);
            if (null != t) {
                if ((r = o(t)) && !~String(i("flags" in l ? t.flags : a.call(t))).indexOf("g")) throw TypeError("`.replaceAll` does not allow non-global regexes");
                if (void 0 !== (c = t[s])) return c.call(t, g, n);
                if (u && r) return String(g).replace(t, n)
            }
            if (f = String(g), "" === (d = String(t))) return e.call(f, /(?:)/g, n);
            if (p = f.split(d), "function" != typeof n) return p.join(String(n));
            for (v = (h = p[0]).length, y = 1; y < p.length; y++) h += String(n(d, v, f)), v += d.length + p[y].length, h += p[y];
            return h
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(9), i = n(32), o = n(137), a = n(136), c = n(28), u = n(78), s = n(80);
    e.exports = function (e) {
        var t, n, l, f, d, p, h = i(e), v = "function" == typeof this ? this : Array, y = arguments.length,
            g = y > 1 ? arguments[1] : void 0, m = void 0 !== g, b = s(h), w = 0;
        if (m && (g = r(g, y > 2 ? arguments[2] : void 0, 2)), null == b || v == Array && a(b)) for (n = new v(t = c(h.length)); t > w; w++) p = m ? g(h[w], w) : h[w], u(n, w, p); else for (d = (f = b.call(h)).next, n = new v; !(l = d.call(f)).done; w++) p = m ? o(f, g, [l.value, w], !0) : l.value, u(n, w, p);
        return n.length = w, n
    }
}, function (e, t, n) {
    "use strict";
    var r = /[^\0-\u007E]/, i = /[.\u3002\uFF0E\uFF61]/g, o = "Overflow: input needs wider integers to process",
        a = Math.floor, c = String.fromCharCode, u = function (e) {
            return e + 22 + 75 * (e < 26)
        }, s = function (e, t, n) {
            var r = 0;
            for (e = n ? a(e / 700) : e >> 1, e += a(e / t); e > 455; r += 36) e = a(e / 35);
            return a(r + 36 * e / (e + 38))
        }, l = function (e) {
            var t, n, r = [], i = (e = function (e) {
                for (var t = [], n = 0, r = e.length; n < r;) {
                    var i = e.charCodeAt(n++);
                    if (i >= 55296 && i <= 56319 && n < r) {
                        var o = e.charCodeAt(n++);
                        56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--)
                    } else t.push(i)
                }
                return t
            }(e)).length, l = 128, f = 0, d = 72;
            for (t = 0; t < e.length; t++) (n = e[t]) < 128 && r.push(c(n));
            var p = r.length, h = p;
            for (p && r.push("-"); h < i;) {
                var v = 2147483647;
                for (t = 0; t < e.length; t++) (n = e[t]) >= l && n < v && (v = n);
                var y = h + 1;
                if (v - l > a((2147483647 - f) / y)) throw RangeError(o);
                for (f += (v - l) * y, l = v, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < l && ++f > 2147483647) throw RangeError(o);
                    if (n == l) {
                        for (var g = f, m = 36; ; m += 36) {
                            var b = m <= d ? 1 : m >= d + 26 ? 26 : m - d;
                            if (g < b) break;
                            var w = g - b, S = 36 - b;
                            r.push(c(u(b + w % S))), g = a(w / S)
                        }
                        r.push(c(u(g))), d = s(f, y, h == p), f = 0, ++h
                    }
                }
                ++f, ++l
            }
            return r.join("")
        };
    e.exports = function (e) {
        var t, n, o = [], a = e.toLowerCase().replace(i, ".").split(".");
        for (t = 0; t < a.length; t++) n = a[t], o.push(r.test(n) ? "xn--" + l(n) : n);
        return o.join(".")
    }
}, function (e, t, n) {
    "use strict";
    n(21);
    var r = n(0), i = n(10), o = n(146), a = n(20), c = n(113), u = n(61), s = n(131), l = n(37), f = n(71), d = n(17),
        p = n(9), h = n(110), v = n(1), y = n(13), g = n(68), m = n(64), b = n(86), w = n(80), S = n(8), k = i("fetch"),
        _ = i("Headers"), A = S("iterator"), x = l.set, P = l.getterFor("URLSearchParams"),
        I = l.getterFor("URLSearchParamsIterator"), E = /\+/g, R = Array(4), j = function (e) {
            return R[e - 1] || (R[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        }, T = function (e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }, O = function (e) {
            var t = e.replace(E, " "), n = 4;
            try {
                return decodeURIComponent(t)
            } catch (e) {
                for (; n;) t = t.replace(j(n--), T);
                return t
            }
        }, C = /[!'()~]|%20/g, z = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
        B = function (e) {
            return z[e]
        }, L = function (e) {
            return encodeURIComponent(e).replace(C, B)
        }, M = function (e, t) {
            if (t) for (var n, r, i = t.split("&"), o = 0; o < i.length;) (n = i[o++]).length && (r = n.split("="), e.push({
                key: O(r.shift()),
                value: O(r.join("="))
            }))
        }, D = function (e) {
            this.entries.length = 0, M(this.entries, e)
        }, N = function (e, t) {
            if (e < t) throw TypeError("Not enough arguments")
        }, U = s((function (e, t) {
            x(this, {type: "URLSearchParamsIterator", iterator: b(P(e).entries), kind: t})
        }), "Iterator", (function () {
            var e = I(this), t = e.kind, n = e.iterator.next(), r = n.value;
            return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
        })), q = function () {
            f(this, q, "URLSearchParams");
            var e, t, n, r, i, o, a, c, u, s = arguments.length > 0 ? arguments[0] : void 0, l = this, p = [];
            if (x(l, {
                type: "URLSearchParams", entries: p, updateURL: function () {
                }, updateSearchParams: D
            }), void 0 !== s) if (y(s)) if ("function" == typeof (e = w(s))) for (n = (t = e.call(s)).next; !(r = n.call(t)).done;) {
                if ((a = (o = (i = b(v(r.value))).next).call(i)).done || (c = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                p.push({key: a.value + "", value: c.value + ""})
            } else for (u in s) d(s, u) && p.push({
                key: u,
                value: s[u] + ""
            }); else M(p, "string" == typeof s ? "?" === s.charAt(0) ? s.slice(1) : s : s + "")
        }, F = q.prototype;
    c(F, {
        append: function (e, t) {
            N(arguments.length, 2);
            var n = P(this);
            n.entries.push({key: e + "", value: t + ""}), n.updateURL()
        }, delete: function (e) {
            N(arguments.length, 1);
            for (var t = P(this), n = t.entries, r = e + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
            t.updateURL()
        }, get: function (e) {
            N(arguments.length, 1);
            for (var t = P(this).entries, n = e + "", r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
            return null
        }, getAll: function (e) {
            N(arguments.length, 1);
            for (var t = P(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
            return r
        }, has: function (e) {
            N(arguments.length, 1);
            for (var t = P(this).entries, n = e + "", r = 0; r < t.length;) if (t[r++].key === n) return !0;
            return !1
        }, set: function (e, t) {
            N(arguments.length, 1);
            for (var n, r = P(this), i = r.entries, o = !1, a = e + "", c = t + "", u = 0; u < i.length; u++) (n = i[u]).key === a && (o ? i.splice(u--, 1) : (o = !0, n.value = c));
            o || i.push({key: a, value: c}), r.updateURL()
        }, sort: function () {
            var e, t, n, r = P(this), i = r.entries, o = i.slice();
            for (i.length = 0, n = 0; n < o.length; n++) {
                for (e = o[n], t = 0; t < n; t++) if (i[t].key > e.key) {
                    i.splice(t, 0, e);
                    break
                }
                t === n && i.push(e)
            }
            r.updateURL()
        }, forEach: function (e) {
            for (var t, n = P(this).entries, r = p(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
        }, keys: function () {
            return new U(this, "keys")
        }, values: function () {
            return new U(this, "values")
        }, entries: function () {
            return new U(this, "entries")
        }
    }, {enumerable: !0}), a(F, A, F.entries), a(F, "toString", (function () {
        for (var e, t = P(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(L(e.key) + "=" + L(e.value));
        return n.join("&")
    }), {enumerable: !0}), u(q, "URLSearchParams"), r({
        global: !0,
        forced: !o
    }, {URLSearchParams: q}), o || "function" != typeof k || "function" != typeof _ || r({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function (e) {
            var t, n, r, i = [e];
            return arguments.length > 1 && (y(t = arguments[1]) && (n = t.body, "URLSearchParams" === h(n) && ((r = t.headers ? new _(t.headers) : new _).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = g(t, {
                body: m(0, String(n)),
                headers: m(0, r)
            }))), i.push(t)), k.apply(this, i)
        }
    }), e.exports = {URLSearchParams: q, getState: P}
}, function (e, t, n) {
    var r = n(6), i = n(88).trim, o = n(89), a = r.parseFloat, c = 1 / a(o + "-0") != -1 / 0;
    e.exports = c ? function (e) {
        var t = i(String(e)), n = a(t);
        return 0 === n && "-" == t.charAt(0) ? -0 : n
    } : a
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(99).includes, o = n(79);
    r({target: "Array", proto: !0, forced: !n(23)("indexOf", {ACCESSORS: !0, 1: 0})}, {
        includes: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function (e, t, n) {
    var r = n(7), i = n(32), o = n(65), a = n(28), c = function (e) {
        return function (t, n, c, u) {
            r(n);
            var s = i(t), l = o(s), f = a(s.length), d = e ? f - 1 : 0, p = e ? -1 : 1;
            if (c < 2) for (; ;) {
                if (d in l) {
                    u = l[d], d += p;
                    break
                }
                if (d += p, e ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value")
            }
            for (; e ? d >= 0 : f > d; d += p) d in l && (u = n(u, l[d], d, s));
            return u
        }
    };
    e.exports = {left: c(!1), right: c(!0)}
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(179), o = n(27);
    r({target: "String", proto: !0, forced: !n(180)("includes")}, {
        includes: function (e) {
            return !!~String(o(this)).indexOf(i(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var r = n(81);
    e.exports = function (e) {
        if (r(e)) throw TypeError("The method doesn't accept regular expressions");
        return e
    }
}, function (e, t, n) {
    var r = n(8)("match");
    e.exports = function (e) {
        var t = /./;
        try {
            "/./"[e](t)
        } catch (n) {
            try {
                return t[r] = !1, "/./"[e](t)
            } catch (e) {
            }
        }
        return !1
    }
}, function (e, t, n) {
    var r = n(6), i = n(88).trim, o = n(89), a = r.parseInt, c = /^[+-]?0[Xx]/,
        u = 8 !== a(o + "08") || 22 !== a(o + "0x16");
    e.exports = u ? function (e, t) {
        var n = i(String(e));
        return a(n, t >>> 0 || (c.test(n) ? 16 : 10))
    } : a
}, function (e, t, n) {
    var r = n(5), i = n(89);
    e.exports = function (e) {
        return r((function () {
            return !!i[e]() || "​᠎" != "​᠎"[e]() || i[e].name !== e
        }))
    }
}, function (e, t, n) {
    var r = n(0), i = n(140).values;
    r({target: "Object", stat: !0}, {
        values: function (e) {
            return i(e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(100), o = n(52), a = n(28), c = n(32), u = n(102), s = n(78), l = n(67), f = n(23),
        d = l("splice"), p = f("splice", {ACCESSORS: !0, 0: 0, 1: 2}), h = Math.max, v = Math.min;
    r({target: "Array", proto: !0, forced: !d || !p}, {
        splice: function (e, t) {
            var n, r, l, f, d, p, y = c(this), g = a(y.length), m = i(e, g), b = arguments.length;
            if (0 === b ? n = r = 0 : 1 === b ? (n = 0, r = g - m) : (n = b - 2, r = v(h(o(t), 0), g - m)), g + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (l = u(y, r), f = 0; f < r; f++) (d = m + f) in y && s(l, f, y[d]);
            if (l.length = r, n < r) {
                for (f = m; f < g - r; f++) p = f + n, (d = f + r) in y ? y[p] = y[d] : delete y[p];
                for (f = g; f > g - r + n; f--) delete y[f - 1]
            } else if (n > r) for (f = g - r; f > m; f--) p = f + n - 1, (d = f + r - 1) in y ? y[p] = y[d] : delete y[p];
            for (f = 0; f < n; f++) y[f + m] = arguments[f + 2];
            return y.length = g - r + n, l
        }
    })
}, function (e, t, n) {
    var r = n(0), i = n(5), o = n(32), a = n(107), c = n(133);
    r({
        target: "Object", stat: !0, forced: i((function () {
            a(1)
        })), sham: !c
    }, {
        getPrototypeOf: function (e) {
            return a(o(e))
        }
    })
}, function (e, t, n) {
    n(0)({target: "Object", stat: !0}, {setPrototypeOf: n(108)})
}, function (e, t, n) {
    "use strict";
    var r = n(134), i = n(139);
    e.exports = r("Set", (function (e) {
        return function () {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }), i)
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(189);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        addAll: function () {
            return o.apply(this, arguments)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(1), i = n(7);
    e.exports = function () {
        for (var e = r(this), t = i(e.add), n = 0, o = arguments.length; n < o; n++) t.call(e, arguments[n]);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(145);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        deleteAll: function () {
            return o.apply(this, arguments)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(29), s = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        difference: function (e) {
            var t = a(this), n = new (u(t, o("Set")))(t), r = c(n.delete);
            return s(e, (function (e) {
                r.call(n, e)
            })), n
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(9), c = n(59), u = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        every: function (e) {
            var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
            return !u(n, (function (e) {
                if (!r(e, e, t)) return u.stop()
            }), void 0, !1, !0).stopped
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(9), s = n(29), l = n(59), f = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        filter: function (e) {
            var t = a(this), n = l(t), r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = new (s(t, o("Set"))), d = c(i.add);
            return f(n, (function (e) {
                r(e, e, t) && d.call(i, e)
            }), void 0, !1, !0), i
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(9), c = n(59), u = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        find: function (e) {
            var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
            return u(n, (function (e) {
                if (r(e, e, t)) return u.stop(e)
            }), void 0, !1, !0).result
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(29), s = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        intersection: function (e) {
            var t = a(this), n = new (u(t, o("Set"))), r = c(t.has), i = c(n.add);
            return s(e, (function (e) {
                r.call(t, e) && i.call(n, e)
            })), n
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(7), c = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        isDisjointFrom: function (e) {
            var t = o(this), n = a(t.has);
            return !c(e, (function (e) {
                if (!0 === n.call(t, e)) return c.stop()
            })).stopped
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(86), s = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        isSubsetOf: function (e) {
            var t = u(this), n = a(e), r = n.has;
            return "function" != typeof r && (n = new (o("Set"))(e), r = c(n.has)), !s(t, (function (e) {
                if (!1 === r.call(n, e)) return s.stop()
            }), void 0, !1, !0).stopped
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(7), c = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        isSupersetOf: function (e) {
            var t = o(this), n = a(t.has);
            return !c(e, (function (e) {
                if (!1 === n.call(t, e)) return c.stop()
            })).stopped
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(59), c = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        join: function (e) {
            var t = o(this), n = a(t), r = void 0 === e ? "," : String(e), i = [];
            return c(n, i.push, i, !1, !0), i.join(r)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(9), s = n(29), l = n(59), f = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        map: function (e) {
            var t = a(this), n = l(t), r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = new (s(t, o("Set"))), d = c(i.add);
            return f(n, (function (e) {
                d.call(i, r(e, e, t))
            }), void 0, !1, !0), i
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(7), c = n(59), u = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        reduce: function (e) {
            var t = o(this), n = c(t), r = arguments.length < 2, i = r ? void 0 : arguments[1];
            if (a(e), u(n, (function (n) {
                r ? (r = !1, i = n) : i = e(i, n, n, t)
            }), void 0, !1, !0), r) throw TypeError("Reduce of empty set with no initial value");
            return i
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(1), a = n(9), c = n(59), u = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        some: function (e) {
            var t = o(this), n = c(t), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
            return u(n, (function (e) {
                if (r(e, e, t)) return u.stop()
            }), void 0, !1, !0).stopped
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(29), s = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        symmetricDifference: function (e) {
            var t = a(this), n = new (u(t, o("Set")))(t), r = c(n.delete), i = c(n.add);
            return s(e, (function (e) {
                r.call(n, e) || i.call(n, e)
            })), n
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(2), o = n(10), a = n(1), c = n(7), u = n(29), s = n(3);
    r({target: "Set", proto: !0, real: !0, forced: i}, {
        union: function (e) {
            var t = a(this), n = new (u(t, o("Set")))(t);
            return s(e, c(n.add), n), n
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(52), o = n(206), a = n(207), c = n(5), u = 1..toFixed, s = Math.floor, l = function (e, t, n) {
        return 0 === t ? n : t % 2 == 1 ? l(e, t - 1, n * e) : l(e * e, t / 2, n)
    };
    r({
        target: "Number",
        proto: !0,
        forced: u && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !c((function () {
            u.call({})
        }))
    }, {
        toFixed: function (e) {
            var t, n, r, c, u = o(this), f = i(e), d = [0, 0, 0, 0, 0, 0], p = "", h = "0", v = function (e, t) {
                for (var n = -1, r = t; ++n < 6;) r += e * d[n], d[n] = r % 1e7, r = s(r / 1e7)
            }, y = function (e) {
                for (var t = 6, n = 0; --t >= 0;) n += d[t], d[t] = s(n / e), n = n % e * 1e7
            }, g = function () {
                for (var e = 6, t = ""; --e >= 0;) if ("" !== t || 0 === e || 0 !== d[e]) {
                    var n = String(d[e]);
                    t = "" === t ? n : t + a.call("0", 7 - n.length) + n
                }
                return t
            };
            if (f < 0 || f > 20) throw RangeError("Incorrect fraction digits");
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if (u < 0 && (p = "-", u = -u), u > 1e-21) if (n = (t = function (e) {
                for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                for (; n >= 2;) t += 1, n /= 2;
                return t
            }(u * l(2, 69, 1)) - 69) < 0 ? u * l(2, -t, 1) : u / l(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
                for (v(0, n), r = f; r >= 7;) v(1e7, 0), r -= 7;
                for (v(l(10, r, 1), 0), r = t - 1; r >= 23;) y(1 << 23), r -= 23;
                y(1 << r), v(1, 1), y(2), h = g()
            } else v(0, n), v(1 << -t, 0), h = g() + a.call("0", f);
            return h = f > 0 ? p + ((c = h.length) <= f ? "0." + a.call("0", f - c) + h : h.slice(0, c - f) + "." + h.slice(c - f)) : p + h
        }
    })
}, function (e, t, n) {
    var r = n(31);
    e.exports = function (e) {
        if ("number" != typeof e && "Number" != r(e)) throw TypeError("Incorrect invocation");
        return +e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(52), i = n(27);
    e.exports = "".repeat || function (e) {
        var t = String(i(this)), n = "", o = r(e);
        if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
        for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (n += t);
        return n
    }
}, function (e, t, n) {
    var r = n(0), i = n(5), o = n(209).f;
    r({
        target: "Object", stat: !0, forced: i((function () {
            return !Object.getOwnPropertyNames(1)
        }))
    }, {getOwnPropertyNames: o})
}, function (e, t, n) {
    var r = n(36), i = n(76).f, o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
        return a && "[object Window]" == o.call(e) ? function (e) {
            try {
                return i(e)
            } catch (e) {
                return a.slice()
            }
        }(e) : i(r(e))
    }
}, function (e, t, n) {
    n(0)({target: "Number", stat: !0}, {MAX_SAFE_INTEGER: 9007199254740991})
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r), n.d(r, "enableFixedLeaderboard", (function () {
        return It
    })), n.d(r, "enableStickyOnScroll", (function () {
        return Et
    })), n.d(r, "enableRepeatingPlacementWithinContent", (function () {
        return Rt
    }));
    var i = {};
    n.r(i), n.d(i, "dfpNetworkId", (function () {
        return jt
    }));
    n(11), n(14), n(15), n(35), n(60), n(55), n(21), n(18), n(109), n(70), n(56), n(38), n(4), n(115), n(16), n(24), n(167), n(22), n(72), n(25), n(168), n(62), n(57), n(39), n(40), n(41), n(42), n(43), n(44), n(45), n(46), n(47), n(48), n(49), n(50), n(51), n(171), n(30), n(26), n(63), n(148), n(87);

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var a = window.location.search.indexOf("bsadebug") > 0 || !1, c = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "enable", value: function () {
                a = !0
            }
        }, {
            key: "error", value: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                this._log.apply(this, ["error"].concat(t))
            }
        }, {
            key: "log", value: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                this._log.apply(this, ["log"].concat(t))
            }
        }, {
            key: "warn", value: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                this._log.apply(this, ["warn"].concat(t))
            }
        }, {
            key: "table", value: function () {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                if (a) if (e.log(), console.table) console.table.apply(console, n); else for (var i = 0; i < arguments.length; i++) e.log(arguments[i])
            }
        }, {
            key: "_log", value: function (e) {
                if (a) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    n.unshift("%c BSAOptimize/Headerbid", "background: red; color: white; display: block"), console[e].apply(console, n)
                }
            }
        }], (n = null) && o(t.prototype, n), r && o(t, r), e
    }();

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var s = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "getTags", value: function (e) {
                var t = this, n = e.includeAps, r = void 0 !== n && n, i = e.includeGpt, o = void 0 !== i && i,
                    a = e.includePbjs, c = void 0 !== a && a;
                return new Promise((function (e) {
                    var n = [], i = {};
                    r && n.push(t.APS((function (e) {
                        i.aps = e
                    }))), o && n.push(t.GPT((function (e) {
                        i.gpt = e
                    }))), c && n.push(t.Prebid((function (e) {
                        i.pbjs = e
                    }))), e(Promise.all(n).then((function () {
                        return i
                    })))
                }))
            }
        }, {
            key: "GPT", value: function (e) {
                return new Promise((function (t, n) {
                    window.googletag.cmd.push((function () {
                        t(e ? e(window.googletag) : void 0)
                    }))
                }))
            }
        }, {
            key: "Prebid", value: function (e) {
                return new Promise((function (t, n) {
                    window.pbjs.cmd.push((function () {
                        t(e ? e(window.pbjs) : void 0)
                    }))
                }))
            }
        }, {
            key: "APS", value: function (e) {
                return new Promise((function (t, n) {
                    t(e ? e(window.apstag) : void 0)
                }))
            }
        }], (n = null) && u(t.prototype, n), r && u(t, r), e
    }();

    function l(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var p, h, v, y = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "preparePlacements", value: function (e) {
                throw new Error("Derived classes must implement `::preparePlacements`")
            }
        }, {
            key: "sendBids", value: function (e) {
                throw new Error("Derived classes must implement `::sendBids`.")
            }
        }, {
            key: "setup", value: function () {
                throw new Error("Derived classes must implement `::setup`.")
            }
        }, {
            key: "_destroySlotsByPlacement", value: function (e) {
                var t = this, n = e.allPlacements, r = e.auctionablePlacements, i = e.isRefresh;
                return s.GPT((function (e) {
                    var o = [];
                    if (n.forEach((function (e, n) {
                        !e.slot || i && !t._shouldDestroyAssociatedSlot(e, r.has(n)) || o.push(e)
                    })), o.length) {
                        var a = o.map((function (e) {
                            return e.getName()
                        })), c = o.map((function (e) {
                            return e.slot
                        }));
                        e.destroySlots(c), o.forEach((function (e) {
                            e.slot = void 0
                        })), t._log("Destroyed slots for", a)
                    }
                }))
            }
        }, {
            key: "_log", value: function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                c.log.apply(c, ["(Ad Server: ".concat(this._adServerName, ") ").concat(e)].concat(n))
            }
        }, {
            key: "_preparePlacement", value: function (e) {
                throw new Error("Derived classes must implement `::_preparePlacement`.")
            }
        }, {
            key: "_setPlacementRefreshCount", value: function (e) {
                var t = e.isRefresh, n = e.placement;
                t ? n.refreshCount += 1 : n.refreshCount = 0
            }
        }, {
            key: "_shouldDestroyAssociatedSlot", value: function (e, t) {
                var n = e.currentViewport.sizes, r = e.previousViewport.sizes;
                return t && (n.length !== r.length || n.find((function (e, t) {
                    var n = l(e, 2), i = n[0], o = n[1], a = l(r[t], 2), c = a[0], u = a[1];
                    return i !== c || o !== u
                })))
            }
        }], (n = null) && d(t.prototype, n), r && d(t, r), e
    }();
    v = "", (h = "_adServerName") in (p = y) ? Object.defineProperty(p, h, {
        value: v,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : p[h] = v;
    n(118);

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var m = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "getConfig", value: function () {
                return this._config
            }
        }, {
            key: "setConfig", value: function (e) {
                this._config = e
            }
        }], (n = null) && g(t.prototype, n), r && g(t, r), e
    }();

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var S = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "getCpmForSlot", value: function (e) {
                var t = e.getTargeting("amznbid")[0] || "";
                return this._getCpmForBidCode(t)
            }
        }, {
            key: "getCreative", value: function (e) {
                var t = e.slot, n = t.getTargeting("amzniid")[0], r = t.getSlotElementId();
                return '<script type="text/javascript" id="amazon_uam_'.concat(r, '">var amzn_win=window,amzn_c=5,amzn_x=0;while(amzn_x<amzn_c){amzn_win=amzn_win.parent;if(amzn_win.apstag)try{amzn_win.apstag.renderImp(document,"').concat(n, '");amzn_x=amzn_c}catch(e){}amzn_x++};<\/script>')
            }
        }, {
            key: "getPriceBucketForSlot", value: function (e) {
                var t = e.getTargeting("amznbid")[0] || "";
                return this._priceBucketsByBidCode[t.toLowerCase()]
            }
        }, {
            key: "getSizeForSlot", value: function (e) {
                return e.getTargeting("amznsz")[0]
            }
        }, {
            key: "getBidInfoForPlacementId", value: function (e) {
                return this._bidInfoByPlacementId[e]
            }
        }, {
            key: "getAllSizes", value: function () {
                return this._sizes
            }
        }, {
            key: "initTag", value: function () {
                return s.APS((function (e) {
                    e.init({
                        pubID: "747b8b51-ec47-4dee-9823-b2b73124b71f",
                        adServer: "googletag",
                        schain: m.getConfig()
                    })
                }))
            }
        }, {
            key: "isRendered", value: function (e) {
                var t = e.slot, n = e.shouldCheckThroughGpt;
                if (void 0 === t) return !1;
                if (n) {
                    var r = t.getResponseInformation();
                    if (!r) return !1;
                    var i = r.creativeId;
                    return -1 !== this._gamCreativeIds.indexOf(i)
                }
                var o = t.getSlotElementId(), a = document.getElementById("".concat(o, "_direct_iframe"));
                return !!(a && a.contentDocument && a.contentDocument.documentElement && a.contentDocument.documentElement.querySelector("#amazon_uam_".concat(o)))
            }
        }, {
            key: "storeBidInfo", value: function (e) {
                var t = this, n = e.bids, r = e.timeToRespond;
                this._bidInfoByPlacementId = {}, n.forEach((function (e) {
                    if (t._hasBidForBid(e)) {
                        var n = e.amznbid, i = e.size, o = e.slotID, a = t._getCpmForBidCode(n);
                        t._bidInfoByPlacementId[o] = {cpm: a, hasBid: !0, size: i, timeToRespond: r}
                    } else {
                        var c = e.slotID;
                        t._bidInfoByPlacementId[c] = {hasBid: !1}
                    }
                }))
            }
        }, {
            key: "_getCpmForBidCode", value: function (e) {
                return parseFloat(this._priceBucketsByBidCode[e.toLowerCase()]) || 0
            }
        }, {
            key: "_hasBidForBid", value: function (e) {
                return "" !== e.amzniid
            }
        }], (n = null) && b(t.prototype, n), r && b(t, r), e
    }();
    w(S, "_bidInfoByPlacementId", {}), w(S, "_sizes", [[120, 600], [120, 240], [160, 600], [250, 250], [300, 50], [300, 100], [300, 1050], [300, 300], [300, 75], [300, 250], [300, 600], [320, 50], [320, 100], [320, 100], [336, 280], [400, 300], [468, 60], [728, 90], [970, 250], [970, 90]]), w(S, "_gamCreativeIds", [138258520299, 138258520302, 138258520305, 138258520308, 138258772516, 138258772519, 138258772522, 138258772528, 138258772531, 138258772534]), w(S, "_priceBucketsByBidCode", {
        testbid: "0.00",
        "1btne2o": "0.01",
        u2ddkw: "0.02",
        "1tkxekg": "0.03",
        "3fgcu8": "0.04",
        "12y0dts": "0.05",
        l6qdc0: "0.06",
        "1kpaebk": "0.07",
        gqwv7k: "0.08",
        "1g9gw74": "0.09",
        yi6vpc: "0.10",
        "1y0qwow": "0.11",
        "7v9uyo": "0.12",
        "17dtvy8": "0.13",
        pmjvgg: "0.14",
        "1p53wg0": "0.15",
        a36m0w: "0.16",
        "19lqn0g": "0.17",
        rugmio: "0.18",
        "1rd0ni8": "0.19",
        "17jls0": "0.20",
        "10q3mrk": "0.21",
        iytm9s: "0.22",
        "1ihdn9c": "0.23",
        ej045c: "0.24",
        "1e1k54w": "0.25",
        waa4n4: "0.26",
        "1vsu5mo": "0.27",
        "5nd3wg": "0.28",
        "155x4w0": "0.29",
        nen4e8: "0.30",
        "1mx75ds": "0.31",
        b74zk0: "0.32",
        "1app0jk": "0.33",
        syf01s: "0.34",
        "1sgz11c": "0.35",
        "2bhzb4": "0.36",
        "11u20ao": "0.37",
        k2rzsw: "0.38",
        "1jlc0sg": "0.39",
        fmyhog: "0.40",
        "1f5iio0": "0.41",
        xe8i68: "0.42",
        "1wwsj5s": "0.43",
        "6rbhfk": "0.44",
        "169vif4": "0.45",
        oilhxc: "0.46",
        "1o15iww": "0.47",
        "8z88hs": "0.48",
        "18hs9hc": "0.49",
        qqi8zk: "0.50",
        "1q929z4": "0.51",
        "3l88w": "0.52",
        zm598g: "0.53",
        huv8qo: "0.54",
        "1hdf9q8": "0.55",
        df1qm8: "0.56",
        "1cxlrls": "0.57",
        v6br40: "0.58",
        "1uovs3k": "0.59",
        "4jeqdc": "0.60",
        "141yrcw": "0.61",
        maoqv4: "0.62",
        "1lt8ruo": "0.63",
        cv2juo: "0.64",
        "1cdmku8": "0.65",
        umckcg: "0.66",
        "1u4wlc0": "0.67",
        "3zfjls": "0.68",
        "13hzklc": "0.69",
        lqpk3k: "0.70",
        "1l99l34": "0.71",
        haw1z4: "0.72",
        "1gtg2yo": "0.73",
        z262gw: "0.74",
        "1ykq3gg": "0.75",
        "8f91q8": "0.76",
        "17xt2ps": "0.77",
        q6j280: "0.78",
        "1pp337k": "0.79",
        an5ssg: "0.80",
        "1a5pts0": "0.81",
        sefta8: "0.82",
        "1rwzu9s": "0.83",
        "1risjk": "0.84",
        "11a2tj4": "0.85",
        jist1c: "0.86",
        "1j1cu0w": "0.87",
        f2zaww: "0.88",
        "1eljbwg": "0.89",
        wu9beo: "0.90",
        "1wctce8": "0.91",
        "67cao0": "0.92",
        "15pwbnk": "0.93",
        nymb5s: "0.94",
        "1nh6c5c": "0.95",
        br46bk: "0.96",
        "1b9o7b4": "0.97",
        tie6tc: "0.98",
        "1t0y7sw": "0.99",
        "2vh62o": "1.00",
        "12e1728": "1.01",
        kmr6kg: "1.02",
        "1k5b7k0": "1.03",
        g6xog0: "1.04",
        "1fphpfk": "1.05",
        xy7oxs: "1.06",
        "1xgrpxc": "1.07",
        "7bao74": "1.08",
        "16tup6o": "1.09",
        p2koow: "1.10",
        "1ol4pog": "1.11",
        "9j7f9c": "1.12",
        "191rg8w": "1.13",
        rahfr4: "1.14",
        "1qt1gqo": "1.15",
        nkf0g: "1.16",
        "1064g00": "1.17",
        ieufi8: "1.18",
        "1hxeghs": "1.19",
        dz0xds: "1.20",
        "1dhkydc": "1.21",
        vqaxvk: "1.22",
        "1v8uyv4": "1.23",
        "53dx4w": "1.24",
        "14lxy4g": "1.25",
        munxmo: "1.26",
        "1md7ym8": "1.27",
        cl2ygw: "1.28",
        "1c3mzgg": "1.29",
        uccyyo: "1.30",
        "1tuwzy8": "1.31",
        "3pfy80": "1.32",
        "137zz7k": "1.33",
        lgpyps: "1.34",
        "1kz9zpc": "1.35",
        h0wglc: "1.36",
        "1gjghkw": "1.37",
        ys6h34: "1.38",
        "1yaqi2o": "1.39",
        "859gcg": "1.40",
        "17nthc0": "1.41",
        pwjgu8: "1.42",
        "1pf3hts": "1.43",
        ad67eo: "1.44",
        "19vq8e8": "1.45",
        s4g7wg: "1.46",
        "1rn08w0": "1.47",
        "1hj75s": "1.48",
        "110385c": "1.49",
        j8t7nk: "1.50",
        "1ird8n4": "1.51",
        eszpj4: "1.52",
        "1ebjqio": "1.53",
        wk9q0w: "1.54",
        "1w2tr0g": "1.55",
        "5xcpa8": "1.56",
        "15fwq9s": "1.57",
        nomps0: "1.58",
        "1n76qrk": "1.59",
        bh4kxs: "1.60",
        "1azolxc": "1.61",
        t8elfk: "1.62",
        "1sqymf4": "1.63",
        "2lhkow": "1.64",
        "1241log": "1.65",
        kcrl6o: "1.66",
        "1jvbm68": "1.67",
        fwy328: "1.68",
        "1ffi41s": "1.69",
        xo83k0: "1.70",
        "1x6s4jk": "1.71",
        "71b2tc": "1.72",
        "16jv3sw": "1.73",
        osl3b4: "1.74",
        "1ob54ao": "1.75",
        "997tvk": "1.76",
        "18rruv4": "1.77",
        r0hudc: "1.78",
        "1qj1vcw": "1.79",
        dktmo: "1.80",
        zw4um8: "1.81",
        i4uu4g: "1.82",
        "1hnev40": "1.83",
        dp1c00: "1.84",
        "1d7lczk": "1.85",
        vgbchs: "1.86",
        "1uyvdhc": "1.87",
        "4tebr4": "1.88",
        "14bycqo": "1.89",
        mkoc8w: "1.90",
        "1m38d8g": "1.91",
        d5258g: "1.92",
        "1cnm680": "1.93",
        uwc5q8: "1.94",
        "1uew6ps": "1.95",
        "49f4zk": "1.96",
        "13rz5z4": "1.97",
        m0p5hc: "1.98",
        "1lj96gw": "1.99",
        hkvncw: "2.00",
        "1h3focg": "2.01",
        zc5nuo: "2.02",
        "1yupou8": "2.03",
        "8p8n40": "2.04",
        "187so3k": "2.05",
        qginls: "2.06",
        "1pz2olc": "2.07",
        ax5e68: "2.08",
        "1afpf5s": "2.09",
        sofeo0: "2.10",
        "1s6zfnk": "2.11",
        "21idxc": "2.12",
        "11k2eww": "2.13",
        jssef4: "2.14",
        "1jbcfeo": "2.15",
        fcywao: "2.16",
        "1evixa8": "2.17",
        x48wsg: "2.18",
        "1wmsxs0": "2.19",
        "6hbw1s": "2.20",
        "15zvx1c": "2.21",
        o8lwjk: "2.22",
        "1nr5xj4": "2.23",
        c13rpc: "2.24",
        "1bjnsow": "2.25",
        tsds74: "2.26",
        "1taxt6o": "2.27",
        "35grgg": "2.28",
        "12o0sg0": "2.29",
        kwqry8: "2.30",
        "1kfasxs": "2.31",
        ggx9ts: "2.32",
        "1fzhatc": "2.33",
        y87abk: "2.34",
        "1xqrbb4": "2.35",
        "7la9kw": "2.36",
        "173uakg": "2.37",
        pcka2o: "2.38",
        "1ov4b28": "2.39",
        "9t70n4": "2.40",
        "19br1mo": "2.41",
        rkh14w: "2.42",
        "1r3124g": "2.43",
        xk0e8: "2.44",
        "10g41ds": "2.45",
        iou0w0: "2.46",
        "1i7e1vk": "2.47",
        e90irk: "2.48",
        "1drkjr4": "2.49",
        w0aj9c: "2.50",
        "1viuk8w": "2.51",
        "5ddiio": "2.52",
        "14vxji8": "2.53",
        n4nj0g: "2.54",
        "1mn7k00": "2.55",
        cg35s0: "2.56",
        "1byn6rk": "2.57",
        u7d69s: "2.58",
        "1tpx79c": "2.59",
        "3kg5j4": "2.60",
        "13306io": "2.61",
        lbq60w: "2.62",
        "1kua70g": "2.63",
        gvwnwg: "2.64",
        "1gegow0": "2.65",
        yn6oe8: "2.66",
        "1y5qpds": "2.67",
        "809nnk": "2.68",
        "17iton4": "2.69",
        prjo5c: "2.70",
        "1pa3p4w": "2.71",
        a86eps: "2.72",
        "19qqfpc": "2.73",
        rzgf7k: "2.74",
        "1ri0g74": "2.75",
        "1cjegw": "2.76",
        "10v3fgg": "2.77",
        j3teyo: "2.78",
        "1imdfy8": "2.79",
        enzwu8: "2.80",
        "1e6jxts": "2.81",
        wf9xc0: "2.82",
        "1vxtybk": "2.83",
        "5scwlc": "2.84",
        "15awxkw": "2.85",
        njmx34: "2.86",
        "1n26y2o": "2.87",
        bc4s8w: "2.88",
        "1auot8g": "2.89",
        t3esqo: "2.90",
        "1slytq8": "2.91",
        "2ghs00": "2.92",
        "11z1szk": "2.93",
        k7rshs: "2.94",
        "1jqbthc": "2.95",
        fryadc: "2.96",
        "1faibcw": "2.97",
        xj8av4: "2.98",
        "1x1sbuo": "2.99",
        "6wba4g": "3.00",
        "18ms268": "3.05",
        hzv1fk: "3.10",
        "1utvksg": "3.15",
        d02cjk: "3.20",
        "13mzda8": "3.25",
        z75v5s: "3.30",
        "1pu2vwg": "3.35",
        "1wil8g": "3.40",
        "1eqj4lc": "3.45",
        o3m3uo: "3.50",
        "1t5y0hs": "3.55",
        gbxh4w: "3.60",
        "16yuhvk": "3.65",
        rfh8g0: "3.70",
        "1i2e96o": "3.75",
        "58dpts": "3.80",
        "1c8ms5c": "3.85",
        llpreo: "3.90",
        "1yfqark": "3.95",
        ai603k: "4.00",
        "11530u8": "4.05",
        wp9ips: "4.10",
        "1nc6jgg": "4.15",
        "2qhdds": "4.20",
        "1fkhwqo": "4.25",
        oxkw00: "4.30",
        "1qo1o1s": "4.35",
        du14ow: "4.40",
        "14gy5fk": "4.45",
        v1byf4: "4.50",
        "1lo8z5s": "4.55",
        "8u8fsw": "4.60",
        "1akp7uo": "4.65",
        jxs740: "4.70",
        "1wrsqgw": "4.75",
        c63ke8: "4.80",
        "12t0l4w": "4.85",
        yd730g: "4.90",
        "1p043r4": "4.95",
        "12jt34": "5.00",
        "1dwkcg0": "5.05",
        n9nbpc: "5.10",
        "1tifi80": "5.15",
        goeyv4: "5.20",
        "17bbzls": "5.25",
        rryq68: "5.30",
        "1ievqww": "5.35",
        "5kv7k0": "5.40",
        "1an7474": "5.45",
        k0a3gg: "5.50",
        "1wuamtc": "5.55",
        "8wqc5c": "5.60",
        zjncw0: "5.65",
        v3turk: "5.70",
        "1lqqvi8": "5.75",
        "3wxn9c": "5.80",
        "1gqy6m8": "5.85",
        q415vk: "5.90",
        "1ruhxxc": "5.95",
        f0hekg: "6.00",
        "15nefb4": "6.05",
        tfwagw: "6.10",
        "1k2tb7k": "6.15",
        "78sruo": "6.20",
        "18z9jwg": "6.25",
        iccj5s: "6.30",
        "1v6d2io": "6.35",
        cil24g: "6.40",
        "135i2v4": "6.45",
        ypokqo: "6.50",
        "1pcllhc": "6.55",
        "1f1atc": "6.60",
        "1e91u68": "6.65",
        nm4tfk: "6.70",
        "1sogq2o": "6.75",
        fug6ps: "6.80",
        "16hd7gg": "6.85",
        qxzy0w: "6.90",
        "1hkwyrk": "6.95",
        "4qwfeo": "7.00",
        "1cl49vk": "7.05",
        ly794w: "7.10",
        "1ys7shs": "7.15",
        aunhts: "7.20",
        "11hkikg": "7.25",
        x1r0g0: "7.30",
        "1noo16o": "7.35",
        "32yv40": "7.40",
        "1fwzegw": "7.45",
        pa2dq8: "7.50",
        "1r0j5s0": "7.55",
        e6imf4: "7.60",
        "14tfn5s": "7.65",
        u4v9xc: "7.70",
        "1krsao0": "7.75",
        "7xrrb4": "7.80",
        "19o8jcw": "7.85",
        j1bim8: "7.90",
        "1vvc1z4": "7.95",
        b9mvwg: "8.00",
        sgxpmo: "8.50",
        "3rxukg": "9.00",
        i7cqgw: "9.50",
        gjf668: "10.00",
        wbj2tc: "10.50",
        "8ghzwg": "11.00",
        mvwvsw: "11.50",
        "9ags1s": "12.00",
        ttmqdc: "12.50",
        "1dscn4": "13.00",
        lwyayo: "13.50",
        e59o8w: "14.00",
        xuguf4: "14.50",
        "6nkmww": "15.00",
        plaxa8: "15.50",
        cttlog: "16.00",
        r98hkw: "16.50",
        "2k8mio": "17.00",
        jrjg8w: "17.50",
        gunpq8: "18.00",
        va2lmo: "18.50",
        "7f1ips": "19.00",
        nsdkao: "19.50",
        b0w8ow: "20.00",
        "2yr5s": "21.00",
        esd8g0: "22.00",
        "5cr1fk": "23.00",
        bvhhxc: "24.00",
        "4dsglc": "25.00",
        fju48w: "26.00",
        "8252ww": "27.00",
        "9q2n7k": "28.00",
        "1te7sw": "29.00",
        dqwr9c: "30.00",
        "5nzkzk": "31.00",
        clpfk0: "32.00",
        "3638jk": "33.00",
        hgibr4: "34.00",
        "76xclc": "35.00"
    });
    n(176), n(90), n(178);

    function k(e) {
        return function (e) {
            if (Array.isArray(e)) return _(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e) {
        return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function x(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var P = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "GroupBy", value: function (e, t) {
                return e.reduce((function (e, n) {
                    var r;
                    if (n.constructor === Map) r = n.get(t); else {
                        if ("object" !== A(n)) throw new Error("Item must be either a Map or an object. Given: ".concat(n));
                        r = n[t]
                    }
                    return e.has(r) || e.set(r, []), e.get(r).push(n), e
                }), new Map)
            }
        }, {
            key: "Shuffle", value: function (e) {
                for (var t, n, r = k(e), i = e.length; 0 !== i;) n = Math.floor(Math.random() * i--), t = r[i], r[i] = r[n], r[n] = t;
                return r
            }
        }, {
            key: "Unique", value: function (e) {
                return e.filter((function (e, t, n) {
                    return n.indexOf(e) == t
                }))
            }
        }, {
            key: "Intersect", value: function (e, t) {
                return e.filter((function (e) {
                    return t.includes(e)
                }))
            }
        }], (n = null) && x(t.prototype, n), r && x(t, r), e
    }();
    n(149), n(150), n(58), n(119), n(91);

    function I(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || E(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function E(e, t) {
        if (e) {
            if ("string" == typeof e) return R(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(e, t) : void 0
        }
    }

    function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function j(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var T = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "get", value: function (e) {
                var t, n = function (e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = E(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0, i = function () {
                            };
                            return {
                                s: i, n: function () {
                                    return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                                }, e: function (e) {
                                    throw e
                                }, f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, a = !0, c = !1;
                    return {
                        s: function () {
                            n = n.call(e)
                        }, n: function () {
                            var e = n.next();
                            return a = e.done, e
                        }, e: function (e) {
                            c = !0, o = e
                        }, f: function () {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                    }
                }(document.cookie.split(";"));
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var r = I(t.value.split("="), 2), i = r[0], o = r[1];
                        if (i === e) return o
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return ""
            }
        }, {
            key: "set", value: function (e, t, n) {
                var r = new Date;
                r.setTime(r.getTime() + n), r.toUTCString(), document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r, "; path=/")
            }
        }], (n = null) && j(t.prototype, n), r && j(t, r), e
    }();

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var C = !document.hidden || !0, z = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "Visible", value: function () {
                return C
            }
        }, {
            key: "Ready", value: function (e) {
                var t = !1;
                return new Promise((function (n) {
                    function r() {
                        !t && ["interactive", "complete"].some((function (e) {
                            return document.readyState === e
                        })) && (t = !0, n(e()))
                    }

                    r(), document.addEventListener("readystatechange", r)
                }))
            }
        }, {
            key: "addExtraCss", value: function (e) {
                var t = document.createElement("style");
                t.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(t)
            }
        }], (n = null) && O(t.prototype, n), r && O(t, r), e
    }();
    document.addEventListener("visibilitychange", (function () {
        C = !document.hidden
    }), !1);
    var B = z;

    function L(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var M, D = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "GetSize", value: function () {
                return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight]
            }
        }], (n = null) && L(t.prototype, n), r && L(t, r), e
    }();

    function N(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || F(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function q(e) {
        return function (e) {
            if (Array.isArray(e)) return V(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || F(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function F(e, t) {
        if (e) {
            if ("string" == typeof e) return V(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? V(e, t) : void 0
        }
    }

    function V(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function G(e) {
        return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function H(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function W(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function $(e, t, n) {
        return t && W(e.prototype, t), n && W(e, n), e
    }

    var Q = !1, Y = function () {
        function e() {
            H(this, e)
        }

        return $(e, null, [{
            key: "init", value: function (e) {
                this._initMessageHandler(e), e.setParentViewportSize(this._getOriginalParentViewportSize())
            }
        }, {
            key: "isIn", value: function () {
                return window.location.search.indexOf("acceptable_ad_iframe") > 0
            }
        }, {
            key: "postAdSizeChangedMessage", value: function (e, t) {
                var n = Array.isArray(t) ? {type: "setSize", payload: {placementId: e, size: t}} : {
                    type: "hide",
                    payload: {placementId: e}
                };
                window.parent.postMessage(n, "*")
            }
        }, {
            key: "postAuctionStartedMessage", value: function (e) {
                window.parent.postMessage({type: "auctionStarted", payload: {placementId: e}}, "*")
            }
        }, {
            key: "postAuctionFinishedMessage", value: function (e) {
                window.parent.postMessage({type: "auctionFinished", payload: {placementId: e}}, "*")
            }
        }, {
            key: "postIframeLoadedMessage", value: function (e) {
                window.parent.postMessage({type: "iframeLoaded", payload: {placementId: e}}, "*")
            }
        }, {
            key: "_getOriginalParentViewportSize", value: function () {
                var e = new URLSearchParams(window.location.search).get("original_parent_viewport_size");
                return e && e.split("x").map(Number)
            }
        }, {
            key: "_initMessageHandler", value: function (e) {
                window.addEventListener("message", (function (t) {
                    var n = t.data;
                    if ("object" === G(n) && n.hasOwnProperty("type")) if ("push" === n.type) {
                        var r, i = n.customTargetingArray, o = n.isViewable;
                        q(e.getPlacements()).pop().pop().viewable = o, (r = e.customTargeting).push.apply(r, q(i)), e.pushAll()
                    } else if ("refresh" === n.type) {
                        var a, c = n.customTargetingArray, u = n.isViewable;
                        q(e.getPlacements()).pop().pop().viewable = u, (a = e.customTargeting).push.apply(a, q(c)), e.refreshAll()
                    } else if ("object" === G(n.payload) && "setParentViewportSize" === n.type) {
                        var s = n.payload.size;
                        Array.isArray(s) && s.length >= 2 && s.slice(0, 2).every((function (e) {
                            return !isNaN(parseFloat(e)) && isFinite(e)
                        })) && e.setParentViewportSize(s.slice(0, 2).map(Number))
                    }
                }))
            }
        }]), e
    }(), J = function () {
        function e() {
            H(this, e)
        }

        return $(e, null, [{
            key: "init", value: function (e) {
                var t = this;
                e.placements.forEach((function (n, r) {
                    var i = n.acceptable, o = document.querySelector("[id=".concat(r, "]"));
                    o && (i ? (o.classList.add("bsa-zone_acceptable", "hidden_acceptable"), o.dataset.delegatedAcceptableAd = "", t._initIframe(e, o)) : (o.style.display = "none", o.dataset.explicitlyHidden = ""))
                }));
                var n = document.createElement("style");
                n.innerHTML = '\n.bsa-zone_acceptable:not(.hidden_acceptable):after {\n\ttext-align: center;\n\tcontent: "~ advertisement ~";\n\tfont-size: 9px;\n\tfont-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;\n\tletter-spacing: .5px;\n\tdisplay: block;\n\tpadding: 5px 0;\n\ttext-transform: uppercase;\n\tcolor: #6a6a6a;\n}\n\n.bsa-zone_acceptable.hidden_acceptable {\n\tvisibility: hidden;\n}\n'.trim().split("\n").map((function (e) {
                    return e.trim()
                })).join(""), document.getElementsByTagName("head")[0].appendChild(n), this._initSetParentViewportSizeMessager(e)
            }
        }, {
            key: "isRunningAuctionsInChildFrames", value: function () {
                return this._runningAuctionsByPlacementId.size > 0
            }
        }, {
            key: "postAdLoadMessages", value: function (e, t, n) {
                var r = this, i = t ? "refresh" : "push", o = n.getTargetingArray();
                e.forEach((function (e) {
                    var t = N(e, 2), n = t[0], a = t[1], c = {type: i, customTargetingArray: o, isViewable: a.viewable};
                    r._postMessageToIframeById(n, c)
                }))
            }
        }, {
            key: "_postSetParentViewportSizeMessages", value: function (e, t) {
                var n = this, r = {type: "setParentViewportSize", payload: {size: t}};
                e.forEach((function (e) {
                    return n._postMessageToIframeById(e, r)
                }))
            }
        }, {
            key: "_postMessageToIframeById", value: function (e, t) {
                this._onIframeLoad(e).then((function (e) {
                    return e.postMessage(t, M)
                }))
            }
        }, {
            key: "_onIframeLoad", value: function (e) {
                var t = this;
                return new Promise((function (n) {
                    !function r() {
                        var i = t._loadedIframes.get(e);
                        i ? n(i.contentWindow) : setTimeout(r, 100)
                    }()
                }))
            }
        }, {
            key: "_initSetParentViewportSizeMessager", value: function (e) {
                var t = this;
                !function n() {
                    var r = q(e.placements.keys()).filter((function (e) {
                        var t = document.querySelector("[id=".concat(e, "]"));
                        return t && !("explicitlyHidden" in t.dataset) && "delegatedAcceptableAd" in t.dataset
                    }));
                    t._postSetParentViewportSizeMessages(r, D.GetSize()), setTimeout(n, 1e3)
                }()
            }
        }, {
            key: "_initIframe", value: function (e, t) {
                var n = document.createElement("iframe"), r = new URLSearchParams(window.location.search);
                n.onload = function () {
                    return Y.postIframeLoadedMessage(i)
                }, n.width = 1, n.height = 1, n.frameBorder = "0", n.scrolling = "no";
                var i = t.id, o = new URLSearchParams;
                o.set("acceptable_ad_iframe", ""), o.set("original_parent_viewport_size", D.GetSize().join("x")), o.set("account", e.publisher), o.set("adunit", i), o.set("consent_management", e.shouldEnableConsentManagement), e.debug && o.set("bsadebug", ""), r.has("force_adl_block") && o.set("force_adl_block", ""), n.src = "".concat(M, "/acceptable.html?").concat(o.toString()), t.appendChild(n), this._initMessageHandler(e, t, n, i)
            }
        }, {
            key: "_initMessageHandler", value: function (e, t, n, r) {
                var i = this;
                window.addEventListener("message", (function (o) {
                    var a = o.data;
                    if ("object" === G(a) && a.hasOwnProperty("payload") && "object" === G(a.payload) && a.payload.hasOwnProperty("placementId") && a.payload.placementId === r) {
                        var c = a.type, u = a.payload;
                        if ("setSize" === c) {
                            var s = u.size;
                            if (!Array.isArray(s) || s.length < 2 || !s.slice(0, 2).every((function (e) {
                                return !isNaN(parseFloat(e)) && isFinite(e)
                            }))) throw new Error("Invalid message from acceptable ad iframe: payload.size must be an array of at least 2 numbers. Given: " + ("object" === G(s) ? JSON.stringify(s) : "" + s));
                            var l = N(s.slice(0, 2).map(Number), 2), f = l[0], d = l[1];
                            n.width = f, n.height = d, t.style.width = "".concat(f, "px"), t.classList.remove("hidden_acceptable")
                        } else if ("auctionStarted" === c) {
                            e.getPlacements().get(r).setHasHadSlotDefined(), i._runningAuctionsByPlacementId.set(r, !0)
                        } else if ("auctionFinished" === c) {
                            e.getPlacements().get(r).setHasHadSlotDefined(), i._runningAuctionsByPlacementId.delete(r)
                        } else "hide" === c ? t.classList.add("hidden_acceptable") : "iframeLoaded" === c && i._loadedIframes.set(r, n)
                    }
                }))
            }
        }]), e
    }();
    U(J, "_runningAuctionsByPlacementId", new Map), U(J, "_loadedIframes", new Map);
    var X = function () {
        function e() {
            H(this, e)
        }

        return $(e, null, [{
            key: "setAcceptableOrigin", value: function (e) {
                Q || (M = e, Q = !0)
            }
        }]), e
    }();

    function Z(e) {
        var t = e.cpm;
        return t >= 100 ? "100.00" : t >= 10 ? Ot.Round(t, 2) : t >= 5 ? Ot.Round(t, 20) : Ot.Round(t, 100)
    }

    n(183), n(120);

    function K(e) {
        return function (e) {
            if (Array.isArray(e)) return ee(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return ee(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ee(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function te(e) {
        return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ne(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var re = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "setup", value: function (e) {
                var t = e.bsaAdServerOrigin, n = e.bsaBannerIdsByPriceBucket;
                this._bsaAdServerOrigin = t, this._bsaBannerIdsByPriceBucket = n, this._setupClickHelperHandler()
            }
        }, {
            key: "recordImpression", value: function (e) {
                var t = this, n = e.placement, r = e.priceBucket, i = n.zoneKey,
                    o = this._getBsaBannerId({priceBucket: r});
                if (void 0 !== o) {
                    var a = new URL("".concat(this._bsaAdServerOrigin, "/ads/").concat(i, ".json"));
                    a.searchParams.set("forcebanner", o), a.searchParams.set("ignoretargeting", "yes"), fetch(a.toString(), {method: "GET"}).then((function (e) {
                        return e.ok ? e.json() : Promise.reject()
                    })).then((function (e) {
                        return "object" === te(e) ? e : Promise.reject()
                    })).then((function () {
                        t._log("Impression recorded for $".concat(r, " on ").concat(n.getName(), "."))
                    })).catch((function () {
                        t._log("Failed to record impression for $".concat(r, " on ").concat(n.getName(), "."))
                    }))
                } else this._log("Banner ID not found for $".concat(r, "."))
            }
        }, {
            key: "trackClick", value: function (e) {
                var t = e.placement, n = e.priceBucket, r = e.showPriceBucket, i = void 0 === r || r,
                    o = this._getClickConfig({placement: t, priceBucket: n, showPriceBucket: i});
                this._trackedClickConfigsByPlacementId.set(t.id, o), this._getAdIframeElements({placement: t}).forEach((function (e) {
                    e.addEventListener("mouseover", o.onIframeMouseOver), e.addEventListener("mouseout", o.onIframeMouseOut)
                })), this._getAdNonIframeElements({placement: t}).forEach((function (e) {
                    e.addEventListener("click", o.onNonIframeClick, !0)
                }))
            }
        }, {
            key: "_getAdIframeElements", value: function (e) {
                var t = e.placement;
                return K(window.document.querySelectorAll("#".concat(t.id, " iframe")).values())
            }
        }, {
            key: "_getAdNonIframeElements", value: function (e) {
                var t = e.placement;
                return K(window.document.querySelectorAll("#".concat(t.id, " iframe ~ div")).values())
            }
        }, {
            key: "_getBsaBannerId", value: function (e) {
                var t = e.priceBucket;
                return this._bsaBannerIdsByPriceBucket[t]
            }
        }, {
            key: "_getClickConfig", value: function (e) {
                var t = this, n = e.placement, r = e.priceBucket, i = e.showPriceBucket, o = {
                    hasBeenClicked: !1,
                    isHovered: !1,
                    placement: n,
                    priceBucket: r,
                    showPriceBucket: i,
                    onNonIframeClick: function () {
                        o.hasBeenClicked || (o.hasBeenClicked = !0, t._recordClick({
                            placement: n,
                            priceBucket: r,
                            showPriceBucket: i
                        }), t._trackedClickConfigsByPlacementId.delete(n.id))
                    },
                    onIframeMouseOver: function () {
                        o.isHovered = !0
                    },
                    onIframeMouseOut: function () {
                        o.isHovered = !1
                    }
                };
                return o
            }
        }, {
            key: "_log", value: function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                c.log.apply(c, ["(BSA Stats) ".concat(e)].concat(n))
            }
        }, {
            key: "_recordClick", value: function (e) {
                var t = this, n = e.placement, r = e.priceBucket, i = e.showPriceBucket, o = n.zoneKey,
                    a = this._getBsaBannerId({priceBucket: r});
                if (void 0 !== a) {
                    var c = new URL("".concat(this._bsaAdServerOrigin, "/ads/").concat(o, ".json"));
                    c.searchParams.set("forcebanner", a), c.searchParams.set("ignore", "yes"), c.searchParams.set("ignoretargeting", "yes"), fetch(c.toString(), {method: "GET"}).then((function (e) {
                        return e.ok ? e.json() : Promise.reject()
                    })).then((function (e) {
                        return "object" === te(e) && e.hasOwnProperty("ads") && Array.isArray(e.ads) && void 0 !== e.ads[0].statlink ? e.ads[0].statlink : Promise.reject()
                    })).then((function (e) {
                        return fetch("https://".concat(e.replace("/ignore/yes", "")), {
                            method: "GET",
                            mode: "no-cors"
                        }).then((function (e) {
                            if (e.status < 400) {
                                var o = ["Click recorded", i && "for $".concat(r), "on ".concat(n.getName(), ".")].filter(Boolean).join(" ");
                                return t._log(o), Promise.resolve()
                            }
                            return Promise.reject()
                        }))
                    })).catch((function () {
                        var e = ["Failed to record click", i && "for $".concat(r), "on ".concat(n.getName(), ".")].filter(Boolean).join(" ");
                        t._log(e)
                    }))
                } else {
                    var u = ["Banner ID not found", i && "for $".concat(r, ".")].filter(Boolean).join(" ");
                    this._log(u)
                }
            }
        }, {
            key: "_setupClickHelperHandler", value: function () {
                var e = this;
                window.addEventListener("blur", (function (t) {
                    var n = K(e._trackedClickConfigsByPlacementId.values()).filter((function (e) {
                        return e.isHovered
                    })).pop();
                    if (void 0 !== n) {
                        var r = n.placement, i = n.priceBucket, o = n.showPriceBucket;
                        setTimeout((function () {
                            n.hasBeenClicked || B.Visible() || (n.hasBeenClicked = !0, e._recordClick({
                                placement: r,
                                priceBucket: i,
                                showPriceBucket: o
                            }), e._trackedClickConfigsByPlacementId.delete(r.id)), window.focus({preventScroll: !0})
                        }), 500)
                    }
                }))
            }
        }], (n = null) && ne(t.prototype, n), r && ne(t, r), e
    }();
    !function (e, t, n) {
        t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n
    }(re, "_trackedClickConfigsByPlacementId", new Map);
    n(92);

    function ie(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return oe(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oe(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function ae(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var ce = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "SizeMaps", value: function (e) {
                var t = [];
                return e.forEach((function (e) {
                    var n = e.acceptable, r = e.getSizeMapping();
                    if (r) if (n) {
                        var i = e.getSizesForPrebid();
                        t["0x0"] = P.Unique((t["0x0"] || []).concat(i))
                    } else r.forEach((function (e) {
                        var n = ie(e, 2), r = n[0], i = n[1], o = r.join("x"), a = Yt.filterSizesForPrebid(i);
                        t[o] = P.Unique((t[o] || []).concat(a))
                    }))
                })), t
            }
        }, {
            key: "SizeConfig", value: function (t) {
                var n, r = e.SizeMaps(t);
                return Object.entries(r).sort((function (e, t) {
                    var n = ie(e, 1)[0], r = ie(t, 1)[0];
                    if (n === r) return 0;
                    var i = ie(n.split("x").map(Number), 2), o = i[0], a = i[1], c = ie(r.split("x").map(Number), 2);
                    return o * a < c[0] * c[1] ? 1 : -1
                })).map((function (e) {
                    var t = ie(e, 2), r = t[0], i = t[1], o = ie(r.split("x").map(Number), 2), a = o[0], c = o[1],
                        u = "(min-width: ".concat(a, "px)");
                    return u += 0 == a && void 0 !== n ? " and (max-width: ".concat(n - 1, "px)") : " and (min-height: ".concat(c, "px)"), n = a, {
                        mediaQuery: u,
                        sizesSupported: i,
                        labels: [r]
                    }
                }))
            }
        }, {
            key: "NotRejectable", value: function (e) {
                return !e.getSizeMapping().some((function (e) {
                    var t = ie(e, 2);
                    return t[0], t[1].some((function (e) {
                        var t = ie(e, 2), n = t[0], r = t[1];
                        return 1 == n && 1 == r
                    }))
                }))
            }
        }], (n = null) && ae(t.prototype, n), r && ae(t, r), e
    }();

    function ue(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var se = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "getAnalyticsConfig", value: function () {
                return [{provider: "adagio"}]
            }
        }, {
            key: "getConfig", value: function (e) {
                var t = e.debugging, n = void 0 === t ? {} : t, r = e.firstPartyData, i = e.placements,
                    o = e.shouldEnableConsentManagement, a = {
                        userSync: {
                            filterSettings: {
                                iframe: {bidders: "*", filter: "include"},
                                image: {bidders: "*", filter: "include"}
                            }, syncEnabled: !0, syncsPerBidder: 8, syncDelay: 3e3
                        }, schain: {validation: "strict", config: m.getConfig()}
                    };
                return n.enabled && (a.debugging = {enabled: !0}, n.cpm && (a.debugging.bids = [{cpm: n.cpm}], c.log("Forced Prebid CPM:", n.cpm))), void 0 !== i && (a.sizeConfig = ce.SizeConfig(i)), o && (a.consentManagement = {
                    gdpr: {
                        cmpApi: "iab",
                        timeout: 1e4,
                        defaultGdprScope: !0
                    }
                }, c.log("Consent management:", a.consentManagement)), r && (a.fpd = r, c.log("First party data:", a.fpd)), a
            }
        }, {
            key: "getCreative", value: function (e) {
                var t = e.developmentEnvironment, n = e.shouldRenderAcceptableAd, r = e.formattedTargeting;
                return "\n<script src=\"https://cdn.jsdelivr.net/npm/prebid-universal-creative@latest/dist/creative.js\" type=\"text/javascript\"><\/script>\n<script type=\"text/javascript\">\n\tvar acceptableAdServerDomainMap = {\n\t\tlocal: 'acceptable.local.devbsa.net',\n\t\tdev: 'acceptable.devbsa.net',\n\t\tprod: 'acceptable.buysellads.net'\n\t};\n\n\tvar developmentEnvironment = '".concat(t, "';\n\tvar shouldRenderAcceptableAd = ").concat(n, ";\n\n\tvar ucTagData = {};\n\tucTagData.hbPb = '").concat(r.hb_pb[0], "';\n\tucTagData.pubUrl = '").concat(window.location.href, "';\n\tucTagData.targetingMap = ").concat(JSON.stringify(r), ";\n\n\tif (shouldRenderAcceptableAd) {\n\t\tucTagData.adServerDomain = acceptableAdServerDomainMap[developmentEnvironment] || '';\n\t} else {\n\t\tucTagData.adServerDomain = '';\n\t}\n\n\ttry {\n\t\tucTag.renderAd(document, ucTagData);\n\t} catch (e) {\n\t\tconsole.log(e);\n\t}\n<\/script>\n").split("\n").map((function (e) {
                    return e.trim()
                })).join("")
            }
        }, {
            key: "getCpmForSlot", value: function (e) {
                return parseFloat(this.getPriceBucketForSlot(e)) || 0
            }
        }, {
            key: "getPriceBucketForSlot", value: function (e) {
                return e.getTargeting("hb_pb")[0]
            }
        }], (n = null) && ue(t.prototype, n), r && ue(t, r), e
    }();

    function le(e) {
        return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function fe(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || he(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function de(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function pe(e) {
        return function (e) {
            if (Array.isArray(e)) return ve(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || he(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function he(e, t) {
        if (e) {
            if ("string" == typeof e) return ve(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ve(e, t) : void 0
        }
    }

    function ve(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function ye(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ge(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function me(e, t) {
        return (me = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function be(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = Se(e);
            if (t) {
                var i = Se(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return we(this, n)
        }
    }

    function we(e, t) {
        return !t || "object" !== le(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Se(e) {
        return (Se = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ke(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var _e = function (e) {
        !function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && me(e, t)
        }(o, e);
        var t, n, r, i = be(o);

        function o() {
            return ye(this, o), i.apply(this, arguments)
        }

        return t = o, r = [{
            key: "preparePlacements", value: function (e) {
                var t = this, n = e.allPlacements, r = e.auctionablePlacements, i = e.isRefresh;
                return this._destroySlotsByPlacement({
                    allPlacements: n,
                    auctionablePlacements: r,
                    isRefresh: i
                }).then((function () {
                    return Promise.all(pe(r.values()).map((function (e) {
                        return t._preparePlacement({isRefresh: i, placement: e})
                    })))
                }))
            }
        }, {
            key: "sendBids", value: function (e) {
                var t = this, n = e.canRequestAmazon, r = e.canRequestPrebid, i = e.placements,
                    o = e.slotsWithoutResponses;
                return s.getTags({includeAps: n, includePbjs: r}).then((function (e) {
                    var n = e.aps, r = e.pbjs;
                    n && n.setDisplayBids(), r && r.setTargetingForGPTAsync(), i.forEach((function (e) {
                        var n = document.getElementById(e.id), r = t._getCreativeData({placement: e});
                        if (n.innerHTML = "", Object.values(r).every((function (e) {
                            return void 0 !== e
                        }))) {
                            var i = t._getContainerElement({placement: e}), a = t._getDocument(function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? de(Object(n), !0).forEach((function (t) {
                                            ke(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function (t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({placement: e}, r)), c = r.bidderName, u = r.priceBucket, s = r.width, l = r.height,
                                f = t._getIframeElement({height: l, placement: e, width: s});
                            n.style.display = "", i.appendChild(f), n.appendChild(i), "backfill" === c && t._log("Rendering backfill creative in ".concat(e.getName(), " due to lack of bids")), function n() {
                                f.contentDocument ? (f.contentDocument.open(), f.contentDocument.write(a), f.contentDocument.close(), t._enableBsaStatsRecording && "backfill" !== c && (re.recordImpression({
                                    placement: e,
                                    priceBucket: u
                                }), setTimeout((function () {
                                    return re.trackClick({placement: e, priceBucket: u})
                                }), 500))) : setTimeout(n, 500)
                            }()
                        } else n.style.display = "none", Y.isIn() && Y.postAdSizeChangedMessage(e.id, "hide");
                        o.delete(e.id)
                    }))
                }))
            }
        }, {
            key: "setup", value: function (e) {
                var t = e.adLightningClientId, n = e.enableBsaStatsRecording;
                return this._adLightningClientId = t, this._enableBsaStatsRecording = n, Promise.resolve()
            }
        }, {
            key: "_getAdLightningWrappedCreative", value: function (e) {
                var t = e.bidderName, n = e.creative, r = e.creativeId, i = e.height, o = e.placement,
                    a = e.priceBucket, c = e.width;
                return new URLSearchParams(window.location.search).has("force_adl_block") && (n = '<img src="www.adltestblocksignature.com">'.concat(n)), '\n<script type="text/javascript">var urlEncodedUrl = "'.concat(encodeURIComponent(n), '";<\/script>\n<script src="https://tagan.adlightning.com/').concat(this._adLightningClientId, '/blacklist_script.js" type="text/javascript"><\/script>\n<script src="https://tagan.adlightning.com/').concat(this._adLightningClientId, '/blocking_script.js" type="text/javascript"><\/script>\n<script type="text/javascript">\n    function createTagDetails(){\n        var tagDetails = {};\n        tagDetails.w = \'').concat(c, "';\n        tagDetails.h = '").concat(i, "';\n        tagDetails.adServerDetails = {advertiserId: '").concat(t, "', campaignId: '").concat(o.getName({shouldIncludeCloneSuffix: !1}), "', creativeId: '").concat(r, "', lineitemId: '$").concat(a, "', adServer: 'Optimize (No-GAM)'};\n        tagDetails.au = '").concat(o.id, "';\n        tagDetails.markupInDom = true;\n        tagDetails.refreshMessage = 'true';\n        var timeBase36 = Date.now().toString(36);\n\t\tvar random = Math\n\t\t\t.random()\n\t\t\t.toString(36)\n\t\t\t.substr(2)\n\t\t\t.split('')\n            .map(function (c) { return (Math.random() < 0.5 ? c.toUpperCase() : c); }).join('');\n        tagDetails.currentTagId = \"adltag_\" + timeBase36 + \"_\" + random;\n    \treturn tagDetails;\n    }\n    var random = \"\" + Math.round(Math.random() * 1e8);\n\tvar clientId = \"").concat(this._adLightningClientId, '";\n    var site_id = random + "_" + clientId;\n    window[site_id]={};\n    window[site_id].tagDetails=createTagDetails();\n    !function(){"use strict";"blocker"in window||(window.blocker=function(e,n,o,i,t){if((t=t||{}).bw){if(Math.random()<.1){var r="undefined"!=typeof btoa?btoa:String,a="https://"+clientId+"-tagan.adlightning.com",d={siteId:clientId,url:window.top.location.href,tagDetails:window[e],errorData:null,errorMethod:"missing_blocker"},c=encodeURIComponent(JSON.stringify(d)).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)});!function(e){var n=window.Request,o=n&&n.prototype||{};if(navigator&&navigator.sendBeacon)navigator.sendBeacon(e);else if(window.fetch){var i={method:"GET"};"keepalive"in o&&(i.keepalive=!0),window.fetch(e,i)}else{var t=new Image(1,1);"loading"in t&&(t.loading="eager"),t.src=e}}(a+"/error?d="+encodeURIComponent(r(c)))}document.write(n)}})}();\n    blocker(site_id, decodeURIComponent(urlEncodedUrl) + "\x3c!--ADL_WRAPPED--\x3e", false, window, {bw:true});\n<\/script>\n').split("\n").map((function (e) {
                    return e.trim()
                })).join("")
            }
        }, {
            key: "_getBackfillCreative", value: function (e) {
                var t = e.backfillCreativeCode, n = e.width, r = e.height;
                return t.replace(/%%WIDTH%%/g, n).replace(/%%HEIGHT%%/g, r).replace(/%%CACHEBUSTER%%/g, +new Date)
            }
        }, {
            key: "_getContainerElement", value: function (e) {
                var t = e.placement, n = document.createElement("div");
                return n.id = "".concat(t.id, "_direct_iframe_container"), n.style.border = "0", n
            }
        }, {
            key: "_getCreativeData", value: function (e) {
                var t, n, r, i, o, a, c, u = e.placement, s = u.backfillCreativeCodeForDirectRendering, l = u.slot,
                    f = this._getCreativeSource({placement: u}), d = u.getSizesForNonGam();
                if ("amazon" === f) {
                    var p = l.getTargeting("amzniid")[0];
                    t = "amazon", r = p, i = S.getPriceBucketForSlot(l), o = l.getTargeting("amznsz")[0] || "1x1", p && (n = S.getCreative({slot: l}))
                } else if ("prebid" === f) {
                    var h = l.getTargeting("hb_adid")[0];
                    t = l.getTargeting("hb_bidder")[0], r = l.getTargeting("hb_creative")[0], i = se.getPriceBucketForSlot(l), o = l.getTargeting("hb_size")[0] || "1x1", h && (n = se.getCreative({
                        developmentEnvironment: l.getTargeting("optimize_env")[0],
                        shouldRenderAcceptableAd: "true" === l.getTargeting("optimize_acceptable")[0],
                        formattedTargeting: l.getTargetingMap()
                    }))
                } else if (d.length > 0 && s) {
                    t = "backfill", r = "".concat(u.getName(), " - Backfill"), i = "?.??";
                    var v = fe(P.Shuffle(d)[0], 2);
                    a = v[0], c = v[1], n = this._getBackfillCreative({backfillCreativeCode: s, width: a, height: c})
                }
                if (void 0 !== o) {
                    var y = fe(o.split("x").map((function (e) {
                        return parseInt(e)
                    })), 2);
                    a = y[0], c = y[1]
                }
                return {bidderName: t, creative: n, creativeId: r, priceBucket: i, width: a, height: c}
            }
        }, {
            key: "_getCreativeSource", value: function (e) {
                var t = e.placement.slot, n = S.getCpmForSlot(t), r = se.getCpmForSlot(t);
                return n > r || -1 !== (t.getTargeting("amzniid")[0] || "").indexOf("testImpression") ? "amazon" : n < r ? "prebid" : n === r && n > 0 ? ["amazon", "prebid"][Math.floor(2 * Math.random())] : void 0
            }
        }, {
            key: "_getDocument", value: function (e) {
                return "\n<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<style>\n\t\t\tbody { margin: 0; padding: 0; }\n\t\t</style>\n\t</head>\n\t<body>\n\t\t".concat(this._adLightningClientId ? this._getAdLightningWrappedCreative(e) : e.creative, "\n\t</body>\n</html>\n").split("\n").map((function (e) {
                    return e.trim()
                })).join("")
            }
        }, {
            key: "_getIframeElement", value: function (e) {
                var t = e.height, n = e.placement, r = e.width, i = document.createElement("iframe");
                return i.id = "".concat(n.id, "_direct_iframe"), i.frameBorder = 0, i.scrolling = "no", i.allowTransparency = !0, i.width = r, i.height = t, i
            }
        }, {
            key: "_preparePlacement", value: function (e) {
                var t = this, n = e.isRefresh, r = e.placement;
                return s.GPT((function (e) {
                    var i = r.getName();
                    if (t._setPlacementRefreshCount({
                        isRefresh: n,
                        placement: r
                    }), r.slot) t._log("Slot already loaded for ".concat(i)); else {
                        var o = r.id, a = r.getSizesForNonGam(), c = r.getSizeMapping(), u = r.getSlotName(),
                            s = e.defineSlot(u, a, o);
                        if (s) {
                            var l = e.sizeMapping(o);
                            c.forEach((function (e) {
                                var t = fe(e, 2), n = t[0], r = t[1];
                                return l.addSize(n, Yt.filterSizesForNonGam(r))
                            }));
                            var f = l.build();
                            s.defineSizeMapping(f), t._log("Set ad request sizes for ".concat(i), f);
                            var d = e.pubads();
                            r.setSlot(s), s.addService(d)
                        } else t._log("Failed to create slot for ".concat(i))
                    }
                }))
            }
        }], (n = null) && ge(t.prototype, n), r && ge(t, r), o
    }(y);
    ke(_e, "_adServerName", "Direct");
    var Ae = ["BSAOPTIMIZE_TARGETING", "BSAOPTIMIZE_targeting", "BSAS2S_TARGETING", "BSAS2S_targeting", "BSA_TARGETING", "bsa_targeting"];

    function xe(e) {
        return (xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Pe(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || Ee(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ie(e) {
        return function (e) {
            if (Array.isArray(e)) return Re(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || Ee(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ee(e, t) {
        if (e) {
            if ("string" == typeof e) return Re(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Re(e, t) : void 0
        }
    }

    function Re(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function je(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Te(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Oe(e, t) {
        return (Oe = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Ce(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = Be(e);
            if (t) {
                var i = Be(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return ze(this, n)
        }
    }

    function ze(e, t) {
        return !t || "object" !== xe(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Be(e) {
        return (Be = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    var Le = function (e) {
        !function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Oe(e, t)
        }(o, e);
        var t, n, r, i = Ce(o);

        function o() {
            return je(this, o), i.apply(this, arguments)
        }

        return t = o, r = [{
            key: "preparePlacements", value: function (e) {
                var t = this, n = e.allPlacements, r = e.auctionablePlacements, i = e.customTargeting, o = e.isRefresh,
                    a = e.targeting;
                return Promise.all([this._setRefreshTargeting({isRefresh: o}), this._destroySlotsByPlacement({
                    allPlacements: n,
                    auctionablePlacements: r,
                    isRefresh: o
                })]).then((function () {
                    return Promise.all([t._setPageLevelCustomTargeting({customTargeting: i})].concat(Ie(Ie(r.values()).map((function (e) {
                        return t._preparePlacement({isRefresh: o, placement: e, targeting: a})
                    })))))
                }))
            }
        }, {
            key: "sendBids", value: function (e) {
                var t = e.canRequestAmazon, n = e.canRequestPrebid, r = e.getSlotsArray();
                return 0 === r.length ? Promise.resolve() : s.getTags({
                    includeAps: t,
                    includeGpt: !0,
                    includePbjs: n
                }).then((function (e) {
                    var t = e.aps, n = e.gpt, i = e.pbjs;
                    t && t.setDisplayBids(), i && i.setTargetingForGPTAsync(), n.pubads().refresh(r)
                }))
            }
        }, {
            key: "setup", value: function (e) {
                var t = e.disableGptCollapseEmptyDivs, n = e.enableBsaStatsRecording, r = e.getPlacement;
                return s.GPT((function (e) {
                    var i = e.pubads();
                    i.enableSingleRequest(), i.disableInitialLoad(), t || i.collapseEmptyDivs(), e.enableServices(), n && e.pubads().addEventListener("slotRenderEnded", (function (e) {
                        var t = e.slot.getSlotElementId(), n = r(t);
                        void 0 !== n && setTimeout((function () {
                            return re.trackClick({placement: n, priceBucket: "0.01", showPriceBucket: !1})
                        }), 500)
                    }))
                }))
            }
        }, {
            key: "_preparePlacement", value: function (e) {
                var t = this, n = e.isRefresh, r = e.placement, i = e.targeting;
                return s.GPT((function (e) {
                    var o = r.getName();
                    if (t._setPlacementRefreshCount({
                        isRefresh: n,
                        placement: r
                    }), r.slot) return t._log("Slot already loaded for ".concat(o)), t._setAdLoadTargeting({placement: r}), t._setAdUnitTargeting({placement: r}), void t._setViewabilityTargeting({placement: r});
                    var a, c = r.id, u = r.getSizes(), s = r.getSizeMapping(), l = r.getSlotName();
                    if (r.isInPageUnit() ? a = e.defineSlot(l, u, c) : r.isBottomAnchorUnit() ? a = e.defineOutOfPageSlot(l, e.enums.OutOfPageFormat.BOTTOM_ANCHOR) : r.isInterstitialUnit() ? a = e.defineOutOfPageSlot(l, e.enums.OutOfPageFormat.INTERSTITIAL) : r.isTopAnchorUnit() && (a = e.defineOutOfPageSlot(l, e.enums.OutOfPageFormat.TOP_ANCHOR)), a) {
                        if (r.isInPageUnit()) {
                            var f = e.sizeMapping(c);
                            s.forEach((function (e) {
                                var t = Pe(e, 2), n = t[0], r = t[1];
                                return f.addSize(n, r)
                            }));
                            var d = f.build();
                            a.defineSizeMapping(d), t._log("Set ad request sizes for ".concat(o, " (").concat(l, ")"), d)
                        }
                        var p = e.pubads();
                        r.setSlot(a), i.getTargetingArray().forEach((function (e) {
                            var t = e.key, n = e.value;
                            return p.setTargeting(t, n)
                        })), t._setAdLoadTargeting({placement: r}), t._setAdUnitTargeting({placement: r}), t._setViewabilityTargeting({placement: r}), a.addService(p), e.display(c)
                    } else t._log("Failed to create slot for ".concat(o, " (").concat(l, ")"))
                }))
            }
        }, {
            key: "_setAdLoadTargeting", value: function (e) {
                var t = e.placement;
                t.slot.clearTargeting("optimize_refresh_int"), t.slot.setTargeting("optimize_refresh_int", t.refreshCount.toString())
            }
        }, {
            key: "_setPageLevelCustomTargeting", value: function (e) {
                var t = this, n = e.customTargeting;
                return s.GPT((function (e) {
                    var r = [];
                    Ae.forEach((function (e) {
                        return (window[e] || []).forEach((function (e) {
                            return r.push(e)
                        }))
                    })), n.getTargetingArray().map((function (e) {
                        return [e.key, e.value]
                    })).forEach((function (e) {
                        return r.push(e)
                    })), r.forEach((function (t) {
                        var n = Pe(t, 2), r = n[0], i = n[1];
                        return e.pubads().setTargeting(r, i)
                    })), t._log("Set page-level custom targeting", r)
                }))
            }
        }, {
            key: "_setRefreshTargeting", value: function (e) {
                var t = e.isRefresh;
                return s.GPT((function (e) {
                    var n = e.pubads();
                    n.clearTargeting("optimize_refreshed"), n.setTargeting("optimize_refreshed", t.toString())
                }))
            }
        }, {
            key: "_setViewabilityTargeting", value: function (e) {
                var t = e.placement;
                t.slot.clearTargeting("optimize_inview"), t.slot.setTargeting("optimize_inview", t.viewable.toString())
            }
        }, {
            key: "_setAdUnitTargeting", value: function (e) {
                var t = e.placement;
                t.slot.clearTargeting("optimize_ad_unit_id"), t.slot.setTargeting("optimize_ad_unit_id", t.id)
            }
        }], (n = null) && Te(t.prototype, n), r && Te(t, r), o
    }(y);

    function Me(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    !function (e, t, n) {
        t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n
    }(Le, "_adServerName", "Google");
    var De = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "Deadline", value: function (e) {
                return new Promise((function (t, n) {
                    var r = setTimeout((function () {
                        clearTimeout(r), n("timeout after ".concat(e, "ms"))
                    }), e)
                }))
            }
        }], (n = null) && Me(t.prototype, n), r && Me(t, r), e
    }();

    function Ne(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || qe(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ue(e) {
        return function (e) {
            if (Array.isArray(e)) return Fe(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || qe(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function qe(e, t) {
        if (e) {
            if ("string" == typeof e) return Fe(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Fe(e, t) : void 0
        }
    }

    function Fe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Ge(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var He = function () {
        function e(t) {
            var n = t.baseTargeting, r = t.canRequestAmazon, i = t.canRequestPrebid, o = t.firstPartyData,
                a = t.isRefresh, c = t.placements, u = t.shouldRenderDirectly, s = t.shouldEnableConsentManagement,
                l = t.timeout;
            if (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.baseTargeting = n, this.canRequestAmazon = r, this.canRequestPrebid = i, this.firstPartyData = o, this.isRefresh = a, this.placements = c, this.shouldRenderDirectly = u, this.shouldEnableConsentManagement = s, this.slotsWithoutResponses = new Map(Ue(c).map((function (e) {
                return [Ne(e, 1)[0], !0]
            }))), this.timeout = l, void 0 !== this.constructor.currentInstance && !this.constructor.currentInstance.hasSentBids) throw new Error("The previous auction has not finished.");
            this.constructor.currentInstance = this
        }

        var t, n, r;
        return t = e, r = [{
            key: "resizeAcceptableAdIframe", value: function (e, t) {
                this.shouldBlockAcceptableAdIframeResize || "fluid" === t || Array.isArray(t) && 1 === t[0] && 1 === t[1] || (Y.postAdSizeChangedMessage(e, t), this.shouldBlockAcceptableAdIframeResize = !0)
            }
        }], (n = [{
            key: "shouldGetBids", value: function (e) {
                return ce.NotRejectable(e)
            }
        }, {
            key: "getBiddablePlacementsArray", value: function () {
                var e = this;
                return Ue(this.placements.values()).filter((function (t) {
                    return e.shouldGetBids(t)
                }))
            }
        }, {
            key: "getSlotsArray", value: function () {
                return Ue(this.placements.values()).map((function (e) {
                    return e.slot
                }))
            }
        }, {
            key: "init", value: function () {
                var t = this;
                return s.getTags({
                    includeAps: this.canRequestAmazon,
                    includeGpt: !this.shouldRenderDirectly,
                    includePbjs: this.canRequestPrebid
                }).then((function (n) {
                    var r = n.aps, i = n.gpt, o = n.pbjs;
                    if (t.aps = r, t.gpt = i, t.pbjs = o, t.canRequestPrebid) {
                        var a = se.getConfig({
                            firstPartyData: t.firstPartyData,
                            placements: t.placements,
                            shouldEnableConsentManagement: t.shouldEnableConsentManagement
                        });
                        t.pbjs.bidderSettings = {
                            standard: {
                                adserverTargeting: [{key: "_pl", val: Z}, {
                                    key: "_bd",
                                    val: function () {
                                        return "bid"
                                    }
                                }, {
                                    key: "hb_bidder", val: function (e) {
                                        return e.bidderCode
                                    }
                                }, {
                                    key: "hb_adid", val: function (e) {
                                        return e.adId
                                    }
                                }, {
                                    key: "hb_creative", val: function (e) {
                                        return e.creativeId
                                    }
                                }, {key: "hb_pb", val: Z}, {
                                    key: "hb_size", val: function (e) {
                                        return e.size
                                    }
                                }]
                            }
                        }, t.pbjs.setConfig(a)
                    }
                    if (!t.constructor.hasRegisteredListeners) {
                        t.shouldRenderDirectly || t.gpt.pubads().addEventListener("slotResponseReceived", (function (t) {
                            var n = t.slot.getSlotElementId();
                            if (e.currentInstance.placements.has(n)) {
                                var r = e.currentInstance.placements.get(n).getName();
                                e.currentInstance.slotsWithoutResponses.delete(n), c.log("Response received from GPT for ".concat(r, "!"))
                            }
                        }));
                        var u = new URLSearchParams(window.location.search);
                        if (Y.isIn() && u.has("adunit")) {
                            var s = u.get("adunit");
                            t.shouldRenderDirectly || t.gpt.pubads().addEventListener("slotRenderEnded", (function (t) {
                                var n = t.slot.getSlotElementId();
                                n === s && e.resizeAcceptableAdIframe(n, t.size)
                            })), t.canRequestPrebid && t.pbjs.onEvent("bidWon", (function (t) {
                                var n = t.adUnitCode, r = t.width, i = t.height;
                                n === s && e.resizeAcceptableAdIframe(n, [r, i])
                            }))
                        }
                        t.constructor.hasRegisteredListeners = !0
                    }
                    Y.isIn() && (t.constructor.shouldBlockAcceptableAdIframeResize = !1)
                }))
            }
        }, {
            key: "run", value: function () {
                var e = this;
                if (!this.hasRun) return this.init().then((function () {
                    var t = [], n = e.getBiddablePlacementsArray();
                    return e.canRequestPrebid && t.push(new Promise((function (t) {
                        e.pbjs.removeAdUnit(), e.pbjs.addAdUnits(n.map((function (e) {
                            return e.forPrebid()
                        }))), e.pbjs.requestBids({
                            bidsBackHandler: function () {
                                t()
                            }, timeout: e.timeout
                        })
                    }))), e.canRequestAmazon && t.push(new Promise((function (t) {
                        var r = window.performance.now();
                        e.aps.fetchBids({
                            slots: n.map((function (e) {
                                return e.forAmazon()
                            })), timeout: e.timeout
                        }, (function (e) {
                            S.storeBidInfo({bids: e, timeToRespond: parseInt(window.performance.now() - r)}), t()
                        }))
                    }))), Promise.race([Promise.all(t), De.Deadline(e.timeout)]).catch((function (e) {
                        c.log("Failed to get all bids: ".concat(e, "; sending adserver request anyway."))
                    })).then((function () {
                        return e.hasRun = !0, e.sendBids()
                    }))
                }));
                throw new Error("Auction has already run.")
            }
        }, {
            key: "sendBids", value: function () {
                var e = this;
                if (!this.hasSentBids) {
                    var t = new Promise((function (t) {
                        (e.shouldRenderDirectly ? _e : Le).sendBids(e).then((function () {
                            var n;
                            !function r() {
                                e.slotsWithoutResponses.size ? n = setTimeout(r, 500) : (clearTimeout(n), t())
                            }()
                        }))
                    }));
                    return Promise.race([t, De.Deadline(this.timeout)]).catch((function (e) {
                        c.log("Did not receive responses for all slots: ".concat(e, "; ending auction anyway."))
                    })).then((function () {
                        e.hasSentBids = !0
                    }))
                }
                throw new Error("Auction has already sent bids.")
            }
        }]) && Ve(t.prototype, n), r && Ve(t, r), e
    }();
    Ge(He, "hasRegisteredListeners", !1), Ge(He, "shouldBlockAcceptableAdIframeResize", !1);
    n(151);

    function We(e) {
        return function (e) {
            if (Array.isArray(e)) return Ye(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || Qe(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function $e(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || Qe(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Qe(e, t) {
        if (e) {
            if ("string" == typeof e) return Ye(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ye(e, t) : void 0
        }
    }

    function Ye(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Je(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Xe = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "cacheBidData", value: function () {
                var e = this, t = this._getPlacements(), n = [];
                this._shouldDebugAmazon && t.forEach((function (e) {
                    var t = e.id, r = e.shouldEnableDirectRendering, i = e.slot, o = S.getBidInfoForPlacementId(t);
                    if (void 0 !== o && o.hasBid) {
                        var a = o.cpm, c = o.size, u = o.timeToRespond,
                            s = S.isRendered({slot: i, shouldCheckThroughGpt: !r});
                        n.push({
                            id: t,
                            adUnitName: e.getName(),
                            bidder: "amazon",
                            cpm: a,
                            size: c,
                            timeToRespond: u,
                            message: "Bid available",
                            rendered: s
                        })
                    } else void 0 === o || o.hasBid || n.push({
                        id: t,
                        adUnitName: e.getName(),
                        bidder: "amazon",
                        message: "No bid"
                    })
                })), this._shouldDebugPrebid && s.Prebid((function (e) {
                    var r = e.getBidResponses(), i = e.getNoBids(), o = e.getAllWinningBids();
                    Object.entries(r).forEach((function (e) {
                        var r = $e(e, 2), i = r[0], a = r[1];
                        if (a) {
                            var c = t.get(i);
                            a.bids.forEach((function (e) {
                                var t = e.adId, r = e.bidder, a = e.cpm, u = e.size, s = e.timeToRespond;
                                n.push({
                                    id: i,
                                    adUnitName: void 0 !== c ? c.getName() : void 0,
                                    bidder: r,
                                    cpm: a,
                                    size: u,
                                    timeToRespond: s,
                                    message: "Bid available",
                                    rendered: !!o.find((function (e) {
                                        var n = e.adId;
                                        return t === n
                                    }))
                                })
                            }))
                        }
                    })), Object.entries(i).forEach((function (e) {
                        var r = $e(e, 2), i = r[0], o = r[1];
                        if (o) {
                            var a = t.get(i);
                            o.bids.forEach((function (e) {
                                var t = e.bidder;
                                n.push({
                                    id: i,
                                    adUnitName: void 0 !== a ? a.getName() : void 0,
                                    bidder: t,
                                    message: "No bid"
                                })
                            }))
                        }
                    }))
                })).then((function () {
                    P.GroupBy(n, "id").forEach((function (t, n) {
                        e._cachedBidDataByPlacementId.set(n, t)
                    }))
                }))
            }
        }, {
            key: "init", value: function (e) {
                var t = e.firstPartyData, n = e.getPlacements, r = e.shouldDebugAmazon, i = e.shouldDebugPrebid,
                    o = e.shouldEnableConsentManagement;
                this._enabled || (this._cachedBidDataByPlacementId = new Map, this._enabled = !0, this._firstPartyData = t, this._getPlacements = n, this._shouldDebugAmazon = r, this._shouldDebugPrebid = i, this._shouldEnableConsentManagement = o, c.enable(), this._setupGPTDebugging(), this._shouldDebugPrebid && this._setupPrebidDebugging())
            }
        }, {
            key: "isEnabled", value: function () {
                return this._enabled
            }
        }, {
            key: "logBidData", value: function () {
                var e = this._getCachedBidData();
                e.length ? c.table(e) : c.log("No bid data!")
            }
        }, {
            key: "_getCachedBidData", value: function () {
                return We(this._cachedBidDataByPlacementId.values()).reduce((function (e, t) {
                    return e.push.apply(e, We(t)), e
                }), []).sort((function (e, t) {
                    return e.message !== t.message ? e.message < t.message ? -1 : 1 : e.adUnitName !== t.adUnitName ? e.adUnitName < t.adUnitName ? -1 : 1 : e.bidder < t.bidder ? -1 : 1
                }))
            }
        }, {
            key: "_setupGPTDebugging", value: function () {
                s.GPT((function (e) {
                    new URLSearchParams(window.location.search).has("no_gpt_console") || Y.isIn() || e.openConsole()
                }))
            }
        }, {
            key: "_setupPrebidDebugging", value: function () {
                var e = new URLSearchParams(window.location.search), t = se.getConfig({
                    debugging: {cpm: e.get("cpm"), enabled: !0},
                    firstPartyData: this._firstPartyData,
                    shouldEnableConsentManagement: this._shouldEnableConsentManagement
                });
                this._setPrebidConfig(t), this._addPrebidEventListeners()
            }
        }, {
            key: "_setPrebidConfig", value: function (e) {
                s.Prebid((function (t) {
                    return t.setConfig(e)
                }))
            }
        }, {
            key: "_addPrebidEventListeners", value: function () {
                var e = this;
                this._addPrebidEventLogger("requestBids", "(Prebid) requestBids fired"), this._addPrebidEventLogger("bidWon", "(Prebid) bidder won", (function (t) {
                    return e._prebidAdUnitInfoMapper(t)
                })), this._addPrebidEventLogger("bidResponse", "(Prebid) bidder responded", (function (t) {
                    return e._prebidAdUnitInfoMapper(t)
                })), this._addPrebidEventLogger("bidTimeout", "(Prebid) bidder timed out", (function (t) {
                    return e._prebidAdUnitInfoMapper(t)
                })), this._addPrebidEventLogger("bidRequested", "(Prebid) bids requested", (function (t) {
                    return e._prebidBidderInfoMapper(t)
                }))
            }
        }, {
            key: "_addPrebidEventLogger", value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function (e) {
                    return [e]
                };
                s.Prebid((function (r) {
                    return r.onEvent(e, (function (e) {
                        return c.log.apply(c, ["".concat(t, ":")].concat(We(n(e))))
                    }))
                }))
            }
        }, {
            key: "_prebidAdUnitInfoMapper", value: function (e) {
                var t = Object.assign({}, e), n = this._getPlacements(), r = e.adUnitCode, i = n.get(r);
                return void 0 !== i && (t.adUnitName = i.getName()), [t.adUnitName, t]
            }
        }, {
            key: "_prebidBidderInfoMapper", value: function (e) {
                var t = Object.assign({}, e), n = this._getPlacements();
                return t.bids.forEach((function (e) {
                    var t = e.adUnitCode, r = n.get(t);
                    void 0 !== r && (e.adUnitName = r.getName())
                })), [t.bids.map((function (e) {
                    return e.adUnitName
                })), t]
            }
        }], (n = null) && Je(t.prototype, n), r && Je(t, r), e
    }();
    n(184), n(185), n(186);

    function Ze(e) {
        return (Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ke(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return et(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return et(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function tt(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function nt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function rt(e, t, n) {
        return (rt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
            var r = function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = st(e));) ;
                return e
            }(e, t);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value
            }
        })(e, t, n || e)
    }

    function it(e, t) {
        return !t || "object" !== Ze(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ot(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (ot = function (e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return at(e, arguments, st(this).constructor)
            }

            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), ut(r, e)
        })(e)
    }

    function at(e, t, n) {
        return (at = ct() ? Reflect.construct : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r));
            return n && ut(i, n.prototype), i
        }).apply(null, arguments)
    }

    function ct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
        } catch (e) {
            return !1
        }
    }

    function ut(e, t) {
        return (ut = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function st(e) {
        return (st = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    var lt = function (e) {
        !function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ut(e, t)
        }(c, e);
        var t, n, r, i, o, a = (t = c, n = ct(), function () {
            var e, r = st(t);
            if (n) {
                var i = st(this).constructor;
                e = Reflect.construct(r, arguments, i)
            } else e = r.apply(this, arguments);
            return it(this, e)
        });

        function c() {
            return tt(this, c), a.apply(this, arguments)
        }

        return r = c, (i = [{
            key: "peekBackForPriority", value: function (e) {
                for (var t = this.length - 1; t >= 0; t--) if (this[t].priority === e) return this[t].item
            }
        }, {
            key: "push", value: function (e, t) {
                return rt(st(c.prototype), "push", this).call(this, {item: t, priority: e})
            }
        }, {
            key: "shift", value: function () {
                if (0 !== this.length) {
                    var e = this._highestPriority(), t = this.map((function (e, t) {
                        return [t, e]
                    })).filter((function (t) {
                        var n = Ke(t, 2);
                        return n[0], n[1].priority === e
                    }))[0][0];
                    return this.splice(t, 1).pop().item
                }
            }
        }, {
            key: "_highestPriority", value: function () {
                if (0 !== this.length) return this.slice(1).reduce((function (e, t) {
                    return e > t.priority ? e : t.priority
                }), this[0].priority)
            }
        }]) && nt(r.prototype, i), o && nt(r, o), c
    }(ot(Array));
    n(187), n(188), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204);

    function ft(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = ht(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0, c = !1;
        return {
            s: function () {
                n = n.call(e)
            }, n: function () {
                var e = n.next();
                return a = e.done, e
            }, e: function (e) {
                c = !0, o = e
            }, f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }

    function dt(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || ht(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function pt(e) {
        return function (e) {
            if (Array.isArray(e)) return vt(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || ht(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ht(e, t) {
        if (e) {
            if ("string" == typeof e) return vt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vt(e, t) : void 0
        }
    }

    function vt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function yt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function gt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var mt = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "init", value: function (e) {
                var t = e.inViewPercentage, n = e.inViewTimeMs;
                this._inViewRatio = t / 100, this._inViewTimeMs = n
            }
        }, {
            key: "onLazyLoad", value: function (e) {
                var t = e.placements;
                this._removeFromTrackedPlacements(t, this._placementsAwaitingLazyLoad), this._removeFromTrackedPlacements(t, this._placementsQueuedToLazyLoad)
            }
        }, {
            key: "setupViewChecker", value: function (e) {
                var t = this, n = e.auctionManager, r = e.placements;
                this._mergeIntoTrackedPlacements(r, this._placementsAwaitingViewCheck), this._hasSetupViewChecker || (!function e() {
                    if (n.isRunningAuction()) setTimeout(e, 500); else {
                        var r = pt(t._placementsAwaitingViewCheck).map((function (e) {
                            var n = dt(e, 2), r = (n[0], n[1]);
                            return t._getViewabilityForPlacement(r).then((function (e) {
                                return [r, e]
                            }))
                        }));
                        Promise.all(r).then((function (r) {
                            var i = r.filter((function (e) {
                                var t = dt(e, 2);
                                return t[0], t[1].viewable
                            })).map((function (e) {
                                return dt(e, 1)[0].getName()
                            })).sort();
                            (i.length >= t._currentViewablePlacementNames.length ? i.map((function (e, n) {
                                return [e, t._currentViewablePlacementNames[n]]
                            })) : t._currentViewablePlacementNames.map((function (e, t) {
                                return [e, i[t]]
                            }))).find((function (e) {
                                var t = dt(e, 2);
                                return t[0] !== t[1]
                            })) && (c.log("placements in view have changed", i), r.forEach((function (e) {
                                var r = dt(e, 2), i = r[0], o = r[1], a = o.isStyledWithDisplayNone, c = o.viewable,
                                    u = i.getName(), s = c && !t._currentViewablePlacementNames.some((function (e) {
                                        return u === e
                                    })) && t._placementsReadyForBackInViewRefresh.has(i.id);
                                i.viewable = c, s && i.shouldQueueBackInViewRefresh() && n.enqueueAuction({
                                    auctionType: "BASIC",
                                    isRefresh: !0,
                                    placements: new Map([[i.id, i]]),
                                    shouldRenderDirectly: i.shouldEnableDirectRendering
                                }), c ? t._placementsReadyForBackInViewRefresh.add(i.id) : a && t._placementsReadyForBackInViewRefresh.delete(i.id)
                            })), t._currentViewablePlacementNames = i), setTimeout(e, 500)
                        }))
                    }
                }(), this._hasSetupViewChecker = !0)
            }
        }, {
            key: "setupLazyLoader", value: function (e) {
                var t = this, n = e.auctionManager, r = e.lazyLoadPercentage, i = e.placements;
                this._mergeIntoTrackedPlacements(i, this._placementsAwaitingLazyLoad), this._hasSetupLazyLoader || (!function e() {
                    return B.Ready((function () {
                        var i = new Map(pt(t._placementsAwaitingLazyLoad).filter((function (e) {
                            var i = dt(e, 2), o = i[0], a = i[1];
                            return !t._placementsQueuedToLazyLoad.has(o) && n.shouldAuctionPlacement({
                                isRefresh: !1,
                                placement: a
                            }) && t._getGreatestDistancePercentageFromViewport(o) <= r
                        })));
                        if (i.size > 0) {
                            t._mergeIntoTrackedPlacements(i, t._placementsQueuedToLazyLoad);
                            var o = pt(i.values()).map((function (e) {
                                return e.getName()
                            }));
                            c.log("lazy-loading placements:", o), P.GroupBy(pt(i.values()), "shouldEnableDirectRendering").forEach((function (e, t) {
                                var r = new Map(e.map((function (e) {
                                    return [e.id, e]
                                })));
                                r.size > 0 && n.enqueueAuction({
                                    auctionType: "LAZY_LOAD",
                                    isRefresh: !1,
                                    placements: r,
                                    shouldRenderDirectly: t
                                })
                            }))
                        }
                        setTimeout(e, 500)
                    }))
                }(), this._hasSetupLazyLoader = !0)
            }
        }, {
            key: "_getGreatestDistancePercentageFromViewport", value: function (e) {
                var t = document.getElementById(e);
                if (t) {
                    var n, r, i = t.getBoundingClientRect(), o = i.bottom, a = i.left, c = i.right, u = i.top,
                        s = dt(D.GetSize(), 2), l = s[0], f = s[1];
                    return 100 * ((n = c <= 0 ? -c / l : a > 0 && a <= l || c > 0 && c <= l ? 0 : (a - l) / l) > (r = o <= 0 ? -o / f : u > 0 && u <= f || o > 0 && o <= f ? 0 : (u - f) / f) ? n : r)
                }
            }
        }, {
            key: "_mergeIntoTrackedPlacements", value: function (e, t) {
                var n, r, i = ft(e);
                try {
                    for (i.s(); !(r = i.n()).done;) {
                        var o = dt(r.value, 2), a = o[0], c = o[1];
                        n = !1;
                        var u, s = ft(t);
                        try {
                            for (s.s(); !(u = s.n()).done;) if (a === dt(u.value, 1)[0]) {
                                n = !0;
                                break
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        n || t.set(a, c)
                    }
                } catch (e) {
                    i.e(e)
                } finally {
                    i.f()
                }
            }
        }, {
            key: "_getViewabilityForPlacement", value: function (e) {
                var t = this;
                return new Promise((function (n) {
                    var r, i;
                    e.isInPageUnit() ? (r = document.getElementById(e.id), i = r && r.querySelector("[id$=direct_iframe_container], [id$=__container__]")) : e.isAnchorUnit() ? (r = document.querySelector('[id*="'.concat(e.getSlotName(), '"]')), i = r && r.querySelector("[id$=__container__]")) : (r = null, i = null);
                    var o = r && t._getViewableRatio(r), a = i && t._getViewableRatio(i);
                    setTimeout((function () {
                        var e = r && t._getViewableRatio(r), c = i && t._getViewableRatio(i);
                        n({
                            isStyledWithDisplayNone: !(!r || "none" !== r.style.display),
                            viewable: o >= t._inViewRatio && e >= t._inViewRatio || a >= t._inViewRatio && c >= t._inViewRatio
                        })
                    }), t._inViewTimeMs)
                }))
            }
        }, {
            key: "_getViewableRatio", value: function (e) {
                var t, n, r = e.getBoundingClientRect(), i = r.bottom, o = r.height, a = r.left, c = r.right, u = r.top,
                    s = r.width, l = o * s, f = dt(D.GetSize(), 2), d = f[0], p = f[1];
                return t = u < 0 ? Math.min(p, i) : i > p ? Math.max(p - u, 0) : i - u, n = a < 0 ? Math.min(d, c) : c > d ? Math.max(d - a, 0) : c - a, 0 === l ? o > 0 && a > 0 && a <= d ? t / o : s > 0 && u > 0 && u <= p ? n / s : a > 0 && a <= d && u > 0 && u <= p ? 1 : 0 : t * n / l
            }
        }, {
            key: "_removeFromTrackedPlacements", value: function (e, t) {
                var n, r = ft(e);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var i = dt(n.value, 1)[0];
                        t.delete(i)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
        }], (n = null) && yt(t.prototype, n), r && yt(t, r), e
    }();

    function bt(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || St(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function wt(e) {
        return function (e) {
            if (Array.isArray(e)) return kt(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || St(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function St(e, t) {
        if (e) {
            if ("string" == typeof e) return kt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kt(e, t) : void 0
        }
    }

    function kt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _t(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    gt(mt, "_hasSetupViewChecker", !1), gt(mt, "_hasSetupLazyLoader", !1), gt(mt, "_placementsAwaitingLazyLoad", new Map), gt(mt, "_placementsQueuedToLazyLoad", new Map), gt(mt, "_placementsAwaitingViewCheck", new Map), gt(mt, "_currentViewablePlacementNames", []), gt(mt, "_placementsReadyForBackInViewRefresh", new Set);
    var At = function () {
        function e(t) {
            var n = t.baseTargeting, r = t.canRequestAmazon, i = t.canRequestPrebid, o = t.firstPartyData,
                a = t.getCustomTargeting, c = t.getViewportSize, u = t.shouldEnableConsentManagement,
                s = t.shouldInitiateAuction, l = t.shouldRunAuction, f = t.timeout;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._auctionConfigurationQueue = new lt, this._baseTargeting = n, this._canRequestAmazon = r, this._canRequestPrebid = i, this._firstPartyData = o, this._getCustomTargeting = a, this._getViewportSize = c, this._isRunningAuction = !1, this._refreshTimeoutsById = new Map, this._shouldEnableConsentManagement = u, this._shouldInitiateAuction = s, this._shouldRunAuction = l, this._timeout = f
        }

        var t, n, r;
        return t = e, (n = [{
            key: "enqueueAuction", value: function (e) {
                var t = this, n = e.auctionType, r = e.isRefresh, i = e.placements, o = e.shouldRenderDirectly,
                    a = this._getCustomTargeting();
                if (this._auctionConfigurationQueue.length || this._isRunningAuction || r) {
                    var c = this._getPriorityByAuctionType(n),
                        u = this._auctionConfigurationQueue.peekBackForPriority(c);
                    if (void 0 === u || u.isRefresh !== r || u.shouldRenderDirectly !== o) this._auctionConfigurationQueue.push(c, {
                        auctionType: n,
                        customTargeting: a,
                        isRefresh: r,
                        placements: i,
                        shouldRenderDirectly: o
                    }); else {
                        var s = i, l = u.placements;
                        s.forEach((function (e, t) {
                            l.has(t) || l.set(t, e)
                        }))
                    }
                    this._initiateAuctionIfQueueIsNotEmptyTimeout && clearTimeout(this._initiateAuctionIfQueueIsNotEmptyTimeout), this._initiateAuctionIfQueueIsNotEmptyTimeout = setTimeout((function e() {
                        if (!t._isRunningAuction && t._auctionConfigurationQueue.length) {
                            var n = t._auctionConfigurationQueue.shift();
                            t._initiateAuction(n)
                        } else if (!t._auctionConfigurationQueue.length) return;
                        t._initiateAuctionIfQueueIsNotEmptyTimeout = setTimeout(e, 500)
                    }), 500)
                } else this._initiateAuction({
                    auctionType: n,
                    customTargeting: a,
                    isRefresh: r,
                    placements: i,
                    shouldRenderDirectly: o
                })
            }
        }, {
            key: "isRunningAuction", value: function () {
                return this._isRunningAuction
            }
        }, {
            key: "setupAutomaticRefresh", value: function (e) {
                var t = this;
                if (!Y.isIn()) {
                    var n = e.id, r = e.shouldEnableDirectRendering, i = e.getRefreshInterval();
                    if (i > 0 && !this._refreshTimeoutsById.has(n)) {
                        var o = 1e3 * i;
                        this._refreshTimeoutsById.set(n, setTimeout((function i() {
                            e.shouldQueueIntervalRefresh() ? t.enqueueAuction({
                                auctionType: "BASIC",
                                isRefresh: !0,
                                placements: new Map([[e.id, e]]),
                                shouldRenderDirectly: r
                            }) : c.log("document not visible currently, skipping refresh for ".concat(e.getName())), t._refreshTimeoutsById.set(n, setTimeout(i, o))
                        }), o))
                    }
                }
            }
        }, {
            key: "shouldAuctionPlacement", value: function (e) {
                var t = e.isRefresh, n = e.placement, r = this._getViewportSize();
                if (n.adjustForViewport(r, t), t) {
                    var i = n.decideIfShouldRefreshWithReason(), o = i.shouldRefresh, a = i.reason;
                    if (!o) return c.log("".concat(a, ", skipping refresh")), !1;
                    c.log("Refreshing ".concat(n.getName()))
                }
                if (0 === n.getSizes().length) return !1;
                var u = document.getElementById(n.id);
                return !n.isInPageUnit() || u && !("explicitlyHidden" in u.dataset) && (this._shouldRunAuction && !("delegatedAcceptableAd" in u.dataset) || "delegatedAcceptableAd" in u.dataset)
            }
        }, {
            key: "stopAutomaticRefresh", value: function (e) {
                var t = e.id, n = e.getName();
                this._refreshTimeoutsById.has(t) ? (c.log("stopping automatic refresh for ".concat(n)), clearTimeout(this._refreshTimeoutsById.get(t)), this._refreshTimeoutsById.delete(t)) : c.log("no automatic refresh is set up for ".concat(n))
            }
        }, {
            key: "_delegateAuctions", value: function (e) {
                var t = this, n = e.customTargeting, r = e.isRefresh, i = wt(e.placements).filter((function (e) {
                    var n = bt(e, 2), i = (n[0], n[1]);
                    return t.shouldAuctionPlacement({isRefresh: r, placement: i})
                })), o = new Map(i);
                return 0 === i.length ? Promise.resolve(o) : (J.postAdLoadMessages(i, r, n), new Promise((function (e) {
                    var t;
                    t = setTimeout((function n() {
                        J.isRunningAuctionsInChildFrames() ? t = setTimeout(n, 500) : (clearTimeout(t), e(o))
                    }), 500)
                })))
            }
        }, {
            key: "_getPriorityByAuctionType", value: function (e) {
                if ("LAZY_LOAD" === e) return 2;
                if ("BASIC" === e) return 1;
                throw new Error("Unknown auction type")
            }
        }, {
            key: "_initiateAuction", value: function (e) {
                var t = this, n = e.auctionType, r = e.isRefresh;
                return this._isRunningAuction = !0, (this._shouldInitiateAuction ? new Promise((function (n) {
                    return B.Ready((function () {
                        Y.isIn() || mt.setupViewChecker({
                            auctionManager: t,
                            placements: e.placements
                        }), (t._shouldRunAuction ? t._runAuction(e) : t._delegateAuctions(e)).then((function (r) {
                            e.isRefresh || r.forEach((function (e) {
                                return t.setupAutomaticRefresh(e)
                            })), n(r)
                        }))
                    }))
                })) : Promise.resolve(new Map)).then((function (e) {
                    t._onAuctionFinished({
                        auctionedPlacements: e,
                        auctionType: n,
                        isRefresh: r
                    }), t._isRunningAuction = !1
                }))
            }
        }, {
            key: "_onAuctionFinished", value: function (e) {
                var t = e.auctionedPlacements, n = e.auctionType, r = e.isRefresh;
                Xe.isEnabled() && Xe.cacheBidData(), "LAZY_LOAD" !== n || r || mt.onLazyLoad({placements: t})
            }
        }, {
            key: "_runAuction", value: function (e) {
                var t = this, n = e.customTargeting, r = e.isRefresh, i = e.placements, o = e.shouldRenderDirectly,
                    a = Y.isIn(), u = new Map(wt(i).filter((function (e) {
                        var n = bt(e, 2), i = (n[0], n[1]);
                        return t.shouldAuctionPlacement({isRefresh: r, placement: i})
                    })));
                return 0 === u.size ? (c.log("skipping auction due to lack of auctionable placements"), Promise.resolve(u)) : (o ? _e : Le).preparePlacements({
                    allPlacements: i,
                    auctionablePlacements: u,
                    customTargeting: n,
                    isRefresh: r,
                    targeting: this._baseTargeting
                }).then((function () {
                    var e = new Map(wt(u).filter((function (e) {
                        var t = bt(e, 2);
                        return t[0], t[1].slot
                    })));
                    if (0 === e.size) return c.log("skipping auction due to lack of auctionable placements with slots"), Promise.resolve(e);
                    var n = new He({
                        baseTargeting: t._baseTargeting,
                        canRequestAmazon: t._canRequestAmazon,
                        canRequestPrebid: t._canRequestPrebid,
                        isRefresh: r,
                        firstPartyData: t._firstPartyData,
                        placements: e,
                        shouldEnableConsentManagement: t._shouldEnableConsentManagement,
                        shouldRenderDirectly: o,
                        timeout: t._timeout
                    });
                    return a && Y.postAuctionStartedMessage(wt(u.values())[0].id), n.run().then((function () {
                        return a && Y.postAuctionFinishedMessage(wt(u.values())[0].id), u
                    }))
                }))
            }
        }]) && _t(t.prototype, n), r && _t(t, r), e
    }();

    function xt(e) {
        return function (e) {
            if (Array.isArray(e)) return Pt(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Pt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pt(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function It(e) {
        B.Ready((function () {
            var t = "bsa_fixed-leaderboard-".concat(e.id, "_hide");
            if ("true" !== T.get(t)) {
                var n = document.createElement("div");
                n.className = "bsa_fixed-leaderboard", n.style.display = "none";
                var r = document.createElement("div");
                r.id = e.id, r.style.display = "none", n.appendChild(r);
                var i = setInterval((function () {
                    r.innerHTML.length && "" === r.style.display ? n.style.display = "" : n.style.display = "none"
                }), 1e3), o = document.createElement("a");
                o.href = "#", o.innerHTML = "x", o.addEventListener("click", (function (e) {
                    e.preventDefault(), clearInterval(i), T.set(t, "true", 864e5), n.style.display = "none", r.dataset.explicitlyHidden = ""
                })), n.appendChild(o), document.getElementsByTagName("body")[0].appendChild(n);
                var a = document.createElement("style");
                a.innerHTML = "\n.bsa_fixed-leaderboard {\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100px;\n\twidth: 100%;\n\tbackground: rgba(0,0,0,.8);\n\tz-index: 9999;\n\tpadding: 5px 0;\n}\n.bsa_fixed-leaderboard > a {\n\tdisplay: block;\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tbackground: rgba(255, 255, 255, .4);\n\tcolor: #000;\n\tborder-radius: 20px;\n\tpadding: 2px 8px 4px;\n\tfont-family: Arial;\n\tfont-size: 14px;\n\ttext-decoration: none;\n}\n".trim().split("\n").map((function (e) {
                    return e.trim()
                })).join(""), document.getElementsByTagName("head")[0].appendChild(a)
            }
        }))
    }

    function Et(e) {
        var t, n, r;
        B.Ready((function i() {
            function o() {
                window.addEventListener("scroll", (function e() {
                    t && t.classList.remove("bsa_sticky_stuck"), window.removeEventListener("scroll", e)
                }))
            }

            var a, c, u;
            t = document.getElementById(e.id), n = t && t.querySelector(".".concat("bsa_sticky_placeholder")), r = document.getElementById("bsa_sticky_styles"), t && (r || ((r = document.createElement("style")).id = "bsa_sticky_styles", r.innerHTML = "\n.".concat("bsa_sticky", " {\n\tposition: relative;\n}\n.").concat("bsa_sticky", " > .").concat("bsa_sticky_placeholder", " {\n\tdisplay: none;\n}\n.").concat("bsa_sticky", ".").concat("bsa_sticky_stuck", " > .").concat("bsa_sticky_placeholder", " {\n\tdisplay: inherit;\n}\n.").concat("bsa_sticky", ".").concat("bsa_sticky_stuck", " > [id$=direct_iframe_container],\n.").concat("bsa_sticky", ".").concat("bsa_sticky_stuck", " > [id$=__container__] {\n\tposition: fixed;\n\tz-index: 9999;\n\ttop: 0;\n\tbackground-color: transparent;\n}\n").trim().split("\n").map((function (e) {
                return e.trim()
            })).join(""), document.getElementsByTagName("head")[0].appendChild(r)), "true" !== t.dataset.managingStick && (t.dataset.managingStick = "true", window.addEventListener("scroll", (function r() {
                t && !c || (window.cancelAnimationFrame(c), t) ? c = window.requestAnimationFrame((function () {
                    var r = t.getBoundingClientRect().top, i = a;
                    if (a = r, t && !t.classList.contains("bsa_sticky_stuck") && i > 0 && a < 0) {
                        var c = t.querySelector("[id$=direct_iframe_container], [id$=__container__]");
                        c && (n.style.width = c.clientWidth, n.style.height = c.clientHeight), t.classList.add("bsa_sticky_stuck"), e.stickyOnScrollUnstickDelayMs > 0 && (u = setTimeout(o, e.stickyOnScrollUnstickDelayMs))
                    } else t && i > 0 && a > 0 && (t.classList.remove("bsa_sticky_stuck"), clearTimeout(u), u = null)
                })) : window.removeEventListener("scroll", r)
            }))), n || ((n = document.createElement("div")).className = "bsa_sticky_placeholder", t.prepend(n)), t.classList.add("bsa_sticky")), setTimeout(i, 250)
        }))
    }

    function Rt(e) {
        var t = [];
        return B.Ready((function () {
            var n = e.cssSelectorOfContentElementForRepetition, r = document.querySelector(n);
            if (r && "true" !== r.dataset.repeatingPlacement) {
                var i = 0;
                r.dataset.repeatingPlacement = "true", xt(r.children).forEach((function (n) {
                    if ("p" === n.tagName.toLowerCase() && 3 == ++i) {
                        var r = document.createElement("div");
                        r.id = (o = "".concat(e.id, "_automatically-repeating-").concat(t.length), t.push(o), o), i = 0, n.insertAdjacentElement("afterend", r)
                    }
                    var o
                }))
            }
            return t
        }))
    }

    var jt = 8691100;
    n(205);

    function Tt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Ot = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "Round", value: function (e, t) {
                return (Math.floor(e * t) / t).toFixed(2)
            }
        }], (n = null) && Tt(t.prototype, n), r && Tt(t, r), e
    }();

    function Ct(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return zt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zt(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function zt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Bt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Lt = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "getSizeString", value: function (e) {
                return Array.isArray(e) ? e.join("x") : String(e)
            }
        }, {
            key: "compare", value: function (e, t) {
                if ("fluid" === e && "fluid" === t) return 0;
                if ("fluid" === e) return -1;
                if ("fluid" === t) return 1;
                Array.isArray(e) && Array.isArray(t) || c.error("Invalid size comparison:", e, t);
                var n = Ct(e, 2), r = n[0], i = n[1], o = Ct(t, 2), a = o[0], u = o[1];
                return r > a || r === a && i > u ? -1 : r === a && i === u ? 0 : 1
            }
        }], (n = null) && Bt(t.prototype, n), r && Bt(t, r), e
    }();

    function Mt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Dt = function () {
        function e(t) {
            var n = t.disablePush, r = t.disableRefresh, i = t.name, o = t.params;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.disablePush = n, this.disableRefresh = r, this.name = i, this.params = o
        }

        var t, n, r;
        return t = e, r = [{
            key: "fromConfig", value: function (e) {
                return new this({
                    disablePush: e.disable_push,
                    disableRefresh: e.disable_refresh,
                    name: e.name,
                    params: e.params
                })
            }
        }, {
            key: "getSizeSpecificBidderNames", value: function () {
                return ["adyoulike", "buysellads", "coinzilla", "cointraffic", "ix", "onemobile", "openx", "sovrn"]
            }
        }, {
            key: "getViewportSpecificBidderNames", value: function () {
                return ["adagio", "mantis"]
            }
        }], (n = [{
            key: "compare", value: function (e) {
                if (this.name !== e.name) return this.name.localeCompare(e.name);
                if (this.shouldLimitActivityBySizes()) {
                    var t = Lt.compare(this.params.size, e.params.size);
                    if (0 !== t) return t
                }
                if (this.shouldLimitActivityByViewports()) {
                    var n = Lt.compare(this.params.viewport, e.params.viewport);
                    if (0 !== n) return n
                }
                return 0
            }
        }, {
            key: "forPrebid", value: function () {
                return {bidder: this.name, params: this.params}
            }
        }, {
            key: "shouldBeActive", value: function (e) {
                var t = this, n = e.currentViewport, r = n.minimumViewportSize, i = n.sizes, o = e.isRefresh;
                return !(this.shouldLimitActivityByRefreshStatus() && (o && this.disableRefresh || !o && this.disablePush) || this.shouldLimitActivityBySizes() && !i.some((function (e) {
                    return Lt.getSizeString(t.params.size) === Lt.getSizeString(e)
                })) || this.shouldLimitActivityByViewports() && Lt.getSizeString(this.params.viewport) !== Lt.getSizeString(r))
            }
        }, {
            key: "shouldLimitActivityByRefreshStatus", value: function () {
                return this.disablePush || this.disableRefresh
            }
        }, {
            key: "shouldLimitActivityBySizes", value: function () {
                var e = this;
                return this.constructor.getSizeSpecificBidderNames().some((function (t) {
                    return e.name == t
                }))
            }
        }, {
            key: "shouldLimitActivityByViewports", value: function () {
                var e = this;
                return this.constructor.getViewportSpecificBidderNames().some((function (t) {
                    return e.name == t
                }))
            }
        }]) && Mt(t.prototype, n), r && Mt(t, r), e
    }();
    n(152), n(208), n(210);

    function Nt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Ut = function () {
        function e(t) {
            var n = t.minimumViewportSize, r = t.refreshInterval, i = t.refreshRules, o = t.shouldDisableRefresh,
                a = t.shouldEnableBackInViewRefresh, c = t.sizes;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.minimumViewportSize = n, this.refreshInterval = r, this.refreshRules = i, this.shouldDisableRefresh = o, this.shouldEnableBackInViewRefresh = a, this.sizes = c
        }

        var t, n, r;
        return t = e, r = [{
            key: "fromConfig", value: function (e) {
                return new this({
                    minimumViewportSize: e.minimum_viewport_size,
                    refreshInterval: e.refresh_interval,
                    refreshRules: e.refresh_rules,
                    shouldDisableRefresh: e.should_disable_refresh,
                    shouldEnableBackInViewRefresh: e.should_enable_back_in_view_refresh,
                    sizes: e.sizes
                })
            }
        }, {
            key: "getPlaceholderViewport", value: function () {
                return new this({
                    minimumViewportSize: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
                    refreshInterval: 0,
                    refreshRules: {countLimit: 0, respectViewability: !1},
                    shouldDisableRefresh: !1,
                    shouldEnableBackInViewRefresh: !1,
                    sizes: []
                })
            }
        }], (n = null) && Nt(t.prototype, n), r && Nt(t, r), e
    }();

    function qt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? qt(Object(n), !0).forEach((function (t) {
                Vt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Vt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Gt(e) {
        return function (e) {
            if (Array.isArray(e)) return $t(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || Wt(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ht(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || Wt(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Wt(e, t) {
        if (e) {
            if ("string" == typeof e) return $t(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $t(e, t) : void 0
        }
    }

    function $t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Qt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var Yt = function () {
        function e(t) {
            var n = t.acceptable, r = t.backfillCreativeCodeForDirectRendering, i = t.cloneSuffix,
                o = t.cssSelectorOfContentElementForRepetition, a = t.enableStickyOnScroll, c = t.id, u = t.name,
                s = t.originalBidders, l = t.shouldEnableDirectRendering, f = t.stickyOnScrollUnstickDelayMs,
                d = t.unitType, p = t.viewports, h = t.zoneKey;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.acceptable = n, this.backfillCreativeCodeForDirectRendering = r, this.cloneSuffix = i, this.cssSelectorOfContentElementForRepetition = o, this.currentViewport = Ut.getPlaceholderViewport(), this.enableStickyOnScroll = a, this.hasHadSlotDefined = !1, this.id = c, this.name = u, this.originalBidders = s || [], this.refreshCount = 0, this.shouldEnableDirectRendering = l, this.stickyOnScrollUnstickDelayMs = f, this.unitType = d, this.viewable = !1, this.viewports = p, this.zoneKey = h
        }

        var t, n, r;
        return t = e, r = [{
            key: "fromConfig", value: function (e, t) {
                if (t) {
                    var n = e.acceptable_config;
                    if (n && Object.getOwnPropertyNames(n).length > 0) {
                        var r = n.backfill_creative_code_for_direct_rendering, i = n.bidders,
                            o = n.css_selector_of_content_element_for_repetition, a = n.enable_sticky_on_scroll,
                            c = n.should_enable_direct_rendering, u = n.sticky_on_scroll_unstick_delay_ms,
                            s = n.unit_type, l = n.viewports, f = n.zone_key;
                        e = Ft(Ft({}, e), {}, {
                            acceptable: !0,
                            backfill_creative_code_for_direct_rendering: r,
                            bidders: i,
                            css_selector_of_content_element_for_repetition: o,
                            enable_sticky_on_scroll: a,
                            should_enable_direct_rendering: c,
                            sticky_on_scroll_unstick_delay_ms: u,
                            unit_type: s,
                            viewports: l,
                            zone_key: f
                        })
                    } else e.acceptable = !1
                }
                var d = e, p = d.acceptable, h = void 0 !== p && p, v = d.backfill_creative_code_for_direct_rendering,
                    y = d.bidders, g = d.css_selector_of_content_element_for_repetition, m = d.enable_sticky_on_scroll,
                    b = d.id, w = d.name, S = d.should_enable_direct_rendering, k = d.sticky_on_scroll_unstick_delay_ms,
                    _ = d.unit_type, A = d.viewports, x = d.zone_key;
                return new this({
                    acceptable: h,
                    backfillCreativeCodeForDirectRendering: v,
                    cssSelectorOfContentElementForRepetition: g,
                    enableStickyOnScroll: m,
                    id: b,
                    name: w,
                    originalBidders: (y || []).map((function (e) {
                        return Dt.fromConfig(e)
                    })),
                    shouldEnableDirectRendering: S,
                    stickyOnScrollUnstickDelayMs: k,
                    unitType: _,
                    viewports: (A || []).map((function (e) {
                        return Ut.fromConfig(e)
                    })),
                    zoneKey: x
                })
            }
        }, {
            key: "filterSizesForAmazon", value: function (e) {
                var t = S.getAllSizes();
                return e.filter((function (e) {
                    return -1 !== t.findIndex((function (t) {
                        var n = Ht(t, 2), r = n[0], i = n[1];
                        if (!Array.isArray(e)) return !1;
                        var o = Ht(e, 2), a = o[0], c = o[1];
                        return a === r && c === i
                    }))
                }))
            }
        }, {
            key: "filterSizesForNonGam", value: function (e) {
                return e.filter((function (e) {
                    return "fluid" !== e
                }))
            }
        }, {
            key: "filterSizesForPrebid", value: function (e) {
                return this.filterSizesForNonGam(e)
            }
        }], (n = [{
            key: "adjustForViewport", value: function (e, t) {
                var n, r = this, i = Ht(e, 2), o = i[0], a = i[1];
                return this.viewports.forEach((function (e) {
                    var t = Ht(e.minimumViewportSize, 2), r = t[0], i = t[1];
                    e.sizes, o >= r && a >= i && (void 0 === n || n.minimumViewportSize[0] <= r && n.minimumViewportSize[1] <= i) && (n = e)
                })), this.previousViewport = this.currentViewport, this.currentViewport = n || Ut.getPlaceholderViewport(), this.currentBidders = this.originalBidders.filter((function (e) {
                    return e.shouldBeActive({currentViewport: r.currentViewport, isRefresh: t})
                })).sort((function (e, t) {
                    return e.compare(t)
                })), this
            }
        }, {
            key: "forAmazon", value: function () {
                return {
                    slotID: this.slot.getSlotElementId(),
                    sizes: this.getSizesForAmazon(),
                    slotName: this.getSlotName()
                }
            }
        }, {
            key: "forPrebid", value: function () {
                return {
                    code: this.slot.getSlotElementId(),
                    mediaTypes: {banner: {sizes: this.getSizesForPrebid()}},
                    bids: this.currentBidders.map((function (e) {
                        return e.forPrebid()
                    }))
                }
            }
        }, {
            key: "getName", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.shouldIncludeCloneSuffix, n = void 0 === t || t;
                return "".concat(this.name).concat(this.acceptable ? "_acceptable" : "").concat(n && void 0 !== this.cloneSuffix ? " (Clone ".concat(this.cloneSuffix, ")") : "")
            }
        }, {
            key: "getRefreshInterval", value: function () {
                return this.currentViewport.refreshInterval
            }
        }, {
            key: "getRefreshRules", value: function () {
                return this.currentViewport.refreshRules
            }
        }, {
            key: "getSizeMapping", value: function () {
                return this.viewports.reduce((function (e, t) {
                    return [].concat(Gt(e), [[t.minimumViewportSize, t.sizes]])
                }), [])
            }
        }, {
            key: "getSizes", value: function () {
                return this.currentViewport.sizes
            }
        }, {
            key: "getSizesForAmazon", value: function () {
                return this.constructor.filterSizesForAmazon(this.currentViewport.sizes)
            }
        }, {
            key: "getSizesForNonGam", value: function () {
                return this.constructor.filterSizesForNonGam(this.currentViewport.sizes)
            }
        }, {
            key: "getSizesForPrebid", value: function () {
                return this.constructor.filterSizesForPrebid(this.currentViewport.sizes)
            }
        }, {
            key: "getSlotName", value: function () {
                return "/".concat(i.dfpNetworkId, "/").concat(this.name).concat(this.acceptable ? "_acceptable" : "")
            }
        }, {
            key: "setHasHadSlotDefined", value: function () {
                this.hasHadSlotDefined = !0
            }
        }, {
            key: "setSlot", value: function (e) {
                this.hasHadSlotDefined = !0, this.slot = e
            }
        }, {
            key: "decideIfShouldRefreshWithReason", value: function () {
                if (!this.hasHadSlotDefined) return {
                    shouldRefresh: !1,
                    reason: "".concat(this.getName(), " has not been pushed since the page has loaded")
                };
                var e = this.getRefreshRules(), t = e.countLimit, n = e.respectViewability;
                return this.shouldDisableRefresh() ? {
                    shouldRefresh: !1,
                    reason: "".concat(this.getName(), " has had its refresh disabled")
                } : n && !this.viewable ? {
                    shouldRefresh: !1,
                    reason: "".concat(this.getName(), " is not viewable")
                } : t > 0 && this.refreshCount >= t ? {
                    shouldRefresh: !1,
                    reason: "".concat(this.getName(), " has reached its refresh limit (").concat(t, ")")
                } : {shouldRefresh: !0}
            }
        }, {
            key: "isAnchorUnit", value: function () {
                return this.isBottomAnchorUnit() || this.isTopAnchorUnit()
            }
        }, {
            key: "isBottomAnchorUnit", value: function () {
                return "bottom_anchor" === this.unitType
            }
        }, {
            key: "isInPageUnit", value: function () {
                return "in_page" === this.unitType
            }
        }, {
            key: "isInterstitialUnit", value: function () {
                return "interstitial" === this.unitType
            }
        }, {
            key: "isTopAnchorUnit", value: function () {
                return "top_anchor" === this.unitType
            }
        }, {
            key: "isStickyOnScroll", value: function () {
                return this.enableStickyOnScroll
            }
        }, {
            key: "shouldDisableRefresh", value: function () {
                return this.currentViewport.shouldDisableRefresh
            }
        }, {
            key: "shouldRefreshWhenBackInView", value: function () {
                return this.currentViewport.shouldEnableBackInViewRefresh
            }
        }, {
            key: "shouldRepeatWithinContent", value: function () {
                return !!this.cssSelectorOfContentElementForRepetition
            }
        }, {
            key: "shouldQueueBackInViewRefresh", value: function () {
                return !this.shouldDisableRefresh() && this.hasHadSlotDefined && this.shouldRefreshWhenBackInView()
            }
        }, {
            key: "shouldQueueIntervalRefresh", value: function () {
                return !this.shouldDisableRefresh() && this.hasHadSlotDefined && (!this.getRefreshRules().respectViewability || B.Visible())
            }
        }, {
            key: "clone", value: function (e, t) {
                var n = Object.assign({}, this, {cloneSuffix: t, id: e});
                return new this.constructor(n)
            }
        }]) && Qt(t.prototype, n), r && Qt(t, r), e
    }();

    function Jt(e) {
        return (Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Xt(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || Kt(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Zt(e) {
        return function (e) {
            if (Array.isArray(e)) return en(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || Kt(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Kt(e, t) {
        if (e) {
            if ("string" == typeof e) return en(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? en(e, t) : void 0
        }
    }

    function en(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function tn(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function nn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var rn = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            tn(this, e), this.targetingArray = [], this._merge(t)
        }

        var t, n, r;
        return t = e, (n = [{
            key: "clone", value: function () {
                return new e(this.targetingArray.map((function (e) {
                    var t = e.key, n = e.value;
                    return {key: t, value: Array.isArray(n) ? Zt(n) : n}
                })))
            }
        }, {
            key: "get", value: function (e) {
                var t = this.targetingArray.find((function (t) {
                    return t.key === e
                }));
                if (void 0 !== t) return t.value
            }
        }, {
            key: "getTargetingArray", value: function () {
                return this.targetingArray
            }
        }, {
            key: "push", value: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                this._merge(t)
            }
        }, {
            key: "_merge", value: function (e) {
                var t = this;
                this._normalizeTargetingArray(e).forEach((function (e) {
                    return t._setTargeting(e)
                }))
            }
        }, {
            key: "_normalizeTargetingArray", value: function (e) {
                var t = this;
                return e.map((function (e) {
                    return t._normalizeTargetFormat(e)
                }))
            }
        }, {
            key: "_normalizeTargetFormat", value: function (e) {
                if (Array.isArray(e)) {
                    var t = Xt(e, 2);
                    return {key: t[0], value: t[1]}
                }
                if ("object" === Jt(e) && e.hasOwnProperty("key") && e.hasOwnProperty("value")) return {
                    key: e.key,
                    value: e.value
                };
                console.warn("Optimize: Invalid target format (acceptable: [key, value] / { key, value }); skipping", e)
            }
        }, {
            key: "_setTargeting", value: function (e) {
                var t = e.key, n = e.value, r = t.toString(), i = this.targetingArray.findIndex((function (e) {
                    var t = e.key;
                    return r === t
                })), o = Array.isArray(n) ? n.map((function (e) {
                    return e.toString()
                })) : n.toString();
                i >= 0 ? this.targetingArray[i].value = o : this.targetingArray.push({key: r, value: o})
            }
        }]) && nn(t.prototype, n), r && nn(t, r), e
    }();

    function on(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var an = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }

        var t, n, r;
        return t = e, r = [{
            key: "detect", value: function (e, t) {
                var n = !1, r = 2, i = !1, o = !1;
                if ("function" == typeof t) {
                    e += "?ch=*&rn=*";
                    var a = 11 * Math.random(), c = new Image;
                    c.onload = s, c.onerror = function () {
                        i = !0, s()
                    }, c.src = e.replace(/\*/, 1).replace(/\*/, a);
                    var u = new Image;
                    u.onload = s, u.onerror = function () {
                        o = !0, s()
                    }, u.src = e.replace(/\*/, 2).replace(/\*/, a), function e(t, i) {
                        0 == r || i > 1e3 ? t(0 == r && n) : setTimeout((function () {
                            return e(t, 2 * i)
                        }), 2 * i)
                    }(t, 250)
                }

                function s() {
                    --r || (n = !i && o)
                }
            }
        }], (n = null) && on(t.prototype, n), r && on(t, r), e
    }();

    function cn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function un(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? cn(Object(n), !0).forEach((function (t) {
                sn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function sn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ln(e) {
        return (ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function fn(e) {
        return function (e) {
            if (Array.isArray(e)) return hn(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || pn(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function dn(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [], a = !0, c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || pn(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function pn(e, t) {
        if (e) {
            if ("string" == typeof e) return hn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hn(e, t) : void 0
        }
    }

    function hn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function vn(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function yn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var gn = window.location.search.indexOf("bsadebug") > 0 || !1, mn = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.queue,
                r = void 0 === n ? [] : n;
            vn(this, e), this.customTargeting = new rn, this.disableInitialLoad = !1, this.isInitialized = !1, this.placements = new Map, this.queue = r, this.refreshTimeoutsById = new Map
        }

        var t, n, i;
        return t = e, (n = [{
            key: "setPublisher", value: function (e) {
                this.publisher = e
            }
        }, {
            key: "setAuctionManager", value: function (e) {
                this.auctionManager = e
            }
        }, {
            key: "setAudience", value: function (e) {
                this.audience = e
            }
        }, {
            key: "setDisableInitialLoad", value: function (e) {
                this.disableInitialLoad = e
            }
        }, {
            key: "setEnvironment", value: function (e) {
                this.environment = e
            }
        }, {
            key: "setLastUpdated", value: function (e) {
                this.lastUpdated = new Date(e)
            }
        }, {
            key: "setLazyLoadPercentage", value: function (e) {
                this.lazyLoadPercentage = e
            }
        }, {
            key: "setPlacements", value: function (e) {
                var t, n = function (e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = pn(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0, i = function () {
                            };
                            return {
                                s: i, n: function () {
                                    return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                                }, e: function (e) {
                                    throw e
                                }, f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, a = !0, c = !1;
                    return {
                        s: function () {
                            n = n.call(e)
                        }, n: function () {
                            var e = n.next();
                            return a = e.done, e
                        }, e: function (e) {
                            c = !0, o = e
                        }, f: function () {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                    }
                }(new Map(Object.entries(e).filter((function (e) {
                    var t = dn(e, 2), n = t[0];
                    return t[1], !Y.isIn() || n === new URLSearchParams(window.location.search).get("adunit")
                }))));
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var r = dn(t.value, 2), i = r[0], o = r[1], a = Yt.fromConfig(o, this.shouldLoadAcceptableAds);
                        this.placements.set(i, a)
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
            }
        }, {
            key: "setShouldEnableConsentManagement", value: function (e) {
                this.shouldEnableConsentManagement = e
            }
        }, {
            key: "setShouldEnableLazyLoad", value: function (e) {
                this.shouldEnableLazyLoad = e
            }
        }, {
            key: "setParentViewportSize", value: function (e) {
                Y.isIn() && (this.parentViewportSize = e)
            }
        }, {
            key: "getCustomTargeting", value: function () {
                return this.customTargeting.clone()
            }
        }, {
            key: "getPlacements", value: function () {
                return this.placements
            }
        }, {
            key: "getViewportSize", value: function () {
                return Y.isIn() ? this.parentViewportSize : D.GetSize()
            }
        }, {
            key: "init", value: function (e) {
                var t = this, n = e.acceptable_origin, i = e.ad_lightning_client_id, o = e.audience,
                    a = e.bsa_ad_server_origin, u = e.bsa_banner_ids_by_price_bucket,
                    l = e.disable_gpt_collapse_empty_divs, f = e.disable_initial_load,
                    d = e.disable_outside_adblock_recovery, p = e.enable_adsense, h = e.enable_amazon_bidder,
                    v = e.enable_bsa_stats_recording, y = e.environment, g = e.extra_css, b = e.first_party_data,
                    w = e.fixed_leaderboard_ad_unit_id, k = e.google_funding_choices_key, _ = e.in_view_percentage,
                    A = e.in_view_time_ms, x = e.last_updated, I = e.lazy_load_percentage, E = e.placements,
                    R = e.publisher, j = e.should_disable_prebid, T = e.should_enable_lazy_load,
                    O = e.static_publisher_targeting, C = e.supply_chain_config, z = e.timeout, L = e.usesABP,
                    M = Y.isIn(), D = new URLSearchParams(window.location.search);
                return (!M && k ? function (e) {
                    return new Promise((function (t, n) {
                        window.googlefc = window.googlefc || {}, window.googlefc.callbackQueue = window.googlefc.callbackQueue || [], setTimeout((function () {
                            return n("Consent timeout exceeded")
                        }), 1e4);
                        var r = document.createElement("script");
                        r.innerHTML = '\n(function(){/*\n\n    Copyright The Closure Library Authors.\n    SPDX-License-Identifier: Apache-2.0\n    */\n    \'use strict\';var g=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},l=this||self,m=/^[w+/_-]+[=]{0,2}$/,p=null,q=function(){},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";\n    if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var v=function(a,b){Object.defineProperty(l,a,{configurable:!1,get:function(){return b},set:q})};var y=function(a,b){this.b=a===w&&b||"";this.a=x},x={},w={};var aa=function(a,b){a.src=b instanceof y&&b.constructor===y&&b.a===x?b.b:"type_error:TrustedResourceUrl";if(null===p)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&m.test(b)){p=b;break b}p=""}b=p;b&&a.setAttribute("nonce",b)};var z=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^+new Date).toString(36)};var A=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},B=function(a){this.a=a||l.document||document};B.prototype.appendChild=function(a,b){a.appendChild(b)};var C=function(a,b,c,d,e,f){try{var k=a.a,h=A(a.a,"SCRIPT");h.async=!0;aa(h,b);k.head.appendChild(h);h.addEventListener("load",function(){e();d&&k.head.removeChild(h)});h.addEventListener("error",function(){0<c?C(a,b,c-1,d,e,f):(d&&k.head.removeChild(h),f())})}catch(n){f()}};var ba=l.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),ca=l.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),da=l.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),ea=function(a,b,c){this.b=a;this.f=new B(this.b);this.a=null;this.c=[];this.g=!1;this.i=b;this.h=c},F=function(a){if(a.b.body&&!a.g){var b=\n    function(){D(a);l.setTimeout(function(){return E(a,3)},50)};C(a.f,a.i,2,!0,function(){l[a.h]||b()},b);a.g=!0}},D=function(a){for(var b=G(1,5),c=0;c<b;c++){var d=H(a);a.b.body.appendChild(d);a.c.push(d)}b=H(a);b.style.bottom="0";b.style.left="0";b.style.position="fixed";b.style.width=G(100,110).toString()+"%";b.style.zIndex=G(2147483544,2147483644).toString();b.style["background-color"]=I(249,259,242,252,219,229);b.style["box-shadow"]="0 0 12px #888";b.style.color=I(0,10,0,10,0,10);b.style.display=\n    "flex";b.style["justify-content"]="center";b.style["font-family"]="Roboto, Arial";c=H(a);c.style.width=G(80,85).toString()+"%";c.style.maxWidth=G(750,775).toString()+"px";c.style.margin="24px";c.style.display="flex";c.style["align-items"]="flex-start";c.style["justify-content"]="center";d=A(a.f.a,"IMG");d.className=z();d.src=ba;d.style.height="24px";d.style.width="24px";d.style["padding-right"]="16px";var e=H(a),f=H(a);f.style["font-weight"]="bold";f.textContent=ca;var k=H(a);k.textContent=da;J(a,\n    e,f);J(a,e,k);J(a,c,d);J(a,c,e);J(a,b,c);a.a=b;a.b.body.appendChild(a.a);b=G(1,5);for(c=0;c<b;c++)d=H(a),a.b.body.appendChild(d),a.c.push(d)},J=function(a,b,c){for(var d=G(1,5),e=0;e<d;e++){var f=H(a);b.appendChild(f)}b.appendChild(c);c=G(1,5);for(d=0;d<c;d++)e=H(a),b.appendChild(e)},G=function(a,b){return Math.floor(a+Math.random()*(b-a))},I=function(a,b,c,d,e,f){return"rgb("+G(Math.max(a,0),Math.min(b,255)).toString()+","+G(Math.max(c,0),Math.min(d,255)).toString()+","+G(Math.max(e,0),Math.min(f,\n    255)).toString()+")"},H=function(a){a=A(a.f.a,"DIV");a.className=z();return a},E=function(a,b){0>=b||null!=a.a&&0!=a.a.offsetHeight&&0!=a.a.offsetWidth||(fa(a),D(a),l.setTimeout(function(){return E(a,b-1)},50))},fa=function(a){var b=a.c;var c="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];b=c?c.call(b):{next:g(b)};for(c=b.next();!c.done;c=b.next())(c=c.value)&&c.parentNode&&c.parentNode.removeChild(c);a.c=[];(b=a.a)&&b.parentNode&&b.parentNode.removeChild(b);a.a=null};var ia=function(a,b,c,d,e){var f=ha(c),k=function(n){n.appendChild(f);l.setTimeout(function(){f?(0!==f.offsetHeight&&0!==f.offsetWidth?b():a(),f.parentNode&&f.parentNode.removeChild(f)):a()},d)},h=function(n){document.body?k(document.body):0<n?l.setTimeout(function(){h(n-1)},e):b()};h(3)},ha=function(a){var b=document.createElement("div");b.className=a;b.style.width="1px";b.style.height="1px";b.style.position="absolute";b.style.left="-10000px";b.style.top="-10000px";b.style.zIndex="-10000";return b};var K={},L=null;var M=function(){},N="function"==typeof Uint8Array,O=function(a,b){a.b=null;b||(b=[]);a.j=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var c=a.a[b];if(!(null===c||"object"!=typeof c||Array.isArray(c)||N&&c instanceof Uint8Array)){a.g=b-a.f;a.c=c;break a}}a.g=Number.MAX_VALUE}a.i={}},P=[],Q=function(a,b){if(b<a.g){b+=a.f;var c=a.a[b];return c===P?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===P?a.c[b]=[]:c},R=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=Q(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};\n    M.prototype.h=N?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!L){L={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));K[e]=f;for(var k=0;k<f.length;k++){var h=f[k];void 0===L[h]&&(L[h]=k)}}}b=K[b];c=[];for(d=0;d<this.length;d+=3){var n=this[d],t=(e=d+1<this.length)?this[d+1]:0;h=(f=d+2<this.length)?this[d+2]:0;k=n>>2;n=(n&\n    3)<<4|t>>4;t=(t&15)<<2|h>>6;h&=63;f||(h=64,e||(t=64));c.push(b[k],b[n],b[t]||"",b[h]||"")}return c.join("")};try{return JSON.stringify(this.a&&this.a,S)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a&&this.a,S)};var S=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};M.prototype.toString=function(){return this.a.toString()};var T=function(a){O(this,a)};u(T,M);var U=function(a){O(this,a)};u(U,M);var ja=function(a,b){this.c=new B(a);var c=R(b,T,5);c=new y(w,Q(c,4)||"");this.b=new ea(a,c,Q(b,4));this.a=b},ka=function(a,b,c,d){b=new T(b?JSON.parse(b):null);b=new y(w,Q(b,4)||"");C(a.c,b,3,!1,c,function(){ia(function(){F(a.b);d(!1)},function(){d(!0)},Q(a.a,2),Q(a.a,3),Q(a.a,1))})};var la=function(a,b){V(a,"internal_api_load_with_sb",function(c,d,e){ka(b,c,d,e)});V(a,"internal_api_sb",function(){F(b.b)})},V=function(a,b,c){a=l.btoa(a+b);v(a,c)},W=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];e=l.btoa(a+b);e=l[e];if("function"==r(e))e.apply(null,d);else throw Error("API not exported.");};var X=function(a){O(this,a)};u(X,M);var Y=function(a){this.h=window;this.a=a;this.b=Q(this.a,1);this.f=R(this.a,T,2);this.g=R(this.a,U,3);this.c=!1};Y.prototype.start=function(){ma();var a=new ja(this.h.document,this.g);la(this.b,a);na(this)};\n    var ma=function(){var a=function(){if(!l.frames.googlefcPresent)if(document.body){var b=document.createElement("iframe");b.style.display="none";b.style.width="0px";b.style.height="0px";b.style.border="none";b.style.zIndex="-1000";b.style.left="-1000px";b.style.top="-1000px";b.name="googlefcPresent";document.body.appendChild(b)}else l.setTimeout(a,5)};a()},na=function(a){var b=Date.now();W(a.b,"internal_api_load_with_sb",a.f.h(),function(){var c;var d=a.b,e=l[l.btoa(d+"loader_js")];if(e){e=l.atob(e);\n    e=parseInt(e,10);d=l.btoa(d+"loader_js").split(".");var f=l;d[0]in f||"undefined"==typeof f.execScript||f.execScript("var "+d[0]);for(;d.length&&(c=d.shift());)d.length?f[c]&&f[c]!==Object.prototype[c]?f=f[c]:f=f[c]={}:f[c]=null;c=Math.abs(b-e);c=1728E5>c?0:c}else c=-1;0!=c&&(W(a.b,"internal_api_sb"),Z(a,Q(a.a,6)))},function(c){Z(a,c?Q(a.a,4):Q(a.a,5))})},Z=function(a,b){a.c||(a.c=!0,a=new l.XMLHttpRequest,a.open("GET",b,!0),a.send())};(function(a,b){l[a]=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];l[a]=q;b.apply(null,d)}})("__d3lUW8vwsKlB__",function(a){"function"==typeof window.atob&&(a=window.atob(a),a=new X(a?JSON.parse(a):null),(new Y(a)).start())});}).call(this);\n    \n    window.__d3lUW8vwsKlB__("'.concat(e, '");\n'), document.getElementsByTagName("head")[0].appendChild(r), window.googlefc.callbackQueue.push({
                            CONSENT_DATA_READY: function () {
                                window.__tcfapi("getTCData", 2, (function (e, n) {
                                    var r = e.gdprApplies;
                                    return t(!n || r)
                                }))
                            }
                        })
                    }))
                }(k) : M && "true" === D.get("consent_management") ? Promise.resolve(!0) : Promise.resolve(!1)).catch((function (e) {
                    return c.log("".concat(e, " -- attempting to run auction with consent management anyways.")), !0
                })).then((function (e) {
                    var k = !L && h;
                    t.setShouldEnableConsentManagement(e), gn ? (t.debug = Xe, t.shouldLoadAcceptableAds = L || D.has("force_acceptable"), k = !t.shouldLoadAcceptableAds && h, Xe.init({
                        firstPartyData: b,
                        getPlacements: function () {
                            return t.getPlacements()
                        },
                        shouldDebugAmazon: k,
                        shouldDebugPrebid: !j,
                        shouldEnableConsentManagement: e
                    })) : t.shouldLoadAcceptableAds = L;
                    var N = !d || t.shouldLoadAcceptableAds, U = !t.shouldLoadAcceptableAds || M,
                        q = new URLSearchParams(window.location.search);
                    if (t.setAudience(o), t.setDisableInitialLoad(f || M), t.setEnvironment(y), t.setLastUpdated(x), t.setLazyLoadPercentage(I), t.setPlacements(E), t.setPublisher(R), t.setShouldEnableLazyLoad(T), t.setAuctionManager(new At({
                        baseTargeting: new rn([["optimize_acceptable", t.shouldLoadAcceptableAds.toString()], ["optimize_adl_debug", q.has("force_adl_block").toString()], ["optimize_debug", (void 0 !== t.debug).toString()]].concat(fn(Object.entries(O)))),
                        canRequestAmazon: k,
                        canRequestPrebid: !j,
                        firstPartyData: b,
                        getCustomTargeting: function () {
                            return t.getCustomTargeting()
                        },
                        getViewportSize: function () {
                            return t.getViewportSize()
                        },
                        shouldEnableConsentManagement: t.shouldEnableConsentManagement,
                        shouldInitiateAuction: N,
                        shouldRunAuction: U,
                        timeout: z
                    })), m.setConfig(C), c.log("Supply Chain:", m.getConfig()), t.shouldLoadAcceptableAds && (X.setAcceptableOrigin(n), M ? Y.init(t) : J.init(t)), p && t.enableAdsenseCode(), !M && (mt.init({
                        inViewPercentage: _,
                        inViewTimeMs: A
                    }), mt.setupViewChecker({
                        auctionManager: t.auctionManager,
                        placements: t.placements
                    }), g && B.addExtraCss(g), N && U)) {
                        if (w) {
                            var F = t.placements.get(w);
                            void 0 !== F && r.enableFixedLeaderboard(F)
                        }
                        P.Shuffle(fn(t.placements.keys())).forEach((function (e) {
                            var n = t.placements.get(e);
                            n.isStickyOnScroll() && r.enableStickyOnScroll(n), n.shouldRepeatWithinContent() && r.enableRepeatingPlacementWithinContent(n).then((function (n) {
                                n.forEach((function (n) {
                                    t.clone(e, n)
                                }))
                            }))
                        }))
                    }
                    return i && window.addEventListener("message", (function (e) {
                        "object" === ln(e.data) && "ADL_BLOCKED" === e.data.message && "string" == typeof e.data.adUnit && setTimeout((function () {
                            return t.refresh(e.data.adUnit)
                        }), 2e3)
                    })), v && re.setup({
                        bsaAdServerOrigin: a,
                        bsaBannerIdsByPriceBucket: u
                    }), Promise.all([_e.setup({
                        adLightningClientId: i,
                        enableBsaStatsRecording: v
                    }), Le.setup({
                        disableGptCollapseEmptyDivs: l,
                        enableBsaStatsRecording: v,
                        getPlacement: function (e) {
                            return t.placements.get(e)
                        }
                    }), !j && s.Prebid((function (e) {
                        return e.enableAnalytics(se.getAnalyticsConfig())
                    })), k && S.initTag()]).then((function () {
                        t.queue.forEach((function (e) {
                            return e()
                        })), t.queue = {
                            push: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return t.forEach((function (e) {
                                    return e()
                                }))
                            }
                        }, t.isInitialized = !0
                    }))
                }))
            }
        }, {
            key: "setupAutomaticRefreshInterval", value: function (e) {
                var t = this.placements.get(e);
                t ? this.auctionManager.setupAutomaticRefresh(t) : c.log("unknown placement ID: ".concat(e))
            }
        }, {
            key: "stopAutomaticRefresh", value: function (e) {
                var t = this;
                if (e) if (Array.isArray(e)) e.forEach((function (e) {
                    return t.stopAutomaticRefresh(e)
                })); else {
                    var n = e, r = this.placements.get(n);
                    r ? this.auctionManager.stopAutomaticRefresh(r) : c.log("unknown placement ID: ".concat(n))
                } else this.placements.forEach((function (e, n) {
                    return t.stopAutomaticRefresh(n)
                }))
            }
        }, {
            key: "refresh", value: function (e) {
                var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.refresh,
                    i = void 0 === r || r;
                Array.isArray(e) || (e = [e]);
                var o = new Map;
                e.forEach((function (e) {
                    var n = e.match(/bsa-zone_([0-9]+-[0-9]+)_123456_([0-9]+)/);
                    if (n) {
                        var r = dn(n, 3), i = (r[1], r[2]), a = e.slice(0, -(i.length + 1));
                        t.placements.has(e) || t.clone(a, e)
                    }
                    var u = t.placements.get(e);
                    u ? o.set(e, u) : c.log("unknown placement ID: ".concat(e))
                })), o.size > 0 && (Y.isIn() || !this.shouldEnableLazyLoad || i ? P.GroupBy(fn(o.values()), "shouldEnableDirectRendering").forEach((function (e, n) {
                    var r = new Map(e.map((function (e) {
                        return [e.id, e]
                    })));
                    r.size > 0 && t.auctionManager.enqueueAuction({
                        auctionType: "BASIC",
                        isRefresh: i,
                        placements: r,
                        shouldRenderDirectly: n
                    })
                })) : mt.setupLazyLoader({
                    auctionManager: this.auctionManager,
                    lazyLoadPercentage: this.lazyLoadPercentage,
                    placements: o
                }))
            }
        }, {
            key: "refreshAll", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.refresh,
                    n = void 0 === t || t;
                this.refresh(fn(this.placements.keys()), {refresh: n})
            }
        }, {
            key: "push", value: function (e) {
                this.refresh(e, {refresh: !1})
            }
        }, {
            key: "pushAll", value: function () {
                this.refreshAll({refresh: !1})
            }
        }, {
            key: "clone", value: function (e, t) {
                if (this.placements.has(e)) {
                    var n = t.split("_").pop(), r = this.placements.get(e).clone(t, n);
                    return this.placements.set(t, r), r
                }
                c.log("unknown placement ID: ".concat(e))
            }
        }, {
            key: "run", value: function () {
                this.disableInitialLoad || this.pushAll()
            }
        }, {
            key: "exec", value: function (e) {
                var t, n = this, r = new URLSearchParams(window.location.search),
                    i = (t = r.has("use_optimize_staging_config") && e.hasOwnProperty("staging_config") ? e.staging_config : e).approved_domains,
                    o = window.location.hostname;
                if (i.some((function (e) {
                    var t = e.replaceAll(".", "\\.");
                    return RegExp("^.*".concat(t, "$")).test(o)
                }))) {
                    c.log("".concat(o, " is approved."));
                    var a, u = function (e) {
                        return n.init(un(un({}, t), {}, {usesABP: e})).then((function () {
                            return n.run()
                        }))
                    };
                    Y.isIn() ? u(!0) : (a = u, an.detect("https://cdn4.buysellads.net/acceptable.gif", a))
                } else c.log("".concat(o, " is NOT approved."))
            }
        }, {
            key: "enableAdsenseCode", value: function () {
                var e;
                (e = document.createElement("script")).async = !0, e.dataset.adClient = "ca-pub-9454946816537646", e.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", document.getElementsByTagName("head")[0].appendChild(e), s.GPT((function (e) {
                    e.pubads().set("page_url", "".concat(window.location.origin).concat(window.location.pathname))
                }))
            }
        }]) && yn(t.prototype, n), i && yn(t, i), e
    }();
    n.d(t, "module", (function () {
        return mn
    })), Ae.forEach((function (e) {
        return window[e] = window[e] || []
    })), window.optimize = new mn(window.optimize), window.bsas2s = window.optimize
}]);
;
(function () {
    window.optimize.exec({
        "acceptable_origin": "https://acceptable.buysellads.net",
        "ad_lightning_client_id": "",
        "approved_domains": ["academo.org", "cdn4.buysellads.net", "acceptable.buysellads.net"],
        "audience": "lifestyle",
        "bsa_ad_server_origin": "https://srv.buysellads.com",
        "bsa_banner_ids_by_price_bucket": {},
        "disable_gpt_collapse_empty_divs": false,
        "disable_initial_load": false,
        "disable_outside_adblock_recovery": false,
        "enable_adsense": false,
        "enable_amazon_bidder": false,
        "enable_bsa_stats_recording": false,
        "environment": "prod",
        "extra_css": "body [class^=\"bsa_fixed-leaderboard\"]{\n    background:transparent !important;\n    align-items:flex-end !important;\n}\nbody [class^=\"bsa_fixed-leaderboard\"] \u003e a {\n    background:#000 !important;\n    color:#FFF !important;\n}",
        "first_party_data": null,
        "fixed_leaderboard_ad_unit_id": "bsa-zone_1609779758686-6_123456",
        "google_funding_choices_key": null,
        "in_view_percentage": 50,
        "in_view_time_ms": 1000,
        "lazy_load_percentage": null,
        "last_updated": "2021-08-23T07:07:01.106+00:00",
        "placements": {
            "bsa-zone_1589226005384-4_123456": {
                "id": "bsa-zone_1589226005384-4_123456",
                "name": "Academo_S2S_Leaderboard_ROS_Pos1",
                "zone_key": "CE7IV2QE",
                "backfill_creative_code_for_direct_rendering": "",
                "css_selector_of_content_element_for_repetition": "",
                "enable_sticky_on_scroll": false,
                "should_enable_direct_rendering": false,
                "sticky_on_scroll_unstick_delay_ms": null,
                "unit_type": "in_page",
                "viewports": [{
                    "minimum_viewport_size": [0, 0],
                    "refresh_interval": 30,
                    "refresh_rules": {"countLimit": 0, "respectViewability": true},
                    "should_disable_refresh": false,
                    "should_enable_back_in_view_refresh": false,
                    "sizes": [[320, 50], [320, 100], [300, 250]]
                }, {
                    "minimum_viewport_size": [640, 0],
                    "refresh_interval": 30,
                    "refresh_rules": {"countLimit": 0, "respectViewability": true},
                    "should_disable_refresh": false,
                    "should_enable_back_in_view_refresh": false,
                    "sizes": [[728, 90]]
                }],
                "bidders": [{
                    "name": "appnexus",
                    "params": {"placementId": 19214513, "member": "8394"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "nobid",
                    "params": {"siteId": 22020184064},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "criteo",
                    "params": {"networkId": 10359},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [728, 90], "unit": "541001000"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [300, 250], "unit": "541001001"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [320, 100], "unit": "541032232"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [320, 50], "unit": "541023049"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "sharethrough",
                    "params": {"pkey": "gqvu5C5ScJCunPonjDpxUT3T"},
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "adagio",
                    "params": {
                        "useAdUnitCodeAsAdUnitElementId": true,
                        "organizationId": "1116",
                        "site": "Academo",
                        "placement": "Academo_S2S_Leaderboard_ROS_Pos1",
                        "environment": "mobile",
                        "viewport": [0, 0]
                    },
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "adagio",
                    "params": {
                        "useAdUnitCodeAsAdUnitElementId": true,
                        "organizationId": "1116",
                        "site": "Academo",
                        "placement": "Academo_S2S_Leaderboard_ROS_Pos1",
                        "environment": "desktop",
                        "viewport": [640, 0]
                    },
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "onetag",
                    "params": {"pubId": "73d67396a1b6e18"},
                    "disable_push": false,
                    "disable_refresh": true
                }],
                "is_fixed_ad": false,
                "acceptable_config": {
                    "id": "bsa-zone_1611845014893-9_123456",
                    "name": "Academo_S2S_Leaderboard_ROS_Pos1_acceptable",
                    "zone_key": "CEBILKJM",
                    "backfill_creative_code_for_direct_rendering": "",
                    "css_selector_of_content_element_for_repetition": "",
                    "enable_sticky_on_scroll": false,
                    "should_enable_direct_rendering": false,
                    "sticky_on_scroll_unstick_delay_ms": null,
                    "unit_type": "in_page",
                    "viewports": [{
                        "minimum_viewport_size": [0, 0],
                        "refresh_interval": 0,
                        "refresh_rules": {"countLimit": 0, "respectViewability": true},
                        "should_disable_refresh": true,
                        "should_enable_back_in_view_refresh": false,
                        "sizes": [[320, 50], [320, 100], [300, 250]]
                    }, {
                        "minimum_viewport_size": [640, 0],
                        "refresh_interval": 0,
                        "refresh_rules": {"countLimit": 0, "respectViewability": true},
                        "should_disable_refresh": true,
                        "should_enable_back_in_view_refresh": false,
                        "sizes": [[728, 90]]
                    }],
                    "bidders": [{
                        "name": "appnexus",
                        "params": {"placementId": 20953036, "member": "8394"},
                        "disable_push": false,
                        "disable_refresh": false
                    }]
                }
            }, "bsa-zone_1589226146467-9_123456": {
                "id": "bsa-zone_1589226146467-9_123456",
                "name": "Academo_S2S_Leaderboard_ROS_Pos2",
                "zone_key": "CE7IV2QJ",
                "backfill_creative_code_for_direct_rendering": "",
                "css_selector_of_content_element_for_repetition": "",
                "enable_sticky_on_scroll": false,
                "should_enable_direct_rendering": false,
                "sticky_on_scroll_unstick_delay_ms": null,
                "unit_type": "in_page",
                "viewports": [{
                    "minimum_viewport_size": [0, 0],
                    "refresh_interval": 30,
                    "refresh_rules": {"countLimit": 0, "respectViewability": true},
                    "should_disable_refresh": false,
                    "should_enable_back_in_view_refresh": false,
                    "sizes": [[320, 50], [320, 100], [300, 250]]
                }, {
                    "minimum_viewport_size": [640, 0],
                    "refresh_interval": 30,
                    "refresh_rules": {"countLimit": 0, "respectViewability": true},
                    "should_disable_refresh": false,
                    "should_enable_back_in_view_refresh": false,
                    "sizes": [[728, 90]]
                }],
                "bidders": [{
                    "name": "appnexus",
                    "params": {"placementId": 19214513, "member": "8394"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "nobid",
                    "params": {"siteId": 22020184064},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "sharethrough",
                    "params": {"pkey": "K9aLo856PS93zja2fMY4nPdf"},
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "criteo",
                    "params": {"networkId": 10359},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [728, 90], "unit": "541001000"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [300, 250], "unit": "541001001"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [320, 100], "unit": "541032232"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [320, 50], "unit": "541023049"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "onetag",
                    "params": {"pubId": "73d67396a1b6e18"},
                    "disable_push": false,
                    "disable_refresh": true
                }],
                "is_fixed_ad": false,
                "acceptable_config": null
            }, "bsa-zone_1589226262502-0_123456": {
                "id": "bsa-zone_1589226262502-0_123456",
                "name": "Academo_S2S_Sidebar_ROS_Pos1",
                "zone_key": "CE7IV2QL",
                "backfill_creative_code_for_direct_rendering": "",
                "css_selector_of_content_element_for_repetition": "",
                "enable_sticky_on_scroll": false,
                "should_enable_direct_rendering": false,
                "sticky_on_scroll_unstick_delay_ms": null,
                "unit_type": "in_page",
                "viewports": [{
                    "minimum_viewport_size": [0, 0],
                    "refresh_interval": 30,
                    "refresh_rules": {"countLimit": 0, "respectViewability": true},
                    "should_disable_refresh": false,
                    "should_enable_back_in_view_refresh": false,
                    "sizes": [[300, 250]]
                }, {
                    "minimum_viewport_size": [640, 0],
                    "refresh_interval": 30,
                    "refresh_rules": {"countLimit": 0, "respectViewability": true},
                    "should_disable_refresh": false,
                    "should_enable_back_in_view_refresh": false,
                    "sizes": [[160, 600]]
                }],
                "bidders": [{
                    "name": "appnexus",
                    "params": {"placementId": 19214513, "member": "8394"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "nobid",
                    "params": {"siteId": 22020184064},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "criteo",
                    "params": {"networkId": 10359},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [160, 600], "unit": "541001003"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [300, 250], "unit": "541001001"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "sharethrough",
                    "params": {"pkey": "hiJVGXEfqvX5HDZBNduvHDjm"},
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "adagio",
                    "params": {
                        "useAdUnitCodeAsAdUnitElementId": true,
                        "organizationId": "1116",
                        "site": "Academo",
                        "placement": "Academo_S2S_Sidebar_ROS_Pos1",
                        "environment": "mobile",
                        "viewport": [0, 0]
                    },
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "adagio",
                    "params": {
                        "useAdUnitCodeAsAdUnitElementId": true,
                        "organizationId": "1116",
                        "site": "Academo",
                        "placement": "Academo_S2S_Sidebar_ROS_Pos1",
                        "environment": "desktop",
                        "viewport": [640, 0]
                    },
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "onetag",
                    "params": {"pubId": "73d67396a1b6e18"},
                    "disable_push": false,
                    "disable_refresh": true
                }],
                "is_fixed_ad": false,
                "acceptable_config": {
                    "id": "bsa-zone_1611844604945-3_123456",
                    "name": "Academo_S2S_Sidebar_ROS_Pos1_acceptable",
                    "zone_key": "CEBILKJW",
                    "backfill_creative_code_for_direct_rendering": "",
                    "css_selector_of_content_element_for_repetition": "",
                    "enable_sticky_on_scroll": false,
                    "should_enable_direct_rendering": false,
                    "sticky_on_scroll_unstick_delay_ms": null,
                    "unit_type": "in_page",
                    "viewports": [{
                        "minimum_viewport_size": [0, 0],
                        "refresh_interval": 0,
                        "refresh_rules": {"countLimit": 0, "respectViewability": true},
                        "should_disable_refresh": true,
                        "should_enable_back_in_view_refresh": false,
                        "sizes": [[300, 250]]
                    }, {
                        "minimum_viewport_size": [640, 0],
                        "refresh_interval": 0,
                        "refresh_rules": {"countLimit": 0, "respectViewability": true},
                        "should_disable_refresh": true,
                        "should_enable_back_in_view_refresh": false,
                        "sizes": [[160, 600]]
                    }],
                    "bidders": [{
                        "name": "appnexus",
                        "params": {"placementId": 20953036, "member": "8394"},
                        "disable_push": false,
                        "disable_refresh": false
                    }]
                }
            }, "bsa-zone_1609779758686-6_123456": {
                "id": "bsa-zone_1609779758686-6_123456",
                "name": "Academo_S2S_FixedFooter_ROS",
                "zone_key": "CEBI5K7U",
                "backfill_creative_code_for_direct_rendering": "",
                "css_selector_of_content_element_for_repetition": "",
                "enable_sticky_on_scroll": false,
                "should_enable_direct_rendering": false,
                "sticky_on_scroll_unstick_delay_ms": null,
                "unit_type": "in_page",
                "viewports": [{
                    "minimum_viewport_size": [0, 0],
                    "refresh_interval": 30,
                    "refresh_rules": {"countLimit": 0, "respectViewability": true},
                    "should_disable_refresh": false,
                    "should_enable_back_in_view_refresh": false,
                    "sizes": [[320, 50], [320, 100]]
                }, {
                    "minimum_viewport_size": [640, 0],
                    "refresh_interval": 30,
                    "refresh_rules": {"countLimit": 0, "respectViewability": true},
                    "should_disable_refresh": false,
                    "should_enable_back_in_view_refresh": false,
                    "sizes": [[728, 90], [970, 90]]
                }],
                "bidders": [{
                    "name": "appnexus",
                    "params": {"placementId": 19214513, "member": "8394"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "nobid",
                    "params": {"siteId": 22020184064},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "criteo",
                    "params": {"networkId": 10359},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [728, 90], "unit": "541001000"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [320, 100], "unit": "541032232"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [320, 50], "unit": "541023049"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "openx",
                    "params": {"delDomain": "buysellads-d.openx.net", "size": [970, 90], "unit": "541023048"},
                    "disable_push": false,
                    "disable_refresh": false
                }, {
                    "name": "adagio",
                    "params": {
                        "useAdUnitCodeAsAdUnitElementId": true,
                        "organizationId": "1116",
                        "site": "Academo",
                        "placement": "Academo_S2S_FixedFooter_ROS",
                        "environment": "mobile",
                        "viewport": [0, 0]
                    },
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "adagio",
                    "params": {
                        "useAdUnitCodeAsAdUnitElementId": true,
                        "organizationId": "1116",
                        "site": "Academo",
                        "placement": "Academo_S2S_FixedFooter_ROS",
                        "environment": "desktop",
                        "viewport": [640, 0]
                    },
                    "disable_push": false,
                    "disable_refresh": true
                }, {
                    "name": "onetag",
                    "params": {"pubId": "73d67396a1b6e18"},
                    "disable_push": false,
                    "disable_refresh": true
                }],
                "is_fixed_ad": true,
                "acceptable_config": null
            }
        },
        "publisher": "academo",
        "should_disable_prebid": false,
        "should_enable_lazy_load": false,
        "static_publisher_targeting": {
            "optimize": "true",
            "optimize_adl_id": "",
            "optimize_amp": "false",
            "optimize_audience": "lifestyle",
            "optimize_env": "prod",
            "optimize_pub": "academo"
        },
        "supply_chain_config": {
            "ver": "1.0",
            "complete": 1,
            "nodes": [{"asi": "www.buysellads.com", "sid": "8648", "hp": 1}]
        },
        "timeout": 2500
    })
})();
