import { signOut } from "../auth.js";
import {
  getCurrentUser,
  getCustomers,
  getLastAddedProducts,
  getTotalOrdersRevenue,
  getSellers,
  state,
  getUserById,
  getProductById,
  getOrderTotal,
  getByPageNumber,
  deleteProductById,
  deleteUserById,
} from "../model.js";
import {
  generateCustomersTabelBody,
  generateCustomersTabelHead,
  renderCustomersPage,
} from "./customers.js";
import { renderOrdersPage } from "./orders.js";
import {
  generateProductsTableBody,
  generateProductsTableHeader,
  renderProductsPage,
} from "./products.js";
import {
  generateSellersTabelBody,
  generateSellersTabelHead,
  renderSellersPage,
} from "./sellers.js";

const main = document.querySelector("main");
const signoutBtn = document.querySelector(".signout");
const sidebar = document.querySelector(".sidebar");
const modal = document.querySelector("#modal");

let pageNumber = 1;
let itemsPerPage = 1;
// Graphs
// eslint-disable-next-line no-unused-vars
// const myChart = new Chart(chart, {
//   type: "line",
//   data: {
//     labels: [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ],
//     datasets: [
//       {
//         data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
//         lineTension: 0,
//         backgroundColor: "transparent",
//         borderColor: "#007bff",
//         borderWidth: 4,
//         pointBackgroundColor: "#007bff",
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         boxPadding: 3,
//       },
//     },
//   },
// });
export function generateTabel(header, body) {
  return `    <div class="table-responsive small">
            <table class="table table-striped table-sm">
              ${header}
              ${body}
            </table>
          </div>`;
}
export function getModalHTML(id) {
  return `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="deleteModalLabel">
        <div class="alert alert-danger" role="alert">Delete</div></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="alert alert-danger" role="alert">
      THIS WILL BE DELETED FOR EVER!!💀
      </div>
      </div>
      <div class="modal-footer d-flex justify-content-around">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger btn-delete"    data-bs-dismiss="modal" data-id="${id}">Delete</button>
      </div>
    </div>
  </div>
  `;
}
function getSummaryCardHTML(array, title) {
  return ` <div class="col-12 col-md-6 col-lg-3 m-auto">
              <div class="summary-card">
                <div class="d-flex justify-content-between">
                  <div>
                    <div class="summary-card__count">${array.length}</div>
                    <div class="summary-card__title">${title}</div>
                  </div>
                  <div class="summary-card__icon">
                    <i class="fa-solid fa-truck-fast"></i>
                  </div>
                </div>
              </div>
            </div>`;
}
function getTotalCardHTML(number, title) {
  return `<div class="col-12 col-md-6 col-lg-4 m-auto">
              <div class="total-card d-flex align-items-center">
                <div class="total-card__icon">
                  <i class="fa-solid fa-money-bill"></i>
                </div>
                <div class="d-flex flex-column">
                  <h3 class="total-card__amount">${number}$</h3>
                  <div class="total-card__title">${title}</div>
                </div>
              </div>
            </div>`;
}
function renderDashboard(container, modal) {
  container.innerHTML = "";
  container.insertAdjacentHTML("afterbegin", `<canvas id="myChart"></canvas>`);
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="row">${getTotalCardHTML(
      getTotalOrdersRevenue(),
      "Total Revenue"
    )}${getTotalCardHTML(state.products.length, "Total Products")}
      ${getTotalCardHTML(state.orders.length, "Total Orders")}
      </div>`
  );
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="row">${getSummaryCardHTML(
      state.orders,
      "orders"
    )}${getSummaryCardHTML(state.products, "products")}${getSummaryCardHTML(
      getCustomers(),
      "customers"
    )}${getSummaryCardHTML(getSellers(), "sellers")}</div>`
  );
  const createdChart = new Chart(document.querySelector("#myChart"), {
    type: "bar",
    data: {
      labels: ["Users", "Orders", "Products"],
      datasets: [
        {
          label: "Total",
          data: [
            state.users.length,
            state.orders.length,
            state.products.length,
          ],
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  container.insertAdjacentHTML(
    "beforeend",
    generateTabel(
      generateProductsTableHeader(),
      generateProductsTableBody(getLastAddedProducts(3))
    )
  );
  container.addEventListener("click", (e) => {
    const id = e.target.dataset?.id;
    if (!id) return;
    modal.innerHTML = getModalHTML(id);
  });
  modal.addEventListener("click", (e) => {
    if (!e.target.dataset.id) return;
    const id = +e.target.dataset.id;
    deleteProductById(id);
    renderDashboard(container, modal);
  });
}

//protecting admin dashboard
if (!getCurrentUser() || getCurrentUser().accountType !== "admin") {
  location.assign("../html/main.html");
}

sidebar.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    const activeLink = document.querySelector(".nav-link.active");
    activeLink.classList.remove("active");
    e.target.classList.add("active");
    main.innerHTML = "";
    switch (e.target.dataset.link) {
      case "dashboard":
        pageNumber = 1;
        renderDashboard(main, modal);
        break;
      case "products":
        pageNumber = 1;
        renderProductsPage(
          main,
          state.products,
          pageNumber,
          itemsPerPage,
          modal
        );
        break;
      case "orders":
        pageNumber = 1;
        renderOrdersPage(main, state.orders, pageNumber, itemsPerPage);
        break;
      case "customers":
        pageNumber = 1;
        renderCustomersPage(main, getCustomers(), pageNumber, itemsPerPage);
        break;
      case "sellers":
        pageNumber = 1;
        renderSellersPage(main, getSellers(), pageNumber, itemsPerPage, modal);
        break;
      default:
        break;
    }
  }
});
signoutBtn.addEventListener("click", () => {
  signOut();
  location.assign("../html/main.html");
});

/// render Dashboard by default
renderDashboard(main, modal);
