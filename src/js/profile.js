import { getCurrentUser, state } from "./model.js";
import renderNav from "./views/Nav.js";

const body = document.querySelector("body");

renderNav(body);
const CurrentUser = getCurrentUser()
console.log(CurrentUser)

if(CurrentUser){
    //location.assign("../html/main.html");
    // return;
    //document.getElementById("UserFullName").
    // document.getElementById("UserFullName").innerText  = CurrentUser.name
    document.getElementById("abc@gmail.com").innerText  = CurrentUser.email
   // document.getElementById("number").innerText  = CurrentUser.
//    document.getElementById("username").innerText  = "Hello, "+ CurrentUser.name
   


}
console.log(CurrentUser.accountType)
