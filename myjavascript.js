//scrivere un ciclo con il for
let str = '';
const container = document.querySelector(".container")

let nuovoDiv = document.createElement("div");
console.log(nuovoDiv)
nuovoDiv.classList.add = 'boxF';
for (let i = 1; i <= 100; i++) {
    
    const div = document.createElement('div')
    container.append(div)

    if ((i%3===0) && (i%5===0)){
        div.append("fizbizz")
        div.classList.add("bkc-red")
        console.log("fizzbizz")
    } else if (i %5===0){
        div.append("Bizz")
        div.classList.add("bkc-green")
        //div.append(i)
        console.log("Bizz")
        //div.classList.add(bkc-green)
    } else if (i % 3 === 0){
        div.append("Fizz")
        div.classList.add("bkc-yellow")
    } else {
        div.append(i)
    }

    //container.append(div)
    //console.log(i);
}
