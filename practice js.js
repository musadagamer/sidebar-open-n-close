const sidebarBtn = document.getElementById("sidebarBtn")
const sidebar = document.getElementById("sidebar")
const disablesidebarBtn = document.getElementById("disablesidebarBtn")

sidebarBtn.addEventListener("click", function() {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
} else {
    sidebar.style.left = "0px";

}});
disablesidebarBtn.addEventListener("click", function() {
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0px"
} else {
    sidebar.style.left = "-250px"
}});

