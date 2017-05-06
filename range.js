function range(x,y,z){
var k=[];
if(z==undefined){z=1;}
for(var i=x;i!=y+z;i+=z){
k.push(i);
}
return k;}