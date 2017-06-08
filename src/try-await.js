function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  console.log('await begin')
  var x = await resolveAfter2Seconds(10);
  console.log('await end')
  console.log(x); // 10
}

// async function f2() {
//   console.log('await begin')
//   var x = await 20;
//   console.log('await end')
//   console.log(x); // 10
// }
//
// async function f1() {
//   console.log('await begin')
//   var x = await Promise.reject(30);
//   console.log('await end')
//   console.log(x); // 10
// }

export { f1 };
