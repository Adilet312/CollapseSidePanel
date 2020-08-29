import './css/styles.css';

let obj = {showMenu:true}
function showMenu(check){

  let menu = document.querySelector('.smallPanel ul');

  check===true ? menu.style.visibility="visible" : menu.style.visibility="hidden";
}

let openBtn = document.querySelector('.menu-icon');
openBtn.addEventListener('click',function(){
  if(obj.showMenu){
    showMenu(obj.showMenu);
    obj.showMenu = false;
  }
  else{
    showMenu(obj.showMenu);
    obj.showMenu = true;
  }

},false)




























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
