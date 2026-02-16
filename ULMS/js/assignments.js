document.addEventListener("DOMContentLoaded", () => {
    const assignments=[
        {title: "JS Assignment", status: "Pending"},
        {title: "CSS Project", status:"Submitted"},
        {title: "HTML Quiz", status:"Late"}
    ];

    const list = document.getElementById("assignmentList");

    assignments.forEach((item,index) => {
        const card = document.createElement("div");
        card.className = "assignment-card"

        const title = document.createElement("h3");
        title.textContent = item.title;

        const status = document.createElement("p");
        status.textContent = item.status;
        status.className = `status ${item.status.toLowerCase()}`;

        const button = document.createElement("button");
        button.textContent = "Submit Assignment";

        if (item.status !== "Pending") {
            button.disabled = true ;
        }

        button.addEventListener("click", () => {
            item.status = "Submitted";
            status.textContent = "Submitted";
            status.className = "status submitted";
            button.disabled = true;
            alert("Assignment submitted successfully!");
        });

        card.append(title,status,button);
        list.appendChild(card);
    });
});