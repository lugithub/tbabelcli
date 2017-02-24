import {sum} from './module-a';

console.log(sum(1, 4));

const bob = {
  name: 'Bob',
  friends: ['Jack', 'Mike', 'Ally'],
  printFriends() {
    this.friends.forEach(f => console.log(this.name, 'knows', f));
  }
}

bob.printFriends();

bob.printFriends.apply({
  name: 'dummy',
  friends: ['Jack1', 'Mike1', 'Ally1']
});

class C {

}

C.prototype.count = 0;
var c1 = new C();
console.log(c1.count);

c1.count++; //create a separate shadowed .count property on c1

console.log(c1.count);
console.log(C.prototype.count);

const obj = {
  __proto__: {
    foo() {
      console.log('i\'m foo');
    }
  },
  toString() {
    //super.foo();
    console.log('d ' + super.toString());
  },
  ['prop_' + (() => 42)()]: 42
};
obj.foo();
obj.toString();
console.log(obj.prop_42);


var person = 'Mike';
var age = 28;

//ageExp is passed as number
function myTag(strings, personExp, ageExp) {

  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  console.log('typeof ageExp', typeof ageExp);

  return str0 + personExp + str1 + ageStr;

}

var output = myTag`that ${ person } is a ${ age }`;
console.log(output);
