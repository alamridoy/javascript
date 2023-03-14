// try
//catch
//finally
//throw



// let x ='10'
// try{
//     if(x == '') throw 'Its empty!'
//     if(isNaN(x)) throw 'not given value'
//     x = Number(x)
//     if(x<5) throw 'Too low'
//     if(x>5) throw{
//         message : 'Its too highhhh',
//         name : 'High error'
//     }  // object wise throw errors
// }catch(err){
//     console.log(err)
// }

try{
    console.log(5/.0)
     throw '0 dvision error'
}catch(err){
    console.log(err)
}