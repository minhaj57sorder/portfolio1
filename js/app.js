let header = document.getElementById("header")
document.addEventListener("scroll",()=>{
    var elmnt = document.getElementById("herosection");
    let x= elmnt.scrollHeight*0.65;
    var y = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    if(y >= (x)){
        header.style.transform = "translateY(0px)"
    }else{
        header.style.transform = "translateY(-300px)"
    }
})