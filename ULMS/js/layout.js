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


// datalink

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const menuItem = document.querySelectorAll(".sidebar-container li");

    menuItem.forEach(item => {
        if(item.dataset.page === currentPage) {
            item.classList.add("active");
        }

        item.addEventListener("click", () => {
            window.location.href = item.dataset.page;
        });
    });
});