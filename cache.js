function createCache(key, fn) {
const cache = {};

return (key, fn) => {
   if(cache[key]) {
      return cache[key]
      }
   const result = fn();
   cache[key] = result;
   return result;
}
}

function multi(x) {
   return x * x;
}
const cache = createCache();

cache('multi_5', ()=> createCache(5)); // Print 25 not from cache
cache('multi_5', ()=> createCache(5));// Print 25 from cache !!