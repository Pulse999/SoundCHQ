window.addEventListener('scroll', function() {
    // Calculate the scroll percentage
    let scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Calculate the new background size, increasing up to 200% (2x zoom)
    let newSize = 100 + scrollPercent * 1000; // Increase by up to 100%

    // Apply the background-size and background-position transformations
    document.querySelector('.hero').style.backgroundSize = `${newSize}% ${newSize}%`;
  });

// // Tilting divs
// window.addEventListener("scroll", function() {
//   const scrollPos = window.scrollY;
//   const screenWidth = window.innerWidth;
//   const topDivHeight = document.querySelector('.hero').offsetHeight; // Height of the hero section
//   const boxes = document.querySelectorAll('.box-img');
  
//   if (screenWidth >= 1000) {
//     boxes.forEach((box, index) => {
//       const boxTop = box.getBoundingClientRect().top + scrollPos;
//       const boxHeight = box.offsetHeight;

//       // Determine if the box is on the left or right side
//       const boxCenter = box.getBoundingClientRect().left + box.offsetWidth / 2;
//       const isLeft = boxCenter < screenWidth / 2;

//       // Only start tilting once the user scrolls past the hero section
//       if (scrollPos >= topDivHeight && scrollPos >= boxTop - window.innerHeight && scrollPos < boxTop + boxHeight) {
//         // Calculate tilt based on scroll position
//         const tiltValue = ((scrollPos - boxTop + window.innerHeight) / 50) * 1; // Change 5 to adjust tilt amount
//         box.style.transform = `rotate(${isLeft ? tiltValue : -tiltValue}deg)`;
//       } else {
//         // Reset tilt if scrolled past the box or above it
//         box.style.transform = 'rotate(0deg)';
//       }
//     });
//   } else {
//     // Reset all boxes if screen width is less than 1000px
//     boxes.forEach(box => {
//       box.style.transform = 'rotate(0deg)';
//     });
//   }
// });

// // Optional: Reset tilt when resizing window
// window.addEventListener("resize", function() {
//   const screenWidth = window.innerWidth;
//   const boxes = document.querySelectorAll('.box-img');

//   if (screenWidth < 1000) {
//     boxes.forEach(box => {
//       box.style.transform = 'rotate(0deg)';
//     });
//   }
// });
// //

// Thank you page when on-click submitt 

// Add an event listener to the form
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();
  
//   // Redirect to the "Thank You" page
//   window.location.href = "thankyou.html";
// });

