function tickets(peopleInLine){
  var total = [];
  var temp = 0;
  var canPay = false;
  for (var i = 0; i < peopleInLine.length; i++){
    total[temp] = peopleInLine[i];
    temp++;
    if (peopleInLine[i] == 50){
      for (var h = 0; h < total.length; h++){
        if (total[h] == 25){
          canPay = true;
          total[h] = 0;
          break;
        }
      };
      if (canPay == false){
        return "NO";
      }
    }
    else if (peopleInLine[i] == 100){
      var change1pos = -1;
      var change2pos = -1;
      var change3pos = -1;
      var foundA50 = false;
      for (var h = 0; h < total.length; h++){
        if (change1pos == -1){
          if (total[h] == 50){
            foundA50 = true;
            change1pos = h;
          };
          if (total[h] == 25){
            change1pos = h;
          };
        }
        else if (change2pos == -1){
          if (total[h] == 50){
            if(foundA50 == false){
              canPay = true;
              break;
            };
          };
          if (total[h] == 25){
            if (foundA50 == true){
              canPay = true;
              break;
            };
            change2pos = h;
          };
        }
        else {
          if (total[h] == 25){
            canPay = true;
            break;
          }
        }
      };
      if (canPay == false){
        return "NO";
      }
      if (change1pos != -1){
        total[change1pos] = 0;
      };
      if (change2pos != -1){
        total[change2pos] = 0;
      };
      if (change3pos != -1){
        total[change3pos] = 0;
      };
    };
    canPay = false;
  };
  return "YES";
};
//exports
module.exports = {tickets};
