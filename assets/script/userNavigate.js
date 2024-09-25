document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("booking_form");
  const paymentForm = document.getElementById("payment_form");
  const errorForm = document.getElementById("error_form");

  const tab1 = document.getElementById("tab1");
  const tab2 = document.getElementById("tab2");
  const tab3 = document.getElementById("tab3");
  const formContainer = document.querySelector(".form_container");

  // Function to set the form container height dynamically
  function adjustContainerHeight() {
    let activeForm;
    if (tab1.checked) {
      activeForm = bookingForm;
    } else if (tab2.checked) {
      activeForm = paymentForm;
    } else if (tab3.checked) {
      activeForm = errorForm;
    }
    formContainer.style.height =
      activeForm.contentWindow.document.body.scrollHeight + "px";
  }

  // Function to handle tab switch by adjusting z-index
  function handleTabSwitch() {
    if (tab1.checked) {
      bookingForm.style.zIndex = "3"; // Bring booking form to the front
      paymentForm.style.zIndex = "2"; // Send payment form to the back
      errorForm.style.zIndex = "1"; // Send error form to the back
    } else if (tab2.checked) {
      bookingForm.style.zIndex = "1"; // Send booking form to the back
      paymentForm.style.zIndex = "3"; // Bring payment form to the front
      errorForm.style.zIndex = "2"; // Send error form to the back
    } else if (tab3.checked) {
      bookingForm.style.zIndex = "1"; // Send booking form to the back
      paymentForm.style.zIndex = "2"; // Send payment form to the back
      errorForm.style.zIndex = "3"; // Bring error form to the front
    }
    // Adjust the container height after switching
    adjustContainerHeight();
  }

  // Add event listeners to the radio buttons
  tab1.addEventListener("change", handleTabSwitch);
  tab2.addEventListener("change", handleTabSwitch);
  tab3.addEventListener("change", handleTabSwitch);

  // Initial state on page load
  handleTabSwitch();

  // Adjust container height whenever an iframe's content is loaded
  bookingForm.addEventListener("load", adjustContainerHeight);
  paymentForm.addEventListener("load", adjustContainerHeight);
  errorForm.addEventListener("load", adjustContainerHeight);
});
