function cachingDecoratorNew(func) {
  let cache = [];
  
  return function wrapper(...args) {
    const hash = args.join(',');
    const idx = cache.find((item) => item[hash]);
    if (idx) {
      console.log("Из кэша: " + idx[hash]);
      return "Из кэша: " + idx[hash];
    }  
      let result = func(...args);
      cache.push({[hash]: result});
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
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

function debounceDecorator2(func, ms) {
  let timeout = false;
  
  function wrapper(...args) {
    wrapper.count.push(args);
    if (timeout) return;
      func(...args);
      timeout = true;
      setTimeout(() => timeout = false, ms);
  }
  wrapper.count = [];
  return wrapper;
}
