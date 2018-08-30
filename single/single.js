
class singleDemo{
  constructor(){
    
    if(singleDemo.instance===undefined){
      this.add=function () {
        console.log(`%c--add-- `, 'color:blue;font-weight:bold', 'add')
      }
      this.del=function () {
        console.log(`%c--add-- `, 'color:blue;font-weight:bold', 'del')
      }
      singleDemo.instance=this;
    }
    
    return singleDemo.instance
  }
}

singleDemo.instance;


let a=new singleDemo();
let b=new singleDemo();

console.log(`%c---- `, 'color:blue;font-weight:bold',a==b )
a.add()
b.del()
