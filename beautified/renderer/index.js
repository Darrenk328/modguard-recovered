(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) c(u);
  new MutationObserver((u) => {
    for (const m of u)
      if (m.type === "childList")
        for (const f of m.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && c(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(u) {
    const m = {};
    return (
      u.integrity && (m.integrity = u.integrity),
      u.referrerPolicy && (m.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function c(u) {
    if (u.ep) return;
    u.ep = !0;
    const m = l(u);
    fetch(u.href, m);
  }
})();
var nl = { exports: {} },
  Dr = {},
  al = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ic;
function ff() {
  if (ic) return ge;
  ic = 1;
  var a = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    _ = Symbol.iterator;
  function N(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (_ && w[_]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    T = {};
  function P(w, M, Q) {
    ((this.props = w),
      (this.context = M),
      (this.refs = T),
      (this.updater = Q || I));
  }
  ((P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (w, M) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, w, M, "setState");
    }),
    (P.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function $() {}
  $.prototype = P.prototype;
  function K(w, M, Q) {
    ((this.props = w),
      (this.context = M),
      (this.refs = T),
      (this.updater = Q || I));
  }
  var X = (K.prototype = new $());
  ((X.constructor = K), D(X, P.prototype), (X.isPureReactComponent = !0));
  var se = Array.isArray,
    fe = Object.prototype.hasOwnProperty,
    z = { current: null },
    q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(w, M, Q) {
    var re,
      V = {},
      O = null,
      te = null;
    if (M != null)
      for (re in (M.ref !== void 0 && (te = M.ref),
      M.key !== void 0 && (O = "" + M.key),
      M))
        fe.call(M, re) && !q.hasOwnProperty(re) && (V[re] = M[re]);
    var Y = arguments.length - 2;
    if (Y === 1) V.children = Q;
    else if (1 < Y) {
      for (var me = Array(Y), Ne = 0; Ne < Y; Ne++) me[Ne] = arguments[Ne + 2];
      V.children = me;
    }
    if (w && w.defaultProps)
      for (re in ((Y = w.defaultProps), Y)) V[re] === void 0 && (V[re] = Y[re]);
    return {
      $$typeof: a,
      type: w,
      key: O,
      ref: te,
      props: V,
      _owner: z.current,
    };
  }
  function _e(w, M) {
    return {
      $$typeof: a,
      type: w.type,
      key: M,
      ref: w.ref,
      props: w.props,
      _owner: w._owner,
    };
  }
  function Se(w) {
    return typeof w == "object" && w !== null && w.$$typeof === a;
  }
  function Te(w) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (Q) {
        return M[Q];
      })
    );
  }
  var Re = /\/+/g;
  function Ae(w, M) {
    return typeof w == "object" && w !== null && w.key != null
      ? Te("" + w.key)
      : M.toString(36);
  }
  function ye(w, M, Q, re, V) {
    var O = typeof w;
    (O === "undefined" || O === "boolean") && (w = null);
    var te = !1;
    if (w === null) te = !0;
    else
      switch (O) {
        case "string":
        case "number":
          te = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case a:
            case i:
              te = !0;
          }
      }
    if (te)
      return (
        (te = w),
        (V = V(te)),
        (w = re === "" ? "." + Ae(te, 0) : re),
        se(V)
          ? ((Q = ""),
            w != null && (Q = w.replace(Re, "$&/") + "/"),
            ye(V, M, Q, "", function (Ne) {
              return Ne;
            }))
          : V != null &&
            (Se(V) &&
              (V = _e(
                V,
                Q +
                  (!V.key || (te && te.key === V.key)
                    ? ""
                    : ("" + V.key).replace(Re, "$&/") + "/") +
                  w,
              )),
            M.push(V)),
        1
      );
    if (((te = 0), (re = re === "" ? "." : re + ":"), se(w)))
      for (var Y = 0; Y < w.length; Y++) {
        O = w[Y];
        var me = re + Ae(O, Y);
        te += ye(O, M, Q, me, V);
      }
    else if (((me = N(w)), typeof me == "function"))
      for (w = me.call(w), Y = 0; !(O = w.next()).done;)
        ((O = O.value), (me = re + Ae(O, Y++)), (te += ye(O, M, Q, me, V)));
    else if (O === "object")
      throw (
        (M = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return te;
  }
  function ve(w, M, Q) {
    if (w == null) return w;
    var re = [],
      V = 0;
    return (
      ye(w, re, "", "", function (O) {
        return M.call(Q, O, V++);
      }),
      re
    );
  }
  function pe(w) {
    if (w._status === -1) {
      var M = w._result;
      ((M = M()),
        M.then(
          function (Q) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = Q));
          },
          function (Q) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = Q));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = M)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var he = { current: null },
    k = { transition: null },
    U = {
      ReactCurrentDispatcher: he,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: z,
    };
  function L() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ge.Children = {
      map: ve,
      forEach: function (w, M, Q) {
        ve(
          w,
          function () {
            M.apply(this, arguments);
          },
          Q,
        );
      },
      count: function (w) {
        var M = 0;
        return (
          ve(w, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (w) {
        return (
          ve(w, function (M) {
            return M;
          }) || []
        );
      },
      only: function (w) {
        if (!Se(w))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return w;
      },
    }),
    (ge.Component = P),
    (ge.Fragment = l),
    (ge.Profiler = u),
    (ge.PureComponent = K),
    (ge.StrictMode = c),
    (ge.Suspense = v),
    (ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
    (ge.act = L),
    (ge.cloneElement = function (w, M, Q) {
      if (w == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            w +
            ".",
        );
      var re = D({}, w.props),
        V = w.key,
        O = w.ref,
        te = w._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((O = M.ref), (te = z.current)),
          M.key !== void 0 && (V = "" + M.key),
          w.type && w.type.defaultProps)
        )
          var Y = w.type.defaultProps;
        for (me in M)
          fe.call(M, me) &&
            !q.hasOwnProperty(me) &&
            (re[me] = M[me] === void 0 && Y !== void 0 ? Y[me] : M[me]);
      }
      var me = arguments.length - 2;
      if (me === 1) re.children = Q;
      else if (1 < me) {
        Y = Array(me);
        for (var Ne = 0; Ne < me; Ne++) Y[Ne] = arguments[Ne + 2];
        re.children = Y;
      }
      return {
        $$typeof: a,
        type: w.type,
        key: V,
        ref: O,
        props: re,
        _owner: te,
      };
    }),
    (ge.createContext = function (w) {
      return (
        (w = {
          $$typeof: f,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (w.Provider = { $$typeof: m, _context: w }),
        (w.Consumer = w)
      );
    }),
    (ge.createElement = ue),
    (ge.createFactory = function (w) {
      var M = ue.bind(null, w);
      return ((M.type = w), M);
    }),
    (ge.createRef = function () {
      return { current: null };
    }),
    (ge.forwardRef = function (w) {
      return { $$typeof: x, render: w };
    }),
    (ge.isValidElement = Se),
    (ge.lazy = function (w) {
      return { $$typeof: y, _payload: { _status: -1, _result: w }, _init: pe };
    }),
    (ge.memo = function (w, M) {
      return { $$typeof: E, type: w, compare: M === void 0 ? null : M };
    }),
    (ge.startTransition = function (w) {
      var M = k.transition;
      k.transition = {};
      try {
        w();
      } finally {
        k.transition = M;
      }
    }),
    (ge.unstable_act = L),
    (ge.useCallback = function (w, M) {
      return he.current.useCallback(w, M);
    }),
    (ge.useContext = function (w) {
      return he.current.useContext(w);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (w) {
      return he.current.useDeferredValue(w);
    }),
    (ge.useEffect = function (w, M) {
      return he.current.useEffect(w, M);
    }),
    (ge.useId = function () {
      return he.current.useId();
    }),
    (ge.useImperativeHandle = function (w, M, Q) {
      return he.current.useImperativeHandle(w, M, Q);
    }),
    (ge.useInsertionEffect = function (w, M) {
      return he.current.useInsertionEffect(w, M);
    }),
    (ge.useLayoutEffect = function (w, M) {
      return he.current.useLayoutEffect(w, M);
    }),
    (ge.useMemo = function (w, M) {
      return he.current.useMemo(w, M);
    }),
    (ge.useReducer = function (w, M, Q) {
      return he.current.useReducer(w, M, Q);
    }),
    (ge.useRef = function (w) {
      return he.current.useRef(w);
    }),
    (ge.useState = function (w) {
      return he.current.useState(w);
    }),
    (ge.useSyncExternalStore = function (w, M, Q) {
      return he.current.useSyncExternalStore(w, M, Q);
    }),
    (ge.useTransition = function () {
      return he.current.useTransition();
    }),
    (ge.version = "18.3.1"),
    ge
  );
}
var lc;
function Rl() {
  return (lc || ((lc = 1), (al.exports = ff())), al.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc;
function pf() {
  if (dc) return Dr;
  dc = 1;
  var a = Rl(),
    i = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    u = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(x, v, E) {
    var y,
      _ = {},
      N = null,
      I = null;
    (E !== void 0 && (N = "" + E),
      v.key !== void 0 && (N = "" + v.key),
      v.ref !== void 0 && (I = v.ref));
    for (y in v) c.call(v, y) && !m.hasOwnProperty(y) && (_[y] = v[y]);
    if (x && x.defaultProps)
      for (y in ((v = x.defaultProps), v)) _[y] === void 0 && (_[y] = v[y]);
    return {
      $$typeof: i,
      type: x,
      key: N,
      ref: I,
      props: _,
      _owner: u.current,
    };
  }
  return ((Dr.Fragment = l), (Dr.jsx = f), (Dr.jsxs = f), Dr);
}
var uc;
function gf() {
  return (uc || ((uc = 1), (nl.exports = pf())), nl.exports);
}
var r = gf(),
  g = Rl(),
  os = {},
  rl = { exports: {} },
  mt = {},
  ol = { exports: {} },
  sl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc;
function vf() {
  return (
    cc ||
      ((cc = 1),
      (function (a) {
        function i(k, U) {
          var L = k.length;
          k.push(U);
          e: for (; 0 < L;) {
            var w = (L - 1) >>> 1,
              M = k[w];
            if (0 < u(M, U)) ((k[w] = U), (k[L] = M), (L = w));
            else break e;
          }
        }
        function l(k) {
          return k.length === 0 ? null : k[0];
        }
        function c(k) {
          if (k.length === 0) return null;
          var U = k[0],
            L = k.pop();
          if (L !== U) {
            k[0] = L;
            e: for (var w = 0, M = k.length, Q = M >>> 1; w < Q;) {
              var re = 2 * (w + 1) - 1,
                V = k[re],
                O = re + 1,
                te = k[O];
              if (0 > u(V, L))
                O < M && 0 > u(te, V)
                  ? ((k[w] = te), (k[O] = L), (w = O))
                  : ((k[w] = V), (k[re] = L), (w = re));
              else if (O < M && 0 > u(te, L))
                ((k[w] = te), (k[O] = L), (w = O));
              else break e;
            }
          }
          return U;
        }
        function u(k, U) {
          var L = k.sortIndex - U.sortIndex;
          return L !== 0 ? L : k.id - U.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          a.unstable_now = function () {
            return m.now();
          };
        } else {
          var f = Date,
            x = f.now();
          a.unstable_now = function () {
            return f.now() - x;
          };
        }
        var v = [],
          E = [],
          y = 1,
          _ = null,
          N = 3,
          I = !1,
          D = !1,
          T = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          $ = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function X(k) {
          for (var U = l(E); U !== null;) {
            if (U.callback === null) c(E);
            else if (U.startTime <= k)
              (c(E), (U.sortIndex = U.expirationTime), i(v, U));
            else break;
            U = l(E);
          }
        }
        function se(k) {
          if (((T = !1), X(k), !D))
            if (l(v) !== null) ((D = !0), pe(fe));
            else {
              var U = l(E);
              U !== null && he(se, U.startTime - k);
            }
        }
        function fe(k, U) {
          ((D = !1), T && ((T = !1), $(ue), (ue = -1)), (I = !0));
          var L = N;
          try {
            for (
              X(U), _ = l(v);
              _ !== null && (!(_.expirationTime > U) || (k && !Te()));
            ) {
              var w = _.callback;
              if (typeof w == "function") {
                ((_.callback = null), (N = _.priorityLevel));
                var M = w(_.expirationTime <= U);
                ((U = a.unstable_now()),
                  typeof M == "function"
                    ? (_.callback = M)
                    : _ === l(v) && c(v),
                  X(U));
              } else c(v);
              _ = l(v);
            }
            if (_ !== null) var Q = !0;
            else {
              var re = l(E);
              (re !== null && he(se, re.startTime - U), (Q = !1));
            }
            return Q;
          } finally {
            ((_ = null), (N = L), (I = !1));
          }
        }
        var z = !1,
          q = null,
          ue = -1,
          _e = 5,
          Se = -1;
        function Te() {
          return !(a.unstable_now() - Se < _e);
        }
        function Re() {
          if (q !== null) {
            var k = a.unstable_now();
            Se = k;
            var U = !0;
            try {
              U = q(!0, k);
            } finally {
              U ? Ae() : ((z = !1), (q = null));
            }
          } else z = !1;
        }
        var Ae;
        if (typeof K == "function")
          Ae = function () {
            K(Re);
          };
        else if (typeof MessageChannel < "u") {
          var ye = new MessageChannel(),
            ve = ye.port2;
          ((ye.port1.onmessage = Re),
            (Ae = function () {
              ve.postMessage(null);
            }));
        } else
          Ae = function () {
            P(Re, 0);
          };
        function pe(k) {
          ((q = k), z || ((z = !0), Ae()));
        }
        function he(k, U) {
          ue = P(function () {
            k(a.unstable_now());
          }, U);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            D || I || ((D = !0), pe(fe));
          }),
          (a.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (_e = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return l(v);
          }),
          (a.unstable_next = function (k) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = N;
            }
            var L = N;
            N = U;
            try {
              return k();
            } finally {
              N = L;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (k, U) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var L = N;
            N = k;
            try {
              return U();
            } finally {
              N = L;
            }
          }),
          (a.unstable_scheduleCallback = function (k, U, L) {
            var w = a.unstable_now();
            switch (
              (typeof L == "object" && L !== null
                ? ((L = L.delay),
                  (L = typeof L == "number" && 0 < L ? w + L : w))
                : (L = w),
              k)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = L + M),
              (k = {
                id: y++,
                callback: U,
                priorityLevel: k,
                startTime: L,
                expirationTime: M,
                sortIndex: -1,
              }),
              L > w
                ? ((k.sortIndex = L),
                  i(E, k),
                  l(v) === null &&
                    k === l(E) &&
                    (T ? ($(ue), (ue = -1)) : (T = !0), he(se, L - w)))
                : ((k.sortIndex = M), i(v, k), D || I || ((D = !0), pe(fe))),
              k
            );
          }),
          (a.unstable_shouldYield = Te),
          (a.unstable_wrapCallback = function (k) {
            var U = N;
            return function () {
              var L = N;
              N = U;
              try {
                return k.apply(this, arguments);
              } finally {
                N = L;
              }
            };
          }));
      })(sl)),
    sl
  );
}
var hc;
function xf() {
  return (hc || ((hc = 1), (ol.exports = vf())), ol.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mc;
function yf() {
  if (mc) return mt;
  mc = 1;
  var a = Rl(),
    i = xf();
  function l(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    u = {};
  function m(e, t) {
    (f(e, t), f(e + "Capture", t));
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var x = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    v = Object.prototype.hasOwnProperty,
    E =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    _ = {};
  function N(e) {
    return v.call(_, e)
      ? !0
      : v.call(y, e)
        ? !1
        : E.test(e)
          ? (_[e] = !0)
          : ((y[e] = !0), !1);
  }
  function I(e, t, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function D(e, t, n, o) {
    if (t === null || typeof t > "u" || I(e, t, n, o)) return !0;
    if (o) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function T(e, t, n, o, s, d, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = h));
  }
  var P = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      P[e] = new T(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      P[t] = new T(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        P[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      P[e] = new T(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        P[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      P[e] = new T(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      P[e] = new T(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      P[e] = new T(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      P[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var $ = /[\-:]([a-z])/g;
  function K(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace($, K);
      P[t] = new T(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace($, K);
        P[t] = new T(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace($, K);
      P[t] = new T(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      P[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (P.xlinkHref = new T(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      P[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function X(e, t, n, o) {
    var s = P.hasOwnProperty(t) ? P[t] : null;
    (s !== null
      ? s.type !== 0
      : o ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (D(t, n, s, o) && (n = null),
      o || s === null
        ? N(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : s.mustUseProperty
          ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
          : ((t = s.attributeName),
            (o = s.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((s = s.type),
                (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
                o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
  }
  var se = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    fe = Symbol.for("react.element"),
    z = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    ue = Symbol.for("react.strict_mode"),
    _e = Symbol.for("react.profiler"),
    Se = Symbol.for("react.provider"),
    Te = Symbol.for("react.context"),
    Re = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    ye = Symbol.for("react.suspense_list"),
    ve = Symbol.for("react.memo"),
    pe = Symbol.for("react.lazy"),
    he = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var L = Object.assign,
    w;
  function M(e) {
    if (w === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        w = (t && t[1]) || "";
      }
    return (
      `
` +
      w +
      e
    );
  }
  var Q = !1;
  function re(e, t) {
    if (!e || Q) return "";
    Q = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (R) {
            var o = R;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (R) {
            o = R;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          o = R;
        }
        e();
      }
    } catch (R) {
      if (R && o && typeof R.stack == "string") {
        for (
          var s = R.stack.split(`
`),
            d = o.stack.split(`
`),
            h = s.length - 1,
            p = d.length - 1;
          1 <= h && 0 <= p && s[h] !== d[p];
        )
          p--;
        for (; 1 <= h && 0 <= p; h--, p--)
          if (s[h] !== d[p]) {
            if (h !== 1 || p !== 1)
              do
                if ((h--, p--, 0 > p || s[h] !== d[p])) {
                  var b =
                    `
` + s[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", e.displayName)),
                    b
                  );
                }
              while (1 <= h && 0 <= p);
            break;
          }
      }
    } finally {
      ((Q = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = re(e.type, !1)), e);
      case 11:
        return ((e = re(e.type.render, !1)), e);
      case 1:
        return ((e = re(e.type, !0)), e);
      default:
        return "";
    }
  }
  function O(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case z:
        return "Portal";
      case _e:
        return "Profiler";
      case ue:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case ye:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Te:
          return (e.displayName || "Context") + ".Consumer";
        case Se:
          return (e._context.displayName || "Context") + ".Provider";
        case Re:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ve:
          return (
            (t = e.displayName || null),
            t !== null ? t : O(e.type) || "Memo"
          );
        case pe:
          ((t = e._payload), (e = e._init));
          try {
            return O(e(t));
          } catch {}
      }
    return null;
  }
  function te(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return O(t);
      case 8:
        return t === ue ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Y(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function me(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ne(e) {
    var t = me(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        d = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (h) {
            ((o = "" + h), d.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (h) {
            o = "" + h;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function ft(e) {
    e._valueTracker || (e._valueTracker = Ne(e));
  }
  function Ba(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      o = "";
    return (
      e && (o = me(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function sn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Mn(e, t) {
    var n = t.checked;
    return L({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function st(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Y(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Br(e, t) {
    ((t = t.checked), t != null && X(e, "checked", t, !1));
  }
  function ea(e, t) {
    Br(e, t);
    var n = Y(t.value),
      o = t.type;
    if (n != null)
      o === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Fa(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Fa(e, t.type, Y(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Fr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!(
        (o !== "submit" && o !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      ))
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Fa(e, t, n) {
    (t !== "number" || sn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Be = Array.isArray;
  function pt(e, t, n, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        ((s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && o && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Y(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          ((e[s].selected = !0), o && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $a(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return L({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Wa(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(l(92));
        if (Be(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Y(n) };
  }
  function nt(e, t) {
    var n = Y(t.value),
      o = Y(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      o != null && (e.defaultValue = "" + o));
  }
  function Et(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function $r(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ta(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $r(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var na,
    Wr = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, o, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, o, s);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          na = na || document.createElement("div"),
            na.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = na.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    gs = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Yt).forEach(function (e) {
    gs.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yt[t] = Yt[e]));
    });
  });
  function Kr(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Yt.hasOwnProperty(e) && Yt[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Mt(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var o = n.indexOf("--") === 0,
          s = Kr(n, t[n], o);
        (n === "float" && (n = "cssFloat"),
          o ? e.setProperty(n, s) : (e[n] = s));
      }
  }
  var vs = L(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function aa(e, t) {
    if (t) {
      if (vs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function Ka(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
  var Va = null;
  function Ya(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Qa = null,
    ln = null,
    dn = null;
  function Vr(e) {
    if ((e = wr(e))) {
      if (typeof Qa != "function") throw Error(l(280));
      var t = e.stateNode;
      t && ((t = wo(t)), Qa(e.stateNode, e.type, t));
    }
  }
  function Yr(e) {
    ln ? (dn ? dn.push(e) : (dn = [e])) : (ln = e);
  }
  function Qr() {
    if (ln) {
      var e = ln,
        t = dn;
      if (((dn = ln = null), Vr(e), t)) for (e = 0; e < t.length; e++) Vr(t[e]);
    }
  }
  function ra(e, t) {
    return e(t);
  }
  function In() {}
  var Nt = !1;
  function Xa(e, t, n) {
    if (Nt) return e(t, n);
    Nt = !0;
    try {
      return ra(e, t, n);
    } finally {
      ((Nt = !1), (ln !== null || dn !== null) && (In(), Qr()));
    }
  }
  function Qt(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = wo(n);
    if (o === null) return null;
    n = o[t];
    e: switch (t) {
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
        ((o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var Dn = !1;
  if (x)
    try {
      var Xt = {};
      (Object.defineProperty(Xt, "passive", {
        get: function () {
          Dn = !0;
        },
      }),
        window.addEventListener("test", Xt, Xt),
        window.removeEventListener("test", Xt, Xt));
    } catch {
      Dn = !1;
    }
  function xs(e, t, n, o, s, d, h, p, b) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (B) {
      this.onError(B);
    }
  }
  var Ln = !1,
    un = null,
    Ue = !1,
    Ot = null,
    ys = {
      onError: function (e) {
        ((Ln = !0), (un = e));
      },
    };
  function Xr(e, t, n, o, s, d, h, p, b) {
    ((Ln = !1), (un = null), xs.apply(ys, arguments));
  }
  function It(e, t, n, o, s, d, h, p, b) {
    if ((Xr.apply(this, arguments), Ln)) {
      if (Ln) {
        var R = un;
        ((Ln = !1), (un = null));
      } else throw Error(l(198));
      Ue || ((Ue = !0), (Ot = R));
    }
  }
  function gt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function cn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ja(e) {
    if (gt(e) !== e) throw Error(l(188));
  }
  function Jr(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = gt(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ;) {
      var s = n.return;
      if (s === null) break;
      var d = s.alternate;
      if (d === null) {
        if (((o = s.return), o !== null)) {
          n = o;
          continue;
        }
        break;
      }
      if (s.child === d.child) {
        for (d = s.child; d;) {
          if (d === n) return (Ja(s), e);
          if (d === o) return (Ja(s), t);
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== o.return) ((n = s), (o = d));
      else {
        for (var h = !1, p = s.child; p;) {
          if (p === n) {
            ((h = !0), (n = s), (o = d));
            break;
          }
          if (p === o) {
            ((h = !0), (o = s), (n = d));
            break;
          }
          p = p.sibling;
        }
        if (!h) {
          for (p = d.child; p;) {
            if (p === n) {
              ((h = !0), (n = d), (o = s));
              break;
            }
            if (p === o) {
              ((h = !0), (o = d), (n = s));
              break;
            }
            p = p.sibling;
          }
          if (!h) throw Error(l(189));
        }
      }
      if (n.alternate !== o) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function Za(e) {
    return ((e = Jr(e)), e !== null ? Zr(e) : null);
  }
  function Zr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = Zr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var eo = i.unstable_scheduleCallback,
    er = i.unstable_cancelCallback,
    oa = i.unstable_shouldYield,
    ws = i.unstable_requestPaint,
    Me = i.unstable_now,
    to = i.unstable_getCurrentPriorityLevel,
    Pn = i.unstable_ImmediatePriority,
    no = i.unstable_UserBlockingPriority,
    sa = i.unstable_NormalPriority,
    bs = i.unstable_LowPriority,
    tr = i.unstable_IdlePriority,
    ia = null,
    vt = null;
  function Ss(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
      try {
        vt.onCommitFiberRoot(ia, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : Ns,
    ao = Math.log,
    Es = Math.LN2;
  function Ns(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ao(e) / Es) | 0)) | 0);
  }
  var la = 64,
    da = 4194304;
  function Un(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ua(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0,
      s = e.suspendedLanes,
      d = e.pingedLanes,
      h = n & 268435455;
    if (h !== 0) {
      var p = h & ~s;
      p !== 0 ? (o = Un(p)) : ((d &= h), d !== 0 && (o = Un(d)));
    } else ((h = n & ~s), h !== 0 ? (o = Un(h)) : d !== 0 && (o = Un(d)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & s) === 0 &&
      ((s = o & -o), (d = t & -t), s >= d || (s === 16 && (d & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t;)
        ((n = 31 - xt(t)), (s = 1 << n), (o |= e[n]), (t &= ~s));
    return o;
  }
  function ks(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _s(e, t) {
    for (
      var n = e.suspendedLanes,
        o = e.pingedLanes,
        s = e.expirationTimes,
        d = e.pendingLanes;
      0 < d;
    ) {
      var h = 31 - xt(d),
        p = 1 << h,
        b = s[h];
      (b === -1
        ? ((p & n) === 0 || (p & o) !== 0) && (s[h] = ks(p, t))
        : b <= t && (e.expiredLanes |= p),
        (d &= ~p));
    }
  }
  function nr(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ro() {
    var e = la;
    return ((la <<= 1), (la & 4194240) === 0 && (la = 64), e);
  }
  function ar(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function qn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - xt(t)),
      (e[t] = n));
  }
  function As(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
      var s = 31 - xt(n),
        d = 1 << s;
      ((t[s] = 0), (o[s] = -1), (e[s] = -1), (n &= ~d));
    }
  }
  function rr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var o = 31 - xt(n),
        s = 1 << o;
      ((s & t) | (e[o] & t) && (e[o] |= t), (n &= ~s));
    }
  }
  var Ee = 0;
  function ca(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ha,
    ma,
    or,
    C,
    H,
    oe = !1,
    xe = [],
    ke = null,
    Ce = null,
    it = null,
    Dt = new Map(),
    hn = new Map(),
    Lt = [],
    Dh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Fl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ke = null;
        break;
      case "dragenter":
      case "dragleave":
        Ce = null;
        break;
      case "mouseover":
      case "mouseout":
        it = null;
        break;
      case "pointerover":
      case "pointerout":
        Dt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hn.delete(t.pointerId);
    }
  }
  function sr(e, t, n, o, s, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [s],
        }),
        t !== null && ((t = wr(t)), t !== null && ma(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function Lh(e, t, n, o, s) {
    switch (t) {
      case "focusin":
        return ((ke = sr(ke, e, t, n, o, s)), !0);
      case "dragenter":
        return ((Ce = sr(Ce, e, t, n, o, s)), !0);
      case "mouseover":
        return ((it = sr(it, e, t, n, o, s)), !0);
      case "pointerover":
        var d = s.pointerId;
        return (Dt.set(d, sr(Dt.get(d) || null, e, t, n, o, s)), !0);
      case "gotpointercapture":
        return (
          (d = s.pointerId),
          hn.set(d, sr(hn.get(d) || null, e, t, n, o, s)),
          !0
        );
    }
    return !1;
  }
  function $l(e) {
    var t = Gn(e.target);
    if (t !== null) {
      var n = gt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = cn(n)), t !== null)) {
            ((e.blockedOn = t),
              H(e.priority, function () {
                or(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function oo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        ((Va = o), n.target.dispatchEvent(o), (Va = null));
      } else return ((t = wr(n)), t !== null && ma(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Wl(e, t, n) {
    oo(e) && n.delete(t);
  }
  function Ph() {
    ((oe = !1),
      ke !== null && oo(ke) && (ke = null),
      Ce !== null && oo(Ce) && (Ce = null),
      it !== null && oo(it) && (it = null),
      Dt.forEach(Wl),
      hn.forEach(Wl));
  }
  function ir(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      oe ||
        ((oe = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Ph)));
  }
  function lr(e) {
    function t(s) {
      return ir(s, e);
    }
    if (0 < xe.length) {
      ir(xe[0], e);
      for (var n = 1; n < xe.length; n++) {
        var o = xe[n];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      ke !== null && ir(ke, e),
        Ce !== null && ir(Ce, e),
        it !== null && ir(it, e),
        Dt.forEach(t),
        hn.forEach(t),
        n = 0;
      n < Lt.length;
      n++
    )
      ((o = Lt[n]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null);)
      ($l(n), n.blockedOn === null && Lt.shift());
  }
  var fa = se.ReactCurrentBatchConfig,
    so = !0;
  function Uh(e, t, n, o) {
    var s = Ee,
      d = fa.transition;
    fa.transition = null;
    try {
      ((Ee = 1), Cs(e, t, n, o));
    } finally {
      ((Ee = s), (fa.transition = d));
    }
  }
  function qh(e, t, n, o) {
    var s = Ee,
      d = fa.transition;
    fa.transition = null;
    try {
      ((Ee = 4), Cs(e, t, n, o));
    } finally {
      ((Ee = s), (fa.transition = d));
    }
  }
  function Cs(e, t, n, o) {
    if (so) {
      var s = js(e, t, n, o);
      if (s === null) (Ws(e, t, o, io, n), Fl(e, o));
      else if (Lh(s, e, t, n, o)) o.stopPropagation();
      else if ((Fl(e, o), t & 4 && -1 < Dh.indexOf(e))) {
        for (; s !== null;) {
          var d = wr(s);
          if (
            (d !== null && ha(d),
            (d = js(e, t, n, o)),
            d === null && Ws(e, t, o, io, n),
            d === s)
          )
            break;
          s = d;
        }
        s !== null && o.stopPropagation();
      } else Ws(e, t, o, null, n);
    }
  }
  var io = null;
  function js(e, t, n, o) {
    if (((io = null), (e = Ya(o)), (e = Gn(e)), e !== null))
      if (((t = gt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = cn(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((io = e), null);
  }
  function Kl(e) {
    switch (e) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (to()) {
          case Pn:
            return 1;
          case no:
            return 4;
          case sa:
          case bs:
            return 16;
          case tr:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mn = null,
    Ts = null,
    lo = null;
  function Vl() {
    if (lo) return lo;
    var e,
      t = Ts,
      n = t.length,
      o,
      s = "value" in mn ? mn.value : mn.textContent,
      d = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var h = n - e;
    for (o = 1; o <= h && t[n - o] === s[d - o]; o++);
    return (lo = s.slice(e, 1 < o ? 1 - o : void 0));
  }
  function uo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function co() {
    return !0;
  }
  function Yl() {
    return !1;
  }
  function yt(e) {
    function t(n, o, s, d, h) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = h),
        (this.currentTarget = null));
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(d) : d[p]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? co
          : Yl),
        (this.isPropagationStopped = Yl),
        this
      );
    }
    return (
      L(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = co));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = co));
        },
        persist: function () {},
        isPersistent: co,
      }),
      t
    );
  }
  var pa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Rs = yt(pa),
    dr = L({}, pa, { view: 0, detail: 0 }),
    Gh = yt(dr),
    Ms,
    Os,
    ur,
    ho = L({}, dr, {
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
      getModifierState: Ds,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ur &&
              (ur && e.type === "mousemove"
                ? ((Ms = e.screenX - ur.screenX), (Os = e.screenY - ur.screenY))
                : (Os = Ms = 0),
              (ur = e)),
            Ms);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Os;
      },
    }),
    Ql = yt(ho),
    zh = L({}, ho, { dataTransfer: 0 }),
    Hh = yt(zh),
    Bh = L({}, dr, { relatedTarget: 0 }),
    Is = yt(Bh),
    Fh = L({}, pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $h = yt(Fh),
    Wh = L({}, pa, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Kh = yt(Wh),
    Vh = L({}, pa, { data: 0 }),
    Xl = yt(Vh),
    Yh = {
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
    Qh = {
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
    Xh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Xh[e])
        ? !!t[e]
        : !1;
  }
  function Ds() {
    return Jh;
  }
  var Zh = L({}, dr, {
      key: function (e) {
        if (e.key) {
          var t = Yh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = uo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Qh[e.keyCode] || "Unidentified"
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
      getModifierState: Ds,
      charCode: function (e) {
        return e.type === "keypress" ? uo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? uo(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    em = yt(Zh),
    tm = L({}, ho, {
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
    Jl = yt(tm),
    nm = L({}, dr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ds,
    }),
    am = yt(nm),
    rm = L({}, pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    om = yt(rm),
    sm = L({}, ho, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    im = yt(sm),
    lm = [9, 13, 27, 32],
    Ls = x && "CompositionEvent" in window,
    cr = null;
  x && "documentMode" in document && (cr = document.documentMode);
  var dm = x && "TextEvent" in window && !cr,
    Zl = x && (!Ls || (cr && 8 < cr && 11 >= cr)),
    ed = " ",
    td = !1;
  function nd(e, t) {
    switch (e) {
      case "keyup":
        return lm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ad(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var ga = !1;
  function um(e, t) {
    switch (e) {
      case "compositionend":
        return ad(t);
      case "keypress":
        return t.which !== 32 ? null : ((td = !0), ed);
      case "textInput":
        return ((e = t.data), e === ed && td ? null : e);
      default:
        return null;
    }
  }
  function cm(e, t) {
    if (ga)
      return e === "compositionend" || (!Ls && nd(e, t))
        ? ((e = Vl()), (lo = Ts = mn = null), (ga = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hm = {
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
  function rd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hm[e.type] : t === "textarea";
  }
  function od(e, t, n, o) {
    (Yr(o),
      (t = vo(t, "onChange")),
      0 < t.length &&
        ((n = new Rs("onChange", "change", null, n, o)),
        e.push({ event: n, listeners: t })));
  }
  var hr = null,
    mr = null;
  function mm(e) {
    Ed(e, 0);
  }
  function mo(e) {
    var t = ba(e);
    if (Ba(t)) return e;
  }
  function fm(e, t) {
    if (e === "change") return t;
  }
  var sd = !1;
  if (x) {
    var Ps;
    if (x) {
      var Us = "oninput" in document;
      if (!Us) {
        var id = document.createElement("div");
        (id.setAttribute("oninput", "return;"),
          (Us = typeof id.oninput == "function"));
      }
      Ps = Us;
    } else Ps = !1;
    sd = Ps && (!document.documentMode || 9 < document.documentMode);
  }
  function ld() {
    hr && (hr.detachEvent("onpropertychange", dd), (mr = hr = null));
  }
  function dd(e) {
    if (e.propertyName === "value" && mo(mr)) {
      var t = [];
      (od(t, mr, e, Ya(e)), Xa(mm, t));
    }
  }
  function pm(e, t, n) {
    e === "focusin"
      ? (ld(), (hr = t), (mr = n), hr.attachEvent("onpropertychange", dd))
      : e === "focusout" && ld();
  }
  function gm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return mo(mr);
  }
  function vm(e, t) {
    if (e === "click") return mo(t);
  }
  function xm(e, t) {
    if (e === "input" || e === "change") return mo(t);
  }
  function ym(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Pt = typeof Object.is == "function" ? Object.is : ym;
  function fr(e, t) {
    if (Pt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var s = n[o];
      if (!v.call(t, s) || !Pt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function ud(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function cd(e, t) {
    var n = ud(e);
    e = 0;
    for (var o; n;) {
      if (n.nodeType === 3) {
        if (((o = e + n.textContent.length), e <= t && o >= t))
          return { node: n, offset: t - e };
        e = o;
      }
      e: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ud(n);
    }
  }
  function hd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? hd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function md() {
    for (var e = window, t = sn(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = sn(e.document);
    }
    return t;
  }
  function qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function wm(e) {
    var t = md(),
      n = e.focusedElem,
      o = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      hd(n.ownerDocument.documentElement, n)
    ) {
      if (o !== null && qs(n)) {
        if (
          ((t = o.start),
          (e = o.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var s = n.textContent.length,
            d = Math.min(o.start, s);
          ((o = o.end === void 0 ? d : Math.min(o.end, s)),
            !e.extend && d > o && ((s = o), (o = d), (d = s)),
            (s = cd(n, d)));
          var h = cd(n, o);
          s &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            d > o
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var bm = x && "documentMode" in document && 11 >= document.documentMode,
    va = null,
    Gs = null,
    pr = null,
    zs = !1;
  function fd(e, t, n) {
    var o =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zs ||
      va == null ||
      va !== sn(o) ||
      ((o = va),
      "selectionStart" in o && qs(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (pr && fr(pr, o)) ||
        ((pr = o),
        (o = vo(Gs, "onSelect")),
        0 < o.length &&
          ((t = new Rs("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: o }),
          (t.target = va))));
  }
  function fo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var xa = {
      animationend: fo("Animation", "AnimationEnd"),
      animationiteration: fo("Animation", "AnimationIteration"),
      animationstart: fo("Animation", "AnimationStart"),
      transitionend: fo("Transition", "TransitionEnd"),
    },
    Hs = {},
    pd = {};
  x &&
    ((pd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xa.animationend.animation,
      delete xa.animationiteration.animation,
      delete xa.animationstart.animation),
    "TransitionEvent" in window || delete xa.transitionend.transition);
  function po(e) {
    if (Hs[e]) return Hs[e];
    if (!xa[e]) return e;
    var t = xa[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in pd) return (Hs[e] = t[n]);
    return e;
  }
  var gd = po("animationend"),
    vd = po("animationiteration"),
    xd = po("animationstart"),
    yd = po("transitionend"),
    wd = new Map(),
    bd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function fn(e, t) {
    (wd.set(e, t), m(t, [e]));
  }
  for (var Bs = 0; Bs < bd.length; Bs++) {
    var Fs = bd[Bs],
      Sm = Fs.toLowerCase(),
      Em = Fs[0].toUpperCase() + Fs.slice(1);
    fn(Sm, "on" + Em);
  }
  (fn(gd, "onAnimationEnd"),
    fn(vd, "onAnimationIteration"),
    fn(xd, "onAnimationStart"),
    fn("dblclick", "onDoubleClick"),
    fn("focusin", "onFocus"),
    fn("focusout", "onBlur"),
    fn(yd, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var gr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Nm = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(gr),
    );
  function Sd(e, t, n) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = n), It(o, t, void 0, e), (e.currentTarget = null));
  }
  function Ed(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n],
        s = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var h = o.length - 1; 0 <= h; h--) {
            var p = o[h],
              b = p.instance,
              R = p.currentTarget;
            if (((p = p.listener), b !== d && s.isPropagationStopped()))
              break e;
            (Sd(s, p, R), (d = b));
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((p = o[h]),
              (b = p.instance),
              (R = p.currentTarget),
              (p = p.listener),
              b !== d && s.isPropagationStopped())
            )
              break e;
            (Sd(s, p, R), (d = b));
          }
      }
    }
    if (Ue) throw ((e = Ot), (Ue = !1), (Ot = null), e);
  }
  function Oe(e, t) {
    var n = t[Js];
    n === void 0 && (n = t[Js] = new Set());
    var o = e + "__bubble";
    n.has(o) || (Nd(t, e, 2, !1), n.add(o));
  }
  function $s(e, t, n) {
    var o = 0;
    (t && (o |= 4), Nd(n, e, o, t));
  }
  var go = "_reactListening" + Math.random().toString(36).slice(2);
  function vr(e) {
    if (!e[go]) {
      ((e[go] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (Nm.has(n) || $s(n, !1, e), $s(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[go] || ((t[go] = !0), $s("selectionchange", !1, t));
    }
  }
  function Nd(e, t, n, o) {
    switch (Kl(t)) {
      case 1:
        var s = Uh;
        break;
      case 4:
        s = qh;
        break;
      default:
        s = Cs;
    }
    ((n = s.bind(null, t, n, e)),
      (s = void 0),
      !Dn ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      o
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1));
  }
  function Ws(e, t, n, o, s) {
    var d = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var h = o.tag;
        if (h === 3 || h === 4) {
          var p = o.stateNode.containerInfo;
          if (p === s || (p.nodeType === 8 && p.parentNode === s)) break;
          if (h === 4)
            for (h = o.return; h !== null;) {
              var b = h.tag;
              if (
                (b === 3 || b === 4) &&
                ((b = h.stateNode.containerInfo),
                b === s || (b.nodeType === 8 && b.parentNode === s))
              )
                return;
              h = h.return;
            }
          for (; p !== null;) {
            if (((h = Gn(p)), h === null)) return;
            if (((b = h.tag), b === 5 || b === 6)) {
              o = d = h;
              continue e;
            }
            p = p.parentNode;
          }
        }
        o = o.return;
      }
    Xa(function () {
      var R = d,
        B = Ya(n),
        F = [];
      e: {
        var G = wd.get(e);
        if (G !== void 0) {
          var J = Rs,
            ee = e;
          switch (e) {
            case "keypress":
              if (uo(n) === 0) break e;
            case "keydown":
            case "keyup":
              J = em;
              break;
            case "focusin":
              ((ee = "focus"), (J = Is));
              break;
            case "focusout":
              ((ee = "blur"), (J = Is));
              break;
            case "beforeblur":
            case "afterblur":
              J = Is;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = Ql;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = Hh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = am;
              break;
            case gd:
            case vd:
            case xd:
              J = $h;
              break;
            case yd:
              J = om;
              break;
            case "scroll":
              J = Gh;
              break;
            case "wheel":
              J = im;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = Kh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = Jl;
          }
          var ne = (t & 4) !== 0,
            ze = !ne && e === "scroll",
            A = ne ? (G !== null ? G + "Capture" : null) : G;
          ne = [];
          for (var S = R, j; S !== null;) {
            j = S;
            var W = j.stateNode;
            if (
              (j.tag === 5 &&
                W !== null &&
                ((j = W),
                A !== null &&
                  ((W = Qt(S, A)), W != null && ne.push(xr(S, W, j)))),
              ze)
            )
              break;
            S = S.return;
          }
          0 < ne.length &&
            ((G = new J(G, ee, null, n, B)),
            F.push({ event: G, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((G = e === "mouseover" || e === "pointerover"),
            (J = e === "mouseout" || e === "pointerout"),
            G &&
              n !== Va &&
              (ee = n.relatedTarget || n.fromElement) &&
              (Gn(ee) || ee[Jt]))
          )
            break e;
          if (
            (J || G) &&
            ((G =
              B.window === B
                ? B
                : (G = B.ownerDocument)
                  ? G.defaultView || G.parentWindow
                  : window),
            J
              ? ((ee = n.relatedTarget || n.toElement),
                (J = R),
                (ee = ee ? Gn(ee) : null),
                ee !== null &&
                  ((ze = gt(ee)),
                  ee !== ze || (ee.tag !== 5 && ee.tag !== 6)) &&
                  (ee = null))
              : ((J = null), (ee = R)),
            J !== ee)
          ) {
            if (
              ((ne = Ql),
              (W = "onMouseLeave"),
              (A = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ne = Jl),
                (W = "onPointerLeave"),
                (A = "onPointerEnter"),
                (S = "pointer")),
              (ze = J == null ? G : ba(J)),
              (j = ee == null ? G : ba(ee)),
              (G = new ne(W, S + "leave", J, n, B)),
              (G.target = ze),
              (G.relatedTarget = j),
              (W = null),
              Gn(B) === R &&
                ((ne = new ne(A, S + "enter", ee, n, B)),
                (ne.target = j),
                (ne.relatedTarget = ze),
                (W = ne)),
              (ze = W),
              J && ee)
            )
              t: {
                for (ne = J, A = ee, S = 0, j = ne; j; j = ya(j)) S++;
                for (j = 0, W = A; W; W = ya(W)) j++;
                for (; 0 < S - j;) ((ne = ya(ne)), S--);
                for (; 0 < j - S;) ((A = ya(A)), j--);
                for (; S--;) {
                  if (ne === A || (A !== null && ne === A.alternate)) break t;
                  ((ne = ya(ne)), (A = ya(A)));
                }
                ne = null;
              }
            else ne = null;
            (J !== null && kd(F, G, J, ne, !1),
              ee !== null && ze !== null && kd(F, ze, ee, ne, !0));
          }
        }
        e: {
          if (
            ((G = R ? ba(R) : window),
            (J = G.nodeName && G.nodeName.toLowerCase()),
            J === "select" || (J === "input" && G.type === "file"))
          )
            var ae = fm;
          else if (rd(G))
            if (sd) ae = xm;
            else {
              ae = gm;
              var le = pm;
            }
          else
            (J = G.nodeName) &&
              J.toLowerCase() === "input" &&
              (G.type === "checkbox" || G.type === "radio") &&
              (ae = vm);
          if (ae && (ae = ae(e, R))) {
            od(F, ae, n, B);
            break e;
          }
          (le && le(e, G, R),
            e === "focusout" &&
              (le = G._wrapperState) &&
              le.controlled &&
              G.type === "number" &&
              Fa(G, "number", G.value));
        }
        switch (((le = R ? ba(R) : window), e)) {
          case "focusin":
            (rd(le) || le.contentEditable === "true") &&
              ((va = le), (Gs = R), (pr = null));
            break;
          case "focusout":
            pr = Gs = va = null;
            break;
          case "mousedown":
            zs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((zs = !1), fd(F, n, B));
            break;
          case "selectionchange":
            if (bm) break;
          case "keydown":
          case "keyup":
            fd(F, n, B);
        }
        var de;
        if (Ls)
          e: {
            switch (e) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          ga
            ? nd(e, n) && (ce = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ce = "onCompositionStart");
        (ce &&
          (Zl &&
            n.locale !== "ko" &&
            (ga || ce !== "onCompositionStart"
              ? ce === "onCompositionEnd" && ga && (de = Vl())
              : ((mn = B),
                (Ts = "value" in mn ? mn.value : mn.textContent),
                (ga = !0))),
          (le = vo(R, ce)),
          0 < le.length &&
            ((ce = new Xl(ce, e, null, n, B)),
            F.push({ event: ce, listeners: le }),
            de
              ? (ce.data = de)
              : ((de = ad(n)), de !== null && (ce.data = de)))),
          (de = dm ? um(e, n) : cm(e, n)) &&
            ((R = vo(R, "onBeforeInput")),
            0 < R.length &&
              ((B = new Xl("onBeforeInput", "beforeinput", null, n, B)),
              F.push({ event: B, listeners: R }),
              (B.data = de))));
      }
      Ed(F, t);
    });
  }
  function xr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function vo(e, t) {
    for (var n = t + "Capture", o = []; e !== null;) {
      var s = e,
        d = s.stateNode;
      (s.tag === 5 &&
        d !== null &&
        ((s = d),
        (d = Qt(e, n)),
        d != null && o.unshift(xr(e, d, s)),
        (d = Qt(e, t)),
        d != null && o.push(xr(e, d, s))),
        (e = e.return));
    }
    return o;
  }
  function ya(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function kd(e, t, n, o, s) {
    for (var d = t._reactName, h = []; n !== null && n !== o;) {
      var p = n,
        b = p.alternate,
        R = p.stateNode;
      if (b !== null && b === o) break;
      (p.tag === 5 &&
        R !== null &&
        ((p = R),
        s
          ? ((b = Qt(n, d)), b != null && h.unshift(xr(n, b, p)))
          : s || ((b = Qt(n, d)), b != null && h.push(xr(n, b, p)))),
        (n = n.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var km = /\r\n?/g,
    _m = /\u0000|\uFFFD/g;
  function _d(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        km,
        `
`,
      )
      .replace(_m, "");
  }
  function xo(e, t, n) {
    if (((t = _d(t)), _d(e) !== t && n)) throw Error(l(425));
  }
  function yo() {}
  var Ks = null,
    Vs = null;
  function Ys(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qs = typeof setTimeout == "function" ? setTimeout : void 0,
    Am = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ad = typeof Promise == "function" ? Promise : void 0,
    Cm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ad < "u"
          ? function (e) {
              return Ad.resolve(null).then(e).catch(jm);
            }
          : Qs;
  function jm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xs(e, t) {
    var n = t,
      o = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (o === 0) {
            (e.removeChild(s), lr(t));
            return;
          }
          o--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || o++;
      n = s;
    } while (n);
    lr(t);
  }
  function pn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Cd(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var wa = Math.random().toString(36).slice(2),
    $t = "__reactFiber$" + wa,
    yr = "__reactProps$" + wa,
    Jt = "__reactContainer$" + wa,
    Js = "__reactEvents$" + wa,
    Tm = "__reactListeners$" + wa,
    Rm = "__reactHandles$" + wa;
  function Gn(e) {
    var t = e[$t];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[Jt] || n[$t])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Cd(e); e !== null;) {
            if ((n = e[$t])) return n;
            e = Cd(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function wr(e) {
    return (
      (e = e[$t] || e[Jt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function ba(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function wo(e) {
    return e[yr] || null;
  }
  var Zs = [],
    Sa = -1;
  function gn(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > Sa || ((e.current = Zs[Sa]), (Zs[Sa] = null), Sa--);
  }
  function je(e, t) {
    (Sa++, (Zs[Sa] = e.current), (e.current = t));
  }
  var vn = {},
    Xe = gn(vn),
    lt = gn(!1),
    zn = vn;
  function Ea(e, t) {
    var n = e.type.contextTypes;
    if (!n) return vn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      d;
    for (d in n) s[d] = t[d];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function dt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function bo() {
    (Ie(lt), Ie(Xe));
  }
  function jd(e, t, n) {
    if (Xe.current !== vn) throw Error(l(168));
    (je(Xe, t), je(lt, n));
  }
  function Td(e, t, n) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
      return n;
    o = o.getChildContext();
    for (var s in o) if (!(s in t)) throw Error(l(108, te(e) || "Unknown", s));
    return L({}, n, o);
  }
  function So(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        vn),
      (zn = Xe.current),
      je(Xe, e),
      je(lt, lt.current),
      !0
    );
  }
  function Rd(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(l(169));
    (n
      ? ((e = Td(e, t, zn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Ie(lt),
        Ie(Xe),
        je(Xe, e))
      : Ie(lt),
      je(lt, n));
  }
  var Zt = null,
    Eo = !1,
    ei = !1;
  function Md(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  function Mm(e) {
    ((Eo = !0), Md(e));
  }
  function xn() {
    if (!ei && Zt !== null) {
      ei = !0;
      var e = 0,
        t = Ee;
      try {
        var n = Zt;
        for (Ee = 1; e < n.length; e++) {
          var o = n[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Zt = null), (Eo = !1));
      } catch (s) {
        throw (Zt !== null && (Zt = Zt.slice(e + 1)), eo(Pn, xn), s);
      } finally {
        ((Ee = t), (ei = !1));
      }
    }
    return null;
  }
  var Na = [],
    ka = 0,
    No = null,
    ko = 0,
    kt = [],
    _t = 0,
    Hn = null,
    en = 1,
    tn = "";
  function Bn(e, t) {
    ((Na[ka++] = ko), (Na[ka++] = No), (No = e), (ko = t));
  }
  function Od(e, t, n) {
    ((kt[_t++] = en), (kt[_t++] = tn), (kt[_t++] = Hn), (Hn = e));
    var o = en;
    e = tn;
    var s = 32 - xt(o) - 1;
    ((o &= ~(1 << s)), (n += 1));
    var d = 32 - xt(t) + s;
    if (30 < d) {
      var h = s - (s % 5);
      ((d = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (s -= h),
        (en = (1 << (32 - xt(t) + s)) | (n << s) | o),
        (tn = d + e));
    } else ((en = (1 << d) | (n << s) | o), (tn = e));
  }
  function ti(e) {
    e.return !== null && (Bn(e, 1), Od(e, 1, 0));
  }
  function ni(e) {
    for (; e === No;)
      ((No = Na[--ka]), (Na[ka] = null), (ko = Na[--ka]), (Na[ka] = null));
    for (; e === Hn;)
      ((Hn = kt[--_t]),
        (kt[_t] = null),
        (tn = kt[--_t]),
        (kt[_t] = null),
        (en = kt[--_t]),
        (kt[_t] = null));
  }
  var wt = null,
    bt = null,
    De = !1,
    Ut = null;
  function Id(e, t) {
    var n = Tt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Dd(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (wt = e), (bt = pn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (wt = e), (bt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Hn !== null ? { id: en, overflow: tn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Tt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (wt = e),
              (bt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ai(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ri(e) {
    if (De) {
      var t = bt;
      if (t) {
        var n = t;
        if (!Dd(e, t)) {
          if (ai(e)) throw Error(l(418));
          t = pn(n.nextSibling);
          var o = wt;
          t && Dd(e, t)
            ? Id(o, n)
            : ((e.flags = (e.flags & -4097) | 2), (De = !1), (wt = e));
        }
      } else {
        if (ai(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (De = !1), (wt = e));
      }
    }
  }
  function Ld(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    wt = e;
  }
  function _o(e) {
    if (e !== wt) return !1;
    if (!De) return (Ld(e), (De = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ys(e.type, e.memoizedProps))),
      t && (t = bt))
    ) {
      if (ai(e)) throw (Pd(), Error(l(418)));
      for (; t;) (Id(e, t), (t = pn(t.nextSibling)));
    }
    if ((Ld(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                bt = pn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        bt = null;
      }
    } else bt = wt ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pd() {
    for (var e = bt; e;) e = pn(e.nextSibling);
  }
  function _a() {
    ((bt = wt = null), (De = !1));
  }
  function oi(e) {
    Ut === null ? (Ut = [e]) : Ut.push(e);
  }
  var Om = se.ReactCurrentBatchConfig;
  function br(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(l(309));
          var o = n.stateNode;
        }
        if (!o) throw Error(l(147, e));
        var s = o,
          d = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === d
          ? t.ref
          : ((t = function (h) {
              var p = s.refs;
              h === null ? delete p[d] : (p[d] = h);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Ao(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function Ud(e) {
    var t = e._init;
    return t(e._payload);
  }
  function qd(e) {
    function t(A, S) {
      if (e) {
        var j = A.deletions;
        j === null ? ((A.deletions = [S]), (A.flags |= 16)) : j.push(S);
      }
    }
    function n(A, S) {
      if (!e) return null;
      for (; S !== null;) (t(A, S), (S = S.sibling));
      return null;
    }
    function o(A, S) {
      for (A = new Map(); S !== null;)
        (S.key !== null ? A.set(S.key, S) : A.set(S.index, S), (S = S.sibling));
      return A;
    }
    function s(A, S) {
      return ((A = _n(A, S)), (A.index = 0), (A.sibling = null), A);
    }
    function d(A, S, j) {
      return (
        (A.index = j),
        e
          ? ((j = A.alternate),
            j !== null
              ? ((j = j.index), j < S ? ((A.flags |= 2), S) : j)
              : ((A.flags |= 2), S))
          : ((A.flags |= 1048576), S)
      );
    }
    function h(A) {
      return (e && A.alternate === null && (A.flags |= 2), A);
    }
    function p(A, S, j, W) {
      return S === null || S.tag !== 6
        ? ((S = Qi(j, A.mode, W)), (S.return = A), S)
        : ((S = s(S, j)), (S.return = A), S);
    }
    function b(A, S, j, W) {
      var ae = j.type;
      return ae === q
        ? B(A, S, j.props.children, W, j.key)
        : S !== null &&
            (S.elementType === ae ||
              (typeof ae == "object" &&
                ae !== null &&
                ae.$$typeof === pe &&
                Ud(ae) === S.type))
          ? ((W = s(S, j.props)), (W.ref = br(A, S, j)), (W.return = A), W)
          : ((W = Xo(j.type, j.key, j.props, null, A.mode, W)),
            (W.ref = br(A, S, j)),
            (W.return = A),
            W);
    }
    function R(A, S, j, W) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== j.containerInfo ||
        S.stateNode.implementation !== j.implementation
        ? ((S = Xi(j, A.mode, W)), (S.return = A), S)
        : ((S = s(S, j.children || [])), (S.return = A), S);
    }
    function B(A, S, j, W, ae) {
      return S === null || S.tag !== 7
        ? ((S = Xn(j, A.mode, W, ae)), (S.return = A), S)
        : ((S = s(S, j)), (S.return = A), S);
    }
    function F(A, S, j) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return ((S = Qi("" + S, A.mode, j)), (S.return = A), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case fe:
            return (
              (j = Xo(S.type, S.key, S.props, null, A.mode, j)),
              (j.ref = br(A, null, S)),
              (j.return = A),
              j
            );
          case z:
            return ((S = Xi(S, A.mode, j)), (S.return = A), S);
          case pe:
            var W = S._init;
            return F(A, W(S._payload), j);
        }
        if (Be(S) || U(S))
          return ((S = Xn(S, A.mode, j, null)), (S.return = A), S);
        Ao(A, S);
      }
      return null;
    }
    function G(A, S, j, W) {
      var ae = S !== null ? S.key : null;
      if ((typeof j == "string" && j !== "") || typeof j == "number")
        return ae !== null ? null : p(A, S, "" + j, W);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case fe:
            return j.key === ae ? b(A, S, j, W) : null;
          case z:
            return j.key === ae ? R(A, S, j, W) : null;
          case pe:
            return ((ae = j._init), G(A, S, ae(j._payload), W));
        }
        if (Be(j) || U(j)) return ae !== null ? null : B(A, S, j, W, null);
        Ao(A, j);
      }
      return null;
    }
    function J(A, S, j, W, ae) {
      if ((typeof W == "string" && W !== "") || typeof W == "number")
        return ((A = A.get(j) || null), p(S, A, "" + W, ae));
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case fe:
            return (
              (A = A.get(W.key === null ? j : W.key) || null),
              b(S, A, W, ae)
            );
          case z:
            return (
              (A = A.get(W.key === null ? j : W.key) || null),
              R(S, A, W, ae)
            );
          case pe:
            var le = W._init;
            return J(A, S, j, le(W._payload), ae);
        }
        if (Be(W) || U(W))
          return ((A = A.get(j) || null), B(S, A, W, ae, null));
        Ao(S, W);
      }
      return null;
    }
    function ee(A, S, j, W) {
      for (
        var ae = null, le = null, de = S, ce = (S = 0), Ve = null;
        de !== null && ce < j.length;
        ce++
      ) {
        de.index > ce ? ((Ve = de), (de = null)) : (Ve = de.sibling);
        var be = G(A, de, j[ce], W);
        if (be === null) {
          de === null && (de = Ve);
          break;
        }
        (e && de && be.alternate === null && t(A, de),
          (S = d(be, S, ce)),
          le === null ? (ae = be) : (le.sibling = be),
          (le = be),
          (de = Ve));
      }
      if (ce === j.length) return (n(A, de), De && Bn(A, ce), ae);
      if (de === null) {
        for (; ce < j.length; ce++)
          ((de = F(A, j[ce], W)),
            de !== null &&
              ((S = d(de, S, ce)),
              le === null ? (ae = de) : (le.sibling = de),
              (le = de)));
        return (De && Bn(A, ce), ae);
      }
      for (de = o(A, de); ce < j.length; ce++)
        ((Ve = J(de, A, ce, j[ce], W)),
          Ve !== null &&
            (e &&
              Ve.alternate !== null &&
              de.delete(Ve.key === null ? ce : Ve.key),
            (S = d(Ve, S, ce)),
            le === null ? (ae = Ve) : (le.sibling = Ve),
            (le = Ve)));
      return (
        e &&
          de.forEach(function (An) {
            return t(A, An);
          }),
        De && Bn(A, ce),
        ae
      );
    }
    function ne(A, S, j, W) {
      var ae = U(j);
      if (typeof ae != "function") throw Error(l(150));
      if (((j = ae.call(j)), j == null)) throw Error(l(151));
      for (
        var le = (ae = null), de = S, ce = (S = 0), Ve = null, be = j.next();
        de !== null && !be.done;
        ce++, be = j.next()
      ) {
        de.index > ce ? ((Ve = de), (de = null)) : (Ve = de.sibling);
        var An = G(A, de, be.value, W);
        if (An === null) {
          de === null && (de = Ve);
          break;
        }
        (e && de && An.alternate === null && t(A, de),
          (S = d(An, S, ce)),
          le === null ? (ae = An) : (le.sibling = An),
          (le = An),
          (de = Ve));
      }
      if (be.done) return (n(A, de), De && Bn(A, ce), ae);
      if (de === null) {
        for (; !be.done; ce++, be = j.next())
          ((be = F(A, be.value, W)),
            be !== null &&
              ((S = d(be, S, ce)),
              le === null ? (ae = be) : (le.sibling = be),
              (le = be)));
        return (De && Bn(A, ce), ae);
      }
      for (de = o(A, de); !be.done; ce++, be = j.next())
        ((be = J(de, A, ce, be.value, W)),
          be !== null &&
            (e &&
              be.alternate !== null &&
              de.delete(be.key === null ? ce : be.key),
            (S = d(be, S, ce)),
            le === null ? (ae = be) : (le.sibling = be),
            (le = be)));
      return (
        e &&
          de.forEach(function (mf) {
            return t(A, mf);
          }),
        De && Bn(A, ce),
        ae
      );
    }
    function ze(A, S, j, W) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === q &&
          j.key === null &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case fe:
            e: {
              for (var ae = j.key, le = S; le !== null;) {
                if (le.key === ae) {
                  if (((ae = j.type), ae === q)) {
                    if (le.tag === 7) {
                      (n(A, le.sibling),
                        (S = s(le, j.props.children)),
                        (S.return = A),
                        (A = S));
                      break e;
                    }
                  } else if (
                    le.elementType === ae ||
                    (typeof ae == "object" &&
                      ae !== null &&
                      ae.$$typeof === pe &&
                      Ud(ae) === le.type)
                  ) {
                    (n(A, le.sibling),
                      (S = s(le, j.props)),
                      (S.ref = br(A, le, j)),
                      (S.return = A),
                      (A = S));
                    break e;
                  }
                  n(A, le);
                  break;
                } else t(A, le);
                le = le.sibling;
              }
              j.type === q
                ? ((S = Xn(j.props.children, A.mode, W, j.key)),
                  (S.return = A),
                  (A = S))
                : ((W = Xo(j.type, j.key, j.props, null, A.mode, W)),
                  (W.ref = br(A, S, j)),
                  (W.return = A),
                  (A = W));
            }
            return h(A);
          case z:
            e: {
              for (le = j.key; S !== null;) {
                if (S.key === le)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === j.containerInfo &&
                    S.stateNode.implementation === j.implementation
                  ) {
                    (n(A, S.sibling),
                      (S = s(S, j.children || [])),
                      (S.return = A),
                      (A = S));
                    break e;
                  } else {
                    n(A, S);
                    break;
                  }
                else t(A, S);
                S = S.sibling;
              }
              ((S = Xi(j, A.mode, W)), (S.return = A), (A = S));
            }
            return h(A);
          case pe:
            return ((le = j._init), ze(A, S, le(j._payload), W));
        }
        if (Be(j)) return ee(A, S, j, W);
        if (U(j)) return ne(A, S, j, W);
        Ao(A, j);
      }
      return (typeof j == "string" && j !== "") || typeof j == "number"
        ? ((j = "" + j),
          S !== null && S.tag === 6
            ? (n(A, S.sibling), (S = s(S, j)), (S.return = A), (A = S))
            : (n(A, S), (S = Qi(j, A.mode, W)), (S.return = A), (A = S)),
          h(A))
        : n(A, S);
    }
    return ze;
  }
  var Aa = qd(!0),
    Gd = qd(!1),
    Co = gn(null),
    jo = null,
    Ca = null,
    si = null;
  function ii() {
    si = Ca = jo = null;
  }
  function li(e) {
    var t = Co.current;
    (Ie(Co), (e._currentValue = t));
  }
  function di(e, t, n) {
    for (; e !== null;) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ja(e, t) {
    ((jo = e),
      (si = Ca = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ut = !0), (e.firstContext = null)));
  }
  function At(e) {
    var t = e._currentValue;
    if (si !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Ca === null)) {
        if (jo === null) throw Error(l(308));
        ((Ca = e), (jo.dependencies = { lanes: 0, firstContext: e }));
      } else Ca = Ca.next = e;
    return t;
  }
  var Fn = null;
  function ui(e) {
    Fn === null ? (Fn = [e]) : Fn.push(e);
  }
  function zd(e, t, n, o) {
    var s = t.interleaved;
    return (
      s === null ? ((n.next = n), ui(t)) : ((n.next = s.next), (s.next = n)),
      (t.interleaved = n),
      nn(e, o)
    );
  }
  function nn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var yn = !1;
  function ci(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Hd(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function an(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function wn(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (we & 2) !== 0)) {
      var s = o.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (o.pending = t),
        nn(e, n)
      );
    }
    return (
      (s = o.interleaved),
      s === null ? ((t.next = t), ui(o)) : ((t.next = s.next), (s.next = t)),
      (o.interleaved = t),
      nn(e, n)
    );
  }
  function To(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (n |= o), (t.lanes = n), rr(e, n));
    }
  }
  function Bd(e, t) {
    var n = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), n === o)) {
      var s = null,
        d = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (d === null ? (s = d = h) : (d = d.next = h), (n = n.next));
        } while (n !== null);
        d === null ? (s = d = t) : (d = d.next = t);
      } else s = d = t;
      ((n = {
        baseState: o.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: d,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Ro(e, t, n, o) {
    var s = e.updateQueue;
    yn = !1;
    var d = s.firstBaseUpdate,
      h = s.lastBaseUpdate,
      p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var b = p,
        R = b.next;
      ((b.next = null), h === null ? (d = R) : (h.next = R), (h = b));
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (p = B.lastBaseUpdate),
        p !== h &&
          (p === null ? (B.firstBaseUpdate = R) : (p.next = R),
          (B.lastBaseUpdate = b)));
    }
    if (d !== null) {
      var F = s.baseState;
      ((h = 0), (B = R = b = null), (p = d));
      do {
        var G = p.lane,
          J = p.eventTime;
        if ((o & G) === G) {
          B !== null &&
            (B = B.next =
              {
                eventTime: J,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var ee = e,
              ne = p;
            switch (((G = t), (J = n), ne.tag)) {
              case 1:
                if (((ee = ne.payload), typeof ee == "function")) {
                  F = ee.call(J, F, G);
                  break e;
                }
                F = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = ne.payload),
                  (G = typeof ee == "function" ? ee.call(J, F, G) : ee),
                  G == null)
                )
                  break e;
                F = L({}, F, G);
                break e;
              case 2:
                yn = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (G = s.effects),
            G === null ? (s.effects = [p]) : G.push(p));
        } else
          ((J = {
            eventTime: J,
            lane: G,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            B === null ? ((R = B = J), (b = F)) : (B = B.next = J),
            (h |= G));
        if (((p = p.next), p === null)) {
          if (((p = s.shared.pending), p === null)) break;
          ((G = p),
            (p = G.next),
            (G.next = null),
            (s.lastBaseUpdate = G),
            (s.shared.pending = null));
        }
      } while (!0);
      if (
        (B === null && (b = F),
        (s.baseState = b),
        (s.firstBaseUpdate = R),
        (s.lastBaseUpdate = B),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do ((h |= s.lane), (s = s.next));
        while (s !== t);
      } else d === null && (s.shared.lanes = 0);
      ((Kn |= h), (e.lanes = h), (e.memoizedState = F));
    }
  }
  function Fd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          s = o.callback;
        if (s !== null) {
          if (((o.callback = null), (o = n), typeof s != "function"))
            throw Error(l(191, s));
          s.call(o);
        }
      }
  }
  var Sr = {},
    Wt = gn(Sr),
    Er = gn(Sr),
    Nr = gn(Sr);
  function $n(e) {
    if (e === Sr) throw Error(l(174));
    return e;
  }
  function hi(e, t) {
    switch ((je(Nr, t), je(Er, e), je(Wt, Sr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ta(t, e)));
    }
    (Ie(Wt), je(Wt, t));
  }
  function Ta() {
    (Ie(Wt), Ie(Er), Ie(Nr));
  }
  function $d(e) {
    $n(Nr.current);
    var t = $n(Wt.current),
      n = ta(t, e.type);
    t !== n && (je(Er, e), je(Wt, n));
  }
  function mi(e) {
    Er.current === e && (Ie(Wt), Ie(Er));
  }
  var Le = gn(0);
  function Mo(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var fi = [];
  function pi() {
    for (var e = 0; e < fi.length; e++)
      fi[e]._workInProgressVersionPrimary = null;
    fi.length = 0;
  }
  var Oo = se.ReactCurrentDispatcher,
    gi = se.ReactCurrentBatchConfig,
    Wn = 0,
    Pe = null,
    Fe = null,
    We = null,
    Io = !1,
    kr = !1,
    _r = 0,
    Im = 0;
  function Je() {
    throw Error(l(321));
  }
  function vi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Pt(e[n], t[n])) return !1;
    return !0;
  }
  function xi(e, t, n, o, s, d) {
    if (
      ((Wn = d),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Oo.current = e === null || e.memoizedState === null ? Um : qm),
      (e = n(o, s)),
      kr)
    ) {
      d = 0;
      do {
        if (((kr = !1), (_r = 0), 25 <= d)) throw Error(l(301));
        ((d += 1),
          (We = Fe = null),
          (t.updateQueue = null),
          (Oo.current = Gm),
          (e = n(o, s)));
      } while (kr);
    }
    if (
      ((Oo.current = Po),
      (t = Fe !== null && Fe.next !== null),
      (Wn = 0),
      (We = Fe = Pe = null),
      (Io = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function yi() {
    var e = _r !== 0;
    return ((_r = 0), e);
  }
  function Kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (We === null ? (Pe.memoizedState = We = e) : (We = We.next = e), We);
  }
  function Ct() {
    if (Fe === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = We === null ? Pe.memoizedState : We.next;
    if (t !== null) ((We = t), (Fe = e));
    else {
      if (e === null) throw Error(l(310));
      ((Fe = e),
        (e = {
          memoizedState: Fe.memoizedState,
          baseState: Fe.baseState,
          baseQueue: Fe.baseQueue,
          queue: Fe.queue,
          next: null,
        }),
        We === null ? (Pe.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function Ar(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function wi(e) {
    var t = Ct(),
      n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var o = Fe,
      s = o.baseQueue,
      d = n.pending;
    if (d !== null) {
      if (s !== null) {
        var h = s.next;
        ((s.next = d.next), (d.next = h));
      }
      ((o.baseQueue = s = d), (n.pending = null));
    }
    if (s !== null) {
      ((d = s.next), (o = o.baseState));
      var p = (h = null),
        b = null,
        R = d;
      do {
        var B = R.lane;
        if ((Wn & B) === B)
          (b !== null &&
            (b = b.next =
              {
                lane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
            (o = R.hasEagerState ? R.eagerState : e(o, R.action)));
        else {
          var F = {
            lane: B,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          };
          (b === null ? ((p = b = F), (h = o)) : (b = b.next = F),
            (Pe.lanes |= B),
            (Kn |= B));
        }
        R = R.next;
      } while (R !== null && R !== d);
      (b === null ? (h = o) : (b.next = p),
        Pt(o, t.memoizedState) || (ut = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = b),
        (n.lastRenderedState = o));
    }
    if (((e = n.interleaved), e !== null)) {
      s = e;
      do ((d = s.lane), (Pe.lanes |= d), (Kn |= d), (s = s.next));
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function bi(e) {
    var t = Ct(),
      n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch,
      s = n.pending,
      d = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var h = (s = s.next);
      do ((d = e(d, h.action)), (h = h.next));
      while (h !== s);
      (Pt(d, t.memoizedState) || (ut = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (n.lastRenderedState = d));
    }
    return [d, o];
  }
  function Wd() {}
  function Kd(e, t) {
    var n = Pe,
      o = Ct(),
      s = t(),
      d = !Pt(o.memoizedState, s);
    if (
      (d && ((o.memoizedState = s), (ut = !0)),
      (o = o.queue),
      Si(Qd.bind(null, n, o, e), [e]),
      o.getSnapshot !== t || d || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Cr(9, Yd.bind(null, n, o, s, t), void 0, null),
        Ke === null)
      )
        throw Error(l(349));
      (Wn & 30) !== 0 || Vd(n, t, s);
    }
    return s;
  }
  function Vd(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Yd(e, t, n, o) {
    ((t.value = n), (t.getSnapshot = o), Xd(t) && Jd(e));
  }
  function Qd(e, t, n) {
    return n(function () {
      Xd(t) && Jd(e);
    });
  }
  function Xd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Pt(e, n);
    } catch {
      return !0;
    }
  }
  function Jd(e) {
    var t = nn(e, 1);
    t !== null && Ht(t, e, 1, -1);
  }
  function Zd(e) {
    var t = Kt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ar,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Pm.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function Cr(e, t, n, o) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: o, next: null }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function eu() {
    return Ct().memoizedState;
  }
  function Do(e, t, n, o) {
    var s = Kt();
    ((Pe.flags |= e),
      (s.memoizedState = Cr(1 | t, n, void 0, o === void 0 ? null : o)));
  }
  function Lo(e, t, n, o) {
    var s = Ct();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Fe !== null) {
      var h = Fe.memoizedState;
      if (((d = h.destroy), o !== null && vi(o, h.deps))) {
        s.memoizedState = Cr(t, n, d, o);
        return;
      }
    }
    ((Pe.flags |= e), (s.memoizedState = Cr(1 | t, n, d, o)));
  }
  function tu(e, t) {
    return Do(8390656, 8, e, t);
  }
  function Si(e, t) {
    return Lo(2048, 8, e, t);
  }
  function nu(e, t) {
    return Lo(4, 2, e, t);
  }
  function au(e, t) {
    return Lo(4, 4, e, t);
  }
  function ru(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ou(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      Lo(4, 4, ru.bind(null, t, e), n)
    );
  }
  function Ei() {}
  function su(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && vi(t, o[1])
      ? o[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function iu(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && vi(t, o[1])
      ? o[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function lu(e, t, n) {
    return (Wn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n))
      : (Pt(n, t) ||
          ((n = ro()), (Pe.lanes |= n), (Kn |= n), (e.baseState = !0)),
        t);
  }
  function Dm(e, t) {
    var n = Ee;
    ((Ee = n !== 0 && 4 > n ? n : 4), e(!0));
    var o = gi.transition;
    gi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Ee = n), (gi.transition = o));
    }
  }
  function du() {
    return Ct().memoizedState;
  }
  function Lm(e, t, n) {
    var o = Nn(e);
    if (
      ((n = {
        lane: o,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      uu(e))
    )
      cu(t, n);
    else if (((n = zd(e, t, n, o)), n !== null)) {
      var s = rt();
      (Ht(n, e, o, s), hu(n, t, o));
    }
  }
  function Pm(e, t, n) {
    var o = Nn(e),
      s = {
        lane: o,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (uu(e)) cu(t, s);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var h = t.lastRenderedState,
            p = d(h, n);
          if (((s.hasEagerState = !0), (s.eagerState = p), Pt(p, h))) {
            var b = t.interleaved;
            (b === null
              ? ((s.next = s), ui(t))
              : ((s.next = b.next), (b.next = s)),
              (t.interleaved = s));
            return;
          }
        } catch {
        } finally {
        }
      ((n = zd(e, t, s, o)),
        n !== null && ((s = rt()), Ht(n, e, o, s), hu(n, t, o)));
    }
  }
  function uu(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function cu(e, t) {
    kr = Io = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function hu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (n |= o), (t.lanes = n), rr(e, n));
    }
  }
  var Po = {
      readContext: At,
      useCallback: Je,
      useContext: Je,
      useEffect: Je,
      useImperativeHandle: Je,
      useInsertionEffect: Je,
      useLayoutEffect: Je,
      useMemo: Je,
      useReducer: Je,
      useRef: Je,
      useState: Je,
      useDebugValue: Je,
      useDeferredValue: Je,
      useTransition: Je,
      useMutableSource: Je,
      useSyncExternalStore: Je,
      useId: Je,
      unstable_isNewReconciler: !1,
    },
    Um = {
      readContext: At,
      useCallback: function (e, t) {
        return ((Kt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: At,
      useEffect: tu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Do(4194308, 4, ru.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Do(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Do(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Kt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var o = Kt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = Lm.bind(null, Pe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Kt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Zd,
      useDebugValue: Ei,
      useDeferredValue: function (e) {
        return (Kt().memoizedState = e);
      },
      useTransition: function () {
        var e = Zd(!1),
          t = e[0];
        return ((e = Dm.bind(null, e[1])), (Kt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var o = Pe,
          s = Kt();
        if (De) {
          if (n === void 0) throw Error(l(407));
          n = n();
        } else {
          if (((n = t()), Ke === null)) throw Error(l(349));
          (Wn & 30) !== 0 || Vd(o, t, n);
        }
        s.memoizedState = n;
        var d = { value: n, getSnapshot: t };
        return (
          (s.queue = d),
          tu(Qd.bind(null, o, d, e), [e]),
          (o.flags |= 2048),
          Cr(9, Yd.bind(null, o, d, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Kt(),
          t = Ke.identifierPrefix;
        if (De) {
          var n = tn,
            o = en;
          ((n = (o & ~(1 << (32 - xt(o) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = _r++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Im++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    qm = {
      readContext: At,
      useCallback: su,
      useContext: At,
      useEffect: Si,
      useImperativeHandle: ou,
      useInsertionEffect: nu,
      useLayoutEffect: au,
      useMemo: iu,
      useReducer: wi,
      useRef: eu,
      useState: function () {
        return wi(Ar);
      },
      useDebugValue: Ei,
      useDeferredValue: function (e) {
        var t = Ct();
        return lu(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = wi(Ar)[0],
          t = Ct().memoizedState;
        return [e, t];
      },
      useMutableSource: Wd,
      useSyncExternalStore: Kd,
      useId: du,
      unstable_isNewReconciler: !1,
    },
    Gm = {
      readContext: At,
      useCallback: su,
      useContext: At,
      useEffect: Si,
      useImperativeHandle: ou,
      useInsertionEffect: nu,
      useLayoutEffect: au,
      useMemo: iu,
      useReducer: bi,
      useRef: eu,
      useState: function () {
        return bi(Ar);
      },
      useDebugValue: Ei,
      useDeferredValue: function (e) {
        var t = Ct();
        return Fe === null ? (t.memoizedState = e) : lu(t, Fe.memoizedState, e);
      },
      useTransition: function () {
        var e = bi(Ar)[0],
          t = Ct().memoizedState;
        return [e, t];
      },
      useMutableSource: Wd,
      useSyncExternalStore: Kd,
      useId: du,
      unstable_isNewReconciler: !1,
    };
  function qt(e, t) {
    if (e && e.defaultProps) {
      ((t = L({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ni(e, t, n, o) {
    ((t = e.memoizedState),
      (n = n(o, t)),
      (n = n == null ? t : L({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Uo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? gt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var o = rt(),
        s = Nn(e),
        d = an(o, s);
      ((d.payload = t),
        n != null && (d.callback = n),
        (t = wn(e, d, s)),
        t !== null && (Ht(t, e, s, o), To(t, e, s)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var o = rt(),
        s = Nn(e),
        d = an(o, s);
      ((d.tag = 1),
        (d.payload = t),
        n != null && (d.callback = n),
        (t = wn(e, d, s)),
        t !== null && (Ht(t, e, s, o), To(t, e, s)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = rt(),
        o = Nn(e),
        s = an(n, o);
      ((s.tag = 2),
        t != null && (s.callback = t),
        (t = wn(e, s, o)),
        t !== null && (Ht(t, e, o, n), To(t, e, o)));
    },
  };
  function mu(e, t, n, o, s, d, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, d, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !fr(n, o) || !fr(s, d)
          : !0
    );
  }
  function fu(e, t, n) {
    var o = !1,
      s = vn,
      d = t.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = At(d))
        : ((s = dt(t) ? zn : Xe.current),
          (o = t.contextTypes),
          (d = (o = o != null) ? Ea(e, s) : vn)),
      (t = new t(n, d)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Uo),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function pu(e, t, n, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, o),
      t.state !== e && Uo.enqueueReplaceState(t, t.state, null));
  }
  function ki(e, t, n, o) {
    var s = e.stateNode;
    ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), ci(e));
    var d = t.contextType;
    (typeof d == "object" && d !== null
      ? (s.context = At(d))
      : ((d = dt(t) ? zn : Xe.current), (s.context = Ea(e, d))),
      (s.state = e.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == "function" && (Ni(e, t, d, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function" ||
        (typeof s.UNSAFE_componentWillMount != "function" &&
          typeof s.componentWillMount != "function") ||
        ((t = s.state),
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && Uo.enqueueReplaceState(s, s.state, null),
        Ro(e, n, s, o),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Ra(e, t) {
    try {
      var n = "",
        o = t;
      do ((n += V(o)), (o = o.return));
      while (o);
      var s = n;
    } catch (d) {
      s =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function _i(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ai(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var zm = typeof WeakMap == "function" ? WeakMap : Map;
  function gu(e, t, n) {
    ((n = an(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var o = t.value;
    return (
      (n.callback = function () {
        ($o || (($o = !0), (Hi = o)), Ai(e, t));
      }),
      n
    );
  }
  function vu(e, t, n) {
    ((n = an(-1, n)), (n.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = t.value;
      ((n.payload = function () {
        return o(s);
      }),
        (n.callback = function () {
          Ai(e, t);
        }));
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ai(e, t),
            typeof o != "function" &&
              (Sn === null ? (Sn = new Set([this])) : Sn.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: h !== null ? h : "",
          });
        }),
      n
    );
  }
  function xu(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new zm();
      var s = new Set();
      o.set(t, s);
    } else ((s = o.get(t)), s === void 0 && ((s = new Set()), o.set(t, s)));
    s.has(n) || (s.add(n), (e = tf.bind(null, e, t, n)), t.then(e, e));
  }
  function yu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wu(e, t, n, o, s) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = an(-1, 1)), (t.tag = 2), wn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = s), e);
  }
  var Hm = se.ReactCurrentOwner,
    ut = !1;
  function at(e, t, n, o) {
    t.child = e === null ? Gd(t, null, n, o) : Aa(t, e.child, n, o);
  }
  function bu(e, t, n, o, s) {
    n = n.render;
    var d = t.ref;
    return (
      ja(t, s),
      (o = xi(e, t, n, o, d, s)),
      (n = yi()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          rn(e, t, s))
        : (De && n && ti(t), (t.flags |= 1), at(e, t, o, s), t.child)
    );
  }
  function Su(e, t, n, o, s) {
    if (e === null) {
      var d = n.type;
      return typeof d == "function" &&
        !Yi(d) &&
        d.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), Eu(e, t, d, o, s))
        : ((e = Xo(n.type, null, o, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), (e.lanes & s) === 0)) {
      var h = d.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : fr), n(h, o) && e.ref === t.ref)
      )
        return rn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = _n(d, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Eu(e, t, n, o, s) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (fr(d, o) && e.ref === t.ref)
        if (((ut = !1), (t.pendingProps = o = d), (e.lanes & s) !== 0))
          (e.flags & 131072) !== 0 && (ut = !0);
        else return ((t.lanes = e.lanes), rn(e, t, s));
    }
    return Ci(e, t, n, o, s);
  }
  function Nu(e, t, n) {
    var o = t.pendingProps,
      s = o.children,
      d = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          je(Oa, St),
          (St |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = d !== null ? d.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            je(Oa, St),
            (St |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = d !== null ? d.baseLanes : n),
          je(Oa, St),
          (St |= o));
      }
    else
      (d !== null ? ((o = d.baseLanes | n), (t.memoizedState = null)) : (o = n),
        je(Oa, St),
        (St |= o));
    return (at(e, t, s, n), t.child);
  }
  function ku(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ci(e, t, n, o, s) {
    var d = dt(n) ? zn : Xe.current;
    return (
      (d = Ea(t, d)),
      ja(t, s),
      (n = xi(e, t, n, o, d, s)),
      (o = yi()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          rn(e, t, s))
        : (De && o && ti(t), (t.flags |= 1), at(e, t, n, s), t.child)
    );
  }
  function _u(e, t, n, o, s) {
    if (dt(n)) {
      var d = !0;
      So(t);
    } else d = !1;
    if ((ja(t, s), t.stateNode === null))
      (Go(e, t), fu(t, n, o), ki(t, n, o, s), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        p = t.memoizedProps;
      h.props = p;
      var b = h.context,
        R = n.contextType;
      typeof R == "object" && R !== null
        ? (R = At(R))
        : ((R = dt(n) ? zn : Xe.current), (R = Ea(t, R)));
      var B = n.getDerivedStateFromProps,
        F =
          typeof B == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function";
      (F ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((p !== o || b !== R) && pu(t, h, o, R)),
        (yn = !1));
      var G = t.memoizedState;
      ((h.state = G),
        Ro(t, o, h, s),
        (b = t.memoizedState),
        p !== o || G !== b || lt.current || yn
          ? (typeof B == "function" && (Ni(t, n, B, o), (b = t.memoizedState)),
            (p = yn || mu(t, n, p, o, G, b, R))
              ? (F ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = b)),
            (h.props = o),
            (h.state = b),
            (h.context = R),
            (o = p))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1)));
    } else {
      ((h = t.stateNode),
        Hd(e, t),
        (p = t.memoizedProps),
        (R = t.type === t.elementType ? p : qt(t.type, p)),
        (h.props = R),
        (F = t.pendingProps),
        (G = h.context),
        (b = n.contextType),
        typeof b == "object" && b !== null
          ? (b = At(b))
          : ((b = dt(n) ? zn : Xe.current), (b = Ea(t, b))));
      var J = n.getDerivedStateFromProps;
      ((B =
        typeof J == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((p !== F || G !== b) && pu(t, h, o, b)),
        (yn = !1),
        (G = t.memoizedState),
        (h.state = G),
        Ro(t, o, h, s));
      var ee = t.memoizedState;
      p !== F || G !== ee || lt.current || yn
        ? (typeof J == "function" && (Ni(t, n, J, o), (ee = t.memoizedState)),
          (R = yn || mu(t, n, R, o, G, ee, b) || !1)
            ? (B ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(o, ee, b),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, ee, b)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (p === e.memoizedProps && G === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && G === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = ee)),
          (h.props = o),
          (h.state = ee),
          (h.context = b),
          (o = R))
        : (typeof h.componentDidUpdate != "function" ||
            (p === e.memoizedProps && G === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && G === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return ji(e, t, n, o, d, s);
  }
  function ji(e, t, n, o, s, d) {
    ku(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (s && Rd(t, n, !1), rn(e, t, d));
    ((o = t.stateNode), (Hm.current = t));
    var p =
      h && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = Aa(t, e.child, null, d)), (t.child = Aa(t, null, p, d)))
        : at(e, t, p, d),
      (t.memoizedState = o.state),
      s && Rd(t, n, !0),
      t.child
    );
  }
  function Au(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? jd(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && jd(e, t.context, !1),
      hi(e, t.containerInfo));
  }
  function Cu(e, t, n, o, s) {
    return (_a(), oi(s), (t.flags |= 256), at(e, t, n, o), t.child);
  }
  var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ri(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ju(e, t, n) {
    var o = t.pendingProps,
      s = Le.current,
      d = !1,
      h = (t.flags & 128) !== 0,
      p;
    if (
      ((p = h) ||
        (p = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      p
        ? ((d = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (s |= 1),
      je(Le, s & 1),
      e === null)
    )
      return (
        ri(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((h = o.children),
            (e = o.fallback),
            d
              ? ((o = t.mode),
                (d = t.child),
                (h = { mode: "hidden", children: h }),
                (o & 1) === 0 && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = h))
                  : (d = Jo(h, o, 0, null)),
                (e = Xn(e, o, n, null)),
                (d.return = t),
                (e.return = t),
                (d.sibling = e),
                (t.child = d),
                (t.child.memoizedState = Ri(n)),
                (t.memoizedState = Ti),
                e)
              : Mi(t, h))
      );
    if (((s = e.memoizedState), s !== null && ((p = s.dehydrated), p !== null)))
      return Bm(e, t, h, o, p, s, n);
    if (d) {
      ((d = o.fallback), (h = t.mode), (s = e.child), (p = s.sibling));
      var b = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== s
          ? ((o = t.child),
            (o.childLanes = 0),
            (o.pendingProps = b),
            (t.deletions = null))
          : ((o = _n(s, b)), (o.subtreeFlags = s.subtreeFlags & 14680064)),
        p !== null ? (d = _n(p, d)) : ((d = Xn(d, h, n, null)), (d.flags |= 2)),
        (d.return = t),
        (o.return = t),
        (o.sibling = d),
        (t.child = o),
        (o = d),
        (d = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Ri(n)
            : {
                baseLanes: h.baseLanes | n,
                cachePool: null,
                transitions: h.transitions,
              }),
        (d.memoizedState = h),
        (d.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ti),
        o
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (o = _n(d, { mode: "visible", children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = n),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Mi(e, t) {
    return (
      (t = Jo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function qo(e, t, n, o) {
    return (
      o !== null && oi(o),
      Aa(t, e.child, null, n),
      (e = Mi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Bm(e, t, n, o, s, d, h) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (o = _i(Error(l(422)))), qo(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((d = o.fallback),
            (s = t.mode),
            (o = Jo({ mode: "visible", children: o.children }, s, 0, null)),
            (d = Xn(d, s, h, null)),
            (d.flags |= 2),
            (o.return = t),
            (d.return = t),
            (o.sibling = d),
            (t.child = o),
            (t.mode & 1) !== 0 && Aa(t, e.child, null, h),
            (t.child.memoizedState = Ri(h)),
            (t.memoizedState = Ti),
            d);
    if ((t.mode & 1) === 0) return qo(e, t, h, null);
    if (s.data === "$!") {
      if (((o = s.nextSibling && s.nextSibling.dataset), o)) var p = o.dgst;
      return (
        (o = p),
        (d = Error(l(419))),
        (o = _i(d, o, void 0)),
        qo(e, t, h, o)
      );
    }
    if (((p = (h & e.childLanes) !== 0), ut || p)) {
      if (((o = Ke), o !== null)) {
        switch (h & -h) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        ((s = (s & (o.suspendedLanes | h)) !== 0 ? 0 : s),
          s !== 0 &&
            s !== d.retryLane &&
            ((d.retryLane = s), nn(e, s), Ht(o, e, s, -1)));
      }
      return (Vi(), (o = _i(Error(l(421)))), qo(e, t, h, o));
    }
    return s.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = nf.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = d.treeContext),
        (bt = pn(s.nextSibling)),
        (wt = t),
        (De = !0),
        (Ut = null),
        e !== null &&
          ((kt[_t++] = en),
          (kt[_t++] = tn),
          (kt[_t++] = Hn),
          (en = e.id),
          (tn = e.overflow),
          (Hn = t)),
        (t = Mi(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Tu(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), di(e.return, t, n));
  }
  function Oi(e, t, n, o, s) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: n,
          tailMode: s,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = n),
        (d.tailMode = s));
  }
  function Ru(e, t, n) {
    var o = t.pendingProps,
      s = o.revealOrder,
      d = o.tail;
    if ((at(e, t, o.children, n), (o = Le.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
          else if (e.tag === 19) Tu(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      o &= 1;
    }
    if ((je(Le, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (s) {
        case "forwards":
          for (n = t.child, s = null; n !== null;)
            ((e = n.alternate),
              e !== null && Mo(e) === null && (s = n),
              (n = n.sibling));
          ((n = s),
            n === null
              ? ((s = t.child), (t.child = null))
              : ((s = n.sibling), (n.sibling = null)),
            Oi(t, !1, s, n, d));
          break;
        case "backwards":
          for (n = null, s = t.child, t.child = null; s !== null;) {
            if (((e = s.alternate), e !== null && Mo(e) === null)) {
              t.child = s;
              break;
            }
            ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
          }
          Oi(t, !0, n, null, d);
          break;
        case "together":
          Oi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Go(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function rn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Kn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = _n(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Fm(e, t, n) {
    switch (t.tag) {
      case 3:
        (Au(t), _a());
        break;
      case 5:
        $d(t);
        break;
      case 1:
        dt(t.type) && So(t);
        break;
      case 4:
        hi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          s = t.memoizedProps.value;
        (je(Co, o._currentValue), (o._currentValue = s));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (je(Le, Le.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ju(e, t, n)
              : (je(Le, Le.current & 1),
                (e = rn(e, t, n)),
                e !== null ? e.sibling : null);
        je(Le, Le.current & 1);
        break;
      case 19:
        if (((o = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Ru(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          je(Le, Le.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Nu(e, t, n));
    }
    return rn(e, t, n);
  }
  var Mu, Ii, Ou, Iu;
  ((Mu = function (e, t) {
    for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Ii = function () {}),
    (Ou = function (e, t, n, o) {
      var s = e.memoizedProps;
      if (s !== o) {
        ((e = t.stateNode), $n(Wt.current));
        var d = null;
        switch (n) {
          case "input":
            ((s = Mn(e, s)), (o = Mn(e, o)), (d = []));
            break;
          case "select":
            ((s = L({}, s, { value: void 0 })),
              (o = L({}, o, { value: void 0 })),
              (d = []));
            break;
          case "textarea":
            ((s = $a(e, s)), (o = $a(e, o)), (d = []));
            break;
          default:
            typeof s.onClick != "function" &&
              typeof o.onClick == "function" &&
              (e.onclick = yo);
        }
        aa(n, o);
        var h;
        n = null;
        for (R in s)
          if (!o.hasOwnProperty(R) && s.hasOwnProperty(R) && s[R] != null)
            if (R === "style") {
              var p = s[R];
              for (h in p) p.hasOwnProperty(h) && (n || (n = {}), (n[h] = ""));
            } else
              R !== "dangerouslySetInnerHTML" &&
                R !== "children" &&
                R !== "suppressContentEditableWarning" &&
                R !== "suppressHydrationWarning" &&
                R !== "autoFocus" &&
                (u.hasOwnProperty(R)
                  ? d || (d = [])
                  : (d = d || []).push(R, null));
        for (R in o) {
          var b = o[R];
          if (
            ((p = s != null ? s[R] : void 0),
            o.hasOwnProperty(R) && b !== p && (b != null || p != null))
          )
            if (R === "style")
              if (p) {
                for (h in p)
                  !p.hasOwnProperty(h) ||
                    (b && b.hasOwnProperty(h)) ||
                    (n || (n = {}), (n[h] = ""));
                for (h in b)
                  b.hasOwnProperty(h) &&
                    p[h] !== b[h] &&
                    (n || (n = {}), (n[h] = b[h]));
              } else (n || (d || (d = []), d.push(R, n)), (n = b));
            else
              R === "dangerouslySetInnerHTML"
                ? ((b = b ? b.__html : void 0),
                  (p = p ? p.__html : void 0),
                  b != null && p !== b && (d = d || []).push(R, b))
                : R === "children"
                  ? (typeof b != "string" && typeof b != "number") ||
                    (d = d || []).push(R, "" + b)
                  : R !== "suppressContentEditableWarning" &&
                    R !== "suppressHydrationWarning" &&
                    (u.hasOwnProperty(R)
                      ? (b != null && R === "onScroll" && Oe("scroll", e),
                        d || p === b || (d = []))
                      : (d = d || []).push(R, b));
        }
        n && (d = d || []).push("style", n);
        var R = d;
        (t.updateQueue = R) && (t.flags |= 4);
      }
    }),
    (Iu = function (e, t, n, o) {
      n !== o && (t.flags |= 4);
    }));
  function jr(e, t) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null;)
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var o = null; n !== null;)
            (n.alternate !== null && (o = n), (n = n.sibling));
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      o = 0;
    if (t)
      for (var s = e.child; s !== null;)
        ((n |= s.lanes | s.childLanes),
          (o |= s.subtreeFlags & 14680064),
          (o |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null;)
        ((n |= s.lanes | s.childLanes),
          (o |= s.subtreeFlags),
          (o |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = n), t);
  }
  function $m(e, t, n) {
    var o = t.pendingProps;
    switch ((ni(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ze(t), null);
      case 1:
        return (dt(t.type) && bo(), Ze(t), null);
      case 3:
        return (
          (o = t.stateNode),
          Ta(),
          Ie(lt),
          Ie(Xe),
          pi(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (_o(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ut !== null && ($i(Ut), (Ut = null)))),
          Ii(e, t),
          Ze(t),
          null
        );
      case 5:
        mi(t);
        var s = $n(Nr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Ou(e, t, n, o, s),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return (Ze(t), null);
          }
          if (((e = $n(Wt.current)), _o(t))) {
            ((o = t.stateNode), (n = t.type));
            var d = t.memoizedProps;
            switch (((o[$t] = t), (o[yr] = d), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Oe("cancel", o), Oe("close", o));
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", o);
                break;
              case "video":
              case "audio":
                for (s = 0; s < gr.length; s++) Oe(gr[s], o);
                break;
              case "source":
                Oe("error", o);
                break;
              case "img":
              case "image":
              case "link":
                (Oe("error", o), Oe("load", o));
                break;
              case "details":
                Oe("toggle", o);
                break;
              case "input":
                (st(o, d), Oe("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!d.multiple }),
                  Oe("invalid", o));
                break;
              case "textarea":
                (Wa(o, d), Oe("invalid", o));
            }
            (aa(n, d), (s = null));
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var p = d[h];
                h === "children"
                  ? typeof p == "string"
                    ? o.textContent !== p &&
                      (d.suppressHydrationWarning !== !0 &&
                        xo(o.textContent, p, e),
                      (s = ["children", p]))
                    : typeof p == "number" &&
                      o.textContent !== "" + p &&
                      (d.suppressHydrationWarning !== !0 &&
                        xo(o.textContent, p, e),
                      (s = ["children", "" + p]))
                  : u.hasOwnProperty(h) &&
                    p != null &&
                    h === "onScroll" &&
                    Oe("scroll", o);
              }
            switch (n) {
              case "input":
                (ft(o), Fr(o, d, !0));
                break;
              case "textarea":
                (ft(o), Et(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = yo);
            }
            ((o = s), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((h = s.nodeType === 9 ? s : s.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $r(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                    ? (e = h.createElement(n, { is: o.is }))
                    : ((e = h.createElement(n)),
                      n === "select" &&
                        ((h = e),
                        o.multiple
                          ? (h.multiple = !0)
                          : o.size && (h.size = o.size)))
                : (e = h.createElementNS(e, n)),
              (e[$t] = t),
              (e[yr] = o),
              Mu(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = Ka(n, o)), n)) {
                case "dialog":
                  (Oe("cancel", e), Oe("close", e), (s = o));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Oe("load", e), (s = o));
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < gr.length; s++) Oe(gr[s], e);
                  s = o;
                  break;
                case "source":
                  (Oe("error", e), (s = o));
                  break;
                case "img":
                case "image":
                case "link":
                  (Oe("error", e), Oe("load", e), (s = o));
                  break;
                case "details":
                  (Oe("toggle", e), (s = o));
                  break;
                case "input":
                  (st(e, o), (s = Mn(e, o)), Oe("invalid", e));
                  break;
                case "option":
                  s = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (s = L({}, o, { value: void 0 })),
                    Oe("invalid", e));
                  break;
                case "textarea":
                  (Wa(e, o), (s = $a(e, o)), Oe("invalid", e));
                  break;
                default:
                  s = o;
              }
              (aa(n, s), (p = s));
              for (d in p)
                if (p.hasOwnProperty(d)) {
                  var b = p[d];
                  d === "style"
                    ? Mt(e, b)
                    : d === "dangerouslySetInnerHTML"
                      ? ((b = b ? b.__html : void 0), b != null && Wr(e, b))
                      : d === "children"
                        ? typeof b == "string"
                          ? (n !== "textarea" || b !== "") && On(e, b)
                          : typeof b == "number" && On(e, "" + b)
                        : d !== "suppressContentEditableWarning" &&
                          d !== "suppressHydrationWarning" &&
                          d !== "autoFocus" &&
                          (u.hasOwnProperty(d)
                            ? b != null && d === "onScroll" && Oe("scroll", e)
                            : b != null && X(e, d, b, h));
                }
              switch (n) {
                case "input":
                  (ft(e), Fr(e, o, !1));
                  break;
                case "textarea":
                  (ft(e), Et(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + Y(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (d = o.value),
                    d != null
                      ? pt(e, !!o.multiple, d, !1)
                      : o.defaultValue != null &&
                        pt(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = yo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ze(t), null);
      case 6:
        if (e && t.stateNode != null) Iu(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(l(166));
          if (((n = $n(Nr.current)), $n(Wt.current), _o(t))) {
            if (
              ((o = t.stateNode),
              (n = t.memoizedProps),
              (o[$t] = t),
              (d = o.nodeValue !== n) && ((e = wt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  xo(o.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    xo(o.nodeValue, n, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            ((o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o)),
              (o[$t] = t),
              (t.stateNode = o));
        }
        return (Ze(t), null);
      case 13:
        if (
          (Ie(Le),
          (o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && bt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Pd(), _a(), (t.flags |= 98560), (d = !1));
          else if (((d = _o(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(l(318));
              if (
                ((d = t.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(l(317));
              d[$t] = t;
            } else
              (_a(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ze(t), (d = !1));
          } else (Ut !== null && ($i(Ut), (Ut = null)), (d = !0));
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Le.current & 1) !== 0
                  ? $e === 0 && ($e = 3)
                  : Vi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (
          Ta(),
          Ii(e, t),
          e === null && vr(t.stateNode.containerInfo),
          Ze(t),
          null
        );
      case 10:
        return (li(t.type._context), Ze(t), null);
      case 17:
        return (dt(t.type) && bo(), Ze(t), null);
      case 19:
        if ((Ie(Le), (d = t.memoizedState), d === null)) return (Ze(t), null);
        if (((o = (t.flags & 128) !== 0), (h = d.rendering), h === null))
          if (o) jr(d, !1);
          else {
            if ($e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((h = Mo(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      jr(d, !1),
                      o = h.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = n,
                      n = t.child;
                    n !== null;
                  )
                    ((d = n),
                      (e = o),
                      (d.flags &= 14680066),
                      (h = d.alternate),
                      h === null
                        ? ((d.childLanes = 0),
                          (d.lanes = e),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = h.childLanes),
                          (d.lanes = h.lanes),
                          (d.child = h.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = h.memoizedProps),
                          (d.memoizedState = h.memoizedState),
                          (d.updateQueue = h.updateQueue),
                          (d.type = h.type),
                          (e = h.dependencies),
                          (d.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (je(Le, (Le.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            d.tail !== null &&
              Me() > Ia &&
              ((t.flags |= 128), (o = !0), jr(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Mo(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                jr(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !h.alternate &&
                  !De)
              )
                return (Ze(t), null);
            } else
              2 * Me() - d.renderingStartTime > Ia &&
                n !== 1073741824 &&
                ((t.flags |= 128), (o = !0), jr(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((n = d.last),
              n !== null ? (n.sibling = h) : (t.child = h),
              (d.last = h));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = Me()),
            (t.sibling = null),
            (n = Le.current),
            je(Le, o ? (n & 1) | 2 : n & 1),
            t)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          Ki(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (St & 1073741824) !== 0 &&
              (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Wm(e, t) {
    switch ((ni(t), t.tag)) {
      case 1:
        return (
          dt(t.type) && bo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ta(),
          Ie(lt),
          Ie(Xe),
          pi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (mi(t), null);
      case 13:
        if (
          (Ie(Le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          _a();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Ie(Le), null);
      case 4:
        return (Ta(), null);
      case 10:
        return (li(t.type._context), null);
      case 22:
      case 23:
        return (Ki(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zo = !1,
    et = !1,
    Km = typeof WeakSet == "function" ? WeakSet : Set,
    Z = null;
  function Ma(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          qe(e, t, o);
        }
      else n.current = null;
  }
  function Di(e, t, n) {
    try {
      n();
    } catch (o) {
      qe(e, t, o);
    }
  }
  var Du = !1;
  function Vm(e, t) {
    if (((Ks = so), (e = md()), qs(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var o = n.getSelection && n.getSelection();
          if (o && o.rangeCount !== 0) {
            n = o.anchorNode;
            var s = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              (n.nodeType, d.nodeType);
            } catch {
              n = null;
              break e;
            }
            var h = 0,
              p = -1,
              b = -1,
              R = 0,
              B = 0,
              F = e,
              G = null;
            t: for (;;) {
              for (
                var J;
                F !== n || (s !== 0 && F.nodeType !== 3) || (p = h + s),
                  F !== d || (o !== 0 && F.nodeType !== 3) || (b = h + o),
                  F.nodeType === 3 && (h += F.nodeValue.length),
                  (J = F.firstChild) !== null;
              )
                ((G = F), (F = J));
              for (;;) {
                if (F === e) break t;
                if (
                  (G === n && ++R === s && (p = h),
                  G === d && ++B === o && (b = h),
                  (J = F.nextSibling) !== null)
                )
                  break;
                ((F = G), (G = F.parentNode));
              }
              F = J;
            }
            n = p === -1 || b === -1 ? null : { start: p, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Vs = { focusedElem: e, selectionRange: n }, so = !1, Z = t;
      Z !== null;
    )
      if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (Z = e));
      else
        for (; Z !== null;) {
          t = Z;
          try {
            var ee = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ee !== null) {
                    var ne = ee.memoizedProps,
                      ze = ee.memoizedState,
                      A = t.stateNode,
                      S = A.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ne : qt(t.type, ne),
                        ze,
                      );
                    A.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var j = t.stateNode.containerInfo;
                  j.nodeType === 1
                    ? (j.textContent = "")
                    : j.nodeType === 9 &&
                      j.documentElement &&
                      j.removeChild(j.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (W) {
            qe(t, t.return, W);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Z = e));
            break;
          }
          Z = t.return;
        }
    return ((ee = Du), (Du = !1), ee);
  }
  function Tr(e, t, n) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var s = (o = o.next);
      do {
        if ((s.tag & e) === e) {
          var d = s.destroy;
          ((s.destroy = void 0), d !== void 0 && Di(t, n, d));
        }
        s = s.next;
      } while (s !== o);
    }
  }
  function Ho(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var o = n.create;
          n.destroy = o();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Li(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Lu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Lu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[$t],
          delete t[yr],
          delete t[Js],
          delete t[Tm],
          delete t[Rm])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Pu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Uu(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Pu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Pi(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = yo)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Pi(e, t, n), e = e.sibling; e !== null;)
        (Pi(e, t, n), (e = e.sibling));
  }
  function Ui(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ui(e, t, n), e = e.sibling; e !== null;)
        (Ui(e, t, n), (e = e.sibling));
  }
  var Ye = null,
    Gt = !1;
  function bn(e, t, n) {
    for (n = n.child; n !== null;) (qu(e, t, n), (n = n.sibling));
  }
  function qu(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(ia, n);
      } catch {}
    switch (n.tag) {
      case 5:
        et || Ma(n, t);
      case 6:
        var o = Ye,
          s = Gt;
        ((Ye = null),
          bn(e, t, n),
          (Ye = o),
          (Gt = s),
          Ye !== null &&
            (Gt
              ? ((e = Ye),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ye.removeChild(n.stateNode)));
        break;
      case 18:
        Ye !== null &&
          (Gt
            ? ((e = Ye),
              (n = n.stateNode),
              e.nodeType === 8
                ? Xs(e.parentNode, n)
                : e.nodeType === 1 && Xs(e, n),
              lr(e))
            : Xs(Ye, n.stateNode));
        break;
      case 4:
        ((o = Ye),
          (s = Gt),
          (Ye = n.stateNode.containerInfo),
          (Gt = !0),
          bn(e, t, n),
          (Ye = o),
          (Gt = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !et &&
          ((o = n.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          s = o = o.next;
          do {
            var d = s,
              h = d.destroy;
            ((d = d.tag),
              h !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Di(n, t, h),
              (s = s.next));
          } while (s !== o);
        }
        bn(e, t, n);
        break;
      case 1:
        if (
          !et &&
          (Ma(n, t),
          (o = n.stateNode),
          typeof o.componentWillUnmount == "function")
        )
          try {
            ((o.props = n.memoizedProps),
              (o.state = n.memoizedState),
              o.componentWillUnmount());
          } catch (p) {
            qe(n, t, p);
          }
        bn(e, t, n);
        break;
      case 21:
        bn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((et = (o = et) || n.memoizedState !== null), bn(e, t, n), (et = o))
          : bn(e, t, n);
        break;
      default:
        bn(e, t, n);
    }
  }
  function Gu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Km()),
        t.forEach(function (o) {
          var s = af.bind(null, e, o);
          n.has(o) || (n.add(o), o.then(s, s));
        }));
    }
  }
  function zt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var o = 0; o < n.length; o++) {
        var s = n[o];
        try {
          var d = e,
            h = t,
            p = h;
          e: for (; p !== null;) {
            switch (p.tag) {
              case 5:
                ((Ye = p.stateNode), (Gt = !1));
                break e;
              case 3:
                ((Ye = p.stateNode.containerInfo), (Gt = !0));
                break e;
              case 4:
                ((Ye = p.stateNode.containerInfo), (Gt = !0));
                break e;
            }
            p = p.return;
          }
          if (Ye === null) throw Error(l(160));
          (qu(d, h, s), (Ye = null), (Gt = !1));
          var b = s.alternate;
          (b !== null && (b.return = null), (s.return = null));
        } catch (R) {
          qe(s, t, R);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null;) (zu(t, e), (t = t.sibling));
  }
  function zu(e, t) {
    var n = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((zt(t, e), Vt(e), o & 4)) {
          try {
            (Tr(3, e, e.return), Ho(3, e));
          } catch (ne) {
            qe(e, e.return, ne);
          }
          try {
            Tr(5, e, e.return);
          } catch (ne) {
            qe(e, e.return, ne);
          }
        }
        break;
      case 1:
        (zt(t, e), Vt(e), o & 512 && n !== null && Ma(n, n.return));
        break;
      case 5:
        if (
          (zt(t, e),
          Vt(e),
          o & 512 && n !== null && Ma(n, n.return),
          e.flags & 32)
        ) {
          var s = e.stateNode;
          try {
            On(s, "");
          } catch (ne) {
            qe(e, e.return, ne);
          }
        }
        if (o & 4 && ((s = e.stateNode), s != null)) {
          var d = e.memoizedProps,
            h = n !== null ? n.memoizedProps : d,
            p = e.type,
            b = e.updateQueue;
          if (((e.updateQueue = null), b !== null))
            try {
              (p === "input" &&
                d.type === "radio" &&
                d.name != null &&
                Br(s, d),
                Ka(p, h));
              var R = Ka(p, d);
              for (h = 0; h < b.length; h += 2) {
                var B = b[h],
                  F = b[h + 1];
                B === "style"
                  ? Mt(s, F)
                  : B === "dangerouslySetInnerHTML"
                    ? Wr(s, F)
                    : B === "children"
                      ? On(s, F)
                      : X(s, B, F, R);
              }
              switch (p) {
                case "input":
                  ea(s, d);
                  break;
                case "textarea":
                  nt(s, d);
                  break;
                case "select":
                  var G = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!d.multiple;
                  var J = d.value;
                  J != null
                    ? pt(s, !!d.multiple, J, !1)
                    : G !== !!d.multiple &&
                      (d.defaultValue != null
                        ? pt(s, !!d.multiple, d.defaultValue, !0)
                        : pt(s, !!d.multiple, d.multiple ? [] : "", !1));
              }
              s[yr] = d;
            } catch (ne) {
              qe(e, e.return, ne);
            }
        }
        break;
      case 6:
        if ((zt(t, e), Vt(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((s = e.stateNode), (d = e.memoizedProps));
          try {
            s.nodeValue = d;
          } catch (ne) {
            qe(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          (zt(t, e), Vt(e), o & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            lr(t.containerInfo);
          } catch (ne) {
            qe(e, e.return, ne);
          }
        break;
      case 4:
        (zt(t, e), Vt(e));
        break;
      case 13:
        (zt(t, e),
          Vt(e),
          (s = e.child),
          s.flags & 8192 &&
            ((d = s.memoizedState !== null),
            (s.stateNode.isHidden = d),
            !d ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (zi = Me())),
          o & 4 && Gu(e));
        break;
      case 22:
        if (
          ((B = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((et = (R = et) || B), zt(t, e), (et = R)) : zt(t, e),
          Vt(e),
          o & 8192)
        ) {
          if (
            ((R = e.memoizedState !== null),
            (e.stateNode.isHidden = R) && !B && (e.mode & 1) !== 0)
          )
            for (Z = e, B = e.child; B !== null;) {
              for (F = Z = B; Z !== null;) {
                switch (((G = Z), (J = G.child), G.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Tr(4, G, G.return);
                    break;
                  case 1:
                    Ma(G, G.return);
                    var ee = G.stateNode;
                    if (typeof ee.componentWillUnmount == "function") {
                      ((o = G), (n = G.return));
                      try {
                        ((t = o),
                          (ee.props = t.memoizedProps),
                          (ee.state = t.memoizedState),
                          ee.componentWillUnmount());
                      } catch (ne) {
                        qe(o, n, ne);
                      }
                    }
                    break;
                  case 5:
                    Ma(G, G.return);
                    break;
                  case 22:
                    if (G.memoizedState !== null) {
                      Fu(F);
                      continue;
                    }
                }
                J !== null ? ((J.return = G), (Z = J)) : Fu(F);
              }
              B = B.sibling;
            }
          e: for (B = null, F = e; ;) {
            if (F.tag === 5) {
              if (B === null) {
                B = F;
                try {
                  ((s = F.stateNode),
                    R
                      ? ((d = s.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : ((p = F.stateNode),
                        (b = F.memoizedProps.style),
                        (h =
                          b != null && b.hasOwnProperty("display")
                            ? b.display
                            : null),
                        (p.style.display = Kr("display", h))));
                } catch (ne) {
                  qe(e, e.return, ne);
                }
              }
            } else if (F.tag === 6) {
              if (B === null)
                try {
                  F.stateNode.nodeValue = R ? "" : F.memoizedProps;
                } catch (ne) {
                  qe(e, e.return, ne);
                }
            } else if (
              ((F.tag !== 22 && F.tag !== 23) ||
                F.memoizedState === null ||
                F === e) &&
              F.child !== null
            ) {
              ((F.child.return = F), (F = F.child));
              continue;
            }
            if (F === e) break e;
            for (; F.sibling === null;) {
              if (F.return === null || F.return === e) break e;
              (B === F && (B = null), (F = F.return));
            }
            (B === F && (B = null),
              (F.sibling.return = F.return),
              (F = F.sibling));
          }
        }
        break;
      case 19:
        (zt(t, e), Vt(e), o & 4 && Gu(e));
        break;
      case 21:
        break;
      default:
        (zt(t, e), Vt(e));
    }
  }
  function Vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (Pu(n)) {
              var o = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (o.tag) {
          case 5:
            var s = o.stateNode;
            o.flags & 32 && (On(s, ""), (o.flags &= -33));
            var d = Uu(e);
            Ui(e, d, s);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              p = Uu(e);
            Pi(e, p, h);
            break;
          default:
            throw Error(l(161));
        }
      } catch (b) {
        qe(e, e.return, b);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ym(e, t, n) {
    ((Z = e), Hu(e));
  }
  function Hu(e, t, n) {
    for (var o = (e.mode & 1) !== 0; Z !== null;) {
      var s = Z,
        d = s.child;
      if (s.tag === 22 && o) {
        var h = s.memoizedState !== null || zo;
        if (!h) {
          var p = s.alternate,
            b = (p !== null && p.memoizedState !== null) || et;
          p = zo;
          var R = et;
          if (((zo = h), (et = b) && !R))
            for (Z = s; Z !== null;)
              ((h = Z),
                (b = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? $u(s)
                  : b !== null
                    ? ((b.return = h), (Z = b))
                    : $u(s));
          for (; d !== null;) ((Z = d), Hu(d), (d = d.sibling));
          ((Z = s), (zo = p), (et = R));
        }
        Bu(e);
      } else
        (s.subtreeFlags & 8772) !== 0 && d !== null
          ? ((d.return = s), (Z = d))
          : Bu(e);
    }
  }
  function Bu(e) {
    for (; Z !== null;) {
      var t = Z;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                et || Ho(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !et)
                  if (n === null) o.componentDidMount();
                  else {
                    var s =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : qt(t.type, n.memoizedProps);
                    o.componentDidUpdate(
                      s,
                      n.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var d = t.updateQueue;
                d !== null && Fd(t, d, o);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Fd(t, h, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var b = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      b.autoFocus && n.focus();
                      break;
                    case "img":
                      b.src && (n.src = b.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var R = t.alternate;
                  if (R !== null) {
                    var B = R.memoizedState;
                    if (B !== null) {
                      var F = B.dehydrated;
                      F !== null && lr(F);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(l(163));
            }
          et || (t.flags & 512 && Li(t));
        } catch (G) {
          qe(t, t.return, G);
        }
      }
      if (t === e) {
        Z = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (Z = n));
        break;
      }
      Z = t.return;
    }
  }
  function Fu(e) {
    for (; Z !== null;) {
      var t = Z;
      if (t === e) {
        Z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (Z = n));
        break;
      }
      Z = t.return;
    }
  }
  function $u(e) {
    for (; Z !== null;) {
      var t = Z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ho(4, t);
            } catch (b) {
              qe(t, n, b);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var s = t.return;
              try {
                o.componentDidMount();
              } catch (b) {
                qe(t, s, b);
              }
            }
            var d = t.return;
            try {
              Li(t);
            } catch (b) {
              qe(t, d, b);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Li(t);
            } catch (b) {
              qe(t, h, b);
            }
        }
      } catch (b) {
        qe(t, t.return, b);
      }
      if (t === e) {
        Z = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        ((p.return = t.return), (Z = p));
        break;
      }
      Z = t.return;
    }
  }
  var Qm = Math.ceil,
    Bo = se.ReactCurrentDispatcher,
    qi = se.ReactCurrentOwner,
    jt = se.ReactCurrentBatchConfig,
    we = 0,
    Ke = null,
    He = null,
    Qe = 0,
    St = 0,
    Oa = gn(0),
    $e = 0,
    Rr = null,
    Kn = 0,
    Fo = 0,
    Gi = 0,
    Mr = null,
    ct = null,
    zi = 0,
    Ia = 1 / 0,
    on = null,
    $o = !1,
    Hi = null,
    Sn = null,
    Wo = !1,
    En = null,
    Ko = 0,
    Or = 0,
    Bi = null,
    Vo = -1,
    Yo = 0;
  function rt() {
    return (we & 6) !== 0 ? Me() : Vo !== -1 ? Vo : (Vo = Me());
  }
  function Nn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (we & 2) !== 0 && Qe !== 0
        ? Qe & -Qe
        : Om.transition !== null
          ? (Yo === 0 && (Yo = ro()), Yo)
          : ((e = Ee),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Kl(e.type))),
            e);
  }
  function Ht(e, t, n, o) {
    if (50 < Or) throw ((Or = 0), (Bi = null), Error(l(185)));
    (qn(e, n, o),
      ((we & 2) === 0 || e !== Ke) &&
        (e === Ke && ((we & 2) === 0 && (Fo |= n), $e === 4 && kn(e, Qe)),
        ht(e, o),
        n === 1 &&
          we === 0 &&
          (t.mode & 1) === 0 &&
          ((Ia = Me() + 500), Eo && xn())));
  }
  function ht(e, t) {
    var n = e.callbackNode;
    _s(e, t);
    var o = ua(e, e === Ke ? Qe : 0);
    if (o === 0)
      (n !== null && er(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((n != null && er(n), t === 1))
        (e.tag === 0 ? Mm(Ku.bind(null, e)) : Md(Ku.bind(null, e)),
          Cm(function () {
            (we & 6) === 0 && xn();
          }),
          (n = null));
      else {
        switch (ca(o)) {
          case 1:
            n = Pn;
            break;
          case 4:
            n = no;
            break;
          case 16:
            n = sa;
            break;
          case 536870912:
            n = tr;
            break;
          default:
            n = sa;
        }
        n = tc(n, Wu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Wu(e, t) {
    if (((Vo = -1), (Yo = 0), (we & 6) !== 0)) throw Error(l(327));
    var n = e.callbackNode;
    if (Da() && e.callbackNode !== n) return null;
    var o = ua(e, e === Ke ? Qe : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Qo(e, o);
    else {
      t = o;
      var s = we;
      we |= 2;
      var d = Yu();
      (Ke !== e || Qe !== t) && ((on = null), (Ia = Me() + 500), Yn(e, t));
      do
        try {
          Zm();
          break;
        } catch (p) {
          Vu(e, p);
        }
      while (!0);
      (ii(),
        (Bo.current = d),
        (we = s),
        He !== null ? (t = 0) : ((Ke = null), (Qe = 0), (t = $e)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = nr(e)), s !== 0 && ((o = s), (t = Fi(e, s)))),
        t === 1)
      )
        throw ((n = Rr), Yn(e, 0), kn(e, o), ht(e, Me()), n);
      if (t === 6) kn(e, o);
      else {
        if (
          ((s = e.current.alternate),
          (o & 30) === 0 &&
            !Xm(s) &&
            ((t = Qo(e, o)),
            t === 2 && ((d = nr(e)), d !== 0 && ((o = d), (t = Fi(e, d)))),
            t === 1))
        )
          throw ((n = Rr), Yn(e, 0), kn(e, o), ht(e, Me()), n);
        switch (((e.finishedWork = s), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Qn(e, ct, on);
            break;
          case 3:
            if (
              (kn(e, o),
              (o & 130023424) === o && ((t = zi + 500 - Me()), 10 < t))
            ) {
              if (ua(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & o) !== o)) {
                (rt(), (e.pingedLanes |= e.suspendedLanes & s));
                break;
              }
              e.timeoutHandle = Qs(Qn.bind(null, e, ct, on), t);
              break;
            }
            Qn(e, ct, on);
            break;
          case 4:
            if ((kn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, s = -1; 0 < o;) {
              var h = 31 - xt(o);
              ((d = 1 << h), (h = t[h]), h > s && (s = h), (o &= ~d));
            }
            if (
              ((o = s),
              (o = Me() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                    ? 480
                    : 1080 > o
                      ? 1080
                      : 1920 > o
                        ? 1920
                        : 3e3 > o
                          ? 3e3
                          : 4320 > o
                            ? 4320
                            : 1960 * Qm(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Qs(Qn.bind(null, e, ct, on), o);
              break;
            }
            Qn(e, ct, on);
            break;
          case 5:
            Qn(e, ct, on);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (ht(e, Me()), e.callbackNode === n ? Wu.bind(null, e) : null);
  }
  function Fi(e, t) {
    var n = Mr;
    return (
      e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256),
      (e = Qo(e, t)),
      e !== 2 && ((t = ct), (ct = n), t !== null && $i(t)),
      e
    );
  }
  function $i(e) {
    ct === null ? (ct = e) : ct.push.apply(ct, e);
  }
  function Xm(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var o = 0; o < n.length; o++) {
            var s = n[o],
              d = s.getSnapshot;
            s = s.value;
            try {
              if (!Pt(d(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function kn(e, t) {
    for (
      t &= ~Gi,
        t &= ~Fo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - xt(t),
        o = 1 << n;
      ((e[n] = -1), (t &= ~o));
    }
  }
  function Ku(e) {
    if ((we & 6) !== 0) throw Error(l(327));
    Da();
    var t = ua(e, 0);
    if ((t & 1) === 0) return (ht(e, Me()), null);
    var n = Qo(e, t);
    if (e.tag !== 0 && n === 2) {
      var o = nr(e);
      o !== 0 && ((t = o), (n = Fi(e, o)));
    }
    if (n === 1) throw ((n = Rr), Yn(e, 0), kn(e, t), ht(e, Me()), n);
    if (n === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Qn(e, ct, on),
      ht(e, Me()),
      null
    );
  }
  function Wi(e, t) {
    var n = we;
    we |= 1;
    try {
      return e(t);
    } finally {
      ((we = n), we === 0 && ((Ia = Me() + 500), Eo && xn()));
    }
  }
  function Vn(e) {
    En !== null && En.tag === 0 && (we & 6) === 0 && Da();
    var t = we;
    we |= 1;
    var n = jt.transition,
      o = Ee;
    try {
      if (((jt.transition = null), (Ee = 1), e)) return e();
    } finally {
      ((Ee = o), (jt.transition = n), (we = t), (we & 6) === 0 && xn());
    }
  }
  function Ki() {
    ((St = Oa.current), Ie(Oa));
  }
  function Yn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Am(n)), He !== null))
      for (n = He.return; n !== null;) {
        var o = n;
        switch ((ni(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && bo());
            break;
          case 3:
            (Ta(), Ie(lt), Ie(Xe), pi());
            break;
          case 5:
            mi(o);
            break;
          case 4:
            Ta();
            break;
          case 13:
            Ie(Le);
            break;
          case 19:
            Ie(Le);
            break;
          case 10:
            li(o.type._context);
            break;
          case 22:
          case 23:
            Ki();
        }
        n = n.return;
      }
    if (
      ((Ke = e),
      (He = e = _n(e.current, null)),
      (Qe = St = t),
      ($e = 0),
      (Rr = null),
      (Gi = Fo = Kn = 0),
      (ct = Mr = null),
      Fn !== null)
    ) {
      for (t = 0; t < Fn.length; t++)
        if (((n = Fn[t]), (o = n.interleaved), o !== null)) {
          n.interleaved = null;
          var s = o.next,
            d = n.pending;
          if (d !== null) {
            var h = d.next;
            ((d.next = s), (o.next = h));
          }
          n.pending = o;
        }
      Fn = null;
    }
    return e;
  }
  function Vu(e, t) {
    do {
      var n = He;
      try {
        if ((ii(), (Oo.current = Po), Io)) {
          for (var o = Pe.memoizedState; o !== null;) {
            var s = o.queue;
            (s !== null && (s.pending = null), (o = o.next));
          }
          Io = !1;
        }
        if (
          ((Wn = 0),
          (We = Fe = Pe = null),
          (kr = !1),
          (_r = 0),
          (qi.current = null),
          n === null || n.return === null)
        ) {
          (($e = 1), (Rr = t), (He = null));
          break;
        }
        e: {
          var d = e,
            h = n.return,
            p = n,
            b = t;
          if (
            ((t = Qe),
            (p.flags |= 32768),
            b !== null && typeof b == "object" && typeof b.then == "function")
          ) {
            var R = b,
              B = p,
              F = B.tag;
            if ((B.mode & 1) === 0 && (F === 0 || F === 11 || F === 15)) {
              var G = B.alternate;
              G
                ? ((B.updateQueue = G.updateQueue),
                  (B.memoizedState = G.memoizedState),
                  (B.lanes = G.lanes))
                : ((B.updateQueue = null), (B.memoizedState = null));
            }
            var J = yu(h);
            if (J !== null) {
              ((J.flags &= -257),
                wu(J, h, p, d, t),
                J.mode & 1 && xu(d, R, t),
                (t = J),
                (b = R));
              var ee = t.updateQueue;
              if (ee === null) {
                var ne = new Set();
                (ne.add(b), (t.updateQueue = ne));
              } else ee.add(b);
              break e;
            } else {
              if ((t & 1) === 0) {
                (xu(d, R, t), Vi());
                break e;
              }
              b = Error(l(426));
            }
          } else if (De && p.mode & 1) {
            var ze = yu(h);
            if (ze !== null) {
              ((ze.flags & 65536) === 0 && (ze.flags |= 256),
                wu(ze, h, p, d, t),
                oi(Ra(b, p)));
              break e;
            }
          }
          ((d = b = Ra(b, p)),
            $e !== 4 && ($e = 2),
            Mr === null ? (Mr = [d]) : Mr.push(d),
            (d = h));
          do {
            switch (d.tag) {
              case 3:
                ((d.flags |= 65536), (t &= -t), (d.lanes |= t));
                var A = gu(d, b, t);
                Bd(d, A);
                break e;
              case 1:
                p = b;
                var S = d.type,
                  j = d.stateNode;
                if (
                  (d.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (j !== null &&
                      typeof j.componentDidCatch == "function" &&
                      (Sn === null || !Sn.has(j))))
                ) {
                  ((d.flags |= 65536), (t &= -t), (d.lanes |= t));
                  var W = vu(d, p, t);
                  Bd(d, W);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Xu(n);
      } catch (ae) {
        ((t = ae), He === n && n !== null && (He = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Yu() {
    var e = Bo.current;
    return ((Bo.current = Po), e === null ? Po : e);
  }
  function Vi() {
    (($e === 0 || $e === 3 || $e === 2) && ($e = 4),
      Ke === null ||
        ((Kn & 268435455) === 0 && (Fo & 268435455) === 0) ||
        kn(Ke, Qe));
  }
  function Qo(e, t) {
    var n = we;
    we |= 2;
    var o = Yu();
    (Ke !== e || Qe !== t) && ((on = null), Yn(e, t));
    do
      try {
        Jm();
        break;
      } catch (s) {
        Vu(e, s);
      }
    while (!0);
    if ((ii(), (we = n), (Bo.current = o), He !== null)) throw Error(l(261));
    return ((Ke = null), (Qe = 0), $e);
  }
  function Jm() {
    for (; He !== null;) Qu(He);
  }
  function Zm() {
    for (; He !== null && !oa();) Qu(He);
  }
  function Qu(e) {
    var t = ec(e.alternate, e, St);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Xu(e) : (He = t),
      (qi.current = null));
  }
  function Xu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = $m(n, t, St)), n !== null)) {
          He = n;
          return;
        }
      } else {
        if (((n = Wm(n, t)), n !== null)) {
          ((n.flags &= 32767), (He = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          (($e = 6), (He = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        He = t;
        return;
      }
      He = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Qn(e, t, n) {
    var o = Ee,
      s = jt.transition;
    try {
      ((jt.transition = null), (Ee = 1), ef(e, t, n, o));
    } finally {
      ((jt.transition = s), (Ee = o));
    }
    return null;
  }
  function ef(e, t, n, o) {
    do Da();
    while (En !== null);
    if ((we & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var d = n.lanes | n.childLanes;
    if (
      (As(e, d),
      e === Ke && ((He = Ke = null), (Qe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Wo ||
        ((Wo = !0),
        tc(sa, function () {
          return (Da(), null);
        })),
      (d = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || d)
    ) {
      ((d = jt.transition), (jt.transition = null));
      var h = Ee;
      Ee = 1;
      var p = we;
      ((we |= 4),
        (qi.current = null),
        Vm(e, n),
        zu(n, e),
        wm(Vs),
        (so = !!Ks),
        (Vs = Ks = null),
        (e.current = n),
        Ym(n),
        ws(),
        (we = p),
        (Ee = h),
        (jt.transition = d));
    } else e.current = n;
    if (
      (Wo && ((Wo = !1), (En = e), (Ko = s)),
      (d = e.pendingLanes),
      d === 0 && (Sn = null),
      Ss(n.stateNode),
      ht(e, Me()),
      t !== null)
    )
      for (o = e.onRecoverableError, n = 0; n < t.length; n++)
        ((s = t[n]), o(s.value, { componentStack: s.stack, digest: s.digest }));
    if ($o) throw (($o = !1), (e = Hi), (Hi = null), e);
    return (
      (Ko & 1) !== 0 && e.tag !== 0 && Da(),
      (d = e.pendingLanes),
      (d & 1) !== 0 ? (e === Bi ? Or++ : ((Or = 0), (Bi = e))) : (Or = 0),
      xn(),
      null
    );
  }
  function Da() {
    if (En !== null) {
      var e = ca(Ko),
        t = jt.transition,
        n = Ee;
      try {
        if (((jt.transition = null), (Ee = 16 > e ? 16 : e), En === null))
          var o = !1;
        else {
          if (((e = En), (En = null), (Ko = 0), (we & 6) !== 0))
            throw Error(l(331));
          var s = we;
          for (we |= 4, Z = e.current; Z !== null;) {
            var d = Z,
              h = d.child;
            if ((Z.flags & 16) !== 0) {
              var p = d.deletions;
              if (p !== null) {
                for (var b = 0; b < p.length; b++) {
                  var R = p[b];
                  for (Z = R; Z !== null;) {
                    var B = Z;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tr(8, B, d);
                    }
                    var F = B.child;
                    if (F !== null) ((F.return = B), (Z = F));
                    else
                      for (; Z !== null;) {
                        B = Z;
                        var G = B.sibling,
                          J = B.return;
                        if ((Lu(B), B === R)) {
                          Z = null;
                          break;
                        }
                        if (G !== null) {
                          ((G.return = J), (Z = G));
                          break;
                        }
                        Z = J;
                      }
                  }
                }
                var ee = d.alternate;
                if (ee !== null) {
                  var ne = ee.child;
                  if (ne !== null) {
                    ee.child = null;
                    do {
                      var ze = ne.sibling;
                      ((ne.sibling = null), (ne = ze));
                    } while (ne !== null);
                  }
                }
                Z = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && h !== null)
              ((h.return = d), (Z = h));
            else
              e: for (; Z !== null;) {
                if (((d = Z), (d.flags & 2048) !== 0))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(9, d, d.return);
                  }
                var A = d.sibling;
                if (A !== null) {
                  ((A.return = d.return), (Z = A));
                  break e;
                }
                Z = d.return;
              }
          }
          var S = e.current;
          for (Z = S; Z !== null;) {
            h = Z;
            var j = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && j !== null)
              ((j.return = h), (Z = j));
            else
              e: for (h = S; Z !== null;) {
                if (((p = Z), (p.flags & 2048) !== 0))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ho(9, p);
                    }
                  } catch (ae) {
                    qe(p, p.return, ae);
                  }
                if (p === h) {
                  Z = null;
                  break e;
                }
                var W = p.sibling;
                if (W !== null) {
                  ((W.return = p.return), (Z = W));
                  break e;
                }
                Z = p.return;
              }
          }
          if (
            ((we = s),
            xn(),
            vt && typeof vt.onPostCommitFiberRoot == "function")
          )
            try {
              vt.onPostCommitFiberRoot(ia, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((Ee = n), (jt.transition = t));
      }
    }
    return !1;
  }
  function Ju(e, t, n) {
    ((t = Ra(n, t)),
      (t = gu(e, t, 1)),
      (e = wn(e, t, 1)),
      (t = rt()),
      e !== null && (qn(e, 1, t), ht(e, t)));
  }
  function qe(e, t, n) {
    if (e.tag === 3) Ju(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Ju(t, e, n);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Sn === null || !Sn.has(o)))
          ) {
            ((e = Ra(n, e)),
              (e = vu(t, e, 1)),
              (t = wn(t, e, 1)),
              (e = rt()),
              t !== null && (qn(t, 1, e), ht(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function tf(e, t, n) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = rt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ke === e &&
        (Qe & n) === n &&
        ($e === 4 || ($e === 3 && (Qe & 130023424) === Qe && 500 > Me() - zi)
          ? Yn(e, 0)
          : (Gi |= n)),
      ht(e, t));
  }
  function Zu(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = da), (da <<= 1), (da & 130023424) === 0 && (da = 4194304)));
    var n = rt();
    ((e = nn(e, t)), e !== null && (qn(e, t, n), ht(e, n)));
  }
  function nf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Zu(e, n));
  }
  function af(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (o !== null && o.delete(t), Zu(e, n));
  }
  var ec;
  ec = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || lt.current) ut = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((ut = !1), Fm(e, t, n));
        ut = (e.flags & 131072) !== 0;
      }
    else ((ut = !1), De && (t.flags & 1048576) !== 0 && Od(t, ko, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (Go(e, t), (e = t.pendingProps));
        var s = Ea(t, Xe.current);
        (ja(t, n), (s = xi(null, t, o, e, s, n)));
        var d = yi();
        return (
          (t.flags |= 1),
          typeof s == "object" &&
          s !== null &&
          typeof s.render == "function" &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              dt(o) ? ((d = !0), So(t)) : (d = !1),
              (t.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              ci(t),
              (s.updater = Uo),
              (t.stateNode = s),
              (s._reactInternals = t),
              ki(t, o, e, n),
              (t = ji(null, t, o, !0, d, n)))
            : ((t.tag = 0), De && d && ti(t), at(null, t, s, n), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (Go(e, t),
            (e = t.pendingProps),
            (s = o._init),
            (o = s(o._payload)),
            (t.type = o),
            (s = t.tag = of(o)),
            (e = qt(o, e)),
            s)
          ) {
            case 0:
              t = Ci(null, t, o, e, n);
              break e;
            case 1:
              t = _u(null, t, o, e, n);
              break e;
            case 11:
              t = bu(null, t, o, e, n);
              break e;
            case 14:
              t = Su(null, t, o, qt(o.type, e), n);
              break e;
          }
          throw Error(l(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (s = t.pendingProps),
          (s = t.elementType === o ? s : qt(o, s)),
          Ci(e, t, o, s, n)
        );
      case 1:
        return (
          (o = t.type),
          (s = t.pendingProps),
          (s = t.elementType === o ? s : qt(o, s)),
          _u(e, t, o, s, n)
        );
      case 3:
        e: {
          if ((Au(t), e === null)) throw Error(l(387));
          ((o = t.pendingProps),
            (d = t.memoizedState),
            (s = d.element),
            Hd(e, t),
            Ro(t, o, null, n));
          var h = t.memoizedState;
          if (((o = h.element), d.isDehydrated))
            if (
              ((d = {
                element: o,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              ((s = Ra(Error(l(423)), t)), (t = Cu(e, t, o, n, s)));
              break e;
            } else if (o !== s) {
              ((s = Ra(Error(l(424)), t)), (t = Cu(e, t, o, n, s)));
              break e;
            } else
              for (
                bt = pn(t.stateNode.containerInfo.firstChild),
                  wt = t,
                  De = !0,
                  Ut = null,
                  n = Gd(t, null, o, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((_a(), o === s)) {
              t = rn(e, t, n);
              break e;
            }
            at(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          $d(t),
          e === null && ri(t),
          (o = t.type),
          (s = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (h = s.children),
          Ys(o, s) ? (h = null) : d !== null && Ys(o, d) && (t.flags |= 32),
          ku(e, t),
          at(e, t, h, n),
          t.child
        );
      case 6:
        return (e === null && ri(t), null);
      case 13:
        return ju(e, t, n);
      case 4:
        return (
          hi(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Aa(t, null, o, n)) : at(e, t, o, n),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (s = t.pendingProps),
          (s = t.elementType === o ? s : qt(o, s)),
          bu(e, t, o, s, n)
        );
      case 7:
        return (at(e, t, t.pendingProps, n), t.child);
      case 8:
        return (at(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (at(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (s = t.pendingProps),
            (d = t.memoizedProps),
            (h = s.value),
            je(Co, o._currentValue),
            (o._currentValue = h),
            d !== null)
          )
            if (Pt(d.value, h)) {
              if (d.children === s.children && !lt.current) {
                t = rn(e, t, n);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null;) {
                var p = d.dependencies;
                if (p !== null) {
                  h = d.child;
                  for (var b = p.firstContext; b !== null;) {
                    if (b.context === o) {
                      if (d.tag === 1) {
                        ((b = an(-1, n & -n)), (b.tag = 2));
                        var R = d.updateQueue;
                        if (R !== null) {
                          R = R.shared;
                          var B = R.pending;
                          (B === null
                            ? (b.next = b)
                            : ((b.next = B.next), (B.next = b)),
                            (R.pending = b));
                        }
                      }
                      ((d.lanes |= n),
                        (b = d.alternate),
                        b !== null && (b.lanes |= n),
                        di(d.return, n, t),
                        (p.lanes |= n));
                      break;
                    }
                    b = b.next;
                  }
                } else if (d.tag === 10) h = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((h = d.return), h === null)) throw Error(l(341));
                  ((h.lanes |= n),
                    (p = h.alternate),
                    p !== null && (p.lanes |= n),
                    di(h, n, t),
                    (h = d.sibling));
                } else h = d.child;
                if (h !== null) h.return = d;
                else
                  for (h = d; h !== null;) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((d = h.sibling), d !== null)) {
                      ((d.return = h.return), (h = d));
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          (at(e, t, s.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (s = t.type),
          (o = t.pendingProps.children),
          ja(t, n),
          (s = At(s)),
          (o = o(s)),
          (t.flags |= 1),
          at(e, t, o, n),
          t.child
        );
      case 14:
        return (
          (o = t.type),
          (s = qt(o, t.pendingProps)),
          (s = qt(o.type, s)),
          Su(e, t, o, s, n)
        );
      case 15:
        return Eu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (o = t.type),
          (s = t.pendingProps),
          (s = t.elementType === o ? s : qt(o, s)),
          Go(e, t),
          (t.tag = 1),
          dt(o) ? ((e = !0), So(t)) : (e = !1),
          ja(t, n),
          fu(t, o, s),
          ki(t, o, s, n),
          ji(null, t, o, !0, e, n)
        );
      case 19:
        return Ru(e, t, n);
      case 22:
        return Nu(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function tc(e, t) {
    return eo(e, t);
  }
  function rf(e, t, n, o) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Tt(e, t, n, o) {
    return new rf(e, t, n, o);
  }
  function Yi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function of(e) {
    if (typeof e == "function") return Yi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Re)) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function _n(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Tt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Xo(e, t, n, o, s, d) {
    var h = 2;
    if (((o = e), typeof e == "function")) Yi(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case q:
          return Xn(n.children, s, d, t);
        case ue:
          ((h = 8), (s |= 8));
          break;
        case _e:
          return (
            (e = Tt(12, n, t, s | 2)),
            (e.elementType = _e),
            (e.lanes = d),
            e
          );
        case Ae:
          return (
            (e = Tt(13, n, t, s)),
            (e.elementType = Ae),
            (e.lanes = d),
            e
          );
        case ye:
          return (
            (e = Tt(19, n, t, s)),
            (e.elementType = ye),
            (e.lanes = d),
            e
          );
        case he:
          return Jo(n, s, d, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Se:
                h = 10;
                break e;
              case Te:
                h = 9;
                break e;
              case Re:
                h = 11;
                break e;
              case ve:
                h = 14;
                break e;
              case pe:
                ((h = 16), (o = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Tt(h, n, t, s)),
      (t.elementType = e),
      (t.type = o),
      (t.lanes = d),
      t
    );
  }
  function Xn(e, t, n, o) {
    return ((e = Tt(7, e, o, t)), (e.lanes = n), e);
  }
  function Jo(e, t, n, o) {
    return (
      (e = Tt(22, e, o, t)),
      (e.elementType = he),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Qi(e, t, n) {
    return ((e = Tt(6, e, null, t)), (e.lanes = n), e);
  }
  function Xi(e, t, n) {
    return (
      (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function sf(e, t, n, o, s) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ar(0)),
      (this.expirationTimes = ar(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ar(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ji(e, t, n, o, s, d, h, p, b) {
    return (
      (e = new sf(e, t, n, p, b)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = Tt(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: o,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ci(d),
      e
    );
  }
  function lf(e, t, n) {
    var o =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function nc(e) {
    if (!e) return vn;
    e = e._reactInternals;
    e: {
      if (gt(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (dt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (dt(n)) return Td(e, n, t);
    }
    return t;
  }
  function ac(e, t, n, o, s, d, h, p, b) {
    return (
      (e = Ji(n, o, !0, e, s, d, h, p, b)),
      (e.context = nc(null)),
      (n = e.current),
      (o = rt()),
      (s = Nn(n)),
      (d = an(o, s)),
      (d.callback = t ?? null),
      wn(n, d, s),
      (e.current.lanes = s),
      qn(e, s, o),
      ht(e, o),
      e
    );
  }
  function Zo(e, t, n, o) {
    var s = t.current,
      d = rt(),
      h = Nn(s);
    return (
      (n = nc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = an(d, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = wn(s, t, h)),
      e !== null && (Ht(e, s, h, d), To(e, s, h)),
      h
    );
  }
  function es(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function rc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Zi(e, t) {
    (rc(e, t), (e = e.alternate) && rc(e, t));
  }
  function df() {
    return null;
  }
  var oc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function el(e) {
    this._internalRoot = e;
  }
  ((ts.prototype.render = el.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      Zo(e, t, null, null);
    }),
    (ts.prototype.unmount = el.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Vn(function () {
            Zo(null, e, null, null);
          }),
            (t[Jt] = null));
        }
      }));
  function ts(e) {
    this._internalRoot = e;
  }
  ts.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = C();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
      (Lt.splice(n, 0, e), n === 0 && $l(e));
    }
  };
  function tl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ns(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function sc() {}
  function uf(e, t, n, o, s) {
    if (s) {
      if (typeof o == "function") {
        var d = o;
        o = function () {
          var R = es(h);
          d.call(R);
        };
      }
      var h = ac(t, o, e, 0, null, !1, !1, "", sc);
      return (
        (e._reactRootContainer = h),
        (e[Jt] = h.current),
        vr(e.nodeType === 8 ? e.parentNode : e),
        Vn(),
        h
      );
    }
    for (; (s = e.lastChild);) e.removeChild(s);
    if (typeof o == "function") {
      var p = o;
      o = function () {
        var R = es(b);
        p.call(R);
      };
    }
    var b = Ji(e, 0, !1, null, null, !1, !1, "", sc);
    return (
      (e._reactRootContainer = b),
      (e[Jt] = b.current),
      vr(e.nodeType === 8 ? e.parentNode : e),
      Vn(function () {
        Zo(t, b, n, o);
      }),
      b
    );
  }
  function as(e, t, n, o, s) {
    var d = n._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof s == "function") {
        var p = s;
        s = function () {
          var b = es(h);
          p.call(b);
        };
      }
      Zo(t, h, e, s);
    } else h = uf(n, t, e, s, o);
    return es(h);
  }
  ((ha = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Un(t.pendingLanes);
          n !== 0 &&
            (rr(t, n | 1),
            ht(t, Me()),
            (we & 6) === 0 && ((Ia = Me() + 500), xn()));
        }
        break;
      case 13:
        (Vn(function () {
          var o = nn(e, 1);
          if (o !== null) {
            var s = rt();
            Ht(o, e, 1, s);
          }
        }),
          Zi(e, 1));
    }
  }),
    (ma = function (e) {
      if (e.tag === 13) {
        var t = nn(e, 134217728);
        if (t !== null) {
          var n = rt();
          Ht(t, e, 134217728, n);
        }
        Zi(e, 134217728);
      }
    }),
    (or = function (e) {
      if (e.tag === 13) {
        var t = Nn(e),
          n = nn(e, t);
        if (n !== null) {
          var o = rt();
          Ht(n, e, t, o);
        }
        Zi(e, t);
      }
    }),
    (C = function () {
      return Ee;
    }),
    (H = function (e, t) {
      var n = Ee;
      try {
        return ((Ee = e), t());
      } finally {
        Ee = n;
      }
    }),
    (Qa = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ea(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var o = n[t];
              if (o !== e && o.form === e.form) {
                var s = wo(o);
                if (!s) throw Error(l(90));
                (Ba(o), ea(o, s));
              }
            }
          }
          break;
        case "textarea":
          nt(e, n);
          break;
        case "select":
          ((t = n.value), t != null && pt(e, !!n.multiple, t, !1));
      }
    }),
    (ra = Wi),
    (In = Vn));
  var cf = { usingClientEntryPoint: !1, Events: [wr, ba, wo, Yr, Qr, Wi] },
    Ir = {
      findFiberByHostInstance: Gn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    hf = {
      bundleType: Ir.bundleType,
      version: Ir.version,
      rendererPackageName: Ir.rendererPackageName,
      rendererConfig: Ir.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Za(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Ir.findFiberByHostInstance || df,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rs.isDisabled && rs.supportsFiber)
      try {
        ((ia = rs.inject(hf)), (vt = rs));
      } catch {}
  }
  return (
    (mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cf),
    (mt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!tl(t)) throw Error(l(200));
      return lf(e, t, null, n);
    }),
    (mt.createRoot = function (e, t) {
      if (!tl(e)) throw Error(l(299));
      var n = !1,
        o = "",
        s = oc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = Ji(e, 1, !1, null, null, n, !1, o, s)),
        (e[Jt] = t.current),
        vr(e.nodeType === 8 ? e.parentNode : e),
        new el(t)
      );
    }),
    (mt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(l(188))
          : ((e = Object.keys(e).join(",")), Error(l(268, e)));
      return ((e = Za(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (mt.flushSync = function (e) {
      return Vn(e);
    }),
    (mt.hydrate = function (e, t, n) {
      if (!ns(t)) throw Error(l(200));
      return as(null, e, t, !0, n);
    }),
    (mt.hydrateRoot = function (e, t, n) {
      if (!tl(e)) throw Error(l(405));
      var o = (n != null && n.hydratedSources) || null,
        s = !1,
        d = "",
        h = oc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (d = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (h = n.onRecoverableError)),
        (t = ac(t, null, e, 1, n ?? null, s, !1, d, h)),
        (e[Jt] = t.current),
        vr(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((n = o[e]),
            (s = n._getVersion),
            (s = s(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, s])
              : t.mutableSourceEagerHydrationData.push(n, s));
      return new ts(t);
    }),
    (mt.render = function (e, t, n) {
      if (!ns(t)) throw Error(l(200));
      return as(null, e, t, !1, n);
    }),
    (mt.unmountComponentAtNode = function (e) {
      if (!ns(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (Vn(function () {
            as(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Jt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (mt.unstable_batchedUpdates = Wi),
    (mt.unstable_renderSubtreeIntoContainer = function (e, t, n, o) {
      if (!ns(n)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return as(e, t, n, !1, o);
    }),
    (mt.version = "18.3.1-next-f1338f8080-20240426"),
    mt
  );
}
var fc;
function wf() {
  if (fc) return rl.exports;
  fc = 1;
  function a() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (rl.exports = yf()), rl.exports);
}
var pc;
function bf() {
  if (pc) return os;
  pc = 1;
  var a = wf();
  return ((os.createRoot = a.createRoot), (os.hydrateRoot = a.hydrateRoot), os);
}
var Sf = bf();
const Ef = [
    "inline-flex items-center justify-center gap-2",
    "cursor-pointer select-none whitespace-nowrap",
    "rounded-sm border font-medium",
    "transition-[background-color,border-color,color,transform] duration-100",
    "active:translate-y-px",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-6",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-field",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
  ].join(" "),
  Nf = {
    primary: [
      "border-white bg-white text-black",
      "hover:bg-neutral-200 hover:border-neutral-200",
      "active:bg-neutral-300 active:border-neutral-300",
      "disabled:border-neutral-800 disabled:bg-neutral-800 disabled:text-neutral-500",
    ].join(" "),
    strong: [
      "border-white/70 bg-transparent text-white",
      "hover:border-white hover:bg-neutral-800",
      "active:bg-neutral-700",
      "disabled:border-neutral-800 disabled:bg-transparent disabled:text-neutral-600",
    ].join(" "),
    standard: [
      "border-neutral-700 bg-transparent text-neutral-200",
      "hover:border-neutral-500 hover:bg-neutral-800 hover:text-white",
      "active:bg-neutral-700",
      "disabled:border-neutral-800 disabled:text-neutral-600",
    ].join(" "),
    quiet: [
      "border-neutral-800 bg-transparent text-neutral-400",
      "hover:border-neutral-600 hover:bg-neutral-900 hover:text-neutral-200",
      "active:bg-neutral-800",
      "disabled:border-neutral-900 disabled:text-neutral-700",
    ].join(" "),
    ghost: [
      "border-transparent bg-transparent text-neutral-400",
      "hover:border-neutral-700 hover:bg-neutral-900 hover:text-neutral-100",
      "active:bg-neutral-800",
      "disabled:text-neutral-700",
    ].join(" "),
  },
  kf = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-sm",
    lg: "px-5 py-2.5 text-base",
  };
function ie({
  level: a = "standard",
  size: i = "md",
  block: l = !1,
  extra: c,
} = {}) {
  return [Ef, Nf[a], kf[i], l ? "w-full" : "", c ?? ""]
    .filter((u) => u !== "")
    .join(" ");
}
const Jc = [
    "REACHES_INTERNET",
    "RUNS_OTHER_PROGRAMS",
    "RUNS_KNOWN_HELPER",
    "RUNS_A_PROGRAM_IT_NAMES",
    "TOUCHES_OUTSIDE_FILES",
    "INDIRECT_CODE_LOADING",
    "RUNS_UNCHECKED_CODE",
    "LOADS_NATIVE_CODE",
    "CARRIES_A_PROGRAM",
    "CARRIES_A_KNOWN_MALWARE_MARKER",
    "STARTS_AUTOMATICALLY",
    "DISABLES_YOUR_PROTECTION",
    "HIDES_ITS_CODE",
    "CHECKS_IF_IT_IS_WATCHED",
    "ASKS_EXTRA_ACCESS",
    "ACTS_AS_JAVA_AGENT",
    "TOUCHES_SENSITIVE_FILES",
    "ACTS_AS_YOU_IN_GAME",
    "CARRIES_A_TRANSFER_COMMAND",
    "MOVES_YOUR_ITEMS",
    "READS_YOUR_SESSION",
    "HAS_A_HOLE_SOMEBODY_COULD_USE",
    "PRETENDS_TO_BE_A_SCHEMATIC",
    "HIDES_AN_EXECUTABLE",
    "RUNS_COMMANDS_WHEN_PLACED",
    "CARRIES_A_DANGEROUS_COMMAND",
    "LOOKS_LIKE_A_BOMB",
  ],
  za = {
    REACHES_INTERNET: {
      category: "REACHES_INTERNET",
      title: "Reaches out to the internet",
      weight: 12,
      friendlyDescription:
        "This mod contains code that opens network connections or makes web requests. On its own that's normal for many mods (map mods, multiplayer helpers, update checkers), but combined with other warning signs it can mean the mod sends your data somewhere.",
      whatYouCanDo:
        "Check whether the mod has a good reason to use the internet (maps, online features). If it has no obvious online feature, be cautious.",
    },
    RUNS_OTHER_PROGRAMS: {
      category: "RUNS_OTHER_PROGRAMS",
      title: "Tries to run other programs on your computer",
      weight: 26,
      friendlyDescription:
        "This mod contains code that can start other programs or system commands on your computer, and ModGuard either could not read which program that is or did not recognise it. A game mod almost never needs to do this, and it's a common way malware installs itself.",
      whatYouCanDo:
        "Unless the mod clearly documents why it launches external programs, do not install it.",
    },
    RUNS_KNOWN_HELPER: {
      category: "RUNS_KNOWN_HELPER",
      title: "Asks your computer to do one ordinary job",
      weight: 6,
      friendlyDescription:
        "This mod starts a small program that already comes with your computer, to do one specific, ordinary job: opening a link in your browser, or asking which graphics card you have. ModGuard read the command out of the mod's code and recognised it, and the exact command is listed below so you can check. That is a very different thing from a mod that runs a command nobody can read.",
      whatYouCanDo:
        "Read the command below. If it is opening a link or asking about your hardware, that is what mod menus and graphics mods normally do and there is nothing to worry about.",
    },
    RUNS_A_PROGRAM_IT_NAMES: {
      category: "RUNS_A_PROGRAM_IT_NAMES",
      title: "Starts another program, and ModGuard read which one",
      weight: 18,
      friendlyDescription:
        "This mod starts another program on your computer, and ModGuard was able to read the whole command out of the mod's code. It is printed below. That is a very different thing from a mod that runs a command nobody can read: you can see the name of the file it starts and go and look at that file. What ModGuard cannot tell you is what is inside it. Updaters, video recorders and installers all legitimately do this.",
      whatYouCanDo:
        "Read the command below and check the file it names. Does this mod have a reason to start another program, like an updater, a recording feature or an installer? If it has none, ask the author why before installing it.",
    },
    TOUCHES_OUTSIDE_FILES: {
      category: "TOUCHES_OUTSIDE_FILES",
      title: "Touches files outside the mod's own area",
      weight: 22,
      friendlyDescription:
        "This mod contains code that reads or writes files outside the game's mod and config folders. Examples are system folders, or your user profile. Mods normally only need their own area.",
      whatYouCanDo:
        "Ask the mod's author why it needs files outside the game folder before trusting it.",
    },
    INDIRECT_CODE_LOADING: {
      category: "INDIRECT_CODE_LOADING",
      title: "Loads code in indirect ways that can hide what it does",
      weight: 18,
      friendlyDescription:
        "This mod loads extra code at runtime in a roundabout way (for example downloading classes or building them on the fly). That makes it possible to hide behaviour from a checker like this one.",
      whatYouCanDo:
        "Prefer mods whose code is all in the file you downloaded. Treat this as a caution sign, especially together with internet access.",
    },
    RUNS_UNCHECKED_CODE: {
      category: "RUNS_UNCHECKED_CODE",
      weight: 45,
      title: "Runs code that was never in the file you checked",
      friendlyDescription:
        "While the game is running, this mod goes and gets more code, from a web address or from a file it writes itself, and hands it straight to the game to run. ModGuard followed those bytes through the mod's own code to prove it; this is not a guess based on which classes the mod mentions. It matters more than anything else on this page, because the part that does the work is not in this file: it sits on somebody's server, it can be changed after you check it, and it can be different for you than for anyone else who looked. A mod updater downloads things too. But an updater hands you a file and asks you to restart. This hands the running game new code directly.",
      whatYouCanDo:
        "Don't install it. There is no version of this file anyone can check, because the part that matters gets downloaded later. If you have already run it, treat your Minecraft and Microsoft accounts as compromised: change the password, sign out everywhere, and check for logins you don't recognise.",
    },
    LOADS_NATIVE_CODE: {
      category: "LOADS_NATIVE_CODE",
      title: "Loads native code libraries",
      weight: 24,
      friendlyDescription:
        "This mod loads native libraries (.dll/.so/.dylib) that run outside the game's Java sandbox with full access to your computer. Very few mods genuinely need this.",
      whatYouCanDo:
        "Only accept this from well-known mods that document why they need native code (e.g. video or audio).",
    },
    CARRIES_A_PROGRAM: {
      category: "CARRIES_A_PROGRAM",
      title: "Carries a program inside it",
      weight: 30,
      friendlyDescription:
        "Packed inside this mod is a file your computer would run as a program in its own right: a Windows executable, a script the system shell runs, or an installer file. A mod is Java code that the game loads; it does not need to carry a second program around with it. ModGuard cannot read what that program does, which is the problem: everything else on this page was read out of the mod's own code, and this part cannot be.",
      whatYouCanDo:
        "The file is named below. Unless this is an installer you deliberately went looking for, and it says out loud that it carries one, do not install it.",
    },
    CARRIES_A_KNOWN_MALWARE_MARKER: {
      category: "CARRIES_A_KNOWN_MALWARE_MARKER",
      title: "Carries a name used by a known family of malicious plugins",
      weight: 45,
      friendlyDescription:
        "This file contains a name that a known family of malicious server plugins uses for the file it drops on the machines it infects. ModGuard found the name written inside this file; it did not watch the file do anything with it, so this is a strong reason for suspicion rather than proof on its own.",
      whatYouCanDo:
        "Do not install this on a server you care about until you know where it came from. If you downloaded it from a plugin listing, check the author and the download page against the official one. This family spreads by replacing real plugins with copies of itself.",
    },
    STARTS_AUTOMATICALLY: {
      category: "STARTS_AUTOMATICALLY",
      title: "Sets itself to start automatically or stick around",
      weight: 26,
      friendlyDescription:
        "This mod references ways to start itself when your computer boots or to keep running outside the game (startup folders, scheduled tasks, autorun registry keys). A game mod should never do this.",
      whatYouCanDo:
        "Do not install a mod that wants to outlive the game it belongs to.",
    },
    DISABLES_YOUR_PROTECTION: {
      category: "DISABLES_YOUR_PROTECTION",
      title: "Tells your antivirus to stop looking",
      weight: 45,
      friendlyDescription:
        "This mod runs a command that switches off part of your computer's own protection. It tells Windows Defender to stop scanning a folder, or to ignore a particular program. ModGuard read the whole command out of the mod, and it is printed below. Nothing a Minecraft mod does requires this. It is the step malware takes so that whatever it installs next is not noticed.",
      whatYouCanDo:
        "Do not install it. If you have already run it, open Windows Security and check the exclusion list for entries you did not add. Deleting the mod does not remove them. Then run a full scan.",
    },
    HIDES_ITS_CODE: {
      category: "HIDES_ITS_CODE",
      title: "Hides or scrambles its own code",
      weight: 28,
      friendlyDescription:
        "This mod's code is deliberately made hard to read: scrambled names, or encrypted pieces that are only decoded while running. Honest mods rarely need to hide what they do.",
      whatYouCanDo:
        "Be very cautious. Hidden code plus any other warning sign is a strong reason not to install.",
    },
    CHECKS_IF_IT_IS_WATCHED: {
      category: "CHECKS_IF_IT_IS_WATCHED",
      title:
        "Checks whether it is being watched, and can behave differently if it is",
      weight: 30,
      friendlyDescription:
        "This mod looks at who your computer is: its name, its network card, the account you are signed in as. It compares what it finds against a list of the names that analysis machines and testing sandboxes use. Code does that for one reason: so it can behave itself while it is being examined and do something else on a real person's computer. It also means a quiet result from a tool like this one is worth less than usual for this file.",
      whatYouCanDo:
        "Treat any 'nothing found' result about this mod, including ModGuard's own, as unreliable. The mod is written to produce exactly that. Unless the author can explain the list below, do not install it.",
    },
    ASKS_EXTRA_ACCESS: {
      category: "ASKS_EXTRA_ACCESS",
      title: "Asks for more access than a mod should need",
      weight: 20,
      friendlyDescription:
        "This mod reaches into internals of the Java runtime that normal code doesn't touch: rewriting other code as it loads, turning off Java's own safety checks, or using the “unsafe” APIs for something other than moving memory around. Plain fast-memory work is left out on purpose: every rendering and performance mod does that, so counting it told you nothing.",
      whatYouCanDo:
        "Expected from mods that patch game code. Worth a second look in a mod that has no reason to.",
    },
    ACTS_AS_JAVA_AGENT: {
      category: "ACTS_AS_JAVA_AGENT",
      title: "Declares itself a Java agent",
      weight: 30,
      friendlyDescription:
        "This file declares itself as a Java agent, which lets it rewrite other programs' code as that code loads: the game's, other mods', anything in the same Java process. Profilers and developer tools work this way; gameplay mods do not.",
      whatYouCanDo:
        "Only install this if it is a developer tool you deliberately went looking for. A gameplay mod has no reason to be a Java agent.",
    },
    ACTS_AS_YOU_IN_GAME: {
      category: "ACTS_AS_YOU_IN_GAME",
      title: "Can type into the game as you",
      weight: 26,
      friendlyDescription:
        "This mod can send chat messages and commands to the server under your name, without you typing anything. On a server with an economy that is enough to empty your balance: one hidden “/pay” and the money is somebody else's. Keybind and macro mods do this for good reasons, so what matters is whether it happens when you press a key or quietly on its own.",
      whatYouCanDo:
        "If this isn't a macro or keybind mod, ask why it needs to talk to the server as you. Check the live watch section below: it shows what the mod actually typed when ModGuard ran it.",
    },
    CARRIES_A_TRANSFER_COMMAND: {
      category: "CARRIES_A_TRANSFER_COMMAND",
      title:
        "Carries a ready-made command that gives your money or things away",
      weight: 40,
      friendlyDescription:
        "Written into this mod's code is a finished command that hands money or items to another player. This is not the ability to type such a command; it is the actual words, already written. A mod that lets you type commands has no reason to carry one already filled in with a stranger's name. This is what an in-game thief looks like: it never touches your computer, it just spends your money for you.",
      whatYouCanDo:
        "Read the command below. It usually names who gets paid. Unless it is something you asked this mod to do, do not install it, and tell whoever you got it from.",
    },
    READS_YOUR_SESSION: {
      category: "READS_YOUR_SESSION",
      title: "Reads the key that proves you are you",
      weight: 20,
      friendlyDescription:
        "This mod reads your Minecraft session token. That token is the key your game uses to prove it is your account, without needing your password. Some mods have a real reason to: uploading a skin or a cape means proving to a server that the account is yours. But it is also exactly what an account stealer takes, and it is the one thing that lets somebody log in as you.",
      whatYouCanDo:
        "Ask what this mod does that needs your account: skins, capes, and cosmetics are real reasons. If it has no online feature at all, that is worth asking about. If you are worried, sign out everywhere from your Microsoft account page. That makes any copied token useless.",
    },
    MOVES_YOUR_ITEMS: {
      category: "MOVES_YOUR_ITEMS",
      title: "Can move items out of your inventory",
      weight: 28,
      friendlyDescription:
        "This mod can click slots in your inventory, drop items, or work a chest or trade window for you. Sorting mods do this legitimately. It is also exactly how a mod empties your inventory into somebody else's chest while you are standing still.",
      whatYouCanDo:
        "Expected from inventory sorters and auto-crafters. In anything else, treat it as a reason to look at what the live watch section saw it do.",
    },
    TOUCHES_SENSITIVE_FILES: {
      category: "TOUCHES_SENSITIVE_FILES",
      title: "Reads files that hold logins or private data",
      weight: 30,
      friendlyDescription:
        "This mod references files known to contain account credentials or private data. Examples are the game launcher's saved login, browser data folders, or messaging-app storage. This is the classic pattern of account-stealing mods.",
      whatYouCanDo:
        "Do not install it. If you already ran it, change your passwords and log out other sessions.",
    },
    HAS_A_HOLE_SOMEBODY_COULD_USE: {
      category: "HAS_A_HOLE_SOMEBODY_COULD_USE",
      title: "Has a weakness somebody else could use against you",
      weight: 0,
      friendlyDescription:
        "This mod accepts data from the network in a way that lets whoever sends it run code on your computer. That is a hole in the mod, not a sign that its author meant any harm. This is one of the easiest mistakes to make in Java, and it has happened to well-known, well-liked mods. It does not mean the mod is trying to rob you. It means somebody else could, if they can reach the server you play on.",
      whatYouCanDo:
        "Check whether a newer version fixes it, and tell the author. Most fix this quickly once they know. Until then, be careful about which servers you join with it installed; a hole like this is only reachable by someone who can send your game data.",
    },
    PRETENDS_TO_BE_A_SCHEMATIC: {
      category: "PRETENDS_TO_BE_A_SCHEMATIC",
      title: "Is not the kind of file it claims to be",
      weight: 40,
      friendlyDescription:
        "This file has a schematic's name (.litematic, .schem, .schematic or .nbt) but its actual contents are a program: a Minecraft mod or a zip of code, not a saved build. A schematic is structure data and is never packaged this way. Disguising a program as a schematic is a known trick for getting someone to open a mod they would not have installed on purpose.",
      whatYouCanDo:
        "Do not load this into Litematica, WorldEdit or any schematic tool. ModGuard has read the real contents, and any findings about the program itself are shown below. Judge it as what it is.",
    },
    HIDES_AN_EXECUTABLE: {
      category: "HIDES_AN_EXECUTABLE",
      title: "Is a program disguised as a schematic",
      weight: 60,
      friendlyDescription:
        "This file is named like a schematic but its contents are a runnable program: a Windows, macOS or Linux executable, or a script. A saved build is never any of those things. ModGuard cannot read what the program does, and there is no legitimate reason for a schematic to be one, so this is treated as an attempt to get you to run a program you did not mean to.",
      whatYouCanDo:
        "Delete it. Do not open it, do not rename it back to its real extension, and do not run it. If you already opened it, treat this computer as possibly compromised.",
    },
    RUNS_COMMANDS_WHEN_PLACED: {
      category: "RUNS_COMMANDS_WHEN_PLACED",
      title: "Runs commands when you place it",
      weight: 12,
      friendlyDescription:
        "This build contains command blocks or command data, so once it is placed and triggered it can run those commands under your name. That only happens in a world where commands are allowed (singleplayer with cheats on, or a server where you can place command blocks). Command blocks are completely normal for redstone contraptions, adventure maps and minigames. The commands ModGuard read are listed below so you can see them.",
      whatYouCanDo:
        "Read the commands below. If this is a redstone or map build, command blocks are expected. If it is meant to be a plain structure, ask why it needs to run commands.",
    },
    CARRIES_A_DANGEROUS_COMMAND: {
      category: "CARRIES_A_DANGEROUS_COMMAND",
      title: "Carries a command that can harm you when placed",
      weight: 40,
      friendlyDescription:
        "A command block in this build carries a command that a normal build has no reason to: giving operator powers, running a datapack function, or deleting blocks. Once the build is placed in a world where commands run and the block is triggered, it does this under your name. You do not type anything. Loading a schematic to preview it runs nothing; placing it in a live world is what matters.",
      whatYouCanDo:
        "Read the command below. Do not place this build in a world with cheats or command blocks enabled. If it grants operator powers, runs a datapack function, or names another player, treat it as a trap.",
    },
    LOOKS_LIKE_A_BOMB: {
      category: "LOOKS_LIKE_A_BOMB",
      title: "Is built to crash whatever opens it",
      weight: 34,
      friendlyDescription:
        "This file is built the way a crash attack is: it either unpacks to enormously more than its size on disk, or its data is nested so deeply that reading it would exhaust memory. A real saved build never looks like this. It is designed to freeze or crash the mod that opens it. ModGuard's own reader stopped before it could.",
      whatYouCanDo:
        "Delete it. Do not load it into a schematic mod. The point of a file like this is to crash the program that reads it.",
    },
  };
Jc.map((a) => za[a]);
const Zc = [".jar", ".zip"],
  _f = [".litematic", ".schem", ".schematic", ".nbt"],
  eh = [...Zc, ..._f];
function gc(a, i = "or") {
  return a.length === 0
    ? ""
    : a.length === 1
      ? (a[0] ?? "")
      : `${a.slice(0, -1).join(", ")} ${i} ${a.at(-1)}`;
}
eh.join(",");
function th(a) {
  return a.fileName ?? a.modName ?? a.modId ?? "This mod";
}
function Af(a) {
  const i = /^([a-zA-Z_$][\w$]*(?:\.[a-zA-Z_$][\w$]*)+)\b/.exec(a);
  if (i === null) return null;
  const l = i[1] ?? "";
  if (!l.includes(".")) return null;
  const c = l.split("."),
    u = c.at(-1) ?? "",
    m = c.at(-2) ?? "",
    f = (x) => /^[a-z_$]/.test(x);
  return c.length > 2 && f(u) && !f(m) ? c.slice(0, -1).join(".") : l;
}
function vc(a) {
  const i = a.lastIndexOf(".");
  return i === -1 ? "" : a.slice(0, i);
}
function xc(a) {
  const i = a.lastIndexOf(".");
  return i === -1 ? a : a.slice(i + 1);
}
function Cf(a) {
  const i = new Map(),
    l = [],
    c = "archive";
  i.set(c, {
    id: c,
    label: th(a),
    fullName: a.fileName ?? a.fingerprintSha256.slice(0, 12),
    kind: "archive",
    depth: 0,
    parentId: null,
    weight: Math.max(1, a.classCount),
    findings: [],
    leadsToFinding: !1,
  });
  const u = (v) => {
      if (v === "") return c;
      const E = i.get(`pkg:${v}`);
      if (E !== void 0) return E.id;
      const y = vc(v),
        _ = u(y),
        N = `pkg:${v}`,
        I = i.get(_);
      return (
        i.set(N, {
          id: N,
          label: xc(v),
          fullName: v,
          kind: "package",
          depth: ((I == null ? void 0 : I.depth) ?? 0) + 1,
          parentId: _,
          weight: 1,
          findings: [],
          leadsToFinding: !1,
        }),
        l.push([_, N]),
        N
      );
    },
    m = (v, E) => {
      const y = `cls:${v}`,
        _ = i.get(y);
      if (_ !== void 0)
        return (E === "entrypoint" && (_.kind = "entrypoint"), y);
      const N = u(vc(v)),
        I = i.get(N);
      return (
        i.set(y, {
          id: y,
          label: xc(v),
          fullName: v,
          kind: E,
          depth: ((I == null ? void 0 : I.depth) ?? 0) + 1,
          parentId: N,
          weight: 1,
          findings: [],
          leadsToFinding: !1,
        }),
        l.push([N, y]),
        y
      );
    };
  for (const v of a.codeBreakdown.packages) u(v);
  for (const v of a.entryPoints) v.includes(".") && m(v, "entrypoint");
  for (const v of a.findings)
    for (const E of v.evidence) {
      const y = Af(E);
      if (y === null) continue;
      const _ = m(y, "class"),
        N = i.get(_);
      N !== void 0 &&
        !N.findings.includes(v.category) &&
        N.findings.push(v.category);
    }
  for (const v of a.codeBreakdown.capabilities)
    for (const E of v.exampleClasses) E.includes(".") && m(E, "class");
  const f = [...i.values()].sort((v, E) => E.depth - v.depth);
  for (const v of f) {
    if (v.parentId === null) continue;
    const E = i.get(v.parentId);
    E !== void 0 &&
      (v.kind === "class" || v.kind === "entrypoint") &&
      (E.weight += 1);
  }
  for (const v of f)
    if (
      (v.findings.length > 0 && (v.leadsToFinding = !0),
      v.leadsToFinding && v.parentId !== null)
    ) {
      const E = i.get(v.parentId);
      E !== void 0 && (E.leadsToFinding = !0);
    }
  const x = [...i.values()];
  return {
    nodes: x,
    edges: l,
    maxDepth: x.reduce((v, E) => Math.max(v, E.depth), 0),
  };
}
const jf = [
    {
      match:
        /(^|\.)(modrinth\.com|curseforge\.com|forgecdn\.net|cursemaven\.com)$/i,
      kind: "mod-hosting",
      note: "A mod site. Update checks and downloads normally go here.",
      routine: !0,
    },
    {
      match:
        /(^|\.)(fabricmc\.net|minecraftforge\.net|neoforged\.net|quiltmc\.org|papermc\.io)$/i,
      kind: "mod-hosting",
      note: "A mod loader's own site. Ordinary for a mod to contact.",
      routine: !0,
    },
    {
      match:
        /(^|\.)(maven\.apache\.org|repo1\.maven\.org|jitpack\.io|sonatype\.org)$/i,
      kind: "mod-hosting",
      note: "A Java library repository. Normal for a mod that fetches dependencies.",
      routine: !0,
    },
    {
      match: /(^|\.)(mojang\.com|minecraft\.net|minecraftservices\.com)$/i,
      kind: "mod-hosting",
      note: "Mojang's own service. Expected from anything that talks to the game's accounts or servers.",
      routine: !0,
    },
    {
      match: /(^|\.)(github\.com|githubusercontent\.com|gitlab\.com)$/i,
      kind: "mod-hosting",
      note: "Code hosting. Often a legitimate update check, and also a common place to park a payload.",
      routine: !1,
    },
    {
      match:
        /(^|\.)(discord\.com|discordapp\.com|discord\.gg|discordapp\.net)$/i,
      kind: "chat-webhook",
      note: "Discord. Mods routinely link to their own support server, and Discord's file host is an ordinary place to put a download. Neither is a warning by itself. ModGuard says so separately, on the row, when a Discord address turns out to be a webhook rather than a link.",
      routine: !1,
    },
    {
      match: /(^|\.)(api\.telegram\.org|telegram\.org|t\.me)$/i,
      kind: "chat-webhook",
      note: "Telegram. A mod that links here is pointing at a channel; a mod that posts to the bot API is messaging somebody directly, which is a delivery route rather than a feature. ModGuard says which one it found on the row.",
      routine: !1,
    },
    {
      match: /(^|\.)(hooks\.slack\.com|slack\.com)$/i,
      kind: "chat-webhook",
      note: "Slack. A `hooks.slack.com/services/…` address is a private pipe to whoever set it up; anything else on the domain is a link.",
      routine: !1,
    },
    {
      match:
        /(^|\.)(pastebin\.com|hastebin\.com|paste\.ee|ghostbin\.com|termbin\.com|0x0\.st|transfer\.sh|file\.io|anonfiles\.com|gofile\.io|catbox\.moe|litterbox\.catbox\.moe|mediafire\.com|pixeldrain\.com|limewire\.com|mega\.nz|mega\.io|wetransfer\.com|we\.tl|filebin\.net|bashupload\.com|uguu\.se|tmpfiles\.org|krakenfiles\.com|dropmefiles\.com)$/i,
      kind: "paste-or-upload",
      note: "An anonymous paste or file-drop service. Mods do not normally need one; stolen data does, and so does a payload that needs somewhere to sit.",
      routine: !1,
    },
    {
      match:
        /(^|\.)(duckdns\.org|no-ip\.(com|org|biz)|ddns\.net|hopto\.org|ngrok\.io|ngrok-free\.app|trycloudflare\.com|loca\.lt|serveo\.net)$/i,
      kind: "dynamic-dns",
      note: "A dynamic-DNS or tunnel host: someone's home computer or laptop, reachable from the internet. Legitimate services do not live here.",
      routine: !1,
    },
    {
      match:
        /(^|\.)(bit\.ly|tinyurl\.com|t\.co|is\.gd|shorturl\.at|rb\.gy|cutt\.ly)$/i,
      kind: "url-shortener",
      note: "A link shortener, which hides where the connection actually ends up.",
      routine: !1,
    },
    {
      match: /^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])$/i,
      kind: "local",
      note: "This computer. Usually a developer leftover rather than anything sinister.",
      routine: !0,
    },
  ],
  Tf = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Rf =
    /^(?:0\.|10\.|127\.|169\.254\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.|100\.(?:6[4-9]|[7-9]\d|1[01]\d|12[0-7])\.)/;
function Mf(a) {
  const i = a.toLowerCase().replace(/^www\./, "");
  for (const l of jf)
    if (l.match.test(i))
      return { kind: l.kind, note: l.note, routine: l.routine };
  return Tf.test(i)
    ? Rf.test(i)
      ? {
          kind: "local",
          note: "An address on a private network rather than the internet: this machine, or something on the same home or office network. In a mod this is usually a LAN server or an example left in a config.",
          routine: !0,
        }
      : {
          kind: "raw-ip",
          note: "A bare IP address with no domain name. Real services use names; a hard-coded address on the public internet usually means somebody's own machine, and it cannot be looked up or reported the way a domain can.",
          routine: !1,
        }
    : {
        kind: "unknown",
        note: "Not a host ModGuard recognises. That is not proof of anything, but it is worth knowing where a mod phones.",
        routine: !1,
      };
}
const nh = {
    verified: {
      level: "verified",
      label: "Verified package",
      headline:
        "This is a properly built mod and its archive is signed. Every file still matches the fingerprints recorded when it was signed, so nothing was altered afterwards.",
      trusted: !0,
    },
    valid: {
      level: "valid",
      label: "Valid mod package",
      headline:
        "This is a properly built mod: a real mod-loader description, code organised the way a build tool produces it, and the code it says it starts is actually in the file.",
      trusted: !0,
    },
    unverified: {
      level: "unverified",
      label: "Not a recognised mod package",
      headline:
        "ModGuard could not confirm this file is a properly built mod, so everything it does is treated with suspicion.",
      trusted: !1,
    },
    malformed: {
      level: "malformed",
      label: "Malformed package",
      headline:
        "This archive is put together wrongly: pieces are broken, missing, or no longer match what the file claims. That alone is a reason to be careful.",
      trusted: !1,
    },
  },
  Of = [
    "REACHES_INTERNET",
    "TOUCHES_OUTSIDE_FILES",
    "INDIRECT_CODE_LOADING",
    "LOADS_NATIVE_CODE",
    "ASKS_EXTRA_ACCESS",
    "RUNS_KNOWN_HELPER",
    "ACTS_AS_YOU_IN_GAME",
  ];
function ah(a) {
  return Of.includes(a);
}
function kl(a) {
  return a !== void 0 && nh[a].trusted;
}
const If =
    "Ordinary for a properly packaged mod. Noted, but not counted against it.",
  Df = 49,
  Ml = [
    {
      categories: ["TOUCHES_SENSITIVE_FILES", "REACHES_INTERNET"],
      extraWeight: 25,
      reason:
        "Reads files that hold logins and also talks to the internet. That is the classic pattern of a mod that steals accounts.",
      theftPattern: !0,
    },
    {
      categories: ["RUNS_OTHER_PROGRAMS", "HIDES_ITS_CODE"],
      extraWeight: 20,
      reason:
        "Runs other programs while hiding its own code. That is a common way malware installs itself without being noticed.",
    },
    {
      categories: ["REACHES_INTERNET", "HIDES_ITS_CODE"],
      extraWeight: 15,
      reason:
        "Talks to the internet with code it deliberately makes hard to read.",
    },
    {
      categories: ["INDIRECT_CODE_LOADING", "REACHES_INTERNET"],
      extraWeight: 15,
      reason:
        "Can download and run extra code from the internet that isn't in the file you checked.",
    },
    {
      categories: ["RUNS_UNCHECKED_CODE", "REACHES_INTERNET"],
      extraWeight: 15,
      reason:
        "Downloads code while the game is running and runs it. Nothing anyone says about this file covers the code it fetches.",
    },
    {
      categories: ["RUNS_UNCHECKED_CODE", "HIDES_ITS_CODE"],
      extraWeight: 20,
      reason:
        "Fetches code from somewhere else and hides how it does it. Between them, there is nothing left in this file worth checking.",
    },
    {
      categories: ["LOADS_NATIVE_CODE", "HIDES_ITS_CODE"],
      extraWeight: 15,
      reason:
        "Loads native code with full system access while hiding what its own code does.",
    },
    {
      categories: ["ACTS_AS_YOU_IN_GAME", "MOVES_YOUR_ITEMS"],
      extraWeight: 20,
      reason:
        "Can both talk to the server as you and move your items. Between them, everything you own in game can be handed to someone else.",
      theftPattern: !0,
    },
    {
      categories: ["ACTS_AS_YOU_IN_GAME", "CARRIES_A_TRANSFER_COMMAND"],
      extraWeight: 15,
      reason:
        "It can type into the game as you, and the command it would type is already written into it, including who gets paid.",
      theftPattern: !0,
    },
    {
      categories: ["STARTS_AUTOMATICALLY", "RUNS_OTHER_PROGRAMS"],
      extraWeight: 15,
      reason:
        "Starts programs and sets itself up to keep running. That is the behaviour of an installer, not a mod.",
    },
    {
      categories: ["CARRIES_A_PROGRAM", "RUNS_OTHER_PROGRAMS"],
      extraWeight: 20,
      reason:
        "Carries a program inside it and can start programs. Between them, everything needed to install something on your computer is already in this file.",
    },
    {
      categories: ["CHECKS_IF_IT_IS_WATCHED", "HIDES_ITS_CODE"],
      extraWeight: 20,
      reason:
        "Makes itself hard to read and also checks whether it is being examined. Those are the two things a mod does when it does not want anyone to find out what it does.",
    },
  ];
function Lf(a, i) {
  let l = null;
  for (const c of a.categories) {
    const u = i.get(c);
    if (u === void 0 || !u.complete || u.keys.size === 0) return !1;
    if (l === null) l = new Set(u.keys);
    else {
      const m = new Set();
      for (const f of l) u.keys.has(f) && m.add(f);
      l = m;
    }
  }
  return l === null || ![...l].every((c) => c.startsWith("lib:"))
    ? !1
    : a.categories.every((c) => ah(c));
}
const il = 99,
  Pf = [
    "RUNS_UNCHECKED_CODE",
    "HIDES_AN_EXECUTABLE",
    "DISABLES_YOUR_PROTECTION",
  ];
function Uf(a, i = [], l = !1) {
  if (l) return il;
  for (const u of i) if (Pf.includes(u)) return il;
  return a.some((u) =>
    Ml.some(
      (m) =>
        m.theftPattern === !0 &&
        m.categories.length === u.categories.length &&
        m.categories.every((f) => u.categories.includes(f)),
    ),
  )
    ? il
    : Df;
}
function qf(a, i = {}) {
  const l = new Set(a),
    c = i.packaging ?? "unverified",
    u = kl(c),
    m = i.localities,
    f = Ml.filter(
      (I) => I.categories.every((D) => l.has(D)) && !(m !== void 0 && Lf(I, m)),
    ),
    x = new Set();
  for (const I of f) for (const D of I.categories) x.add(D);
  const v = i.deniedDiscounts ?? [],
    E = new Set(v.map((I) => I.category)),
    y = [...l].map((I) => {
      const D = za[I].weight,
        T = u && ah(I) && !x.has(I) && !E.has(I);
      return { category: I, weight: T ? 0 : D, fullWeight: D, discounted: T };
    }),
    _ = f.map((I) => ({
      categories: I.categories,
      extraWeight: I.extraWeight,
      reason: I.reason,
    })),
    N =
      y.reduce((I, D) => I + D.weight, 0) +
      _.reduce((I, D) => I + D.extraWeight, 0);
  return {
    total: Math.min(Uf(_, l, i.provenTampering ?? !1), N),
    raw: N,
    provenTampering: i.provenTampering ?? !1,
    ...(v.length > 0 ? { deniedDiscounts: v } : {}),
    ...(m !== void 0 ? { localities: m } : {}),
    baseContributions: y,
    comboContributions: _,
    packaging: c,
  };
}
function rh(a) {
  return a !== void 0 && a.stolen.length > 0;
}
function Gr(a) {
  return ((a == null ? void 0 : a.inGameActions) ?? []).filter(
    (i) => i.harmful,
  );
}
function Gf(a) {
  if (!a.ran)
    return "ModGuard could not start this mod in its test Minecraft, so there is nothing watched to report. All there is here is what reading it showed.";
  if (a.stolen.length > 0)
    return a.stolen.some((c) => c.phase === "startup")
      ? "Started up inside a fake Minecraft and immediately took the fake account details it was given. On your machine those would have been your real ones."
      : "Inside a fake Minecraft, this mod's own code took the fake account details it was given. It did not run on start-up, but the code that does it is in the file.";
  const i = Gr(a);
  return i.length > 0
    ? i.some((c) => c.phase === "startup")
      ? "Started up inside a fake Minecraft and immediately acted as the player: it sent commands to the server under your name. Nothing left the computer, and on a real server that is your account doing it."
      : "Inside a fake Minecraft, code in this mod acted as the player and sent commands to the server under your name. It did not run on start-up, but the code that does it is in the file."
    : a.reached.length > 0
      ? "Ran inside a fake Minecraft and opened files holding fake account details, but was not seen sending them anywhere."
      : "Ran inside a fake Minecraft with fake account details left where a thief would look. It did not touch them.";
}
const zf = 60,
  Hf = 30;
function Bf(a) {
  return a >= zf
    ? "unsafe"
    : a >= Hf
      ? "be-careful"
      : a >= 1
        ? "minor-notes"
        : "looks-safe";
}
function Ff(a, i, l = {}) {
  const c = Bf(a);
  return c !== "looks-safe"
    ? c
    : i > 0 || l.provenTampering === !0
      ? "minor-notes"
      : c;
}
const oh = {
    unsafe: {
      verdict: "unsafe",
      label: "Unsafe",
      headline: "ModGuard found strong warning signs. Do not install this mod.",
    },
    "be-careful": {
      verdict: "be-careful",
      label: "Be careful",
      headline:
        "This mod does some things that are worth a closer look before you trust it.",
    },
    "minor-notes": {
      verdict: "minor-notes",
      label: "Minor notes",
      headline:
        "Mostly ordinary, with a few things worth knowing about. Many legitimate mods look like this.",
    },
    "looks-safe": {
      verdict: "looks-safe",
      label: "Looks safe",
      headline:
        "ModGuard did not find any of the risky behaviours it checks for.",
    },
  },
  sh = [
    "RUNS_UNCHECKED_CODE",
    "READS_YOUR_SESSION",
    "TOUCHES_SENSITIVE_FILES",
    "CARRIES_A_TRANSFER_COMMAND",
    "MOVES_YOUR_ITEMS",
    "ACTS_AS_JAVA_AGENT",
    "STARTS_AUTOMATICALLY",
    "HIDES_AN_EXECUTABLE",
    "PRETENDS_TO_BE_A_SCHEMATIC",
    "CARRIES_A_DANGEROUS_COMMAND",
    "RUNS_COMMANDS_WHEN_PLACED",
    "LOOKS_LIKE_A_BOMB",
  ],
  Ga = {
    installer: {
      purpose: "installer",
      label: "An installer",
      describe:
        "It sets something up for you, like a mod loader, a patch, or another mod. It is not a mod itself.",
      expects: [
        "RUNS_OTHER_PROGRAMS",
        "RUNS_A_PROGRAM_IT_NAMES",
        "RUNS_KNOWN_HELPER",
        "INDIRECT_CODE_LOADING",
        "REACHES_INTERNET",
        "TOUCHES_OUTSIDE_FILES",
      ],
      predicts: ["HIDES_ITS_CODE"],
    },
    graphics: {
      purpose: "graphics",
      label: "Shaders or graphics",
      describe: "It changes how the game looks: shaders, lighting, rendering.",
      expects: [
        "LOADS_NATIVE_CODE",
        "ASKS_EXTRA_ACCESS",
        "REACHES_INTERNET",
        "RUNS_KNOWN_HELPER",
      ],
    },
    map: {
      purpose: "map",
      label: "A map or minimap",
      describe: "It shows you where you are: maps, minimaps, waypoints.",
      expects: [
        "REACHES_INTERNET",
        "TOUCHES_OUTSIDE_FILES",
        "ACTS_AS_YOU_IN_GAME",
      ],
    },
    macro: {
      purpose: "macro",
      label: "Macros or keybinds",
      describe: "It types things for you: hotkeys, chat shortcuts, macros.",
      expects: ["ACTS_AS_YOU_IN_GAME"],
    },
    cosmetics: {
      purpose: "cosmetics",
      label: "Skins, capes or cosmetics",
      describe: "It changes how you look to other players.",
      expects: ["REACHES_INTERNET"],
      predicts: ["READS_YOUR_SESSION"],
    },
    worldtool: {
      purpose: "worldtool",
      label: "A world or backup tool",
      describe: "It works with your saves: backups, world editing, schematics.",
      expects: [
        "TOUCHES_OUTSIDE_FILES",
        "RUNS_A_PROGRAM_IT_NAMES",
        "RUNS_KNOWN_HELPER",
        "REACHES_INTERNET",
      ],
    },
    performance: {
      purpose: "performance",
      label: "Performance or a library",
      describe: "It makes the game run better, or other mods depend on it.",
      expects: ["ASKS_EXTRA_ACCESS", "LOADS_NATIVE_CODE", "REACHES_INTERNET"],
    },
  };
function $f(a) {
  const i = new Set();
  for (const l of a) for (const c of Ga[l].expects) sh.includes(c) || i.add(c);
  return i;
}
function ll(a) {
  return a.length === 0
    ? ""
    : a.length === 1
      ? (a[0] ?? "")
      : `${a.slice(0, -1).join(", ")} and ${a.at(-1)}`;
}
function Wf(a, i, l) {
  var z;
  if (i.length === 0) return a;
  const c =
      rh(a.liveWatch) ||
      Gr(a.liveWatch).length > 0 ||
      ((z = a.community) == null ? void 0 : z.provenBad) === !0 ||
      a.breakdown.provenTampering ||
      !kl(a.breakdown.packaging),
    u = $f(i),
    m = a.findings.map((q) => q.category),
    f = new Set(
      a.breakdown.comboContributions
        .filter((q) =>
          Ml.some(
            (ue) =>
              ue.theftPattern === !0 &&
              ue.categories.length === q.categories.length &&
              ue.categories.every((_e) => q.categories.includes(_e)),
          )
            ? !0
            : q.categories.some((ue) => sh.includes(ue)),
        )
        .flatMap((q) => q.categories),
    );
  for (const q of f) u.delete(q);
  const x = m.filter((q) => u.has(q)),
    v = m.filter((q) => !u.has(q)),
    E = m.filter((q) => !u.has(q)),
    y = qf(E, {
      packaging: a.breakdown.packaging,
      provenTampering: a.breakdown.provenTampering,
      ...(a.breakdown.deniedDiscounts !== void 0
        ? { deniedDiscounts: a.breakdown.deniedDiscounts }
        : {}),
      ...(a.breakdown.localities !== void 0
        ? { localities: a.breakdown.localities }
        : {}),
    }),
    _ = Math.min(a.score, y.total),
    N = a.findings.map((q) => ({
      ...q,
      countsTowardRisk: q.countsTowardRisk && !u.has(q.category),
    })),
    I = new Set();
  for (const q of i) for (const ue of Ga[q].predicts ?? []) I.add(ue);
  const D = ll(i.map((q) => Ga[q].label.toLowerCase())),
    T = [...new Set(v)],
    P = T.filter((q) => !I.has(q)),
    $ = T.filter((q) => I.has(q)),
    K = [];
  (P.length > 0 &&
    K.push(
      `You said this is ${D}. That does not explain why it ${ll(P.map((q) => l(q)))}.`,
    ),
    $.length > 0 &&
      K.push(
        `It ${ll($.map((q) => l(q)))}. Something like what you described genuinely does that. It is also what a stealer relies on you accepting, so ${$.length === 1 ? "it is" : "they are"} still counted and still shown below.`,
      ),
    K.length === 0 &&
      K.push(
        `Nothing it does contradicts what you said it was. That is not the same as safe: it means ModGuard found nothing a ${D} would have no reason for.`,
      ));
  const X = K.join(" "),
    se = {
      purposes: i,
      explained: [...new Set(x)],
      unexplained: [...new Set(v)],
      headline: X,
    },
    fe = [
      ...y.comboContributions,
      ...a.breakdown.comboContributions.filter(
        (q) => q.categories.length === 0,
      ),
    ];
  if (c) {
    const q = kl(a.breakdown.packaging)
      ? "This was already established by watching the file rather than by reading it, so what you said it was for does not change the answer."
      : `ModGuard cannot confirm this file is a properly built mod at all, so there is nothing for "${D}" to be checked against. What it does is still counted in full.`;
    return { ...a, purposeCheck: { ...se, headline: `${se.headline} ${q}` } };
  }
  return {
    ...a,
    findings: N,
    score: _,
    verdict: Ff(_, a.findings.length, {
      provenTampering: a.breakdown.provenTampering,
    }),
    breakdown: { ...y, total: _, comboContributions: fe },
    purposeCheck: se,
  };
}
function Ol(a) {
  return a.confidence ?? "suspected";
}
const Kf = ["credential-endpoint", "process-spawn"];
function Vf(a) {
  return (
    a.severity === "critical" &&
    a.confidence === "observed" &&
    Kf.includes(a.kind)
  );
}
function _l(a) {
  return a.some((l) =>
    Vf({ kind: l.kind, severity: l.severity, confidence: Ol(l) }),
  )
    ? "proof"
    : a.some((l) => l.severity === "critical" || l.severity === "high")
      ? "suspicion"
      : "none";
}
function Il(a) {
  return a.some((i) => i.severity === "critical")
    ? "critical"
    : a.some((i) => i.severity === "high")
      ? "high"
      : a.length > 0
        ? "watch"
        : null;
}
const dl = "https://account.live.com/proofs/manage/additional",
  yc = "https://www.xbox.com/en-US/user/settings/privacy-and-safety",
  ul = "https://account.microsoft.com/security",
  Yf = "https://www.minecraft.net/en-us/msaprofile/mygames/editprofile",
  Qf = "https://account.live.com/acsr",
  Xf = "https://discord.com/channels/@me",
  Jf = [25565, 25566, 19132];
function Zf(a) {
  return a.some((i) => {
    var c;
    if (i.kind !== "suspicious-connection" && i.kind !== "credential-endpoint")
      return !1;
    const l = Number(
      ((c = /:(\d+)$/.exec(i.id)) == null ? void 0 : c[1]) ?? "",
    );
    return Jf.includes(l);
  });
}
function ep(a, i = {}) {
  const l = new Set(a.map((y) => y.kind)),
    c = Il(a),
    u = [],
    m = i.sawGameServer ?? Zf(a),
    f = l.has("known-bad-mod"),
    x = _l(a) === "proof" || f,
    v = l.has("credential-endpoint") || l.has("credential-file-touched");
  if (
    (x
      ? (u.push({
          id: "stop-multiplayer",
          action:
            "Turn off “You can join multiplayer games” on your Xbox privacy page",
          why: "This is the one thing on this list that reaches the login that was taken tonight. Mojang's own protocol documentation says every join to an online-mode server is checked against your Xbox profile, and that the server is refused when multiplayer is switched off — so this stops the stolen login being able to join anything, without waiting for it to expire. Know exactly what it does and does not do: it does not stop offline-mode or “cracked” servers, it does not stop your name or your skin being changed, it takes a few minutes to spread rather than being instant, and it stops you joining servers too until you turn it back on. Do it now, play tomorrow.",
          url: yc,
          urgent: !0,
        }),
        u.push({
          id: "sign-out-everywhere",
          action: "Sign out of Minecraft everywhere, right now",
          why: "A session token is a copy of your key: it opens Minecraft as you, without your password and without your two-step code. Signing out everywhere is the control Microsoft gives you for ending logins you did not make, so start it before anything else — but Microsoft says it can take up to 24 hours, and that it does not reach an Xbox console, which has to be signed out of on the console itself. Start it now and assume whoever took it may still be in until tomorrow. Do it on your phone if you can, because whatever took your login may still be running on this computer.",
          url: dl,
          urgent: !0,
        }),
        u.push({
          id: "check-recovery-list",
          action:
            "Check the list of emails and phone numbers that can reset your password",
          why: "It is on the same page you just used. Every address and number listed there can reset your password, so if one of them is not yours, everything else on this list buys you a few days and nothing more. Remove anything you do not recognise. This is the step people skip and the one that decides whether they are back in a week.",
          url: dl,
          urgent: !0,
        }),
        u.push({
          id: "change-sign-in",
          action: "Change how you sign in",
          why: "Your Minecraft account is a Microsoft account, and this is where you change the way it is opened — a new password if you have one, or the sign-in methods and passkeys if your account is one of the newer ones that never had a password. This is what stops them simply signing back in tomorrow. It may not close a login that is already open — nothing ModGuard could find from Microsoft or Mojang says that it does — so it is not a shortcut past the two steps above it. Microsoft's own advice is to clear a computer of malware before changing a password on it. The quick way round that is to do this on your phone instead.",
          url: ul,
          urgent: !1,
        }),
        u.push({
          id: "check-what-changed",
          action:
            "Check your Minecraft name and skin, and what your account has been used for",
          why: "The same login opens the pages that change your profile name and your skin, so those are worth looking at before anything else looks normal. If the name has been changed, change it back straight away and expect to wait: Minecraft only allows a rename once every 30 days, so a name taken tonight cannot be taken back until the cooldown is up. While you are signed in to your Microsoft account, its recent sign-in activity and its list of connected apps are both worth a look for anything you do not recognise.",
          url: Yf,
          urgent: !1,
        }))
      : !x &&
        v &&
        (u.push({
          id: "sign-out-everywhere",
          action: "Sign out of Minecraft everywhere, just to be safe",
          why: "ModGuard did not see your login go anywhere, and from outside the game it can never see that — so this is the careful version, not the panicking version. Signing out everywhere is Microsoft's control for ending logins you did not make, though Microsoft says it can take up to 24 hours and that it does not reach an Xbox console. Know what it costs before you do it: it signs you out of your whole Microsoft account everywhere it is used — the browser, the other apps, anybody else's device signed in to the same account — and every one of those needs the password typing back in. ModGuard found nothing else. But ModGuard watches from outside the game, so this is the shortest honest list rather than a promise that there is nothing more.",
          url: dl,
          urgent: !1,
        }),
        u.push({
          id: "enable-2fa",
          action: "Turn on two-step verification if it is off",
          why: "Worth doing whatever happened here. It means a password on its own is never enough to get into your account.",
          url: ul,
          urgent: !1,
        })),
    f &&
      u.push({
        id: "remove-mod",
        action:
          "Disable the mod ModGuard flagged, then re-check the whole folder",
        why: "Leaving it switched on means this happens again the next time you launch. ModGuard can disable it for you, and a folder scan finds anything that arrived alongside it.",
        url: null,
        urgent: !0,
      }),
    x &&
      v &&
      (u.push({
        id: "reset-discord",
        action: "Change your Discord password",
        why: "Mods that go after Minecraft logins often take the Discord token sitting on the same machine, and a stolen Discord token is a logged-in session: your servers, your DMs, and anyone who trusts a message from you. Discord has no sign-out-everywhere button, so do not spend the night hunting for one — changing the password is the control it gives you. It is inside Discord itself, under User Settings, then My Account.",
        url: Xf,
        urgent: !0,
      }),
      u.push({
        id: "browser-passwords",
        action: "Change any passwords your browser had saved",
        why: "The same tools take the browser's saved-password database while they are there. This is an evening's work rather than a minute's, which is why it is down here — start with email and anything with money attached, and do the rest when you have time.",
        url: null,
        urgent: !1,
      })),
    l.has("process-spawn") || x)
  ) {
    const y = a.some((N) => N.kind === "process-spawn" && Ol(N) === "observed"),
      _ = l.has("process-spawn");
    u.push({
      id: "scan-computer",
      action: "Run a malware scan on your computer",
      why: y
        ? "The game ran a command on your computer. Whatever that started is outside Minecraft now, and outside anything ModGuard can see or undo. Microsoft's advice for a stolen account is to clear the computer before changing a password on it, which is why the steps above said to use your phone."
        : _
          ? "The game started another program. That is sometimes an updater or the thing your Mac uses to open a link, so this is worth checking rather than worth panicking about — but whatever it was is outside Minecraft now."
          : "Something in the game went after your login, and ModGuard cannot see what else it may have left behind — it watches from outside the game, not inside it. Microsoft's advice for a stolen account is to clear the computer of malware before changing a password on it, so if you can scan before you get to the password step, do that.",
      url: null,
      urgent: y,
    });
  }
  return (
    l.has("persistence-written") &&
      u.push({
        id: "check-startup-items",
        action: "Check what your Mac has been told to start on its own",
        why: "A file changed in one of the few places macOS runs programs from without being asked. Most of what lives there was put there by software you installed, so this is a look rather than a purge — but it is the one thing on this list that would still be true after a restart. ModGuard named the file it saw; it cannot see which program wrote it, so it has not touched it.",
        url: null,
        urgent: !0,
      }),
    l.has("mods-folder-changed") &&
      !f &&
      u.push({
        id: "check-mods-folder",
        action: "Check every mod in this instance with ModGuard",
        why: "A mod file appeared or changed while you were playing. If that was you installing something, this is nothing. If it was not, checking the whole folder is what names the file.",
        url: null,
        urgent: !1,
      }),
    l.has("file-dropped") &&
      u.push({
        id: "check-dropped-file",
        action: "Look at the file that appeared, and do not open it",
        why: "A file that would run as a program turned up while you were playing, somewhere the launcher does not put files. If you recognise it, this is nothing. If you do not, leaving it alone costs you nothing and opening it is the one thing that would make it matter.",
        url: null,
        urgent: !1,
      }),
    u.length === 0 &&
      (c === "high" || c === "critical") &&
      u.push({
        id: "check-mods-folder",
        action: "Check every mod in this instance with ModGuard",
        why: "Something in the running game did this, and it came from a file in your mods folder. Checking the whole folder is what names the file.",
        url: null,
        urgent: !1,
      }),
    x &&
      (u.push({
        id: "restore-multiplayer",
        action: "Turn multiplayer back on when you are done",
        why: "The first step on this list switched multiplayer off, and nothing turns it back on by itself. Once you have signed out everywhere, changed how you sign in, and given it a day, come back to the same page and switch it on again. If servers start refusing you weeks from now, this is why.",
        url: yc,
        urgent: !1,
      }),
      u.push({
        id: "enable-2fa",
        action: "Turn on two-step verification if it is off",
        why: "It stops a stolen password being enough on its own. It does not stand in front of a stolen token — that is what the first two steps are for — but it closes the door that would otherwise stay open the longest.",
        url: ul,
        urgent: !1,
      })),
    x &&
      m &&
      u.push({
        id: "server-items",
        action: "Message the server's owner today, before the logs roll over",
        why: "You were on somebody's server tonight, so whatever was in your inventory was reachable too. Most small and community servers run CoreProtect, and an admin can roll your items back with it — but only inside the window they keep logs for, which is often about 30 days and sometimes far less, so today is not the same as next week. Tell them the exact minutes you were not in control, which ModGuard can copy out for you. On a big network, be realistic: their published position is that players are responsible for their own accounts, and what an appeal usually recovers is the ban rather than the items — a clear, timestamped account of what happened is what makes that appeal work. On a Realm, the owner can restore a backup from the Realms menu. Whatever you do, do not pay anybody to give the account back.",
        url: null,
        urgent: !1,
      }),
    x &&
      (u.push({
        id: "tell-friends",
        action: "Warn anyone you shared the mod with",
        why: "If it reached you it probably reached them, and they have no reason to suspect the file yet.",
        url: null,
        urgent: !1,
      }),
      u.push({
        id: "locked-out",
        action:
          "If you cannot sign in any more, start the recovery form instead",
        why: "Everything above assumes you can still get into your account. If the password or the recovery email has already been changed, none of it will work, and the way back is Microsoft's account recovery form — fill it in from a device and a network you have used the account on before, because that is part of how they decide. Minecraft support has its own ticket form for the game half once the Microsoft account is yours again. Neither is fast; both are the actual route, and there is no shortcut anybody selling one has.",
        url: Qf,
        urgent: !1,
      })),
    u
  );
}
const tp = [
    {
      id: 0,
      name: "Write it down",
      does: "Notes what it saw, in the panel while you play and in the incident afterwards.",
      needs: "Anything at all. This one is always on.",
      automatic: !0,
    },
    {
      id: 1,
      name: "Tell you",
      does: "Puts the alert on screen, adds “Stop the game now” to the menu bar, and sends a notification you can act on without leaving the game.",
      needs:
        "Something worth interrupting you for: a serious finding, or a critical one ModGuard cannot prove.",
      automatic: !1,
    },
    {
      id: 2,
      name: "End what it started",
      does: "Ends the program the game started, and disables the file that program was told to run. Your game is not touched.",
      needs:
        "A program ModGuard watched the game start, that is still the game's own child, and that is not a Minecraft client.",
      automatic: !0,
    },
    {
      id: 3,
      name: "Hold the game",
      does: "Freezes the game where it is for up to twenty seconds, then lets it go again by itself.",
      needs: "You, pressing the button. ModGuard never does this on its own.",
      automatic: !1,
    },
    {
      id: 4,
      name: "Close the game",
      does: "Closes the game, giving it a couple of seconds to save your world first.",
      needs:
        "Proof, meaning something ModGuard watched happen. And you, having switched this on beforehand.",
      automatic: !1,
    },
    {
      id: 5,
      name: "Clean up after",
      does: "Once the game is closed, disables the file ModGuard can name, so tomorrow's launch is clean. One tap puts it back.",
      needs: "Proof, and a file ModGuard can point at by name.",
      automatic: !0,
    },
  ],
  np =
    "Every rung here acts on this computer and this account. There is no rung that reaches whoever was collecting: ModGuard reads the address it was shown and never contacts it.";
function ih(a) {
  return _l(a) === "proof" ||
    a.some(
      (l) =>
        l.kind === "known-bad-mod" &&
        l.severity === "critical" &&
        Ol(l) === "observed",
    )
    ? "proof"
    : _l(a);
}
function lh(a) {
  return a.filter((i) => {
    var l;
    return ((l = i.subject) == null ? void 0 : l.actionable) === !0;
  });
}
function ap(a) {
  return lh(a).filter((i) => i.kind === "process-spawn" && rp(i));
}
function rp(a) {
  var l;
  const i = (l = a.stopped) == null ? void 0 : l.method;
  return i !== void 0 && i !== "refused" && i !== "failed";
}
function op(a) {
  if (a.length === 0)
    return "Nothing has happened this session. There is nothing to act on.";
  const i = ih(a);
  return i === "proof"
    ? ""
    : i === "none"
      ? "This needs proof: something ModGuard watched happen. Nothing this session is even a suspicion."
      : a.some(
            (c) =>
              c.kind === "credential-endpoint" ||
              c.kind === "suspicious-connection",
          )
        ? "This needs proof, and what ModGuard has is a name it recognises, not an act it watched. From outside the game the contents of a connection are unknowable."
        : "This needs proof: something ModGuard watched happen that ordinary play does not produce. What it has fits, and it also fits an innocent explanation.";
}
function sp(a) {
  const i = tp.find((l) => l.id === a);
  if (i === void 0) throw new Error(`No response rung ${a}`);
  return i;
}
function ip(a, i) {
  const l = Il(a),
    c = l === "critical" || l === "high",
    m = ih(a) === "proof",
    f = op(a),
    x = lh(a),
    v = ap(a),
    E = [],
    y = (_, N, I) => {
      E.push({ rung: sp(_), state: N, why: I });
    };
  return (
    a.length === 0
      ? y(0, "locked", "Nothing has been seen this session.")
      : y(0, "reached", null),
    c
      ? y(1, "reached", null)
      : y(
          1,
          "locked",
          "Nothing this session is worth interrupting you for. Notes are in the panel.",
        ),
    v.length > 0
      ? y(
          2,
          i.quarantineSpawned ? "reached" : "offered",
          i.quarantineSpawned
            ? null
            : "ModGuard ended the program. Disabling the file it was told to run is switched off, so that half is yours to press.",
        )
      : a.some((_) => _.kind === "process-spawn")
        ? y(
            2,
            "locked",
            "ModGuard recognised what the game started, or could not prove the program was still the game's to end. It has not touched it.",
          )
        : y(
            2,
            "locked",
            "The game has not started anything ModGuard was allowed to end.",
          ),
    c
      ? y(
          3,
          "offered",
          "Yours to press. ModGuard will not freeze a game you are playing on its own.",
        )
      : y(
          3,
          "locked",
          "Nothing is happening that is worth freezing a game for.",
        ),
    i.autoClose === "off"
      ? y(
          4,
          "off",
          "You have switched this off. ModGuard will not close the game by itself and will not ask.",
        )
      : m
        ? i.autoClose === "on"
          ? y(4, "reached", null)
          : y(
              4,
              "offered",
              "ModGuard has proof and is still not acting uninvited: the stop button is the first thing on the alert.",
            )
        : y(4, "locked", f),
    i.quarantineAfter
      ? m
        ? x.length === 0
          ? y(
              5,
              "locked",
              "ModGuard has proof about this session and no file it can name. It will not guess at one.",
            )
          : y(5, "reached", null)
        : y(5, "locked", f)
      : y(
          5,
          "off",
          "You have switched this off. Whatever ModGuard named will still be on next launch.",
        ),
    E
  );
}
function lp(a) {
  if (a === void 0 || a === "") return [];
  try {
    const i = JSON.parse(a);
    return Array.isArray(i) ? i.filter((l) => typeof l == "string") : [];
  } catch {
    return [];
  }
}
function ss(a) {
  if (a !== void 0) return a instanceof Date ? a.toISOString() : a;
}
function dp(a, i) {
  const l = lp(a.stolenSummary),
    c = up(a.verdict) ? a.verdict : void 0;
  return {
    hash: a.hash,
    timesSeen: a.timesSeen,
    ...(c !== void 0 ? { knownVerdict: c } : {}),
    knownScore: a.score,
    stolen: l,
    reports: a.reportCount,
    provenBad: a.provenBad || l.length > 0,
    ...(ss(a.firstSeen) !== void 0 ? { firstSeen: ss(a.firstSeen) } : {}),
    ...(ss(a.lastSeen) !== void 0 ? { lastSeen: ss(a.lastSeen) } : {}),
    source: i,
  };
}
function up(a) {
  return (
    a === "unsafe" ||
    a === "be-careful" ||
    a === "minor-notes" ||
    a === "looks-safe"
  );
}
function cp(a) {
  const i =
    a.source === "this-computer"
      ? "You have checked this exact file before"
      : "This exact file has been checked before";
  if (a.stolen.length > 0) {
    const l =
      a.stolen.length === 1
        ? a.stolen[0]
        : `${a.stolen.slice(0, -1).join(", ")} and ${a.stolen.at(-1)}`;
    return `${i}, and it was caught taking ${l}. Do not install it.`;
  }
  return a.provenBad
    ? `${i} and came out unsafe. Do not install it.`
    : a.reports > 0
      ? `${a.reports === 1 ? "1 person has" : `${a.reports} people have`} reported this exact file as malicious. Those reports are not verified by ModGuard, but they are worth taking seriously.`
      : `${i}. Nothing was found wrong with it.`;
}
const dh = {
  official: {
    level: "official",
    label: "Published file",
    headline:
      "Every byte of this file matches the copy the mod's own team put out, so it is the same file everyone else who installed this mod got. Nothing has been added to your copy.",
    quiets: !0,
    extraWeight: 0,
  },
  repack: {
    level: "repack",
    label: "Not the file it says it is",
    headline:
      "This file says it is a version of a real mod, and it is not that mod's file. The real one exists and looks different. Somebody made this copy, and you cannot tell from the outside what they changed.",
    quiets: !1,
    extraWeight: 45,
  },
  "oversized-build": {
    level: "oversized-build",
    label: "Bigger than anything they published",
    headline:
      "The mod this file names is real, and this file is more than twice the size of the biggest copy its own team has ever put out. Something extra is inside it, and that extra part did not come from them.",
    quiets: !1,
    extraWeight: 35,
  },
  "unlisted-build": {
    level: "unlisted-build",
    label: "No published copy matches",
    headline:
      "The mod this file names is real, but no copy anyone published matches this file. It may come from somewhere else, or be a version that has since been taken down. It may also have been changed.",
    quiets: !1,
    extraWeight: 10,
  },
  unpublished: {
    level: "unpublished",
    label: "Not a published mod",
    headline:
      "ModGuard could not find this mod on the public mod site it asks, which is completely normal. Lots of good mods are small, private, or shared somewhere else. It counts for nothing either way.",
    quiets: !1,
    extraWeight: 0,
  },
  "not-checked": {
    level: "not-checked",
    label: "Not checked",
    headline:
      "ModGuard did not check where this file came from. Everything else in this report was worked out from the file itself.",
    quiets: !1,
    extraWeight: 0,
  },
};
function hp(a) {
  return a === void 0
    ? !1
    : a.level !== "not-checked" && a.level !== "unpublished";
}
function mp(a) {
  const i = dh[a.level],
    l = xp(a);
  switch (a.level) {
    case "official": {
      if (a.claimMatchesPublished === !1)
        return `This exact file is published${cl(a)}, but it is listed there as ${a.publishedAs ?? "a different mod"} while the file itself says it is ${l}. Those two do not agree, so ModGuard has not given it the benefit of the doubt.`;
      const c =
        a.publishedAs !== void 0 ? ` It is published as ${a.publishedAs}.` : "";
      return `${i.headline}${c}`;
    }
    case "repack": {
      const c =
        a.publishedFileName !== void 0
          ? ` The real one is called ${a.publishedFileName}${fp(a)}.`
          : "";
      return `This file says it is ${l}. That version really was published${cl(a)}. This file is not it.${c} ModGuard cannot tell you what is different inside, only that something is. A copy built for a different site can look like this too, so the way to be sure is to get the mod from its own page and use that file instead.`;
    }
    case "oversized-build":
      return `${pp(a, l)} A mod cannot be twice the size of every copy its own authors ever released and still be one of them, so something has been added to this file. ModGuard cannot tell you what that extra part is. It can only tell you that it is there, and that it is not from the people who make this mod. Get the mod from its own page and use that file instead.`;
    case "unlisted-build": {
      const c = a.versionSeenElsewhere;
      if (c !== void 0) {
        const u =
          c.publishedAt !== void 0 ? ` back on ${vp(c.publishedAt)}` : "";
        return `This file says it is ${l}. That version is real: ${c.source} still shows it was released${u}. But it is not on the mod site any more, so there is no published copy left to compare this file against. That means nobody can confirm this is the real one, and nobody can show it is not. If you did not download it from the mod's own page, get it there instead.`;
      }
      return `This file says it is ${l}. The mod is real and published${cl(a)}, but no published copy matches this file and that version is not listed there. Mod sites drop older releases and some mods are published in more than one place, so this is a thing to know, not a verdict.`;
    }
    case "unpublished":
    case "not-checked":
    default:
      return a.reason !== void 0 ? `${i.headline} (${a.reason})` : i.headline;
  }
}
function cl(a) {
  return a.source !== void 0 ? ` on ${a.source}` : "";
}
function Zn(a, i = "prose") {
  const l = Math.max(0, a);
  if (l < 1e3) return `${Math.round(l)} ${i === "prose" ? "bytes" : "B"}`;
  const c = ["KB", "MB", "GB"];
  let u = l / 1e3,
    m = 0;
  for (; u >= 1e3 && m < c.length - 1;) ((u /= 1e3), (m += 1));
  return `${u.toFixed(u < 10 ? 1 : 0)} ${c[m]}`;
}
function fp(a) {
  const i = a.publishedFileSizeBytes,
    l = a.fileSizeBytes;
  return i === void 0 || l === void 0
    ? ""
    : `, and it is ${Zn(i)} where this one is ${Zn(l)}`;
}
function pp(a, i) {
  const l = a.published,
    c = a.fileSizeBytes;
  if (l === void 0 || c === void 0)
    return `This file says it is ${i}, and it is far bigger than anything that mod has published.`;
  const u = l.title ?? a.claimedModId ?? "That mod",
    m = l.loader !== void 0 ? `${l.loader} files` : "files";
  return `This file says it is ${i}. ${u} is a real mod: ${gp(a)} lists ${l.fileCount} ${m} its team has published, and the biggest of all of them is ${Zn(l.largestBytes)}. This file is ${Zn(c)}, which is ${(c / l.largestBytes).toFixed(1)} times the size of the largest one they ever put out.`;
}
function gp(a) {
  return a.source ?? "the mod site";
}
function vp(a) {
  const i = new Date(a);
  return Number.isNaN(i.getTime())
    ? a
    : i.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
}
function xp(a) {
  const i = a.claimedModId ?? "a mod";
  return a.claimedVersion !== void 0 ? `${i} ${a.claimedVersion}` : i;
}
const yp =
  "This is not a malware name looked up in a list. ModGuard has no such list. It is ModGuard's own description of what it found in this file, and the findings it rests on are on this page.";
function wp(a) {
  const i = new Map();
  for (const l of a.findings ?? [])
    l.countsTowardRisk &&
      l.libraryOnly !== !0 &&
      (i.has(l.category) || i.set(l.category, l));
  return i;
}
function Al(a) {
  return `“${a}”`;
}
function Dl(a) {
  return a.length <= 1
    ? (a[0] ?? "")
    : `${a.slice(0, -1).join(", ")} and ${a.at(-1)}`;
}
function Bt(a, i) {
  return `${a.length > 1 ? `Named from ModGuard's own findings about this file, listed below: ${Dl(a.map(Al))}.` : `Named from ModGuard's own finding about this file, listed below: ${Al(a[0] ?? "")}.`} ${i}`;
}
function bp(a) {
  return a.some((i) => /session/i.test(i.id) || /session/i.test(i.label));
}
function Sp(a) {
  const i = Dl([...new Set(a.map((u) => u.label))]),
    l = [...new Set(a.flatMap((u) => u.ways))];
  return `ModGuard started this file inside a fake Minecraft holding fake account details, and ${a.some((u) => u.phase === "startup") ? "the moment it loaded" : "code inside it"} took ${i}, sending it to ${l.join("; ")}. On your computer those would have been your real ones. This name is not a reading of what the code could do: it is what the file did when it was given the chance.`;
}
function Ep(a) {
  var c;
  const i = [...new Set(a.map((u) => u.detail))].slice(0, 3).map(Al),
    l =
      ((c = a[0]) == null ? void 0 : c.why) ??
      "That hands what you own in the game to somebody else.";
  return `Inside a fake Minecraft, code in this file acted as the player and sent ${Dl(i)}. ${l} Nothing was typed into a real game here. On a real server it would have been your account doing it.`;
}
function Np(a) {
  const i = a.liveWatch,
    l = wp(a),
    c = (_) => l.has(_),
    u = (_) => za[_].title,
    m = ((i == null ? void 0 : i.stolen) ?? []).filter(
      (_) => _.severity === "critical",
    );
  if (m.length > 0)
    return {
      label: bp(m) ? "SESSION STEALER" : "ACCOUNT STEALER",
      kind: "theft",
      basis: Sp(m),
    };
  const f = Gr(i);
  if (f.length > 0)
    return { label: "ITEM STEALER", kind: "theft", basis: Ep(f) };
  if (c("TOUCHES_SENSITIVE_FILES") && c("REACHES_INTERNET"))
    return {
      label: "ACCOUNT STEALER",
      kind: "theft",
      basis: Bt(
        [u("TOUCHES_SENSITIVE_FILES"), u("REACHES_INTERNET")],
        "Reading the files that hold your logins and talking to the internet are the two halves of taking an account, and ModGuard counted both against this file rather than letting its packaging excuse them. Both were read out of the code, not watched happening. The name says what the file is built to do.",
      ),
    };
  const x = c("CARRIES_A_TRANSFER_COMMAND"),
    v = c("ACTS_AS_YOU_IN_GAME"),
    E = c("MOVES_YOUR_ITEMS");
  if ((x && (v || E)) || (v && E)) {
    const _ = [
      ...(v ? [u("ACTS_AS_YOU_IN_GAME")] : []),
      ...(E ? [u("MOVES_YOUR_ITEMS")] : []),
      ...(x ? [u("CARRIES_A_TRANSFER_COMMAND")] : []),
    ];
    return {
      label: "ITEM STEALER",
      kind: "theft",
      basis: Bt(
        _,
        (x
          ? "The words it would send are already written into the file, with somebody else's name in them. A mod that lets you type commands has no reason to carry one filled in. "
          : "Between them, everything you own inside the game can be handed to somebody else while you are standing still. ") +
          "This never touches your computer; it spends what you own on a server. Read out of the code, not watched happening.",
      ),
    };
  }
  if (c("RUNS_UNCHECKED_CODE")) {
    const _ = [
      u("RUNS_UNCHECKED_CODE"),
      ...(c("REACHES_INTERNET") ? [u("REACHES_INTERNET")] : []),
    ];
    return {
      label: "REMOTE CODE LOADER",
      kind: "code",
      basis: Bt(
        _,
        "ModGuard followed the bytes through this file's own code: while the game runs it goes and gets more code and hands it straight to the game. Whatever this archive is, it is not the whole mod. The part that does the work sits on somebody's server, can be changed after you check it, and can be different for you than for anybody else who looked. ModGuard exists because of a mod that did exactly this.",
      ),
    };
  }
  return c("DISABLES_YOUR_PROTECTION")
    ? {
        label: "DEFENCE DISABLER",
        kind: "code",
        basis: Bt(
          [u("DISABLES_YOUR_PROTECTION")],
          "ModGuard read the whole command out of this file, and it is printed below: it tells your computer's own protection to stop looking at something. Nothing a Minecraft mod does needs that. It is the step taken so that whatever comes next is not noticed, and the exclusion outlives the mod, so it is still there after the file is deleted.",
        ),
      }
    : c("HIDES_AN_EXECUTABLE")
      ? {
          label: "DISGUISED PROGRAM",
          kind: "carrier",
          basis: Bt(
            [u("HIDES_AN_EXECUTABLE")],
            "The name promises a saved build; the bytes are a program your computer would run. A schematic is structure data and is never an executable, so this is a fact about the file rather than a reading of intent. ModGuard cannot open a program to say what it does. That is why the disguise itself is the finding.",
          ),
        }
      : c("CARRIES_A_KNOWN_MALWARE_MARKER")
        ? {
            label: "PLUGIN WORM MARKER",
            kind: "carrier",
            basis: Bt(
              [u("CARRIES_A_KNOWN_MALWARE_MARKER")],
              "Written inside this file is the exact name a known family of malicious server plugins uses for the file it drops on the machines it infects. ModGuard found the name; it did not watch this file do anything with it, and a tool built to clean that worm up would carry the same name. Treat this as a strong reason to check where the file came from, not as proof on its own. That family spreads by replacing real plugins.",
            ),
          }
        : c("CARRIES_A_PROGRAM")
          ? {
              label: "BUNDLED PROGRAM",
              kind: "carrier",
              basis: Bt(
                [u("CARRIES_A_PROGRAM")],
                "A mod is Java code the game loads. Packed inside this one is a file your computer would run as a program in its own right, and ModGuard cannot read it to say what it does. That gap is the point: everything else on this page was read out of the file's own code, and this part could not be.",
              ),
            }
          : c("PRETENDS_TO_BE_A_SCHEMATIC")
            ? {
                label: "DISGUISED MOD",
                kind: "carrier",
                basis: Bt(
                  [u("PRETENDS_TO_BE_A_SCHEMATIC")],
                  `This has a schematic's name and a program archive's contents. "Here's a cool build, drop it in", where the file is really a mod. ModGuard opened the real contents, so anything it found about the program itself is listed below; judge it as what it is.`,
                ),
              }
            : c("CARRIES_A_DANGEROUS_COMMAND")
              ? {
                  label: "TRAPPED BUILD",
                  kind: "carrier",
                  basis: Bt(
                    [u("CARRIES_A_DANGEROUS_COMMAND")],
                    "A command block in this build carries a command a normal build has no reason to: granting operator powers, running a datapack function, or wiping blocks. Loading it to look at it runs nothing; placing it in a world where commands run is what matters, and then it happens under your name without you typing anything.",
                  ),
                }
              : c("LOOKS_LIKE_A_BOMB")
                ? {
                    label: "CRASH TRAP",
                    kind: "carrier",
                    basis: Bt(
                      [u("LOOKS_LIKE_A_BOMB")],
                      "This file is shaped the way a crash attack is shaped rather than the way a saved build is: it unpacks to enormously more than its size on disk, or its data is nested deep enough to exhaust memory. ModGuard's own reader stopped before it could finish.",
                    ),
                  }
                : (a.findings ?? []).some(
                      (_) => _.category === "HAS_A_HOLE_SOMEBODY_COULD_USE",
                    )
                  ? {
                      label: "EXPLOITABLE",
                      kind: "vulnerability",
                      basis:
                        "A weakness the author left, not something the author chose to do. " +
                        Bt(
                          [u("HAS_A_HOLE_SOMEBODY_COULD_USE")],
                          "It means this mod accepts data from the network in a way that lets whoever sends it run code. That is one of the easiest mistakes to make in Java, and it has happened to well-known, well-liked mods. Nothing here says the author meant any harm, which is why it is weighted zero and counts against nobody. The risk is somebody else reaching you through the hole: check for a newer version and tell the author.",
                        ),
                    }
                  : null;
}
const Ll = ["en", "es", "pt-BR", "de", "fr", "ru"],
  wc = {
    en: { code: "en", endonym: "English", short: "EN" },
    es: { code: "es", endonym: "Español", short: "ES" },
    "pt-BR": { code: "pt-BR", endonym: "Português (BR)", short: "PT" },
    de: { code: "de", endonym: "Deutsch", short: "DE" },
    fr: { code: "fr", endonym: "Français", short: "FR" },
    ru: { code: "ru", endonym: "Русский", short: "RU" },
  },
  bc = (a) => typeof a == "string" && Ll.includes(a),
  Pl = new Map();
function kp(a, i) {
  Pl.set(a, i);
}
function _p(a, i, l) {
  var u;
  if (a === "en") return l;
  const c = (u = Pl.get(a)) == null ? void 0 : u[i];
  return c === void 0 || c === "" ? l : c;
}
const Rt = {
  verdict: (a, i) => `verdict.${a}.${i}`,
  behavior: (a, i) => `behavior.${a}.${i}`,
  kind: (a) => `kind.${a.replace(/\s+/g, "_")}`,
  packaging: (a) => `packaging.${a}.headline`,
  ui: (a) => `ui.${a}`,
};
function Ap(a, i) {
  if (a === "en") return 1;
  const l = Pl.get(a);
  if (l === void 0 || i.length === 0) return 0;
  let c = 0;
  for (const u of i) {
    const m = l[u];
    m !== void 0 && m !== "" && (c += 1);
  }
  return c / i.length;
}
function Sc(a, i) {
  return {
    x: a.y * i.z - a.z * i.y,
    y: a.z * i.x - a.x * i.z,
    z: a.x * i.y - a.y * i.x,
  };
}
function Cp(a) {
  const i = Math.hypot(a.x, a.y, a.z);
  return i < 1e-9
    ? { x: 0, y: 1, z: 0 }
    : { x: a.x / i, y: a.y / i, z: a.z / i };
}
function jp(a) {
  const i = Math.abs(a.y) < 0.9 ? { x: 0, y: 1, z: 0 } : { x: 1, y: 0, z: 0 },
    l = Cp(Sc(a, i));
  return [l, Sc(a, l)];
}
function Tp(a) {
  let i = 2166136261;
  for (let l = 0; l < a.length; l += 1)
    ((i ^= a.charCodeAt(l)), (i = Math.imul(i, 16777619)));
  return ((i >>> 0) / 4294967296) * Math.PI * 2;
}
const uh = { heavy: "✕", notable: "!", minor: "i", none: "" },
  Rp = {
    heavy: "counted heavily",
    notable: "counted",
    minor: "noted",
    none: "nothing found",
  };
function Mp(a) {
  if (a.findings.length === 0) return "none";
  const i = a.findings.reduce((l, c) => Math.max(l, za[c].weight), 0);
  return i >= 30 ? "heavy" : i >= 18 ? "notable" : "minor";
}
const Op = Math.PI * (3 - Math.sqrt(5)),
  Ip = 1.7;
function Dp(a) {
  const i = new Map(),
    l = new Map();
  if (a.nodes.length === 0) return i;
  const c = new Map();
  for (const f of a.nodes) {
    if (f.parentId === null) continue;
    const x = c.get(f.parentId);
    x === void 0 ? c.set(f.parentId, [f]) : x.push(f);
  }
  const u = a.nodes.find((f) => f.parentId === null) ?? a.nodes[0];
  if (u === void 0) return i;
  (i.set(u.id, { x: 0, y: 0, z: 0 }), l.set(u.id, { x: 0, y: 1, z: 0 }));
  const m = [u];
  for (; m.length > 0;) {
    const f = m.shift();
    if (f === void 0) continue;
    const x = c.get(f.id);
    if (x === void 0 || x.length === 0) continue;
    const v = i.get(f.id),
      E = l.get(f.id);
    if (v === void 0 || E === void 0) continue;
    const [y, _] = jp(E),
      N =
        f.parentId === null
          ? Math.PI
          : Ip * (1 - 1 / (1 + 0.9 * (x.length - 1))),
      I = Tp(f.id),
      T = (0.3 + 0.7 * Math.min(1, (x.length - 1) / 4)) / (1 + 0.3 * f.depth);
    for (let P = 0; P < x.length; P += 1) {
      const $ = x[P];
      if ($ === void 0) continue;
      const X = 1 - ((P + 0.5) / x.length) * (1 - Math.cos(N)),
        se = Math.sqrt(Math.max(0, 1 - X * X)),
        fe = I + P * Op,
        z = Math.cos(fe),
        q = Math.sin(fe),
        ue = {
          x: E.x * X + (y.x * z + _.x * q) * se,
          y: E.y * X + (y.y * z + _.y * q) * se,
          z: E.z * X + (y.z * z + _.z * q) * se,
        };
      (i.set($.id, { x: v.x + ue.x * T, y: v.y + ue.y * T, z: v.z + ue.z * T }),
        l.set($.id, ue),
        m.push($));
    }
  }
  return Lp(i);
}
function Lp(a) {
  if (a.size === 0) return a;
  let i = 1 / 0,
    l = 1 / 0,
    c = 1 / 0,
    u = -1 / 0,
    m = -1 / 0,
    f = -1 / 0;
  for (const y of a.values())
    ((i = Math.min(i, y.x)),
      (u = Math.max(u, y.x)),
      (l = Math.min(l, y.y)),
      (m = Math.max(m, y.y)),
      (c = Math.min(c, y.z)),
      (f = Math.max(f, y.z)));
  const x = { x: (i + u) / 2, y: (l + m) / 2, z: (c + f) / 2 };
  let v = 0;
  for (const y of a.values())
    v = Math.max(v, Math.hypot(y.x - x.x, y.y - x.y, y.z - x.z));
  const E = v > 1e-6 ? 1 / v : 1;
  for (const [y, _] of a)
    a.set(y, { x: (_.x - x.x) * E, y: (_.y - x.y) * E, z: (_.z - x.z) * E });
  return a;
}
function Pp(a) {
  if (a.length < 2) return null;
  const i = new Map();
  for (const c of a) {
    const u = c.fullName.lastIndexOf(".");
    if (u === -1) continue;
    const m = c.fullName.slice(0, u);
    i.set(m, (i.get(m) ?? 0) + 1);
  }
  let l = null;
  for (const [c, u] of i)
    (l === null || u > l.count) && (l = { name: c, count: u });
  return l === null || l.count < 2 || l.count * 2 < a.length ? null : l;
}
function Up(a, i, l, c) {
  const u = `${a} ${a === 1 ? "part" : "parts"}`;
  if (i === 0) return `${u}, and no finding names any of them.`;
  const m = i === 1 ? "1 is named in a finding" : `${i} are named in a finding`,
    f = `${l} of ${a} sit on a path to one`,
    x = c === null ? "" : ` ${c.count} of the ${i} are inside ${c.name}.`;
  return `${u}. ${m}, and ${f}.${x}`;
}
function qp(a) {
  const i = Dp(a);
  let l = 1;
  for (const y of a.nodes) y.kind !== "archive" && (l = Math.max(l, y.weight));
  const c = new Map(),
    u = [];
  for (const y of a.nodes) {
    const N = {
      ...(i.get(y.id) ?? { x: 0, y: 0, z: 0 }),
      node: y,
      severity: Mp(y),
      size:
        y.kind === "archive"
          ? 1
          : Math.min(1, Math.sqrt(y.weight) / Math.sqrt(l)),
    };
    (u.push(N), c.set(y.id, N));
  }
  const m = [];
  for (const [y, _] of a.edges) {
    const N = c.get(y),
      I = c.get(_);
    N !== void 0 && I !== void 0 && m.push([N, I]);
  }
  const f = { heavy: 0, notable: 1, minor: 2, none: 3 },
    x = u
      .filter((y) => y.node.findings.length > 0)
      .sort(
        (y, _) =>
          f[y.severity] - f[_.severity] ||
          _.node.findings.length - y.node.findings.length ||
          y.node.fullName.localeCompare(_.node.fullName),
      ),
    v = u.filter((y) => y.node.leadsToFinding).length,
    E = Pp(x.map((y) => y.node));
  return {
    placements: u,
    byId: c,
    edges: m,
    hotspots: x,
    maxDepth: a.maxDepth,
    summary: {
      total: u.length,
      withFindings: x.length,
      onPath: v,
      concentration: E,
      sentence: Up(u.length, x.length, v, E),
    },
  };
}
const Gp = { focus: "205, 216, 222" },
  ch = (a) => Math.min(1, Math.max(0, a)),
  hh = { yaw: 0.55, pitch: -0.3, zoom: 1 },
  Ul = 3.1,
  mh = 2.5,
  zp = mh / Ul;
function fh(a, i, l) {
  const c = Math.cos(i.yaw),
    u = Math.sin(i.yaw),
    m = a.x * c + a.z * u,
    f = -a.x * u + a.z * c,
    x = Math.cos(i.pitch),
    v = Math.sin(i.pitch),
    E = a.y * x - f * v,
    _ = a.y * v + f * x + Ul,
    N = Math.max(0.2, _),
    I = mh / N,
    D = Math.min(l.width, l.height) * 0.42 * i.zoom;
  return {
    x: l.width / 2 + m * I * D,
    y: l.height / 2 - E * I * D,
    scale: (I / zp) * i.zoom,
    depth: _,
    inFront: _ > 0.25,
  };
}
function ph(a, i) {
  let l = 1 / 0,
    c = 1 / 0,
    u = -1 / 0,
    m = -1 / 0;
  for (const y of a.placements) {
    const _ = fh(y, hh, i);
    _.inFront &&
      ((l = Math.min(l, _.x)),
      (u = Math.max(u, _.x)),
      (c = Math.min(c, _.y)),
      (m = Math.max(m, _.y)));
  }
  if (!Number.isFinite(l) || !Number.isFinite(c))
    return { scale: 1, dx: 0, dy: 0 };
  const f = 0.78,
    x = Math.min(
      3,
      Math.max(
        0.6,
        Math.min(
          (i.width * f) / Math.max(1, u - l),
          (i.height * f) / Math.max(1, m - c),
        ),
      ),
    ),
    v = (l + u) / 2,
    E = (c + m) / 2;
  return {
    scale: x,
    dx: i.width / 2 - (i.width / 2 + (v - i.width / 2) * x),
    dy: i.height / 2 - (i.height / 2 + (E - i.height / 2) * x),
  };
}
function Ec(a) {
  return 0.3 + 0.7 * ch((Ul + 1 - a) / 2);
}
const hs = "255, 255, 255",
  Hp = "#0b0a0e",
  gh = {
    archive: "248, 249, 250",
    entrypoint: "199, 125, 255",
    class: "76, 201, 240",
    package: "123, 156, 255",
    library: "255, 183, 3",
  };
function Nc(a) {
  return gh[a] ?? hs;
}
const Bp = 'ui-monospace, "JetBrains Mono", SFMono-Regular, monospace';
function Fp(a) {
  return 2.4 + 5.2 * a.size;
}
function $p(a, i, l) {
  const { view: c, camera: u } = l,
    m = l.progress ?? 1,
    f = l.hoveredId ?? null,
    x = l.selectedId ?? null;
  (a.clearRect(0, 0, c.width, c.height), (a.textBaseline = "middle"));
  const v = l.framing ?? ph(i, c),
    E = new Map();
  for (const D of i.placements) {
    const T = fh(D, u, c);
    E.set(D.node.id, {
      ...T,
      x: c.width / 2 + (T.x - c.width / 2) * v.scale + v.dx,
      y: c.height / 2 + (T.y - c.height / 2) * v.scale + v.dy,
      scale: T.scale * v.scale,
    });
  }
  const y = (D) => ch(m * (i.maxDepth + 1.4) - D),
    _ = [],
    N = [],
    I = [];
  for (const [D, T] of i.edges) {
    const P = E.get(D.node.id),
      $ = E.get(T.node.id);
    if (P === void 0 || $ === void 0 || !P.inFront || !$.inFront) continue;
    const K = D.node.leadsToFinding && T.node.leadsToFinding,
      X = Ec((P.depth + $.depth) / 2),
      se = Math.min(y(D.node.depth), y(T.node.depth));
    se <= 0 ||
      _.push({
        depth: (P.depth + $.depth) / 2,
        draw: () => {
          ((a.globalAlpha =
            (K ? 0.95 * Math.max(0.7, X) : 0.45 * Math.max(0.5, X)) * se),
            (a.strokeStyle = K ? `rgb(${hs})` : "rgb(123, 156, 255)"),
            (a.lineWidth = K ? 1.8 : 1),
            a.beginPath(),
            a.moveTo(P.x, P.y),
            a.lineTo($.x, $.y),
            a.stroke());
        },
      });
  }
  for (const D of i.placements) {
    const T = E.get(D.node.id);
    if (T === void 0 || !T.inFront) continue;
    const P = y(D.node.depth);
    if (P <= 0) continue;
    const $ = Math.max(1, Fp(D) * T.scale),
      K = Ec(T.depth),
      X = D.node.findings.length > 0,
      se = D.node.id === x,
      fe = D.node.id === f;
    (N.push({ id: D.node.id, x: T.x, y: T.y, radius: $ }),
      _.push({
        depth: T.depth,
        draw: () => {
          if (
            ((a.globalAlpha = P),
            (a.strokeStyle = Hp),
            (a.lineWidth = 2.5),
            a.beginPath(),
            a.arc(T.x, T.y, $, 0, Math.PI * 2),
            a.stroke(),
            X)
          )
            ((a.globalAlpha = Math.max(0.75, K) * P),
              (a.fillStyle = `rgb(${hs})`),
              a.beginPath(),
              a.arc(T.x, T.y, $, 0, Math.PI * 2),
              a.fill(),
              (a.globalAlpha = Math.max(0.85, K) * P),
              (a.strokeStyle = `rgb(${Nc(D.node.kind)})`),
              (a.lineWidth = 2.2),
              a.beginPath(),
              a.arc(T.x, T.y, $ + 1.6, 0, Math.PI * 2),
              a.stroke());
          else {
            const q = D.node.leadsToFinding;
            ((a.globalAlpha =
              (q ? 1 * Math.max(0.7, K) : 0.78 * Math.max(0.6, K)) * P),
              (a.strokeStyle = `rgb(${Nc(D.node.kind)})`),
              (a.lineWidth = q ? 2 : 1.5),
              a.beginPath(),
              a.arc(T.x, T.y, $, 0, Math.PI * 2),
              a.stroke());
          }
          (D.node.kind === "entrypoint" &&
            ((a.globalAlpha = Math.max(0.75, K) * P),
            (a.strokeStyle = `rgb(${gh.entrypoint})`),
            (a.lineWidth = 1.6),
            a.beginPath(),
            a.arc(T.x, T.y, $ + 3.5, 0, Math.PI * 2),
            a.stroke()),
            (se || fe) &&
              ((a.globalAlpha = P),
              (a.strokeStyle = `rgb(${Gp.focus})`),
              (a.lineWidth = se ? 1.4 : 1),
              a.beginPath(),
              a.arc(T.x, T.y, $ + 6.5, 0, Math.PI * 2),
              a.stroke()));
        },
      }));
    const z = Yp(D, se || fe);
    z !== null &&
      I.push({
        text: z,
        anchorX: T.x,
        gap: $ + 5,
        y: T.y,
        depth: T.depth,
        loud: X || se || fe,
        alpha: P,
      });
  }
  _.sort((D, T) => T.depth - D.depth);
  for (const D of _) D.draw();
  return (Vp(a, I, c), (a.globalAlpha = 1), N);
}
const Wp = 6.2,
  Kp = 13;
function Vp(a, i, l) {
  const c = [],
    u = (f, x, v) =>
      !c.some(([E, y, _, N]) => f < _ && f + v > E && x - 6 < N && x + 6 > y),
    m = [...i].sort((f, x) => f.depth - x.depth);
  for (const f of m) {
    const x = f.text.length * Wp,
      v =
        f.anchorX + f.gap + x > l.width - 4
          ? f.anchorX - f.gap - x
          : f.anchorX + f.gap;
    if (v < 2) continue;
    let E = f.y,
      y = 0;
    for (; !u(v, E, x) && y < 3;) ((E += Kp), (y += 1));
    u(v, E, x) &&
      (c.push([v, E - 6, v + x, E + 6]),
      (a.globalAlpha = (f.loud ? 0.95 : 0.42) * f.alpha),
      (a.fillStyle = `rgb(${hs})`),
      (a.font = `${f.loud ? 11 : 10}px ${Bp}`),
      a.fillText(f.text, v, E));
  }
}
function Yp(a, i) {
  const { node: l } = a;
  return i
    ? l.fullName
    : l.findings.length > 0
      ? `${uh[a.severity]} ${l.label}`
      : l.kind === "entrypoint"
        ? l.label
        : null;
}
function kc(a, i, l) {
  let c = null;
  for (const u of a) {
    const m = Math.hypot(u.x - i, u.y - l);
    m > u.radius + 7 ||
      ((c === null || m < c.distance) && (c = { id: u.id, distance: m }));
  }
  return (c == null ? void 0 : c.id) ?? null;
}
const vh = typeof window > "u" ? g.useEffect : g.useLayoutEffect;
function Ur() {
  return typeof document > "u"
    ? !1
    : document.documentElement.dataset.motion === "full";
}
function Qp({ community: a, onReport: i, reporting: l, reported: c }) {
  if (!(a.provenBad || a.reports > 0) && a.timesSeen <= 1) return null;
  const m =
    a.source === "this-computer"
      ? "seen on this computer"
      : a.source === "both"
        ? "seen here and by other people"
        : "seen by other people";
  return r.jsxs("section", {
    "aria-label": "What is already known about this file",
    className: [
      "border-t pt-6",
      a.provenBad
        ? "border-white"
        : a.reports > 0
          ? "border-neutral-500"
          : "border-neutral-800",
    ].join(" "),
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-center gap-3",
        children: [
          r.jsxs("span", {
            className: [
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium",
              a.provenBad
                ? "border-white bg-white font-semibold text-black"
                : a.reports > 0
                  ? "border-white/60 text-white"
                  : "border-neutral-700 text-neutral-400",
            ].join(" "),
            children: [
              r.jsx("span", {
                "aria-hidden": "true",
                children: a.provenBad ? "✕" : a.reports > 0 ? "!" : "✓",
              }),
              a.provenBad
                ? "Known bad file"
                : a.reports > 0
                  ? "Reported by players"
                  : "Seen before",
            ],
          }),
          r.jsx("h2", {
            className:
              "font-display text-sm uppercase tracking-wide text-neutral-500",
            children: "Already known",
          }),
        ],
      }),
      r.jsx("p", {
        className: "mt-3 text-base leading-relaxed text-neutral-100",
        children: cp(a),
      }),
      a.stolen.length > 0 &&
        r.jsx("ul", {
          className: "mt-3 space-y-1",
          children: a.stolen.map((f) =>
            r.jsxs(
              "li",
              {
                className:
                  "rounded border border-neutral-700 bg-black/40 px-3 py-1.5 text-sm text-neutral-200",
                children: ["Previously caught taking ", f],
              },
              f,
            ),
          ),
        }),
      r.jsxs("dl", {
        className:
          "mt-4 flex flex-wrap gap-x-8 gap-y-2 border-t border-neutral-800 pt-3 text-sm",
        children: [
          r.jsxs("div", {
            children: [
              r.jsx("dt", {
                className: "text-xs uppercase tracking-wide text-neutral-500",
                children: "Times checked",
              }),
              r.jsxs("dd", {
                className: "text-neutral-200",
                children: [a.timesSeen, " (", m, ")"],
              }),
            ],
          }),
          a.reports > 0 &&
            r.jsxs("div", {
              children: [
                r.jsx("dt", {
                  className: "text-xs uppercase tracking-wide text-neutral-500",
                  children: "Reported as malicious",
                }),
                r.jsxs("dd", {
                  className: "text-neutral-200",
                  children: [
                    a.reports,
                    " ",
                    a.reports === 1 ? "person" : "people",
                    " — not verified by ModGuard",
                  ],
                }),
              ],
            }),
          a.knownVerdict &&
            r.jsxs("div", {
              children: [
                r.jsx("dt", {
                  className: "text-xs uppercase tracking-wide text-neutral-500",
                  children: "Last verdict",
                }),
                r.jsx("dd", {
                  className: "text-neutral-200",
                  children: a.knownVerdict,
                }),
              ],
            }),
        ],
      }),
      i && r.jsx(xh, { onReport: i, reporting: l, reported: c }),
    ],
  });
}
function xh({ onReport: a, reporting: i, reported: l }) {
  return r.jsx("div", {
    className: "mt-4 border-t border-neutral-800 pt-4",
    children:
      l === !0
        ? r.jsx("p", {
            className: "text-sm text-neutral-300",
            children:
              "Reported. Thank you — the next person to check this exact file will see your report. Only its fingerprint was shared.",
          })
        : r.jsxs(r.Fragment, {
            children: [
              r.jsx("button", {
                type: "button",
                onClick: a,
                disabled: i === !0,
                className: ie({ level: "strong" }),
                children:
                  i === !0 ? "Reporting…" : "Report this mod as malicious",
              }),
              r.jsx("p", {
                className: "mt-2 text-xs leading-relaxed text-neutral-500",
                children:
                  "Shares this file's fingerprint so other people are warned. The file itself, its location, and anything about you are never sent.",
              }),
            ],
          }),
  });
}
const Xp = {
    string: "written in the code",
    "hidden-string": "hidden in the code",
    observed: "connected to when run",
  },
  Jp = {
    "mod-hosting": "Mod infrastructure",
    "chat-webhook": "Chat webhook",
    "paste-or-upload": "Anonymous upload",
    "dynamic-dns": "Someone's own machine",
    "url-shortener": "Hidden behind a shortener",
    "raw-ip": "Bare IP address",
    local: "This computer",
    unknown: "Unrecognised",
  };
function Zp({ endpoints: a }) {
  if (a.length === 0) return null;
  const i = a.filter((l) => !l.routine);
  return r.jsxs("section", {
    "aria-label": "Where it connects",
    className: "border-t border-neutral-800 pt-6",
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [
          r.jsx("h2", {
            className:
              "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
            children: "Where it connects",
          }),
          r.jsxs("span", {
            className: "font-mono text-[11px] text-neutral-600",
            children: [
              a.length,
              " ",
              a.length === 1 ? "destination" : "destinations",
              i.length > 0 && `, ${i.length} worth a look`,
            ],
          }),
        ],
      }),
      r.jsx("ul", {
        className: "mt-4 divide-y divide-neutral-900",
        children: a.map((l) => {
          const c = l.sentSecrets.length > 0;
          return r.jsxs(
            "li",
            {
              className: "py-3",
              children: [
                r.jsxs("div", {
                  className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                  children: [
                    r.jsx("span", {
                      className: [
                        "font-mono text-sm",
                        c
                          ? "font-semibold text-white"
                          : l.routine
                            ? "text-neutral-400"
                            : "text-neutral-100",
                      ].join(" "),
                      children: l.host,
                    }),
                    r.jsx("span", {
                      className: [
                        "rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide",
                        l.routine
                          ? "border-neutral-800 text-neutral-500"
                          : "border-neutral-600 text-neutral-200",
                      ].join(" "),
                      children: Jp[l.kind],
                    }),
                    l.sources.map((u) =>
                      r.jsx(
                        "span",
                        {
                          className: [
                            "text-[11px]",
                            u === "hidden-string"
                              ? "font-medium text-white"
                              : u === "observed"
                                ? "text-steel-5"
                                : "text-neutral-600",
                          ].join(" "),
                          children: Xp[u],
                        },
                        u,
                      ),
                    ),
                  ],
                }),
                l.sentSecrets.length > 0 &&
                  r.jsxs("p", {
                    className:
                      "mt-1.5 border-l-2 border-white pl-3 text-sm text-white",
                    children: ["Sent ", l.sentSecrets.join(", "), " here."],
                  }),
                r.jsx("p", {
                  className: "mt-1 text-sm leading-relaxed text-neutral-400",
                  children: l.note,
                }),
                l.raw !== l.host &&
                  r.jsx("code", {
                    className:
                      "selectable mt-1.5 block break-all font-mono text-[11px] text-neutral-600",
                    children: l.raw,
                  }),
              ],
            },
            l.host,
          );
        }),
      }),
    ],
  });
}
function ot({ id: a, title: i, note: l, emphasis: c = !1, children: u }) {
  return r.jsxs("section", {
    ...(a === void 0 ? {} : { id: a }),
    "aria-label": i,
    className: [
      "scroll-mt-6 border-t pt-6",
      c ? "border-white" : "border-neutral-800",
    ].join(" "),
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [
          r.jsx("h2", {
            className: [
              "font-mono text-[11px] uppercase tracking-[0.2em]",
              c ? "text-white" : "text-neutral-500",
            ].join(" "),
            children: i,
          }),
          l !== void 0 &&
            r.jsx("span", {
              className: "font-mono text-[11px] text-neutral-600",
              children: l,
            }),
        ],
      }),
      r.jsx("div", { className: "mt-4", children: u }),
    ],
  });
}
function eg({ title: a, note: i }) {
  return r.jsxs("div", {
    className:
      "flex items-baseline justify-between border-b border-neutral-800 pb-2",
    children: [
      r.jsx("h2", {
        className:
          "font-display text-sm uppercase tracking-[0.15em] text-neutral-400",
        children: a,
      }),
      i !== void 0 &&
        r.jsx("span", {
          className: "font-mono text-[11px] text-neutral-600",
          children: i,
        }),
    ],
  });
}
function Ge({ label: a, value: i, mono: l = !1 }) {
  return r.jsxs("div", {
    className: "min-w-0",
    children: [
      r.jsx("dt", {
        className:
          "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
        children: a,
      }),
      r.jsx("dd", {
        className: [
          "mt-0.5 truncate text-sm text-neutral-200",
          l ? "font-mono text-xs" : "",
        ].join(" "),
        title: i,
        children: i,
      }),
    ],
  });
}
function tg({ explanation: a }) {
  return r.jsxs("div", {
    className: "space-y-8",
    children: [
      r.jsxs("header", {
        children: [
          r.jsx("h2", {
            className:
              "font-display text-lg leading-snug tracking-tight text-neutral-50",
            children: a.headline,
          }),
          a.authorDescription !== null &&
            r.jsxs("figure", {
              className: "mt-4 border-l-2 border-neutral-700 pl-4",
              children: [
                r.jsxs("blockquote", {
                  className: "text-[15px] leading-relaxed text-neutral-300",
                  children: ["“", a.authorDescription, "”"],
                }),
                r.jsx("figcaption", {
                  className:
                    "mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
                  children: "In its own words",
                }),
              ],
            }),
          r.jsx("div", {
            className: "mt-5 space-y-3",
            children: a.narrative.map((i, l) =>
              r.jsx(
                "p",
                {
                  className: "text-sm leading-relaxed text-neutral-300",
                  children: i,
                },
                l,
              ),
            ),
          }),
        ],
      }),
      a.groups.map((i) =>
        r.jsxs(
          ot,
          {
            title: i.title,
            children: [
              i.note !== void 0 &&
                r.jsx("p", {
                  className: "mb-3 text-xs leading-relaxed text-neutral-500",
                  children: i.note,
                }),
              r.jsx("dl", {
                className: "divide-y divide-neutral-900",
                children: i.rows.map((l, c) =>
                  r.jsxs(
                    "div",
                    {
                      className: "flex items-baseline gap-4 py-2 text-sm",
                      children: [
                        l.label !== void 0
                          ? r.jsx("dt", {
                              className:
                                "w-44 shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500",
                              children: l.label,
                            })
                          : r.jsx("dt", {
                              "aria-hidden": "true",
                              className: "w-44 shrink-0",
                            }),
                        r.jsx("dd", {
                          className:
                            "min-w-0 flex-1 break-words text-neutral-200",
                          children: l.value,
                        }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
            ],
          },
          i.title,
        ),
      ),
      r.jsx("p", {
        className:
          "border-t border-neutral-900 pt-4 text-xs leading-relaxed text-neutral-600",
        children:
          "Everything on this tab was read from the file on your machine — the mod's own description and its code. Nothing here was looked up online or written by an AI, and the quote above is the author's, not ModGuard's.",
      }),
    ],
  });
}
const yh = "modguard.locale",
  ql = g.createContext({ locale: "en", setLocale: () => {} });
function ng() {
  var i;
  if (typeof window > "u") return "en";
  try {
    const l = window.localStorage.getItem(yh);
    if (bc(l)) return l;
  } catch {}
  const a = ((i = window.navigator) == null ? void 0 : i.languages) ?? [];
  for (const l of a) {
    if (bc(l)) return l;
    const c = l.split("-")[0],
      u = Ll.find((m) => m.split("-")[0] === c);
    if (u !== void 0) return u;
  }
  return "en";
}
function ag({ children: a }) {
  const [i, l] = g.useState("en");
  g.useEffect(() => {
    l(ng());
  }, []);
  const c = g.useCallback((m) => {
    l(m);
    try {
      window.localStorage.setItem(yh, m);
    } catch {}
    typeof document < "u" && (document.documentElement.lang = m);
  }, []);
  g.useEffect(() => {
    typeof document < "u" && (document.documentElement.lang = i);
  }, [i]);
  const u = g.useMemo(() => ({ locale: i, setLocale: c }), [i, c]);
  return r.jsx(ql.Provider, { value: u, children: a });
}
function rg() {
  return g.useContext(ql);
}
function Gl() {
  const { locale: a } = g.useContext(ql);
  return g.useCallback((i, l) => _p(a, i, l), [a]);
}
function hl({ finding: a, note: i }) {
  const l = !a.countsTowardRisk,
    c = Gl(),
    u = Rt.behavior;
  return r.jsxs("li", {
    className: [
      "border-l-2 pl-4",
      l ? "border-neutral-800" : "border-neutral-500",
    ].join(" "),
    children: [
      r.jsxs("div", {
        className: "flex items-start justify-between gap-3",
        children: [
          r.jsx("h3", {
            className: `font-display text-[15px] ${l ? "text-neutral-400" : "text-neutral-100"}`,
            children: c(u(a.category, "title"), a.title),
          }),
          r.jsx("span", {
            className:
              "shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
            children: a.category.replaceAll("_", " ").toLowerCase(),
          }),
        ],
      }),
      l &&
        r.jsx("p", {
          className: "mt-1.5 text-xs text-neutral-500",
          children:
            i ??
            (a.libraryOnly === !0
              ? c(
                  "ui.finding.libraryOnly",
                  "Comes from a library this mod ships rather than from its own code. Shown, but not counted.",
                )
              : c("ui.finding.discounted", If)),
        }),
      r.jsx("p", {
        className: "mt-2 text-sm leading-relaxed text-neutral-300",
        children: c(u(a.category, "description"), a.explanation),
      }),
      r.jsxs("p", {
        className: "mt-3 text-sm leading-relaxed text-neutral-400",
        children: [
          r.jsxs("span", {
            className: "font-medium text-neutral-300",
            children: [c("ui.finding.advice", "What you can do:"), " "],
          }),
          c(u(a.category, "advice"), a.whatYouCanDo),
        ],
      }),
      a.evidence.length > 0 &&
        r.jsxs("details", {
          className: "mt-3 group",
          children: [
            r.jsxs("summary", {
              className:
                "cursor-pointer text-xs text-neutral-500 hover:text-neutral-300",
              children: [
                c("ui.finding.evidence", "What ModGuard saw"),
                " (",
                a.evidence.length,
                ")",
              ],
            }),
            r.jsx("ul", {
              className: "mt-2 space-y-1",
              children: a.evidence.map((m, f) =>
                r.jsx(
                  "li",
                  {
                    className:
                      "selectable break-all border-l border-neutral-800 pl-3 font-mono text-[11px] text-neutral-500",
                    children: m,
                  },
                  f,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
const og = {
    "credential-read": "Opened private data",
    "file-read": "Read a file",
    "file-write": "Wrote a file",
    network: "Contacted the internet",
    exfiltration: "Sent private data away",
    process: "Ran a program",
    persistence: "Tried to keep running",
    gap: "Not emulated",
  },
  sg = {
    exfiltration: "font-semibold text-white",
    "credential-read": "font-medium text-neutral-100",
    process: "font-medium text-neutral-100",
    persistence: "font-medium text-neutral-100",
    network: "text-neutral-300",
    "file-read": "text-neutral-500",
    "file-write": "text-neutral-500",
    gap: "text-neutral-600",
  },
  ig = {
    exfiltration: "border-l-4 border-white",
    "credential-read": "border-l-2 border-neutral-400",
    process: "border-l-2 border-neutral-400",
    persistence: "border-l-2 border-neutral-400",
    network: "border-l-2 border-neutral-700",
    "file-read": "border-l-2 border-neutral-800",
    "file-write": "border-l-2 border-neutral-800",
    gap: "border-l-2 border-neutral-800",
  };
function lg({ observation: a }) {
  return r.jsxs("li", {
    className: `flex flex-col gap-0.5 py-1.5 pl-3 ${ig[a.kind]}`,
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline gap-x-2",
        children: [
          r.jsx("span", {
            className: `text-sm ${sg[a.kind]}`,
            children: og[a.kind],
          }),
          a.phase === "probed" &&
            r.jsx("span", {
              className:
                "rounded border border-neutral-700 px-1.5 text-[10px] uppercase tracking-wide text-neutral-500",
              children: "only when called",
            }),
        ],
      }),
      r.jsx("span", {
        className: "selectable break-all font-mono text-xs text-neutral-400",
        children: a.detail,
      }),
      a.where &&
        r.jsxs("span", {
          className: "font-mono text-[11px] text-neutral-600",
          children: ["in ", a.where],
        }),
    ],
  });
}
const dg = {
  command: "Typed a command as you",
  chat: "Said something as you",
  item: "Moved your items",
  packet: "Sent a packet as you",
};
function ug({ actions: a }) {
  if (a.length === 0) return null;
  const i = a.filter((l) => l.harmful);
  return r.jsxs("div", {
    className: [
      "mt-4 rounded-none border p-4",
      i.length > 0 ? "border-white bg-black/40" : "border-neutral-700",
    ].join(" "),
    children: [
      r.jsx("h3", {
        className: `font-display text-base ${i.length > 0 ? "font-semibold text-white" : "text-neutral-200"}`,
        children:
          i.length > 0
            ? "It acted as you inside the game"
            : "It talked to the game server as you",
      }),
      i.length > 0 &&
        r.jsx("p", {
          className: "mt-1 text-sm text-neutral-300",
          children:
            "Nothing left your computer. On a real server this would have come from your account, under your name.",
        }),
      r.jsx("ul", {
        className: "mt-3 space-y-2",
        children: a.map((l, c) =>
          r.jsxs(
            "li",
            {
              children: [
                r.jsxs("div", {
                  className: "flex flex-wrap items-baseline gap-x-2",
                  children: [
                    r.jsx("span", {
                      className: `text-sm ${l.harmful ? "font-semibold text-white" : "text-neutral-400"}`,
                      children: dg[l.kind],
                    }),
                    l.phase === "probed" &&
                      r.jsx("span", {
                        className:
                          "rounded border border-neutral-700 px-1.5 text-[10px] uppercase tracking-wide text-neutral-500",
                        children: "only when called",
                      }),
                  ],
                }),
                r.jsx("code", {
                  className:
                    "selectable mt-1 block break-all rounded border border-neutral-700 bg-black/70 px-3 py-1.5 font-mono text-xs text-neutral-100",
                  children: l.detail,
                }),
                l.why !== null &&
                  r.jsx("p", {
                    className: "mt-1 text-xs text-neutral-400",
                    children: l.why,
                  }),
              ],
            },
            `${l.kind}-${c}`,
          ),
        ),
      }),
    ],
  });
}
function cg({ liveWatch: a }) {
  const i = a.stolen,
    l = a.inGameActions ?? [],
    c = i.length > 0 || Gr(a).length > 0,
    u = a.observations.filter((m) => m.kind !== "gap");
  return r.jsxs("section", {
    "aria-label": "What the mod did when it was run",
    className: [
      "border-t pt-6",
      c ? "border-white" : "border-neutral-800",
    ].join(" "),
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-center gap-3",
        children: [
          r.jsxs("span", {
            className: [
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium",
              c
                ? "border-white bg-white font-semibold text-black"
                : "border-neutral-700 bg-neutral-800/60 text-neutral-300",
            ].join(" "),
            children: [
              r.jsx("span", {
                "aria-hidden": "true",
                children: c ? "✕" : a.ran ? "•" : "–",
              }),
              c
                ? "Caught in the act"
                : a.ran
                  ? "Watched running"
                  : "Did not run",
            ],
          }),
          r.jsx("h2", {
            className:
              "font-display text-sm uppercase tracking-wide text-neutral-500",
            children: "What it did when ModGuard ran it",
          }),
        ],
      }),
      r.jsx("p", {
        className: "mt-3 text-sm leading-relaxed text-neutral-200",
        children: Gf(a),
      }),
      c &&
        r.jsx("ul", {
          className: "mt-4 space-y-3",
          children: i.map((m) =>
            r.jsxs(
              "li",
              {
                className:
                  "rounded-none border border-white/70 bg-black/40 p-4",
                children: [
                  r.jsxs("h3", {
                    className:
                      "font-display text-base font-semibold text-white",
                    children: ["It took ", m.label],
                  }),
                  r.jsx("p", {
                    className: "mt-1 text-sm text-neutral-300",
                    children: m.ifReal,
                  }),
                  r.jsx("ul", {
                    className: "mt-2 space-y-1",
                    children: m.ways.map((f) =>
                      r.jsx(
                        "li",
                        {
                          className:
                            "selectable break-all rounded border border-neutral-700 bg-black/70 px-3 py-1.5 font-mono text-xs text-neutral-100",
                          children: f,
                        },
                        f,
                      ),
                    ),
                  }),
                  m.phase === "probed" &&
                    r.jsx("p", {
                      className: "mt-2 text-xs text-neutral-400",
                      children:
                        "This did not happen when the mod started up — ModGuard called the code itself. It is in the file, waiting for whatever normally triggers it.",
                    }),
                ],
              },
              m.id,
            ),
          ),
        }),
      r.jsx(ug, { actions: l }),
      !c &&
        a.reached.length > 0 &&
        r.jsxs("p", {
          className:
            "mt-3 rounded-none border border-neutral-600 bg-white/5 px-3 py-2 text-sm text-neutral-200",
          children: [
            "It opened ",
            a.reached.join(", "),
            ", but nothing was seen leaving.",
          ],
        }),
      u.length > 0 &&
        r.jsxs("details", {
          className: "mt-4 group",
          children: [
            r.jsxs("summary", {
              className:
                "cursor-pointer text-xs text-neutral-500 hover:text-neutral-300",
              children: ["Everything it did (", u.length, ")"],
            }),
            r.jsx("ul", {
              className: "mt-2 space-y-1",
              children: u.map((m, f) =>
                r.jsx(lg, { observation: m }, `${m.kind}-${f}`),
              ),
            }),
          ],
        }),
      r.jsxs("p", {
        className:
          "mt-4 border-t border-neutral-800 pt-3 text-xs leading-relaxed text-neutral-500",
        children: [
          "Ran ",
          a.classesLoaded,
          " ",
          a.classesLoaded === 1 ? "code file" : "code files",
          a.entryPointsRun.length > 0 &&
            `, starting at ${a.entryPointsRun.slice(0, 3).join(", ")}`,
          a.methodsProbed > 0 &&
            `, then called ${a.methodsProbed} more of its methods to reach code that start-up didn't`,
          ".",
          " ",
          a.gaps > 0 &&
            `${a.gaps} ${a.gaps === 1 ? "thing was" : "things were"} beyond what the test Minecraft can imitate. `,
          a.haltedBecause !== null &&
            `The run was stopped early (${a.haltedBecause}). `,
          "A mod that does nothing here is not proven safe — a payload can wait for a date, a server, or a real player before it does anything.",
        ],
      }),
    ],
  });
}
const _c = hh,
  is = 1.4,
  ml = 0.55,
  fl = 3.4,
  hg = 520,
  mg = (Math.PI * 2) / 44,
  fg = 12,
  La = (a, i, l) => Math.min(l, Math.max(i, a));
function pg({ tree: a, onSelect: i, autoSpin: l }) {
  return a.nodes.length < 4
    ? null
    : r.jsx(gg, { tree: a, onSelect: i, autoSpin: l });
}
function gg({ tree: a, onSelect: i, autoSpin: l }) {
  const c = g.useMemo(() => qp(a), [a]),
    [u, m] = g.useState(_c),
    [f, x] = g.useState(null),
    [v, E] = g.useState(null),
    [y, _] = g.useState({ width: 640, height: 440 }),
    [N, I] = g.useState(1),
    D = g.useRef(null),
    T = g.useRef(null),
    P = g.useRef([]),
    $ = g.useRef(null),
    K = g.useRef(new Map()),
    X = g.useRef(!1),
    se = g.useRef(null),
    fe = g.useMemo(() => ph(c, y), [c, y]),
    z = g.useId(),
    q = f === null ? void 0 : c.byId.get(f),
    ue = g.useCallback(
      (k) => {
        if ((x(k), k === null)) return;
        const U = c.byId.get(k);
        U !== void 0 && (i == null || i(U.node));
      },
      [c, i],
    );
  (g.useEffect(() => {
    const k = D.current;
    if (k === null) return;
    const U = () => {
      const w = Math.max(240, k.clientWidth);
      _({ width: w, height: Math.round(La(w * 0.72, 280, 470)) });
    };
    if ((U(), typeof ResizeObserver > "u"))
      return (
        window.addEventListener("resize", U),
        () => window.removeEventListener("resize", U)
      );
    const L = new ResizeObserver(U);
    return (L.observe(k), () => L.disconnect());
  }, []),
    vh(() => {
      Ur() && I(0);
    }, []),
    g.useEffect(() => {
      if (!Ur()) return;
      let k = 0;
      const U = performance.now(),
        L = (w) => {
          const M = Math.min(1, (w - U) / hg);
          (I(M), M < 1 && (k = requestAnimationFrame(L)));
        };
      return (
        (k = requestAnimationFrame(L)),
        () => {
          (cancelAnimationFrame(k), I(1));
        }
      );
    }, []),
    g.useEffect(() => {
      if (l !== !0 || !Ur()) return;
      const k = D.current;
      if (k === null) return;
      let U = 0,
        L = 0,
        w = !0;
      const M = (re) => {
        if (!X.current) {
          if (L !== 0 && w) {
            const V = Math.min(0.1, (re - L) / 1e3);
            m((O) => ({ ...O, yaw: O.yaw + mg * V }));
          }
          ((L = re), (U = requestAnimationFrame(M)));
        }
      };
      let Q = null;
      return (
        typeof IntersectionObserver < "u" &&
          ((Q = new IntersectionObserver(
            (re) => {
              const V = re[0];
              V !== void 0 && ((w = V.isIntersecting), w || (L = 0));
            },
            { threshold: 0.05 },
          )),
          Q.observe(k)),
        (U = requestAnimationFrame(M)),
        () => {
          (cancelAnimationFrame(U), Q == null || Q.disconnect());
        }
      );
    }, [l]),
    g.useEffect(() => {
      const k = T.current;
      if (k === null) return;
      const U = k.getContext("2d");
      if (U === null) return;
      const L = Math.min(
          2,
          window.devicePixelRatio > 0 ? window.devicePixelRatio : 1,
        ),
        w = Math.round(y.width * L),
        M = Math.round(y.height * L);
      (k.width !== w && (k.width = w),
        k.height !== M && (k.height = M),
        U.setTransform(L, 0, 0, L, 0, 0),
        (P.current = $p(U, c, {
          view: y,
          camera: u,
          framing: fe,
          progress: N,
          hoveredId: v,
          selectedId: f,
        })));
    }, [c, u, fe, N, v, f, y]),
    g.useEffect(() => {
      const k = T.current;
      if (k === null) return;
      const U = (L) => {
        (L.preventDefault(),
          (X.current = !0),
          m((w) => ({
            ...w,
            zoom: La(w.zoom * Math.exp(-L.deltaY * 0.0016), ml, fl),
          })));
      };
      return (
        k.addEventListener("wheel", U, { passive: !1 }),
        () => k.removeEventListener("wheel", U)
      );
    }, []));
  const _e = (k) => {
      const U = T.current;
      if (U === null) return [0, 0];
      const L = U.getBoundingClientRect();
      return [k.clientX - L.left, k.clientY - L.top];
    },
    Se = () => {
      const [k, U] = [...K.current.values()];
      return k === void 0 || U === void 0
        ? 0
        : Math.hypot(k.x - U.x, k.y - U.y);
    },
    Te = (k) => {
      if (
        (k.currentTarget.setPointerCapture(k.pointerId),
        K.current.set(k.pointerId, { x: k.clientX, y: k.clientY }),
        K.current.size === 2)
      ) {
        ((se.current = { span: Se(), zoom: u.zoom }), ($.current = null));
        return;
      }
      $.current = {
        x: k.clientX,
        y: k.clientY,
        yaw: u.yaw,
        pitch: u.pitch,
        moved: !1,
      };
    },
    Re = (k) => {
      K.current.has(k.pointerId) &&
        K.current.set(k.pointerId, { x: k.clientX, y: k.clientY });
      const U = se.current;
      if (U !== null && K.current.size >= 2) {
        const Q = Se();
        U.span > 8 &&
          Q > 8 &&
          ((X.current = !0),
          m((re) => ({ ...re, zoom: La((U.zoom * Q) / U.span, ml, fl) })));
        return;
      }
      const L = $.current;
      if (L === null) {
        const [Q, re] = _e(k);
        E(kc(P.current, Q, re));
        return;
      }
      const w = k.clientX - L.x,
        M = k.clientY - L.y;
      (Math.abs(w) + Math.abs(M) > 3 && (L.moved = !0),
        (X.current = !0),
        m((Q) => ({
          ...Q,
          yaw: L.yaw + w * 0.008,
          pitch: La(L.pitch - M * 0.006, -is, is),
        })));
    },
    Ae = (k) => {
      (K.current.delete(k.pointerId),
        K.current.size < 2 && (se.current = null));
      const U = $.current;
      if (
        (($.current = null),
        k.currentTarget.hasPointerCapture(k.pointerId) &&
          k.currentTarget.releasePointerCapture(k.pointerId),
        U === null || U.moved)
      )
        return;
      const [L, w] = _e(k);
      ue(kc(P.current, L, w));
    },
    ye = (k) => {
      const U = k.shiftKey ? 0.4 : 0.15,
        L = (M, Q) => {
          ((X.current = !0),
            m((re) => ({
              ...re,
              yaw: re.yaw + M,
              pitch: La(re.pitch + Q, -is, is),
            })));
        },
        w = (M) => {
          ((X.current = !0),
            m((Q) => ({ ...Q, zoom: La(Q.zoom * M, ml, fl) })));
        };
      switch (k.key) {
        case "ArrowLeft":
          L(-U, 0);
          break;
        case "ArrowRight":
          L(U, 0);
          break;
        case "ArrowUp":
          L(0, U);
          break;
        case "ArrowDown":
          L(0, -U);
          break;
        case "+":
        case "=":
          w(1.2);
          break;
        case "-":
        case "_":
          w(1 / 1.2);
          break;
        case "0":
          ((X.current = !0), m(_c));
          break;
        default:
          return;
      }
      k.preventDefault();
    },
    { summary: ve, hotspots: pe } = c,
    he = pe.slice(0, fg);
  return r.jsxs(ot, {
    title: "The shape of this mod",
    note: `${ve.total} ${ve.total === 1 ? "part" : "parts"}`,
    children: [
      r.jsx("p", {
        id: z,
        className: "text-sm leading-relaxed text-neutral-300",
        children: ve.sentence,
      }),
      r.jsx("div", {
        ref: D,
        className: "mt-4 rounded-none border border-neutral-900",
        children: r.jsx("canvas", {
          ref: T,
          role: "img",
          tabIndex: 0,
          "aria-describedby": z,
          "aria-label": `The inside of this file drawn as a tree. ${ve.sentence} Drag or use the arrow keys to turn it, plus and minus to zoom.`,
          style: { width: `${y.width}px`, height: `${y.height}px` },
          className: "block touch-none bg-neutral-950",
          onPointerDown: Te,
          onPointerMove: Re,
          onPointerUp: Ae,
          onPointerCancel: Ae,
          onPointerLeave: () => E(null),
          onKeyDown: ye,
        }),
      }),
      r.jsxs("p", {
        className:
          "mt-2 font-mono text-[10px] leading-relaxed text-neutral-600",
        children: [
          r.jsx("span", { "aria-hidden": "true", children: "✕ ! i" }),
          " how heavily a part counted ·",
          " ",
          r.jsx("span", { "aria-hidden": "true", children: "◎" }),
          " where the game starts this mod · bright lines lead to something that counted · drag to turn, arrow keys and +/− when focused",
        ],
      }),
      r.jsx("p", {
        className: "mt-3 min-h-[1.5rem] font-mono text-xs text-neutral-400",
        role: "status",
        children: q === void 0 ? "" : vg(q),
      }),
      he.length > 0 &&
        r.jsxs("div", {
          className: "mt-4 border-t border-neutral-900 pt-3",
          children: [
            r.jsx("h3", {
              className:
                "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
              children: "What the findings name",
            }),
            r.jsx("ul", {
              className: "mt-2 space-y-1",
              children: he.map((k) =>
                r.jsx(
                  "li",
                  {
                    children: r.jsxs("button", {
                      type: "button",
                      onClick: () => ue(k.node.id),
                      onFocus: () => ue(k.node.id),
                      className: [
                        "flex w-full items-baseline gap-2 rounded-none px-1 py-0.5 text-left text-xs transition-colors",
                        k.node.id === f
                          ? "text-neutral-50"
                          : "text-neutral-400 hover:text-neutral-200",
                      ].join(" "),
                      children: [
                        r.jsx("span", {
                          "aria-hidden": "true",
                          className: "w-3 shrink-0 font-mono",
                          children: uh[k.severity],
                        }),
                        r.jsxs("span", {
                          className: "sr-only",
                          children: [Rp[k.severity], ":"],
                        }),
                        r.jsx("span", {
                          className: "min-w-0 flex-1 truncate font-mono",
                          children: k.node.fullName,
                        }),
                        r.jsx("span", {
                          className: "shrink-0 text-neutral-600",
                          children: k.node.findings.length,
                        }),
                      ],
                    }),
                  },
                  k.node.id,
                ),
              ),
            }),
            pe.length > he.length &&
              r.jsxs("p", {
                className: "mt-2 text-xs text-neutral-600",
                children: [
                  "and ",
                  pe.length - he.length,
                  " more, all of them listed in full among the findings above.",
                ],
              }),
          ],
        }),
    ],
  });
}
function vg(a) {
  const { node: i } = a,
    l =
      i.kind === "entrypoint"
        ? "the game starts this mod here"
        : i.kind === "archive"
          ? "the file itself"
          : i.kind === "library"
            ? "a jar inside this jar"
            : i.kind === "package"
              ? `${i.weight} ${i.weight === 1 ? "part" : "parts"} inside`
              : "a class";
  if (i.findings.length === 0) return `${i.fullName}: ${l}.`;
  const c = i.findings.map((u) => za[u].title).join(", ");
  return `${i.fullName}: ${l}. Named in: ${c}.`;
}
const Ha = {
    unsafe: {
      label: "Unsafe",
      imperative: "Don't run this mod.",
      badge: "bg-white text-black border-white font-semibold",
      ring: "text-white",
      scoreText: "text-white",
      emoji: "✕",
    },
    "be-careful": {
      label: "Be careful",
      imperative: "Be careful with this one.",
      badge: "bg-white/10 text-white border-white/70",
      ring: "text-neutral-200",
      scoreText: "text-neutral-100",
      emoji: "!",
    },
    "minor-notes": {
      label: "Minor notes",
      imperative: "Probably fine. Worth a glance.",
      badge: "bg-transparent text-neutral-300 border-neutral-600",
      ring: "text-neutral-500",
      scoreText: "text-neutral-300",
      emoji: "i",
    },
    "looks-safe": {
      label: "Looks safe",
      imperative: "Nothing to act on here.",
      badge: "bg-transparent text-neutral-400 border-neutral-700",
      ring: "text-neutral-600",
      scoreText: "text-neutral-400",
      emoji: "✓",
    },
  },
  xg = {
    verified: {
      label: "Verified package",
      badge: "bg-white/10 text-white border-white/60",
      emoji: "✓",
    },
    valid: {
      label: "Valid mod package",
      badge: "bg-transparent text-neutral-300 border-neutral-600",
      emoji: "✓",
    },
    unverified: {
      label: "Not a recognised mod package",
      badge: "bg-transparent text-white border-white/70",
      emoji: "?",
    },
    malformed: {
      label: "Malformed package",
      badge: "bg-white text-black border-white font-semibold",
      emoji: "✕",
    },
  },
  yg = {
    official: {
      label: "Published file",
      badge: "bg-transparent text-neutral-300 border-neutral-600",
      emoji: "✓",
    },
    repack: {
      label: "Not the file it says it is",
      badge: "bg-white text-black border-white font-semibold",
      emoji: "✕",
    },
    "oversized-build": {
      label: "Bigger than anything they published",
      badge: "bg-white text-black border-white font-semibold",
      emoji: "✕",
    },
    "unlisted-build": {
      label: "No published copy matches",
      badge: "bg-white/10 text-white border-white/70",
      emoji: "!",
    },
    unpublished: {
      label: "Not on the mod site",
      badge: "bg-transparent text-neutral-400 border-neutral-700",
      emoji: "–",
    },
    "not-checked": {
      label: "Not checked",
      badge: "bg-transparent text-neutral-500 border-neutral-800",
      emoji: "–",
    },
  };
function wg(a) {
  return Math.max(0, Math.min(1, a / 99));
}
function bg(a) {
  switch (a) {
    case "fabric":
      return "Fabric mod";
    case "quilt":
      return "Quilt mod";
    case "forge":
      return "Forge / NeoForge mod";
    case "jar-manifest":
      return "Java archive";
    default:
      return "Unknown";
  }
}
function Sg({ packaging: a }) {
  const i = xg[a.level],
    l = a.signals.filter((u) => u.kind === "positive"),
    c = a.signals.filter((u) => u.kind === "negative");
  return r.jsxs(ot, {
    title: "Is this a real mod?",
    note: `${a.signals.length} checks`,
    children: [
      r.jsxs("span", {
        className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm ${i.badge}`,
        children: [
          r.jsx("span", { "aria-hidden": "true", children: i.emoji }),
          i.label,
        ],
      }),
      r.jsx("p", {
        className: "mt-3 text-sm leading-relaxed text-neutral-300",
        children: a.headline,
      }),
      (c.length > 0 || l.length > 0) &&
        r.jsx("ul", {
          className: "mt-4 space-y-2",
          children: [...c, ...l].map((u) =>
            r.jsxs(
              "li",
              {
                className: "flex gap-2.5 text-sm",
                children: [
                  r.jsx("span", {
                    "aria-hidden": "true",
                    className:
                      u.kind === "positive"
                        ? "text-neutral-500"
                        : "font-bold text-white",
                    children: u.kind === "positive" ? "✓" : "✕",
                  }),
                  r.jsxs("span", {
                    className: "min-w-0",
                    children: [
                      r.jsxs("span", {
                        className: "text-neutral-200",
                        children: [u.label, ". "],
                      }),
                      r.jsx("span", {
                        className: "text-neutral-400",
                        children: u.detail,
                      }),
                    ],
                  }),
                ],
              },
              u.id,
            ),
          ),
        }),
    ],
  });
}
function Eg({ provenance: a }) {
  const i = yg[a.level],
    l =
      a.claimedModId !== void 0
        ? [a.claimedModId, a.claimedVersion].filter(Boolean).join(" ")
        : void 0;
  return r.jsxs(ot, {
    title: "Where this file came from",
    note: a.source,
    emphasis: a.level === "repack" || a.level === "oversized-build",
    children: [
      r.jsxs("span", {
        className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm ${i.badge}`,
        children: [
          r.jsx("span", { "aria-hidden": "true", children: i.emoji }),
          i.label,
        ],
      }),
      r.jsx("p", {
        className: "mt-3 text-sm leading-relaxed text-neutral-300",
        children: mp(a),
      }),
      (a.level === "repack" ||
        a.level === "oversized-build" ||
        a.level === "unlisted-build") &&
        r.jsx("p", {
          className: "mt-3 text-sm leading-relaxed text-neutral-200",
          children:
            "What you can do: download this mod again from its own page, and check that one instead. If the file you get is different from this one, delete this one and keep theirs.",
        }),
      (l !== void 0 ||
        a.publishedAs !== void 0 ||
        a.publishedFileName !== void 0 ||
        a.published !== void 0 ||
        a.versionSeenElsewhere !== void 0 ||
        a.projectUrl !== void 0) &&
        r.jsxs("dl", {
          className:
            "mt-4 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-neutral-900 pt-4 sm:grid-cols-2",
          children: [
            l !== void 0 && r.jsx(Ge, { label: "It says it is", value: l }),
            a.publishedAs !== void 0 &&
              r.jsx(Ge, { label: "Published as", value: a.publishedAs }),
            a.publishedFileName !== void 0 &&
              r.jsx(Ge, {
                label:
                  a.level === "official"
                    ? "Published file name"
                    : "The real file is called",
                value: a.publishedFileName,
                mono: !0,
              }),
            a.published !== void 0 &&
              r.jsx(Ge, {
                label: `Biggest of their ${a.published.fileCount} published files`,
                value: Zn(a.published.largestBytes),
              }),
            a.fileSizeBytes !== void 0 &&
              r.jsx(Ge, { label: "This file", value: Zn(a.fileSizeBytes) }),
            a.versionSeenElsewhere !== void 0 &&
              r.jsx(Ge, {
                label: "That version was released",
                value: `${a.versionSeenElsewhere.releaseName ?? "yes"} (${a.versionSeenElsewhere.source})`,
              }),
            a.projectUrl !== void 0 &&
              r.jsx(Ge, {
                label: "Its own page",
                value: a.projectUrl,
                mono: !0,
              }),
          ],
        }),
      a.level !== "not-checked" &&
        r.jsxs("p", {
          className: "mt-4 text-xs leading-relaxed text-neutral-600",
          children: [
            a.level === "official"
              ? "Only this file's fingerprint was sent to answer this."
              : "Only this file's fingerprint, and then the mod name and version written inside the file itself, were sent to answer this.",
            " ",
            "The file, its name on your computer, where it is kept, and anything about you were not.",
          ],
        }),
    ],
  });
}
const Ac = Object.keys(Ga);
function Ng(a) {
  const i = za[a].title;
  return i.charAt(0).toLowerCase() + i.slice(1);
}
function kg(a, i) {
  return i.length === 0 ? a : Wf(a, i, Ng);
}
function _g(a) {
  const i = a.map((l) => Ga[l].label.toLowerCase());
  return i.length === 0
    ? ""
    : i.length === 1
      ? (i[0] ?? "")
      : `${i.slice(0, -1).join(", ")} and ${i.at(-1)}`;
}
function Ag({ selected: a, onChange: i, busy: l = !1 }) {
  const c = new Set(a),
    u = (m) => {
      i(Ac.filter((f) => (f === m ? !c.has(f) : c.has(f))));
    };
  return r.jsxs(ot, {
    title: "What did you think this was?",
    note: a.length > 0 ? _g(a) : "not answered",
    children: [
      r.jsx("p", {
        className: "text-sm leading-relaxed text-neutral-300",
        children:
          "ModGuard reads every file as if it were a mod. If this one is something else — an installer, a world tool — it has just been marked down for doing that thing’s ordinary work. Say what you thought you were downloading and ModGuard will check the file against that instead.",
      }),
      r.jsx("ul", {
        className: "mt-5 space-y-2",
        children: Ac.map((m) => {
          const f = Ga[m],
            x = c.has(m);
          return r.jsxs(
            "li",
            {
              className:
                "flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4",
              children: [
                r.jsxs("button", {
                  type: "button",
                  "aria-pressed": x,
                  disabled: l,
                  onClick: () => u(m),
                  className: ie({
                    level: x ? "strong" : "standard",
                    size: "sm",
                    extra: "shrink-0 sm:w-56 sm:justify-start",
                  }),
                  children: [
                    r.jsx("span", {
                      "aria-hidden": "true",
                      className: "font-mono text-[10px]",
                      children: x ? "✓" : "+",
                    }),
                    f.label,
                  ],
                }),
                r.jsx("span", {
                  className: "text-sm leading-relaxed text-neutral-400",
                  children: f.describe,
                }),
              ],
            },
            m,
          );
        }),
      }),
      r.jsxs("p", {
        className: "mt-5 text-xs leading-relaxed text-neutral-500",
        children: [
          "Pick more than one if it is more than one thing — plenty of files are. This is a question ModGuard asks in order to check, not a switch that settles anything: nothing you pick here can quiet a finding that is proof rather than capability, and everything the file does that does",
          " ",
          r.jsx("em", {
            className: "not-italic text-neutral-300",
            children: "not",
          }),
          " fit what you say gets named back to you. If somebody else told you which one to pick, what they were steering you past is the sentence you are about to read.",
        ],
      }),
    ],
  });
}
function wh(a) {
  return Zn(a, "short");
}
function bh(a) {
  return a.length <= 20 ? a : `${a.slice(0, 10)}…${a.slice(-6)}`;
}
function Cg(a) {
  const i = new Date(a);
  if (Number.isNaN(i.getTime())) return a;
  const l = i.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }),
    c = i.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });
  return `${l} at ${c} UTC`;
}
function Sh(a) {
  const i = Math.max(0, (Date.now() - new Date(a).getTime()) / 1e3);
  return i < 60
    ? `${Math.floor(i)}s ago`
    : i < 3600
      ? `${Math.floor(i / 60)}m ago`
      : i < 86400
        ? `${Math.floor(i / 3600)}h ago`
        : `${Math.floor(i / 86400)}d ago`;
}
function jg(a, i = {}) {
  var x;
  const l = [];
  (l.push(`ModGuard: ${oh[a.verdict].label} · ${th(a)}`),
    a.modName !== void 0 &&
      l.push(
        `Says it is: ${a.modName}` +
          (a.modVersion !== void 0 ? ` ${a.modVersion}` : ""),
      ),
    l.push(`Risk score: ${a.score}/99`),
    l.push(`Packaging: ${a.packaging.level}`),
    hp(a.provenance) &&
      a.provenance !== void 0 &&
      l.push(
        `Where it came from: ${dh[a.provenance.level].label}` +
          (a.provenance.source !== void 0 ? ` (${a.provenance.source})` : ""),
      ),
    l.push(""),
    l.push(a.summary));
  const c = ((x = a.liveWatch) == null ? void 0 : x.stolen) ?? [];
  if (c.length > 0) {
    (l.push(""), l.push("Caught taking, when run in a fake Minecraft:"));
    for (const v of c) l.push(`  - ${v.label} (${v.ways.join("; ")})`);
  }
  const u = a.findings.filter((v) => v.countsTowardRisk);
  if (u.length > 0) {
    (l.push(""), l.push("What counted against it:"));
    for (const v of u) l.push(`  - ${v.title}`);
  }
  const m = a.findings.filter((v) => !v.countsTowardRisk);
  if (
    (m.length > 0 &&
      (l.push(""),
      l.push(`Noted, not counted: ${m.map((v) => v.title).join("; ")}`)),
    a.community !== void 0 && a.community.reports > 0)
  ) {
    const v = a.community.reports;
    (l.push(""),
      l.push(
        `${v} unverified ${v === 1 ? "report" : "reports"} from other players.`,
      ));
  }
  (l.push(""),
    l.push(`Fingerprint (SHA-256): ${a.fingerprintSha256}`),
    l.push(`Checked: ${Cg(a.checkedAt)}`));
  const f = [
    i.version === void 0 ? null : `ModGuard ${i.version}`,
    i.rulesetDate === void 0 ? null : `rules of ${i.rulesetDate}`,
  ].filter((v) => v !== null);
  return (
    f.length > 0 && l.push(`Checked by: ${f.join(", ")}`),
    l.push(
      "Check it yourself: shasum -a 256 <file> on a Mac, certutil -hashfile <file> SHA256 on Windows. Same number, same file.",
    ),
    l.join(`
`)
  );
}
function Tg({ report: a, onCopy: i, version: l, rulesetDate: c }) {
  const [u, m] = g.useState(null),
    f = (x) => {
      const v =
        x === "hash"
          ? a.fingerprintSha256
          : jg(a, { version: l, rulesetDate: c });
      Promise.resolve(i(v)).then(() => m(x));
    };
  return r.jsxs("div", {
    className: "mt-4 flex flex-wrap items-center gap-x-3 gap-y-2",
    children: [
      r.jsx("span", {
        className: "selectable font-mono text-[11px] text-neutral-500",
        title: a.fingerprintSha256,
        children: bh(a.fingerprintSha256),
      }),
      r.jsx("button", {
        type: "button",
        onClick: () => f("hash"),
        className: ie({ level: "standard", size: "sm" }),
        children: u === "hash" ? "Copied" : "Copy fingerprint",
      }),
      r.jsx("button", {
        type: "button",
        onClick: () => f("summary"),
        className: ie({ level: "standard", size: "sm" }),
        children: u === "summary" ? "Copied" : "Copy for Discord",
      }),
    ],
  });
}
function Rg(a, i, l) {
  const [c, u] = g.useState(a),
    m = g.useRef(null);
  return (
    vh(() => {
      if (!l || a === 0) {
        u(a);
        return;
      }
      u(0);
    }, [a, l]),
    g.useEffect(() => {
      if (!l || a === 0) return;
      const f = performance.now(),
        x = (v) => {
          const E = Math.min(1, (v - f) / i),
            y = 1 - Math.pow(1 - E, 3);
          (u(Math.round(a * y)),
            E < 1 && (m.current = requestAnimationFrame(x)));
        };
      return (
        (m.current = requestAnimationFrame(x)),
        () => {
          (m.current !== null && cancelAnimationFrame(m.current), u(a));
        }
      );
    }, [a, i, l]),
    c
  );
}
function Mg({ score: a, verdict: i }) {
  const l = Ha[i],
    c = 52,
    u = 2 * Math.PI * c,
    m = u * wg(a),
    f = Rg(a, 700, Ur()),
    x = i === "unsafe" && Ur(),
    v = Math.min(m + u * 0.03, u * 0.995);
  return r.jsxs("div", {
    className: "relative h-32 w-32 shrink-0",
    "aria-hidden": "true",
    children: [
      r.jsxs("svg", {
        viewBox: "0 0 120 120",
        className: "h-full w-full -rotate-90",
        children: [
          r.jsx("circle", {
            cx: "60",
            cy: "60",
            r: c,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "8",
            className: "text-neutral-800",
          }),
          r.jsx("circle", {
            cx: "60",
            cy: "60",
            r: c,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeDasharray: `${m} ${u}`,
            style: x
              ? { "--mg-arc-dash": m, "--mg-arc-peak": v, "--mg-arc-circ": u }
              : void 0,
            className: `${l.ring} transition-[stroke-dasharray] duration-700${x ? " mg-arc-overshoot" : ""}`,
          }),
        ],
      }),
      r.jsxs("div", {
        className: "absolute inset-0 flex flex-col items-center justify-center",
        children: [
          r.jsx("span", {
            className: `inline-block min-w-[2ch] text-center font-display text-3xl font-semibold tabular-nums ${l.scoreText}`,
            children: f,
          }),
          r.jsx("span", {
            className: "text-xs text-neutral-500",
            children: "risk / 99",
          }),
        ],
      }),
    ],
  });
}
const Og = {
  unsafe: [
    { d: "M7 7 L17 17", length: 15 },
    { d: "M17 7 L7 17", length: 15 },
  ],
  "be-careful": [
    { d: "M12 6 L12 14", length: 8 },
    { d: "M12 17.6 L12 18", length: 1 },
  ],
  "minor-notes": [
    { d: "M12 6 L12 6.4", length: 1 },
    { d: "M12 10 L12 18", length: 8 },
  ],
  "looks-safe": [{ d: "M6 12.5 L10.5 17 L18 7.5", length: 18 }],
};
function Ig({ verdict: a, size: i = 16 }) {
  const l = Og[a],
    u = `mgSpec-${g.useId().replace(/:/g, "")}`,
    m = a === "looks-safe";
  return r.jsxs("span", {
    className: "inline-flex items-center",
    children: [
      r.jsxs("svg", {
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        "aria-hidden": "true",
        className: "shrink-0",
        children: [
          m &&
            r.jsx("defs", {
              children: r.jsx("mask", {
                id: u,
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "24",
                height: "24",
                children: r.jsx("rect", {
                  className: "mg-verdict-spec",
                  x: "-12",
                  y: "-4",
                  width: "10",
                  height: "32",
                  fill: "#fff",
                }),
              }),
            }),
          l.map((f, x) =>
            r.jsx(
              "path",
              {
                d: f.d,
                className: "mg-draw",
                style: {
                  "--mg-draw-length": String(f.length),
                  animationDelay: `calc(var(--mg-draw-at, 150ms) + ${x * 90}ms)`,
                },
              },
              f.d,
            ),
          ),
          m &&
            l.map((f) =>
              r.jsx(
                "path",
                {
                  d: f.d,
                  className: "mg-verdict-spec-stroke",
                  mask: `url(#${u})`,
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  fill: "none",
                },
                `spec-${f.d}`,
              ),
            ),
        ],
      }),
      r.jsx("span", { className: "sr-only", children: Ha[a].emoji }),
    ],
  });
}
const Cc = "what-counted",
  Dg = "Expected for what you said this is. Shown, but not counted.";
function Lg({
  report: a,
  onReport: i,
  reporting: l,
  reported: c,
  purposes: u,
  onPurposesChange: m,
  purposesBusy: f,
  onCopy: x,
  version: v,
  rulesetDate: E,
}) {
  var $;
  const y = Ha[a.verdict],
    _ = a.findings.filter((K) => K.countsTowardRisk),
    N = new Set((($ = a.purposeCheck) == null ? void 0 : $.explained) ?? []),
    I = a.findings.filter((K) => !K.countsTowardRisk && N.has(K.category)),
    D = a.findings.filter((K) => !K.countsTowardRisk && !N.has(K.category)),
    [T, P] = g.useState("safety");
  return r.jsxs("article", {
    className: "space-y-8",
    children: [
      a.explain &&
        r.jsx("div", {
          role: "tablist",
          "aria-label": "Report view",
          className: "flex gap-1 border-b border-neutral-800",
          children: [
            ["safety", "Safety"],
            ["explain", "What it is"],
          ].map(([K, X]) =>
            r.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": T === K,
                onClick: () => P(K),
                className: [
                  "-mb-px border-b-2 px-4 py-2 text-sm transition-colors",
                  T === K
                    ? "border-white text-neutral-50"
                    : "border-transparent text-neutral-500 hover:text-neutral-300",
                ].join(" "),
                children: X,
              },
              K,
            ),
          ),
        }),
      a.explain && T === "explain"
        ? r.jsx(tg, { explanation: a.explain })
        : r.jsx(Pg, {
            report: a,
            style: y,
            counted: _,
            expected: I,
            noted: D,
            onReport: i,
            reporting: l,
            reported: c,
            purposes: u,
            onPurposesChange: m,
            purposesBusy: f,
            onCopy: x,
            version: v,
            rulesetDate: E,
          }),
    ],
  });
}
function Pg({
  report: a,
  style: i,
  counted: l,
  expected: c,
  noted: u,
  onReport: m,
  reporting: f,
  reported: x,
  purposes: v,
  onPurposesChange: E,
  purposesBusy: y,
  onCopy: _,
  version: N,
  rulesetDate: I,
}) {
  const D = g.useMemo(() => Cf(a), [a]),
    T = rh(a.liveWatch) || Gr(a.liveWatch).length > 0,
    P = T || a.verdict === "unsafe" || a.verdict === "be-careful",
    $ = g.useMemo(() => Np(a), [a]),
    K = Gl();
  return r.jsxs("div", {
    className: "space-y-8",
    children: [
      $ !== null &&
        r.jsxs("section", {
          "aria-labelledby": "mg-kind",
          "data-kind": $.kind,
          className: "border-b border-neutral-800 pb-6",
          children: [
            r.jsx("p", {
              className: "text-xs uppercase tracking-[0.2em] text-neutral-500",
              children:
                $.kind === "vulnerability"
                  ? K("ui.kind.found", "What was found")
                  : K("ui.kind.what", "What this is"),
            }),
            r.jsx("h2", {
              id: "mg-kind",
              className:
                "font-display mt-2 text-4xl font-semibold leading-none tracking-tight text-neutral-50 sm:text-6xl",
              children: K(Rt.kind($.label), $.label),
            }),
            r.jsx("p", {
              className:
                "mt-3 max-w-2xl text-sm leading-relaxed text-neutral-300",
              children: K(`${Rt.kind($.label)}.basis`, $.basis),
            }),
            r.jsx("p", {
              className:
                "mt-2 max-w-2xl text-xs leading-relaxed text-neutral-500",
              children: K("ui.kind.notAFamilyName", yp),
            }),
          ],
        }),
      r.jsx(pg, { tree: D, autoSpin: !0 }),
      r.jsxs("header", {
        "data-verdict": a.verdict,
        className:
          "mg-signal mg-verdict flex flex-col gap-6 sm:flex-row sm:items-start",
        children: [
          r.jsx(Mg, { score: a.score, verdict: a.verdict }),
          r.jsxs("div", {
            className: "min-w-0 flex-1",
            children: [
              r.jsx("p", {
                className:
                  "font-display text-2xl font-semibold leading-tight tracking-tight text-neutral-50",
                children: K(Rt.verdict(a.verdict, "imperative"), i.imperative),
              }),
              r.jsxs("div", {
                className: "mt-3 flex flex-wrap items-baseline gap-3",
                children: [
                  r.jsxs("span", {
                    className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm ${i.badge}`,
                    children: [
                      r.jsx(Ig, { verdict: a.verdict }),
                      K(Rt.verdict(a.verdict, "label"), i.label),
                    ],
                  }),
                  a.fileName !== void 0 &&
                    r.jsx("h1", {
                      title: a.fileName,
                      className:
                        "min-w-0 break-all font-mono text-[13px] text-neutral-50",
                      children: a.fileName,
                    }),
                ],
              }),
              a.modName !== void 0 &&
                r.jsxs("p", {
                  className:
                    "mt-1.5 text-[13px] leading-relaxed text-neutral-400",
                  children: [
                    "says it is",
                    " ",
                    r.jsx("span", {
                      className: "break-all text-neutral-200",
                      children: a.modName,
                    }),
                    a.modVersion !== void 0 &&
                      r.jsx("span", {
                        className:
                          "ml-1.5 break-all font-mono text-xs text-neutral-500",
                        children: a.modVersion,
                      }),
                  ],
                }),
              r.jsx("p", {
                className: "mt-3 text-[15px] leading-relaxed text-neutral-200",
                children: a.summary,
              }),
              l.length > 0 &&
                r.jsxs("a", {
                  href: `#${Cc}`,
                  className:
                    "mt-4 inline-flex items-center gap-2 rounded border border-neutral-600 px-3 py-1.5 text-[13px] text-neutral-200 transition-colors hover:border-white hover:text-white focus-visible:border-white focus-visible:text-white",
                  children: [
                    "Read what is wrong with it",
                    r.jsx("span", {
                      "aria-hidden": "true",
                      className: "font-mono text-neutral-500",
                      children: l.length,
                    }),
                    r.jsx("span", { "aria-hidden": "true", children: "↓" }),
                  ],
                }),
              _ !== void 0 &&
                r.jsx(Tg, { report: a, onCopy: _, version: N, rulesetDate: I }),
            ],
          }),
        ],
      }),
      a.purposeCheck &&
        r.jsxs("section", {
          "aria-label": "What you said this is",
          className: "border-l-2 border-white pl-5",
          children: [
            r.jsx("h2", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400",
              children: "You said what this is. ModGuard checked.",
            }),
            r.jsx("p", {
              className: "mt-3 text-base leading-relaxed text-neutral-100",
              children: a.purposeCheck.headline,
            }),
            r.jsx("p", {
              className: "mt-3 text-xs leading-relaxed text-neutral-500",
              children:
                "The score above was worked out again with the findings that fit what you said left out of the sum. Nothing about the file changed, and nothing here was checked a second time — this is the same report, counted differently because of what you told it.",
            }),
          ],
        }),
      E &&
        (a.verdict !== "looks-safe" ||
          ((v == null ? void 0 : v.length) ?? 0) > 0) &&
        r.jsx(Ag, { selected: v ?? [], onChange: E, busy: y ?? !1 }),
      a.community && r.jsx(Qp, { community: a.community }),
      a.liveWatch && r.jsx(cg, { liveWatch: a.liveWatch }),
      l.length > 0
        ? r.jsx(ot, {
            id: Cc,
            title: "What counted against it",
            note: `${l.length} ${l.length === 1 ? "finding" : "findings"}`,
            children: r.jsx("ul", {
              className: "mg-stagger space-y-3",
              children: l.map((X) => r.jsx(hl, { finding: X }, X.category)),
            }),
          })
        : r.jsx(ot, {
            title: "Findings",
            note: P ? "read the panels above" : "nothing counted",
            children: r.jsx("p", {
              className: "text-sm leading-relaxed text-neutral-400",
              children: T
                ? "Reading this file's code found nothing to count on its own. The verdict above does not come from this list. It comes from what the mod did when ModGuard ran it, which is written out in full further up the page."
                : P
                  ? "Reading this file's code found nothing to count on its own. The verdict above comes from the panels higher up this page: how the file is put together, and whether it is the copy its team published. It does not come from anything in this list."
                  : c.length > 0
                    ? "Everything ModGuard found is something what you said this is would need. It is all listed below, in full: nothing was found and then hidden."
                    : u.length === 0
                      ? `ModGuard read this mod's description and all ${a.classCount} of its code ${a.classCount === 1 ? "file" : "files"}, and none of the risky behaviours it checks for were found.` +
                        (a.namesOnlyCount > 0
                          ? ` The other ${a.namesOnlyCount === 1 ? "file" : `${a.namesOnlyCount} files`} in the archive ${a.namesOnlyCount === 1 ? "was" : "were"} listed by name but not opened.`
                          : "") +
                        " No check is a guarantee, but nothing here raised a flag."
                      : "Everything ModGuard noticed is ordinary for a properly packaged mod. It is all listed below so you can see it, but none of it counted against this mod.",
            }),
          }),
      c.length > 0 &&
        r.jsxs(ot, {
          title: "Expected for what you said this is",
          note: `${c.length} ${c.length === 1 ? "finding" : "findings"}`,
          children: [
            r.jsx("p", {
              className: "mb-4 text-sm leading-relaxed text-neutral-400",
              children:
                "Still here, and still true of this file. They stopped counting because they fit what you said this is — which is a much smaller claim than “there is nothing wrong with them”, and it rests entirely on your answer being the right one. If you are not certain that is what you downloaded, read them as though you had said nothing.",
            }),
            r.jsx("ul", {
              className: "space-y-3",
              children: c.map((X) =>
                r.jsx(hl, { finding: X, note: Dg }, X.category),
              ),
            }),
          ],
        }),
      r.jsxs("details", {
        className: "mg-nerds group border-t border-neutral-900 pt-6",
        children: [
          r.jsxs("summary", {
            className:
              "flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-200",
            children: [
              r.jsx("span", {
                "aria-hidden": "true",
                className: "mg-nerds-chevron font-mono text-neutral-600",
                children: "›",
              }),
              "Stats for nerds",
              r.jsx("span", {
                className: "font-mono text-[11px] text-neutral-600",
                children: "connections, packaging, fingerprint, code shape",
              }),
            ],
          }),
          r.jsxs("div", {
            className: "mt-6 space-y-8 rounded bg-well p-5",
            children: [
              r.jsx(Zp, { endpoints: a.endpoints }),
              a.provenance && r.jsx(Eg, { provenance: a.provenance }),
              r.jsx(Sg, { packaging: a.packaging }),
              r.jsxs(ot, {
                title: "The file",
                children: [
                  r.jsxs("dl", {
                    className:
                      "grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4",
                    children: [
                      a.fileName !== void 0 &&
                        r.jsx(Ge, { label: "Name", value: a.fileName }),
                      r.jsx(Ge, { label: "Size", value: wh(a.fileSizeBytes) }),
                      r.jsx(Ge, { label: "Files", value: String(a.fileCount) }),
                      r.jsx(Ge, {
                        label: "Code files",
                        value: String(a.classCount),
                      }),
                      a.manifestSource !== void 0 &&
                        r.jsx(Ge, {
                          label: "Type",
                          value: bg(a.manifestSource),
                        }),
                      a.codeBreakdown.javaVersion !== null &&
                        r.jsx(Ge, {
                          label: "Built for",
                          value: a.codeBreakdown.javaVersion,
                        }),
                      a.modId !== void 0 &&
                        r.jsx(Ge, { label: "Mod id", value: a.modId }),
                      a.dependencies.length > 0 &&
                        r.jsx(Ge, {
                          label: "Depends on",
                          value: a.dependencies.join(", "),
                        }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "mt-5 border-t border-neutral-900 pt-3",
                    children: [
                      r.jsx("dt", {
                        className:
                          "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
                        children: "Fingerprint (SHA-256)",
                      }),
                      r.jsx("dd", {
                        className:
                          "selectable mt-1 break-all font-mono text-xs text-neutral-400",
                        children: a.fingerprintSha256,
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs(ot, {
                title: "What its code does",
                note:
                  a.codeBreakdown.capabilities.length > 0
                    ? `${a.codeBreakdown.capabilities.length} capabilities`
                    : void 0,
                children: [
                  r.jsx("p", {
                    className: "text-sm leading-relaxed text-neutral-300",
                    children: a.codeBreakdown.summary,
                  }),
                  a.codeBreakdown.capabilities.length > 0 &&
                    r.jsx("ul", {
                      className: "mt-4 divide-y divide-neutral-900",
                      children: a.codeBreakdown.capabilities.map((X) =>
                        r.jsxs(
                          "li",
                          {
                            className: "flex items-baseline gap-4 py-2 text-sm",
                            children: [
                              r.jsx("span", {
                                className: "w-40 shrink-0 text-neutral-200",
                                children: X.label,
                              }),
                              r.jsx("span", {
                                className: "min-w-0 flex-1 text-neutral-500",
                                children: X.description,
                              }),
                              r.jsx("span", {
                                className:
                                  "shrink-0 font-mono text-xs tabular-nums text-neutral-600",
                                children: X.fileCount,
                              }),
                            ],
                          },
                          X.key,
                        ),
                      ),
                    }),
                ],
              }),
              u.length > 0 &&
                r.jsxs(ot, {
                  title: "Noted, not counted",
                  note: `${u.length} ${u.length === 1 ? "note" : "notes"}`,
                  children: [
                    r.jsx("p", {
                      className:
                        "mb-4 text-sm leading-relaxed text-neutral-500",
                      children:
                        "Ordinary things mods do. Shown because you should be able to see everything ModGuard saw, not because they are a problem here.",
                    }),
                    r.jsx("ul", {
                      className: "space-y-3",
                      children: u.map((X) =>
                        r.jsx(hl, { finding: X }, X.category),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      m &&
        r.jsx(ot, {
          title: "Report",
          children: r.jsx(xh, { onReport: m, reporting: f, reported: x }),
        }),
    ],
  });
}
function zl(a) {
  return a.status === "off"
    ? "off"
    : a.status === "unavailable" || a.status === "down"
      ? "unreachable"
      : a.status === "connecting"
        ? "connecting"
        : a.serverIsEmpty || a.lastScanAt === null
          ? "empty"
          : a.scans.length === 0
            ? "quiet"
            : "flowing";
}
const Eh = {
    off: { headline: "Off. Nothing is being received." },
    unreachable: {
      headline:
        "No stream. Nothing will appear here until the service is answering.",
    },
    connecting: {
      headline:
        "No stream. Nothing will appear here until the service is answering.",
    },
    empty: {
      headline:
        "Connected, and no mod has been checked yet. Rows appear the moment one is.",
    },
    quiet: {
      headline:
        "Connected, and no mod has been checked yet. Rows appear the moment one is.",
    },
    flowing: { headline: "" },
  },
  pl = {
    off: {
      headline: "Shared checks: off. ModGuard isn't connecting to anything.",
      detail: "Receives only. Nothing about you is sent.",
    },
    unreachable: {
      headline: "Not connected.",
      detail: "Your own checking is local and unaffected.",
    },
    connecting: {
      headline: "Connecting…",
      detail: "Your own checking is local and unaffected either way.",
    },
    empty: {
      headline: "Connected. Nothing shared yet.",
      detail:
        "The service is answering and has never recorded one. The first to arrive appears here.",
    },
    quiet: {
      headline: "Connected. Nothing shared recently.",
      detail:
        "These are checks people chose to share. Nothing here is about who ran them.",
    },
    flowing: { headline: "" },
  },
  Ug =
    "These are checks people chose to share. Nothing here is about who ran them: the service has no column for that.";
function qg(a, i, l) {
  const c = new Set(i.map((m) => m.id)),
    u = a.filter((m) => (c.has(m.id) ? !1 : (c.add(m.id), !0)));
  return u.length === 0
    ? i
    : [...u, ...i].sort((m, f) => f.seq - m.seq).slice(0, l);
}
const Gg = {
    console: {
      visible: 50,
      height: "max-h-[22rem]",
      filters: !0,
      hold: !0,
      expandable: !0,
      ownLiveness: !1,
      wide: !0,
    },
    page: {
      visible: 24,
      height: "max-h-[16rem]",
      filters: !1,
      hold: !1,
      expandable: !0,
      ownLiveness: !1,
      wide: !0,
    },
    glance: {
      visible: 6,
      height: "max-h-[12rem]",
      filters: !1,
      hold: !1,
      expandable: !1,
      ownLiveness: !0,
      wide: !1,
    },
  },
  zg = { "looks-safe": 0, "minor-notes": 1, "be-careful": 2, unsafe: 3 },
  Hg = {
    unsafe: "font-semibold text-white",
    "be-careful": "text-neutral-100",
    "minor-notes": "text-neutral-400",
    "looks-safe": "text-neutral-500",
  },
  Bg = { all: 0, "be-careful": 2, unsafe: 3 },
  jc = 4,
  Fg = 24,
  $g = 6;
function Nh(a) {
  const [, i] = g.useState(0);
  g.useEffect(() => {
    const l = setInterval(() => i((c) => c + 1), a);
    return () => clearInterval(l);
  }, [a]);
}
function Wg(a) {
  switch (a.status) {
    case "live":
      return "live";
    case "off":
      return "off";
    case "unavailable":
      return "unavailable";
    case "down":
      return "down";
    case "connecting":
      return a.lastFrameAt === null ? "connecting" : "reconnecting";
  }
}
function kh({
  feed: a,
  copy: i = Eh,
  endpoint: l,
  action: c,
  density: u = "console",
}) {
  Nh(5e3);
  const m = zl(a),
    f = a.status === "live",
    x = a.lastFrameAt !== null,
    v = r.jsx("span", {
      "aria-hidden": "true",
      className: f ? "text-neutral-100" : "text-neutral-700",
      children: f ? "●" : "○",
    }),
    E = a.status === "connecting" ? "mg-breathe" : "";
  return u === "glance" && m !== "flowing"
    ? r.jsxs("p", {
        className:
          "flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-neutral-400",
        children: [
          r.jsx("span", { className: E, children: v }),
          r.jsx("span", { className: "min-w-0", children: i[m].headline }),
          c,
        ],
      })
    : r.jsxs("p", {
        className:
          "flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-neutral-500",
        children: [
          r.jsx("span", { className: E, children: v }),
          r.jsx("span", {
            className: f ? "text-neutral-300" : "text-neutral-400",
            children: Wg(a),
          }),
          l !== void 0 &&
            !f &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx("span", { "aria-hidden": "true", children: "·" }),
                r.jsxs("span", { children: ["nothing answering at ", l] }),
              ],
            }),
          r.jsx("span", { "aria-hidden": "true", children: "·" }),
          x
            ? r.jsxs("span", {
                children: ["last event ", Kg(a.lastFrameAt ?? 0)],
              })
            : r.jsx("span", { children: "no contact yet" }),
          x &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx("span", { "aria-hidden": "true", children: "·" }),
                r.jsx("span", {
                  children:
                    a.lastScanAt === null
                      ? "no mods checked yet"
                      : `${a.scansLast24h} in the last 24 hours`,
                }),
              ],
            }),
          a.protocolMismatch &&
            r.jsx("span", {
              className: "text-neutral-300",
              children:
                "· the service is speaking a newer stream format than this build reads",
            }),
          c,
        ],
      });
}
function Kg(a) {
  const i = Math.max(0, Math.round((Date.now() - a) / 1e3));
  return i < 60
    ? `${i}s ago`
    : i < 3600
      ? `${Math.floor(i / 60)}m ago`
      : `${Math.floor(i / 3600)}h ago`;
}
function Vg({
  feed: a,
  holdRef: i,
  density: l = "console",
  visible: c,
  copy: u = Eh,
  onLookup: m,
  footer: f,
  action: x,
  collapsed: v = !1,
  onToggleCollapsed: E,
}) {
  var te;
  const y = Gg[l],
    _ = c ?? y.visible,
    N = y.expandable && m !== void 0,
    [I, D] = g.useState(!1),
    [T, P] = g.useState(!1),
    [$, K] = g.useState(!1),
    [X, se] = g.useState(null),
    [fe, z] = g.useState("all"),
    [q, ue] = g.useState("all"),
    _e = g.useRef(null);
  Nh(3e4);
  const Se = I || T || $ || X !== null;
  g.useEffect(() => {
    i.current = Se;
  });
  const Te = g.useCallback(() => {
      var Y;
      (a.release(), (Y = _e.current) == null || Y.scrollTo({ top: 0 }));
    }, [a]),
    Re = g.useRef(Se);
  g.useEffect(() => {
    (Re.current && !Se && !I && Te(), (Re.current = Se));
  }, [Se, I, Te]);
  const Ae = g.useRef(null),
    ye = g.useRef(0),
    ve = g.useRef([]),
    pe = ((te = a.scans[0]) == null ? void 0 : te.id) ?? null;
  if (pe !== Ae.current) {
    const Y = Ae.current,
      me = Y === null ? -1 : a.scans.findIndex((ft) => ft.id === Y);
    ((ye.current = me < 0 ? a.scans.length : me), (Ae.current = pe));
    const Ne = Date.now();
    ve.current = ve.current.filter((ft) => Ne - ft < 1e3);
    for (let ft = 0; ft < ye.current; ft += 1) ve.current.push(Ne);
  }
  const [he, k] = g.useState(!1);
  (g.useEffect(() => {
    !he && ve.current.length > jc && k(!0);
  }),
    g.useEffect(() => {
      if (!he) return;
      const Y = setInterval(() => {
        const me = Date.now();
        ((ve.current = ve.current.filter((Ne) => me - Ne < 1e3)),
          ve.current.length <= jc && k(!1));
      }, 250);
      return () => clearInterval(Y);
    }, [he]));
  const [U, L] = g.useState(!1);
  g.useEffect(() => {
    if (U || a.scans.length === 0) return;
    const Y = setTimeout(() => L(!0), 0);
    return () => clearTimeout(Y);
  }, [U, a.scans.length]);
  const w = U && !he && ye.current >= 2,
    M = a.scans
      .filter((Y) => !y.filters || zg[Y.verdict] >= Bg[fe])
      .filter((Y) => !y.filters || q === "all" || Y.origin === q)
      .slice(0, _),
    Q = zl(a),
    re = M.length === 0 && a.scans.length > 0,
    V = a.scans.filter((Y) => Y.stolen.length > 0).length,
    O = r.jsxs(r.Fragment, {
      children: [
        a.gapped &&
          r.jsx("p", {
            className: "mt-3 text-xs text-neutral-500",
            children:
              "The stream resumed past a gap — some events between the last one this page saw and the oldest the service still keeps are not listed. The registry itself is complete; only this window is.",
          }),
        r.jsxs("div", {
          className: "relative",
          children: [
            a.waiting > 0 &&
              r.jsxs("button", {
                type: "button",
                onClick: Te,
                className:
                  "absolute inset-x-0 top-3 z-10 cursor-pointer border-l-2 border-white bg-neutral-950 px-3 py-2 text-left text-xs text-neutral-200 shadow-[0_1px_0_0_rgb(38,38,38)] hover:bg-neutral-900",
                children: [
                  r.jsxs("strong", {
                    className: "font-semibold",
                    children: [a.waiting, " new"],
                  }),
                  " · click to show",
                ],
              }),
            r.jsx("div", {
              ref: _e,
              "data-settled": U ? "true" : "false",
              "data-flooding": he ? "true" : "false",
              onScroll: (Y) => K(Y.currentTarget.scrollTop > 4),
              onPointerEnter: () => P(!0),
              onPointerLeave: () => P(!1),
              className: `mg-scan-list mt-3 overflow-y-auto border-t border-neutral-900 ${y.height}`,
              children:
                M.length === 0
                  ? re
                    ? r.jsx("p", {
                        className: "py-4 text-sm text-neutral-500",
                        children:
                          "Nothing matches those filters. Widen them — every check this page has seen is still held.",
                      })
                    : r.jsxs("div", {
                        className: "py-4",
                        children: [
                          r.jsx("p", {
                            className: "text-sm text-neutral-400",
                            children: u[Q].headline,
                          }),
                          u[Q].detail !== void 0 &&
                            r.jsx("p", {
                              className:
                                "mt-1.5 max-w-prose text-xs text-neutral-500",
                              children: u[Q].detail,
                            }),
                        ],
                      })
                  : r.jsx("ul", {
                      className: "divide-y divide-neutral-900",
                      children: M.map((Y, me) =>
                        r.jsx(
                          Qg,
                          {
                            scan: Y,
                            newest: me === 0,
                            wide: y.wide,
                            delayMs:
                              w && me < ye.current
                                ? Math.min(me, $g - 1) * Fg
                                : void 0,
                            ...(N
                              ? {
                                  open: X === Y.id,
                                  onToggle: () =>
                                    se((Ne) => (Ne === Y.id ? null : Y.id)),
                                  onLookup: m,
                                }
                              : {}),
                          },
                          Y.id,
                        ),
                      ),
                    }),
            }),
          ],
        }),
      ],
    });
  return l === "glance"
    ? r.jsxs("section", {
        "aria-label": "Live checks",
        className: "border-t border-neutral-800 px-1 py-3",
        children: [
          r.jsxs("div", {
            className: "flex flex-wrap items-center gap-x-3 gap-y-1",
            children: [
              r.jsx("div", {
                className: "min-w-0 flex-1",
                children: r.jsx(kh, {
                  feed: a,
                  copy: u,
                  action: x,
                  density: "glance",
                }),
              }),
              E !== void 0 &&
                r.jsx("button", {
                  type: "button",
                  onClick: E,
                  "aria-expanded": !v,
                  className:
                    "mg-scan-toggle cursor-pointer border border-neutral-800 px-2 py-0.5 font-mono text-[11px] text-neutral-500 transition-colors hover:border-neutral-600 hover:text-neutral-300",
                  children: v ? "show" : "hide",
                }),
            ],
          }),
          !v && O,
          r.jsxs("div", {
            className:
              "mt-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
            children: [
              r.jsxs("p", {
                className: "min-w-0 text-[11px] text-neutral-600",
                children: [
                  Ug,
                  a.scans.length >= 2 &&
                    r.jsxs(r.Fragment, {
                      children: [
                        " ",
                        V === 0
                          ? `None of the last ${a.scans.length} were caught taking anything.`
                          : `${V} of the last ${a.scans.length} were caught taking something.`,
                      ],
                    }),
                ],
              }),
              f,
            ],
          }),
        ],
      })
    : r.jsxs("section", {
        className: "mt-12",
        children: [
          r.jsx(eg, {
            title: "Live",
            note:
              a.scans.length === 0
                ? "nothing yet"
                : `${a.scans.length} held · newest ${M.length} shown`,
          }),
          y.filters &&
            r.jsxs("div", {
              className:
                "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-neutral-600",
              children: [
                r.jsx(Tc, {
                  label: "verdict",
                  value: fe,
                  options: [
                    ["all", "all"],
                    ["be-careful", "be careful and worse"],
                    ["unsafe", "unsafe only"],
                  ],
                  onChange: z,
                }),
                r.jsx(Tc, {
                  label: "from",
                  value: q,
                  options: [
                    ["all", "all"],
                    ["desktop", "desktop"],
                    ["web", "web"],
                    ["discord", "discord"],
                  ],
                  onChange: ue,
                }),
                y.hold &&
                  r.jsx("button", {
                    type: "button",
                    onClick: () => D((Y) => !Y),
                    "aria-pressed": I,
                    className: `ml-auto cursor-pointer border px-2 py-0.5 transition-colors ${I ? "border-neutral-500 text-neutral-200" : "border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300"}`,
                    children: I ? `Hold · ${a.waiting} waiting` : "Hold",
                  }),
              ],
            }),
          O,
          r.jsxs("div", {
            className:
              "mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
            children: [
              r.jsxs("p", {
                className: "max-w-3xl text-xs text-neutral-600",
                children: [
                  "One line per contributed check, of a file. There is nothing here about who ran it, from where, or on what machine — the service has no column for any of that.",
                  y.filters
                    ? " Filters only hide; every check this page has seen is still held, and widening a filter brings it back."
                    : "",
                  N
                    ? " Open a row to ask the registry what else is known about that fingerprint."
                    : "",
                ],
              }),
              f,
            ],
          }),
        ],
      });
}
function Tc({ label: a, value: i, options: l, onChange: c }) {
  return r.jsxs("span", {
    className: "flex flex-wrap items-center gap-2",
    children: [
      r.jsx("span", { className: "uppercase tracking-[0.15em]", children: a }),
      l.map(([u, m]) =>
        r.jsx(
          "button",
          {
            type: "button",
            onClick: () => c(u),
            "aria-pressed": i === u,
            className: `cursor-pointer border px-2 py-0.5 transition-colors ${i === u ? "border-neutral-500 text-neutral-200" : "border-transparent text-neutral-600 hover:border-neutral-700 hover:text-neutral-400"}`,
            children: m,
          },
          u,
        ),
      ),
    ],
  });
}
function Yg({ verdict: a }) {
  const i = Ha[a];
  return r.jsxs("span", {
    className: `inline-flex w-28 shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] ${Hg[a]}`,
    children: [
      r.jsx("span", { "aria-hidden": "true", children: i.emoji }),
      i.label,
    ],
  });
}
function Qg({
  scan: a,
  newest: i,
  wide: l,
  delayMs: c,
  open: u = !1,
  onToggle: m,
  onLookup: f,
}) {
  const x = m !== void 0 && f !== void 0,
    v = r.jsxs(r.Fragment, {
      children: [
        r.jsx(Yg, { verdict: a.verdict }),
        r.jsx("span", {
          className: "font-mono text-xs text-neutral-400",
          children: bh(a.fingerprint),
        }),
        l &&
          r.jsx("span", {
            className: "font-mono text-[11px] tabular-nums text-neutral-500",
            children: a.score,
          }),
        l &&
          r.jsxs("span", {
            className: "font-mono text-[11px] text-neutral-600",
            children: [a.origin, a.fromCommunity ? " · community" : ""],
          }),
        a.stolen.length > 0 &&
          r.jsx("span", {
            className:
              "font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-100",
            title: a.stolen.join(", "),
            children: "caught",
          }),
        a.attested === "client" &&
          r.jsx("span", {
            className:
              "border border-neutral-800 px-1.5 py-px font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-500",
            title:
              "An install asserted this. ModGuard did not read the file itself.",
            children: "asserted",
          }),
        a.firstSeen &&
          r.jsx("span", {
            className:
              "font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-500",
            children: "first seen",
          }),
        r.jsx("span", {
          className: "ml-auto font-mono text-[11px] text-neutral-600",
          children: Sh(a.at),
        }),
      ],
    });
  return r.jsxs("li", {
    className: `mg-scan-row border-l pl-3 ${i ? "border-white" : "border-transparent"}`,
    ...(c === void 0 ? {} : { style: { animationDelay: `${c}ms` } }),
    children: [
      x
        ? r.jsx("button", {
            type: "button",
            onClick: m,
            "aria-expanded": u,
            className:
              "flex w-full cursor-pointer flex-wrap items-center gap-x-3 gap-y-1 py-2.5 pr-1 text-left hover:bg-neutral-950",
            children: v,
          })
        : r.jsx("div", {
            className:
              "flex w-full flex-wrap items-center gap-x-3 gap-y-1 py-2.5 pr-1 text-left",
            children: v,
          }),
      x && u && f !== void 0 && r.jsx(Xg, { scan: a, onLookup: f }),
    ],
  });
}
function Xg({ scan: a, onLookup: i }) {
  const [l, c] = g.useState("loading");
  g.useEffect(() => {
    let v = !0;
    return (
      i(a.fingerprint)
        .then((E) => {
          v && c(E);
        })
        .catch(() => {
          v && c("error");
        }),
      () => {
        v = !1;
      }
    );
  }, [a.fingerprint, i]);
  const u = typeof l == "object" && l !== null ? l : null,
    m = u === null ? null : dp(u, "community"),
    f = u === null ? a.behaviours : Jg(u),
    x = m === null ? a.stolen : m.stolen;
  return r.jsx("div", {
    className: "border-t border-neutral-900 py-3 pr-1 text-xs",
    children: r.jsxs("dl", {
      className: "grid gap-x-6 gap-y-2 sm:grid-cols-2",
      children: [
        r.jsx(Cn, {
          label: "Fingerprint",
          children: r.jsx("span", {
            className: "break-all font-mono text-[11px] text-neutral-400",
            children: a.fingerprint,
          }),
        }),
        r.jsx(Cn, {
          label: "Scanned",
          children: r.jsx("span", {
            className: "font-mono text-[11px] text-neutral-400",
            children: a.at,
          }),
        }),
        r.jsx(Cn, {
          label: "Caught taking",
          children:
            x.length > 0
              ? r.jsx("span", {
                  className: "text-neutral-100",
                  children: x.join(", "),
                })
              : r.jsx("span", {
                  className: "text-neutral-600",
                  children: "nothing was seen leaving",
                }),
        }),
        r.jsx(Cn, {
          label: "Behaviours",
          children:
            f.length > 0
              ? r.jsx("span", {
                  className: "font-mono text-[11px] text-neutral-400",
                  children: f.join(" "),
                })
              : r.jsx("span", {
                  className: "text-neutral-600",
                  children: "none",
                }),
        }),
        r.jsx(Cn, {
          label: "Seen by",
          children: r.jsxs("span", {
            className: "font-mono text-[11px] tabular-nums text-neutral-400",
            children: [
              ((m == null ? void 0 : m.timesSeen) ?? a.timesSeen).toString(),
              " people",
            ],
          }),
        }),
        r.jsx(Cn, {
          label: "Reports",
          children: r.jsxs("span", {
            className: "font-mono text-[11px] tabular-nums text-neutral-400",
            children: [
              ((m == null ? void 0 : m.reports) ?? a.reportCount).toString(),
              " · unverified",
            ],
          }),
        }),
        r.jsx(Cn, {
          label: "Evidence",
          children: r.jsx("span", {
            className: "text-neutral-400",
            children: a.provenBad
              ? "ModGuard reproduced this itself."
              : a.attested === "client"
                ? "An install asserted this; the service did not read the file."
                : "The service read the file.",
          }),
        }),
        r.jsxs(Cn, {
          label: "Registry",
          children: [
            l === "loading" &&
              r.jsx("span", {
                className: "text-neutral-600",
                children: "asking…",
              }),
            l === "error" &&
              r.jsx("span", {
                className: "text-neutral-500",
                children:
                  "couldn’t reach the registry — the figures above are the stream’s own",
              }),
            l === null &&
              r.jsx("span", {
                className: "text-neutral-500",
                children: "no entry for this fingerprint any more",
              }),
            m !== null &&
              r.jsxs("span", {
                className: "font-mono text-[11px] text-neutral-400",
                children: [
                  "first seen",
                  " ",
                  m.firstSeen === void 0 ? "—" : Sh(m.firstSeen),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
function Jg(a) {
  try {
    const i = JSON.parse(a.behaviorSummary);
    return Array.isArray(i) ? i.filter((l) => typeof l == "string") : [];
  } catch {
    return [];
  }
}
function Cn({ label: a, children: i }) {
  return r.jsxs("div", {
    children: [
      r.jsx("dt", {
        className:
          "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
        children: a,
      }),
      r.jsx("dd", { className: "mt-0.5", children: i }),
    ],
  });
}
const tt = {
    mods: 614,
    warnedBefore: 30,
    warnedAfter: 20,
    rootCausedAsOurs: 29,
    improved: 17,
    worse: 0,
    when: "August 2026",
  },
  gl = { specimens: 42, knownGood: 25 },
  Zg = "0 0 80 100",
  ls =
    "M39.6 3Q26.2 11.5 19.6 14.4Q13 17.3 8.2 18.5L3.4 19.6L2.5 21.9Q3.2 23.7 3.2 35.4Q3.1 47 5.1 54.4Q7.1 61.7 8.8 65.6Q10.5 69.6 14.4 75.6Q18.3 81.5 24.5 87L30.6 92.6Q33.8 92.8 36 94.2Q38.2 95.6 39.7 95.7L41.1 95.8Q46.2 92.8 48 92.6L49.7 92.4Q55.4 87.8 59.6 83.3Q63.9 78.8 67 73.7Q70 68.6 72.2 63Q74.3 57.3 75.6 52.2Q76.9 47 76.8 35.4Q76.8 23.7 77.2 22.1L77.5 20.5Q75.7 19.3 71.4 18.3Q67 17.3 63.8 16Q60.7 14.8 54.8 11.8Q49 8.7 45.4 6.1Q41.9 3.5 40.8 3.2Z",
  ev =
    "M39.6 10.2Q34.2 14.1 29.7 16.6Q25.2 19.1 17.4 22.1L9.6 25.1Q9.4 45.6 11.9 54.2Q14.4 62.9 17.6 68.6Q20.7 74.4 22 76.1Q23.4 77.8 27.7 81.8Q32 85.9 34.2 86.4Q36.3 87 38.3 88L40.4 89.1Q43.7 87 45.8 86.4Q48 85.9 49.8 84.3Q51.7 82.7 55.2 78.9Q58.7 75.1 61.4 70.6Q64.2 66.1 66.2 60.9Q68.1 55.7 69.4 50.7Q70.6 45.6 70.6 35.6L70.6 25.6L69.7 24.6Q63.5 22.8 59.2 21Q54.8 19.1 47.2 14.6Z",
  jn =
    "M18.6 29.5L19.5 44.9L20.4 46L20.6 60.4L25.7 65.9L26.4 65.6L27.1 43.7L28.5 44.2L38.8 52.5L41.6 52.3L51.5 44.2L52.9 43.7L53.8 65.9L58.7 61.7L59.4 60.4L59.6 46L60.5 44.9L60.3 42.1L60.9 41Q60.9 33.6 61.2 31.9L61.4 30.2L61 29.2L57.9 29.2L40.2 42.8L22.1 29.2L20.7 28.8ZM49.7 53L48.7 53.2Q45.1 55.9 43.2 57.8L41.2 59.6L42.3 79.4L44.6 77.8L48.5 73.9L49.7 71.9L50.1 56.6L50.8 55.1ZM30.3 53L29.2 54.8L29.9 56.6L30.3 71.9L31.5 73.9L37.7 79.4L38.8 59.6Q34.9 55.9 33.1 54.6L31.3 53.2Z",
  tv = 0.8;
function nv(a) {
  return a.replace(/[^a-zA-Z0-9_-]/g, "-");
}
function ps({
  size: a,
  variant: i = "metal",
  punch: l = "#0a0a0a",
  alive: c = !1,
  lit: u = !1,
  className: m,
  title: f,
}) {
  const x = nv(g.useId()),
    v = i === "metal",
    E = c && v,
    y =
      a === void 0
        ? { height: "100%", width: "auto" }
        : { height: a, width: Math.round(a * tv * 100) / 100 },
    _ = f === void 0 ? { "aria-hidden": !0 } : { role: "img" };
  return r.jsxs("svg", {
    viewBox: Zg,
    style: { overflow: "visible", ...y },
    className: ["mg-mark", E ? "mg-mark-alive" : "", m ?? ""]
      .filter((N) => N !== "")
      .join(" "),
    ..._,
    children: [
      f !== void 0 && r.jsx("title", { children: f }),
      v
        ? r.jsxs(r.Fragment, {
            children: [
              r.jsxs("defs", {
                children: [
                  r.jsxs("linearGradient", {
                    id: `mgFace-${x}`,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      r.jsx("stop", { offset: "0%", stopColor: "#1A1F23" }),
                      r.jsx("stop", { offset: "45%", stopColor: "#12161A" }),
                      r.jsx("stop", { offset: "100%", stopColor: "#0B0E11" }),
                    ],
                  }),
                  r.jsxs("linearGradient", {
                    id: `mgRim-${x}`,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      r.jsx("stop", {
                        offset: "0%",
                        stopColor: "#FFFFFF",
                        stopOpacity: "0.92",
                      }),
                      r.jsx("stop", { offset: "22%", stopColor: "#D8DCDE" }),
                      r.jsx("stop", { offset: "55%", stopColor: "#8A9094" }),
                      r.jsx("stop", { offset: "78%", stopColor: "#6B7175" }),
                      r.jsx("stop", {
                        offset: "100%",
                        stopColor: "#9CA2A6",
                        stopOpacity: "0.85",
                      }),
                    ],
                  }),
                  r.jsxs("linearGradient", {
                    id: `mgInk-${x}`,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      r.jsx("stop", { offset: "0%", stopColor: "#FFFFFF" }),
                      r.jsx("stop", { offset: "18%", stopColor: "#D9DDE0" }),
                      r.jsx("stop", { offset: "52%", stopColor: "#9AA0A5" }),
                      r.jsx("stop", { offset: "72%", stopColor: "#C6CBCF" }),
                      r.jsx("stop", { offset: "100%", stopColor: "#6E7478" }),
                    ],
                  }),
                  r.jsx("clipPath", {
                    id: `mgClip-${x}`,
                    children: r.jsx("path", { d: ls }),
                  }),
                  r.jsxs("mask", {
                    id: `mgLip-${x}`,
                    children: [
                      r.jsx("path", { d: jn, fill: "#fff" }),
                      r.jsx("path", {
                        d: jn,
                        transform: "translate(0,-0.9)",
                        fill: "#000",
                      }),
                    ],
                  }),
                  r.jsxs("mask", {
                    id: `mgShade-${x}`,
                    children: [
                      r.jsx("path", { d: jn, fill: "#fff" }),
                      r.jsx("path", {
                        d: jn,
                        transform: "translate(0,0.9)",
                        fill: "#000",
                      }),
                    ],
                  }),
                  r.jsx("filter", {
                    id: `mgHalo-${x}`,
                    x: "-30%",
                    y: "-25%",
                    width: "160%",
                    height: "150%",
                    children: r.jsx("feGaussianBlur", { stdDeviation: "3.5" }),
                  }),
                ],
              }),
              r.jsx("g", {
                className: "mg-mark-halo",
                children: r.jsx("path", {
                  className: "mg-mark-halo-shape",
                  d: ls,
                  fill: "#ffffff",
                  fillOpacity: u ? 0.55 : 0.34,
                  filter: `url(#mgHalo-${x})`,
                }),
              }),
              r.jsxs("g", {
                children: [
                  r.jsx("path", { d: ls, fill: `url(#mgRim-${x})` }),
                  r.jsx("path", { d: ev, fill: `url(#mgFace-${x})` }),
                  r.jsx("path", { d: jn, fill: `url(#mgInk-${x})` }),
                  r.jsx("path", {
                    d: jn,
                    fill: "#ffffff",
                    fillOpacity: "0.3",
                    mask: `url(#mgLip-${x})`,
                  }),
                  r.jsx("path", {
                    d: jn,
                    fill: "#000000",
                    fillOpacity: "0.4",
                    mask: `url(#mgShade-${x})`,
                  }),
                ],
              }),
            ],
          })
        : r.jsxs(r.Fragment, {
            children: [
              r.jsx("path", { d: ls, fill: "currentColor" }),
              r.jsx("path", { d: jn, fill: l }),
            ],
          }),
    ],
  });
}
function av() {
  const { locale: a, setLocale: i } = rg(),
    l = Gl(),
    [c, u] = g.useState(!1),
    m = g.useRef(null),
    f = g.useRef(null),
    x = g.useId();
  g.useEffect(() => {
    if (!c) return;
    const E = (_) => {
        var N;
        _.key === "Escape" && (u(!1), (N = f.current) == null || N.focus());
      },
      y = (_) => {
        m.current !== null && (m.current.contains(_.target) || u(!1));
      };
    return (
      document.addEventListener("keydown", E),
      document.addEventListener("mousedown", y),
      () => {
        (document.removeEventListener("keydown", E),
          document.removeEventListener("mousedown", y));
      }
    );
  }, [c]);
  const v = wc[a];
  return r.jsxs("div", {
    ref: m,
    className: "no-drag relative",
    children: [
      r.jsxs("button", {
        ref: f,
        type: "button",
        "aria-haspopup": "menu",
        "aria-expanded": c,
        "aria-controls": c ? x : void 0,
        onClick: () => u((E) => !E),
        title: l("ui.language.title", "Change language"),
        className:
          "flex cursor-pointer items-center gap-1.5 border border-transparent px-2 py-1 text-[13px] text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-900 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-6",
        children: [
          r.jsxs("svg", {
            viewBox: "0 0 16 16",
            "aria-hidden": "true",
            className: "h-3.5 w-3.5",
            children: [
              r.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "6.2",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.2",
              }),
              r.jsx("ellipse", {
                cx: "8",
                cy: "8",
                rx: "2.7",
                ry: "6.2",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.2",
              }),
              r.jsx("path", {
                d: "M1.9 6.1h12.2M1.9 9.9h12.2",
                stroke: "currentColor",
                strokeWidth: "1.2",
                fill: "none",
              }),
            ],
          }),
          r.jsx("span", {
            className: "font-mono text-[11px] tracking-wide",
            children: v.short,
          }),
        ],
      }),
      c &&
        r.jsxs("ul", {
          id: x,
          role: "menu",
          "aria-label": l("ui.language.title", "Change language"),
          className:
            "absolute left-0 top-full z-50 mt-1 min-w-[13rem] border border-neutral-700 bg-neutral-950 py-1 shadow-xl",
          children: [
            Ll.map((E) => {
              const y = wc[E],
                _ = Ap(E, _h),
                N = E === a;
              return r.jsx(
                "li",
                {
                  role: "none",
                  children: r.jsxs("button", {
                    type: "button",
                    role: "menuitemradio",
                    "aria-checked": N,
                    lang: E,
                    onClick: () => {
                      var I;
                      (i(E), u(!1), (I = f.current) == null || I.focus());
                    },
                    className: [
                      "flex w-full cursor-pointer items-baseline justify-between gap-4 px-3 py-1.5 text-left text-[13px] transition-colors",
                      N
                        ? "bg-neutral-900 text-neutral-100"
                        : "text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100",
                    ].join(" "),
                    children: [
                      r.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          r.jsx("span", {
                            "aria-hidden": "true",
                            className: "w-2 font-mono text-neutral-500",
                            children: N ? "•" : "",
                          }),
                          y.endonym,
                        ],
                      }),
                      r.jsx("span", {
                        className:
                          "font-mono text-[11px] tabular-nums text-neutral-500",
                        children:
                          _ >= 0.999
                            ? l("ui.language.full", "full")
                            : `${Math.round(_ * 100)}%`,
                      }),
                    ],
                  }),
                },
                E,
              );
            }),
            r.jsx("li", {
              role: "none",
              className: "mt-1 border-t border-neutral-800 px-3 pb-1 pt-2",
              children: r.jsx("p", {
                className: "text-[11px] leading-snug text-neutral-600",
                children: l(
                  "ui.language.scope",
                  "Verdicts and findings are translated. Some longer explanations and settings stay in English.",
                ),
              }),
            }),
          ],
        }),
    ],
  });
}
let _h = [];
function rv(a) {
  _h = a;
}
const ov = {
    "behavior.REACHES_INTERNET.title": "Greift auf das Internet zu",
    "behavior.REACHES_INTERNET.description":
      "Diese Mod enthält Code, der Netzwerkverbindungen öffnet oder Anfragen ins Web schickt. Für sich allein ist das bei vielen Mods normal (Map-Mods, Multiplayer-Helfer, Update-Prüfer), zusammen mit anderen Warnzeichen kann es aber bedeuten, dass die Mod deine Daten irgendwohin schickt.",
    "behavior.REACHES_INTERNET.advice":
      "Schau nach, ob die Mod einen guten Grund hat, das Internet zu nutzen (Karten, Online-Funktionen). Wenn sie keine erkennbare Online-Funktion hat, sei vorsichtig.",
    "behavior.RUNS_OTHER_PROGRAMS.title":
      "Versucht, andere Programme auf deinem Computer zu starten",
    "behavior.RUNS_OTHER_PROGRAMS.description":
      "Diese Mod enthält Code, der andere Programme oder Systembefehle auf deinem Computer starten kann, und ModGuard konnte entweder nicht lesen, welches Programm das ist, oder hat es nicht erkannt. Eine Spiel-Mod braucht das fast nie, und es ist ein üblicher Weg, auf dem sich Schadsoftware selbst installiert.",
    "behavior.RUNS_OTHER_PROGRAMS.advice":
      "Wenn die Mod nicht klar dokumentiert, warum sie externe Programme startet, installiere sie nicht.",
    "behavior.RUNS_KNOWN_HELPER.title":
      "Bittet deinen Computer, eine ganz normale Aufgabe zu erledigen",
    "behavior.RUNS_KNOWN_HELPER.description":
      "Diese Mod startet ein kleines Programm, das schon zu deinem Computer gehört, für eine bestimmte, ganz normale Aufgabe: einen Link im Browser öffnen oder nachfragen, welche Grafikkarte du hast. ModGuard hat den Befehl aus dem Code der Mod gelesen und erkannt, und der genaue Befehl steht unten, damit du ihn prüfen kannst. Das ist etwas ganz anderes als eine Mod, die einen Befehl ausführt, den niemand lesen kann.",
    "behavior.RUNS_KNOWN_HELPER.advice":
      "Lies den Befehl unten. Wenn er einen Link öffnet oder nach deiner Hardware fragt, ist das genau das, was Mod-Menüs und Grafik-Mods normalerweise tun, und es gibt keinen Grund zur Sorge.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.title":
      "Startet ein anderes Programm, und ModGuard hat gelesen, welches",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.description":
      "Diese Mod startet ein anderes Programm auf deinem Computer, und ModGuard konnte den ganzen Befehl aus dem Code der Mod lesen. Er steht unten. Das ist etwas ganz anderes als eine Mod, die einen Befehl ausführt, den niemand lesen kann: Du siehst den Namen der Datei, die sie startet, und kannst dir diese Datei ansehen. Was ModGuard dir nicht sagen kann, ist, was darin steckt. Updater, Aufnahmeprogramme und Installer tun das alle aus legitimen Gründen.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.advice":
      "Lies den Befehl unten und sieh dir die Datei an, die er nennt. Hat diese Mod einen Grund, ein anderes Programm zu starten, etwa einen Updater, eine Aufnahmefunktion oder einen Installer? Wenn nicht, frag den Autor nach dem Grund, bevor du sie installierst.",
    "behavior.TOUCHES_OUTSIDE_FILES.title":
      "Greift auf Dateien außerhalb ihres eigenen Bereichs zu",
    "behavior.TOUCHES_OUTSIDE_FILES.description":
      "Diese Mod enthält Code, der Dateien außerhalb der mods- und config-Ordner des Spiels liest oder schreibt. Beispiele sind Systemordner oder dein Benutzerprofil. Mods brauchen normalerweise nur ihren eigenen Bereich.",
    "behavior.TOUCHES_OUTSIDE_FILES.advice":
      "Frag den Autor der Mod, warum sie Dateien außerhalb des Spielordners braucht, bevor du ihr vertraust.",
    "behavior.INDIRECT_CODE_LOADING.title":
      "Lädt Code auf Umwegen, die verbergen können, was er tut",
    "behavior.INDIRECT_CODE_LOADING.description":
      "Diese Mod lädt zur Laufzeit zusätzlichen Code auf einem Umweg (zum Beispiel, indem sie Klassen herunterlädt oder sie im laufenden Betrieb erzeugt). Damit lässt sich Verhalten vor einem Prüfer wie diesem hier verbergen.",
    "behavior.INDIRECT_CODE_LOADING.advice":
      "Nimm lieber Mods, deren Code komplett in der Datei steckt, die du heruntergeladen hast. Sieh das als Grund zur Vorsicht, vor allem zusammen mit Internetzugriff.",
    "behavior.RUNS_UNCHECKED_CODE.title":
      "Führt Code aus, der nie in der geprüften Datei war",
    "behavior.RUNS_UNCHECKED_CODE.description":
      "Während das Spiel läuft, holt sich diese Mod weiteren Code, von einer Webadresse oder aus einer Datei, die sie selbst schreibt, und gibt ihn direkt an das Spiel zum Ausführen weiter. ModGuard hat diese Bytes durch den Code der Mod hindurch verfolgt, um das zu belegen; das ist keine Vermutung anhand der Klassen, die die Mod erwähnt. Das wiegt schwerer als alles andere auf dieser Seite, denn der Teil, der die Arbeit macht, steckt nicht in dieser Datei: Er liegt auf dem Server von irgendjemandem, er kann geändert werden, nachdem du geprüft hast, und er kann bei dir anders sein als bei allen anderen, die nachgesehen haben. Ein Mod-Updater lädt auch Sachen herunter. Aber ein Updater gibt dir eine Datei und bittet dich, neu zu starten. Das hier gibt dem laufenden Spiel direkt neuen Code.",
    "behavior.RUNS_UNCHECKED_CODE.advice":
      "Installiere sie nicht. Es gibt keine Version dieser Datei, die irgendjemand prüfen kann, weil der entscheidende Teil erst später heruntergeladen wird. Wenn du sie schon ausgeführt hast, geh davon aus, dass dein Minecraft- und dein Microsoft-Account kompromittiert sind: Ändere das Passwort, melde dich überall ab und prüfe, ob es Anmeldungen gibt, die du nicht kennst.",
    "behavior.LOADS_NATIVE_CODE.title": "Lädt native Code-Bibliotheken",
    "behavior.LOADS_NATIVE_CODE.description":
      "Diese Mod lädt native Bibliotheken (.dll/.so/.dylib), die außerhalb der Java-Sandbox des Spiels laufen und vollen Zugriff auf deinen Computer haben. Nur ganz wenige Mods brauchen das wirklich.",
    "behavior.LOADS_NATIVE_CODE.advice":
      "Akzeptiere das nur bei bekannten Mods, die dokumentieren, warum sie nativen Code brauchen (zum Beispiel für Video oder Audio).",
    "behavior.CARRIES_A_PROGRAM.title": "Trägt ein Programm in sich",
    "behavior.CARRIES_A_PROGRAM.description":
      "In dieser Mod steckt eine Datei, die dein Computer als eigenständiges Programm ausführen würde: eine Windows-EXE, ein Skript, das von der Kommandozeile des Systems ausgeführt wird, oder eine Installer-Datei. Eine Mod ist Java-Code, den das Spiel lädt; sie muss kein zweites Programm mit sich herumtragen. ModGuard kann nicht lesen, was dieses Programm tut, und genau das ist das Problem: Alles andere auf dieser Seite wurde aus dem Code der Mod selbst gelesen, dieser Teil nicht.",
    "behavior.CARRIES_A_PROGRAM.advice":
      "Die Datei steht unten. Installiere sie nicht, es sei denn, das ist ein Installer, den du absichtlich gesucht hast und der offen dazusagt, dass er ein Programm mitbringt.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.title":
      "Trägt einen Namen, den eine bekannte Familie bösartiger Plugins benutzt",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.description":
      "Diese Datei enthält einen Namen, den eine bekannte Familie bösartiger Server-Plugins für die Datei benutzt, die sie auf befallenen Rechnern ablegt. ModGuard hat den Namen in dieser Datei geschrieben gefunden; es hat nicht beobachtet, dass die Datei irgendetwas damit macht. Das ist also ein starker Verdachtsgrund, für sich allein aber kein Beweis.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.advice":
      "Installiere das nicht auf einem Server, der dir wichtig ist, solange du nicht weißt, woher es kommt. Wenn du es von einer Plugin-Seite geladen hast, vergleiche Autor und Downloadseite mit der offiziellen. Diese Familie verbreitet sich, indem sie echte Plugins durch Kopien von sich selbst ersetzt.",
    "behavior.STARTS_AUTOMATICALLY.title":
      "Richtet sich so ein, dass sie automatisch startet oder weiterläuft",
    "behavior.STARTS_AUTOMATICALLY.description":
      "Diese Mod verweist auf Wege, sich beim Hochfahren deines Computers selbst zu starten oder außerhalb des Spiels weiterzulaufen (Autostart-Ordner, geplante Aufgaben, Autorun-Einträge in der Registry). Eine Spiel-Mod sollte das nie tun.",
    "behavior.STARTS_AUTOMATICALLY.advice":
      "Installiere keine Mod, die das Spiel überleben will, zu dem sie gehört.",
    "behavior.DISABLES_YOUR_PROTECTION.title":
      "Sagt deinem Virenschutz, er soll wegsehen",
    "behavior.DISABLES_YOUR_PROTECTION.description":
      "Diese Mod führt einen Befehl aus, der einen Teil des eigenen Schutzes deines Computers abschaltet. Sie sagt Windows Defender, dass er einen Ordner nicht mehr scannen oder ein bestimmtes Programm ignorieren soll. ModGuard hat den ganzen Befehl aus der Mod gelesen, er steht unten. Nichts, was eine Minecraft-Mod tut, braucht das. Es ist der Schritt, den Schadsoftware geht, damit das, was sie als Nächstes installiert, nicht auffällt.",
    "behavior.DISABLES_YOUR_PROTECTION.advice":
      "Installiere sie nicht. Wenn du sie schon ausgeführt hast, öffne Windows-Sicherheit und sieh in der Ausschlussliste nach Einträgen, die du nicht selbst hinzugefügt hast. Die Mod zu löschen entfernt sie nicht. Führe danach einen vollständigen Scan aus.",
    "behavior.HIDES_ITS_CODE.title":
      "Versteckt oder verschleiert ihren eigenen Code",
    "behavior.HIDES_ITS_CODE.description":
      "Der Code dieser Mod ist absichtlich schwer lesbar gemacht: verschleierte Namen oder verschlüsselte Teile, die erst beim Laufen entschlüsselt werden. Ehrliche Mods müssen selten verstecken, was sie tun.",
    "behavior.HIDES_ITS_CODE.advice":
      "Sei sehr vorsichtig. Versteckter Code zusammen mit irgendeinem weiteren Warnzeichen ist ein starker Grund, nicht zu installieren.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.title":
      "Prüft, ob sie beobachtet wird, und kann sich dann anders verhalten",
    "behavior.CHECKS_IF_IT_IS_WATCHED.description":
      "Diese Mod sieht sich an, wer dein Computer ist: seinen Namen, seine Netzwerkkarte, das Benutzerkonto, mit dem du angemeldet bist. Sie vergleicht das, was sie findet, mit einer Liste der Namen, die Analyse-Rechner und Test-Sandboxes benutzen. Code tut das aus genau einem Grund: damit er sich brav verhält, solange er untersucht wird, und auf dem Computer eines echten Menschen etwas anderes tut. Das heißt auch: Ein unauffälliges Ergebnis von einem Werkzeug wie diesem ist bei dieser Datei weniger wert als sonst.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.advice":
      "Halte jedes 'nichts gefunden' zu dieser Mod für unzuverlässig, auch das von ModGuard. Die Mod ist genau darauf geschrieben, so ein Ergebnis zu erzeugen. Installiere sie nicht, es sei denn, der Autor kann die Liste unten erklären.",
    "behavior.ASKS_EXTRA_ACCESS.title":
      "Verlangt mehr Zugriff, als eine Mod brauchen sollte",
    "behavior.ASKS_EXTRA_ACCESS.description":
      "Diese Mod greift auf Interna der Java-Laufzeitumgebung zu, die normaler Code nicht anfasst: Sie schreibt anderen Code beim Laden um, schaltet Javas eigene Sicherheitsprüfungen ab oder benutzt die 'unsafe'-APIs für etwas anderes als das Verschieben von Speicher. Reine schnelle Speicherarbeit ist absichtlich ausgenommen: Das macht jede Render- und Performance-Mod, sie mitzuzählen hätte dir nichts gesagt.",
    "behavior.ASKS_EXTRA_ACCESS.advice":
      "Bei Mods, die Spielcode patchen, ist das zu erwarten. Bei einer Mod, die keinen Grund dazu hat, lohnt sich ein zweiter Blick.",
    "behavior.ACTS_AS_JAVA_AGENT.title": "Deklariert sich als Java-Agent",
    "behavior.ACTS_AS_JAVA_AGENT.description":
      "Diese Datei deklariert sich als Java-Agent, und das erlaubt ihr, den Code anderer Programme beim Laden umzuschreiben: den des Spiels, den anderer Mods, alles im selben Java-Prozess. Profiler und Entwicklerwerkzeuge arbeiten so; Gameplay-Mods nicht.",
    "behavior.ACTS_AS_JAVA_AGENT.advice":
      "Installiere das nur, wenn es ein Entwicklerwerkzeug ist, das du absichtlich gesucht hast. Eine Gameplay-Mod hat keinen Grund, ein Java-Agent zu sein.",
    "behavior.TOUCHES_SENSITIVE_FILES.title":
      "Liest Dateien, in denen Logins oder private Daten stehen",
    "behavior.TOUCHES_SENSITIVE_FILES.description":
      "Diese Mod verweist auf Dateien, von denen bekannt ist, dass darin Zugangsdaten oder private Daten stehen. Beispiele sind der gespeicherte Login des Launchers, Browser-Datenordner oder der Speicher von Messenger-Apps. Das ist das klassische Muster von Mods, die Accounts stehlen.",
    "behavior.TOUCHES_SENSITIVE_FILES.advice":
      "Installiere sie nicht. Wenn du sie schon ausgeführt hast, ändere deine Passwörter und melde alle anderen Sitzungen ab.",
    "behavior.ACTS_AS_YOU_IN_GAME.title":
      "Kann im Spiel in deinem Namen schreiben",
    "behavior.ACTS_AS_YOU_IN_GAME.description":
      "Diese Mod kann Chatnachrichten und Befehle in deinem Namen an den Server schicken, ohne dass du etwas tippst. Auf einem Server mit Economy reicht das, um dein Guthaben zu leeren: ein verstecktes '/pay' und das Geld gehört jemand anderem. Keybind- und Macro-Mods machen das aus guten Gründen; entscheidend ist also, ob es passiert, wenn du eine Taste drückst, oder still von allein.",
    "behavior.ACTS_AS_YOU_IN_GAME.advice":
      "Wenn das keine Macro- oder Keybind-Mod ist, frag nach, warum sie in deinem Namen mit dem Server reden muss. Sieh dir unten die Live-Beobachtung an: Sie zeigt, was die Mod tatsächlich getippt hat, als ModGuard sie ausgeführt hat.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.title":
      "Trägt einen fertigen Befehl, der dein Geld oder deine Sachen verschenkt",
    "behavior.CARRIES_A_TRANSFER_COMMAND.description":
      "Im Code dieser Mod steht ein fertiger Befehl, der Geld oder Items an einen anderen Spieler übergibt. Das ist nicht die Möglichkeit, so einen Befehl zu tippen; es sind die tatsächlichen Wörter, schon geschrieben. Eine Mod, mit der du Befehle tippen kannst, hat keinen Grund, einen mitzubringen, in dem schon der Name eines Fremden steht. So sieht ein Dieb im Spiel aus: Er fasst deinen Computer nie an, er gibt einfach dein Geld für dich aus.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.advice":
      "Lies den Befehl unten. Meistens steht darin, wer das Geld bekommt. Wenn das nicht etwas ist, worum du diese Mod gebeten hast, installiere sie nicht und sag der Person Bescheid, von der du sie hast.",
    "behavior.MOVES_YOUR_ITEMS.title": "Kann Items aus deinem Inventar bewegen",
    "behavior.MOVES_YOUR_ITEMS.description":
      "Diese Mod kann Slots in deinem Inventar anklicken, Items fallen lassen oder eine Truhe oder ein Handelsfenster für dich bedienen. Sortier-Mods tun das aus gutem Grund. Es ist aber auch genau der Weg, auf dem eine Mod dein Inventar in die Truhe von jemand anderem leert, während du stillstehst.",
    "behavior.MOVES_YOUR_ITEMS.advice":
      "Bei Inventar-Sortierern und Auto-Craftern ist das zu erwarten. Bei allem anderen ist es ein Grund, in der Live-Beobachtung unten nachzusehen, was die Mod dort getan hat.",
    "behavior.READS_YOUR_SESSION.title":
      "Liest den Schlüssel, der beweist, dass du du bist",
    "behavior.READS_YOUR_SESSION.description":
      "Diese Mod liest dein Minecraft-Session-Token. Dieses Token ist der Schlüssel, mit dem dein Spiel beweist, dass es dein Account ist, ganz ohne dein Passwort. Manche Mods haben einen echten Grund dafür: Einen Skin oder ein Cape hochzuladen heißt, einem Server zu beweisen, dass der Account dir gehört. Aber es ist auch genau das, was ein Account-Dieb mitnimmt, und damit allein kann sich jemand als du anmelden.",
    "behavior.READS_YOUR_SESSION.advice":
      "Frag nach, wofür diese Mod deinen Account braucht: Skins, Capes und Cosmetics sind echte Gründe. Wenn sie überhaupt keine Online-Funktion hat, lohnt sich eine Nachfrage. Wenn du dir Sorgen machst, melde dich auf deiner Microsoft-Kontoseite überall ab. Damit wird jedes kopierte Token wertlos.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.title":
      "Hat eine Schwachstelle, die jemand anderes gegen dich nutzen könnte",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.description":
      "Diese Mod nimmt Daten aus dem Netzwerk so entgegen, dass derjenige, der sie schickt, Code auf deinem Computer ausführen kann. Das ist ein Loch in der Mod, kein Zeichen dafür, dass ihr Autor etwas Böses wollte. Das ist einer der leichtesten Fehler, die man in Java machen kann, und er ist auch bekannten, beliebten Mods passiert. Es heißt nicht, dass die Mod dich ausrauben will. Es heißt, dass jemand anderes das könnte, wenn er an den Server herankommt, auf dem du spielst.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.advice":
      "Schau, ob eine neuere Version das behebt, und sag dem Autor Bescheid. Die meisten beheben so etwas schnell, sobald sie davon wissen. Überleg dir bis dahin gut, auf welche Server du mit dieser Mod gehst; an so ein Loch kommt nur jemand heran, der deinem Spiel Daten schicken kann.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.title":
      "Ist nicht die Art von Datei, die sie zu sein vorgibt",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.description":
      "Diese Datei trägt den Namen einer Schematic (.litematic, .schem, .schematic oder .nbt), ihr tatsächlicher Inhalt ist aber ein Programm: eine Minecraft-Mod oder ein Zip voller Code, kein gespeichertes Bauwerk. Eine Schematic besteht aus Strukturdaten und wird nie so verpackt. Ein Programm als Schematic zu tarnen ist ein bekannter Trick, um jemanden dazu zu bringen, eine Mod zu öffnen, die er absichtlich nie installiert hätte.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.advice":
      "Lade das nicht in Litematica, WorldEdit oder irgendein Schematic-Tool. ModGuard hat den echten Inhalt gelesen, und alle Funde zum Programm selbst stehen unten. Beurteile es als das, was es ist.",
    "behavior.HIDES_AN_EXECUTABLE.title":
      "Ist ein als Schematic getarntes Programm",
    "behavior.HIDES_AN_EXECUTABLE.description":
      "Diese Datei heißt wie eine Schematic, ihr Inhalt ist aber ein ausführbares Programm: eine Windows-, macOS- oder Linux-Programmdatei oder ein Skript. Ein gespeichertes Bauwerk ist nie eines davon. ModGuard kann nicht lesen, was das Programm tut, und es gibt keinen legitimen Grund, warum eine Schematic eines sein sollte. Deshalb wird das als Versuch gewertet, dich ein Programm ausführen zu lassen, das du nicht ausführen wolltest.",
    "behavior.HIDES_AN_EXECUTABLE.advice":
      "Lösche sie. Öffne sie nicht, benenne sie nicht in ihre echte Endung zurück und führe sie nicht aus. Wenn du sie schon geöffnet hast, geh davon aus, dass dieser Computer möglicherweise kompromittiert ist.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.title":
      "Führt Befehle aus, wenn du es platzierst",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.description":
      "Dieses Bauwerk enthält Befehlsblöcke oder Befehlsdaten. Sobald es platziert und ausgelöst wird, kann es diese Befehle in deinem Namen ausführen. Das passiert nur in einer Welt, in der Befehle erlaubt sind (Einzelspieler mit Cheats an oder ein Server, auf dem du Befehlsblöcke setzen darfst). Befehlsblöcke sind bei Redstone-Konstruktionen, Adventure-Maps und Minispielen völlig normal. Die Befehle, die ModGuard gelesen hat, stehen unten, damit du sie sehen kannst.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.advice":
      "Lies die Befehle unten. Wenn das ein Redstone- oder Map-Bauwerk ist, sind Befehlsblöcke zu erwarten. Wenn es einfach nur ein Bauwerk sein soll, frag nach, warum es Befehle ausführen muss.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.title":
      "Trägt einen Befehl, der dir beim Platzieren schaden kann",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.description":
      "Ein Befehlsblock in diesem Bauwerk trägt einen Befehl, für den ein normales Bauwerk keinen Grund hat: OP-Rechte vergeben, eine Datapack-Funktion ausführen oder Blöcke löschen. Sobald das Bauwerk in einer Welt platziert wird, in der Befehle laufen, und der Block ausgelöst wird, tut es das in deinem Namen. Du tippst nichts. Eine Schematic nur zur Vorschau zu laden führt nichts aus; entscheidend ist, sie in einer echten Welt zu platzieren.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.advice":
      "Lies den Befehl unten. Platziere dieses Bauwerk nicht in einer Welt, in der Cheats oder Befehlsblöcke aktiviert sind. Wenn es OP-Rechte vergibt, eine Datapack-Funktion ausführt oder einen anderen Spieler nennt, behandle es als Falle.",
    "behavior.LOOKS_LIKE_A_BOMB.title":
      "Ist gebaut, um Programme abstürzen zu lassen, die sie öffnen",
    "behavior.LOOKS_LIKE_A_BOMB.description":
      "Diese Datei ist so gebaut wie ein Absturz-Angriff: Entweder wird sie beim Entpacken enorm viel größer als auf der Festplatte, oder ihre Daten sind so tief verschachtelt, dass das Lesen den Speicher aufbrauchen würde. Ein echtes gespeichertes Bauwerk sieht nie so aus. Sie ist darauf ausgelegt, Mods einfrieren oder abstürzen zu lassen, die sie öffnen. ModGuard hat das Lesen vorher abgebrochen.",
    "behavior.LOOKS_LIKE_A_BOMB.advice":
      "Lösche sie. Lade sie nicht in eine Schematic-Mod. Der ganze Sinn so einer Datei ist es, das Programm abstürzen zu lassen, das sie liest.",
    "verdict.unsafe.label": "Nicht sicher",
    "verdict.unsafe.headline":
      "ModGuard hat deutliche Warnzeichen gefunden. Installiere diese Mod nicht.",
    "verdict.be-careful.label": "Vorsicht",
    "verdict.be-careful.headline":
      "Diese Mod macht ein paar Dinge, die du dir genauer ansehen solltest, bevor du ihr vertraust.",
    "verdict.minor-notes.label": "Kleine Hinweise",
    "verdict.minor-notes.headline":
      "Größtenteils normal, mit ein paar Dingen, die du wissen solltest. Viele seriöse Mods sehen so aus.",
    "verdict.looks-safe.label": "Sieht sicher aus",
    "verdict.looks-safe.headline":
      "ModGuard hat keine der riskanten Verhaltensweisen gefunden, nach denen es sucht.",
    "verdict.unsafe.imperative": "Führe diese Mod nicht aus.",
    "verdict.be-careful.imperative": "Sei vorsichtig mit dieser hier.",
    "verdict.minor-notes.imperative":
      "Wahrscheinlich in Ordnung. Ein Blick lohnt sich.",
    "verdict.looks-safe.imperative": "Hier gibt es nichts zu tun.",
    "packaging.verified.headline":
      "Das ist eine ordentlich gebaute Mod, und ihr Archiv ist signiert. Jede Datei passt noch zu den Fingerabdrücken, die beim Signieren festgehalten wurden, es wurde also nachträglich nichts verändert.",
    "packaging.valid.headline":
      "Das ist eine ordentlich gebaute Mod: eine echte Mod-Loader-Beschreibung, Code so geordnet, wie ihn ein Build-Tool erzeugt, und der Code, den sie zu starten angibt, steckt wirklich in der Datei.",
    "packaging.unverified.headline":
      "ModGuard konnte nicht bestätigen, dass diese Datei eine ordentlich gebaute Mod ist, deshalb wird alles, was sie tut, mit Misstrauen behandelt.",
    "packaging.malformed.headline":
      "Dieses Archiv ist falsch zusammengesetzt: Teile sind kaputt, fehlen oder passen nicht mehr zu dem, was die Datei angibt. Das allein ist schon ein Grund, vorsichtig zu sein.",
    "kind.ACCOUNT_STEALER": "STIEHLT ACCOUNTS",
    "kind.SESSION_STEALER": "STIEHLT SESSION-TOKEN",
    "kind.ITEM_STEALER": "STIEHLT ITEMS",
    "kind.REMOTE_CODE_LOADER": "LÄDT CODE NACH",
    "kind.BUNDLED_PROGRAM": "TRÄGT EIN PROGRAMM",
    "kind.DEFENCE_DISABLER": "DEAKTIVIERT VIRENSCHUTZ",
    "kind.PLUGIN_WORM_MARKER": "TRÄGT WURM-NAMEN",
    "kind.DISGUISED_PROGRAM": "GETARNTES PROGRAMM",
    "kind.DISGUISED_MOD": "GETARNTE MOD",
    "kind.TRAPPED_BUILD": "PRÄPARIERTES BAUWERK",
    "kind.CRASH_TRAP": "ABSTURZ-FALLE",
    "kind.EXPLOITABLE": "SCHWACHSTELLE",
    "ui.finding.advice": "Was du tun kannst:",
    "ui.finding.libraryOnly":
      "Kommt aus einer Bibliothek, die diese Mod mitliefert, nicht aus ihrem eigenen Code. Wird angezeigt, aber nicht gewertet.",
    "ui.finding.discounted": "Normal für eine ordentlich verpackte Mod.",
    "ui.finding.evidence": "Was ModGuard gesehen hat",
    "ui.kind.what": "Was das ist",
    "ui.kind.found": "Was gefunden wurde",
    "ui.kind.notAFamilyName":
      "Das ist kein Malware-Name, der in einer Liste nachgeschlagen wurde. ModGuard hat keine solche Liste. Es ist ModGuards eigene Beschreibung dessen, was es in dieser Datei gefunden hat, und die Funde, auf denen sie beruht, stehen auf dieser Seite.",
    "ui.language.title": "Sprache ändern",
    "ui.language.full": "komplett",
    "ui.language.scope":
      "Einschätzungen und Funde sind übersetzt. Manche längeren Erklärungen und die Einstellungen bleiben auf Englisch.",
  },
  sv = {
    "behavior.REACHES_INTERNET.title": "Se conecta a internet",
    "behavior.REACHES_INTERNET.description":
      "Este mod tiene código que abre conexiones de red o hace peticiones web. Por sí solo eso es normal en muchos mods (mods de mapas, ayudas para multijugador, mods que buscan actualizaciones), pero junto con otras señales de alerta puede significar que el mod manda tus datos a alguna parte.",
    "behavior.REACHES_INTERNET.advice":
      "Fíjate si el mod tiene una buena razón para usar internet (mapas, funciones en línea). Si no tiene ninguna función en línea evidente, ten cuidado.",
    "behavior.RUNS_OTHER_PROGRAMS.title":
      "Intenta ejecutar otros programas en tu computadora",
    "behavior.RUNS_OTHER_PROGRAMS.description":
      "Este mod tiene código que puede iniciar otros programas o comandos del sistema en tu computadora, y ModGuard no pudo leer cuál es ese programa o no lo reconoció. Un mod de un juego casi nunca necesita hacer esto, y es una forma común en la que el malware se instala solo.",
    "behavior.RUNS_OTHER_PROGRAMS.advice":
      "Si el mod no explica con claridad por qué inicia programas externos, no lo instales.",
    "behavior.RUNS_KNOWN_HELPER.title":
      "Le pide a tu computadora una tarea común",
    "behavior.RUNS_KNOWN_HELPER.description":
      "Este mod inicia un programa pequeño que ya viene con tu computadora, para hacer una tarea concreta y corriente: abrir un enlace en tu navegador, o preguntar qué tarjeta gráfica tienes. ModGuard leyó el comando en el código del mod y lo reconoció, y el comando exacto aparece abajo para que lo revises. Eso es algo muy distinto de un mod que ejecuta un comando que nadie puede leer.",
    "behavior.RUNS_KNOWN_HELPER.advice":
      "Lee el comando de abajo. Si abre un enlace o pregunta por tu hardware, eso es lo que hacen normalmente los menús de mods y los mods gráficos, y no hay de qué preocuparse.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.title":
      "Inicia otro programa, y ModGuard leyó cuál",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.description":
      "Este mod inicia otro programa en tu computadora, y ModGuard pudo leer el comando completo en el código del mod. Aparece abajo. Eso es algo muy distinto de un mod que ejecuta un comando que nadie puede leer: puedes ver el nombre del archivo que inicia e ir a mirarlo. Lo que ModGuard no puede decirte es qué hay dentro. Los actualizadores, los grabadores de video y los instaladores hacen esto de forma legítima.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.advice":
      "Lee el comando de abajo y revisa el archivo que nombra. ¿Tiene este mod una razón para iniciar otro programa, como un actualizador, una función de grabación o un instalador? Si no tiene ninguna, pregúntale al autor por qué antes de instalarlo.",
    "behavior.TOUCHES_OUTSIDE_FILES.title":
      "Toca archivos fuera del área del propio mod",
    "behavior.TOUCHES_OUTSIDE_FILES.description":
      "Este mod tiene código que lee o escribe archivos fuera de las carpetas mods y config del juego. Por ejemplo, carpetas del sistema o tu perfil de usuario. Normalmente a los mods les basta con su propia área.",
    "behavior.TOUCHES_OUTSIDE_FILES.advice":
      "Pregúntale al autor del mod por qué necesita archivos fuera de la carpeta del juego antes de confiar en él.",
    "behavior.INDIRECT_CODE_LOADING.title":
      "Carga código por vías indirectas que pueden ocultar lo que hace",
    "behavior.INDIRECT_CODE_LOADING.description":
      "Este mod carga código extra mientras se ejecuta, dando rodeos (por ejemplo descargando clases o creándolas sobre la marcha). Eso hace posible ocultarle a un revisor como este lo que hace.",
    "behavior.INDIRECT_CODE_LOADING.advice":
      "Prefiere mods cuyo código esté todo en el archivo que descargaste. Tómalo como una señal de precaución, sobre todo junto con el acceso a internet.",
    "behavior.RUNS_UNCHECKED_CODE.title":
      "Ejecuta código que nunca estuvo en el archivo que revisaste",
    "behavior.RUNS_UNCHECKED_CODE.description":
      "Mientras el juego corre, este mod va y consigue más código, de una dirección web o de un archivo que él mismo escribe, y se lo entrega directo al juego para que lo ejecute. ModGuard siguió esos bytes a través del código del propio mod para comprobarlo; no es una suposición basada en qué clases menciona el mod. Importa más que cualquier otra cosa de esta página, porque la parte que hace el trabajo no está en este archivo: está en el servidor de alguien, puede cambiar después de que lo revises, y puede ser distinta para ti que para cualquier otra persona que lo haya mirado. Un actualizador de mods también descarga cosas. Pero un actualizador te entrega un archivo y te pide reiniciar. Esto le entrega código nuevo al juego que ya está corriendo.",
    "behavior.RUNS_UNCHECKED_CODE.advice":
      "No lo instales. No existe una versión de este archivo que alguien pueda revisar, porque la parte que importa se descarga después. Si ya lo ejecutaste, trata tus cuentas de Minecraft y Microsoft como comprometidas: cambia la contraseña, cierra sesión en todos lados y revisa si hay inicios de sesión que no reconozcas.",
    "behavior.LOADS_NATIVE_CODE.title": "Carga librerías de código nativo",
    "behavior.LOADS_NATIVE_CODE.description":
      "Este mod carga librerías nativas (.dll/.so/.dylib) que se ejecutan fuera del sandbox de Java del juego, con acceso total a tu computadora. Muy pocos mods necesitan esto de verdad.",
    "behavior.LOADS_NATIVE_CODE.advice":
      "Acéptalo solo en mods conocidos que expliquen por qué necesitan código nativo (por ejemplo, video o audio).",
    "behavior.CARRIES_A_PROGRAM.title": "Lleva un programa dentro",
    "behavior.CARRIES_A_PROGRAM.description":
      "Dentro de este mod viene empaquetado un archivo que tu computadora ejecutaría como un programa por su cuenta: un ejecutable de Windows, un script que se ejecuta en la consola del sistema, o un instalador. Un mod es código Java que el juego carga; no necesita andar cargando un segundo programa. ModGuard no puede leer qué hace ese programa, y ahí está el problema: todo lo demás de esta página se leyó del código del propio mod, y esta parte no se puede leer.",
    "behavior.CARRIES_A_PROGRAM.advice":
      "El archivo aparece nombrado abajo. A menos que esto sea un instalador que buscaste a propósito, y que diga abiertamente que lleva uno, no lo instales.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.title":
      "Lleva un nombre que usa una familia conocida de plugins maliciosos",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.description":
      "Este archivo contiene un nombre que una familia conocida de plugins maliciosos de servidor usa para el archivo que deja en las máquinas que infecta. ModGuard encontró ese nombre escrito dentro de este archivo; no vio al archivo hacer nada con él, así que por sí solo es un motivo fuerte de sospecha, no una prueba.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.advice":
      "No instales esto en un servidor que te importe hasta que sepas de dónde salió. Si lo descargaste de una lista de plugins, compara el autor y la página de descarga con los oficiales. Esta familia se propaga reemplazando plugins reales con copias de sí misma.",
    "behavior.STARTS_AUTOMATICALLY.title":
      "Se configura para arrancar solo o para quedarse",
    "behavior.STARTS_AUTOMATICALLY.description":
      "Este mod menciona formas de arrancar solo cuando enciendes la computadora o de seguir corriendo fuera del juego (carpetas de inicio, tareas programadas, claves de registro de autoarranque). Un mod de un juego nunca debería hacer esto.",
    "behavior.STARTS_AUTOMATICALLY.advice":
      "No instales un mod que quiere seguir vivo más allá del juego al que pertenece.",
    "behavior.DISABLES_YOUR_PROTECTION.title":
      "Le dice a tu antivirus que deje de buscar",
    "behavior.DISABLES_YOUR_PROTECTION.description":
      "Este mod ejecuta un comando que apaga parte de la protección de tu propia computadora. Le dice a Windows Defender que deje de escanear una carpeta, o que ignore un programa concreto. ModGuard leyó el comando completo dentro del mod, y aparece abajo. Nada de lo que hace un mod de Minecraft necesita esto. Es el paso que da el malware para que no se note lo que instala después.",
    "behavior.DISABLES_YOUR_PROTECTION.advice":
      "No lo instales. Si ya lo ejecutaste, abre Seguridad de Windows y revisa la lista de exclusiones por si hay entradas que tú no agregaste. Borrar el mod no las quita. Después haz un análisis completo.",
    "behavior.HIDES_ITS_CODE.title": "Esconde o revuelve su propio código",
    "behavior.HIDES_ITS_CODE.description":
      "El código de este mod está hecho a propósito para que sea difícil de leer: nombres revueltos, o partes cifradas que solo se descifran mientras corre. Los mods honestos rara vez necesitan esconder lo que hacen.",
    "behavior.HIDES_ITS_CODE.advice":
      "Ten mucho cuidado. Código escondido más cualquier otra señal de alerta es una razón fuerte para no instalarlo.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.title":
      "Revisa si lo están observando, y puede comportarse distinto si es así",
    "behavior.CHECKS_IF_IT_IS_WATCHED.description":
      "Este mod mira quién es tu computadora: su nombre, su tarjeta de red, la cuenta con la que iniciaste sesión. Compara lo que encuentra con una lista de los nombres que usan las máquinas de análisis y los sandboxes de prueba. El código hace eso por una sola razón: para portarse bien mientras lo examinan y hacer otra cosa en la computadora de una persona real. También significa que un resultado limpio de una herramienta como esta vale menos de lo normal para este archivo.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.advice":
      "Trata cualquier resultado de 'no se encontró nada' sobre este mod, incluido el de ModGuard, como poco confiable. El mod está escrito para producir exactamente eso. A menos que el autor pueda explicar la lista de abajo, no lo instales.",
    "behavior.ASKS_EXTRA_ACCESS.title":
      "Pide más acceso del que un mod debería necesitar",
    "behavior.ASKS_EXTRA_ACCESS.description":
      "Este mod se mete en partes internas de Java que el código normal no toca: reescribir otro código mientras se carga, apagar las propias comprobaciones de seguridad de Java, o usar las APIs 'unsafe' para algo que no sea mover memoria. El uso simple de memoria rápida se deja fuera a propósito: todos los mods de renderizado y de rendimiento lo hacen, así que contarlo no aportaba nada.",
    "behavior.ASKS_EXTRA_ACCESS.advice":
      "Esperable en mods que parchan el código del juego. Merece otra mirada en un mod que no tiene por qué.",
    "behavior.ACTS_AS_JAVA_AGENT.title": "Se declara como agente de Java",
    "behavior.ACTS_AS_JAVA_AGENT.description":
      "Este archivo se declara como agente de Java, lo que le permite reescribir el código de otros programas mientras ese código se carga: el del juego, el de otros mods, cualquier cosa en el mismo proceso de Java. Los profilers y las herramientas de desarrollo funcionan así; los mods de juego no.",
    "behavior.ACTS_AS_JAVA_AGENT.advice":
      "Instálalo solo si es una herramienta de desarrollo que buscaste a propósito. Un mod de juego no tiene ninguna razón para ser un agente de Java.",
    "behavior.TOUCHES_SENSITIVE_FILES.title":
      "Lee archivos que guardan inicios de sesión o datos privados",
    "behavior.TOUCHES_SENSITIVE_FILES.description":
      "Este mod menciona archivos que se sabe que contienen credenciales de cuentas o datos privados. Por ejemplo, la sesión guardada del launcher del juego, las carpetas de datos del navegador, o el almacenamiento de apps de mensajería. Es el patrón clásico de los mods que roban cuentas.",
    "behavior.TOUCHES_SENSITIVE_FILES.advice":
      "No lo instales. Si ya lo ejecutaste, cambia tus contraseñas y cierra las demás sesiones.",
    "behavior.ACTS_AS_YOU_IN_GAME.title":
      "Puede escribir en el juego en tu nombre",
    "behavior.ACTS_AS_YOU_IN_GAME.description":
      "Este mod puede enviar mensajes de chat y comandos al servidor en tu nombre, sin que tú escribas nada. En un servidor con economía eso alcanza para vaciar tu saldo: un '/pay' escondido y el dinero es de otro. Los mods de macros y de atajos de teclado hacen esto por buenas razones, así que lo que importa es si pasa cuando presionas una tecla o por su cuenta y en silencio.",
    "behavior.ACTS_AS_YOU_IN_GAME.advice":
      "Si este no es un mod de macros o de atajos de teclado, pregunta por qué necesita hablarle al servidor en tu nombre. Mira abajo la sección de observación en vivo: muestra lo que el mod escribió de verdad cuando ModGuard lo ejecutó.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.title":
      "Lleva un comando ya hecho que regala tu dinero o tus cosas",
    "behavior.CARRIES_A_TRANSFER_COMMAND.description":
      "En el código de este mod está escrito un comando ya terminado que le entrega dinero u objetos a otro jugador. No es la capacidad de escribir un comando así; son las palabras exactas, ya escritas. Un mod que te deja escribir comandos no tiene ninguna razón para llevar uno ya rellenado con el nombre de un desconocido. Así se ve un ladrón dentro del juego: nunca toca tu computadora, solo gasta tu dinero por ti.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.advice":
      "Lee el comando de abajo. Casi siempre dice quién recibe el pago. A menos que sea algo que tú le pediste a este mod, no lo instales, y avísale a quien te lo pasó.",
    "behavior.MOVES_YOUR_ITEMS.title": "Puede sacar objetos de tu inventario",
    "behavior.MOVES_YOUR_ITEMS.description":
      "Este mod puede hacer clic en las casillas de tu inventario, tirar objetos, o manejar un cofre o una ventana de intercambio por ti. Los mods para ordenar el inventario hacen esto de forma legítima. También es exactamente así como un mod vacía tu inventario en el cofre de otra persona mientras tú estás quieto.",
    "behavior.MOVES_YOUR_ITEMS.advice":
      "Es lo esperable en organizadores de inventario y auto-crafteo. En cualquier otra cosa, tómalo como una razón para ver en la sección de observación en vivo qué fue lo que hizo.",
    "behavior.READS_YOUR_SESSION.title":
      "Lee la llave que demuestra que eres tú",
    "behavior.READS_YOUR_SESSION.description":
      "Este mod lee tu token de sesión de Minecraft. Ese token es la llave que usa tu juego para demostrar que es tu cuenta, sin necesitar tu contraseña. Algunos mods tienen una razón real para hacerlo: subir una skin o una capa significa demostrarle a un servidor que la cuenta es tuya. Pero también es exactamente lo que se lleva un ladrón de cuentas, y es lo único que le permite a alguien entrar como si fuera tú.",
    "behavior.READS_YOUR_SESSION.advice":
      "Pregúntate qué hace este mod que necesite tu cuenta: skins, capas y cosméticos son razones reales. Si no tiene ninguna función en línea, vale la pena preguntar. Si te preocupa, cierra sesión en todos lados desde la página de tu cuenta de Microsoft. Eso deja inútil cualquier token copiado.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.title":
      "Tiene una debilidad que alguien más podría usar en tu contra",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.description":
      "Este mod acepta datos de la red de una forma que le permite a quien los envía ejecutar código en tu computadora. Eso es un agujero en el mod, no una señal de que su autor quisiera hacer daño. Es uno de los errores más fáciles de cometer en Java, y le ha pasado a mods conocidos y queridos. No significa que el mod esté intentando robarte. Significa que alguien más podría, si logra llegar al servidor en el que juegas.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.advice":
      "Fíjate si una versión más nueva lo arregla, y avísale al autor. La mayoría lo arregla rápido en cuanto se entera. Mientras tanto, ten cuidado con los servidores a los que entras con él instalado; a un agujero así solo llega alguien que pueda enviarle datos a tu juego.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.title":
      "No es el tipo de archivo que dice ser",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.description":
      "Este archivo tiene nombre de schematic (.litematic, .schem, .schematic o .nbt) pero su contenido real es un programa: un mod de Minecraft o un zip con código, no una construcción guardada. Un schematic son datos de estructura y nunca se empaqueta así. Disfrazar un programa de schematic es un truco conocido para lograr que alguien abra un mod que no habría instalado a propósito.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.advice":
      "No cargues esto en Litematica, WorldEdit ni en ninguna herramienta de schematics. ModGuard leyó el contenido real, y abajo se muestran los hallazgos sobre el programa en sí. Júzgalo por lo que es.",
    "behavior.HIDES_AN_EXECUTABLE.title":
      "Es un programa disfrazado de schematic",
    "behavior.HIDES_AN_EXECUTABLE.description":
      "Este archivo tiene nombre de schematic pero su contenido es un programa que se puede ejecutar: un ejecutable de Windows, macOS o Linux, o un script. Una construcción guardada nunca es ninguna de esas cosas. ModGuard no puede leer qué hace el programa, y no hay ninguna razón legítima para que un schematic lo sea, así que esto se trata como un intento de hacerte ejecutar un programa que no querías ejecutar.",
    "behavior.HIDES_AN_EXECUTABLE.advice":
      "Bórralo. No lo abras, no le devuelvas su extensión real, y no lo ejecutes. Si ya lo abriste, trata esta computadora como posiblemente comprometida.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.title":
      "Ejecuta comandos cuando lo colocas",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.description":
      "Esta construcción tiene bloques de comandos o datos de comandos, así que una vez colocada y activada puede ejecutar esos comandos en tu nombre. Eso solo pasa en un mundo donde los comandos están permitidos (un mundo de un jugador con los trucos activados, o un servidor donde puedes colocar bloques de comandos). Los bloques de comandos son completamente normales en máquinas de redstone, mapas de aventura y minijuegos. Abajo están los comandos que leyó ModGuard, para que puedas verlos.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.advice":
      "Lee los comandos de abajo. Si esto es una construcción de redstone o un mapa, los bloques de comandos son lo esperable. Si se supone que es una estructura simple, pregunta por qué necesita ejecutar comandos.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.title":
      "Lleva un comando que puede hacerte daño al colocarlo",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.description":
      "Un bloque de comandos de esta construcción lleva un comando que una construcción normal no tiene por qué llevar: dar permisos de operador, ejecutar una función de datapack, o borrar bloques. Una vez que la construcción se coloca en un mundo donde los comandos funcionan y el bloque se activa, hace esto en tu nombre. Tú no escribes nada. Cargar un schematic para verlo en vista previa no ejecuta nada; lo que importa es colocarlo en un mundo de verdad.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.advice":
      "Lee el comando de abajo. No coloques esta construcción en un mundo con trucos o bloques de comandos activados. Si da permisos de operador, ejecuta una función de datapack, o nombra a otro jugador, trátalo como una trampa.",
    "behavior.LOOKS_LIKE_A_BOMB.title":
      "Está hecho para hacer fallar lo que lo abra",
    "behavior.LOOKS_LIKE_A_BOMB.description":
      "Este archivo está armado como un ataque para hacer fallar programas: o se descomprime en muchísimo más de lo que ocupa en disco, o sus datos están anidados tan profundo que leerlos agotaría la memoria. Una construcción guardada de verdad nunca se ve así. Está diseñado para congelar o hacer fallar el mod que lo abre. El lector de ModGuard se detuvo antes de que pudiera.",
    "behavior.LOOKS_LIKE_A_BOMB.advice":
      "Bórralo. No lo cargues en un mod de schematics. Un archivo así existe para hacer fallar el programa que lo lee.",
    "verdict.unsafe.label": "Inseguro",
    "verdict.unsafe.headline":
      "ModGuard encontró señales de alerta fuertes. No instales este mod.",
    "verdict.be-careful.label": "Ten cuidado",
    "verdict.be-careful.headline":
      "Este mod hace algunas cosas que vale la pena mirar de cerca antes de confiar en él.",
    "verdict.minor-notes.label": "Notas menores",
    "verdict.minor-notes.headline":
      "Casi todo es normal, con algunas cosas que vale la pena saber. Muchos mods legítimos se ven así.",
    "verdict.looks-safe.label": "Parece seguro",
    "verdict.looks-safe.headline":
      "ModGuard no encontró ninguno de los comportamientos riesgosos que busca.",
    "verdict.unsafe.imperative": "No ejecutes este mod.",
    "verdict.be-careful.imperative": "Ten cuidado con este.",
    "verdict.minor-notes.imperative":
      "Probablemente esté bien. Dale un vistazo.",
    "verdict.looks-safe.imperative": "Aquí no hay nada que hacer.",
    "packaging.verified.headline":
      "Este es un mod bien construido y su paquete está firmado. Cada archivo sigue coincidiendo con las huellas registradas cuando se firmó, así que nada se alteró después.",
    "packaging.valid.headline":
      "Este es un mod bien construido: una descripción real para el mod loader, código organizado como lo produce una herramienta de compilación, y el código que dice que inicia sí está en el archivo.",
    "packaging.unverified.headline":
      "ModGuard no pudo confirmar que este archivo sea un mod bien construido, así que todo lo que hace se trata con sospecha.",
    "packaging.malformed.headline":
      "Este paquete está mal armado: hay piezas rotas, faltantes, o que ya no coinciden con lo que el archivo dice ser. Solo eso ya es razón para tener cuidado.",
    "kind.ACCOUNT_STEALER": "ROBA CUENTAS",
    "kind.SESSION_STEALER": "ROBA SESIONES",
    "kind.ITEM_STEALER": "ROBA OBJETOS",
    "kind.REMOTE_CODE_LOADER": "CARGA CÓDIGO REMOTO",
    "kind.BUNDLED_PROGRAM": "LLEVA UN PROGRAMA",
    "kind.DEFENCE_DISABLER": "APAGA TU ANTIVIRUS",
    "kind.PLUGIN_WORM_MARKER": "MARCA DE GUSANO",
    "kind.DISGUISED_PROGRAM": "PROGRAMA DISFRAZADO",
    "kind.DISGUISED_MOD": "MOD DISFRAZADO",
    "kind.TRAPPED_BUILD": "CONSTRUCCIÓN TRAMPA",
    "kind.CRASH_TRAP": "HACE FALLAR PROGRAMAS",
    "kind.EXPLOITABLE": "TIENE UNA DEBILIDAD",
    "ui.finding.advice": "Qué puedes hacer:",
    "ui.finding.libraryOnly":
      "Viene de una librería que este mod incluye, no de su propio código. Se muestra, pero no cuenta.",
    "ui.finding.discounted": "Normal en un mod bien empaquetado.",
    "ui.finding.evidence": "Lo que vio ModGuard",
    "ui.kind.what": "Qué es esto",
    "ui.kind.found": "Qué se encontró",
    "ui.kind.notAFamilyName":
      "Esto no es un nombre de malware sacado de una lista. ModGuard no tiene ninguna lista así. Es la descripción que hace ModGuard de lo que encontró en este archivo, y los hallazgos en los que se apoya están en esta página.",
    "ui.language.title": "Cambiar idioma",
    "ui.language.full": "completo",
    "ui.language.scope":
      "Los veredictos y hallazgos están traducidos. Algunas explicaciones largas y la configuración siguen en inglés.",
  },
  iv = {
    "behavior.REACHES_INTERNET.title": "Se connecte à Internet",
    "behavior.REACHES_INTERNET.description":
      "Ce mod contient du code qui ouvre des connexions réseau ou envoie des requêtes web. En soi, c'est normal pour beaucoup de mods (mods de carte, aides pour le multijoueur, vérificateurs de mise à jour), mais avec d'autres signaux d'alerte, ça peut vouloir dire que le mod envoie tes données quelque part.",
    "behavior.REACHES_INTERNET.advice":
      "Vérifie si le mod a une bonne raison d'utiliser Internet (cartes, fonctions en ligne). S'il n'a aucune fonction en ligne évidente, fais attention.",
    "behavior.RUNS_OTHER_PROGRAMS.title":
      "Essaie de lancer d'autres programmes sur ton ordinateur",
    "behavior.RUNS_OTHER_PROGRAMS.description":
      "Ce mod contient du code qui peut lancer d'autres programmes ou des commandes système sur ton ordinateur, et ModGuard n'a pas réussi à lire de quel programme il s'agit, ou ne l'a pas reconnu. Un mod de jeu n'a presque jamais besoin de faire ça, et c'est une méthode courante pour qu'un malware s'installe.",
    "behavior.RUNS_OTHER_PROGRAMS.advice":
      "Si le mod n'explique pas clairement pourquoi il lance des programmes externes, ne l'installe pas.",
    "behavior.RUNS_KNOWN_HELPER.title":
      "Demande à ton ordinateur de faire une seule tâche ordinaire",
    "behavior.RUNS_KNOWN_HELPER.description":
      "Ce mod lance un petit programme déjà livré avec ton ordinateur, pour faire une seule chose précise et ordinaire : ouvrir un lien dans ton navigateur, ou demander quelle carte graphique tu as. ModGuard a lu la commande dans le code du mod et l'a reconnue, et la commande exacte est indiquée ci-dessous pour que tu puisses vérifier. C'est très différent d'un mod qui lance une commande que personne ne peut lire.",
    "behavior.RUNS_KNOWN_HELPER.advice":
      "Lis la commande ci-dessous. Si elle ouvre un lien ou demande des infos sur ton matériel, c'est ce que font normalement les menus de mods et les mods graphiques, et il n'y a pas de quoi s'inquiéter.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.title":
      "Lance un autre programme, et ModGuard a lu lequel",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.description":
      "Ce mod lance un autre programme sur ton ordinateur, et ModGuard a réussi à lire la commande entière dans le code du mod. Elle est affichée ci-dessous. C'est très différent d'un mod qui lance une commande que personne ne peut lire : tu peux voir le nom du fichier qu'il lance et aller regarder ce fichier. Ce que ModGuard ne peut pas te dire, c'est ce qu'il y a dedans. Les programmes de mise à jour, les enregistreurs vidéo et les installeurs font tous ça de façon légitime.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.advice":
      "Lis la commande ci-dessous et va voir le fichier qu'elle nomme. Est-ce que ce mod a une raison de lancer un autre programme, comme une mise à jour, une fonction d'enregistrement ou un installeur ? S'il n'en a aucune, demande à l'auteur pourquoi avant de l'installer.",
    "behavior.TOUCHES_OUTSIDE_FILES.title":
      "Touche à des fichiers en dehors de l'espace du mod",
    "behavior.TOUCHES_OUTSIDE_FILES.description":
      "Ce mod contient du code qui lit ou écrit des fichiers en dehors des dossiers mods et config du jeu. Par exemple des dossiers système, ou ton profil utilisateur. Normalement, un mod n'a besoin que de son propre espace.",
    "behavior.TOUCHES_OUTSIDE_FILES.advice":
      "Demande à l'auteur du mod pourquoi il a besoin de fichiers en dehors du dossier du jeu avant de lui faire confiance.",
    "behavior.INDIRECT_CODE_LOADING.title":
      "Charge du code par des chemins détournés qui peuvent cacher ce qu'il fait",
    "behavior.INDIRECT_CODE_LOADING.description":
      "Ce mod charge du code supplémentaire pendant l'exécution, de façon détournée (par exemple en téléchargeant des classes ou en les fabriquant à la volée). Ça permet de cacher un comportement à un outil de vérification comme celui-ci.",
    "behavior.INDIRECT_CODE_LOADING.advice":
      "Préfère les mods dont tout le code est dans le fichier que tu as téléchargé. Vois ça comme un signal de prudence, surtout avec un accès à Internet.",
    "behavior.RUNS_UNCHECKED_CODE.title":
      "Exécute du code qui n'a jamais été dans le fichier que tu as vérifié",
    "behavior.RUNS_UNCHECKED_CODE.description":
      "Pendant que le jeu tourne, ce mod va chercher du code en plus, à une adresse web ou dans un fichier qu'il écrit lui-même, et le passe directement au jeu pour qu'il l'exécute. ModGuard a suivi ces octets à travers le code du mod pour le prouver ; ce n'est pas une supposition basée sur les classes que le mod mentionne. C'est ce qui compte le plus sur cette page, parce que la partie qui fait le travail n'est pas dans ce fichier : elle est sur le serveur de quelqu'un, elle peut être changée après ta vérification, et ce que tu recevras peut ne pas être ce qu'ont vu les autres. Un programme de mise à jour télécharge des choses lui aussi. Mais lui, il te remet un fichier et te demande de redémarrer. Ça, ça donne du nouveau code directement au jeu en train de tourner.",
    "behavior.RUNS_UNCHECKED_CODE.advice":
      "Ne l'installe pas. Il n'existe aucune version de ce fichier que quiconque puisse vérifier, parce que la partie qui compte est téléchargée plus tard. Si tu l'as déjà lancé, considère tes comptes Minecraft et Microsoft comme compromis : change le mot de passe, déconnecte-toi partout, et vérifie s'il y a des connexions que tu ne reconnais pas.",
    "behavior.LOADS_NATIVE_CODE.title":
      "Charge des bibliothèques de code natif",
    "behavior.LOADS_NATIVE_CODE.description":
      "Ce mod charge des bibliothèques natives (.dll/.so/.dylib) qui s'exécutent en dehors de la sandbox Java du jeu, avec un accès complet à ton ordinateur. Très peu de mods en ont vraiment besoin.",
    "behavior.LOADS_NATIVE_CODE.advice":
      "N'accepte ça que de la part de mods connus qui expliquent pourquoi ils ont besoin de code natif (vidéo ou audio, par exemple).",
    "behavior.CARRIES_A_PROGRAM.title": "Transporte un programme à l'intérieur",
    "behavior.CARRIES_A_PROGRAM.description":
      "Dans ce mod se trouve un fichier que ton ordinateur lancerait comme un programme à part entière : un exécutable Windows, un script que le shell du système exécute, ou un fichier d'installation. Un mod, c'est du code Java que le jeu charge ; il n'a pas besoin de trimballer un deuxième programme avec lui. ModGuard ne peut pas lire ce que fait ce programme, et c'est ça le problème : tout le reste de cette page a été lu dans le code du mod, et cette partie-là ne peut pas l'être.",
    "behavior.CARRIES_A_PROGRAM.advice":
      "Le nom du fichier est indiqué ci-dessous. À moins que ce soit un installeur que tu as cherché exprès, et qu'il dise clairement qu'il en contient un, ne l'installe pas.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.title":
      "Contient un nom utilisé par une famille connue de plugins malveillants",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.description":
      "Ce fichier contient un nom qu'une famille connue de plugins de serveur malveillants utilise pour le fichier qu'elle dépose sur les machines qu'elle infecte. ModGuard a trouvé ce nom écrit à l'intérieur de ce fichier ; il n'a pas vu le fichier s'en servir, donc c'est une sérieuse raison de se méfier plutôt qu'une preuve en soi.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.advice":
      "Ne l'installe pas sur un serveur auquel tu tiens tant que tu ne sais pas d'où il vient. Si tu l'as téléchargé depuis une liste de plugins, compare l'auteur et la page de téléchargement avec les officiels. Cette famille se propage en remplaçant de vrais plugins par des copies d'elle-même.",
    "behavior.STARTS_AUTOMATICALLY.title":
      "Se programme pour démarrer tout seul ou rester en place",
    "behavior.STARTS_AUTOMATICALLY.description":
      "Ce mod fait référence à des moyens de se lancer au démarrage de ton ordinateur ou de continuer à tourner en dehors du jeu (dossiers de démarrage, tâches planifiées, clés de registre autorun). Un mod de jeu ne devrait jamais faire ça.",
    "behavior.STARTS_AUTOMATICALLY.advice":
      "N'installe pas un mod qui veut survivre au jeu auquel il appartient.",
    "behavior.DISABLES_YOUR_PROTECTION.title":
      "Dit à ton antivirus d'arrêter de regarder",
    "behavior.DISABLES_YOUR_PROTECTION.description":
      "Ce mod lance une commande qui désactive une partie de la protection de ton ordinateur. Elle dit à Windows Defender d'arrêter d'analyser un dossier, ou d'ignorer un programme précis. ModGuard a lu la commande entière dans le mod, et elle est affichée ci-dessous. Rien de ce que fait un mod Minecraft n'a besoin de ça. C'est l'étape que franchit un malware pour que ce qu'il installe ensuite passe inaperçu.",
    "behavior.DISABLES_YOUR_PROTECTION.advice":
      "Ne l'installe pas. Si tu l'as déjà lancé, ouvre Sécurité Windows et regarde dans la liste des exclusions s'il y a des entrées que tu n'as pas ajoutées. Supprimer le mod ne les enlève pas. Ensuite, lance une analyse complète.",
    "behavior.HIDES_ITS_CODE.title": "Cache ou brouille son propre code",
    "behavior.HIDES_ITS_CODE.description":
      "Le code de ce mod a été rendu difficile à lire exprès : noms brouillés, ou morceaux chiffrés qui ne sont déchiffrés qu'à l'exécution. Les mods honnêtes ont rarement besoin de cacher ce qu'ils font.",
    "behavior.HIDES_ITS_CODE.advice":
      "Fais très attention. Du code caché plus n'importe quel autre signal d'alerte, c'est une raison sérieuse de ne pas l'installer.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.title":
      "Vérifie s'il est observé, et peut se comporter autrement si c'est le cas",
    "behavior.CHECKS_IF_IT_IS_WATCHED.description":
      "Ce mod regarde qui est ton ordinateur : son nom, sa carte réseau, le compte que tu utilises. Il compare ce qu'il trouve à une liste de noms utilisés par les machines d'analyse et les sandbox de test. Si du code fait ça, c'est pour une seule raison : pouvoir bien se tenir pendant qu'on l'examine, et faire autre chose sur l'ordinateur d'une vraie personne. Ça veut dire aussi qu'un résultat qui ne trouve rien, venant d'un outil comme celui-ci, vaut moins que d'habitude pour ce fichier.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.advice":
      "Considère tout résultat 'rien trouvé' sur ce mod, y compris celui de ModGuard, comme peu fiable. Le mod est écrit pour produire exactement ça. À moins que l'auteur puisse expliquer la liste ci-dessous, ne l'installe pas.",
    "behavior.ASKS_EXTRA_ACCESS.title":
      "Demande plus d'accès qu'un mod ne devrait en avoir besoin",
    "behavior.ASKS_EXTRA_ACCESS.description":
      "Ce mod va fouiller dans les entrailles du runtime Java, là où le code normal ne va pas : réécrire d'autre code au moment où il se charge, désactiver les contrôles de sécurité de Java, ou utiliser les API 'unsafe' pour autre chose que déplacer de la mémoire. Le simple travail de mémoire rapide est écarté exprès : tous les mods de rendu et d'optimisation font ça, donc le compter ne t'apprendrait rien.",
    "behavior.ASKS_EXTRA_ACCESS.advice":
      "Normal pour les mods qui modifient le code du jeu. Mérite un deuxième coup d'œil dans un mod qui n'a aucune raison de le faire.",
    "behavior.ACTS_AS_JAVA_AGENT.title": "Se déclare comme agent Java",
    "behavior.ACTS_AS_JAVA_AGENT.description":
      "Ce fichier se déclare comme un agent Java, ce qui lui permet de réécrire le code d'autres programmes au moment où ce code se charge : celui du jeu, celui des autres mods, tout ce qui tourne dans le même processus Java. Les profilers et les outils de développement fonctionnent comme ça ; les mods de gameplay, non.",
    "behavior.ACTS_AS_JAVA_AGENT.advice":
      "Ne l'installe que si c'est un outil de développement que tu as cherché exprès. Un mod de gameplay n'a aucune raison d'être un agent Java.",
    "behavior.TOUCHES_SENSITIVE_FILES.title":
      "Lit des fichiers contenant des identifiants ou des données privées",
    "behavior.TOUCHES_SENSITIVE_FILES.description":
      "Ce mod fait référence à des fichiers connus pour contenir des identifiants de compte ou des données privées. Par exemple la connexion enregistrée du launcher, les dossiers de données des navigateurs, ou le stockage des applis de messagerie. C'est le schéma classique des mods voleurs de comptes.",
    "behavior.TOUCHES_SENSITIVE_FILES.advice":
      "Ne l'installe pas. Si tu l'as déjà lancé, change tes mots de passe et déconnecte les autres sessions.",
    "behavior.ACTS_AS_YOU_IN_GAME.title": "Peut écrire dans le jeu à ta place",
    "behavior.ACTS_AS_YOU_IN_GAME.description":
      "Ce mod peut envoyer des messages dans le chat et des commandes au serveur en ton nom, sans que tu tapes quoi que ce soit. Sur un serveur avec une économie, ça suffit à vider ton solde : un '/pay' caché et l'argent est à quelqu'un d'autre. Les mods de macros et de raccourcis clavier font ça pour de bonnes raisons ; ce qui compte, c'est de savoir si ça arrive quand tu appuies sur une touche ou tout seul, en silence.",
    "behavior.ACTS_AS_YOU_IN_GAME.advice":
      "Si ce n'est pas un mod de macros ou de raccourcis, demande-toi pourquoi il a besoin de parler au serveur à ta place. Regarde la section live watch ci-dessous : elle montre ce que le mod a vraiment tapé quand ModGuard l'a lancé.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.title":
      "Contient une commande toute prête qui donne ton argent ou tes objets",
    "behavior.CARRIES_A_TRANSFER_COMMAND.description":
      "Dans le code de ce mod est écrite une commande complète qui donne de l'argent ou des objets à un autre joueur. Ce n'est pas la possibilité de taper une telle commande ; ce sont les mots eux-mêmes, déjà écrits. Un mod qui te laisse taper des commandes n'a aucune raison d'en transporter une déjà remplie avec le nom d'un inconnu. Voilà à quoi ressemble un voleur dans le jeu : il ne touche jamais à ton ordinateur, il dépense juste ton argent à ta place.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.advice":
      "Lis la commande ci-dessous. En général, elle nomme qui reçoit l'argent. À moins que ce soit quelque chose que tu as demandé à ce mod de faire, ne l'installe pas, et préviens la personne qui te l'a donné.",
    "behavior.MOVES_YOUR_ITEMS.title":
      "Peut sortir des objets de ton inventaire",
    "behavior.MOVES_YOUR_ITEMS.description":
      "Ce mod peut cliquer sur les cases de ton inventaire, jeter des objets, ou manipuler un coffre ou une fenêtre d'échange à ta place. Les mods de rangement font ça de façon légitime. C'est aussi exactement comme ça qu'un mod vide ton inventaire dans le coffre de quelqu'un d'autre pendant que tu ne bouges pas.",
    "behavior.MOVES_YOUR_ITEMS.advice":
      "Normal pour les mods de rangement d'inventaire et de craft automatique. Dans n'importe quel autre mod, c'est une raison d'aller voir ce que la section live watch l'a vu faire.",
    "behavior.READS_YOUR_SESSION.title": "Lit la clé qui prouve que tu es toi",
    "behavior.READS_YOUR_SESSION.description":
      "Ce mod lit ton token de session Minecraft. Ce token, c'est la clé que ton jeu utilise pour prouver que c'est bien ton compte, sans avoir besoin de ton mot de passe. Certains mods ont une vraie raison de le faire : envoyer un skin ou une cape, ça veut dire prouver à un serveur que le compte est le tien. Mais c'est aussi exactement ce que prend un voleur de comptes, et c'est la seule chose qui permet à quelqu'un de se connecter à ta place.",
    "behavior.READS_YOUR_SESSION.advice":
      "Demande-toi ce que fait ce mod qui a besoin de ton compte : les skins, les capes et les cosmétiques sont de vraies raisons. S'il n'a aucune fonction en ligne, ça vaut la peine de poser la question. Si ça t'inquiète, déconnecte-toi partout depuis la page de ton compte Microsoft. Ça rend inutile tout token copié.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.title":
      "A une faille que quelqu'un d'autre pourrait utiliser contre toi",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.description":
      "Ce mod accepte des données venant du réseau d'une façon qui permet à celui qui les envoie d'exécuter du code sur ton ordinateur. C'est une faille dans le mod, pas un signe que son auteur voulait faire du mal. C'est une des erreurs les plus faciles à faire en Java, et elle est arrivée à des mods connus et appréciés. Ça ne veut pas dire que le mod essaie de te voler. Ça veut dire que quelqu'un d'autre pourrait le faire, s'il peut atteindre le serveur sur lequel tu joues.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.advice":
      "Regarde si une version plus récente corrige ça, et préviens l'auteur. La plupart le corrigent vite une fois prévenus. En attendant, fais attention aux serveurs que tu rejoins avec ce mod installé ; une faille comme celle-ci n'est atteignable que par quelqu'un qui peut envoyer des données à ton jeu.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.title":
      "N'est pas le genre de fichier qu'il prétend être",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.description":
      "Ce fichier porte un nom de schematic (.litematic, .schem, .schematic ou .nbt) mais son contenu réel est un programme : un mod Minecraft ou un zip de code, pas une construction sauvegardée. Un schematic, ce sont des données de structure, et ça n'est jamais empaqueté comme ça. Déguiser un programme en schematic est une astuce connue pour amener quelqu'un à ouvrir un mod qu'il n'aurait pas installé volontairement.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.advice":
      "Ne charge pas ça dans Litematica, WorldEdit ou n'importe quel outil de schematics. ModGuard a lu le vrai contenu, et tout ce qu'il a trouvé sur le programme lui-même est affiché ci-dessous. Juge-le pour ce qu'il est.",
    "behavior.HIDES_AN_EXECUTABLE.title":
      "Est un programme déguisé en schematic",
    "behavior.HIDES_AN_EXECUTABLE.description":
      "Ce fichier porte un nom de schematic mais son contenu est un programme exécutable : un exécutable Windows, macOS ou Linux, ou un script. Une construction sauvegardée n'est jamais rien de tout ça. ModGuard ne peut pas lire ce que fait le programme, et un schematic n'a aucune raison légitime d'en être un, donc c'est traité comme une tentative de te faire lancer un programme que tu ne voulais pas lancer.",
    "behavior.HIDES_AN_EXECUTABLE.advice":
      "Supprime-le. Ne l'ouvre pas, ne lui remets pas sa vraie extension, et ne le lance pas. Si tu l'as déjà ouvert, considère que cet ordinateur est peut-être compromis.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.title":
      "Exécute des commandes quand tu le places",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.description":
      "Cette construction contient des blocs de commande ou des données de commande : une fois posée et déclenchée, elle peut exécuter ces commandes en ton nom. Ça n'arrive que dans un monde où les commandes sont autorisées (solo avec les cheats activés, ou un serveur où tu peux poser des blocs de commande). Les blocs de commande sont tout à fait normaux pour les machines en redstone, les maps aventure et les mini-jeux. Les commandes que ModGuard a lues sont listées ci-dessous pour que tu puisses les voir.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.advice":
      "Lis les commandes ci-dessous. Si c'est une construction en redstone ou une map, les blocs de commande sont normaux. Si c'est censé être une simple structure, demande-toi pourquoi elle a besoin d'exécuter des commandes.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.title":
      "Contient une commande qui peut te nuire une fois posée",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.description":
      "Un bloc de commande dans cette construction contient une commande qu'une construction normale n'a aucune raison d'avoir : donner les droits d'opérateur, lancer une fonction de datapack, ou supprimer des blocs. Une fois la construction posée dans un monde où les commandes s'exécutent et le bloc déclenché, ça se fait en ton nom. Tu ne tapes rien. Charger un schematic pour le prévisualiser n'exécute rien ; c'est le poser dans un monde en cours qui compte.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.advice":
      "Lis la commande ci-dessous. Ne pose pas cette construction dans un monde où les cheats ou les blocs de commande sont activés. Si elle donne les droits d'opérateur, lance une fonction de datapack, ou nomme un autre joueur, considère ça comme un piège.",
    "behavior.LOOKS_LIKE_A_BOMB.title":
      "Est fait pour faire planter ce qui l'ouvre",
    "behavior.LOOKS_LIKE_A_BOMB.description":
      "Ce fichier est construit comme une attaque par plantage : soit il se décompresse en quelque chose d'énormément plus gros que sa taille sur le disque, soit ses données sont imbriquées si profondément que les lire épuiserait la mémoire. Une vraie construction sauvegardée ne ressemble jamais à ça. C'est fait pour figer ou faire planter le mod qui l'ouvre. Le lecteur de ModGuard s'est arrêté avant que ça arrive.",
    "behavior.LOOKS_LIKE_A_BOMB.advice":
      "Supprime-le. Ne le charge pas dans un mod de schematics. Le but d'un fichier comme celui-ci est de faire planter le programme qui le lit.",
    "verdict.unsafe.label": "Dangereux",
    "verdict.unsafe.headline":
      "ModGuard a trouvé de sérieux signaux d'alerte. N'installe pas ce mod.",
    "verdict.be-careful.label": "Prudence",
    "verdict.be-careful.headline":
      "Ce mod fait certaines choses qui méritent qu'on regarde de plus près avant de lui faire confiance.",
    "verdict.minor-notes.label": "Notes mineures",
    "verdict.minor-notes.headline":
      "Plutôt ordinaire, avec quelques points bons à savoir. Beaucoup de mods légitimes ressemblent à ça.",
    "verdict.looks-safe.label": "Semble sûr",
    "verdict.looks-safe.headline":
      "ModGuard n'a trouvé aucun des comportements à risque qu'il vérifie.",
    "verdict.unsafe.imperative": "Ne lance pas ce mod.",
    "verdict.be-careful.imperative": "Fais attention avec celui-là.",
    "verdict.minor-notes.imperative": "Probablement OK. Ça vaut un coup d'œil.",
    "verdict.looks-safe.imperative": "Rien qui demande d'agir.",
    "packaging.verified.headline":
      "C'est un mod correctement construit et son archive est signée. Chaque fichier correspond toujours aux empreintes enregistrées au moment de la signature, donc rien n'a été modifié depuis.",
    "packaging.valid.headline":
      "C'est un mod correctement construit : une vraie description pour le mod loader, du code organisé comme le produit un outil de build, et le code qu'il dit lancer est bien dans le fichier.",
    "packaging.unverified.headline":
      "ModGuard n'a pas pu confirmer que ce fichier est un mod correctement construit, donc tout ce qu'il fait est traité avec méfiance.",
    "packaging.malformed.headline":
      "Cette archive est mal assemblée : des morceaux sont cassés, manquants, ou ne correspondent plus à ce que le fichier annonce. Rien que ça, c'est une raison d'être prudent.",
    "kind.ACCOUNT_STEALER": "VOLEUR DE COMPTES",
    "kind.SESSION_STEALER": "VOLEUR DE SESSION",
    "kind.ITEM_STEALER": "VOLEUR D'OBJETS",
    "kind.REMOTE_CODE_LOADER": "CODE DISTANT",
    "kind.BUNDLED_PROGRAM": "PROGRAMME INCLUS",
    "kind.DEFENCE_DISABLER": "DÉSACTIVE L'ANTIVIRUS",
    "kind.PLUGIN_WORM_MARKER": "MARQUEUR DE VER",
    "kind.DISGUISED_PROGRAM": "PROGRAMME DÉGUISÉ",
    "kind.DISGUISED_MOD": "MOD DÉGUISÉ",
    "kind.TRAPPED_BUILD": "CONSTRUCTION PIÉGÉE",
    "kind.CRASH_TRAP": "PIÈGE À PLANTAGE",
    "kind.EXPLOITABLE": "FAILLE",
    "ui.finding.advice": "Ce que tu peux faire :",
    "ui.finding.libraryOnly":
      "Vient d'une bibliothèque livrée avec ce mod, pas de son propre code. Affiché, mais pas compté.",
    "ui.finding.discounted": "Ordinaire pour un mod correctement empaqueté.",
    "ui.finding.evidence": "Ce que ModGuard a vu",
    "ui.kind.what": "Ce que c'est",
    "ui.kind.found": "Ce qui a été trouvé",
    "ui.kind.notAFamilyName":
      "Ce n'est pas un nom de malware trouvé dans une liste. ModGuard n'a pas de liste de ce genre. C'est la façon dont ModGuard décrit ce qu'il a trouvé dans ce fichier, et les éléments sur lesquels ça repose sont sur cette page.",
    "ui.language.title": "Changer de langue",
    "ui.language.full": "complet",
    "ui.language.scope":
      "Les verdicts et ce qui a été trouvé sont traduits. Certaines explications plus longues et les réglages restent en anglais.",
  },
  lv = {
    "behavior.REACHES_INTERNET.title": "Se conecta à internet",
    "behavior.REACHES_INTERNET.description":
      "Este mod tem código que abre conexões de rede ou faz requisições para a web. Sozinho, isso é normal em muitos mods (mods de mapa, ajudantes de multiplayer, verificadores de atualização), mas junto com outros sinais de alerta pode significar que o mod manda seus dados para algum lugar.",
    "behavior.REACHES_INTERNET.advice":
      "Veja se o mod tem um bom motivo para usar a internet (mapas, recursos online). Se ele não tem nenhum recurso online óbvio, tenha cuidado.",
    "behavior.RUNS_OTHER_PROGRAMS.title":
      "Tenta executar outros programas no seu computador",
    "behavior.RUNS_OTHER_PROGRAMS.description":
      "Este mod tem código que pode iniciar outros programas ou comandos do sistema no seu computador, e o ModGuard não conseguiu ler qual programa é esse ou não reconheceu ele. Um mod de jogo quase nunca precisa disso, e essa é uma forma comum de um malware se instalar.",
    "behavior.RUNS_OTHER_PROGRAMS.advice":
      "A não ser que o mod explique claramente por que ele inicia programas externos, não instale.",
    "behavior.RUNS_KNOWN_HELPER.title":
      "Pede ao seu computador para fazer uma tarefa comum",
    "behavior.RUNS_KNOWN_HELPER.description":
      "Este mod inicia um programinha que já vem com o seu computador, para fazer uma tarefa específica e comum: abrir um link no navegador, ou perguntar qual placa de vídeo você tem. O ModGuard leu o comando no código do mod e reconheceu ele, e o comando exato está listado abaixo para você conferir. Isso é bem diferente de um mod que executa um comando que ninguém consegue ler.",
    "behavior.RUNS_KNOWN_HELPER.advice":
      "Leia o comando abaixo. Se ele está abrindo um link ou perguntando sobre o seu hardware, é o que menus de mods e mods gráficos normalmente fazem, e não tem nada para se preocupar.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.title":
      "Inicia outro programa, e o ModGuard leu qual é",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.description":
      "Este mod inicia outro programa no seu computador, e o ModGuard conseguiu ler o comando inteiro no código do mod. Ele está escrito abaixo. Isso é bem diferente de um mod que executa um comando que ninguém consegue ler: você vê o nome do arquivo que ele inicia e pode ir olhar esse arquivo. O que o ModGuard não pode te dizer é o que tem dentro dele. Atualizadores, gravadores de vídeo e instaladores fazem isso de forma legítima.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.advice":
      "Leia o comando abaixo e vá conferir o arquivo que ele cita. Este mod tem algum motivo para iniciar outro programa, como um atualizador, uma função de gravação ou um instalador? Se não tem nenhum, pergunte o motivo ao autor antes de instalar.",
    "behavior.TOUCHES_OUTSIDE_FILES.title":
      "Mexe em arquivos fora da área do próprio mod",
    "behavior.TOUCHES_OUTSIDE_FILES.description":
      "Este mod tem código que lê ou escreve arquivos fora das pastas de mods e de config do jogo. Por exemplo, pastas do sistema ou o seu perfil de usuário. Normalmente um mod só precisa da área dele.",
    "behavior.TOUCHES_OUTSIDE_FILES.advice":
      "Pergunte ao autor do mod por que ele precisa de arquivos fora da pasta do jogo antes de confiar nele.",
    "behavior.INDIRECT_CODE_LOADING.title":
      "Carrega código de formas indiretas que podem esconder o que ele faz",
    "behavior.INDIRECT_CODE_LOADING.description":
      "Este mod carrega código extra enquanto roda, por um caminho indireto (por exemplo baixando classes ou montando elas na hora). Isso torna possível esconder comportamentos de um verificador como este.",
    "behavior.INDIRECT_CODE_LOADING.advice":
      "Prefira mods cujo código está todo no arquivo que você baixou. Trate isso como um sinal de atenção, principalmente junto com acesso à internet.",
    "behavior.RUNS_UNCHECKED_CODE.title":
      "Executa código que nunca esteve no arquivo que você verificou",
    "behavior.RUNS_UNCHECKED_CODE.description":
      "Com o jogo rodando, este mod vai buscar mais código, de um endereço na web ou de um arquivo que ele mesmo escreve, e entrega esse código direto para o jogo executar. O ModGuard seguiu esses bytes pelo próprio código do mod para provar isso; não é um palpite baseado em quais classes o mod menciona. Isso importa mais do que qualquer outra coisa nesta página, porque a parte que faz o trabalho não está neste arquivo: ela fica no servidor de alguém, pode ser trocada depois que você verificar, e pode ser diferente para você e para qualquer outra pessoa que olhou. Um atualizador de mod também baixa coisas. Mas um atualizador te entrega um arquivo e pede para reiniciar. Este aqui entrega código novo direto para o jogo que está rodando.",
    "behavior.RUNS_UNCHECKED_CODE.advice":
      "Não instale. Não existe versão deste arquivo que alguém possa verificar, porque a parte que importa é baixada depois. Se você já executou, trate suas contas Minecraft e Microsoft como comprometidas: troque a senha, saia de todos os dispositivos e procure logins que você não reconhece.",
    "behavior.LOADS_NATIVE_CODE.title": "Carrega bibliotecas nativas",
    "behavior.LOADS_NATIVE_CODE.description":
      "Este mod carrega bibliotecas nativas (.dll/.so/.dylib) que rodam fora da sandbox Java do jogo, com acesso total ao seu computador. Bem poucos mods realmente precisam disso.",
    "behavior.LOADS_NATIVE_CODE.advice":
      "Só aceite isso de mods conhecidos que expliquem por que precisam de código nativo (por exemplo vídeo ou áudio).",
    "behavior.CARRIES_A_PROGRAM.title": "Carrega um programa dentro dele",
    "behavior.CARRIES_A_PROGRAM.description":
      "Empacotado dentro deste mod há um arquivo que o seu computador executaria como um programa por conta própria: um executável do Windows, um script que o sistema roda, ou um arquivo de instalação. Um mod é código Java que o jogo carrega; ele não precisa carregar um segundo programa junto. O ModGuard não consegue ler o que esse programa faz, e o problema é esse: todo o resto desta página foi lido do próprio código do mod, e esta parte não dá para ler.",
    "behavior.CARRIES_A_PROGRAM.advice":
      "O nome do arquivo está abaixo. A não ser que isto seja um instalador que você foi procurar de propósito, e que diga com todas as letras que carrega um, não instale.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.title":
      "Carrega um nome usado por uma família conhecida de plugins maliciosos",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.description":
      "Este arquivo contém um nome que uma família conhecida de plugins maliciosos de servidor usa para o arquivo que ela deixa nas máquinas que infecta. O ModGuard encontrou o nome escrito dentro deste arquivo; ele não viu o arquivo fazer nada com esse nome, então isto é um forte motivo de suspeita, e não uma prova por si só.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.advice":
      "Não instale isto em um servidor que seja importante para você até saber de onde ele veio. Se você baixou de uma lista de plugins, compare o autor e a página de download com os oficiais. Essa família se espalha trocando plugins de verdade por cópias dela mesma.",
    "behavior.STARTS_AUTOMATICALLY.title":
      "Se configura para iniciar sozinho ou continuar rodando",
    "behavior.STARTS_AUTOMATICALLY.description":
      "Este mod menciona formas de se iniciar quando o seu computador liga ou de continuar rodando fora do jogo (pastas de inicialização, tarefas agendadas, chaves de autorun no registro). Um mod de jogo nunca deveria fazer isso.",
    "behavior.STARTS_AUTOMATICALLY.advice":
      "Não instale um mod que quer sobreviver ao próprio jogo.",
    "behavior.DISABLES_YOUR_PROTECTION.title":
      "Manda o seu antivírus parar de olhar",
    "behavior.DISABLES_YOUR_PROTECTION.description":
      "Este mod executa um comando que desliga parte da proteção do seu próprio computador. Ele manda o Windows Defender parar de escanear uma pasta, ou ignorar um programa específico. O ModGuard leu o comando inteiro dentro do mod, e ele está escrito abaixo. Nada do que um mod de Minecraft faz precisa disso. É o passo que um malware dá para que o que ele instalar depois não seja percebido.",
    "behavior.DISABLES_YOUR_PROTECTION.advice":
      "Não instale. Se você já executou, abra a Segurança do Windows e procure na lista de exclusões por itens que você não adicionou. Apagar o mod não remove eles. Depois faça uma verificação completa.",
    "behavior.HIDES_ITS_CODE.title": "Esconde ou embaralha o próprio código",
    "behavior.HIDES_ITS_CODE.description":
      "O código deste mod foi feito de propósito para ser difícil de ler: nomes embaralhados, ou pedaços criptografados que só são decifrados enquanto ele roda. Mods honestos raramente precisam esconder o que fazem.",
    "behavior.HIDES_ITS_CODE.advice":
      "Tenha muito cuidado. Código escondido junto com qualquer outro sinal de alerta é um forte motivo para não instalar.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.title":
      "Verifica se está sendo observado, e pode agir diferente se estiver",
    "behavior.CHECKS_IF_IT_IS_WATCHED.description":
      "Este mod olha quem é o seu computador: o nome dele, a placa de rede, a conta em que você está logado. Ele compara o que encontra com uma lista de nomes que máquinas de análise e sandboxes de teste usam. Um código faz isso por um motivo só: para se comportar bem enquanto está sendo examinado e fazer outra coisa no computador de uma pessoa de verdade. Isso também quer dizer que um resultado limpo de uma ferramenta como esta vale menos que o normal para este arquivo.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.advice":
      "Trate qualquer resultado de 'nada encontrado' sobre este mod, inclusive o do próprio ModGuard, como não confiável. O mod foi escrito para produzir exatamente isso. A não ser que o autor consiga explicar a lista abaixo, não instale.",
    "behavior.ASKS_EXTRA_ACCESS.title":
      "Pede mais acesso do que um mod deveria precisar",
    "behavior.ASKS_EXTRA_ACCESS.description":
      "Este mod mexe em partes internas do Java que código normal não toca: reescrever outro código enquanto ele carrega, desligar as próprias checagens de segurança do Java, ou usar as APIs 'unsafe' para algo além de mover memória de um lado para o outro. O uso simples de memória rápida ficou de fora de propósito: todo mod de renderização e de desempenho faz isso, então contar isso não dizia nada.",
    "behavior.ASKS_EXTRA_ACCESS.advice":
      "Esperado em mods que alteram o código do jogo. Vale um segundo olhar em um mod que não tem motivo para isso.",
    "behavior.ACTS_AS_JAVA_AGENT.title": "Se declara um agente Java",
    "behavior.ACTS_AS_JAVA_AGENT.description":
      "Este arquivo se declara como um agente Java, o que permite a ele reescrever o código de outros programas enquanto esse código carrega: o do jogo, o de outros mods, qualquer coisa no mesmo processo Java. Profilers e ferramentas de desenvolvedor funcionam assim; mods de gameplay não.",
    "behavior.ACTS_AS_JAVA_AGENT.advice":
      "Só instale isto se for uma ferramenta de desenvolvedor que você foi procurar de propósito. Um mod de gameplay não tem motivo para ser um agente Java.",
    "behavior.TOUCHES_SENSITIVE_FILES.title":
      "Lê arquivos que guardam logins ou dados privados",
    "behavior.TOUCHES_SENSITIVE_FILES.description":
      "Este mod menciona arquivos conhecidos por guardar credenciais de conta ou dados privados. Por exemplo, o login salvo do launcher do jogo, pastas de dados do navegador, ou o armazenamento de apps de mensagem. Esse é o padrão clássico dos mods que roubam contas.",
    "behavior.TOUCHES_SENSITIVE_FILES.advice":
      "Não instale. Se você já executou, troque suas senhas e encerre as outras sessões.",
    "behavior.ACTS_AS_YOU_IN_GAME.title": "Pode digitar no jogo no seu nome",
    "behavior.ACTS_AS_YOU_IN_GAME.description":
      "Este mod pode mandar mensagens de chat e comandos para o servidor no seu nome, sem você digitar nada. Em um servidor com economia isso já basta para esvaziar o seu saldo: um '/pay' escondido e o dinheiro é de outra pessoa. Mods de keybind e de macro fazem isso por bons motivos, então o que importa é se acontece quando você aperta uma tecla ou quietinho, por conta própria.",
    "behavior.ACTS_AS_YOU_IN_GAME.advice":
      "Se este não é um mod de macro ou keybind, pergunte por que ele precisa falar com o servidor no seu nome. Veja a seção de observação ao vivo abaixo: ela mostra o que o mod realmente digitou quando o ModGuard executou ele.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.title":
      "Carrega um comando pronto que dá o seu dinheiro ou as suas coisas para outro",
    "behavior.CARRIES_A_TRANSFER_COMMAND.description":
      "Escrito no código deste mod há um comando pronto que entrega dinheiro ou itens para outro jogador. Não é a capacidade de digitar um comando desses; são as palavras em si, já escritas. Um mod que deixa você digitar comandos não tem motivo para carregar um já preenchido com o nome de um desconhecido. É assim que age um ladrão dentro do jogo: ele nunca toca no seu computador, só gasta o seu dinheiro por você.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.advice":
      "Leia o comando abaixo. Normalmente ele diz quem recebe. A não ser que seja algo que você pediu para este mod fazer, não instale, e avise quem te passou o arquivo.",
    "behavior.MOVES_YOUR_ITEMS.title": "Pode tirar itens do seu inventário",
    "behavior.MOVES_YOUR_ITEMS.description":
      "Este mod pode clicar em slots do seu inventário, largar itens, ou mexer em um baú ou numa janela de troca por você. Mods de organização fazem isso de forma legítima. É também exatamente assim que um mod esvazia o seu inventário dentro do baú de outra pessoa enquanto você está parado.",
    "behavior.MOVES_YOUR_ITEMS.advice":
      "Esperado em organizadores de inventário e auto-crafters. Em qualquer outra coisa, é um motivo para olhar o que a seção de observação ao vivo viu ele fazer.",
    "behavior.READS_YOUR_SESSION.title": "Lê a chave que prova que você é você",
    "behavior.READS_YOUR_SESSION.description":
      "Este mod lê o seu token de sessão do Minecraft. Esse token é a chave que o seu jogo usa para provar que a conta é sua, sem precisar da senha. Alguns mods têm um motivo de verdade para isso: enviar uma skin ou uma capa significa provar para um servidor que a conta é sua. Mas é também exatamente o que um ladrão de contas leva, e é a única coisa que deixa outra pessoa entrar como se fosse você.",
    "behavior.READS_YOUR_SESSION.advice":
      "Pergunte o que este mod faz que precisa da sua conta: skins, capas e cosméticos são motivos de verdade. Se ele não tem nenhum recurso online, vale perguntar sobre isso. Se você está preocupado, saia de todos os dispositivos pela página da sua conta Microsoft. Isso faz qualquer token copiado virar inútil.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.title":
      "Tem uma falha que outra pessoa poderia usar contra você",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.description":
      "Este mod aceita dados da rede de um jeito que deixa quem manda esses dados executar código no seu computador. Isso é um buraco no mod, não um sinal de que o autor dele quis fazer mal. Esse é um dos erros mais fáceis de cometer em Java, e já aconteceu com mods conhecidos e queridos. Não quer dizer que o mod está tentando te roubar. Quer dizer que outra pessoa poderia, se ela conseguir chegar ao servidor em que você joga.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.advice":
      "Veja se uma versão mais nova corrige isso, e avise o autor. A maioria corrige rápido assim que fica sabendo. Até lá, tome cuidado com os servidores em que você entra com ele instalado; um buraco desses só é alcançável por alguém que consiga mandar dados para o seu jogo.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.title":
      "Não é o tipo de arquivo que diz ser",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.description":
      "Este arquivo tem nome de schematic (.litematic, .schem, .schematic ou .nbt), mas o conteúdo dele é um programa: um mod de Minecraft ou um zip de código, e não uma construção salva. Um schematic é dado de estrutura e nunca é empacotado assim. Disfarçar um programa de schematic é um truque conhecido para fazer alguém abrir um mod que não instalaria de propósito.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.advice":
      "Não carregue isto no Litematica, no WorldEdit nem em nenhuma ferramenta de schematic. O ModGuard leu o conteúdo de verdade, e o que foi encontrado sobre o programa em si está abaixo. Julgue ele pelo que ele é.",
    "behavior.HIDES_AN_EXECUTABLE.title":
      "É um programa disfarçado de schematic",
    "behavior.HIDES_AN_EXECUTABLE.description":
      "Este arquivo tem nome de schematic, mas o conteúdo dele é um programa executável: um executável de Windows, macOS ou Linux, ou um script. Uma construção salva nunca é nada disso. O ModGuard não consegue ler o que o programa faz, e não existe motivo legítimo para um schematic ser um programa, então isto é tratado como uma tentativa de fazer você executar um programa sem querer.",
    "behavior.HIDES_AN_EXECUTABLE.advice":
      "Apague. Não abra, não renomeie de volta para a extensão real, e não execute. Se você já abriu, trate este computador como possivelmente comprometido.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.title":
      "Executa comandos quando você coloca",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.description":
      "Esta construção tem blocos de comando ou dados de comando, então, depois de colocada e ativada, ela pode executar esses comandos no seu nome. Isso só acontece em um mundo onde comandos são permitidos (singleplayer com cheats ligados, ou um servidor onde você pode colocar blocos de comando). Blocos de comando são completamente normais em engenhocas de redstone, mapas de aventura e minigames. Os comandos que o ModGuard leu estão listados abaixo para você ver.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.advice":
      "Leia os comandos abaixo. Se esta é uma construção de redstone ou de mapa, blocos de comando são esperados. Se era para ser uma estrutura comum, pergunte por que ela precisa executar comandos.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.title":
      "Carrega um comando que pode te prejudicar quando colocado",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.description":
      "Um bloco de comando desta construção carrega um comando que uma construção normal não tem motivo para ter: dar poderes de operador (OP), executar uma função de datapack, ou apagar blocos. Assim que a construção for colocada em um mundo onde comandos funcionam e o bloco for ativado, ele faz isso no seu nome. Você não digita nada. Carregar um schematic só para pré-visualizar não executa nada; colocar em um mundo de verdade é o que importa.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.advice":
      "Leia o comando abaixo. Não coloque esta construção em um mundo com cheats ou blocos de comando habilitados. Se ele dá poderes de operador, executa uma função de datapack, ou cita outro jogador, trate como uma armadilha.",
    "behavior.LOOKS_LIKE_A_BOMB.title":
      "Foi feito para travar o que tentar abrir ele",
    "behavior.LOOKS_LIKE_A_BOMB.description":
      "Este arquivo foi montado do jeito que um ataque de travamento é montado: ou ele descompacta para muitíssimo mais do que o tamanho que tem em disco, ou os dados dele estão aninhados tão fundo que ler tudo esgotaria a memória. Uma construção salva de verdade nunca é assim. Ele foi projetado para congelar ou travar o mod que abrir ele. O leitor do próprio ModGuard parou antes que isso acontecesse.",
    "behavior.LOOKS_LIKE_A_BOMB.advice":
      "Apague. Não carregue isto em um mod de schematic. O objetivo de um arquivo desses é travar o programa que lê ele.",
    "verdict.unsafe.label": "Inseguro",
    "verdict.unsafe.headline":
      "O ModGuard encontrou sinais fortes de alerta. Não instale este mod.",
    "verdict.be-careful.label": "Cuidado",
    "verdict.be-careful.headline":
      "Este mod faz algumas coisas que merecem um olhar mais atento antes de você confiar nele.",
    "verdict.minor-notes.label": "Pequenas observações",
    "verdict.minor-notes.headline":
      "Quase tudo comum, com algumas coisas que vale a pena saber. Muitos mods legítimos são assim.",
    "verdict.looks-safe.label": "Parece seguro",
    "verdict.looks-safe.headline":
      "O ModGuard não encontrou nenhum dos comportamentos de risco que ele procura.",
    "verdict.unsafe.imperative": "Não execute este mod.",
    "verdict.be-careful.imperative": "Cuidado com este aqui.",
    "verdict.minor-notes.imperative":
      "Provavelmente tudo bem. Vale uma olhada.",
    "verdict.looks-safe.imperative": "Nada aqui exige ação.",
    "packaging.verified.headline":
      "Este é um mod montado direito e o pacote dele é assinado. Todos os arquivos ainda batem com as impressões digitais registradas quando ele foi assinado, então nada foi alterado depois.",
    "packaging.valid.headline":
      "Este é um mod montado direito: uma descrição de mod loader de verdade, código organizado do jeito que uma ferramenta de build produz, e o código que ele diz que inicia está mesmo no arquivo.",
    "packaging.unverified.headline":
      "O ModGuard não conseguiu confirmar que este arquivo é um mod montado direito, então tudo o que ele faz é tratado com desconfiança.",
    "packaging.malformed.headline":
      "Este pacote foi montado errado: tem pedaços quebrados, faltando, ou que não batem mais com o que o arquivo diz ser. Só isso já é motivo para ter cuidado.",
    "ui.finding.advice": "O que você pode fazer:",
    "ui.finding.libraryOnly":
      "Vem de uma biblioteca que este mod inclui, e não do código dele mesmo. Mostrado, mas não contado.",
    "ui.finding.discounted": "Comum em um mod empacotado direito.",
    "ui.finding.evidence": "O que o ModGuard viu",
    "ui.kind.what": "O que é isto",
    "ui.kind.found": "O que foi encontrado",
    "ui.kind.notAFamilyName":
      "Isto não é um nome de malware consultado em uma lista. O ModGuard não tem lista nenhuma dessas. É a descrição do próprio ModGuard sobre o que ele encontrou neste arquivo, e tudo em que ela se apoia está nesta página.",
    "ui.language.title": "Mudar idioma",
    "ui.language.full": "completo",
    "ui.language.scope":
      "O veredicto e o que foi encontrado são traduzidos. Algumas explicações mais longas e as configurações continuam em inglês.",
    "kind.ACCOUNT_STEALER": "ROUBA CONTAS",
    "kind.SESSION_STEALER": "ROUBA SESSÕES",
    "kind.ITEM_STEALER": "ROUBA ITENS",
    "kind.REMOTE_CODE_LOADER": "CARREGA CÓDIGO REMOTO",
    "kind.BUNDLED_PROGRAM": "PROGRAMA EMBUTIDO",
    "kind.DEFENCE_DISABLER": "DESLIGA O ANTIVÍRUS",
    "kind.PLUGIN_WORM_MARKER": "INDÍCIO DE WORM",
    "kind.DISGUISED_PROGRAM": "PROGRAMA DISFARÇADO",
    "kind.DISGUISED_MOD": "MOD DISFARÇADO",
    "kind.TRAPPED_BUILD": "CONSTRUÇÃO ARMADILHADA",
    "kind.CRASH_TRAP": "ARMADILHA DE TRAVAMENTO",
    "kind.EXPLOITABLE": "FALHA DE SEGURANÇA",
  },
  dv = {
    "behavior.REACHES_INTERNET.title": "Выходит в интернет",
    "behavior.REACHES_INTERNET.description":
      "В этом моде есть код, который открывает сетевые соединения или делает веб-запросы. Само по себе это нормально для многих модов (моды на карты, помощники для мультиплеера, проверка обновлений), но вместе с другими тревожными признаками это может значить, что мод куда-то отправляет твои данные.",
    "behavior.REACHES_INTERNET.advice":
      "Проверь, есть ли у мода веская причина пользоваться интернетом (карты, онлайн-функции). Если никакой онлайн-функции не видно, будь осторожнее.",
    "behavior.RUNS_OTHER_PROGRAMS.title":
      "Пытается запускать другие программы на твоём компьютере",
    "behavior.RUNS_OTHER_PROGRAMS.description":
      "В этом моде есть код, способный запускать другие программы или системные команды на твоём компьютере, и ModGuard либо не смог прочитать, что это за программа, либо не узнал её. Игровому моду это почти никогда не нужно, а вредоносные программы так часто себя и устанавливают.",
    "behavior.RUNS_OTHER_PROGRAMS.advice":
      "Если мод внятно не объясняет, зачем он запускает внешние программы, не устанавливай его.",
    "behavior.RUNS_KNOWN_HELPER.title":
      "Просит компьютер сделать одну обычную вещь",
    "behavior.RUNS_KNOWN_HELPER.description":
      "Этот мод запускает маленькую программу, которая уже есть в твоём компьютере, ради одной конкретной обычной задачи: открыть ссылку в браузере или узнать, какая у тебя видеокарта. ModGuard прочитал команду в коде мода и узнал её, а сама команда показана ниже, так что её можно проверить. Это совсем не то же самое, что мод, который выполняет команду, которую никто не может прочитать.",
    "behavior.RUNS_KNOWN_HELPER.advice":
      "Прочитай команду ниже. Если она открывает ссылку или спрашивает про твоё железо, то так обычно и делают меню модов и моды на графику, и волноваться не о чем.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.title":
      "Запускает другую программу, и ModGuard прочитал, какую",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.description":
      "Этот мод запускает на твоём компьютере другую программу, и ModGuard смог прочитать всю команду в коде мода. Она показана ниже. Это совсем не то же самое, что мод, который выполняет команду, которую никто не может прочитать: тебе видно имя файла, который он запускает, и можно пойти и посмотреть на этот файл. Чего ModGuard сказать не может, так это что у файла внутри. Апдейтеры, программы для записи видео и установщики делают так по делу.",
    "behavior.RUNS_A_PROGRAM_IT_NAMES.advice":
      "Прочитай команду ниже и проверь файл, который в ней назван. Есть ли у мода причина запускать другую программу: апдейтер, запись видео, установщик? Если причины нет, спроси у автора, зачем это, прежде чем устанавливать.",
    "behavior.TOUCHES_OUTSIDE_FILES.title":
      "Трогает файлы за пределами своей области",
    "behavior.TOUCHES_OUTSIDE_FILES.description":
      "В этом моде есть код, который читает или пишет файлы вне игровых папок mods и config. Например, системные папки или твой профиль пользователя. Модам обычно хватает своей области.",
    "behavior.TOUCHES_OUTSIDE_FILES.advice":
      "Прежде чем доверять моду, спроси у автора, зачем ему файлы вне папки с игрой.",
    "behavior.INDIRECT_CODE_LOADING.title":
      "Загружает код окольными путями, которые могут скрыть его поведение",
    "behavior.INDIRECT_CODE_LOADING.description":
      "Этот мод во время работы подгружает дополнительный код обходным путём (например, скачивает классы или собирает их на лету). Из-за этого поведение можно спрятать от проверки вроде этой.",
    "behavior.INDIRECT_CODE_LOADING.advice":
      "Лучше выбирать моды, весь код которых лежит в скачанном файле. Считай это поводом насторожиться, особенно вместе с доступом в интернет.",
    "behavior.RUNS_UNCHECKED_CODE.title":
      "Выполняет код, которого не было в проверенном файле",
    "behavior.RUNS_UNCHECKED_CODE.description":
      "Пока игра запущена, этот мод идёт за дополнительным кодом, по веб-адресу или в файл, который он пишет сам, и отдаёт этот код прямо игре на исполнение. ModGuard проследил эти байты по коду самого мода, чтобы это доказать; это не догадка по тому, какие классы мод упоминает. Это важнее всего остального на этой странице, потому что часть, которая делает работу, лежит не в этом файле: она находится на чьём-то сервере, её можно поменять уже после того, как файл проверили, и у тебя она может оказаться не такой, как у всех, кто смотрел до тебя. Апдейтер мода тоже что-то скачивает. Но апдейтер отдаёт тебе файл и просит перезапустить игру. А здесь новый код передаётся прямо в запущенную игру.",
    "behavior.RUNS_UNCHECKED_CODE.advice":
      "Не устанавливай его. Проверить этот файл целиком не может никто, потому что самая важная часть скачивается позже. Если он уже запускался у тебя, считай свои аккаунты Minecraft и Microsoft взломанными: смени пароль, выйди из аккаунта на всех устройствах и проверь, нет ли входов, которые ты не узнаёшь.",
    "behavior.LOADS_NATIVE_CODE.title": "Загружает нативные библиотеки",
    "behavior.LOADS_NATIVE_CODE.description":
      "Этот мод загружает нативные библиотеки (.dll/.so/.dylib), которые работают вне Java-песочницы игры и имеют полный доступ к твоему компьютеру. По-настоящему это нужно очень немногим модам.",
    "behavior.LOADS_NATIVE_CODE.advice":
      "Допускай это только у известных модов, которые объясняют, зачем им нативный код (например, видео или звук).",
    "behavior.CARRIES_A_PROGRAM.title": "Носит внутри себя программу",
    "behavior.CARRIES_A_PROGRAM.description":
      "Внутри этого мода упакован файл, который твой компьютер запустил бы как отдельную программу: исполняемый файл Windows, скрипт для системной оболочки или установщик. Мод состоит из Java-кода, который загружает игра, и таскать с собой вторую программу ему незачем. ModGuard не может прочитать, что делает эта программа, и в этом проблема: всё остальное на этой странице прочитано из кода самого мода, а вот эту часть прочитать нельзя.",
    "behavior.CARRIES_A_PROGRAM.advice":
      "Имя файла указано ниже. Если это не установщик, который ты скачиваешь намеренно и который прямо говорит, что несёт программу внутри, не устанавливай его.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.title":
      "Содержит имя, которое использует известное семейство вредоносных плагинов",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.description":
      "В этом файле есть имя, которым известное семейство вредоносных серверных плагинов называет файл, который оно оставляет на заражённых машинах. ModGuard нашёл это имя написанным внутри файла; он не видел, чтобы файл что-то с ним делал, так что само по себе это веский повод для подозрений, а не доказательство.",
    "behavior.CARRIES_A_KNOWN_MALWARE_MARKER.advice":
      "Не ставь это на сервер, который тебе дорог, пока не выяснишь, откуда файл взялся. Если он скачан из каталога плагинов, сверь автора и страницу загрузки с официальными. Это семейство распространяется, подменяя настоящие плагины копиями себя.",
    "behavior.STARTS_AUTOMATICALLY.title":
      "Прописывает себя в автозапуск или остаётся в системе",
    "behavior.STARTS_AUTOMATICALLY.description":
      "В коде этого мода есть обращения к механизмам, которые позволяют запускаться при включении компьютера или продолжать работать вне игры (папки автозагрузки, планировщик заданий, ключи автозапуска в реестре). Игровой мод не должен делать этого никогда.",
    "behavior.STARTS_AUTOMATICALLY.advice":
      "Не устанавливай мод, который хочет жить дольше игры, которой он принадлежит.",
    "behavior.DISABLES_YOUR_PROTECTION.title":
      "Просит антивирус больше не смотреть",
    "behavior.DISABLES_YOUR_PROTECTION.description":
      "Этот мод выполняет команду, которая отключает часть встроенной защиты компьютера. Она говорит Защитнику Windows не проверять папку или не обращать внимания на определённую программу. ModGuard прочитал всю команду из мода, она показана ниже. Ни одному моду для Minecraft это не нужно. Так поступают вредоносные программы, чтобы то, что они установят следом, осталось незамеченным.",
    "behavior.DISABLES_YOUR_PROTECTION.advice":
      "Не устанавливай его. Если он уже запускался, открой Безопасность Windows и посмотри в списке исключений, нет ли там записей, которые появились без твоего ведома. Удаление мода их не убирает. Потом запусти полную проверку.",
    "behavior.HIDES_ITS_CODE.title": "Прячет или запутывает собственный код",
    "behavior.HIDES_ITS_CODE.description":
      "Код этого мода намеренно сделан трудным для чтения: запутанные имена или зашифрованные куски, которые расшифровываются только во время работы. Честным модам редко нужно прятать, что они делают.",
    "behavior.HIDES_ITS_CODE.advice":
      "Отнесись к этому очень осторожно. Спрятанный код вместе с любым другим тревожным признаком даёт веский повод не устанавливать мод.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.title":
      "Проверяет, не следят ли за ним, и может вести себя иначе, если следят",
    "behavior.CHECKS_IF_IT_IS_WATCHED.description":
      "Этот мод смотрит, что за компьютер перед ним: его имя, сетевую карту, аккаунт, под которым ты сейчас в системе. Найденное он сверяет со списком имён, которые используют машины для анализа и тестовые песочницы. Код делает так по одной причине: чтобы вести себя прилично, пока его изучают, и делать другое на компьютере живого человека. Это ещё и значит, что спокойный результат от инструмента вроде этого стоит для такого файла меньше обычного.",
    "behavior.CHECKS_IF_IT_IS_WATCHED.advice":
      "Любой результат 'ничего не найдено' про этот мод, включая результат самого ModGuard, считай ненадёжным. Мод написан так, чтобы получался именно он. Если автор не может объяснить список ниже, не устанавливай мод.",
    "behavior.ASKS_EXTRA_ACCESS.title": "Просит больше доступа, чем моду нужно",
    "behavior.ASKS_EXTRA_ACCESS.description":
      "Этот мод залезает во внутренности Java, которых обычный код не касается: переписывает чужой код при загрузке, отключает собственные проверки безопасности Java или использует 'unsafe' API не для обычной работы с памятью. Простая быстрая работа с памятью намеренно не учитывается: так делает каждый мод на графику и производительность, и считать это было бесполезно.",
    "behavior.ASKS_EXTRA_ACCESS.advice":
      "Ожидаемо от модов, которые патчат код игры. Стоит присмотреться, если у мода нет причин это делать.",
    "behavior.ACTS_AS_JAVA_AGENT.title": "Объявляет себя Java-агентом",
    "behavior.ACTS_AS_JAVA_AGENT.description":
      "Этот файл объявляет себя Java-агентом, а значит, может переписывать чужой код при загрузке: код игры, других модов, всего в том же Java-процессе. Так работают профайлеры и инструменты разработчика; игровые моды так не работают.",
    "behavior.ACTS_AS_JAVA_AGENT.advice":
      "Ставь это, только если это инструмент разработчика, который ты ищешь намеренно. Игровому моду незачем быть Java-агентом.",
    "behavior.TOUCHES_SENSITIVE_FILES.title":
      "Читает файлы с логинами или личными данными",
    "behavior.TOUCHES_SENSITIVE_FILES.description":
      "Этот мод обращается к файлам, в которых, как известно, лежат данные для входа в аккаунты или личные данные. Например, сохранённый вход в лаунчере, папки с данными браузера или хранилище мессенджеров. Так обычно и устроены моды, ворующие аккаунты.",
    "behavior.TOUCHES_SENSITIVE_FILES.advice":
      "Не устанавливай его. Если он уже запускался, смени пароли и заверши остальные сессии.",
    "behavior.ACTS_AS_YOU_IN_GAME.title": "Может писать в игре от твоего имени",
    "behavior.ACTS_AS_YOU_IN_GAME.description":
      "Этот мод может отправлять на сервер сообщения в чат и команды от твоего имени, а ты при этом ничего не набираешь. На сервере с экономикой этого хватит, чтобы обнулить твой баланс: один спрятанный '/pay' и деньги уже чужие. Моды на бинды и макросы делают так по делу, поэтому важно другое: происходит это по нажатию клавиши или тихо само по себе.",
    "behavior.ACTS_AS_YOU_IN_GAME.advice":
      "Если это не мод на макросы или бинды, спроси, зачем ему говорить с сервером от твоего имени. Посмотри раздел живого наблюдения ниже: там показано, что мод на самом деле написал, когда ModGuard его запустил.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.title":
      "Несёт готовую команду, которая отдаёт твои деньги или вещи",
    "behavior.CARRIES_A_TRANSFER_COMMAND.description":
      "В коде этого мода записана готовая команда, которая передаёт деньги или предметы другому игроку. Это не возможность набрать такую команду, а сами слова, уже написанные. Моду, который позволяет тебе вводить команды, незачем носить с собой команду, уже заполненную чужим ником. Так выглядит вор внутри игры: он не трогает твой компьютер, он просто тратит твои деньги за тебя.",
    "behavior.CARRIES_A_TRANSFER_COMMAND.advice":
      "Прочитай команду ниже. Обычно в ней указано, кому уходят деньги. Если такой команды ты от мода не ждёшь, не устанавливай его и скажи тому, кто тебе его дал.",
    "behavior.MOVES_YOUR_ITEMS.title":
      "Может выносить предметы из твоего инвентаря",
    "behavior.MOVES_YOUR_ITEMS.description":
      "Этот мод может кликать по слотам инвентаря, выбрасывать предметы, работать за тебя с сундуком или окном торговли. Моды-сортировщики делают так по делу. Ровно так же мод перекладывает твой инвентарь в чужой сундук, пока ты стоишь на месте.",
    "behavior.MOVES_YOUR_ITEMS.advice":
      "Ожидаемо от сортировщиков инвентаря и модов на автокрафт. У всего остального это повод посмотреть в разделе живого наблюдения, что мод делал на самом деле.",
    "behavior.READS_YOUR_SESSION.title":
      "Читает ключ, который доказывает, что ты это ты",
    "behavior.READS_YOUR_SESSION.description":
      "Этот мод читает твой токен сессии Minecraft. Этот токен игра использует как ключ, чтобы доказать, что аккаунт твой, без пароля. У некоторых модов есть настоящая причина так делать: чтобы загрузить скин или плащ, нужно доказать серверу, что аккаунт твой. Но ровно это и забирает вор аккаунтов, и именно эта штука позволяет кому-то войти под тобой.",
    "behavior.READS_YOUR_SESSION.advice":
      "Разберись, что мод делает такого, для чего нужен твой аккаунт: скины, плащи и косметика годятся как причина. Если онлайн-функций у мода нет вообще, про это стоит спросить. Если тебе тревожно, выйди из аккаунта на всех устройствах на странице аккаунта Microsoft. Тогда любой скопированный токен станет бесполезным.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.title":
      "Есть дыра, которой кто-то другой может воспользоваться против тебя",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.description":
      "Этот мод принимает данные из сети так, что тот, кто их отправит, может выполнить код на твоём компьютере. Это дыра в моде, а не признак того, что автор хотел навредить. В Java такую ошибку сделать проще всего, и она случалась с известными и любимыми модами. Это не значит, что мод пытается тебя обокрасть. Это значит, что может кто-то другой, если он дотянется до сервера, на котором ты играешь.",
    "behavior.HAS_A_HOLE_SOMEBODY_COULD_USE.advice":
      "Проверь, не исправлено ли это в новой версии, и напиши автору. Большинство чинит такое быстро, как только узнаёт. А пока выбирай осторожнее, на какие серверы заходить с этим модом; до такой дыры доберётся только тот, кто может отправить данные твоей игре.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.title":
      "Это не тот файл, за который он себя выдаёт",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.description":
      "У этого файла имя схематики (.litematic, .schem, .schematic или .nbt), но внутри программа: мод для Minecraft или архив с кодом, а не сохранённая постройка. Схематика хранит данные о постройке и никогда так не упаковывается. Программу маскируют под схематику по известной причине: чтобы человек открыл мод, который сам бы ставить не стал.",
    "behavior.PRETENDS_TO_BE_A_SCHEMATIC.advice":
      "Не загружай это в Litematica, WorldEdit или любой другой инструмент для схематик. ModGuard прочитал настоящее содержимое, и всё найденное про саму программу показано ниже. Суди о файле по тому, чем он на самом деле является.",
    "behavior.HIDES_AN_EXECUTABLE.title":
      "Это программа, замаскированная под схематику",
    "behavior.HIDES_AN_EXECUTABLE.description":
      "Файл назван как схематика, но внутри у него готовая к запуску программа: исполняемый файл Windows, macOS или Linux либо скрипт. Сохранённая постройка не бывает ничем из этого. ModGuard не может прочитать, что делает программа, и честной причины схематике быть программой не существует, поэтому это считается попыткой заставить тебя запустить программу без твоего ведома.",
    "behavior.HIDES_AN_EXECUTABLE.advice":
      "Удали его. Не открывай, не переименовывай обратно в настоящее расширение и не запускай. Если файл уже открывался, считай, что этот компьютер мог быть взломан.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.title":
      "Выполняет команды, когда ты ставишь постройку",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.description":
      "В этой постройке есть командные блоки или данные команд, так что после установки и срабатывания она может выполнить эти команды от твоего имени. Это происходит только в мире, где команды разрешены (одиночная игра с читами или сервер, где тебе можно ставить командные блоки). Для редстоун-механизмов, приключенческих карт и мини-игр командные блоки совершенно нормальны. Команды, которые прочитал ModGuard, показаны ниже, чтобы их было видно.",
    "behavior.RUNS_COMMANDS_WHEN_PLACED.advice":
      "Прочитай команды ниже. Если это редстоун-схема или карта, командные блоки ожидаемы. Если это должна быть обычная постройка, спроси, зачем ей выполнять команды.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.title":
      "Несёт команду, которая может навредить при установке",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.description":
      "Командный блок в этой постройке несёт команду, которой у обычной постройки быть незачем: выдать права оператора, запустить функцию датапака или удалить блоки. Как только постройку поставят в мире, где команды работают, и блок сработает, всё это произойдёт от твоего имени. Ты ничего не набираешь. Если открыть схематику для предпросмотра, не запускается ничего; важна именно установка в живом мире.",
    "behavior.CARRIES_A_DANGEROUS_COMMAND.advice":
      "Прочитай команду ниже. Не ставь эту постройку в мире, где включены читы или командные блоки. Если она выдаёт права оператора, запускает функцию датапака или называет другого игрока, считай это ловушкой.",
    "behavior.LOOKS_LIKE_A_BOMB.title":
      "Сделан так, чтобы уронить всё, что его откроет",
    "behavior.LOOKS_LIKE_A_BOMB.description":
      "Этот файл собран так же, как файлы, которыми специально роняют программы: он либо распаковывается в нечто во много раз больше своего размера на диске, либо его данные вложены так глубоко, что чтение съест всю память. Настоящая сохранённая постройка так не выглядит никогда. Он сделан, чтобы подвесить или уронить мод, который его откроет. ModGuard остановил чтение раньше, чем это случилось.",
    "behavior.LOOKS_LIKE_A_BOMB.advice":
      "Удали его. Не загружай в мод для схематик. Смысл такого файла в том, чтобы уронить программу, которая его читает.",
    "verdict.unsafe.label": "Небезопасно",
    "verdict.unsafe.headline":
      "ModGuard нашёл серьёзные тревожные признаки. Не устанавливай этот мод.",
    "verdict.be-careful.label": "Осторожно",
    "verdict.be-careful.headline":
      "Этот мод делает вещи, к которым стоит присмотреться внимательнее, прежде чем ему доверять.",
    "verdict.minor-notes.label": "Мелкие замечания",
    "verdict.minor-notes.headline":
      "В основном обычный, но есть пара вещей, о которых стоит знать. Многие нормальные моды выглядят так же.",
    "verdict.looks-safe.label": "Выглядит безопасно",
    "verdict.looks-safe.headline":
      "ModGuard не нашёл ни одного рискованного поведения из тех, что он проверяет.",
    "verdict.unsafe.imperative": "Не запускай этот мод.",
    "verdict.be-careful.imperative": "С этим будь осторожнее.",
    "verdict.minor-notes.imperative":
      "Скорее всего, всё нормально. Стоит взглянуть.",
    "verdict.looks-safe.imperative": "Тут делать ничего не нужно.",
    "packaging.verified.headline":
      "Это правильно собранный мод, и его архив подписан. Каждый файл до сих пор совпадает с отпечатками, записанными при подписи, значит, после этого ничего не меняли.",
    "packaging.valid.headline":
      "Это правильно собранный мод: настоящее описание для мод-лоадера, код разложен так, как его раскладывает сборщик, и код, который мод обещает запускать, действительно есть в файле.",
    "packaging.unverified.headline":
      "ModGuard не смог подтвердить, что это правильно собранный мод, поэтому всё, что мод делает, оценивается с подозрением.",
    "packaging.malformed.headline":
      "Этот архив собран неправильно: части битые, отсутствуют или больше не совпадают с тем, что заявляет файл. Уже одного этого хватит, чтобы отнестись к нему осторожно.",
    "kind.ACCOUNT_STEALER": "КРАДЁТ АККАУНТЫ",
    "kind.SESSION_STEALER": "КРАДЁТ ТОКЕН СЕССИИ",
    "kind.ITEM_STEALER": "КРАДЁТ ПРЕДМЕТЫ",
    "kind.REMOTE_CODE_LOADER": "ВЫПОЛНЯЕТ КОД ИЗВНЕ",
    "kind.BUNDLED_PROGRAM": "ВНУТРИ ПРОГРАММА",
    "kind.DEFENCE_DISABLER": "ОТКЛЮЧАЕТ АНТИВИРУС",
    "kind.PLUGIN_WORM_MARKER": "МЕТКА ПЛАГИНА-ЧЕРВЯ",
    "kind.DISGUISED_PROGRAM": "ПРОГРАММА, НЕ СХЕМАТИКА",
    "kind.DISGUISED_MOD": "МОД, НЕ СХЕМАТИКА",
    "kind.TRAPPED_BUILD": "ПОСТРОЙКА-ЛОВУШКА",
    "kind.CRASH_TRAP": "РОНЯЕТ ПРОГРАММЫ",
    "kind.EXPLOITABLE": "УЯЗВИМЫЙ МОД",
    "ui.finding.advice": "Что можно сделать:",
    "ui.finding.libraryOnly":
      "Идёт из библиотеки, которую мод везёт с собой, а не из его собственного кода. Показано, но не учтено.",
    "ui.finding.discounted": "Обычное дело для правильно упакованного мода.",
    "ui.finding.evidence": "Что увидел ModGuard",
    "ui.kind.what": "Что это",
    "ui.kind.found": "Что найдено",
    "ui.kind.notAFamilyName":
      "Это не название вируса, найденное в каком-то списке. Такого списка у ModGuard нет. Это собственное описание ModGuard того, что он нашёл в этом файле, а находки, на которых оно держится, есть на этой странице.",
    "ui.language.title": "Сменить язык",
    "ui.language.full": "полный",
    "ui.language.scope":
      "Вердикты и находки переведены. Настройки и часть длинных пояснений остаются на английском.",
  },
  Ah = [
    ["es", sv],
    ["pt-BR", lv],
    ["de", ov],
    ["fr", iv],
    ["ru", dv],
  ];
function uv() {
  const a = new Set();
  for (const i of Jc)
    (a.add(Rt.behavior(i, "title")),
      a.add(Rt.behavior(i, "description")),
      a.add(Rt.behavior(i, "advice")));
  for (const i of Object.keys(oh))
    (a.add(Rt.verdict(i, "label")),
      a.add(Rt.verdict(i, "headline")),
      a.add(Rt.verdict(i, "imperative")));
  for (const i of Object.keys(nh)) a.add(Rt.packaging(i));
  for (const [, i] of Ah) for (const l of Object.keys(i)) a.add(l);
  return [...a].sort();
}
let Rc = !1;
function cv() {
  if (!Rc) {
    Rc = !0;
    for (const [a, i] of Ah) kp(a, i);
    rv(uv());
  }
}
function hv({ flare: a = 0, mood: i = "idle" }) {
  return r.jsxs("div", {
    className: "mg-ambient",
    "aria-hidden": "true",
    "data-mood": i,
    children: [
      r.jsx("span", { className: "mg-drift mg-drift-a" }),
      r.jsx("span", { className: "mg-drift mg-drift-b" }),
      r.jsx("span", { className: "mg-drift mg-drift-c" }),
      r.jsx("span", { className: "mg-sheen" }),
      r.jsx("span", { className: "mg-drift-w" }),
      r.jsx("span", { className: "mg-grain" }),
      a > 0 &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx("span", { className: "mg-flare" }, `flare-${a}`),
            r.jsx("span", { className: "mg-vignette" }, `vignette-${a}`),
            r.jsx("span", { className: "mg-verdict-sweep" }, `sweep-${a}`),
          ],
        }),
    ],
  });
}
function mv(a) {
  const [i, l] = g.useState(() => Date.now());
  return (
    g.useEffect(() => {
      if (!a) return;
      l(Date.now());
      const c = setInterval(() => l(Date.now()), 1e3);
      return () => clearInterval(c);
    }, [a]),
    i
  );
}
function fv(a, i) {
  const l = new Date(a).getTime();
  return Number.isNaN(l) ? 0 : Math.max(0, Math.ceil((l - i) / 1e3));
}
function pv({ closingAt: a, onCancel: i }) {
  const l = mv(a !== null);
  if (a === null) return null;
  const c = fv(a, l);
  return r.jsxs("div", {
    role: "alert",
    className:
      "fixed inset-x-0 top-0 z-[60] flex items-center gap-3 border-b-2 border-white bg-black px-4 py-2.5",
    children: [
      r.jsx("span", {
        className:
          "font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400",
        children: "ModGuard is closing the game",
      }),
      r.jsx("span", {
        "aria-live": "off",
        className:
          "inline-block min-w-[3ch] text-center font-display text-lg font-semibold tabular-nums text-white",
        children: c > 0 ? `${c}s` : "now",
      }),
      r.jsx("p", {
        className: "min-w-0 flex-1 truncate text-sm text-neutral-300",
        children:
          c > 0
            ? "Anything unsaved since the world last saved will be lost."
            : "Closing it now.",
      }),
      r.jsx("button", {
        type: "button",
        onClick: i,
        className:
          "shrink-0 cursor-pointer border border-white px-3 py-1 text-sm text-white transition-[background-color,transform] duration-100 hover:bg-white/10 active:translate-y-px",
        children: "Cancel",
      }),
    ],
  });
}
function gv({ onHome: a, showBack: i, onOpenMore: l, moreUnread: c = 0 }) {
  return r.jsxs("header", {
    className:
      "mg-titlebar mg-plane titlebar-drag relative z-20 flex h-14 shrink-0 items-center gap-2 border-b border-neutral-800 bg-neutral-950",
    children: [
      r.jsx(av, {}),
      r.jsxs("button", {
        type: "button",
        onClick: a,
        "aria-label": "ModGuard: back to the drop screen",
        className:
          "no-drag group flex cursor-pointer items-center gap-2 rounded-none px-1 py-1 text-neutral-300 transition-colors hover:text-neutral-100",
        children: [
          r.jsx(ps, { variant: "flat", size: 18, punch: "#0a0a0a" }),
          r.jsx("span", {
            className: "font-display text-sm font-semibold text-neutral-100",
            children: "ModGuard",
          }),
        ],
      }),
      i &&
        r.jsxs("button", {
          type: "button",
          onClick: a,
          className: ie({
            level: "ghost",
            size: "md",
            extra: "no-drag ml-2 text-neutral-400",
          }),
          children: [
            r.jsx("span", { "aria-hidden": "true", children: "‹" }),
            "Check something else",
          ],
        }),
      r.jsxs("button", {
        type: "button",
        onClick: l,
        "aria-label":
          "More: your mods, protection, defence, trust, and settings",
        className: ie({
          level: "ghost",
          size: "md",
          extra: "no-drag ml-auto text-neutral-300",
        }),
        children: [
          r.jsx("span", { "aria-hidden": "true", children: "☰" }),
          "More",
          c > 0 &&
            r.jsx("span", {
              "aria-hidden": "true",
              className:
                "ml-0.5 inline-flex h-2 w-2 rounded-full border border-white/80",
            }),
        ],
      }),
    ],
  });
}
const Mc = [
  { id: "mods", label: "Mods", glyph: "▤" },
  { id: "protection", label: "Protection", glyph: "◎" },
  { id: "defense", label: "Defence", glyph: "◈" },
  { id: "trust", label: "Trust", glyph: "◇" },
  { id: "settings", label: "Settings", glyph: "≡" },
];
function vv({
  section: a,
  onSection: i,
  onClose: l,
  mods: c,
  protection: u,
  defense: m,
  trust: f,
  settings: x,
}) {
  g.useEffect(() => {
    const _ = (N) => {
      N.key === "Escape" && l();
    };
    return (
      document.addEventListener("keydown", _),
      () => document.removeEventListener("keydown", _)
    );
  }, [l]);
  const E = { mods: c, protection: u, defense: m, trust: f, settings: x }[a],
    y = Mc.find((_) => _.id === a);
  return r.jsxs("div", {
    className: "fixed inset-0 z-30 flex justify-end",
    children: [
      r.jsx("button", {
        type: "button",
        "aria-label": "Close",
        onClick: l,
        className: "mg-drawer-backdrop absolute inset-0 cursor-default",
      }),
      r.jsxs("aside", {
        "aria-label": "More",
        className:
          "mg-drawer-panel relative flex h-full w-full max-w-2xl border-l border-neutral-800 bg-surface-2",
        children: [
          r.jsx("nav", {
            "aria-label": "Sections",
            className:
              "flex w-[92px] shrink-0 flex-col gap-0.5 border-r border-neutral-900 p-2",
            children: Mc.map((_) => {
              const N = a === _.id;
              return r.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => i(_.id),
                  "aria-current": N ? "page" : void 0,
                  className: [
                    "group relative flex cursor-pointer flex-col items-center gap-1 rounded-none px-1 py-2.5 transition-colors",
                    N
                      ? "text-steel-5"
                      : "text-neutral-500 hover:bg-neutral-900 hover:text-neutral-200",
                  ].join(" "),
                  children: [
                    N &&
                      r.jsx("span", {
                        "aria-hidden": "true",
                        className:
                          "mg-select-rule absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-ink-1",
                      }),
                    r.jsx("span", {
                      "aria-hidden": "true",
                      className: "text-base leading-none",
                      children: _.glyph,
                    }),
                    r.jsx("span", {
                      className:
                        "font-mono text-[9px] uppercase tracking-[0.12em]",
                      children: _.label,
                    }),
                  ],
                },
                _.id,
              );
            }),
          }),
          r.jsxs("div", {
            className: "flex min-w-0 flex-1 flex-col",
            children: [
              r.jsxs("header", {
                className:
                  "relative flex shrink-0 items-center overflow-hidden border-b border-neutral-800 px-5 py-3",
                children: [
                  r.jsx("span", {
                    "aria-hidden": "true",
                    className:
                      "pointer-events-none absolute -right-10 -top-24 opacity-[0.05]",
                    children: r.jsx(ps, {
                      variant: "flat",
                      size: 240,
                      punch: "#181b1d",
                    }),
                  }),
                  r.jsx("h2", {
                    className:
                      "relative font-display text-base text-neutral-100",
                    children: (y == null ? void 0 : y.label) ?? "More",
                  }),
                  r.jsx("button", {
                    type: "button",
                    "aria-label": "Close",
                    onClick: l,
                    className:
                      "relative ml-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-none text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-200",
                    children: r.jsx("span", {
                      "aria-hidden": "true",
                      children: "✕",
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "min-h-0 flex-1 overflow-y-auto",
                children: E,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function xv({
  sceneKey: a,
  animate: i,
  direction: l,
  recessed: c,
  children: u,
}) {
  const m = i ? (l === "back" ? "mg-scene-in-back" : "mg-scene-in-fwd") : "";
  return r.jsx("div", {
    className:
      "mg-stage relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden",
    "data-recessed": c ? "true" : "false",
    "aria-hidden": c ? "true" : void 0,
    children: r.jsx(
      "div",
      { className: `flex min-h-0 flex-1 flex-col ${m}`.trimEnd(), children: u },
      a,
    ),
  });
}
function yv(a) {
  return a.toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
function wv(a, i, l = new Date()) {
  const c = a ?? i;
  if (c === null) return null;
  const u = new Date(c);
  if (Number.isNaN(u.getTime())) return null;
  const m = new Date(u.getTime() + 1440 * 60 * 1e3),
    f = (E) => new Date(E.getFullYear(), E.getMonth(), E.getDate()).getTime(),
    x = Math.round((f(m) - f(l)) / 864e5),
    v =
      x <= 0
        ? "today"
        : x === 1
          ? "tomorrow"
          : `on ${m.toLocaleDateString(void 0, { weekday: "long" })}`;
  return { at: yv(m), day: v, exact: a !== null };
}
function bv({
  steps: a,
  doneSteps: i,
  onMarkStep: l,
  onOpenLink: c,
  signedInAt: u = null,
  startedAt: m = null,
  onCopyChecklist: f,
  onCopyEvidence: x,
  copied: v = null,
  culprits: E = [],
  onPutBack: y,
}) {
  if (a.length === 0) return null;
  const _ = new Set(i),
    N = a[0],
    I = a.slice(1),
    D = wv(u, m);
  return r.jsxs(r.Fragment, {
    children: [
      D !== null &&
        r.jsxs("section", {
          "aria-label": "How long the stolen login lasts",
          className: "mt-10 border-t border-neutral-800 pt-6",
          children: [
            r.jsx("h2", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
              children: "How long this lasts",
            }),
            r.jsxs("p", {
              className: "mt-3 text-base leading-relaxed text-neutral-200",
              children: [
                "Even if you do nothing, the login your game is holding stops working at about",
                " ",
                r.jsxs("span", {
                  className: "font-semibold tabular-nums text-white",
                  children: [D.at, " ", D.day],
                }),
                D.exact ? "" : ", at the latest",
                ". Everything on this list is about the hours before then.",
              ],
            }),
            r.jsxs("details", {
              className: "group mt-3",
              children: [
                r.jsx("summary", {
                  className:
                    "cursor-pointer text-[13px] text-neutral-500 hover:text-neutral-300",
                  children: "Why you cannot just cancel it",
                }),
                r.jsxs("p", {
                  className:
                    "mt-2 max-w-2xl text-[13px] leading-relaxed text-neutral-400",
                  children: [
                    "There are two logins behind Minecraft. The one the game is holding lasts 24 hours, and there is no button anywhere — not for you, not for Mojang support — that ends it early. The other one lives in your launcher, can last up to 90 days, and keeps handing out fresh 24-hour ones. That second one",
                    " ",
                    r.jsx("em", { children: "can" }),
                    " be cancelled, and that is the difference between one bad night and losing the account for good. It is why the order below is the order it is.",
                  ],
                }),
              ],
            }),
          ],
        }),
      r.jsxs("section", {
        "aria-label": "Do this first",
        className: "mt-8 border-2 border-white px-5 py-4",
        children: [
          r.jsxs("div", {
            className: "flex flex-wrap items-baseline justify-between gap-2",
            children: [
              r.jsx("h2", {
                className:
                  "font-mono text-[11px] uppercase tracking-[0.2em] text-white",
                children: "Do this first",
              }),
              r.jsxs("span", {
                className:
                  "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400",
                children: [
                  _.has(N.id) ? "✓ done · " : "",
                  "step 1 of ",
                  a.length,
                ],
              }),
            ],
          }),
          r.jsx("h3", {
            className: [
              "mt-2 font-display text-xl leading-tight tracking-tight",
              _.has(N.id)
                ? "text-neutral-500 line-through"
                : "font-semibold text-white",
            ].join(" "),
            children: N.action,
          }),
          r.jsx("p", {
            className:
              "mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300",
            children: N.why,
          }),
          r.jsxs("div", {
            className: "mt-4 flex flex-wrap items-center gap-3",
            children: [
              N.url !== null &&
                r.jsx("button", {
                  type: "button",
                  onClick: () => (c == null ? void 0 : c(N.url ?? "")),
                  className: ie({ level: "strong", size: "md" }),
                  children: "Open the page",
                }),
              r.jsx("button", {
                type: "button",
                role: "checkbox",
                "aria-checked": _.has(N.id),
                disabled: _.has(N.id),
                onClick: () => l(N.id),
                className: ie({ level: "standard", size: "md" }),
                children: _.has(N.id) ? "✓ Done" : "I've done this",
              }),
            ],
          }),
          N.url !== null &&
            r.jsx("p", {
              className:
                "selectable mt-2 break-all font-mono text-[11px] text-neutral-500",
              children: N.url,
            }),
          r.jsx("p", {
            className: "mt-2 text-[11px] leading-relaxed text-neutral-600",
            children:
              "Opens in your normal browser, never inside ModGuard. ModGuard cannot sign you in or out and will never ask you for a password or a code.",
          }),
        ],
      }),
      I.length > 0 &&
        r.jsxs("section", {
          "aria-label": "What to do now",
          className: "mt-8 border-t border-neutral-800 pt-6",
          children: [
            r.jsxs("div", {
              className: "flex flex-wrap items-baseline justify-between gap-2",
              children: [
                r.jsx("h2", {
                  className:
                    "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
                  children: "Then, in this order",
                }),
                r.jsxs("span", {
                  className:
                    "font-mono text-[11px] tabular-nums text-neutral-600",
                  children: [_.size, "/", a.length, " done"],
                }),
              ],
            }),
            r.jsx("ol", {
              className: "mt-4 border-t border-neutral-900",
              children: I.map((T, P) => {
                const $ = _.has(T.id);
                return r.jsxs(
                  "li",
                  {
                    className: "flex gap-4 border-b border-neutral-900 py-4",
                    children: [
                      r.jsx("span", {
                        className:
                          "w-5 shrink-0 pt-0.5 font-mono text-sm tabular-nums text-neutral-500",
                        children: P + 2,
                      }),
                      r.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          r.jsxs("div", {
                            className:
                              "flex flex-wrap items-baseline gap-x-2 gap-y-1",
                            children: [
                              r.jsx("h3", {
                                className: [
                                  "text-[15px]",
                                  $
                                    ? "text-neutral-500 line-through"
                                    : T.urgent
                                      ? "font-semibold text-white"
                                      : "text-neutral-200",
                                ].join(" "),
                                children: T.action,
                              }),
                              T.urgent &&
                                !$ &&
                                r.jsx("span", {
                                  className:
                                    "border border-white px-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white",
                                  children: "Now",
                                }),
                            ],
                          }),
                          r.jsx("p", {
                            className:
                              "mt-1 text-sm leading-relaxed text-neutral-400",
                            children: T.why,
                          }),
                          T.url !== null &&
                            r.jsx("button", {
                              type: "button",
                              onClick: () =>
                                c == null ? void 0 : c(T.url ?? ""),
                              className:
                                "selectable mt-2 inline-block break-all text-left font-mono text-xs text-neutral-300 underline underline-offset-4 transition-colors hover:text-white",
                              children: T.url,
                            }),
                        ],
                      }),
                      r.jsx("button", {
                        type: "button",
                        role: "checkbox",
                        "aria-checked": $,
                        disabled: $,
                        onClick: () => l(T.id),
                        className: [
                          "h-7 shrink-0 cursor-pointer self-start rounded-none border px-2.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-[background-color,border-color,color,transform] duration-100 active:translate-y-px disabled:cursor-default",
                          $
                            ? "border-white bg-white text-black"
                            : "border-neutral-700 text-neutral-300 hover:border-neutral-400 hover:text-white",
                        ].join(" "),
                        children: $ ? "✓ Done" : "Mark done",
                      }),
                    ],
                  },
                  T.id,
                );
              }),
            }),
          ],
        }),
      (f !== void 0 || x !== void 0) &&
        r.jsxs("section", {
          "aria-label": "Take this with you",
          className: "mt-6",
          children: [
            r.jsxs("div", {
              className: "flex flex-wrap items-center gap-3",
              children: [
                f !== void 0 &&
                  r.jsx("button", {
                    type: "button",
                    onClick: f,
                    className: ie({ level: "standard", size: "sm" }),
                    children: v === "checklist" ? "✓ Copied" : "Copy this list",
                  }),
                x !== void 0 &&
                  r.jsx("button", {
                    type: "button",
                    onClick: x,
                    className: ie({ level: "quiet", size: "sm" }),
                    children:
                      v === "evidence"
                        ? "✓ Copied"
                        : "Copy for the server admin",
                  }),
              ],
            }),
            r.jsx("p", {
              className:
                "mt-2 max-w-2xl text-[11px] leading-relaxed text-neutral-600",
              children:
                "Both go onto this computer’s clipboard and nowhere else — ModGuard sends nothing anywhere. The list is the steps and their addresses, so you can paste them into your phone. The other one is what ModGuard recorded: the times, the server you were on, and the file. Neither contains a password or a login.",
            }),
          ],
        }),
      E.length > 0 &&
        r.jsxs("section", {
          "aria-label": "The mod file",
          className: "mt-8 border-t border-neutral-800 pt-6",
          children: [
            r.jsx("h2", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
              children: "The file",
            }),
            r.jsx("ul", {
              className: "mt-3 space-y-3",
              children: E.map((T) =>
                r.jsxs(
                  "li",
                  {
                    className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                    children: [
                      r.jsx("span", {
                        className:
                          "selectable break-all font-mono text-[13px] text-neutral-100",
                        children: T.name,
                      }),
                      r.jsx("span", {
                        className:
                          "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500",
                        children: T.disabled
                          ? "switched off"
                          : "still installed",
                      }),
                      T.disabled &&
                        y !== void 0 &&
                        r.jsx("button", {
                          type: "button",
                          onClick: () => y(T.path),
                          className: ie({ level: "quiet", size: "sm" }),
                          children: "Put back",
                        }),
                      T.sha256 !== null &&
                        r.jsxs("span", {
                          className:
                            "selectable w-full break-all font-mono text-[11px] text-neutral-600",
                          children: ["sha256 ", T.sha256],
                        }),
                    ],
                  },
                  T.path,
                ),
              ),
            }),
            r.jsxs("p", {
              className: "mt-2 text-[11px] leading-relaxed text-neutral-600",
              children: [
                "Switched off means renamed to ",
                r.jsx("code", {
                  className: "font-mono",
                  children: ".disabled",
                }),
                ", in the folder it was already in. Nothing is deleted and nothing leaves the folder.",
              ],
            }),
          ],
        }),
    ],
  });
}
const Oc = new Set([0, 1]),
  Sv = {
    "ended-child": 2,
    quarantined: 5,
    "closed-game": 4,
    "held-game": 3,
    "released-game": 3,
  };
function Ic(a, i, l = []) {
  var m;
  const c = ip(a, i),
    u =
      ((m = l.find((f) => f.action === "closed-game")) == null
        ? void 0
        : m.at) ?? null;
  return c.map((f) => {
    const x = l
        .filter((y) => {
          if (y.action !== "quarantined") return Sv[y.action] === f.rung.id;
          const _ = u !== null && y.at !== "" && y.at < u;
          return f.rung.id === (_ ? 2 : 5);
        })
        .map((y) => ({ said: y.said, ok: y.ok, undoPath: y.undoPath })),
      v = x.length > 0 && f.state !== "off" ? "reached" : f.state,
      E = v === "locked" && Oc.has(f.rung.id) ? "ready" : v;
    return {
      id: f.rung.id,
      name: f.rung.name,
      does: f.rung.does,
      needs: f.rung.needs,
      automatic: f.rung.automatic,
      unprompted: f.rung.automatic || Oc.has(f.rung.id),
      state: E,
      why: E === "reached" ? null : f.why,
      done: x,
    };
  });
}
const Ev = {
  reached: {
    symbol: "■",
    label: "Done",
    box: "border-white bg-white text-black",
  },
  offered: { symbol: "▸", label: "Your call", box: "border-white text-white" },
  ready: {
    symbol: "□",
    label: "On",
    box: "border-neutral-400 text-neutral-300",
  },
  locked: {
    symbol: "—",
    label: "Locked",
    box: "border-neutral-700 text-neutral-600",
  },
  off: {
    symbol: "·",
    label: "Switched off",
    box: "border-dashed border-neutral-800 text-neutral-700",
  },
};
function Ch({ rungs: a, onUndo: i, dense: l = !1 }) {
  const c = a.filter((u) => u.state === "reached").length;
  return r.jsxs("section", {
    "aria-label": "What ModGuard is allowed to do",
    className: "mg-ladder",
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [
          r.jsx("h2", {
            className:
              "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
            children: "What ModGuard is allowed to do",
          }),
          r.jsx("span", {
            className: "font-mono text-[11px] tabular-nums text-neutral-600",
            children:
              c === 0 ? "nothing needed yet" : `${c} of ${a.length} taken`,
          }),
        ],
      }),
      r.jsx("ol", {
        className: "mt-4 border-l border-neutral-900 pl-0",
        children: a.map((u, m) => {
          const f = Ev[u.state];
          return r.jsxs(
            "li",
            {
              "data-rung": u.id,
              "data-state": u.state,
              className:
                "mg-rung relative border-b border-neutral-900 py-3 pl-6 last:border-b-0",
              style: { animationDelay: `${m * 40}ms` },
              children: [
                r.jsx("span", {
                  "aria-hidden": "true",
                  className: [
                    "absolute left-0 top-3.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center border font-mono text-[9px] leading-none",
                    f.box,
                  ].join(" "),
                  children: f.symbol,
                }),
                r.jsxs("div", {
                  className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
                  children: [
                    r.jsx("h3", {
                      className: [
                        "text-[15px]",
                        u.state === "reached"
                          ? "font-semibold text-white"
                          : u.state === "offered"
                            ? "text-neutral-100"
                            : u.state === "ready"
                              ? "text-neutral-300"
                              : "text-neutral-500",
                      ].join(" "),
                      children: u.name,
                    }),
                    r.jsx("span", {
                      className: [
                        "border px-1.5 font-mono text-[10px] uppercase tracking-[0.15em]",
                        u.state === "reached"
                          ? "border-white text-white"
                          : u.state === "ready"
                            ? "border-neutral-600 text-neutral-400"
                            : "border-neutral-800 text-neutral-600",
                      ].join(" "),
                      children: f.label,
                    }),
                    u.unprompted
                      ? r.jsx("span", {
                          className:
                            "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
                          children: "by itself",
                        })
                      : u.state !== "off" &&
                        r.jsx("span", {
                          className:
                            "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
                          children: "only if you say so",
                        }),
                  ],
                }),
                !l &&
                  r.jsx("p", {
                    className: "mt-1 text-sm leading-relaxed text-neutral-400",
                    children: u.does,
                  }),
                u.why !== null &&
                  r.jsx("p", {
                    className:
                      "mt-1.5 border-l-2 border-neutral-800 pl-3 text-[13px] leading-relaxed text-neutral-500",
                    children: u.why,
                  }),
                u.done.length > 0 &&
                  r.jsx("ul", {
                    className: "mt-2 space-y-1.5",
                    children: u.done.map((x, v) =>
                      r.jsxs(
                        "li",
                        {
                          className:
                            "flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[13px] text-neutral-200",
                          children: [
                            r.jsx("span", {
                              "aria-hidden": "true",
                              className: "font-mono text-xs text-neutral-500",
                              children: x.ok ? "✓" : "✕",
                            }),
                            r.jsx("span", {
                              className: "min-w-0 flex-1",
                              children: x.said,
                            }),
                            x.undoPath !== null &&
                              i !== void 0 &&
                              r.jsx("button", {
                                type: "button",
                                onClick: () => i(x.undoPath ?? ""),
                                className:
                                  "cursor-pointer border border-neutral-700 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-300 transition-colors hover:border-neutral-400 hover:text-white",
                                children: "Put back",
                              }),
                          ],
                        },
                        `${u.id}-${v}`,
                      ),
                    ),
                  }),
              ],
            },
            u.id,
          );
        }),
      }),
      r.jsx("p", {
        className:
          "mt-4 border-t border-neutral-900 pt-3 text-[13px] leading-relaxed text-neutral-500",
        children: np,
      }),
    ],
  });
}
const ms = {
    critical: {
      symbol: "✕",
      label: "Happening now",
      badge: "border-white bg-white text-black font-semibold",
      rule: "border-l-4 border-white",
      headline: "font-semibold text-white",
    },
    high: {
      symbol: "!",
      label: "Serious",
      badge: "border-white/70 bg-white/10 text-white",
      rule: "border-l-2 border-neutral-300",
      headline: "font-medium text-neutral-100",
    },
    watch: {
      symbol: "i",
      label: "Noted",
      badge: "border-neutral-700 text-neutral-400",
      rule: "border-l-2 border-neutral-800",
      headline: "text-neutral-300",
    },
  },
  jh = {
    "credential-endpoint": "Login data sent out",
    "known-bad-mod": "Known bad mod running",
    "credential-file-touched": "Login file opened",
    "suspicious-connection": "Unrecognised connection",
    "mods-folder-changed": "Mods folder changed",
    "log-signal": "Something in the game log",
    "process-spawn": "Game started another program",
    "file-dropped": "A program file appeared",
    "persistence-written": "Something set itself to start on its own",
  },
  Dc = { critical: 0, high: 1, watch: 2 };
function Cl(a) {
  return [...a].sort((i, l) => {
    const c = Dc[i.severity] - Dc[l.severity];
    return c !== 0 ? c : l.at.localeCompare(i.at);
  });
}
function Tn(a) {
  const i = new Date(a);
  return Number.isNaN(i.getTime())
    ? a
    : i.toLocaleTimeString(void 0, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      });
}
function Nv({
  threats: a,
  plan: i,
  doneSteps: l = [],
  game: c = null,
  gameStopped: u = !1,
  gameGone: m = !1,
  stopping: f = !1,
  stopError: x = null,
  onStopGame: v,
  onMarkStep: E,
  onAcknowledge: y,
  onOpenLink: _,
  rungs: N,
  onHold: I,
  onRelease: D,
  heldUntil: T = null,
  holding: P = !1,
  signedInAt: $ = null,
  culprits: K = [],
  onPutBack: X,
  onCopyChecklist: se,
  onCopyEvidence: fe,
  copied: z = null,
}) {
  const [q, ue] = g.useState(!1),
    _e = Cl(a),
    Se = _e[0] ?? null,
    Te = Il(a) ?? "critical",
    Re = i ?? ep(a),
    Ae = new Set(l),
    ye = Re.filter((k) => k.urgent && !Ae.has(k.id)).length,
    ve = g.useRef(null),
    pe = g.useRef(null),
    he = u || m;
  return (
    g.useEffect(() => {
      var k;
      (k = pe.current ?? ve.current) == null || k.focus();
    }, [he]),
    g.useEffect(() => {
      const k = ve.current;
      if (k === null) return;
      const U = (L) => {
        if (L.key !== "Tab") return;
        const w = k.querySelectorAll(
            'button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])',
          ),
          M = w[0],
          Q = w[w.length - 1];
        M === void 0 ||
          Q === void 0 ||
          (L.shiftKey && document.activeElement === M
            ? (L.preventDefault(), Q.focus())
            : !L.shiftKey &&
              document.activeElement === Q &&
              (L.preventDefault(), M.focus()));
      };
      return (
        k.addEventListener("keydown", U),
        () => k.removeEventListener("keydown", U)
      );
    }, []),
    r.jsxs("div", {
      ref: ve,
      tabIndex: -1,
      role: "alertdialog",
      "aria-modal": "true",
      "aria-labelledby": "threat-alert-headline",
      className:
        "mg-alert fixed inset-0 z-50 flex flex-col bg-black outline-none",
      children: [
        r.jsxs("header", {
          className:
            "mg-titlebar titlebar-drag flex h-14 shrink-0 items-center gap-3 border-b border-white",
          children: [
            r.jsxs("span", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-white",
              children: [
                r.jsx("span", {
                  "aria-hidden": "true",
                  children: ms[Te].symbol,
                }),
                " ",
                u ? "Game stopped" : m ? "Game not running" : "Live threat",
              ],
            }),
            r.jsx("span", {
              className:
                "ml-auto font-mono text-[11px] tabular-nums text-neutral-500",
              children: Se ? Tn(Se.at) : "",
            }),
          ],
        }),
        r.jsx("div", {
          className: "min-h-0 flex-1 overflow-y-auto",
          children: r.jsxs("div", {
            className: "mx-auto w-full max-w-3xl px-8 pb-20 pt-10",
            children: [
              r.jsx("h1", {
                id: "threat-alert-headline",
                className:
                  "font-display text-3xl font-semibold leading-tight tracking-tight text-white",
                children:
                  (Se == null ? void 0 : Se.headline) ??
                  "Something in your game is taking your account details.",
              }),
              Se &&
                r.jsx("p", {
                  className:
                    "mt-3 max-w-2xl text-base leading-relaxed text-neutral-300",
                  children: Se.detail,
                }),
              he
                ? r.jsxs("div", {
                    className: "mt-8 border-2 border-white px-6 py-5",
                    children: [
                      r.jsx("p", {
                        className:
                          "font-display text-xl font-semibold text-white",
                        children: u
                          ? "The game is closed."
                          : "That game is no longer running.",
                      }),
                      r.jsx("p", {
                        className: "mt-1 text-sm text-neutral-400",
                        children:
                          "Nothing more can leave through it. The list below is what is left to do, and it still matters: what was already sent is already gone.",
                      }),
                    ],
                  })
                : r.jsxs(r.Fragment, {
                    children: [
                      r.jsx("button", {
                        type: "button",
                        ref: pe,
                        onClick: v,
                        disabled: f,
                        className:
                          "mt-8 w-full cursor-pointer border-2 border-white bg-white px-6 py-6 font-display text-2xl font-semibold tracking-tight text-black transition-[background-color,transform] duration-100 hover:bg-neutral-200 active:translate-y-px active:bg-neutral-300 disabled:cursor-not-allowed disabled:bg-neutral-300",
                        children: f
                          ? "Stopping the game…"
                          : "Stop the game now",
                      }),
                      r.jsxs("p", {
                        className:
                          "mt-2 text-xs leading-relaxed text-neutral-500",
                        children: [
                          "Force quits Minecraft",
                          c
                            ? r.jsxs(r.Fragment, {
                                children: [
                                  " ",
                                  "(process",
                                  " ",
                                  r.jsx("span", {
                                    className: "font-mono tabular-nums",
                                    children: c.pid,
                                  }),
                                  ")",
                                ],
                              })
                            : null,
                          ". Anything you have done since the world last saved is lost. That is a smaller loss than the account.",
                        ],
                      }),
                      x !== null &&
                        r.jsxs("p", {
                          className:
                            "mt-2 border-l-2 border-white pl-3 text-sm text-neutral-200",
                          children: [
                            x,
                            " Quit Minecraft yourself, then carry on down the list.",
                          ],
                        }),
                      I !== void 0 &&
                        r.jsx("div", {
                          className: "mt-4 border border-neutral-800 px-4 py-3",
                          children:
                            T !== null
                              ? r.jsxs("div", {
                                  className:
                                    "flex flex-wrap items-center gap-3",
                                  children: [
                                    r.jsxs("span", {
                                      className: "text-sm text-neutral-100",
                                      children: [
                                        "Held. It starts again by itself at",
                                        " ",
                                        r.jsx("span", {
                                          className: "font-mono tabular-nums",
                                          children: Tn(T),
                                        }),
                                        ".",
                                      ],
                                    }),
                                    D !== void 0 &&
                                      r.jsx("button", {
                                        type: "button",
                                        onClick: D,
                                        className: ie({
                                          level: "standard",
                                          size: "sm",
                                        }),
                                        children: "Resume it now",
                                      }),
                                  ],
                                })
                              : r.jsxs("div", {
                                  className:
                                    "flex flex-wrap items-center gap-3",
                                  children: [
                                    r.jsx("button", {
                                      type: "button",
                                      onClick: I,
                                      disabled: P,
                                      className: ie({
                                        level: "standard",
                                        size: "sm",
                                      }),
                                      children: P
                                        ? "Holding…"
                                        : "Hold the game for 20 seconds",
                                    }),
                                    r.jsx("span", {
                                      className:
                                        "max-w-md text-xs leading-relaxed text-neutral-500",
                                      children:
                                        "Freezes Minecraft exactly where it stands so nothing more can be sent while you read this. It starts itself again after 20 seconds — you do not have to do anything. A server may drop you; in the middle of this, that is not a loss.",
                                    }),
                                  ],
                                }),
                        }),
                    ],
                  }),
              r.jsx(bv, {
                steps: Re,
                doneSteps: l,
                onMarkStep: E,
                onOpenLink: _,
                signedInAt: $,
                startedAt: (c == null ? void 0 : c.startedAt) ?? null,
                onCopyChecklist: se,
                onCopyEvidence: fe,
                copied: z,
                culprits: K,
                onPutBack: X,
              }),
              r.jsxs("section", {
                "aria-label": "What ModGuard saw",
                className: "mt-10 border-t border-white pt-6",
                children: [
                  r.jsxs("div", {
                    className:
                      "flex flex-wrap items-baseline justify-between gap-2",
                    children: [
                      r.jsx("h2", {
                        className:
                          "font-mono text-[11px] uppercase tracking-[0.2em] text-white",
                        children: "What ModGuard saw",
                      }),
                      r.jsx("span", {
                        className: "font-mono text-[11px] text-neutral-600",
                        children: "exactly as observed",
                      }),
                    ],
                  }),
                  r.jsx("ul", {
                    className: "mt-4 space-y-4",
                    children: _e.map((k) => {
                      const U = ms[k.severity];
                      return r.jsxs(
                        "li",
                        {
                          className: `pl-3 ${U.rule}`,
                          children: [
                            r.jsxs("div", {
                              className:
                                "flex flex-wrap items-baseline gap-x-2 gap-y-1",
                              children: [
                                r.jsx("span", {
                                  "aria-hidden": "true",
                                  className:
                                    "font-mono text-xs text-neutral-400",
                                  children: U.symbol,
                                }),
                                r.jsx("span", {
                                  className: `text-sm ${U.headline}`,
                                  children: k.headline,
                                }),
                                r.jsx("span", {
                                  className: `rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${U.badge}`,
                                  children: jh[k.kind],
                                }),
                                r.jsx("span", {
                                  className:
                                    "ml-auto font-mono text-[11px] tabular-nums text-neutral-600",
                                  children: Tn(k.at),
                                }),
                              ],
                            }),
                            k.evidence.length > 0 &&
                              r.jsx("ul", {
                                className: "mt-2 space-y-1",
                                children: k.evidence.map((L, w) =>
                                  r.jsx(
                                    "li",
                                    {
                                      "data-inert": "true",
                                      className:
                                        "selectable break-all border border-neutral-800 px-3 py-1.5 font-mono text-xs text-neutral-100",
                                      children: L,
                                    },
                                    `${k.id}-${w}`,
                                  ),
                                ),
                              }),
                          ],
                        },
                        k.id,
                      );
                    }),
                  }),
                  r.jsx("p", {
                    className:
                      "mt-3 text-[11px] leading-relaxed text-neutral-600",
                    children:
                      "Copied exactly as ModGuard recorded them. None of these are links. ModGuard reads where a connection went; it never opens one, never sends anything to one, and never does anything to whoever is on the other end.",
                  }),
                ],
              }),
              N !== void 0 &&
                N.length > 0 &&
                r.jsx("div", {
                  className: "mt-10 border-t border-neutral-800 pt-6",
                  children: r.jsx(Ch, { rungs: N, onUndo: X, dense: !0 }),
                }),
              r.jsxs("section", {
                "aria-label": "Acknowledge",
                className: "mt-10 border-t border-white pt-6",
                children: [
                  r.jsx("p", {
                    className: "text-sm leading-relaxed text-neutral-300",
                    children:
                      ye === 0
                        ? "That is everything urgent. Close this when you are ready. It stays in ModGuard's history."
                        : `${ye} urgent ${ye === 1 ? "step is" : "steps are"} still undone. Until they are, whoever took this can still get in.`,
                  }),
                  r.jsxs("div", {
                    className: "mt-4 flex flex-wrap items-center gap-3",
                    children: [
                      r.jsx("button", {
                        type: "button",
                        onClick: y,
                        disabled: ye > 0,
                        className: ie({ level: "primary", size: "md" }),
                        children: "I have done these",
                      }),
                      ye > 0 &&
                        (q
                          ? r.jsxs(r.Fragment, {
                              children: [
                                r.jsxs("span", {
                                  className: "text-sm text-neutral-300",
                                  children: [
                                    "Close it with ",
                                    ye,
                                    " urgent undone?",
                                  ],
                                }),
                                r.jsx("button", {
                                  type: "button",
                                  onClick: y,
                                  className: ie({
                                    level: "standard",
                                    size: "sm",
                                  }),
                                  children: "Yes, close it",
                                }),
                                r.jsx("button", {
                                  type: "button",
                                  onClick: () => ue(!1),
                                  className: ie({ level: "quiet", size: "sm" }),
                                  children: "Keep it open",
                                }),
                              ],
                            })
                          : r.jsx("button", {
                              type: "button",
                              onClick: () => ue(!0),
                              className:
                                "text-xs text-neutral-600 underline underline-offset-4 transition-colors hover:text-neutral-300",
                              children: "Close without finishing",
                            })),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const kv =
    "ModGuard could not restart into that version, so nothing was installed. macOS refuses an update it cannot verify came from ModGuard. Download the new version from modguardian.com instead.",
  _v = {
    "checking-a-mod":
      "ModGuard is reading a mod right now. The update will wait.",
    "watching-a-game":
      "ModGuard is watching a running game. The update will wait until you stop.",
    "sweeping-mods-folders":
      "ModGuard is looking through your mods folders. The update will wait.",
    "moving-a-mod": "ModGuard is moving a mod file. The update will wait.",
  };
function Av({ state: a, onRestart: i, onDismiss: l, error: c = null }) {
  if (a === null || a.status !== "ready" || a.ready === null) return null;
  const u = a.busy === null ? null : _v[a.busy],
    m = a.restartStalled ? kv : (c ?? u);
  return r.jsxs("div", {
    role: "status",
    "aria-label": "A new version of ModGuard is ready",
    className:
      "mg-plane flex shrink-0 flex-wrap items-center gap-x-3 gap-y-1 border-b border-neutral-800 bg-neutral-950 px-4 py-2 text-[13px]",
    children: [
      r.jsxs("span", {
        className: "text-neutral-200",
        children: ["ModGuard ", a.ready, " is ready to install."],
      }),
      r.jsxs("span", {
        className: "font-mono text-[11px] text-neutral-500",
        children: ["you have ", a.current],
      }),
      m !== null &&
        r.jsx("span", { className: "min-w-0 text-neutral-400", children: m }),
      r.jsxs("span", {
        className: "ml-auto flex items-center gap-2",
        children: [
          r.jsx("button", {
            type: "button",
            onClick: i,
            disabled: a.busy !== null || a.restartStalled,
            className: ie({ level: "standard", size: "sm", extra: "no-drag" }),
            children: "Restart now",
          }),
          r.jsx("button", {
            type: "button",
            onClick: l,
            className: ie({ level: "ghost", size: "sm", extra: "no-drag" }),
            children: "Later",
          }),
        ],
      }),
    ],
  });
}
function Cv({
  feed: a,
  holdRef: i,
  available: l,
  enabled: c,
  busy: u,
  expanded: m,
  onSetEnabled: f,
  onSetExpanded: x,
  onOpenTrust: v,
}) {
  const [E, y] = g.useState(!1),
    _ = !E && a.scans.length > 0;
  g.useEffect(() => {
    _ || (i.current = !1);
  }, [_, i]);
  const N = r.jsx(jv, { onOpen: v }),
    I =
      l && !c
        ? r.jsxs("button", {
            type: "button",
            onClick: () => y(!0),
            className:
              "cursor-pointer text-[13px] text-neutral-400 underline underline-offset-4 transition-colors hover:text-neutral-200",
            children: [
              "turn on",
              r.jsx("span", {
                "aria-hidden": "true",
                className: "ml-1 inline-block",
                children: "›",
              }),
            ],
          })
        : void 0,
    D = r.jsx("button", {
      type: "button",
      onClick: () => x(!m),
      "aria-expanded": m,
      className:
        "mg-scan-toggle shrink-0 cursor-pointer border border-neutral-800 px-2 py-0.5 font-mono text-[11px] text-neutral-500 transition-colors hover:border-neutral-600 hover:text-neutral-300",
      children: m ? "hide" : "show",
    });
  if (E)
    return r.jsxs("section", {
      "aria-label": "Live checks",
      className: "border-t border-neutral-800 px-1 py-3",
      children: [
        r.jsx("p", {
          className: "text-[13px] text-neutral-100",
          children: "Live checks",
        }),
        r.jsxs("p", {
          className: "mt-1 text-[13px] leading-relaxed text-neutral-400",
          children: [
            "See what other players’ ModGuard installs are catching, as it happens. This only receives: nothing about you, your mods, or anything you have checked is ever sent. It connects to",
            " ",
            r.jsx("code", {
              className: "font-mono text-neutral-300",
              children: "modguardian.com",
            }),
            " ",
            "while ModGuard is open, and your own checking stays entirely on this computer either way.",
          ],
        }),
        r.jsxs("div", {
          className: "mt-3 flex flex-wrap items-center gap-2",
          children: [
            r.jsx("button", {
              type: "button",
              disabled: u,
              onClick: () => {
                (y(!1), f(!0));
              },
              className: ie({ level: "strong", size: "sm" }),
              children: u ? "Connecting…" : "Connect",
            }),
            r.jsx("button", {
              type: "button",
              disabled: u,
              onClick: () => y(!1),
              className: ie({ level: "quiet", size: "sm" }),
              children: "Not now",
            }),
          ],
        }),
        r.jsxs("div", {
          className:
            "mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
          children: [
            r.jsx("p", {
              className: "min-w-0 text-[11px] text-neutral-600",
              children:
                "You can change this later in Settings, and turning it off closes the connection.",
            }),
            N,
          ],
        }),
      ],
    });
  if (a.scans.length === 0) {
    const T = pl[zl(a)].detail;
    return r.jsxs("section", {
      "aria-label": "Live checks",
      className: "border-t border-neutral-800 px-1 py-3",
      children: [
        r.jsxs("div", {
          className: "flex items-start gap-x-3",
          children: [
            r.jsx("div", {
              className: "min-w-0 flex-1",
              children: r.jsx(kh, {
                feed: a,
                copy: pl,
                density: "glance",
                action: I,
              }),
            }),
            T !== void 0 && D,
          ],
        }),
        m &&
          T !== void 0 &&
          r.jsx("p", {
            className:
              "mt-1.5 max-w-prose text-xs leading-relaxed text-neutral-500",
            children: T,
          }),
        r.jsx("div", { className: "mt-1", children: N }),
      ],
    });
  }
  return r.jsx(Vg, {
    feed: a,
    holdRef: i,
    density: "glance",
    visible: 6,
    copy: pl,
    collapsed: !m,
    onToggleCollapsed: () => x(!m),
    footer: N,
    action: I,
  });
}
function jv({ onOpen: a }) {
  return r.jsxs("button", {
    type: "button",
    onClick: a,
    className:
      "group shrink-0 cursor-pointer text-left text-[11px] leading-relaxed text-neutral-600 transition-colors hover:text-neutral-400",
    children: [
      r.jsxs("span", {
        className: "font-mono tabular-nums text-neutral-500",
        children: [tt.warnedAfter, "/", tt.mods],
      }),
      " ",
      "still warned",
      " ",
      r.jsx("span", {
        className: "underline underline-offset-4",
        children: "why",
      }),
      r.jsx("span", {
        "aria-hidden": "true",
        className: "ml-1 inline-block",
        children: "›",
      }),
    ],
  });
}
function Tv({ onYes: a, onNotNow: i, busy: l = !1 }) {
  return r.jsxs("section", {
    "aria-label": "Turn on automatic watching",
    className: "mg-surface border border-neutral-700 px-4 py-3",
    children: [
      r.jsx("p", {
        className: "text-[13px] text-neutral-100",
        children: "Want ModGuard to watch on its own?",
      }),
      r.jsxs("p", {
        className: "mt-1 text-[13px] leading-relaxed text-neutral-400",
        children: [
          "It checks mods the moment they land in Downloads, and can switch a caught one off before you play by renaming it to",
          " ",
          r.jsx("code", {
            className: "font-mono text-neutral-300",
            children: ".disabled",
          }),
          ". Nothing is deleted, nothing leaves the folder, and nothing is ever renamed while a game is running — and you can undo any of it.",
        ],
      }),
      r.jsxs("div", {
        className: "mt-3 flex flex-wrap items-center gap-2",
        children: [
          r.jsx("button", {
            type: "button",
            disabled: l,
            onClick: a,
            className: ie({ level: "strong", size: "sm" }),
            children: l ? "Turning on…" : "Yes, watch for me",
          }),
          r.jsx("button", {
            type: "button",
            disabled: l,
            onClick: i,
            className: ie({ level: "quiet", size: "sm" }),
            children: "Not now",
          }),
        ],
      }),
    ],
  });
}
function Rv({
  onChooseFiles: a,
  onChooseFolder: i,
  onCheckAll: l,
  dragging: c,
  disabled: u,
}) {
  return r.jsxs("div", {
    role: "button",
    tabIndex: u ? -1 : 0,
    "aria-label": "Choose mod files to check",
    onClick: () => {
      u || a();
    },
    onKeyDown: (m) => {
      u || ((m.key === "Enter" || m.key === " ") && (m.preventDefault(), a()));
    },
    "data-drag": c ? "true" : "false",
    "data-busy": u ? "true" : "false",
    className: [
      "mg-field mg-hero-panel flex w-full cursor-pointer flex-col items-center px-8 pb-9 text-center",
      u ? "opacity-60" : "",
    ]
      .join(" ")
      .trimEnd(),
    children: [
      r.jsx("span", {
        className: "mg-hero-slot",
        children: r.jsx(ps, { variant: "metal", alive: !0, lit: c }),
      }),
      r.jsxs("div", {
        className: "mt-6 flex flex-wrap items-center justify-center gap-2",
        onClick: (m) => m.stopPropagation(),
        onKeyDown: (m) => m.stopPropagation(),
        role: "presentation",
        children: [
          r.jsx("button", {
            type: "button",
            disabled: u,
            onClick: a,
            className: ie({ level: "primary", size: "lg" }),
            children: "Choose files…",
          }),
          l !== void 0
            ? r.jsx("button", {
                type: "button",
                disabled: u,
                onClick: l,
                className: ie({ level: "strong", size: "lg" }),
                children: "Check all my mods",
              })
            : r.jsx("button", {
                type: "button",
                disabled: u,
                onClick: i,
                className: ie({ level: "strong", size: "lg" }),
                children: "Choose a folder…",
              }),
        ],
      }),
    ],
  });
}
function vl(a) {
  return a.on
    ? a.done <= 0
      ? a.waiting
      : a.found > 0
        ? `${a.work(a.done)}, ${a.found} to read`
        : `${a.work(a.done)}, nothing wrong`
    : a.off;
}
function Mv({ protections: a, modsCount: i, onOpen: l }) {
  const c = a.some((f) => f.liveness === "live"),
    u = a.reduce((f, x) => f + (x.unread ?? 0), 0),
    m = c && u === 0;
  return r.jsxs("button", {
    type: "button",
    onClick: l,
    "aria-label":
      "What is protecting you right now. Opens your protection settings.",
    className: [
      "group relative block w-full cursor-pointer border-t border-neutral-800 px-1 py-3 text-left transition-colors duration-100 hover:border-neutral-600",
      m ? "border-warm-line" : "border-neutral-800",
    ].join(" "),
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-center gap-x-4 gap-y-1.5",
        children: [
          a.map((f) =>
            r.jsxs(
              "span",
              {
                className: "flex items-center gap-1.5",
                children: [
                  r.jsx("span", {
                    "aria-hidden": "true",
                    className: [
                      "h-1.5 w-1.5 shrink-0 rounded-full",
                      f.liveness === "live"
                        ? "bg-neutral-100"
                        : f.liveness === "armed"
                          ? "mg-breathe bg-neutral-300"
                          : "border border-neutral-600",
                    ].join(" "),
                  }),
                  r.jsx("span", {
                    className: [
                      "text-[13px]",
                      f.liveness === "off"
                        ? "text-neutral-500"
                        : "text-neutral-200",
                    ].join(" "),
                    children: f.phrase,
                  }),
                ],
              },
              f.id,
            ),
          ),
          r.jsxs("span", {
            className: "ml-auto flex items-center gap-3",
            children: [
              u > 0 &&
                r.jsxs("span", {
                  className:
                    "rounded-full border border-white/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-100",
                  children: [u, " to read"],
                }),
              r.jsxs("span", {
                className:
                  "font-mono text-[11px] tabular-nums text-neutral-500",
                children: [i, " ", i === 1 ? "mod" : "mods", " installed"],
              }),
              r.jsx("span", {
                "aria-hidden": "true",
                className:
                  "font-mono text-neutral-600 transition-[color,transform] duration-100 group-hover:translate-x-0.5 group-hover:text-neutral-400",
                children: "›",
              }),
            ],
          }),
        ],
      }),
      r.jsx("span", {
        "aria-hidden": "true",
        className: [
          "mt-2 block h-px w-full",
          c ? "mg-live-rule" : "bg-neutral-800",
        ].join(" "),
      }),
    ],
  });
}
function Ov(a) {
  const i = [];
  return (
    a.notice !== null &&
      i.push(
        r.jsx(
          "p",
          {
            role: "status",
            className:
              "border-l-2 border-white bg-white/5 px-4 py-3 text-sm text-neutral-200",
            children: a.notice,
          },
          "notice",
        ),
      ),
    a.showConsent &&
      i.push(
        r.jsx(
          Tv,
          {
            onYes: a.onAcceptWatching,
            onNotNow: a.onDismissConsent,
            busy: a.consentBusy,
          },
          "consent",
        ),
      ),
    i.push(
      r.jsx(
        Mv,
        {
          protections: a.protections,
          modsCount: a.modsInstalled,
          onOpen: a.onOpenProtection,
        },
        "strip",
      ),
    ),
    i.push(r.jsx(Cv, { ...a.stream, onOpenTrust: a.onOpenTrust }, "stream")),
    r.jsx("div", {
      className: "min-h-0 flex-1 overflow-y-auto",
      children: r.jsxs("div", {
        className:
          "mg-hero-column mx-auto flex w-full max-w-2xl flex-col items-stretch gap-6 px-8 pb-12",
        children: [
          r.jsx(Rv, {
            dragging: a.dragging,
            disabled: a.busy,
            onChooseFiles: a.onChooseFiles,
            onChooseFolder: a.onChooseFolder,
            onCheckAll: a.onCheckAll,
          }),
          r.jsx("div", {
            className: "mg-stagger flex flex-col gap-6",
            children: i,
          }),
        ],
      }),
    })
  );
}
function Iv() {
  if (typeof window > "u") return "darwin";
  const a = window.modguard;
  return (a == null ? void 0 : a.platform) === "win32" ? "win32" : "darwin";
}
const Th = Iv(),
  zr = Th === "win32";
function Dv() {
  typeof document > "u" || (document.documentElement.dataset.platform = Th);
}
function Ft() {
  return zr ? "this PC" : "this Mac";
}
function xl() {
  return zr ? "PC" : "Mac";
}
function fs() {
  return zr ? "File Explorer" : "Finder";
}
function Hl() {
  return zr ? "Show in File Explorer" : "Show in Finder";
}
const Lv = {
  shared:
    "Reported. It will reach other players when ModGuard's registry is reachable.",
  local:
    "Noted on this computer. Turn on Warn other players in Settings to send it.",
  failed: "That could not be recorded. Nothing was sent.",
};
function Pv({ report: a, path: i, onReport: l, reporting: c, reported: u }) {
  const [m, f] = g.useState(null),
    [x, v] = g.useState({ kind: "idle" }),
    E = a.verdict === "unsafe" || a.verdict === "be-careful",
    y = i !== null && i.endsWith(".disabled"),
    _ = i !== null && /[/\\]mods[/\\][^/\\]+$/i.test(i),
    N = x.kind === "disabled" || x.kind === "trashed",
    I = i !== null && _ && !y && !N;
  async function D() {
    if (i === null) return;
    v({ kind: "working" });
    const $ = await window.modguard.disableMod(i);
    (f(null),
      v(
        $.ok
          ? { kind: "disabled", path: $.path }
          : { kind: "error", message: $.error },
      ));
  }
  async function T() {
    if (i === null) return;
    v({ kind: "working" });
    const $ = await window.modguard.trashMod(i);
    (f(null),
      v($.ok ? { kind: "trashed" } : { kind: "error", message: $.error }));
  }
  async function P() {
    const $ = x.kind === "disabled" ? x.path : i;
    if ($ === null) return;
    v({ kind: "working" });
    const K = await window.modguard.restoreMod($);
    v(K.ok ? { kind: "restored" } : { kind: "error", message: K.error });
  }
  return r.jsxs("section", {
    "aria-label": "What you can do",
    className:
      "sticky bottom-0 z-10 -mx-8 mt-8 border-t border-neutral-800 bg-neutral-950 px-8 py-3",
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [
          I &&
            m === null &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx("button", {
                  type: "button",
                  onClick: () => f("disable"),
                  className: ie({
                    level: E ? "primary" : "standard",
                    size: "sm",
                  }),
                  children: "Disable this mod",
                }),
                r.jsx("button", {
                  type: "button",
                  onClick: () => f("trash"),
                  className: ie({ level: "standard", size: "sm" }),
                  children: "Move it to the Trash",
                }),
              ],
            }),
          I &&
            m === "disable" &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsxs("span", {
                  className: "text-sm text-neutral-200",
                  children: [
                    "Rename it to ",
                    r.jsx("code", {
                      className: "font-mono text-xs",
                      children: ".disabled",
                    }),
                    " so the game stops loading it?",
                  ],
                }),
                r.jsx("button", {
                  type: "button",
                  onClick: () => void D(),
                  disabled: x.kind === "working",
                  className: ie({ level: "primary", size: "sm" }),
                  children: x.kind === "working" ? "Disabling…" : "Disable it",
                }),
                r.jsx("button", {
                  type: "button",
                  onClick: () => f(null),
                  className: ie({ level: "standard", size: "sm" }),
                  children: "Cancel",
                }),
              ],
            }),
          I &&
            m === "trash" &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx("span", {
                  className: "text-sm text-neutral-200",
                  children:
                    "Move it to the Trash? You can drag it back out of the Trash if you change your mind.",
                }),
                r.jsx("button", {
                  type: "button",
                  onClick: () => void T(),
                  disabled: x.kind === "working",
                  className: ie({ level: "primary", size: "sm" }),
                  children: x.kind === "working" ? "Moving…" : "Move to Trash",
                }),
                r.jsx("button", {
                  type: "button",
                  onClick: () => f(null),
                  className: ie({ level: "standard", size: "sm" }),
                  children: "Cancel",
                }),
              ],
            }),
          (x.kind === "disabled" || y) &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx("span", {
                  className: "text-sm text-neutral-100",
                  children: "Disabled. The game will not load it.",
                }),
                r.jsx("button", {
                  type: "button",
                  onClick: () => void P(),
                  className: ie({ level: "standard", size: "sm" }),
                  children: "Undo",
                }),
              ],
            }),
          x.kind === "trashed" &&
            r.jsxs("span", {
              className: "text-sm text-neutral-100",
              children: [
                "Moved to the Trash. You can still drag it back out of the ",
                fs(),
                " ",
                "Trash.",
              ],
            }),
          x.kind === "restored" &&
            r.jsx("span", {
              className: "text-sm text-neutral-300",
              children: "Put back where it was.",
            }),
          i !== null &&
            r.jsx("button", {
              type: "button",
              onClick: () => void window.modguard.reveal(i),
              className: ie({ level: "quiet", size: "sm" }),
              children: Hl(),
            }),
          u === null
            ? r.jsx("button", {
                type: "button",
                onClick: l,
                disabled: c,
                className: ie({ level: "quiet", size: "sm", extra: "ml-auto" }),
                children: c ? "Reporting…" : "Report as malicious",
              })
            : r.jsx("span", {
                className:
                  "ml-auto max-w-md text-right text-xs text-neutral-500",
                children: Lv[u],
              }),
        ],
      }),
      E &&
        i !== null &&
        !_ &&
        !y &&
        r.jsxs("p", {
          className: "mt-2 text-[11px] leading-relaxed text-neutral-500",
          children: [
            "This one is not in a mods folder, so don’t install it — show it in the",
            " ",
            fs(),
            " and delete it from there.",
          ],
        }),
      x.kind === "error" &&
        r.jsx("p", {
          className:
            "mt-2 border-l-2 border-white pl-3 text-xs text-neutral-200",
          children: x.message,
        }),
      m === "disable" &&
        r.jsxs("p", {
          className: "mt-2 text-[11px] leading-relaxed text-neutral-500",
          children: [
            "Renames the file to ",
            r.jsx("code", { className: "font-mono", children: ".disabled" }),
            ", which every launcher ignores. Nothing is moved and nothing is deleted, so you can always put it back.",
          ],
        }),
    ],
  });
}
function Rh(a) {
  return a.status === "done" || a.status === "error";
}
function Uv(a, i) {
  return a == null
    ? "failed"
    : (i == null ? void 0 : i.shareWithCommunity) === !0
      ? "shared"
      : "local";
}
const qv = 6e3,
  Lc = { unsafe: 0, "be-careful": 1, "minor-notes": 2, "looks-safe": 3 };
function yl(a) {
  var i;
  return (
    ((i = a.report) == null
      ? void 0
      : i.findings.filter((l) => l.countsTowardRisk).length) ?? 0
  );
}
function Gv(a) {
  return a.every(Rh)
    ? [...a].sort((i, l) => {
        var x, v;
        const c = i.report ? Lc[i.report.verdict] : -1,
          u = l.report ? Lc[l.report.verdict] : -1;
        if (c !== u) return c - u;
        const m = ((x = i.report) == null ? void 0 : x.score) ?? 0,
          f = ((v = l.report) == null ? void 0 : v.score) ?? 0;
        return m !== f ? f - m : i.name.localeCompare(l.name);
      })
    : a;
}
function zv(a, i) {
  const [l, c] = g.useState(!1);
  return (
    g.useEffect(() => {
      if ((c(!1), !a)) return;
      const u = setTimeout(() => c(!0), qv);
      return () => clearTimeout(u);
    }, [a, i]),
    l
  );
}
function Hv({ entries: a, selectedId: i, onSelect: l }) {
  const c = a.filter(Rh).length,
    u = a.filter((N) => {
      var I, D;
      return (
        ((I = N.report) == null ? void 0 : I.verdict) === "unsafe" ||
        ((D = N.report) == null ? void 0 : D.verdict) === "be-careful"
      );
    }).length,
    m = c < a.length,
    f = a.find((N) => N.status === "checking") ?? null,
    x = zv(m, `${c}:${(f == null ? void 0 : f.id) ?? ""}`),
    v = g.useRef(null),
    E = g.useRef(new Map()),
    [y, _] = g.useState(null);
  return (
    g.useLayoutEffect(() => {
      const N = i === null ? void 0 : E.current.get(i);
      _(N === void 0 ? null : { y: N.offsetTop, height: N.offsetHeight });
    }, [i, c, a.length]),
    r.jsxs("div", {
      className: "flex h-full flex-col",
      children: [
        r.jsxs("div", {
          className: "shrink-0 border-b border-neutral-900 px-4 py-3",
          children: [
            r.jsxs("div", {
              className: "flex items-baseline justify-between",
              children: [
                r.jsx("span", {
                  className:
                    "font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500",
                  children: c < a.length ? "Checking" : "Checked",
                }),
                r.jsxs("span", {
                  className:
                    "font-mono text-[11px] tabular-nums text-neutral-500",
                  children: [c, "/", a.length],
                }),
              ],
            }),
            c === a.length &&
              r.jsx("p", {
                className: "mt-1 text-xs text-neutral-500",
                children:
                  u === 0
                    ? "Nothing was flagged."
                    : `${u} ${u === 1 ? "mod is" : "mods are"} worth a closer look.`,
              }),
            m &&
              r.jsxs("div", {
                "data-stalled": x ? "true" : "false",
                children: [
                  r.jsx("div", {
                    className: "mt-2 h-0.5 w-full bg-neutral-800",
                    children: r.jsx("div", {
                      className:
                        "mg-scan-rule h-0.5 bg-white transition-[width] duration-200",
                      style: { width: `${(c / a.length) * 100}%` },
                      children: r.jsx("span", {
                        "aria-hidden": "true",
                        className: "mg-scan-band",
                      }),
                    }),
                  }),
                  x &&
                    f !== null &&
                    r.jsxs("p", {
                      role: "status",
                      className:
                        "mt-2 text-[11px] leading-relaxed text-neutral-500",
                      children: [
                        "Still reading",
                        " ",
                        r.jsx("span", {
                          className: "font-mono text-neutral-400",
                          children: f.name,
                        }),
                        ". Big mods take longer.",
                      ],
                    }),
                ],
              }),
          ],
        }),
        r.jsxs("ul", {
          ref: v,
          className: "relative min-h-0 flex-1 overflow-y-auto",
          children: [
            y !== null &&
              r.jsx("span", {
                "aria-hidden": "true",
                className:
                  "mg-select-rule pointer-events-none absolute left-0 z-10 w-0.5 bg-white",
                style: { height: y.height, transform: `translateY(${y.y}px)` },
              }),
            Gv(a).map((N) => {
              var P;
              const I = N.report ? Ha[N.report.verdict] : null,
                D = N.id === i,
                T = N.status === "checking";
              return r.jsx(
                "li",
                {
                  ref: ($) => {
                    $ === null
                      ? E.current.delete(N.id)
                      : E.current.set(N.id, $);
                  },
                  children: r.jsxs("button", {
                    type: "button",
                    disabled: N.report === null && N.error === null,
                    onClick: () => l(N),
                    className: [
                      "group flex w-full cursor-pointer items-center gap-3 border-l-2 border-transparent px-4 py-2.5 text-left transition-colors disabled:cursor-default",
                      D ? "bg-steel-2" : "hover:bg-neutral-900/60",
                      N.report === null && N.error === null
                        ? "cursor-default opacity-60"
                        : "",
                      T ? "mg-checking" : "",
                    ].join(" "),
                    children: [
                      r.jsx("span", {
                        "aria-hidden": "true",
                        className: [
                          "w-3 shrink-0 text-center font-mono text-xs",
                          ((P = N.report) == null ? void 0 : P.verdict) ===
                          "unsafe"
                            ? "text-white"
                            : "text-neutral-500",
                        ].join(" "),
                        children:
                          (I == null ? void 0 : I.emoji) ??
                          (N.status === "error" ? "?" : "·"),
                      }),
                      r.jsxs("span", {
                        className: "min-w-0 flex-1",
                        children: [
                          r.jsx("span", {
                            className:
                              "block truncate text-[13px] text-neutral-200",
                            children: N.name,
                          }),
                          r.jsx("span", {
                            className:
                              "block truncate font-mono text-[10px] text-neutral-600",
                            children: N.report
                              ? yl(N) > 0
                                ? `${I == null ? void 0 : I.label} · ${yl(N)} ${yl(N) === 1 ? "reason" : "reasons"}`
                                : `${I == null ? void 0 : I.label} · nothing counted`
                              : (N.error ?? "waiting"),
                          }),
                        ],
                      }),
                      N.report &&
                        r.jsx("span", {
                          className: [
                            "shrink-0 font-mono text-xs tabular-nums",
                            N.report.verdict === "unsafe"
                              ? "text-white"
                              : "text-neutral-600",
                          ].join(" "),
                          children: N.report.score,
                        }),
                      N.report &&
                        r.jsx("span", {
                          "aria-hidden": "true",
                          className: [
                            "shrink-0 font-mono text-xs transition-[color,transform] duration-[90ms] group-hover:translate-x-0.5",
                            D
                              ? "text-neutral-300"
                              : "text-neutral-700 group-hover:text-neutral-400",
                          ].join(" "),
                          children: "→",
                        }),
                    ],
                  }),
                },
                N.id,
              );
            }),
          ],
        }),
      ],
    })
  );
}
const Lr = [
    "Opening the archive…",
    "Reading every file inside it…",
    "Running it inside a fake Minecraft, decoy login planted…",
    "Scoring what it reached for…",
  ],
  Bv = [0, 500, 1200, 2700];
function Fv(a) {
  const c = a <= 0 ? 1400 : 1400 + 520 * Math.log10(a / 1e5);
  return Math.round(Math.min(3600, Math.max(1400, c)));
}
function $v(a) {
  return a < 1024
    ? `${a} B`
    : a < 1024 * 1024
      ? `${Math.round(a / 1024)} KB`
      : `${(a / (1024 * 1024)).toFixed(1)} MB`;
}
function Wv(a) {
  const i = new Map();
  for (const u of a) {
    const m = u.path.split("/").filter((v) => v !== "");
    if (m.length === 0) continue;
    const f = m.length === 1 ? "(top level)" : `${m[0]}/`,
      x = i.get(f) ?? { files: 0, bytes: 0 };
    ((x.files += 1), (x.bytes += Math.max(0, u.bytes)), i.set(f, x));
  }
  const l = [...i.entries()].map(([u, m]) => ({
      key: u,
      label: u,
      files: m.files,
      bytes: m.bytes,
      weight: Math.log10(m.bytes + 10),
    })),
    c = l.reduce((u, m) => Math.max(u, m.weight), 1);
  return l
    .map((u) => ({ ...u, weight: u.weight / c }))
    .sort((u, m) => m.bytes - u.bytes)
    .slice(0, 12);
}
function Pc({ step: a, slow: i }) {
  return a <= 0
    ? i
      ? r.jsx("span", { "aria-hidden": "true", className: "mg-read-beat" })
      : null
    : a >= 3
      ? null
      : r.jsxs(r.Fragment, {
          children: [
            r.jsx("span", { "aria-hidden": "true", className: "mg-read-head" }),
            a === 2 &&
              r.jsx("span", {
                "aria-hidden": "true",
                className: "mg-read-head-up",
              }),
          ],
        });
}
function Kv({ specimen: a = null, phase: i, hero: l }) {
  const [c, u] = g.useState(0),
    m = a !== null && a.phase >= 0 ? a.phase : (i ?? void 0);
  g.useEffect(() => {
    if (m !== void 0) return;
    u(0);
    const T = Bv.slice(1).map((P, $) => setTimeout(() => u($ + 1), P));
    return () => T.forEach(clearTimeout);
  }, [m]);
  const f = Math.min(Lr.length - 1, Math.max(0, m ?? c)),
    x = (a == null ? void 0 : a.entries) ?? [],
    v = Wv(x),
    E = x.length,
    y = (a == null ? void 0 : a.totalEntries) ?? 0,
    _ = Math.max(0, y - E),
    [N, I] = g.useState(0);
  g.useEffect(() => {
    I(0);
    const T = setTimeout(() => I(1), 600),
      P = setTimeout(() => I(2), 6e3);
    return () => {
      (clearTimeout(T), clearTimeout(P));
    };
  }, [f, a == null ? void 0 : a.name]);
  const D = {
    "--dur-read": `${Fv((a == null ? void 0 : a.totalBytes) ?? 0)}ms`,
  };
  return r.jsxs("div", {
    className:
      "mg-scanstage flex w-full max-w-md flex-col items-center px-8 text-center",
    "data-stalled": N >= 2 ? "true" : "false",
    style: D,
    children: [
      l,
      a !== null &&
        a.name !== null &&
        r.jsx("p", {
          className:
            "selectable mb-3 max-w-full break-all font-mono text-[11px] text-neutral-500",
          children: a.name,
        }),
      v.length > 0
        ? r.jsxs("div", {
            className:
              "mg-specimen mg-well relative w-full rounded border border-neutral-800 p-3 text-left",
            children: [
              r.jsx("ul", {
                className: "flex flex-col gap-1",
                children: v.map((T, P) =>
                  r.jsxs(
                    "li",
                    {
                      "data-read": P <= f * 3 ? "true" : "false",
                      className: "mg-stratum-row flex items-center gap-2",
                      children: [
                        r.jsx("span", {
                          "aria-hidden": "true",
                          "data-read": f >= 1 ? "true" : "false",
                          className: "mg-stratum block shrink-0 rounded-none",
                          style: {
                            width: `${Math.max(8, Math.round(T.weight * 55))}%`,
                            height: 8,
                          },
                        }),
                        r.jsx("span", {
                          className:
                            "min-w-0 flex-1 truncate font-mono text-[10px] text-neutral-500",
                          children: T.label,
                        }),
                        r.jsx("span", {
                          className:
                            "shrink-0 font-mono text-[10px] tabular-nums text-neutral-700",
                          children: T.files,
                        }),
                      ],
                    },
                    T.key,
                  ),
                ),
              }),
              r.jsx(Pc, { step: f, slow: N >= 1 }),
            ],
          })
        : r.jsxs("div", {
            className:
              "mg-specimen mg-well relative w-52 rounded border border-neutral-800 p-4",
            style: { height: 160 },
            "aria-hidden": "true",
            children: [
              r.jsx("div", {
                className: "flex h-full flex-col justify-center gap-3",
                children: Lr.map((T, P) =>
                  r.jsx(
                    "span",
                    {
                      "data-read": P <= f ? "true" : "false",
                      className: "mg-stratum block h-2 rounded-full",
                      style: { width: `${92 - P * 14}%` },
                    },
                    P,
                  ),
                ),
              }),
              r.jsx(Pc, { step: f, slow: N >= 1 }),
            ],
          }),
      y > 0 &&
        r.jsxs("p", {
          className: "mt-3 font-mono text-[11px] tabular-nums text-neutral-600",
          children: [
            y.toLocaleString(),
            " ",
            y === 1 ? "file" : "files",
            " ·",
            " ",
            $v((a == null ? void 0 : a.totalBytes) ?? 0),
            _ > 0 &&
              r.jsxs(r.Fragment, {
                children: [" · showing the ", E.toLocaleString(), " largest"],
              }),
          ],
        }),
      r.jsxs("p", {
        className:
          "mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
        children: [
          "Step ",
          Math.min(f + 1, Lr.length),
          " of ",
          Lr.length,
          m === void 0 && y === 0 ? "" : " · measured",
        ],
      }),
      r.jsx("p", {
        role: "status",
        className: "mt-2 text-sm leading-relaxed text-neutral-200",
        children: Lr[f],
      }),
      ((a == null ? void 0 : a.inFlight) ?? 0) > 1 &&
        r.jsxs("p", {
          className: "mt-1 font-mono text-[11px] tabular-nums text-neutral-600",
          children: [a == null ? void 0 : a.inFlight, " still to check"],
        }),
      r.jsx("p", {
        className: "mt-2 text-[11px] leading-relaxed text-neutral-600",
        children: "Your mod never leaves this computer.",
      }),
    ],
  });
}
function Vv(a) {
  const i = a.entries.length === 1,
    { selected: l, shownReport: c } = a;
  return r.jsxs("div", {
    className: "flex min-h-0 flex-1",
    children: [
      !i &&
        r.jsx("aside", {
          className:
            "mg-surface w-72 shrink-0 overflow-y-auto border-r border-neutral-900",
          children: r.jsx(Hv, {
            entries: a.entries,
            selectedId: a.selectedId,
            onSelect: a.onSelect,
          }),
        }),
      r.jsx("section", {
        className: "min-w-0 flex-1 overflow-y-auto",
        children:
          l !== null && c !== null
            ? r.jsxs("div", {
                className:
                  "mg-surface mx-auto flex min-h-full max-w-3xl flex-col px-8 pt-8",
                children: [
                  r.jsx(Lg, {
                    report: c,
                    purposes: a.purposes,
                    purposesBusy: a.purposesBusy,
                    onPurposesChange: a.onPurposesChange,
                    onCopy: a.onCopy,
                    version: a.version,
                  }),
                  r.jsx("div", {
                    className: "mt-auto",
                    children: r.jsx(Pv, {
                      report: c,
                      path: l.path,
                      onReport: a.onReport,
                      reporting: a.reporting,
                      reported: a.reported,
                    }),
                  }),
                ],
              })
            : r.jsx("div", {
                className: a.busy
                  ? "mg-scan-column flex justify-center px-8 pb-12 text-center"
                  : "flex h-full items-center justify-center px-8 py-12 text-center",
                children: a.busy
                  ? r.jsx(Kv, {
                      specimen: a.specimen,
                      hero: r.jsx("span", {
                        className: "mg-hero-slot mx-auto mb-5",
                        children: r.jsx(ps, { variant: "metal" }),
                      }),
                    })
                  : l !== null && l.error !== null
                    ? r.jsxs("div", {
                        className: "max-w-md space-y-3",
                        children: [
                          r.jsx("p", {
                            className:
                              "selectable break-all font-mono text-[13px] text-neutral-300",
                            children: l.name,
                          }),
                          r.jsx("p", {
                            className:
                              "text-sm leading-relaxed text-neutral-400",
                            children: l.error,
                          }),
                          l.path !== null &&
                            r.jsx("button", {
                              type: "button",
                              onClick: () =>
                                void window.modguard.reveal(l.path ?? ""),
                              className: ie({ level: "standard", size: "sm" }),
                              children: Hl(),
                            }),
                        ],
                      })
                    : r.jsx("p", {
                        className: "max-w-sm text-sm text-neutral-600",
                        children:
                          "Pick a mod on the left to see what ModGuard found.",
                      }),
              }),
      }),
    ],
  });
}
const Uc = [
  {
    value: "ask",
    label: "Ask me",
    meaning:
      "ModGuard never closes the game. It puts the button in front of you and waits. This is the default.",
  },
  {
    value: "on",
    label: "Do it",
    meaning:
      "ModGuard closes the game itself, after showing you a ten-second countdown you can cancel.",
  },
  {
    value: "off",
    label: "Never",
    meaning: "ModGuard will not close the game and will not offer to.",
  },
];
function Yv({
  rungs: a,
  settings: i,
  onChange: l,
  responses: c = [],
  onPutBack: u,
  supported: m = !0,
  busy: f = !1,
}) {
  var E;
  const x = f || !m,
    v = [...c].reverse();
  return r.jsxs("div", {
    className: "space-y-8 p-5",
    children: [
      r.jsx("div", {
        children: r.jsx("p", {
          className: "text-sm leading-relaxed text-neutral-400",
          children:
            "What ModGuard is allowed to do by itself while you are playing, and what it will only ever offer. Everything here happens on this computer.",
        }),
      }),
      !m &&
        r.jsx("p", {
          className:
            "border-l-2 border-neutral-700 pl-3 text-sm leading-relaxed text-neutral-400",
          children:
            "Watching a running game is macOS-only for now, so none of these can do anything on this computer and they are switched off. Every other part of ModGuard — the check, the sandbox, the report — works here exactly the same.",
        }),
      r.jsx(Ch, { rungs: a, onUndo: u }),
      r.jsxs("section", {
        "aria-label": "Defence settings",
        className: "border-t border-neutral-800 pt-5",
        children: [
          r.jsx("h3", {
            className:
              "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
            children: "The three switches",
          }),
          r.jsxs("div", {
            className: "mt-4 border border-neutral-800 px-4 py-3",
            children: [
              r.jsx("p", {
                className: "text-sm text-neutral-100",
                children: "Closing the game by itself",
              }),
              r.jsx("p", {
                className: "mt-1 text-[13px] leading-relaxed text-neutral-400",
                children:
                  "If ModGuard is wrong about this, you lose whatever you have done since your world last saved, in the middle of playing. If it is right, it ends the minutes your login is sitting in the game’s memory. It will only ever do this when it watched something happen — never on a suspicion, whatever the score said.",
              }),
              r.jsx("div", {
                role: "radiogroup",
                "aria-label": "Closing the game by itself",
                className: "mt-3 flex flex-wrap gap-2",
                children: Uc.map((y) =>
                  r.jsx(
                    "button",
                    {
                      type: "button",
                      role: "radio",
                      "aria-checked": i.autoClose === y.value,
                      disabled: x,
                      onClick: () => l({ autoClose: y.value }),
                      className: [
                        "cursor-pointer rounded-none border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-[background-color,border-color,color,transform] duration-100 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50",
                        i.autoClose === y.value
                          ? "border-neutral-300 text-neutral-100"
                          : "border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300",
                      ].join(" "),
                      children: y.label,
                    },
                    y.value,
                  ),
                ),
              }),
              r.jsx("p", {
                className: "mt-2 text-[12px] leading-relaxed text-neutral-500",
                children:
                  (E = Uc.find((y) => y.value === i.autoClose)) == null
                    ? void 0
                    : E.meaning,
              }),
            ],
          }),
          r.jsx(qc, {
            title: "Switch the mod off after the game closes",
            cost: "If ModGuard is wrong, one file in your mods folder gets .disabled on the end of its name and one tap puts it back. Nobody is playing when this happens, so it interrupts nothing at all.",
            on: i.quarantineAfter,
            disabled: x,
            onToggle: () => l({ quarantineAfter: !i.quarantineAfter }),
          }),
          r.jsx(qc, {
            title: "Switch off a mod that started another program",
            cost: "ModGuard already ends a program your game launched. This also renames the mod file that told it to, so it cannot do it again the moment you relaunch. Your game keeps running either way. This never touches the session you are in.",
            on: i.quarantineSpawned,
            disabled: x,
            onToggle: () => l({ quarantineSpawned: !i.quarantineSpawned }),
          }),
        ],
      }),
      v.length > 0 &&
        r.jsxs("section", {
          "aria-label": "What ModGuard has done",
          className: "border-t border-neutral-800 pt-5",
          children: [
            r.jsx("h3", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
              children: "What it has done",
            }),
            r.jsx("ul", {
              className:
                "mt-3 divide-y divide-neutral-900 border-t border-neutral-900",
              children: v.map((y) =>
                r.jsxs(
                  "li",
                  {
                    className:
                      "flex flex-wrap items-baseline gap-x-3 gap-y-1 py-2",
                    children: [
                      r.jsx("span", {
                        "aria-hidden": "true",
                        className: "font-mono text-xs text-neutral-500",
                        children: y.ok ? "✓" : "✕",
                      }),
                      r.jsxs("span", {
                        className:
                          "min-w-0 flex-1 text-[13px] text-neutral-300",
                        children: [
                          y.said,
                          y.error !== null &&
                            r.jsxs("span", {
                              className: "text-neutral-500",
                              children: [": ", y.error],
                            }),
                        ],
                      }),
                      r.jsx("span", {
                        className:
                          "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
                        children: y.automatic ? "by itself" : "you asked",
                      }),
                      r.jsx("span", {
                        className:
                          "font-mono text-[11px] tabular-nums text-neutral-600",
                        children: y.at === "" ? "" : Tn(y.at),
                      }),
                      y.undoPath !== null &&
                        u !== void 0 &&
                        r.jsx("button", {
                          type: "button",
                          onClick: () => u(y.undoPath ?? ""),
                          className: ie({ level: "quiet", size: "sm" }),
                          children: "Put back",
                        }),
                    ],
                  },
                  y.id,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function qc({ title: a, cost: i, on: l, disabled: c, onToggle: u }) {
  return r.jsxs("div", {
    className: "mt-3 border border-neutral-800 px-4 py-3",
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [
          r.jsx("span", { className: "text-sm text-neutral-100", children: a }),
          r.jsxs("button", {
            type: "button",
            role: "switch",
            "aria-checked": l,
            "aria-label": a,
            disabled: c,
            onClick: u,
            className: [
              "inline-flex cursor-pointer items-center gap-2 rounded-none border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-[background-color,border-color,color,transform] duration-100 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50",
              l
                ? "border-neutral-400 text-neutral-200"
                : "border-neutral-700 text-neutral-500 hover:border-neutral-500 hover:text-neutral-300",
            ].join(" "),
            children: [
              r.jsx("span", {
                "aria-hidden": "true",
                className: [
                  "h-2 w-2",
                  l ? "bg-neutral-300" : "border border-neutral-600",
                ].join(" "),
              }),
              l ? "On" : "Off",
            ],
          }),
        ],
      }),
      r.jsx("p", {
        className: "mt-1.5 text-[13px] leading-relaxed text-neutral-400",
        children: i,
      }),
    ],
  });
}
function Qv(a) {
  return r.jsx(Yv, {
    rungs: a.rungs,
    settings: a.settings,
    onChange: a.onChange,
    responses: a.responses,
    onPutBack: a.onPutBack,
    supported: a.supported,
  });
}
const Gc = ".disabled";
function Ua(a) {
  return a.toLowerCase().endsWith(Gc) ? a.slice(0, -Gc.length) : a;
}
function Xv(a) {
  return a.split(/[/\\]/).at(-1) ?? a;
}
function Jv(a, i) {
  const l = new Set(i.map((m) => Ua(m.name).toLowerCase())),
    c = [],
    u = [];
  for (const m of a) {
    const f = Xv(m),
      x = Ua(f).toLowerCase();
    if (l.has(x)) {
      u.push(f);
      continue;
    }
    (l.add(x), c.push(m));
  }
  return { clear: c, clashes: u };
}
function Zv(a) {
  return a.instance === null ? a.launcher : `${a.launcher} · ${a.instance}`;
}
function ex(a, i) {
  return { ...a, ...i };
}
const tx = {
    unsafe: "border-white text-white font-semibold",
    "be-careful": "border-white/70 text-neutral-100",
    "minor-notes": "border-neutral-600 text-neutral-300",
    "looks-safe": "border-neutral-700 text-neutral-400",
  },
  Pa = ie({ level: "ghost", size: "sm", extra: "px-1.5 py-0.5 text-[11px]" }),
  cs = ie({ level: "standard", size: "sm" });
function nx({
  file: a,
  state: i,
  confirming: l,
  onToggle: c,
  onCheck: u,
  onReveal: m,
  onAskDelete: f,
  onConfirmDelete: x,
  onCancelDelete: v,
  onOpenReport: E,
}) {
  const y = i.verdict === void 0 ? null : Ha[i.verdict],
    _ = i.busy !== void 0;
  return r.jsxs("li", {
    className: [
      "border-l-2 py-3 pl-3 pr-1",
      i.verdict === "unsafe" ? "border-white" : "border-transparent",
    ].join(" "),
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
        children: [
          r.jsx("span", {
            className: [
              "w-11 shrink-0 rounded-none text-center font-mono text-[10px] uppercase tracking-[0.15em]",
              a.disabled
                ? "border border-neutral-500 py-0.5 text-neutral-200"
                : "border border-transparent py-0.5 text-neutral-500",
            ].join(" "),
            children: a.disabled ? "Off" : "On",
          }),
          r.jsx("span", {
            title: a.name,
            className: [
              "selectable min-w-0 flex-1 truncate font-mono text-[12px]",
              a.disabled ? "text-neutral-500" : "text-neutral-200",
            ].join(" "),
            children: a.name,
          }),
          y !== null &&
            r.jsxs("span", {
              className: [
                "shrink-0 rounded-none border px-1.5 py-0.5 text-[10px] uppercase tracking-wide",
                tx[i.verdict ?? "looks-safe"],
              ].join(" "),
              children: [
                r.jsx("span", { "aria-hidden": "true", children: y.emoji }),
                " ",
                y.label,
                i.score !== void 0 &&
                  r.jsxs("span", {
                    className: "ml-1 font-mono tabular-nums",
                    children: [" ", i.score],
                  }),
              ],
            }),
          r.jsx("span", {
            className:
              "shrink-0 font-mono text-[11px] tabular-nums text-neutral-600",
            children: wh(a.sizeBytes),
          }),
        ],
      }),
      l
        ? r.jsxs("div", {
            className: "mt-2 flex flex-wrap items-center gap-2",
            children: [
              r.jsx("span", {
                className: "text-[13px] text-neutral-100",
                children: "Put this mod in the Trash?",
              }),
              r.jsx("button", {
                type: "button",
                onClick: x,
                className: ie({ level: "primary", size: "sm" }),
                children: "Move it to the Trash",
              }),
              r.jsx("button", {
                type: "button",
                onClick: v,
                className: cs,
                children: "Keep it",
              }),
              r.jsxs("p", {
                className:
                  "basis-full text-[11px] leading-relaxed text-neutral-500",
                children: [
                  "It goes to the Trash, exactly like dragging it there yourself. Open the Trash in ",
                  fs(),
                  " and you can put it straight back. ModGuard never wipes a file.",
                ],
              }),
            ],
          })
        : r.jsxs("div", {
            className: "mt-2 flex flex-wrap items-center gap-1",
            children: [
              r.jsx("button", {
                type: "button",
                onClick: c,
                disabled: _,
                className: Pa,
                children:
                  i.busy === "turning-off"
                    ? "Turning it off…"
                    : i.busy === "turning-on"
                      ? "Turning it on…"
                      : a.disabled
                        ? "Turn it on"
                        : "Turn it off",
              }),
              r.jsx("button", {
                type: "button",
                onClick: u,
                disabled: _,
                className: Pa,
                children: i.busy === "checking" ? "Checking…" : "Check it",
              }),
              E !== void 0 &&
                i.verdict !== void 0 &&
                r.jsx("button", {
                  type: "button",
                  onClick: E,
                  disabled: _,
                  className: Pa,
                  children: "See the whole report",
                }),
              r.jsx("button", {
                type: "button",
                onClick: m,
                disabled: _,
                className: Pa,
                children: Hl(),
              }),
              r.jsx("button", {
                type: "button",
                onClick: f,
                disabled: _,
                className: `ml-auto ${Pa}`,
                children: i.busy === "deleting" ? "Moving it…" : "Delete",
              }),
            ],
          }),
      i.note !== void 0 &&
        r.jsx("p", {
          className: "mt-1.5 text-[11px] leading-relaxed text-neutral-400",
          children: i.note,
        }),
      i.error !== void 0 &&
        r.jsx("p", {
          className:
            "mt-1.5 border-l-2 border-white pl-2 text-[11px] leading-relaxed text-neutral-200",
          children: i.error,
        }),
    ],
  });
}
function ax(a) {
  return {
    path: a,
    launcher: "Folder you picked",
    instance: null,
    modCount: 0,
  };
}
function rx({ folders: a, actions: i, onFoldersChanged: l, onOpenReport: c }) {
  const [u, m] = g.useState(null),
    [f, x] = g.useState(() => {
      var O;
      return ((O = a[0]) == null ? void 0 : O.path) ?? null;
    }),
    [v, E] = g.useState([]),
    [y, _] = g.useState(() => a.length > 0),
    [N, I] = g.useState({}),
    [D, T] = g.useState(null),
    [P, $] = g.useState("copy"),
    [K, X] = g.useState(null),
    [se, fe] = g.useState(!1),
    [z, q] = g.useState(null),
    [ue, _e] = g.useState(null),
    [Se, Te] = g.useState(null),
    [Re, Ae] = g.useState(!1),
    ye = u === null || a.some((O) => O.path === u.path) ? a : [...a, u];
  (ye.find((O) => O.path === f),
    g.useEffect(() => {
      if (f !== null) return;
      const O = a[0];
      O !== void 0 && x(O.path);
    }, [a, f]),
    g.useEffect(() => {
      if ((I({}), T(null), X(null), q(null), _e(null), Te(null), f === null)) {
        (E([]), _(!1));
        return;
      }
      let O = !1;
      return (
        _(!0),
        i
          .listMods(f)
          .then((te) => {
            O || E(te);
          })
          .catch(() => {
            O || (E([]), Te("ModGuard could not read that folder."));
          })
          .finally(() => {
            O || _(!1);
          }),
        () => {
          O = !0;
        }
      );
    }, [i, f]));
  const ve = g.useCallback(async () => {
      if (f !== null)
        try {
          E(await i.listMods(f));
        } catch {}
    }, [i, f]),
    pe = g.useCallback((O, te) => {
      I((Y) => ({ ...Y, [O]: ex(Y[O], te) }));
    }, []),
    he = g.useCallback(async (O) => {
      try {
        return await O();
      } catch {
        return { ok: !1, error: "ModGuard could not do that just now." };
      }
    }, []),
    k = g.useCallback(
      async (O) => {
        const te = Ua(O.name),
          Y = O.disabled;
        (_e(null),
          pe(te, {
            busy: Y ? "turning-on" : "turning-off",
            note: void 0,
            error: void 0,
          }));
        const me = await he(() =>
          Y ? i.restoreMod(O.path) : i.disableMod(O.path),
        );
        (pe(
          te,
          me.ok
            ? {
                busy: void 0,
                error: void 0,
                note: Y
                  ? "Turned back on. The launcher will load it again next time you play."
                  : "Turned off. ModGuard put .disabled on the end of its name, so the launcher skips it. Turn it back on whenever you like.",
              }
            : { busy: void 0, error: me.error },
        ),
          await ve(),
          l == null || l());
      },
      [i, l, ve, he, pe],
    ),
    U = g.useCallback(
      async (O) => {
        const te = Ua(O.name);
        pe(te, { busy: "checking", note: void 0, error: void 0 });
        try {
          const Y = await i.checkPath(O.path);
          pe(
            te,
            Y.ok
              ? {
                  busy: void 0,
                  error: void 0,
                  verdict: Y.report.verdict,
                  score: Y.report.score,
                }
              : { busy: void 0, error: Y.error },
          );
        } catch {
          pe(te, { busy: void 0, error: "ModGuard could not read that file." });
        }
      },
      [i, pe],
    ),
    L = g.useCallback(
      async (O) => {
        const te = Ua(O.name);
        (T(null),
          _e(null),
          pe(te, { busy: "deleting", note: void 0, error: void 0 }));
        const Y = await he(() => i.trashMod(O.path));
        (Y.ok
          ? (I((me) => {
              const Ne = { ...me };
              return (delete Ne[te], Ne);
            }),
            _e(O.name))
          : pe(te, { busy: void 0, error: Y.error }),
          await ve(),
          l == null || l());
      },
      [i, l, ve, he, pe],
    ),
    w = g.useCallback(
      async (O) => {
        if (f === null || O.length === 0) return;
        (X(null), Te(null), _e(null), fe(!0));
        const te = P;
        try {
          q({ report: await i.installMods(f, O, te), mode: te });
        } catch {
          Te("ModGuard could not add those to this folder.");
        } finally {
          fe(!1);
        }
        (await ve(), l == null || l());
      },
      [i, f, P, l, ve],
    ),
    M = g.useCallback(
      async (O) => {
        if ((q(null), Te(null), _e(null), f === null)) {
          Te("Choose a mods folder first.");
          return;
        }
        if (O.length === 0) return;
        const te = Jv(O, v);
        if (te.clashes.length > 0) {
          X(te);
          return;
        }
        await w(te.clear);
      },
      [f, v, w],
    ),
    Q = g.useCallback(async () => {
      const O = await i.pickManageFolder();
      O !== null && (m(ax(O)), x(O));
    }, [i]),
    re = g.useCallback(async () => {
      await M(await i.pickFiles());
    }, [i, M]),
    V = v.filter((O) => O.disabled).length;
  return r.jsxs("div", {
    onDragOver: (O) => {
      (O.preventDefault(), f !== null && !se && Ae(!0));
    },
    onDragLeave: (O) => {
      O.currentTarget.contains(O.relatedTarget) || Ae(!1);
    },
    onDrop: (O) => {
      if ((O.preventDefault(), Ae(!1), f === null || se)) return;
      const te = [];
      let Y = 0;
      for (const me of Array.from(O.dataTransfer.files)) {
        const Ne = i.pathForFile(me);
        Ne !== null && Ne !== "" ? te.push(Ne) : (Y += 1);
      }
      if (te.length === 0) {
        Te(
          Y > 0
            ? `ModGuard could not tell where those files are on ${Ft()}. Use the Add mods button instead.`
            : "There were no files in what you dropped.",
        );
        return;
      }
      M(te);
    },
    className: "relative min-h-full",
    children: [
      Re &&
        r.jsx("div", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute inset-3 z-10 flex items-start justify-center border-2 border-dashed border-white bg-white/5 pt-10",
          children: r.jsx("span", {
            className:
              "rounded-none border border-white bg-neutral-950 px-3 py-1.5 text-sm text-neutral-100",
            children: "Drop them here to put them in this folder",
          }),
        }),
      r.jsxs("div", {
        className: "mx-auto w-full max-w-3xl px-8 py-12",
        children: [
          r.jsx("h1", {
            className:
              "font-display text-2xl font-semibold leading-tight tracking-tight text-neutral-50",
            children: "Your mods",
          }),
          r.jsx("p", {
            className: "mt-3 max-w-xl leading-relaxed text-neutral-400",
            children:
              "Everything in the folder your launcher reads. Put a mod in, take one out, or switch one off for a while without losing it. Nothing on this screen opens or runs a mod — it only moves files, and all of it can be undone.",
          }),
          r.jsx("div", {
            className: "mt-10",
            children: r.jsxs(ot, {
              title: "Mods folder",
              note: ye.length === 1 ? "1 folder" : `${ye.length} folders`,
              children: [
                ye.length === 0
                  ? r.jsxs("p", {
                      className: "text-sm leading-relaxed text-neutral-400",
                      children: [
                        "ModGuard could not find a mods folder on ",
                        Ft(),
                        ". If your launcher keeps one somewhere unusual, point it at the folder yourself.",
                      ],
                    })
                  : r.jsx("ul", {
                      className: "space-y-px",
                      children: ye.map((O) => {
                        const te = O.path === f;
                        return r.jsxs(
                          "li",
                          {
                            children: [
                              r.jsxs("button", {
                                type: "button",
                                onClick: () => x(O.path),
                                "aria-current": te ? "true" : void 0,
                                className: [
                                  "flex w-full items-baseline gap-3 border-l-2 px-3 py-2 text-left transition-colors",
                                  te
                                    ? "border-white bg-neutral-900"
                                    : "border-transparent hover:bg-neutral-900/60",
                                ].join(" "),
                                children: [
                                  r.jsx("span", {
                                    className:
                                      "truncate text-[13px] text-neutral-200",
                                    children: Zv(O),
                                  }),
                                  r.jsxs("span", {
                                    className:
                                      "ml-auto shrink-0 font-mono text-[11px] text-neutral-600",
                                    children: [
                                      r.jsx("span", {
                                        className: "tabular-nums",
                                        children: te ? v.length : O.modCount,
                                      }),
                                      " ",
                                      (te ? v.length : O.modCount) === 1
                                        ? "mod"
                                        : "mods",
                                    ],
                                  }),
                                ],
                              }),
                              te &&
                                r.jsx("p", {
                                  className:
                                    "selectable break-all px-3 pb-2 pl-5 font-mono text-[11px] text-neutral-600",
                                  children: O.path,
                                }),
                            ],
                          },
                          O.path,
                        );
                      }),
                    }),
                r.jsx("button", {
                  type: "button",
                  onClick: () => void Q(),
                  className: `mt-3 ${cs}`,
                  children: "Choose a folder…",
                }),
                r.jsx("p", {
                  className: "mt-2 text-xs leading-relaxed text-neutral-600",
                  children:
                    "Adding and deleting only work in a folder ModGuard found itself, or one you pick here.",
                }),
              ],
            }),
          }),
          r.jsx("div", {
            className: "mt-10",
            children: r.jsxs(ot, {
              title: "Add mods",
              note:
                P === "copy" ? "the original stays put" : "the original moves",
              children: [
                r.jsxs("div", {
                  className: "flex flex-wrap items-center gap-2",
                  children: [
                    r.jsx("button", {
                      type: "button",
                      onClick: () => void re(),
                      disabled: se || f === null,
                      className:
                        "rounded-none border border-neutral-500 px-3 py-1.5 text-xs text-neutral-100 transition-colors hover:border-neutral-300 disabled:pointer-events-none disabled:opacity-60",
                      children: se ? "Adding…" : "Add mods…",
                    }),
                    r.jsx("div", {
                      role: "radiogroup",
                      "aria-label": "What happens to the file you are adding",
                      className: "flex items-center gap-px",
                      children: ["copy", "move"].map((O) =>
                        r.jsx(
                          "button",
                          {
                            type: "button",
                            role: "radio",
                            "aria-checked": P === O,
                            onClick: () => $(O),
                            className: [
                              "rounded-none border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors",
                              P === O
                                ? "border-white text-white"
                                : "border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300",
                            ].join(" "),
                            children: O === "copy" ? "Copy" : "Move",
                          },
                          O,
                        ),
                      ),
                    }),
                  ],
                }),
                r.jsx("p", {
                  className: "mt-3 text-xs leading-relaxed text-neutral-500",
                  children:
                    P === "copy"
                      ? "Copy: the mod stays where it is now, and a copy of it goes in this folder."
                      : "Move: the mod is taken out of the folder it is in now and put in this one. It is not deleted, just somewhere else.",
                }),
                r.jsx("p", {
                  className: "mt-1 text-xs leading-relaxed text-neutral-600",
                  children:
                    "You can also drag mods from Finder straight onto this window. ModGuard will not write over a mod you already have.",
                }),
                K !== null &&
                  r.jsxs("div", {
                    className: "mt-4 border-l-2 border-white pl-3",
                    children: [
                      r.jsx("p", {
                        className: "text-sm leading-relaxed text-neutral-100",
                        children:
                          K.clashes.length === 1
                            ? "There is already a mod with this name in this folder:"
                            : "There are already mods with these names in this folder:",
                      }),
                      r.jsx("ul", {
                        className: "mt-1.5 space-y-0.5",
                        children: K.clashes.map((O) =>
                          r.jsx(
                            "li",
                            {
                              className:
                                "selectable break-all font-mono text-[11px] text-neutral-300",
                              children: O,
                            },
                            O,
                          ),
                        ),
                      }),
                      r.jsx("p", {
                        className:
                          "mt-2 text-xs leading-relaxed text-neutral-500",
                        children:
                          "ModGuard will not write over a mod you already have, because the old one would be gone for good. If you are swapping in a newer version, delete the one in the list below first — it goes to the Trash, so you can still get it back — then add this one again.",
                      }),
                      r.jsxs("div", {
                        className: "mt-3 flex flex-wrap items-center gap-2",
                        children: [
                          K.clear.length > 0 &&
                            r.jsxs("button", {
                              type: "button",
                              onClick: () => void w(K.clear),
                              className: cs,
                              children: ["Add the other ", K.clear.length],
                            }),
                          r.jsx("button", {
                            type: "button",
                            onClick: () => X(null),
                            className: cs,
                            children:
                              K.clear.length > 0 ? "Cancel" : "All right",
                          }),
                        ],
                      }),
                    ],
                  }),
                z !== null &&
                  r.jsxs("div", {
                    className: "mt-4 border-l-2 border-neutral-700 pl-3",
                    children: [
                      r.jsxs("p", {
                        className: "text-sm leading-relaxed text-neutral-200",
                        children: [
                          z.report.installed.length === 0
                            ? "Nothing was added."
                            : `${z.report.installed.length} ${z.report.installed.length === 1 ? "mod is" : "mods are"} now in this folder${z.mode === "move" ? ", and out of where they were" : ""}.`,
                          z.report.failed.length > 0 &&
                            ` ${z.report.failed.length} could not be added:`,
                        ],
                      }),
                      z.report.failed.length > 0 &&
                        r.jsx("ul", {
                          className: "mt-1.5 space-y-1",
                          children: z.report.failed.map((O) =>
                            r.jsxs(
                              "li",
                              {
                                className:
                                  "text-xs leading-relaxed text-neutral-400",
                                children: [
                                  r.jsx("span", {
                                    className:
                                      "selectable break-all font-mono text-[11px] text-neutral-300",
                                    children: O.name,
                                  }),
                                  " ",
                                  "— ",
                                  O.error,
                                ],
                              },
                              O.name,
                            ),
                          ),
                        }),
                    ],
                  }),
                Se !== null &&
                  r.jsx("p", {
                    role: "status",
                    className:
                      "mt-4 border-l-2 border-white pl-3 text-sm leading-relaxed text-neutral-200",
                    children: Se,
                  }),
              ],
            }),
          }),
          r.jsx("div", {
            className: "mt-10",
            children: r.jsxs(ot, {
              title: "What is in this folder",
              note: y
                ? "reading…"
                : V > 0
                  ? `${v.length} mods · ${V} off`
                  : `${v.length} ${v.length === 1 ? "mod" : "mods"}`,
              children: [
                ue !== null &&
                  r.jsxs("p", {
                    role: "status",
                    className:
                      "mb-3 border-l-2 border-neutral-700 pl-3 text-sm leading-relaxed text-neutral-300",
                    children: [
                      r.jsx("span", {
                        className:
                          "selectable font-mono text-[11px] text-neutral-200",
                        children: ue,
                      }),
                      " ",
                      "is in the Trash. Open the Trash in ",
                      fs(),
                      " if you want it back.",
                    ],
                  }),
                f === null
                  ? r.jsx("p", {
                      className: "text-sm text-neutral-500",
                      children:
                        "Pick a mods folder above and its mods will be listed here.",
                    })
                  : y
                    ? r.jsx("p", {
                        className: "text-sm text-neutral-500",
                        children: "Reading this folder…",
                      })
                    : v.length === 0
                      ? r.jsx("p", {
                          className: "text-sm leading-relaxed text-neutral-500",
                          children:
                            "There are no mods in this folder yet. Add some with the button above, or drag them in from Finder.",
                        })
                      : r.jsx("ul", {
                          className:
                            "divide-y divide-neutral-900 border-t border-neutral-900",
                          children: v.map((O) =>
                            r.jsx(
                              nx,
                              {
                                file: O,
                                state: N[Ua(O.name)] ?? {},
                                confirming: D === O.path,
                                onToggle: () => void k(O),
                                onCheck: () => void U(O),
                                onReveal: () => i.reveal(O.path),
                                onAskDelete: () => T(O.path),
                                onConfirmDelete: () => void L(O),
                                onCancelDelete: () => T(null),
                                onOpenReport:
                                  c === void 0 ? void 0 : () => c(O.path),
                              },
                              O.path,
                            ),
                          ),
                        }),
                f !== null &&
                  !y &&
                  r.jsx("button", {
                    type: "button",
                    onClick: () => void ve(),
                    className: `mt-3 ${Pa}`,
                    children: "Read the folder again",
                  }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function ox({
  folders: a,
  modsInstalled: i,
  busy: l,
  actions: c,
  onCheckAll: u,
  onFoldersChanged: m,
  onOpenReport: f,
}) {
  return r.jsxs("div", {
    className: "min-h-full",
    children: [
      a.length > 0 &&
        r.jsxs("div", {
          className:
            "flex items-center justify-between gap-3 border-b border-neutral-900 px-5 py-3",
          children: [
            r.jsxs("span", {
              className: "text-sm text-neutral-400",
              children: [
                i,
                " ",
                i === 1 ? "mod" : "mods",
                " across",
                " ",
                a.length,
                " ",
                a.length === 1 ? "folder" : "folders",
              ],
            }),
            r.jsx("button", {
              type: "button",
              disabled: l,
              onClick: u,
              className: ie({ level: "strong", size: "sm" }),
              children: "Check all my mods",
            }),
          ],
        }),
      r.jsx(rx, {
        folders: a,
        actions: c,
        onFoldersChanged: m,
        onOpenReport: f,
      }),
    ],
  });
}
function wl(a) {
  if (a === "") return "your Downloads folder";
  const i = /^\/Users\/[^/]+(\/.*)$/.exec(a);
  return (i == null ? void 0 : i[1]) === void 0 ? a : `~${i[1]}`;
}
function sx(a) {
  const i = a.origin;
  return i === null || i.site === null
    ? null
    : i.app === null
      ? i.site
      : `${i.site} · via ${i.app}`;
}
function ix({
  state: a,
  busy: i = !1,
  onToggle: l,
  onDismiss: c,
  onOpenReport: u,
  onReveal: m,
}) {
  return r.jsxs("section", {
    "aria-label": "Downloads watch",
    className: "border-t border-neutral-800 pt-6",
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [
          r.jsx("h2", {
            className:
              "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
            children: "Watch downloads",
          }),
          r.jsxs("button", {
            type: "button",
            role: "switch",
            "aria-checked": a.enabled,
            "aria-label": "Watch my Downloads folder for mods",
            disabled: i,
            onClick: l,
            className: [
              "inline-flex cursor-pointer items-center gap-2 rounded-none border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-[background-color,border-color,color,transform] duration-100 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60",
              a.enabled
                ? "border-white text-white"
                : "border-neutral-700 text-neutral-500 hover:border-neutral-500 hover:text-neutral-300",
            ].join(" "),
            children: [
              r.jsx("span", {
                "aria-hidden": "true",
                className: [
                  "h-2 w-2",
                  a.enabled ? "bg-white" : "border border-neutral-600",
                ].join(" "),
              }),
              a.enabled ? "On" : "Off",
            ],
          }),
        ],
      }),
      a.enabled && !a.watching
        ? r.jsxs("div", {
            className: "mt-4",
            children: [
              r.jsxs("p", {
                className: "text-sm leading-relaxed text-neutral-300",
                children: [
                  "ModGuard could not find",
                  " ",
                  r.jsx("span", {
                    className: "font-mono text-[13px] text-neutral-200",
                    children: wl(a.folder),
                  }),
                  ", so nothing is being watched.",
                ],
              }),
              r.jsx("p", {
                className: "mt-2 text-xs leading-relaxed text-neutral-600",
                children:
                  "The switch is on, but that folder is not there. If you keep downloads somewhere else, drag them onto this window instead — the check is the same one.",
              }),
            ],
          })
        : a.enabled
          ? r.jsxs("div", {
              className: "mt-4",
              children: [
                r.jsxs("p", {
                  className: "text-sm leading-relaxed text-neutral-300",
                  children: [
                    "ModGuard is watching",
                    " ",
                    r.jsx("span", {
                      className: "font-mono text-[13px] text-neutral-200",
                      children: wl(a.folder),
                    }),
                    ". When a ",
                    r.jsx("span", {
                      className: "font-mono text-[13px]",
                      children: ".jar",
                    }),
                    " or",
                    " ",
                    r.jsx("span", {
                      className: "font-mono text-[13px]",
                      children: ".zip",
                    }),
                    " lands there it gets read, the same way it would if you dropped it on this window yourself.",
                  ],
                }),
                r.jsxs("p", {
                  className: "mt-2 text-xs leading-relaxed text-neutral-600",
                  children: [
                    "You only hear from it when there is something worth saying. Your files are never moved, renamed or deleted, and every other file in that folder is ignored. If an archive turns out not to be a mod, nothing about it is sent anywhere at all — and if it is one, the same fingerprint check runs as when you drop a mod on this window yourself, only while",
                    " ",
                    r.jsx("span", {
                      className: "text-neutral-500",
                      children: "Warning others",
                    }),
                    " is on.",
                  ],
                }),
              ],
            })
          : r.jsxs("div", {
              className: "mt-4",
              children: [
                r.jsxs("p", {
                  className: "text-sm leading-relaxed text-neutral-400",
                  children: [
                    "Off. Nothing in",
                    " ",
                    r.jsx("span", {
                      className: "font-mono text-[13px]",
                      children: wl(a.folder),
                    }),
                    " is being looked at.",
                  ],
                }),
                r.jsxs("p", {
                  className: "mt-2 text-xs leading-relaxed text-neutral-600",
                  children: [
                    "Turned on, ModGuard reads every mod file that arrives in that folder and warns you before you install it — which is the only moment a warning is still worth anything. It reads ",
                    r.jsx("span", { className: "font-mono", children: ".jar" }),
                    " and",
                    " ",
                    r.jsx("span", { className: "font-mono", children: ".zip" }),
                    " files and ignores everything else in there. It never moves, renames or deletes anything, and no file leaves",
                    " ",
                    Ft(),
                    ". This is your Downloads folder, so it is off until you say otherwise.",
                  ],
                }),
              ],
            }),
      a.enabled &&
        a.watching &&
        a.notices.length === 0 &&
        r.jsxs("p", {
          className:
            "mt-4 border-l-2 border-neutral-700 pl-3 text-sm leading-relaxed text-neutral-300",
          children: [
            r.jsx("span", {
              "aria-hidden": "true",
              className: "font-mono text-xs text-neutral-500",
              children: "✓",
            }),
            " ",
            a.readSoFar === 0
              ? "No mods have arrived since ModGuard started."
              : `${a.readSoFar} ${a.readSoFar === 1 ? "mod has" : "mods have"} arrived and been checked. Nothing worth warning you about.`,
          ],
        }),
      a.notices.length > 0 &&
        r.jsx("ul", {
          className: "mt-4 space-y-4",
          children: a.notices.map((f) => {
            const x = sx(f);
            return r.jsxs(
              "li",
              {
                className: [
                  "pl-3",
                  f.verdict === "unsafe"
                    ? "border-l-2 border-neutral-300"
                    : "border-l-2 border-neutral-700",
                ].join(" "),
                children: [
                  r.jsxs("div", {
                    className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
                    children: [
                      r.jsx("span", {
                        className: "text-sm text-neutral-100",
                        children: f.headline,
                      }),
                      x !== null &&
                        r.jsx("span", {
                          className: "font-mono text-[11px] text-neutral-500",
                          children: x,
                        }),
                    ],
                  }),
                  r.jsx("p", {
                    className:
                      "mt-1 text-[13px] leading-relaxed text-neutral-400",
                    children: f.detail,
                  }),
                  r.jsxs("div", {
                    className: "mt-2 flex flex-wrap items-center gap-3",
                    children: [
                      r.jsx("button", {
                        type: "button",
                        onClick: () => u(f.path),
                        className: ie({ level: "strong", size: "sm" }),
                        children: "Read the whole report",
                      }),
                      r.jsx("button", {
                        type: "button",
                        onClick: () => m(f.path),
                        className: ie({ level: "ghost", size: "sm" }),
                        children: "Show me the file",
                      }),
                      r.jsx("button", {
                        type: "button",
                        onClick: () => c(f.id),
                        className: ie({
                          level: "ghost",
                          size: "sm",
                          extra:
                            "ml-auto font-mono text-[10px] uppercase tracking-[0.15em]",
                        }),
                        children: "Got it",
                      }),
                    ],
                  }),
                ],
              },
              f.id,
            );
          }),
        }),
    ],
  });
}
function bl({ label: a, children: i }) {
  return r.jsx("section", {
    "aria-label": a,
    className: "mg-surface overflow-hidden rounded border border-neutral-800",
    children: i,
  });
}
const lx = {
  "mod-hosting": "Mod sites",
  "chat-webhook": "Chat services",
  "paste-or-upload": "Paste and upload sites",
  "dynamic-dns": "Somebody's home address",
  "url-shortener": "Shortened links",
  "raw-ip": "Bare addresses",
  local: "This computer",
  unknown: "Not recognised",
};
function dx(a) {
  const i = new Map();
  for (const l of a) {
    const c = Mf(l.host).kind,
      u = i.get(c);
    u === void 0 ? i.set(c, [l]) : u.push(l);
  }
  return [...i.entries()]
    .map(([l, c]) => ({ key: l, label: lx[l], destinations: c }))
    .sort((l, c) => c.destinations.length - l.destinations.length);
}
function Sl(a) {
  const i = new Date(a).getTime();
  return Number.isNaN(i) ? 0 : i;
}
const ds = 600,
  us = 18;
function ux({
  startedAt: a,
  now: i,
  destinations: l,
  marks: c = [],
  pollMs: u = 2e3,
}) {
  if (a === null) return null;
  const m = Sl(a),
    x = Math.max(Sl(i), m + 1e3) - m,
    v = dx(l),
    E = Math.max(us, v.length * us),
    y = (N) => Math.max(0, Math.min(ds, ((Sl(N) - m) / x) * ds)),
    _ =
      v.length === 0
        ? "No connections have been seen yet this session."
        : `${l.length} ${l.length === 1 ? "place" : "places"} in ${v.length} ${v.length === 1 ? "group" : "groups"}: ${v.map((N) => N.label).join(", ")}.`;
  return r.jsxs("figure", {
    className: "mt-4",
    children: [
      r.jsxs("svg", {
        viewBox: `0 0 ${ds} ${E}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": `Everything the game has connected to since it started. ${_}`,
        className: "block h-auto w-full",
        style: { height: `${E}px` },
        children: [
          v.map((N, I) => {
            const D = I * us + us / 2;
            return r.jsxs(
              "g",
              {
                children: [
                  r.jsx("line", {
                    x1: 0,
                    y1: D,
                    x2: ds,
                    y2: D,
                    stroke: "currentColor",
                    strokeWidth: 1,
                    className: "text-neutral-900",
                  }),
                  N.destinations.map((T) => {
                    const P = y(T.firstSeen),
                      $ = Math.max(P + 2, y(T.lastSeen)),
                      K = Math.min(T.ticks, 40),
                      X = K > 1 ? ($ - P) / (K - 1) : 0;
                    return Array.from({ length: K }, (se, fe) =>
                      r.jsx(
                        "line",
                        {
                          x1: P + X * fe,
                          y1: D - 4,
                          x2: P + X * fe,
                          y2: D + 4,
                          stroke: "currentColor",
                          strokeWidth: 1.5,
                          className: "text-neutral-500",
                        },
                        `${T.host}:${T.port}:${fe}`,
                      ),
                    );
                  }),
                ],
              },
              N.key,
            );
          }),
          c.map((N, I) =>
            r.jsx(
              "line",
              {
                x1: y(N.at),
                y1: 0,
                x2: y(N.at),
                y2: E,
                stroke: "currentColor",
                strokeWidth: 1,
                className: "text-neutral-100",
              },
              `${N.at}-${I}`,
            ),
          ),
        ],
      }),
      r.jsxs("figcaption", {
        className:
          "mt-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
        children: [
          r.jsx("span", { children: "game started" }),
          r.jsxs("span", {
            className: "normal-case tracking-normal text-neutral-600",
            children: [
              "each mark is one look, about every ",
              Math.round(u / 1e3),
              " seconds — anything shorter than that fits between two of them",
            ],
          }),
          r.jsx("span", { children: "now" }),
        ],
      }),
      r.jsx("ul", {
        className: "mt-2 space-y-0.5",
        children: v.map((N) =>
          r.jsxs(
            "li",
            {
              className: "text-[11px] text-neutral-500",
              children: [
                r.jsx("span", {
                  className: "text-neutral-400",
                  children: N.label,
                }),
                " ",
                r.jsxs("span", {
                  className: "font-mono text-neutral-600",
                  children: [
                    N.destinations.length,
                    " ",
                    N.destinations.length === 1 ? "place" : "places",
                  ],
                }),
              ],
            },
            N.key,
          ),
        ),
      }),
    ],
  });
}
const cx = {
  "mods-folder": "your mods folder",
  "game-folder": "the game's own folder",
  temp: "the Mac's scratch folder",
  "login-item": "programs macOS starts when you log in",
  "shell-startup": "the files Terminal runs when it opens",
  "scheduled-task": "the Mac's scheduled tasks",
};
function hx(a, i) {
  const l = new Date(a).getTime();
  if (Number.isNaN(l)) return "--:--";
  const c = Math.max(0, Math.floor((i - l) / 1e3)),
    u = Math.floor(c / 3600),
    m = Math.floor((c % 3600) / 60),
    f = c % 60,
    x = (v) => String(v).padStart(2, "0");
  return u > 0 ? `${u}:${x(m)}:${x(f)}` : `${x(m)}:${x(f)}`;
}
function mx(a) {
  const i = new Date(a);
  if (Number.isNaN(i.getTime())) return "";
  const l = i.getFullYear() === new Date().getFullYear();
  return i.toLocaleDateString(void 0, {
    month: "short",
    day: "numeric",
    ...(l ? {} : { year: "numeric" }),
  });
}
function fx(a) {
  return a == null
    ? "not reported by the launcher"
    : (a
        .split(/[/\\]/)
        .filter((l) => l !== "")
        .at(-1) ?? a);
}
function px({
  status: a,
  watchPersistence: i = !1,
  onTogglePersistence: l,
  threats: c,
  destinations: u = [],
  history: m = [],
  onToggleArmed: f,
  onStopGame: x,
  stopping: v = !1,
  onOpenIncident: E,
  busy: y = !1,
}) {
  var K, X, se, fe;
  const _ = a.running && a.game !== null,
    [N, I] = g.useState(() => Date.now());
  g.useEffect(() => {
    if (!_) return;
    I(Date.now());
    const z = setInterval(() => I(Date.now()), 1e3);
    return () => clearInterval(z);
  }, [_, (K = a.game) == null ? void 0 : K.pid]);
  const D = Cl(c),
    T = D[0] ?? null,
    P =
      ((X = a.session) == null ? void 0 : X.startedAt) ??
      ((se = a.game) == null ? void 0 : se.startedAt) ??
      null,
    $ = a.running ? (a.game === null ? "Armed" : "Watching") : "Off";
  return r.jsxs("section", {
    "aria-label": "Live guard",
    className: "border-t border-neutral-800 pt-6",
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [
          r.jsx("h2", {
            className:
              "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
            children: "Live guard",
          }),
          r.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              a.supported
                ? r.jsxs("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": a.running,
                    "aria-label": "Watch the running game",
                    disabled: y,
                    onClick: f,
                    className: [
                      "inline-flex cursor-pointer items-center gap-2 rounded-none border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-[background-color,border-color,color,transform] duration-100 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60",
                      a.running
                        ? "border-white text-white"
                        : "border-neutral-700 text-neutral-500 hover:border-neutral-500 hover:text-neutral-300",
                    ].join(" "),
                    children: [
                      r.jsx("span", {
                        "aria-hidden": "true",
                        className: [
                          "h-2 w-2",
                          a.running ? "bg-white" : "border border-neutral-600",
                        ].join(" "),
                      }),
                      $,
                    ],
                  })
                : r.jsx("span", {
                    className:
                      "rounded-none border border-neutral-800 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600",
                    children: "macOS only",
                  }),
              _ &&
                P !== null &&
                r.jsx("span", {
                  "aria-label": "Time spent watching this game",
                  className:
                    "font-mono text-[11px] tabular-nums text-neutral-400",
                  children: hx(P, N),
                }),
            ],
          }),
        ],
      }),
      !a.supported &&
        r.jsxs("div", {
          className: "mt-4",
          children: [
            r.jsx("p", {
              className: "text-sm leading-relaxed text-neutral-400",
              children: "Watching a running game is macOS-only for now.",
            }),
            r.jsx("p", {
              className: "mt-2 text-xs leading-relaxed text-neutral-600",
              children:
                "The rest of ModGuard works here exactly the same: every mod you drop in is read and run inside the sealed fake Minecraft, and you get the full report. Only the part that watches a game while you play — which reads the system's list of running programs — is still being written for this platform.",
            }),
          ],
        }),
      a.supported &&
        !a.running &&
        r.jsxs("div", {
          className: "mt-4",
          children: [
            r.jsx("p", {
              className: "text-sm leading-relaxed text-neutral-400",
              children:
                "Live guard is off. Nothing that is already running is being watched.",
            }),
            r.jsx("p", {
              className: "mt-2 text-xs leading-relaxed text-neutral-600",
              children:
                "Turned on, ModGuard watches the Minecraft process for connections to places that collect logins, for the files that hold your login being opened, for new mods appearing mid-session, and for the game starting another program. It reads; it changes nothing until you tell it to.",
            }),
          ],
        }),
      a.running &&
        a.game === null &&
        r.jsxs("div", {
          className: "mt-4",
          children: [
            r.jsx("p", {
              className: "text-sm leading-relaxed text-neutral-300",
              children:
                "No game running. ModGuard will start watching the moment you launch Minecraft.",
            }),
            r.jsxs("p", {
              className: "mt-2 text-xs text-neutral-600",
              children: [
                "Looking for a Java process with a Minecraft command line. Nothing else on ",
                Ft(),
                " is touched.",
              ],
            }),
          ],
        }),
      _ &&
        a.game !== null &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsxs("dl", {
              className: "mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4",
              children: [
                r.jsx(Ge, {
                  label: "Process",
                  value: `pid ${a.game.pid}`,
                  mono: !0,
                }),
                r.jsx(Ge, {
                  label: "Instance",
                  value: fx(a.game.gameDir),
                  mono: !0,
                }),
                r.jsx(Ge, {
                  label: "Game started",
                  value: Tn(a.game.startedAt),
                  mono: !0,
                }),
                r.jsx(Ge, {
                  label: "Mods in it",
                  value: String(
                    ((fe = a.session) == null ? void 0 : fe.modsWatched) ?? 0,
                  ),
                  mono: !0,
                }),
              ],
            }),
            r.jsxs("div", {
              className:
                "mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-steel-4 pt-3 font-mono text-[11px] tabular-nums text-neutral-600",
              children: [
                r.jsxs("span", {
                  children: [
                    a.connectionsSeen,
                    " ",
                    a.connectionsSeen === 1 ? "connection" : "connections",
                    " seen",
                  ],
                }),
                r.jsxs("span", { children: [c.length, " flagged"] }),
                a.game.loader != null &&
                  a.game.loader !== "unknown" &&
                  r.jsx("span", { children: a.game.loader }),
                a.game.profile != null &&
                  r.jsx("span", { children: a.game.profile }),
              ],
            }),
            r.jsx(ux, {
              startedAt: P,
              now: new Date(N).toISOString(),
              destinations: u,
              marks: D.map((z) => ({
                at: z.at,
                symbol: ms[z.severity].symbol,
                label: z.headline,
              })),
            }),
            u.length > 0 &&
              r.jsxs("details", {
                className: "group mt-3 border-t border-neutral-900 pt-3",
                children: [
                  r.jsxs("summary", {
                    className:
                      "cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-400",
                    children: ["Where it has connected (", u.length, ")"],
                  }),
                  r.jsx("ul", {
                    className: "mt-3 space-y-1",
                    children: u.map((z) =>
                      r.jsxs(
                        "li",
                        {
                          className:
                            "selectable flex flex-wrap items-baseline gap-x-2 break-all font-mono text-[11px] text-neutral-400",
                          children: [
                            r.jsxs("span", {
                              className: "text-neutral-300",
                              children: [z.host, ":", z.port],
                            }),
                            z.hostname !== null &&
                              r.jsx("span", {
                                className: "text-neutral-600",
                                children: z.hostname,
                              }),
                            r.jsx("span", {
                              className:
                                "ml-auto tabular-nums text-neutral-700",
                              children: Tn(z.firstSeen),
                            }),
                          ],
                        },
                        `${z.host}:${z.port}`,
                      ),
                    ),
                  }),
                  r.jsxs("p", {
                    className: "mt-2 text-xs leading-relaxed text-neutral-600",
                    children: [
                      "Addresses only, never a byte of what was sent — from outside the game, the contents of a connection are unknowable. None of this leaves",
                      " ",
                      Ft(),
                      ", and ModGuard never opens one of these itself.",
                    ],
                  }),
                ],
              }),
            D.length === 0
              ? r.jsxs("p", {
                  className:
                    "mt-4 border-l-2 border-neutral-700 pl-3 text-sm leading-relaxed text-neutral-300",
                  children: [
                    r.jsx("span", {
                      "aria-hidden": "true",
                      className: "font-mono text-xs text-neutral-500",
                      children: "✓",
                    }),
                    " ",
                    "Nothing ModGuard can see has gone anywhere it should not. The counter above is still moving, so this is the state right now, not a stale result.",
                  ],
                })
              : r.jsxs(r.Fragment, {
                  children: [
                    r.jsx("ul", {
                      className: "mt-4 space-y-3",
                      children: D.map((z) => {
                        const q = ms[z.severity];
                        return r.jsxs(
                          "li",
                          {
                            className: `pl-3 ${q.rule}`,
                            children: [
                              r.jsxs("div", {
                                className:
                                  "flex flex-wrap items-baseline gap-x-2 gap-y-1",
                                children: [
                                  r.jsx("span", {
                                    "aria-hidden": "true",
                                    className:
                                      "font-mono text-xs text-neutral-400",
                                    children: q.symbol,
                                  }),
                                  r.jsx("span", {
                                    className: `text-sm ${q.headline}`,
                                    children: z.headline,
                                  }),
                                  r.jsx("span", {
                                    className: `rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${q.badge}`,
                                    children: jh[z.kind],
                                  }),
                                  r.jsx("span", {
                                    className:
                                      "ml-auto font-mono text-[11px] tabular-nums text-neutral-600",
                                    children: Tn(z.at),
                                  }),
                                ],
                              }),
                              z.evidence[0] !== void 0 &&
                                r.jsxs("p", {
                                  className:
                                    "selectable mt-1 break-all font-mono text-[11px] text-neutral-500",
                                  children: [
                                    z.evidence[0],
                                    z.evidence.length > 1 &&
                                      ` +${z.evidence.length - 1} more`,
                                  ],
                                }),
                            ],
                          },
                          z.id,
                        );
                      }),
                    }),
                    T !== null &&
                      T.severity !== "watch" &&
                      r.jsxs("div", {
                        className: "mt-4 flex flex-wrap items-center gap-2",
                        children: [
                          r.jsx("button", {
                            type: "button",
                            onClick: x,
                            disabled: v,
                            className: ie({ level: "primary", size: "sm" }),
                            children: v ? "Stopping…" : "Stop the game now",
                          }),
                          r.jsx("span", {
                            className: "text-xs text-neutral-500",
                            children:
                              "Force quits it. What was already sent is already gone.",
                          }),
                        ],
                      }),
                  ],
                }),
          ],
        }),
      r.jsxs("details", {
        className: "group mt-5 border-t border-neutral-900 pt-3",
        children: [
          r.jsx("summary", {
            className:
              "cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-400",
            children: "What ModGuard is watching",
          }),
          (a.watchedFolders ?? []).length > 0
            ? r.jsx("ul", {
                className: "mt-3 space-y-1",
                children: (a.watchedFolders ?? []).map((z) =>
                  r.jsxs(
                    "li",
                    {
                      className: "text-[13px] text-neutral-400",
                      children: [
                        r.jsx("span", {
                          className: "text-neutral-300",
                          children: cx[z.zone] ?? z.zone,
                        }),
                        " ",
                        r.jsx("span", {
                          className:
                            "selectable break-all font-mono text-[11px] text-neutral-600",
                          children: z.dir,
                        }),
                        !z.raises &&
                          r.jsx("span", {
                            className: "ml-1 text-[11px] text-neutral-600",
                            children:
                              "— remembered for a couple of minutes, never reported on its own",
                          }),
                      ],
                    },
                    `${z.zone}:${z.dir}`,
                  ),
                ),
              })
            : r.jsx("p", {
                className: "mt-3 text-[13px] text-neutral-500",
                children:
                  "No folders are being watched. ModGuard opens them when a game starts and closes them all when it stops.",
              }),
          r.jsxs("p", {
            className: "mt-3 text-xs leading-relaxed text-neutral-600",
            children: [
              "ModGuard reads the ",
              r.jsx("em", { children: "names" }),
              " of files in these folders and when they changed. It never opens one, and nothing about them ever leaves",
              " ",
              Ft(),
              ".",
            ],
          }),
          l !== void 0 &&
            r.jsxs("div", {
              className: "mt-4 border-t border-neutral-900 pt-3",
              children: [
                r.jsxs("div", {
                  className:
                    "flex flex-wrap items-baseline justify-between gap-2",
                  children: [
                    r.jsxs("span", {
                      className: "text-sm text-neutral-300",
                      children: [
                        "Also watch the files your ",
                        xl(),
                        " runs by itself",
                      ],
                    }),
                    r.jsxs("button", {
                      type: "button",
                      role: "switch",
                      "aria-checked": i,
                      "aria-label": `Watch the files your ${xl()} runs by itself`,
                      onClick: l,
                      className: [
                        "inline-flex cursor-pointer items-center gap-2 rounded-none border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-[background-color,border-color,color,transform] duration-100 active:translate-y-px",
                        i
                          ? "border-neutral-400 text-neutral-200"
                          : "border-neutral-700 text-neutral-500 hover:border-neutral-500 hover:text-neutral-300",
                      ].join(" "),
                      children: [
                        r.jsx("span", {
                          "aria-hidden": "true",
                          className: [
                            "h-2 w-2",
                            i ? "bg-neutral-300" : "border border-neutral-600",
                          ].join(" "),
                        }),
                        i ? "On" : "Off",
                      ],
                    }),
                  ],
                }),
                r.jsxs("p", {
                  className: "mt-2 text-xs leading-relaxed text-neutral-600",
                  children: [
                    "A mod that steals your login costs you tonight. One that adds itself to the list of programs your ",
                    xl(),
                    " starts on its own is still there next week. Turned on, ModGuard notices when something is added to that list, or to the files Terminal runs, ",
                    r.jsx("em", { children: "while you are playing" }),
                    " — which is not when people install software. These are your files, not Minecraft's: ModGuard reads only whether they changed, never what is inside them, and it never touches one. It is off by default because installing or updating an app writes to these folders too, and being pulled out of a game to be told Chrome updated itself is not worth it.",
                  ],
                }),
              ],
            }),
        ],
      }),
      m.length > 0 &&
        r.jsxs("details", {
          className: "group mt-5 border-t border-neutral-900 pt-3",
          children: [
            r.jsxs("summary", {
              className:
                "cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-400",
              children: ["Earlier alerts (", m.length, ")"],
            }),
            r.jsx("ul", {
              className: "mt-3 divide-y divide-neutral-900",
              children: m.map((z) => {
                const q = Cl(z.threats)[0] ?? null,
                  ue = z.doneSteps.length;
                return r.jsx(
                  "li",
                  {
                    className: "py-2",
                    children: r.jsxs("button", {
                      type: "button",
                      onClick: () => (E == null ? void 0 : E(z.id)),
                      className: "flex w-full items-baseline gap-3 text-left",
                      children: [
                        r.jsx("span", {
                          className:
                            "font-mono text-[11px] tabular-nums text-neutral-600",
                          children: mx(z.at),
                        }),
                        r.jsx("span", {
                          className:
                            "min-w-0 flex-1 truncate text-[13px] text-neutral-300",
                          children:
                            (q == null ? void 0 : q.headline) ?? "Live threat",
                        }),
                        r.jsx("span", {
                          className:
                            "font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600",
                          children: z.acknowledged
                            ? `${ue}/${z.plan.length} done`
                            : "not acknowledged",
                        }),
                      ],
                    }),
                  },
                  z.id,
                );
              }),
            }),
          ],
        }),
    ],
  });
}
function gx(a) {
  return (
    a
      .split(/[/\\]/)
      .filter((l) => l !== "")
      .slice(-2)
      .join("/") || a
  );
}
function zc({ finding: a, children: i }) {
  return r.jsxs("li", {
    className: "border-l-2 border-neutral-300 pl-3",
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
        children: [
          r.jsx("span", {
            className: "text-sm text-neutral-100",
            children: a.headline,
          }),
          r.jsx("span", {
            className: "font-mono text-[11px] text-neutral-500",
            children: gx(a.folder),
          }),
        ],
      }),
      r.jsx("p", {
        className: "mt-1 text-[13px] leading-relaxed text-neutral-400",
        children: a.detail,
      }),
      a.undo !== null &&
        r.jsx("p", {
          className: "mt-1 text-[13px] leading-relaxed text-neutral-500",
          children: a.undo,
        }),
      r.jsx("div", {
        className: "mt-2 flex flex-wrap items-center gap-3",
        children: i,
      }),
    ],
  });
}
function vx({
  state: a,
  busy: i = !1,
  onToggle: l,
  onLook: c,
  onPutBack: u,
  onDismiss: m,
  onSwitchOff: f,
  onReveal: x,
}) {
  const v = a.lastLookAt !== null;
  return r.jsxs("section", {
    "aria-label": "Before you play",
    className: "border-t border-neutral-800 pt-6",
    children: [
      r.jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [
          r.jsx("h2", {
            className:
              "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
            children: "Before you play",
          }),
          r.jsxs("button", {
            type: "button",
            role: "switch",
            "aria-checked": a.enabled,
            "aria-label":
              "Let ModGuard switch off a mod it has caught stealing",
            disabled: i,
            onClick: l,
            className: [
              "inline-flex cursor-pointer items-center gap-2 rounded-none border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-[background-color,border-color,color,transform] duration-100 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60",
              a.enabled
                ? "border-white text-white"
                : "border-neutral-700 text-neutral-500 hover:border-neutral-500 hover:text-neutral-300",
            ].join(" "),
            children: [
              r.jsx("span", {
                "aria-hidden": "true",
                className: [
                  "h-2 w-2",
                  a.enabled ? "bg-white" : "border border-neutral-600",
                ].join(" "),
              }),
              a.enabled ? "On" : "Off",
            ],
          }),
        ],
      }),
      a.enabled
        ? r.jsxs("div", {
            className: "mt-4",
            children: [
              r.jsx("p", {
                className: "text-sm leading-relaxed text-neutral-300",
                children:
                  "On. ModGuard looks through your mods folders while the game is closed, and again whenever a mod is added to one.",
              }),
              r.jsxs("p", {
                className: "mt-2 text-xs leading-relaxed text-neutral-600",
                children: [
                  "It switches off a mod only if it has ",
                  r.jsx("em", { children: "watched" }),
                  " that exact file take something inside its own fake Minecraft, here on ",
                  Ft(),
                  ". A mod that only scored badly gets a warning and nothing else — a score is a guess, and a guess is not allowed to change your files. Switching off means adding",
                  " ",
                  r.jsx("span", {
                    className: "font-mono text-[11px]",
                    children: ".disabled",
                  }),
                  " to the end of the name, which every launcher skips. Nothing is deleted, nothing leaves the folder, and nothing is renamed while a game is running.",
                ],
              }),
            ],
          })
        : r.jsxs("div", {
            className: "mt-4",
            children: [
              r.jsx("p", {
                className: "text-sm leading-relaxed text-neutral-400",
                children: "Off. ModGuard will not change any of your files.",
              }),
              r.jsxs("p", {
                className: "mt-2 text-xs leading-relaxed text-neutral-600",
                children: [
                  "Turned on, ModGuard looks through your mods folders while the game is closed. If it finds a mod it has already ",
                  r.jsx("em", { children: "watched" }),
                  " steal something — inside its own fake Minecraft, here on ",
                  Ft(),
                  " — it switches that one mod off by adding",
                  " ",
                  r.jsx("span", {
                    className: "font-mono text-[11px]",
                    children: ".disabled",
                  }),
                  " to the end of its name. That is the suffix every Minecraft launcher already skips: nothing is deleted, nothing leaves the folder, not one byte changes, and there is a button here to put it back. A mod that only scored badly is never touched, and nothing is ever renamed while a game is running. This is the only thing ModGuard does to your files, so it is off until you say otherwise.",
                ],
              }),
            ],
          }),
      r.jsxs("div", {
        className: "mt-4 flex flex-wrap items-center gap-3",
        children: [
          r.jsx("button", {
            type: "button",
            onClick: c,
            disabled: a.looking || i,
            className: ie({ level: "strong", size: "sm" }),
            children: a.looking ? "Looking…" : "Look through my mods now",
          }),
          !a.enabled &&
            r.jsx("span", {
              className: "text-xs text-neutral-600",
              children:
                "With the switch off this only tells you what it found. Nothing is renamed.",
            }),
        ],
      }),
      v &&
        r.jsxs("dl", {
          className: "mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3",
          children: [
            r.jsx(Ge, {
              label: "Last look",
              value: Tn(a.lastLookAt ?? ""),
              mono: !0,
            }),
            r.jsx(Ge, {
              label: "Folders",
              value: String(a.foldersChecked),
              mono: !0,
            }),
            r.jsx(Ge, {
              label: "Mods read",
              value: String(a.modsChecked),
              mono: !0,
            }),
          ],
        }),
      a.gameRunning &&
        r.jsx("p", {
          className:
            "mt-4 border-l-2 border-neutral-700 pl-3 text-sm leading-relaxed text-neutral-300",
          children:
            "Minecraft is running, so nothing was switched off. ModGuard does not rename a mod out from under a game that is already playing.",
        }),
      v &&
        !a.gameRunning &&
        a.switchedOff.length === 0 &&
        a.stillOn.length === 0 &&
        r.jsxs("p", {
          className:
            "mt-4 border-l-2 border-neutral-700 pl-3 text-sm leading-relaxed text-neutral-300",
          children: [
            r.jsx("span", {
              "aria-hidden": "true",
              className: "font-mono text-xs text-neutral-500",
              children: "✓",
            }),
            " ",
            a.modsChecked === 0
              ? `No mods folders were found on ${Ft()}.`
              : `${a.modsChecked} ${a.modsChecked === 1 ? "mod" : "mods"} read. None of them is one ModGuard has caught before.`,
          ],
        }),
      a.switchedOff.length > 0 &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx("h3", {
              className:
                "mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600",
              children: "Switched off",
            }),
            r.jsx("ul", {
              className: "mt-3 space-y-4",
              children: a.switchedOff.map((E) =>
                r.jsxs(
                  zc,
                  {
                    finding: E,
                    children: [
                      r.jsx("button", {
                        type: "button",
                        onClick: () => u(E.path),
                        className: ie({ level: "standard", size: "sm" }),
                        children: "Put it back",
                      }),
                      r.jsx("button", {
                        type: "button",
                        onClick: () => x(E.path),
                        className: ie({ level: "ghost", size: "sm" }),
                        children: "Show me the file",
                      }),
                      r.jsx("button", {
                        type: "button",
                        onClick: () => m(E.path),
                        className: ie({
                          level: "ghost",
                          size: "sm",
                          extra:
                            "ml-auto font-mono text-[10px] uppercase tracking-[0.15em]",
                        }),
                        children: "Got it",
                      }),
                    ],
                  },
                  E.path,
                ),
              ),
            }),
            r.jsx("p", {
              className: "mt-3 text-xs leading-relaxed text-neutral-600",
              children:
                "Put it back renames the file to what it was and tells ModGuard to leave that mod alone from then on: it will not be switched off again, and this panel will stop mentioning it — including what it was caught doing. Checking the file again, and the guard that watches your running game, are not affected.",
            }),
          ],
        }),
      a.stillOn.length > 0 &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx("h3", {
              className:
                "mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600",
              children: "Still switched on",
            }),
            r.jsx("ul", {
              className: "mt-3 space-y-4",
              children: a.stillOn.map((E) =>
                r.jsxs(
                  zc,
                  {
                    finding: E,
                    children: [
                      !a.gameRunning &&
                        r.jsx("button", {
                          type: "button",
                          onClick: () => f(E.path),
                          className: ie({ level: "strong", size: "sm" }),
                          children: "Switch it off",
                        }),
                      r.jsx("button", {
                        type: "button",
                        onClick: () => x(E.path),
                        className: ie({ level: "ghost", size: "sm" }),
                        children: "Show me the file",
                      }),
                      r.jsx("button", {
                        type: "button",
                        onClick: () => m(E.path),
                        className: ie({
                          level: "ghost",
                          size: "sm",
                          extra:
                            "ml-auto font-mono text-[10px] uppercase tracking-[0.15em]",
                        }),
                        children: "Got it",
                      }),
                    ],
                  },
                  E.path,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function xx(a) {
  return r.jsxs("div", {
    className: "space-y-3 p-4",
    children: [
      r.jsx(bl, {
        label: "Downloads watch",
        children: r.jsx(ix, {
          state: a.downloads,
          busy: a.downloadsBusy,
          onToggle: a.onToggleDownloads,
          onDismiss: a.onDismissDownloadNotice,
          onOpenReport: a.onOpenReport,
          onReveal: a.onReveal,
        }),
      }),
      r.jsx(bl, {
        label: "Before you play",
        children: r.jsx(vx, {
          state: a.prelaunch,
          busy: a.prelaunchBusy,
          onToggle: a.onTogglePrelaunch,
          onLook: a.onPrelaunchLook,
          onPutBack: a.onPrelaunchPutBack,
          onDismiss: a.onPrelaunchDismiss,
          onSwitchOff: a.onPrelaunchSwitchOff,
          onReveal: a.onReveal,
        }),
      }),
      r.jsx(bl, {
        label: "Live guard",
        children: r.jsx(px, {
          status: a.guard,
          watchPersistence: a.watchPersistence,
          onTogglePersistence: a.onTogglePersistence,
          threats: a.threats,
          destinations: a.destinations,
          history: a.history,
          busy: a.guardBusy,
          stopping: a.stopping,
          onToggleArmed: a.onToggleGuard,
          onStopGame: a.onStopGame,
          onOpenIncident: a.onOpenIncident,
        }),
      }),
    ],
  });
}
function yx(a) {
  if (!a.available)
    return "Switched off for this copy of ModGuard (MODGUARD_LIVE_FEED=off). No connection is made.";
  if (!a.enabled)
    return "Off. ModGuard holds no connection and receives nothing.";
  switch (a.lastError) {
    case "offline":
      return "This computer is offline, so ModGuard is not trying. Checking your mods is unaffected: that never needed the internet.";
    case "unavailable":
      return "Nothing is answering at that address, so ModGuard has stopped asking for now. Checking your mods is unaffected.";
    case "timeout":
    case "refused":
    case "http":
      return "The connection did not get through. ModGuard will try again by itself, and checking your mods is unaffected.";
    default:
      return "On. ModGuard is receiving checks other people chose to share.";
  }
}
function Hc(a) {
  if (!a.supported) return null;
  if (!a.auto)
    return "Off. ModGuard will not ask about new versions, and makes no request to do so.";
  switch (a.status) {
    case "checking":
      return "Asking whether there is a newer version…";
    case "downloading":
      return "A newer version is downloading. Nothing will restart on its own.";
    case "ready":
      return a.ready === null
        ? "A newer version is ready."
        : `ModGuard ${a.ready} is downloaded and waiting for you to restart.`;
    case "failed":
      return "The last check did not get through. ModGuard carries on exactly as before; it will try again later.";
    default:
      return a.lastCheckedAt === null
        ? "On. ModGuard has not asked yet."
        : "On. This is the newest version.";
  }
}
function wx({
  sharing: a,
  onToggleSharing: i,
  onToggleProvenance: l,
  updates: c = null,
  onToggleAutoUpdate: u,
  onCheckForUpdate: m,
  liveFeed: f,
}) {
  return r.jsxs("div", {
    className: "space-y-4 p-5",
    children: [
      r.jsxs("p", {
        className: "text-sm leading-relaxed text-neutral-400",
        children: [
          "Mods are checked on ",
          Ft(),
          ", and no file ever leaves it. What can leave is listed below, switch by switch, each with its own default written on it — ",
          r.jsx("span", {
            className: "text-neutral-300",
            children: "Check authenticity",
          }),
          " ",
          "starts on.",
        ],
      }),
      r.jsxs("button", {
        type: "button",
        onClick: i,
        "aria-pressed": (a == null ? void 0 : a.shareWithCommunity) ?? !1,
        className:
          "mg-surface flex w-full cursor-pointer items-start justify-between gap-4 border border-neutral-800 px-4 py-3 text-left transition-colors hover:border-neutral-600",
        children: [
          r.jsxs("span", {
            className: "min-w-0",
            children: [
              r.jsx("span", {
                className: "block text-sm text-neutral-100",
                children: "Warn other players",
              }),
              r.jsx("span", {
                className:
                  "mt-0.5 block text-[13px] leading-relaxed text-neutral-500",
                children:
                  "Share an anonymous fingerprint and a summary when something is caught, so others are warned. Never anything about you or your files. Off by default.",
              }),
            ],
          }),
          r.jsx("span", {
            className:
              "shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400",
            children:
              ((a == null ? void 0 : a.shareWithCommunity) ?? !1)
                ? "On"
                : "Off",
          }),
        ],
      }),
      r.jsxs("button", {
        type: "button",
        onClick: l,
        "aria-pressed": (a == null ? void 0 : a.checkProvenance) ?? !1,
        className:
          "mg-surface flex w-full cursor-pointer items-start justify-between gap-4 border border-neutral-800 px-4 py-3 text-left transition-colors hover:border-neutral-600",
        children: [
          r.jsxs("span", {
            className: "min-w-0",
            children: [
              r.jsx("span", {
                className: "block text-sm text-neutral-100",
                children: "Check authenticity",
              }),
              r.jsxs("span", {
                className:
                  "mt-0.5 block text-[13px] leading-relaxed text-neutral-500",
                children: [
                  "Ask a public mod site whether a mod is the genuine release its authors published — a hash for an answer, nothing about you. Keeps famous mods from being flagged for what their real release also does, and it is how a mod that is not the file it says it is gets caught.",
                  " ",
                  r.jsx("span", {
                    className: "text-neutral-400",
                    children:
                      "On by default, and separate from the switch above.",
                  }),
                ],
              }),
            ],
          }),
          r.jsx("span", {
            className:
              "shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400",
            children:
              ((a == null ? void 0 : a.checkProvenance) ?? !1) ? "On" : "Off",
          }),
        ],
      }),
      c !== null &&
        r.jsxs("div", {
          className: "mg-surface border border-neutral-800 px-4 py-3",
          children: [
            c.supported && u !== void 0
              ? r.jsxs("button", {
                  type: "button",
                  onClick: u,
                  "aria-pressed": c.auto,
                  className:
                    "flex w-full cursor-pointer items-start justify-between gap-4 text-left",
                  children: [
                    r.jsxs("span", {
                      className: "min-w-0",
                      children: [
                        r.jsx("span", {
                          className: "block text-sm text-neutral-100",
                          children: "Update itself",
                        }),
                        r.jsx("span", {
                          className:
                            "mt-0.5 block text-[13px] leading-relaxed text-neutral-500",
                          children:
                            "Ask updates.modguardian.com whether a newer ModGuard exists, and download it quietly if so. Nothing installs without you pressing Restart. That host would see what any web request shows — an address, a time, and which version asked. It is never told your mods, your fingerprints, or anything you have checked.",
                        }),
                      ],
                    }),
                    r.jsx("span", {
                      className:
                        "shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400",
                      children: c.auto ? "On" : "Off",
                    }),
                  ],
                })
              : r.jsxs("div", {
                  children: [
                    r.jsx("span", {
                      className: "block text-sm text-neutral-100",
                      children: "Updating",
                    }),
                    r.jsx("span", {
                      className:
                        "mt-0.5 block text-[13px] leading-relaxed text-neutral-500",
                      children:
                        c.unsupportedReason ??
                        "This build of ModGuard does not update itself.",
                    }),
                  ],
                }),
            Hc(c) !== null &&
              r.jsx("p", {
                className:
                  "mt-3 border-t border-neutral-900 pt-3 text-[13px] leading-relaxed text-neutral-400",
                children: Hc(c),
              }),
            r.jsxs("p", {
              className: "mt-1 font-mono text-[11px] text-neutral-600",
              children: ["running ", c.current],
            }),
            c.supported &&
              c.auto &&
              m !== void 0 &&
              r.jsx("button", {
                type: "button",
                onClick: m,
                disabled: c.status === "checking" || c.status === "downloading",
                className: `mt-3 ${ie({ level: "quiet", size: "sm" })}`,
                children: c.status === "checking" ? "Checking…" : "Check now",
              }),
            r.jsx("p", {
              className: "mt-3 text-[12px] leading-relaxed text-neutral-600",
              children:
                "ModGuard does not download release notes. Text fetched from a server has no place in the window of a tool that is about to install code, so the only version numbers said above are ones this computer already knows.",
            }),
          ],
        }),
      f !== void 0 &&
        r.jsxs("div", {
          className: "mg-surface border border-neutral-800 px-4 py-3",
          children: [
            f.available
              ? r.jsxs("button", {
                  type: "button",
                  onClick: f.onToggle,
                  disabled: f.busy,
                  "aria-pressed": f.enabled,
                  className:
                    "flex w-full cursor-pointer items-start justify-between gap-4 text-left disabled:cursor-not-allowed",
                  children: [
                    r.jsxs("span", {
                      className: "min-w-0",
                      children: [
                        r.jsx("span", {
                          className: "block text-sm text-neutral-100",
                          children: "Live checks from other players",
                        }),
                        r.jsx("span", {
                          className:
                            "mt-0.5 block text-[13px] leading-relaxed text-neutral-500",
                          children:
                            "Receive checks other people chose to share, as they happen. ModGuard holds one connection to modguardian.com while it is open and sends nothing on it — no fingerprint, no file name, no identifier, and nothing about anything you have checked. That host would see what any connection shows: an address, and that a ModGuard was connected. Off means no connection at all.",
                        }),
                      ],
                    }),
                    r.jsx("span", {
                      className:
                        "shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400",
                      children: f.enabled ? "On" : "Off",
                    }),
                  ],
                })
              : r.jsxs("div", {
                  children: [
                    r.jsx("span", {
                      className: "block text-sm text-neutral-100",
                      children: "Live checks",
                    }),
                    r.jsx("span", {
                      className:
                        "mt-0.5 block text-[13px] leading-relaxed text-neutral-500",
                      children:
                        "This copy of ModGuard was built with the live stream switched off, so there is no connection to make.",
                    }),
                  ],
                }),
            r.jsx("p", {
              className:
                "mt-3 border-t border-neutral-900 pt-3 text-[13px] leading-relaxed text-neutral-400",
              children: yx(f),
            }),
            r.jsxs("p", {
              className: "mt-3 text-[12px] leading-relaxed text-neutral-600",
              children: [
                "Checking a mod happens entirely on ",
                Ft(),
                " whether this is on or off, and it never waits for this connection.",
              ],
            }),
          ],
        }),
    ],
  });
}
const Bc = [
    {
      name: "YetAnotherConfigLib 3.9.6",
      verdict: "be-careful / 34",
      rule: "Runs other programs",
      why: "A disk-space check that has been dead code since Java 6. Its Windows branch is CMD.EXE, and cmd is a shell. That makes an unreadable path not just an unknown argument but an unknown command.",
      hash: "4dcc4c42733a",
    },
    {
      name: "CraftPresence 2.7.1",
      verdict: "be-careful / 34",
      rule: "Runs other programs",
      why: "Registers Discord's link handler with xdg-mime. The program is read in full and is not a shell, but an argument ends in .desktop. That same test is what keeps a real `xdg-open /tmp/setup.sh` at the top rung.",
      hash: "f4bd1e4d1368",
    },
    {
      name: "Distant Horizons 3.2.0-b",
      verdict: "be-careful / 34",
      rule: "Runs other programs",
      why: "A shell pipeline inside a relocated SQLite driver, working out which ARM chip you have. It is correctly at the top rung and the mod is completely legitimate. Nothing short of reading the shell line itself moves it.",
      hash: "fb7a60fa0677",
    },
    {
      name: "Cobblemon 1.7.3",
      verdict: "be-careful / 34",
      rule: "Runs other programs",
      why: "Ships MongoDB's driver renamed into its own package, so ModGuard cannot tell it is somebody else's library and reads it as the author's own code.",
      hash: "962d75df4fb6",
    },
    {
      name: "Kotlin for Forge 6.0.0",
      verdict: "be-careful / 54",
      rule: "Packaging unverified",
      why: "Its description file lives inside one of the eleven jars it bundles, so ModGuard cannot verify the packaging and the Kotlin standard library's ordinary behaviour then counts at full weight. Letting a nested file stand in for a missing top-level one would hand a wrapper jar the same discount, which is exactly the shape a dropper uses.",
      hash: "96f65f62011b",
    },
  ],
  bx = [
    "Anything happening inside the Java machine. ModGuard watches from outside it, always.",
    "What is inside a connection. It reads the address and the port, never a single byte of what was sent.",
    "Files being read. It sees a file change; a file being opened and copied leaves no trace it can see.",
    "Who changed a file. The system tells it that a folder changed, not which program did it.",
    "Anything that happens between two checks. It looks about every two seconds; a login can be sent in a fraction of one.",
    "The real name behind an address hidden by a service like Cloudflare.",
    "Anything more than one folder deep, and only in folders it has named to you.",
    "Whether a mod is malicious. It can only say what the file is able to do and what it watched it try.",
    "Your Microsoft account. It cannot sign you in, sign you out, or change a single setting on it.",
    "Whether a page you open is really Microsoft's. That is why links open in your own browser and never inside this window.",
    "On Windows: the live guard does not run at all, before-you-play does nothing, and provenance says less. That is not a slow rollout, it is not written yet.",
    "Anything after ModGuard is closed. It is a program on your computer, not a service watching over you.",
  ],
  Jn = {
    file: "ahsniperv2-fabric.1.21.11.jar",
    sha256: "91f6c68aee00d44b776e505b2f86fb69922f9f24c4b92f347e5caa49021955b8",
    found: "in ~/Downloads on this machine, 26 July 2026",
    claims: "Litematica 0.25.2",
    strangerPackage: "dev.majanito",
    realPackage: "fi.dy.masa.litematica",
    proven:
      "What is proven is not that it steals logins. It is that it downloads code that is not in the file you checked, and runs it. The sandbox watched it do that, and it took none of the decoy logins ModGuard planted.",
  },
  El = {
    what: "Fractureiser",
    when: "June 2023",
    detail:
      "Compromised CurseForge and Bukkit accounts pushed malware-laced updates into real mods and modpacks. One of them had over 4.6 million downloads, and several of the compromised accounts had two-factor authentication turned on. Nobody who installed those updates did anything wrong.",
  };
function Sx() {
  return [
    ...(zr ? [] : ["signed and notarized by Apple"]),
    "nothing installed alongside it (two small libraries are compiled in)",
    "Apache-2.0",
  ];
}
const Ex =
    "A percentage over ModGuard's own test files would be self-agreement, not accuracy. The 614 above are real published mods. That is why that count is the one worth publishing, and why counts on real files are always given as counts and never as a rate.",
  Nx = tt.warnedBefore - tt.warnedAfter;
function kx({ onOpenHomepage: a, appInfo: i }) {
  const [l, c] = g.useState(null);
  return (
    g.useEffect(() => {
      if (i === void 0) return;
      let u = !1;
      return (
        i()
          .then((m) => {
            u || c(m.version);
          })
          .catch(() => {}),
        () => {
          u = !0;
        }
      );
    }, [i]),
    r.jsxs("div", {
      className: "space-y-8 p-5",
      children: [
        r.jsxs("div", {
          children: [
            r.jsx("h2", {
              className: "font-display text-lg text-neutral-100",
              children: "Why you can trust this",
            }),
            r.jsx("p", {
              className: "mt-1 text-sm leading-relaxed text-neutral-400",
              children:
                "A tool that tells you what is dangerous is only worth anything if you know how often it is wrong. Here is how often ModGuard is wrong, measured on real published mods, including the mistakes still in it.",
            }),
          ],
        }),
        r.jsxs("section", {
          "aria-label": "How often ModGuard is wrong",
          className: "border-t border-neutral-800 pt-5",
          children: [
            r.jsx("h3", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
              children: "How often it is wrong",
            }),
            r.jsxs("p", {
              className: "mt-3 text-base leading-relaxed text-neutral-100",
              children: [
                r.jsxs("span", {
                  className: "font-semibold text-white",
                  children: [
                    tt.warnedAfter,
                    " of ",
                    tt.mods,
                    " published mods",
                  ],
                }),
                " ",
                "still get a warning from ModGuard.",
              ],
            }),
            r.jsxs("p", {
              className: "mt-2 text-sm leading-relaxed text-neutral-400",
              children: [
                "That sweep was ",
                tt.mods,
                " real mods downloaded from Modrinth in",
                " ",
                tt.when,
                ", hash-checked against what their authors published, across every category and all four mod loaders. It started at ",
                tt.warnedBefore,
                " warned. On the last full pass through them, ",
                tt.rootCausedAsOurs,
                " of those",
                " ",
                tt.warnedBefore,
                " turned out to be ModGuard’s mistake rather than the mod’s — the one exception was a mod ModGuard is right about. Fixing them moved ",
                tt.improved,
                " mods to a better answer, and",
                " ",
                r.jsx("span", { className: "text-neutral-200", children: Nx }),
                " of those stopped warning at all. ",
                r.jsx("span", {
                  className: "text-neutral-200",
                  children: tt.worse,
                }),
                " got worse.",
              ],
            }),
            r.jsx("p", {
              className:
                "mt-3 border-l-2 border-neutral-800 pl-3 text-[13px] leading-relaxed text-neutral-500",
              children: Ex,
            }),
            r.jsxs("p", {
              className: "mt-3 text-[13px] leading-relaxed text-neutral-500",
              children: [
                "All ",
                tt.mods,
                " results ship with ModGuard, in",
                " ",
                r.jsx("span", {
                  className: "font-mono text-[12px] text-neutral-400",
                  children: "packages/bench/sweep/sweep-2026-08-07.json",
                }),
                " ",
                "— every mod, its verdict and its score, including the",
                " ",
                tt.warnedAfter,
                " still warned. A number you cannot check is a number you are being asked to take on faith.",
              ],
            }),
          ],
        }),
        r.jsxs("section", {
          "aria-label": "The gate",
          className: "border-t border-neutral-800 pt-5",
          children: [
            r.jsx("h3", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
              children: "What stops it getting worse",
            }),
            r.jsxs("p", {
              className: "mt-3 text-sm leading-relaxed text-neutral-400",
              children: [
                gl.specimens,
                " test files, ",
                gl.knownGood,
                " of which a person has read and declared harmless. ",
                r.jsx("span", {
                  className: "text-neutral-200",
                  children: "One",
                }),
                " false alarm on those ",
                gl.knownGood,
                " fails the build, and there is no way to mark a false alarm as a known exception. Real malware is never downloaded and never stored in the project — those specimens stay on the machine they were found on, and two separate checks enforce it.",
              ],
            }),
          ],
        }),
        r.jsxs("section", {
          "aria-label": "Mods ModGuard still gets wrong",
          className: "border-t border-neutral-800 pt-5",
          children: [
            r.jsx("h3", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
              children: "Mods it still gets wrong, by name",
            }),
            r.jsxs("p", {
              className: "mt-2 text-sm leading-relaxed text-neutral-400",
              children: [
                "If one of these is flagged on your computer, ModGuard is wrong and the mod is fine. They are listed here rather than quietly excused, because a list of known mistakes somebody can check is the only kind of accuracy claim worth anything. These are the ",
                Bc.length,
                " of the ",
                tt.warnedAfter,
                " that have been read line by line; the rest have not been worked through yet, so this list is the start of them and not the whole.",
              ],
            }),
            r.jsx("ul", {
              className:
                "mt-4 divide-y divide-neutral-900 border-t border-neutral-900",
              children: Bc.map((u) =>
                r.jsxs(
                  "li",
                  {
                    className: "py-3",
                    children: [
                      r.jsxs("div", {
                        className:
                          "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                        children: [
                          r.jsx("span", {
                            className: "text-[15px] text-neutral-100",
                            children: u.name,
                          }),
                          r.jsx("span", {
                            className:
                              "border border-neutral-800 px-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500",
                            children: u.verdict,
                          }),
                          r.jsx("span", {
                            className: "font-mono text-[11px] text-neutral-600",
                            children: u.rule,
                          }),
                        ],
                      }),
                      r.jsx("p", {
                        className:
                          "mt-1 text-[13px] leading-relaxed text-neutral-400",
                        children: u.why,
                      }),
                      r.jsxs("p", {
                        className:
                          "selectable mt-1 break-all font-mono text-[11px] text-neutral-700",
                        children: ["sha256 ", u.hash, "…"],
                      }),
                    ],
                  },
                  u.hash,
                ),
              ),
            }),
          ],
        }),
        r.jsxs("section", {
          "aria-label": "What ModGuard cannot see",
          className: "border-t border-neutral-800 pt-5",
          children: [
            r.jsx("h3", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
              children: "What ModGuard cannot see",
            }),
            r.jsx("p", {
              className: "mt-2 text-sm leading-relaxed text-neutral-400",
              children:
                "Everything below is a real limit, not a feature waiting to be built. A tool you trust more than it deserves is more dangerous than no tool.",
            }),
            r.jsx("ul", {
              className: "mt-3 space-y-2",
              children: bx.map((u) =>
                r.jsxs(
                  "li",
                  {
                    className:
                      "flex gap-2 text-[13px] leading-relaxed text-neutral-400",
                    children: [
                      r.jsx("span", {
                        "aria-hidden": "true",
                        className: "shrink-0 font-mono text-neutral-700",
                        children: "✕",
                      }),
                      r.jsx("span", { children: u }),
                    ],
                  },
                  u,
                ),
              ),
            }),
          ],
        }),
        r.jsxs("section", {
          "aria-label": "Why this exists",
          className: "border-t border-neutral-800 pt-5",
          children: [
            r.jsx("h3", {
              className:
                "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500",
              children: "Why this exists",
            }),
            r.jsxs("p", {
              className: "mt-3 text-sm leading-relaxed text-neutral-300",
              children: [
                "A file called",
                " ",
                r.jsx("span", {
                  className: "selectable break-all font-mono text-neutral-100",
                  children: Jn.file,
                }),
                " ",
                "was found ",
                Jn.found,
                ". It said it was ",
                Jn.claims,
                ", and most of it was: it is a genuine build of that mod with a passenger added. Two of its three starting points belong to the real mod at",
                " ",
                r.jsx("span", {
                  className: "font-mono text-neutral-400",
                  children: Jn.realPackage,
                }),
                "; the third is",
                " ",
                r.jsx("span", {
                  className: "font-mono text-neutral-100",
                  children: Jn.strangerPackage,
                }),
                ", which is nobody’s Litematica. It took the session, then the items, then the Microsoft account.",
              ],
            }),
            r.jsx("p", {
              className: "mt-2 text-[13px] leading-relaxed text-neutral-500",
              children: Jn.proven,
            }),
            r.jsxs("p", {
              className:
                "selectable mt-2 break-all font-mono text-[11px] text-neutral-700",
              children: ["sha256 ", Jn.sha256],
            }),
            r.jsxs("p", {
              className: "mt-4 text-[13px] leading-relaxed text-neutral-400",
              children: [
                r.jsx("span", {
                  className: "text-neutral-200",
                  children: El.what,
                }),
                ",",
                " ",
                El.when,
                ": ",
                El.detail,
              ],
            }),
          ],
        }),
        r.jsxs("section", {
          "aria-label": "This build",
          className: "border-t border-neutral-800 pt-5",
          children: [
            r.jsxs("p", {
              className:
                "font-mono text-[11px] leading-relaxed text-neutral-500",
              children: [
                l === null ? "This build" : `v${l}`,
                Sx().map((u) => r.jsxs("span", { children: [" · ", u] }, u)),
              ],
            }),
            a !== void 0 &&
              r.jsx("button", {
                type: "button",
                onClick: a,
                className: `mt-3 ${ie({ level: "quiet", size: "sm" })}`,
                children: "Open modguardian.com",
              }),
          ],
        }),
      ],
    })
  );
}
function _x({ appInfo: a, onOpenHomepage: i }) {
  return r.jsx(kx, { appInfo: a, onOpenHomepage: i });
}
function Ax(a) {
  const i =
      a.flare === 0 ? "" : a.flare % 2 === 0 ? "mg-flinch-a" : "mg-flinch-b",
    l = a.alert !== null,
    c = a.showResults ? "batch" : "home";
  return r.jsxs("div", {
    className: `mg-app flex h-full flex-col ${i}`.trimEnd(),
    children: [
      !l && r.jsx(hv, { flare: a.flare, mood: a.mood }),
      r.jsx(pv, { closingAt: a.closingAt, onCancel: a.onCancelAutoClose }),
      a.alert !== null && r.jsx(Nv, { ...a.alert }),
      r.jsx(gv, {
        onHome: a.onHome,
        showBack: a.showResults,
        onOpenMore: () => a.onOpenSheet("protection"),
        moreUnread: a.totalUnread,
      }),
      !l && a.update !== void 0 && r.jsx(Av, { ...a.update }),
      r.jsx(xv, {
        sceneKey: c,
        animate: a.sceneAnimate,
        direction: a.sceneDirection,
        recessed: a.sheet !== null,
        children: a.showResults
          ? r.jsx(Vv, { ...a.result })
          : r.jsx(Ov, { ...a.home }),
      }),
      a.sheet !== null &&
        r.jsx(vv, {
          section: a.sheet,
          onSection: a.onSheetSection,
          onClose: a.onCloseSheet,
          mods: r.jsx(ox, { ...a.sections.mods }),
          protection: r.jsx(xx, { ...a.sections.protection }),
          defense: r.jsx(Qv, { ...a.sections.defense }),
          trust: r.jsx(_x, { ...a.sections.trust }),
          settings: r.jsx(wx, { ...a.sections.settings }),
        }),
    ],
  });
}
const Cx = {
  watchPersistence: !1,
  autoClose: "ask",
  quarantineAfter: !0,
  quarantineSpawned: !0,
};
function qr(a) {
  return typeof a == "object" && a !== null ? a : {};
}
function Rn(a) {
  return typeof a == "string" && a !== "" ? a : null;
}
function jx(a, i) {
  return typeof a == "boolean" ? a : i;
}
function Pr(a) {
  return typeof a == "number" && Number.isFinite(a) ? a : 0;
}
function Tx(a) {
  const i = qr(a),
    l = qr(i.opened),
    c = Rn(l.name),
    u = l.entries;
  let m = null;
  if (c !== null && Array.isArray(u)) {
    const f = [];
    for (const x of u) {
      const v = qr(x),
        E = Rn(v.path);
      E !== null && f.push({ path: E, bytes: Pr(v.bytes) });
    }
    m = {
      name: c,
      entries: f,
      totalEntries: Math.max(f.length, Pr(l.totalEntries)),
      totalBytes: Pr(l.totalBytes),
    };
  }
  return {
    beat: Pr(i.beat),
    inFlight: Pr(i.inFlight),
    name: Rn(i.name),
    idle: jx(i.idle, !1),
    phase: typeof i.phase == "number" ? i.phase : -1,
    opened: m,
  };
}
function Hr() {
  return typeof window > "u" ? {} : (window.modguard ?? {});
}
function jl(a) {
  return typeof Hr()[a] == "function";
}
function Rx() {
  return jl("copyToClipboard");
}
function Mx() {
  return jl("holdGame") && jl("releaseGame");
}
async function Ox() {
  const a = Hr();
  if (typeof a.holdGame != "function")
    return {
      ok: !1,
      error: "Holding the game is not available in this build.",
    };
  try {
    const i = qr(await a.holdGame());
    return i.ok === !1
      ? { ok: !1, error: Rn(i.error) ?? "It could not be held." }
      : { ok: !0, heldUntil: Rn(i.heldUntil) };
  } catch {
    return { ok: !1, error: "It could not be held." };
  }
}
async function Ix() {
  const a = Hr();
  if (typeof a.releaseGame != "function")
    return {
      ok: !1,
      error: "Resuming the game is not available in this build.",
    };
  try {
    const i = qr(await a.releaseGame());
    return i.ok === !1
      ? { ok: !1, error: Rn(i.error) ?? "It could not be resumed." }
      : { ok: !0, heldUntil: Rn(i.heldUntil) };
  } catch {
    return { ok: !1, error: "It could not be resumed." };
  }
}
async function Dx(a, i) {
  const l = Hr();
  if (typeof l.incidentText != "function") return null;
  try {
    return Rn(await l.incidentText(a, i));
  } catch {
    return null;
  }
}
async function Lx(a) {
  const i = Hr();
  if (typeof i.copyToClipboard != "function") return !1;
  try {
    return (await i.copyToClipboard(a)) === !0;
  } catch {
    return !1;
  }
}
const Px = 50;
function Ux(a, i) {
  const [l, c] = g.useState(null),
    [u, m] = g.useState(!0),
    [f, x] = g.useState(i),
    [v, E] = g.useState(!1),
    [y, _] = g.useState([]),
    [N, I] = g.useState(0),
    D = g.useRef([]),
    T = g.useRef([]),
    P = g.useCallback((z) => {
      const q = qg(z, D.current, Px);
      ((D.current = q), _(q), (T.current = []), I(0));
    }, []),
    $ = g.useCallback(
      (z) => {
        if ((c(z), !a.current)) {
          P(z.scans);
          return;
        }
        T.current = z.scans;
        const q = new Set(D.current.map((ue) => ue.id));
        I(z.scans.filter((ue) => !q.has(ue.id)).length);
      },
      [P, a],
    );
  (g.useEffect(() => {
    let z = !0;
    window.modguard.liveFeed().then((ue) => {
      if (z) {
        if (ue === null) {
          m(!1);
          return;
        }
        $(ue);
      }
    });
    const q = window.modguard.onLiveFeed((ue) => {
      z && $(ue);
    });
    return () => {
      ((z = !1), q());
    };
  }, [$]),
    g.useEffect(() => x(i), [i]));
  const K = g.useCallback(() => {
      P(T.current.length > 0 ? T.current : D.current);
    }, [P]),
    X = g.useCallback((z) => {
      (E(!0),
        window.modguard
          .setLiveFeed(z)
          .then((q) => {
            (q !== null && c(q),
              z || ((D.current = []), (T.current = []), _([]), I(0)));
          })
          .finally(() => E(!1)));
    }, []),
    se = g.useCallback((z) => {
      (x(z), window.modguard.setLiveFeedExpanded(z));
    }, []);
  return {
    feed: g.useMemo(
      () => ({
        status: (l == null ? void 0 : l.status) ?? "off",
        hello: (l == null ? void 0 : l.hello) ?? null,
        scans: y,
        waiting: N,
        release: K,
        lastFrameAt: (l == null ? void 0 : l.lastFrameAt) ?? null,
        lastScanAt: (l == null ? void 0 : l.lastScanAt) ?? null,
        scansLast24h: (l == null ? void 0 : l.scansLast24h) ?? 0,
        serverIsEmpty: (l == null ? void 0 : l.serverIsEmpty) ?? !1,
        protocolMismatch: (l == null ? void 0 : l.protocolMismatch) ?? !1,
        gapped: (l == null ? void 0 : l.gapped) ?? !1,
      }),
      [l, y, N, K],
    ),
    enabled: (l == null ? void 0 : l.enabled) ?? !1,
    available: u,
    expanded: f,
    busy: v,
    lastError: (l == null ? void 0 : l.lastError) ?? null,
    setEnabled: X,
    setExpanded: se,
  };
}
function qx() {
  const [a, i] = g.useState(null),
    [l, c] = g.useState(!1),
    [u, m] = g.useState(null);
  g.useEffect(() => {
    if (a === null) return;
    const E = new Date(a).getTime();
    if (Number.isNaN(E)) return;
    const y = setTimeout(() => i(null), Math.max(0, E - Date.now()) + 250);
    return () => clearTimeout(y);
  }, [a]);
  const f = g.useCallback(async () => {
      c(!0);
      try {
        const E = await Ox();
        i(E.ok ? E.heldUntil : null);
      } finally {
        c(!1);
      }
    }, []),
    x = g.useCallback(async () => {
      c(!0);
      try {
        (await Ix(), i(null));
      } finally {
        c(!1);
      }
    }, []),
    v = g.useCallback(async (E, y, _) => {
      const N = (await Dx(E, y)) ?? _;
      N !== "" && (await Lx(N)) && (m(y), setTimeout(() => m(null), 2500));
    }, []);
  return {
    heldUntil: a,
    holding: l,
    canHoldGame: Mx(),
    hold: f,
    release: x,
    canCopyText: Rx(),
    copied: u,
    copy: v,
  };
}
const Mh = "(prefers-reduced-motion: reduce)",
  Tl = new Set();
function Bl() {
  return typeof document > "u" ? null : document.documentElement;
}
function Gx() {
  return typeof window > "u" || typeof window.matchMedia != "function"
    ? !1
    : window.matchMedia(Mh).matches;
}
function zx() {
  if (typeof navigator > "u") return !1;
  const a = navigator.hardwareConcurrency,
    i = navigator.deviceMemory;
  return (
    (typeof a == "number" && a > 0 && a <= 4) ||
    (typeof i == "number" && i > 0 && i <= 4)
  );
}
function Hx() {
  return Gx() ? "reduced" : "full";
}
function Fc() {
  const a = Bl();
  a !== null &&
    ((a.dataset.motion = Hx()), zx() && (a.dataset.motionTier = "modest"));
}
function Oh() {
  const a = Bl();
  a !== null && (a.dataset.ambient = Tl.size > 0 ? "paused" : "running");
}
function qa(a, i) {
  (i ? Tl.add(a) : Tl.delete(a), Oh());
}
function Bx(a) {
  const i = Bl();
  i !== null && (i.dataset.scene = a);
}
function Fx() {
  if ((Fc(), Oh(), typeof window > "u")) return () => {};
  const a =
      typeof window.matchMedia == "function" ? window.matchMedia(Mh) : null,
    i = () => Fc();
  a == null || a.addEventListener("change", i);
  const l = () => qa("blur", !0),
    c = () => qa("blur", !1),
    u = () => qa("hidden", document.visibilityState !== "visible");
  return (
    window.addEventListener("blur", l),
    window.addEventListener("focus", c),
    document.addEventListener("visibilitychange", u),
    u(),
    typeof document.hasFocus == "function" && !document.hasFocus() && l(),
    () => {
      (a == null || a.removeEventListener("change", i),
        window.removeEventListener("blur", l),
        window.removeEventListener("focus", c),
        document.removeEventListener("visibilitychange", u));
    }
  );
}
const $c = { unsafe: 0, "be-careful": 1, "minor-notes": 2, "looks-safe": 3 },
  Wc = {
    running: !1,
    supported: !0,
    game: null,
    session: null,
    connectionsSeen: 0,
    destinations: [],
    heldUntil: null,
    closingAt: null,
    defense: Cx,
  },
  Kc = { enabled: !1, folder: "", watching: !1, notices: [], readSoFar: 0 },
  Vc = {
    enabled: !1,
    watching: !1,
    looking: !1,
    lastLookAt: null,
    foldersChecked: 0,
    modsChecked: 0,
    gameRunning: !1,
    switchedOff: [],
    stillOn: [],
  };
function Yc(a) {
  return !a.acknowledged && (a.worst === "critical" || a.stoppedGame);
}
let Qc = 0;
function Nl() {
  return ((Qc += 1), `mod-${Qc}`);
}
function Xc(a) {
  return a.split(/[/\\]/).at(-1) ?? a;
}
function $x() {
  var ma, or;
  g.useLayoutEffect(() => {
    document.documentElement.dataset.boot = "mounted";
    const C = document.getElementById("mg-boot");
    if (C === null) return;
    const H = window.setTimeout(() => C.remove(), 400);
    return () => window.clearTimeout(H);
  }, []);
  const [a, i] = g.useState(!1),
    [l, c] = g.useState(null),
    [u, m] = g.useState([]),
    [f, x] = g.useState(null),
    [v, E] = g.useState([]),
    [y, _] = g.useState(!1),
    [N, I] = g.useState(null),
    [D, T] = g.useState(null),
    [P, $] = g.useState(null),
    [K, X] = g.useState(!1),
    [se, fe] = g.useState(null),
    z = g.useRef(!1),
    q = Ux(z, (D == null ? void 0 : D.liveFeedExpanded) ?? !1),
    [ue, _e] = g.useState(null),
    [Se, Te] = g.useState(() => new Map()),
    Re = g.useRef(!1),
    [Ae, ye] = g.useState(() => {
      try {
        return sessionStorage.getItem("mg-consent-dismissed") === "1";
      } catch {
        return !1;
      }
    }),
    [ve, pe] = g.useState(!1),
    [he, k] = g.useState({}),
    [U, L] = g.useState(!1),
    [w, M] = g.useState(Wc),
    [Q, re] = g.useState([]),
    [V, O] = g.useState(null),
    [te, Y] = g.useState(!1),
    [me, Ne] = g.useState(!1),
    [ft, Ba] = g.useState(null),
    [sn, Mn] = g.useState(!1),
    st = qx(),
    [Br, ea] = g.useState(null),
    [Fr, Fa] = g.useState(() => {
      try {
        return sessionStorage.getItem("mg-checked-once") === "1";
      } catch {
        return !1;
      }
    }),
    [Be, pt] = g.useState(Kc),
    [$a, Wa] = g.useState(!1),
    [nt, Et] = g.useState(Vc),
    [$r, ta] = g.useState(!1);
  (g.useEffect(() => {
    let C = !1;
    return (
      window.modguard.modFolders().then((H) => {
        C || E(H);
      }),
      window.modguard.communitySettings().then((H) => {
        C || T(H);
      }),
      () => {
        C = !0;
      }
    );
  }, []),
    g.useEffect(() => {
      let C = !1;
      const H = window.modguard.onUpdateState((oe) => {
        C || $(oe);
      });
      return (
        window.modguard
          .updateState()
          .then((oe) => {
            C || $(oe);
          })
          .catch(() => {}),
        () => {
          ((C = !0), H());
        }
      );
    }, []));
  const [na, Wr] = g.useState(null);
  (g.useEffect(() => {
    let C = !1;
    return (
      window.modguard
        .appInfo()
        .then((H) => {
          C || Wr(H.version);
        })
        .catch(() => {}),
      () => {
        C = !0;
      }
    );
  }, []),
    g.useEffect(() => {
      let C = !1;
      return (
        window.modguard
          .guardStatus()
          .then((H) => {
            C || M(H);
          })
          .catch(() => M(Wc)),
        window.modguard
          .incidentHistory()
          .then((H) => {
            if (C) return;
            re(H);
            const oe = H.find(Yc);
            oe !== void 0 && O(oe);
          })
          .catch(() => re([])),
        () => {
          C = !0;
        }
      );
    }, []),
    g.useEffect(() => {
      let C = !1;
      window.modguard
        .downloadsWatch()
        .then((oe) => {
          C || pt(oe);
        })
        .catch(() => pt(Kc));
      const H = window.modguard.onDownloadsWatch(pt);
      return () => {
        ((C = !0), H());
      };
    }, []),
    g.useEffect(
      () =>
        window.modguard.onCheckProgress((C) => {
          const H = Tx(C);
          ea((oe) =>
            H.idle
              ? null
              : H.opened !== null
                ? {
                    entries: H.opened.entries,
                    totalEntries: H.opened.totalEntries,
                    totalBytes: H.opened.totalBytes,
                    name: H.opened.name,
                    phase: H.phase,
                    inFlight: H.inFlight,
                  }
                : oe === null
                  ? {
                      entries: [],
                      totalEntries: 0,
                      totalBytes: 0,
                      name: H.name,
                      phase: H.phase,
                      inFlight: H.inFlight,
                    }
                  : { ...oe, phase: H.phase, inFlight: H.inFlight },
          );
        }),
      [],
    ));
  const On = g.useCallback(async () => {
    Wa(!0);
    try {
      pt(await window.modguard.setDownloadsWatch(!Be.enabled));
    } finally {
      Wa(!1);
    }
  }, [Be.enabled]);
  (g.useEffect(() => {
    let C = !1;
    window.modguard
      .prelaunch()
      .then((oe) => {
        C || Et(oe);
      })
      .catch(() => Et(Vc));
    const H = window.modguard.onPrelaunch(Et);
    return () => {
      ((C = !0), H());
    };
  }, []),
    g.useEffect(() => {
      let C = !1;
      return (
        window.modguard
          .defenseSettings()
          .then((H) => {
            C || Mn(H.watchPersistence);
          })
          .catch(() => Mn(!1)),
        () => {
          C = !0;
        }
      );
    }, []));
  const Yt = g.useCallback((C) => {
      window.modguard
        .setDefenseSettings(C)
        .then((H) => (Mn(H.watchPersistence), window.modguard.guardStatus()))
        .then(M)
        .catch(() => {});
    }, []),
    gs = g.useCallback(() => {
      Yt({ watchPersistence: !sn });
    }, [Yt, sn]),
    Kr = g.useCallback(async () => {
      ta(!0);
      try {
        Et(await window.modguard.setPrelaunch(!nt.enabled));
      } finally {
        ta(!1);
      }
    }, [nt.enabled]),
    Mt = g.useCallback((C) => {
      re((H) => {
        const oe = H.findIndex((ke) => ke.id === C.id);
        if (oe === -1) return [C, ...H];
        const xe = [...H];
        return ((xe[oe] = C), xe);
      });
    }, []);
  g.useEffect(
    () =>
      window.modguard.onGuardEvent((C) => {
        if (C.kind === "status") {
          M(C.status);
          return;
        }
        if (C.kind === "threat") {
          if ((M(C.status), C.incident === null)) return;
          (Mt(C.incident), Yc(C.incident) && O(C.incident));
          return;
        }
        if (C.kind === "response") {
          if ((M(C.status), C.incident === null)) return;
          const H = C.incident;
          (Mt(H), O((oe) => ((oe == null ? void 0 : oe.id) === H.id ? H : oe)));
          return;
        }
        (Mt(C.incident),
          O((H) =>
            (H == null ? void 0 : H.id) === C.incident.id ? C.incident : H,
          ));
      }),
    [Mt],
  );
  const vs = g.useCallback(async () => {
      Y(!0);
      try {
        M(
          w.running
            ? await window.modguard.stopGuard()
            : await window.modguard.startGuard(),
        );
      } finally {
        Y(!1);
      }
    }, [w.running]),
    aa = g.useCallback(async () => {
      (Ne(!0), Ba(null));
      try {
        const C = await window.modguard.stopGame();
        (C.ok || Ba(C.error), M(await window.modguard.guardStatus()));
      } finally {
        Ne(!1);
      }
    }, []),
    Ka = g.useCallback(
      async (C) => {
        if (V === null) return;
        const H = await window.modguard.markRecoveryStep(V.id, C);
        H !== null && (O(H), Mt(H));
      },
      [V, Mt],
    ),
    Va = g.useCallback(async () => {
      if (V === null) return;
      const C = await window.modguard.acknowledgeIncident(V.id);
      (O(null), C !== null && Mt(C));
    }, [V, Mt]),
    Ya = g.useCallback(async () => {
      const C = await window.modguard.setCommunitySharing(
        !((D == null ? void 0 : D.shareWithCommunity) ?? !1),
      );
      T(C);
    }, [D]),
    Qa = g.useCallback(async () => {
      const C = await window.modguard.setCheckProvenance(
        !((D == null ? void 0 : D.checkProvenance) ?? !1),
      );
      T(C);
    }, [D]),
    ln = g.useCallback(async () => {
      const C = await window.modguard.setAutoUpdate(
        !((P == null ? void 0 : P.auto) ?? !1),
      );
      C !== null && $(C);
    }, [P]),
    dn = g.useCallback(async () => {
      const C = await window.modguard.checkForUpdate();
      C !== null && $(C);
    }, []),
    Vr = g.useCallback(async () => {
      fe(null);
      const C = await window.modguard.restartToUpdate();
      C.ok || fe(C.error ?? "ModGuard could not restart itself.");
    }, []),
    Yr = g.useCallback(
      async (C) => {
        if (C.report === null) return;
        _e(C.id);
        const H = (oe) => {
          Te((xe) => new Map(xe).set(C.id, oe));
        };
        try {
          const oe = await window.modguard.reportMalicious(
            C.report.fingerprintSha256,
            "",
            C.report.modName ?? C.name,
          );
          H(Uv(oe, D));
        } catch {
          H("failed");
        } finally {
          _e(null);
        }
      },
      [D],
    ),
    Qr = g.useCallback(() => {
      window.modguard.modFolders().then(E);
    }, []),
    ra = g.useCallback((C, H) => {
      m((oe) => oe.map((xe) => (xe.id === C ? { ...xe, ...H } : xe)));
    }, []),
    In = g.useCallback(
      async (C) => {
        if (C.length === 0 || Re.current) return;
        ((Re.current = !0),
          _(!0),
          I(null),
          x(null),
          m(C.map((xe) => xe.entry)));
        const H = [];
        for (const { entry: xe, file: ke } of C) {
          ra(xe.id, { status: "checking" });
          const Ce = ke
            ? await window.modguard.checkBytes(
                ke.name,
                new Uint8Array(await ke.arrayBuffer()),
              )
            : await window.modguard.checkPath(xe.path ?? "");
          (ra(
            xe.id,
            Ce.ok
              ? { status: "done", report: Ce.report, error: null }
              : { status: "error", report: null, error: Ce.error },
          ),
            H.push({ id: xe.id, report: Ce.ok ? Ce.report : null }));
        }
        const oe = C.length === 1 ? C[0] : void 0;
        if (oe !== void 0) x(oe.entry.id);
        else if (H.length > 0) {
          const xe = [...H].sort((ke, Ce) => {
            var hn, Lt;
            const it = ke.report ? ($c[ke.report.verdict] ?? 99) : 99,
              Dt = Ce.report ? ($c[Ce.report.verdict] ?? 99) : 99;
            return it !== Dt
              ? it - Dt
              : (((hn = Ce.report) == null ? void 0 : hn.score) ?? -1) -
                  (((Lt = ke.report) == null ? void 0 : Lt.score) ?? -1);
          })[0];
          xe !== void 0 && x(xe.id);
        }
        if (H.some((xe) => xe.report !== null)) {
          Fa(!0);
          try {
            sessionStorage.setItem("mg-checked-once", "1");
          } catch {}
        }
        (ea(null), (Re.current = !1), _(!1));
      },
      [ra],
    ),
    Nt = g.useCallback(
      async (C) => {
        if (C.length === 0) {
          I(
            `No mods were found there. ModGuard looks for ${gc(Zc)} files in a folder.`,
          );
          return;
        }
        await In(
          C.map((H) => ({
            entry: {
              id: Nl(),
              name: Xc(H),
              path: H,
              status: "queued",
              report: null,
              error: null,
            },
            file: null,
          })),
        );
      },
      [In],
    ),
    Xa = g.useCallback(
      async (C) => {
        const H = [],
          oe = [];
        for (const ke of C) {
          const Ce = window.modguard.pathForFile(ke);
          Ce ? H.push(Ce) : oe.push(ke);
        }
        const xe = H.length > 0 ? await window.modguard.expandPaths(H) : [];
        if (xe.length === 0 && oe.length === 0) {
          I(
            `No mods or schematics (${gc(eh)}) were found in what you dropped.`,
          );
          return;
        }
        await In([
          ...xe.map((ke) => ({
            entry: {
              id: Nl(),
              name: Xc(ke),
              path: ke,
              status: "queued",
              report: null,
              error: null,
            },
            file: null,
          })),
          ...oe.map((ke) => ({
            entry: {
              id: Nl(),
              name: ke.name,
              path: null,
              status: "queued",
              report: null,
              error: null,
            },
            file: ke,
          })),
        ]);
      },
      [In],
    );
  g.useEffect(() => {
    let C = 0;
    const H = (Ce) => {
        Ce.preventDefault();
      },
      oe = (Ce) => {
        (Ce.preventDefault(), (C += 1), i(!0));
      },
      xe = () => {
        ((C = Math.max(0, C - 1)), C === 0 && i(!1));
      },
      ke = (Ce) => {
        var Dt;
        (Ce.preventDefault(), (C = 0), i(!1));
        const it = Array.from(
          ((Dt = Ce.dataTransfer) == null ? void 0 : Dt.files) ?? [],
        );
        it.length > 0 && Xa(it);
      };
    return (
      window.addEventListener("dragover", H),
      window.addEventListener("dragenter", oe),
      window.addEventListener("dragleave", xe),
      window.addEventListener("drop", ke),
      () => {
        (window.removeEventListener("dragover", H),
          window.removeEventListener("dragenter", oe),
          window.removeEventListener("dragleave", xe),
          window.removeEventListener("drop", ke));
      }
    );
  }, [Xa]);
  const Qt = g.useCallback(async () => {
      const C = await window.modguard.pickFiles();
      C.length > 0 && (await Nt(await window.modguard.expandPaths(C)));
    }, [Nt]),
    Dn = g.useCallback(async () => {
      const C = await window.modguard.pickFolder();
      if (!C) return;
      const H = await window.modguard.listMods(C);
      await Nt(H.map((oe) => oe.path));
    }, [Nt]),
    Xt = g.useCallback(async () => {
      const C = await Promise.all(
        v.map((H) => window.modguard.listMods(H.path)),
      );
      await Nt(C.flat().map((H) => H.path));
    }, [v, Nt]),
    xs = g.useCallback(async () => {
      pe(!0);
      try {
        const [C, H] = await Promise.all([
          window.modguard.setDownloadsWatch(!0),
          window.modguard.setPrelaunch(!0),
        ]);
        (pt(C), Et(H));
      } finally {
        pe(!1);
      }
    }, []),
    Ln = g.useCallback(() => {
      ye(!0);
      try {
        sessionStorage.setItem("mg-consent-dismissed", "1");
      } catch {}
    }, []),
    un = g.useCallback(() => {
      Re.current || (m([]), x(null), I(null));
    }, []);
  g.useEffect(
    () =>
      window.modguard.onMenuAction((C) => {
        C === "open-files"
          ? Qt()
          : C === "open-folder"
            ? Dn()
            : C === "reset" && un();
      }),
    [Qt, Dn, un],
  );
  const Ue = u.find((C) => C.id === f) ?? null,
    Ot =
      ((ma = Ue == null ? void 0 : Ue.report) == null
        ? void 0
        : ma.fingerprintSha256) ?? null;
  g.useEffect(() => {
    if (Ot === null) return;
    let C = !1;
    return (
      window.modguard
        .purposesFor(Ot)
        .then((H) => {
          C || k((oe) => (Ot in oe ? oe : { ...oe, [Ot]: [...H] }));
        })
        .catch(() => {}),
      () => {
        C = !0;
      }
    );
  }, [Ot]);
  const ys = g.useCallback(async (C, H) => {
      (k((oe) => ({ ...oe, [C]: [...H] })), L(!0));
      try {
        const oe = await window.modguard.setPurposes(C, H);
        k((xe) => ({ ...xe, [C]: [...oe] }));
      } catch {
      } finally {
        L(!1);
      }
    }, []),
    Xr = Ot === null ? [] : (he[Ot] ?? []),
    It = (Ue == null ? void 0 : Ue.report) == null ? null : kg(Ue.report, Xr),
    gt = u.length > 0,
    cn = ((or = w.session) == null ? void 0 : or.threats) ?? [],
    Ja = V !== null && V.stoppedGame,
    Jr = V !== null && (w.game === null || w.game.pid !== V.pid),
    Za = V !== null;
  (g.useEffect(() => {
    qa("scan", y);
  }, [y]),
    g.useEffect(() => (qa("alert", Za), () => qa("alert", !1)), [Za]),
    g.useEffect(() => {
      Bx(y ? "scan" : gt ? "result" : "landing");
    }, [y, gt]));
  const [Zr, eo] = g.useState(0),
    er = g.useRef(null),
    oa =
      (It == null ? void 0 : It.verdict) === "unsafe"
        ? ((Ue == null ? void 0 : Ue.id) ?? null)
        : null;
  g.useEffect(() => {
    oa === null || er.current === oa || ((er.current = oa), eo((C) => C + 1));
  }, [oa]);
  const ws =
      It === null
        ? "idle"
        : It.verdict === "unsafe"
          ? "unsafe"
          : It.verdict === "looks-safe"
            ? "clear"
            : "idle",
    Me = w.game !== null,
    to = v.reduce((C, H) => C + H.modCount, 0),
    Pn = nt.switchedOff.length + nt.stillOn.length,
    no = Be.notices.length + Pn + cn.length,
    sa = [
      {
        id: "downloads",
        phrase: vl({
          on: Be.enabled,
          live: Be.watching,
          done: Be.readSoFar,
          found: Be.notices.length,
          work: (C) => `Watched ${C} ${C === 1 ? "download" : "downloads"}`,
          waiting: Be.watching ? "Watching downloads" : "Downloads armed",
          off: "Downloads off",
        }),
        liveness: Be.enabled ? (Be.watching ? "live" : "armed") : "off",
        unread: Be.notices.length,
      },
      {
        id: "prelaunch",
        phrase: vl({
          on: nt.enabled,
          live: nt.watching,
          done: nt.modsChecked,
          found: Pn,
          work: (C) =>
            `Checked ${C} ${C === 1 ? "mod" : "mods"} before you play`,
          waiting: nt.watching
            ? "Guarding before you play"
            : "Before-you-play armed",
          off: "Before-you-play off",
        }),
        liveness: nt.enabled ? (nt.watching ? "live" : "armed") : "off",
        unread: Pn,
      },
      {
        id: "guard",
        phrase: vl({
          on: w.running,
          live: Me,
          done: w.connectionsSeen,
          found: cn.length,
          work: (C) =>
            `Watched ${C} ${C === 1 ? "connection" : "connections"} from your game`,
          waiting: Me ? "Watching your game" : "Live guard armed",
          off: "Live guard off",
        }),
        liveness: w.running ? (Me ? "live" : "armed") : "off",
        unread: cn.length,
      },
    ],
    bs = Fr && !Be.enabled && !nt.enabled && !Ae,
    tr = Ic(
      (V == null ? void 0 : V.threats) ?? [],
      w.defense,
      (V == null ? void 0 : V.responses) ?? [],
    ),
    ia = V !== null ? tr : Ic(cn, w.defense, []),
    vt = g.useCallback((C) => {
      window.modguard
        .restoreMod(C)
        .then(() => window.modguard.incidentHistory())
        .then((H) => {
          (re(H),
            O((oe) =>
              oe === null ? null : (H.find((xe) => xe.id === oe.id) ?? oe),
            ));
        })
        .catch(() => {});
    }, []),
    Ss = g.useCallback(
      () =>
        V === null
          ? ""
          : [
              "ModGuard: what to do now, in this order.",
              "",
              ...V.plan.map(
                (H, oe) =>
                  `${oe + 1}. ${H.action}${
                    H.url === null
                      ? ""
                      : `
   ${H.url}`
                  }`,
              ),
              "",
              "ModGuard never asks for a password, a code, or a login. Every address above is a page you open yourself.",
            ].join(`
`),
      [V],
    ),
    xt = g.useCallback((C) => {
      window.modguard
        .dismissDownloadNotice(C)
        .then(pt)
        .catch(() => {});
    }, []),
    ao = g.useCallback(
      (C) => {
        (c(null), Nt([C]));
      },
      [Nt],
    ),
    Es = g.useCallback((C) => {
      window.modguard.reveal(C).catch(() => {});
    }, []),
    Ns = g.useCallback(() => {
      window.modguard
        .prelaunchLook()
        .then(Et)
        .catch(() => {});
    }, []),
    la = g.useCallback((C) => {
      window.modguard
        .prelaunchPutBack(C)
        .then(() => window.modguard.prelaunch())
        .then(Et)
        .catch(() => {});
    }, []),
    da = g.useCallback((C) => {
      window.modguard
        .dismissPrelaunchFinding(C)
        .then(Et)
        .catch(() => {});
    }, []),
    Un = g.useCallback((C) => {
      window.modguard
        .prelaunchSwitchOff(C)
        .then(() => window.modguard.prelaunch())
        .then(Et)
        .catch(() => {});
    }, []),
    ua = g.useCallback(
      (C) => {
        const H = Q.find((oe) => oe.id === C);
        H !== void 0 && O(H);
      },
      [Q],
    ),
    ks = g.useCallback(() => {
      (c(null), Xt());
    }, [Xt]),
    _s = g.useCallback(() => {
      window.modguard
        .cancelAutoClose()
        .then(M)
        .catch(() => {});
    }, []),
    nr = g.useCallback((C) => {
      window.modguard.openRecoveryLink(C).catch(() => !1);
    }, []),
    ro = g.useCallback(() => {
      window.modguard.openHomepage().catch(() => {});
    }, []),
    ar = g.useCallback(() => window.modguard.appInfo(), []),
    qn = g.useCallback(() => c("protection"), []),
    As = g.useCallback(() => c("trust"), []),
    rr = g.useCallback(() => c(null), []),
    Ee = g.useCallback((C) => x(C.id), []),
    ca = gt ? "batch" : "home",
    ha = g.useRef({ key: ca, animate: !1 });
  return (
    ha.current.key !== ca && (ha.current = { key: ca, animate: !0 }),
    r.jsx(Ax, {
      flare: Zr,
      mood: ws,
      closingAt: w.closingAt,
      onCancelAutoClose: _s,
      alert:
        V === null
          ? null
          : {
              incidentId: V.id,
              threats: V.threats,
              plan: V.plan,
              doneSteps: V.doneSteps,
              game: w.game,
              gameStopped: Ja,
              gameGone: Jr,
              stopping: me,
              stopError: ft,
              onStopGame: () => void aa(),
              onMarkStep: (C) => void Ka(C),
              onAcknowledge: () => void Va(),
              onOpenLink: nr,
              rungs: tr,
              culprits: V.culprits,
              onPutBack: vt,
              signedInAt: V.signedInAt,
              onHold:
                st.canHoldGame && !Jr && !Ja ? () => void st.hold() : void 0,
              onRelease: st.canHoldGame ? () => void st.release() : void 0,
              heldUntil: st.heldUntil,
              holding: st.holding,
              onCopyChecklist: st.canCopyText
                ? () => void st.copy(V.id, "checklist", Ss())
                : void 0,
              onCopyEvidence: st.canCopyText
                ? () => void st.copy(V.id, "evidence", "")
                : void 0,
              copied: st.copied,
            },
      update:
        P === null || K
          ? void 0
          : {
              state: P,
              onRestart: () => void Vr(),
              onDismiss: () => X(!0),
              error: se,
            },
      showResults: gt,
      totalUnread: no,
      onHome: un,
      onOpenSheet: c,
      sceneAnimate: ha.current.animate,
      sceneDirection: gt ? "forward" : "back",
      home: {
        notice: N,
        showConsent: bs,
        consentBusy: ve,
        onAcceptWatching: () => void xs(),
        onDismissConsent: Ln,
        protections: sa,
        modsInstalled: to,
        onOpenProtection: qn,
        onOpenTrust: As,
        dragging: a,
        busy: y,
        onChooseFiles: () => void Qt(),
        onChooseFolder: () => void Dn(),
        onCheckAll: v.length > 0 ? () => void Xt() : void 0,
        stream: {
          feed: q.feed,
          holdRef: z,
          available: q.available,
          enabled: q.enabled,
          busy: q.busy,
          expanded: q.expanded,
          onSetEnabled: q.setEnabled,
          onSetExpanded: q.setExpanded,
        },
      },
      result: {
        entries: u,
        selected: Ue,
        selectedId: f,
        onSelect: Ee,
        shownReport: It,
        purposes: Xr,
        purposesBusy: U,
        onPurposesChange: (C) => {
          It !== null && ys(It.fingerprintSha256, C);
        },
        busy: y,
        specimen: Br,
        onReport: () => {
          Ue !== null && Yr(Ue);
        },
        reporting: Ue !== null && ue === Ue.id,
        reported: Ue === null ? null : (Se.get(Ue.id) ?? null),
        onCopy: (C) => void window.modguard.copyToClipboard(C),
        version: na ?? void 0,
      },
      sheet: l,
      onSheetSection: c,
      onCloseSheet: rr,
      sections: {
        mods: {
          folders: v,
          modsInstalled: to,
          busy: y,
          actions: window.modguard,
          onCheckAll: ks,
          onFoldersChanged: Qr,
          onOpenReport: ao,
        },
        protection: {
          downloads: Be,
          downloadsBusy: $a,
          onToggleDownloads: () => void On(),
          onDismissDownloadNotice: xt,
          onOpenReport: ao,
          onReveal: Es,
          prelaunch: nt,
          prelaunchBusy: $r,
          onTogglePrelaunch: () => void Kr(),
          onPrelaunchLook: Ns,
          onPrelaunchPutBack: la,
          onPrelaunchDismiss: da,
          onPrelaunchSwitchOff: Un,
          guard: w,
          guardBusy: te,
          stopping: me,
          threats: cn,
          destinations: w.destinations,
          history: Q,
          watchPersistence: sn,
          onTogglePersistence: gs,
          onToggleGuard: () => void vs(),
          onStopGame: () => void aa(),
          onOpenIncident: ua,
        },
        defense: {
          rungs: ia,
          settings: w.defense,
          onChange: Yt,
          responses: (V == null ? void 0 : V.responses) ?? [],
          onPutBack: vt,
          supported: w.supported,
        },
        trust: { appInfo: ar, onOpenHomepage: ro },
        settings: {
          sharing: D,
          onToggleSharing: () => void Ya(),
          onToggleProvenance: () => void Qa(),
          updates: P,
          onToggleAutoUpdate: () => void ln(),
          onCheckForUpdate: () => void dn(),
          liveFeed: {
            enabled: q.enabled,
            available: q.available,
            busy: q.busy,
            lastError: q.lastError,
            onToggle: () => q.setEnabled(!q.enabled),
          },
        },
      },
    })
  );
}
Dv();
Fx();
cv();
const Ih = document.getElementById("root");
if (!Ih) throw new Error("Root element #root not found");
Sf.createRoot(Ih).render(
  r.jsx(g.StrictMode, { children: r.jsx(ag, { children: r.jsx($x, {}) }) }),
);
