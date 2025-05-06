//Promises
//Syntax

// let prom = new Promise(function(myresolve,myreject){
//     myresolve("Hello World!");
//     myreject("Error404!");
// })

// //Prmosise.then() take two arguments - One for the success - One for the failure/error.
// prom.then(function(data){
//     console.log(data);
// },
// function(err){
//     console.log(err);
// })

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hellowww moto!!");
  }, 6000);
});

// prom3.then((val)=>{
//     console.log(val);
// })

const prom4 = Promise.reject(45);

// prom4.then((val)=>{
//     console.log(val);
// })

// Promise.all([prom3,prom4]).then((val)=>{
//     console.log(val);
// })

//Another Example

const prom5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, ["foo", "zoo"]);
});

Promise.all([prom3, prom4, prom5])
  .then((val) => {
    console.log("promise.all", val);
  })
  .catch((err) => {
    console.log("promise.all.err", err);
  });

Promise.allSettled([prom3, prom4, prom5]).then((val) => {
  console.log("promise.any", val);
});
