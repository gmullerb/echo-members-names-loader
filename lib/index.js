//  Copyright (c) 2020 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

module.exports = function () {
  return `module.exports = new Proxy({}, {
    get: function(target, key) {
      return key !== '__esModule' && key
    }
  })`
}
