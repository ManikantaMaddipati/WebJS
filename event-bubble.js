let m = document.getElementById('m');
let d = document.getElementById('d');
let p = document.getElementById('p');
let s = document.getElementById('s');
let log = console.log;

//clicking on span element this log of div will print.
d.addEventListener('click', (ev) => {
        log('HI')
    }
);

let highlight = (ev)=>{
  //add css class "gold" to element that triggered
  let target = ev.currentTarget;
  target.className = 'gold';
  reset(target);
}
function reset(target){
    setTimeout(()=>{
        target.className=''
    },2000);

}
[m,d,p,s].forEach((elements)=>{
   elements.addEventListener("click",highlight)
})