/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */
(function(e, t) {
        var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function(e, t) {
            return new b.fn.init(e,t,r)
        }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi, L = function(e, t) {
            return t.toUpperCase()
        }, H = function(e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(),
                b.ready())
        }, q = function() {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1),
                e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H),
                e.detachEvent("onload", H))
        };
        b.fn = b.prototype = {
            jquery: p,
            constructor: b,
            init: function(e, n, r) {
                var i, a;
                if (!e) {
                    return this
                }
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e),
                        !i || !i[1] && n) {
                        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                    }
                    if (i[1]) {
                        if (n = n instanceof b ? n[0] : n,
                                b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)),
                            C.test(i[1]) && b.isPlainObject(n)) {
                            for (i in n) {
                                b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                            }
                        }
                        return this
                    }
                    if (a = o.getElementById(i[2]),
                        a && a.parentNode) {
                        if (a.id !== i[2]) {
                            return r.find(e)
                        }
                        this.length = 1,
                            this[0] = a
                    }
                    return this.context = o,
                        this.selector = e,
                        this
                }
                return e.nodeType ? (this.context = this[0] = e,
                    this.length = 1,
                    this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
                    this.context = e.context),
                    b.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return h.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = b.merge(this.constructor(), e);
                return t.prevObject = this,
                    t.context = this.context,
                    t
            },
            each: function(e, t) {
                return b.each(this, e, t)
            },
            ready: function(e) {
                return b.ready.promise().done(e),
                    this
            },
            slice: function() {
                return this.pushStack(h.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                    , n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(b.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: d,
            sort: [].sort,
            splice: [].splice
        },
            b.fn.init.prototype = b.fn,
            b.extend = b.fn.extend = function() {
                var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s,
                    s = arguments[1] || {},
                    u = 2),
                     "object" == typeof s || b.isFunction(s) || (s = {}),
                     l === u && (s = this,
                         --u); l > u; u++) {
                    if (null != (o = arguments[u])) {
                        for (i in o) {
                            e = s[i],
                                r = o[i],
                            s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1,
                                a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {},
                                s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r))
                        }
                    }
                }
                return s
            }
            ,
            b.extend({
                noConflict: function(t) {
                    return e.$ === b && (e.$ = u),
                    t && e.jQuery === b && (e.jQuery = s),
                        b
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? b.readyWait++ : b.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--b.readyWait : !b.isReady) {
                        if (!o.body) {
                            return setTimeout(b.ready)
                        }
                        b.isReady = !0,
                        e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]),
                        b.fn.trigger && b(o).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === b.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === b.type(e)
                }
                ,
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) {
                        return !1
                    }
                    try {
                        if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) {
                            return !1
                        }
                    } catch (n) {
                        return !1
                    }
                    var r;
                    for (r in e) {}
                    return r === t || y.call(e, r)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) {
                        return !1
                    }
                    return !0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) {
                        return null
                    }
                    "boolean" == typeof t && (n = t,
                        t = !1),
                        t = t || o;
                    var r = C.exec(e)
                        , i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i),
                    i && b(i).remove(),
                        b.merge([], r.childNodes))
                },
                parseJSON: function(n) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n),
                    n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n),
                        t)
                },
                parseXML: function(n) {
                    var r, i;
                    if (!n || "string" != typeof n) {
                        return null
                    }
                    try {
                        e.DOMParser ? (i = new DOMParser,
                            r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                            r.async = "false",
                            r.loadXML(n))
                    } catch (o) {
                        r = t
                    }
                    return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n),
                        r
                },
                noop: function() {},
                globalEval: function(t) {
                    t && b.trim(t) && (e.execScript || function(t) {
                            e.eval.call(e, t)
                        }
                    )(t)
                },
                camelCase: function(e) {
                    return e.replace(j, "ms-").replace(D, L)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var r, i = 0, o = e.length, a = M(e);
                    if (n) {
                        if (a) {
                            for (; o > i; i++) {
                                if (r = t.apply(e[i], n),
                                    r === !1) {
                                    break
                                }
                            }
                        } else {
                            for (i in e) {
                                if (r = t.apply(e[i], n),
                                    r === !1) {
                                    break
                                }
                            }
                        }
                    } else {
                        if (a) {
                            for (; o > i; i++) {
                                if (r = t.call(e[i], i, e[i]),
                                    r === !1) {
                                    break
                                }
                            }
                        } else {
                            for (i in e) {
                                if (r = t.call(e[i], i, e[i]),
                                    r === !1) {
                                    break
                                }
                            }
                        }
                    }
                    return e
                },
                trim: v && !v.call("\ufeff\u00a0") ? function(e) {
                    return null == e ? "" : v.call(e)
                }
                    : function(e) {
                        return null == e ? "" : (e + "").replace(T, "")
                    }
                ,
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)),
                        n
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (g) {
                            return g.call(t, e, n)
                        }
                        for (r = t.length,
                                 n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
                            if (n in t && t[n] === e) {
                                return n
                            }
                        }
                    }
                    return -1
                },
                merge: function(e, n) {
                    var r = n.length
                        , i = e.length
                        , o = 0;
                    if ("number" == typeof r) {
                        for (; r > o; o++) {
                            e[i++] = n[o]
                        }
                    } else {
                        while (n[o] !== t) {
                            e[i++] = n[o++]
                        }
                    }
                    return e.length = i,
                        e
                },
                grep: function(e, t, n) {
                    var r, i = [], o = 0, a = e.length;
                    for (n = !!n; a > o; o++) {
                        r = !!t(e[o], o),
                        n !== r && i.push(e[o])
                    }
                    return i
                },
                map: function(e, t, n) {
                    var r, i = 0, o = e.length, a = M(e), s = [];
                    if (a) {
                        for (; o > i; i++) {
                            r = t(e[i], i, n),
                            null != r && (s[s.length] = r)
                        }
                    } else {
                        for (i in e) {
                            r = t(e[i], i, n),
                            null != r && (s[s.length] = r)
                        }
                    }
                    return f.apply([], s)
                },
                guid: 1,
                proxy: function(e, n) {
                    var r, i, o;
                    return "string" == typeof n && (o = e[n],
                        n = e,
                        e = o),
                        b.isFunction(e) ? (r = h.call(arguments, 2),
                            i = function() {
                                return e.apply(n || this, r.concat(h.call(arguments)))
                            }
                            ,
                            i.guid = e.guid = e.guid || b.guid++,
                            i) : t
                },
                access: function(e, n, r, i, o, a, s) {
                    var u = 0
                        , l = e.length
                        , c = null == r;
                    if ("object" === b.type(r)) {
                        o = !0;
                        for (u in r) {
                            b.access(e, n, u, r[u], !0, a, s)
                        }
                    } else {
                        if (i !== t && (o = !0,
                            b.isFunction(i) || (s = !0),
                            c && (s ? (n.call(e, i),
                                n = null) : (c = n,
                                    n = function(e, t, n) {
                                        return c.call(b(e), n)
                                    }
                            )),
                                n)) {
                            for (; l > u; u++) {
                                n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)))
                            }
                        }
                    }
                    return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
                },
                now: function() {
                    return (new Date).getTime()
                }
            }),
            b.ready.promise = function(t) {
                if (!n) {
                    if (n = b.Deferred(),
                        "complete" === o.readyState) {
                        setTimeout(b.ready)
                    } else {
                        if (o.addEventListener) {
                            o.addEventListener("DOMContentLoaded", H, !1),
                                e.addEventListener("load", H, !1)
                        } else {
                            o.attachEvent("onreadystatechange", H),
                                e.attachEvent("onload", H);
                            var r = !1;
                            try {
                                r = null == e.frameElement && o.documentElement
                            } catch (i) {}
                            r && r.doScroll && function a() {
                                if (!b.isReady) {
                                    try {
                                        r.doScroll("left")
                                    } catch (e) {
                                        return setTimeout(a, 50)
                                    }
                                    q(),
                                        b.ready()
                                }
                            }()
                        }
                    }
                }
                return n.promise(t)
            }
            ,
            b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                l["[object " + t + "]"] = t.toLowerCase()
            });
        function M(e) {
            var t = e.length
                , n = b.type(e);
            return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        r = b(o);
        var _ = {};
        function F(e) {
            var t = _[e] = {};
            return b.each(e.match(w) || [], function(e, n) {
                t[n] = !0
            }),
                t
        }
        b.Callbacks = function(e) {
            e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
            var n, r, i, o, a, s, u = [], l = !e.once && [], c = function(t) {
                for (r = e.memory && t,
                         i = !0,
                         a = s || 0,
                         s = 0,
                         o = u.length,
                         n = !0; u && o > a; a++) {
                    if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                }
                n = !1,
                u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
            }, p = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        (function i(t) {
                                b.each(t, function(t, n) {
                                    var r = b.type(n);
                                    "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }
                        )(arguments),
                            n ? o = u.length : r && (s = t,
                                    c(r))
                    }
                    return this
                },
                remove: function() {
                    return u && b.each(arguments, function(e, t) {
                        var r;
                        while ((r = b.inArray(t, u, r)) > -1) {
                            u.splice(r, 1),
                            n && (o >= r && o--,
                            a >= r && a--)
                        }
                    }),
                        this
                },
                has: function(e) {
                    return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [],
                        this
                },
                disable: function() {
                    return u = l = r = t,
                        this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = t,
                    r || p.disable(),
                        this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return t = t || [],
                        t = [e, t.slice ? t.slice() : t],
                    !u || i && !l || (n ? l.push(t) : c(t)),
                        this
                },
                fire: function() {
                    return p.fireWith(this, arguments),
                        this
                },
                fired: function() {
                    return !!i
                }
            };
            return p
        }
            ,
            b.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]]
                        , n = "pending"
                        , r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments),
                                this
                        },
                        then: function() {
                            var e = arguments;
                            return b.Deferred(function(n) {
                                b.each(t, function(t, o) {
                                    var a = o[0]
                                        , s = b.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }),
                                    e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? b.extend(e, r) : r
                        }
                    }
                        , i = {};
                    return r.pipe = r.then,
                        b.each(t, function(e, o) {
                            var a = o[2]
                                , s = o[3];
                            r[o[1]] = a.add,
                            s && a.add(function() {
                                n = s
                            }, t[1 ^ e][2].disable, t[2][2].lock),
                                i[o[0]] = function() {
                                    return i[o[0] + "With"](this === i ? r : this, arguments),
                                        this
                                }
                                ,
                                i[o[0] + "With"] = a.fireWith
                        }),
                        r.promise(i),
                    e && e.call(i, i),
                        i
                },
                when: function(e) {
                    var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0, o = 1 === i ? e : b.Deferred(), a = function(e, t, n) {
                        return function(r) {
                            t[e] = this,
                                n[e] = arguments.length > 1 ? h.call(arguments) : r,
                                n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                        }
                    }, s, u, l;
                    if (r > 1) {
                        for (s = Array(r),
                                 u = Array(r),
                                 l = Array(r); r > t; t++) {
                            n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i
                        }
                    }
                    return i || o.resolveWith(l, n),
                        o.promise()
                }
            }),
            b.support = function() {
                var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
                if (d.setAttribute("className", "t"),
                        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        n = d.getElementsByTagName("*"),
                        r = d.getElementsByTagName("a")[0],
                    !n || !r || !n.length) {
                    return {}
                }
                s = o.createElement("select"),
                    l = s.appendChild(o.createElement("option")),
                    a = d.getElementsByTagName("input")[0],
                    r.style.cssText = "top:1px;float:left;opacity:.5",
                    t = {
                        getSetAttribute: "t" !== d.className,
                        leadingWhitespace: 3 === d.firstChild.nodeType,
                        tbody: !d.getElementsByTagName("tbody").length,
                        htmlSerialize: !!d.getElementsByTagName("link").length,
                        style: /top/.test(r.getAttribute("style")),
                        hrefNormalized: "/a" === r.getAttribute("href"),
                        opacity: /^0.5/.test(r.style.opacity),
                        cssFloat: !!r.style.cssFloat,
                        checkOn: !!a.value,
                        optSelected: l.selected,
                        enctype: !!o.createElement("form").enctype,
                        html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
                        boxModel: "CSS1Compat" === o.compatMode,
                        deleteExpando: !0,
                        noCloneEvent: !0,
                        inlineBlockNeedsLayout: !1,
                        shrinkWrapBlocks: !1,
                        reliableMarginRight: !0,
                        boxSizingReliable: !0,
                        pixelPosition: !1
                    },
                    a.checked = !0,
                    t.noCloneChecked = a.cloneNode(!0).checked,
                    s.disabled = !0,
                    t.optDisabled = !l.disabled;
                try {
                    delete d.test
                } catch (h) {
                    t.deleteExpando = !1
                }
                a = o.createElement("input"),
                    a.setAttribute("value", ""),
                    t.input = "" === a.getAttribute("value"),
                    a.value = "t",
                    a.setAttribute("type", "radio"),
                    t.radioValue = "t" === a.value,
                    a.setAttribute("checked", "t"),
                    a.setAttribute("name", "t"),
                    u = o.createDocumentFragment(),
                    u.appendChild(a),
                    t.appendChecked = a.checked,
                    t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
                d.attachEvent && (d.attachEvent("onclick", function() {
                    t.noCloneEvent = !1
                }),
                    d.cloneNode(!0).click());
                for (f in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) {
                    d.setAttribute(c = "on" + f, "t"),
                        t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
                }
                return d.style.backgroundClip = "content-box",
                    d.cloneNode(!0).style.backgroundClip = "",
                    t.clearCloneStyle = "content-box" === d.style.backgroundClip,
                    b(function() {
                        var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0];
                        u && (n = o.createElement("div"),
                            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                            u.appendChild(n).appendChild(d),
                            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                            a = d.getElementsByTagName("td"),
                            a[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                            p = 0 === a[0].offsetHeight,
                            a[0].style.display = "",
                            a[1].style.display = "none",
                            t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight,
                            d.innerHTML = "",
                            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                            t.boxSizing = 4 === d.offsetWidth,
                            t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop,
                        e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top,
                            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                                    width: "4px"
                                }).width,
                            r = d.appendChild(o.createElement("div")),
                            r.style.cssText = d.style.cssText = s,
                            r.style.marginRight = r.style.width = "0",
                            d.style.width = "1px",
                            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
                        typeof d.style.zoom !== i && (d.innerHTML = "",
                            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
                            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
                            d.style.display = "block",
                            d.innerHTML = "<div></div>",
                            d.firstChild.style.width = "5px",
                            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
                        t.inlineBlockNeedsLayout && (u.style.zoom = 1)),
                            u.removeChild(n),
                            n = d = a = r = null)
                    }),
                    n = s = u = l = r = a = null,
                    t
            }();
        var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
            , B = /([A-Z])/g;
        function P(e, n, r, i) {
            if (b.acceptData(e)) {
                var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e, f = l ? e[s] : e[s] && s;
                if (f && p[f] && (i || p[f].data) || !u || r !== t) {
                    return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s),
                    p[f] || (p[f] = {},
                    l || (p[f].toJSON = b.noop)),
                    ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)),
                        o = p[f],
                    i || (o.data || (o.data = {}),
                        o = o.data),
                    r !== t && (o[b.camelCase(n)] = r),
                        u ? (a = o[n],
                        null == a && (a = o[b.camelCase(n)])) : a = o,
                        a
                }
            }
        }
        function R(e, t, n) {
            if (b.acceptData(e)) {
                var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando;
                if (s[u]) {
                    if (t && (o = n ? s[u] : s[u].data)) {
                        b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t),
                            t = t in o ? [t] : t.split(" "));
                        for (r = 0,
                                 i = t.length; i > r; r++) {
                            delete o[t[r]]
                        }
                        if (!(n ? $ : b.isEmptyObject)(o)) {
                            return
                        }
                    }
                    (n || (delete s[u].data,
                        $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
                }
            }
        }
        b.extend({
            cache: {},
            expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando],
                !!e && !$(e)
            },
            data: function(e, t, n) {
                return P(e, t, n)
            },
            removeData: function(e, t) {
                return R(e, t)
            },
            _data: function(e, t, n) {
                return P(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return R(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                    return !1
                }
                var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }),
            b.fn.extend({
                data: function(e, n) {
                    var r, i, o = this[0], a = 0, s = null;
                    if (e === t) {
                        if (this.length && (s = b.data(o),
                            1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                            for (r = o.attributes; r.length > a; a++) {
                                i = r[a].name,
                                i.indexOf("data-") || (i = b.camelCase(i.slice(5)),
                                    W(o, i, s[i]))
                            }
                            b._data(o, "parsedAttrs", !0)
                        }
                        return s
                    }
                    return "object" == typeof e ? this.each(function() {
                        b.data(this, e)
                    }) : b.access(this, function(n) {
                        return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
                            b.data(this, e, n)
                        }),
                            t)
                    }, null, n, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        b.removeData(this, e)
                    })
                }
            });
        function W(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(B, "-$1").toLowerCase();
                if (r = e.getAttribute(i),
                    "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                    } catch (o) {}
                    b.data(e, n, r)
                } else {
                    r = t
                }
            }
            return r
        }
        function $(e) {
            var t;
            for (t in e) {
                if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) {
                    return !1
                }
            }
            return !0
        }
        b.extend({
            queue: function(e, n, r) {
                var i;
                return e ? (n = (n || "fx") + "queue",
                    i = b._data(e, n),
                r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)),
                i || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = b.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = b._queueHooks(e, t)
                    , a = function() {
                    b.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(),
                    r--),
                    o.cur = i,
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, a, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return b._data(e, n) || b._data(e, n, {
                        empty: b.Callbacks("once memory").add(function() {
                            b._removeData(e, t + "queue"),
                                b._removeData(e, n)
                        })
                    })
            }
        }),
            b.fn.extend({
                queue: function(e, n) {
                    var r = 2;
                    return "string" != typeof e && (n = e,
                        e = "fx",
                        r--),
                        r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                            var t = b.queue(this, e, n);
                            b._queueHooks(this, e),
                            "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
                        })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        b.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = b.fx ? b.fx.speeds[e] || e : e,
                        t = t || "fx",
                        this.queue(t, function(t, n) {
                            var r = setTimeout(t, e);
                            n.stop = function() {
                                clearTimeout(r)
                            }
                        })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, n) {
                    var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function() {
                        --i || o.resolveWith(a, [a])
                    };
                    "string" != typeof e && (n = e,
                        e = t),
                        e = e || "fx";
                    while (s--) {
                        r = b._data(a[s], e + "queueHooks"),
                        r && r.empty && (i++,
                            r.empty.add(u))
                    }
                    return u(),
                        o.promise(n)
                }
            });
        var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input;
        b.fn.extend({
            attr: function(e, t) {
                return b.access(this, b.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    b.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return b.access(this, b.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = b.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = t,
                                delete this[e]
                        } catch (n) {}
                    })
            },
            addClass: function(e) {
                var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
                if (b.isFunction(e)) {
                    return this.each(function(t) {
                        b(this).addClass(e.call(this, t, this.className))
                    })
                }
                if (u) {
                    for (t = (e || "").match(w) || []; s > a; a++) {
                        if (n = this[a],
                                r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                            o = 0;
                            while (i = t[o++]) {
                                0 > r.indexOf(" " + i + " ") && (r += i + " ")
                            }
                            n.className = b.trim(r)
                        }
                    }
                }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
                if (b.isFunction(e)) {
                    return this.each(function(t) {
                        b(this).removeClass(e.call(this, t, this.className))
                    })
                }
                if (u) {
                    for (t = (e || "").match(w) || []; s > a; a++) {
                        if (n = this[a],
                                r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                            o = 0;
                            while (i = t[o++]) {
                                while (r.indexOf(" " + i + " ") >= 0) {
                                    r = r.replace(" " + i + " ", " ")
                                }
                            }
                            n.className = e ? b.trim(r) : ""
                        }
                    }
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                    , r = "boolean" == typeof t;
                return b.isFunction(e) ? this.each(function(n) {
                    b(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n) {
                        var o, a = 0, s = b(this), u = t, l = e.match(w) || [];
                        while (o = l[a++]) {
                            u = r ? u : !s.hasClass(o),
                                s[u ? "addClass" : "removeClass"](o)
                        }
                    } else {
                        (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className),
                            this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
                    }
                })
            },
            hasClass: function(e) {
                var t = " " + e + " "
                    , n = 0
                    , r = this.length;
                for (; r > n; n++) {
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) {
                        return !0
                    }
                }
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0];
                if (arguments.length) {
                    return i = b.isFunction(e),
                        this.each(function(n) {
                            var o, a = b(this);
                            1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e,
                                null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                                        return null == e ? "" : e + ""
                                    })),
                                r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()],
                            r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                        })
                }
                if (o) {
                    return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()],
                        r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                            "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
                }
            }
        }),
            b.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return !t || t.specified ? e.value : e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0;
                            for (; s > u; u++) {
                                if (n = r[u],
                                        !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = b(n).val(),
                                            o) {
                                        return t
                                    }
                                    a.push(t)
                                }
                            }
                            return a
                        },
                        set: function(e, t) {
                            var n = b.makeArray(t);
                            return b(e).find("option").each(function() {
                                this.selected = b.inArray(b(this).val(), n) >= 0
                            }),
                            n.length || (e.selectedIndex = -1),
                                n
                        }
                    }
                },
                attr: function(e, n, r) {
                    var o, a, s, u = e.nodeType;
                    if (e && 3 !== u && 8 !== u && 2 !== u) {
                        return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e),
                        a && (n = n.toLowerCase(),
                            o = b.attrHooks[n] || (J.test(n) ? z : I)),
                            r === t ? o && a && "get"in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)),
                                null == s ? t : s) : null !== r ? o && a && "set"in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""),
                                r) : (b.removeAttr(e, n),
                                t))
                    }
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0, o = t && t.match(w);
                    if (o && 1 === e.nodeType) {
                        while (n = o[i++]) {
                            r = b.propFix[n] || n,
                                J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""),
                                e.removeAttribute(Q ? n : r)
                        }
                    }
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                    t
                            }
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, n, r) {
                    var i, o, a, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) {
                        return a = 1 !== s || !b.isXMLDoc(e),
                        a && (n = b.propFix[n] || n,
                            o = b.propHooks[n]),
                            r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
                    }
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var n = e.getAttributeNode("tabindex");
                            return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                        }
                    }
                }
            }),
            z = {
                get: function(e, n) {
                    var r = b.prop(e, n)
                        , i = "boolean" == typeof r && e.getAttribute(n)
                        , o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                    return o && o.value !== !1 ? n.toLowerCase() : t
                },
                set: function(e, t, n) {
                    return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0,
                        n
                }
            },
        K && Q || (b.attrHooks.value = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
            },
            set: function(e, n, r) {
                return b.nodeName(e, "input") ? (e.defaultValue = n,
                    t) : I && I.set(e, n, r)
            }
        }),
        Q || (I = b.valHooks.button = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
            },
            set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
                    i.value = n += "",
                    "value" === r || n === e.getAttribute(r) ? n : t
            }
        },
            b.attrHooks.contenteditable = {
                get: I.get,
                set: function(e, t, n) {
                    I.set(e, "" === t ? !1 : t, n)
                }
            },
            b.each(["width", "height"], function(e, n) {
                b.attrHooks[n] = b.extend(b.attrHooks[n], {
                    set: function(e, r) {
                        return "" === r ? (e.setAttribute(n, "auto"),
                            r) : t
                    }
                })
            })),
        b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
            b.attrHooks[n] = b.extend(b.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return null == r ? t : r
                }
            })
        }),
            b.each(["href", "src"], function(e, t) {
                b.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            })),
        b.support.style || (b.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }),
        b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex),
                    null
            }
        })),
        b.support.enctype || (b.propFix.enctype = "encoding"),
        b.support.checkOn || b.each(["radio", "checkbox"], function() {
            b.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }),
            b.each(["radio", "checkbox"], function() {
                b.valHooks[this] = b.extend(b.valHooks[this], {
                    set: function(e, n) {
                        return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
                    }
                })
            });
        var Z = /^(?:input|select|textarea)$/i
            , et = /^key/
            , tt = /^(?:mouse|contextmenu)|click/
            , nt = /^(?:focusinfocus|focusoutblur)$/
            , rt = /^([^.]*)(?:\.(.+)|)$/;
        function it() {
            return !0
        }
        function ot() {
            return !1
        }
        b.event = {
            global: {},
            add: function(e, n, r, o, a) {
                var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
                if (v) {
                    r.handler && (c = r,
                        r = c.handler,
                        a = c.selector),
                    r.guid || (r.guid = b.guid++),
                    (u = v.events) || (u = v.events = {}),
                    (f = v.handle) || (f = v.handle = function(e) {
                        return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                    }
                        ,
                        f.elem = e),
                        n = (n || "").match(w) || [""],
                        l = n.length;
                    while (l--) {
                        s = rt.exec(n[l]) || [],
                            g = y = s[1],
                            m = (s[2] || "").split(".").sort(),
                            p = b.event.special[g] || {},
                            g = (a ? p.delegateType : p.bindType) || g,
                            p = b.event.special[g] || {},
                            d = b.extend({
                                type: g,
                                origType: y,
                                data: o,
                                handler: r,
                                guid: r.guid,
                                selector: a,
                                needsContext: a && b.expr.match.needsContext.test(a),
                                namespace: m.join(".")
                            }, c),
                        (h = u[g]) || (h = u[g] = [],
                            h.delegateCount = 0,
                        p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                        p.add && (p.add.call(e, d),
                        d.handler.guid || (d.handler.guid = r.guid)),
                            a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                            b.event.global[g] = !0
                    }
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
                if (m && (c = m.events)) {
                    t = (t || "").match(w) || [""],
                        l = t.length;
                    while (l--) {
                        if (s = rt.exec(t[l]) || [],
                                d = g = s[1],
                                h = (s[2] || "").split(".").sort(),
                                d) {
                            p = b.event.special[d] || {},
                                d = (r ? p.delegateType : p.bindType) || d,
                                f = c[d] || [],
                                s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                u = o = f.length;
                            while (o--) {
                                a = f[o],
                                !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                                a.selector && f.delegateCount--,
                                p.remove && p.remove.call(e, a))
                            }
                            u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle),
                                delete c[d])
                        } else {
                            for (d in c) {
                                b.event.remove(e, d + t[l], n, r, !0)
                            }
                        }
                    }
                    b.isEmptyObject(c) && (delete m.handle,
                        b._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, a) {
                var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = f = i = i || o,
                    3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
                        g = m.shift(),
                        m.sort()),
                        u = 0 > g.indexOf(":") && "on" + g,
                        n = n[b.expando] ? n : new b.Event(g,"object" == typeof n && n),
                        n.isTrigger = !0,
                        n.namespace = m.join("."),
                        n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        n.result = t,
                    n.target || (n.target = i),
                        r = null == r ? [n] : b.makeArray(r, [n]),
                        p = b.event.special[g] || {},
                    a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                    if (!a && !p.noBubble && !b.isWindow(i)) {
                        for (c = p.delegateType || g,
                             nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) {
                            h.push(l),
                                f = l
                        }
                        f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                    }
                    d = 0;
                    while ((l = h[d++]) && !n.isPropagationStopped()) {
                        n.type = d > 1 ? c : p.bindType || g,
                            s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"),
                        s && s.apply(l, r),
                            s = u && l[u],
                        s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault()
                    }
                    if (n.type = g,
                            !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                        f = i[u],
                        f && (i[u] = null),
                            b.event.triggered = g;
                        try {
                            i[g]()
                        } catch (v) {}
                        b.event.triggered = t,
                        f && (i[u] = f)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = b.event.fix(e);
                var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [], c = b.event.special[e.type] || {};
                if (u[0] = e,
                        e.delegateTarget = this,
                    !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    s = b.event.handlers.call(this, e, l),
                        n = 0;
                    while ((o = s[n++]) && !e.isPropagationStopped()) {
                        e.currentTarget = o.elem,
                            a = 0;
                        while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                                e.data = i.data,
                                r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u),
                            r !== t && (e.result = r) === !1 && (e.preventDefault(),
                                e.stopPropagation()))
                        }
                    }
                    return c.postDispatch && c.postDispatch.call(this, e),
                        e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type)) {
                    for (; l != this; l = l.parentNode || this) {
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (o = [],
                                     a = 0; u > a; a++) {
                                i = n[a],
                                    r = i.selector + " ",
                                o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length),
                                o[r] && o.push(i)
                            }
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                    }
                }
                return n.length > u && s.push({
                    elem: this,
                    handlers: n.slice(u)
                }),
                    s
            },
            fix: function(e) {
                if (e[b.expando]) {
                    return e
                }
                var t, n, r, i = e.type, a = e, s = this.fixHooks[i];
                s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
                    r = s.props ? this.props.concat(s.props) : this.props,
                    e = new b.Event(a),
                    t = r.length;
                while (t--) {
                    n = r[t],
                        e[n] = a[n]
                }
                return e.target || (e.target = a.srcElement || o),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                    e.metaKey = !!e.metaKey,
                    s.filter ? s.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, a, s = n.button, u = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o,
                        a = i.documentElement,
                        r = i.body,
                        e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0),
                        e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)),
                    !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u),
                    e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                        e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                            !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== o.activeElement && this.focus) {
                            try {
                                return this.focus(),
                                    !1
                            } catch (e) {}
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === o.activeElement && this.blur ? (this.blur(),
                            !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = b.extend(new b.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
            b.removeEvent = o.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }
                : function(e, t, n) {
                    var r = "on" + t;
                    e.detachEvent && (typeof e[r] === i && (e[r] = null),
                        e.detachEvent(r, n))
                }
            ,
            b.Event = function(e, n) {
                return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
                n && b.extend(this, n),
                    this.timeStamp = e && e.timeStamp || b.now(),
                    this[b.expando] = !0,
                    t) : new b.Event(e,n)
            }
            ,
            b.Event.prototype = {
                isDefaultPrevented: ot,
                isPropagationStopped: ot,
                isImmediatePropagationStopped: ot,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = it,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = it,
                    e && (e.stopPropagation && e.stopPropagation(),
                        e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = it,
                        this.stopPropagation()
                }
            },
            b.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                b.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t),
                            n
                    }
                }
            }),
        b.support.submitBubbles || (b.event.special.submit = {
            setup: function() {
                return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target
                        , r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                    r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }),
                        b._data(r, "submitBubbles", !0))
                }),
                    t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble,
                this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"),
                    t)
            }
        }),
        b.support.changeBubbles || (b.event.special.change = {
            setup: function() {
                return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }),
                    b.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                            b.event.simulate("change", this, e, !0)
                    })),
                    !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                    }),
                        b._data(t, "changeBubbles", !0))
                }),
                    t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return b.event.remove(this, "._change"),
                    !Z.test(this.nodeName)
            }
        }),
        b.support.focusinBubbles || b.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0
                , r = function(e) {
                b.event.simulate(t, e.target, b.event.fix(e), !0)
            };
            b.event.special[t] = {
                setup: function() {
                    0 === n++ && o.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && o.removeEventListener(e, r, !0)
                }
            }
        }),
            b.fn.extend({
                on: function(e, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof e) {
                        "string" != typeof n && (r = r || n,
                            n = t);
                        for (a in e) {
                            this.on(a, n, r, e[a], o)
                        }
                        return this
                    }
                    if (null == r && null == i ? (i = n,
                            r = n = t) : null == i && ("string" == typeof n ? (i = r,
                                r = t) : (i = r,
                                r = n,
                                n = t)),
                        i === !1) {
                        i = ot
                    } else {
                        if (!i) {
                            return this
                        }
                    }
                    return 1 === o && (s = i,
                        i = function(e) {
                            return b().off(e),
                                s.apply(this, arguments)
                        }
                        ,
                        i.guid = s.guid || (s.guid = b.guid++)),
                        this.each(function() {
                            b.event.add(this, e, i, r, n)
                        })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, n, r) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) {
                        return i = e.handleObj,
                            b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                            this
                    }
                    if ("object" == typeof e) {
                        for (o in e) {
                            this.off(o, n, e[o])
                        }
                        return this
                    }
                    return (n === !1 || "function" == typeof n) && (r = n,
                        n = t),
                    r === !1 && (r = ot),
                        this.each(function() {
                            b.event.remove(this, e, r, n)
                        })
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        b.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, n) {
                    var r = this[0];
                    return r ? b.event.trigger(e, n, r, !0) : t
                }
            }),
            function(e, t) {
                var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0, C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice, M = D.indexOf || function(e) {
                        var t = 0
                            , n = this.length;
                        for (; n > t; t++) {
                            if (this[t] === e) {
                                return t
                            }
                        }
                        return -1
                    }
                    , _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {
                    ID: RegExp("^#(" + F + ")"),
                    CLASS: RegExp("^\\.(" + F + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                    TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + P),
                    PSEUDO: RegExp("^" + R),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                    needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
                try {
                    q.call(w.documentElement.childNodes, 0)[0].nodeType
                } catch (nt) {
                    q = function(e) {
                        var t, n = [];
                        while (t = this[e++]) {
                            n.push(t)
                        }
                        return n
                    }
                }
                function rt(e) {
                    return Y.test(e + "")
                }
                function it() {
                    var e, t = [];
                    return e = function(n, r) {
                        return t.push(n += " ") > i.cacheLength && delete e[t.shift()],
                            e[n] = r
                    }
                }
                function ot(e) {
                    return e[x] = !0,
                        e
                }
                function at(e) {
                    var t = p.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                }
                function st(e, t, n, r) {
                    var i, o, a, s, u, l, f, g, m, v;
                    if ((t ? t.ownerDocument || t : w) !== p && c(t),
                            t = t || p,
                            n = n || [],
                        !e || "string" != typeof e) {
                        return n
                    }
                    if (1 !== (s = t.nodeType) && 9 !== s) {
                        return []
                    }
                    if (!d && !r) {
                        if (i = J.exec(e)) {
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a),
                                        !o || !o.parentNode) {
                                        return n
                                    }
                                    if (o.id === a) {
                                        return n.push(o),
                                            n
                                    }
                                } else {
                                    if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) {
                                        return n.push(o),
                                            n
                                    }
                                }
                            } else {
                                if (i[2]) {
                                    return H.apply(n, q.call(t.getElementsByTagName(e), 0)),
                                        n
                                }
                                if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) {
                                    return H.apply(n, q.call(t.getElementsByClassName(a), 0)),
                                        n
                                }
                            }
                        }
                        if (T.qsa && !h.test(e)) {
                            if (f = !0,
                                    g = x,
                                    m = t,
                                    v = 9 === s && e,
                                1 === s && "object" !== t.nodeName.toLowerCase()) {
                                l = ft(e),
                                    (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g),
                                    g = "[id='" + g + "'] ",
                                    u = l.length;
                                while (u--) {
                                    l[u] = g + dt(l[u])
                                }
                                m = V.test(e) && t.parentNode || t,
                                    v = l.join(",")
                            }
                            if (v) {
                                try {
                                    return H.apply(n, q.call(m.querySelectorAll(v), 0)),
                                        n
                                } catch (b) {} finally {
                                    f || t.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return wt(e.replace(W, "$1"), t, n, r)
                }
                a = st.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }
                    ,
                    c = st.setDocument = function(e) {
                        var n = e ? e.ownerDocument || e : w;
                        return n !== p && 9 === n.nodeType && n.documentElement ? (p = n,
                            f = n.documentElement,
                            d = a(n),
                            T.tagNameNoComments = at(function(e) {
                                return e.appendChild(n.createComment("")),
                                    !e.getElementsByTagName("*").length
                            }),
                            T.attributes = at(function(e) {
                                e.innerHTML = "<select></select>";
                                var t = typeof e.lastChild.getAttribute("multiple");
                                return "boolean" !== t && "string" !== t
                            }),
                            T.getByClassName = at(function(e) {
                                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                                    e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e",
                                    2 === e.getElementsByClassName("e").length) : !1
                            }),
                            T.getByName = at(function(e) {
                                e.id = x + 0,
                                    e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>",
                                    f.insertBefore(e, f.firstChild);
                                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                                return T.getIdNotName = !n.getElementById(x),
                                    f.removeChild(e),
                                    t
                            }),
                            i.attrHandle = at(function(e) {
                                return e.innerHTML = "<a href='#'></a>",
                                e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                            }) ? {} : {
                                href: function(e) {
                                    return e.getAttribute("href", 2)
                                },
                                type: function(e) {
                                    return e.getAttribute("type")
                                }
                            },
                            T.getIdNotName ? (i.find.ID = function(e, t) {
                                    if (typeof t.getElementById !== A && !d) {
                                        var n = t.getElementById(e);
                                        return n && n.parentNode ? [n] : []
                                    }
                                }
                                    ,
                                    i.filter.ID = function(e) {
                                        var t = e.replace(et, tt);
                                        return function(e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }
                            ) : (i.find.ID = function(e, n) {
                                    if (typeof n.getElementById !== A && !d) {
                                        var r = n.getElementById(e);
                                        return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                                    }
                                }
                                    ,
                                    i.filter.ID = function(e) {
                                        var t = e.replace(et, tt);
                                        return function(e) {
                                            var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }
                            ),
                            i.find.TAG = T.tagNameNoComments ? function(e, n) {
                                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                            }
                                : function(e, t) {
                                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        while (n = o[i++]) {
                                            1 === n.nodeType && r.push(n)
                                        }
                                        return r
                                    }
                                    return o
                                }
                            ,
                            i.find.NAME = T.getByName && function(e, n) {
                                    return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
                                }
                            ,
                            i.find.CLASS = T.getByClassName && function(e, n) {
                                    return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
                                }
                            ,
                            g = [],
                            h = [":focus"],
                        (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                            e.innerHTML = "<select><option selected=''></option></select>",
                            e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                            e.querySelectorAll(":checked").length || h.push(":checked")
                        }),
                            at(function(e) {
                                e.innerHTML = "<input type='hidden' i=''/>",
                                e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"),
                                e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    h.push(",.*:")
                            })),
                        (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                            T.disconnectedMatch = m.call(e, "div"),
                                m.call(e, "[s!='']:x"),
                                g.push("!=", R)
                        }),
                            h = RegExp(h.join("|")),
                            g = RegExp(g.join("|")),
                            y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e
                                    , r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            }
                                : function(e, t) {
                                    if (t) {
                                        while (t = t.parentNode) {
                                            if (t === e) {
                                                return !0
                                            }
                                        }
                                    }
                                    return !1
                                }
                            ,
                            v = f.compareDocumentPosition ? function(e, t) {
                                var r;
                                return e === t ? (u = !0,
                                    0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                            }
                                : function(e, t) {
                                    var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                                    if (e === t) {
                                        return u = !0,
                                            0
                                    }
                                    if (!o || !a) {
                                        return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0
                                    }
                                    if (o === a) {
                                        return ut(e, t)
                                    }
                                    r = e;
                                    while (r = r.parentNode) {
                                        s.unshift(r)
                                    }
                                    r = t;
                                    while (r = r.parentNode) {
                                        l.unshift(r)
                                    }
                                    while (s[i] === l[i]) {
                                        i++
                                    }
                                    return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                                }
                            ,
                            u = !1,
                            [0, 0].sort(v),
                            T.detectDuplicates = u,
                            p) : p
                    }
                    ,
                    st.matches = function(e, t) {
                        return st(e, null, null, t)
                    }
                    ,
                    st.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== p && c(e),
                                t = t.replace(Z, "='$1']"),
                                !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) {
                            try {
                                var n = m.call(e, t);
                                if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                                    return n
                                }
                            } catch (r) {}
                        }
                        return st(t, p, null, [e]).length > 0
                    }
                    ,
                    st.contains = function(e, t) {
                        return (e.ownerDocument || e) !== p && c(e),
                            y(e, t)
                    }
                    ,
                    st.attr = function(e, t) {
                        var n;
                        return (e.ownerDocument || e) !== p && c(e),
                        d || (t = t.toLowerCase()),
                            (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
                    }
                    ,
                    st.error = function(e) {
                        throw Error("Syntax error, unrecognized expression: " + e)
                    }
                    ,
                    st.uniqueSort = function(e) {
                        var t, n = [], r = 1, i = 0;
                        if (u = !T.detectDuplicates,
                                e.sort(v),
                                u) {
                            for (; t = e[r]; r++) {
                                t === e[r - 1] && (i = n.push(r))
                            }
                            while (i--) {
                                e.splice(n[i], 1)
                            }
                        }
                        return e
                    }
                ;
                function ut(e, t) {
                    var n = t && e
                        , r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
                    if (r) {
                        return r
                    }
                    if (n) {
                        while (n = n.nextSibling) {
                            if (n === t) {
                                return -1
                            }
                        }
                    }
                    return e ? 1 : -1
                }
                function lt(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }
                function ct(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function pt(e) {
                    return ot(function(t) {
                        return t = +t,
                            ot(function(n, r) {
                                var i, o = e([], n.length, t), a = o.length;
                                while (a--) {
                                    n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                }
                            })
                    })
                }
                o = st.getText = function(e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) {
                                return e.textContent
                            }
                            for (e = e.firstChild; e; e = e.nextSibling) {
                                n += o(e)
                            }
                        } else {
                            if (3 === i || 4 === i) {
                                return e.nodeValue
                            }
                        }
                    } else {
                        for (; t = e[r]; r++) {
                            n += o(t)
                        }
                    }
                    return n
                }
                    ,
                    i = st.selectors = {
                        cacheLength: 50,
                        createPseudo: ot,
                        match: U,
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(et, tt),
                                    e[3] = (e[4] || e[5] || "").replace(et, tt),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]),
                                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]),
                                    e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[5] && e[2];
                                return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                        e[2] = n.slice(0, t)),
                                    e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                return "*" === e ? function() {
                                    return !0
                                }
                                    : (e = e.replace(et, tt).toLowerCase(),
                                            function(t) {
                                                return t.nodeName && t.nodeName.toLowerCase() === e
                                            }
                                    )
                            },
                            CLASS: function(e) {
                                var t = k[e + " "];
                                return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                                        return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                                    })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = st.attr(r, e);
                                    return null == i ? "!=" === t : t ? (i += "",
                                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3)
                                    , a = "last" !== e.slice(-4)
                                    , s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                }
                                    : function(t, n, u) {
                                        var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                                        if (m) {
                                            if (o) {
                                                while (g) {
                                                    p = t;
                                                    while (p = p[g]) {
                                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
                                                            return !1
                                                        }
                                                    }
                                                    h = g = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [a ? m.firstChild : m.lastChild],
                                                a && v) {
                                                c = m[x] || (m[x] = {}),
                                                    l = c[e] || [],
                                                    d = l[0] === N && l[1],
                                                    f = l[0] === N && l[2],
                                                    p = d && m.childNodes[d];
                                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                                    if (1 === p.nodeType && ++f && p === t) {
                                                        c[e] = [N, d, f];
                                                        break
                                                    }
                                                }
                                            } else {
                                                if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) {
                                                    f = l[1]
                                                } else {
                                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]),
                                                            p === t)) {
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                            return f -= i,
                                            f === r || 0 === f % r && f / r >= 0
                                        }
                                    }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                                return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                                        i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                                            var i, o = r(e, t), a = o.length;
                                            while (a--) {
                                                i = M.call(e, o[a]),
                                                    e[i] = !(n[i] = o[a])
                                            }
                                        }) : function(e) {
                                            return r(e, 0, n)
                                        }
                                ) : r
                            }
                        },
                        pseudos: {
                            not: ot(function(e) {
                                var t = []
                                    , n = []
                                    , r = s(e.replace(W, "$1"));
                                return r[x] ? ot(function(e, t, n, i) {
                                    var o, a = r(e, null, i, []), s = e.length;
                                    while (s--) {
                                        (o = a[s]) && (e[s] = !(t[s] = o))
                                    }
                                }) : function(e, i, o) {
                                    return t[0] = e,
                                        r(t, null, o, n),
                                        !n.pop()
                                }
                            }),
                            has: ot(function(e) {
                                return function(t) {
                                    return st(e, t).length > 0
                                }
                            }),
                            contains: ot(function(e) {
                                return function(t) {
                                    return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                                }
                            }),
                            lang: ot(function(e) {
                                return X.test(e || "") || st.error("unsupported lang: " + e),
                                    e = e.replace(et, tt).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) {
                                                return n = n.toLowerCase(),
                                                n === e || 0 === n.indexOf(e + "-")
                                            }
                                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === f
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return e.disabled === !1
                            },
                            disabled: function(e) {
                                return e.disabled === !0
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                e.selected === !0
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling) {
                                    if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                                        return !1
                                    }
                                }
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return G.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: pt(function() {
                                return [0]
                            }),
                            last: pt(function(e, t) {
                                return [t - 1]
                            }),
                            eq: pt(function(e, t, n) {
                                return [0 > n ? n + t : n]
                            }),
                            even: pt(function(e, t) {
                                var n = 0;
                                for (; t > n; n += 2) {
                                    e.push(n)
                                }
                                return e
                            }),
                            odd: pt(function(e, t) {
                                var n = 1;
                                for (; t > n; n += 2) {
                                    e.push(n)
                                }
                                return e
                            }),
                            lt: pt(function(e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; --r >= 0; ) {
                                    e.push(r)
                                }
                                return e
                            }),
                            gt: pt(function(e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; t > ++r; ) {
                                    e.push(r)
                                }
                                return e
                            })
                        }
                    };
                for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) {
                    i.pseudos[n] = lt(n)
                }
                for (n in {
                    submit: !0,
                    reset: !0
                }) {
                    i.pseudos[n] = ct(n)
                }
                function ft(e, t) {
                    var n, r, o, a, s, u, l, c = E[e + " "];
                    if (c) {
                        return t ? 0 : c.slice(0)
                    }
                    s = e,
                        u = [],
                        l = i.preFilter;
                    while (s) {
                        (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                            u.push(o = [])),
                            n = !1,
                        (r = I.exec(s)) && (n = r.shift(),
                            o.push({
                                value: n,
                                type: r[0].replace(W, " ")
                            }),
                            s = s.slice(n.length));
                        for (a in i.filter) {
                            !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(),
                                o.push({
                                    value: n,
                                    type: a,
                                    matches: r
                                }),
                                s = s.slice(n.length))
                        }
                        if (!n) {
                            break
                        }
                    }
                    return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
                }
                function dt(e) {
                    var t = 0
                        , n = e.length
                        , r = "";
                    for (; n > t; t++) {
                        r += e[t].value
                    }
                    return r
                }
                function ht(e, t, n) {
                    var i = t.dir
                        , o = n && "parentNode" === i
                        , a = C++;
                    return t.first ? function(t, n, r) {
                        while (t = t[i]) {
                            if (1 === t.nodeType || o) {
                                return e(t, n, r)
                            }
                        }
                    }
                        : function(t, n, s) {
                            var u, l, c, p = N + " " + a;
                            if (s) {
                                while (t = t[i]) {
                                    if ((1 === t.nodeType || o) && e(t, n, s)) {
                                        return !0
                                    }
                                }
                            } else {
                                while (t = t[i]) {
                                    if (1 === t.nodeType || o) {
                                        if (c = t[x] || (t[x] = {}),
                                            (l = c[i]) && l[0] === p) {
                                            if ((u = l[1]) === !0 || u === r) {
                                                return u === !0
                                            }
                                        } else {
                                            if (l = c[i] = [p],
                                                    l[1] = e(t, n, s) || r,
                                                l[1] === !0) {
                                                return !0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                }
                function gt(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--) {
                            if (!e[i](t, n, r)) {
                                return !1
                            }
                        }
                        return !0
                    }
                        : e[0]
                }
                function mt(e, t, n, r, i) {
                    var o, a = [], s = 0, u = e.length, l = null != t;
                    for (; u > s; s++) {
                        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                        l && t.push(s))
                    }
                    return a
                }
                function yt(e, t, n, r, i, o) {
                    return r && !r[x] && (r = yt(r)),
                    i && !i[x] && (i = yt(i, o)),
                        ot(function(o, a, s, u) {
                            var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m;
                            if (n && n(m, y, s, u),
                                    r) {
                                l = mt(y, d),
                                    r(l, [], s, u),
                                    c = l.length;
                                while (c--) {
                                    (p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                                }
                            }
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        l = [],
                                            c = y.length;
                                        while (c--) {
                                            (p = y[c]) && l.push(m[c] = p)
                                        }
                                        i(null, y = [], l, u)
                                    }
                                    c = y.length;
                                    while (c--) {
                                        (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                                    }
                                }
                            } else {
                                y = mt(y === a ? y.splice(h, y.length) : y),
                                    i ? i(null, a, y, u) : H.apply(a, y)
                            }
                        })
                }
                function vt(e) {
                    var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0, c = ht(function(e) {
                        return e === t
                    }, s, !0), p = ht(function(e) {
                        return M.call(t, e) > -1
                    }, s, !0), f = [function(e, n, r) {
                        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }
                    ];
                    for (; o > u; u++) {
                        if (n = i.relative[e[u].type]) {
                            f = [ht(gt(f), n)]
                        } else {
                            if (n = i.filter[e[u].type].apply(null, e[u].matches),
                                    n[x]) {
                                for (r = ++u; o > r; r++) {
                                    if (i.relative[e[r].type]) {
                                        break
                                    }
                                }
                                return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                            }
                            f.push(n)
                        }
                    }
                    return gt(f)
                }
                function bt(e, t) {
                    var n = 0
                        , o = t.length > 0
                        , a = e.length > 0
                        , s = function(s, u, c, f, d) {
                        var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || 0.1;
                        for (w && (l = u !== p && u,
                            r = n); null != (h = C[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++]) {
                                    if (m(h, u, c)) {
                                        f.push(h);
                                        break
                                    }
                                }
                                w && (N = k,
                                    r = ++n)
                            }
                            o && ((h = !m && h) && v--,
                            s && x.push(h))
                        }
                        if (v += b,
                            o && b !== v) {
                            g = 0;
                            while (m = t[g++]) {
                                m(x, y, u, c)
                            }
                            if (s) {
                                if (v > 0) {
                                    while (b--) {
                                        x[b] || y[b] || (y[b] = L.call(f))
                                    }
                                }
                                y = mt(y)
                            }
                            H.apply(f, y),
                            w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                        }
                        return w && (N = k,
                            l = T),
                            x
                    };
                    return o ? ot(s) : s
                }
                s = st.compile = function(e, t) {
                    var n, r = [], i = [], o = S[e + " "];
                    if (!o) {
                        t || (t = ft(e)),
                            n = t.length;
                        while (n--) {
                            o = vt(t[n]),
                                o[x] ? r.push(o) : i.push(o)
                        }
                        o = S(e, bt(i, r))
                    }
                    return o
                }
                ;
                function xt(e, t, n) {
                    var r = 0
                        , i = t.length;
                    for (; i > r; r++) {
                        st(e, t[r], n)
                    }
                    return n
                }
                function wt(e, t, n, r) {
                    var o, a, u, l, c, p = ft(e);
                    if (!r && 1 === p.length) {
                        if (a = p[0] = p[0].slice(0),
                            a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                            if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0],
                                    !t) {
                                return n
                            }
                            e = e.slice(a.shift().value.length)
                        }
                        o = U.needsContext.test(e) ? 0 : a.length;
                        while (o--) {
                            if (u = a[o],
                                    i.relative[l = u.type]) {
                                break
                            }
                            if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                                if (a.splice(o, 1),
                                        e = r.length && dt(a),
                                        !e) {
                                    return H.apply(n, q.call(r, 0)),
                                        n
                                }
                                break
                            }
                        }
                    }
                    return s(e, p)(r, t, d, n, V.test(e)),
                        n
                }
                i.pseudos.nth = i.pseudos.eq;
                function Tt() {}
                i.filters = Tt.prototype = i.pseudos,
                    i.setFilters = new Tt,
                    c(),
                    st.attr = b.attr,
                    b.find = st,
                    b.expr = st.selectors,
                    b.expr[":"] = b.expr.pseudos,
                    b.unique = st.uniqueSort,
                    b.text = st.getText,
                    b.isXMLDoc = st.isXML,
                    b.contains = st.contains
            }(e);
        var at = /Until$/
            , st = /^(?:parents|prev(?:Until|All))/
            , ut = /^.[^:#\[\.,]*$/
            , lt = b.expr.match.needsContext
            , ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        b.fn.extend({
            find: function(e) {
                var t, n, r, i = this.length;
                if ("string" != typeof e) {
                    return r = this,
                        this.pushStack(b(e).filter(function() {
                            for (t = 0; i > t; t++) {
                                if (b.contains(r[t], this)) {
                                    return !0
                                }
                            }
                        }))
                }
                for (n = [],
                         t = 0; i > t; t++) {
                    b.find(e, this[t], n)
                }
                return n = this.pushStack(i > 1 ? b.unique(n) : n),
                    n.selector = (this.selector ? this.selector + " " : "") + e,
                    n
            },
            has: function(e) {
                var t, n = b(e, this), r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++) {
                        if (b.contains(this, n[t])) {
                            return !0
                        }
                    }
                })
            },
            not: function(e) {
                return this.pushStack(ft(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(ft(this, e, !0))
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
                for (; i > r; r++) {
                    n = this[r];
                    while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                        if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                }
                return this.pushStack(o.length > 1 ? b.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e)
                    , r = b.merge(this.get(), n);
                return this.pushStack(b.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
            b.fn.andSelf = b.fn.addBack;
        function pt(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);return e
        }
        b.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return b.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return b.dir(e, "parentNode", n)
            },
            next: function(e) {
                return pt(e, "nextSibling")
            },
            prev: function(e) {
                return pt(e, "previousSibling")
            },
            nextAll: function(e) {
                return b.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return b.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return b.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return b.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return b.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return b.sibling(e.firstChild)
            },
            contents: function(e) {
                return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
            }
        }, function(e, t) {
            b.fn[e] = function(n, r) {
                var i = b.map(this, t, n);
                return at.test(e) || (r = n),
                r && "string" == typeof r && (i = b.filter(r, i)),
                    i = this.length > 1 && !ct[e] ? b.unique(i) : i,
                this.length > 1 && st.test(e) && (i = i.reverse()),
                    this.pushStack(i)
            }
        }),
            b.extend({
                filter: function(e, t, n) {
                    return n && (e = ":not(" + e + ")"),
                        1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
                },
                dir: function(e, n, r) {
                    var i = []
                        , o = e[n];
                    while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) {
                        1 === o.nodeType && i.push(o),
                            o = o[n]
                    }
                    return i
                },
                sibling: function(e, t) {
                    var n = [];
                    for (; e; e = e.nextSibling) {
                        1 === e.nodeType && e !== t && n.push(e)
                    }
                    return n
                }
            });
        function ft(e, t, n) {
            if (t = t || 0,
                    b.isFunction(t)) {
                return b.grep(e, function(e, r) {
                    var i = !!t.call(e, r, e);
                    return i === n
                })
            }
            if (t.nodeType) {
                return b.grep(e, function(e) {
                    return e === t === n
                })
            }
            if ("string" == typeof t) {
                var r = b.grep(e, function(e) {
                    return 1 === e.nodeType
                });
                if (ut.test(t)) {
                    return b.filter(t, r, !n)
                }
                t = b.filter(t, r)
            }
            return b.grep(e, function(e) {
                return b.inArray(e, t) >= 0 === n
            })
        }
        function dt(e) {
            var t = ht.split("|")
                , n = e.createDocumentFragment();
            if (n.createElement) {
                while (t.length) {
                    n.createElement(t.pop())
                }
            }
            return n
        }
        var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
            , gt = / jQuery\d+="(?:null|\d+)"/g
            , mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
            , yt = /^\s+/
            , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
            , bt = /<([\w:]+)/
            , xt = /<tbody/i
            , wt = /<|&#?\w+;/
            , Tt = /<(?:script|style|link)/i
            , Nt = /^(?:checkbox|radio)$/i
            , Ct = /checked\s*(?:[^=]|=\s*.checked.)/i
            , kt = /^$|\/(?:java|ecma)script/i
            , Et = /^true\/(.*)/
            , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
            , At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
            , jt = dt(o)
            , Dt = jt.appendChild(o.createElement("div"));
        At.optgroup = At.option,
            At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
            At.th = At.td,
            b.fn.extend({
                text: function(e) {
                    return b.access(this, function(e) {
                        return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
                    }, null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if (b.isFunction(e)) {
                        return this.each(function(t) {
                            b(this).wrapAll(e.call(this, t))
                        })
                    }
                    if (this[0]) {
                        var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function() {
                                var e = this;
                                while (e.firstChild && 1 === e.firstChild.nodeType) {
                                    e = e.firstChild
                                }
                                return e
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return b.isFunction(e) ? this.each(function(t) {
                        b(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = b(this)
                            , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = b.isFunction(e);
                    return this.each(function(n) {
                        b(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                    })
                },
                before: function() {
                    return this.domManip(arguments, !1, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, !1, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    var n, r = 0;
                    for (; null != (n = this[r]); r++) {
                        (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)),
                        n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")),
                            n.parentNode.removeChild(n)))
                    }
                    return this
                },
                empty: function() {
                    var e, t = 0;
                    for (; null != (e = this[t]); t++) {
                        1 === e.nodeType && b.cleanData(Ot(e, !1));
                        while (e.firstChild) {
                            e.removeChild(e.firstChild)
                        }
                        e.options && b.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e,
                        t = null == t ? e : t,
                        this.map(function() {
                            return b.clone(this, e, t)
                        })
                },
                html: function(e) {
                    return b.access(this, function(e) {
                        var n = this[0] || {}
                            , r = 0
                            , i = this.length;
                        if (e === t) {
                            return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
                        }
                        if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(vt, "<$1></$2>");
                            try {
                                for (; i > r; r++) {
                                    n = this[r] || {},
                                    1 === n.nodeType && (b.cleanData(Ot(n, !1)),
                                        n.innerHTML = e)
                                }
                                n = 0
                            } catch (o) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function(e) {
                    var t = b.isFunction(e);
                    return t || "string" == typeof e || (e = b(e).not(this).detach()),
                        this.domManip([e], !0, function(e) {
                            var t = this.nextSibling
                                , n = this.parentNode;
                            n && (b(this).remove(),
                                n.insertBefore(e, t))
                        })
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, n, r) {
                    e = f.apply([], e);
                    var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g);
                    if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) {
                        return this.each(function(i) {
                            var o = d.eq(i);
                            m && (e[0] = g.call(this, i, n ? o.html() : t)),
                                o.domManip(e, n, r)
                        })
                    }
                    if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this),
                            i = l.firstChild,
                        1 === l.childNodes.length && (l = i),
                            i)) {
                        for (n = n && b.nodeName(i, "tr"),
                                 s = b.map(Ot(l, "script"), Ht),
                                 a = s.length; p > c; c++) {
                            o = l,
                            c !== h && (o = b.clone(o, !0, !0),
                            a && b.merge(s, Ot(o, "script"))),
                                r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c)
                        }
                        if (a) {
                            for (u = s[s.length - 1].ownerDocument,
                                     b.map(s, qt),
                                     c = 0; a > c; c++) {
                                o = s[c],
                                kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                                    url: o.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: !1,
                                    global: !1,
                                    "throws": !0
                                }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")))
                            }
                        }
                        l = i = null
                    }
                    return this
                }
            });
        function Lt(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }
        function Ht(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type,
                e
        }
        function qt(e) {
            var t = Et.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
                e
        }
        function Mt(e, t) {
            var n, r = 0;
            for (; null != (n = e[r]); r++) {
                b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
            }
        }
        function _t(e, t) {
            if (1 === t.nodeType && b.hasData(e)) {
                var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events;
                if (s) {
                    delete a.handle,
                        a.events = {};
                    for (n in s) {
                        for (r = 0,
                                 i = s[n].length; i > r; r++) {
                            b.event.add(t, n, s[n][r])
                        }
                    }
                }
                a.data && (a.data = b.extend({}, a.data))
            }
        }
        function Ft(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(),
                    !b.support.noCloneEvent && t[b.expando]) {
                    i = b._data(t);
                    for (r in i.events) {
                        b.removeEvent(t, r, i.handle)
                    }
                    t.removeAttribute(b.expando)
                }
                "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
                    qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }
        b.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            b.fn[e] = function(e) {
                var n, r = 0, i = [], o = b(e), a = o.length - 1;
                for (; a >= r; r++) {
                    n = r === a ? this : this.clone(!0),
                        b(o[r])[t](n),
                        d.apply(i, n.get())
                }
                return this.pushStack(i)
            }
        });
        function Ot(e, n) {
            var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
            if (!s) {
                for (s = [],
                         r = e.childNodes || e; null != (o = r[a]); a++) {
                    !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n))
                }
            }
            return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
        }
        function Bt(e) {
            Nt.test(e.type) && (e.defaultChecked = e.checked)
        }
        b.extend({
            clone: function(e, t, n) {
                var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
                if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
                        Dt.removeChild(o = Dt.firstChild)),
                        !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) {
                    for (r = Ot(o),
                             s = Ot(e),
                             a = 0; null != (i = s[a]); ++a) {
                        r[a] && Ft(i, r[a])
                    }
                }
                if (t) {
                    if (n) {
                        for (s = s || Ot(e),
                                 r = r || Ot(o),
                                 a = 0; null != (i = s[a]); a++) {
                            _t(i, r[a])
                        }
                    } else {
                        _t(e, o)
                    }
                }
                return r = Ot(o, "script"),
                r.length > 0 && Mt(r, !u && Ot(e, "script")),
                    r = s = i = null,
                    o
            },
            buildFragment: function(e, t, n, r) {
                var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0;
                for (; p > h; h++) {
                    if (o = e[h],
                        o || 0 === o) {
                        if ("object" === b.type(o)) {
                            b.merge(d, o.nodeType ? [o] : o)
                        } else {
                            if (wt.test(o)) {
                                s = s || f.appendChild(t.createElement("div")),
                                    u = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                                    c = At[u] || At._default,
                                    s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                                    i = c[0];
                                while (i--) {
                                    s = s.lastChild
                                }
                                if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                                        !b.support.tbody) {
                                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                                        i = o && o.childNodes.length;
                                    while (i--) {
                                        b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                                    }
                                }
                                b.merge(d, s.childNodes),
                                    s.textContent = "";
                                while (s.firstChild) {
                                    s.removeChild(s.firstChild)
                                }
                                s = f.lastChild
                            } else {
                                d.push(t.createTextNode(o))
                            }
                        }
                    }
                }
                s && f.removeChild(s),
                b.support.appendChecked || b.grep(Ot(d, "input"), Bt),
                    h = 0;
                while (o = d[h++]) {
                    if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o),
                            s = Ot(f.appendChild(o), "script"),
                        a && Mt(s),
                            n)) {
                        i = 0;
                        while (o = s[i++]) {
                            kt.test(o.type || "") && n.push(o)
                        }
                    }
                }
                return s = null,
                    f
            },
            cleanData: function(e, t) {
                var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special;
                for (; null != (n = e[s]); s++) {
                    if ((t || b.acceptData(n)) && (o = n[u],
                            a = o && l[o])) {
                        if (a.events) {
                            for (r in a.events) {
                                f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle)
                            }
                        }
                        l[o] && (delete l[o],
                            p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null,
                            c.push(o))
                    }
                }
            }
        });
        var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = {
            BODY: "block"
        }, Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Kt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
        function tn(e, t) {
            if (t in e) {
                return t
            }
            var n = t.charAt(0).toUpperCase() + t.slice(1)
                , r = t
                , i = en.length;
            while (i--) {
                if (t = en[i] + n,
                    t in e) {
                    return t
                }
            }
            return r
        }
        function nn(e, t) {
            return e = t || e,
            "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
        }
        function rn(e, t) {
            var n, r, i, o = [], a = 0, s = e.length;
            for (; s > a; a++) {
                r = e[a],
                r.style && (o[a] = b._data(r, "olddisplay"),
                    n = r.style.display,
                    t ? (o[a] || "none" !== n || (r.style.display = ""),
                    "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r),
                        (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))))
            }
            for (a = 0; s > a; a++) {
                r = e[a],
                r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
            }
            return e
        }
        b.fn.extend({
            css: function(e, n) {
                return b.access(this, function(e, n, r) {
                    var i, o, a = {}, s = 0;
                    if (b.isArray(n)) {
                        for (o = Rt(e),
                                 i = n.length; i > s; s++) {
                            a[n[s]] = b.css(e, n[s], !1, o)
                        }
                        return a
                    }
                    return r !== t ? b.style(e, n, r) : b.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return rn(this, !0)
            },
            hide: function() {
                return rn(this)
            },
            toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() {
                    (t ? e : nn(this)) ? b(this).show() : b(this).hide()
                })
            }
        }),
            b.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Wt(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, n, r, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, a, s, u = b.camelCase(n), l = e.style;
                        if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)),
                                s = b.cssHooks[n] || b.cssHooks[u],
                            r === t) {
                            return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : l[n]
                        }
                        if (a = typeof r,
                            "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)),
                                a = "number"),
                                !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"),
                                b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"),
                                s && "set"in s && (r = s.set(e, r, i)) === t))) {
                            try {
                                l[n] = r
                            } catch (c) {}
                        }
                    }
                },
                css: function(e, n, r, i) {
                    var o, a, s, u = b.camelCase(n);
                    return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)),
                        s = b.cssHooks[n] || b.cssHooks[u],
                    s && "get"in s && (a = s.get(e, !0, r)),
                    a === t && (a = Wt(e, n, i)),
                    "normal" === a && n in Kt && (a = Kt[n]),
                        "" === r || r ? (o = parseFloat(a),
                            r === !0 || b.isNumeric(o) ? o || 0 : a) : a
                },
                swap: function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) {
                        a[o] = e.style[o],
                            e.style[o] = t[o]
                    }
                    i = n.apply(e, r || []);
                    for (o in t) {
                        e.style[o] = a[o]
                    }
                    return i
                }
            }),
            e.getComputedStyle ? (Rt = function(t) {
                    return e.getComputedStyle(t, null)
                }
                    ,
                    Wt = function(e, n, r) {
                        var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
                        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)),
                        Yt.test(u) && Ut.test(n) && (i = l.width,
                            o = l.minWidth,
                            a = l.maxWidth,
                            l.minWidth = l.maxWidth = l.width = u,
                            u = s.width,
                            l.width = i,
                            l.minWidth = o,
                            l.maxWidth = a)),
                            u
                    }
            ) : o.documentElement.currentStyle && (Rt = function(e) {
                        return e.currentStyle
                    }
                        ,
                        Wt = function(e, n, r) {
                            var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style;
                            return null == u && l && l[n] && (u = l[n]),
                            Yt.test(u) && !zt.test(n) && (i = l.left,
                                o = e.runtimeStyle,
                                a = o && o.left,
                            a && (o.left = e.currentStyle.left),
                                l.left = "fontSize" === n ? "1em" : u,
                                u = l.pixelLeft + "px",
                                l.left = i,
                            a && (o.left = a)),
                                "" === u ? "auto" : u
                        }
                );
        function on(e, t, n) {
            var r = Vt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function an(e, t, n, r, i) {
            var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
                , a = 0;
            for (; 4 > o; o += 2) {
                "margin" === n && (a += b.css(e, n + Zt[o], !0, i)),
                    r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)),
                    "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i),
                    "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)))
            }
            return a
        }
        function sn(e, t, n) {
            var r = !0
                , i = "width" === t ? e.offsetWidth : e.offsetHeight
                , o = Rt(e)
                , a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = Wt(e, t, o),
                    (0 > i || null == i) && (i = e.style[t]),
                        Yt.test(i)) {
                    return i
                }
                r = a && (b.support.boxSizingReliable || i === e.style[t]),
                    i = parseFloat(i) || 0
            }
            return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }
        function un(e) {
            var t = o
                , n = Gt[e];
            return n || (n = ln(e, t),
            "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
                t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
                t.write("<!doctype html><html><body>"),
                t.close(),
                n = ln(e, t),
                Pt.detach()),
                Gt[e] = n),
                n
        }
        function ln(e, t) {
            var n = b(t.createElement(e)).appendTo(t.body)
                , r = b.css(n[0], "display");
            return n.remove(),
                r
        }
        b.each(["height", "width"], function(e, n) {
            b.cssHooks[n] = {
                get: function(e, r, i) {
                    return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                        return sn(e, n, i)
                    }) : sn(e, n, i) : t
                },
                set: function(e, t, r) {
                    var i = r && Rt(e);
                    return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        b.support.opacity || (b.cssHooks.opacity = {
            get: function(e, t) {
                return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style
                    , r = e.currentStyle
                    , i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                    , o = r && r.filter || n.filter || "";
                n.zoom = 1,
                (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
            }
        }),
            b(function() {
                b.support.reliableMarginRight || (b.cssHooks.marginRight = {
                    get: function(e, n) {
                        return n ? b.swap(e, {
                            display: "inline-block"
                        }, Wt, [e, "marginRight"]) : t
                    }
                }),
                !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
                    b.cssHooks[n] = {
                        get: function(e, r) {
                            return r ? (r = Wt(e, n),
                                Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                        }
                    }
                })
            }),
        b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
                return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
            }
                ,
                b.expr.filters.visible = function(e) {
                    return !b.expr.filters.hidden(e)
                }
        ),
            b.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                b.cssHooks[e + t] = {
                    expand: function(n) {
                        var r = 0
                            , i = {}
                            , o = "string" == typeof n ? n.split(" ") : [n];
                        for (; 4 > r; r++) {
                            i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                        }
                        return i
                    }
                },
                Ut.test(e) || (b.cssHooks[e + t].set = on)
            });
        var cn = /%20/g
            , pn = /\[\]$/
            , fn = /\r?\n/g
            , dn = /^(?:submit|button|image|reset|file)$/i
            , hn = /^(?:input|select|textarea|keygen)/i;
        b.fn.extend({
            serialize: function() {
                return b.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = b.prop(this, "elements");
                    return e ? b.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
                }).map(function(e, t) {
                    var n = b(this).val();
                    return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(fn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(fn, "\r\n")
                    }
                }).get()
            }
        }),
            b.param = function(e, n) {
                var r, i = [], o = function(e, t) {
                    t = b.isFunction(t) ? t() : null == t ? "" : t,
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional),
                    b.isArray(e) || e.jquery && !b.isPlainObject(e)) {
                    b.each(e, function() {
                        o(this.name, this.value)
                    })
                } else {
                    for (r in e) {
                        gn(r, e[r], n, o)
                    }
                }
                return i.join("&").replace(cn, "+")
            }
        ;
        function gn(e, t, n, r) {
            var i;
            if (b.isArray(t)) {
                b.each(t, function(t, i) {
                    n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                })
            } else {
                if (n || "object" !== b.type(t)) {
                    r(e, t)
                } else {
                    for (i in t) {
                        gn(e + "[" + i + "]", t[i], n, r)
                    }
                }
            }
        }
        b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            b.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
            b.fn.hover = function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        ;
        var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
        try {
            yn = a.href
        } catch (Ln) {
            yn = o.createElement("a"),
                yn.href = "",
                yn = yn.href
        }
        mn = En.exec(yn.toLowerCase()) || [];
        function Hn(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                    t = "*");
                var r, i = 0, o = t.toLowerCase().match(w) || [];
                if (b.isFunction(n)) {
                    while (r = o[i++]) {
                        "+" === r[0] ? (r = r.slice(1) || "*",
                            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }
            }
        }
        function qn(e, n, r, i) {
            var o = {}
                , a = e === jn;
            function s(u) {
                var l;
                return o[u] = !0,
                    b.each(e[u] || [], function(e, u) {
                        var c = u(n, r, i);
                        return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c),
                            s(c),
                            !1)
                    }),
                    l
            }
            return s(n.dataTypes[0]) || !o["*"] && s("*")
        }
        function Mn(e, n) {
            var r, i, o = b.ajaxSettings.flatOptions || {};
            for (i in n) {
                n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
            }
            return r && b.extend(!0, e, r),
                e
        }
        b.fn.load = function(e, n, r) {
            if ("string" != typeof e && Sn) {
                return Sn.apply(this, arguments)
            }
            var i, o, a, s = this, u = e.indexOf(" ");
            return u >= 0 && (i = e.slice(u, e.length),
                e = e.slice(0, u)),
                b.isFunction(n) ? (r = n,
                    n = t) : n && "object" == typeof n && (a = "POST"),
            s.length > 0 && b.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments,
                    s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                    s.each(r, o || [e.responseText, t, e])
                }
            ),
                this
        }
            ,
            b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                b.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            b.each(["get", "post"], function(e, n) {
                b[n] = function(e, r, i, o) {
                    return b.isFunction(r) && (o = o || i,
                        i = r,
                        r = t),
                        b.ajax({
                            url: e,
                            type: n,
                            dataType: o,
                            data: r,
                            success: i
                        })
                }
            }),
            b.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: yn,
                    type: "GET",
                    isLocal: Nn.test(mn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Dn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": e.String,
                        "text html": !0,
                        "text json": b.parseJSON,
                        "text xml": b.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
                },
                ajaxPrefilter: Hn(An),
                ajaxTransport: Hn(jn),
                ajax: function(e, n) {
                    "object" == typeof e && (n = e,
                        e = t),
                        n = n || {};
                    var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(), g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!c) {
                                    c = {};
                                    while (t = Tn.exec(a)) {
                                        c[t[1].toLowerCase()] = t[2]
                                    }
                                }
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = v[n] = v[n] || e,
                                y[e] = t),
                                this
                        },
                        overrideMimeType: function(e) {
                            return x || (p.mimeType = e),
                                this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) {
                                if (2 > x) {
                                    for (t in e) {
                                        m[t] = [m[t], e[t]]
                                    }
                                } else {
                                    N.always(e[N.status])
                                }
                            }
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return l && l.abort(t),
                                k(0, t),
                                this
                        }
                    };
                    if (h.promise(N).complete = g.add,
                            N.success = N.done,
                            N.error = N.fail,
                            p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
                            p.type = n.method || n.type || p.method || p.type,
                            p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""],
                        null == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
                            p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))),
                        p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)),
                            qn(An, p, n, N),
                        2 === x) {
                        return N
                    }
                    u = p.global,
                    u && 0 === b.active++ && b.event.trigger("ajaxStart"),
                        p.type = p.type.toUpperCase(),
                        p.hasContent = !Cn.test(p.type),
                        o = p.url,
                    p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
                        delete p.data),
                    p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
                    p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]),
                    b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])),
                    (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType),
                        N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
                    for (i in p.headers) {
                        N.setRequestHeader(i, p.headers[i])
                    }
                    if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) {
                        return N.abort()
                    }
                    T = "abort";
                    for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) {
                        N[i](p[i])
                    }
                    if (l = qn(jn, p, n, N)) {
                        N.readyState = 1,
                        u && d.trigger("ajaxSend", [N, p]),
                        p.async && p.timeout > 0 && (s = setTimeout(function() {
                            N.abort("timeout")
                        }, p.timeout));
                        try {
                            x = 1,
                                l.send(y, k)
                        } catch (C) {
                            if (!(2 > x)) {
                                throw C
                            }
                            k(-1, C)
                        }
                    } else {
                        k(-1, "No Transport")
                    }
                    function k(e, n, r, i) {
                        var c, y, v, w, T, C = n;
                        2 !== x && (x = 2,
                        s && clearTimeout(s),
                            l = t,
                            a = i || "",
                            N.readyState = e > 0 ? 4 : 0,
                        r && (w = _n(p, N, r)),
                            e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"),
                            T && (b.lastModified[o] = T),
                                T = N.getResponseHeader("etag"),
                            T && (b.etag[o] = T)),
                                204 === e ? (c = !0,
                                    C = "nocontent") : 304 === e ? (c = !0,
                                    C = "notmodified") : (c = Fn(p, w),
                                    C = c.state,
                                    y = c.data,
                                    v = c.error,
                                    c = !v)) : (v = C,
                            (e || !C) && (C = "error",
                            0 > e && (e = 0))),
                            N.status = e,
                            N.statusText = (n || C) + "",
                            c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]),
                            N.statusCode(m),
                            m = t,
                        u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]),
                            g.fireWith(f, [N, C]),
                        u && (d.trigger("ajaxComplete", [N, p]),
                        --b.active || b.event.trigger("ajaxStop")))
                    }
                    return N
                },
                getScript: function(e, n) {
                    return b.get(e, t, n, "script")
                },
                getJSON: function(e, t, n) {
                    return b.get(e, t, n, "json")
                }
            });
        function _n(e, n, r) {
            var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
            for (s in c) {
                s in r && (n[c[s]] = r[s])
            }
            while ("*" === l[0]) {
                l.shift(),
                o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
            }
            if (o) {
                for (s in u) {
                    if (u[s] && u[s].test(o)) {
                        l.unshift(s);
                        break
                    }
                }
            }
            if (l[0]in r) {
                a = l[0]
            } else {
                for (s in r) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                        a = s;
                        break
                    }
                    i || (i = s)
                }
                a = a || i
            }
            return a ? (a !== l[0] && l.unshift(a),
                r[a]) : t
        }
        function Fn(e, t) {
            var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    u[1]) {
                for (i in e.converters) {
                    a[i.toLowerCase()] = e.converters[i]
                }
            }
            for (; r = u[++s]; ) {
                if ("*" !== r) {
                    if ("*" !== l && l !== r) {
                        if (i = a[l + " " + r] || a["* " + r],
                                !i) {
                            for (n in a) {
                                if (o = n.split(" "),
                                    o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                    i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0],
                                            u.splice(s--, 0, r));
                                    break
                                }
                            }
                        }
                        if (i !== !0) {
                            if (i && e["throws"]) {
                                t = i(t)
                            } else {
                                try {
                                    t = i(t)
                                } catch (c) {
                                    return {
                                        state: "parsererror",
                                        error: i ? c : "No conversion from " + l + " to " + r
                                    }
                                }
                            }
                        }
                    }
                    l = r
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        b.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return b.globalEval(e),
                        e
                }
            }
        }),
            b.ajaxPrefilter("script", function(e) {
                e.cache === t && (e.cache = !1),
                e.crossDomain && (e.type = "GET",
                    e.global = !1)
            }),
            b.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var n, r = o.head || b("head")[0] || o.documentElement;
                    return {
                        send: function(t, i) {
                            n = o.createElement("script"),
                                n.async = !0,
                            e.scriptCharset && (n.charset = e.scriptCharset),
                                n.src = e.url,
                                n.onload = n.onreadystatechange = function(e, t) {
                                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                                    n.parentNode && n.parentNode.removeChild(n),
                                        n = null,
                                    t || i(200, "success"))
                                }
                                ,
                                r.insertBefore(n, r.firstChild)
                        },
                        abort: function() {
                            n && n.onload(t, !0)
                        }
                    }
                }
            });
        var On = []
            , Bn = /(=)\?(?=&|$)|\?\?/;
        b.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = On.pop() || b.expando + "_" + vn++;
                return this[e] = !0,
                    e
            }
        }),
            b.ajaxPrefilter("json jsonp", function(n, r, i) {
                var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
                return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
                    u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
                    n.converters["script json"] = function() {
                        return s || b.error(o + " was not called"),
                            s[0]
                    }
                    ,
                    n.dataTypes[0] = "json",
                    a = e[o],
                    e[o] = function() {
                        s = arguments
                    }
                    ,
                    i.always(function() {
                        e[o] = a,
                        n[o] && (n.jsonpCallback = r.jsonpCallback,
                            On.push(o)),
                        s && b.isFunction(a) && a(s[0]),
                            s = a = t
                    }),
                    "script") : t
            });
        var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
                var e;
                for (e in Pn) {
                    Pn[e](t, !0)
                }
            }
        ;
        function In() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
        function zn() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }
        b.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && In() || zn()
        }
            : In,
            Rn = b.ajaxSettings.xhr(),
            b.support.cors = !!Rn && "withCredentials"in Rn,
            Rn = b.support.ajax = !!Rn,
        Rn && b.ajaxTransport(function(n) {
            if (!n.crossDomain || b.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, u = n.xhr();
                        if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async),
                                n.xhrFields) {
                            for (s in n.xhrFields) {
                                u[s] = n.xhrFields[s]
                            }
                        }
                        n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                        n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) {
                                u.setRequestHeader(s, i[s])
                            }
                        } catch (l) {}
                        u.send(n.hasContent && n.data || null),
                            r = function(e, i) {
                                var s, l, c, p;
                                try {
                                    if (r && (i || 4 === u.readyState)) {
                                        if (r = t,
                                            a && (u.onreadystatechange = b.noop,
                                            $n && delete Pn[a]),
                                                i) {
                                            4 !== u.readyState && u.abort()
                                        } else {
                                            p = {},
                                                s = u.status,
                                                l = u.getAllResponseHeaders(),
                                            "string" == typeof u.responseText && (p.text = u.responseText);
                                            try {
                                                c = u.statusText
                                            } catch (f) {
                                                c = ""
                                            }
                                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                        }
                                    }
                                } catch (d) {
                                    i || o(-1, d)
                                }
                                p && o(s, c, p, l)
                            }
                            ,
                            n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn,
                            $n && (Pn || (Pn = {},
                                b(e).unload($n)),
                                Pn[a] = r),
                                u.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
        var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
                if (o) {
                    if (n = +o[2],
                            r = o[3] || (b.cssNumber[e] ? "" : "px"),
                        "px" !== r && s) {
                        s = b.css(i.elem, e, !0) || n || 1;
                        do {
                            u = u || ".5",
                                s /= u,
                                b.style(i.elem, e, s + r)
                        } while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r,
                        i.start = s,
                        i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }
            ]
        };
        function Kn() {
            return setTimeout(function() {
                Xn = t
            }),
                Xn = b.now()
        }
        function Zn(e, t) {
            b.each(t, function(t, n) {
                var r = (Qn[t] || []).concat(Qn["*"])
                    , i = 0
                    , o = r.length;
                for (; o > i; i++) {
                    if (r[i].call(e, t, n)) {
                        return
                    }
                }
            })
        }
        function er(e, t, n) {
            var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function() {
                delete u.elem
            }), u = function() {
                if (i) {
                    return !1
                }
                var t = Xn || Kn()
                    , n = Math.max(0, l.startTime + l.duration - t)
                    , r = n / l.duration || 0
                    , o = 1 - r
                    , a = 0
                    , u = l.tweens.length;
                for (; u > a; a++) {
                    l.tweens[a].run(o)
                }
                return s.notifyWith(e, [l, o, n]),
                    1 > o && u ? n : (s.resolveWith(e, [l]),
                        !1)
            }, l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r),
                        r
                },
                stop: function(t) {
                    var n = 0
                        , r = t ? l.tweens.length : 0;
                    if (i) {
                        return this
                    }
                    for (i = !0; r > n; n++) {
                        l.tweens[n].run(1)
                    }
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                        this
                }
            }), c = l.props;
            for (tr(c, l.opts.specialEasing); a > o; o++) {
                if (r = Gn[o].call(l, e, c, l.opts)) {
                    return r
                }
            }
            return Zn(l, c),
            b.isFunction(l.opts.start) && l.opts.start.call(e, l),
                b.fx.timer(b.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function tr(e, t) {
            var n, r, i, o, a;
            for (i in e) {
                if (r = b.camelCase(i),
                        o = t[r],
                        n = e[i],
                    b.isArray(n) && (o = n[1],
                        n = e[i] = n[0]),
                    i !== r && (e[r] = n,
                        delete e[i]),
                        a = b.cssHooks[r],
                    a && "expand"in a) {
                    n = a.expand(n),
                        delete e[r];
                    for (i in n) {
                        i in e || (e[i] = n[i],
                            t[i] = o)
                    }
                } else {
                    t[r] = o
                }
            }
        }
        b.Animation = b.extend(er, {
            tweener: function(e, t) {
                b.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.split(" ");
                var n, r = 0, i = e.length;
                for (; i > r; r++) {
                    n = e[r],
                        Qn[n] = Qn[n] || [],
                        Qn[n].unshift(t)
                }
            },
            prefilter: function(e, t) {
                t ? Gn.unshift(e) : Gn.push(e)
            }
        });
        function nr(e, t, n) {
            var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e);
            n.queue || (c = b._queueHooks(e, "fx"),
            null == c.unqueued && (c.unqueued = 0,
                    p = c.empty.fire,
                    c.empty.fire = function() {
                        c.unqueued || p()
                    }
            ),
                c.unqueued++,
                f.always(function() {
                    f.always(function() {
                        c.unqueued--,
                        b.queue(e, "fx").length || c.empty.fire()
                    })
                })),
            1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
            "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
            n.overflow && (d.overflow = "hidden",
            b.support.shrinkWrapBlocks || f.always(function() {
                d.overflow = n.overflow[0],
                    d.overflowX = n.overflow[1],
                    d.overflowY = n.overflow[2]
            }));
            for (i in t) {
                if (a = t[i],
                        Vn.exec(a)) {
                    if (delete t[i],
                            u = u || "toggle" === a,
                        a === (m ? "hide" : "show")) {
                        continue
                    }
                    g.push(i)
                }
            }
            if (o = g.length) {
                s = b._data(e, "fxshow") || b._data(e, "fxshow", {}),
                "hidden"in s && (m = s.hidden),
                u && (s.hidden = !m),
                    m ? b(e).show() : f.done(function() {
                        b(e).hide()
                    }),
                    f.done(function() {
                        var t;
                        b._removeData(e, "fxshow");
                        for (t in h) {
                            b.style(e, t, h[t])
                        }
                    });
                for (i = 0; o > i; i++) {
                    r = g[i],
                        l = f.createTween(r, m ? s[r] : 0),
                        h[r] = s[r] || b.style(e, r),
                    r in s || (s[r] = l.start,
                    m && (l.end = l.start,
                        l.start = "width" === r || "height" === r ? 1 : 0))
                }
            }
        }
        function rr(e, t, n, r, i) {
            return new rr.prototype.init(e,t,n,r,i)
        }
        b.Tween = rr,
            rr.prototype = {
                constructor: rr,
                init: function(e, t, n, r, i, o) {
                    this.elem = e,
                        this.prop = n,
                        this.easing = i || "swing",
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = r,
                        this.unit = o || (b.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = rr.propHooks[this.prop];
                    return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = rr.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                        this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : rr.propHooks._default.set(this),
                        this
                }
            },
            rr.prototype.init.prototype = rr.prototype,
            rr.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""),
                            t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            },
            rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            b.each(["toggle", "show", "hide"], function(e, t) {
                var n = b.fn[t];
                b.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
                }
            }),
            b.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(nn).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = b.isEmptyObject(e)
                        , o = b.speed(t, n, r)
                        , a = function() {
                        var t = er(this, b.extend({}, e), o);
                        a.finish = function() {
                            t.stop(!0)
                        }
                            ,
                        (i || b._data(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a,
                        i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, n, r) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                            t(r)
                    };
                    return "string" != typeof e && (r = n,
                        n = e,
                        e = t),
                    n && e !== !1 && this.queue(e || "fx", []),
                        this.each(function() {
                            var t = !0
                                , n = null != e && e + "queueHooks"
                                , o = b.timers
                                , a = b._data(this);
                            if (n) {
                                a[n] && a[n].stop && i(a[n])
                            } else {
                                for (n in a) {
                                    a[n] && a[n].stop && Jn.test(n) && i(a[n])
                                }
                            }
                            for (n = o.length; n--; ) {
                                o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                                    t = !1,
                                    o.splice(n, 1))
                            }
                            (t || !r) && b.dequeue(this, e)
                        })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"),
                        this.each(function() {
                            var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0;
                            for (n.finish = !0,
                                     b.queue(this, e, []),
                                 i && i.cur && i.cur.finish && i.cur.finish.call(this),
                                     t = o.length; t--; ) {
                                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                    o.splice(t, 1))
                            }
                            for (t = 0; a > t; t++) {
                                r[t] && r[t].finish && r[t].finish.call(this)
                            }
                            delete n.finish
                        })
                }
            });
        function ir(e, t) {
            var n, r = {
                height: e
            }, i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
                n = Zt[i],
                    r["margin" + n] = r["padding" + n] = e
            }
            return t && (r.opacity = r.width = e),
                r
        }
        b.each({
            slideDown: ir("show"),
            slideUp: ir("hide"),
            slideToggle: ir("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            b.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
            b.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? b.extend({}, e) : {
                    complete: n || !n && t || b.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !b.isFunction(t) && t
                };
                return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default,
                (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                    r.old = r.complete,
                    r.complete = function() {
                        b.isFunction(r.old) && r.old.call(this),
                        r.queue && b.dequeue(this, r.queue)
                    }
                    ,
                    r
            }
            ,
            b.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2
                }
            },
            b.timers = [],
            b.fx = rr.prototype.init,
            b.fx.tick = function() {
                var e, n = b.timers, r = 0;
                for (Xn = b.now(); n.length > r; r++) {
                    e = n[r],
                    e() || n[r] !== e || n.splice(r--, 1)
                }
                n.length || b.fx.stop(),
                    Xn = t
            }
            ,
            b.fx.timer = function(e) {
                e() && b.timers.push(e) && b.fx.start()
            }
            ,
            b.fx.interval = 13,
            b.fx.start = function() {
                Un || (Un = setInterval(b.fx.tick, b.fx.interval))
            }
            ,
            b.fx.stop = function() {
                clearInterval(Un),
                    Un = null
            }
            ,
            b.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            b.fx.step = {},
        b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
                return b.grep(b.timers, function(t) {
                    return e === t.elem
                }).length
            }
        ),
            b.fn.offset = function(e) {
                if (arguments.length) {
                    return e === t ? this : this.each(function(t) {
                        b.offset.setOffset(this, e, t)
                    })
                }
                var n, r, o = {
                    top: 0,
                    left: 0
                }, a = this[0], s = a && a.ownerDocument;
                if (s) {
                    return n = s.documentElement,
                        b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
                            r = or(s),
                            {
                                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                            }) : o
                }
            }
            ,
            b.offset = {
                setOffset: function(e, t, n) {
                    var r = b.css(e, "position");
                    "static" === r && (e.style.position = "relative");
                    var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"), u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, l = {}, c = {}, p, f;
                    u ? (c = i.position(),
                        p = c.top,
                        f = c.left) : (p = parseFloat(a) || 0,
                        f = parseFloat(s) || 0),
                    b.isFunction(t) && (t = t.call(e, n, o)),
                    null != t.top && (l.top = t.top - o.top + p),
                    null != t.left && (l.left = t.left - o.left + f),
                        "using"in t ? t.using.call(e, l) : i.css(l)
                }
            },
            b.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e, t, n = {
                            top: 0,
                            left: 0
                        }, r = this[0];
                        return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                            t = this.offset(),
                        b.nodeName(e[0], "html") || (n = e.offset()),
                            n.top += b.css(e[0], "borderTopWidth", !0),
                            n.left += b.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - n.top - b.css(r, "marginTop", !0),
                                left: t.left - n.left - b.css(r, "marginLeft", !0)
                            }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent || o.documentElement;
                        while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) {
                            e = e.offsetParent
                        }
                        return e || o.documentElement
                    })
                }
            }),
            b.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, n) {
                var r = /Y/.test(n);
                b.fn[e] = function(i) {
                    return b.access(this, function(e, i, o) {
                        var a = or(e);
                        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o,
                            t)
                    }, e, i, arguments.length, null)
                }
            });
        function or(e) {
            return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        b.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            b.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                b.fn[i] = function(i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i)
                        , s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return b.access(this, function(n, r, i) {
                        var o;
                        return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                            Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                    }, n, a ? i : t, a, null)
                }
            })
        }),
            e.jQuery = e.$ = b,
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return b
        })
    }
)(window);
/*! jQuery UI.custom - v1.10.4 - 2014-05-15
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(e, j) {
        function i(c, a) {
            var d, f, b, g = c.nodeName.toLowerCase();
            return "area" === g ? (d = c.parentNode,
                f = d.name,
                c.href && f && "map" === d.nodeName.toLowerCase() ? (b = e("img[usemap=#" + f + "]")[0],
                !!b && h(b)) : !1) : (/input|select|textarea|button|object/.test(g) ? !c.disabled : "a" === g ? c.href || a : a) && h(c)
        }
        function h(a) {
            return e.expr.filters.visible(a) && !e(a).parents().addBack().filter(function() {
                    return "hidden" === e.css(this, "visibility")
                }).length
        }
        var k = 0
            , l = /^ui-id-\d+$/;
        e.ui = e.ui || {},
            e.extend(e.ui, {
                version: "1.10.4",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }),
            e.fn.extend({
                focus: function(a) {
                    return function(b, c) {
                        return "number" == typeof b ? this.each(function() {
                            var d = this;
                            setTimeout(function() {
                                e(d).focus(),
                                c && c.call(d)
                            }, b)
                        }) : a.apply(this, arguments)
                    }
                }(e.fn.focus),
                scrollParent: function() {
                    var a;
                    return a = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                    }).eq(0) : this.parents().filter(function() {
                        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                    }).eq(0),
                        /fixed/.test(this.css("position")) || !a.length ? e(document) : a
                },
                zIndex: function(a) {
                    if (a !== j) {
                        return this.css("zIndex", a)
                    }
                    if (this.length) {
                        for (var d, b, c = e(this[0]); c.length && c[0] !== document; ) {
                            if (d = c.css("position"),
                                ("absolute" === d || "relative" === d || "fixed" === d) && (b = parseInt(c.css("zIndex"), 10),
                                !isNaN(b) && 0 !== b)) {
                                return b
                            }
                            c = c.parent()
                        }
                    }
                    return 0
                },
                uniqueId: function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++k)
                    })
                },
                removeUniqueId: function() {
                    return this.each(function() {
                        l.test(this.id) && e(this).removeAttr("id")
                    })
                }
            }),
            e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function(a) {
                    return function(b) {
                        return !!e.data(b, a)
                    }
                }) : function(b, a, c) {
                    return !!e.data(b, c[3])
                }
                ,
                focusable: function(a) {
                    return i(a, !isNaN(e.attr(a, "tabindex")))
                },
                tabbable: function(a) {
                    var c = e.attr(a, "tabindex")
                        , b = isNaN(c);
                    return (b || c >= 0) && i(a, !b)
                }
            }),
        e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(a, f) {
            function c(n, m, t, r) {
                return e.each(d, function() {
                    m -= parseFloat(e.css(n, "padding" + this)) || 0,
                    t && (m -= parseFloat(e.css(n, "border" + this + "Width")) || 0),
                    r && (m -= parseFloat(e.css(n, "margin" + this)) || 0)
                }),
                    m
            }
            var d = "Width" === f ? ["Left", "Right"] : ["Top", "Bottom"]
                , b = f.toLowerCase()
                , g = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
            e.fn["inner" + f] = function(m) {
                return m === j ? g["inner" + f].call(this) : this.each(function() {
                    e(this).css(b, c(this, m) + "px")
                })
            }
                ,
                e.fn["outer" + f] = function(m, n) {
                    return "number" != typeof m ? g["outer" + f].call(this, m) : this.each(function() {
                        e(this).css(b, c(this, m, !0, n) + "px")
                    })
                }
        }),
        e.fn.addBack || (e.fn.addBack = function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        ),
        e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(a) {
            return function(b) {
                return arguments.length ? a.call(this, e.camelCase(b)) : a.call(this)
            }
        }(e.fn.removeData)),
            e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
            e.support.selectstart = "onselectstart"in document.createElement("div"),
            e.fn.extend({
                disableSelection: function() {
                    return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                        a.preventDefault()
                    })
                },
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                }
            }),
            e.extend(e.ui, {
                plugin: {
                    add: function(b, a, f) {
                        var c, d = e.ui[b].prototype;
                        for (c in f) {
                            d.plugins[c] = d.plugins[c] || [],
                                d.plugins[c].push([a, f[c]])
                        }
                    },
                    call: function(d, b, a) {
                        var f, c = d.plugins[b];
                        if (c && d.element[0].parentNode && 11 !== d.element[0].parentNode.nodeType) {
                            for (f = 0; c.length > f; f++) {
                                d.options[c[f][0]] && c[f][1].apply(d.element, a)
                            }
                        }
                    }
                },
                hasScroll: function(b, a) {
                    if ("hidden" === e(b).css("overflow")) {
                        return !1
                    }
                    var d = a && "left" === a ? "scrollLeft" : "scrollTop"
                        , c = !1;
                    return b[d] > 0 ? !0 : (b[d] = 1,
                        c = b[d] > 0,
                        b[d] = 0,
                        c)
                }
            })
    }
)(jQuery);
(function(e, i) {
        var g = 0
            , j = Array.prototype.slice
            , h = e.cleanData;
        e.cleanData = function(b) {
            for (var d, c = 0; null != (d = b[c]); c++) {
                try {
                    e(d).triggerHandler("remove")
                } catch (a) {}
            }
            h(b)
        }
            ,
            e.widget = function(c, o, f) {
                var l, n, b, r, d = {}, a = c.split(".")[0];
                c = c.split(".")[1],
                    l = a + "-" + c,
                f || (f = o,
                    o = e.Widget),
                    e.expr[":"][l.toLowerCase()] = function(k) {
                        return !!e.data(k, l)
                    }
                    ,
                    e[a] = e[a] || {},
                    n = e[a][c],
                    b = e[a][c] = function(k, m) {
                        return this._createWidget ? (arguments.length && this._createWidget(k, m),
                            i) : new b(k,m)
                    }
                    ,
                    e.extend(b, n, {
                        version: f.version,
                        _proto: e.extend({}, f),
                        _childConstructors: []
                    }),
                    r = new o,
                    r.options = e.widget.extend({}, r.options),
                    e.each(f, function(m, k) {
                        return e.isFunction(k) ? (d[m] = function() {
                            var p = function() {
                                return o.prototype[m].apply(this, arguments)
                            }
                                , q = function(s) {
                                return o.prototype[m].apply(this, s)
                            };
                            return function() {
                                var u, t = this._super, s = this._superApply;
                                return this._super = p,
                                    this._superApply = q,
                                    u = k.apply(this, arguments),
                                    this._super = t,
                                    this._superApply = s,
                                    u
                            }
                        }(),
                            i) : (d[m] = k,
                            i)
                    }),
                    b.prototype = e.widget.extend(r, {
                        widgetEventPrefix: n ? r.widgetEventPrefix || c : c
                    }, d, {
                        constructor: b,
                        namespace: a,
                        widgetName: c,
                        widgetFullName: l
                    }),
                    n ? (e.each(n._childConstructors, function(p, m) {
                        var k = m.prototype;
                        e.widget(k.namespace + "." + k.widgetName, b, m._proto)
                    }),
                        delete n._childConstructors) : o._childConstructors.push(b),
                    e.widget.bridge(c, b)
            }
            ,
            e.widget.extend = function(f) {
                for (var a, b, c = j.call(arguments, 1), d = 0, n = c.length; n > d; d++) {
                    for (a in c[d]) {
                        b = c[d][a],
                        c[d].hasOwnProperty(a) && b !== i && (f[a] = e.isPlainObject(b) ? e.isPlainObject(f[a]) ? e.widget.extend({}, f[a], b) : e.widget.extend({}, b) : b)
                    }
                }
                return f
            }
            ,
            e.widget.bridge = function(c, a) {
                var b = a.prototype.widgetFullName || c;
                e.fn[c] = function(d) {
                    var f = "string" == typeof d
                        , l = j.call(arguments, 1)
                        , n = this;
                    return d = !f && l.length ? e.widget.extend.apply(null, [d].concat(l)) : d,
                        f ? this.each(function() {
                            var k, m = e.data(this, b);
                            return m ? e.isFunction(m[d]) && "_" !== d.charAt(0) ? (k = m[d].apply(m, l),
                                k !== m && k !== i ? (n = k && k.jquery ? n.pushStack(k.get()) : k,
                                    !1) : i) : e.error("no such method '" + d + "' for " + c + " widget instance") : e.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + d + "'")
                        }) : this.each(function() {
                            var k = e.data(this, b);
                            k ? k.option(d || {})._init() : e.data(this, b, new a(d,this))
                        }),
                        n
                }
            }
            ,
            e.Widget = function() {}
            ,
            e.Widget._childConstructors = [],
            e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(a, b) {
                    b = e(b || this.defaultElement || this)[0],
                        this.element = e(b),
                        this.uuid = g++,
                        this.eventNamespace = "." + this.widgetName + this.uuid,
                        this.options = e.widget.extend({}, this.options, this._getCreateOptions(), a),
                        this.bindings = e(),
                        this.hoverable = e(),
                        this.focusable = e(),
                    b !== this && (e.data(b, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function(c) {
                                c.target === b && this.destroy()
                            }
                        }),
                        this.document = e(b.style ? b.ownerDocument : b.document || b),
                        this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                        this._create(),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init()
                },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                        this.bindings.unbind(this.eventNamespace),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus")
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element
                },
                option: function(n, d) {
                    var a, b, c, f = n;
                    if (0 === arguments.length) {
                        return e.widget.extend({}, this.options)
                    }
                    if ("string" == typeof n) {
                        if (f = {},
                                a = n.split("."),
                                n = a.shift(),
                                a.length) {
                            for (b = f[n] = e.widget.extend({}, this.options[n]),
                                     c = 0; a.length - 1 > c; c++) {
                                b[a[c]] = b[a[c]] || {},
                                    b = b[a[c]]
                            }
                            if (n = a.pop(),
                                1 === arguments.length) {
                                return b[n] === i ? null : b[n]
                            }
                            b[n] = d
                        } else {
                            if (1 === arguments.length) {
                                return this.options[n] === i ? null : this.options[n]
                            }
                            f[n] = d
                        }
                    }
                    return this._setOptions(f),
                        this
                },
                _setOptions: function(b) {
                    var a;
                    for (a in b) {
                        this._setOption(a, b[a])
                    }
                    return this
                },
                _setOption: function(b, a) {
                    return this.options[b] = a,
                    "disabled" === b && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!a).attr("aria-disabled", a),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus")),
                        this
                },
                enable: function() {
                    return this._setOption("disabled", !1)
                },
                disable: function() {
                    return this._setOption("disabled", !0)
                },
                _on: function(f, d, a) {
                    var b, c = this;
                    "boolean" != typeof f && (a = d,
                        d = f,
                        f = !1),
                        a ? (d = b = e(d),
                            this.bindings = this.bindings.add(d)) : (a = d,
                            d = this.element,
                            b = this.widget()),
                        e.each(a, function(n, t) {
                            function k() {
                                return f || c.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof t ? c[t] : t).apply(c, arguments) : i
                            }
                            "string" != typeof t && (k.guid = t.guid = t.guid || k.guid || e.guid++);
                            var l = n.match(/^(\w+)\s*(.*)$/)
                                , s = l[1] + c.eventNamespace
                                , u = l[2];
                            u ? b.delegate(u, s, k) : d.bind(s, k)
                        })
                },
                _off: function(b, a) {
                    a = (a || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                        b.unbind(a).undelegate(a)
                },
                _delay: function(c, a) {
                    function d() {
                        return ("string" == typeof c ? b[c] : c).apply(b, arguments)
                    }
                    var b = this;
                    return setTimeout(d, a || 0)
                },
                _hoverable: function(a) {
                    this.hoverable = this.hoverable.add(a),
                        this._on(a, {
                            mouseenter: function(b) {
                                e(b.currentTarget).addClass("ui-state-hover")
                            },
                            mouseleave: function(b) {
                                e(b.currentTarget).removeClass("ui-state-hover")
                            }
                        })
                },
                _focusable: function(a) {
                    this.focusable = this.focusable.add(a),
                        this._on(a, {
                            focusin: function(b) {
                                e(b.currentTarget).addClass("ui-state-focus")
                            },
                            focusout: function(b) {
                                e(b.currentTarget).removeClass("ui-state-focus")
                            }
                        })
                },
                _trigger: function(c, n, f) {
                    var a, b, d = this.options[c];
                    if (f = f || {},
                            n = e.Event(n),
                            n.type = (c === this.widgetEventPrefix ? c : this.widgetEventPrefix + c).toLowerCase(),
                            n.target = this.element[0],
                            b = n.originalEvent) {
                        for (a in b) {
                            a in n || (n[a] = b[a])
                        }
                    }
                    return this.element.trigger(n, f),
                        !(e.isFunction(d) && d.apply(this.element[0], [n].concat(f)) === !1 || n.isDefaultPrevented())
                }
            },
            e.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(a, b) {
                e.Widget.prototype["_" + a] = function(m, c, d) {
                    "string" == typeof c && (c = {
                        effect: c
                    });
                    var f, n = c ? c === !0 || "number" == typeof c ? b : c.effect || b : a;
                    c = c || {},
                    "number" == typeof c && (c = {
                        duration: c
                    }),
                        f = !e.isEmptyObject(c),
                        c.complete = d,
                    c.delay && m.delay(c.delay),
                        f && e.effects && e.effects.effect[n] ? m[a](c) : n !== a && m[n] ? m[n](c.duration, c.easing, d) : m.queue(function(k) {
                            e(this)[a](),
                            d && d.call(m[0]),
                                k()
                        })
                }
            })
    }
)(jQuery);
(function(c) {
        var d = !1;
        c(document).mouseup(function() {
            d = !1
        }),
            c.widget("ui.mouse", {
                version: "1.10.4",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var a = this;
                    this.element.bind("mousedown." + this.widgetName, function(b) {
                        return a._mouseDown(b)
                    }).bind("click." + this.widgetName, function(b) {
                        return !0 === c.data(b.target, a.widgetName + ".preventClickEvent") ? (c.removeData(b.target, a.widgetName + ".preventClickEvent"),
                            b.stopImmediatePropagation(),
                            !1) : undefined
                    }),
                        this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName),
                    this._mouseMoveDelegate && c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(a) {
                    if (!d) {
                        this._mouseStarted && this._mouseUp(a),
                            this._mouseDownEvent = a;
                        var h = this
                            , g = 1 === a.which
                            , b = "string" == typeof this.options.cancel && a.target.nodeName ? c(a.target).closest(this.options.cancel).length : !1;
                        return g && !b && this._mouseCapture(a) ? (this.mouseDelayMet = !this.options.delay,
                        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            h.mouseDelayMet = !0
                        }, this.options.delay)),
                            this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = this._mouseStart(a) !== !1,
                                !this._mouseStarted) ? (a.preventDefault(),
                                !0) : (!0 === c.data(a.target, this.widgetName + ".preventClickEvent") && c.removeData(a.target, this.widgetName + ".preventClickEvent"),
                                this._mouseMoveDelegate = function(e) {
                                    return h._mouseMove(e)
                                }
                                ,
                                this._mouseUpDelegate = function(e) {
                                    return h._mouseUp(e)
                                }
                                ,
                                c(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                                a.preventDefault(),
                                d = !0,
                                !0)) : !0
                    }
                },
                _mouseMove: function(a) {
                    return c.ui.ie && (!document.documentMode || 9 > document.documentMode) && !a.button ? this._mouseUp(a) : this._mouseStarted ? (this._mouseDrag(a),
                        a.preventDefault()) : (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== !1,
                        this._mouseStarted ? this._mouseDrag(a) : this._mouseUp(a)),
                        !this._mouseStarted)
                },
                _mouseUp: function(a) {
                    return c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && (this._mouseStarted = !1,
                    a.target === this._mouseDownEvent.target && c.data(a.target, this.widgetName + ".preventClickEvent", !0),
                        this._mouseStop(a)),
                        !1
                },
                _mouseDistanceMet: function(a) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            })
    }
)(jQuery);
(function(d) {
        var c = 5;
        d.widget("ui.slider", d.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._keySliding = !1,
                    this._mouseSliding = !1,
                    this._animateOff = !0,
                    this._handleIndex = null,
                    this._detectOrientation(),
                    this._mouseInit(),
                    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
                    this._refresh(),
                    this._setOption("disabled", this.options.disabled),
                    this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(),
                    this._createHandles(),
                    this._setupEvents(),
                    this._refreshValue()
            },
            _createHandles: function() {
                var e, k, i = this.options, a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), b = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", l = [];
                for (k = i.values && i.values.length || 1,
                     a.length > k && (a.slice(k).remove(),
                         a = a.slice(0, k)),
                         e = a.length; k > e; e++) {
                    l.push(b)
                }
                this.handles = a.add(d(l.join("")).appendTo(this.element)),
                    this.handle = this.handles.eq(0),
                    this.handles.each(function(f) {
                        d(this).data("ui-slider-handle-index", f)
                    })
            },
            _createRange: function() {
                var a = this.options
                    , b = "";
                a.range ? (a.range === !0 && (a.values ? a.values.length && 2 !== a.values.length ? a.values = [a.values[0], a.values[0]] : d.isArray(a.values) && (a.values = a.values.slice(0)) : a.values = [this._valueMin(), this._valueMin()]),
                    this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }) : (this.range = d("<div></div>").appendTo(this.element),
                        b = "ui-slider-range ui-widget-header ui-corner-all"),
                    this.range.addClass(b + ("min" === a.range || "max" === a.range ? " ui-slider-range-" + a.range : ""))) : (this.range && this.range.remove(),
                    this.range = null)
            },
            _setupEvents: function() {
                var a = this.handles.add(this.range).filter("a");
                this._off(a),
                    this._on(a, this._handleEvents),
                    this._hoverable(a),
                    this._focusable(a)
            },
            _destroy: function() {
                this.handles.remove(),
                this.range && this.range.remove(),
                    this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
                    this._mouseDestroy()
            },
            _mouseCapture: function(b) {
                var h, r, l, n, u, o, e, i, a = this, s = this.options;
                return s.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                },
                    this.elementOffset = this.element.offset(),
                    h = {
                        x: b.pageX,
                        y: b.pageY
                    },
                    r = this._normValueFromMouse(h),
                    l = this._valueMax() - this._valueMin() + 1,
                    this.handles.each(function(f) {
                        var g = Math.abs(r - a.values(f));
                        (l > g || l === g && (f === a._lastChangedValue || a.values(f) === s.min)) && (l = g,
                            n = d(this),
                            u = f)
                    }),
                    o = this._start(b, u),
                    o === !1 ? !1 : (this._mouseSliding = !0,
                        this._handleIndex = u,
                        n.addClass("ui-state-active").focus(),
                        e = n.offset(),
                        i = !d(b.target).parents().addBack().is(".ui-slider-handle"),
                        this._clickOffset = i ? {
                            left: 0,
                            top: 0
                        } : {
                            left: b.pageX - e.left - n.width() / 2,
                            top: b.pageY - e.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
                        },
                    this.handles.hasClass("ui-state-hover") || this._slide(b, u, r),
                        this._animateOff = !0,
                        !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(b) {
                var a = {
                    x: b.pageX,
                    y: b.pageY
                }
                    , e = this._normValueFromMouse(a);
                return this._slide(b, this._handleIndex, e),
                    !1
            },
            _mouseStop: function(a) {
                return this.handles.removeClass("ui-state-active"),
                    this._mouseSliding = !1,
                    this._stop(a, this._handleIndex),
                    this._change(a, this._handleIndex),
                    this._handleIndex = null,
                    this._clickOffset = null,
                    this._animateOff = !1,
                    !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(k) {
                var e, l, i, a, b;
                return "horizontal" === this.orientation ? (e = this.elementSize.width,
                    l = k.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
                    l = k.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                    i = l / e,
                i > 1 && (i = 1),
                0 > i && (i = 0),
                "vertical" === this.orientation && (i = 1 - i),
                    a = this._valueMax() - this._valueMin(),
                    b = this._valueMin() + i * a,
                    this._trimAlignValue(b)
            },
            _start: function(b, a) {
                var e = {
                    handle: this.handles[a],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (e.value = this.values(a),
                    e.values = this.values()),
                    this._trigger("start", b, e)
            },
            _slide: function(k, e, l) {
                var i, a, b;
                this.options.values && this.options.values.length ? (i = this.values(e ? 0 : 1),
                2 === this.options.values.length && this.options.range === !0 && (0 === e && l > i || 1 === e && i > l) && (l = i),
                l !== this.values(e) && (a = this.values(),
                    a[e] = l,
                    b = this._trigger("slide", k, {
                        handle: this.handles[e],
                        value: l,
                        values: a
                    }),
                    i = this.values(e ? 0 : 1),
                b !== !1 && this.values(e, l))) : l !== this.value() && (b = this._trigger("slide", k, {
                        handle: this.handles[e],
                        value: l
                    }),
                    b !== !1 && this.value(l))
            },
            _stop: function(b, a) {
                var e = {
                    handle: this.handles[a],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (e.value = this.values(a),
                    e.values = this.values()),
                    this._trigger("stop", b, e)
            },
            _change: function(b, a) {
                if (!this._keySliding && !this._mouseSliding) {
                    var e = {
                        handle: this.handles[a],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (e.value = this.values(a),
                        e.values = this.values()),
                        this._lastChangedValue = a,
                        this._trigger("change", b, e)
                }
            },
            value: function(a) {
                return arguments.length ? (this.options.value = this._trimAlignValue(a),
                    this._refreshValue(),
                    this._change(null, 0),
                    undefined) : this._value()
            },
            values: function(e, j) {
                var i, a, b;
                if (arguments.length > 1) {
                    return this.options.values[e] = this._trimAlignValue(j),
                        this._refreshValue(),
                        this._change(null, e),
                        undefined
                }
                if (!arguments.length) {
                    return this._values()
                }
                if (!d.isArray(arguments[0])) {
                    return this.options.values && this.options.values.length ? this._values(e) : this.value()
                }
                for (i = this.options.values,
                         a = arguments[0],
                         b = 0; i.length > b; b += 1) {
                    i[b] = this._trimAlignValue(a[b]),
                        this._change(null, b)
                }
                this._refreshValue()
            },
            _setOption: function(b, h) {
                var e, a = 0;
                switch ("range" === b && this.options.range === !0 && ("min" === h ? (this.options.value = this._values(0),
                    this.options.values = null) : "max" === h && (this.options.value = this._values(this.options.values.length - 1),
                        this.options.values = null)),
                d.isArray(this.options.values) && (a = this.options.values.length),
                    d.Widget.prototype._setOption.apply(this, arguments),
                    b) {
                    case "orientation":
                        this._detectOrientation(),
                            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                            this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._change(null, 0),
                            this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0,
                                 this._refreshValue(),
                                 e = 0; a > e; e += 1) {
                            this._change(null, e)
                        }
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0,
                            this._refresh(),
                            this._animateOff = !1
                }
            },
            _value: function() {
                var a = this.options.value;
                return a = this._trimAlignValue(a)
            },
            _values: function(e) {
                var a, h, b;
                if (arguments.length) {
                    return a = this.options.values[e],
                        a = this._trimAlignValue(a)
                }
                if (this.options.values && this.options.values.length) {
                    for (h = this.options.values.slice(),
                             b = 0; h.length > b; b += 1) {
                        h[b] = this._trimAlignValue(h[b])
                    }
                    return h
                }
                return []
            },
            _trimAlignValue: function(e) {
                if (this._valueMin() >= e) {
                    return this._valueMin()
                }
                if (e >= this._valueMax()) {
                    return this._valueMax()
                }
                var a = this.options.step > 0 ? this.options.step : 1
                    , h = (e - this._valueMin()) % a
                    , b = e - h;
                return 2 * Math.abs(h) >= a && (b += h > 0 ? a : -a),
                    parseFloat(b.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var b, h, r, l, n, s = this.options.range, o = this.options, e = this, i = this._animateOff ? !1 : o.animate, a = {};
                this.options.values && this.options.values.length ? this.handles.each(function(f) {
                    h = 100 * ((e.values(f) - e._valueMin()) / (e._valueMax() - e._valueMin())),
                        a["horizontal" === e.orientation ? "left" : "bottom"] = h + "%",
                        d(this).stop(1, 1)[i ? "animate" : "css"](a, o.animate),
                    e.options.range === !0 && ("horizontal" === e.orientation ? (0 === f && e.range.stop(1, 1)[i ? "animate" : "css"]({
                        left: h + "%"
                    }, o.animate),
                    1 === f && e.range[i ? "animate" : "css"]({
                        width: h - b + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    })) : (0 === f && e.range.stop(1, 1)[i ? "animate" : "css"]({
                        bottom: h + "%"
                    }, o.animate),
                    1 === f && e.range[i ? "animate" : "css"]({
                        height: h - b + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    }))),
                        b = h
                }) : (r = this.value(),
                    l = this._valueMin(),
                    n = this._valueMax(),
                    h = n !== l ? 100 * ((r - l) / (n - l)) : 0,
                    a["horizontal" === this.orientation ? "left" : "bottom"] = h + "%",
                    this.handle.stop(1, 1)[i ? "animate" : "css"](a, o.animate),
                "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[i ? "animate" : "css"]({
                    width: h + "%"
                }, o.animate),
                "max" === s && "horizontal" === this.orientation && this.range[i ? "animate" : "css"]({
                    width: 100 - h + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }),
                "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[i ? "animate" : "css"]({
                    height: h + "%"
                }, o.animate),
                "max" === s && "vertical" === this.orientation && this.range[i ? "animate" : "css"]({
                    height: 100 - h + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))
            },
            _handleEvents: {
                keydown: function(k) {
                    var j, a, b, l, i = d(k.target).data("ui-slider-handle-index");
                    switch (k.keyCode) {
                        case d.ui.keyCode.HOME:
                        case d.ui.keyCode.END:
                        case d.ui.keyCode.PAGE_UP:
                        case d.ui.keyCode.PAGE_DOWN:
                        case d.ui.keyCode.UP:
                        case d.ui.keyCode.RIGHT:
                        case d.ui.keyCode.DOWN:
                        case d.ui.keyCode.LEFT:
                            if (k.preventDefault(),
                                !this._keySliding && (this._keySliding = !0,
                                    d(k.target).addClass("ui-state-active"),
                                    j = this._start(k, i),
                                j === !1)) {
                                return
                            }
                    }
                    switch (l = this.options.step,
                        a = b = this.options.values && this.options.values.length ? this.values(i) : this.value(),
                        k.keyCode) {
                        case d.ui.keyCode.HOME:
                            b = this._valueMin();
                            break;
                        case d.ui.keyCode.END:
                            b = this._valueMax();
                            break;
                        case d.ui.keyCode.PAGE_UP:
                            b = this._trimAlignValue(a + (this._valueMax() - this._valueMin()) / c);
                            break;
                        case d.ui.keyCode.PAGE_DOWN:
                            b = this._trimAlignValue(a - (this._valueMax() - this._valueMin()) / c);
                            break;
                        case d.ui.keyCode.UP:
                        case d.ui.keyCode.RIGHT:
                            if (a === this._valueMax()) {
                                return
                            }
                            b = this._trimAlignValue(a + l);
                            break;
                        case d.ui.keyCode.DOWN:
                        case d.ui.keyCode.LEFT:
                            if (a === this._valueMin()) {
                                return
                            }
                            b = this._trimAlignValue(a - l)
                    }
                    this._slide(k, i, b)
                },
                click: function(a) {
                    a.preventDefault()
                },
                keyup: function(a) {
                    var b = d(a.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1,
                        this._stop(a, b),
                        this._change(a, b),
                        d(a.target).removeClass("ui-state-active"))
                }
            }
        })
    }
)(jQuery);
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) {
    throw new Error("Bootstrap's JavaScript requires jQuery")
}
+function(a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
    }
}(jQuery),
    +function(b) {
        function c(g) {
            return this.each(function() {
                var e = b(this)
                    , h = e.data("bs.alert");
                h || e.data("bs.alert", h = new d(this)),
                "string" == typeof g && h[g].call(e)
            })
        }
        var a = '[data-dismiss="alert"]'
            , d = function(g) {
            b(g).on("click", a, this.close)
        };
        d.VERSION = "3.3.5",
            d.TRANSITION_DURATION = 150,
            d.prototype.close = function(k) {
                function h() {
                    g.detach().trigger("closed.bs.alert").remove()
                }
                var l = b(this)
                    , j = l.attr("data-target");
                j || (j = l.attr("href"),
                    j = j && j.replace(/.*(?=#[^\s]*$)/, ""));
                var g = b(j);
                k && k.preventDefault(),
                g.length || (g = l.closest(".alert")),
                    g.trigger(k = b.Event("close.bs.alert")),
                k.isDefaultPrevented() || (g.removeClass("in"),
                    b.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", h).emulateTransitionEnd(d.TRANSITION_DURATION) : h())
            }
        ;
        var f = b.fn.alert;
        b.fn.alert = c,
            b.fn.alert.Constructor = d,
            b.fn.alert.noConflict = function() {
                return b.fn.alert = f,
                    this
            }
            ,
            b(document).on("click.bs.alert.data-api", a, d.prototype.close)
    }(jQuery),
    +function(b) {
        function c(f) {
            return this.each(function() {
                var g = b(this)
                    , h = g.data("bs.button")
                    , e = "object" == typeof f && f;
                h || g.data("bs.button", h = new a(this,e)),
                    "toggle" == f ? h.toggle() : f && h.setState(f)
            })
        }
        var a = function(f, g) {
            this.$element = b(f),
                this.options = b.extend({}, a.DEFAULTS, g),
                this.isLoading = !1
        };
        a.VERSION = "3.3.5",
            a.DEFAULTS = {
                loadingText: "loading..."
            },
            a.prototype.setState = function(h) {
                var f = "disabled"
                    , j = this.$element
                    , k = j.is("input") ? "val" : "html"
                    , g = j.data();
                h += "Text",
                null == g.resetText && j.data("resetText", j[k]()),
                    setTimeout(b.proxy(function() {
                        j[k](null == g[h] ? this.options[h] : g[h]),
                            "loadingText" == h ? (this.isLoading = !0,
                                j.addClass(f).attr(f, f)) : this.isLoading && (this.isLoading = !1,
                                    j.removeClass(f).removeAttr(f))
                    }, this), 0)
            }
            ,
            a.prototype.toggle = function() {
                var g = !0
                    , h = this.$element.closest('[data-toggle="buttons"]');
                if (h.length) {
                    var f = this.$element.find("input");
                    "radio" == f.prop("type") ? (f.prop("checked") && (g = !1),
                        h.find(".active").removeClass("active"),
                        this.$element.addClass("active")) : "checkbox" == f.prop("type") && (f.prop("checked") !== this.$element.hasClass("active") && (g = !1),
                            this.$element.toggleClass("active")),
                        f.prop("checked", this.$element.hasClass("active")),
                    g && f.trigger("change")
                } else {
                    this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                        this.$element.toggleClass("active")
                }
            }
        ;
        var d = b.fn.button;
        b.fn.button = c,
            b.fn.button.Constructor = a,
            b.fn.button.noConflict = function() {
                return b.fn.button = d,
                    this
            }
            ,
            b(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
                var f = b(e.target);
                f.hasClass("btn") || (f = f.closest(".btn")),
                    c.call(f, "toggle"),
                b(e.target).is('input[type="radio"]') || b(e.target).is('input[type="checkbox"]') || e.preventDefault()
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(f) {
                b(f.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(f.type))
            })
    }(jQuery),
    +function(b) {
        function c(g) {
            return this.each(function() {
                var i = b(this)
                    , j = i.data("bs.carousel")
                    , h = b.extend({}, a.DEFAULTS, i.data(), "object" == typeof g && g)
                    , e = "string" == typeof g ? g : h.slide;
                j || i.data("bs.carousel", j = new a(this,h)),
                    "number" == typeof g ? j.to(g) : e ? j[e]() : h.interval && j.pause().cycle()
            })
        }
        var a = function(h, g) {
            this.$element = b(h),
                this.$indicators = this.$element.find(".carousel-indicators"),
                this.options = g,
                this.paused = null,
                this.sliding = null,
                this.interval = null,
                this.$active = null,
                this.$items = null,
            this.options.keyboard && this.$element.on("keydown.bs.carousel", b.proxy(this.keydown, this)),
            "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", b.proxy(this.pause, this)).on("mouseleave.bs.carousel", b.proxy(this.cycle, this))
        };
        a.VERSION = "3.3.5",
            a.TRANSITION_DURATION = 600,
            a.DEFAULTS = {
                interval: 5000,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            },
            a.prototype.keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) {
                    switch (e.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return
                    }
                    e.preventDefault()
                }
            }
            ,
            a.prototype.cycle = function(g) {
                return g || (this.paused = !1),
                this.interval && clearInterval(this.interval),
                this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval)),
                    this
            }
            ,
            a.prototype.getItemIndex = function(e) {
                return this.$items = e.parent().children(".item"),
                    this.$items.index(e || this.$active)
            }
            ,
            a.prototype.getItemForDirection = function(h, k) {
                var g = this.getItemIndex(k)
                    , l = "prev" == h && 0 === g || "next" == h && g == this.$items.length - 1;
                if (l && !this.options.wrap) {
                    return k
                }
                var m = "prev" == h ? -1 : 1
                    , j = (g + m) % this.$items.length;
                return this.$items.eq(j)
            }
            ,
            a.prototype.to = function(h) {
                var j = this
                    , g = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                return h > this.$items.length - 1 || 0 > h ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                    j.to(h)
                }) : g == h ? this.pause().cycle() : this.slide(h > g ? "next" : "prev", this.$items.eq(h))
            }
            ,
            a.prototype.pause = function(g) {
                return g || (this.paused = !0),
                this.$element.find(".next, .prev").length && b.support.transition && (this.$element.trigger(b.support.transition.end),
                    this.cycle(!0)),
                    this.interval = clearInterval(this.interval),
                    this
            }
            ,
            a.prototype.next = function() {
                return this.sliding ? void 0 : this.slide("next")
            }
            ,
            a.prototype.prev = function() {
                return this.sliding ? void 0 : this.slide("prev")
            }
            ,
            a.prototype.slide = function(t, j) {
                var k = this.$element.find(".item.active")
                    , x = j || this.getItemForDirection(t, k)
                    , w = this.interval
                    , g = "next" == t ? "left" : "right"
                    , m = this;
                if (x.hasClass("active")) {
                    return this.sliding = !1
                }
                var q = x[0]
                    , u = b.Event("slide.bs.carousel", {
                    relatedTarget: q,
                    direction: g
                });
                if (this.$element.trigger(u),
                        !u.isDefaultPrevented()) {
                    if (this.sliding = !0,
                        w && this.pause(),
                            this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var i = b(this.$indicators.children()[this.getItemIndex(x)]);
                        i && i.addClass("active")
                    }
                    var v = b.Event("slid.bs.carousel", {
                        relatedTarget: q,
                        direction: g
                    });
                    return b.support.transition && this.$element.hasClass("slide") ? (x.addClass(t),
                        x[0].offsetWidth,
                        k.addClass(g),
                        x.addClass(g),
                        k.one("bsTransitionEnd", function() {
                            x.removeClass([t, g].join(" ")).addClass("active"),
                                k.removeClass(["active", g].join(" ")),
                                m.sliding = !1,
                                setTimeout(function() {
                                    m.$element.trigger(v)
                                }, 0)
                        }).emulateTransitionEnd(a.TRANSITION_DURATION)) : (k.removeClass("active"),
                        x.addClass("active"),
                        this.sliding = !1,
                        this.$element.trigger(v)),
                    w && this.cycle(),
                        this
                }
            }
        ;
        var d = b.fn.carousel;
        b.fn.carousel = c,
            b.fn.carousel.Constructor = a,
            b.fn.carousel.noConflict = function() {
                return b.fn.carousel = d,
                    this
            }
        ;
        var f = function(g) {
            var k, l = b(this), h = b(l.attr("data-target") || (k = l.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, ""));
            if (h.hasClass("carousel")) {
                var e = b.extend({}, h.data(), l.data())
                    , j = l.attr("data-slide-to");
                j && (e.interval = !1),
                    c.call(h, e),
                j && h.data("bs.carousel").to(j),
                    g.preventDefault()
            }
        };
        b(document).on("click.bs.carousel.data-api", "[data-slide]", f).on("click.bs.carousel.data-api", "[data-slide-to]", f),
            b(window).on("load", function() {
                b('[data-ride="carousel"]').each(function() {
                    var e = b(this);
                    c.call(e, e.data())
                })
            })
    }(jQuery),
    +function(d) {
        function h(l) {
            var a = l.attr("data-target");
            a || (a = l.attr("href"),
                a = a && /#[A-Za-z]/.test(a) && a.replace(/.*(?=#[^\s]*$)/, ""));
            var m = a && d(a);
            return m && m.length ? m : l.parent()
        }
        function c(a) {
            a && 3 === a.which || (d(k).remove(),
                d(f).each(function() {
                    var i = d(this)
                        , l = h(i)
                        , e = {
                        relatedTarget: this
                    };
                    l.hasClass("open") && (a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && d.contains(l[0], a.target) || (l.trigger(a = d.Event("hide.bs.dropdown", e)),
                    a.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
                        l.removeClass("open").trigger("hidden.bs.dropdown", e))))
                }))
        }
        function j(a) {
            return this.each(function() {
                var e = d(this)
                    , l = e.data("bs.dropdown");
                l || e.data("bs.dropdown", l = new b(this)),
                "string" == typeof a && l[a].call(e)
            })
        }
        var k = ".dropdown-backdrop"
            , f = '[data-toggle="dropdown"]'
            , b = function(a) {
            d(a).on("click.bs.dropdown", this.toggle)
        };
        b.VERSION = "3.3.5",
            b.prototype.toggle = function(m) {
                var p = d(this);
                if (!p.is(".disabled, :disabled")) {
                    var i = h(p)
                        , e = i.hasClass("open");
                    if (c(),
                            !e) {
                        "ontouchstart"in document.documentElement && !i.closest(".navbar-nav").length && d(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(d(this)).on("click", c);
                        var l = {
                            relatedTarget: this
                        };
                        if (i.trigger(m = d.Event("show.bs.dropdown", l)),
                                m.isDefaultPrevented()) {
                            return
                        }
                        p.trigger("focus").attr("aria-expanded", "true"),
                            i.toggleClass("open").trigger("shown.bs.dropdown", l)
                    }
                    return !1
                }
            }
            ,
            b.prototype.keydown = function(p) {
                if (/(38|40|27|32)/.test(p.which) && !/input|textarea/i.test(p.target.tagName)) {
                    var t = d(this);
                    if (p.preventDefault(),
                            p.stopPropagation(),
                            !t.is(".disabled, :disabled")) {
                        var u = h(t)
                            , m = u.hasClass("open");
                        if (!m && 27 != p.which || m && 27 == p.which) {
                            return 27 == p.which && u.find(f).trigger("focus"),
                                t.trigger("click")
                        }
                        var s = " li:not(.disabled):visible a"
                            , e = u.find(".dropdown-menu" + s);
                        if (e.length) {
                            var q = e.index(p.target);
                            38 == p.which && q > 0 && q--,
                            40 == p.which && q < e.length - 1 && q++,
                            ~q || (q = 0),
                                e.eq(q).trigger("focus")
                        }
                    }
                }
            }
        ;
        var g = d.fn.dropdown;
        d.fn.dropdown = j,
            d.fn.dropdown.Constructor = b,
            d.fn.dropdown.noConflict = function() {
                return d.fn.dropdown = g,
                    this
            }
            ,
            d(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
                a.stopPropagation()
            }).on("click.bs.dropdown.data-api", f, b.prototype.toggle).on("keydown.bs.dropdown.data-api", f, b.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", b.prototype.keydown)
    }(jQuery),
    +function(b) {
        function c(f, g) {
            return this.each(function() {
                var i = b(this)
                    , h = i.data("bs.modal")
                    , e = b.extend({}, a.DEFAULTS, i.data(), "object" == typeof f && f);
                h || i.data("bs.modal", h = new a(this,e)),
                    "string" == typeof f ? h[f](g) : e.show && h.show(g)
            })
        }
        var a = function(g, f) {
            this.options = f,
                this.$body = b(document.body),
                this.$element = b(g),
                this.$dialog = this.$element.find(".modal-dialog"),
                this.$backdrop = null,
                this.isShown = null,
                this.originalBodyPad = null,
                this.scrollbarWidth = 0,
                this.ignoreBackdropClick = !1,
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, b.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        a.VERSION = "3.3.5",
            a.TRANSITION_DURATION = 300,
            a.BACKDROP_TRANSITION_DURATION = 150,
            a.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            },
            a.prototype.toggle = function(e) {
                return this.isShown ? this.hide() : this.show(e)
            }
            ,
            a.prototype.show = function(f) {
                var g = this
                    , h = b.Event("show.bs.modal", {
                    relatedTarget: f
                });
                this.$element.trigger(h),
                this.isShown || h.isDefaultPrevented() || (this.isShown = !0,
                    this.checkScrollbar(),
                    this.setScrollbar(),
                    this.$body.addClass("modal-open"),
                    this.escape(),
                    this.resize(),
                    this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', b.proxy(this.hide, this)),
                    this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                        g.$element.one("mouseup.dismiss.bs.modal", function(i) {
                            b(i.target).is(g.$element) && (g.ignoreBackdropClick = !0)
                        })
                    }),
                    this.backdrop(function() {
                        var i = b.support.transition && g.$element.hasClass("fade");
                        g.$element.parent().length || g.$element.appendTo(g.$body),
                            g.$element.show().scrollTop(0),
                            g.adjustDialog(),
                        i && g.$element[0].offsetWidth,
                            g.$element.addClass("in"),
                            g.enforceFocus();
                        var e = b.Event("shown.bs.modal", {
                            relatedTarget: f
                        });
                        i ? g.$dialog.one("bsTransitionEnd", function() {
                            g.$element.trigger("focus").trigger(e)
                        }).emulateTransitionEnd(a.TRANSITION_DURATION) : g.$element.trigger("focus").trigger(e)
                    }))
            }
            ,
            a.prototype.hide = function(f) {
                f && f.preventDefault(),
                    f = b.Event("hide.bs.modal"),
                    this.$element.trigger(f),
                this.isShown && !f.isDefaultPrevented() && (this.isShown = !1,
                    this.escape(),
                    this.resize(),
                    b(document).off("focusin.bs.modal"),
                    this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                    this.$dialog.off("mousedown.dismiss.bs.modal"),
                    b.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", b.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
            }
            ,
            a.prototype.enforceFocus = function() {
                b(document).off("focusin.bs.modal").on("focusin.bs.modal", b.proxy(function(e) {
                    this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
                }, this))
            }
            ,
            a.prototype.escape = function() {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", b.proxy(function(e) {
                    27 == e.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }
            ,
            a.prototype.resize = function() {
                this.isShown ? b(window).on("resize.bs.modal", b.proxy(this.handleUpdate, this)) : b(window).off("resize.bs.modal")
            }
            ,
            a.prototype.hideModal = function() {
                var e = this;
                this.$element.hide(),
                    this.backdrop(function() {
                        e.$body.removeClass("modal-open"),
                            e.resetAdjustments(),
                            e.resetScrollbar(),
                            e.$element.trigger("hidden.bs.modal")
                    })
            }
            ,
            a.prototype.removeBackdrop = function() {
                this.$backdrop && this.$backdrop.remove(),
                    this.$backdrop = null
            }
            ,
            a.prototype.backdrop = function(h) {
                var i = this
                    , j = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var g = b.support.transition && j;
                    if (this.$backdrop = b(document.createElement("div")).addClass("modal-backdrop " + j).appendTo(this.$body),
                            this.$element.on("click.dismiss.bs.modal", b.proxy(function(e) {
                                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                            }, this)),
                        g && this.$backdrop[0].offsetWidth,
                            this.$backdrop.addClass("in"),
                            !h) {
                        return
                    }
                    g ? this.$backdrop.one("bsTransitionEnd", h).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : h()
                } else {
                    if (!this.isShown && this.$backdrop) {
                        this.$backdrop.removeClass("in");
                        var f = function() {
                            i.removeBackdrop(),
                            h && h()
                        };
                        b.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : f()
                    } else {
                        h && h()
                    }
                }
            }
            ,
            a.prototype.handleUpdate = function() {
                this.adjustDialog()
            }
            ,
            a.prototype.adjustDialog = function() {
                var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
                })
            }
            ,
            a.prototype.resetAdjustments = function() {
                this.$element.css({
                    paddingLeft: "",
                    paddingRight: ""
                })
            }
            ,
            a.prototype.checkScrollbar = function() {
                var f = window.innerWidth;
                if (!f) {
                    var g = document.documentElement.getBoundingClientRect();
                    f = g.right - Math.abs(g.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < f,
                    this.scrollbarWidth = this.measureScrollbar()
            }
            ,
            a.prototype.setScrollbar = function() {
                var e = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "",
                this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
            }
            ,
            a.prototype.resetScrollbar = function() {
                this.$body.css("padding-right", this.originalBodyPad)
            }
            ,
            a.prototype.measureScrollbar = function() {
                var f = document.createElement("div");
                f.className = "modal-scrollbar-measure",
                    this.$body.append(f);
                var g = f.offsetWidth - f.clientWidth;
                return this.$body[0].removeChild(f),
                    g
            }
        ;
        var d = b.fn.modal;
        b.fn.modal = c,
            b.fn.modal.Constructor = a,
            b.fn.modal.noConflict = function() {
                return b.fn.modal = d,
                    this
            }
            ,
            b(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(f) {
                var h = b(this)
                    , j = h.attr("href")
                    , g = b(h.attr("data-target") || j && j.replace(/.*(?=#[^\s]+$)/, ""))
                    , e = g.data("bs.modal") ? "toggle" : b.extend({
                    remote: !/#/.test(j) && j
                }, g.data(), h.data());
                h.is("a") && f.preventDefault(),
                    g.one("show.bs.modal", function(i) {
                        i.isDefaultPrevented() || g.one("hidden.bs.modal", function() {
                            h.is(":visible") && h.trigger("focus")
                        })
                    }),
                    c.call(g, e, this)
            })
    }(jQuery),
    +function(b) {
        function c(f) {
            return this.each(function() {
                var g = b(this)
                    , h = g.data("bs.tooltip")
                    , e = "object" == typeof f && f;
                (h || !/destroy|hide/.test(f)) && (h || g.data("bs.tooltip", h = new a(this,e)),
                "string" == typeof f && h[f]())
            })
        }
        var a = function(f, g) {
            this.type = null,
                this.options = null,
                this.enabled = null,
                this.timeout = null,
                this.hoverState = null,
                this.$element = null,
                this.inState = null,
                this.init("tooltip", f, g)
        };
        a.VERSION = "3.3.5",
            a.TRANSITION_DURATION = 150,
            a.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            },
            a.prototype.init = function(m, h, p) {
                if (this.enabled = !0,
                        this.type = m,
                        this.$element = b(h),
                        this.options = this.getOptions(p),
                        this.$viewport = this.options.viewport && b(b.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
                        this.inState = {
                            click: !1,
                            hover: !1,
                            focus: !1
                        },
                    this.$element[0]instanceof document.constructor && !this.options.selector) {
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
                }
                for (var q = this.options.trigger.split(" "), j = q.length; j--; ) {
                    var g = q[j];
                    if ("click" == g) {
                        this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this))
                    } else {
                        if ("manual" != g) {
                            var k = "hover" == g ? "mouseenter" : "focusin"
                                , f = "hover" == g ? "mouseleave" : "focusout";
                            this.$element.on(k + "." + this.type, this.options.selector, b.proxy(this.enter, this)),
                                this.$element.on(f + "." + this.type, this.options.selector, b.proxy(this.leave, this))
                        }
                    }
                }
                this.options.selector ? this._options = b.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }
            ,
            a.prototype.getDefaults = function() {
                return a.DEFAULTS
            }
            ,
            a.prototype.getOptions = function(f) {
                return f = b.extend({}, this.getDefaults(), this.$element.data(), f),
                f.delay && "number" == typeof f.delay && (f.delay = {
                    show: f.delay,
                    hide: f.delay
                }),
                    f
            }
            ,
            a.prototype.getDelegateOptions = function() {
                var g = {}
                    , f = this.getDefaults();
                return this._options && b.each(this._options, function(e, h) {
                    f[e] != h && (g[e] = h)
                }),
                    g
            }
            ,
            a.prototype.enter = function(g) {
                var f = g instanceof this.constructor ? g : b(g.currentTarget).data("bs." + this.type);
                return f || (f = new this.constructor(g.currentTarget,this.getDelegateOptions()),
                    b(g.currentTarget).data("bs." + this.type, f)),
                g instanceof b.Event && (f.inState["focusin" == g.type ? "focus" : "hover"] = !0),
                    f.tip().hasClass("in") || "in" == f.hoverState ? void (f.hoverState = "in") : (clearTimeout(f.timeout),
                        f.hoverState = "in",
                        f.options.delay && f.options.delay.show ? void (f.timeout = setTimeout(function() {
                            "in" == f.hoverState && f.show()
                        }, f.options.delay.show)) : f.show())
            }
            ,
            a.prototype.isInStateTrue = function() {
                for (var e in this.inState) {
                    if (this.inState[e]) {
                        return !0
                    }
                }
                return !1
            }
            ,
            a.prototype.leave = function(g) {
                var f = g instanceof this.constructor ? g : b(g.currentTarget).data("bs." + this.type);
                return f || (f = new this.constructor(g.currentTarget,this.getDelegateOptions()),
                    b(g.currentTarget).data("bs." + this.type, f)),
                g instanceof b.Event && (f.inState["focusout" == g.type ? "focus" : "hover"] = !1),
                    f.isInStateTrue() ? void 0 : (clearTimeout(f.timeout),
                        f.hoverState = "out",
                        f.options.delay && f.options.delay.hide ? void (f.timeout = setTimeout(function() {
                            "out" == f.hoverState && f.hide()
                        }, f.options.delay.hide)) : f.hide())
            }
            ,
            a.prototype.show = function() {
                var z = b.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(z);
                    var k = b.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (z.isDefaultPrevented() || !k) {
                        return
                    }
                    var q = this
                        , E = this.tip()
                        , C = this.getUID(this.type);
                    this.setContent(),
                        E.attr("id", C),
                        this.$element.attr("aria-describedby", C),
                    this.options.animation && E.addClass("fade");
                    var i = "function" == typeof this.options.placement ? this.options.placement.call(this, E[0], this.$element[0]) : this.options.placement
                        , v = /\s?auto?\s?/i
                        , w = v.test(i);
                    w && (i = i.replace(v, "") || "top"),
                        E.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(i).data("bs." + this.type, this),
                        this.options.container ? E.appendTo(this.options.container) : E.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var A = this.getPosition()
                        , j = E[0].offsetWidth
                        , B = E[0].offsetHeight;
                    if (w) {
                        var y = i
                            , D = this.getPosition(this.$viewport);
                        i = "bottom" == i && A.bottom + B > D.bottom ? "top" : "top" == i && A.top - B < D.top ? "bottom" : "right" == i && A.right + j > D.width ? "left" : "left" == i && A.left - j < D.left ? "right" : i,
                            E.removeClass(y).addClass(i)
                    }
                    var x = this.getCalculatedOffset(i, A, j, B);
                    this.applyPlacement(x, i);
                    var t = function() {
                        var e = q.hoverState;
                        q.$element.trigger("shown.bs." + q.type),
                            q.hoverState = null,
                        "out" == e && q.leave(q)
                    };
                    b.support.transition && this.$tip.hasClass("fade") ? E.one("bsTransitionEnd", t).emulateTransitionEnd(a.TRANSITION_DURATION) : t()
                }
            }
            ,
            a.prototype.applyPlacement = function(w, t) {
                var k = this.tip()
                    , m = k[0].offsetWidth
                    , A = k[0].offsetHeight
                    , z = parseInt(k.css("margin-top"), 10)
                    , g = parseInt(k.css("margin-left"), 10);
                isNaN(z) && (z = 0),
                isNaN(g) && (g = 0),
                    w.top += z,
                    w.left += g,
                    b.offset.setOffset(k[0], b.extend({
                        using: function(e) {
                            k.css({
                                top: Math.round(e.top),
                                left: Math.round(e.left)
                            })
                        }
                    }, w), 0),
                    k.addClass("in");
                var q = k[0].offsetWidth
                    , u = k[0].offsetHeight;
                "top" == t && u != A && (w.top = w.top + A - u);
                var x = this.getViewportAdjustedDelta(t, w, q, u);
                x.left ? w.left += x.left : w.top += x.top;
                var j = /top|bottom/.test(t)
                    , y = j ? 2 * x.left - m + q : 2 * x.top - A + u
                    , v = j ? "offsetWidth" : "offsetHeight";
                k.offset(w),
                    this.replaceArrow(y, k[0][v], j)
            }
            ,
            a.prototype.replaceArrow = function(g, h, f) {
                this.arrow().css(f ? "left" : "top", 50 * (1 - g / h) + "%").css(f ? "top" : "left", "")
            }
            ,
            a.prototype.setContent = function() {
                var f = this.tip()
                    , g = this.getTitle();
                f.find(".tooltip-inner")[this.options.html ? "html" : "text"](g),
                    f.removeClass("fade in top bottom left right")
            }
            ,
            a.prototype.hide = function(h) {
                function i() {
                    "in" != j.hoverState && g.detach(),
                        j.$element.removeAttr("aria-describedby").trigger("hidden.bs." + j.type),
                    h && h()
                }
                var j = this
                    , g = b(this.$tip)
                    , f = b.Event("hide.bs." + this.type);
                return this.$element.trigger(f),
                    f.isDefaultPrevented() ? void 0 : (g.removeClass("in"),
                        b.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", i).emulateTransitionEnd(a.TRANSITION_DURATION) : i(),
                        this.hoverState = null,
                        this)
            }
            ,
            a.prototype.fixTitle = function() {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            }
            ,
            a.prototype.hasContent = function() {
                return this.getTitle()
            }
            ,
            a.prototype.getPosition = function(k) {
                k = k || this.$element;
                var g = k[0]
                    , l = "BODY" == g.tagName
                    , m = g.getBoundingClientRect();
                null == m.width && (m = b.extend({}, m, {
                    width: m.right - m.left,
                    height: m.bottom - m.top
                }));
                var h = l ? {
                    top: 0,
                    left: 0
                } : k.offset()
                    , f = {
                    scroll: l ? document.documentElement.scrollTop || document.body.scrollTop : k.scrollTop()
                }
                    , j = l ? {
                    width: b(window).width(),
                    height: b(window).height()
                } : null;
                return b.extend({}, m, f, j, h)
            }
            ,
            a.prototype.getCalculatedOffset = function(g, h, f, j) {
                return "bottom" == g ? {
                    top: h.top + h.height,
                    left: h.left + h.width / 2 - f / 2
                } : "top" == g ? {
                    top: h.top - j,
                    left: h.left + h.width / 2 - f / 2
                } : "left" == g ? {
                    top: h.top + h.height / 2 - j / 2,
                    left: h.left - f
                } : {
                    top: h.top + h.height / 2 - j / 2,
                    left: h.left + h.width
                }
            }
            ,
            a.prototype.getViewportAdjustedDelta = function(w, q, m, g) {
                var j = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport) {
                    return j
                }
                var x = this.options.viewport && this.options.viewport.padding || 0
                    , v = this.getPosition(this.$viewport);
                if (/right|left/.test(w)) {
                    var f = q.top - x - v.scroll
                        , k = q.top + x - v.scroll + g;
                    f < v.top ? j.top = v.top - f : k > v.top + v.height && (j.top = v.top + v.height - k)
                } else {
                    var p = q.left - x
                        , u = q.left + x + m;
                    p < v.left ? j.left = v.left - p : u > v.right && (j.left = v.left + v.width - u)
                }
                return j
            }
            ,
            a.prototype.getTitle = function() {
                var g, h = this.$element, f = this.options;
                return g = h.attr("data-original-title") || ("function" == typeof f.title ? f.title.call(h[0]) : f.title)
            }
            ,
            a.prototype.getUID = function(e) {
                do {
                    e += ~~(1000000 * Math.random())
                } while (document.getElementById(e));return e
            }
            ,
            a.prototype.tip = function() {
                if (!this.$tip && (this.$tip = b(this.options.template),
                    1 != this.$tip.length)) {
                    throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
                }
                return this.$tip
            }
            ,
            a.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }
            ,
            a.prototype.enable = function() {
                this.enabled = !0
            }
            ,
            a.prototype.disable = function() {
                this.enabled = !1
            }
            ,
            a.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            }
            ,
            a.prototype.toggle = function(g) {
                var f = this;
                g && (f = b(g.currentTarget).data("bs." + this.type),
                f || (f = new this.constructor(g.currentTarget,this.getDelegateOptions()),
                    b(g.currentTarget).data("bs." + this.type, f))),
                    g ? (f.inState.click = !f.inState.click,
                        f.isInStateTrue() ? f.enter(f) : f.leave(f)) : f.tip().hasClass("in") ? f.leave(f) : f.enter(f)
            }
            ,
            a.prototype.destroy = function() {
                var e = this;
                clearTimeout(this.timeout),
                    this.hide(function() {
                        e.$element.off("." + e.type).removeData("bs." + e.type),
                        e.$tip && e.$tip.detach(),
                            e.$tip = null,
                            e.$arrow = null,
                            e.$viewport = null
                    })
            }
        ;
        var d = b.fn.tooltip;
        b.fn.tooltip = c,
            b.fn.tooltip.Constructor = a,
            b.fn.tooltip.noConflict = function() {
                return b.fn.tooltip = d,
                    this
            }
    }(jQuery),
    +function(b) {
        function c(f) {
            return this.each(function() {
                var g = b(this)
                    , h = g.data("bs.popover")
                    , e = "object" == typeof f && f;
                (h || !/destroy|hide/.test(f)) && (h || g.data("bs.popover", h = new a(this,e)),
                "string" == typeof f && h[f]())
            })
        }
        var a = function(f, g) {
            this.init("popover", f, g)
        };
        if (!b.fn.tooltip) {
            throw new Error("Popover requires tooltip.js")
        }
        a.VERSION = "3.3.5",
            a.DEFAULTS = b.extend({}, b.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            a.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype),
            a.prototype.constructor = a,
            a.prototype.getDefaults = function() {
                return a.DEFAULTS
            }
            ,
            a.prototype.setContent = function() {
                var g = this.tip()
                    , h = this.getTitle()
                    , f = this.getContent();
                g.find(".popover-title")[this.options.html ? "html" : "text"](h),
                    g.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof f ? "html" : "append" : "text"](f),
                    g.removeClass("fade top bottom left right in"),
                g.find(".popover-title").html() || g.find(".popover-title").hide()
            }
            ,
            a.prototype.hasContent = function() {
                return this.getTitle() || this.getContent()
            }
            ,
            a.prototype.getContent = function() {
                var f = this.$element
                    , g = this.options;
                return f.attr("data-content") || ("function" == typeof g.content ? g.content.call(f[0]) : g.content)
            }
            ,
            a.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            }
        ;
        var d = b.fn.popover;
        b.fn.popover = c,
            b.fn.popover.Constructor = a,
            b.fn.popover.noConflict = function() {
                return b.fn.popover = d,
                    this
            }
    }(jQuery),
    +function(b) {
        function c(g) {
            return this.each(function() {
                var e = b(this)
                    , h = e.data("bs.tab");
                h || e.data("bs.tab", h = new a(this)),
                "string" == typeof g && h[g]()
            })
        }
        var a = function(g) {
            this.element = b(g)
        };
        a.VERSION = "3.3.5",
            a.TRANSITION_DURATION = 150,
            a.prototype.show = function() {
                var l = this.element
                    , h = l.closest("ul:not(.dropdown-menu)")
                    , m = l.data("target");
                if (m || (m = l.attr("href"),
                        m = m && m.replace(/.*(?=#[^\s]*$)/, "")),
                        !l.parent("li").hasClass("active")) {
                    var p = h.find(".active:last a")
                        , j = b.Event("hide.bs.tab", {
                        relatedTarget: l[0]
                    })
                        , g = b.Event("show.bs.tab", {
                        relatedTarget: p[0]
                    });
                    if (p.trigger(j),
                            l.trigger(g),
                        !g.isDefaultPrevented() && !j.isDefaultPrevented()) {
                        var k = b(m);
                        this.activate(l.closest("li"), h),
                            this.activate(k, k.parent(), function() {
                                p.trigger({
                                    type: "hidden.bs.tab",
                                    relatedTarget: l[0]
                                }),
                                    l.trigger({
                                        type: "shown.bs.tab",
                                        relatedTarget: p[0]
                                    })
                            })
                    }
                }
            }
            ,
            a.prototype.activate = function(j, k, l) {
                function h() {
                    g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        j.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        i ? (j[0].offsetWidth,
                            j.addClass("in")) : j.removeClass("fade"),
                    j.parent(".dropdown-menu").length && j.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                    l && l()
                }
                var g = k.find("> .active")
                    , i = l && b.support.transition && (g.length && g.hasClass("fade") || !!k.find("> .fade").length);
                g.length && i ? g.one("bsTransitionEnd", h).emulateTransitionEnd(a.TRANSITION_DURATION) : h(),
                    g.removeClass("in")
            }
        ;
        var d = b.fn.tab;
        b.fn.tab = c,
            b.fn.tab.Constructor = a,
            b.fn.tab.noConflict = function() {
                return b.fn.tab = d,
                    this
            }
        ;
        var f = function(e) {
            e.preventDefault(),
                c.call(b(this), "show")
        };
        b(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', f).on("click.bs.tab.data-api", '[data-toggle="pill"]', f)
    }(jQuery),
    +function(b) {
        function c(f) {
            return this.each(function() {
                var g = b(this)
                    , h = g.data("bs.affix")
                    , e = "object" == typeof f && f;
                h || g.data("bs.affix", h = new a(this,e)),
                "string" == typeof f && h[f]()
            })
        }
        var a = function(f, g) {
            this.options = b.extend({}, a.DEFAULTS, g),
                this.$target = b(this.options.target).on("scroll.bs.affix.data-api", b.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", b.proxy(this.checkPositionWithEventLoop, this)),
                this.$element = b(f),
                this.affixed = null,
                this.unpin = null,
                this.pinnedOffset = null,
                this.checkPosition()
        };
        a.VERSION = "3.3.5",
            a.RESET = "affix affix-top affix-bottom",
            a.DEFAULTS = {
                offset: 0,
                target: window
            },
            a.prototype.getState = function(v, q, m, g) {
                var j = this.$target.scrollTop()
                    , w = this.$element.offset()
                    , u = this.$target.height();
                if (null != m && "top" == this.affixed) {
                    return m > j ? "top" : !1
                }
                if ("bottom" == this.affixed) {
                    return null != m ? j + this.unpin <= w.top ? !1 : "bottom" : v - g >= j + u ? !1 : "bottom"
                }
                var f = null == this.affixed
                    , k = f ? j : w.top
                    , p = f ? u : q;
                return null != m && m >= j ? "top" : null != g && k + p >= v - g ? "bottom" : !1
            }
            ,
            a.prototype.getPinnedOffset = function() {
                if (this.pinnedOffset) {
                    return this.pinnedOffset
                }
                this.$element.removeClass(a.RESET).addClass("affix");
                var f = this.$target.scrollTop()
                    , g = this.$element.offset();
                return this.pinnedOffset = g.top - f
            }
            ,
            a.prototype.checkPositionWithEventLoop = function() {
                setTimeout(b.proxy(this.checkPosition, this), 1)
            }
            ,
            a.prototype.checkPosition = function() {
                if (this.$element.is(":visible")) {
                    var m = this.$element.height()
                        , p = this.options.offset
                        , q = p.top
                        , j = p.bottom
                        , g = Math.max(b(document).height(), b(document.body).height());
                    "object" != typeof p && (j = q = p),
                    "function" == typeof q && (q = p.top(this.$element)),
                    "function" == typeof j && (j = p.bottom(this.$element));
                    var k = this.getState(g, m, q, j);
                    if (this.affixed != k) {
                        null != this.unpin && this.$element.css("top", "");
                        var f = "affix" + (k ? "-" + k : "")
                            , i = b.Event(f + ".bs.affix");
                        if (this.$element.trigger(i),
                                i.isDefaultPrevented()) {
                            return
                        }
                        this.affixed = k,
                            this.unpin = "bottom" == k ? this.getPinnedOffset() : null,
                            this.$element.removeClass(a.RESET).addClass(f).trigger(f.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == k && this.$element.offset({
                        top: g - m - j
                    })
                }
            }
        ;
        var d = b.fn.affix;
        b.fn.affix = c,
            b.fn.affix.Constructor = a,
            b.fn.affix.noConflict = function() {
                return b.fn.affix = d,
                    this
            }
            ,
            b(window).on("load", function() {
                b('[data-spy="affix"]').each(function() {
                    var e = b(this)
                        , f = e.data();
                    f.offset = f.offset || {},
                    null != f.offsetBottom && (f.offset.bottom = f.offsetBottom),
                    null != f.offsetTop && (f.offset.top = f.offsetTop),
                        c.call(e, f)
                })
            })
    }(jQuery),
    +function(b) {
        function c(h) {
            var g, j = h.attr("data-target") || (g = h.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, "");
            return b(j)
        }
        function a(g) {
            return this.each(function() {
                var e = b(this)
                    , j = e.data("bs.collapse")
                    , h = b.extend({}, d.DEFAULTS, e.data(), "object" == typeof g && g);
                !j && h.toggle && /show|hide/.test(g) && (h.toggle = !1),
                j || e.data("bs.collapse", j = new d(this,h)),
                "string" == typeof g && j[g]()
            })
        }
        var d = function(h, g) {
            this.$element = b(h),
                this.options = b.extend({}, d.DEFAULTS, g),
                this.$trigger = b('[data-toggle="collapse"][href="#' + h.id + '"],[data-toggle="collapse"][data-target="#' + h.id + '"]'),
                this.transitioning = null,
                this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
            this.options.toggle && this.toggle()
        };
        d.VERSION = "3.3.5",
            d.TRANSITION_DURATION = 350,
            d.DEFAULTS = {
                toggle: !0
            },
            d.prototype.dimension = function() {
                var e = this.$element.hasClass("width");
                return e ? "width" : "height"
            }
            ,
            d.prototype.show = function() {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var k, m = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(m && m.length && (k = m.data("bs.collapse"),
                        k && k.transitioning))) {
                        var i = b.Event("show.bs.collapse");
                        if (this.$element.trigger(i),
                                !i.isDefaultPrevented()) {
                            m && m.length && (a.call(m, "hide"),
                            k || m.data("bs.collapse", null));
                            var h = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[h](0).attr("aria-expanded", !0),
                                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                                this.transitioning = 1;
                            var j = function() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[h](""),
                                    this.transitioning = 0,
                                    this.$element.trigger("shown.bs.collapse")
                            };
                            if (!b.support.transition) {
                                return j.call(this)
                            }
                            var g = b.camelCase(["scroll", h].join("-"));
                            this.$element.one("bsTransitionEnd", b.proxy(j, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[h](this.$element[0][g])
                        }
                    }
                }
            }
            ,
            d.prototype.hide = function() {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var h = b.Event("hide.bs.collapse");
                    if (this.$element.trigger(h),
                            !h.isDefaultPrevented()) {
                        var g = this.dimension();
                        this.$element[g](this.$element[g]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            this.transitioning = 1;
                        var j = function() {
                            this.transitioning = 0,
                                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        return b.support.transition ? void this.$element[g](0).one("bsTransitionEnd", b.proxy(j, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : j.call(this)
                    }
                }
            }
            ,
            d.prototype.toggle = function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
            ,
            d.prototype.getParent = function() {
                return b(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(b.proxy(function(e, g) {
                    var h = b(g);
                    this.addAriaAndCollapsedClass(c(h), h)
                }, this)).end()
            }
            ,
            d.prototype.addAriaAndCollapsedClass = function(h, j) {
                var g = h.hasClass("in");
                h.attr("aria-expanded", g),
                    j.toggleClass("collapsed", !g).attr("aria-expanded", g)
            }
        ;
        var f = b.fn.collapse;
        b.fn.collapse = a,
            b.fn.collapse.Constructor = d,
            b.fn.collapse.noConflict = function() {
                return b.fn.collapse = f,
                    this
            }
            ,
            b(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
                var j = b(this);
                j.attr("data-target") || i.preventDefault();
                var g = c(j)
                    , e = g.data("bs.collapse")
                    , h = e ? "toggle" : j.data();
                a.call(g, h)
            })
    }(jQuery),
    +function(b) {
        function c(e, f) {
            this.$body = b(document.body),
                this.$scrollElement = b(b(e).is(document.body) ? window : e),
                this.options = b.extend({}, c.DEFAULTS, f),
                this.selector = (this.options.target || "") + " .nav li > a",
                this.offsets = [],
                this.targets = [],
                this.activeTarget = null,
                this.scrollHeight = 0,
                this.$scrollElement.on("scroll.bs.scrollspy", b.proxy(this.process, this)),
                this.refresh(),
                this.process()
        }
        function a(e) {
            return this.each(function() {
                var g = b(this)
                    , h = g.data("bs.scrollspy")
                    , f = "object" == typeof e && e;
                h || g.data("bs.scrollspy", h = new c(this,f)),
                "string" == typeof e && h[e]()
            })
        }
        c.VERSION = "3.3.5",
            c.DEFAULTS = {
                offset: 10
            },
            c.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            c.prototype.refresh = function() {
                var g = this
                    , f = "offset"
                    , h = 0;
                this.offsets = [],
                    this.targets = [],
                    this.scrollHeight = this.getScrollHeight(),
                b.isWindow(this.$scrollElement[0]) || (f = "position",
                    h = this.$scrollElement.scrollTop()),
                    this.$body.find(this.selector).map(function() {
                        var j = b(this)
                            , k = j.data("target") || j.attr("href")
                            , i = /^#./.test(k) && b(k);
                        return i && i.length && i.is(":visible") && [[i[f]().top + h, k]] || null
                    }).sort(function(i, j) {
                        return i[0] - j[0]
                    }).each(function() {
                        g.offsets.push(this[0]),
                            g.targets.push(this[1])
                    })
            }
            ,
            c.prototype.process = function() {
                var h, k = this.$scrollElement.scrollTop() + this.options.offset, g = this.getScrollHeight(), l = this.options.offset + g - this.$scrollElement.height(), m = this.offsets, j = this.targets, f = this.activeTarget;
                if (this.scrollHeight != g && this.refresh(),
                    k >= l) {
                    return f != (h = j[j.length - 1]) && this.activate(h)
                }
                if (f && k < m[0]) {
                    return this.activeTarget = null,
                        this.clear()
                }
                for (h = m.length; h--; ) {
                    f != j[h] && k >= m[h] && (void 0 === m[h + 1] || k < m[h + 1]) && this.activate(j[h])
                }
            }
            ,
            c.prototype.activate = function(g) {
                this.activeTarget = g,
                    this.clear();
                var f = this.selector + '[data-target="' + g + '"],' + this.selector + '[href="' + g + '"]'
                    , h = b(f).parents("li").addClass("active");
                h.parent(".dropdown-menu").length && (h = h.closest("li.dropdown").addClass("active")),
                    h.trigger("activate.bs.scrollspy")
            }
            ,
            c.prototype.clear = function() {
                b(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            }
        ;
        var d = b.fn.scrollspy;
        b.fn.scrollspy = a,
            b.fn.scrollspy.Constructor = c,
            b.fn.scrollspy.noConflict = function() {
                return b.fn.scrollspy = d,
                    this
            }
            ,
            b(window).on("load.bs.scrollspy.data-api", function() {
                b('[data-spy="scroll"]').each(function() {
                    var f = b(this);
                    a.call(f, f.data())
                })
            })
    }(jQuery),
    +function(a) {
        function b() {
            var d = document.createElement("bootstrap")
                , f = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var c in f) {
                if (void 0 !== d.style[c]) {
                    return {
                        end: f[c]
                    }
                }
            }
            return !1
        }
        a.fn.emulateTransitionEnd = function(d) {
            var c = !1
                , f = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0
            });
            var g = function() {
                c || a(f).trigger(a.support.transition.end)
            };
            return setTimeout(g, d),
                this
        }
            ,
            a(function() {
                a.support.transition = b(),
                a.support.transition && (a.event.special.bsTransitionEnd = {
                    bindType: a.support.transition.end,
                    delegateType: a.support.transition.end,
                    handle: function(c) {
                        return a(c.target).is(this) ? c.handleObj.handler.apply(this, arguments) : void 0
                    }
                })
            })
    }(jQuery);
(function(a) {
        a.bootstrapDropdownOnHover = function(e, c) {
            var h = {
                mouseOutDelay: 500,
                responsiveThreshold: 992,
                hideBackdrop: true
            };
            var g = this;
            g.settings = {};
            var i = a(e);
            var f = a(window);
            var b = -1;
            g.init = function() {
                g.settings = a.extend({}, h, c);
                i.find("[data-toggle='dropdown']").each(function(k, m) {
                    var j = a(m);
                    var l = j.parent().find(".dropdown-menu");
                    var n = j.parent();
                    j.on("mouseenter.bnoh", function() {
                        if (d()) {
                            return
                        }
                        clearTimeout(b);
                        if (!n.hasClass("open")) {
                            var o = l.attr("data-animation");
                            j.dropdown("toggle");
                            if (o) {
                                l.addClass(o);
                                l.on("animationend", function() {
                                    l.removeClass(o)
                                })
                            }
                            if (g.settings.hideBackdrop) {
                                n.find(".dropdown-backdrop").remove()
                            }
                        }
                    });
                    j.on("mouseleave.bnoh", function() {
                        if (d()) {
                            return
                        }
                        b = setTimeout(function() {
                            if (n.hasClass("open") && n.find(".dropdown-backdrop").length === 0) {
                                j.dropdown("toggle");
                                j.blur();
                                var o = l.attr("data-animation");
                                if (o) {
                                    l.removeClass(o)
                                }
                            }
                        }, g.settings.mouseOutDelay)
                    });
                    l.on("mouseenter.bnoh", function() {
                        if (d()) {
                            return
                        }
                        clearTimeout(b)
                    });
                    l.on("mouseleave.bnoh", function() {
                        if (d()) {
                            return
                        }
                        b = setTimeout(function() {
                            if (n.hasClass("open")) {
                                j.dropdown("toggle");
                                j.blur()
                            }
                        }, g.settings.mouseOutDelay)
                    })
                })
            }
            ;
            g.destroy = function() {
                i.find("[data-toggle='dropdown']").unbind(".bnoh");
                i.find(".dropdown-menu").unbind(".bnoh");
                i.removeData("bootstrapDropdownOnHover")
            }
            ;
            var d = function() {
                return f.width() <= g.settings.responsiveThreshold
            };
            g.init()
        }
        ;
        a.fn.bootstrapDropdownOnHover = function(b) {
            return this.each(function() {
                if (undefined === a(this).data("bootstrapDropdownOnHover")) {
                    var c = new a.bootstrapDropdownOnHover(this,b);
                    a(this).data("bootstrapDropdownOnHover", c)
                }
            })
        }
    }
)(jQuery);
!function(b) {
    b.fn.slide = function(a) {
        return b.fn.slide.defaults = {
            type: "slide",
            effect: "fade",
            autoPlay: !1,
            delayTime: 500,
            interTime: 2500,
            triggerTime: 150,
            defaultIndex: 0,
            titCell: ".hd li",
            mainCell: ".bd",
            targetCell: null,
            trigger: "mouseover",
            scroll: 1,
            vis: 1,
            titOnClassName: "on",
            autoPage: !1,
            prevCell: ".prev",
            nextCell: ".next",
            pageStateCell: ".pageState",
            opp: !1,
            pnLoop: !0,
            easing: "swing",
            startFun: null,
            endFun: null,
            switchLoad: null,
            playStateCell: ".playState",
            mouseOverStop: !0,
            defaultPlay: !0,
            returnDefault: !1
        },
            this.each(function() {
                var a8 = b.extend({}, b.fn.slide.defaults, a)
                    , a7 = b(this)
                    , a6 = a8.effect
                    , a5 = b(a8.prevCell, a7)
                    , a4 = b(a8.nextCell, a7)
                    , a3 = b(a8.pageStateCell, a7)
                    , a2 = b(a8.playStateCell, a7)
                    , a1 = b(a8.titCell, a7)
                    , a0 = a1.size()
                    , aZ = b(a8.mainCell, a7)
                    , aY = aZ.children().size()
                    , aX = a8.switchLoad
                    , aW = b(a8.targetCell, a7)
                    , aV = parseInt(a8.defaultIndex)
                    , aU = parseInt(a8.delayTime)
                    , aT = parseInt(a8.interTime);
                parseInt(a8.triggerTime);
                var am, aS = parseInt(a8.scroll), aR = parseInt(a8.vis), aQ = "false" == a8.autoPlay || 0 == a8.autoPlay ? !1 : !0, aP = "false" == a8.opp || 0 == a8.opp ? !1 : !0, aO = "false" == a8.autoPage || 0 == a8.autoPage ? !1 : !0, aN = "false" == a8.pnLoop || 0 == a8.pnLoop ? !1 : !0, aM = "false" == a8.mouseOverStop || 0 == a8.mouseOverStop ? !1 : !0, aE = "false" == a8.defaultPlay || 0 == a8.defaultPlay ? !1 : !0, aC = "false" == a8.returnDefault || 0 == a8.returnDefault ? !1 : !0, aB = 0, aA = 0, az = 0, ay = 0, ax = a8.easing, aw = null, av = null, au = null, at = a8.titOnClassName, ar = a1.index(a7.find("." + at)), aq = aV = -1 == ar ? aV : ar, ap = aV, ao = aV, an = aY >= aR ? 0 != aY % aS ? aY % aS : aS : 0, al = "leftMarquee" == a6 || "topMarquee" == a6 ? !0 : !1, ak = function() {
                    b.isFunction(a8.startFun) && a8.startFun(aV, a0, a7, b(a8.titCell, a7), aZ, aW, a5, a4)
                }, aj = function() {
                    b.isFunction(a8.endFun) && a8.endFun(aV, a0, a7, b(a8.titCell, a7), aZ, aW, a5, a4)
                }, ai = function() {
                    a1.removeClass(at),
                    aE && a1.eq(ap).addClass(at)
                };
                if ("menu" == a8.type) {
                    return aE && a1.removeClass(at).eq(aV).addClass(at),
                        a1.hover(function() {
                            am = b(this).find(a8.targetCell);
                            var c = a1.index(b(this));
                            av = setTimeout(function() {
                                switch (aV = c,
                                    a1.removeClass(at).eq(aV).addClass(at),
                                    ak(),
                                    a6) {
                                    case "fade":
                                        am.stop(!0, !0).animate({
                                            opacity: "show"
                                        }, aU, ax, aj);
                                        break;
                                    case "slideDown":
                                        am.stop(!0, !0).animate({
                                            height: "show"
                                        }, aU, ax, aj)
                                }
                            }, a8.triggerTime)
                        }, function() {
                            switch (clearTimeout(av),
                                a6) {
                                case "fade":
                                    am.animate({
                                        opacity: "hide"
                                    }, aU, ax);
                                    break;
                                case "slideDown":
                                    am.animate({
                                        height: "hide"
                                    }, aU, ax)
                            }
                        }),
                    aC && a7.hover(function() {
                        clearTimeout(au)
                    }, function() {
                        au = setTimeout(ai, aU)
                    }),
                        void 0
                }
                if (0 == a0 && (a0 = aY),
                    al && (a0 = 2),
                        aO) {
                    if (aY >= aR) {
                        if ("leftLoop" == a6 || "topLoop" == a6) {
                            a0 = 0 != aY % aS ? (0 ^ aY / aS) + 1 : aY / aS
                        } else {
                            var ah = aY - aR;
                            a0 = 1 + parseInt(0 != ah % aS ? ah / aS + 1 : ah / aS),
                            0 >= a0 && (a0 = 1)
                        }
                    } else {
                        a0 = 1
                    }
                    a1.html("");
                    var ag = "";
                    if (1 == a8.autoPage || "true" == a8.autoPage) {
                        for (var af = 0; a0 > af; af++) {
                            ag += "<li>" + (af + 1) + "</li>"
                        }
                    } else {
                        for (var af = 0; a0 > af; af++) {
                            ag += a8.autoPage.replace("$", af + 1)
                        }
                    }
                    a1.html(ag);
                    var a1 = a1.children()
                }
                if (aY >= aR) {
                    aZ.children().each(function() {
                        b(this).width() > az && (az = b(this).width(),
                            aA = b(this).outerWidth(!0)),
                        b(this).height() > ay && (ay = b(this).height(),
                            aB = b(this).outerHeight(!0))
                    });
                    var ae = aZ.children()
                        , ad = function() {
                        for (var c = 0; aR > c; c++) {
                            ae.eq(c).clone().addClass("clone").appendTo(aZ)
                        }
                        for (var c = 0; an > c; c++) {
                            ae.eq(aY - c - 1).clone().addClass("clone").prependTo(aZ)
                        }
                    };
                    switch (a6) {
                        case "fold":
                            aZ.css({
                                position: "relative",
                                width: aA,
                                height: aB
                            }).children().css({
                                position: "absolute",
                                width: az,
                                left: 0,
                                top: 0,
                                display: "none"
                            });
                            break;
                        case "top":
                            aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + aR * aB + 'px"></div>').css({
                                top: -(aV * aS) * aB,
                                position: "relative",
                                padding: "0",
                                margin: "0"
                            }).children().css({
                                height: ay
                            });
                            break;
                        case "left":
                            aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + aR * aA + 'px"></div>').css({
                                width: aY * aA,
                                left: -(aV * aS) * aA,
                                position: "relative",
                                overflow: "hidden",
                                padding: "0",
                                margin: "0"
                            }).children().css({
                                "float": "left",
                                width: az
                            });
                            break;
                        case "leftLoop":
                        case "leftMarquee":
                            ad(),
                                aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + aR * aA + 'px"></div>').css({
                                    width: (aY + aR + an) * aA,
                                    position: "relative",
                                    overflow: "hidden",
                                    padding: "0",
                                    margin: "0",
                                    left: -(an + aV * aS) * aA
                                }).children().css({
                                    "float": "left",
                                    width: az
                                });
                            break;
                        case "topLoop":
                        case "topMarquee":
                            ad(),
                                aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + aR * aB + 'px"></div>').css({
                                    height: (aY + aR + an) * aB,
                                    position: "relative",
                                    padding: "0",
                                    margin: "0",
                                    top: -(an + aV * aS) * aB
                                }).children().css({
                                    height: ay
                                })
                    }
                }
                var aI = function(d) {
                    var c = d * aS;
                    return d == a0 ? c = aY : -1 == d && 0 != aY % aS && (c = -aY % aS),
                        c
                }
                    , ba = function(e) {
                    var m = function(g) {
                        for (var f = g; aR + g > f; f++) {
                            e.eq(f).find("img[" + aX + "]").each(function() {
                                var h = b(this);
                                if (h.attr("src", h.attr(aX)).removeAttr(aX),
                                        aZ.find(".clone")[0]) {
                                    for (var o = aZ.children(), n = 0; n < o.size(); n++) {
                                        o.eq(n).find("img[" + aX + "]").each(function() {
                                            b(this).attr(aX) == h.attr("src") && b(this).attr("src", b(this).attr(aX)).removeAttr(aX)
                                        })
                                    }
                                }
                            })
                        }
                    };
                    switch (a6) {
                        case "fade":
                        case "fold":
                        case "top":
                        case "left":
                        case "slideDown":
                            m(aV * aS);
                            break;
                        case "leftLoop":
                        case "topLoop":
                            m(an + aI(ao));
                            break;
                        case "leftMarquee":
                        case "topMarquee":
                            var l = "leftMarquee" == a6 ? aZ.css("left").replace("px", "") : aZ.css("top").replace("px", "")
                                , k = "leftMarquee" == a6 ? aA : aB
                                , j = an;
                            if (0 != l % k) {
                                var i = Math.abs(0 ^ l / k);
                                j = 1 == aV ? an + i : an + i - 1
                            }
                            m(j)
                    }
                }
                    , aD = function(f) {
                    if (!aE || aq != aV || f || al) {
                        if (al ? aV >= 1 ? aV = 1 : 0 >= aV && (aV = 0) : (ao = aV,
                                aV >= a0 ? aV = 0 : 0 > aV && (aV = a0 - 1)),
                                ak(),
                            null != aX && ba(aZ.children()),
                            aW[0] && (am = aW.eq(aV),
                            null != aX && ba(aW),
                                "slideDown" == a6 ? (aW.not(am).stop(!0, !0).slideUp(aU),
                                    am.slideDown(aU, ax, function() {
                                        aZ[0] || aj()
                                    })) : (aW.not(am).stop(!0, !0).hide(),
                                    am.animate({
                                        opacity: "show"
                                    }, aU, function() {
                                        aZ[0] || aj()
                                    }))),
                            aY >= aR) {
                            switch (a6) {
                                case "fade":
                                    aZ.children().stop(!0, !0).eq(aV).animate({
                                        opacity: "show"
                                    }, aU, ax, function() {
                                        aj()
                                    }).siblings().hide();
                                    break;
                                case "fold":
                                    aZ.children().stop(!0, !0).eq(aV).animate({
                                        opacity: "show"
                                    }, aU, ax, function() {
                                        aj()
                                    }).siblings().animate({
                                        opacity: "hide"
                                    }, aU, ax);
                                    break;
                                case "top":
                                    aZ.stop(!0, !1).animate({
                                        top: -aV * aS * aB
                                    }, aU, ax, function() {
                                        aj()
                                    });
                                    break;
                                case "left":
                                    aZ.stop(!0, !1).animate({
                                        left: -aV * aS * aA
                                    }, aU, ax, function() {
                                        aj()
                                    });
                                    break;
                                case "leftLoop":
                                    var e = ao;
                                    aZ.stop(!0, !0).animate({
                                        left: -(aI(ao) + an) * aA
                                    }, aU, ax, function() {
                                        -1 >= e ? aZ.css("left", -(an + (a0 - 1) * aS) * aA) : e >= a0 && aZ.css("left", -an * aA),
                                            aj()
                                    });
                                    break;
                                case "topLoop":
                                    var e = ao;
                                    aZ.stop(!0, !0).animate({
                                        top: -(aI(ao) + an) * aB
                                    }, aU, ax, function() {
                                        -1 >= e ? aZ.css("top", -(an + (a0 - 1) * aS) * aB) : e >= a0 && aZ.css("top", -an * aB),
                                            aj()
                                    });
                                    break;
                                case "leftMarquee":
                                    var h = aZ.css("left").replace("px", "");
                                    0 == aV ? aZ.animate({
                                        left: ++h
                                    }, 0, function() {
                                        aZ.css("left").replace("px", "") >= 0 && aZ.css("left", -aY * aA)
                                    }) : aZ.animate({
                                        left: --h
                                    }, 0, function() {
                                        aZ.css("left").replace("px", "") <= -(aY + an) * aA && aZ.css("left", -an * aA)
                                    });
                                    break;
                                case "topMarquee":
                                    var g = aZ.css("top").replace("px", "");
                                    0 == aV ? aZ.animate({
                                        top: ++g
                                    }, 0, function() {
                                        aZ.css("top").replace("px", "") >= 0 && aZ.css("top", -aY * aB)
                                    }) : aZ.animate({
                                        top: --g
                                    }, 0, function() {
                                        aZ.css("top").replace("px", "") <= -(aY + an) * aB && aZ.css("top", -an * aB)
                                    })
                            }
                        }
                        a1.removeClass(at).eq(aV).addClass(at),
                            aq = aV,
                        aN || (a4.removeClass("nextStop"),
                            a5.removeClass("prevStop"),
                        0 == aV && a5.addClass("prevStop"),
                        aV == a0 - 1 && a4.addClass("nextStop")),
                            a3.html("<span>" + (aV + 1) + "</span>/" + a0)
                    }
                };
                aE && aD(!0),
                aC && a7.hover(function() {
                    clearTimeout(au)
                }, function() {
                    au = setTimeout(function() {
                        aV = ap,
                            aE ? aD() : "slideDown" == a6 ? am.slideUp(aU, ai) : am.animate({
                                opacity: "hide"
                            }, aU, ai),
                            aq = aV
                    }, 300)
                });
                var a9 = function(c) {
                    aw = setInterval(function() {
                        aP ? aV-- : aV++,
                            aD()
                    }, c ? c : aT)
                }
                    , aJ = function(c) {
                    aw = setInterval(aD, c ? c : aT)
                }
                    , aF = function() {
                    aM || (clearInterval(aw),
                        a9())
                }
                    , s = function() {
                    (aN || aV != a0 - 1) && (aV++,
                        aD(),
                    al || aF())
                }
                    , aK = function() {
                    (aN || 0 != aV) && (aV--,
                        aD(),
                    al || aF())
                }
                    , aG = function() {
                    clearInterval(aw),
                        al ? aJ() : a9(),
                        a2.removeClass("pauseState")
                }
                    , aa = function() {
                    clearInterval(aw),
                        a2.addClass("pauseState")
                };
                if (aQ ? al ? (aP ? aV-- : aV++,
                        aJ(),
                    aM && aZ.hover(aa, aG)) : (a9(),
                    aM && a7.hover(aa, aG)) : (al && (aP ? aV-- : aV++),
                        a2.addClass("pauseState")),
                        a2.click(function() {
                            a2.hasClass("pauseState") ? aG() : aa()
                        }),
                        "mouseover" == a8.trigger ? a1.hover(function() {
                            var c = a1.index(this);
                            av = setTimeout(function() {
                                aV = c,
                                    aD(),
                                    aF()
                            }, a8.triggerTime)
                        }, function() {
                            clearTimeout(av)
                        }) : a1.click(function() {
                            aV = a1.index(this),
                                aD(),
                                aF()
                        }),
                        al) {
                    if (a4.mousedown(s),
                            a5.mousedown(aK),
                            aN) {
                        var aL, aH = function() {
                            aL = setTimeout(function() {
                                clearInterval(aw),
                                    aJ(0 ^ aT / 10)
                            }, 150)
                        }, ac = function() {
                            clearTimeout(aL),
                                clearInterval(aw),
                                aJ()
                        };
                        a4.mousedown(aH),
                            a4.mouseup(ac),
                            a5.mousedown(aH),
                            a5.mouseup(ac)
                    }
                    "mouseover" == a8.trigger && (a4.hover(s, function() {}),
                        a5.hover(aK, function() {}))
                } else {
                    a4.click(s),
                        a5.click(aK)
                }
            })
    }
}(jQuery),
    jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(g, f, j, i, h) {
            return jQuery.easing[jQuery.easing.def](g, f, j, i, h)
        },
        easeInQuad: function(g, f, j, i, h) {
            return i * (f /= h) * f + j
        },
        easeOutQuad: function(g, f, j, i, h) {
            return -i * (f /= h) * (f - 2) + j
        },
        easeInOutQuad: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f + j : -i / 2 * (--f * (f - 2) - 1) + j
        },
        easeInCubic: function(g, f, j, i, h) {
            return i * (f /= h) * f * f + j
        },
        easeOutCubic: function(g, f, j, i, h) {
            return i * ((f = f / h - 1) * f * f + 1) + j
        },
        easeInOutCubic: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f + j : i / 2 * ((f -= 2) * f * f + 2) + j
        },
        easeInQuart: function(g, f, j, i, h) {
            return i * (f /= h) * f * f * f + j
        },
        easeOutQuart: function(g, f, j, i, h) {
            return -i * ((f = f / h - 1) * f * f * f - 1) + j
        },
        easeInOutQuart: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f * f + j : -i / 2 * ((f -= 2) * f * f * f - 2) + j
        },
        easeInQuint: function(g, f, j, i, h) {
            return i * (f /= h) * f * f * f * f + j
        },
        easeOutQuint: function(g, f, j, i, h) {
            return i * ((f = f / h - 1) * f * f * f * f + 1) + j
        },
        easeInOutQuint: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f * f * f + j : i / 2 * ((f -= 2) * f * f * f * f + 2) + j
        },
        easeInSine: function(g, f, j, i, h) {
            return -i * Math.cos(f / h * (Math.PI / 2)) + i + j
        },
        easeOutSine: function(g, f, j, i, h) {
            return i * Math.sin(f / h * (Math.PI / 2)) + j
        },
        easeInOutSine: function(g, f, j, i, h) {
            return -i / 2 * (Math.cos(Math.PI * f / h) - 1) + j
        },
        easeInExpo: function(g, f, j, i, h) {
            return 0 == f ? j : i * Math.pow(2, 10 * (f / h - 1)) + j
        },
        easeOutExpo: function(g, f, j, i, h) {
            return f == h ? j + i : i * (-Math.pow(2, -10 * f / h) + 1) + j
        },
        easeInOutExpo: function(g, f, j, i, h) {
            return 0 == f ? j : f == h ? j + i : (f /= h / 2) < 1 ? i / 2 * Math.pow(2, 10 * (f - 1)) + j : i / 2 * (-Math.pow(2, -10 * --f) + 2) + j
        },
        easeInCirc: function(g, f, j, i, h) {
            return -i * (Math.sqrt(1 - (f /= h) * f) - 1) + j
        },
        easeOutCirc: function(g, f, j, i, h) {
            return i * Math.sqrt(1 - (f = f / h - 1) * f) + j
        },
        easeInOutCirc: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? -i / 2 * (Math.sqrt(1 - f * f) - 1) + j : i / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + j
        },
        easeInElastic: function(j, i, p, o, n) {
            var m = 1.70158
                , l = 0
                , k = o;
            if (0 == i) {
                return p
            }
            if (1 == (i /= n)) {
                return p + o
            }
            if (l || (l = 0.3 * n),
                k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return -(k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l)) + p
        },
        easeOutElastic: function(j, i, p, o, n) {
            var m = 1.70158
                , l = 0
                , k = o;
            if (0 == i) {
                return p
            }
            if (1 == (i /= n)) {
                return p + o
            }
            if (l || (l = 0.3 * n),
                k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return k * Math.pow(2, -10 * i) * Math.sin((i * n - m) * 2 * Math.PI / l) + o + p
        },
        easeInOutElastic: function(j, i, p, o, n) {
            var m = 1.70158
                , l = 0
                , k = o;
            if (0 == i) {
                return p
            }
            if (2 == (i /= n / 2)) {
                return p + o
            }
            if (l || (l = n * 0.3 * 1.5),
                k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return 1 > i ? -0.5 * k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l) + p : 0.5 * k * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l) + o + p
        },
        easeInBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158),
            k * (g /= j) * g * ((i + 1) * g - i) + l
        },
        easeOutBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158),
            k * ((g = g / j - 1) * g * ((i + 1) * g + i) + 1) + l
        },
        easeInOutBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158),
                (g /= j / 2) < 1 ? k / 2 * g * g * (((i *= 1.525) + 1) * g - i) + l : k / 2 * ((g -= 2) * g * (((i *= 1.525) + 1) * g + i) + 2) + l
        },
        easeInBounce: function(g, f, j, i, h) {
            return i - jQuery.easing.easeOutBounce(g, h - f, 0, i, h) + j
        },
        easeOutBounce: function(g, f, j, i, h) {
            return (f /= h) < 1 / 2.75 ? i * 7.5625 * f * f + j : 2 / 2.75 > f ? i * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + j : 2.5 / 2.75 > f ? i * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + j : i * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + j
        },
        easeInOutBounce: function(g, f, j, i, h) {
            return h / 2 > f ? 0.5 * jQuery.easing.easeInBounce(g, 2 * f, 0, i, h) + j : 0.5 * jQuery.easing.easeOutBounce(g, 2 * f - h, 0, i, h) + 0.5 * i + j
        }
    });
var TouchSlide = function(aV) {
    aV = aV || {};
    var aU = {
        slideCell: aV.slideCell || "#touchSlide",
        titCell: aV.titCell || ".hd li",
        mainCell: aV.mainCell || ".bd",
        effect: aV.effect || "left",
        autoPlay: aV.autoPlay || !1,
        delayTime: aV.delayTime || 200,
        interTime: aV.interTime || 2500,
        defaultIndex: aV.defaultIndex || 0,
        titOnClassName: aV.titOnClassName || "on",
        autoPage: aV.autoPage || !1,
        prevCell: aV.prevCell || ".prev",
        nextCell: aV.nextCell || ".next",
        pageStateCell: aV.pageStateCell || ".pageState",
        pnLoop: "undefined " == aV.pnLoop ? !0 : aV.pnLoop,
        startFun: aV.startFun || null,
        endFun: aV.endFun || null,
        switchLoad: aV.switchLoad || null
    }
        , aT = document.getElementById(aU.slideCell.replace("#", ""));
    if (!aT) {
        return !1
    }
    var aS = function(t, s) {
        t = t.split(" ");
        var r = [];
        s = s || document;
        var q = [s];
        for (var p in t) {
            0 != t[p].length && r.push(t[p])
        }
        for (var p in r) {
            if (0 == q.length) {
                return !1
            }
            var o = [];
            for (var n in q) {
                if ("#" == r[p][0]) {
                    o.push(document.getElementById(r[p].replace("#", "")))
                } else {
                    if ("." == r[p][0]) {
                        for (var m = q[n].getElementsByTagName("*"), l = 0; l < m.length; l++) {
                            var k = m[l].className;
                            k && -1 != k.search(new RegExp("\\b" + r[p].replace(".", "") + "\\b")) && o.push(m[l])
                        }
                    } else {
                        for (var m = q[n].getElementsByTagName(r[p]), l = 0; l < m.length; l++) {
                            o.push(m[l])
                        }
                    }
                }
            }
            q = o
        }
        return 0 == q.length || q[0] == s ? !1 : q
    }
        , aR = function(g, e) {
        var i = document.createElement("div");
        i.innerHTML = e,
            i = i.children[0];
        var h = g.cloneNode(!0);
        return i.appendChild(h),
            g.parentNode.replaceChild(i, g),
            aK = h,
            i
    }
        , aQ = function(d, c) {
        !d || !c || d.className && -1 != d.className.search(new RegExp("\\b" + c + "\\b")) || (d.className += (d.className ? " " : "") + c)
    }
        , aP = function(d, c) {
        !d || !c || d.className && -1 == d.className.search(new RegExp("\\b" + c + "\\b")) || (d.className = d.className.replace(new RegExp("\\s*\\b" + c + "\\b","g"), ""))
    }
        , aO = aU.effect
        , aN = aS(aU.prevCell, aT)[0]
        , aM = aS(aU.nextCell, aT)[0]
        , aL = aS(aU.pageStateCell)[0]
        , aK = aS(aU.mainCell, aT)[0];
    if (!aK) {
        return !1
    }
    var aj, ai, aJ = aK.children.length, aI = aS(aU.titCell, aT), aH = aI ? aI.length : aJ, aG = aU.switchLoad, aF = parseInt(aU.defaultIndex), aE = parseInt(aU.delayTime), aD = parseInt(aU.interTime), aC = "false" == aU.autoPlay || 0 == aU.autoPlay ? !1 : !0, aB = "false" == aU.autoPage || 0 == aU.autoPage ? !1 : !0, aA = "false" == aU.pnLoop || 0 == aU.pnLoop ? !1 : !0, az = aF, ay = null, ax = null, av = null, au = 0, at = 0, ar = 0, aq = 0, ap = /hp-tablet/gi.test(navigator.appVersion), ao = "ontouchstart"in window && !ap, an = ao ? "touchstart" : "mousedown", am = ao ? "touchmove" : "", al = ao ? "touchend" : "mouseup", ak = aK.parentNode.clientWidth, ah = aJ;
    if (0 == aH && (aH = aJ),
            aB) {
        aH = aJ,
            aI = aI[0],
            aI.innerHTML = "";
        var ag = "";
        if (1 == aU.autoPage || "true" == aU.autoPage) {
            for (var af = 0; aH > af; af++) {
                ag += "<li>" + (af + 1) + "</li>"
            }
        } else {
            for (var af = 0; aH > af; af++) {
                ag += aU.autoPage.replace("$", af + 1)
            }
        }
        aI.innerHTML = ag,
            aI = aI.children
    }
    "leftLoop" == aO && (ah += 2,
        aK.appendChild(aK.children[0].cloneNode(!0)),
        aK.insertBefore(aK.children[aJ - 1].cloneNode(!0), aK.children[0])),
        aj = aR(aK, '<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),
        aK.style.cssText = "width:" + ah * ak + "px;position:relative;overflow:hidden;padding:0;margin:0;";
    for (var af = 0; ah > af; af++) {
        aK.children[af].style.cssText = "display:table-cell;vertical-align:top;width:" + ak + "px"
    }
    var ae = function() {
        "function" == typeof aU.startFun && aU.startFun(aF, aH)
    }
        , ad = function() {
        "function" == typeof aU.endFun && aU.endFun(aF, aH)
    }
        , ac = function(e) {
        var d = ("leftLoop" == aO ? aF + 1 : aF) + e
            , g = function(i) {
            for (var h = aK.children[i].getElementsByTagName("img"), j = 0; j < h.length; j++) {
                h[j].getAttribute(aG) && (h[j].setAttribute("src", h[j].getAttribute(aG)),
                    h[j].removeAttribute(aG))
            }
        };
        if (g(d),
            "leftLoop" == aO) {
            switch (d) {
                case 0:
                    g(aJ);
                    break;
                case 1:
                    g(aJ + 1);
                    break;
                case aJ:
                    g(0);
                    break;
                case aJ + 1:
                    g(1)
            }
        }
    }
        , ab = function() {
        ak = aj.clientWidth,
            aK.style.width = ah * ak + "px";
        for (var d = 0; ah > d; d++) {
            aK.children[d].style.width = ak + "px"
        }
        var c = "leftLoop" == aO ? aF + 1 : aF;
        aa(-c * ak, 0)
    };
    window.addEventListener("resize", ab, !1);
    var aa = function(e, d, g) {
        g = g ? g.style : aK.style,
            g.webkitTransitionDuration = g.MozTransitionDuration = g.msTransitionDuration = g.OTransitionDuration = g.transitionDuration = d + "ms",
            g.webkitTransform = "translate(" + e + "px,0)translateZ(0)",
            g.msTransform = g.MozTransform = g.OTransform = "translateX(" + e + "px)"
    }
        , L = function(b) {
        switch (aO) {
            case "left":
                aF >= aH ? aF = b ? aF - 1 : 0 : 0 > aF && (aF = b ? 0 : aH - 1),
                null != aG && ac(0),
                    aa(-aF * ak, aE),
                    az = aF;
                break;
            case "leftLoop":
                null != aG && ac(0),
                    aa(-(aF + 1) * ak, aE),
                    -1 == aF ? (ax = setTimeout(function() {
                        aa(-aH * ak, 0)
                    }, aE),
                        aF = aH - 1) : aF == aH && (ax = setTimeout(function() {
                            aa(-ak, 0)
                        }, aE),
                            aF = 0),
                    az = aF
        }
        ae(),
            av = setTimeout(function() {
                ad()
            }, aE);
        for (var d = 0; aH > d; d++) {
            aP(aI[d], aU.titOnClassName),
            d == aF && aQ(aI[d], aU.titOnClassName)
        }
        0 == aA && (aP(aM, "nextStop"),
            aP(aN, "prevStop"),
            0 == aF ? aQ(aN, "prevStop") : aF == aH - 1 && aQ(aM, "nextStop")),
        aL && (aL.innerHTML = "<span>" + (aF + 1) + "</span>/" + aH)
    };
    if (L(),
        aC && (ay = setInterval(function() {
            aF++,
                L()
        }, aD)),
            aI) {
        for (var af = 0; aH > af; af++) {
            !function() {
                var b = af;
                aI[b].addEventListener("click", function() {
                    clearTimeout(ax),
                        clearTimeout(av),
                        aF = b,
                        L()
                })
            }()
        }
    }
    aM && aM.addEventListener("click", function() {
        (1 == aA || aF != aH - 1) && (clearTimeout(ax),
            clearTimeout(av),
            aF++,
            L())
    }),
    aN && aN.addEventListener("click", function() {
        (1 == aA || 0 != aF) && (clearTimeout(ax),
            clearTimeout(av),
            aF--,
            L())
    });
    var F = function(d) {
        clearTimeout(ax),
            clearTimeout(av),
            ai = void 0,
            ar = 0;
        var c = ao ? d.touches[0] : d;
        au = c.pageX,
            at = c.pageY,
            aK.addEventListener(am, f, !1),
            aK.addEventListener(al, aw, !1)
    }
        , f = function(d) {
        if (!ao || !(d.touches.length > 1 || d.scale && 1 !== d.scale)) {
            var c = ao ? d.touches[0] : d;
            if (ar = c.pageX - au,
                    aq = c.pageY - at,
                "undefined" == typeof ai && (ai = !!(ai || Math.abs(ar) < Math.abs(aq))),
                    !ai) {
                switch (d.preventDefault(),
                aC && clearInterval(ay),
                    aO) {
                    case "left":
                        (0 == aF && ar > 0 || aF >= aH - 1 && 0 > ar) && (ar = 0.4 * ar),
                            aa(-aF * ak + ar, 0);
                        break;
                    case "leftLoop":
                        aa(-(aF + 1) * ak + ar, 0)
                }
                null != aG && Math.abs(ar) > ak / 3 && ac(ar > -0 ? -1 : 1)
            }
        }
    }
        , aw = function(b) {
        0 != ar && (b.preventDefault(),
        ai || (Math.abs(ar) > ak / 10 && (ar > 0 ? aF-- : aF++),
            L(!0),
        aC && (ay = setInterval(function() {
            aF++,
                L()
        }, aD))),
            aK.removeEventListener(am, f, !1),
            aK.removeEventListener(al, aw, !1))
    };
    aK.addEventListener(an, F, !1)
};
(function(b) {
        function a() {
            var d = window.innerHeight;
            if (d) {
                return d
            }
            var e = document.compatMode;
            if (e || !b.support.boxModel) {
                d = "CSS1Compat" === e ? document.documentElement.clientHeight : document.body.clientHeight
            }
            return d
        }
        var c = function(d, h) {
            function i() {
                null !== g ? j = !0 : (j = !1,
                    d(),
                    g = setTimeout(function() {
                        g = null;
                        j && i()
                    }, h))
            }
            var j = !1
                , g = null;
            return i
        }(function() {
            var d = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                , h = d + a()
                , e = [];
            b.each(b.cache, function() {
                this.events && this.events.inview && e.push(this.handle.elem)
            });
            b(e).each(function() {
                var p = b(this), i;
                i = 0;
                for (var o = this; o; o = o.offsetParent) {
                    i += o.offsetTop
                }
                var o = p.height()
                    , j = i + o
                    , o = p.data("inview") || !1
                    , m = p.data("offset") || 0
                    , n = i > d && j < h
                    , f = j + m > d && i < d
                    , m = i - m < h && j > h;
                n || f || m || i < d && j > h ? (i = m ? "top" : f ? "bottom" : "both",
                o && o === i || (p.data("inview", i),
                    p.trigger("inview", [!0, i]))) : !n && o && (p.data("inview", !1),
                        p.trigger("inview", [!1]))
            })
        }, 100);
        b(window).on("checkInView.inview click.inview ready.inview scroll.inview resize.inview", c)
    }
)(jQuery);
jQuery.cookie = function(b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
}
;
var JuaIndex = 0;
var JuaArry = [];
var JuaBox = function(a) {
    this.id = a;
    this.type = 0;
    this.title = bitbank.L("CHBTC提示您");
    this.message = "";
    this.width = 500;
    this.height = "auto";
    this.frameWidth = "100%";
    this.frameHeight = null;
    this.btnNum = 2;
    this.btnName1 = bitbank.L("确定");
    this.btnName2 = bitbank.L("取消");
    this.btnName3 = bitbank.L("关闭");
    this.btnClass1 = "btn btn-primary";
    this.btnClass2 = "btn btn-default";
    this.btnClass3 = "btn btn-default";
    this.tipClass = "";
    this.needLogin = false;
    this.masking = true;
    this.showMini = false;
    this.showZoom = false;
    this.showClose = true;
    this.fullPage = false,
        this.miniPage = false,
        this.onlyOne = false;
    this.outFrame = true;
    this.dragWindow = false;
    this.timeSetFrame = false;
    this.timeOutClose = false;
    this.timeClose = 3000;
    this.zIndex = 10000;
    this.boxId = "JuaBox_" + this.id;
    this.maskId = "JuaMask_" + this.id;
    this.frameId = "JuaFrame_" + this.id;
    this.frameUrl = null;
    this.isFrame = function() {
        return JuaBox.isMySelf()
    }
    ;
    this.offsets = {
        x: 0,
        y: 0
    };
    this.option = function(b) {
        var b = b || {};
        this.ops = b;
        this.title = b.title ? b.title : this.title;
        this.width = b.width ? b.width : this.width;
        this.height = b.height ? b.height : this.height;
        this.frameWidth = b.frameWidth ? b.frameWidth : this.frameWidth;
        this.frameHeight = b.frameHeight ? b.frameHeight : this.frameHeight;
        this.btnNum = b.btnNum >= 0 ? b.btnNum : this.btnNum;
        this.btnName1 = b.btnName1 ? b.btnName1 : this.btnName1;
        this.btnName2 = b.btnName2 ? b.btnName2 : this.btnName2;
        this.btnName3 = b.btnName3 ? b.btnName3 : this.btnName3;
        this.btnClass1 = b.btnClass1 ? b.btnClass1 : this.btnClass1;
        this.btnClass2 = b.btnClass2 ? b.btnClass2 : this.btnClass2;
        this.btnClass3 = b.btnClass3 ? b.btnClass3 : this.btnClass3;
        this.tipClass = b.tipClass ? b.tipClass : this.tipClass;
        this.needLogin = b.needLogin != null ? b.needLogin : this.needLogin;
        this.masking = b.masking != null ? b.masking : this.masking;
        this.showMini = b.showMini != null ? b.showMini : JuaBox.isZoom() ? false : this.showMini;
        this.showZoom = b.showZoom != null ? b.showZoom : JuaBox.isZoom() ? false : this.showZoom;
        this.showClose = b.showClose != null ? b.showClose : this.showClose;
        this.fullPage = b.fullPage != null ? b.fullPage : this.fullPage;
        this.miniPage = b.miniPage != null ? b.miniPage : this.miniPage;
        this.onlyOne = b.onlyOne != null ? b.onlyOne : this.onlyOne;
        this.outFrame = b.outFrame != null ? b.outFrame : this.outFrame;
        this.dragWindow = b.dragWindow != null ? b.dragWindow : this.dragWindow;
        this.timeSetFrame = b.timeSetFrame != null ? b.timeSetFrame : this.timeSetFrame;
        this.timeOutClose = b.timeOutClose != null ? b.timeOutClose : this.timeOutClose;
        this.timeClose = b.timeClose ? b.timeClose : this.timeClose;
        this.offsets = b.offsets ? b.offsets : this.offsets;
        if (this.type == 1) {
            this.width = b.width || 600
        }
        if (this.type == 2) {
            this.width = b.width || 800
        }
        if (JuaBox.isZoom()) {
            this.width = "80%"
        }
        this.btnFun1 = function() {
            if ($.isFunction(b.btnFun1)) {
                return b.btnFun1(a)
            } else {
                return JuaBox.close(a)
            }
        }
        ;
        this.btnFun2 = function() {
            if ($.isFunction(b.btnFun2)) {
                return b.btnFun2(a)
            } else {
                return JuaBox.close(a)
            }
        }
        ;
        this.btnFun3 = function() {
            if ($.isFunction(b.btnFun3)) {
                return b.btnFun3(a)
            } else {
                return JuaBox.close(a)
            }
        }
        ;
        this.winMiniFun = function() {
            if ($.isFunction(b.winMiniFun)) {
                return b.winMiniFun(a)
            } else {
                return JuaBox.mini(a)
            }
        }
        ;
        this.winZoomFun = function() {
            if ($.isFunction(b.winZoomFun)) {
                return b.winZoomFun(a)
            } else {
                return JuaBox.zoom(a)
            }
        }
        ;
        this.winCloseFun = function() {
            if ($.isFunction(b.winCloseFun)) {
                return b.winCloseFun(a)
            } else {
                return JuaBox.close(a)
            }
        }
        ;
        this.maskFun = function() {
            if ($.isFunction(b.maskFun)) {
                return b.maskFun(a)
            } else {
                return JuaBox.close(a)
            }
        }
        ;
        this.startFun = function() {
            if ($.isFunction(b.startFun)) {
                return b.startFun(a)
            } else {
                return false
            }
        }
        ;
        this.endFun = function() {
            if ($.isFunction(b.endFun)) {
                return b.endFun(a)
            } else {
                return false
            }
        }
        ;
        this.closeFun = function() {
            if ($.isFunction(b.closeFun)) {
                return b.closeFun(a)
            } else {
                return false
            }
        }
        ;
        this.resizeFun = function() {
            if ($.isFunction(b.resizeFun)) {
                return b.resizeFun(a)
            } else {
                return false
            }
        }
        ;
        this.dragStartFun = function() {
            if ($.isFunction(b.dragStartFun)) {
                return b.dragStartFun(a)
            } else {
                return false
            }
        }
        ;
        this.dragEndFun = function() {
            if ($.isFunction(b.dragEndFun)) {
                return b.dragEndFun(a)
            } else {
                return false
            }
        }
        ;
        this.setFrameFun = function() {
            if ($.isFunction(b.setFrameFun)) {
                return b.setFrameFun(a)
            } else {
                return false
            }
        }
    }
    ;
    this.build = function(b) {
        this.btnHtml = "";
        this.winBtnHtml = "";
        if (this.type == 0) {
            if (JuaBox.isZoom()) {
                this.boxHtml = this.theme.mobileInfo()
            } else {
                this.boxHtml = this.theme.info()
            }
            this.contentHtml = b
        }
        if (this.type == 1) {
            if (JuaBox.isZoom()) {
                this.boxHtml = this.theme.mobileFrame()
            } else {
                this.boxHtml = this.theme.frame()
            }
            this.contentHtml = "<iframe src='" + b + "' id='" + this.frameId + "' class='JuaFrame' name='" + this.frameId + "' onload='$(window.frames[\"" + this.frameId + "\"].document.body).find(\".bk-animationload\").show()' frameBorder='0' width='100%' hspace='0' scrolling='no'></iframe>"
        }
        if (this.type == 2) {
            this.boxHtml = this.theme.album();
            this.contentHtml = "<img src='" + b + "' class='img-responsive'>"
        }
        if (this.type == 3) {
            this.boxHtml = this.theme.bubble();
            this.contentHtml = b
        }
        if (this.type == 4) {
            this.boxHtml = this.theme.showTip();
            this.contentHtml = b
        }
        if (this.btnNum > 2) {
            this.btnHtml += "<a id='JuaBtn_" + this.id + "_3' role='button' class='" + this.btnClass3 + "'>" + this.btnName3 + "</a>"
        }
        if (this.btnNum > 1) {
            this.btnHtml += "<a id='JuaBtn_" + this.id + "_2' role='button' class='" + this.btnClass2 + "'>" + this.btnName2 + "</a>"
        }
        if (this.btnNum != 0) {
            this.btnHtml += "<a id='JuaBtn_" + this.id + "_1' role='button' class='" + this.btnClass1 + "'>" + this.btnName1 + "</a>"
        }
        if (this.showMini) {
            this.winBtnHtml += "<a id='JuaWinBtn_" + this.id + "_1' role='button' class='win-btn win-btn-mini' title='Mini'><i class='fa fa-minus'></i></a>"
        }
        if (this.showZoom) {
            this.winBtnHtml += "<a id='JuaWinBtn_" + this.id + "_2' role='button' class='win-btn win-btn-zoom' title='Resize'><i class='fa fa-expand'></i></a>"
        }
        if (this.showClose) {
            this.winBtnHtml += "<a id='JuaWinBtn_" + this.id + "_3' role='button' class='win-btn win-btn-close' title='Close'><i class='fa fa-close'></i></a>"
        }
        this.boxHtml = this.boxHtml.replace("${JuaBox.title}", this.title);
        this.boxHtml = this.boxHtml.replace("${JuaBox.maskId}", this.maskId);
        this.boxHtml = this.boxHtml.replace("${JuaBox.boxId}", this.boxId);
        this.boxHtml = this.boxHtml.replace("${JuaBox.body}", this.contentHtml);
        this.boxHtml = this.boxHtml.replace("${JuaBox.foot}", this.btnHtml);
        this.boxHtml = this.boxHtml.replace("${JuaBox.zoom}", this.winBtnHtml);
        if ($("body")) {
            $("body").append(this.boxHtml)
        }
    }
    ;
    this.dragStart = function(g) {
        $("#JuaBox_" + a + " .head").css("cursor", "move");
        var d = 0
            , c = 0;
        var b, f;
        var h = $("#JuaBox_" + a).offset();
        b = parseInt(h.left, 10);
        f = parseInt(h.top, 10);
        c = g.pageY;
        d = g.pageX;
        $("#JuaBox_" + a).bind("mousemove", function(e) {
            var j = b + (e.pageX - d);
            var i = f + (e.pageY - c);
            $(this).css({
                top: i + "px",
                left: j + "px"
            });
            return false
        })
    }
    ;
    this.dragEnd = function() {
        $("#JuaBox_" + a + " .head").css("cursor", "auto");
        $("#JuaBox_" + a).unbind("mousemove")
    }
    ;
    this.reZindex = function(h) {
        if (h.target.nodeName == "BUTTON") {
            return false
        }
        var b = [];
        for (var g = 0, d = 1; g < JuaIndex; g++,
            d++) {
            b[g] = parseInt($("#JuaBox_" + d).css("z-index"))
        }
        var c = Math.max.apply(null, b);
        var f = parseInt($("#JuaBox_" + a).css("z-index"));
        for (var g = 0, d = 1; g < JuaIndex; g++,
            d++) {
            if (b[g] > f) {
                $("#JuaBox_" + d + ",#JuaMask_" + d).css("z-index", b[g] - 1)
            }
            if (b[g] == f) {
                $("#JuaBox_" + d + ",#JuaMask_" + d).css("z-index", c)
            }
        }
    }
    ;
    this.bind = function() {
        $("#" + this.maskId).bind("click", this.maskFun);
        if (this.type == 1) {
            $("#" + this.frameId).bind("load", this.setFrame);
            $("#" + this.frameId).bind("load", this.setFrameFun)
        }
        if (this.type == 2) {
            this.setAlbum($("#" + this.boxId + " .body img")[0])
        }
        if (this.dragWindow) {
            $("#" + this.boxId + " .head").bind("mousedown", this.dragStart);
            $("#" + this.boxId + " .head").bind("mouseup", this.dragEnd);
            $("#" + this.boxId + " .head").bind("mousedown", this.dragStartFun);
            $("#" + this.boxId + " .head").bind("mouseup", this.dragEndFun)
        }
        if (this.ops.btnFun1 && !$.isFunction(this.ops.btnFun1)) {
            $("#JuaBtn_" + this.id + "_1").attr("onclick", this.ops.btnFun1)
        } else {
            $("#JuaBtn_" + this.id + "_1").bind("click", this.btnFun1)
        }
        $("#JuaBtn_" + this.id + "_2").bind("click", this.btnFun2);
        $("#JuaBtn_" + this.id + "_3").bind("click", this.btnFun3);
        $("#JuaWinBtn_" + this.id + "_1").bind("click", this.winMiniFun);
        $("#JuaWinBtn_" + this.id + "_2").bind("click", this.winZoomFun);
        $("#JuaWinBtn_" + this.id + "_3").bind("click", this.winCloseFun);
        $(window).resize(function() {
            JuaBox.position()
        })
    }
    ;
    this.setFrame = function() {
        for (var b = 50; b < 2000; b += 50) {
            setTimeout(function() {
                try {
                    if (!this.title) {
                        $("#JuaBox_" + a + " .head h3").text(window.frames["JuaFrame_" + a + ""].document.title)
                    }
                    JuaBox.position(a);
                    JuaBox.reSetHeight(a)
                } catch (c) {
                    return
                }
            }, b)
        }
    }
    ;
    this.setAlbum = function(b) {
        var c = setInterval(function() {
            if (b.complete) {
                JuaBox.position();
                clearInterval(c)
            }
        }, 50)
    }
    ;
    this.position = function(b, c) {
        this.docW = $(document).width();
        this.docH = $(document).height();
        this.winW = $(window).width();
        this.winH = $(window).height();
        $("#" + this.maskId).css({
            width: Math.min(this.docW, this.winW),
            height: Math.max(this.docH, this.winH),
            "z-index": this.zIndex + this.id
        });
        $("#" + this.boxId).css({
            "min-width": this.fullPage ? "100%" : (JuaBox.isZoom() ? "320px" : "none"),
            "max-width": JuaBox.isZoom() ? "400px" : "none",
            width: this.fullPage ? "100%" : this.width,
            height: this.fullPage ? this.winH : this.height,
            "z-index": this.zIndex + this.id
        });
        if (this.fullPage && $("#JuaBox_" + b).outerHeight() < $("#JuaBox_" + b + " .head").outerHeight() + $("#JuaBox_" + b + " .body").outerHeight()) {
            $("#" + this.boxId).css({
                height: "auto"
            })
        }
        this.offTop = $(document).scrollTop();
        this.offLeft = $(document).scrollLeft();
        this.boxW = $("#" + this.boxId).outerWidth();
        this.boxH = $("#" + this.boxId).outerHeight();
        this.boxTop = Math.max(Math.max(this.winH - this.boxH, 0) / 2 + this.offTop + this.offsets.y, 0);
        this.boxLeft = this.fullPage ? 0 : Math.max(Math.max(this.winW - this.boxW, 0) / 2 + this.offLeft + this.offsets.x, 0);
        $("#" + this.boxId).css({
            top: this.boxTop,
            left: this.boxLeft
        });
        if ($.isFunction(c)) {
            c()
        }
    }
    ;
    this.mask = function() {
        if (this.masking) {
            $("#" + this.maskId).show()
        }
    }
    ;
    this.show = function(d) {
        var b = $("#" + this.boxId);
        var e = this;
        if (d == 4) {
            var c;
            if ($(".bk-nav").length > 0) {
                c = $(".bk-nav").height() + $(".bk-nav").offset().top
            } else {
                c = 0
            }
            if ($(document).scrollTop() > c) {
                b.css({
                    top: "0px",
                    position: "fixed"
                })
            } else {
                b.css({
                    top: c,
                    position: "absolute"
                })
            }
            b.slideDown(200);
            setTimeout(function() {
                b.slideUp(400, function() {
                    b.remove();
                    if ($.isFunction(e.closeFun)) {
                        e.closeFun()
                    }
                })
            }, 3000)
        } else {
            b.fadeIn(100, function() {
                if ($.isFunction(e.endFun)) {
                    e.endFun()
                }
            });
            if (this.timeOutClose) {
                if (this.type == 3) {
                    setTimeout(function() {
                        JuaBox.closeFade(a)
                    }, this.timeClose)
                } else {
                    setTimeout(function() {
                        JuaBox.close(a)
                    }, this.timeClose)
                }
            }
        }
    }
    ;
    this.mini = function(b, c) {
        if (this.miniPage) {
            this.miniPage = false;
            JuaBox.position(b, c)
        } else {
            this.miniPage = true;
            JuaBox.position(b, c)
        }
    }
    ;
    this.zoom = function(b, c) {
        if (this.fullPage) {
            this.fullPage = false;
            JuaBox.position(b, c)
        } else {
            this.fullPage = true;
            JuaBox.position(b, c)
        }
    }
    ;
    this.reSize = function(b) {
        JuaBox.position(b)
    }
    ;
    this.reSetHeight = function(b, e) {
        var d, c;
        if (this.type != 1) {
            return
        }
        if (b != null || b != undefined) {
            d = $(window.frames["JuaFrame_" + b + ""].document.body);
            d.find(".bk-body").css("height", "auto");
            c = d.outerHeight();
            $("#JuaFrame_" + b).height(c)
        } else {
            d = $(window.frames[$(window.frames).length - 1].document.body);
            d.find(".bk-body").css("height", "auto");
            c = d.outerHeight();
            $(".JuaFrame").eq(-1).height(c)
        }
        d.find(".bk-body").css({
            height: c,
            "background-color": "#fff",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            "min-width": "0"
        });
        d.find(".container").css("cssText", "min-width:0px !important");
        JuaBox.position(b);
        if ($.isFunction(e)) {
            e()
        }
    }
    ;
    this.close = function(b, c) {
        $("#JuaBox_" + b).hide();
        $("#JuaMask_" + b).hide();
        if ($.isFunction(c)) {
            c()
        }
        this.closeFun();
        $("#JuaBox_" + b).remove();
        $("#JuaMask_" + b).remove()
    }
    ;
    this.closeFade = function(b, c) {
        var d = this;
        $("#JuaBox_" + b).animate({
            top: "-20px",
            opacity: "0"
        }, 500, function() {
            if ($.isFunction(c)) {
                c()
            }
            d.closeFun();
            $("#JuaBox_" + b).remove()
        })
    }
    ;
    this.theme = {
        obj: this,
        info: function() {
            var b = "";
            b += "<div id='${JuaBox.maskId}' class='Jua-table-mask'></div>";
            b += "<div id='${JuaBox.boxId}' class='Jua-table-main'>";
            b += "  <div class='Jua-table-inner'>";
            b += "    <div class='head hide'><h3>${JuaBox.title}</h3></div>";
            b += "    <div class='body'>";
            b += "        <div class='bk-page-table' style='min-height:110px'><div class='bk-page-tableCell'><i class='fa fa-exclamation-triangle hidden' style='font-size:36px; margin-right:10px; color:#2DB1DC;'></i>${JuaBox.body}</div></div>";
            b += "    </div>";
            b += "    <div class='foot'>${JuaBox.foot}</div>";
            b += "    <div class='zoom'>${JuaBox.zoom}</div>";
            b += "  </div>";
            b += "</div>";
            return b
        },
        bubble: function() {
            var b = "";
            b += "<div id='${JuaBox.boxId}' class='Jua-bubble-main'>";
            b += "  <div class='Jua-bubble-inner'>";
            b += "    <div class='body'>";
            b += "        <div class='bk-page-table' style='min-height:110px'><div class='bk-page-tableCell text-center'>${JuaBox.body}</div></div>";
            b += "    </div>";
            b += "  </div>";
            b += "</div>";
            return b
        },
        frame: function() {
            var b = "";
            b += "<div id='${JuaBox.maskId}' class='Jua-table-mask'></div>";
            b += "<div id='${JuaBox.boxId}' class='Jua-table-main'>";
            b += "  <div class='Jua-table-inner'>";
            b += "    <div class='head hide'><h3>${JuaBox.title}</h3></div>";
            b += "    <div class='body'>${JuaBox.body}</div>";
            b += "    <div class='foot' style='display:none'>${JuaBox.foot}</div>";
            b += "    <div class='zoom'>${JuaBox.zoom}</div>";
            b += "  </div>";
            b += "</div>";
            return b
        },
        mobileInfo: function() {
            var b = "";
            b += "<div id='${JuaBox.maskId}' class='Jua-mobile-mask'></div>";
            b += "<div id='${JuaBox.boxId}' class='Jua-mobile-main'>";
            b += "  <div class='Jua-mobile-inner'>";
            b += "    <div class='head'><h3>${JuaBox.title}</h3></div>";
            b += "    <div class='body'>${JuaBox.body}</div>";
            b += "    <div class='foot'>${JuaBox.foot}</div>";
            b += "    <div class='zoom'>${JuaBox.zoom}</div>";
            b += "  </div>";
            b += "</div>";
            return b
        },
        mobileFrame: function() {
            var b = "";
            b += "<div id='${JuaBox.maskId}' class='Jua-mobile-mask'></div>";
            b += "<div id='${JuaBox.boxId}' class='Jua-mobile-main'>";
            b += "  <div class='Jua-mobile-inner'>";
            b += "    <div class='head'><h3>${JuaBox.title}</h3></div>";
            b += "    <div class='body'>${JuaBox.body}</div>";
            b += "    <div class='foot' style='display:none'>${JuaBox.foot}</div>";
            b += "    <div class='zoom'>${JuaBox.zoom}</div>";
            b += "  </div>";
            b += "</div>";
            return b
        },
        album: function() {
            var b = "";
            b += "<div id='${JuaBox.maskId}' class='Jua-album-mask'></div>";
            b += "<div id='${JuaBox.boxId}' class='Jua-album-main'>";
            b += "  <div class='Jua-album-inner'>";
            b += "    <div class='body'>${JuaBox.body}</div>";
            b += "    <div class='zoom'>${JuaBox.zoom}</div>";
            b += "  </div>";
            b += "</div>";
            return b
        },
        showTip: function() {
            var b = "";
            b += "<div class='alert alert-well alert-dismissible Jua-showTip " + this.obj.tipClass + "' role='alert' id='${JuaBox.boxId}'>";
            b += "  <p>${JuaBox.body}</p>";
            b += "</div>";
            return b
        }
    };
    this.info = function(c, b) {
        this.type = 0;
        this.message = c;
        this.option(b);
        if ($.isFunction(this.startFun)) {
            this.startFun()
        }
        this.build(this.message);
        this.bind();
        this.position();
        this.mask();
        this.show()
    }
    ;
    this.showTip = function(c, b) {
        this.type = 4;
        this.message = c;
        this.option(b);
        if ($.isFunction(this.startFun)) {
            this.startFun()
        }
        this.build(this.message);
        this.show(4);
        if ($.isFunction(this.endFun)) {
            this.endFun()
        }
    }
    ;
    this.bubble = function(c, b) {
        this.type = 3;
        this.message = c;
        this.option(b);
        this.timeOutClose = true;
        this.timeClose = 1500;
        this.masking = false;
        if ($.isFunction(this.startFun)) {
            this.startFun()
        }
        this.build(this.message);
        this.bind();
        this.position();
        this.mask();
        this.show();
        if ($.isFunction(this.endFun)) {
            this.endFun()
        }
    }
    ;
    this.frame = function(b, c) {
        this.type = 1;
        var d = b ? b : "";
        if (d.indexOf("?") < 0) {
            d += "?a=" + new Date().getTime()
        }
        if (d.indexOf("iframe=1") < 0) {
            d += "&iframe=1&r=" + new Date().getTime()
        }
        this.frameUrl = d;
        this.option(c);
        if (JuaBox.isZoom()) {
            this.fullPage = true
        }
        if ($.isFunction(this.startFun)) {
            this.startFun()
        }
        this.build(this.frameUrl);
        this.bind();
        this.position();
        this.mask();
        this.show();
        if ($.isFunction(this.endFun)) {
            this.endFun()
        }
    }
    ;
    this.album = function(c, b) {
        this.type = 2;
        this.src = c;
        this.option(b);
        if ($.isFunction(this.startFun)) {
            this.startFun()
        }
        this.build(this.src);
        this.bind();
        this.position();
        this.mask();
        this.show();
        if ($.isFunction(this.endFun)) {
            this.endFun()
        }
    }
};
JuaBox.isMySelf = function() {
    var a = true;
    try {
        a = (window.top == window.self)
    } catch (b) {
        a = true
    }
    return a
}
;
JuaBox.showJuaBoxInfo = function(d, b) {
    if (!JuaBox.isMySelf()) {
        var a = false;
        try {
            a = parent.JuaBox
        } catch (c) {
            a = false
        }
        if (a) {
            parent.JuaBox.info(d, b);
            return true
        }
    }
    return false
}
;
JuaBox.info = function(b, a) {
    if (JuaBox.showJuaBoxInfo(b, a)) {
        return
    }
    var a = a || {};
    if (a.needLogin && !bitbank.getCookie(chbtc.cookiKeys.uname)) {
        return JuaBox.log()
    }
    JuaIndex++;
    JuaArry[JuaIndex] = new JuaBox(JuaIndex);
    JuaArry[JuaIndex].info(b, a)
}
;
JuaBox.sure = function(b, a) {
    var a = a || {};
    a.btnNum = 1;
    a.showClose = false;
    a.maskFun = function() {}
    ;
    if (JuaBox.showJuaBoxInfo(b, a)) {
        return
    }
    if (a.needLogin && !bitbank.getCookie(chbtc.cookiKeys.uname)) {
        return JuaBox.log()
    }
    JuaIndex++;
    a.endFun = function() {
        $("a,form,button,input,fieldset,textarea,select,label").blur();
        $("body").keypress(function(c) {
            if (c.keyCode == 13) {
                $("#JuaBtn_" + JuaIndex + "_1").click()
            }
        })
    }
    ;
    JuaArry[JuaIndex] = new JuaBox(JuaIndex);
    JuaArry[JuaIndex].info(b, a)
}
;
JuaBox.bubble = function(b, a) {
    var a = a || {};
    JuaIndex++;
    JuaArry[JuaIndex] = new JuaBox(JuaIndex);
    JuaArry[JuaIndex].bubble(b, a)
}
;
JuaBox.album = function(b, a) {
    if (!JuaBox.isMySelf()) {
        return parent.JuaBox.album(b, a)
    }
    var a = a || {};
    if (a.needLogin && !bitbank.getCookie(chbtc.cookiKeys.uname)) {
        return JuaBox.log()
    }
    JuaIndex++;
    JuaArry[JuaIndex] = new JuaBox(JuaIndex);
    JuaArry[JuaIndex].album(b, a)
}
;
JuaBox.showTip = function(b, a) {
    if (JuaBox.showJuaBoxInfo(b, a)) {
        return
    }
    var a = a || {};
    if (a.needLogin && !bitbank.getCookie(chbtc.cookiKeys.uname)) {
        return JuaBox.log()
    }
    JuaIndex++;
    JuaArry[JuaIndex] = new JuaBox(JuaIndex);
    JuaArry[JuaIndex].showTip(b, a)
}
;
JuaBox.showWrong = function(b, a) {
    var a = a || {};
    a.tipClass = a.tipClass || "wrong";
    JuaBox.showTip(b, a)
}
;
JuaBox.showRight = function(b, a) {
    var a = a || {};
    a.tipClass = a.tipClass || "right";
    JuaBox.showTip(b, a)
}
;
JuaBox.frame = function(a, b) {
    var b = b || {};
    if (b.needLogin && !bitbank.getCookie(chbtc.cookiKeys.uname)) {
        return JuaBox.log()
    }
    JuaIndex++;
    JuaArry[JuaIndex] = new JuaBox(JuaIndex);
    JuaArry[JuaIndex].frame(a, b)
}
;
JuaBox.close = function(a, b) {
    if (a != null || a != undefined) {
        if (JuaArry[a]) {
            JuaArry[a].close(a, b)
        }
    } else {
        JuaBox.close(JuaIndex)
    }
}
;
JuaBox.closeFade = function(a, b) {
    if (a != null || a != undefined) {
        if (JuaArry[a]) {
            JuaArry[a].closeFade(a, b)
        }
    }
}
;
JuaBox.closeAll = function(c) {
    for (var b = 0, a = 1; b < JuaIndex; b++,
        a++) {
        JuaArry[a].close(a)
    }
    if ($.isFunction(c)) {
        c()
    }
}
;
JuaBox.mini = function(a, b) {
    JuaArry[a].mini(a, b)
}
;
JuaBox.zoom = function(a, b) {
    JuaArry[a].zoom(a, b)
}
;
JuaBox.reZindex = function(a, b) {
    JuaArry[a].reZindex(a, b)
}
;
JuaBox.position = function(b, d) {
    if (b == null || b == undefined) {
        for (var c = 0, a = 1; c < JuaIndex; c++,
            a++) {
            JuaArry[a].position(a)
        }
    } else {
        if (JuaArry[b]) {
            JuaArry[b].position(b, d)
        }
    }
}
;
JuaBox.resetFrame = function(b, d) {
    if (b == null || b == undefined) {
        for (var c = 0, a = 1; c < JuaIndex; c++,
            a++) {
            JuaArry[a].setFrame()
        }
    } else {
        if (JuaArry[b]) {
            JuaArry[b].setFrame(b, d)
        }
    }
}
;
JuaBox.reSetHeight = function(a, b) {
    if (JuaBox.isMySelf()) {
        if (a == null || a == undefined) {
            if (JuaArry[JuaIndex]) {
                JuaArry[JuaIndex].reSetHeight(JuaIndex)
            }
        } else {
            if (JuaArry[a]) {
                JuaArry[a].reSetHeight(a, b)
            }
        }
    } else {
        $(".bk-body").css("height", "auto");
        parent.$(".JuaFrame").eq(-1).height($(document).find("body").outerHeight());
        parent.JuaBox.position()
    }
}
;
JuaBox.isMobile = function() {
    var d = navigator.userAgent.toLowerCase();
    var h = d.match(/ipad/i) == "ipad";
    var c = d.match(/letv/i) == "letv";
    var i = d.match(/iphone os/i) == "iphone os";
    var g = d.match(/midp/i) == "midp";
    var e = d.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var f = d.match(/ucweb/i) == "ucweb";
    var a = d.match(/android/i) == "android";
    var b = d.match(/windows ce/i) == "windows ce";
    var j = d.match(/windows mobile/i) == "windows mobile";
    if (h || c || i || g || e || f || a || b || j) {
        return true
    } else {
        return false
    }
}
;
JuaBox.isZoom = function() {
    return $("meta[name='viewport']").length > 0 && JuaBox.isMobile()
}
;
JuaBox.log = function() {
    JuaBox.frame("/bitbank/user/login", {
        width: 500
    })
}
;
JuaBox.reg = function() {
    JuaBox.frame("/bitbank/user/register", {
        width: 500
    })
}
;
function formatNum() {
    $(".bsNum,.bkNum").each(function() {
        var a = $(this).text();
        var b = a.indexOf(".");
        if (b > 0) {
            $(this).html(a.substring(0, b) + "<g>" + a.substring(b) + "</g>")
        }
    })
}
(function(a) {
        a.fn.loading = function(g, j) {
            var g = parseFloat(g).toFixed(2);
            var j = parseFloat(j);
            var e = "TH/S";
            var f = function(i) {
                if ((i + 1) % 12 == 0) {
                    return i + 1
                } else {
                    return f(i + 1)
                }
            };
            var c = function(m) {
                if (m < 10) {
                    m = Number(m);
                    m = m * 100;
                    if (m % 12 == 0) {
                        return (m + 10) / 100
                    }
                    m = f(m);
                    return m / 100
                } else {
                    m = parseInt(m);
                    var i = 12 - parseInt(Number(m) % 12);
                    return m + i
                }
            };
            if (g > 1000) {
                g = (g / 1000).toFixed(2);
                e = "PH/S"
            }
            if (!j) {
                j = c(g)
            }
            var l = "<div class='pointer'></div>";
            l += "<span class='pix-syn'>" + e + "</span>";
            var k = (g * 240 / j).toFixed(0);
            var d = j / 12;
            for (var h = 0; h < 13; h++) {
                var b = d * h;
                if (b % 1 == 0) {
                    l += "<span class='pix-" + h + "'>" + parseInt(b) + "</span>"
                } else {
                    if (g < 1) {
                        l += "<span class='pix-" + h + "'>" + b.toFixed(2) + "</span>"
                    } else {
                        l += "<span class='pix-" + h + "'>" + b.toFixed(1) + "</span>"
                    }
                }
            }
            return a(this).each(function() {
                a(this).find(".dash-pix").html(l);
                a(this).find(".dash-data").text(g);
                a(this).find(".pointer").css({
                    "-webkit-transform": "rotate(" + k + "deg)",
                    transform: "rotate(" + k + "deg)"
                })
            })
        }
    }
)(jQuery);
(function(b) {
        var a = {
            init: function(d, c) {
                return (function() {
                        if (c.noPage) {
                            a.NPfillHtml(d, c);
                            a.NPbindEvent(d, c)
                        } else {
                            a.fillHtml(d, c);
                            a.bindEvent(d, c)
                        }
                    }
                )()
            },
            NPfillHtml: function(d, c) {
                return (function() {
                        d.empty();
                        if (c.current > 1) {
                            d.append('<li class="prevPage"><a href="javascript:;">' + bitbank.L("上一页") + "</a></li>")
                        } else {
                            d.remove(".prevPage");
                            d.append('<li class="disabled"><a href="javascript:;">' + bitbank.L("上一页") + "</a></li>")
                        }
                        if (c.rsCount < c.pageSize) {
                            d.remove(".nextPage");
                            d.append('<li class="disabled"><a href="javascript:;">' + bitbank.L("下一页") + "</a></li>")
                        } else {
                            d.append('<li class="nextPage"><a href="javascript:;">' + bitbank.L("下一页") + "</a></li>")
                        }
                        d.wrapInner('<ul class="pagination" />')
                    }
                )()
            },
            NPbindEvent: function(d, c) {
                return (function() {
                        d.off("click", ".prevPage");
                        d.off("click", ".nextPage");
                        d.on("click", ".prevPage", function() {
                            var e = parseInt(c.current);
                            a.NPfillHtml(d, {
                                noPage: true,
                                pageSize: c.pageSize,
                                rsCount: c.rsCount,
                                current: e - 1
                            });
                            if (typeof (c.backFn) == "function") {
                                c.backFn(e - 1)
                            }
                        });
                        d.on("click", ".nextPage", function() {
                            var e = parseInt(c.current);
                            a.NPfillHtml(d, {
                                noPage: true,
                                pageSize: c.pageSize,
                                rsCount: c.rsCount,
                                current: e + 1
                            });
                            if (typeof (c.backFn) == "function") {
                                c.backFn(e + 1)
                            }
                        })
                    }
                )()
            },
            fillHtml: function(d, c) {
                return (function() {
                        d.empty();
                        if (c.current > 1) {
                            d.append('<li class="prevPage"><a href="javascript:;"><i class="fa fa-angle-left"></i></a></li>')
                        } else {
                            d.remove(".prevPage");
                            d.append('<li class="disabled"><a href="javascript:;"><i class="fa fa-angle-left"></i></a></li>')
                        }
                        if (c.current != 1 && c.current >= 4 && c.pageCount != 4) {
                            d.append('<li class="tcdNumber"><a href="javascript:;">' + 1 + "</a></li>")
                        }
                        if (c.current - 2 > 2 && c.current <= c.pageCount && c.pageCount > 5) {
                            d.append('<li><a href="javascript:;">...</a></li>')
                        }
                        var f = c.current - 2
                            , e = c.current + 2;
                        if ((f > 1 && c.current < 4) || c.current == 1) {
                            e++
                        }
                        if (c.current > c.pageCount - 4 && c.current >= c.pageCount) {
                            f--
                        }
                        for (; f <= e; f++) {
                            if (f <= c.pageCount && f >= 1) {
                                if (f != c.current) {
                                    d.append('<li class="tcdNumber"><a href="javascript:;">' + f + "</a></li>")
                                } else {
                                    d.append('<li class="active"><a href="javascript:;">' + f + "</a></li>")
                                }
                            }
                        }
                        if (c.current + 2 < c.pageCount - 1 && c.current >= 1 && c.pageCount > 5) {
                            d.append('<li><a href="javascript:;">...</a></li>')
                        }
                        if (c.current != c.pageCount && c.current < c.pageCount - 2 && c.pageCount != 4) {
                            d.append('<li class="tcdNumber"><a href="javascript:;">' + c.pageCount + "</a></li>")
                        }
                        if (c.current < c.pageCount) {
                            d.append('<li class="nextPage"><a href="javascript:;"><i class="fa fa-angle-right"></i></a></li>')
                        } else {
                            d.remove(".nextPage");
                            d.append('<li class="disabled"><a href="javascript:;"><i class="fa fa-angle-right"></i></a></li>')
                        }
                        d.wrapInner('<ul class="pagination" />')
                    }
                )()
            },
            bindEvent: function(d, c) {
                return (function() {
                        d.off("click", ".tcdNumber");
                        d.off("click", ".prevPage");
                        d.off("click", ".nextPage");
                        d.on("click", ".tcdNumber", function() {
                            var e = parseInt(b(this).text());
                            a.fillHtml(d, {
                                current: e,
                                pageCount: c.pageCount
                            });
                            if (typeof (c.backFn) == "function") {
                                c.backFn(e)
                            }
                        });
                        d.on("click", ".prevPage", function() {
                            var e = parseInt(d.find(".active").text());
                            a.fillHtml(d, {
                                current: e - 1,
                                pageCount: c.pageCount
                            });
                            if (typeof (c.backFn) == "function") {
                                c.backFn(e - 1)
                            }
                        });
                        d.on("click", ".nextPage", function() {
                            var e = parseInt(d.find(".active").text());
                            a.fillHtml(d, {
                                current: e + 1,
                                pageCount: c.pageCount
                            });
                            if (typeof (c.backFn) == "function") {
                                c.backFn(e + 1)
                            }
                        })
                    }
                )()
            }
        };
        b.fn.createPage = function(d) {
            var c = b.extend({
                noPage: false,
                pageSize: 10,
                rsCount: 10,
                pageCount: 10,
                current: 1,
                backFn: function() {}
            }, d);
            a.init(this, c)
        }
    }
)(jQuery);
