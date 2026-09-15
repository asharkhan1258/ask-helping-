
document.querySelectorAll('[data-menu]').forEach(btn=>btn.addEventListener('click',()=>{
 const nav=document.querySelector('.navlinks'); nav.style.display=nav.style.display==='flex'?'none':'flex';
}));
document.querySelectorAll('.year').forEach(x=>x.textContent=new Date().getFullYear());
document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {

      mobileNav.classList.toggle("active");

      const icon = menuBtn.querySelector("i");

      if (mobileNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }

    });
  }

});