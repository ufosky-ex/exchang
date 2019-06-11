LBF.define("lib.Zepto", function (require) {
    var t = function () {
        function t(t) {
            return null == t ? String(t) : Y[J.call(t)] || "object"
        }

        function e(e) {
            return "function" == t(e)
        }

        function n(t) {
            return null != t && t == t.window
        }

        function r(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function i(e) {
            return "object" == t(e)
        }

        function o(t) {
            return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
        }

        function a(t) {
            var e = !!t && "length" in t && t.length, r = j.type(t);
            return "function" != r && !n(t) && ("array" == r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function s(t) {
            return M.call(t, function (t) {
                return null != t
            })
        }

        function u(t) {
            return t.length > 0 ? j.fn.concat.apply([], t) : t
        }

        function c(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function l(t) {
            return t in $ ? $[t] : $[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function f(t, e) {
            return "number" != typeof e || F[c(t)] ? e : e + "px"
        }

        function h(t) {
            var e, n;
            return A[t] || (e = L.createElement(t), L.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), A[t] = n), A[t]
        }

        function p(t) {
            return "children" in t ? D.call(t.children) : j.map(t.childNodes, function (t) {
                    if (1 == t.nodeType)return t
                })
        }

        function d(t, e) {
            var n, r = t ? t.length : 0;
            for (n = 0; n < r; n++)this[n] = t[n];
            this.length = r, this.selector = e || ""
        }

        function m(t, e, n) {
            for (T in e)n && (o(e[T]) || Q(e[T])) ? (o(e[T]) && !o(t[T]) && (t[T] = {}), Q(e[T]) && !Q(t[T]) && (t[T] = []), m(t[T], e[T], n)) : e[T] !== E && (t[T] = e[T])
        }

        function g(t, e) {
            return null == e ? j(t) : j(t).filter(e)
        }

        function v(t, n, r, i) {
            return e(n) ? n.call(t, r, i) : n
        }

        function y(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
        }

        function x(t, e) {
            var n = t.className || "", r = n && n.baseVal !== E;
            if (e === E)return r ? n.baseVal : n;
            r ? n.baseVal = e : t.className = e
        }

        function w(t) {
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? j.parseJSON(t) : t) : t
            } catch (e) {
                return t
            }
        }

        function b(t, e) {
            e(t);
            for (var n = 0, r = t.childNodes.length; n < r; n++)b(t.childNodes[n], e)
        }

        var E, T, j, S, N, C, P = [], O = P.concat, M = P.filter, D = P.slice, L = window.document, A = {}, $ = {}, F = {
            "column-count": 1,
            "columns": 1,
            "font-weight": 1,
            "line-height": 1,
            "opacity": 1,
            "z-index": 1,
            "zoom": 1
        }, R = /^\s*<(\w+|!)[^>]*>/, Z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, q = /^(?:body|html)$/i, z = /([A-Z])/g, H = ["val", "css", "html", "text", "data", "width", "height", "offset"], _ = ["after", "prepend", "before", "append"], X = L.createElement("table"), B = L.createElement("tr"), I = {
            "tr": L.createElement("tbody"),
            "tbody": X,
            "thead": X,
            "tfoot": X,
            "td": B,
            "th": B,
            "*": L.createElement("div")
        }, U = /complete|loaded|interactive/, V = /^[\w-]*$/, Y = {}, J = Y.toString, G = {}, W = L.createElement("div"), K = {
            "tabindex": "tabIndex",
            "readonly": "readOnly",
            "for": "htmlFor",
            "class": "className",
            "maxlength": "maxLength",
            "cellspacing": "cellSpacing",
            "cellpadding": "cellPadding",
            "rowspan": "rowSpan",
            "colspan": "colSpan",
            "usemap": "useMap",
            "frameborder": "frameBorder",
            "contenteditable": "contentEditable"
        }, Q = Array.isArray || function (t) {
                return t instanceof Array
            };
        return G.matches = function (t, e) {
            if (!e || !t || 1 !== t.nodeType)return !1;
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n)return n.call(t, e);
            var r, i = t.parentNode, o = !i;
            return o && (i = W).appendChild(t), r = ~G.qsa(i, e).indexOf(t), o && W.removeChild(t), r
        }, N = function (t) {
            return t.replace(/-+(.)?/g, function (t, e) {
                return e ? e.toUpperCase() : ""
            })
        }, C = function (t) {
            return M.call(t, function (e, n) {
                return t.indexOf(e) == n
            })
        }, G.fragment = function (t, e, n) {
            var r, i, a;
            return Z.test(t) && (r = j(L.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(k, "<$1></$2>")), e === E && (e = R.test(t) && RegExp.$1), e in I || (e = "*"), a = I[e], a.innerHTML = "" + t, r = j.each(D.call(a.childNodes), function () {
                a.removeChild(this)
            })), o(n) && (i = j(r), j.each(n, function (t, e) {
                H.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
            })), r
        }, G.Z = function (t, e) {
            return new d(t, e)
        }, G.isZ = function (t) {
            return t instanceof G.Z
        }, G.init = function (t, n) {
            var r;
            if (!t)return G.Z();
            if ("string" == typeof t)if (t = t.trim(), "<" == t[0] && R.test(t)) r = G.fragment(t, RegExp.$1, n), t = null; else {
                if (n !== E)return j(n).find(t);
                r = G.qsa(L, t)
            } else {
                if (e(t))return j(L).ready(t);
                if (G.isZ(t))return t;
                if (Q(t)) r = s(t); else if (i(t)) r = [t], t = null; else if (R.test(t)) r = G.fragment(t.trim(), RegExp.$1, n), t = null; else {
                    if (n !== E)return j(n).find(t);
                    r = G.qsa(L, t)
                }
            }
            return G.Z(r, t)
        }, j = function (t, e) {
            return G.init(t, e)
        }, j.extend = function (t) {
            var e, n = D.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
                m(t, n, e)
            }), t
        }, G.qsa = function (t, e) {
            var n, r = "#" == e[0], i = !r && "." == e[0], o = r || i ? e.slice(1) : e, a = V.test(o);
            return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        }, j.contains = L.documentElement.contains ? function (t, e) {
                return t !== e && t.contains(e)
            } : function (t, e) {
                for (; e && (e = e.parentNode);)if (e === t)return !0;
                return !1
            }, j.type = t, j.isFunction = e, j.isWindow = n, j.isArray = Q, j.isPlainObject = o, j.isEmptyObject = function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, j.isNumeric = function (t) {
            var e = Number(t), n = typeof t;
            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
        }, j.inArray = function (t, e, n) {
            return P.indexOf.call(e, t, n)
        }, j.camelCase = N, j.trim = function (t) {
            return null == t ? "" : String.prototype.trim.call(t)
        }, j.uuid = 0, j.support = {}, j.expr = {}, j.noop = function () {
        }, j.map = function (t, e) {
            var n, r, i, o = [];
            if (a(t))for (r = 0; r < t.length; r++)null != (n = e(t[r], r)) && o.push(n); else for (i in t)null != (n = e(t[i], i)) && o.push(n);
            return u(o)
        }, j.each = function (t, e) {
            var n, r;
            if (a(t)) {
                for (n = 0; n < t.length; n++)if (!1 === e.call(t[n], n, t[n]))return t
            } else for (r in t)if (!1 === e.call(t[r], r, t[r]))return t;
            return t
        }, j.grep = function (t, e) {
            return M.call(t, e)
        }, window.JSON && (j.parseJSON = JSON.parse), j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            Y["[object " + e + "]"] = e.toLowerCase()
        }), j.fn = {
            constructor: G.Z,
            length: 0,
            forEach: P.forEach,
            reduce: P.reduce,
            push: P.push,
            sort: P.sort,
            splice: P.splice,
            indexOf: P.indexOf,
            concat: function () {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++)e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
                return O.apply(G.isZ(this) ? this.toArray() : this, n)
            },
            map: function (t) {
                return j(j.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return j(D.apply(this, arguments))
            },
            ready: function (t) {
                return U.test(L.readyState) && L.body ? t(j) : L.addEventListener("DOMContentLoaded", function () {
                        t(j)
                    }, !1), this
            },
            get: function (t) {
                return t === E ? D.call(this) : this[t >= 0 ? t : t + this.length]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (t) {
                return P.every.call(this, function (e, n) {
                    return !1 !== t.call(e, n, e)
                }), this
            },
            filter: function (t) {
                return e(t) ? this.not(this.not(t)) : j(M.call(this, function (e) {
                        return G.matches(e, t)
                    }))
            },
            add: function (t, e) {
                return j(C(this.concat(j(t, e))))
            },
            is: function (t) {
                return this.length > 0 && G.matches(this[0], t)
            },
            not: function (t) {
                var n = [];
                if (e(t) && t.call !== E) this.each(function (e) {
                    t.call(this, e) || n.push(this)
                }); else {
                    var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? D.call(t) : j(t);
                    this.forEach(function (t) {
                        r.indexOf(t) < 0 && n.push(t)
                    })
                }
                return j(n)
            },
            has: function (t) {
                return this.filter(function () {
                    return i(t) ? j.contains(this, t) : j(this).find(t).size()
                })
            },
            eq: function (t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function () {
                var t = this[0];
                return t && !i(t) ? t : j(t)
            },
            last: function () {
                var t = this[this.length - 1];
                return t && !i(t) ? t : j(t)
            },
            find: function (t) {
                var e = this;
                return t ? "object" == typeof t ? j(t).filter(function () {
                            var t = this;
                            return P.some.call(e, function (e) {
                                return j.contains(e, t)
                            })
                        }) : 1 == this.length ? j(G.qsa(this[0], t)) : this.map(function () {
                                return G.qsa(this, t)
                            }) : j()
            },
            closest: function (t, e) {
                var n = [], i = "object" == typeof t && j(t);
                return this.each(function (o, a) {
                    for (; a && !(i ? i.indexOf(a) >= 0 : G.matches(a, t));)a = a !== e && !r(a) && a.parentNode;
                    a && n.indexOf(a) < 0 && n.push(a)
                }), j(n)
            },
            parents: function (t) {
                for (var e = [], n = this; n.length > 0;)n = j.map(n, function (t) {
                    if ((t = t.parentNode) && !r(t) && e.indexOf(t) < 0)return e.push(t), t
                });
                return g(e, t)
            },
            parent: function (t) {
                return g(C(this.pluck("parentNode")), t)
            },
            children: function (t) {
                return g(this.map(function () {
                    return p(this)
                }), t)
            },
            contents: function () {
                return this.map(function () {
                    return this.contentDocument || D.call(this.childNodes)
                })
            },
            siblings: function (t) {
                return g(this.map(function (t, e) {
                    return M.call(p(e.parentNode), function (t) {
                        return t !== e
                    })
                }), t)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (t) {
                return j.map(this, function (e) {
                    return e[t]
                })
            },
            show: function () {
                return this.each(function () {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
                })
            },
            replaceWith: function (t) {
                return this.before(t).remove()
            },
            wrap: function (t) {
                var n = e(t);
                if (this[0] && !n)var r = j(t).get(0), i = r.parentNode || this.length > 1;
                return this.each(function (e) {
                    j(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
                })
            },
            wrapAll: function (t) {
                if (this[0]) {
                    j(this[0]).before(t = j(t));
                    for (var e; (e = t.children()).length;)t = e.first();
                    j(t).append(this)
                }
                return this
            },
            wrapInner: function (t) {
                var n = e(t);
                return this.each(function (e) {
                    var r = j(this), i = r.contents(), o = n ? t.call(this, e) : t;
                    i.length ? i.wrapAll(o) : r.append(o)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    j(this).replaceWith(j(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (t) {
                return this.each(function () {
                    var e = j(this);
                    (t === E ? "none" == e.css("display") : t) ? e.show() : e.hide()
                })
            },
            prev: function (t) {
                return j(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function (t) {
                return j(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function (t) {
                return 0 in arguments ? this.each(function (e) {
                        var n = this.innerHTML;
                        j(this).empty().append(v(this, t, e, n))
                    }) : 0 in this ? this[0].innerHTML : null
            },
            text: function (t) {
                return 0 in arguments ? this.each(function (e) {
                        var n = v(this, t, e, this.textContent);
                        this.textContent = null == n ? "" : "" + n
                    }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function (t, e) {
                var n;
                return "string" != typeof t || 1 in arguments ? this.each(function (n) {
                        if (1 === this.nodeType)if (i(t))for (T in t)y(this, T, t[T]); else y(this, t, v(this, e, n, this.getAttribute(t)))
                    }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : E
            },
            removeAttr: function (t) {
                return this.each(function () {
                    1 === this.nodeType && t.split(" ").forEach(function (t) {
                        y(this, t)
                    }, this)
                })
            },
            prop: function (t, e) {
                return t = K[t] || t, 1 in arguments ? this.each(function (n) {
                        this[t] = v(this, e, n, this[t])
                    }) : this[0] && this[0][t]
            },
            removeProp: function (t) {
                return t = K[t] || t, this.each(function () {
                    delete this[t]
                })
            },
            data: function (t, e) {
                var n = "data-" + t.replace(z, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== r ? w(r) : E
            },
            val: function (t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
                        this.value = v(this, t, e, this.value)
                    })) : this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function () {
                            return this.selected
                        }).pluck("value") : this[0].value)
            },
            offset: function (t) {
                if (t)return this.each(function (e) {
                    var n = j(this), r = v(this, t, e, n.offset()), i = n.offsetParent().offset(), o = {
                        top: r.top - i.top,
                        left: r.left - i.left
                    };
                    "static" == n.css("position") && (o.position = "relative"), n.css(o)
                });
                if (!this.length)return null;
                if (L.documentElement !== this[0] && !j.contains(L.documentElement, this[0]))return {top: 0, left: 0};
                var e = this[0].getBoundingClientRect();
                return {
                    left: e.left + window.pageXOffset,
                    top: e.top + window.pageYOffset,
                    width: Math.round(e.width),
                    height: Math.round(e.height)
                }
            },
            css: function (e, n) {
                if (arguments.length < 2) {
                    var r = this[0];
                    if ("string" == typeof e) {
                        if (!r)return;
                        return r.style[N(e)] || getComputedStyle(r, "").getPropertyValue(e)
                    }
                    if (Q(e)) {
                        if (!r)return;
                        var i = {}, o = getComputedStyle(r, "");
                        return j.each(e, function (t, e) {
                            i[e] = r.style[N(e)] || o.getPropertyValue(e)
                        }), i
                    }
                }
                var a = "";
                if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function () {
                        this.style.removeProperty(c(e))
                    }); else for (T in e)e[T] || 0 === e[T] ? a += c(T) + ":" + f(T, e[T]) + ";" : this.each(function () {
                        this.style.removeProperty(c(T))
                    });
                return this.each(function () {
                    this.style.cssText += ";" + a
                })
            },
            index: function (t) {
                return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (t) {
                return !!t && P.some.call(this, function (t) {
                        return this.test(x(t))
                    }, l(t))
            },
            addClass: function (t) {
                return t ? this.each(function (e) {
                        if ("className" in this) {
                            S = [];
                            var n = x(this);
                            v(this, t, e, n).split(/\s+/g).forEach(function (t) {
                                j(this).hasClass(t) || S.push(t)
                            }, this), S.length && x(this, n + (n ? " " : "") + S.join(" "))
                        }
                    }) : this
            },
            removeClass: function (t) {
                return this.each(function (e) {
                    if ("className" in this) {
                        if (t === E)return x(this, "");
                        S = x(this), v(this, t, e, S).split(/\s+/g).forEach(function (t) {
                            S = S.replace(l(t), " ")
                        }), x(this, S.trim())
                    }
                })
            },
            toggleClass: function (t, e) {
                return t ? this.each(function (n) {
                        var r = j(this);
                        v(this, t, n, x(this)).split(/\s+/g).forEach(function (t) {
                            (e === E ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                        })
                    }) : this
            },
            scrollTop: function (t) {
                if (this.length) {
                    var e = "scrollTop" in this[0];
                    return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                                this.scrollTop = t
                            } : function () {
                                this.scrollTo(this.scrollX, t)
                            })
                }
            },
            scrollLeft: function (t) {
                if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                                this.scrollLeft = t
                            } : function () {
                                this.scrollTo(t, this.scrollY)
                            })
                }
            },
            position: function () {
                if (this.length) {
                    var t = this[0], e = this.offsetParent(), n = this.offset(), r = q.test(e[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : e.offset();
                    return n.top -= parseFloat(j(t).css("margin-top")) || 0, n.left -= parseFloat(j(t).css("margin-left")) || 0, r.top += parseFloat(j(e[0]).css("border-top-width")) || 0, r.left += parseFloat(j(e[0]).css("border-left-width")) || 0, {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || L.body; t && !q.test(t.nodeName) && "static" == j(t).css("position");)t = t.offsetParent;
                    return t
                })
            }
        }, j.fn.detach = j.fn.remove, ["width", "height"].forEach(function (t) {
            var e = t.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            j.fn[t] = function (i) {
                var o, a = this[0];
                return i === E ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
                        a = j(this), a.css(t, v(this, i, e, a[t]()))
                    })
            }
        }), _.forEach(function (e, n) {
            var r = n % 2;
            j.fn[e] = function () {
                var e, i, o = j.map(arguments, function (n) {
                    var r = [];
                    return e = t(n), "array" == e ? (n.forEach(function (t) {
                            return t.nodeType !== E ? r.push(t) : j.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(G.fragment(t)))
                        }), r) : "object" == e || null == n ? n : G.fragment(n)
                }), a = this.length > 1;
                return o.length < 1 ? this : this.each(function (t, e) {
                        i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                        var s = j.contains(L.documentElement, i);
                        o.forEach(function (t) {
                            if (a) t = t.cloneNode(!0); else if (!i)return j(t).remove();
                            i.insertBefore(t, e), s && b(t, function (t) {
                                if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                                    var e = t.ownerDocument ? t.ownerDocument.defaultView : window;
                                    e.eval.call(e, t.innerHTML)
                                }
                            })
                        })
                    })
            }, j.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
                return j(t)[e](this), this
            }
        }), G.Z.prototype = d.prototype = j.fn, G.uniq = C, G.deserializeValue = w, j.zepto = G, j
    }();
    return window.Zepto = t, void 0 === window.$ && (window.$ = t), function (t) {
        function e(t) {
            return t._zid || (t._zid = h++)
        }

        function n(t, n, o, a) {
            if (n = r(n), n.ns)var s = i(n.ns);
            return (g[e(t)] || []).filter(function (t) {
                return t && (!n.e || t.e == n.e) && (!n.ns || s.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!a || t.sel == a)
            })
        }

        function r(t) {
            var e = ("" + t).split(".");
            return {e: e[0], ns: e.slice(1).sort().join(" ")}
        }

        function i(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function o(t, e) {
            return t.del && !y && t.e in x || !!e
        }

        function a(t) {
            return w[t] || y && x[t] || t
        }

        function s(n, i, s, u, l, h, p) {
            var d = e(n), m = g[d] || (g[d] = []);
            i.split(/\s/).forEach(function (e) {
                if ("ready" == e)return t(document).ready(s);
                var i = r(e);
                i.fn = s, i.sel = l, i.e in w && (s = function (e) {
                    var n = e.relatedTarget;
                    if (!n || n !== this && !t.contains(this, n))return i.fn.apply(this, arguments)
                }), i.del = h;
                var d = h || s;
                i.proxy = function (t) {
                    if (t = c(t), !t.isImmediatePropagationStopped()) {
                        t.data = u;
                        var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                        return !1 === e && (t.preventDefault(), t.stopPropagation()), e
                    }
                }, i.i = m.length, m.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
            })
        }

        function u(t, r, i, s, u) {
            var c = e(t);
            (r || "").split(/\s/).forEach(function (e) {
                n(t, e, i, s).forEach(function (e) {
                    delete g[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
                })
            })
        }

        function c(e, n) {
            return !n && e.isDefaultPrevented || (n || (n = e), t.each(j, function (t, r) {
                var i = n[t];
                e[t] = function () {
                    return this[r] = b, i && i.apply(n, arguments)
                }, e[r] = E
            }), e.timeStamp || (e.timeStamp = Date.now()), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)), e
        }

        function l(t) {
            var e, n = {originalEvent: t};
            for (e in t)T.test(e) || t[e] === f || (n[e] = t[e]);
            return c(n, t)
        }

        var f, h = 1, p = Array.prototype.slice, d = t.isFunction, m = function (t) {
            return "string" == typeof t
        }, g = {}, v = {}, y = "onfocusin" in window, x = {
            focus: "focusin",
            blur: "focusout"
        }, w = {mouseenter: "mouseover", mouseleave: "mouseout"};
        v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
            add: s,
            remove: u
        }, t.proxy = function (n, r) {
            var i = 2 in arguments && p.call(arguments, 2);
            if (d(n)) {
                var o = function () {
                    return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
                };
                return o._zid = e(n), o
            }
            if (m(r))return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
            throw new TypeError("expected function")
        }, t.fn.bind = function (t, e, n) {
            return this.on(t, e, n)
        }, t.fn.unbind = function (t, e) {
            return this.off(t, e)
        }, t.fn.one = function (t, e, n, r) {
            return this.on(t, e, n, r, 1)
        };
        var b = function () {
            return !0
        }, E = function () {
            return !1
        }, T = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, j = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        t.fn.delegate = function (t, e, n) {
            return this.on(e, t, n)
        }, t.fn.undelegate = function (t, e, n) {
            return this.off(e, t, n)
        }, t.fn.live = function (e, n) {
            return t(document.body).delegate(this.selector, e, n), this
        }, t.fn.die = function (e, n) {
            return t(document.body).undelegate(this.selector, e, n), this
        }, t.fn.on = function (e, n, r, i, o) {
            var a, c, h = this;
            return e && !m(e) ? (t.each(e, function (t, e) {
                    h.on(t, n, r, e, o)
                }), h) : (m(n) || d(i) || !1 === i || (i = r, r = n, n = f), i !== f && !1 !== r || (i = r, r = f), !1 === i && (i = E), h.each(function (f, h) {
                    o && (a = function (t) {
                        return u(h, t.type, i), i.apply(this, arguments)
                    }), n && (c = function (e) {
                        var r, o = t(e.target).closest(n, h).get(0);
                        if (o && o !== h)return r = t.extend(l(e), {
                            currentTarget: o,
                            liveFired: h
                        }), (a || i).apply(o, [r].concat(p.call(arguments, 1)))
                    }), s(h, e, i, r, n, c || a)
                }))
        }, t.fn.off = function (e, n, r) {
            var i = this;
            return e && !m(e) ? (t.each(e, function (t, e) {
                    i.off(t, n, e)
                }), i) : (m(n) || d(r) || !1 === r || (r = n, n = f), !1 === r && (r = E), i.each(function () {
                    u(this, e, r, n)
                }))
        }, t.fn.trigger = function (e, n) {
            return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function () {
                e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
            })
        }, t.fn.triggerHandler = function (e, r) {
            var i, o;
            return this.each(function (a, s) {
                i = l(m(e) ? t.Event(e) : e), i._args = r, i.target = s, t.each(n(s, e.type || e), function (t, e) {
                    if (o = e.proxy(i), i.isImmediatePropagationStopped())return !1
                })
            }), o
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
            t.fn[e] = function (t) {
                return 0 in arguments ? this.bind(e, t) : this.trigger(e)
            }
        }), t.Event = function (t, e) {
            m(t) || (e = t, t = e.type);
            var n = document.createEvent(v[t] || "Events"), r = !0;
            if (e)for (var i in e)"bubbles" == i ? r = !!e[i] : n[i] = e[i];
            return n.initEvent(t, r, !0), c(n)
        }
    }(t), function (t) {
        function e(e, n, r) {
            var i = t.Event(n);
            return t(e).trigger(i, r), !i.isDefaultPrevented()
        }

        function n(t, n, r, i) {
            if (t.global)return e(n || y, r, i)
        }

        function r(e) {
            e.global && 0 == t.active++ && n(e, null, "ajaxStart")
        }

        function i(e) {
            e.global && !--t.active && n(e, null, "ajaxStop")
        }

        function o(t, e) {
            var r = e.context;
            if (!1 === e.beforeSend.call(r, t, e) || !1 === n(e, r, "ajaxBeforeSend", [t, e]))return !1;
            n(e, r, "ajaxSend", [t, e])
        }

        function a(t, e, r, i) {
            var o = r.context;
            r.success.call(o, t, "success", e), i && i.resolveWith(o, [t, "success", e]), n(r, o, "ajaxSuccess", [e, r, t]), u("success", e, r)
        }

        function s(t, e, r, i, o) {
            var a = i.context;
            i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), u(e, r, i)
        }

        function u(t, e, r) {
            var o = r.context;
            r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
        }

        function c(t, e, n) {
            if (n.dataFilter == l)return t;
            var r = n.context;
            return n.dataFilter.call(r, t, e)
        }

        function l() {
        }

        function f(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == E ? "json" : w.test(t) ? "script" : b.test(t) && "xml") || "text"
        }

        function h(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function p(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = h(e.url, e.data), e.data = void 0)
        }

        function d(e, n, r, i) {
            return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
                url: e,
                data: n,
                success: r,
                dataType: i
            }
        }

        function m(e, n, r, i) {
            var o, a = t.isArray(n), s = t.isPlainObject(n);
            t.each(n, function (n, u) {
                o = t.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? m(e, u, r, n) : e.add(n, u)
            })
        }

        var g, v = +new Date, y = window.document, x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, w = /^(?:text|application)\/javascript/i, b = /^(?:text|application)\/xml/i, E = "application/json", T = "text/html", j = /^\s*$/, S = y.createElement("a");
        S.href = window.location.href, t.active = 0, t.ajaxJSONP = function (e, n) {
            if (!("type" in e))return t.ajax(e);
            var r, i, u = e.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "Zepto" + v++, l = y.createElement("script"), f = window[c], h = function (e) {
                t(l).triggerHandler("error", e || "abort")
            }, p = {abort: h};
            return n && n.promise(p), t(l).on("load error", function (o, u) {
                clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = f, r && t.isFunction(f) && f(r[0]), f = r = void 0
            }), !1 === o(p, e) ? (h("abort"), p) : (window[c] = function () {
                    r = arguments
                }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function () {
                    h("timeout")
                }, e.timeout)), p)
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: l,
            success: l,
            error: l,
            complete: l,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: E,
                xml: "application/xml, text/xml",
                html: T,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0,
            dataFilter: l
        }, t.ajax = function (e) {
            var n, i, u = t.extend(!0, {}, t.ajaxSettings, e || {}), d = t.Deferred && t.Deferred();
            r(u), u.crossDomain || (n = y.createElement("a"), n.href = u.url, n.href = n.href, u.crossDomain = S.protocol + "//" + S.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), (i = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, i)), p(u);
            var m = u.dataType, v = /\?.+=\?/.test(u.url);
            if (v && (m = "jsonp"), !1 !== u.cache && (e && !0 === e.cache || "script" != m && "jsonp" != m) || (u.url = h(u.url, "_=" + Date.now())), "jsonp" == m)return v || (u.url = h(u.url, u.jsonp ? u.jsonp + "=?" : !1 === u.jsonp ? "" : "callback=?")), t.ajaxJSONP(u, d);
            var x, w = u.accepts[m], b = {}, E = function (t, e) {
                b[t.toLowerCase()] = [t, e]
            }, T = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol, N = u.xhr(), C = N.setRequestHeader;
            if (d && d.promise(N), u.crossDomain || E("X-Requested-With", "XMLHttpRequest"), E("Accept", w || "*/*"), (w = u.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(w)), (u.contentType || !1 !== u.contentType && u.data && "GET" != u.type.toUpperCase()) && E("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers)for (g in u.headers)E(g, u.headers[g]);
            if (N.setRequestHeader = E, N.onreadystatechange = function () {
                    if (4 == N.readyState) {
                        N.onreadystatechange = l, clearTimeout(x);
                        var e, n = !1;
                        if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == T) {
                            if (m = m || f(u.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) e = N.response; else {
                                e = N.responseText;
                                try {
                                    e = c(e, m, u), "script" == m ? (0, eval)(e) : "xml" == m ? e = N.responseXML : "json" == m && (e = j.test(e) ? null : t.parseJSON(e))
                                } catch (t) {
                                    n = t
                                }
                                if (n)return s(n, "parsererror", N, u, d)
                            }
                            a(e, N, u, d)
                        } else s(N.statusText || null, N.status ? "error" : "abort", N, u, d)
                    }
                }, !1 === o(N, u))return N.abort(), s(null, "abort", N, u, d), N;
            var P = !("async" in u) || u.async;
            if (N.open(u.type, u.url, P, u.username, u.password), u.xhrFields)for (g in u.xhrFields)N[g] = u.xhrFields[g];
            for (g in b)C.apply(N, b[g]);
            return u.timeout > 0 && (x = setTimeout(function () {
                N.onreadystatechange = l, N.abort(), s(null, "timeout", N, u, d)
            }, u.timeout)), N.send(u.data ? u.data : null), N
        }, t.get = function () {
            return t.ajax(d.apply(null, arguments))
        }, t.post = function () {
            var e = d.apply(null, arguments);
            return e.type = "POST", t.ajax(e)
        }, t.getJSON = function () {
            var e = d.apply(null, arguments);
            return e.dataType = "json", t.ajax(e)
        }, t.fn.load = function (e, n, r) {
            if (!this.length)return this;
            var i, o = this, a = e.split(/\s/), s = d(e, n, r), u = s.success;
            return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function (e) {
                o.html(i ? t("<div>").html(e.replace(x, "")).find(i) : e), u && u.apply(o, arguments)
            }, t.ajax(s), this
        };
        var N = encodeURIComponent;
        t.param = function (e, n) {
            var r = [];
            return r.add = function (e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(e) + "=" + N(n))
            }, m(r, e, n), r.join("&").replace(/%20/g, "+")
        }
    }(t), function (t) {
        function e(t, e, n, r) {
            return Math.abs(t - e) >= Math.abs(n - r) ? t - e > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
        }

        function n() {
            l = null, h.last && (h.el.trigger("longTap"), h = {})
        }

        function r() {
            l && clearTimeout(l), l = null
        }

        function i() {
            s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), s = u = c = l = null, h = {}
        }

        function o(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
        }

        function a(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
        }

        var s, u, c, l, f, h = {};
        t(document).ready(function () {
            var p, d, m, g, v = 0, y = 0;
            "MSGesture" in window && (f = new MSGesture, f.target = document.body), t(document).bind("MSGestureEnd", function (t) {
                var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e))
            }).on("touchstart MSPointerDown pointerdown", function (e) {
                (g = a(e, "down")) && !o(e) || (m = g ? e : e.touches[0], e.touches && 1 === e.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), p = Date.now(), d = p - (h.last || p), h.el = t("tagName" in m.target ? m.target : m.target.parentNode), s && clearTimeout(s), h.x1 = m.pageX, h.y1 = m.pageY, d > 0 && d <= 250 && (h.isDoubleTap = !0), h.last = p, l = setTimeout(n, 750), f && g && f.addPointer(e.pointerId))
            }).on("touchmove MSPointerMove pointermove", function (t) {
                (g = a(t, "move")) && !o(t) || (m = g ? t : t.touches[0], r(), h.x2 = m.pageX, h.y2 = m.pageY, v += Math.abs(h.x1 - h.x2), y += Math.abs(h.y1 - h.y2))
            }).on("touchend MSPointerUp pointerup", function (n) {
                (g = a(n, "up")) && !o(n) || (r(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? c = setTimeout(function () {
                        h.el && (h.el.trigger("swipe"), h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2))), h = {}
                    }, 0) : "last" in h && (v < 30 && y < 30 ? u = setTimeout(function () {
                            var e = t.Event("tap");
                            e.cancelTouch = i, h.el && h.el.trigger(e), h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : s = setTimeout(function () {
                                    s = null, h.el && h.el.trigger("singleTap"), h = {}
                                }, 250)
                        }, 0) : h = {}), v = y = 0)
            }).on("touchcancel MSPointerCancel pointercancel", i), t(window).on("scroll", i)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
            t.fn[e] = function (t) {
                return this.on(e, t)
            }
        })
    }(t), t
});
LBF.define("monitor.SpeedReport", function (require) {
    var t = {url: "http://isdspeed.qq.com/cgi-bin/r.cgi", rate: 1, calGap: !1}, n = {}, e = function (t) {
        var e = +new Date, r = "log_" + e, o = n[r] = new Image;
        o.onload = o.onerror = function () {
            n[r] = null
        }, t += (t.indexOf("?") > -1 ? "&" : "?") + e, o.src = t
    }, r = function (n) {
        n = n || {};
        for (var e in t)this[e] = n[e] || t[e];
        for (var r in n)this[r] = n[r];
        this.points = [], this.start = +new Date
    }, o = {
        add: function (t, n) {
            var e = this.points;
            return t = t || +new Date, n = n || e.length, e[n] = t, this
        }, send: function () {
            var t = this.points.splice(0);
            if (Math.random() > this.rate)return this;
            var n, r = this.start, o = this.flag1, a = this.flag2, i = this.flag3, d = this.url + "?flag1=" + o + "&flag2=" + a + "&flag3=" + i + "&", s = this.proxy;
            if (this.calGap)for (n = t.length - 1; n > 0; n--)t[n - 1] = t[n - 1] || 0, t[n] -= t[n - 1]; else for (n = t.length - 1; n > 0; n--)t[n] && (t[n] -= r);
            d += function () {
                var n = [];
                for (var e in t)n.push(e + "=" + (t[e] || ""));
                return n.join("&")
            }(), s && (d = s.replace("{url}", encodeURIComponent(d))), e(d)
        }
    };
    for (var a in o)r.prototype[a] = o[a];
    var i = function (t) {
        var n, r, o, a = t.flag1, i = t.flag2, d = t.flag3IE, s = t.flag3Chrome, c = t.initTime, f = t.proxy, l = window.performance || window.webkitPerformance || window.msPerformance, p = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"], m = [], u = d;
        if (Math.random() > t.rate)return this;
        if (l && (n = l.timing)) {
            void 0 !== n.msFirstPaint ? p.push("msFirstPaint") : s && (u = s), r = n[p[0]];
            for (var g = 1, h = p.length; g < h; g++)o = n[p[g]], (o = o ? o - r : 0) > 0 && m.push(g + "=" + o);
            c && m.push("30=" + (c - r));
            var v = t.url || "http://isdspeed.qq.com/cgi-bin/r.cgi", v = v + "?flag1=" + a + "&flag2=" + i + "&flag3=" + u + "&" + m.join("&");
            f && (v = f.replace("{url}", encodeURIComponent(v))), e(v)
        }
    }, d = function (t) {
        var n, r, o, a = t.flag1, i = t.flag2, d = t.flag3IE, s = t.flag3Chrome, c = t.initTime, f = t.proxy, l = -1 !== location.protocol.indexOf("https") ? "https://huatuospeed.weiyun.com/cgi-bin/r.cgi" : "http://isdspeed.qq.com/cgi-bin/r.cgi", p = window.performance || window.webkitPerformance || window.msPerformance, m = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"], u = [], g = d;
        if (p && (n = p.timing)) {
            void 0 !== n.msFirstPaint ? m.push("msFirstPaint") : s && (g = s), r = n[m[0]];
            for (var h = 1, v = m.length; h < v; h++)o = n[m[h]], (o = o ? o - r : 0) > 0 && u.push(h + "=" + o);
            c && u.push("30=" + (c - r));
            var E = t.url || l;
            E += "?flag1=" + a + "&flag2=" + i + "&flag3=" + g + "&" + u.join("&"), f && (E = f.replace("{url}", encodeURIComponent(E))), e(E)
        }
    };
    return {
        create: function (t) {
            return new r(t)
        }, reportPerformance: i, reportPerform: d
    }
});