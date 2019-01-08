# yl-lock

A simple thread lock for js.

# How to Use

```javascript
const lock = require('yl-lock');

lock(async () => {
  // some works...
}, 'your lock name')
```
