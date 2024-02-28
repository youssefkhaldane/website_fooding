// function changecolor() {
//     document.getElementById("icons").classList.toggle("red-heart");
// }

// Yasser code 
const icons = document.querySelectorAll(".icons");
// console.log(icons)
function handleFavori(index){
    // Get the reference to the element
    var icon = icons[index];

    // Toggle the "red-heart" class
    icon.classList.toggle("red-heart");

    // Set the base class "icons fa-solid fa-heart" if "red-heart" is not present, otherwise remove it
    if (icon.classList.contains("red-heart")) {
        console.log('im in')
        icon.className = "icons fa-solid fa-heart red-heart";
    }
    else{
        icon.className = "icons fa-regular fa-heart";
    }
}
