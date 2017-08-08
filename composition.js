const toSlug_actual = input => encodeURIComponent(
  input.split(' ')
    .map(str => str.toLowerCase())
    .join('-')
);

const curry = fn => (...args) => fn.bind(null, ...args);

const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));

const toLowerCase = str => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));


const toSlug_args = input => encodeURIComponent(
  join('-')(
    map(toLowerCase)(
      split(' ')(
        input
      )
    )
  )
);

console.log('actual', toSlug_args('JS Cheerleader')); // 'js-cheerleader'

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const fn1 = s => s.toLowerCase();
const fn2 = s => s.split('').reverse().join('');
const fn3 = s => s + '!'

const newFunc = pipe(fn1, fn2, fn3);
const result = newFunc('Time'); // emit!

console.log(result);

const tap = curry((fn, x) => {
  fn(x);
  return x;
});

const trace = label => {
  return tap(x => console.log(`== ${ label }:  ${ x }`));
};

const toSlug = pipe(
  trace('input'),
  split(' '),
  map(toLowerCase),
  trace('after map'),
  join('-'),
  encodeURIComponent
);

console.log('pipe', toSlug('JS Cheerleader')); // 'js-cheerleader'