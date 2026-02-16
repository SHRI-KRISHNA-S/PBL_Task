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
});


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