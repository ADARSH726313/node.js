let a = 30 ;
let b=0 ;


const probSolved = new Promise((resolve, reject) => {
  
  setTimeout(()=>{

    resolve(30);
 
 
 },5000)

})
probSolved.then((data)=>{

  b= data ;


  console.log(a+b);


})






