// DARK MODE

function dark(){

document.body.classList.toggle(
"dark"
)

}


// MUA SÁCH

function buy(){

alert(
"Đã thêm vào giỏ"
)

}


// THANH TOÁN

function pay(){

alert(
"Thanh toán thành công"
)

}


// NÚT LÊN ĐẦU

let topBtn=
document.getElementById(
"top"
)

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:
"smooth"

})

}

}


// SEARCH

let input=

document.querySelector(
".search input"
)

if(input){

input.addEventListener(

"keyup",

()=>{

let cards=

document.querySelectorAll(
".card"
)

cards.forEach(

(card)=>{

if(

card.innerText

.toLowerCase()

.includes(

input.value

.toLowerCase()

)

)

{

card.style.display=
"block"

}

else{

card.style.display=
"none"

}

}

)

}

)

}
function register(){

let user=

document
.getElementById(
"user"
).value

let pass=

document
.getElementById(
"pass"
).value


localStorage
.setItem(
"user",
user
)

localStorage
.setItem(
"pass",
pass
)

alert(
"Đăng ký thành công"
)

location=

"dangnhap.html"

}



function login(){

let user=

document
.getElementById(
"loginUser"
).value

let pass=

document
.getElementById(
"loginPass"
).value


if(

user==

localStorage
.getItem(
"user"
)

&&

pass==

localStorage
.getItem(
"pass"
)

)

{

alert(
"Đăng nhập thành công"
)

location=

"index.html"

}

else{

alert(
"Sai tài khoản"
)

}

}
function filterBook(type){

let books=

document
.querySelectorAll(
".card"
)

books.forEach(

book=>{

if(

type=="all"

||

book.classList.contains(
type
)

)

book.style.display=

"block"

else

book.style.display=

"none"

}

)

}