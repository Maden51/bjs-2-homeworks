function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(',');
    const idx = cache.find((item) => item[hash] !== undefined);
    if (idx !== undefined) {
      console.log("Из кэша: " + idx[hash]);
      return "Из кэша: " + idx[hash];
    } else {
      let result = func(...args);
      cache.push({[hash]: result});
      if (cache.length > 5) {
        cache.shift(1);
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timeout = false;

  return function(...args) {
    if (timeout) return;
      func(...args);
      timeout = true;
      setTimeout(() => timeout = false, ms);
    };
}

function debounceDecorator2(func) {
  // Ваш код
}
