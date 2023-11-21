const btn = document.getElementById('arrow')
const arrow1 = document.getElementById('icon1')
const arrow2 = document.getElementById('icon2')
const sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
    if(sidebar.classList.contains('active')){
        arrow1.style.visibility = "hidden"
        arrow2.style.visibility = "visible"
    }
    else{
        arrow1.style.visibility = "visible"
        arrow2.style.visibility = "hidden"
    }
})

