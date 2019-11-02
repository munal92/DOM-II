// Your code goes here

/////Mouse enter 1

const middlePicMouse = document.querySelector('.img-content img');
console.log('mouseImg', middlePicMouse);

middlePicMouse.addEventListener("mouseenter", () => {
    middlePicMouse.style.transform="scale(1.2)";
    middlePicMouse.style.transition="all 0.3s";
})

middlePicMouse.addEventListener("mouseleave", () => {
    middlePicMouse.style.transform = "scale(1)";
    middlePicMouse.style.transition="all 0.3s";
})

//DoubleCLick   2 
const changeBackHeader = document.querySelector('.main-navigation');
let back = ' ';
changeBackHeader.addEventListener('dblclick', () => {
    
     if(back === 'white'){
        back = 'green';
    document.body.style.background = "green";

     }else{ 
        back = 'white'; 
        document.body.style.background = "white";}
})


/// click 3
const backgroundClick = document.querySelectorAll('.img-content');
backgroundClick.forEach(title => {
  title.addEventListener('click', () => {
    document.body.style.background = "red";
  });
});


/// keydown 4
document.addEventListener('keydown', logKey);

function logKey(e) {
    alert(e.code);
}

//load 5

// window.addEventListener("load", function() {
//     alert("The page has now loaded");
//     });



  //MouseOver 6

  let navColorOver = document.querySelector(".nav");
  navColorOver.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  

/// contextmenu 7
const img2 = document.querySelector('.img-content img');
img2.addEventListener('contextmenu', function(event){
  event.target.style.border = '12px solid blue';
});


//copy 8 

const copyContent = document.querySelector('p');
copyContent.addEventListener('copy', function(event){
  alert('i know you just copied something :)');
});

//mouseover 9

const buttonMouseOver = document.querySelector('.btn');
buttonMouseOver.addEventListener('mouseover', function(event){
  event.target.style.background = 'pink';
});

//wheel10

const header = document.querySelector('p')
header.addEventListener('wheel', function() {
    header.style.background = 'blue';
    header.style.color = 'white';
})





//////////////////////////
const stopLink = document.querySelector('.nav');
stopLink.addEventListener('click', (event) => {
  console.log('menu item click');
  event.preventDefault();
});



const navPropag = document.querySelector('.nav');
navPropag.addEventListener('click', function(event){
  event.target.style.color = 'green';
  event.stopPropagation();
});