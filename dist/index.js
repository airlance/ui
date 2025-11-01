import ee from "react";
var v = { exports: {} }, p = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C;
function re() {
  if (C) return p;
  C = 1;
  var n = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function l(t, i, c) {
    var m = null;
    if (c !== void 0 && (m = "" + c), i.key !== void 0 && (m = "" + i.key), "key" in i) {
      c = {};
      for (var d in i)
        d !== "key" && (c[d] = i[d]);
    } else c = i;
    return i = c.ref, {
      $$typeof: n,
      type: t,
      key: m,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return p.Fragment = s, p.jsx = l, p.jsxs = l, p;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function te() {
  return Y || (Y = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case q:
          return "Profiler";
        case W:
          return "StrictMode";
        case G:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function l(e) {
      try {
        s(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), s(e);
      }
    }
    function t(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function o() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function F() {
      var e = n(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, o, a, R, w) {
      var u = o.ref;
      return e = {
        $$typeof: O,
        type: e,
        key: r,
        props: o,
        _owner: a
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: F
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, r, o, a, R, w) {
      var u = r.children;
      if (u !== void 0)
        if (a)
          if (Q(u)) {
            for (a = 0; a < u.length; a++)
              S(u[a]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(u);
      if (j.call(r, "key")) {
        u = n(e);
        var f = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        a = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", M[u + a] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          u,
          f,
          u
        ), M[u + a] = !0);
      }
      if (u = null, o !== void 0 && (l(o), u = "" + o), m(r) && (l(r.key), u = "" + r.key), "key" in r) {
        o = {};
        for (var y in r)
          y !== "key" && (o[y] = r[y]);
      } else o = r;
      return u && d(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        u,
        o,
        i(),
        R,
        w
      );
    }
    function S(e) {
      A(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? A(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    var E = ee, O = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), J = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), h = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Q = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var P, N = {}, $ = E.react_stack_bottom_frame.bind(
      E,
      c
    )(), D = g(t(c)), M = {};
    _.Fragment = b, _.jsx = function(e, r, o) {
      var a = 1e4 > h.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        o,
        !1,
        a ? Error("react-stack-top-frame") : $,
        a ? g(t(e)) : D
      );
    }, _.jsxs = function(e, r, o) {
      var a = 1e4 > h.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        o,
        !0,
        a ? Error("react-stack-top-frame") : $,
        a ? g(t(e)) : D
      );
    };
  })()), _;
}
var I;
function ne() {
  return I || (I = 1, process.env.NODE_ENV === "production" ? v.exports = re() : v.exports = te()), v.exports;
}
var k = ne();
const ae = (n, s) => {
  let l = null, t = null;
  return function(...i) {
    t === null ? (n.apply(this, i), t = Date.now()) : (l !== null && clearTimeout(l), l = setTimeout(
      () => {
        Date.now() - t >= s && (n.apply(this, i), t = Date.now());
      },
      s - (Date.now() - t)
    ));
  };
};
function ue(n, s) {
  let l = null;
  return function(...t) {
    l && clearTimeout(l), l = setTimeout(() => {
      n(...t);
    }, s);
  };
}
function le() {
  return (Date.now() + Math.floor(Math.random() * 1e3)).toString();
}
function se(n, s) {
  if (!n || typeof n != "string")
    return "";
  const l = n.split(" ").filter(Boolean).map((t) => t[0].toUpperCase());
  return s && s > 0 ? l.slice(0, s).join("") : l.join("");
}
function ie(n) {
  return n;
}
function ce(n) {
  const s = /* @__PURE__ */ new Date(), l = typeof n == "string" ? new Date(n) : n, t = Math.floor((s.getTime() - l.getTime()) / 1e3);
  return t < 60 ? "just now" : t < 3600 ? `${Math.floor(t / 60)} minute${Math.floor(t / 60) > 1 ? "s" : ""} ago` : t < 86400 ? `${Math.floor(t / 3600)} hour${Math.floor(t / 3600) > 1 ? "s" : ""} ago` : t < 604800 ? `${Math.floor(t / 86400)} day${Math.floor(t / 86400) > 1 ? "s" : ""} ago` : t < 2592e3 ? `${Math.floor(t / 604800)} week${Math.floor(t / 604800) > 1 ? "s" : ""} ago` : t < 31536e3 ? `${Math.floor(t / 2592e3)} month${Math.floor(t / 2592e3) > 1 ? "s" : ""} ago` : `${Math.floor(t / 31536e3)} year${Math.floor(t / 31536e3) > 1 ? "s" : ""} ago`;
}
function fe(n) {
  return new Date(n).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function me(n) {
  return new Date(n).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  });
}
function de() {
  return /* @__PURE__ */ k.jsxs("div", { className: "flex flex-col items-center gap-2 justify-center fixed inset-0 z-50 transition-opacity duration-700 ease-in-out", children: [
    /* @__PURE__ */ k.jsx(
      "img",
      {
        className: "h-[30px] max-w-none",
        src: "/media/app/mini-logo.svg",
        alt: "logo"
      }
    ),
    /* @__PURE__ */ k.jsx("div", { className: "text-muted-foreground font-medium text-sm", children: "Loading..." })
  ] });
}
export {
  de as ScreenLoader,
  ue as debounce,
  fe as formatDate,
  me as formatDateTime,
  se as getInitials,
  ae as throttle,
  ce as timeAgo,
  ie as toAbsoluteUrl,
  le as uid
};
