'use strict';

var lock = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(f) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!locks[name]) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return delay(1);

          case 3:
            _context.next = 0;
            break;

          case 5:
            locks[name] = true;
            _context.prev = 6;
            _context.next = 9;
            return f();

          case 9:
            _context.next = 13;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](6);

          case 13:
            _context.prev = 13;
            delete locks[name];return _context.finish(13);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 11, 13, 16]]);
  }));

  return function lock(_x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var locks = {};

function delay() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}

module.exports = lock;