
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements =document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=> observer.observe(el));
const form = document.querySelector(".form-group-m");
const fileInput = document.querySelector(".file-input");
form.addEventListener("click", function() {
    fileInput.click();
  });
  
