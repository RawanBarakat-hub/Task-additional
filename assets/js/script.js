const icon=document.querySelector("nav .icon")
const  logo=document.querySelector("nav .icon i")
const col=document.querySelector("header")
const paragraph=document.querySelectorAll("p")
const title=document.querySelector("h1")
const change=()=>{
    let socials=document.querySelectorAll(".hero .icons a")
    if (title.style.color=="rgb(255, 89, 0)" || title.style.color=="") {
        icon.innerHTML=`<i class="fa-solid fa-sun faSize sun"></i>`
        col.style.background="#1e293bff"
        title.style.color="white"
        paragraph[0].style.color="white"
        paragraph[1].style.color="white"
        socials.forEach((social)=>{
            social.style.color="white"
        })
    }
    else{
        icon.innerHTML=`<i class="fa-solid fa-moon faSize"></i>`
        col.style.background="#f6f6f6"
        title.style.color="rgb(255, 89, 0)"
        paragraph[0].style.color="#868282"
        paragraph[1].style.color="#868282"
        socials.forEach((social)=>{
            social.style.color="black"
        })
    }
}