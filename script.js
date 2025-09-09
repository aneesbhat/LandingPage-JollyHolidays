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

    // function showMenu () {
    //   var m=document.querySelector(".menu");
    //   m.classList.add('show')
    // }

    // function closeMenu () {
    //   var m=document.querySelector(".menu");
    //   m.classList.add('hide')
    // }


    // const panel = document.getElementById("panel");
    // document.getElementById("openBtn").onclick = () => panel.style.left = "0%";
    // document.getElementById("closeBtn").onclick = () => panel.style.left = "-100%";



    // Get elements
// const menuBtn = document.querySelector('#openBtn');   // The button to open menu
// const closeBtns = document.querySelector('#closeBtn'); // The button to close menu
// const offCanvas = document.querySelector('#panel'); // The off-canvas container

// // Open menu
// menuBtn.addEventListener('click', () => {
//   offCanvas.classList.add('show'); // Add "show" class to show off-canvas
// });

// // Close menu
// closeBtns.addEventListener('click', () => {
//   offCanvas.classList.remove('show'); // Remove "show" class to hide off-canvas
// });

// // Optional: Close when clicking outside the menu
// document.addEventListener('click', (e) => {
//   if (offCanvas.classList.contains('show') &&
//       !offCanvas.contains(e.target) &&
//       !menuBtn.contains(e.target)) {
//     offCanvas.classList.remove('show');
//   }
// });





    const modalOverlay = document.getElementById("modalOverlay");
    const leadModal = document.getElementById("leadModal");

    function openModal() {
      modalOverlay.style.display = "flex";
      setTimeout(() => {
        leadModal.classList.add("active");
      }, 50);
    }

    function closeModal() {
      leadModal.classList.remove("active");
      setTimeout(() => {
        modalOverlay.style.display = "none";
      }, 600);
    }

    // Off-Canvas


    function openCanvas() {
      document.getElementById("myCanvas").style.width = "280px";
    }

    function closeCanvas() {
      document.getElementById("myCanvas").style.width = "0";
    }