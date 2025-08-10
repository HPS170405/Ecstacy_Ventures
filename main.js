// main.js - smooth scroll + mobile nav toggle (minimal)
document.addEventListener('DOMContentLoaded', function(){
  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1 && document.querySelector(href)){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Mobile nav toggle
  const toggleBtn = document.createElement('button');
  toggleBtn.innerHTML = "☰";
  toggleBtn.className = "nav-toggle";
  toggleBtn.id = "nav-toggle";
  document.querySelector('.header').insertBefore(toggleBtn, document.querySelector('.cta'));

  const nav = document.getElementById('nav');
  toggleBtn.addEventListener('click', ()=> nav.classList.toggle('open'));
});
