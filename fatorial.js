console.log('n-fatorial')

const fatorial = (num)=>{
    if(num === 0)
        return 1
    
    return num * fatorial (num - 1)
}

console.log(`O fatorial de  é igual a ${fatorial(5)}`)