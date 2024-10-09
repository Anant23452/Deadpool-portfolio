console.log("hello")
document.querySelector('.cross').style.display = 'none';
// Click karne par sidebar ko hatane ka code
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    
    if (document.querySelector('.sidebar').classList.contains('.sidebargo')) {
        document.querySelector('.hamp').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
        
    } 
    else {
        document.querySelector('.cross').style.display = 'none'
        document.querySelector('.hamp').style.display = "inline"
    }
})