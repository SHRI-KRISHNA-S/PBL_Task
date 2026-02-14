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

document.addEventListener("DOMContentLoaded", ()=> {
    const courses=[
        { name : "JavaScript Basics", status:"Active"},
        { name : "HTML & CSS", status:"Completed"},
        { name : "React Introduction", status: "Active"}
    ];

    const courseList = document.getElementById("courseList");

    courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";

        const title = document.createElement("h3");
        title.textContent = course.name;

        const status = document.createElement("span");
        status.textContent = course.status;
        status.className="status";

        (course.status === "Active") ? status.classList.add("active") : status.classList.add("completed");

        card.appendChild(title);
        card.appendChild(status);
        courseList.appendChild(card);
    });
});