for(var j=0;j<A.length;j++)
{
 var key=A[j];
 var i=j-1;
 while(i>=0 && A[i]>key)
{
 A[i+1]=A[i];
 i=i-1;
 }
A[i+1]=key;
}
console.log(A);