function every(array,method){
for(var i=0;i<array.length;i++){
if(method(array[i])){}
else break;}
if(i==array.length){return true;}
else return false;
}