
exports.min = function min (array) {
if (array.length ==0){ return 0;
 }
  else{
 return Math.min.apply(Math, array);
  }
  }


exports.max = function max (array) {
if (array.length ==0){ return 0;
 }
 else{
return Math.max.apply(Math, array);
}
}

exports.avg = function avg (array) {
if (array.length ==0){ return 0;
 }
 else{
 var arr1=0;
 var res=0;
  for (var i=0;i<array.length;i++){
      arr1+=array[i];
      }
      res=arr1/array.length;
  return res;
}
}
