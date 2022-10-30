import React from "react";
import { Controller, useForm } from "react-hook-form";
// import "./Forms.css";
import Select from "react-select";

const Forms = () => {
  return (
    <div className="m-5 ">
      <form>
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <h2 className="text-secondary fw-bold mb-4"> Get in Touch </h2>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form3Example1"
                class="form-control"
                required
              />
              <label class="form-label" for="form3Example1">
                First name
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form3Example2"
                class="form-control"
                required
              />
              <label class="form-label" for="form3Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form3Example3"
            class="form-control"
            required
          />
          <label class="form-label" for="form3Example3">
            Email address
          </label>
        </div>

        {/* <!-- Message input --> */}
        <div class="form-outline mb-1">
          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
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
        <button type="submit" class="btn btn-primary btn-rounded mb-4">
          Send <i class="fa fa-solid fa-paper-plane"></i>
        </button>

        {/* <!-- Register buttons --> */}

        <div class="text-center">
          <p>or connect with:</p>
          {/* <!-- Google --> */}
          <a
            class="btn text-white mx-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>
          {/* <!-- Facebook --> */}
          <a
            class="btn text-white mx-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i class="fa fa-brands fa-facebook"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            class="btn text-white mx-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            class="btn text-white mx-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Forms;
