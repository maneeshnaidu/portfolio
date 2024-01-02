// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting
  
//     // Get the form data
//     var formData = new FormData(this);
  
//     // Send the form data to the server
//     fetch("/send-email", {
//       method: "POST",
//       body: formData
//     })
//       .then(function(response) {
//         if (response.ok) {
//           // Handle successful form submission
//           response.text().then(function(result) {
//             alert(result);
//           });
//         } else {
//           // Handle form submission error
//           alert("Message sending failed.");
//         }
//       })
//       .catch(function(error) {
//         // Handle network or server error
//         alert("An error occurred. Please try again later.");
//       });
//   });
  