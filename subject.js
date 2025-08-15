function Subject() {
  const observers = [];

  return {
    subscribe(fn) {
      observers.push(fn);

      // handle unsubscribe
      return () => {
          // find index and remove from list
          const i = observers.indexOf(fn);
          if (i > -1) observers.splice(i, 1);
      }
    },
    // handle next
    next(value) {
      observers.forEach( fn => fn(value))
    }
  }
}

const sub = Subject();
const unsubscribe = sub.subscribe(v=> console.log('Value: ',v));
sub.next(1); 
sub.next(2); 

unsubscribe();
sub.next(3); // nothing printed
