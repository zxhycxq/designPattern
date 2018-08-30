class Animal{
  constructor(){
    if(new.target===Animal){
      throw new Error('Error description', 'factory');
    }
  }
  
  calls(){
    throw new Error('Error description', 'calls---');
  }
  
  eat(){
    throw new Error('Error description', 'eat');
  }
}

//mao
class Cat extends Animal{
  constructor(){
    super();
    console.log(`%c--猫-- `, 'color:blue;font-weight:bold', '猫')
  }
  
  calls(){
    console.log(`%c--瞄-- `, 'color:blue;font-weight:bold', '瞄')
  }
  eat(){
    console.log(`%c--吃鱼-- `, 'color:blue;font-weight:bold', '吃鱼')
  }

}
//狗
class Dog extends Animal{
  constructor(){
    super();
    console.log(`%c--狗-- `, 'color:blue;font-weight:bold', '狗')
  }
  
  calls(){
    console.log(`%c--汪汪汪-- `, 'color:blue;font-weight:bold', '汪汪汪')
  }
  eat(){
    console.log(`%c--骨头-- `, 'color:blue;font-weight:bold', '骨头')
  }

}
// 动物工厂
class AnimalFactory{
  constructor(){}
  // 创建动物  switch动物类型
  static CreateAnimal(animalType=AnimalType.Cat){
    switch (animalType) {
    case AnimalType.Cat:
      return new Cat();
        break;
    case AnimalType.Dog:
      return new Dog()
        break;
    }
  }
}

const AnimalType={
  Cat:'Cat',
  Dog:'Dog',
}

let cat=AnimalFactory.CreateAnimal(AnimalType.Cat)
cat.calls()
cat.eat()
console.log('------------------我是分隔线-------------------------')
let dog=AnimalFactory.CreateAnimal(AnimalType.Dog)
dog.calls()
dog.eat()
console.log('------------------我是分隔线-------------------------')


