document.addEventListener("DOMContentLoaded", function () {
        // const sidebar = document.getElementById("socialSidebar");
        // const toggleBtn = document.getElementById("toggleSidebar");
        const chevron = document.getElementById("chevronIcon");
      
        const topBar = document.getElementById("logo-text");
        const sliderLogo = document.getElementById("slider-logo");
        
        const video = document.getElementById("myVideo");
        const muteBtn = document.getElementById("mute-btn");
        const navIcon = document.getElementById("hamburger-menu");
        const sideBar = document.querySelector(".Hside-bar");
        const categoryItems = document.querySelectorAll(".Hcategory-item");
        const defaultDropdown = document.querySelector(".Hcategory-item:first-child .Hdropdown"); // "Men" dropdown
        let lastHoveredDropdown = defaultDropdown; // Store last hovered dropdown
    
        //Running bar
        const closeBarBtn = document.getElementById("closeBar");
        const runningBar = document.getElementById("runningBar");
        
        if (closeBarBtn && runningBar) {
            closeBarBtn.addEventListener("click", function () {
                console.log("Close button clicked! Hiding running bar...");
                runningBar.style.visibility = "hidden"; // Hide the running bar
                runningBar.style.opacity = "0"; // Smooth transition
                runningBar.style.height = "0px"; // Collapse height
                runningBar.style.overflow = "hidden"; // Prevents any remaining content visibility
                
            });
        } else {
            console.error("Error: Close button or running bar not found!");
        }
//         const closeBarBtn = document.getElementById("closeBar");
// const runningBar = document.getElementById("runningBar");

// if (closeBarBtn && runningBar) {
//     closeBarBtn.addEventListener("click", function () {
//         console.log("Close button clicked! Hiding running bar...");
//         runningBar.classList.add("hide-bar");
//     });
// } else {
//     console.error("Error: Close button or running bar not found!");
// }

      //Bespoke

  const form = document.getElementById("appointmentForm");
  const whatsappBtn = document.getElementById("whatsappBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;

    if (date && time) {
      const message = `Hello, I'd like to book a Bespoke Tailoring appointment on ${date} at ${time}.`;
      const whatsappUrl = `https://wa.me/<YOUR_PHONE_NUMBER>?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
    }
  });

  // Optional: Dynamically update the WhatsApp link as user selects date/time
  ["appointmentDate", "appointmentTime"].forEach(id => {
    document.getElementById(id).addEventListener("change", () => {
      const date = document.getElementById("appointmentDate").value;
      const time = document.getElementById("appointmentTime").value;
      if (date && time) {
        const message = `Hello, I'd like to book a Bespoke Tailoring appointment on ${date} at ${time}.`;
        whatsappBtn.href = `https://wa.me/<YOUR_PHONE_NUMBER>?text=${encodeURIComponent(message)}`;
      }
    });
  });

  document.getElementById('whatsappBtn').addEventListener('click', function () {
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;
    const message = `Hi! I'd like to book a bespoke tailoring appointment on ${date} at ${time}.`;

    const encodedMsg = encodeURIComponent(message);
    const phone = "916379689083"; // Replace number
    this.href = `https://wa.me/${phone}?text=${encodedMsg}`;
  });

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        topBar.classList.remove("d-none");      // Show black text
        sliderLogo.style.opacity = "0";         // Hide white text
    } else {
        topBar.classList.add("d-none");         // Hide black text
        sliderLogo.style.opacity = "1";         // Show white text
    }
});
    
        // Mute/Unmute Video
        muteBtn.addEventListener("click", function () {
            video.muted = !video.muted;
            muteBtn.innerHTML = video.muted ? '<i class="bi bi-volume-mute"></i>' : '<i class="bi bi-volume-up"></i>';
        });
        navIcon.addEventListener("click", function () {
            this.classList.toggle("active");
            sideBar.classList.toggle("active");
    
            // Delay showing the last hovered dropdown after sidebar is fully visible
            if (sideBar.classList.contains("active")) {
                resetDropdowns();
                setTimeout(() => {
                    if (lastHoveredDropdown) {
                        lastHoveredDropdown.style.left = "0";
                        lastHoveredDropdown.style.opacity = "1";
                        lastHoveredDropdown.style.visibility = "visible";
                    }
                }, 300); // Matches sidebar transition (0.3s)
            } else {
                document.querySelectorAll(".Hdropdown").forEach(dropdown => {
                    dropdown.style.left = "-45%";  // Slide out
                    dropdown.style.opacity = "0";
                    dropdown.style.visibility = "hidden";
                });
            }
        });
    
        function resetDropdowns() {
            document.querySelectorAll(".Hdropdown").forEach(dropdown => {
                dropdown.style.left = "-45%";
                dropdown.style.opacity = "0";
                dropdown.style.visibility = "hidden";
            });
    
            if (sideBar.classList.contains("active") && lastHoveredDropdown) {
                lastHoveredDropdown.style.left = "0";
                lastHoveredDropdown.style.opacity = "1";
                lastHoveredDropdown.style.visibility = "visible";
            }
        }
    
        // Change dropdown on hover
        categoryItems.forEach(item => {
            item.addEventListener("mouseenter", function () {
                document.querySelectorAll(".Hdropdown").forEach(dropdown => {
                    dropdown.style.left = "-45%";
                    dropdown.style.opacity = "0";
                    dropdown.style.visibility = "hidden";
                });
    
                const dropdown = this.querySelector(".Hdropdown");
                if (dropdown) {
                    lastHoveredDropdown = dropdown; // Update last hovered dropdown
                    dropdown.style.left = "0";
                    dropdown.style.opacity = "1";
                    dropdown.style.visibility = "visible";
                }
            });
        });
           
            let isOpen = false;
            sidebar.style.setProperty("right", "-60px", "important");

            toggleBtn.style.right = "0";

            toggleBtn.addEventListener("click", () => {
              if (isOpen) {
                // Hide sidebar
                sidebar.style.setProperty("right", "-60px", "important");
                toggleBtn.style.right = "0";
                chevron.classList.remove("fa-chevron-right");
                chevron.classList.add("fa-chevron-left");
              } else {
                // Show sidebar
                sidebar.style.setProperty("right", "0", "important");
                toggleBtn.style.right = "60px";
                chevron.classList.remove("fa-chevron-left");
                chevron.classList.add("fa-chevron-right");
              }
          
              // Toggle the state
              isOpen = !isOpen;
            });
          });
          document.querySelectorAll('.dropdown-menu .dropdown-item[data-bs-toggle="collapse"]').forEach(item => {
            item.addEventListener('click', function (e) {
              e.stopPropagation(); 
            });

      

  });


     