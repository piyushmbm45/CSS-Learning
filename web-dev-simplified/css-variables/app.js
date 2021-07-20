document.querySelector("#dark-theme-btn").addEventListener("click",()=>{
    document.documentElement.style.setProperty('--background-color','hsl(2 0% 30%)')
})

document.querySelector("#light-theme-btn").addEventListener("click",()=>{
    document.documentElement.style.setProperty('--background-color','hsl(12 10% 100%)')
})