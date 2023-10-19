    // JavaScript code for form validation
	// Prevent form from submitting
   let  myForm = document.getElementById("myForm")
   myForm.addEventListener("submit", function(e) {
    e.preventDefault();
  
      // Retrieve the input field value
      var input = document.getElementById("inputField").value;
      // Regular expression pattern for alphanumeric input
      let regex1 = /[A-Z]/;
      let regex2 = /\d/;
      // Check if the input value matches the pattern
      if(!regex1.test(input) === "false" && !regex2 === "false" ){

      // Valid input: display confirmation and submit the form
        window.alert("Input submitted!")
        myForm.submit()
      
      }else{
      // Invalid input: display error message 

        window.alert("Input must only include letters and numbers!")
      }   
    })