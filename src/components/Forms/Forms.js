import React from "react";

const Forms = () => {
  return (
    <div className="m-5 ">
      <form>
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <h2 className="text-secondary fw-bold mb-4"> Get in Touch </h2>
        <div class="row mb-4">
          <div class="col">
            <div class="">
              <input 
                type="text"
                id="form3Example1"
                class="form-control rounded-pill"
                required
              />
              <label class="form-label" for="form3Example1">
                First name
              </label>
            </div>
          </div>
          <div class="col">
            <div class="">
              <input
                type="text"
                id="form3Example2"
                class="form-control rounded-pill"
                required
              />
              <label class="form-label" for="form3Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Email input --> */}
        <div class="mb-4">
          <input
            type="email"
            id="form3Example3"
            class="form-control rounded-pill"
            required
          />
          <label class="form-label" for="form3Example3">
            Email address
          </label>
        </div>

        {/* <!-- Message input --> */}
        <div class="mb-1">
          <textarea class="form-control rounded" id="form4Example3" rows="4"></textarea>
          <label class="form-label" for="form4Example3">
            Message
          </label>
        </div>

        {/* <!-- Checkbox --> */}
        <div class="form-check d-flex justify-content-center mb-2">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            id="form2Example33"
          />
          <label class="form-check-label" for="form2Example33">
            Subscribe to our newsletter
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary btn-rounded mb-4 ms-2">
          Send <i class="fa fa-solid fa-paper-plane"></i>
        </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
