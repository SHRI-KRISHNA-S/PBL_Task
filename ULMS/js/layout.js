document.addEventListener("DOMContentLoaded", () =>{
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", (e)=> {
        e.stopPropagation();
        sidebar.classList.toggle("active");
        
    });
     sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
    });
    document.addEventListener("click", () =>{
        sidebar.classList.remove("active");
    });

});