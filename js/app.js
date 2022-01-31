const skills = document.querySelectorAll(".sitem");

const randomcolor = ()=>{
    let r = (Math.floor((Math.random()*125)+100));
    let b =(Math.floor((Math.random()*125)+100));
    let g=(Math.floor((Math.random()*125)+100));
    return `rgba(${r},${g},${b}, 1)`;
}
console.log(randomcolor());
for (let skill of skills ){
    let clr = randomcolor();
    skill.classList.add("rounded");
    console.log(clr);
    skill.style.backgroundColor = clr;
    console.log(skill.innerText);
}