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
  // mobile nav toggle if present
  const toggle = document.getElementById('nav-toggle');
  if(toggle){
    toggle.addEventListener('click',()=>{
      const nav = document.getElementById('nav');
      nav.classList.toggle('open');
    });
  }
});
