console.log('n-fatorial')


// process.on( 'exit', ()=>{
//     console.log("script está prester a terminar")
// })

// console.log(`Executando o script a partir do diretório ${process.cwd()}`)


const fatorial = (num)=>{
    if(num === 0)
        return 1
    
    return num * fatorial (num - 1)
}

const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)