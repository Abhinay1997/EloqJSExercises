unction some(array,method){
for(var i=0;i<array.length;i++){if(method(array[i])){return true;}
else continue;
}
return false;
}