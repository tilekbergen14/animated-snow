const section = document.querySelector("section")
function snow(){
    let i = 1
    while(i < 300){
        let size = Math.random() * 10
        let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight)
        const snow = document.createElement("i")
        snow.style.top = y + "px"
        snow.style.left = x + "px"
        snow.style.height = 1 + size + "px"
        snow.style.width = 1 + size + "px"
        section.appendChild(snow)
        snow.style.animationDuration = size + "s"
        i++;
    }
}
snow()