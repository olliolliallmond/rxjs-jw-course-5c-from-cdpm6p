/* FROM(ARRAY) OR FROM(PROMISE) OR FROM(...)--> CONVERTS OTHER TYPES INTO AN OBSERVABLE */

import { from } from 'rxjs';

/*
from(['Alice', 'Ben', 'Charlie']).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Done!')
});
*/

const somePromise = new Promise((res, rej) => {
  // res('Promise resolved!');
  rej('Promise rejected!');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: value => console.log(value),
  error: err => console.log('Error: ', err),
  complete: () => console.log('Finished!')
});
