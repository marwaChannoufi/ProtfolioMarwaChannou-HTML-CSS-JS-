

window.addEventListener('load',function(){
    document.querySelector('.preloader').classList.add('opacity-0')
setTimeout(()=>{
    document.querySelector('.preloader').style.display="none"
},1000)
})
// console.log('hello world')
const portfolioContainer=document.querySelector('.portfolio-filter')  // console.log(portfolioContainer)
const filterBtns=portfolioContainer.children   // console.log(filterBtns)
const totalFilterBtn=filterBtns.length  // console.log(totalFilterBtn)
const  portfolioItems=document.querySelector(".portfolio-items").children // console.log(portfolioItems)
const totalPortfolioItem=portfolioItems.length 

for(i=0;i<totalFilterBtn;i++){
    // console.log(filterBtns[i])
    filterBtns[i].addEventListener('click',function(){
        // console.log(this)
        // console.log( this.innerHTML)
        
        portfolioContainer.querySelector('.active').classList.remove('active')
        this.classList.add('active')
        const filterValue=this.getAttribute("data-filter") // console.log(filterValue)
        for(k=0;k<totalPortfolioItem;k++){
            // console.log(portfolioItems[k].getAttribute("data-category"))
            if(filterValue===portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.add("show")
                portfolioItems[k].classList.remove('hide')
            }else {
                portfolioItems[k].classList.add("hide")
                portfolioItems[k].classList.remove("show")
            }if(filterValue==='all'){
                portfolioItems[k].classList.remove('hide')
                portfolioItems[k].classList.add("show")
            }
        }
    })
}
// Portfolio lightbox Modal avec js
const lightbox=document.querySelector(".lightbox"); //console.log(lightbox) // lightbox.classList.add("open")
const lightboxImg=document.querySelector(".lightbox-img"); //console.log(lightboxImg.src)
const lightboxText=document.querySelector('.caption-text') ;//console.log(lightboxText.innerHTML)
const lightboxCounter=lightbox.querySelector(".caption-counter"); //console.log(lightboxCounter.innerHTML)
let itemIndex=0;
for(let i=0;i<totalPortfolioItem;i++){
    portfolioItems[i].addEventListener('click',function(){
        lightbox.classList.toggle("open")
        // console.log(i+1)
        itemIndex=i;
        changeItem()
    })
}

const nextItem=document.querySelector('.next-item')
nextItem.addEventListener('click',function(){
    console.log('hi next')
    if(itemIndex==totalPortfolioItem-1){
        itemIndex=0
    }else{itemIndex++}
    changeItem()
})
const prevItem=document.querySelector('.prev-item')
prevItem.addEventListener('click',function(){
    console.log('hi prev')
    if(itemIndex==0){
        itemIndex=totalPortfolioItem-1
    }else{itemIndex--}
    changeItem()
})
function changeItem(){
   const imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src")
//    console.log(imgSrc)
   lightboxImg.src=imgSrc
   lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML
   lightboxCounter.innerHTML=(itemIndex+1)+' of '+totalPortfolioItem
}

// close lightbox
const lightboxClose=document.querySelector('.lightox-close')
lightbox.addEventListener('click',(e)=>{
    if(e.target===lightboxClose || e.target==lightbox){
        lightbox.classList.toggle('open')
    }
})


const links=document.querySelectorAll('.alternate-style')
// console.log(links)
function changeColor(color){
    for(let i=0;i<links.length;i++){
        if(color===links[i].getAttribute("title")){
            links[i].removeAttribute('disabled')
        }else{
            links[i].setAttribute("disabled","true")
        }
    }
}

const settingBtn=document.querySelector('.toggle-style-switcher')
// const settingColor=document.querySelector('.style-switcher')
settingBtn.addEventListener('click',function(){
    document.querySelector('.style-switcher').classList.toggle("open")
    console.log(1)
})

// switch nav bar
const nav=document.querySelector('.nav');//console.log(nav)
// console.log(nav.children)
const navList=nav.querySelectorAll("li");//console.log(navList)
const totalNavList=navList.length
const allSectiion=document.querySelectorAll('.section')
const totalSection=allSectiion.length

for(let i=0;i<totalNavList;i++){
    // console.log(navList[i])
    const a= navList[i].querySelector('a')
    // console.log(a)
    a.addEventListener('click',function(){
        for(let i=0;i<totalSection;i++){
            allSectiion[i].classList.remove("back-section")
        }
        // console.log(this)
         for(let j=0;j<totalNavList;j++){
             if(navList[j].querySelector("a").classList.contains("active")){
                 allSectiion[j].classList.add('back-section')
             }
             navList[j].querySelector('a').classList.remove("active")
        }
        this.classList.add('active')
         showSection(this)
         if(window.innerWidth<1200){
    asideSectionTogglerBtn()
}
    })
}


 function showSection(el){
    //  console.log(el.getAttribute("href").split("#")[1])
    for(let i=0;i<totalSection;i++){
        allSectiion[i].classList.remove("active")
    }
    const href=el.getAttribute("href").split("#") 

    // console.log(href) 
     const target=href[1]
    //  console.log(target)
    document.querySelector("#"+target).classList.add("active")
 }

 function updateNav(el){
    const target=el.getAttribute("href").split("#")[1]
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector('a').classList.remove('active')
        if(target===navList[i].querySelector('a').getAttribute("href").split("#")[1]){
            navList[i].querySelector('a').classList.add('active')
        }
    }
 }

document.querySelector(".hire-me").addEventListener('click',function(){
    // console.log(this)
    showSection(this)
    updateNav(this)
})

 const navTogglerBtn=document.querySelector('.nav-toggler')
 const aside=document.querySelector('.aside')
 navTogglerBtn.addEventListener('click',()=>{
     asideSectionTogglerBtn();
 })

function asideSectionTogglerBtn(){
    aside.classList.toggle('open')
    navTogglerBtn.classList.toggle('open')
    for(let i=0;i<totalSection;i++){
        allSectiion[i].classList.toggle("open")
    }
}