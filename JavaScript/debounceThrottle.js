//debounce implementation

const search = (query) => {
  console.log(`Throttling message`, query);
};

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    console.log(args);
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const searchWithDebounce = debounce(search, 1000);

searchWithDebounce("har");
searchWithDebounce("hari");
searchWithDebounce("haris");
searchWithDebounce("harishh");

// function throttle(fn, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall < delay) {
//       return;
//     }

//     lastCall = now;
//     return fn(...args);
//   };
// }

// const dibThrottle = throttle(search, 2000);

// dibThrottle("har");
// dibThrottle("hari");
// dibThrottle("haris");
// dibThrottle("harishh");
// dibThrottle("harishh123");
// dibThrottle("harishh456");
// dibThrottle("harishh789");
