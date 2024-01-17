import { isAuthenticated } from "../auth.js";
// import { state } from "../model.js";
//why !state.currentUser not working
const Nav = ` <nav class="navbar navbar-expand-lg  justify-content-between fixed-top bg-dark-subtle" data-bs-theme="dark"  >
            <a class="navbar-brand ms-3" href="#">Techno</a>
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> -->
            <div>
              <ul class=" navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
                <li class="nav-item mx-lg-3">
                  <a class="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item mx-lg-3">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div class="mx-3 ">
              <ul class="navbar-nav mb-2 mb-lg-0 d-flex flex-row ">
                <li class="nav-item " >
                ${
                  !isAuthenticated()
                    ? `<a class="nav-link" data-bs-toggle="modal" data-bs-target="#signIn"  href="#">Sign in</a>`
                    : `<button class="nav-link" >Sign out</button>`
                }
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link"href="#"><i class="fa-solid fa-cart-plus"></i></a>
                </li>
              </ul>           
            </div>            
          </nav>`;

export default function renderNav(element) {
  element.insertAdjacentHTML("afterbegin", Nav);
}
