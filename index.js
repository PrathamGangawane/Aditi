var user = [
    {
        profilePic:'Remini20220311054737551.jpg',
        iconsColor:'pink',
        massage:"cutest Ias officer "
    },
    {
        profilePic:'Remini20220301203856766.jpg',
        iconsColor:'black',
        massage:"lukiest girl and i really proud "
    },
    {
        profilePic:'IMG-20220301-WA0021.jpg',
        iconsColor:'blue',
        massage:"just bussiness leader and coache"
    },
    {
        profilePic:'Screenshot_2022_0225_071546.jpg',
        iconsColor:'grey',
        massage:"your the best addu where "
    },
    {
        profilePic:'Screenshot_2022_0314_111934.jpg',
        iconsColor:'#E8BEAC',
        massage:"you are the pritiest ani resposible girl"
    },
]
let val = 0
// we have just flipping cards thats concepts
function select(elem){
   return document.querySelector(elem)
}
function setData(index){
    document.querySelectorAll('.icons i').forEach(function(icons){
        icons.style.color = user[index].iconsColor
    })
    //select('.icons i').style.color = user[index].iconsColor
    select('.massage').textContent = user[index].massage
}
function setintial(){
    select('.fisrtcard img').src = user[val].profilePic
    select(".secondcard img").src = user[val+1].profilePic
    setData(val)
   val = 2
}
var isAnimating = false

function imagechange(){
   if(!isAnimating){
    isAnimating = true
    var tl = gsap.timeline(
        {
            onComplete:function(){
                isAnimating = false
                let main = select('.fisrtcard')
                let backcard =  select('.secondcard')
                let mainimg = select('.fisrtcard img')
                main.style.zIndex = 1
                main.classList.remove('fisrtcard')
                backcard.style.zIndex = 2
                backcard.classList.remove('secondcard')
               gsap.set(main,{
                scale:1,
                opacity:1
               })
               if(val === user.length)val = 0
              mainimg.src = user[val].profilePic
               val++;
               main.classList.add('secondcard')
               backcard.classList.add('fisrtcard')
                 //lopping stament is here 
               
            }
        }
    )
 
    tl.to('.fisrtcard ',{
        opacity:0,
        scale:1.1,
        duration:1,
        ease:Circ,
       
    },"a").from('.secondcard',{
        opacity:0,
        scale:1.1,
        duration:1,
        ease:Circ
    },"a")
   }
    
 
   
}

setintial()

function button(){
    var btn = document.querySelector('.btn')
    btn.addEventListener("click",function(){
        imagechange()
        setData(val-1)
        gsap.from('.details .element',{
            y:"100%",
            opacity:0,
            duration:1.5,
            stagger:.06,
            ease:Power4.easeInOut
        })
    })
}
button()
function elementCreator(){
    let element = document.querySelectorAll('.element')
    element.forEach((element)=>{
     var div = document.createElement('div')
      div.classList.add(`${element.classList[1]}container`)
      div.appendChild(element)
    
       select('.details').appendChild(div)
    })
    
}
elementCreator()
