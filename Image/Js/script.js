const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItems")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=> {
        wrapper.style.transform=`translateX(${-100 * index}vw)`
    });
});
