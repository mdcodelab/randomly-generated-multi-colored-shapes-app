const myDiv = document.querySelector(".container");

myDiv.addEventListener("mousemove", (e) => {

//generate color
let randomNum1=Math.round((Math.random())*255);
let randomNum2=Math.round((Math.random())*255);
let randomNum3=Math.round((Math.random())*255);
let randomColor=`rgba(${randomNum1}, ${randomNum2}, ${randomNum3})`;

//set shapes dimensions
let widthEl=Math.round(Math.random()*100);
let heightEl= Math.round(Math.random()*100);

    //set class name
    let shapesClassNames=["rectangle", "circle", "triangle"]
    let randomIndex=Math.floor(Math.random()*shapesClassNames.length);
    let randomClassName=shapesClassNames[randomIndex];

    //set mouse pointer position
let x=e.offsetX;
let y=e.offsetY;

let shape=document.createElement("div");
shape.setAttribute("class", randomClassName);
console.log(randomClassName);
myDiv.appendChild(shape);


shape.style.width=`${widthEl}px`;
shape.style.height=`${heightEl}px`;
shape.style.position="absolute";
shape.style.top=`${y-heightEl/2}px`;
shape.style.left=`${x-widthEl/2}px`;
shape.style.backgroundColor=`${randomColor}`;
shape.style.border=`1px solid ${randomColor}`;


//Check for overlapping shapes
});
