const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-popup");


    window.addEventListener("load", () => {
      setTimeout(() => {
        popup.style.display = "flex";
      }, 1500); 
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    }, 1500);

    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });

    function showMenu () {
      var m=document.querySelector(".menu");
      m.classList.add('show')
    }

    function closeMenu () {
      var m=document.querySelector(".menu");
      m.classList.add('hide')
    }