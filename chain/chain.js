var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log (`%c--500-- `, 'color:blue;font-weight:bold', 500)
  } else {
    return 'nextSuccessor';
  }
}
var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log (`%c--200-- `, 'color:blue;font-weight:bold', 200)
  } else {
    return 'nextSuccessor';
  }
}

var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log (`%c--normal-- `, 'color:blue;font-weight:bold', `normal`)
  } else {
    return 'normal';
  }
}

var Chain = function (fn) {
  this.fn = fn;
  this.success = null;
};

Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor;
};

Chain.prototype.passRequest = function () {
  var ret = this.fn.apply (this, arguments);
  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply (this.successor, arguments);
  }
  return ret;
}

// 包装成节点
var ChainOrder500=new Chain(order500);
var ChainOrder200=new Chain(order200);
var ChainOrderNormal=new Chain(orderNormal);

//指定节点在职责链中的顺序
ChainOrder500.setNextSuccessor(ChainOrder200)
ChainOrder200.setNextSuccessor(ChainOrderNormal)

ChainOrder500.passRequest(1,true,500)
ChainOrder500.passRequest(2,true,500)
ChainOrder500.passRequest(3,true,500)
ChainOrder500.passRequest(1,false,0)
