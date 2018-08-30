
class Observer{
  constructor() {
    this.objSet = new Set();
  }
  
  attach(obj){
    this.objSet.add(obj)
  }
  
  detach(obj){
    this.objSet.delete(obj)
  }
  
  fire(){
    for(let item of this.objSet){
      item.update&&item.update()
    }
  }
}

class Config{
  constructor(name="default"){
    this.name=name;
  }
  
  update(){
    console.log(`%c--我是-- `, 'color:blue;font-weight:bold', this.name)
  }
}

let a1=new Config('a11');
let a2=new Config('a22');
let a3=new Config('a33');

let obs=new Observer();
obs.attach(a1)
obs.attach(a2)
obs.attach(a3)

obs.fire();
console.log('------------------我是分隔线-------------------------')

obs.detach(a3)
obs.fire()
