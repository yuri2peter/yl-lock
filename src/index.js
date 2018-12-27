const locks = {};

function delay(timeout = 0) {
  return new Promise(((resolve) => {
    setTimeout(resolve, timeout);
  }));
}

async function lock(f, name = 'default') {
  while (locks[name]) {
    await delay(1);
  }
  locks[name] = true;
  try { await f(); }
  catch (e) { }
  finally { delete locks[name]; }
}

module.exports = lock;
