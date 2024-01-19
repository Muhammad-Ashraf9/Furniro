import handleSignIn from "../signin.js";

export function renderModal(element) {
  const modal = ` <div class="modal fade" id="signIn" aria-labelledby="signIn" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header d-flex flex-row justify-content-between">
                <span class="modal-title fs-5 text-black " id="signIn">Sign in</span>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form class="form">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="error-message">Error</div>
                    <div class="text-center ">
                      <button class="mt-3  btn btn-outline-dark w-100">Sign in</button>
                      <button class="my-2  btn btn-dark w-100">Register</button>
                    </div>
              </div>
            </form>
            </div>
          </div>
        </div>`;
  element.insertAdjacentHTML("beforeend", modal);
  const form = document.querySelector("form");
  handleSignIn(form);
}
