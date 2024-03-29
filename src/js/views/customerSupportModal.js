import { state, getCurrentUser, saveStateInLocalStorage } from "../model.js";
import { generateRandomId } from "../helper.js";
export function renderCustomerModal(element) {
  const modal = ` <div class="modal fade" id="support" aria-labelledby="support" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header d-flex flex-row justify-content-between">
                  <span class="modal-title fs-5 text-black " ><img width="50px" src="../assets/logo.png" alt="logo">Customer Support</span>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class=" ">
                    <span class="modal-dialog fs-6 text-black " >We would love to hear from you !</span>
                  </div>
                  <div class="mb-3">
                  <label for="message-text" class="col-form-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"id="send" >Send message</button>
                  </div>
              </form>
              </div>
            </div>
          </div>`;
  element.insertAdjacentHTML("beforeend", modal);
  document.getElementById("send").addEventListener("click", function () {
    const msg = document.getElementById("message-text").value.trim();
    const user = getCurrentUser();
    const MId = generateRandomId();
    const UID = user.id;
    const Email = user.email;
    const name = user.name;
    const newMsg = {
      mId: MId,
      uId: UID,
      name: name,
      email: Email,
      message: msg,
      date: Date.now(),
    };
    state.messages.push(newMsg);
    saveStateInLocalStorage();
    Swal.fire({
      title: "Thank you!",
      text: "Your message has been submitted successfully",
      icon: "success",
    }).then(() => {
      location.assign("../html/NewMain.html");
    });

  });
}
