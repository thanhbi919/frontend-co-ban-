//countdown
function start(h,m,s)
{
    if (s === -1){
        m -= 1;
        s = 59;
    }

    if (m === -1){
        h -= 1;
        m = 59;
    }
    if (h == -1){
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }
}
let h=1;
let m=59
let s=60;
timeout= setInterval(() => {
    s--;
    if (s === -1){
        m -= 1;
        s = 59;
    }

    if (m === -1){
        h -= 1;
        m = 59;
    }
    if (h == -1){
        clearInterval(timeout);
        alert('Hết giờ');
        return false;
    }
    let h11=document.getElementById('h')
    h11.innerText=h.toString();
    let m1=document.getElementById('m');
    m1.innerText=m.toString();
    let s1=document.getElementById('s');
    s1.innerText=s.toString(); 
    
}, 1000);


//xử lí nút mua
let dem=0;
let buy= document.getElementById('bought')
let h1= document.createElement('p');
let btn = document.getElementById('event-btn');
h1.innerHTML=dem;
buy.appendChild(h1);
        let clickHandler = function(event) {
            btn.style.visibility="hidden";
            dem=dem+1;
            h1.innerHTML=dem;
            buy.appendChild(h1)
        };
btn.addEventListener('click',clickHandler);
let btn1 = document.getElementById('event-btn1');

        let clickHandler1 = function(event) {
            btn1.style.visibility='hidden';
            dem=dem+1;
            h1.innerHTML=dem;
            buy.appendChild(h1)
        };
btn1.addEventListener('click',clickHandler1);

let btn2 = document.getElementById('event-btn2');

        let clickHandler2 = function(event) {
            btn2.style.visibility='hidden';
            dem=dem+1;
            h1.innerHTML=dem;
            buy.appendChild(h1)
        };
btn2.addEventListener('click',clickHandler2);

let btn3 = document.getElementById('event-btn3');

        let clickHandler3 = function(event) {
            btn3.style.visibility='hidden';
            dem=dem+1;
            h1.innerHTML=dem;
            buy.appendChild(h1)
        };
btn3.addEventListener('click',clickHandler3);




//xử lí form
      
    
function clicksubmit() {
    var x,y,z,t;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("fullname").value;
    y = document.getElementById("email").value;
    z = document.getElementById("phone").value;
    // console.log(z);
    t = document.getElementById("age").value;
    // console.log(t);
     
    if(!(isNaN(x))){
        document.getElementById("fullname").style.border = 'solid 1px red';
    }
    if(!(isNaN(y))){
        document.getElementById("email").style.border = 'solid 1px red';
    }
    if(!(isNaN(z))){
        document.getElementById("phone").style.border = 'solid 1px red';
    }
    if(!(isNaN(t))){
        document.getElementById("age").style.border = 'solid 1px red';
    }

}
function input(id){
    var k = document.getElementById(id).value;
    document.getElementById(id).style.textTransform='uppercase'
    if(isNaN(k)){
        document.getElementById(id).style.border = 'solid 1px gray';
    }
}

