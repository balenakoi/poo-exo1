// Exercies 1

// const person = {
//   firstfirstName:"Balen",
//   lastfirstName:"Akoi",
//   countrys : "france",
//   age : 26,cou
//   getFirstfirstName : function(){
//     return this.firstfirstName;
//   },
//   getLastfirstName : function(){
//     return this.lastfirstName;
//   },
//   getAge : function(){
//     let today = new Date();
//     return today.getFullYear() - this.age;
//   },
//   getResult : function (){
//     alert(person.getFirstfirstName() + " " + person.getLastfirstName() + " " + person.getAge());
//   }
// };
// person.getResult();



function user(fName, lName, home, age, paye) {
  const firstName = prompt("your firsname?");
  this.firstName = firstName;
  const lastName = prompt(" your lastname ?");
  this.lastName = lastName;
  const countrys = prompt("your country ?");
  const country = countrys.toUpperCase();
  this.home = ["IRAK","FRANCE", "BELGIQUE"];
  const ages = prompt("your age?");
  this.age = ages;
  const payements = prompt("Choose a payment method (visa, blue card)");
  const payement  = payements.toUpperCase();
  this.payements = ["VISA", "BLEU CARD"];
  this.getfirstName = function() {
    const calculage = 2018 - this.age;
    for (i = 0; i < this.home.length; i++) {
      if (country == this.home[i]) {
        break;
      } else {
        continue;
      }
    }
    for (e = 0; e < this.payements.length; e++) {
      if (payement == this.payements[e]) {
        break;
      } else {
        continue;
      }
    }

    if (this.home[i] == undefined || this.payements[e] == undefined || this.firstName == "" || this.lastName == "" || calculage > 2000) {
      alert("you didn't fill  the informations well")
    }else{
      alert("your name is " + this.firstName + " " + this.lastName + ", You were born in" + calculage + ", you live in " + this.home[i] + ", you can pay by " + this.payements[e]);
    }
  };
  getfirstName();
}
user();