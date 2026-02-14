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

const dashboardData=[
    {title:"Total Courses",value: 6},
    {title:"Assignments Due",value:3},
    {title:"Attendance",value:"85%"},
    {title:"GPA", value:8.4}
];

const cardsContainer = document.getElementById("dashboardCards");

dashboardData.forEach(item => {
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.value}</p>
        `;

    cardsContainer.appendChild(card);
})