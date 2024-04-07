// let a=document.querySelector('a')
// console.log(a);
// a.innerText='More'
// let b=document.querySelector('.p1')
// b.style.color = "yellow";

// elementin yaradilmasi
function  addElement(){
// elememt yaratmaq 
let text=document.createElement('p')
// elementin icini doldurmaq
text.innerText='Coffee Details'
// elementi htmle elave etmek
let box=document.querySelector('.box')
box.append(text)
}
addElement()
// elementin silinmesi
function deleteElement() {
    let coffeeImg=document.querySelector('.home-coffee')
    // Element.remowe
    coffeeImg.remove()
    // coffeeImg.style.display='none'
}
deleteElement()