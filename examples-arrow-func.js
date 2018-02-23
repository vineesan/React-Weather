var names = ['Pradeep', 'Suvarna', 'Vineeth', 'Sivaranjini']
// names.forEach(function(name) {
//   console.log(name);
// });

//Arrow Function
// names.forEach((name) => {
//   console.log(name);
// })

var person = {
  name: 'Vineeth',
  family: function() {
    // var self = this;
    // names.forEach(function(name) {
    //   console.log(self.name + ' Family members ' + name);
    // });
    //Using Arrow function
    names.forEach((name) => {
      console.log(this.name + ' Family members are ' + name);
    })
  }
};
person.family();
