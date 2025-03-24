document.addEventListener("DOMContentLoaded", function () {
        const topBar = document.getElementById("top-bar");
        const sliderLogo = document.getElementById("slider-logo");
        const video = document.getElementById("myVideo");
        const muteBtn = document.getElementById("mute-btn");
        const navIcon = document.getElementById("hamburger-menu");
        const sideBar = document.querySelector(".Hside-bar");
        const categoryItems = document.querySelectorAll(".Hcategory-item");
        const defaultDropdown = document.querySelector(".Hcategory-item:first-child .Hdropdown"); // "Men" dropdown
        let lastHoveredDropdown = defaultDropdown; // Store last hovered dropdown

        // Scroll Effect for Logo
        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                topBar.classList.add("scrolled");
                sliderLogo.style.opacity = "0";
            } else {
                topBar.classList.remove("scrolled");
                sliderLogo.style.opacity = "1";
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
    
        // Reset dropdown to last hovered one when mouse leaves sidebar
        sideBar.addEventListener("mouseleave", function () {
            resetDropdowns();
        });    
    });  
