class hero{
   constructor(name, age, type){
      this.name = name
      this.age = age
      this.type = type
   }

   ataque(){

    let attack
    switch (this.type){


      case 'mago':
        attack = 'magia';
        console.log(`o ${this.type} atacou usando ${attack}`);
        break;

      case 'guerreiro':
        attack = 'espada';
        console.log(`o ${this.type} atacou usando ${attack}`);
        break;

      case 'monge':
        attack = 'artes marciais';
        console.log(`o ${this.type} atacou usando ${attack}`);
        break;

      case 'ninja':
        attack = 'shuriken';
        console.log(`o ${this.type} atacou usando ${attack}`);
        break;

    }
   }
}

let mage = new hero('Mestre', 67, 'mago')
let warrior = new hero('Aladin', 30, 'guerreiro')
let monk = new hero('Benkei', 70, 'monge')
let ninjaa = new hero('Hattori', 23, 'ninja')

mage.ataque()
warrior.ataque()
monk.ataque()
ninjaa.ataque()