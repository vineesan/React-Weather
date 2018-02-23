// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
// getTempCallback('Philadelphia', function(err, temp) {
//   if(err) {
//     console.log('Error', err);
//   } else {
//     console.log('Sucess', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City Not Found');
//     },1000);
//   });
// }
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log("Sucess", temp);
// }, function(err) {
//   console.log("Promise", err);
// });

//Check a and b are number using promise
function addTwoNumber(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A and B need to ba a number');
    }
  });
}
addTwoNumber(7, 10).then(function(sum) {
  console.log('Sucess', sum);
}, function(err) {
  console.log('error', err);
});
addTwoNumber(7, "10").then(function(sum) {
  console.log('This Should be not Show up');
}, function(err) {
  console.log('This Should be appear', err);
})
