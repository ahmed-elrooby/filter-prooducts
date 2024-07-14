let lis = document.querySelectorAll("ul li");
let imgs = document.querySelectorAll(".products img");


lis.forEach((item)=>{
   item.addEventListener("click",function(){
    lis.forEach((ele)=>{
        ele.classList.remove("active")
            this.classList.add("active")

    })

   })
   item.addEventListener("click",filteration)

})
function filteration(){
    imgs.forEach((img)=>{
        img.style.display="none"
    })
    document.querySelectorAll(this.dataset.fil).forEach((ele)=>{
        ele.style.display="block"
    })
}

// filter