import './css/styles.css';


function showMenu(){
  let ul = document.querySelector('.nav-center ul');
  let class_name = ul.getAttribute('class');
  if(class_name==="links"){
    ul.className = "show-links";
  }
  else if(class_name==="show-links"){
    ul.className = "links";
  }
}

document.querySelector('.nav-toggle').addEventListener('click',showMenu,false);




























// function displayOverlay(){
//
//     /*Overlay*/
//     let overlay =  document.createElement('div');
//     overlay.className = "overlayClass";
//     overlay.style.position = "absolute";
//     overlay.style.zIndex = "-1";
//     overlay.style.top = window.pageYOffset + "px";
//     overlay.style.left =  window.pageXOffset + "px";
//     overlay.style.background = 'rgba(0,0,0,0.7)';
//     overlay.style.width = window.innerWidth + "px";
//     overlay.style.height = window.innerHeight + "px";
//     /*Close icon*/
//     let x = document.createElement('span');
//     x.className = "close";
//     x.innerText = "X";
//     x.style.position = "absolute";
//     x.style.zIndex = "2";
//     x.style.right = "50px";
//     x.style.top = "120px";
//     x.style.color = "white";
//     x.style.fontSize = "30px";
//     overlay.appendChild(x);
//     document.body.appendChild(overlay);
// }
