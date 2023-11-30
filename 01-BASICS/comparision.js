console.log(2>1);//t
console.log(2>=19);//f
console.log(2<1);//f
console.log(2==1);//f
console.log(2!=1);//t
console.log("2">1);//t
console.log("02">1);//t
console.log(null>1);//f
console.log(null==0);//f
console.log(null>=0);//t
/*
1.The reason is that an equality cheack == and comparision > < >= <= work differently.
2.The comparision convert null to a number,treating as 0,thats why null>=0 is true and null>0 is false.
/*