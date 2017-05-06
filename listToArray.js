function slave(list){
array=[];
for(var node=list;node;node=node.rest){
array.push(node.value)
}
return array;
}