const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let button= document.getElementById('btn');
let color= document.querySelector('.color');

button.addEventListener('click',function(){
    let hexcolor="#";
    for(let i=0;i< 6;i++){
        // console.log(i);
        const randomNumber= Math.floor(Math.random()*hex.length);
        hexcolor+= hex[randomNumber];
        console.log(hexcolor);

    }
    color.textContent=hexcolor;
    document.body.style.backgroundColor=hexcolor;
})
