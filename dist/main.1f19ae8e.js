// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "/*\n*\u5927\u5BB6\u597D,\u6211\u662Fmilkboy\n*\u63A5\u4E0B\u6765\u7531\u6211\u4EEC\u7EC4\u6765\u4E3A\u5927\u5BB6\u6F14\u793AOauth\u534F\u8BAE\u5B9E\u73B0\u8FC7\u7A0B\n*\u662F\u4E0D\u662F\u611F\u89C9\u4E0D\u592A\u6B63\u5F0F\n*\u90A3\u6211\u5C31\u5148\u6362\u4E00\u79CD\u98CE\u683C\n*/\n\nbody{\n    background:black;\n    color:green;\n}\n#body1{\n    border:1px solid green;\n    margin:15px;\n    padding:10px 30px;\n    margin-left:2vw;\n}\n/*\n*\u5927\u5BB6\u662F\u4E0D\u89C9\u5F97\u5B57\u6709\u70B9\u5C0F\n*\u90A3\u6211\u5C31\u653E\u5927\u4E00\u70B9\n*/\n*{\n    font-size:18px;\n}\n#body1{\n    width:40vw;\n}\n/*\n*\u63A5\u4E0B\u6765\uFF0C\u6211\u8981\u7ED9\u5927\u5BB6\u6F14\u793AOauth\u534F\u8BAE\u4E86\n*\u521A\u624D\u7684\u6848\u4F8B\u5927\u5BB6\u770B\u4E86\n*\u6211\u4EEC\u7528UML\u56FE\u6765\u8868\u793A\u4E00\u4E0B\u521A\u521A\u7684\u6D41\u7A0B\n*/\n#right{\n    display:block;\n    right:90px;\n}\n/*\n*\u9996\u5148\u662F\u7528\u6237\u3001Github\u3001\u7B2C\u4E09\u65B9\u7F51\u7AD9\n*/\n#user{\n    display:block;\n    margin-top:10px;\n}\n#third{\n    display:block;\n    top:50px;\n    margin-top:10px;\n}\n#github{\n    display:block;\n    top:50px;\n    margin-top:10px;\n}\n#line_1{\n    display:block;\n}\n#line_2{\n    display:block;\n}\n#line_3{\n    display:block;\n}\n/*\n*\u7528\u6237\u60F3\u8981\u901A\u8FC7Github\u6765\u767B\u5F55\u7B2C\u4E09\u65B9\u7F51\u7AD9\n*\u9996\u5148\u7528\u6237\u70B9\u51FB\u56FE\u6807\u8BBF\u95EE\u7B2C\u4E09\u65B9\u7F51\u7AD9\n*/\n#line_4{\n    display:block;\n}\n#text_1{\n    display:block;\n}\n/*\n*\u7B2C\u4E09\u65B9\u7F51\u7AD9\u5411Github\u8BF7\u6C42\n*/\n#line_5{\n    display:block;\n}\n#text_2{\n    display:block;\n}\n#line_6{\n    display:block;\n}\n#text_3{\n    display:block;\n}\n#six{\n    top:220px;\n}\n/*\n*\u7528\u6237\u540C\u610F\u6388\u6743\n*/\n#line_7{\n    display:block;\n}\n#text_4{\n    display:block;\n}\n#seven{\n    top:290px;\n}\n/*\n*Github\u5411\u7B2C\u4E09\u65B9\u7F51\u7AD9\u8FD4\u56DE\u6388\u6743\u7801code\n*/\n#line_8{\n    display:block;\n}\n#text_5{\n    display:block;\n}\n#eight{\n    top:360px;\n}\n/*\n*\u7B2C\u4E09\u65B9\u7F51\u7AD9\u4F7F\u7528\u6388\u6743\u7801code\u7533\u8BF7\u4EE4\u724Ctoken\n*/\n#line_9{\n    display:block;\n}\n#text_6{\n    display:block;\n}\n#nine{\n    top:430px;\n}\n/*\n*Github\u8FD4\u56DE\u4EE4\u724C\u7ED9\u7B2C\u4E09\u65B9\u7F51\u7AD9\n*/\n#line_10{\n    display:block;\n}\n#text_7{\n    display:block;\n}\n#ten{\n    top:500px;\n}\n/*\n*\u7B2C\u4E09\u65B9\u7F51\u7AD9\u4F7F\u7528\u4EE4\u724Ctoken\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\n*/\n#line_11{\n    display:block;\n}\n#text_8{\n    display:block;\n}\n#eleven{\n    top:570px;\n}\n/*\n*Github\u54CD\u5E94\u7528\u6237\u4FE1\u606F\uFF0C\u5B8C\u6210\u8BA4\u8BC1\n*/\n\n#line_12{\n    display:block;\n}\n#text_9{\n    display:block;\n}\n#twelve{\n    top:640px;\n}\n\n\n#line_13{\n    display:block;\n}\n#text_10{\n    display:block;\n}\n#thirteen{\n    top:640px;\n}\n/*\n*\u597D\u4E86\uFF0C\u6F14\u793A\u7ED3\u675F\u4E86\n*/\nbody{\n    background:white;\n    color:black;\n}\n#body1{\n    border:1px solid black;\n}\n/*\n*\u8C22\u8C22\u5927\u5BB6\n*/\n\n";
console.log(string.length);
var n = -1;
var string2 = "";

var step = function step() {
  n += 1;

  if (string[n] === '\n') {
    string2 += "<br>";
  } else if (string[n] === ' ') {
    string2 += "&nbsp;";
  } else {
    string2 += string[n];
  }

  setTimeout(function () {
    console.log(n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);

    if (n < string.length) {
      html.innerHTML = string2;
      style.innerHTML = string.substring(0, n);
      console.log(html.innerHTML);
    } else {
      return;
    }

    step();
  }, 20);
};

step();
},{}],"../../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58372" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map