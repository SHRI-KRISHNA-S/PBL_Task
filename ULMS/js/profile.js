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

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const editBtn = document.getElementById("editBtn");

    let isEditMode = false;

    editBtn.addEventListener("click", ()=> {
        isEditMode =!isEditMode;

        nameInput.disabled = !isEditMode;
        emailInput.disabled = !isEditMode;

        editBtn.textContent = isEditMode ? "Save Profile" : "Edit Profile";

        if (!iseditMode){
            alert("Profile update successfully!");
        }
    });
});