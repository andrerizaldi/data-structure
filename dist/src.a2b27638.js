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
})({"src/index.js":[function(require,module,exports) {
var i = 6;
var contacts = [{
  id: 1,
  fullName: "Genna Arnli",
  phoneNumber: "5278765234",
  email: "garnli0@photobucket.com",
  gender: "Female"
}, {
  id: 2,
  fullName: "Jojo Scotchford",
  phoneNumber: "7925766855",
  email: "jscotchford1@booking.com",
  gender: "Female"
}, {
  id: 3,
  fullName: "Kakalina Pietasch",
  phoneNumber: "3118199662",
  email: "kpietasch2@auda.org.au",
  gender: "Female"
}, {
  id: 4,
  fullName: "Araldo Coil",
  phoneNumber: "5887272284",
  email: "acoil3@behance.net",
  gender: "Male"
}, {
  id: 5,
  fullName: "Shadow Maffi",
  phoneNumber: "8455497996",
  email: "smaffi4@bravesites.com",
  gender: "Male"
}];
var search = document.getElementById('search');
search.addEventListener('keyup', function (e) {
  var val = e.target.value;
  view('search', val);
});
var dataUi = null;

var view = function view(gen) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (gen == null) {
    var tbody = document.getElementById("table-rows");
    tbody.innerHTML = "";
    contacts.map(function (item, index) {
      // buat table
      var row = tbody.insertRow(); // kasih atribut agar mudah delete dan edit

      row.setAttribute("id", "data_" + item.id); //isi kolom dengan data

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      cell1.innerHTML = item.id;
      cell2.innerHTML = item.fullName;
      cell3.innerHTML = item.email;
      cell4.innerHTML = item.phoneNumber;
      cell5.innerHTML = item.gender;
      cell6.innerHTML = "\n      <a href=\"#\" id=\"hapus\" data-id=".concat(item.id, "> Hapus\n      </a>\n      <a href=\"#\" id=\"edit\" data-id=\"").concat(item.id, "\"> Edit\n      </a>\n    ");
    });
  } else if (gen == "male") {
    var _tbody = document.getElementById("table-rows");

    _tbody.innerHTML = "";
    contacts.map(function (item, index) {
      if (item.gender == "Male") {
        var row = _tbody.insertRow();

        row.setAttribute("id", "data_" + item.id);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = item.id;
        cell2.innerHTML = item.fullName;
        cell3.innerHTML = item.email;
        cell4.innerHTML = item.phoneNumber;
        cell5.innerHTML = item.gender;
        cell6.innerHTML = "\n        <a href=\"#\" id=\"hapus\" data-id=".concat(item.id, "> Hapus\n        </a>\n        <a href=\"#\" id=\"edit\" data-id=\"").concat(item.id, "\"> Edit\n        </a>\n      ");
      } // end

    });
  } else if (gen == "female") {
    var _tbody2 = document.getElementById("table-rows");

    _tbody2.innerHTML = "";
    contacts.map(function (item, index) {
      if (item.gender == "Female") {
        var row = _tbody2.insertRow();

        row.setAttribute("id", "data_" + item.id);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = item.id;
        cell2.innerHTML = item.fullName;
        cell3.innerHTML = item.email;
        cell4.innerHTML = item.phoneNumber;
        cell5.innerHTML = item.gender;
        cell6.innerHTML = "\n        <a href=\"#\" id=\"hapus\" data-id=".concat(item.id, "> Hapus\n        </a>\n        <a href=\"#\" id=\"edit\" data-id=\"").concat(item.id, "\"> Edit\n        </a>\n      ");
      }
    });
  } else {
    var _tbody3 = document.getElementById("table-rows");

    _tbody3.innerHTML = "";
    contacts.map(function (item) {
      if (item.fullName.toLowerCase().indexOf(val) != -1) {
        var row = _tbody3.insertRow();

        row.setAttribute("id", "data_" + item.id); //isi kolom dengan data

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = item.id;
        cell2.innerHTML = item.fullName;
        cell3.innerHTML = item.email;
        cell4.innerHTML = item.phoneNumber;
        cell5.innerHTML = item.gender;
        cell6.innerHTML = "\n        <a href=\"#\" id=\"hapus\" data-id=".concat(item.id, "> Hapus\n        </a>\n        <a href=\"#\" id=\"edit\" data-id=\"").concat(item.id, "\"> Edit\n        </a>\n      ");
      }
    });
  }
};

function add(data) {
  var result = contacts.push(data);
  return result;
}

function emailVal(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validasi(fullName, email, phone) {
  if (fullName != "" && email != "" && phone != "") {
    if (fullName.length >= 3 && email.length >= 3 && phone.length >= 3) {
      if (emailVal(email)) {
        if (phone.match(/^[0-9]+$/)) {
          return true;
        } else {
          alert('Phone Number Harus angka');
          return false;
        }
      } else {
        alert('Email tidak Valid \n example@mail.com');
        return false;
      }
    } else {
      alert('lebih dari 3');
      return false;
    }
  } else {
    alert('Tidak Boleh kosong');
    return false;
  }
}

function remove(id) {
  var result = contacts.filter(function (item) {
    return item.id !== id;
  });
  return result;
}

function edit(data, id) {
  var result = contacts.map(function (item) {
    if (item.id == id) {
      item.fullName = data.fullName;
      item.phoneNumber = data.phoneNumber;
      item.email = data.email;
      item.gender = data.gender;
    }

    return item;
  });
  return result;
}

document.addEventListener('click', function (e) {
  function getInput() {
    var fullname = document.getElementById("fullname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var gender = document.getElementById("gender");
    var data = {
      fullName: fullname.value,
      email: email.value,
      phone: phone.value,
      gender: gender.value
    };
    return data;
  }

  function delInput() {
    fullname.value = "";
    phone.value = "";
    email.value = "";
  }

  if (e.target.id == 'hapus') {
    var id = e.target.attributes[2].nodeValue;
    var data = document.getElementById('data_' + id);
    data.innerHTML = "";
    remove(id);
    fullname.value = "";
    phone.value = "";
    email.value = "";
  }

  if (e.target.id == 'edit') {
    var _id = e.target.attributes[2].nodeValue;

    var _fullname = document.getElementById("fullname");

    var _email = document.getElementById("email");

    var _phone = document.getElementById("phone");

    var gender = document.getElementById("gender");
    var data_id = document.getElementById("id");
    var _data = [];
    contacts.filter(function (item) {
      if (item.id == _id) {
        _data = item;
      }
    });
    _fullname.value = _data.fullName;
    _email.value = _data.email;
    _phone.value = _data.phoneNumber;
    gender.value = _data.gender;
    data_id.value = _data.id;
    var ubah = document.getElementById('tambah');
    ubah.setAttribute('id', 'ubah');
  }

  if (e.target.id == 'ubah') {
    var _fullname2 = document.getElementById("fullname");

    var _email2 = document.getElementById("email");

    var _phone2 = document.getElementById("phone");

    var _gender = document.getElementById("gender");

    var _data_id = document.getElementById("id");

    var valid = validasi(_fullname2.value, _email2.value, _phone2.value);

    if (valid) {
      var data_tab = document.getElementById('data_' + _data_id.value);
      data_tab.cells[1].innerHTML = _fullname2.value;
      data_tab.cells[2].innerHTML = _email2.value;
      data_tab.cells[3].innerHTML = _phone2.value;
      data_tab.cells[4].innerHTML = _gender.value;
      var myinput = {
        fullName: _fullname2.value,
        phoneNumber: _phone2.value,
        email: _email2.value,
        gender: _gender.value
      };
      edit(myinput, _data_id.value);
      _fullname2.value = "";
      _phone2.value = "";
      _email2.value = "";

      var _ubah = document.getElementById('ubah');

      _ubah.setAttribute('id', 'tambah');

      view(null);
      return false;
    }
  }

  if (e.target.id == 'tambah') {
    var _data2 = getInput();

    var _valid = validasi(_data2.fullName, _data2.email, _data2.phone);

    if (_valid) {
      var tbody = document.getElementById("table-rows");
      var row = tbody.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      row.setAttribute('id', "data_".concat(i));
      cell1.innerHTML = i;
      cell2.innerHTML = _data2.fullName;
      cell3.innerHTML = _data2.email;
      cell4.innerHTML = _data2.phone;
      cell5.innerHTML = _data2.gender;
      cell6.innerHTML = "\n      <a href=\"#\" id=\"hapus\" data-id=\"".concat(i, "\"> Hapus\n      </a>\n      <a href=\"#\" id=\"edit\" data-id=\"").concat(i, "\"> Edit\n      </a>\n      ");
      var _myinput = {
        id: i++,
        fullName: _data2.fullName,
        phoneNumber: _data2.phone,
        email: _data2.email,
        gender: _data2.gender
      };
      add(_myinput);
      view(null);
      delInput();
    }
  }

  if (e.target.id == "gender") {
    var _data3 = e.target.attributes[3].nodeValue;

    if (_data3 == "male") {
      dataUi = 'male';
    } else if (_data3 == "female") {
      dataUi = "female";
    } else {
      dataUi = null;
    }

    view(dataUi);
    return false;
  }
});
view(dataUi);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53144" + '/');

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
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map