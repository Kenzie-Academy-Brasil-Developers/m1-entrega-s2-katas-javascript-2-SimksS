// comece a criar a sua função add na linha abaixo
function add (a,b){
    return a + b
}
console.log("Function Add ") 
console.log(add (3,5))
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply (a ,b){
    let product = 0 
    for (let i = 1 ; i <= b ; i = add(i,1)){          
        product = add (product,a) 
    }
    return product

}
console.log("Function multiply ") 
console.log(multiply(4,6))
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (x ,n ){
    let powerT = 1
    for (let i = 1 ; i <= n ; i = add(i,1)){          
        powerT = multiply(x,powerT)
    }
    return powerT
} 
console.log("Function Power ") 
console.log(power(3,4))
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (x) {
    let factRes = x 
    let i = x 
  while (i > 1){  
   --i 
   factRes =  multiply(factRes,i)  
   
}
   return factRes
}
console.log("Function Factorial") 
console.log(factorial (5))
// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
     function fibonacci (n){ 
        let fibTabble = [0]  
        let fibIncremento = 1 
        for (let index = 0; index <= n ; index = add(index,1)){ 
            fibTabble.push(add(fibTabble[index],fibIncremento)) 
            fibIncremento = fibTabble[index]
        }
        return fibTabble[n]

    }
    console.log("Function Fibonacci") 
    console.log(fibonacci(7))                                                
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');



