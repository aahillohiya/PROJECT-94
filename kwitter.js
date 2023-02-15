function addUser() {
    user_name = document.getElementById("User_Name").value;
    localStorage.setItem("USERNAME",user_name);
    window.location = "kwitter_room.html";
}