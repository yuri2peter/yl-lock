"use strict";

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var locks = {};

function delay() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}

function lock(_x) {
  return _lock.apply(this, arguments);
}

function _lock() {
  _lock = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(f) {
    var name,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'default';

          case 1:
            if (!locks[name]) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return delay(1);

          case 4:
            _context.next = 1;
            break;

          case 6:
            locks[name] = true;
            _context.prev = 7;
            _context.next = 10;
            return f();

          case 10:
            _context.next = 14;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](7);

          case 14:
            _context.prev = 14;
            delete locks[name];
            return _context.finish(14);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[7, 12, 14, 17]]);
  }));
  return _lock.apply(this, arguments);
}

module.exports = lock;