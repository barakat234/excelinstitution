const  form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allinput = form.querySelectorALL(".first input");


nextBtn.addEventListner("click", ()=>{
     allinput.forEach(input => {
        if(input.value != ""){
        form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
     })
})
backBtn.addEventListner("click", () => form.classList.remove('secActive'));