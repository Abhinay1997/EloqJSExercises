function Arrayreverse(array){
/*stack overflow*/
for(var i=0;i<Math.floor(array.length/2);i++)
{var old=array[i];
array[i]=array[array.length-i-1];
array[array.length-i-1]=old;
}
return array;
}