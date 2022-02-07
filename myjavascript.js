//scrivere un ciclo con il for
let str = '';

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0){
        console.log("Fizz")
    }
    if (i %5===0){
        console.log("Bizz")
    }
    console.log(i);
}

//modificare il nome dei multipli di 3 con Fizz
//modificare il nome dei multipli di 5 con bizz
//modificare il nome dei multipli di 3 e 5 con Fizzbizz