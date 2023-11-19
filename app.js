// search data start

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
 
 
  const input = document.getElementById("myInput");
  

  function filterFunction() {
    const myInput = input;
    filter = myInput.value.toUpperCase();
   const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "block";
      }   
      else {
        a[i].style.display = "none";
      }
      if (myInput.value === 0) {
        a[i].style.display = "none";
    }
    
    }
  }
