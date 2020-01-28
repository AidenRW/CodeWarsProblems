var uniqueInOrder = function(iterable){
  var temp;
  var result = [];
  for (var i = 0; i < iterable.length; i++){
    if (iterable[i] != temp){
      temp = iterable[i];
      result[result.length] = iterable[i];
    };
  };
  return result;
};
//
//
//
//
module.exports = {uniqueInOrder};
