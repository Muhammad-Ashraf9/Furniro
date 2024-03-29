import { signOut } from "../auth/auth.js";
import { getCurrentUser } from "../model.js";
import { renderModal } from "./SigninModal.js";
import { renderCustomerModal } from "./customerSupportModal.js";

export default function renderNav(element) {
  let user = getCurrentUser();
  const Nav = `   
  <nav class="navbar navbar-expand-lg justify-content-between sticky-top bg-light" data-bs-theme="light">
  <div class="container-fluid">
    <div class="col-2">
      <a class="navbar-brand ms-3" href="NewMain.html">
        <img width="50px" src="../assets/logo.png" alt="logo"> Furniro
      </a>
    </div>
    <button class="m-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="col-4 collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-around ">
        <li class="nav-item mx-lg-3">
          <a class="nav-link" aria-current="page" href="NewMain.html">Home</a>
        </li>
        
        ${
          !user || user.accountType === "customer"
            ? `<li class="nav-item mx-3">
          <a class="nav-link" href="Products_tester.html">Products</a>
        </li> `
            : ""
        }
        <li class="nav-item mx-lg-3">
          <a class="nav-link" href="#about">About</a>
        </li>
       
        <li class="nav-item mx-2">
          <a class="nav-link" href="#contact">Contact us</a>
        </li>
        </li>
        ${
          user && user.accountType === "customer"
            ? `<li class="nav-item mx-2">
          <a class="nav-link" href="profile.html">profile</a>
                  </li>`
            : ""
        }
        ${
          user && user.accountType !== "customer"
            ? `<li class="nav-item mx-2">
          <a class="nav-link" href="${user.accountType}.html">Dashboard</a>
                  </li>`
            : ""
        }
        

      </ul>
    </div>

    <div style="margin" class=" ms-sm-5">
      <ul class=" navbar-nav mb-2 mb-lg-0 d-flex flex-row">
          ${
            !user
              ? `<li class="pe-3"><a class="nav-link" data-bs-toggle="modal" data-bs-target="#signIn" href="#">Sign in</a>`
              : `<li class="pe-3"><button class="nav-link">Sign out</button> `
          }
          ${
            user && user.accountType !== "admin"
              ? `<button id="customerSupport" data-bs-toggle="modal" data-bs-target="#support"><i class="fa-solid fa-headset"></i></button>`
              : ""
          }
        </li>
        ${
          !user || user.accountType === "customer"
            ? `<li class="nav-item pe-3 ">
          <a class="nav-link" href="cart_page.html"><i class="fa-solid fa-cart-plus"></i></a>
          </li>`
            : ""
        }
      </ul>
    </div>
  </div>
</nav>
`;
  element.insertAdjacentHTML("afterbegin", Nav);
  const nav = document.querySelector("nav");
  nav.addEventListener("click", (e) => {
    if (e.target.textContent !== "Sign out") return;
    signOut();
    location.assign("/src/html/NewMain.html");
    nav.remove();
    renderNav(element);
  });
  renderModal(element);
  renderCustomerModal(element);
}
