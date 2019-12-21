const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];

const getAge = pet => new Date().getFullYear() - pet.bornOn ;

    let petsWithAge = [];

         pets.forEach( pets =>{
            pets.age = this.getAge(pets);
            petsWithAge.push(pets);});
           
console.log(petsWithAge);

let dogs = pets.filter( pets => { return pets.type ==="dog"})


let jasper;

let jasper = pets.filter ( pets => {return pets.name=="Jasper"})
    

console.log("Jasper is " + jasper.age + " years old");
  