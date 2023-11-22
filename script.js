function toggleList(){
    var list = document.getElementById("list");
    list.classList.toggle("hidden");
}
function toggleForm() {
    var form = document.getElementById("myForm");
    form.classList.toggle("hidden");

    var heading = document.getElementById("toggleHeading");
    heading.textContent = form.classList.contains("hidden") ? "agende seu horario" : "agende seu horario";
}
