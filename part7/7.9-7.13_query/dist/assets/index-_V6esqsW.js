(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) r(h);
  new MutationObserver((h) => {
    for (const d of h)
      if (d.type === "childList")
        for (const p of d.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && r(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(h) {
    const d = {};
    return (
      h.integrity && (d.integrity = h.integrity),
      h.referrerPolicy && (d.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : h.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function r(h) {
    if (h.ep) return;
    h.ep = !0;
    const d = s(h);
    fetch(h.href, d);
  }
})();
function _0(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var ns = { exports: {} },
  Xa = {};
var Ld;
function T0() {
  if (Ld) return Xa;
  Ld = 1;
  var a = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function s(r, h, d) {
    var p = null;
    if (
      (d !== void 0 && (p = "" + d),
      h.key !== void 0 && (p = "" + h.key),
      "key" in h)
    ) {
      d = {};
      for (var E in h) E !== "key" && (d[E] = h[E]);
    } else d = h;
    return (
      (h = d.ref),
      { $$typeof: a, type: r, key: p, ref: h !== void 0 ? h : null, props: d }
    );
  }
  return ((Xa.Fragment = c), (Xa.jsx = s), (Xa.jsxs = s), Xa);
}
var Zd;
function O0() {
  return (Zd || ((Zd = 1), (ns.exports = T0())), ns.exports);
}
var Z = O0(),
  as = { exports: {} },
  La = {},
  us = { exports: {} },
  is = {};
var Vd;
function z0() {
  return (
    Vd ||
      ((Vd = 1),
      (function (a) {
        function c(C, H) {
          var k = C.length;
          C.push(H);
          t: for (; 0 < k; ) {
            var pt = (k - 1) >>> 1,
              _t = C[pt];
            if (0 < h(_t, H)) ((C[pt] = H), (C[k] = _t), (k = pt));
            else break t;
          }
        }
        function s(C) {
          return C.length === 0 ? null : C[0];
        }
        function r(C) {
          if (C.length === 0) return null;
          var H = C[0],
            k = C.pop();
          if (k !== H) {
            C[0] = k;
            t: for (var pt = 0, _t = C.length, m = _t >>> 1; pt < m; ) {
              var N = 2 * (pt + 1) - 1,
                j = C[N],
                B = N + 1,
                tt = C[B];
              if (0 > h(j, k))
                B < _t && 0 > h(tt, j)
                  ? ((C[pt] = tt), (C[B] = k), (pt = B))
                  : ((C[pt] = j), (C[N] = k), (pt = N));
              else if (B < _t && 0 > h(tt, k))
                ((C[pt] = tt), (C[B] = k), (pt = B));
              else break t;
            }
          }
          return H;
        }
        function h(C, H) {
          var k = C.sortIndex - H.sortIndex;
          return k !== 0 ? k : C.id - H.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var p = Date,
            E = p.now();
          a.unstable_now = function () {
            return p.now() - E;
          };
        }
        var S = [],
          g = [],
          z = 1,
          R = null,
          x = 3,
          J = !1,
          w = !1,
          X = !1,
          K = !1,
          W = typeof setTimeout == "function" ? setTimeout : null,
          ct = typeof clearTimeout == "function" ? clearTimeout : null,
          G = typeof setImmediate < "u" ? setImmediate : null;
        function F(C) {
          for (var H = s(g); H !== null; ) {
            if (H.callback === null) r(g);
            else if (H.startTime <= C)
              (r(g), (H.sortIndex = H.expirationTime), c(S, H));
            else break;
            H = s(g);
          }
        }
        function $(C) {
          if (((X = !1), F(C), !w))
            if (s(S) !== null) ((w = !0), ot || ((ot = !0), te()));
            else {
              var H = s(g);
              H !== null && Re($, H.startTime - C);
            }
        }
        var ot = !1,
          Y = -1,
          P = 5,
          Qt = -1;
        function kt() {
          return K ? !0 : !(a.unstable_now() - Qt < P);
        }
        function wt() {
          if (((K = !1), ot)) {
            var C = a.unstable_now();
            Qt = C;
            var H = !0;
            try {
              t: {
                ((w = !1), X && ((X = !1), ct(Y), (Y = -1)), (J = !0));
                var k = x;
                try {
                  e: {
                    for (
                      F(C), R = s(S);
                      R !== null && !(R.expirationTime > C && kt());
                    ) {
                      var pt = R.callback;
                      if (typeof pt == "function") {
                        ((R.callback = null), (x = R.priorityLevel));
                        var _t = pt(R.expirationTime <= C);
                        if (((C = a.unstable_now()), typeof _t == "function")) {
                          ((R.callback = _t), F(C), (H = !0));
                          break e;
                        }
                        (R === s(S) && r(S), F(C));
                      } else r(S);
                      R = s(S);
                    }
                    if (R !== null) H = !0;
                    else {
                      var m = s(g);
                      (m !== null && Re($, m.startTime - C), (H = !1));
                    }
                  }
                  break t;
                } finally {
                  ((R = null), (x = k), (J = !1));
                }
                H = void 0;
              }
            } finally {
              H ? te() : (ot = !1);
            }
          }
        }
        var te;
        if (typeof G == "function")
          te = function () {
            G(wt);
          };
        else if (typeof MessageChannel < "u") {
          var ql = new MessageChannel(),
            we = ql.port2;
          ((ql.port1.onmessage = wt),
            (te = function () {
              we.postMessage(null);
            }));
        } else
          te = function () {
            W(wt, 0);
          };
        function Re(C, H) {
          Y = W(function () {
            C(a.unstable_now());
          }, H);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (a.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (P = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (a.unstable_next = function (C) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = x;
            }
            var k = x;
            x = H;
            try {
              return C();
            } finally {
              x = k;
            }
          }),
          (a.unstable_requestPaint = function () {
            K = !0;
          }),
          (a.unstable_runWithPriority = function (C, H) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var k = x;
            x = C;
            try {
              return H();
            } finally {
              x = k;
            }
          }),
          (a.unstable_scheduleCallback = function (C, H, k) {
            var pt = a.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? pt + k : pt))
                : (k = pt),
              C)
            ) {
              case 1:
                var _t = -1;
                break;
              case 2:
                _t = 250;
                break;
              case 5:
                _t = 1073741823;
                break;
              case 4:
                _t = 1e4;
                break;
              default:
                _t = 5e3;
            }
            return (
              (_t = k + _t),
              (C = {
                id: z++,
                callback: H,
                priorityLevel: C,
                startTime: k,
                expirationTime: _t,
                sortIndex: -1,
              }),
              k > pt
                ? ((C.sortIndex = k),
                  c(g, C),
                  s(S) === null &&
                    C === s(g) &&
                    (X ? (ct(Y), (Y = -1)) : (X = !0), Re($, k - pt)))
                : ((C.sortIndex = _t),
                  c(S, C),
                  w || J || ((w = !0), ot || ((ot = !0), te()))),
              C
            );
          }),
          (a.unstable_shouldYield = kt),
          (a.unstable_wrapCallback = function (C) {
            var H = x;
            return function () {
              var k = x;
              x = H;
              try {
                return C.apply(this, arguments);
              } finally {
                x = k;
              }
            };
          }));
      })(is)),
    is
  );
}
var Kd;
function A0() {
  return (Kd || ((Kd = 1), (us.exports = z0())), us.exports);
}
var cs = { exports: {} },
  I = {};
var Jd;
function M0() {
  if (Jd) return I;
  Jd = 1;
  var a = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    E = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    x = Symbol.iterator;
  function J(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (x && m[x]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    X = Object.assign,
    K = {};
  function W(m, N, j) {
    ((this.props = m),
      (this.context = N),
      (this.refs = K),
      (this.updater = j || w));
  }
  ((W.prototype.isReactComponent = {}),
    (W.prototype.setState = function (m, N) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, m, N, "setState");
    }),
    (W.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    }));
  function ct() {}
  ct.prototype = W.prototype;
  function G(m, N, j) {
    ((this.props = m),
      (this.context = N),
      (this.refs = K),
      (this.updater = j || w));
  }
  var F = (G.prototype = new ct());
  ((F.constructor = G), X(F, W.prototype), (F.isPureReactComponent = !0));
  var $ = Array.isArray;
  function ot() {}
  var Y = { H: null, A: null, T: null, S: null },
    P = Object.prototype.hasOwnProperty;
  function Qt(m, N, j) {
    var B = j.ref;
    return {
      $$typeof: a,
      type: m,
      key: N,
      ref: B !== void 0 ? B : null,
      props: j,
    };
  }
  function kt(m, N) {
    return Qt(m.type, N, m.props);
  }
  function wt(m) {
    return typeof m == "object" && m !== null && m.$$typeof === a;
  }
  function te(m) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (j) {
        return N[j];
      })
    );
  }
  var ql = /\/+/g;
  function we(m, N) {
    return typeof m == "object" && m !== null && m.key != null
      ? te("" + m.key)
      : N.toString(36);
  }
  function Re(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (
          (typeof m.status == "string"
            ? m.then(ot, ot)
            : ((m.status = "pending"),
              m.then(
                function (N) {
                  m.status === "pending" &&
                    ((m.status = "fulfilled"), (m.value = N));
                },
                function (N) {
                  m.status === "pending" &&
                    ((m.status = "rejected"), (m.reason = N));
                },
              )),
          m.status)
        ) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function C(m, N, j, B, tt) {
    var at = typeof m;
    (at === "undefined" || at === "boolean") && (m = null);
    var vt = !1;
    if (m === null) vt = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          vt = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case a:
            case c:
              vt = !0;
              break;
            case z:
              return ((vt = m._init), C(vt(m._payload), N, j, B, tt));
          }
      }
    if (vt)
      return (
        (tt = tt(m)),
        (vt = B === "" ? "." + we(m, 0) : B),
        $(tt)
          ? ((j = ""),
            vt != null && (j = vt.replace(ql, "$&/") + "/"),
            C(tt, N, j, "", function (kn) {
              return kn;
            }))
          : tt != null &&
            (wt(tt) &&
              (tt = kt(
                tt,
                j +
                  (tt.key == null || (m && m.key === tt.key)
                    ? ""
                    : ("" + tt.key).replace(ql, "$&/") + "/") +
                  vt,
              )),
            N.push(tt)),
        1
      );
    vt = 0;
    var Wt = B === "" ? "." : B + ":";
    if ($(m))
      for (var Dt = 0; Dt < m.length; Dt++)
        ((B = m[Dt]), (at = Wt + we(B, Dt)), (vt += C(B, N, j, at, tt)));
    else if (((Dt = J(m)), typeof Dt == "function"))
      for (m = Dt.call(m), Dt = 0; !(B = m.next()).done; )
        ((B = B.value), (at = Wt + we(B, Dt++)), (vt += C(B, N, j, at, tt)));
    else if (at === "object") {
      if (typeof m.then == "function") return C(Re(m), N, j, B, tt);
      throw (
        (N = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return vt;
  }
  function H(m, N, j) {
    if (m == null) return m;
    var B = [],
      tt = 0;
    return (
      C(m, B, "", "", function (at) {
        return N.call(j, at, tt++);
      }),
      B
    );
  }
  function k(m) {
    if (m._status === -1) {
      var N = m._result;
      ((N = N()),
        N.then(
          function (j) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = j));
          },
          function (j) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = j));
          },
        ),
        m._status === -1 && ((m._status = 0), (m._result = N)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var pt =
      typeof reportError == "function"
        ? reportError
        : function (m) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var N = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof m == "object" &&
                  m !== null &&
                  typeof m.message == "string"
                    ? String(m.message)
                    : String(m),
                error: m,
              });
              if (!window.dispatchEvent(N)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", m);
              return;
            }
            console.error(m);
          },
    _t = {
      map: H,
      forEach: function (m, N, j) {
        H(
          m,
          function () {
            N.apply(this, arguments);
          },
          j,
        );
      },
      count: function (m) {
        var N = 0;
        return (
          H(m, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (m) {
        return (
          H(m, function (N) {
            return N;
          }) || []
        );
      },
      only: function (m) {
        if (!wt(m))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return m;
      },
    };
  return (
    (I.Activity = R),
    (I.Children = _t),
    (I.Component = W),
    (I.Fragment = s),
    (I.Profiler = h),
    (I.PureComponent = G),
    (I.StrictMode = r),
    (I.Suspense = S),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return Y.H.useMemoCache(m);
      },
    }),
    (I.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (I.cacheSignal = function () {
      return null;
    }),
    (I.cloneElement = function (m, N, j) {
      if (m == null)
        throw Error(
          "The argument must be a React element, but you passed " + m + ".",
        );
      var B = X({}, m.props),
        tt = m.key;
      if (N != null)
        for (at in (N.key !== void 0 && (tt = "" + N.key), N))
          !P.call(N, at) ||
            at === "key" ||
            at === "__self" ||
            at === "__source" ||
            (at === "ref" && N.ref === void 0) ||
            (B[at] = N[at]);
      var at = arguments.length - 2;
      if (at === 1) B.children = j;
      else if (1 < at) {
        for (var vt = Array(at), Wt = 0; Wt < at; Wt++)
          vt[Wt] = arguments[Wt + 2];
        B.children = vt;
      }
      return Qt(m.type, tt, B);
    }),
    (I.createContext = function (m) {
      return (
        (m = {
          $$typeof: p,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: d, _context: m }),
        m
      );
    }),
    (I.createElement = function (m, N, j) {
      var B,
        tt = {},
        at = null;
      if (N != null)
        for (B in (N.key !== void 0 && (at = "" + N.key), N))
          P.call(N, B) &&
            B !== "key" &&
            B !== "__self" &&
            B !== "__source" &&
            (tt[B] = N[B]);
      var vt = arguments.length - 2;
      if (vt === 1) tt.children = j;
      else if (1 < vt) {
        for (var Wt = Array(vt), Dt = 0; Dt < vt; Dt++)
          Wt[Dt] = arguments[Dt + 2];
        tt.children = Wt;
      }
      if (m && m.defaultProps)
        for (B in ((vt = m.defaultProps), vt))
          tt[B] === void 0 && (tt[B] = vt[B]);
      return Qt(m, at, tt);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (m) {
      return { $$typeof: E, render: m };
    }),
    (I.isValidElement = wt),
    (I.lazy = function (m) {
      return { $$typeof: z, _payload: { _status: -1, _result: m }, _init: k };
    }),
    (I.memo = function (m, N) {
      return { $$typeof: g, type: m, compare: N === void 0 ? null : N };
    }),
    (I.startTransition = function (m) {
      var N = Y.T,
        j = {};
      Y.T = j;
      try {
        var B = m(),
          tt = Y.S;
        (tt !== null && tt(j, B),
          typeof B == "object" &&
            B !== null &&
            typeof B.then == "function" &&
            B.then(ot, pt));
      } catch (at) {
        pt(at);
      } finally {
        (N !== null && j.types !== null && (N.types = j.types), (Y.T = N));
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (I.use = function (m) {
      return Y.H.use(m);
    }),
    (I.useActionState = function (m, N, j) {
      return Y.H.useActionState(m, N, j);
    }),
    (I.useCallback = function (m, N) {
      return Y.H.useCallback(m, N);
    }),
    (I.useContext = function (m) {
      return Y.H.useContext(m);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (m, N) {
      return Y.H.useDeferredValue(m, N);
    }),
    (I.useEffect = function (m, N) {
      return Y.H.useEffect(m, N);
    }),
    (I.useEffectEvent = function (m) {
      return Y.H.useEffectEvent(m);
    }),
    (I.useId = function () {
      return Y.H.useId();
    }),
    (I.useImperativeHandle = function (m, N, j) {
      return Y.H.useImperativeHandle(m, N, j);
    }),
    (I.useInsertionEffect = function (m, N) {
      return Y.H.useInsertionEffect(m, N);
    }),
    (I.useLayoutEffect = function (m, N) {
      return Y.H.useLayoutEffect(m, N);
    }),
    (I.useMemo = function (m, N) {
      return Y.H.useMemo(m, N);
    }),
    (I.useOptimistic = function (m, N) {
      return Y.H.useOptimistic(m, N);
    }),
    (I.useReducer = function (m, N, j) {
      return Y.H.useReducer(m, N, j);
    }),
    (I.useRef = function (m) {
      return Y.H.useRef(m);
    }),
    (I.useState = function (m) {
      return Y.H.useState(m);
    }),
    (I.useSyncExternalStore = function (m, N, j) {
      return Y.H.useSyncExternalStore(m, N, j);
    }),
    (I.useTransition = function () {
      return Y.H.useTransition();
    }),
    (I.version = "19.2.1"),
    I
  );
}
var Fd;
function Ri() {
  return (Fd || ((Fd = 1), (cs.exports = M0())), cs.exports);
}
var fs = { exports: {} },
  Ft = {};
var kd;
function C0() {
  if (kd) return Ft;
  kd = 1;
  var a = Ri();
  function c(S) {
    var g = "https://react.dev/errors/" + S;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var z = 2; z < arguments.length; z++)
        g += "&args[]=" + encodeURIComponent(arguments[z]);
    }
    return (
      "Minified React error #" +
      S +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(c(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for("react.portal");
  function d(S, g, z) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: R == null ? null : "" + R,
      children: S,
      containerInfo: g,
      implementation: z,
    };
  }
  var p = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(S, g) {
    if (S === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Ft.createPortal = function (S, g) {
      var z =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(c(299));
      return d(S, g, null, z);
    }),
    (Ft.flushSync = function (S) {
      var g = p.T,
        z = r.p;
      try {
        if (((p.T = null), (r.p = 2), S)) return S();
      } finally {
        ((p.T = g), (r.p = z), r.d.f());
      }
    }),
    (Ft.preconnect = function (S, g) {
      typeof S == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        r.d.C(S, g));
    }),
    (Ft.prefetchDNS = function (S) {
      typeof S == "string" && r.d.D(S);
    }),
    (Ft.preinit = function (S, g) {
      if (typeof S == "string" && g && typeof g.as == "string") {
        var z = g.as,
          R = E(z, g.crossOrigin),
          x = typeof g.integrity == "string" ? g.integrity : void 0,
          J = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        z === "style"
          ? r.d.S(S, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: R,
              integrity: x,
              fetchPriority: J,
            })
          : z === "script" &&
            r.d.X(S, {
              crossOrigin: R,
              integrity: x,
              fetchPriority: J,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Ft.preinitModule = function (S, g) {
      if (typeof S == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var z = E(g.as, g.crossOrigin);
            r.d.M(S, {
              crossOrigin: z,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && r.d.M(S);
    }),
    (Ft.preload = function (S, g) {
      if (
        typeof S == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var z = g.as,
          R = E(z, g.crossOrigin);
        r.d.L(S, z, {
          crossOrigin: R,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Ft.preloadModule = function (S, g) {
      if (typeof S == "string")
        if (g) {
          var z = E(g.as, g.crossOrigin);
          r.d.m(S, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: z,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else r.d.m(S);
    }),
    (Ft.requestFormReset = function (S) {
      r.d.r(S);
    }),
    (Ft.unstable_batchedUpdates = function (S, g) {
      return S(g);
    }),
    (Ft.useFormState = function (S, g, z) {
      return p.H.useFormState(S, g, z);
    }),
    (Ft.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (Ft.version = "19.2.1"),
    Ft
  );
}
var Wd;
function D0() {
  if (Wd) return fs.exports;
  Wd = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (c) {
        console.error(c);
      }
  }
  return (a(), (fs.exports = C0()), fs.exports);
}
var $d;
function R0() {
  if ($d) return La;
  $d = 1;
  var a = A0(),
    c = Ri(),
    s = D0();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function E(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function S(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var i = u.alternate;
      if (i === null) {
        if (((n = u.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (u.child === i.child) {
        for (i = u.child; i; ) {
          if (i === l) return (S(u), t);
          if (i === n) return (S(u), e);
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) ((l = u), (n = i));
      else {
        for (var f = !1, o = u.child; o; ) {
          if (o === l) {
            ((f = !0), (l = u), (n = i));
            break;
          }
          if (o === n) {
            ((f = !0), (n = u), (l = i));
            break;
          }
          o = o.sibling;
        }
        if (!f) {
          for (o = i.child; o; ) {
            if (o === l) {
              ((f = !0), (l = i), (n = u));
              break;
            }
            if (o === n) {
              ((f = !0), (n = i), (l = u));
              break;
            }
            o = o.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function z(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = z(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var R = Object.assign,
    x = Symbol.for("react.element"),
    J = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    X = Symbol.for("react.fragment"),
    K = Symbol.for("react.strict_mode"),
    W = Symbol.for("react.profiler"),
    ct = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    ot = Symbol.for("react.suspense_list"),
    Y = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    Qt = Symbol.for("react.activity"),
    kt = Symbol.for("react.memo_cache_sentinel"),
    wt = Symbol.iterator;
  function te(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (wt && t[wt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var ql = Symbol.for("react.client.reference");
  function we(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ql ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case X:
        return "Fragment";
      case W:
        return "Profiler";
      case K:
        return "StrictMode";
      case $:
        return "Suspense";
      case ot:
        return "SuspenseList";
      case Qt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
          return "Portal";
        case G:
          return t.displayName || "Context";
        case ct:
          return (t._context.displayName || "Context") + ".Consumer";
        case F:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Y:
          return (
            (e = t.displayName || null),
            e !== null ? e : we(t.type) || "Memo"
          );
        case P:
          ((e = t._payload), (t = t._init));
          try {
            return we(t(e));
          } catch {}
      }
    return null;
  }
  var Re = Array.isArray,
    C = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    pt = [],
    _t = -1;
  function m(t) {
    return { current: t };
  }
  function N(t) {
    0 > _t || ((t.current = pt[_t]), (pt[_t] = null), _t--);
  }
  function j(t, e) {
    (_t++, (pt[_t] = t.current), (t.current = e));
  }
  var B = m(null),
    tt = m(null),
    at = m(null),
    vt = m(null);
  function Wt(t, e) {
    switch ((j(at, e), j(tt, t), j(B, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? hd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = hd(e)), (t = dd(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (N(B), j(B, t));
  }
  function Dt() {
    (N(B), N(tt), N(at));
  }
  function kn(t) {
    t.memoizedState !== null && j(vt, t);
    var e = B.current,
      l = dd(e, t.type);
    e !== l && (j(tt, t), j(B, l));
  }
  function $a(t) {
    (tt.current === t && (N(B), N(tt)),
      vt.current === t && (N(vt), (Qa._currentValue = k)));
  }
  var Qi, ws;
  function Bl(t) {
    if (Qi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((Qi = (e && e[1]) || ""),
          (ws =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Qi +
      t +
      ws
    );
  }
  var Yi = !1;
  function Gi(t, e) {
    if (!t || Yi) return "";
    Yi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (A) {
                  var O = A;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (A) {
                  O = A;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                O = A;
              }
              (U = t()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (A) {
            if (A && O && typeof A.stack == "string") return [A.stack, O.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = n.DetermineComponentFrameRoot(),
        f = i[0],
        o = i[1];
      if (f && o) {
        var y = f.split(`
`),
          T = o.split(`
`);
        for (
          u = n = 0;
          n < y.length && !y[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; u < T.length && !T[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (n === y.length || u === T.length)
          for (
            n = y.length - 1, u = T.length - 1;
            1 <= n && 0 <= u && y[n] !== T[u];
          )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (y[n] !== T[u]) {
            if (n !== 1 || u !== 1)
              do
                if ((n--, u--, 0 > u || y[n] !== T[u])) {
                  var M =
                    `
` + y[n].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      M.includes("<anonymous>") &&
                      (M = M.replace("<anonymous>", t.displayName)),
                    M
                  );
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      ((Yi = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? Bl(l) : "";
  }
  function Py(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Bl(t.type);
      case 16:
        return Bl("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Bl("Suspense Fallback")
          : Bl("Suspense");
      case 19:
        return Bl("SuspenseList");
      case 0:
      case 15:
        return Gi(t.type, !1);
      case 11:
        return Gi(t.type.render, !1);
      case 1:
        return Gi(t.type, !0);
      case 31:
        return Bl("Activity");
      default:
        return "";
    }
  }
  function Xs(t) {
    try {
      var e = "",
        l = null;
      do ((e += Py(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var wi = Object.prototype.hasOwnProperty,
    Xi = a.unstable_scheduleCallback,
    Li = a.unstable_cancelCallback,
    tv = a.unstable_shouldYield,
    ev = a.unstable_requestPaint,
    fe = a.unstable_now,
    lv = a.unstable_getCurrentPriorityLevel,
    Ls = a.unstable_ImmediatePriority,
    Zs = a.unstable_UserBlockingPriority,
    Ia = a.unstable_NormalPriority,
    nv = a.unstable_LowPriority,
    Vs = a.unstable_IdlePriority,
    av = a.log,
    uv = a.unstable_setDisableYieldValue,
    Wn = null,
    se = null;
  function sl(t) {
    if (
      (typeof av == "function" && uv(t),
      se && typeof se.setStrictMode == "function")
    )
      try {
        se.setStrictMode(Wn, t);
      } catch {}
  }
  var re = Math.clz32 ? Math.clz32 : fv,
    iv = Math.log,
    cv = Math.LN2;
  function fv(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((iv(t) / cv) | 0)) | 0);
  }
  var Pa = 256,
    tu = 262144,
    eu = 4194304;
  function Ql(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function lu(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var u = 0,
      i = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return (
      o !== 0
        ? ((n = o & ~i),
          n !== 0
            ? (u = Ql(n))
            : ((f &= o),
              f !== 0
                ? (u = Ql(f))
                : l || ((l = o & ~t), l !== 0 && (u = Ql(l)))))
        : ((o = n & ~i),
          o !== 0
            ? (u = Ql(o))
            : f !== 0
              ? (u = Ql(f))
              : l || ((l = n & ~t), l !== 0 && (u = Ql(l)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & i) === 0 &&
            ((i = u & -u),
            (l = e & -e),
            i >= l || (i === 32 && (l & 4194048) !== 0))
          ? e
          : u
    );
  }
  function $n(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function sv(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ks() {
    var t = eu;
    return ((eu <<= 1), (eu & 62914560) === 0 && (eu = 4194304), t);
  }
  function Zi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function In(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function rv(t, e, l, n, u, i) {
    var f = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var o = t.entanglements,
      y = t.expirationTimes,
      T = t.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var M = 31 - re(l),
        U = 1 << M;
      ((o[M] = 0), (y[M] = -1));
      var O = T[M];
      if (O !== null)
        for (T[M] = null, M = 0; M < O.length; M++) {
          var A = O[M];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~U;
    }
    (n !== 0 && Js(t, n, 0),
      i !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(f & ~e)));
  }
  function Js(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var n = 31 - re(e);
    ((t.entangledLanes |= e),
      (t.entanglements[n] = t.entanglements[n] | 1073741824 | (l & 261930)));
  }
  function Fs(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var n = 31 - re(l),
        u = 1 << n;
      ((u & e) | (t[n] & e) && (t[n] |= e), (l &= ~u));
    }
  }
  function ks(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : Vi(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function Vi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ki(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ws() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : qd(t.type));
  }
  function $s(t, e) {
    var l = H.p;
    try {
      return ((H.p = t), e());
    } finally {
      H.p = l;
    }
  }
  var rl = Math.random().toString(36).slice(2),
    Xt = "__reactFiber$" + rl,
    ee = "__reactProps$" + rl,
    un = "__reactContainer$" + rl,
    Ji = "__reactEvents$" + rl,
    ov = "__reactListeners$" + rl,
    hv = "__reactHandles$" + rl,
    Is = "__reactResources$" + rl,
    Pn = "__reactMarker$" + rl;
  function Fi(t) {
    (delete t[Xt], delete t[ee], delete t[Ji], delete t[ov], delete t[hv]);
  }
  function cn(t) {
    var e = t[Xt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[un] || l[Xt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = bd(t); t !== null; ) {
            if ((l = t[Xt])) return l;
            t = bd(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function fn(t) {
    if ((t = t[Xt] || t[un])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function ta(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function sn(t) {
    var e = t[Is];
    return (
      e ||
        (e = t[Is] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Yt(t) {
    t[Pn] = !0;
  }
  var Ps = new Set(),
    tr = {};
  function Yl(t, e) {
    (rn(t, e), rn(t + "Capture", e));
  }
  function rn(t, e) {
    for (tr[t] = e, t = 0; t < e.length; t++) Ps.add(e[t]);
  }
  var dv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    er = {},
    lr = {};
  function yv(t) {
    return wi.call(lr, t)
      ? !0
      : wi.call(er, t)
        ? !1
        : dv.test(t)
          ? (lr[t] = !0)
          : ((er[t] = !0), !1);
  }
  function nu(t, e, l) {
    if (yv(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function au(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Xe(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  function Se(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function nr(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function vv(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        i = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (f) {
            ((l = "" + f), i.call(this, f));
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (f) {
            l = "" + f;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function ki(t) {
    if (!t._valueTracker) {
      var e = nr(t) ? "checked" : "value";
      t._valueTracker = vv(t, e, "" + t[e]);
    }
  }
  function ar(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      n = "";
    return (
      t && (n = nr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = n),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function uu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var mv = /[\n"\\]/g;
  function be(t) {
    return t.replace(mv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wi(t, e, l, n, u, i, f, o) {
    ((t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Se(e))
          : t.value !== "" + Se(e) && (t.value = "" + Se(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? $i(t, f, Se(e))
        : l != null
          ? $i(t, f, Se(l))
          : n != null && t.removeAttribute("value"),
      u == null && i != null && (t.defaultChecked = !!i),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (t.name = "" + Se(o))
        : t.removeAttribute("name"));
  }
  function ur(t, e, l, n, u, i, f, o) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.type = i),
      e != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || e != null)) {
        ki(t);
        return;
      }
      ((l = l != null ? "" + Se(l) : ""),
        (e = e != null ? "" + Se(e) : l),
        o || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((n = n ?? u),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (t.checked = o ? t.checked : !!n),
      (t.defaultChecked = !!n),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      ki(t));
  }
  function $i(t, e, l) {
    (e === "number" && uu(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function on(t, e, l, n) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        ((u = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && n && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + Se(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          ((t[u].selected = !0), n && (t[u].defaultSelected = !0));
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ir(t, e, l) {
    if (
      e != null &&
      ((e = "" + Se(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Se(l) : "";
  }
  function cr(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (Re(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = Se(e)),
      (t.defaultValue = l),
      (n = t.textContent),
      n === l && n !== "" && n !== null && (t.value = n),
      ki(t));
  }
  function hn(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var gv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function fr(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? n
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : n
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || gv.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function sr(t, e, l) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (e != null && e.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? t.setProperty(n, "")
            : n === "float"
              ? (t.cssFloat = "")
              : (t[n] = ""));
      for (var u in e)
        ((n = e[u]), e.hasOwnProperty(u) && l[u] !== n && fr(t, u, n));
    } else for (var i in e) e.hasOwnProperty(i) && fr(t, i, e[i]);
  }
  function Ii(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var pv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Sv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function iu(t) {
    return Sv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Le() {}
  var Pi = null;
  function tc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var dn = null,
    yn = null;
  function rr(t) {
    var e = fn(t);
    if (e && (t = e.stateNode)) {
      var l = t[ee] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Wi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + be("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var u = n[ee] || null;
                if (!u) throw Error(r(90));
                Wi(
                  n,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((n = l[e]), n.form === t.form && ar(n));
          }
          break t;
        case "textarea":
          ir(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && on(t, !!l.multiple, e, !1));
      }
    }
  }
  var ec = !1;
  function or(t, e, l) {
    if (ec) return t(e, l);
    ec = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (
        ((ec = !1),
        (dn !== null || yn !== null) &&
          (Ju(), dn && ((e = dn), (t = yn), (yn = dn = null), rr(e), t)))
      )
        for (e = 0; e < t.length; e++) rr(t[e]);
    }
  }
  function ea(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ee] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((n = !n.disabled) ||
          ((t = t.type),
          (n = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !n));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(r(231, e, typeof l));
    return l;
  }
  var Ze = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    lc = !1;
  if (Ze)
    try {
      var la = {};
      (Object.defineProperty(la, "passive", {
        get: function () {
          lc = !0;
        },
      }),
        window.addEventListener("test", la, la),
        window.removeEventListener("test", la, la));
    } catch {
      lc = !1;
    }
  var ol = null,
    nc = null,
    cu = null;
  function hr() {
    if (cu) return cu;
    var t,
      e = nc,
      l = e.length,
      n,
      u = "value" in ol ? ol.value : ol.textContent,
      i = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var f = l - t;
    for (n = 1; n <= f && e[l - n] === u[i - n]; n++);
    return (cu = u.slice(t, 1 < n ? 1 - n : void 0));
  }
  function fu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function su() {
    return !0;
  }
  function dr() {
    return !1;
  }
  function le(t) {
    function e(l, n, u, i, f) {
      ((this._reactName = l),
        (this._targetInst = u),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = f),
        (this.currentTarget = null));
      for (var o in t)
        t.hasOwnProperty(o) && ((l = t[o]), (this[o] = l ? l(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? su
          : dr),
        (this.isPropagationStopped = dr),
        this
      );
    }
    return (
      R(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = su));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = su));
        },
        persist: function () {},
        isPersistent: su,
      }),
      e
    );
  }
  var Gl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ru = le(Gl),
    na = R({}, Gl, { view: 0, detail: 0 }),
    bv = le(na),
    ac,
    uc,
    aa,
    ou = R({}, na, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== aa &&
              (aa && t.type === "mousemove"
                ? ((ac = t.screenX - aa.screenX), (uc = t.screenY - aa.screenY))
                : (uc = ac = 0),
              (aa = t)),
            ac);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : uc;
      },
    }),
    yr = le(ou),
    Ev = R({}, ou, { dataTransfer: 0 }),
    _v = le(Ev),
    Tv = R({}, na, { relatedTarget: 0 }),
    ic = le(Tv),
    Ov = R({}, Gl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zv = le(Ov),
    Av = R({}, Gl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Mv = le(Av),
    Cv = R({}, Gl, { data: 0 }),
    vr = le(Cv),
    Dv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Rv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Uv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Nv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Uv[t])
        ? !!e[t]
        : !1;
  }
  function cc() {
    return Nv;
  }
  var xv = R({}, na, {
      key: function (t) {
        if (t.key) {
          var e = Dv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = fu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Rv[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cc,
      charCode: function (t) {
        return t.type === "keypress" ? fu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? fu(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Hv = le(xv),
    jv = R({}, ou, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    mr = le(jv),
    qv = R({}, na, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cc,
    }),
    Bv = le(qv),
    Qv = R({}, Gl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yv = le(Qv),
    Gv = R({}, ou, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    wv = le(Gv),
    Xv = R({}, Gl, { newState: 0, oldState: 0 }),
    Lv = le(Xv),
    Zv = [9, 13, 27, 32],
    fc = Ze && "CompositionEvent" in window,
    ua = null;
  Ze && "documentMode" in document && (ua = document.documentMode);
  var Vv = Ze && "TextEvent" in window && !ua,
    gr = Ze && (!fc || (ua && 8 < ua && 11 >= ua)),
    pr = " ",
    Sr = !1;
  function br(t, e) {
    switch (t) {
      case "keyup":
        return Zv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Er(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var vn = !1;
  function Kv(t, e) {
    switch (t) {
      case "compositionend":
        return Er(e);
      case "keypress":
        return e.which !== 32 ? null : ((Sr = !0), pr);
      case "textInput":
        return ((t = e.data), t === pr && Sr ? null : t);
      default:
        return null;
    }
  }
  function Jv(t, e) {
    if (vn)
      return t === "compositionend" || (!fc && br(t, e))
        ? ((t = hr()), (cu = nc = ol = null), (vn = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return gr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Fv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function _r(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Fv[t.type] : e === "textarea";
  }
  function Tr(t, e, l, n) {
    (dn ? (yn ? yn.push(n) : (yn = [n])) : (dn = n),
      (e = ti(e, "onChange")),
      0 < e.length &&
        ((l = new ru("onChange", "change", null, l, n)),
        t.push({ event: l, listeners: e })));
  }
  var ia = null,
    ca = null;
  function kv(t) {
    id(t, 0);
  }
  function hu(t) {
    var e = ta(t);
    if (ar(e)) return t;
  }
  function Or(t, e) {
    if (t === "change") return e;
  }
  var zr = !1;
  if (Ze) {
    var sc;
    if (Ze) {
      var rc = "oninput" in document;
      if (!rc) {
        var Ar = document.createElement("div");
        (Ar.setAttribute("oninput", "return;"),
          (rc = typeof Ar.oninput == "function"));
      }
      sc = rc;
    } else sc = !1;
    zr = sc && (!document.documentMode || 9 < document.documentMode);
  }
  function Mr() {
    ia && (ia.detachEvent("onpropertychange", Cr), (ca = ia = null));
  }
  function Cr(t) {
    if (t.propertyName === "value" && hu(ca)) {
      var e = [];
      (Tr(e, ca, t, tc(t)), or(kv, e));
    }
  }
  function Wv(t, e, l) {
    t === "focusin"
      ? (Mr(), (ia = e), (ca = l), ia.attachEvent("onpropertychange", Cr))
      : t === "focusout" && Mr();
  }
  function $v(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return hu(ca);
  }
  function Iv(t, e) {
    if (t === "click") return hu(e);
  }
  function Pv(t, e) {
    if (t === "input" || t === "change") return hu(e);
  }
  function tm(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var oe = typeof Object.is == "function" ? Object.is : tm;
  function fa(t, e) {
    if (oe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var u = l[n];
      if (!wi.call(e, u) || !oe(t[u], e[u])) return !1;
    }
    return !0;
  }
  function Dr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Rr(t, e) {
    var l = Dr(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = t + l.textContent.length), t <= e && n >= e))
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Dr(l);
    }
  }
  function Ur(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Ur(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Nr(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = uu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = uu(t.document);
    }
    return e;
  }
  function oc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var em = Ze && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    hc = null,
    sa = null,
    dc = !1;
  function xr(t, e, l) {
    var n =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    dc ||
      mn == null ||
      mn !== uu(n) ||
      ((n = mn),
      "selectionStart" in n && oc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (sa && fa(sa, n)) ||
        ((sa = n),
        (n = ti(hc, "onSelect")),
        0 < n.length &&
          ((e = new ru("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: n }),
          (e.target = mn))));
  }
  function wl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var gn = {
      animationend: wl("Animation", "AnimationEnd"),
      animationiteration: wl("Animation", "AnimationIteration"),
      animationstart: wl("Animation", "AnimationStart"),
      transitionrun: wl("Transition", "TransitionRun"),
      transitionstart: wl("Transition", "TransitionStart"),
      transitioncancel: wl("Transition", "TransitionCancel"),
      transitionend: wl("Transition", "TransitionEnd"),
    },
    yc = {},
    Hr = {};
  Ze &&
    ((Hr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete gn.animationend.animation,
      delete gn.animationiteration.animation,
      delete gn.animationstart.animation),
    "TransitionEvent" in window || delete gn.transitionend.transition);
  function Xl(t) {
    if (yc[t]) return yc[t];
    if (!gn[t]) return t;
    var e = gn[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Hr) return (yc[t] = e[l]);
    return t;
  }
  var jr = Xl("animationend"),
    qr = Xl("animationiteration"),
    Br = Xl("animationstart"),
    lm = Xl("transitionrun"),
    nm = Xl("transitionstart"),
    am = Xl("transitioncancel"),
    Qr = Xl("transitionend"),
    Yr = new Map(),
    vc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  vc.push("scrollEnd");
  function Ue(t, e) {
    (Yr.set(t, e), Yl(e, [t]));
  }
  var du =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ee = [],
    pn = 0,
    mc = 0;
  function yu() {
    for (var t = pn, e = (mc = pn = 0); e < t; ) {
      var l = Ee[e];
      Ee[e++] = null;
      var n = Ee[e];
      Ee[e++] = null;
      var u = Ee[e];
      Ee[e++] = null;
      var i = Ee[e];
      if (((Ee[e++] = null), n !== null && u !== null)) {
        var f = n.pending;
        (f === null ? (u.next = u) : ((u.next = f.next), (f.next = u)),
          (n.pending = u));
      }
      i !== 0 && Gr(l, u, i);
    }
  }
  function vu(t, e, l, n) {
    ((Ee[pn++] = t),
      (Ee[pn++] = e),
      (Ee[pn++] = l),
      (Ee[pn++] = n),
      (mc |= n),
      (t.lanes |= n),
      (t = t.alternate),
      t !== null && (t.lanes |= n));
  }
  function gc(t, e, l, n) {
    return (vu(t, e, l, n), mu(t));
  }
  function Ll(t, e) {
    return (vu(t, null, null, e), mu(t));
  }
  function Gr(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var u = !1, i = t.return; i !== null; )
      ((i.childLanes |= l),
        (n = i.alternate),
        n !== null && (n.childLanes |= l),
        i.tag === 22 &&
          ((t = i.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = i),
        (i = i.return));
    return t.tag === 3
      ? ((i = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - re(l)),
          (t = i.hiddenUpdates),
          (n = t[u]),
          n === null ? (t[u] = [e]) : n.push(e),
          (e.lane = l | 536870912)),
        i)
      : null;
  }
  function mu(t) {
    if (50 < Ua) throw ((Ua = 0), (Mf = null), Error(r(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Sn = {};
  function um(t, e, l, n) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function he(t, e, l, n) {
    return new um(t, e, l, n);
  }
  function pc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ve(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = he(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function wr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function gu(t, e, l, n, u, i) {
    var f = 0;
    if (((n = t), typeof t == "function")) pc(t) && (f = 1);
    else if (typeof t == "string")
      f = r0(t, l, B.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case Qt:
          return (
            (t = he(31, l, e, u)),
            (t.elementType = Qt),
            (t.lanes = i),
            t
          );
        case X:
          return Zl(l.children, u, i, e);
        case K:
          ((f = 8), (u |= 24));
          break;
        case W:
          return (
            (t = he(12, l, e, u | 2)),
            (t.elementType = W),
            (t.lanes = i),
            t
          );
        case $:
          return ((t = he(13, l, e, u)), (t.elementType = $), (t.lanes = i), t);
        case ot:
          return (
            (t = he(19, l, e, u)),
            (t.elementType = ot),
            (t.lanes = i),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case G:
                f = 10;
                break t;
              case ct:
                f = 9;
                break t;
              case F:
                f = 11;
                break t;
              case Y:
                f = 14;
                break t;
              case P:
                ((f = 16), (n = null));
                break t;
            }
          ((f = 29),
            (l = Error(r(130, t === null ? "null" : typeof t, ""))),
            (n = null));
      }
    return (
      (e = he(f, l, e, u)),
      (e.elementType = t),
      (e.type = n),
      (e.lanes = i),
      e
    );
  }
  function Zl(t, e, l, n) {
    return ((t = he(7, t, n, e)), (t.lanes = l), t);
  }
  function Sc(t, e, l) {
    return ((t = he(6, t, null, e)), (t.lanes = l), t);
  }
  function Xr(t) {
    var e = he(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function bc(t, e, l) {
    return (
      (e = he(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Lr = new WeakMap();
  function _e(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Lr.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Xs(e) }), Lr.set(t, e), e);
    }
    return { value: t, source: e, stack: Xs(e) };
  }
  var bn = [],
    En = 0,
    pu = null,
    ra = 0,
    Te = [],
    Oe = 0,
    hl = null,
    Be = 1,
    Qe = "";
  function Ke(t, e) {
    ((bn[En++] = ra), (bn[En++] = pu), (pu = t), (ra = e));
  }
  function Zr(t, e, l) {
    ((Te[Oe++] = Be), (Te[Oe++] = Qe), (Te[Oe++] = hl), (hl = t));
    var n = Be;
    t = Qe;
    var u = 32 - re(n) - 1;
    ((n &= ~(1 << u)), (l += 1));
    var i = 32 - re(e) + u;
    if (30 < i) {
      var f = u - (u % 5);
      ((i = (n & ((1 << f) - 1)).toString(32)),
        (n >>= f),
        (u -= f),
        (Be = (1 << (32 - re(e) + u)) | (l << u) | n),
        (Qe = i + t));
    } else ((Be = (1 << i) | (l << u) | n), (Qe = t));
  }
  function Ec(t) {
    t.return !== null && (Ke(t, 1), Zr(t, 1, 0));
  }
  function _c(t) {
    for (; t === pu; )
      ((pu = bn[--En]), (bn[En] = null), (ra = bn[--En]), (bn[En] = null));
    for (; t === hl; )
      ((hl = Te[--Oe]),
        (Te[Oe] = null),
        (Qe = Te[--Oe]),
        (Te[Oe] = null),
        (Be = Te[--Oe]),
        (Te[Oe] = null));
  }
  function Vr(t, e) {
    ((Te[Oe++] = Be),
      (Te[Oe++] = Qe),
      (Te[Oe++] = hl),
      (Be = e.id),
      (Qe = e.overflow),
      (hl = t));
  }
  var Lt = null,
    Ot = null,
    rt = !1,
    dl = null,
    ze = !1,
    Tc = Error(r(519));
  function yl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (oa(_e(e, t)), Tc);
  }
  function Kr(t) {
    var e = t.stateNode,
      l = t.type,
      n = t.memoizedProps;
    switch (((e[Xt] = t), (e[ee] = n), l)) {
      case "dialog":
        (it("cancel", e), it("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        it("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < xa.length; l++) it(xa[l], e);
        break;
      case "source":
        it("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (it("error", e), it("load", e));
        break;
      case "details":
        it("toggle", e);
        break;
      case "input":
        (it("invalid", e),
          ur(
            e,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ));
        break;
      case "select":
        it("invalid", e);
        break;
      case "textarea":
        (it("invalid", e), cr(e, n.value, n.defaultValue, n.children));
    }
    ((l = n.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      n.suppressHydrationWarning === !0 ||
      rd(e.textContent, l)
        ? (n.popover != null && (it("beforetoggle", e), it("toggle", e)),
          n.onScroll != null && it("scroll", e),
          n.onScrollEnd != null && it("scrollend", e),
          n.onClick != null && (e.onclick = Le),
          (e = !0))
        : (e = !1),
      e || yl(t, !0));
  }
  function Jr(t) {
    for (Lt = t.return; Lt; )
      switch (Lt.tag) {
        case 5:
        case 31:
        case 13:
          ze = !1;
          return;
        case 27:
        case 3:
          ze = !0;
          return;
        default:
          Lt = Lt.return;
      }
  }
  function _n(t) {
    if (t !== Lt) return !1;
    if (!rt) return (Jr(t), (rt = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || Xf(t.type, t.memoizedProps))),
        (l = !l)),
      l && Ot && yl(t),
      Jr(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Ot = Sd(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Ot = Sd(t);
    } else
      e === 27
        ? ((e = Ot), Cl(t.type) ? ((t = Jf), (Jf = null), (Ot = t)) : (Ot = e))
        : (Ot = Lt ? Me(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Vl() {
    ((Ot = Lt = null), (rt = !1));
  }
  function Oc() {
    var t = dl;
    return (
      t !== null &&
        (ie === null ? (ie = t) : ie.push.apply(ie, t), (dl = null)),
      t
    );
  }
  function oa(t) {
    dl === null ? (dl = [t]) : dl.push(t);
  }
  var zc = m(null),
    Kl = null,
    Je = null;
  function vl(t, e, l) {
    (j(zc, e._currentValue), (e._currentValue = l));
  }
  function Fe(t) {
    ((t._currentValue = zc.current), N(zc));
  }
  function Ac(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
          : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Mc(t, e, l, n) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var i = u.dependencies;
      if (i !== null) {
        var f = u.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var o = i;
          i = u;
          for (var y = 0; y < e.length; y++)
            if (o.context === e[y]) {
              ((i.lanes |= l),
                (o = i.alternate),
                o !== null && (o.lanes |= l),
                Ac(i.return, l, t),
                n || (f = null));
              break t;
            }
          i = o.next;
        }
      } else if (u.tag === 18) {
        if (((f = u.return), f === null)) throw Error(r(341));
        ((f.lanes |= l),
          (i = f.alternate),
          i !== null && (i.lanes |= l),
          Ac(f, l, t),
          (f = null));
      } else f = u.child;
      if (f !== null) f.return = u;
      else
        for (f = u; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((u = f.sibling), u !== null)) {
            ((u.return = f.return), (f = u));
            break;
          }
          f = f.return;
        }
      u = f;
    }
  }
  function Tn(t, e, l, n) {
    t = null;
    for (var u = e, i = !1; u !== null; ) {
      if (!i) {
        if ((u.flags & 524288) !== 0) i = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var f = u.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var o = u.type;
          oe(u.pendingProps.value, f.value) ||
            (t !== null ? t.push(o) : (t = [o]));
        }
      } else if (u === vt.current) {
        if (((f = u.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Qa) : (t = [Qa]));
      }
      u = u.return;
    }
    (t !== null && Mc(e, t, l, n), (e.flags |= 262144));
  }
  function Su(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!oe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Jl(t) {
    ((Kl = t),
      (Je = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Zt(t) {
    return Fr(Kl, t);
  }
  function bu(t, e) {
    return (Kl === null && Jl(t), Fr(t, e));
  }
  function Fr(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Je === null)) {
      if (t === null) throw Error(r(308));
      ((Je = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Je = Je.next = e;
    return l;
  }
  var im =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  t.push(n);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    cm = a.unstable_scheduleCallback,
    fm = a.unstable_NormalPriority,
    Nt = {
      $$typeof: G,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Cc() {
    return { controller: new im(), data: new Map(), refCount: 0 };
  }
  function ha(t) {
    (t.refCount--,
      t.refCount === 0 &&
        cm(fm, function () {
          t.controller.abort();
        }));
  }
  var da = null,
    Dc = 0,
    On = 0,
    zn = null;
  function sm(t, e) {
    if (da === null) {
      var l = (da = []);
      ((Dc = 0),
        (On = xf()),
        (zn = {
          status: "pending",
          value: void 0,
          then: function (n) {
            l.push(n);
          },
        }));
    }
    return (Dc++, e.then(kr, kr), e);
  }
  function kr() {
    if (--Dc === 0 && da !== null) {
      zn !== null && (zn.status = "fulfilled");
      var t = da;
      ((da = null), (On = 0), (zn = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function rm(t, e) {
    var l = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((n.status = "fulfilled"), (n.value = e));
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (n.status = "rejected", n.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        },
      ),
      n
    );
  }
  var Wr = C.S;
  C.S = function (t, e) {
    ((Hh = fe()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        sm(t, e),
      Wr !== null && Wr(t, e));
  };
  var Fl = m(null);
  function Rc() {
    var t = Fl.current;
    return t !== null ? t : Tt.pooledCache;
  }
  function Eu(t, e) {
    e === null ? j(Fl, Fl.current) : j(Fl, e.pool);
  }
  function $r() {
    var t = Rc();
    return t === null ? null : { parent: Nt._currentValue, pool: t };
  }
  var An = Error(r(460)),
    Uc = Error(r(474)),
    _u = Error(r(542)),
    Tu = { then: function () {} };
  function Ir(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Pr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Le, Le), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), eo(t), t);
      default:
        if (typeof e.status == "string") e.then(Le, Le);
        else {
          if (((t = Tt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (n) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "fulfilled"), (u.value = n));
                }
              },
              function (n) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "rejected"), (u.reason = n));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), eo(t), t);
        }
        throw ((Wl = e), An);
    }
  }
  function kl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Wl = l), An)
        : l;
    }
  }
  var Wl = null;
  function to() {
    if (Wl === null) throw Error(r(459));
    var t = Wl;
    return ((Wl = null), t);
  }
  function eo(t) {
    if (t === An || t === _u) throw Error(r(483));
  }
  var Mn = null,
    ya = 0;
  function Ou(t) {
    var e = ya;
    return ((ya += 1), Mn === null && (Mn = []), Pr(Mn, t, e));
  }
  function va(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function zu(t, e) {
    throw e.$$typeof === x
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function lo(t) {
    function e(b, v) {
      if (t) {
        var _ = b.deletions;
        _ === null ? ((b.deletions = [v]), (b.flags |= 16)) : _.push(v);
      }
    }
    function l(b, v) {
      if (!t) return null;
      for (; v !== null; ) (e(b, v), (v = v.sibling));
      return null;
    }
    function n(b) {
      for (var v = new Map(); b !== null; )
        (b.key !== null ? v.set(b.key, b) : v.set(b.index, b), (b = b.sibling));
      return v;
    }
    function u(b, v) {
      return ((b = Ve(b, v)), (b.index = 0), (b.sibling = null), b);
    }
    function i(b, v, _) {
      return (
        (b.index = _),
        t
          ? ((_ = b.alternate),
            _ !== null
              ? ((_ = _.index), _ < v ? ((b.flags |= 67108866), v) : _)
              : ((b.flags |= 67108866), v))
          : ((b.flags |= 1048576), v)
      );
    }
    function f(b) {
      return (t && b.alternate === null && (b.flags |= 67108866), b);
    }
    function o(b, v, _, D) {
      return v === null || v.tag !== 6
        ? ((v = Sc(_, b.mode, D)), (v.return = b), v)
        : ((v = u(v, _)), (v.return = b), v);
    }
    function y(b, v, _, D) {
      var L = _.type;
      return L === X
        ? M(b, v, _.props.children, D, _.key)
        : v !== null &&
            (v.elementType === L ||
              (typeof L == "object" &&
                L !== null &&
                L.$$typeof === P &&
                kl(L) === v.type))
          ? ((v = u(v, _.props)), va(v, _), (v.return = b), v)
          : ((v = gu(_.type, _.key, _.props, null, b.mode, D)),
            va(v, _),
            (v.return = b),
            v);
    }
    function T(b, v, _, D) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== _.containerInfo ||
        v.stateNode.implementation !== _.implementation
        ? ((v = bc(_, b.mode, D)), (v.return = b), v)
        : ((v = u(v, _.children || [])), (v.return = b), v);
    }
    function M(b, v, _, D, L) {
      return v === null || v.tag !== 7
        ? ((v = Zl(_, b.mode, D, L)), (v.return = b), v)
        : ((v = u(v, _)), (v.return = b), v);
    }
    function U(b, v, _) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return ((v = Sc("" + v, b.mode, _)), (v.return = b), v);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case J:
            return (
              (_ = gu(v.type, v.key, v.props, null, b.mode, _)),
              va(_, v),
              (_.return = b),
              _
            );
          case w:
            return ((v = bc(v, b.mode, _)), (v.return = b), v);
          case P:
            return ((v = kl(v)), U(b, v, _));
        }
        if (Re(v) || te(v))
          return ((v = Zl(v, b.mode, _, null)), (v.return = b), v);
        if (typeof v.then == "function") return U(b, Ou(v), _);
        if (v.$$typeof === G) return U(b, bu(b, v), _);
        zu(b, v);
      }
      return null;
    }
    function O(b, v, _, D) {
      var L = v !== null ? v.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return L !== null ? null : o(b, v, "" + _, D);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case J:
            return _.key === L ? y(b, v, _, D) : null;
          case w:
            return _.key === L ? T(b, v, _, D) : null;
          case P:
            return ((_ = kl(_)), O(b, v, _, D));
        }
        if (Re(_) || te(_)) return L !== null ? null : M(b, v, _, D, null);
        if (typeof _.then == "function") return O(b, v, Ou(_), D);
        if (_.$$typeof === G) return O(b, v, bu(b, _), D);
        zu(b, _);
      }
      return null;
    }
    function A(b, v, _, D, L) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ((b = b.get(_) || null), o(v, b, "" + D, L));
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case J:
            return (
              (b = b.get(D.key === null ? _ : D.key) || null),
              y(v, b, D, L)
            );
          case w:
            return (
              (b = b.get(D.key === null ? _ : D.key) || null),
              T(v, b, D, L)
            );
          case P:
            return ((D = kl(D)), A(b, v, _, D, L));
        }
        if (Re(D) || te(D))
          return ((b = b.get(_) || null), M(v, b, D, L, null));
        if (typeof D.then == "function") return A(b, v, _, Ou(D), L);
        if (D.$$typeof === G) return A(b, v, _, bu(v, D), L);
        zu(v, D);
      }
      return null;
    }
    function q(b, v, _, D) {
      for (
        var L = null, ht = null, Q = v, nt = (v = 0), st = null;
        Q !== null && nt < _.length;
        nt++
      ) {
        Q.index > nt ? ((st = Q), (Q = null)) : (st = Q.sibling);
        var dt = O(b, Q, _[nt], D);
        if (dt === null) {
          Q === null && (Q = st);
          break;
        }
        (t && Q && dt.alternate === null && e(b, Q),
          (v = i(dt, v, nt)),
          ht === null ? (L = dt) : (ht.sibling = dt),
          (ht = dt),
          (Q = st));
      }
      if (nt === _.length) return (l(b, Q), rt && Ke(b, nt), L);
      if (Q === null) {
        for (; nt < _.length; nt++)
          ((Q = U(b, _[nt], D)),
            Q !== null &&
              ((v = i(Q, v, nt)),
              ht === null ? (L = Q) : (ht.sibling = Q),
              (ht = Q)));
        return (rt && Ke(b, nt), L);
      }
      for (Q = n(Q); nt < _.length; nt++)
        ((st = A(Q, b, nt, _[nt], D)),
          st !== null &&
            (t &&
              st.alternate !== null &&
              Q.delete(st.key === null ? nt : st.key),
            (v = i(st, v, nt)),
            ht === null ? (L = st) : (ht.sibling = st),
            (ht = st)));
      return (
        t &&
          Q.forEach(function (xl) {
            return e(b, xl);
          }),
        rt && Ke(b, nt),
        L
      );
    }
    function V(b, v, _, D) {
      if (_ == null) throw Error(r(151));
      for (
        var L = null, ht = null, Q = v, nt = (v = 0), st = null, dt = _.next();
        Q !== null && !dt.done;
        nt++, dt = _.next()
      ) {
        Q.index > nt ? ((st = Q), (Q = null)) : (st = Q.sibling);
        var xl = O(b, Q, dt.value, D);
        if (xl === null) {
          Q === null && (Q = st);
          break;
        }
        (t && Q && xl.alternate === null && e(b, Q),
          (v = i(xl, v, nt)),
          ht === null ? (L = xl) : (ht.sibling = xl),
          (ht = xl),
          (Q = st));
      }
      if (dt.done) return (l(b, Q), rt && Ke(b, nt), L);
      if (Q === null) {
        for (; !dt.done; nt++, dt = _.next())
          ((dt = U(b, dt.value, D)),
            dt !== null &&
              ((v = i(dt, v, nt)),
              ht === null ? (L = dt) : (ht.sibling = dt),
              (ht = dt)));
        return (rt && Ke(b, nt), L);
      }
      for (Q = n(Q); !dt.done; nt++, dt = _.next())
        ((dt = A(Q, b, nt, dt.value, D)),
          dt !== null &&
            (t &&
              dt.alternate !== null &&
              Q.delete(dt.key === null ? nt : dt.key),
            (v = i(dt, v, nt)),
            ht === null ? (L = dt) : (ht.sibling = dt),
            (ht = dt)));
      return (
        t &&
          Q.forEach(function (E0) {
            return e(b, E0);
          }),
        rt && Ke(b, nt),
        L
      );
    }
    function Et(b, v, _, D) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === X &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case J:
            t: {
              for (var L = _.key; v !== null; ) {
                if (v.key === L) {
                  if (((L = _.type), L === X)) {
                    if (v.tag === 7) {
                      (l(b, v.sibling),
                        (D = u(v, _.props.children)),
                        (D.return = b),
                        (b = D));
                      break t;
                    }
                  } else if (
                    v.elementType === L ||
                    (typeof L == "object" &&
                      L !== null &&
                      L.$$typeof === P &&
                      kl(L) === v.type)
                  ) {
                    (l(b, v.sibling),
                      (D = u(v, _.props)),
                      va(D, _),
                      (D.return = b),
                      (b = D));
                    break t;
                  }
                  l(b, v);
                  break;
                } else e(b, v);
                v = v.sibling;
              }
              _.type === X
                ? ((D = Zl(_.props.children, b.mode, D, _.key)),
                  (D.return = b),
                  (b = D))
                : ((D = gu(_.type, _.key, _.props, null, b.mode, D)),
                  va(D, _),
                  (D.return = b),
                  (b = D));
            }
            return f(b);
          case w:
            t: {
              for (L = _.key; v !== null; ) {
                if (v.key === L)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === _.containerInfo &&
                    v.stateNode.implementation === _.implementation
                  ) {
                    (l(b, v.sibling),
                      (D = u(v, _.children || [])),
                      (D.return = b),
                      (b = D));
                    break t;
                  } else {
                    l(b, v);
                    break;
                  }
                else e(b, v);
                v = v.sibling;
              }
              ((D = bc(_, b.mode, D)), (D.return = b), (b = D));
            }
            return f(b);
          case P:
            return ((_ = kl(_)), Et(b, v, _, D));
        }
        if (Re(_)) return q(b, v, _, D);
        if (te(_)) {
          if (((L = te(_)), typeof L != "function")) throw Error(r(150));
          return ((_ = L.call(_)), V(b, v, _, D));
        }
        if (typeof _.then == "function") return Et(b, v, Ou(_), D);
        if (_.$$typeof === G) return Et(b, v, bu(b, _), D);
        zu(b, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          v !== null && v.tag === 6
            ? (l(b, v.sibling), (D = u(v, _)), (D.return = b), (b = D))
            : (l(b, v), (D = Sc(_, b.mode, D)), (D.return = b), (b = D)),
          f(b))
        : l(b, v);
    }
    return function (b, v, _, D) {
      try {
        ya = 0;
        var L = Et(b, v, _, D);
        return ((Mn = null), L);
      } catch (Q) {
        if (Q === An || Q === _u) throw Q;
        var ht = he(29, Q, null, b.mode);
        return ((ht.lanes = D), (ht.return = b), ht);
      } finally {
      }
    };
  }
  var $l = lo(!0),
    no = lo(!1),
    ml = !1;
  function Nc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function xc(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function gl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (yt & 2) !== 0)) {
      var u = n.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (n.pending = e),
        (e = mu(t)),
        Gr(t, null, l),
        e
      );
    }
    return (vu(t, n, e, l), mu(t));
  }
  function ma(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var n = e.lanes;
      ((n &= t.pendingLanes), (l |= n), (e.lanes = l), Fs(t, l));
    }
  }
  function Hc(t, e) {
    var l = t.updateQueue,
      n = t.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var u = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (i === null ? (u = i = f) : (i = i.next = f), (l = l.next));
        } while (l !== null);
        i === null ? (u = i = e) : (i = i.next = e);
      } else u = i = e;
      ((l = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var jc = !1;
  function ga() {
    if (jc) {
      var t = zn;
      if (t !== null) throw t;
    }
  }
  function pa(t, e, l, n) {
    jc = !1;
    var u = t.updateQueue;
    ml = !1;
    var i = u.firstBaseUpdate,
      f = u.lastBaseUpdate,
      o = u.shared.pending;
    if (o !== null) {
      u.shared.pending = null;
      var y = o,
        T = y.next;
      ((y.next = null), f === null ? (i = T) : (f.next = T), (f = y));
      var M = t.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (o = M.lastBaseUpdate),
        o !== f &&
          (o === null ? (M.firstBaseUpdate = T) : (o.next = T),
          (M.lastBaseUpdate = y)));
    }
    if (i !== null) {
      var U = u.baseState;
      ((f = 0), (M = T = y = null), (o = i));
      do {
        var O = o.lane & -536870913,
          A = O !== o.lane;
        if (A ? (ft & O) === O : (n & O) === O) {
          (O !== 0 && O === On && (jc = !0),
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var q = t,
              V = o;
            O = e;
            var Et = l;
            switch (V.tag) {
              case 1:
                if (((q = V.payload), typeof q == "function")) {
                  U = q.call(Et, U, O);
                  break t;
                }
                U = q;
                break t;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = V.payload),
                  (O = typeof q == "function" ? q.call(Et, U, O) : q),
                  O == null)
                )
                  break t;
                U = R({}, U, O);
                break t;
              case 2:
                ml = !0;
            }
          }
          ((O = o.callback),
            O !== null &&
              ((t.flags |= 64),
              A && (t.flags |= 8192),
              (A = u.callbacks),
              A === null ? (u.callbacks = [O]) : A.push(O)));
        } else
          ((A = {
            lane: O,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            M === null ? ((T = M = A), (y = U)) : (M = M.next = A),
            (f |= O));
        if (((o = o.next), o === null)) {
          if (((o = u.shared.pending), o === null)) break;
          ((A = o),
            (o = A.next),
            (A.next = null),
            (u.lastBaseUpdate = A),
            (u.shared.pending = null));
        }
      } while (!0);
      (M === null && (y = U),
        (u.baseState = y),
        (u.firstBaseUpdate = T),
        (u.lastBaseUpdate = M),
        i === null && (u.shared.lanes = 0),
        (Tl |= f),
        (t.lanes = f),
        (t.memoizedState = U));
    }
  }
  function ao(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function uo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) ao(l[t], e);
  }
  var Cn = m(null),
    Au = m(0);
  function io(t, e) {
    ((t = nl), j(Au, t), j(Cn, e), (nl = t | e.baseLanes));
  }
  function qc() {
    (j(Au, nl), j(Cn, Cn.current));
  }
  function Bc() {
    ((nl = Au.current), N(Cn), N(Au));
  }
  var de = m(null),
    Ae = null;
  function Sl(t) {
    var e = t.alternate;
    (j(Rt, Rt.current & 1),
      j(de, t),
      Ae === null &&
        (e === null || Cn.current !== null || e.memoizedState !== null) &&
        (Ae = t));
  }
  function Qc(t) {
    (j(Rt, Rt.current), j(de, t), Ae === null && (Ae = t));
  }
  function co(t) {
    t.tag === 22
      ? (j(Rt, Rt.current), j(de, t), Ae === null && (Ae = t))
      : bl();
  }
  function bl() {
    (j(Rt, Rt.current), j(de, de.current));
  }
  function ye(t) {
    (N(de), Ae === t && (Ae = null), N(Rt));
  }
  var Rt = m(0);
  function Mu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Vf(l) || Kf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var ke = 0,
    et = null,
    St = null,
    xt = null,
    Cu = !1,
    Dn = !1,
    Il = !1,
    Du = 0,
    Sa = 0,
    Rn = null,
    om = 0;
  function Mt() {
    throw Error(r(321));
  }
  function Yc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!oe(t[l], e[l])) return !1;
    return !0;
  }
  function Gc(t, e, l, n, u, i) {
    return (
      (ke = i),
      (et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (C.H = t === null || t.memoizedState === null ? Vo : ef),
      (Il = !1),
      (i = l(n, u)),
      (Il = !1),
      Dn && (i = so(e, l, n, u)),
      fo(t),
      i
    );
  }
  function fo(t) {
    C.H = _a;
    var e = St !== null && St.next !== null;
    if (((ke = 0), (xt = St = et = null), (Cu = !1), (Sa = 0), (Rn = null), e))
      throw Error(r(300));
    t === null ||
      Ht ||
      ((t = t.dependencies), t !== null && Su(t) && (Ht = !0));
  }
  function so(t, e, l, n) {
    et = t;
    var u = 0;
    do {
      if ((Dn && (Rn = null), (Sa = 0), (Dn = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (xt = St = null), t.updateQueue != null)) {
        var i = t.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((C.H = Ko), (i = e(l, n)));
    } while (Dn);
    return i;
  }
  function hm() {
    var t = C.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ba(e) : e),
      (t = t.useState()[0]),
      (St !== null ? St.memoizedState : null) !== t && (et.flags |= 1024),
      e
    );
  }
  function wc() {
    var t = Du !== 0;
    return ((Du = 0), t);
  }
  function Xc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function Lc(t) {
    if (Cu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Cu = !1;
    }
    ((ke = 0), (xt = St = et = null), (Dn = !1), (Sa = Du = 0), (Rn = null));
  }
  function $t() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (xt === null ? (et.memoizedState = xt = t) : (xt = xt.next = t), xt);
  }
  function Ut() {
    if (St === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = St.next;
    var e = xt === null ? et.memoizedState : xt.next;
    if (e !== null) ((xt = e), (St = t));
    else {
      if (t === null)
        throw et.alternate === null ? Error(r(467)) : Error(r(310));
      ((St = t),
        (t = {
          memoizedState: St.memoizedState,
          baseState: St.baseState,
          baseQueue: St.baseQueue,
          queue: St.queue,
          next: null,
        }),
        xt === null ? (et.memoizedState = xt = t) : (xt = xt.next = t));
    }
    return xt;
  }
  function Ru() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ba(t) {
    var e = Sa;
    return (
      (Sa += 1),
      Rn === null && (Rn = []),
      (t = Pr(Rn, t, e)),
      (e = et),
      (xt === null ? e.memoizedState : xt.next) === null &&
        ((e = e.alternate),
        (C.H = e === null || e.memoizedState === null ? Vo : ef)),
      t
    );
  }
  function Uu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ba(t);
      if (t.$$typeof === G) return Zt(t);
    }
    throw Error(r(438, String(t)));
  }
  function Zc(t) {
    var e = null,
      l = et.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var n = et.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (e = {
              data: n.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = Ru()), (et.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++) l[n] = kt;
    return (e.index++, l);
  }
  function We(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Nu(t) {
    var e = Ut();
    return Vc(e, St, t);
  }
  function Vc(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var u = t.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (u !== null) {
        var f = u.next;
        ((u.next = i.next), (i.next = f));
      }
      ((e.baseQueue = u = i), (n.pending = null));
    }
    if (((i = t.baseState), u === null)) t.memoizedState = i;
    else {
      e = u.next;
      var o = (f = null),
        y = null,
        T = e,
        M = !1;
      do {
        var U = T.lane & -536870913;
        if (U !== T.lane ? (ft & U) === U : (ke & U) === U) {
          var O = T.revertLane;
          if (O === 0)
            (y !== null &&
              (y = y.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null,
                }),
              U === On && (M = !0));
          else if ((ke & O) === O) {
            ((T = T.next), O === On && (M = !0));
            continue;
          } else
            ((U = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null,
            }),
              y === null ? ((o = y = U), (f = i)) : (y = y.next = U),
              (et.lanes |= O),
              (Tl |= O));
          ((U = T.action),
            Il && l(i, U),
            (i = T.hasEagerState ? T.eagerState : l(i, U)));
        } else
          ((O = {
            lane: U,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          }),
            y === null ? ((o = y = O), (f = i)) : (y = y.next = O),
            (et.lanes |= U),
            (Tl |= U));
        T = T.next;
      } while (T !== null && T !== e);
      if (
        (y === null ? (f = i) : (y.next = o),
        !oe(i, t.memoizedState) && ((Ht = !0), M && ((l = zn), l !== null)))
      )
        throw l;
      ((t.memoizedState = i),
        (t.baseState = f),
        (t.baseQueue = y),
        (n.lastRenderedState = i));
    }
    return (u === null && (n.lanes = 0), [t.memoizedState, n.dispatch]);
  }
  function Kc(t) {
    var e = Ut(),
      l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch,
      u = l.pending,
      i = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var f = (u = u.next);
      do ((i = t(i, f.action)), (f = f.next));
      while (f !== u);
      (oe(i, e.memoizedState) || (Ht = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (l.lastRenderedState = i));
    }
    return [i, n];
  }
  function ro(t, e, l) {
    var n = et,
      u = Ut(),
      i = rt;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var f = !oe((St || u).memoizedState, l);
    if (
      (f && ((u.memoizedState = l), (Ht = !0)),
      (u = u.queue),
      kc(yo.bind(null, n, u, t), [t]),
      u.getSnapshot !== e || f || (xt !== null && xt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Un(9, { destroy: void 0 }, ho.bind(null, n, u, l, e), null),
        Tt === null)
      )
        throw Error(r(349));
      i || (ke & 127) !== 0 || oo(n, e, l);
    }
    return l;
  }
  function oo(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = et.updateQueue),
      e === null
        ? ((e = Ru()), (et.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function ho(t, e, l, n) {
    ((e.value = l), (e.getSnapshot = n), vo(e) && mo(t));
  }
  function yo(t, e, l) {
    return l(function () {
      vo(e) && mo(t);
    });
  }
  function vo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !oe(t, l);
    } catch {
      return !0;
    }
  }
  function mo(t) {
    var e = Ll(t, 2);
    e !== null && ce(e, t, 2);
  }
  function Jc(t) {
    var e = $t();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Il)) {
        sl(!0);
        try {
          l();
        } finally {
          sl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: We,
        lastRenderedState: t,
      }),
      e
    );
  }
  function go(t, e, l, n) {
    return ((t.baseState = l), Vc(t, St, typeof n == "function" ? n : We));
  }
  function dm(t, e, l, n, u) {
    if (ju(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var i = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          i.listeners.push(f);
        },
      };
      (C.T !== null ? l(!0) : (i.isTransition = !1),
        n(i),
        (l = e.pending),
        l === null
          ? ((i.next = e.pending = i), po(e, i))
          : ((i.next = l.next), (e.pending = l.next = i)));
    }
  }
  function po(t, e) {
    var l = e.action,
      n = e.payload,
      u = t.state;
    if (e.isTransition) {
      var i = C.T,
        f = {};
      C.T = f;
      try {
        var o = l(u, n),
          y = C.S;
        (y !== null && y(f, o), So(t, e, o));
      } catch (T) {
        Fc(t, e, T);
      } finally {
        (i !== null && f.types !== null && (i.types = f.types), (C.T = i));
      }
    } else
      try {
        ((i = l(u, n)), So(t, e, i));
      } catch (T) {
        Fc(t, e, T);
      }
  }
  function So(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (n) {
            bo(t, e, n);
          },
          function (n) {
            return Fc(t, e, n);
          },
        )
      : bo(t, e, l);
  }
  function bo(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      Eo(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), po(t, l))));
  }
  function Fc(t, e, l) {
    var n = t.pending;
    if (((t.pending = null), n !== null)) {
      n = n.next;
      do ((e.status = "rejected"), (e.reason = l), Eo(e), (e = e.next));
      while (e !== n);
    }
    t.action = null;
  }
  function Eo(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function _o(t, e) {
    return e;
  }
  function To(t, e) {
    if (rt) {
      var l = Tt.formState;
      if (l !== null) {
        t: {
          var n = et;
          if (rt) {
            if (Ot) {
              e: {
                for (var u = Ot, i = ze; u.nodeType !== 8; ) {
                  if (!i) {
                    u = null;
                    break e;
                  }
                  if (((u = Me(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                ((i = u.data), (u = i === "F!" || i === "F" ? u : null));
              }
              if (u) {
                ((Ot = Me(u.nextSibling)), (n = u.data === "F!"));
                break t;
              }
            }
            yl(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return (
      (l = $t()),
      (l.memoizedState = l.baseState = e),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _o,
        lastRenderedState: e,
      }),
      (l.queue = n),
      (l = Xo.bind(null, et, n)),
      (n.dispatch = l),
      (n = Jc(!1)),
      (i = tf.bind(null, et, !1, n.queue)),
      (n = $t()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (n.queue = u),
      (l = dm.bind(null, et, u, i, l)),
      (u.dispatch = l),
      (n.memoizedState = t),
      [e, l, !1]
    );
  }
  function Oo(t) {
    var e = Ut();
    return zo(e, St, t);
  }
  function zo(t, e, l) {
    if (
      ((e = Vc(t, e, _o)[0]),
      (t = Nu(We)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var n = ba(e);
      } catch (f) {
        throw f === An ? _u : f;
      }
    else n = e;
    e = Ut();
    var u = e.queue,
      i = u.dispatch;
    return (
      l !== e.memoizedState &&
        ((et.flags |= 2048),
        Un(9, { destroy: void 0 }, ym.bind(null, u, l), null)),
      [n, i, t]
    );
  }
  function ym(t, e) {
    t.action = e;
  }
  function Ao(t) {
    var e = Ut(),
      l = St;
    if (l !== null) return zo(e, l, t);
    (Ut(), (e = e.memoizedState), (l = Ut()));
    var n = l.queue.dispatch;
    return ((l.memoizedState = t), [e, n, !1]);
  }
  function Un(t, e, l, n) {
    return (
      (t = { tag: t, create: l, deps: n, inst: e, next: null }),
      (e = et.updateQueue),
      e === null && ((e = Ru()), (et.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((n = l.next), (l.next = t), (t.next = n), (e.lastEffect = t)),
      t
    );
  }
  function Mo() {
    return Ut().memoizedState;
  }
  function xu(t, e, l, n) {
    var u = $t();
    ((et.flags |= t),
      (u.memoizedState = Un(
        1 | e,
        { destroy: void 0 },
        l,
        n === void 0 ? null : n,
      )));
  }
  function Hu(t, e, l, n) {
    var u = Ut();
    n = n === void 0 ? null : n;
    var i = u.memoizedState.inst;
    St !== null && n !== null && Yc(n, St.memoizedState.deps)
      ? (u.memoizedState = Un(e, i, l, n))
      : ((et.flags |= t), (u.memoizedState = Un(1 | e, i, l, n)));
  }
  function Co(t, e) {
    xu(8390656, 8, t, e);
  }
  function kc(t, e) {
    Hu(2048, 8, t, e);
  }
  function vm(t) {
    et.flags |= 4;
    var e = et.updateQueue;
    if (e === null) ((e = Ru()), (et.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Do(t) {
    var e = Ut().memoizedState;
    return (
      vm({ ref: e, nextImpl: t }),
      function () {
        if ((yt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Ro(t, e) {
    return Hu(4, 2, t, e);
  }
  function Uo(t, e) {
    return Hu(4, 4, t, e);
  }
  function No(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function xo(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Hu(4, 4, No.bind(null, e, t), l));
  }
  function Wc() {}
  function Ho(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Yc(e, n[1]) ? n[0] : ((l.memoizedState = [t, e]), t);
  }
  function jo(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Yc(e, n[1])) return n[0];
    if (((n = t()), Il)) {
      sl(!0);
      try {
        t();
      } finally {
        sl(!1);
      }
    }
    return ((l.memoizedState = [n, e]), n);
  }
  function $c(t, e, l) {
    return l === void 0 || ((ke & 1073741824) !== 0 && (ft & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = qh()), (et.lanes |= t), (Tl |= t), l);
  }
  function qo(t, e, l, n) {
    return oe(l, e)
      ? l
      : Cn.current !== null
        ? ((t = $c(t, l, n)), oe(t, e) || (Ht = !0), t)
        : (ke & 42) === 0 || ((ke & 1073741824) !== 0 && (ft & 261930) === 0)
          ? ((Ht = !0), (t.memoizedState = l))
          : ((t = qh()), (et.lanes |= t), (Tl |= t), e);
  }
  function Bo(t, e, l, n, u) {
    var i = H.p;
    H.p = i !== 0 && 8 > i ? i : 8;
    var f = C.T,
      o = {};
    ((C.T = o), tf(t, !1, e, l));
    try {
      var y = u(),
        T = C.S;
      if (
        (T !== null && T(o, y),
        y !== null && typeof y == "object" && typeof y.then == "function")
      ) {
        var M = rm(y, n);
        Ea(t, e, M, ge(t));
      } else Ea(t, e, n, ge(t));
    } catch (U) {
      Ea(t, e, { then: function () {}, status: "rejected", reason: U }, ge());
    } finally {
      ((H.p = i),
        f !== null && o.types !== null && (f.types = o.types),
        (C.T = f));
    }
  }
  function mm() {}
  function Ic(t, e, l, n) {
    if (t.tag !== 5) throw Error(r(476));
    var u = Qo(t).queue;
    Bo(
      t,
      u,
      e,
      k,
      l === null
        ? mm
        : function () {
            return (Yo(t), l(n));
          },
    );
  }
  function Qo(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: We,
        lastRenderedState: k,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: We,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Yo(t) {
    var e = Qo(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Ea(t, e.next.queue, {}, ge()));
  }
  function Pc() {
    return Zt(Qa);
  }
  function Go() {
    return Ut().memoizedState;
  }
  function wo() {
    return Ut().memoizedState;
  }
  function gm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ge();
          t = gl(l);
          var n = pl(e, t, l);
          (n !== null && (ce(n, e, l), ma(n, e, l)),
            (e = { cache: Cc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function pm(t, e, l) {
    var n = ge();
    ((l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ju(t)
        ? Lo(e, l)
        : ((l = gc(t, e, l, n)), l !== null && (ce(l, t, n), Zo(l, e, n))));
  }
  function Xo(t, e, l) {
    var n = ge();
    Ea(t, e, l, n);
  }
  function Ea(t, e, l, n) {
    var u = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ju(t)) Lo(e, u);
    else {
      var i = t.alternate;
      if (
        t.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = e.lastRenderedReducer), i !== null)
      )
        try {
          var f = e.lastRenderedState,
            o = i(f, l);
          if (((u.hasEagerState = !0), (u.eagerState = o), oe(o, f)))
            return (vu(t, e, u, 0), Tt === null && yu(), !1);
        } catch {
        } finally {
        }
      if (((l = gc(t, e, u, n)), l !== null))
        return (ce(l, t, n), Zo(l, e, n), !0);
    }
    return !1;
  }
  function tf(t, e, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: xf(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ju(t))
    ) {
      if (e) throw Error(r(479));
    } else ((e = gc(t, l, n, 2)), e !== null && ce(e, t, 2));
  }
  function ju(t) {
    var e = t.alternate;
    return t === et || (e !== null && e === et);
  }
  function Lo(t, e) {
    Dn = Cu = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function Zo(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      ((n &= t.pendingLanes), (l |= n), (e.lanes = l), Fs(t, l));
    }
  }
  var _a = {
    readContext: Zt,
    use: Uu,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    useHostTransitionStatus: Mt,
    useFormState: Mt,
    useActionState: Mt,
    useOptimistic: Mt,
    useMemoCache: Mt,
    useCacheRefresh: Mt,
  };
  _a.useEffectEvent = Mt;
  var Vo = {
      readContext: Zt,
      use: Uu,
      useCallback: function (t, e) {
        return (($t().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Zt,
      useEffect: Co,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          xu(4194308, 4, No.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return xu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        xu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = $t();
        e = e === void 0 ? null : e;
        var n = t();
        if (Il) {
          sl(!0);
          try {
            t();
          } finally {
            sl(!1);
          }
        }
        return ((l.memoizedState = [n, e]), n);
      },
      useReducer: function (t, e, l) {
        var n = $t();
        if (l !== void 0) {
          var u = l(e);
          if (Il) {
            sl(!0);
            try {
              l(e);
            } finally {
              sl(!1);
            }
          }
        } else u = e;
        return (
          (n.memoizedState = n.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (n.queue = t),
          (t = t.dispatch = pm.bind(null, et, t)),
          [n.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = $t();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Jc(t);
        var e = t.queue,
          l = Xo.bind(null, et, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Wc,
      useDeferredValue: function (t, e) {
        var l = $t();
        return $c(l, t, e);
      },
      useTransition: function () {
        var t = Jc(!1);
        return (
          (t = Bo.bind(null, et, t.queue, !0, !1)),
          ($t().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var n = et,
          u = $t();
        if (rt) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = e()), Tt === null)) throw Error(r(349));
          (ft & 127) !== 0 || oo(n, e, l);
        }
        u.memoizedState = l;
        var i = { value: l, getSnapshot: e };
        return (
          (u.queue = i),
          Co(yo.bind(null, n, i, t), [t]),
          (n.flags |= 2048),
          Un(9, { destroy: void 0 }, ho.bind(null, n, i, l, e), null),
          l
        );
      },
      useId: function () {
        var t = $t(),
          e = Tt.identifierPrefix;
        if (rt) {
          var l = Qe,
            n = Be;
          ((l = (n & ~(1 << (32 - re(n) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = Du++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_"));
        } else ((l = om++), (e = "_" + e + "r_" + l.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Pc,
      useFormState: To,
      useActionState: To,
      useOptimistic: function (t) {
        var e = $t();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = tf.bind(null, et, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Zc,
      useCacheRefresh: function () {
        return ($t().memoizedState = gm.bind(null, et));
      },
      useEffectEvent: function (t) {
        var e = $t(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((yt & 2) !== 0) throw Error(r(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ef = {
      readContext: Zt,
      use: Uu,
      useCallback: Ho,
      useContext: Zt,
      useEffect: kc,
      useImperativeHandle: xo,
      useInsertionEffect: Ro,
      useLayoutEffect: Uo,
      useMemo: jo,
      useReducer: Nu,
      useRef: Mo,
      useState: function () {
        return Nu(We);
      },
      useDebugValue: Wc,
      useDeferredValue: function (t, e) {
        var l = Ut();
        return qo(l, St.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Nu(We)[0],
          e = Ut().memoizedState;
        return [typeof t == "boolean" ? t : ba(t), e];
      },
      useSyncExternalStore: ro,
      useId: Go,
      useHostTransitionStatus: Pc,
      useFormState: Oo,
      useActionState: Oo,
      useOptimistic: function (t, e) {
        var l = Ut();
        return go(l, St, t, e);
      },
      useMemoCache: Zc,
      useCacheRefresh: wo,
    };
  ef.useEffectEvent = Do;
  var Ko = {
    readContext: Zt,
    use: Uu,
    useCallback: Ho,
    useContext: Zt,
    useEffect: kc,
    useImperativeHandle: xo,
    useInsertionEffect: Ro,
    useLayoutEffect: Uo,
    useMemo: jo,
    useReducer: Kc,
    useRef: Mo,
    useState: function () {
      return Kc(We);
    },
    useDebugValue: Wc,
    useDeferredValue: function (t, e) {
      var l = Ut();
      return St === null ? $c(l, t, e) : qo(l, St.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Kc(We)[0],
        e = Ut().memoizedState;
      return [typeof t == "boolean" ? t : ba(t), e];
    },
    useSyncExternalStore: ro,
    useId: Go,
    useHostTransitionStatus: Pc,
    useFormState: Ao,
    useActionState: Ao,
    useOptimistic: function (t, e) {
      var l = Ut();
      return St !== null
        ? go(l, St, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: Zc,
    useCacheRefresh: wo,
  };
  Ko.useEffectEvent = Do;
  function lf(t, e, l, n) {
    ((e = t.memoizedState),
      (l = l(n, e)),
      (l = l == null ? e : R({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var nf = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var n = ge(),
        u = gl(n);
      ((u.payload = e),
        l != null && (u.callback = l),
        (e = pl(t, u, n)),
        e !== null && (ce(e, t, n), ma(e, t, n)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var n = ge(),
        u = gl(n);
      ((u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = pl(t, u, n)),
        e !== null && (ce(e, t, n), ma(e, t, n)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ge(),
        n = gl(l);
      ((n.tag = 2),
        e != null && (n.callback = e),
        (e = pl(t, n, l)),
        e !== null && (ce(e, t, l), ma(e, t, l)));
    },
  };
  function Jo(t, e, l, n, u, i, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(n, i, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !fa(l, n) || !fa(u, i)
          : !0
    );
  }
  function Fo(t, e, l, n) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, n),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, n),
      e.state !== t && nf.enqueueReplaceState(e, e.state, null));
  }
  function Pl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e) n !== "ref" && (l[n] = e[n]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = R({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  function ko(t) {
    du(t);
  }
  function Wo(t) {
    console.error(t);
  }
  function $o(t) {
    du(t);
  }
  function qu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Io(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function af(t, e, l) {
    return (
      (l = gl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        qu(t, e);
      }),
      l
    );
  }
  function Po(t) {
    return ((t = gl(t)), (t.tag = 3), t);
  }
  function th(t, e, l, n) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var i = n.value;
      ((t.payload = function () {
        return u(i);
      }),
        (t.callback = function () {
          Io(e, l, n);
        }));
    }
    var f = l.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        (Io(e, l, n),
          typeof u != "function" &&
            (Ol === null ? (Ol = new Set([this])) : Ol.add(this)));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      });
  }
  function Sm(t, e, l, n, u) {
    if (
      ((l.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && Tn(e, l, u, !0),
        (l = de.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ae === null ? Fu() : l.alternate === null && Ct === 0 && (Ct = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              n === Tu
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([n])) : e.add(n),
                  Rf(t, n, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === Tu
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([n])) : l.add(n)),
                  Rf(t, n, u)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return (Rf(t, n, u), Fu(), !1);
    }
    if (rt)
      return (
        (e = de.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            n !== Tc && ((t = Error(r(422), { cause: n })), oa(_e(t, l))))
          : (n !== Tc && ((e = Error(r(423), { cause: n })), oa(_e(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (n = _e(n, l)),
            (u = af(t.stateNode, n, u)),
            Hc(t, u),
            Ct !== 4 && (Ct = 2)),
        !1
      );
    var i = Error(r(520), { cause: n });
    if (
      ((i = _e(i, l)),
      Ra === null ? (Ra = [i]) : Ra.push(i),
      Ct !== 4 && (Ct = 2),
      e === null)
    )
      return !0;
    ((n = _e(n, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = af(l.stateNode, n, t)),
            Hc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (Ol === null || !Ol.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = Po(u)),
              th(u, t, l, n),
              Hc(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var uf = Error(r(461)),
    Ht = !1;
  function Vt(t, e, l, n) {
    e.child = t === null ? no(e, null, l, n) : $l(e, t.child, l, n);
  }
  function eh(t, e, l, n, u) {
    l = l.render;
    var i = e.ref;
    if ("ref" in n) {
      var f = {};
      for (var o in n) o !== "ref" && (f[o] = n[o]);
    } else f = n;
    return (
      Jl(e),
      (n = Gc(t, e, l, f, i, u)),
      (o = wc()),
      t !== null && !Ht
        ? (Xc(t, e, u), $e(t, e, u))
        : (rt && o && Ec(e), (e.flags |= 1), Vt(t, e, n, u), e.child)
    );
  }
  function lh(t, e, l, n, u) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" &&
        !pc(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = i), nh(t, e, i, n, u))
        : ((t = gu(l.type, null, n, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((i = t.child), !yf(t, u))) {
      var f = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : fa), l(f, n) && t.ref === e.ref)
      )
        return $e(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = Ve(i, n)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function nh(t, e, l, n, u) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (fa(i, n) && t.ref === e.ref)
        if (((Ht = !1), (e.pendingProps = n = i), yf(t, u)))
          (t.flags & 131072) !== 0 && (Ht = !0);
        else return ((e.lanes = t.lanes), $e(t, e, u));
    }
    return cf(t, e, l, n, u);
  }
  function ah(t, e, l, n) {
    var u = n.children,
      i = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, u = 0; n !== null; )
            ((u = u | n.lanes | n.childLanes), (n = n.sibling));
          n = u & ~i;
        } else ((n = 0), (e.child = null));
        return uh(t, e, i, l, n);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Eu(e, i !== null ? i.cachePool : null),
          i !== null ? io(e, i) : qc(),
          co(e));
      else
        return (
          (n = e.lanes = 536870912),
          uh(t, e, i !== null ? i.baseLanes | l : l, l, n)
        );
    } else
      i !== null
        ? (Eu(e, i.cachePool), io(e, i), bl(), (e.memoizedState = null))
        : (t !== null && Eu(e, null), qc(), bl());
    return (Vt(t, e, u, l), e.child);
  }
  function Ta(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function uh(t, e, l, n, u) {
    var i = Rc();
    return (
      (i = i === null ? null : { parent: Nt._currentValue, pool: i }),
      (e.memoizedState = { baseLanes: l, cachePool: i }),
      t !== null && Eu(e, null),
      qc(),
      co(e),
      t !== null && Tn(t, e, n, !0),
      (e.childLanes = u),
      null
    );
  }
  function Bu(t, e) {
    return (
      (e = Yu({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ih(t, e, l) {
    return (
      $l(e, t.child, null, l),
      (t = Bu(e, e.pendingProps)),
      (t.flags |= 2),
      ye(e),
      (e.memoizedState = null),
      t
    );
  }
  function bm(t, e, l) {
    var n = e.pendingProps,
      u = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (rt) {
        if (n.mode === "hidden")
          return ((t = Bu(e, n)), (e.lanes = 536870912), Ta(null, t));
        if (
          (Qc(e),
          (t = Ot)
            ? ((t = pd(t, ze)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: hl !== null ? { id: Be, overflow: Qe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Xr(t)),
                (l.return = e),
                (e.child = l),
                (Lt = e),
                (Ot = null)))
            : (t = null),
          t === null)
        )
          throw yl(e);
        return ((e.lanes = 536870912), null);
      }
      return Bu(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if ((Qc(e), u))
        if (e.flags & 256) ((e.flags &= -257), (e = ih(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(r(558));
      else if (
        (Ht || Tn(t, e, l, !1), (u = (l & t.childLanes) !== 0), Ht || u)
      ) {
        if (
          ((n = Tt),
          n !== null && ((f = ks(n, l)), f !== 0 && f !== i.retryLane))
        )
          throw ((i.retryLane = f), Ll(t, f), ce(n, t, f), uf);
        (Fu(), (e = ih(t, e, l)));
      } else
        ((t = i.treeContext),
          (Ot = Me(f.nextSibling)),
          (Lt = e),
          (rt = !0),
          (dl = null),
          (ze = !1),
          t !== null && Vr(e, t),
          (e = Bu(e, n)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Ve(t.child, { mode: n.mode, children: n.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Qu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function cf(t, e, l, n, u) {
    return (
      Jl(e),
      (l = Gc(t, e, l, n, void 0, u)),
      (n = wc()),
      t !== null && !Ht
        ? (Xc(t, e, u), $e(t, e, u))
        : (rt && n && Ec(e), (e.flags |= 1), Vt(t, e, l, u), e.child)
    );
  }
  function ch(t, e, l, n, u, i) {
    return (
      Jl(e),
      (e.updateQueue = null),
      (l = so(e, n, l, u)),
      fo(t),
      (n = wc()),
      t !== null && !Ht
        ? (Xc(t, e, i), $e(t, e, i))
        : (rt && n && Ec(e), (e.flags |= 1), Vt(t, e, l, i), e.child)
    );
  }
  function fh(t, e, l, n, u) {
    if ((Jl(e), e.stateNode === null)) {
      var i = Sn,
        f = l.contextType;
      (typeof f == "object" && f !== null && (i = Zt(f)),
        (i = new l(n, i)),
        (e.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = nf),
        (e.stateNode = i),
        (i._reactInternals = e),
        (i = e.stateNode),
        (i.props = n),
        (i.state = e.memoizedState),
        (i.refs = {}),
        Nc(e),
        (f = l.contextType),
        (i.context = typeof f == "object" && f !== null ? Zt(f) : Sn),
        (i.state = e.memoizedState),
        (f = l.getDerivedStateFromProps),
        typeof f == "function" && (lf(e, l, f, n), (i.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((f = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          f !== i.state && nf.enqueueReplaceState(i, i.state, null),
          pa(e, n, i, u),
          ga(),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308),
        (n = !0));
    } else if (t === null) {
      i = e.stateNode;
      var o = e.memoizedProps,
        y = Pl(l, o);
      i.props = y;
      var T = i.context,
        M = l.contextType;
      ((f = Sn), typeof M == "object" && M !== null && (f = Zt(M)));
      var U = l.getDerivedStateFromProps;
      ((M =
        typeof U == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (o = e.pendingProps !== o),
        M ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((o || T !== f) && Fo(e, i, n, f)),
        (ml = !1));
      var O = e.memoizedState;
      ((i.state = O),
        pa(e, n, i, u),
        ga(),
        (T = e.memoizedState),
        o || O !== T || ml
          ? (typeof U == "function" && (lf(e, l, U, n), (T = e.memoizedState)),
            (y = ml || Jo(e, l, y, n, O, T, f))
              ? (M ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = n),
                (e.memoizedState = T)),
            (i.props = n),
            (i.state = T),
            (i.context = f),
            (n = y))
          : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
            (n = !1)));
    } else {
      ((i = e.stateNode),
        xc(t, e),
        (f = e.memoizedProps),
        (M = Pl(l, f)),
        (i.props = M),
        (U = e.pendingProps),
        (O = i.context),
        (T = l.contextType),
        (y = Sn),
        typeof T == "object" && T !== null && (y = Zt(T)),
        (o = l.getDerivedStateFromProps),
        (T =
          typeof o == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((f !== U || O !== y) && Fo(e, i, n, y)),
        (ml = !1),
        (O = e.memoizedState),
        (i.state = O),
        pa(e, n, i, u),
        ga());
      var A = e.memoizedState;
      f !== U ||
      O !== A ||
      ml ||
      (t !== null && t.dependencies !== null && Su(t.dependencies))
        ? (typeof o == "function" && (lf(e, l, o, n), (A = e.memoizedState)),
          (M =
            ml ||
            Jo(e, l, M, n, O, A, y) ||
            (t !== null && t.dependencies !== null && Su(t.dependencies)))
            ? (T ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(n, A, y),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(n, A, y)),
              typeof i.componentDidUpdate == "function" && (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (f === t.memoizedProps && O === t.memoizedState) ||
                (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && O === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = n),
              (e.memoizedState = A)),
          (i.props = n),
          (i.state = A),
          (i.context = y),
          (n = M))
        : (typeof i.componentDidUpdate != "function" ||
            (f === t.memoizedProps && O === t.memoizedState) ||
            (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && O === t.memoizedState) ||
            (e.flags |= 1024),
          (n = !1));
    }
    return (
      (i = n),
      Qu(t, e),
      (n = (e.flags & 128) !== 0),
      i || n
        ? ((i = e.stateNode),
          (l =
            n && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (e.flags |= 1),
          t !== null && n
            ? ((e.child = $l(e, t.child, null, u)),
              (e.child = $l(e, null, l, u)))
            : Vt(t, e, l, u),
          (e.memoizedState = i.state),
          (t = e.child))
        : (t = $e(t, e, u)),
      t
    );
  }
  function sh(t, e, l, n) {
    return (Vl(), (e.flags |= 256), Vt(t, e, l, n), e.child);
  }
  var ff = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function sf(t) {
    return { baseLanes: t, cachePool: $r() };
  }
  function rf(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= me), t);
  }
  function rh(t, e, l) {
    var n = e.pendingProps,
      u = !1,
      i = (e.flags & 128) !== 0,
      f;
    if (
      ((f = i) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (Rt.current & 2) !== 0),
      f && ((u = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (rt) {
        if (
          (u ? Sl(e) : bl(),
          (t = Ot)
            ? ((t = pd(t, ze)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: hl !== null ? { id: Be, overflow: Qe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Xr(t)),
                (l.return = e),
                (e.child = l),
                (Lt = e),
                (Ot = null)))
            : (t = null),
          t === null)
        )
          throw yl(e);
        return (Kf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var o = n.children;
      return (
        (n = n.fallback),
        u
          ? (bl(),
            (u = e.mode),
            (o = Yu({ mode: "hidden", children: o }, u)),
            (n = Zl(n, u, l, null)),
            (o.return = e),
            (n.return = e),
            (o.sibling = n),
            (e.child = o),
            (n = e.child),
            (n.memoizedState = sf(l)),
            (n.childLanes = rf(t, f, l)),
            (e.memoizedState = ff),
            Ta(null, n))
          : (Sl(e), of(e, o))
      );
    }
    var y = t.memoizedState;
    if (y !== null && ((o = y.dehydrated), o !== null)) {
      if (i)
        e.flags & 256
          ? (Sl(e), (e.flags &= -257), (e = hf(t, e, l)))
          : e.memoizedState !== null
            ? (bl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (bl(),
              (o = n.fallback),
              (u = e.mode),
              (n = Yu({ mode: "visible", children: n.children }, u)),
              (o = Zl(o, u, l, null)),
              (o.flags |= 2),
              (n.return = e),
              (o.return = e),
              (n.sibling = o),
              (e.child = n),
              $l(e, t.child, null, l),
              (n = e.child),
              (n.memoizedState = sf(l)),
              (n.childLanes = rf(t, f, l)),
              (e.memoizedState = ff),
              (e = Ta(null, n)));
      else if ((Sl(e), Kf(o))) {
        if (((f = o.nextSibling && o.nextSibling.dataset), f)) var T = f.dgst;
        ((f = T),
          (n = Error(r(419))),
          (n.stack = ""),
          (n.digest = f),
          oa({ value: n, source: null, stack: null }),
          (e = hf(t, e, l)));
      } else if (
        (Ht || Tn(t, e, l, !1), (f = (l & t.childLanes) !== 0), Ht || f)
      ) {
        if (
          ((f = Tt),
          f !== null && ((n = ks(f, l)), n !== 0 && n !== y.retryLane))
        )
          throw ((y.retryLane = n), Ll(t, n), ce(f, t, n), uf);
        (Vf(o) || Fu(), (e = hf(t, e, l)));
      } else
        Vf(o)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = y.treeContext),
            (Ot = Me(o.nextSibling)),
            (Lt = e),
            (rt = !0),
            (dl = null),
            (ze = !1),
            t !== null && Vr(e, t),
            (e = of(e, n.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (bl(),
        (o = n.fallback),
        (u = e.mode),
        (y = t.child),
        (T = y.sibling),
        (n = Ve(y, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = y.subtreeFlags & 65011712),
        T !== null ? (o = Ve(T, o)) : ((o = Zl(o, u, l, null)), (o.flags |= 2)),
        (o.return = e),
        (n.return = e),
        (n.sibling = o),
        (e.child = n),
        Ta(null, n),
        (n = e.child),
        (o = t.child.memoizedState),
        o === null
          ? (o = sf(l))
          : ((u = o.cachePool),
            u !== null
              ? ((y = Nt._currentValue),
                (u = u.parent !== y ? { parent: y, pool: y } : u))
              : (u = $r()),
            (o = { baseLanes: o.baseLanes | l, cachePool: u })),
        (n.memoizedState = o),
        (n.childLanes = rf(t, f, l)),
        (e.memoizedState = ff),
        Ta(t.child, n))
      : (Sl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Ve(l, { mode: "visible", children: n.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function of(t, e) {
    return (
      (e = Yu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Yu(t, e) {
    return ((t = he(22, t, null, e)), (t.lanes = 0), t);
  }
  function hf(t, e, l) {
    return (
      $l(e, t.child, null, l),
      (t = of(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function oh(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    (n !== null && (n.lanes |= e), Ac(t.return, e, l));
  }
  function df(t, e, l, n, u, i) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: u,
          treeForkCount: i,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = n),
        (f.tail = l),
        (f.tailMode = u),
        (f.treeForkCount = i));
  }
  function hh(t, e, l) {
    var n = e.pendingProps,
      u = n.revealOrder,
      i = n.tail;
    n = n.children;
    var f = Rt.current,
      o = (f & 2) !== 0;
    if (
      (o ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      j(Rt, f),
      Vt(t, e, n, l),
      (n = rt ? ra : 0),
      !o && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && oh(t, l, e);
        else if (t.tag === 19) oh(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (u) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          ((t = l.alternate),
            t !== null && Mu(t) === null && (u = l),
            (l = l.sibling));
        ((l = u),
          l === null
            ? ((u = e.child), (e.child = null))
            : ((u = l.sibling), (l.sibling = null)),
          df(e, !1, u, l, i, n));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Mu(t) === null)) {
            e.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = l), (l = u), (u = t));
        }
        df(e, !0, l, null, i, n);
        break;
      case "together":
        df(e, !1, null, null, void 0, n);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function $e(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Tl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Tn(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Ve(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Ve(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function yf(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Su(t)));
  }
  function Em(t, e, l) {
    switch (e.tag) {
      case 3:
        (Wt(e, e.stateNode.containerInfo),
          vl(e, Nt, t.memoizedState.cache),
          Vl());
        break;
      case 27:
      case 5:
        kn(e);
        break;
      case 4:
        Wt(e, e.stateNode.containerInfo);
        break;
      case 10:
        vl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Qc(e), null);
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (Sl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? rh(t, e, l)
              : (Sl(e), (t = $e(t, e, l)), t !== null ? t.sibling : null);
        Sl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((n = (l & e.childLanes) !== 0),
          n || (Tn(t, e, l, !1), (n = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (n) return hh(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          j(Rt, Rt.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), ah(t, e, l, e.pendingProps));
      case 24:
        vl(e, Nt, t.memoizedState.cache);
    }
    return $e(t, e, l);
  }
  function dh(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ht = !0;
      else {
        if (!yf(t, l) && (e.flags & 128) === 0) return ((Ht = !1), Em(t, e, l));
        Ht = (t.flags & 131072) !== 0;
      }
    else ((Ht = !1), rt && (e.flags & 1048576) !== 0 && Zr(e, ra, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (((t = kl(e.elementType)), (e.type = t), typeof t == "function"))
            pc(t)
              ? ((n = Pl(t, n)), (e.tag = 1), (e = fh(null, e, t, n, l)))
              : ((e.tag = 0), (e = cf(null, e, t, n, l)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === F) {
                ((e.tag = 11), (e = eh(null, e, t, n, l)));
                break t;
              } else if (u === Y) {
                ((e.tag = 14), (e = lh(null, e, t, n, l)));
                break t;
              }
            }
            throw ((e = we(t) || t), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return cf(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((n = e.type), (u = Pl(n, e.pendingProps)), fh(t, e, n, u, l));
      case 3:
        t: {
          if ((Wt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          ((u = i.element), xc(t, e), pa(e, n, null, l));
          var f = e.memoizedState;
          if (
            ((n = f.cache),
            vl(e, Nt, n),
            n !== i.cache && Mc(e, [Nt], l, !0),
            ga(),
            (n = f.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: n, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              e = sh(t, e, n, l);
              break t;
            } else if (n !== u) {
              ((u = _e(Error(r(424)), e)), oa(u), (e = sh(t, e, n, l)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Ot = Me(t.firstChild),
                  Lt = e,
                  rt = !0,
                  dl = null,
                  ze = !0,
                  l = no(e, null, n, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Vl(), n === u)) {
              e = $e(t, e, l);
              break t;
            }
            Vt(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Qu(t, e),
          t === null
            ? (l = Od(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : rt ||
                ((l = e.type),
                (t = e.pendingProps),
                (n = ei(at.current).createElement(l)),
                (n[Xt] = e),
                (n[ee] = t),
                Kt(n, l, t),
                Yt(n),
                (e.stateNode = n))
            : (e.memoizedState = Od(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          kn(e),
          t === null &&
            rt &&
            ((n = e.stateNode = Ed(e.type, e.pendingProps, at.current)),
            (Lt = e),
            (ze = !0),
            (u = Ot),
            Cl(e.type) ? ((Jf = u), (Ot = Me(n.firstChild))) : (Ot = u)),
          Vt(t, e, e.pendingProps.children, l),
          Qu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            rt &&
            ((u = n = Ot) &&
              ((n = $m(n, e.type, e.pendingProps, ze)),
              n !== null
                ? ((e.stateNode = n),
                  (Lt = e),
                  (Ot = Me(n.firstChild)),
                  (ze = !1),
                  (u = !0))
                : (u = !1)),
            u || yl(e)),
          kn(e),
          (u = e.type),
          (i = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (n = i.children),
          Xf(u, i) ? (n = null) : f !== null && Xf(u, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = Gc(t, e, hm, null, null, l)), (Qa._currentValue = u)),
          Qu(t, e),
          Vt(t, e, n, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            rt &&
            ((t = l = Ot) &&
              ((l = Im(l, e.pendingProps, ze)),
              l !== null
                ? ((e.stateNode = l), (Lt = e), (Ot = null), (t = !0))
                : (t = !1)),
            t || yl(e)),
          null
        );
      case 13:
        return rh(t, e, l);
      case 4:
        return (
          Wt(e, e.stateNode.containerInfo),
          (n = e.pendingProps),
          t === null ? (e.child = $l(e, null, n, l)) : Vt(t, e, n, l),
          e.child
        );
      case 11:
        return eh(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Vt(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Vt(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Vt(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (n = e.pendingProps),
          vl(e, e.type, n.value),
          Vt(t, e, n.children, l),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (n = e.pendingProps.children),
          Jl(e),
          (u = Zt(u)),
          (n = n(u)),
          (e.flags |= 1),
          Vt(t, e, n, l),
          e.child
        );
      case 14:
        return lh(t, e, e.type, e.pendingProps, l);
      case 15:
        return nh(t, e, e.type, e.pendingProps, l);
      case 19:
        return hh(t, e, l);
      case 31:
        return bm(t, e, l);
      case 22:
        return ah(t, e, l, e.pendingProps);
      case 24:
        return (
          Jl(e),
          (n = Zt(Nt)),
          t === null
            ? ((u = Rc()),
              u === null &&
                ((u = Tt),
                (i = Cc()),
                (u.pooledCache = i),
                i.refCount++,
                i !== null && (u.pooledCacheLanes |= l),
                (u = i)),
              (e.memoizedState = { parent: n, cache: u }),
              Nc(e),
              vl(e, Nt, u))
            : ((t.lanes & l) !== 0 && (xc(t, e), pa(e, null, null, l), ga()),
              (u = t.memoizedState),
              (i = e.memoizedState),
              u.parent !== n
                ? ((u = { parent: n, cache: n }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  vl(e, Nt, n))
                : ((n = i.cache),
                  vl(e, Nt, n),
                  n !== u.cache && Mc(e, [Nt], l, !0))),
          Vt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Ie(t) {
    t.flags |= 4;
  }
  function vf(t, e, l, n, u) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Gh()) t.flags |= 8192;
        else throw ((Wl = Tu), Uc);
    } else t.flags &= -16777217;
  }
  function yh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Dd(e)))
      if (Gh()) t.flags |= 8192;
      else throw ((Wl = Tu), Uc);
  }
  function Gu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Ks() : 536870912), (t.lanes |= e), (jn |= e)));
  }
  function Oa(t, e) {
    if (!rt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; )
            (l.alternate !== null && (n = l), (l = l.sibling));
          n === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      n = 0;
    if (e)
      for (var u = t.child; u !== null; )
        ((l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags & 65011712),
          (n |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null; )
        ((l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags),
          (n |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= n), (t.childLanes = l), e);
  }
  function _m(t, e, l) {
    var n = e.pendingProps;
    switch ((_c(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (zt(e), null);
      case 1:
        return (zt(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Fe(Nt),
          Dt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (_n(e)
              ? Ie(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Oc())),
          zt(e),
          null
        );
      case 26:
        var u = e.type,
          i = e.memoizedState;
        return (
          t === null
            ? (Ie(e),
              i !== null ? (zt(e), yh(e, i)) : (zt(e), vf(e, u, null, n, l)))
            : i
              ? i !== t.memoizedState
                ? (Ie(e), zt(e), yh(e, i))
                : (zt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== n && Ie(e),
                zt(e),
                vf(e, u, t, n, l)),
          null
        );
      case 27:
        if (
          ($a(e),
          (l = at.current),
          (u = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== n && Ie(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(r(166));
            return (zt(e), null);
          }
          ((t = B.current),
            _n(e) ? Kr(e) : ((t = Ed(u, n, l)), (e.stateNode = t), Ie(e)));
        }
        return (zt(e), null);
      case 5:
        if (($a(e), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== n && Ie(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(r(166));
            return (zt(e), null);
          }
          if (((i = B.current), _n(e))) Kr(e);
          else {
            var f = ei(at.current);
            switch (i) {
              case 1:
                i = f.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                i = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    i = f.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    i = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((i = f.createElement("div")),
                      (i.innerHTML = "<script><\/script>"),
                      (i = i.removeChild(i.firstChild)));
                    break;
                  case "select":
                    ((i =
                      typeof n.is == "string"
                        ? f.createElement("select", { is: n.is })
                        : f.createElement("select")),
                      n.multiple
                        ? (i.multiple = !0)
                        : n.size && (i.size = n.size));
                    break;
                  default:
                    i =
                      typeof n.is == "string"
                        ? f.createElement(u, { is: n.is })
                        : f.createElement(u);
                }
            }
            ((i[Xt] = e), (i[ee] = n));
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) i.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            e.stateNode = i;
            t: switch ((Kt(i, u, n), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && Ie(e);
          }
        }
        return (
          zt(e),
          vf(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== n && Ie(e);
        else {
          if (typeof n != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = at.current), _n(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (n = null),
              (u = Lt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            ((t[Xt] = e),
              (t = !!(
                t.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                rd(t.nodeValue, l)
              )),
              t || yl(e, !0));
          } else
            ((t = ei(t).createTextNode(n)), (t[Xt] = e), (e.stateNode = t));
        }
        return (zt(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((n = _n(e)), l !== null)) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(r(557));
              t[Xt] = e;
            } else
              (Vl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (zt(e), (t = !1));
          } else
            ((l = Oc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (ye(e), e) : (ye(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return (zt(e), null);
      case 13:
        if (
          ((n = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = _n(e)), n !== null && n.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Xt] = e;
            } else
              (Vl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (zt(e), (u = !1));
          } else
            ((u = Oc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return e.flags & 256 ? (ye(e), e) : (ye(e), null);
        }
        return (
          ye(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = n !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((n = e.child),
                (u = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (u = n.alternate.memoizedState.cachePool.pool),
                (i = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (i = n.memoizedState.cachePool.pool),
                i !== u && (n.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Gu(e, e.updateQueue),
              zt(e),
              null)
        );
      case 4:
        return (Dt(), t === null && Bf(e.stateNode.containerInfo), zt(e), null);
      case 10:
        return (Fe(e.type), zt(e), null);
      case 19:
        if ((N(Rt), (n = e.memoizedState), n === null)) return (zt(e), null);
        if (((u = (e.flags & 128) !== 0), (i = n.rendering), i === null))
          if (u) Oa(n, !1);
          else {
            if (Ct !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((i = Mu(t)), i !== null)) {
                  for (
                    e.flags |= 128,
                      Oa(n, !1),
                      t = i.updateQueue,
                      e.updateQueue = t,
                      Gu(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (wr(l, t), (l = l.sibling));
                  return (
                    j(Rt, (Rt.current & 1) | 2),
                    rt && Ke(e, n.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            n.tail !== null &&
              fe() > Vu &&
              ((e.flags |= 128), (u = !0), Oa(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Mu(i)), t !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Gu(e, t),
                Oa(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !rt)
              )
                return (zt(e), null);
            } else
              2 * fe() - n.renderingStartTime > Vu &&
                l !== 536870912 &&
                ((e.flags |= 128), (u = !0), Oa(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = e.child), (e.child = i))
            : ((t = n.last),
              t !== null ? (t.sibling = i) : (e.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = fe()),
            (t.sibling = null),
            (l = Rt.current),
            j(Rt, u ? (l & 1) | 2 : l & 1),
            rt && Ke(e, n.treeForkCount),
            t)
          : (zt(e), null);
      case 22:
      case 23:
        return (
          ye(e),
          Bc(),
          (n = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== n && (e.flags |= 8192)
            : n && (e.flags |= 8192),
          n
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : zt(e),
          (l = e.updateQueue),
          l !== null && Gu(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (n = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          n !== l && (e.flags |= 2048),
          t !== null && N(Fl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Fe(Nt),
          zt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Tm(t, e) {
    switch ((_c(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Fe(Nt),
          Dt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ($a(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((ye(e), e.alternate === null)) throw Error(r(340));
          Vl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (ye(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Vl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (N(Rt), null);
      case 4:
        return (Dt(), null);
      case 10:
        return (Fe(e.type), null);
      case 22:
      case 23:
        return (
          ye(e),
          Bc(),
          t !== null && N(Fl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Fe(Nt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function vh(t, e) {
    switch ((_c(e), e.tag)) {
      case 3:
        (Fe(Nt), Dt());
        break;
      case 26:
      case 27:
      case 5:
        $a(e);
        break;
      case 4:
        Dt();
        break;
      case 31:
        e.memoizedState !== null && ye(e);
        break;
      case 13:
        ye(e);
        break;
      case 19:
        N(Rt);
        break;
      case 10:
        Fe(e.type);
        break;
      case 22:
      case 23:
        (ye(e), Bc(), t !== null && N(Fl));
        break;
      case 24:
        Fe(Nt);
    }
  }
  function za(t, e) {
    try {
      var l = e.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create,
              f = l.inst;
            ((n = i()), (f.destroy = n));
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (o) {
      gt(e, e.return, o);
    }
  }
  function El(t, e, l) {
    try {
      var n = e.updateQueue,
        u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var i = u.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var f = n.inst,
              o = f.destroy;
            if (o !== void 0) {
              ((f.destroy = void 0), (u = e));
              var y = l,
                T = o;
              try {
                T();
              } catch (M) {
                gt(u, y, M);
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (M) {
      gt(e, e.return, M);
    }
  }
  function mh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        uo(e, l);
      } catch (n) {
        gt(t, t.return, n);
      }
    }
  }
  function gh(t, e, l) {
    ((l.props = Pl(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (n) {
      gt(t, e, n);
    }
  }
  function Aa(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(n)) : (l.current = n);
      }
    } catch (u) {
      gt(t, e, u);
    }
  }
  function Ye(t, e) {
    var l = t.ref,
      n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          gt(t, e, u);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          gt(t, e, u);
        }
      else l.current = null;
  }
  function ph(t) {
    var e = t.type,
      l = t.memoizedProps,
      n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (u) {
      gt(t, t.return, u);
    }
  }
  function mf(t, e, l) {
    try {
      var n = t.stateNode;
      (Vm(n, t.type, l, e), (n[ee] = e));
    } catch (u) {
      gt(t, t.return, u);
    }
  }
  function Sh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Cl(t.type)) ||
      t.tag === 4
    );
  }
  function gf(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Sh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Cl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function pf(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Le)));
    else if (
      n !== 4 &&
      (n === 27 && Cl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (pf(t, e, l), t = t.sibling; t !== null; )
        (pf(t, e, l), (t = t.sibling));
  }
  function wu(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      n !== 4 &&
      (n === 27 && Cl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (wu(t, e, l), t = t.sibling; t !== null; )
        (wu(t, e, l), (t = t.sibling));
  }
  function bh(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var n = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      (Kt(e, n, l), (e[Xt] = t), (e[ee] = l));
    } catch (i) {
      gt(t, t.return, i);
    }
  }
  var Pe = !1,
    jt = !1,
    Sf = !1,
    Eh = typeof WeakSet == "function" ? WeakSet : Set,
    Gt = null;
  function Om(t, e) {
    if (((t = t.containerInfo), (Gf = fi), (t = Nr(t)), oc(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset,
              i = n.focusNode;
            n = n.focusOffset;
            try {
              (l.nodeType, i.nodeType);
            } catch {
              l = null;
              break t;
            }
            var f = 0,
              o = -1,
              y = -1,
              T = 0,
              M = 0,
              U = t,
              O = null;
            e: for (;;) {
              for (
                var A;
                U !== l || (u !== 0 && U.nodeType !== 3) || (o = f + u),
                  U !== i || (n !== 0 && U.nodeType !== 3) || (y = f + n),
                  U.nodeType === 3 && (f += U.nodeValue.length),
                  (A = U.firstChild) !== null;
              )
                ((O = U), (U = A));
              for (;;) {
                if (U === t) break e;
                if (
                  (O === l && ++T === u && (o = f),
                  O === i && ++M === n && (y = f),
                  (A = U.nextSibling) !== null)
                )
                  break;
                ((U = O), (O = U.parentNode));
              }
              U = A;
            }
            l = o === -1 || y === -1 ? null : { start: o, end: y };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      wf = { focusedElem: t, selectionRange: l }, fi = !1, Gt = e;
      Gt !== null;
    )
      if (
        ((e = Gt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Gt = t));
      else
        for (; Gt !== null; ) {
          switch (((e = Gt), (i = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  ((u = t[l]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                ((t = void 0),
                  (l = e),
                  (u = i.memoizedProps),
                  (i = i.memoizedState),
                  (n = l.stateNode));
                try {
                  var q = Pl(l.type, u);
                  ((t = n.getSnapshotBeforeUpdate(q, i)),
                    (n.__reactInternalSnapshotBeforeUpdate = t));
                } catch (V) {
                  gt(l, l.return, V);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  Zf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Zf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Gt = t));
            break;
          }
          Gt = e.return;
        }
  }
  function _h(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (el(t, l), n & 4 && za(5, l));
        break;
      case 1:
        if ((el(t, l), n & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              gt(l, l.return, f);
            }
          else {
            var u = Pl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              gt(l, l.return, f);
            }
          }
        (n & 64 && mh(l), n & 512 && Aa(l, l.return));
        break;
      case 3:
        if ((el(t, l), n & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            uo(t, e);
          } catch (f) {
            gt(l, l.return, f);
          }
        }
        break;
      case 27:
        e === null && n & 4 && bh(l);
      case 26:
      case 5:
        (el(t, l), e === null && n & 4 && ph(l), n & 512 && Aa(l, l.return));
        break;
      case 12:
        el(t, l);
        break;
      case 31:
        (el(t, l), n & 4 && zh(t, l));
        break;
      case 13:
        (el(t, l),
          n & 4 && Ah(t, l),
          n & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = xm.bind(null, l)), Pm(t, l)))));
        break;
      case 22:
        if (((n = l.memoizedState !== null || Pe), !n)) {
          ((e = (e !== null && e.memoizedState !== null) || jt), (u = Pe));
          var i = jt;
          ((Pe = n),
            (jt = e) && !i ? ll(t, l, (l.subtreeFlags & 8772) !== 0) : el(t, l),
            (Pe = u),
            (jt = i));
        }
        break;
      case 30:
        break;
      default:
        el(t, l);
    }
  }
  function Th(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Th(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Fi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var At = null,
    ne = !1;
  function tl(t, e, l) {
    for (l = l.child; l !== null; ) (Oh(t, e, l), (l = l.sibling));
  }
  function Oh(t, e, l) {
    if (se && typeof se.onCommitFiberUnmount == "function")
      try {
        se.onCommitFiberUnmount(Wn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (jt || Ye(l, e),
          tl(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        jt || Ye(l, e);
        var n = At,
          u = ne;
        (Cl(l.type) && ((At = l.stateNode), (ne = !1)),
          tl(t, e, l),
          ja(l.stateNode),
          (At = n),
          (ne = u));
        break;
      case 5:
        jt || Ye(l, e);
      case 6:
        if (
          ((n = At),
          (u = ne),
          (At = null),
          tl(t, e, l),
          (At = n),
          (ne = u),
          At !== null)
        )
          if (ne)
            try {
              (At.nodeType === 9
                ? At.body
                : At.nodeName === "HTML"
                  ? At.ownerDocument.body
                  : At
              ).removeChild(l.stateNode);
            } catch (i) {
              gt(l, e, i);
            }
          else
            try {
              At.removeChild(l.stateNode);
            } catch (i) {
              gt(l, e, i);
            }
        break;
      case 18:
        At !== null &&
          (ne
            ? ((t = At),
              md(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              Ln(t))
            : md(At, l.stateNode));
        break;
      case 4:
        ((n = At),
          (u = ne),
          (At = l.stateNode.containerInfo),
          (ne = !0),
          tl(t, e, l),
          (At = n),
          (ne = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (El(2, l, e), jt || El(4, l, e), tl(t, e, l));
        break;
      case 1:
        (jt ||
          (Ye(l, e),
          (n = l.stateNode),
          typeof n.componentWillUnmount == "function" && gh(l, e, n)),
          tl(t, e, l));
        break;
      case 21:
        tl(t, e, l);
        break;
      case 22:
        ((jt = (n = jt) || l.memoizedState !== null), tl(t, e, l), (jt = n));
        break;
      default:
        tl(t, e, l);
    }
  }
  function zh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ln(t);
      } catch (l) {
        gt(e, e.return, l);
      }
    }
  }
  function Ah(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ln(t);
      } catch (l) {
        gt(e, e.return, l);
      }
  }
  function zm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Eh()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Eh()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Xu(t, e) {
    var l = zm(t);
    e.forEach(function (n) {
      if (!l.has(n)) {
        l.add(n);
        var u = Hm.bind(null, t, n);
        n.then(u, u);
      }
    });
  }
  function ae(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n],
          i = t,
          f = e,
          o = f;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Cl(o.type)) {
                ((At = o.stateNode), (ne = !1));
                break t;
              }
              break;
            case 5:
              ((At = o.stateNode), (ne = !1));
              break t;
            case 3:
            case 4:
              ((At = o.stateNode.containerInfo), (ne = !0));
              break t;
          }
          o = o.return;
        }
        if (At === null) throw Error(r(160));
        (Oh(i, f, u),
          (At = null),
          (ne = !1),
          (i = u.alternate),
          i !== null && (i.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Mh(e, t), (e = e.sibling));
  }
  var Ne = null;
  function Mh(t, e) {
    var l = t.alternate,
      n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ae(e, t),
          ue(t),
          n & 4 && (El(3, t, t.return), za(3, t), El(5, t, t.return)));
        break;
      case 1:
        (ae(e, t),
          ue(t),
          n & 512 && (jt || l === null || Ye(l, l.return)),
          n & 64 &&
            Pe &&
            ((t = t.updateQueue),
            t !== null &&
              ((n = t.callbacks),
              n !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? n : l.concat(n))))));
        break;
      case 26:
        var u = Ne;
        if (
          (ae(e, t),
          ue(t),
          n & 512 && (jt || l === null || Ye(l, l.return)),
          n & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((n = t.memoizedState), l === null))
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  ((n = t.type),
                    (l = t.memoizedProps),
                    (u = u.ownerDocument || u));
                  e: switch (n) {
                    case "title":
                      ((i = u.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Pn] ||
                          i[Xt] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = u.createElement(n)),
                          u.head.insertBefore(
                            i,
                            u.querySelector("head > title"),
                          )),
                        Kt(i, n, l),
                        (i[Xt] = t),
                        Yt(i),
                        (n = i));
                      break t;
                    case "link":
                      var f = Md("link", "href", u).get(n + (l.href || ""));
                      if (f) {
                        for (var o = 0; o < f.length; o++)
                          if (
                            ((i = f[o]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            f.splice(o, 1);
                            break e;
                          }
                      }
                      ((i = u.createElement(n)),
                        Kt(i, n, l),
                        u.head.appendChild(i));
                      break;
                    case "meta":
                      if (
                        (f = Md("meta", "content", u).get(
                          n + (l.content || ""),
                        ))
                      ) {
                        for (o = 0; o < f.length; o++)
                          if (
                            ((i = f[o]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            f.splice(o, 1);
                            break e;
                          }
                      }
                      ((i = u.createElement(n)),
                        Kt(i, n, l),
                        u.head.appendChild(i));
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  ((i[Xt] = t), Yt(i), (n = i));
                }
                t.stateNode = n;
              } else Cd(u, t.type, t.stateNode);
            else t.stateNode = Ad(u, n, t.memoizedProps);
          else
            i !== n
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                n === null
                  ? Cd(u, t.type, t.stateNode)
                  : Ad(u, n, t.memoizedProps))
              : n === null &&
                t.stateNode !== null &&
                mf(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ae(e, t),
          ue(t),
          n & 512 && (jt || l === null || Ye(l, l.return)),
          l !== null && n & 4 && mf(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (ae(e, t),
          ue(t),
          n & 512 && (jt || l === null || Ye(l, l.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            hn(u, "");
          } catch (q) {
            gt(t, t.return, q);
          }
        }
        (n & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), mf(t, u, l !== null ? l.memoizedProps : u)),
          n & 1024 && (Sf = !0));
        break;
      case 6:
        if ((ae(e, t), ue(t), n & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((n = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = n;
          } catch (q) {
            gt(t, t.return, q);
          }
        }
        break;
      case 3:
        if (
          ((ai = null),
          (u = Ne),
          (Ne = li(e.containerInfo)),
          ae(e, t),
          (Ne = u),
          ue(t),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ln(e.containerInfo);
          } catch (q) {
            gt(t, t.return, q);
          }
        Sf && ((Sf = !1), Ch(t));
        break;
      case 4:
        ((n = Ne),
          (Ne = li(t.stateNode.containerInfo)),
          ae(e, t),
          ue(t),
          (Ne = n));
        break;
      case 12:
        (ae(e, t), ue(t));
        break;
      case 31:
        (ae(e, t),
          ue(t),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), Xu(t, n))));
        break;
      case 13:
        (ae(e, t),
          ue(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Zu = fe()),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), Xu(t, n))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var y = l !== null && l.memoizedState !== null,
          T = Pe,
          M = jt;
        if (
          ((Pe = T || u),
          (jt = M || y),
          ae(e, t),
          (jt = M),
          (Pe = T),
          ue(t),
          n & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (l === null || y || Pe || jt || tn(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                y = l = e;
                try {
                  if (((i = y.stateNode), u))
                    ((f = i.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
                  else {
                    o = y.stateNode;
                    var U = y.memoizedProps.style,
                      O =
                        U != null && U.hasOwnProperty("display")
                          ? U.display
                          : null;
                    o.style.display =
                      O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (q) {
                  gt(y, y.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                y = e;
                try {
                  y.stateNode.nodeValue = u ? "" : y.memoizedProps;
                } catch (q) {
                  gt(y, y.return, q);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                y = e;
                try {
                  var A = y.stateNode;
                  u ? gd(A, !0) : gd(y.stateNode, !1);
                } catch (q) {
                  gt(y, y.return, q);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        n & 4 &&
          ((n = t.updateQueue),
          n !== null &&
            ((l = n.retryQueue),
            l !== null && ((n.retryQueue = null), Xu(t, l))));
        break;
      case 19:
        (ae(e, t),
          ue(t),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), Xu(t, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ae(e, t), ue(t));
    }
  }
  function ue(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (Sh(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              i = gf(t);
            wu(t, i, u);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (hn(f, ""), (l.flags &= -33));
            var o = gf(t);
            wu(t, o, f);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              T = gf(t);
            pf(t, T, y);
            break;
          default:
            throw Error(r(161));
        }
      } catch (M) {
        gt(t, t.return, M);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Ch(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Ch(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function el(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (_h(t, e.alternate, e), (e = e.sibling));
  }
  function tn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (El(4, e, e.return), tn(e));
          break;
        case 1:
          Ye(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == "function" && gh(e, e.return, l),
            tn(e));
          break;
        case 27:
          ja(e.stateNode);
        case 26:
        case 5:
          (Ye(e, e.return), tn(e));
          break;
        case 22:
          e.memoizedState === null && tn(e);
          break;
        case 30:
          tn(e);
          break;
        default:
          tn(e);
      }
      t = t.sibling;
    }
  }
  function ll(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate,
        u = t,
        i = e,
        f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ll(u, i, l), za(4, i));
          break;
        case 1:
          if (
            (ll(u, i, l),
            (n = i),
            (u = n.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (T) {
              gt(n, n.return, T);
            }
          if (((n = i), (u = n.updateQueue), u !== null)) {
            var o = n.stateNode;
            try {
              var y = u.shared.hiddenCallbacks;
              if (y !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < y.length; u++)
                  ao(y[u], o);
            } catch (T) {
              gt(n, n.return, T);
            }
          }
          (l && f & 64 && mh(i), Aa(i, i.return));
          break;
        case 27:
          bh(i);
        case 26:
        case 5:
          (ll(u, i, l), l && n === null && f & 4 && ph(i), Aa(i, i.return));
          break;
        case 12:
          ll(u, i, l);
          break;
        case 31:
          (ll(u, i, l), l && f & 4 && zh(u, i));
          break;
        case 13:
          (ll(u, i, l), l && f & 4 && Ah(u, i));
          break;
        case 22:
          (i.memoizedState === null && ll(u, i, l), Aa(i, i.return));
          break;
        case 30:
          break;
        default:
          ll(u, i, l);
      }
      e = e.sibling;
    }
  }
  function bf(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && ha(l)));
  }
  function Ef(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ha(t)));
  }
  function xe(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Dh(t, e, l, n), (e = e.sibling));
  }
  function Dh(t, e, l, n) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (xe(t, e, l, n), u & 2048 && za(9, e));
        break;
      case 1:
        xe(t, e, l, n);
        break;
      case 3:
        (xe(t, e, l, n),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ha(t))));
        break;
      case 12:
        if (u & 2048) {
          (xe(t, e, l, n), (t = e.stateNode));
          try {
            var i = e.memoizedProps,
              f = i.id,
              o = i.onPostCommit;
            typeof o == "function" &&
              o(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (y) {
            gt(e, e.return, y);
          }
        } else xe(t, e, l, n);
        break;
      case 31:
        xe(t, e, l, n);
        break;
      case 13:
        xe(t, e, l, n);
        break;
      case 23:
        break;
      case 22:
        ((i = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? i._visibility & 2
              ? xe(t, e, l, n)
              : Ma(t, e)
            : i._visibility & 2
              ? xe(t, e, l, n)
              : ((i._visibility |= 2),
                Nn(t, e, l, n, (e.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && bf(f, e));
        break;
      case 24:
        (xe(t, e, l, n), u & 2048 && Ef(e.alternate, e));
        break;
      default:
        xe(t, e, l, n);
    }
  }
  function Nn(t, e, l, n, u) {
    for (
      u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var i = t,
        f = e,
        o = l,
        y = n,
        T = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Nn(i, f, o, y, u), za(8, f));
          break;
        case 23:
          break;
        case 22:
          var M = f.stateNode;
          (f.memoizedState !== null
            ? M._visibility & 2
              ? Nn(i, f, o, y, u)
              : Ma(i, f)
            : ((M._visibility |= 2), Nn(i, f, o, y, u)),
            u && T & 2048 && bf(f.alternate, f));
          break;
        case 24:
          (Nn(i, f, o, y, u), u && T & 2048 && Ef(f.alternate, f));
          break;
        default:
          Nn(i, f, o, y, u);
      }
      e = e.sibling;
    }
  }
  function Ma(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          n = e,
          u = n.flags;
        switch (n.tag) {
          case 22:
            (Ma(l, n), u & 2048 && bf(n.alternate, n));
            break;
          case 24:
            (Ma(l, n), u & 2048 && Ef(n.alternate, n));
            break;
          default:
            Ma(l, n);
        }
        e = e.sibling;
      }
  }
  var Ca = 8192;
  function xn(t, e, l) {
    if (t.subtreeFlags & Ca)
      for (t = t.child; t !== null; ) (Rh(t, e, l), (t = t.sibling));
  }
  function Rh(t, e, l) {
    switch (t.tag) {
      case 26:
        (xn(t, e, l),
          t.flags & Ca &&
            t.memoizedState !== null &&
            o0(l, Ne, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        xn(t, e, l);
        break;
      case 3:
      case 4:
        var n = Ne;
        ((Ne = li(t.stateNode.containerInfo)), xn(t, e, l), (Ne = n));
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Ca), (Ca = 16777216), xn(t, e, l), (Ca = n))
            : xn(t, e, l));
        break;
      default:
        xn(t, e, l);
    }
  }
  function Uh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Da(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ((Gt = n), xh(n, t));
        }
      Uh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Nh(t), (t = t.sibling));
  }
  function Nh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Da(t), t.flags & 2048 && El(9, t, t.return));
        break;
      case 3:
        Da(t);
        break;
      case 12:
        Da(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Lu(t))
          : Da(t);
        break;
      default:
        Da(t);
    }
  }
  function Lu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ((Gt = n), xh(n, t));
        }
      Uh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (El(8, e, e.return), Lu(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Lu(e)));
          break;
        default:
          Lu(e);
      }
      t = t.sibling;
    }
  }
  function xh(t, e) {
    for (; Gt !== null; ) {
      var l = Gt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          El(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ha(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) ((n.return = l), (Gt = n));
      else
        t: for (l = t; Gt !== null; ) {
          n = Gt;
          var u = n.sibling,
            i = n.return;
          if ((Th(n), n === l)) {
            Gt = null;
            break t;
          }
          if (u !== null) {
            ((u.return = i), (Gt = u));
            break t;
          }
          Gt = i;
        }
    }
  }
  var Am = {
      getCacheForType: function (t) {
        var e = Zt(Nt),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Zt(Nt).controller.signal;
      },
    },
    Mm = typeof WeakMap == "function" ? WeakMap : Map,
    yt = 0,
    Tt = null,
    ut = null,
    ft = 0,
    mt = 0,
    ve = null,
    _l = !1,
    Hn = !1,
    _f = !1,
    nl = 0,
    Ct = 0,
    Tl = 0,
    en = 0,
    Tf = 0,
    me = 0,
    jn = 0,
    Ra = null,
    ie = null,
    Of = !1,
    Zu = 0,
    Hh = 0,
    Vu = 1 / 0,
    Ku = null,
    Ol = null,
    qt = 0,
    zl = null,
    qn = null,
    al = 0,
    zf = 0,
    Af = null,
    jh = null,
    Ua = 0,
    Mf = null;
  function ge() {
    return (yt & 2) !== 0 && ft !== 0 ? ft & -ft : C.T !== null ? xf() : Ws();
  }
  function qh() {
    if (me === 0)
      if ((ft & 536870912) === 0 || rt) {
        var t = tu;
        ((tu <<= 1), (tu & 3932160) === 0 && (tu = 262144), (me = t));
      } else me = 536870912;
    return ((t = de.current), t !== null && (t.flags |= 32), me);
  }
  function ce(t, e, l) {
    (((t === Tt && (mt === 2 || mt === 9)) || t.cancelPendingCommit !== null) &&
      (Bn(t, 0), Al(t, ft, me, !1)),
      In(t, l),
      ((yt & 2) === 0 || t !== Tt) &&
        (t === Tt &&
          ((yt & 2) === 0 && (en |= l), Ct === 4 && Al(t, ft, me, !1)),
        Ge(t)));
  }
  function Bh(t, e, l) {
    if ((yt & 6) !== 0) throw Error(r(327));
    var n = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || $n(t, e),
      u = n ? Rm(t, e) : Df(t, e, !0),
      i = n;
    do {
      if (u === 0) {
        Hn && !n && Al(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), i && !Cm(l))) {
          ((u = Df(t, e, !1)), (i = !1));
          continue;
        }
        if (u === 2) {
          if (((i = e), t.errorRecoveryDisabledLanes & i)) var f = 0;
          else
            ((f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            e = f;
            t: {
              var o = t;
              u = Ra;
              var y = o.current.memoizedState.isDehydrated;
              if ((y && (Bn(o, f).flags |= 256), (f = Df(o, f, !1)), f !== 2)) {
                if (_f && !y) {
                  ((o.errorRecoveryDisabledLanes |= i), (en |= i), (u = 4));
                  break t;
                }
                ((i = ie),
                  (ie = u),
                  i !== null &&
                    (ie === null ? (ie = i) : ie.push.apply(ie, i)));
              }
              u = f;
            }
            if (((i = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Bn(t, 0), Al(t, e, 0, !0));
          break;
        }
        t: {
          switch (((n = t), (i = u), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Al(n, e, me, !_l);
              break t;
            case 2:
              ie = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((u = Zu + 300 - fe()), 10 < u)) {
            if ((Al(n, e, me, !_l), lu(n, 0, !0) !== 0)) break t;
            ((al = e),
              (n.timeoutHandle = yd(
                Qh.bind(
                  null,
                  n,
                  l,
                  ie,
                  Ku,
                  Of,
                  e,
                  me,
                  en,
                  jn,
                  _l,
                  i,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break t;
          }
          Qh(n, l, ie, Ku, Of, e, me, en, jn, _l, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ge(t);
  }
  function Qh(t, e, l, n, u, i, f, o, y, T, M, U, O, A) {
    if (
      ((t.timeoutHandle = -1),
      (U = e.subtreeFlags),
      U & 8192 || (U & 16785408) === 16785408)
    ) {
      ((U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Le,
      }),
        Rh(e, i, U));
      var q =
        (i & 62914560) === i ? Zu - fe() : (i & 4194048) === i ? Hh - fe() : 0;
      if (((q = h0(U, q)), q !== null)) {
        ((al = i),
          (t.cancelPendingCommit = q(
            Kh.bind(null, t, e, i, l, n, u, f, o, y, M, U, null, O, A),
          )),
          Al(t, i, f, !T));
        return;
      }
    }
    Kh(t, e, i, l, n, u, f, o, y);
  }
  function Cm(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var u = l[n],
            i = u.getSnapshot;
          u = u.value;
          try {
            if (!oe(i(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Al(t, e, l, n) {
    ((e &= ~Tf),
      (e &= ~en),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      n && (t.warmLanes |= e),
      (n = t.expirationTimes));
    for (var u = e; 0 < u; ) {
      var i = 31 - re(u),
        f = 1 << i;
      ((n[i] = -1), (u &= ~f));
    }
    l !== 0 && Js(t, l, e);
  }
  function Ju() {
    return (yt & 6) === 0 ? (Na(0), !1) : !0;
  }
  function Cf() {
    if (ut !== null) {
      if (mt === 0) var t = ut.return;
      else ((t = ut), (Je = Kl = null), Lc(t), (Mn = null), (ya = 0), (t = ut));
      for (; t !== null; ) (vh(t.alternate, t), (t = t.return));
      ut = null;
    }
  }
  function Bn(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), Fm(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (al = 0),
      Cf(),
      (Tt = t),
      (ut = l = Ve(t.current, null)),
      (ft = e),
      (mt = 0),
      (ve = null),
      (_l = !1),
      (Hn = $n(t, e)),
      (_f = !1),
      (jn = me = Tf = en = Tl = Ct = 0),
      (ie = Ra = null),
      (Of = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var u = 31 - re(n),
          i = 1 << u;
        ((e |= t[u]), (n &= ~i));
      }
    return ((nl = e), yu(), l);
  }
  function Yh(t, e) {
    ((et = null),
      (C.H = _a),
      e === An || e === _u
        ? ((e = to()), (mt = 3))
        : e === Uc
          ? ((e = to()), (mt = 4))
          : (mt =
              e === uf
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ve = e),
      ut === null && ((Ct = 1), qu(t, _e(e, t.current))));
  }
  function Gh() {
    var t = de.current;
    return t === null
      ? !0
      : (ft & 4194048) === ft
        ? Ae === null
        : (ft & 62914560) === ft || (ft & 536870912) !== 0
          ? t === Ae
          : !1;
  }
  function wh() {
    var t = C.H;
    return ((C.H = _a), t === null ? _a : t);
  }
  function Xh() {
    var t = C.A;
    return ((C.A = Am), t);
  }
  function Fu() {
    ((Ct = 4),
      _l || ((ft & 4194048) !== ft && de.current !== null) || (Hn = !0),
      ((Tl & 134217727) === 0 && (en & 134217727) === 0) ||
        Tt === null ||
        Al(Tt, ft, me, !1));
  }
  function Df(t, e, l) {
    var n = yt;
    yt |= 2;
    var u = wh(),
      i = Xh();
    ((Tt !== t || ft !== e) && ((Ku = null), Bn(t, e)), (e = !1));
    var f = Ct;
    t: do
      try {
        if (mt !== 0 && ut !== null) {
          var o = ut,
            y = ve;
          switch (mt) {
            case 8:
              (Cf(), (f = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              de.current === null && (e = !0);
              var T = mt;
              if (((mt = 0), (ve = null), Qn(t, o, y, T), l && Hn)) {
                f = 0;
                break t;
              }
              break;
            default:
              ((T = mt), (mt = 0), (ve = null), Qn(t, o, y, T));
          }
        }
        (Dm(), (f = Ct));
        break;
      } catch (M) {
        Yh(t, M);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Je = Kl = null),
      (yt = n),
      (C.H = u),
      (C.A = i),
      ut === null && ((Tt = null), (ft = 0), yu()),
      f
    );
  }
  function Dm() {
    for (; ut !== null; ) Lh(ut);
  }
  function Rm(t, e) {
    var l = yt;
    yt |= 2;
    var n = wh(),
      u = Xh();
    Tt !== t || ft !== e
      ? ((Ku = null), (Vu = fe() + 500), Bn(t, e))
      : (Hn = $n(t, e));
    t: do
      try {
        if (mt !== 0 && ut !== null) {
          e = ut;
          var i = ve;
          e: switch (mt) {
            case 1:
              ((mt = 0), (ve = null), Qn(t, e, i, 1));
              break;
            case 2:
            case 9:
              if (Ir(i)) {
                ((mt = 0), (ve = null), Zh(e));
                break;
              }
              ((e = function () {
                ((mt !== 2 && mt !== 9) || Tt !== t || (mt = 7), Ge(t));
              }),
                i.then(e, e));
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              Ir(i)
                ? ((mt = 0), (ve = null), Zh(e))
                : ((mt = 0), (ve = null), Qn(t, e, i, 7));
              break;
            case 5:
              var f = null;
              switch (ut.tag) {
                case 26:
                  f = ut.memoizedState;
                case 5:
                case 27:
                  var o = ut;
                  if (f ? Dd(f) : o.stateNode.complete) {
                    ((mt = 0), (ve = null));
                    var y = o.sibling;
                    if (y !== null) ut = y;
                    else {
                      var T = o.return;
                      T !== null ? ((ut = T), ku(T)) : (ut = null);
                    }
                    break e;
                  }
              }
              ((mt = 0), (ve = null), Qn(t, e, i, 5));
              break;
            case 6:
              ((mt = 0), (ve = null), Qn(t, e, i, 6));
              break;
            case 8:
              (Cf(), (Ct = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        Um();
        break;
      } catch (M) {
        Yh(t, M);
      }
    while (!0);
    return (
      (Je = Kl = null),
      (C.H = n),
      (C.A = u),
      (yt = l),
      ut !== null ? 0 : ((Tt = null), (ft = 0), yu(), Ct)
    );
  }
  function Um() {
    for (; ut !== null && !tv(); ) Lh(ut);
  }
  function Lh(t) {
    var e = dh(t.alternate, t, nl);
    ((t.memoizedProps = t.pendingProps), e === null ? ku(t) : (ut = e));
  }
  function Zh(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ch(l, e, e.pendingProps, e.type, void 0, ft);
        break;
      case 11:
        e = ch(l, e, e.pendingProps, e.type.render, e.ref, ft);
        break;
      case 5:
        Lc(e);
      default:
        (vh(l, e), (e = ut = wr(e, nl)), (e = dh(l, e, nl)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? ku(t) : (ut = e));
  }
  function Qn(t, e, l, n) {
    ((Je = Kl = null), Lc(e), (Mn = null), (ya = 0));
    var u = e.return;
    try {
      if (Sm(t, u, e, l, ft)) {
        ((Ct = 1), qu(t, _e(l, t.current)), (ut = null));
        return;
      }
    } catch (i) {
      if (u !== null) throw ((ut = u), i);
      ((Ct = 1), qu(t, _e(l, t.current)), (ut = null));
      return;
    }
    e.flags & 32768
      ? (rt || n === 1
          ? (t = !0)
          : Hn || (ft & 536870912) !== 0
            ? (t = !1)
            : ((_l = t = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = de.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        Vh(e, t))
      : ku(e);
  }
  function ku(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Vh(e, _l);
        return;
      }
      t = e.return;
      var l = _m(e.alternate, e, nl);
      if (l !== null) {
        ut = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ut = e;
        return;
      }
      ut = e = t;
    } while (e !== null);
    Ct === 0 && (Ct = 5);
  }
  function Vh(t, e) {
    do {
      var l = Tm(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (ut = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ut = t;
        return;
      }
      ut = t = l;
    } while (t !== null);
    ((Ct = 6), (ut = null));
  }
  function Kh(t, e, l, n, u, i, f, o, y) {
    t.cancelPendingCommit = null;
    do Wu();
    while (qt !== 0);
    if ((yt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((i = e.lanes | e.childLanes),
        (i |= mc),
        rv(t, l, i, f, o, y),
        t === Tt && ((ut = Tt = null), (ft = 0)),
        (qn = e),
        (zl = t),
        (al = l),
        (zf = i),
        (Af = u),
        (jh = n),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            jm(Ia, function () {
              return ($h(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (n = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = C.T), (C.T = null), (u = H.p), (H.p = 2), (f = yt), (yt |= 4));
        try {
          Om(t, e, l);
        } finally {
          ((yt = f), (H.p = u), (C.T = n));
        }
      }
      ((qt = 1), Jh(), Fh(), kh());
    }
  }
  function Jh() {
    if (qt === 1) {
      qt = 0;
      var t = zl,
        e = qn,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = C.T), (C.T = null));
        var n = H.p;
        H.p = 2;
        var u = yt;
        yt |= 4;
        try {
          Mh(e, t);
          var i = wf,
            f = Nr(t.containerInfo),
            o = i.focusedElem,
            y = i.selectionRange;
          if (
            f !== o &&
            o &&
            o.ownerDocument &&
            Ur(o.ownerDocument.documentElement, o)
          ) {
            if (y !== null && oc(o)) {
              var T = y.start,
                M = y.end;
              if ((M === void 0 && (M = T), "selectionStart" in o))
                ((o.selectionStart = T),
                  (o.selectionEnd = Math.min(M, o.value.length)));
              else {
                var U = o.ownerDocument || document,
                  O = (U && U.defaultView) || window;
                if (O.getSelection) {
                  var A = O.getSelection(),
                    q = o.textContent.length,
                    V = Math.min(y.start, q),
                    Et = y.end === void 0 ? V : Math.min(y.end, q);
                  !A.extend && V > Et && ((f = Et), (Et = V), (V = f));
                  var b = Rr(o, V),
                    v = Rr(o, Et);
                  if (
                    b &&
                    v &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== b.node ||
                      A.anchorOffset !== b.offset ||
                      A.focusNode !== v.node ||
                      A.focusOffset !== v.offset)
                  ) {
                    var _ = U.createRange();
                    (_.setStart(b.node, b.offset),
                      A.removeAllRanges(),
                      V > Et
                        ? (A.addRange(_), A.extend(v.node, v.offset))
                        : (_.setEnd(v.node, v.offset), A.addRange(_)));
                  }
                }
              }
            }
            for (U = [], A = o; (A = A.parentNode); )
              A.nodeType === 1 &&
                U.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof o.focus == "function" && o.focus(), o = 0;
              o < U.length;
              o++
            ) {
              var D = U[o];
              ((D.element.scrollLeft = D.left), (D.element.scrollTop = D.top));
            }
          }
          ((fi = !!Gf), (wf = Gf = null));
        } finally {
          ((yt = u), (H.p = n), (C.T = l));
        }
      }
      ((t.current = e), (qt = 2));
    }
  }
  function Fh() {
    if (qt === 2) {
      qt = 0;
      var t = zl,
        e = qn,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = C.T), (C.T = null));
        var n = H.p;
        H.p = 2;
        var u = yt;
        yt |= 4;
        try {
          _h(t, e.alternate, e);
        } finally {
          ((yt = u), (H.p = n), (C.T = l));
        }
      }
      qt = 3;
    }
  }
  function kh() {
    if (qt === 4 || qt === 3) {
      ((qt = 0), ev());
      var t = zl,
        e = qn,
        l = al,
        n = jh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (qt = 5)
        : ((qt = 0), (qn = zl = null), Wh(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (Ol = null),
        Ki(l),
        (e = e.stateNode),
        se && typeof se.onCommitFiberRoot == "function")
      )
        try {
          se.onCommitFiberRoot(Wn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((e = C.T), (u = H.p), (H.p = 2), (C.T = null));
        try {
          for (var i = t.onRecoverableError, f = 0; f < n.length; f++) {
            var o = n[f];
            i(o.value, { componentStack: o.stack });
          }
        } finally {
          ((C.T = e), (H.p = u));
        }
      }
      ((al & 3) !== 0 && Wu(),
        Ge(t),
        (u = t.pendingLanes),
        (l & 261930) !== 0 && (u & 42) !== 0
          ? t === Mf
            ? Ua++
            : ((Ua = 0), (Mf = t))
          : (Ua = 0),
        Na(0));
    }
  }
  function Wh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), ha(e)));
  }
  function Wu() {
    return (Jh(), Fh(), kh(), $h());
  }
  function $h() {
    if (qt !== 5) return !1;
    var t = zl,
      e = zf;
    zf = 0;
    var l = Ki(al),
      n = C.T,
      u = H.p;
    try {
      ((H.p = 32 > l ? 32 : l), (C.T = null), (l = Af), (Af = null));
      var i = zl,
        f = al;
      if (((qt = 0), (qn = zl = null), (al = 0), (yt & 6) !== 0))
        throw Error(r(331));
      var o = yt;
      if (
        ((yt |= 4),
        Nh(i.current),
        Dh(i, i.current, f, l),
        (yt = o),
        Na(0, !1),
        se && typeof se.onPostCommitFiberRoot == "function")
      )
        try {
          se.onPostCommitFiberRoot(Wn, i);
        } catch {}
      return !0;
    } finally {
      ((H.p = u), (C.T = n), Wh(t, e));
    }
  }
  function Ih(t, e, l) {
    ((e = _e(l, e)),
      (e = af(t.stateNode, e, 2)),
      (t = pl(t, e, 2)),
      t !== null && (In(t, 2), Ge(t)));
  }
  function gt(t, e, l) {
    if (t.tag === 3) Ih(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Ih(e, t, l);
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Ol === null || !Ol.has(n)))
          ) {
            ((t = _e(l, t)),
              (l = Po(2)),
              (n = pl(e, l, 2)),
              n !== null && (th(l, n, e, t), In(n, 2), Ge(n)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Rf(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new Mm();
      var u = new Set();
      n.set(e, u);
    } else ((u = n.get(e)), u === void 0 && ((u = new Set()), n.set(e, u)));
    u.has(l) ||
      ((_f = !0), u.add(l), (t = Nm.bind(null, t, e, l)), e.then(t, t));
  }
  function Nm(t, e, l) {
    var n = t.pingCache;
    (n !== null && n.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Tt === t &&
        (ft & l) === l &&
        (Ct === 4 || (Ct === 3 && (ft & 62914560) === ft && 300 > fe() - Zu)
          ? (yt & 2) === 0 && Bn(t, 0)
          : (Tf |= l),
        jn === ft && (jn = 0)),
      Ge(t));
  }
  function Ph(t, e) {
    (e === 0 && (e = Ks()), (t = Ll(t, e)), t !== null && (In(t, e), Ge(t)));
  }
  function xm(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), Ph(t, l));
  }
  function Hm(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (n !== null && n.delete(e), Ph(t, l));
  }
  function jm(t, e) {
    return Xi(t, e);
  }
  var $u = null,
    Yn = null,
    Uf = !1,
    Iu = !1,
    Nf = !1,
    Ml = 0;
  function Ge(t) {
    (t !== Yn &&
      t.next === null &&
      (Yn === null ? ($u = Yn = t) : (Yn = Yn.next = t)),
      (Iu = !0),
      Uf || ((Uf = !0), Bm()));
  }
  function Na(t, e) {
    if (!Nf && Iu) {
      Nf = !0;
      do
        for (var l = !1, n = $u; n !== null; ) {
          if (t !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var i = 0;
            else {
              var f = n.suspendedLanes,
                o = n.pingedLanes;
              ((i = (1 << (31 - re(42 | t) + 1)) - 1),
                (i &= u & ~(f & ~o)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((l = !0), nd(n, i));
          } else
            ((i = ft),
              (i = lu(
                n,
                n === Tt ? i : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              (i & 3) === 0 || $n(n, i) || ((l = !0), nd(n, i)));
          n = n.next;
        }
      while (l);
      Nf = !1;
    }
  }
  function qm() {
    td();
  }
  function td() {
    Iu = Uf = !1;
    var t = 0;
    Ml !== 0 && Jm() && (t = Ml);
    for (var e = fe(), l = null, n = $u; n !== null; ) {
      var u = n.next,
        i = ed(n, e);
      (i === 0
        ? ((n.next = null),
          l === null ? ($u = u) : (l.next = u),
          u === null && (Yn = l))
        : ((l = n), (t !== 0 || (i & 3) !== 0) && (Iu = !0)),
        (n = u));
    }
    ((qt !== 0 && qt !== 5) || Na(t), Ml !== 0 && (Ml = 0));
  }
  function ed(t, e) {
    for (
      var l = t.suspendedLanes,
        n = t.pingedLanes,
        u = t.expirationTimes,
        i = t.pendingLanes & -62914561;
      0 < i;
    ) {
      var f = 31 - re(i),
        o = 1 << f,
        y = u[f];
      (y === -1
        ? ((o & l) === 0 || (o & n) !== 0) && (u[f] = sv(o, e))
        : y <= e && (t.expiredLanes |= o),
        (i &= ~o));
    }
    if (
      ((e = Tt),
      (l = ft),
      (l = lu(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (n = t.callbackNode),
      l === 0 ||
        (t === e && (mt === 2 || mt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && Li(n),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || $n(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((n !== null && Li(n), Ki(l))) {
        case 2:
        case 8:
          l = Zs;
          break;
        case 32:
          l = Ia;
          break;
        case 268435456:
          l = Vs;
          break;
        default:
          l = Ia;
      }
      return (
        (n = ld.bind(null, t)),
        (l = Xi(l, n)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      n !== null && n !== null && Li(n),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ld(t, e) {
    if (qt !== 0 && qt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (Wu() && t.callbackNode !== l) return null;
    var n = ft;
    return (
      (n = lu(
        t,
        t === Tt ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      n === 0
        ? null
        : (Bh(t, n, e),
          ed(t, fe()),
          t.callbackNode != null && t.callbackNode === l
            ? ld.bind(null, t)
            : null)
    );
  }
  function nd(t, e) {
    if (Wu()) return null;
    Bh(t, e, !0);
  }
  function Bm() {
    km(function () {
      (yt & 6) !== 0 ? Xi(Ls, qm) : td();
    });
  }
  function xf() {
    if (Ml === 0) {
      var t = On;
      (t === 0 && ((t = Pa), (Pa <<= 1), (Pa & 261888) === 0 && (Pa = 256)),
        (Ml = t));
    }
    return Ml;
  }
  function ad(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : iu("" + t);
  }
  function ud(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Qm(t, e, l, n, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var i = ad((u[ee] || null).action),
        f = n.submitter;
      f &&
        ((e = (e = f[ee] || null)
          ? ad(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((i = e), (f = null)));
      var o = new ru("action", "action", null, n, u);
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Ml !== 0) {
                  var y = f ? ud(u, f) : new FormData(u);
                  Ic(
                    l,
                    { pending: !0, data: y, method: u.method, action: i },
                    null,
                    y,
                  );
                }
              } else
                typeof i == "function" &&
                  (o.preventDefault(),
                  (y = f ? ud(u, f) : new FormData(u)),
                  Ic(
                    l,
                    { pending: !0, data: y, method: u.method, action: i },
                    i,
                    y,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Hf = 0; Hf < vc.length; Hf++) {
    var jf = vc[Hf],
      Ym = jf.toLowerCase(),
      Gm = jf[0].toUpperCase() + jf.slice(1);
    Ue(Ym, "on" + Gm);
  }
  (Ue(jr, "onAnimationEnd"),
    Ue(qr, "onAnimationIteration"),
    Ue(Br, "onAnimationStart"),
    Ue("dblclick", "onDoubleClick"),
    Ue("focusin", "onFocus"),
    Ue("focusout", "onBlur"),
    Ue(lm, "onTransitionRun"),
    Ue(nm, "onTransitionStart"),
    Ue(am, "onTransitionCancel"),
    Ue(Qr, "onTransitionEnd"),
    rn("onMouseEnter", ["mouseout", "mouseover"]),
    rn("onMouseLeave", ["mouseout", "mouseover"]),
    rn("onPointerEnter", ["pointerout", "pointerover"]),
    rn("onPointerLeave", ["pointerout", "pointerover"]),
    Yl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Yl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Yl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Yl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Yl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Yl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var xa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(xa),
    );
  function id(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l],
        u = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var f = n.length - 1; 0 <= f; f--) {
            var o = n[f],
              y = o.instance,
              T = o.currentTarget;
            if (((o = o.listener), y !== i && u.isPropagationStopped()))
              break t;
            ((i = o), (u.currentTarget = T));
            try {
              i(u);
            } catch (M) {
              du(M);
            }
            ((u.currentTarget = null), (i = y));
          }
        else
          for (f = 0; f < n.length; f++) {
            if (
              ((o = n[f]),
              (y = o.instance),
              (T = o.currentTarget),
              (o = o.listener),
              y !== i && u.isPropagationStopped())
            )
              break t;
            ((i = o), (u.currentTarget = T));
            try {
              i(u);
            } catch (M) {
              du(M);
            }
            ((u.currentTarget = null), (i = y));
          }
      }
    }
  }
  function it(t, e) {
    var l = e[Ji];
    l === void 0 && (l = e[Ji] = new Set());
    var n = t + "__bubble";
    l.has(n) || (cd(e, t, 2, !1), l.add(n));
  }
  function qf(t, e, l) {
    var n = 0;
    (e && (n |= 4), cd(l, t, n, e));
  }
  var Pu = "_reactListening" + Math.random().toString(36).slice(2);
  function Bf(t) {
    if (!t[Pu]) {
      ((t[Pu] = !0),
        Ps.forEach(function (l) {
          l !== "selectionchange" && (wm.has(l) || qf(l, !1, t), qf(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Pu] || ((e[Pu] = !0), qf("selectionchange", !1, e));
    }
  }
  function cd(t, e, l, n) {
    switch (qd(e)) {
      case 2:
        var u = v0;
        break;
      case 8:
        u = m0;
        break;
      default:
        u = If;
    }
    ((l = u.bind(null, e, l, t)),
      (u = void 0),
      !lc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      n
        ? u !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: u })
          : t.addEventListener(e, l, !0)
        : u !== void 0
          ? t.addEventListener(e, l, { passive: u })
          : t.addEventListener(e, l, !1));
  }
  function Qf(t, e, l, n, u) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (;;) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var o = n.stateNode.containerInfo;
          if (o === u) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var y = f.tag;
              if ((y === 3 || y === 4) && f.stateNode.containerInfo === u)
                return;
              f = f.return;
            }
          for (; o !== null; ) {
            if (((f = cn(o)), f === null)) return;
            if (((y = f.tag), y === 5 || y === 6 || y === 26 || y === 27)) {
              n = i = f;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    or(function () {
      var T = i,
        M = tc(l),
        U = [];
      t: {
        var O = Yr.get(t);
        if (O !== void 0) {
          var A = ru,
            q = t;
          switch (t) {
            case "keypress":
              if (fu(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = Hv;
              break;
            case "focusin":
              ((q = "focus"), (A = ic));
              break;
            case "focusout":
              ((q = "blur"), (A = ic));
              break;
            case "beforeblur":
            case "afterblur":
              A = ic;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = yr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = _v;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Bv;
              break;
            case jr:
            case qr:
            case Br:
              A = zv;
              break;
            case Qr:
              A = Yv;
              break;
            case "scroll":
            case "scrollend":
              A = bv;
              break;
            case "wheel":
              A = wv;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = mr;
              break;
            case "toggle":
            case "beforetoggle":
              A = Lv;
          }
          var V = (e & 4) !== 0,
            Et = !V && (t === "scroll" || t === "scrollend"),
            b = V ? (O !== null ? O + "Capture" : null) : O;
          V = [];
          for (var v = T, _; v !== null; ) {
            var D = v;
            if (
              ((_ = D.stateNode),
              (D = D.tag),
              (D !== 5 && D !== 26 && D !== 27) ||
                _ === null ||
                b === null ||
                ((D = ea(v, b)), D != null && V.push(Ha(v, D, _))),
              Et)
            )
              break;
            v = v.return;
          }
          0 < V.length &&
            ((O = new A(O, q, null, l, M)), U.push({ event: O, listeners: V }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((O = t === "mouseover" || t === "pointerover"),
            (A = t === "mouseout" || t === "pointerout"),
            O &&
              l !== Pi &&
              (q = l.relatedTarget || l.fromElement) &&
              (cn(q) || q[un]))
          )
            break t;
          if (
            (A || O) &&
            ((O =
              M.window === M
                ? M
                : (O = M.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            A
              ? ((q = l.relatedTarget || l.toElement),
                (A = T),
                (q = q ? cn(q) : null),
                q !== null &&
                  ((Et = d(q)),
                  (V = q.tag),
                  q !== Et || (V !== 5 && V !== 27 && V !== 6)) &&
                  (q = null))
              : ((A = null), (q = T)),
            A !== q)
          ) {
            if (
              ((V = yr),
              (D = "onMouseLeave"),
              (b = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((V = mr),
                (D = "onPointerLeave"),
                (b = "onPointerEnter"),
                (v = "pointer")),
              (Et = A == null ? O : ta(A)),
              (_ = q == null ? O : ta(q)),
              (O = new V(D, v + "leave", A, l, M)),
              (O.target = Et),
              (O.relatedTarget = _),
              (D = null),
              cn(M) === T &&
                ((V = new V(b, v + "enter", q, l, M)),
                (V.target = _),
                (V.relatedTarget = Et),
                (D = V)),
              (Et = D),
              A && q)
            )
              e: {
                for (V = Xm, b = A, v = q, _ = 0, D = b; D; D = V(D)) _++;
                D = 0;
                for (var L = v; L; L = V(L)) D++;
                for (; 0 < _ - D; ) ((b = V(b)), _--);
                for (; 0 < D - _; ) ((v = V(v)), D--);
                for (; _--; ) {
                  if (b === v || (v !== null && b === v.alternate)) {
                    V = b;
                    break e;
                  }
                  ((b = V(b)), (v = V(v)));
                }
                V = null;
              }
            else V = null;
            (A !== null && fd(U, O, A, V, !1),
              q !== null && Et !== null && fd(U, Et, q, V, !0));
          }
        }
        t: {
          if (
            ((O = T ? ta(T) : window),
            (A = O.nodeName && O.nodeName.toLowerCase()),
            A === "select" || (A === "input" && O.type === "file"))
          )
            var ht = Or;
          else if (_r(O))
            if (zr) ht = Pv;
            else {
              ht = $v;
              var Q = Wv;
            }
          else
            ((A = O.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (O.type !== "checkbox" && O.type !== "radio")
                ? T && Ii(T.elementType) && (ht = Or)
                : (ht = Iv));
          if (ht && (ht = ht(t, T))) {
            Tr(U, ht, l, M);
            break t;
          }
          (Q && Q(t, O, T),
            t === "focusout" &&
              T &&
              O.type === "number" &&
              T.memoizedProps.value != null &&
              $i(O, "number", O.value));
        }
        switch (((Q = T ? ta(T) : window), t)) {
          case "focusin":
            (_r(Q) || Q.contentEditable === "true") &&
              ((mn = Q), (hc = T), (sa = null));
            break;
          case "focusout":
            sa = hc = mn = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((dc = !1), xr(U, l, M));
            break;
          case "selectionchange":
            if (em) break;
          case "keydown":
          case "keyup":
            xr(U, l, M);
        }
        var nt;
        if (fc)
          t: {
            switch (t) {
              case "compositionstart":
                var st = "onCompositionStart";
                break t;
              case "compositionend":
                st = "onCompositionEnd";
                break t;
              case "compositionupdate":
                st = "onCompositionUpdate";
                break t;
            }
            st = void 0;
          }
        else
          vn
            ? br(t, l) && (st = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (st = "onCompositionStart");
        (st &&
          (gr &&
            l.locale !== "ko" &&
            (vn || st !== "onCompositionStart"
              ? st === "onCompositionEnd" && vn && (nt = hr())
              : ((ol = M),
                (nc = "value" in ol ? ol.value : ol.textContent),
                (vn = !0))),
          (Q = ti(T, st)),
          0 < Q.length &&
            ((st = new vr(st, t, null, l, M)),
            U.push({ event: st, listeners: Q }),
            nt
              ? (st.data = nt)
              : ((nt = Er(l)), nt !== null && (st.data = nt)))),
          (nt = Vv ? Kv(t, l) : Jv(t, l)) &&
            ((st = ti(T, "onBeforeInput")),
            0 < st.length &&
              ((Q = new vr("onBeforeInput", "beforeinput", null, l, M)),
              U.push({ event: Q, listeners: st }),
              (Q.data = nt))),
          Qm(U, t, T, l, M));
      }
      id(U, e);
    });
  }
  function Ha(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function ti(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var u = t,
        i = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          i === null ||
          ((u = ea(t, l)),
          u != null && n.unshift(Ha(t, u, i)),
          (u = ea(t, e)),
          u != null && n.push(Ha(t, u, i))),
        t.tag === 3)
      )
        return n;
      t = t.return;
    }
    return [];
  }
  function Xm(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function fd(t, e, l, n, u) {
    for (var i = e._reactName, f = []; l !== null && l !== n; ) {
      var o = l,
        y = o.alternate,
        T = o.stateNode;
      if (((o = o.tag), y !== null && y === n)) break;
      ((o !== 5 && o !== 26 && o !== 27) ||
        T === null ||
        ((y = T),
        u
          ? ((T = ea(l, i)), T != null && f.unshift(Ha(l, T, y)))
          : u || ((T = ea(l, i)), T != null && f.push(Ha(l, T, y)))),
        (l = l.return));
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Lm = /\r\n?/g,
    Zm = /\u0000|\uFFFD/g;
  function sd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Lm,
        `
`,
      )
      .replace(Zm, "");
  }
  function rd(t, e) {
    return ((e = sd(e)), sd(t) === e);
  }
  function bt(t, e, l, n, u, i) {
    switch (l) {
      case "children":
        typeof n == "string"
          ? e === "body" || (e === "textarea" && n === "") || hn(t, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            e !== "body" &&
            hn(t, "" + n);
        break;
      case "className":
        au(t, "class", n);
        break;
      case "tabIndex":
        au(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        au(t, l, n);
        break;
      case "style":
        sr(t, n, i);
        break;
      case "data":
        if (e !== "object") {
          au(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((n = iu("" + n)), t.setAttribute(l, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (e !== "input" && bt(t, e, "name", u.name, u, null),
                bt(t, e, "formEncType", u.formEncType, u, null),
                bt(t, e, "formMethod", u.formMethod, u, null),
                bt(t, e, "formTarget", u.formTarget, u, null))
              : (bt(t, e, "encType", u.encType, u, null),
                bt(t, e, "method", u.method, u, null),
                bt(t, e, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((n = iu("" + n)), t.setAttribute(l, n));
        break;
      case "onClick":
        n != null && (t.onclick = Le);
        break;
      case "onScroll":
        n != null && it("scroll", t);
        break;
      case "onScrollEnd":
        n != null && it("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(r(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = iu("" + n)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(l, "" + n)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0
          ? t.setAttribute(l, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? t.setAttribute(l, n)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? t.setAttribute(l, n)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? t.removeAttribute(l)
          : t.setAttribute(l, n);
        break;
      case "popover":
        (it("beforetoggle", t), it("toggle", t), nu(t, "popover", n));
        break;
      case "xlinkActuate":
        Xe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        Xe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        Xe(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        Xe(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        Xe(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        Xe(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        Xe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        Xe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        Xe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        nu(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = pv.get(l) || l), nu(t, l, n));
    }
  }
  function Yf(t, e, l, n, u, i) {
    switch (l) {
      case "style":
        sr(t, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(r(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? hn(t, n)
          : (typeof n == "number" || typeof n == "bigint") && hn(t, "" + n);
        break;
      case "onScroll":
        n != null && it("scroll", t);
        break;
      case "onScrollEnd":
        n != null && it("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = Le);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!tr.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (i = t[ee] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && t.removeEventListener(e, i, u),
              typeof n == "function")
            ) {
              (typeof i != "function" &&
                i !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, n, u));
              break t;
            }
            l in t
              ? (t[l] = n)
              : n === !0
                ? t.setAttribute(l, "")
                : nu(t, l, n);
          }
    }
  }
  function Kt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (it("error", t), it("load", t));
        var n = !1,
          u = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var f = l[i];
            if (f != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  bt(t, e, i, f, l, null);
              }
          }
        (u && bt(t, e, "srcSet", l.srcSet, l, null),
          n && bt(t, e, "src", l.src, l, null));
        return;
      case "input":
        it("invalid", t);
        var o = (i = f = u = null),
          y = null,
          T = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var M = l[n];
            if (M != null)
              switch (n) {
                case "name":
                  u = M;
                  break;
                case "type":
                  f = M;
                  break;
                case "checked":
                  y = M;
                  break;
                case "defaultChecked":
                  T = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  o = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null) throw Error(r(137, e));
                  break;
                default:
                  bt(t, e, n, M, l, null);
              }
          }
        ur(t, i, o, y, T, f, u, !1);
        return;
      case "select":
        (it("invalid", t), (n = f = i = null));
        for (u in l)
          if (l.hasOwnProperty(u) && ((o = l[u]), o != null))
            switch (u) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                f = o;
                break;
              case "multiple":
                n = o;
              default:
                bt(t, e, u, o, l, null);
            }
        ((e = i),
          (l = f),
          (t.multiple = !!n),
          e != null ? on(t, !!n, e, !1) : l != null && on(t, !!n, l, !0));
        return;
      case "textarea":
        (it("invalid", t), (i = u = n = null));
        for (f in l)
          if (l.hasOwnProperty(f) && ((o = l[f]), o != null))
            switch (f) {
              case "value":
                n = o;
                break;
              case "defaultValue":
                u = o;
                break;
              case "children":
                i = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                bt(t, e, f, o, l, null);
            }
        cr(t, n, u, i);
        return;
      case "option":
        for (y in l)
          if (l.hasOwnProperty(y) && ((n = l[y]), n != null))
            switch (y) {
              case "selected":
                t.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                bt(t, e, y, n, l, null);
            }
        return;
      case "dialog":
        (it("beforetoggle", t),
          it("toggle", t),
          it("cancel", t),
          it("close", t));
        break;
      case "iframe":
      case "object":
        it("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < xa.length; n++) it(xa[n], t);
        break;
      case "image":
        (it("error", t), it("load", t));
        break;
      case "details":
        it("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (it("error", t), it("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in l)
          if (l.hasOwnProperty(T) && ((n = l[T]), n != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                bt(t, e, T, n, l, null);
            }
        return;
      default:
        if (Ii(e)) {
          for (M in l)
            l.hasOwnProperty(M) &&
              ((n = l[M]), n !== void 0 && Yf(t, e, M, n, l, void 0));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && ((n = l[o]), n != null && bt(t, e, o, n, l, null));
  }
  function Vm(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          i = null,
          f = null,
          o = null,
          y = null,
          T = null,
          M = null;
        for (A in l) {
          var U = l[A];
          if (l.hasOwnProperty(A) && U != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = U;
              default:
                n.hasOwnProperty(A) || bt(t, e, A, null, n, U);
            }
        }
        for (var O in n) {
          var A = n[O];
          if (((U = l[O]), n.hasOwnProperty(O) && (A != null || U != null)))
            switch (O) {
              case "type":
                i = A;
                break;
              case "name":
                u = A;
                break;
              case "checked":
                T = A;
                break;
              case "defaultChecked":
                M = A;
                break;
              case "value":
                f = A;
                break;
              case "defaultValue":
                o = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(r(137, e));
                break;
              default:
                A !== U && bt(t, e, O, A, n, U);
            }
        }
        Wi(t, f, o, y, T, M, i, u);
        return;
      case "select":
        A = f = o = O = null;
        for (i in l)
          if (((y = l[i]), l.hasOwnProperty(i) && y != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                A = y;
              default:
                n.hasOwnProperty(i) || bt(t, e, i, null, n, y);
            }
        for (u in n)
          if (
            ((i = n[u]),
            (y = l[u]),
            n.hasOwnProperty(u) && (i != null || y != null))
          )
            switch (u) {
              case "value":
                O = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== y && bt(t, e, u, i, n, y);
            }
        ((e = o),
          (l = f),
          (n = A),
          O != null
            ? on(t, !!l, O, !1)
            : !!n != !!l &&
              (e != null ? on(t, !!l, e, !0) : on(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        A = O = null;
        for (o in l)
          if (
            ((u = l[o]),
            l.hasOwnProperty(o) && u != null && !n.hasOwnProperty(o))
          )
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                bt(t, e, o, null, n, u);
            }
        for (f in n)
          if (
            ((u = n[f]),
            (i = l[f]),
            n.hasOwnProperty(f) && (u != null || i != null))
          )
            switch (f) {
              case "value":
                O = u;
                break;
              case "defaultValue":
                A = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== i && bt(t, e, f, u, n, i);
            }
        ir(t, O, A);
        return;
      case "option":
        for (var q in l)
          if (
            ((O = l[q]),
            l.hasOwnProperty(q) && O != null && !n.hasOwnProperty(q))
          )
            switch (q) {
              case "selected":
                t.selected = !1;
                break;
              default:
                bt(t, e, q, null, n, O);
            }
        for (y in n)
          if (
            ((O = n[y]),
            (A = l[y]),
            n.hasOwnProperty(y) && O !== A && (O != null || A != null))
          )
            switch (y) {
              case "selected":
                t.selected =
                  O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                bt(t, e, y, O, n, A);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var V in l)
          ((O = l[V]),
            l.hasOwnProperty(V) &&
              O != null &&
              !n.hasOwnProperty(V) &&
              bt(t, e, V, null, n, O));
        for (T in n)
          if (
            ((O = n[T]),
            (A = l[T]),
            n.hasOwnProperty(T) && O !== A && (O != null || A != null))
          )
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(r(137, e));
                break;
              default:
                bt(t, e, T, O, n, A);
            }
        return;
      default:
        if (Ii(e)) {
          for (var Et in l)
            ((O = l[Et]),
              l.hasOwnProperty(Et) &&
                O !== void 0 &&
                !n.hasOwnProperty(Et) &&
                Yf(t, e, Et, void 0, n, O));
          for (M in n)
            ((O = n[M]),
              (A = l[M]),
              !n.hasOwnProperty(M) ||
                O === A ||
                (O === void 0 && A === void 0) ||
                Yf(t, e, M, O, n, A));
          return;
        }
    }
    for (var b in l)
      ((O = l[b]),
        l.hasOwnProperty(b) &&
          O != null &&
          !n.hasOwnProperty(b) &&
          bt(t, e, b, null, n, O));
    for (U in n)
      ((O = n[U]),
        (A = l[U]),
        !n.hasOwnProperty(U) ||
          O === A ||
          (O == null && A == null) ||
          bt(t, e, U, O, n, A));
  }
  function od(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Km() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0;
        n < l.length;
        n++
      ) {
        var u = l[n],
          i = u.transferSize,
          f = u.initiatorType,
          o = u.duration;
        if (i && o && od(f)) {
          for (f = 0, o = u.responseEnd, n += 1; n < l.length; n++) {
            var y = l[n],
              T = y.startTime;
            if (T > o) break;
            var M = y.transferSize,
              U = y.initiatorType;
            M &&
              od(U) &&
              ((y = y.responseEnd), (f += M * (y < o ? 1 : (o - T) / (y - T))));
          }
          if ((--n, (e += (8 * (i + f)) / (u.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Gf = null,
    wf = null;
  function ei(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function hd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Xf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lf = null;
  function Jm() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Lf
        ? !1
        : ((Lf = t), !0)
      : ((Lf = null), !1);
  }
  var yd = typeof setTimeout == "function" ? setTimeout : void 0,
    Fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    vd = typeof Promise == "function" ? Promise : void 0,
    km =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof vd < "u"
          ? function (t) {
              return vd.resolve(null).then(t).catch(Wm);
            }
          : yd;
  function Wm(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Cl(t) {
    return t === "head";
  }
  function md(t, e) {
    var l = e,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$" || l === "/&")) {
          if (n === 0) {
            (t.removeChild(u), Ln(e));
            return;
          }
          n--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          n++;
        else if (l === "html") ja(t.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = t.ownerDocument.head), ja(l));
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling,
              o = i.nodeName;
            (i[Pn] ||
              o === "SCRIPT" ||
              o === "STYLE" ||
              (o === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(i),
              (i = f));
          }
        } else l === "body" && ja(t.ownerDocument.body);
      l = u;
    } while (l);
    Ln(e);
  }
  function gd(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((l = n.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = n;
    } while (l);
  }
  function Zf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Zf(l), Fi(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function $m(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (n) {
        if (!t[Pn])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((i = t.getAttribute("rel")),
                i === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((i = t.getAttribute("src")),
                (i !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  i &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === i) return t;
      } else return t;
      if (((t = Me(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Im(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Me(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function pd(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Me(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Vf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Kf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Pm(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var n = function () {
        (e(), l.removeEventListener("DOMContentLoaded", n));
      };
      (l.addEventListener("DOMContentLoaded", n), (t._reactRetry = n));
    }
  }
  function Me(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Jf = null;
  function Sd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return Me(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function bd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Ed(t, e, l) {
    switch (((e = ei(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function ja(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Fi(t);
  }
  var Ce = new Map(),
    _d = new Set();
  function li(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var ul = H.d;
  H.d = { f: t0, r: e0, D: l0, C: n0, L: a0, m: u0, X: c0, S: i0, M: f0 };
  function t0() {
    var t = ul.f(),
      e = Ju();
    return t || e;
  }
  function e0(t) {
    var e = fn(t);
    e !== null && e.tag === 5 && e.type === "form" ? Yo(e) : ul.r(t);
  }
  var Gn = typeof document > "u" ? null : document;
  function Td(t, e, l) {
    var n = Gn;
    if (n && typeof e == "string" && e) {
      var u = be(e);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        _d.has(u) ||
          (_d.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          n.querySelector(u) === null &&
            ((e = n.createElement("link")),
            Kt(e, "link", t),
            Yt(e),
            n.head.appendChild(e))));
    }
  }
  function l0(t) {
    (ul.D(t), Td("dns-prefetch", t, null));
  }
  function n0(t, e) {
    (ul.C(t, e), Td("preconnect", t, e));
  }
  function a0(t, e, l) {
    ul.L(t, e, l);
    var n = Gn;
    if (n && t && e) {
      var u = 'link[rel="preload"][as="' + be(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + be(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (u += '[imagesizes="' + be(l.imageSizes) + '"]'))
        : (u += '[href="' + be(t) + '"]');
      var i = u;
      switch (e) {
        case "style":
          i = wn(t);
          break;
        case "script":
          i = Xn(t);
      }
      Ce.has(i) ||
        ((t = R(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        Ce.set(i, t),
        n.querySelector(u) !== null ||
          (e === "style" && n.querySelector(qa(i))) ||
          (e === "script" && n.querySelector(Ba(i))) ||
          ((e = n.createElement("link")),
          Kt(e, "link", t),
          Yt(e),
          n.head.appendChild(e)));
    }
  }
  function u0(t, e) {
    ul.m(t, e);
    var l = Gn;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + be(n) + '"][href="' + be(t) + '"]',
        i = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Xn(t);
      }
      if (
        !Ce.has(i) &&
        ((t = R({ rel: "modulepreload", href: t }, e)),
        Ce.set(i, t),
        l.querySelector(u) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ba(i))) return;
        }
        ((n = l.createElement("link")),
          Kt(n, "link", t),
          Yt(n),
          l.head.appendChild(n));
      }
    }
  }
  function i0(t, e, l) {
    ul.S(t, e, l);
    var n = Gn;
    if (n && t) {
      var u = sn(n).hoistableStyles,
        i = wn(t);
      e = e || "default";
      var f = u.get(i);
      if (!f) {
        var o = { loading: 0, preload: null };
        if ((f = n.querySelector(qa(i)))) o.loading = 5;
        else {
          ((t = R({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Ce.get(i)) && Ff(t, l));
          var y = (f = n.createElement("link"));
          (Yt(y),
            Kt(y, "link", t),
            (y._p = new Promise(function (T, M) {
              ((y.onload = T), (y.onerror = M));
            })),
            y.addEventListener("load", function () {
              o.loading |= 1;
            }),
            y.addEventListener("error", function () {
              o.loading |= 2;
            }),
            (o.loading |= 4),
            ni(f, e, n));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: o }),
          u.set(i, f));
      }
    }
  }
  function c0(t, e) {
    ul.X(t, e);
    var l = Gn;
    if (l && t) {
      var n = sn(l).hoistableScripts,
        u = Xn(t),
        i = n.get(u);
      i ||
        ((i = l.querySelector(Ba(u))),
        i ||
          ((t = R({ src: t, async: !0 }, e)),
          (e = Ce.get(u)) && kf(t, e),
          (i = l.createElement("script")),
          Yt(i),
          Kt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        n.set(u, i));
    }
  }
  function f0(t, e) {
    ul.M(t, e);
    var l = Gn;
    if (l && t) {
      var n = sn(l).hoistableScripts,
        u = Xn(t),
        i = n.get(u);
      i ||
        ((i = l.querySelector(Ba(u))),
        i ||
          ((t = R({ src: t, async: !0, type: "module" }, e)),
          (e = Ce.get(u)) && kf(t, e),
          (i = l.createElement("script")),
          Yt(i),
          Kt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        n.set(u, i));
    }
  }
  function Od(t, e, l, n) {
    var u = (u = at.current) ? li(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = wn(l.href)),
            (l = sn(u).hoistableStyles),
            (n = l.get(e)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = wn(l.href);
          var i = sn(u).hoistableStyles,
            f = i.get(t);
          if (
            (f ||
              ((u = u.ownerDocument || u),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(t, f),
              (i = u.querySelector(qa(t))) &&
                !i._p &&
                ((f.instance = i), (f.state.loading = 5)),
              Ce.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Ce.set(t, l),
                i || s0(u, t, l, f.state))),
            e && n === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (e && n !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Xn(l)),
              (l = sn(u).hoistableScripts),
              (n = l.get(e)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function wn(t) {
    return 'href="' + be(t) + '"';
  }
  function qa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function zd(t) {
    return R({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function s0(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (n.loading = 1)
      : ((e = t.createElement("link")),
        (n.preload = e),
        e.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        Kt(e, "link", l),
        Yt(e),
        t.head.appendChild(e));
  }
  function Xn(t) {
    return '[src="' + be(t) + '"]';
  }
  function Ba(t) {
    return "script[async]" + t;
  }
  function Ad(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var n = t.querySelector('style[data-href~="' + be(l.href) + '"]');
          if (n) return ((e.instance = n), Yt(n), n);
          var u = R({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (t.ownerDocument || t).createElement("style")),
            Yt(n),
            Kt(n, "style", u),
            ni(n, l.precedence, t),
            (e.instance = n)
          );
        case "stylesheet":
          u = wn(l.href);
          var i = t.querySelector(qa(u));
          if (i) return ((e.state.loading |= 4), (e.instance = i), Yt(i), i);
          ((n = zd(l)),
            (u = Ce.get(u)) && Ff(n, u),
            (i = (t.ownerDocument || t).createElement("link")),
            Yt(i));
          var f = i;
          return (
            (f._p = new Promise(function (o, y) {
              ((f.onload = o), (f.onerror = y));
            })),
            Kt(i, "link", n),
            (e.state.loading |= 4),
            ni(i, l.precedence, t),
            (e.instance = i)
          );
        case "script":
          return (
            (i = Xn(l.src)),
            (u = t.querySelector(Ba(i)))
              ? ((e.instance = u), Yt(u), u)
              : ((n = l),
                (u = Ce.get(i)) && ((n = R({}, l)), kf(n, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Yt(u),
                Kt(u, "link", n),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((n = e.instance), (e.state.loading |= 4), ni(n, l.precedence, t));
    return e.instance;
  }
  function ni(t, e, l) {
    for (
      var n = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = n.length ? n[n.length - 1] : null,
        i = u,
        f = 0;
      f < n.length;
      f++
    ) {
      var o = n[f];
      if (o.dataset.precedence === e) i = o;
      else if (i !== u) break;
    }
    i
      ? i.parentNode.insertBefore(t, i.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Ff(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function kf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var ai = null;
  function Md(t, e, l) {
    if (ai === null) {
      var n = new Map(),
        u = (ai = new Map());
      u.set(l, n);
    } else ((u = ai), (n = u.get(l)), n || ((n = new Map()), u.set(l, n)));
    if (n.has(t)) return n;
    for (
      n.set(t, null), l = l.getElementsByTagName(t), u = 0;
      u < l.length;
      u++
    ) {
      var i = l[u];
      if (
        !(
          i[Pn] ||
          i[Xt] ||
          (t === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = i.getAttribute(e) || "";
        f = t + f;
        var o = n.get(f);
        o ? o.push(i) : n.set(f, [i]);
      }
    }
    return n;
  }
  function Cd(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function r0(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Dd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function o0(t, e, l, n) {
    if (
      l.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = wn(n.href),
          i = e.querySelector(qa(u));
        if (i) {
          ((e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = ui.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = i),
            Yt(i));
          return;
        }
        ((i = e.ownerDocument || e),
          (n = zd(n)),
          (u = Ce.get(u)) && Ff(n, u),
          (i = i.createElement("link")),
          Yt(i));
        var f = i;
        ((f._p = new Promise(function (o, y) {
          ((f.onload = o), (f.onerror = y));
        })),
          Kt(i, "link", n),
          (l.instance = i));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = ui.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l)));
    }
  }
  var Wf = 0;
  function h0(t, e) {
    return (
      t.stylesheets && t.count === 0 && ci(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var n = setTimeout(function () {
              if ((t.stylesheets && ci(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                ((t.unsuspend = null), i());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Wf === 0 && (Wf = 62500 * Km());
            var u = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && ci(t, t.stylesheets), t.unsuspend))
                ) {
                  var i = t.unsuspend;
                  ((t.unsuspend = null), i());
                }
              },
              (t.imgBytes > Wf ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = l),
              function () {
                ((t.unsuspend = null), clearTimeout(n), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function ui() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ci(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ii = null;
  function ci(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ii = new Map()),
        e.forEach(d0, t),
        (ii = null),
        ui.call(t)));
  }
  function d0(t, e) {
    if (!(e.state.loading & 4)) {
      var l = ii.get(t);
      if (l) var n = l.get(null);
      else {
        ((l = new Map()), ii.set(t, l));
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            i = 0;
          i < u.length;
          i++
        ) {
          var f = u[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (l.set(f.dataset.precedence, f), (n = f));
        }
        n && l.set(null, n);
      }
      ((u = e.instance),
        (f = u.getAttribute("data-precedence")),
        (i = l.get(f) || n),
        i === n && l.set(null, u),
        l.set(f, u),
        this.count++,
        (n = ui.bind(this)),
        u.addEventListener("load", n),
        u.addEventListener("error", n),
        i
          ? i.parentNode.insertBefore(u, i.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Qa = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function y0(t, e, l, n, u, i, f, o, y) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Zi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zi(0)),
      (this.hiddenUpdates = Zi(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = u),
      (this.onCaughtError = i),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function Rd(t, e, l, n, u, i, f, o, y, T, M, U) {
    return (
      (t = new y0(t, e, l, f, y, T, M, U, o)),
      (e = 1),
      i === !0 && (e |= 24),
      (i = he(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (e = Cc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (i.memoizedState = { element: n, isDehydrated: l, cache: e }),
      Nc(i),
      t
    );
  }
  function Ud(t) {
    return t ? ((t = Sn), t) : Sn;
  }
  function Nd(t, e, l, n, u, i) {
    ((u = Ud(u)),
      n.context === null ? (n.context = u) : (n.pendingContext = u),
      (n = gl(e)),
      (n.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (n.callback = i),
      (l = pl(t, n, e)),
      l !== null && (ce(l, t, e), ma(l, t, e)));
  }
  function xd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function $f(t, e) {
    (xd(t, e), (t = t.alternate) && xd(t, e));
  }
  function Hd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ll(t, 67108864);
      (e !== null && ce(e, t, 67108864), $f(t, 67108864));
    }
  }
  function jd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ge();
      e = Vi(e);
      var l = Ll(t, e);
      (l !== null && ce(l, t, e), $f(t, e));
    }
  }
  var fi = !0;
  function v0(t, e, l, n) {
    var u = C.T;
    C.T = null;
    var i = H.p;
    try {
      ((H.p = 2), If(t, e, l, n));
    } finally {
      ((H.p = i), (C.T = u));
    }
  }
  function m0(t, e, l, n) {
    var u = C.T;
    C.T = null;
    var i = H.p;
    try {
      ((H.p = 8), If(t, e, l, n));
    } finally {
      ((H.p = i), (C.T = u));
    }
  }
  function If(t, e, l, n) {
    if (fi) {
      var u = Pf(n);
      if (u === null) (Qf(t, e, n, si, l), Bd(t, n));
      else if (p0(u, t, e, l, n)) n.stopPropagation();
      else if ((Bd(t, n), e & 4 && -1 < g0.indexOf(t))) {
        for (; u !== null; ) {
          var i = fn(u);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var f = Ql(i.pendingLanes);
                  if (f !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; f; ) {
                      var y = 1 << (31 - re(f));
                      ((o.entanglements[1] |= y), (f &= ~y));
                    }
                    (Ge(i), (yt & 6) === 0 && ((Vu = fe() + 500), Na(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((o = Ll(i, 2)), o !== null && ce(o, i, 2), Ju(), $f(i, 2));
            }
          if (((i = Pf(n)), i === null && Qf(t, e, n, si, l), i === u)) break;
          u = i;
        }
        u !== null && n.stopPropagation();
      } else Qf(t, e, n, null, l);
    }
  }
  function Pf(t) {
    return ((t = tc(t)), ts(t));
  }
  var si = null;
  function ts(t) {
    if (((si = null), (t = cn(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = E(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((si = t), null);
  }
  function qd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (lv()) {
          case Ls:
            return 2;
          case Zs:
            return 8;
          case Ia:
          case nv:
            return 32;
          case Vs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var es = !1,
    Dl = null,
    Rl = null,
    Ul = null,
    Ya = new Map(),
    Ga = new Map(),
    Nl = [],
    g0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Bd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Dl = null;
        break;
      case "dragenter":
      case "dragleave":
        Rl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ul = null;
        break;
      case "pointerover":
      case "pointerout":
        Ya.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ga.delete(e.pointerId);
    }
  }
  function wa(t, e, l, n, u, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: i,
          targetContainers: [u],
        }),
        e !== null && ((e = fn(e)), e !== null && Hd(e)),
        t)
      : ((t.eventSystemFlags |= n),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function p0(t, e, l, n, u) {
    switch (e) {
      case "focusin":
        return ((Dl = wa(Dl, t, e, l, n, u)), !0);
      case "dragenter":
        return ((Rl = wa(Rl, t, e, l, n, u)), !0);
      case "mouseover":
        return ((Ul = wa(Ul, t, e, l, n, u)), !0);
      case "pointerover":
        var i = u.pointerId;
        return (Ya.set(i, wa(Ya.get(i) || null, t, e, l, n, u)), !0);
      case "gotpointercapture":
        return (
          (i = u.pointerId),
          Ga.set(i, wa(Ga.get(i) || null, t, e, l, n, u)),
          !0
        );
    }
    return !1;
  }
  function Qd(t) {
    var e = cn(t.target);
    if (e !== null) {
      var l = d(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = p(l)), e !== null)) {
            ((t.blockedOn = e),
              $s(t.priority, function () {
                jd(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = E(l)), e !== null)) {
            ((t.blockedOn = e),
              $s(t.priority, function () {
                jd(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ri(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Pf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(l.type, l);
        ((Pi = n), l.target.dispatchEvent(n), (Pi = null));
      } else return ((e = fn(l)), e !== null && Hd(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function Yd(t, e, l) {
    ri(t) && l.delete(e);
  }
  function S0() {
    ((es = !1),
      Dl !== null && ri(Dl) && (Dl = null),
      Rl !== null && ri(Rl) && (Rl = null),
      Ul !== null && ri(Ul) && (Ul = null),
      Ya.forEach(Yd),
      Ga.forEach(Yd));
  }
  function oi(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      es ||
        ((es = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, S0)));
  }
  var hi = null;
  function Gd(t) {
    hi !== t &&
      ((hi = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        hi === t && (hi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            n = t[e + 1],
            u = t[e + 2];
          if (typeof n != "function") {
            if (ts(n || l) === null) continue;
            break;
          }
          var i = fn(l);
          i !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ic(i, { pending: !0, data: u, method: l.method, action: n }, n, u));
        }
      }));
  }
  function Ln(t) {
    function e(y) {
      return oi(y, t);
    }
    (Dl !== null && oi(Dl, t),
      Rl !== null && oi(Rl, t),
      Ul !== null && oi(Ul, t),
      Ya.forEach(e),
      Ga.forEach(e));
    for (var l = 0; l < Nl.length; l++) {
      var n = Nl[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Nl.length && ((l = Nl[0]), l.blockedOn === null); )
      (Qd(l), l.blockedOn === null && Nl.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var u = l[n],
          i = l[n + 1],
          f = u[ee] || null;
        if (typeof i == "function") f || Gd(l);
        else if (f) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (((u = i), (f = i[ee] || null))) o = f.formAction;
            else if (ts(u) !== null) continue;
          } else o = f.action;
          (typeof o == "function" ? (l[n + 1] = o) : (l.splice(n, 3), (n -= 3)),
            Gd(l));
        }
      }
  }
  function wd() {
    function t(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (u = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (u !== null && (u(), (u = null)), n || setTimeout(l, 20));
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var n = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function ls(t) {
    this._internalRoot = t;
  }
  ((di.prototype.render = ls.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current,
        n = ge();
      Nd(l, n, t, e, null, null);
    }),
    (di.prototype.unmount = ls.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Nd(t.current, 2, null, t, null, null), Ju(), (e[un] = null));
        }
      }));
  function di(t) {
    this._internalRoot = t;
  }
  di.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Ws();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Nl.length && e !== 0 && e < Nl[l].priority; l++);
      (Nl.splice(l, 0, t), l === 0 && Qd(t));
    }
  };
  var Xd = c.version;
  if (Xd !== "19.2.1") throw Error(r(527, Xd, "19.2.1"));
  H.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? z(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var b0 = {
    bundleType: 0,
    version: "19.2.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yi.isDisabled && yi.supportsFiber)
      try {
        ((Wn = yi.inject(b0)), (se = yi));
      } catch {}
  }
  return (
    (La.createRoot = function (t, e) {
      if (!h(t)) throw Error(r(299));
      var l = !1,
        n = "",
        u = ko,
        i = Wo,
        f = $o;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = Rd(t, 1, !1, null, null, l, n, null, u, i, f, wd)),
        (t[un] = e.current),
        Bf(t),
        new ls(e)
      );
    }),
    (La.hydrateRoot = function (t, e, l) {
      if (!h(t)) throw Error(r(299));
      var n = !1,
        u = "",
        i = ko,
        f = Wo,
        o = $o,
        y = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (f = l.onCaughtError),
          l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
          l.formState !== void 0 && (y = l.formState)),
        (e = Rd(t, 1, !0, e, l ?? null, n, u, y, i, f, o, wd)),
        (e.context = Ud(null)),
        (l = e.current),
        (n = ge()),
        (n = Vi(n)),
        (u = gl(n)),
        (u.callback = null),
        pl(l, u, n),
        (l = n),
        (e.current.lanes = l),
        In(e, l),
        Ge(e),
        (t[un] = e.current),
        Bf(t),
        new di(e)
      );
    }),
    (La.version = "19.2.1"),
    La
  );
}
var Id;
function U0() {
  if (Id) return as.exports;
  Id = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (c) {
        console.error(c);
      }
  }
  return (a(), (as.exports = R0()), as.exports);
}
var N0 = U0();
const x0 = _0(N0);
var Fn = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(a), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  H0 = {
    setTimeout: (a, c) => setTimeout(a, c),
    clearTimeout: (a) => clearTimeout(a),
    setInterval: (a, c) => setInterval(a, c),
    clearInterval: (a) => clearInterval(a),
  },
  j0 = class {
    #t = H0;
    #e = !1;
    setTimeoutProvider(a) {
      this.#t = a;
    }
    setTimeout(a, c) {
      return this.#t.setTimeout(a, c);
    }
    clearTimeout(a) {
      this.#t.clearTimeout(a);
    }
    setInterval(a, c) {
      return this.#t.setInterval(a, c);
    }
    clearInterval(a) {
      this.#t.clearInterval(a);
    }
  },
  ln = new j0();
function q0(a) {
  setTimeout(a, 0);
}
var nn = typeof window > "u" || "Deno" in globalThis;
function It() {}
function B0(a, c) {
  return typeof a == "function" ? a(c) : a;
}
function vs(a) {
  return typeof a == "number" && a >= 0 && a !== 1 / 0;
}
function Oy(a, c) {
  return Math.max(a + (c || 0) - Date.now(), 0);
}
function Hl(a, c) {
  return typeof a == "function" ? a(c) : a;
}
function De(a, c) {
  return typeof a == "function" ? a(c) : a;
}
function Pd(a, c) {
  const {
    type: s = "all",
    exact: r,
    fetchStatus: h,
    predicate: d,
    queryKey: p,
    stale: E,
  } = a;
  if (p) {
    if (r) {
      if (c.queryHash !== Ds(p, c.options)) return !1;
    } else if (!Va(c.queryKey, p)) return !1;
  }
  if (s !== "all") {
    const S = c.isActive();
    if ((s === "active" && !S) || (s === "inactive" && S)) return !1;
  }
  return !(
    (typeof E == "boolean" && c.isStale() !== E) ||
    (h && h !== c.state.fetchStatus) ||
    (d && !d(c))
  );
}
function ty(a, c) {
  const { exact: s, status: r, predicate: h, mutationKey: d } = a;
  if (d) {
    if (!c.options.mutationKey) return !1;
    if (s) {
      if (an(c.options.mutationKey) !== an(d)) return !1;
    } else if (!Va(c.options.mutationKey, d)) return !1;
  }
  return !((r && c.state.status !== r) || (h && !h(c)));
}
function Ds(a, c) {
  return (c?.queryKeyHashFn || an)(a);
}
function an(a) {
  return JSON.stringify(a, (c, s) =>
    ms(s)
      ? Object.keys(s)
          .sort()
          .reduce((r, h) => ((r[h] = s[h]), r), {})
      : s,
  );
}
function Va(a, c) {
  return a === c
    ? !0
    : typeof a != typeof c
      ? !1
      : a && c && typeof a == "object" && typeof c == "object"
        ? Object.keys(c).every((s) => Va(a[s], c[s]))
        : !1;
}
var Q0 = Object.prototype.hasOwnProperty;
function zy(a, c) {
  if (a === c) return a;
  const s = ey(a) && ey(c);
  if (!s && !(ms(a) && ms(c))) return c;
  const h = (s ? a : Object.keys(a)).length,
    d = s ? c : Object.keys(c),
    p = d.length,
    E = s ? new Array(p) : {};
  let S = 0;
  for (let g = 0; g < p; g++) {
    const z = s ? g : d[g],
      R = a[z],
      x = c[z];
    if (R === x) {
      ((E[z] = R), (s ? g < h : Q0.call(a, z)) && S++);
      continue;
    }
    if (
      R === null ||
      x === null ||
      typeof R != "object" ||
      typeof x != "object"
    ) {
      E[z] = x;
      continue;
    }
    const J = zy(R, x);
    ((E[z] = J), J === R && S++);
  }
  return h === p && S === h ? a : E;
}
function Ei(a, c) {
  if (!c || Object.keys(a).length !== Object.keys(c).length) return !1;
  for (const s in a) if (a[s] !== c[s]) return !1;
  return !0;
}
function ey(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function ms(a) {
  if (!ly(a)) return !1;
  const c = a.constructor;
  if (c === void 0) return !0;
  const s = c.prototype;
  return !(
    !ly(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(a) !== Object.prototype
  );
}
function ly(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Y0(a) {
  return new Promise((c) => {
    ln.setTimeout(c, a);
  });
}
function gs(a, c, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(a, c)
    : s.structuralSharing !== !1
      ? zy(a, c)
      : c;
}
function G0(a, c, s = 0) {
  const r = [...a, c];
  return s && r.length > s ? r.slice(1) : r;
}
function w0(a, c, s = 0) {
  const r = [c, ...a];
  return s && r.length > s ? r.slice(0, -1) : r;
}
var Rs = Symbol();
function Ay(a, c) {
  return !a.queryFn && c?.initialPromise
    ? () => c.initialPromise
    : !a.queryFn || a.queryFn === Rs
      ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
      : a.queryFn;
}
function My(a, c) {
  return typeof a == "function" ? a(...c) : !!a;
}
var X0 = class extends Fn {
    #t;
    #e;
    #l;
    constructor() {
      (super(),
        (this.#l = (a) => {
          if (!nn && window.addEventListener) {
            const c = () => a();
            return (
              window.addEventListener("visibilitychange", c, !1),
              () => {
                window.removeEventListener("visibilitychange", c);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#l);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(a) {
      ((this.#l = a),
        this.#e?.(),
        (this.#e = a((c) => {
          typeof c == "boolean" ? this.setFocused(c) : this.onFocus();
        })));
    }
    setFocused(a) {
      this.#t !== a && ((this.#t = a), this.onFocus());
    }
    onFocus() {
      const a = this.isFocused();
      this.listeners.forEach((c) => {
        c(a);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Us = new X0();
function ps() {
  let a, c;
  const s = new Promise((h, d) => {
    ((a = h), (c = d));
  });
  ((s.status = "pending"), s.catch(() => {}));
  function r(h) {
    (Object.assign(s, h), delete s.resolve, delete s.reject);
  }
  return (
    (s.resolve = (h) => {
      (r({ status: "fulfilled", value: h }), a(h));
    }),
    (s.reject = (h) => {
      (r({ status: "rejected", reason: h }), c(h));
    }),
    s
  );
}
var L0 = q0;
function Z0() {
  let a = [],
    c = 0,
    s = (E) => {
      E();
    },
    r = (E) => {
      E();
    },
    h = L0;
  const d = (E) => {
      c
        ? a.push(E)
        : h(() => {
            s(E);
          });
    },
    p = () => {
      const E = a;
      ((a = []),
        E.length &&
          h(() => {
            r(() => {
              E.forEach((S) => {
                s(S);
              });
            });
          }));
    };
  return {
    batch: (E) => {
      let S;
      c++;
      try {
        S = E();
      } finally {
        (c--, c || p());
      }
      return S;
    },
    batchCalls:
      (E) =>
      (...S) => {
        d(() => {
          E(...S);
        });
      },
    schedule: d,
    setNotifyFunction: (E) => {
      s = E;
    },
    setBatchNotifyFunction: (E) => {
      r = E;
    },
    setScheduler: (E) => {
      h = E;
    },
  };
}
var Bt = Z0(),
  V0 = class extends Fn {
    #t = !0;
    #e;
    #l;
    constructor() {
      (super(),
        (this.#l = (a) => {
          if (!nn && window.addEventListener) {
            const c = () => a(!0),
              s = () => a(!1);
            return (
              window.addEventListener("online", c, !1),
              window.addEventListener("offline", s, !1),
              () => {
                (window.removeEventListener("online", c),
                  window.removeEventListener("offline", s));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#l);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(a) {
      ((this.#l = a), this.#e?.(), (this.#e = a(this.setOnline.bind(this))));
    }
    setOnline(a) {
      this.#t !== a &&
        ((this.#t = a),
        this.listeners.forEach((s) => {
          s(a);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  _i = new V0();
function K0(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}
function Cy(a) {
  return (a ?? "online") === "online" ? _i.isOnline() : !0;
}
var Ss = class extends Error {
  constructor(a) {
    (super("CancelledError"),
      (this.revert = a?.revert),
      (this.silent = a?.silent));
  }
};
function Dy(a) {
  let c = !1,
    s = 0,
    r;
  const h = ps(),
    d = () => h.status !== "pending",
    p = (X) => {
      if (!d()) {
        const K = new Ss(X);
        (x(K), a.onCancel?.(K));
      }
    },
    E = () => {
      c = !0;
    },
    S = () => {
      c = !1;
    },
    g = () =>
      Us.isFocused() &&
      (a.networkMode === "always" || _i.isOnline()) &&
      a.canRun(),
    z = () => Cy(a.networkMode) && a.canRun(),
    R = (X) => {
      d() || (r?.(), h.resolve(X));
    },
    x = (X) => {
      d() || (r?.(), h.reject(X));
    },
    J = () =>
      new Promise((X) => {
        ((r = (K) => {
          (d() || g()) && X(K);
        }),
          a.onPause?.());
      }).then(() => {
        ((r = void 0), d() || a.onContinue?.());
      }),
    w = () => {
      if (d()) return;
      let X;
      const K = s === 0 ? a.initialPromise : void 0;
      try {
        X = K ?? a.fn();
      } catch (W) {
        X = Promise.reject(W);
      }
      Promise.resolve(X)
        .then(R)
        .catch((W) => {
          if (d()) return;
          const ct = a.retry ?? (nn ? 0 : 3),
            G = a.retryDelay ?? K0,
            F = typeof G == "function" ? G(s, W) : G,
            $ =
              ct === !0 ||
              (typeof ct == "number" && s < ct) ||
              (typeof ct == "function" && ct(s, W));
          if (c || !$) {
            x(W);
            return;
          }
          (s++,
            a.onFail?.(s, W),
            Y0(F)
              .then(() => (g() ? void 0 : J()))
              .then(() => {
                c ? x(W) : w();
              }));
        });
    };
  return {
    promise: h,
    status: () => h.status,
    cancel: p,
    continue: () => (r?.(), h),
    cancelRetry: E,
    continueRetry: S,
    canStart: z,
    start: () => (z() ? w() : J().then(w), h),
  };
}
var Ry = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        vs(this.gcTime) &&
          (this.#t = ln.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(a) {
      this.gcTime = Math.max(this.gcTime || 0, a ?? (nn ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#t && (ln.clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  J0 = class extends Ry {
    #t;
    #e;
    #l;
    #a;
    #n;
    #i;
    #c;
    constructor(a) {
      (super(),
        (this.#c = !1),
        (this.#i = a.defaultOptions),
        this.setOptions(a.options),
        (this.observers = []),
        (this.#a = a.client),
        (this.#l = this.#a.getQueryCache()),
        (this.queryKey = a.queryKey),
        (this.queryHash = a.queryHash),
        (this.#t = ay(this.options)),
        (this.state = a.state ?? this.#t),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#n?.promise;
    }
    setOptions(a) {
      if (
        ((this.options = { ...this.#i, ...a }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const c = ay(this.options);
        c.data !== void 0 &&
          (this.setState(ny(c.data, c.dataUpdatedAt)), (this.#t = c));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#l.remove(this);
    }
    setData(a, c) {
      const s = gs(this.state.data, a, this.options);
      return (
        this.#u({
          data: s,
          type: "success",
          dataUpdatedAt: c?.updatedAt,
          manual: c?.manual,
        }),
        s
      );
    }
    setState(a, c) {
      this.#u({ type: "setState", state: a, setStateOptions: c });
    }
    cancel(a) {
      const c = this.#n?.promise;
      return (this.#n?.cancel(a), c ? c.then(It).catch(It) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#t));
    }
    isActive() {
      return this.observers.some((a) => De(a.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Rs ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((a) => Hl(a.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((a) => a.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(a = 0) {
      return this.state.data === void 0
        ? !0
        : a === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !Oy(this.state.dataUpdatedAt, a);
    }
    onFocus() {
      (this.observers
        .find((c) => c.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#n?.continue());
    }
    onOnline() {
      (this.observers
        .find((c) => c.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#n?.continue());
    }
    addObserver(a) {
      this.observers.includes(a) ||
        (this.observers.push(a),
        this.clearGcTimeout(),
        this.#l.notify({ type: "observerAdded", query: this, observer: a }));
    }
    removeObserver(a) {
      this.observers.includes(a) &&
        ((this.observers = this.observers.filter((c) => c !== a)),
        this.observers.length ||
          (this.#n &&
            (this.#c ? this.#n.cancel({ revert: !0 }) : this.#n.cancelRetry()),
          this.scheduleGc()),
        this.#l.notify({ type: "observerRemoved", query: this, observer: a }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#u({ type: "invalidate" });
    }
    async fetch(a, c) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#n?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && c?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#n) return (this.#n.continueRetry(), this.#n.promise);
      }
      if ((a && this.setOptions(a), !this.options.queryFn)) {
        const E = this.observers.find((S) => S.options.queryFn);
        E && this.setOptions(E.options);
      }
      const s = new AbortController(),
        r = (E) => {
          Object.defineProperty(E, "signal", {
            enumerable: !0,
            get: () => ((this.#c = !0), s.signal),
          });
        },
        h = () => {
          const E = Ay(this.options, c),
            g = (() => {
              const z = {
                client: this.#a,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (r(z), z);
            })();
          return (
            (this.#c = !1),
            this.options.persister ? this.options.persister(E, g, this) : E(g)
          );
        },
        p = (() => {
          const E = {
            fetchOptions: c,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#a,
            state: this.state,
            fetchFn: h,
          };
          return (r(E), E);
        })();
      (this.options.behavior?.onFetch(p, this),
        (this.#e = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== p.fetchOptions?.meta) &&
          this.#u({ type: "fetch", meta: p.fetchOptions?.meta }),
        (this.#n = Dy({
          initialPromise: c?.initialPromise,
          fn: p.fetchFn,
          onCancel: (E) => {
            (E instanceof Ss &&
              E.revert &&
              this.setState({ ...this.#e, fetchStatus: "idle" }),
              s.abort());
          },
          onFail: (E, S) => {
            this.#u({ type: "failed", failureCount: E, error: S });
          },
          onPause: () => {
            this.#u({ type: "pause" });
          },
          onContinue: () => {
            this.#u({ type: "continue" });
          },
          retry: p.options.retry,
          retryDelay: p.options.retryDelay,
          networkMode: p.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const E = await this.#n.start();
        if (E === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(E),
          this.#l.config.onSuccess?.(E, this),
          this.#l.config.onSettled?.(E, this.state.error, this),
          E
        );
      } catch (E) {
        if (E instanceof Ss) {
          if (E.silent) return this.#n.promise;
          if (E.revert) {
            if (this.state.data === void 0) throw E;
            return this.state.data;
          }
        }
        throw (
          this.#u({ type: "error", error: E }),
          this.#l.config.onError?.(E, this),
          this.#l.config.onSettled?.(this.state.data, E, this),
          E
        );
      } finally {
        this.scheduleGc();
      }
    }
    #u(a) {
      const c = (s) => {
        switch (a.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: a.failureCount,
              fetchFailureReason: a.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...Uy(s.data, this.options),
              fetchMeta: a.meta ?? null,
            };
          case "success":
            const r = {
              ...s,
              ...ny(a.data, a.dataUpdatedAt),
              dataUpdateCount: s.dataUpdateCount + 1,
              ...(!a.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#e = a.manual ? r : void 0), r);
          case "error":
            const h = a.error;
            return {
              ...s,
              error: h,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: h,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...a.state };
        }
      };
      ((this.state = c(this.state)),
        Bt.batch(() => {
          (this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#l.notify({ query: this, type: "updated", action: a }));
        }));
    }
  };
function Uy(a, c) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Cy(c.networkMode) ? "fetching" : "paused",
    ...(a === void 0 && { error: null, status: "pending" }),
  };
}
function ny(a, c) {
  return {
    data: a,
    dataUpdatedAt: c ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function ay(a) {
  const c =
      typeof a.initialData == "function" ? a.initialData() : a.initialData,
    s = c !== void 0,
    r = s
      ? typeof a.initialDataUpdatedAt == "function"
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: c,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var F0 = class extends Fn {
  constructor(a, c) {
    (super(),
      (this.options = c),
      (this.#t = a),
      (this.#u = null),
      (this.#c = ps()),
      this.bindMethods(),
      this.setOptions(c));
  }
  #t;
  #e = void 0;
  #l = void 0;
  #a = void 0;
  #n;
  #i;
  #c;
  #u;
  #v;
  #h;
  #d;
  #s;
  #r;
  #f;
  #y = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#e.addObserver(this),
      uy(this.#e, this.options) ? this.#o() : this.updateResult(),
      this.#S());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return bs(this.#e, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return bs(this.#e, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#E(),
      this.#e.removeObserver(this));
  }
  setOptions(a) {
    const c = this.options,
      s = this.#e;
    if (
      ((this.options = this.#t.defaultQueryOptions(a)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof De(this.options.enabled, this.#e) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    (this.#_(),
      this.#e.setOptions(this.options),
      c._defaulted &&
        !Ei(this.options, c) &&
        this.#t
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#e,
            observer: this,
          }));
    const r = this.hasListeners();
    (r && iy(this.#e, s, this.options, c) && this.#o(),
      this.updateResult(),
      r &&
        (this.#e !== s ||
          De(this.options.enabled, this.#e) !== De(c.enabled, this.#e) ||
          Hl(this.options.staleTime, this.#e) !== Hl(c.staleTime, this.#e)) &&
        this.#m());
    const h = this.#g();
    r &&
      (this.#e !== s ||
        De(this.options.enabled, this.#e) !== De(c.enabled, this.#e) ||
        h !== this.#f) &&
      this.#p(h);
  }
  getOptimisticResult(a) {
    const c = this.#t.getQueryCache().build(this.#t, a),
      s = this.createResult(c, a);
    return (
      W0(this, s) &&
        ((this.#a = s), (this.#i = this.options), (this.#n = this.#e.state)),
      s
    );
  }
  getCurrentResult() {
    return this.#a;
  }
  trackResult(a, c) {
    return new Proxy(a, {
      get: (s, r) => (
        this.trackProp(r),
        c?.(r),
        r === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#c.status === "pending" &&
            this.#c.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            )),
        Reflect.get(s, r)
      ),
    });
  }
  trackProp(a) {
    this.#y.add(a);
  }
  getCurrentQuery() {
    return this.#e;
  }
  refetch({ ...a } = {}) {
    return this.fetch({ ...a });
  }
  fetchOptimistic(a) {
    const c = this.#t.defaultQueryOptions(a),
      s = this.#t.getQueryCache().build(this.#t, c);
    return s.fetch().then(() => this.createResult(s, c));
  }
  fetch(a) {
    return this.#o({ ...a, cancelRefetch: a.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#a),
    );
  }
  #o(a) {
    this.#_();
    let c = this.#e.fetch(this.options, a);
    return (a?.throwOnError || (c = c.catch(It)), c);
  }
  #m() {
    this.#b();
    const a = Hl(this.options.staleTime, this.#e);
    if (nn || this.#a.isStale || !vs(a)) return;
    const s = Oy(this.#a.dataUpdatedAt, a) + 1;
    this.#s = ln.setTimeout(() => {
      this.#a.isStale || this.updateResult();
    }, s);
  }
  #g() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#e)
        : this.options.refetchInterval) ?? !1
    );
  }
  #p(a) {
    (this.#E(),
      (this.#f = a),
      !(
        nn ||
        De(this.options.enabled, this.#e) === !1 ||
        !vs(this.#f) ||
        this.#f === 0
      ) &&
        (this.#r = ln.setInterval(() => {
          (this.options.refetchIntervalInBackground || Us.isFocused()) &&
            this.#o();
        }, this.#f)));
  }
  #S() {
    (this.#m(), this.#p(this.#g()));
  }
  #b() {
    this.#s && (ln.clearTimeout(this.#s), (this.#s = void 0));
  }
  #E() {
    this.#r && (ln.clearInterval(this.#r), (this.#r = void 0));
  }
  createResult(a, c) {
    const s = this.#e,
      r = this.options,
      h = this.#a,
      d = this.#n,
      p = this.#i,
      S = a !== s ? a.state : this.#l,
      { state: g } = a;
    let z = { ...g },
      R = !1,
      x;
    if (c._optimisticResults) {
      const P = this.hasListeners(),
        Qt = !P && uy(a, c),
        kt = P && iy(a, s, c, r);
      ((Qt || kt) && (z = { ...z, ...Uy(g.data, a.options) }),
        c._optimisticResults === "isRestoring" && (z.fetchStatus = "idle"));
    }
    let { error: J, errorUpdatedAt: w, status: X } = z;
    x = z.data;
    let K = !1;
    if (c.placeholderData !== void 0 && x === void 0 && X === "pending") {
      let P;
      (h?.isPlaceholderData && c.placeholderData === p?.placeholderData
        ? ((P = h.data), (K = !0))
        : (P =
            typeof c.placeholderData == "function"
              ? c.placeholderData(this.#d?.state.data, this.#d)
              : c.placeholderData),
        P !== void 0 && ((X = "success"), (x = gs(h?.data, P, c)), (R = !0)));
    }
    if (c.select && x !== void 0 && !K)
      if (h && x === d?.data && c.select === this.#v) x = this.#h;
      else
        try {
          ((this.#v = c.select),
            (x = c.select(x)),
            (x = gs(h?.data, x, c)),
            (this.#h = x),
            (this.#u = null));
        } catch (P) {
          this.#u = P;
        }
    this.#u && ((J = this.#u), (x = this.#h), (w = Date.now()), (X = "error"));
    const W = z.fetchStatus === "fetching",
      ct = X === "pending",
      G = X === "error",
      F = ct && W,
      $ = x !== void 0,
      Y = {
        status: X,
        fetchStatus: z.fetchStatus,
        isPending: ct,
        isSuccess: X === "success",
        isError: G,
        isInitialLoading: F,
        isLoading: F,
        data: x,
        dataUpdatedAt: z.dataUpdatedAt,
        error: J,
        errorUpdatedAt: w,
        failureCount: z.fetchFailureCount,
        failureReason: z.fetchFailureReason,
        errorUpdateCount: z.errorUpdateCount,
        isFetched: z.dataUpdateCount > 0 || z.errorUpdateCount > 0,
        isFetchedAfterMount:
          z.dataUpdateCount > S.dataUpdateCount ||
          z.errorUpdateCount > S.errorUpdateCount,
        isFetching: W,
        isRefetching: W && !ct,
        isLoadingError: G && !$,
        isPaused: z.fetchStatus === "paused",
        isPlaceholderData: R,
        isRefetchError: G && $,
        isStale: Ns(a, c),
        refetch: this.refetch,
        promise: this.#c,
        isEnabled: De(c.enabled, a) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const P = (wt) => {
          Y.status === "error"
            ? wt.reject(Y.error)
            : Y.data !== void 0 && wt.resolve(Y.data);
        },
        Qt = () => {
          const wt = (this.#c = Y.promise = ps());
          P(wt);
        },
        kt = this.#c;
      switch (kt.status) {
        case "pending":
          a.queryHash === s.queryHash && P(kt);
          break;
        case "fulfilled":
          (Y.status === "error" || Y.data !== kt.value) && Qt();
          break;
        case "rejected":
          (Y.status !== "error" || Y.error !== kt.reason) && Qt();
          break;
      }
    }
    return Y;
  }
  updateResult() {
    const a = this.#a,
      c = this.createResult(this.#e, this.options);
    if (
      ((this.#n = this.#e.state),
      (this.#i = this.options),
      this.#n.data !== void 0 && (this.#d = this.#e),
      Ei(c, a))
    )
      return;
    this.#a = c;
    const s = () => {
      if (!a) return !0;
      const { notifyOnChangeProps: r } = this.options,
        h = typeof r == "function" ? r() : r;
      if (h === "all" || (!h && !this.#y.size)) return !0;
      const d = new Set(h ?? this.#y);
      return (
        this.options.throwOnError && d.add("error"),
        Object.keys(this.#a).some((p) => {
          const E = p;
          return this.#a[E] !== a[E] && d.has(E);
        })
      );
    };
    this.#T({ listeners: s() });
  }
  #_() {
    const a = this.#t.getQueryCache().build(this.#t, this.options);
    if (a === this.#e) return;
    const c = this.#e;
    ((this.#e = a),
      (this.#l = a.state),
      this.hasListeners() && (c?.removeObserver(this), a.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#S());
  }
  #T(a) {
    Bt.batch(() => {
      (a.listeners &&
        this.listeners.forEach((c) => {
          c(this.#a);
        }),
        this.#t
          .getQueryCache()
          .notify({ query: this.#e, type: "observerResultsUpdated" }));
    });
  }
};
function k0(a, c) {
  return (
    De(c.enabled, a) !== !1 &&
    a.state.data === void 0 &&
    !(a.state.status === "error" && c.retryOnMount === !1)
  );
}
function uy(a, c) {
  return k0(a, c) || (a.state.data !== void 0 && bs(a, c, c.refetchOnMount));
}
function bs(a, c, s) {
  if (De(c.enabled, a) !== !1 && Hl(c.staleTime, a) !== "static") {
    const r = typeof s == "function" ? s(a) : s;
    return r === "always" || (r !== !1 && Ns(a, c));
  }
  return !1;
}
function iy(a, c, s, r) {
  return (
    (a !== c || De(r.enabled, a) === !1) &&
    (!s.suspense || a.state.status !== "error") &&
    Ns(a, s)
  );
}
function Ns(a, c) {
  return De(c.enabled, a) !== !1 && a.isStaleByTime(Hl(c.staleTime, a));
}
function W0(a, c) {
  return !Ei(a.getCurrentResult(), c);
}
function cy(a) {
  return {
    onFetch: (c, s) => {
      const r = c.options,
        h = c.fetchOptions?.meta?.fetchMore?.direction,
        d = c.state.data?.pages || [],
        p = c.state.data?.pageParams || [];
      let E = { pages: [], pageParams: [] },
        S = 0;
      const g = async () => {
        let z = !1;
        const R = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => (
                c.signal.aborted
                  ? (z = !0)
                  : c.signal.addEventListener("abort", () => {
                      z = !0;
                    }),
                c.signal
              ),
            });
          },
          x = Ay(c.options, c.fetchOptions),
          J = async (w, X, K) => {
            if (z) return Promise.reject();
            if (X == null && w.pages.length) return Promise.resolve(w);
            const ct = (() => {
                const ot = {
                  client: c.client,
                  queryKey: c.queryKey,
                  pageParam: X,
                  direction: K ? "backward" : "forward",
                  meta: c.options.meta,
                };
                return (R(ot), ot);
              })(),
              G = await x(ct),
              { maxPages: F } = c.options,
              $ = K ? w0 : G0;
            return {
              pages: $(w.pages, G, F),
              pageParams: $(w.pageParams, X, F),
            };
          };
        if (h && d.length) {
          const w = h === "backward",
            X = w ? $0 : fy,
            K = { pages: d, pageParams: p },
            W = X(r, K);
          E = await J(K, W, w);
        } else {
          const w = a ?? d.length;
          do {
            const X = S === 0 ? (p[0] ?? r.initialPageParam) : fy(r, E);
            if (S > 0 && X == null) break;
            ((E = await J(E, X)), S++);
          } while (S < w);
        }
        return E;
      };
      c.options.persister
        ? (c.fetchFn = () =>
            c.options.persister?.(
              g,
              {
                client: c.client,
                queryKey: c.queryKey,
                meta: c.options.meta,
                signal: c.signal,
              },
              s,
            ))
        : (c.fetchFn = g);
    },
  };
}
function fy(a, { pages: c, pageParams: s }) {
  const r = c.length - 1;
  return c.length > 0 ? a.getNextPageParam(c[r], c, s[r], s) : void 0;
}
function $0(a, { pages: c, pageParams: s }) {
  return c.length > 0 ? a.getPreviousPageParam?.(c[0], c, s[0], s) : void 0;
}
var I0 = class extends Ry {
  #t;
  #e;
  #l;
  #a;
  constructor(a) {
    (super(),
      (this.#t = a.client),
      (this.mutationId = a.mutationId),
      (this.#l = a.mutationCache),
      (this.#e = []),
      (this.state = a.state || Ny()),
      this.setOptions(a.options),
      this.scheduleGc());
  }
  setOptions(a) {
    ((this.options = a), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(a) {
    this.#e.includes(a) ||
      (this.#e.push(a),
      this.clearGcTimeout(),
      this.#l.notify({ type: "observerAdded", mutation: this, observer: a }));
  }
  removeObserver(a) {
    ((this.#e = this.#e.filter((c) => c !== a)),
      this.scheduleGc(),
      this.#l.notify({ type: "observerRemoved", mutation: this, observer: a }));
  }
  optionalRemove() {
    this.#e.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#l.remove(this));
  }
  continue() {
    return this.#a?.continue() ?? this.execute(this.state.variables);
  }
  async execute(a) {
    const c = () => {
        this.#n({ type: "continue" });
      },
      s = {
        client: this.#t,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#a = Dy({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(a, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (d, p) => {
        this.#n({ type: "failed", failureCount: d, error: p });
      },
      onPause: () => {
        this.#n({ type: "pause" });
      },
      onContinue: c,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#l.canRun(this),
    });
    const r = this.state.status === "pending",
      h = !this.#a.canStart();
    try {
      if (r) c();
      else {
        (this.#n({ type: "pending", variables: a, isPaused: h }),
          await this.#l.config.onMutate?.(a, this, s));
        const p = await this.options.onMutate?.(a, s);
        p !== this.state.context &&
          this.#n({ type: "pending", context: p, variables: a, isPaused: h });
      }
      const d = await this.#a.start();
      return (
        await this.#l.config.onSuccess?.(d, a, this.state.context, this, s),
        await this.options.onSuccess?.(d, a, this.state.context, s),
        await this.#l.config.onSettled?.(
          d,
          null,
          this.state.variables,
          this.state.context,
          this,
          s,
        ),
        await this.options.onSettled?.(d, null, a, this.state.context, s),
        this.#n({ type: "success", data: d }),
        d
      );
    } catch (d) {
      try {
        throw (
          await this.#l.config.onError?.(d, a, this.state.context, this, s),
          await this.options.onError?.(d, a, this.state.context, s),
          await this.#l.config.onSettled?.(
            void 0,
            d,
            this.state.variables,
            this.state.context,
            this,
            s,
          ),
          await this.options.onSettled?.(void 0, d, a, this.state.context, s),
          d
        );
      } finally {
        this.#n({ type: "error", error: d });
      }
    } finally {
      this.#l.runNext(this);
    }
  }
  #n(a) {
    const c = (s) => {
      switch (a.type) {
        case "failed":
          return { ...s, failureCount: a.failureCount, failureReason: a.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: a.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: a.isPaused,
            status: "pending",
            variables: a.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: a.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: a.error,
            failureCount: s.failureCount + 1,
            failureReason: a.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = c(this.state)),
      Bt.batch(() => {
        (this.#e.forEach((s) => {
          s.onMutationUpdate(a);
        }),
          this.#l.notify({ mutation: this, type: "updated", action: a }));
      }));
  }
};
function Ny() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var P0 = class extends Fn {
  constructor(a = {}) {
    (super(),
      (this.config = a),
      (this.#t = new Set()),
      (this.#e = new Map()),
      (this.#l = 0));
  }
  #t;
  #e;
  #l;
  build(a, c, s) {
    const r = new I0({
      client: a,
      mutationCache: this,
      mutationId: ++this.#l,
      options: a.defaultMutationOptions(c),
      state: s,
    });
    return (this.add(r), r);
  }
  add(a) {
    this.#t.add(a);
    const c = vi(a);
    if (typeof c == "string") {
      const s = this.#e.get(c);
      s ? s.push(a) : this.#e.set(c, [a]);
    }
    this.notify({ type: "added", mutation: a });
  }
  remove(a) {
    if (this.#t.delete(a)) {
      const c = vi(a);
      if (typeof c == "string") {
        const s = this.#e.get(c);
        if (s)
          if (s.length > 1) {
            const r = s.indexOf(a);
            r !== -1 && s.splice(r, 1);
          } else s[0] === a && this.#e.delete(c);
      }
    }
    this.notify({ type: "removed", mutation: a });
  }
  canRun(a) {
    const c = vi(a);
    if (typeof c == "string") {
      const r = this.#e.get(c)?.find((h) => h.state.status === "pending");
      return !r || r === a;
    } else return !0;
  }
  runNext(a) {
    const c = vi(a);
    return typeof c == "string"
      ? (this.#e
          .get(c)
          ?.find((r) => r !== a && r.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    Bt.batch(() => {
      (this.#t.forEach((a) => {
        this.notify({ type: "removed", mutation: a });
      }),
        this.#t.clear(),
        this.#e.clear());
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(a) {
    const c = { exact: !0, ...a };
    return this.getAll().find((s) => ty(c, s));
  }
  findAll(a = {}) {
    return this.getAll().filter((c) => ty(a, c));
  }
  notify(a) {
    Bt.batch(() => {
      this.listeners.forEach((c) => {
        c(a);
      });
    });
  }
  resumePausedMutations() {
    const a = this.getAll().filter((c) => c.state.isPaused);
    return Bt.batch(() => Promise.all(a.map((c) => c.continue().catch(It))));
  }
};
function vi(a) {
  return a.options.scope?.id;
}
var tg = class extends Fn {
    #t;
    #e = void 0;
    #l;
    #a;
    constructor(c, s) {
      (super(),
        (this.#t = c),
        this.setOptions(s),
        this.bindMethods(),
        this.#n());
    }
    bindMethods() {
      ((this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this)));
    }
    setOptions(c) {
      const s = this.options;
      ((this.options = this.#t.defaultMutationOptions(c)),
        Ei(this.options, s) ||
          this.#t
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#l,
              observer: this,
            }),
        s?.mutationKey &&
        this.options.mutationKey &&
        an(s.mutationKey) !== an(this.options.mutationKey)
          ? this.reset()
          : this.#l?.state.status === "pending" &&
            this.#l.setOptions(this.options));
    }
    onUnsubscribe() {
      this.hasListeners() || this.#l?.removeObserver(this);
    }
    onMutationUpdate(c) {
      (this.#n(), this.#i(c));
    }
    getCurrentResult() {
      return this.#e;
    }
    reset() {
      (this.#l?.removeObserver(this), (this.#l = void 0), this.#n(), this.#i());
    }
    mutate(c, s) {
      return (
        (this.#a = s),
        this.#l?.removeObserver(this),
        (this.#l = this.#t.getMutationCache().build(this.#t, this.options)),
        this.#l.addObserver(this),
        this.#l.execute(c)
      );
    }
    #n() {
      const c = this.#l?.state ?? Ny();
      this.#e = {
        ...c,
        isPending: c.status === "pending",
        isSuccess: c.status === "success",
        isError: c.status === "error",
        isIdle: c.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #i(c) {
      Bt.batch(() => {
        if (this.#a && this.hasListeners()) {
          const s = this.#e.variables,
            r = this.#e.context,
            h = {
              client: this.#t,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          c?.type === "success"
            ? (this.#a.onSuccess?.(c.data, s, r, h),
              this.#a.onSettled?.(c.data, null, s, r, h))
            : c?.type === "error" &&
              (this.#a.onError?.(c.error, s, r, h),
              this.#a.onSettled?.(void 0, c.error, s, r, h));
        }
        this.listeners.forEach((s) => {
          s(this.#e);
        });
      });
    }
  },
  eg = class extends Fn {
    constructor(a = {}) {
      (super(), (this.config = a), (this.#t = new Map()));
    }
    #t;
    build(a, c, s) {
      const r = c.queryKey,
        h = c.queryHash ?? Ds(r, c);
      let d = this.get(h);
      return (
        d ||
          ((d = new J0({
            client: a,
            queryKey: r,
            queryHash: h,
            options: a.defaultQueryOptions(c),
            state: s,
            defaultOptions: a.getQueryDefaults(r),
          })),
          this.add(d)),
        d
      );
    }
    add(a) {
      this.#t.has(a.queryHash) ||
        (this.#t.set(a.queryHash, a), this.notify({ type: "added", query: a }));
    }
    remove(a) {
      const c = this.#t.get(a.queryHash);
      c &&
        (a.destroy(),
        c === a && this.#t.delete(a.queryHash),
        this.notify({ type: "removed", query: a }));
    }
    clear() {
      Bt.batch(() => {
        this.getAll().forEach((a) => {
          this.remove(a);
        });
      });
    }
    get(a) {
      return this.#t.get(a);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(a) {
      const c = { exact: !0, ...a };
      return this.getAll().find((s) => Pd(c, s));
    }
    findAll(a = {}) {
      const c = this.getAll();
      return Object.keys(a).length > 0 ? c.filter((s) => Pd(a, s)) : c;
    }
    notify(a) {
      Bt.batch(() => {
        this.listeners.forEach((c) => {
          c(a);
        });
      });
    }
    onFocus() {
      Bt.batch(() => {
        this.getAll().forEach((a) => {
          a.onFocus();
        });
      });
    }
    onOnline() {
      Bt.batch(() => {
        this.getAll().forEach((a) => {
          a.onOnline();
        });
      });
    }
  },
  lg = class {
    #t;
    #e;
    #l;
    #a;
    #n;
    #i;
    #c;
    #u;
    constructor(a = {}) {
      ((this.#t = a.queryCache || new eg()),
        (this.#e = a.mutationCache || new P0()),
        (this.#l = a.defaultOptions || {}),
        (this.#a = new Map()),
        (this.#n = new Map()),
        (this.#i = 0));
    }
    mount() {
      (this.#i++,
        this.#i === 1 &&
          ((this.#c = Us.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#u = _i.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#t.onOnline());
          }))));
    }
    unmount() {
      (this.#i--,
        this.#i === 0 &&
          (this.#c?.(), (this.#c = void 0), this.#u?.(), (this.#u = void 0)));
    }
    isFetching(a) {
      return this.#t.findAll({ ...a, fetchStatus: "fetching" }).length;
    }
    isMutating(a) {
      return this.#e.findAll({ ...a, status: "pending" }).length;
    }
    getQueryData(a) {
      const c = this.defaultQueryOptions({ queryKey: a });
      return this.#t.get(c.queryHash)?.state.data;
    }
    ensureQueryData(a) {
      const c = this.defaultQueryOptions(a),
        s = this.#t.build(this, c),
        r = s.state.data;
      return r === void 0
        ? this.fetchQuery(a)
        : (a.revalidateIfStale &&
            s.isStaleByTime(Hl(c.staleTime, s)) &&
            this.prefetchQuery(c),
          Promise.resolve(r));
    }
    getQueriesData(a) {
      return this.#t.findAll(a).map(({ queryKey: c, state: s }) => {
        const r = s.data;
        return [c, r];
      });
    }
    setQueryData(a, c, s) {
      const r = this.defaultQueryOptions({ queryKey: a }),
        d = this.#t.get(r.queryHash)?.state.data,
        p = B0(c, d);
      if (p !== void 0)
        return this.#t.build(this, r).setData(p, { ...s, manual: !0 });
    }
    setQueriesData(a, c, s) {
      return Bt.batch(() =>
        this.#t
          .findAll(a)
          .map(({ queryKey: r }) => [r, this.setQueryData(r, c, s)]),
      );
    }
    getQueryState(a) {
      const c = this.defaultQueryOptions({ queryKey: a });
      return this.#t.get(c.queryHash)?.state;
    }
    removeQueries(a) {
      const c = this.#t;
      Bt.batch(() => {
        c.findAll(a).forEach((s) => {
          c.remove(s);
        });
      });
    }
    resetQueries(a, c) {
      const s = this.#t;
      return Bt.batch(
        () => (
          s.findAll(a).forEach((r) => {
            r.reset();
          }),
          this.refetchQueries({ type: "active", ...a }, c)
        ),
      );
    }
    cancelQueries(a, c = {}) {
      const s = { revert: !0, ...c },
        r = Bt.batch(() => this.#t.findAll(a).map((h) => h.cancel(s)));
      return Promise.all(r).then(It).catch(It);
    }
    invalidateQueries(a, c = {}) {
      return Bt.batch(
        () => (
          this.#t.findAll(a).forEach((s) => {
            s.invalidate();
          }),
          a?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...a, type: a?.refetchType ?? a?.type ?? "active" },
                c,
              )
        ),
      );
    }
    refetchQueries(a, c = {}) {
      const s = { ...c, cancelRefetch: c.cancelRefetch ?? !0 },
        r = Bt.batch(() =>
          this.#t
            .findAll(a)
            .filter((h) => !h.isDisabled() && !h.isStatic())
            .map((h) => {
              let d = h.fetch(void 0, s);
              return (
                s.throwOnError || (d = d.catch(It)),
                h.state.fetchStatus === "paused" ? Promise.resolve() : d
              );
            }),
        );
      return Promise.all(r).then(It);
    }
    fetchQuery(a) {
      const c = this.defaultQueryOptions(a);
      c.retry === void 0 && (c.retry = !1);
      const s = this.#t.build(this, c);
      return s.isStaleByTime(Hl(c.staleTime, s))
        ? s.fetch(c)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(a) {
      return this.fetchQuery(a).then(It).catch(It);
    }
    fetchInfiniteQuery(a) {
      return ((a.behavior = cy(a.pages)), this.fetchQuery(a));
    }
    prefetchInfiniteQuery(a) {
      return this.fetchInfiniteQuery(a).then(It).catch(It);
    }
    ensureInfiniteQueryData(a) {
      return ((a.behavior = cy(a.pages)), this.ensureQueryData(a));
    }
    resumePausedMutations() {
      return _i.isOnline()
        ? this.#e.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#e;
    }
    getDefaultOptions() {
      return this.#l;
    }
    setDefaultOptions(a) {
      this.#l = a;
    }
    setQueryDefaults(a, c) {
      this.#a.set(an(a), { queryKey: a, defaultOptions: c });
    }
    getQueryDefaults(a) {
      const c = [...this.#a.values()],
        s = {};
      return (
        c.forEach((r) => {
          Va(a, r.queryKey) && Object.assign(s, r.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(a, c) {
      this.#n.set(an(a), { mutationKey: a, defaultOptions: c });
    }
    getMutationDefaults(a) {
      const c = [...this.#n.values()],
        s = {};
      return (
        c.forEach((r) => {
          Va(a, r.mutationKey) && Object.assign(s, r.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(a) {
      if (a._defaulted) return a;
      const c = {
        ...this.#l.queries,
        ...this.getQueryDefaults(a.queryKey),
        ...a,
        _defaulted: !0,
      };
      return (
        c.queryHash || (c.queryHash = Ds(c.queryKey, c)),
        c.refetchOnReconnect === void 0 &&
          (c.refetchOnReconnect = c.networkMode !== "always"),
        c.throwOnError === void 0 && (c.throwOnError = !!c.suspense),
        !c.networkMode && c.persister && (c.networkMode = "offlineFirst"),
        c.queryFn === Rs && (c.enabled = !1),
        c
      );
    }
    defaultMutationOptions(a) {
      return a?._defaulted
        ? a
        : {
            ...this.#l.mutations,
            ...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
            ...a,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#t.clear(), this.#e.clear());
    }
  },
  lt = Ri(),
  xy = lt.createContext(void 0),
  Ui = (a) => {
    const c = lt.useContext(xy);
    if (!c)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return c;
  },
  ng = ({ client: a, children: c }) => (
    lt.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a],
    ),
    Z.jsx(xy.Provider, { value: a, children: c })
  ),
  Hy = lt.createContext(!1),
  ag = () => lt.useContext(Hy);
Hy.Provider;
function ug() {
  let a = !1;
  return {
    clearReset: () => {
      a = !1;
    },
    reset: () => {
      a = !0;
    },
    isReset: () => a,
  };
}
var ig = lt.createContext(ug()),
  cg = () => lt.useContext(ig),
  fg = (a, c) => {
    (a.suspense || a.throwOnError || a.experimental_prefetchInRender) &&
      (c.isReset() || (a.retryOnMount = !1));
  },
  sg = (a) => {
    lt.useEffect(() => {
      a.clearReset();
    }, [a]);
  },
  rg = ({
    result: a,
    errorResetBoundary: c,
    throwOnError: s,
    query: r,
    suspense: h,
  }) =>
    a.isError &&
    !c.isReset() &&
    !a.isFetching &&
    r &&
    ((h && a.data === void 0) || My(s, [a.error, r])),
  og = (a) => {
    if (a.suspense) {
      const s = (h) => (h === "static" ? h : Math.max(h ?? 1e3, 1e3)),
        r = a.staleTime;
      ((a.staleTime = typeof r == "function" ? (...h) => s(r(...h)) : s(r)),
        typeof a.gcTime == "number" && (a.gcTime = Math.max(a.gcTime, 1e3)));
    }
  },
  hg = (a, c) => a.isLoading && a.isFetching && !c,
  dg = (a, c) => a?.suspense && c.isPending,
  sy = (a, c, s) =>
    c.fetchOptimistic(a).catch(() => {
      s.clearReset();
    });
function yg(a, c, s) {
  const r = ag(),
    h = cg(),
    d = Ui(),
    p = d.defaultQueryOptions(a);
  (d.getDefaultOptions().queries?._experimental_beforeQuery?.(p),
    (p._optimisticResults = r ? "isRestoring" : "optimistic"),
    og(p),
    fg(p, h),
    sg(h));
  const E = !d.getQueryCache().get(p.queryHash),
    [S] = lt.useState(() => new c(d, p)),
    g = S.getOptimisticResult(p),
    z = !r && a.subscribed !== !1;
  if (
    (lt.useSyncExternalStore(
      lt.useCallback(
        (R) => {
          const x = z ? S.subscribe(Bt.batchCalls(R)) : It;
          return (S.updateResult(), x);
        },
        [S, z],
      ),
      () => S.getCurrentResult(),
      () => S.getCurrentResult(),
    ),
    lt.useEffect(() => {
      S.setOptions(p);
    }, [p, S]),
    dg(p, g))
  )
    throw sy(p, S, h);
  if (
    rg({
      result: g,
      errorResetBoundary: h,
      throwOnError: p.throwOnError,
      query: d.getQueryCache().get(p.queryHash),
      suspense: p.suspense,
    })
  )
    throw g.error;
  return (
    d.getDefaultOptions().queries?._experimental_afterQuery?.(p, g),
    p.experimental_prefetchInRender &&
      !nn &&
      hg(g, r) &&
      (E ? sy(p, S, h) : d.getQueryCache().get(p.queryHash)?.promise)
        ?.catch(It)
        .finally(() => {
          S.updateResult();
        }),
    p.notifyOnChangeProps ? g : S.trackResult(g)
  );
}
function vg(a, c) {
  return yg(a, F0);
}
function Ti(a, c) {
  const s = Ui(),
    [r] = lt.useState(() => new tg(s, a));
  lt.useEffect(() => {
    r.setOptions(a);
  }, [r, a]);
  const h = lt.useSyncExternalStore(
      lt.useCallback((p) => r.subscribe(Bt.batchCalls(p)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    d = lt.useCallback(
      (p, E) => {
        r.mutate(p, E).catch(It);
      },
      [r],
    );
  if (h.error && My(r.options.throwOnError, [h.error])) throw h.error;
  return { ...h, mutate: d, mutateAsync: h.mutate };
}
var ss = { exports: {} },
  rs = {};
var ry;
function mg() {
  if (ry) return rs;
  ry = 1;
  var a = Ri();
  function c(S, g) {
    return (S === g && (S !== 0 || 1 / S === 1 / g)) || (S !== S && g !== g);
  }
  var s = typeof Object.is == "function" ? Object.is : c,
    r = a.useSyncExternalStore,
    h = a.useRef,
    d = a.useEffect,
    p = a.useMemo,
    E = a.useDebugValue;
  return (
    (rs.useSyncExternalStoreWithSelector = function (S, g, z, R, x) {
      var J = h(null);
      if (J.current === null) {
        var w = { hasValue: !1, value: null };
        J.current = w;
      } else w = J.current;
      J = p(
        function () {
          function K($) {
            if (!W) {
              if (
                ((W = !0), (ct = $), ($ = R($)), x !== void 0 && w.hasValue)
              ) {
                var ot = w.value;
                if (x(ot, $)) return (G = ot);
              }
              return (G = $);
            }
            if (((ot = G), s(ct, $))) return ot;
            var Y = R($);
            return x !== void 0 && x(ot, Y)
              ? ((ct = $), ot)
              : ((ct = $), (G = Y));
          }
          var W = !1,
            ct,
            G,
            F = z === void 0 ? null : z;
          return [
            function () {
              return K(g());
            },
            F === null
              ? void 0
              : function () {
                  return K(F());
                },
          ];
        },
        [g, z, R, x],
      );
      var X = r(S, J[0], J[1]);
      return (
        d(
          function () {
            ((w.hasValue = !0), (w.value = X));
          },
          [X],
        ),
        E(X),
        X
      );
    }),
    rs
  );
}
var oy;
function gg() {
  return (oy || ((oy = 1), (ss.exports = mg())), ss.exports);
}
var pg = gg();
function Sg(a) {
  a();
}
function bg() {
  let a = null,
    c = null;
  return {
    clear() {
      ((a = null), (c = null));
    },
    notify() {
      Sg(() => {
        let s = a;
        for (; s; ) (s.callback(), (s = s.next));
      });
    },
    get() {
      const s = [];
      let r = a;
      for (; r; ) (s.push(r), (r = r.next));
      return s;
    },
    subscribe(s) {
      let r = !0;
      const h = (c = { callback: s, next: null, prev: c });
      return (
        h.prev ? (h.prev.next = h) : (a = h),
        function () {
          !r ||
            a === null ||
            ((r = !1),
            h.next ? (h.next.prev = h.prev) : (c = h.prev),
            h.prev ? (h.prev.next = h.next) : (a = h.next));
        }
      );
    },
  };
}
var hy = { notify() {}, get: () => [] };
function Eg(a, c) {
  let s,
    r = hy,
    h = 0,
    d = !1;
  function p(X) {
    z();
    const K = r.subscribe(X);
    let W = !1;
    return () => {
      W || ((W = !0), K(), R());
    };
  }
  function E() {
    r.notify();
  }
  function S() {
    w.onStateChange && w.onStateChange();
  }
  function g() {
    return d;
  }
  function z() {
    (h++, s || ((s = a.subscribe(S)), (r = bg())));
  }
  function R() {
    (h--, s && h === 0 && (s(), (s = void 0), r.clear(), (r = hy)));
  }
  function x() {
    d || ((d = !0), z());
  }
  function J() {
    d && ((d = !1), R());
  }
  const w = {
    addNestedSub: p,
    notifyNestedSubs: E,
    handleChangeWrapper: S,
    isSubscribed: g,
    trySubscribe: x,
    tryUnsubscribe: J,
    getListeners: () => r,
  };
  return w;
}
var _g = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Tg = _g(),
  Og = () => typeof navigator < "u" && navigator.product === "ReactNative",
  zg = Og(),
  Ag = () => (Tg || zg ? lt.useLayoutEffect : lt.useEffect),
  Mg = Ag(),
  Cg = Symbol.for("react-redux-context"),
  Dg = typeof globalThis < "u" ? globalThis : {};
function Rg() {
  if (!lt.createContext) return {};
  const a = (Dg[Cg] ??= new Map());
  let c = a.get(lt.createContext);
  return (c || ((c = lt.createContext(null)), a.set(lt.createContext, c)), c);
}
var jl = Rg();
function Ug(a) {
  const { children: c, context: s, serverState: r, store: h } = a,
    d = lt.useMemo(() => {
      const S = Eg(h);
      return {
        store: h,
        subscription: S,
        getServerState: r ? () => r : void 0,
      };
    }, [h, r]),
    p = lt.useMemo(() => h.getState(), [h]);
  Mg(() => {
    const { subscription: S } = d;
    return (
      (S.onStateChange = S.notifyNestedSubs),
      S.trySubscribe(),
      p !== h.getState() && S.notifyNestedSubs(),
      () => {
        (S.tryUnsubscribe(), (S.onStateChange = void 0));
      }
    );
  }, [d, p]);
  const E = s || jl;
  return lt.createElement(E.Provider, { value: d }, c);
}
var Ng = Ug;
function xs(a = jl) {
  return function () {
    return lt.useContext(a);
  };
}
var jy = xs();
function qy(a = jl) {
  const c = a === jl ? jy : xs(a),
    s = () => {
      const { store: r } = c();
      return r;
    };
  return (Object.assign(s, { withTypes: () => s }), s);
}
var xg = qy();
function Hg(a = jl) {
  const c = a === jl ? xg : qy(a),
    s = () => c().dispatch;
  return (Object.assign(s, { withTypes: () => s }), s);
}
var Hs = Hg(),
  jg = (a, c) => a === c;
function qg(a = jl) {
  const c = a === jl ? jy : xs(a),
    s = (r, h = {}) => {
      const { equalityFn: d = jg } =
          typeof h == "function" ? { equalityFn: h } : h,
        p = c(),
        { store: E, subscription: S, getServerState: g } = p;
      lt.useRef(!0);
      const z = lt.useCallback(
          {
            [r.name](x) {
              return r(x);
            },
          }[r.name],
          [r],
        ),
        R = pg.useSyncExternalStoreWithSelector(
          S.addNestedSub,
          E.getState,
          g || E.getState,
          z,
          d,
        );
      return (lt.useDebugValue(R), R);
    };
  return (Object.assign(s, { withTypes: () => s }), s);
}
var Bg = qg();
const Qg = async (a, c) => {
    const s = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: a, password: c }),
      }),
      r = await s.json();
    if (!s.ok) throw { ...r };
    return r;
  },
  Yg = async () => {
    const a = await fetch("/api/blogs"),
      c = await a.json();
    if (!a.ok) throw { ...c };
    return c;
  },
  Gg = async (a, c) => {
    const s = await fetch(`/api/blogs/${a}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${c}` },
      }),
      r = await s.json();
    if (!s.ok) throw { ...r };
    return r;
  },
  wg = async (a, c, s) => {
    const r = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${s}`,
        },
        body: JSON.stringify({
          author: a.author,
          title: a.title,
          url: a.url,
          user: c,
        }),
      }),
      h = await r.json();
    if (!r.ok) throw { ...h };
    return h;
  },
  Xg = async (a, c) => {
    const s = await fetch(`/api/blogs/${a.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${c}`,
        },
        body: JSON.stringify(a),
      }),
      r = await s.json();
    if (!s.ok) throw { ...r };
    return r;
  };
function Jt(a) {
  return `Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
}
var Lg = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  dy = Lg,
  os = () => Math.random().toString(36).substring(7).split("").join("."),
  Zg = {
    INIT: `@@redux/INIT${os()}`,
    REPLACE: `@@redux/REPLACE${os()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${os()}`,
  },
  Oi = Zg;
function js(a) {
  if (typeof a != "object" || a === null) return !1;
  let c = a;
  for (; Object.getPrototypeOf(c) !== null; ) c = Object.getPrototypeOf(c);
  return Object.getPrototypeOf(a) === c || Object.getPrototypeOf(a) === null;
}
function By(a, c, s) {
  if (typeof a != "function") throw new Error(Jt(2));
  if (
    (typeof c == "function" && typeof s == "function") ||
    (typeof s == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Jt(0));
  if (
    (typeof c == "function" && typeof s > "u" && ((s = c), (c = void 0)),
    typeof s < "u")
  ) {
    if (typeof s != "function") throw new Error(Jt(1));
    return s(By)(a, c);
  }
  let r = a,
    h = c,
    d = new Map(),
    p = d,
    E = 0,
    S = !1;
  function g() {
    p === d &&
      ((p = new Map()),
      d.forEach((K, W) => {
        p.set(W, K);
      }));
  }
  function z() {
    if (S) throw new Error(Jt(3));
    return h;
  }
  function R(K) {
    if (typeof K != "function") throw new Error(Jt(4));
    if (S) throw new Error(Jt(5));
    let W = !0;
    g();
    const ct = E++;
    return (
      p.set(ct, K),
      function () {
        if (W) {
          if (S) throw new Error(Jt(6));
          ((W = !1), g(), p.delete(ct), (d = null));
        }
      }
    );
  }
  function x(K) {
    if (!js(K)) throw new Error(Jt(7));
    if (typeof K.type > "u") throw new Error(Jt(8));
    if (typeof K.type != "string") throw new Error(Jt(17));
    if (S) throw new Error(Jt(9));
    try {
      ((S = !0), (h = r(h, K)));
    } finally {
      S = !1;
    }
    return (
      (d = p).forEach((ct) => {
        ct();
      }),
      K
    );
  }
  function J(K) {
    if (typeof K != "function") throw new Error(Jt(10));
    ((r = K), x({ type: Oi.REPLACE }));
  }
  function w() {
    const K = R;
    return {
      subscribe(W) {
        if (typeof W != "object" || W === null) throw new Error(Jt(11));
        function ct() {
          const F = W;
          F.next && F.next(z());
        }
        return (ct(), { unsubscribe: K(ct) });
      },
      [dy]() {
        return this;
      },
    };
  }
  return (
    x({ type: Oi.INIT }),
    { dispatch: x, subscribe: R, getState: z, replaceReducer: J, [dy]: w }
  );
}
function Vg(a) {
  Object.keys(a).forEach((c) => {
    const s = a[c];
    if (typeof s(void 0, { type: Oi.INIT }) > "u") throw new Error(Jt(12));
    if (typeof s(void 0, { type: Oi.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Jt(13));
  });
}
function Kg(a) {
  const c = Object.keys(a),
    s = {};
  for (let d = 0; d < c.length; d++) {
    const p = c[d];
    typeof a[p] == "function" && (s[p] = a[p]);
  }
  const r = Object.keys(s);
  let h;
  try {
    Vg(s);
  } catch (d) {
    h = d;
  }
  return function (p = {}, E) {
    if (h) throw h;
    let S = !1;
    const g = {};
    for (let z = 0; z < r.length; z++) {
      const R = r[z],
        x = s[R],
        J = p[R],
        w = x(J, E);
      if (typeof w > "u") throw (E && E.type, new Error(Jt(14)));
      ((g[R] = w), (S = S || w !== J));
    }
    return ((S = S || r.length !== Object.keys(p).length), S ? g : p);
  };
}
function zi(...a) {
  return a.length === 0
    ? (c) => c
    : a.length === 1
      ? a[0]
      : a.reduce(
          (c, s) =>
            (...r) =>
              c(s(...r)),
        );
}
function Jg(...a) {
  return (c) => (s, r) => {
    const h = c(s, r);
    let d = () => {
      throw new Error(Jt(15));
    };
    const p = { getState: h.getState, dispatch: (S, ...g) => d(S, ...g) },
      E = a.map((S) => S(p));
    return ((d = zi(...E)(h.dispatch)), { ...h, dispatch: d });
  };
}
function Fg(a) {
  return js(a) && "type" in a && typeof a.type == "string";
}
var Qy = Symbol.for("immer-nothing"),
  yy = Symbol.for("immer-draftable"),
  Pt = Symbol.for("immer-state");
function je(a, ...c) {
  throw new Error(
    `[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var pe = Object,
  Kn = pe.getPrototypeOf,
  Ai = "constructor",
  Ni = "prototype",
  Es = "configurable",
  Mi = "enumerable",
  Si = "writable",
  Ka = "value",
  fl = (a) => !!a && !!a[Pt];
function qe(a) {
  return a ? Yy(a) || xi(a) || !!a[yy] || !!a[Ai]?.[yy] || Hi(a) || ji(a) : !1;
}
var kg = pe[Ni][Ai].toString(),
  vy = new WeakMap();
function Yy(a) {
  if (!a || !qs(a)) return !1;
  const c = Kn(a);
  if (c === null || c === pe[Ni]) return !0;
  const s = pe.hasOwnProperty.call(c, Ai) && c[Ai];
  if (s === Object) return !0;
  if (!Zn(s)) return !1;
  let r = vy.get(s);
  return (
    r === void 0 && ((r = Function.toString.call(s)), vy.set(s, r)),
    r === kg
  );
}
function ka(a, c, s = !0) {
  Wa(a) === 0
    ? (s ? Reflect.ownKeys(a) : pe.keys(a)).forEach((h) => {
        c(h, a[h], a);
      })
    : a.forEach((r, h) => c(h, r, a));
}
function Wa(a) {
  const c = a[Pt];
  return c ? c.type_ : xi(a) ? 1 : Hi(a) ? 2 : ji(a) ? 3 : 0;
}
var my = (a, c, s = Wa(a)) =>
    s === 2 ? a.has(c) : pe[Ni].hasOwnProperty.call(a, c),
  _s = (a, c, s = Wa(a)) => (s === 2 ? a.get(c) : a[c]),
  Ci = (a, c, s, r = Wa(a)) => {
    r === 2 ? a.set(c, s) : r === 3 ? a.add(s) : (a[c] = s);
  };
function Wg(a, c) {
  return a === c ? a !== 0 || 1 / a === 1 / c : a !== a && c !== c;
}
var xi = Array.isArray,
  Hi = (a) => a instanceof Map,
  ji = (a) => a instanceof Set,
  qs = (a) => typeof a == "object",
  Zn = (a) => typeof a == "function",
  hs = (a) => typeof a == "boolean",
  il = (a) => a.copy_ || a.base_,
  Bs = (a) => (a.modified_ ? a.copy_ : a.base_);
function Ts(a, c) {
  if (Hi(a)) return new Map(a);
  if (ji(a)) return new Set(a);
  if (xi(a)) return Array[Ni].slice.call(a);
  const s = Yy(a);
  if (c === !0 || (c === "class_only" && !s)) {
    const r = pe.getOwnPropertyDescriptors(a);
    delete r[Pt];
    let h = Reflect.ownKeys(r);
    for (let d = 0; d < h.length; d++) {
      const p = h[d],
        E = r[p];
      (E[Si] === !1 && ((E[Si] = !0), (E[Es] = !0)),
        (E.get || E.set) &&
          (r[p] = { [Es]: !0, [Si]: !0, [Mi]: E[Mi], [Ka]: a[p] }));
    }
    return pe.create(Kn(a), r);
  } else {
    const r = Kn(a);
    if (r !== null && s) return { ...a };
    const h = pe.create(r);
    return pe.assign(h, a);
  }
}
function Qs(a, c = !1) {
  return (
    qi(a) ||
      fl(a) ||
      !qe(a) ||
      (Wa(a) > 1 &&
        pe.defineProperties(a, { set: mi, add: mi, clear: mi, delete: mi }),
      pe.freeze(a),
      c &&
        ka(
          a,
          (s, r) => {
            Qs(r, !0);
          },
          !1,
        )),
    a
  );
}
function $g() {
  je(2);
}
var mi = { [Ka]: $g };
function qi(a) {
  return a === null || !qs(a) ? !0 : pe.isFrozen(a);
}
var Di = "MapSet",
  Os = "Patches",
  Gy = {};
function Jn(a) {
  const c = Gy[a];
  return (c || je(0, a), c);
}
var Ig = (a) => !!Gy[a],
  Ja,
  wy = () => Ja,
  Pg = (a, c) => ({
    drafts_: [],
    parent_: a,
    immer_: c,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: Ig(Di) ? Jn(Di) : void 0,
  });
function gy(a, c) {
  c &&
    ((a.patchPlugin_ = Jn(Os)),
    (a.patches_ = []),
    (a.inversePatches_ = []),
    (a.patchListener_ = c));
}
function zs(a) {
  (As(a), a.drafts_.forEach(tp), (a.drafts_ = null));
}
function As(a) {
  a === Ja && (Ja = a.parent_);
}
var py = (a) => (Ja = Pg(Ja, a));
function tp(a) {
  const c = a[Pt];
  c.type_ === 0 || c.type_ === 1 ? c.revoke_() : (c.revoked_ = !0);
}
function Sy(a, c) {
  c.unfinalizedDrafts_ = c.drafts_.length;
  const s = c.drafts_[0];
  if (a !== void 0 && a !== s) {
    (s[Pt].modified_ && (zs(c), je(4)), qe(a) && (a = by(c, a)));
    const { patchPlugin_: h } = c;
    h && h.generateReplacementPatches_(s[Pt].base_, a, c);
  } else a = by(c, s);
  return (
    ep(c, a, !0),
    zs(c),
    c.patches_ && c.patchListener_(c.patches_, c.inversePatches_),
    a !== Qy ? a : void 0
  );
}
function by(a, c) {
  if (qi(c)) return c;
  const s = c[Pt];
  if (!s) return Ys(c, a.handledSet_, a);
  if (!Bi(s, a)) return c;
  if (!s.modified_) return s.base_;
  if (!s.finalized_) {
    const { callbacks_: r } = s;
    if (r) for (; r.length > 0; ) r.pop()(a);
    Zy(s, a);
  }
  return s.copy_;
}
function ep(a, c, s = !1) {
  !a.parent_ && a.immer_.autoFreeze_ && a.canAutoFreeze_ && Qs(c, s);
}
function Xy(a) {
  ((a.finalized_ = !0), a.scope_.unfinalizedDrafts_--);
}
var Bi = (a, c) => a.scope_ === c,
  lp = [];
function Ly(a, c, s, r) {
  const h = il(a),
    d = a.type_;
  if (r !== void 0 && _s(h, r, d) === c) {
    Ci(h, r, s, d);
    return;
  }
  if (!a.draftLocations_) {
    const E = (a.draftLocations_ = new Map());
    ka(h, (S, g) => {
      if (fl(g)) {
        const z = E.get(g) || [];
        (z.push(S), E.set(g, z));
      }
    });
  }
  const p = a.draftLocations_.get(c) ?? lp;
  for (const E of p) Ci(h, E, s, d);
}
function np(a, c, s) {
  a.callbacks_.push(function (h) {
    const d = c;
    if (!d || !Bi(d, h)) return;
    h.mapSetPlugin_?.fixSetContents(d);
    const p = Bs(d);
    (Ly(a, d.draft_ ?? d, p, s), Zy(d, h));
  });
}
function Zy(a, c) {
  if (
    a.modified_ &&
    !a.finalized_ &&
    (a.type_ === 3 || (a.assigned_?.size ?? 0) > 0)
  ) {
    const { patchPlugin_: r } = c;
    if (r) {
      const h = r.getPath(a);
      h && r.generatePatches_(a, h, c);
    }
    Xy(a);
  }
}
function ap(a, c, s) {
  const { scope_: r } = a;
  if (fl(s)) {
    const h = s[Pt];
    Bi(h, r) &&
      h.callbacks_.push(function () {
        bi(a);
        const p = Bs(h);
        Ly(a, s, p, c);
      });
  } else
    qe(s) &&
      a.callbacks_.push(function () {
        const d = il(a);
        _s(d, c, a.type_) === s &&
          r.drafts_.length > 1 &&
          (a.assigned_.get(c) ?? !1) === !0 &&
          a.copy_ &&
          Ys(_s(a.copy_, c, a.type_), r.handledSet_, r);
      });
}
function Ys(a, c, s) {
  return (
    (!s.immer_.autoFreeze_ && s.unfinalizedDrafts_ < 1) ||
      fl(a) ||
      c.has(a) ||
      !qe(a) ||
      qi(a) ||
      (c.add(a),
      ka(a, (r, h) => {
        if (fl(h)) {
          const d = h[Pt];
          if (Bi(d, s)) {
            const p = Bs(d);
            (Ci(a, r, p, a.type_), Xy(d));
          }
        } else qe(h) && Ys(h, c, s);
      })),
    a
  );
}
function up(a, c) {
  const s = xi(a),
    r = {
      type_: s ? 1 : 0,
      scope_: c ? c.scope_ : wy(),
      modified_: !1,
      finalized_: !1,
      assigned_: void 0,
      parent_: c,
      base_: a,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
      callbacks_: void 0,
    };
  let h = r,
    d = Gs;
  s && ((h = [r]), (d = Fa));
  const { revoke: p, proxy: E } = Proxy.revocable(h, d);
  return ((r.draft_ = E), (r.revoke_ = p), [E, r]);
}
var Gs = {
    get(a, c) {
      if (c === Pt) return a;
      const s = il(a);
      if (!my(s, c, a.type_)) return ip(a, s, c);
      const r = s[c];
      if (a.finalized_ || !qe(r)) return r;
      if (r === ds(a.base_, c)) {
        bi(a);
        const h = a.type_ === 1 ? +c : c,
          d = Cs(a.scope_, r, a, h);
        return (a.copy_[h] = d);
      }
      return r;
    },
    has(a, c) {
      return c in il(a);
    },
    ownKeys(a) {
      return Reflect.ownKeys(il(a));
    },
    set(a, c, s) {
      const r = Vy(il(a), c);
      if (r?.set) return (r.set.call(a.draft_, s), !0);
      if (!a.modified_) {
        const h = ds(il(a), c),
          d = h?.[Pt];
        if (d && d.base_ === s)
          return ((a.copy_[c] = s), a.assigned_.set(c, !1), !0);
        if (Wg(s, h) && (s !== void 0 || my(a.base_, c, a.type_))) return !0;
        (bi(a), Ms(a));
      }
      return (
        (a.copy_[c] === s && (s !== void 0 || c in a.copy_)) ||
          (Number.isNaN(s) && Number.isNaN(a.copy_[c])) ||
          ((a.copy_[c] = s), a.assigned_.set(c, !0), ap(a, c, s)),
        !0
      );
    },
    deleteProperty(a, c) {
      return (
        bi(a),
        ds(a.base_, c) !== void 0 || c in a.base_
          ? (a.assigned_.set(c, !1), Ms(a))
          : a.assigned_.delete(c),
        a.copy_ && delete a.copy_[c],
        !0
      );
    },
    getOwnPropertyDescriptor(a, c) {
      const s = il(a),
        r = Reflect.getOwnPropertyDescriptor(s, c);
      return (
        r && {
          [Si]: !0,
          [Es]: a.type_ !== 1 || c !== "length",
          [Mi]: r[Mi],
          [Ka]: s[c],
        }
      );
    },
    defineProperty() {
      je(11);
    },
    getPrototypeOf(a) {
      return Kn(a.base_);
    },
    setPrototypeOf() {
      je(12);
    },
  },
  Fa = {};
ka(Gs, (a, c) => {
  Fa[a] = function () {
    const s = arguments;
    return ((s[0] = s[0][0]), c.apply(this, s));
  };
});
Fa.deleteProperty = function (a, c) {
  return Fa.set.call(this, a, c, void 0);
};
Fa.set = function (a, c, s) {
  return Gs.set.call(this, a[0], c, s, a[0]);
};
function ds(a, c) {
  const s = a[Pt];
  return (s ? il(s) : a)[c];
}
function ip(a, c, s) {
  const r = Vy(c, s);
  return r ? (Ka in r ? r[Ka] : r.get?.call(a.draft_)) : void 0;
}
function Vy(a, c) {
  if (!(c in a)) return;
  let s = Kn(a);
  for (; s; ) {
    const r = Object.getOwnPropertyDescriptor(s, c);
    if (r) return r;
    s = Kn(s);
  }
}
function Ms(a) {
  a.modified_ || ((a.modified_ = !0), a.parent_ && Ms(a.parent_));
}
function bi(a) {
  a.copy_ ||
    ((a.assigned_ = new Map()),
    (a.copy_ = Ts(a.base_, a.scope_.immer_.useStrictShallowCopy_)));
}
var cp = class {
  constructor(a) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !1),
      (this.produce = (c, s, r) => {
        if (Zn(c) && !Zn(s)) {
          const d = s;
          s = c;
          const p = this;
          return function (S = d, ...g) {
            return p.produce(S, (z) => s.call(this, z, ...g));
          };
        }
        (Zn(s) || je(6), r !== void 0 && !Zn(r) && je(7));
        let h;
        if (qe(c)) {
          const d = py(this),
            p = Cs(d, c, void 0);
          let E = !0;
          try {
            ((h = s(p)), (E = !1));
          } finally {
            E ? zs(d) : As(d);
          }
          return (gy(d, r), Sy(h, d));
        } else if (!c || !qs(c)) {
          if (
            ((h = s(c)),
            h === void 0 && (h = c),
            h === Qy && (h = void 0),
            this.autoFreeze_ && Qs(h, !0),
            r)
          ) {
            const d = [],
              p = [];
            (Jn(Os).generateReplacementPatches_(c, h, {
              patches_: d,
              inversePatches_: p,
            }),
              r(d, p));
          }
          return h;
        } else je(1, c);
      }),
      (this.produceWithPatches = (c, s) => {
        if (Zn(c))
          return (p, ...E) => this.produceWithPatches(p, (S) => c(S, ...E));
        let r, h;
        return [
          this.produce(c, s, (p, E) => {
            ((r = p), (h = E));
          }),
          r,
          h,
        ];
      }),
      hs(a?.autoFreeze) && this.setAutoFreeze(a.autoFreeze),
      hs(a?.useStrictShallowCopy) &&
        this.setUseStrictShallowCopy(a.useStrictShallowCopy),
      hs(a?.useStrictIteration) &&
        this.setUseStrictIteration(a.useStrictIteration));
  }
  createDraft(a) {
    (qe(a) || je(8), fl(a) && (a = fp(a)));
    const c = py(this),
      s = Cs(c, a, void 0);
    return ((s[Pt].isManual_ = !0), As(c), s);
  }
  finishDraft(a, c) {
    const s = a && a[Pt];
    (!s || !s.isManual_) && je(9);
    const { scope_: r } = s;
    return (gy(r, c), Sy(void 0, r));
  }
  setAutoFreeze(a) {
    this.autoFreeze_ = a;
  }
  setUseStrictShallowCopy(a) {
    this.useStrictShallowCopy_ = a;
  }
  setUseStrictIteration(a) {
    this.useStrictIteration_ = a;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(a, c) {
    let s;
    for (s = c.length - 1; s >= 0; s--) {
      const h = c[s];
      if (h.path.length === 0 && h.op === "replace") {
        a = h.value;
        break;
      }
    }
    s > -1 && (c = c.slice(s + 1));
    const r = Jn(Os).applyPatches_;
    return fl(a) ? r(a, c) : this.produce(a, (h) => r(h, c));
  }
};
function Cs(a, c, s, r) {
  const [h, d] = Hi(c)
    ? Jn(Di).proxyMap_(c, s)
    : ji(c)
      ? Jn(Di).proxySet_(c, s)
      : up(c, s);
  return (
    (s?.scope_ ?? wy()).drafts_.push(h),
    (d.callbacks_ = s?.callbacks_ ?? []),
    (d.key_ = r),
    s && r !== void 0
      ? np(s, d, r)
      : d.callbacks_.push(function (S) {
          S.mapSetPlugin_?.fixSetContents(d);
          const { patchPlugin_: g } = S;
          d.modified_ && g && g.generatePatches_(d, [], S);
        }),
    h
  );
}
function fp(a) {
  return (fl(a) || je(10, a), Ky(a));
}
function Ky(a) {
  if (!qe(a) || qi(a)) return a;
  const c = a[Pt];
  let s,
    r = !0;
  if (c) {
    if (!c.modified_) return c.base_;
    ((c.finalized_ = !0),
      (s = Ts(a, c.scope_.immer_.useStrictShallowCopy_)),
      (r = c.scope_.immer_.shouldUseStrictIteration()));
  } else s = Ts(a, !0);
  return (
    ka(
      s,
      (h, d) => {
        Ci(s, h, Ky(d));
      },
      r,
    ),
    c && (c.finalized_ = !1),
    s
  );
}
var sp = new cp(),
  Jy = sp.produce;
function Fy(a) {
  return ({ dispatch: s, getState: r }) =>
    (h) =>
    (d) =>
      typeof d == "function" ? d(s, r, a) : h(d);
}
var rp = Fy(),
  op = Fy,
  hp =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? zi
              : zi.apply(null, arguments);
        };
function Ey(a, c) {
  function s(...r) {
    if (c) {
      let h = c(...r);
      if (!h) throw new Error(cl(0));
      return {
        type: a,
        payload: h.payload,
        ...("meta" in h && { meta: h.meta }),
        ...("error" in h && { error: h.error }),
      };
    }
    return { type: a, payload: r[0] };
  }
  return (
    (s.toString = () => `${a}`),
    (s.type = a),
    (s.match = (r) => Fg(r) && r.type === a),
    s
  );
}
var ky = class Za extends Array {
  constructor(...c) {
    (super(...c), Object.setPrototypeOf(this, Za.prototype));
  }
  static get [Symbol.species]() {
    return Za;
  }
  concat(...c) {
    return super.concat.apply(this, c);
  }
  prepend(...c) {
    return c.length === 1 && Array.isArray(c[0])
      ? new Za(...c[0].concat(this))
      : new Za(...c.concat(this));
  }
};
function _y(a) {
  return qe(a) ? Jy(a, () => {}) : a;
}
function gi(a, c, s) {
  return a.has(c) ? a.get(c) : a.set(c, s(c)).get(c);
}
function dp(a) {
  return typeof a == "boolean";
}
var yp = () =>
    function (c) {
      const {
        thunk: s = !0,
        immutableCheck: r = !0,
        serializableCheck: h = !0,
        actionCreatorCheck: d = !0,
      } = c ?? {};
      let p = new ky();
      return (s && (dp(s) ? p.push(rp) : p.push(op(s.extraArgument))), p);
    },
  vp = "RTK_autoBatch",
  Ty = (a) => (c) => {
    setTimeout(c, a);
  },
  mp =
    (a = { type: "raf" }) =>
    (c) =>
    (...s) => {
      const r = c(...s);
      let h = !0,
        d = !1,
        p = !1;
      const E = new Set(),
        S =
          a.type === "tick"
            ? queueMicrotask
            : a.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Ty(10)
              : a.type === "callback"
                ? a.queueNotification
                : Ty(a.timeout),
        g = () => {
          ((p = !1), d && ((d = !1), E.forEach((z) => z())));
        };
      return Object.assign({}, r, {
        subscribe(z) {
          const R = () => h && z(),
            x = r.subscribe(R);
          return (
            E.add(z),
            () => {
              (x(), E.delete(z));
            }
          );
        },
        dispatch(z) {
          try {
            return (
              (h = !z?.meta?.[vp]),
              (d = !h),
              d && (p || ((p = !0), S(g))),
              r.dispatch(z)
            );
          } finally {
            h = !0;
          }
        },
      });
    },
  gp = (a) =>
    function (s) {
      const { autoBatch: r = !0 } = s ?? {};
      let h = new ky(a);
      return (r && h.push(mp(typeof r == "object" ? r : void 0)), h);
    };
function pp(a) {
  const c = yp(),
    {
      reducer: s = void 0,
      middleware: r,
      devTools: h = !0,
      preloadedState: d = void 0,
      enhancers: p = void 0,
    } = a || {};
  let E;
  if (typeof s == "function") E = s;
  else if (js(s)) E = Kg(s);
  else throw new Error(cl(1));
  let S;
  typeof r == "function" ? (S = r(c)) : (S = c());
  let g = zi;
  h && (g = hp({ trace: !1, ...(typeof h == "object" && h) }));
  const z = Jg(...S),
    R = gp(z);
  let x = typeof p == "function" ? p(R) : R();
  const J = g(...x);
  return By(E, d, J);
}
function Wy(a) {
  const c = {},
    s = [];
  let r;
  const h = {
    addCase(d, p) {
      const E = typeof d == "string" ? d : d.type;
      if (!E) throw new Error(cl(28));
      if (E in c) throw new Error(cl(29));
      return ((c[E] = p), h);
    },
    addAsyncThunk(d, p) {
      return (
        p.pending && (c[d.pending.type] = p.pending),
        p.rejected && (c[d.rejected.type] = p.rejected),
        p.fulfilled && (c[d.fulfilled.type] = p.fulfilled),
        p.settled && s.push({ matcher: d.settled, reducer: p.settled }),
        h
      );
    },
    addMatcher(d, p) {
      return (s.push({ matcher: d, reducer: p }), h);
    },
    addDefaultCase(d) {
      return ((r = d), h);
    },
  };
  return (a(h), [c, s, r]);
}
function Sp(a) {
  return typeof a == "function";
}
function bp(a, c) {
  let [s, r, h] = Wy(c),
    d;
  if (Sp(a)) d = () => _y(a());
  else {
    const E = _y(a);
    d = () => E;
  }
  function p(E = d(), S) {
    let g = [
      s[S.type],
      ...r.filter(({ matcher: z }) => z(S)).map(({ reducer: z }) => z),
    ];
    return (
      g.filter((z) => !!z).length === 0 && (g = [h]),
      g.reduce((z, R) => {
        if (R)
          if (fl(z)) {
            const J = R(z, S);
            return J === void 0 ? z : J;
          } else {
            if (qe(z)) return Jy(z, (x) => R(x, S));
            {
              const x = R(z, S);
              if (x === void 0) {
                if (z === null) return z;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return x;
            }
          }
        return z;
      }, E)
    );
  }
  return ((p.getInitialState = d), p);
}
var Ep = Symbol.for("rtk-slice-createasyncthunk");
function _p(a, c) {
  return `${a}/${c}`;
}
function Tp({ creators: a } = {}) {
  const c = a?.asyncThunk?.[Ep];
  return function (r) {
    const { name: h, reducerPath: d = h } = r;
    if (!h) throw new Error(cl(11));
    const p =
        (typeof r.reducers == "function" ? r.reducers(Ap()) : r.reducers) || {},
      E = Object.keys(p),
      S = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      g = {
        addCase(G, F) {
          const $ = typeof G == "string" ? G : G.type;
          if (!$) throw new Error(cl(12));
          if ($ in S.sliceCaseReducersByType) throw new Error(cl(13));
          return ((S.sliceCaseReducersByType[$] = F), g);
        },
        addMatcher(G, F) {
          return (S.sliceMatchers.push({ matcher: G, reducer: F }), g);
        },
        exposeAction(G, F) {
          return ((S.actionCreators[G] = F), g);
        },
        exposeCaseReducer(G, F) {
          return ((S.sliceCaseReducersByName[G] = F), g);
        },
      };
    E.forEach((G) => {
      const F = p[G],
        $ = {
          reducerName: G,
          type: _p(h, G),
          createNotation: typeof r.reducers == "function",
        };
      Cp(F) ? Rp($, F, g, c) : Mp($, F, g);
    });
    function z() {
      const [G = {}, F = [], $ = void 0] =
          typeof r.extraReducers == "function"
            ? Wy(r.extraReducers)
            : [r.extraReducers],
        ot = { ...G, ...S.sliceCaseReducersByType };
      return bp(r.initialState, (Y) => {
        for (let P in ot) Y.addCase(P, ot[P]);
        for (let P of S.sliceMatchers) Y.addMatcher(P.matcher, P.reducer);
        for (let P of F) Y.addMatcher(P.matcher, P.reducer);
        $ && Y.addDefaultCase($);
      });
    }
    const R = (G) => G,
      x = new Map(),
      J = new WeakMap();
    let w;
    function X(G, F) {
      return (w || (w = z()), w(G, F));
    }
    function K() {
      return (w || (w = z()), w.getInitialState());
    }
    function W(G, F = !1) {
      function $(Y) {
        let P = Y[G];
        return (typeof P > "u" && F && (P = gi(J, $, K)), P);
      }
      function ot(Y = R) {
        const P = gi(x, F, () => new WeakMap());
        return gi(P, Y, () => {
          const Qt = {};
          for (const [kt, wt] of Object.entries(r.selectors ?? {}))
            Qt[kt] = Op(wt, Y, () => gi(J, Y, K), F);
          return Qt;
        });
      }
      return {
        reducerPath: G,
        getSelectors: ot,
        get selectors() {
          return ot($);
        },
        selectSlice: $,
      };
    }
    const ct = {
      name: h,
      reducer: X,
      actions: S.actionCreators,
      caseReducers: S.sliceCaseReducersByName,
      getInitialState: K,
      ...W(d),
      injectInto(G, { reducerPath: F, ...$ } = {}) {
        const ot = F ?? d;
        return (
          G.inject({ reducerPath: ot, reducer: X }, $),
          { ...ct, ...W(ot, !0) }
        );
      },
    };
    return ct;
  };
}
function Op(a, c, s, r) {
  function h(d, ...p) {
    let E = c(d);
    return (typeof E > "u" && r && (E = s()), a(E, ...p));
  }
  return ((h.unwrapped = a), h);
}
var zp = Tp();
function Ap() {
  function a(c, s) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: c, ...s };
  }
  return (
    (a.withTypes = () => a),
    {
      reducer(c) {
        return Object.assign(
          {
            [c.name](...s) {
              return c(...s);
            },
          }[c.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(c, s) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: c,
          reducer: s,
        };
      },
      asyncThunk: a,
    }
  );
}
function Mp({ type: a, reducerName: c, createNotation: s }, r, h) {
  let d, p;
  if ("reducer" in r) {
    if (s && !Dp(r)) throw new Error(cl(17));
    ((d = r.reducer), (p = r.prepare));
  } else d = r;
  h.addCase(a, d)
    .exposeCaseReducer(c, d)
    .exposeAction(c, p ? Ey(a, p) : Ey(a));
}
function Cp(a) {
  return a._reducerDefinitionType === "asyncThunk";
}
function Dp(a) {
  return a._reducerDefinitionType === "reducerWithPrepare";
}
function Rp({ type: a, reducerName: c }, s, r, h) {
  if (!h) throw new Error(cl(18));
  const {
      payloadCreator: d,
      fulfilled: p,
      pending: E,
      rejected: S,
      settled: g,
      options: z,
    } = s,
    R = h(a, d, z);
  (r.exposeAction(c, R),
    p && r.addCase(R.fulfilled, p),
    E && r.addCase(R.pending, E),
    S && r.addCase(R.rejected, S),
    g && r.addMatcher(R.settled, g),
    r.exposeCaseReducer(c, {
      fulfilled: p || pi,
      pending: E || pi,
      rejected: S || pi,
      settled: g || pi,
    }));
}
function pi() {}
function cl(a) {
  return `Minified Redux Toolkit error #${a}; visit https://redux-toolkit.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
}
let ys = null;
const $y = zp({
    name: "notification",
    initialState: null,
    reducers: {
      notify(a, c) {
        return { type: c.payload.type, message: c.payload.message };
      },
      clear() {
        return null;
      },
    },
  }),
  { notify: Up, clear: Np } = $y.actions,
  Vn =
    ({ type: a, message: c, timeout: s = 5e3 }) =>
    async (r) => {
      (r(Up({ type: a, message: c })),
        ys && clearTimeout(ys),
        (ys = setTimeout(() => r(Np()), s)));
    },
  xp = $y.reducer,
  Hp = ({ setUserData: a }) => {
    const [c, s] = lt.useState(""),
      [r, h] = lt.useState(""),
      d = Hs(),
      p = ({ target: z }) => {
        const R = z.value;
        s(R);
      },
      E = ({ target: z }) => {
        const R = z.value;
        h(R);
      },
      S = Ti({
        mutationFn: async () => await Qg(c, r),
        onError: (z) => {
          d(Vn({ message: z.message, type: "error" }));
        },
        onSuccess: (z) => {
          (window.localStorage.setItem("user", JSON.stringify(z)),
            a(z.data),
            s(""),
            h(""));
        },
      }),
      g = async (z) => {
        (z.preventDefault(), S.mutate());
      };
    return Z.jsxs("form", {
      onSubmit: g,
      children: [
        Z.jsx("h3", {
          children: "Please enter your username and password to login",
        }),
        Z.jsx("label", { htmlFor: "username", children: "Username" }),
        Z.jsx("input", { id: "username", value: c, onChange: p }),
        Z.jsx("label", { htmlFor: "password", children: "Password" }),
        Z.jsx("input", { id: "password", value: r, onChange: E }),
        Z.jsx("button", { type: "submit", children: "Submit" }),
      ],
    });
  },
  jp = () => {
    const a = () => {
      (window.localStorage.removeItem("user"), location.reload());
    };
    return Z.jsx("button", { onClick: a, children: "Logout" });
  },
  Iy = lt.forwardRef((a, c) => {
    const [s, r] = lt.useState(!1),
      h = { display: s ? "" : "none" },
      d = { display: s ? "none" : "" },
      p = () => r(!s);
    return (
      lt.useImperativeHandle(c, () => ({ toggleVisibility: p })),
      Z.jsxs("div", {
        children: [
          Z.jsx("div", {
            style: d,
            children: Z.jsx("button", { onClick: p, children: a.buttonLabel }),
          }),
          Z.jsxs("div", {
            style: h,
            children: [
              a.children,
              Z.jsx("button", { onClick: p, children: "Cancel" }),
            ],
          }),
        ],
      })
    );
  }),
  He = {
    container: {
      border: "1px solid #ccc",
      padding: "16px",
      marginBottom: "16px",
      borderRadius: "8px",
      backgroundColor: "#fafafa",
    },
    titleWrapper: { display: "block", marginBottom: "8px" },
    title: { margin: 0 },
    text: { margin: "4px 0" },
    link: {
      color: "#0077cc",
      textDecoration: "none",
      margin: "4px 0",
      display: "inline-block",
    },
    authorNote: { margin: "4px 0", fontStyle: "italic" },
    deleteButton: {
      padding: "6px 12px",
      backgroundColor: "#d9534f",
      border: "none",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "8px",
    },
    likeButton: {
      margin: "8px 0 8px 0",
      transition: "background-color 0.2s ease",
      padding: "6px 12px",
      backgroundColor: "darkgreen",
      border: "none",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
    },
    likeButtonHover: { backgroundColor: "#218838" },
  },
  qp = ({ blog: a, userData: c, setNotificationObject: s }) => {
    const [r, h] = lt.useState(!1),
      d = Ui(),
      p = Hs(),
      E = Ti({
        mutationFn: async () => await Gg(a.id, c.token),
        onError: (g) => {
          p(Vn({ message: g.message, type: "error" }));
        },
        onSuccess: (g) => {
          (p(Vn({ message: g.message, type: "success" })),
            d.invalidateQueries({ queryKey: ["blogs"] }));
        },
      }),
      S = Ti({
        mutationFn: async () => {
          const g = { ...a, user: a.user.id, likes: a.likes + 1 };
          return await Xg(g, c.token);
        },
        onError: (g) => {
          p(Vn({ message: g.message, type: "error" }));
        },
        onSuccess: (g) => {
          d.setQueryData(["blogs"], (z) =>
            z.map((R) => (R.id === a.id ? g.data : a)),
          );
        },
      });
    return !a || !c
      ? null
      : Z.jsxs("div", {
          style: He.container,
          className: "blog",
          children: [
            Z.jsxs("span", {
              style: He.titleWrapper,
              children: [
                Z.jsx("h4", { style: He.title, children: a.title }),
                Z.jsxs("p", {
                  style: He.text,
                  children: ["Author: ", a.author],
                }),
              ],
            }),
            Z.jsxs(Iy, {
              buttonLabel: "View",
              children: [
                Z.jsxs("p", { style: He.text, children: ["Likes: ", a.likes] }),
                Z.jsx("a", { href: a.url, style: He.link, children: "link" }),
                Z.jsxs("p", {
                  style: He.authorNote,
                  children: ["Written by ", a.user.name],
                }),
                Z.jsx("button", {
                  style: {
                    ...He.deleteButton,
                    display: a.user.id === c.id ? "" : "none",
                  },
                  onClick: () => E.mutate(),
                  children: "Delete blog",
                }),
                Z.jsx("button", {
                  style: {
                    ...He.likeButton,
                    backgroundColor: r
                      ? He.likeButtonHover.backgroundColor
                      : He.likeButton.backgroundColor,
                  },
                  onMouseEnter: () => h(!0),
                  onMouseLeave: () => h(!1),
                  onClick: () => S.mutate(),
                  children: "❤️ Like",
                }),
              ],
            }),
          ],
        });
  },
  Bp = ({ handleCreateBlog: a }) => {
    const [c, s] = lt.useState(""),
      [r, h] = lt.useState(""),
      [d, p] = lt.useState(""),
      E = ({ target: R }) => {
        const x = R.value;
        s(x);
      },
      S = ({ target: R }) => {
        const x = R.value;
        h(x);
      },
      g = ({ target: R }) => {
        const x = R.value;
        p(x);
      },
      z = async (R) => {
        (R.preventDefault(), await a({ title: c, author: r, url: d }));
      };
    return Z.jsxs("form", {
      onSubmit: z,
      children: [
        Z.jsx("h4", { children: "Add a new blog:" }),
        Z.jsxs("p", {
          children: [
            Z.jsx("label", { htmlFor: "title", children: "Title:" }),
            Z.jsx("input", { id: "title", value: c, onChange: E }),
          ],
        }),
        Z.jsxs("p", {
          children: [
            Z.jsx("label", { htmlFor: "author", children: "Author:" }),
            Z.jsx("input", { id: "author", value: r, onChange: S }),
          ],
        }),
        Z.jsxs("p", {
          children: [
            Z.jsx("label", { htmlFor: "url", children: "URL:" }),
            Z.jsx("input", { id: "url", value: d, onChange: g }),
          ],
        }),
        Z.jsx("button", { type: "submit", children: "Submit" }),
      ],
    });
  },
  Qp = ({ userData: a, setNotificationObject: c }) => {
    const s = lt.useRef(),
      r = Ui(),
      h = Hs(),
      d = vg({ queryKey: ["blogs"], queryFn: Yg, refetchOnWindowFocus: !1 }),
      p = Ti({
        mutationFn: async (z) => await wg(z, a.id, a.token),
        onError: (z) => {
          h(Vn({ message: z.message, type: "error" }));
        },
        onSuccess: (z) => {
          (s.current.toggleVisibility(),
            h(Vn({ message: z.message, type: "success" })),
            r.invalidateQueries({ queryKey: ["blogs"] }));
        },
      });
    if (d.isLoading) return Z.jsx("div", { children: "Loading..." });
    const E = d.data,
      S = E.sort((z, R) => R.likes - z.likes),
      g = (z) => p.mutate(z);
    return Z.jsxs("div", {
      children: [
        Z.jsxs("h3", { children: ["User: ", a.name] }),
        Z.jsx("hr", {}),
        E.map((z) =>
          Z.jsx(qp, {
            blog: z,
            blogs: S,
            userData: a,
            setNotificationObject: c,
          }),
        ),
        Z.jsx(Iy, {
          buttonLabel: "Add a new blog",
          ref: s,
          children: Z.jsx(Bp, {
            blogs: S,
            userData: a,
            setNotificationObject: c,
            togglableRef: s,
            handleCreateBlog: g,
          }),
        }),
      ],
    });
  },
  Yp = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "#d1fae5",
    color: "#065f46",
    borderBottom: "2px solid #10b981",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "500",
    zIndex: 9999,
  },
  Gp = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    borderBottom: "2px solid #ef4444",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "500",
    zIndex: 9999,
  },
  wp = () => {
    const a = Bg((c) => c.notification);
    return a
      ? (console.log(`Notification in component: ${JSON.stringify(a)}`),
        a.type === "success"
          ? Z.jsx("p", { style: Yp, children: a.message })
          : a.type === "error"
            ? Z.jsx("p", { style: Gp, children: a.message })
            : null)
      : null;
  },
  Xp = () => {
    const [a, c] = lt.useState(() => {
        const h = window.localStorage.getItem("user");
        return h ? JSON.parse(h) : null;
      }),
      [s, r] = lt.useState({});
    return Z.jsxs("main", {
      children: [
        Z.jsx("h2", { children: "Blogs App" }),
        Z.jsx(wp, { message: s.message, type: s.type }),
        !a && Z.jsx(Hp, { setUserData: c, setNotificationObject: r }),
        a && Z.jsx(jp, {}),
        a && Z.jsx(Qp, { userData: a, setNotificationObject: r }),
      ],
    });
  },
  Lp = pp({ reducer: { notification: xp } }),
  Zp = new lg();
x0.createRoot(document.getElementById("root")).render(
  Z.jsx(ng, {
    client: Zp,
    children: Z.jsx(Ng, { store: Lp, children: Z.jsx(Xp, {}) }),
  }),
);
