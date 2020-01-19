function rgb(r,g,b){
  var hexConversion = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  var hex = '';
  var rounded = 0;

  //checking for OOB
  if(r < 0){
    r = 0;
  };
  if(r > 255){
    r = 255;
  };

  if(g < 0){
    g = 0;
  };
  if(g > 255){
    g = 255;
  };

  if(b < 0){
    b = 0;
  };
  if(b > 255){
    b = 255;
  };

  //r
  rounded = ((r/16)%1);
  hex += hexConversion[(r/16) - rounded];
  hex += hexConversion[((r/16)%1)*16];
  //g
  rounded = ((g/16)%1);
  hex += hexConversion[(g/16) - rounded];
  hex += hexConversion[((g/16)%1)*16];
  //b
  rounded = ((b/16)%1);
  hex += hexConversion[(b/16) - rounded];
  hex += hexConversion[((b/16)%1)*16];

  return hex;
};

module.exports = {rgb};
