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

  // Add Instagram + LinkedIn to mobile menu
  const mobileLinks = document.createElement('div');
  mobileLinks.style.marginTop = "12px";
  mobileLinks.innerHTML = `
    <a class="btn btn-primary" href="https://www.instagram.com/ecstasy_ventures_?igsh=OXhwaG8xdDJrcWhk" target="_blank">Instagram</a>
    <a class="btn btn-primary" href="https://www.linkedin.com/company/ecstasy-ventures/" target="_blank">LinkedIn</a>
  `;
  nav.appendChild(mobileLinks);
});
