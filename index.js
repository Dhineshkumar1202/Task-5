class Person {
    constructor(firstName, lastName, age, gender, occupation) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    greet() {
      return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
    }
  
    introduce() {
      return `Hi, I'm ${this.getFullName()}. I'm a ${this.age} years old ${this.gender} working as a ${this.occupation}.`;
    }
  }
  

  const person1 = new Person("Dhinesh", "Kumar", 30, "male", "Fullstack Developer");
  console.log(person1.greet()); 
  console.log(person1.introduce()); 
  