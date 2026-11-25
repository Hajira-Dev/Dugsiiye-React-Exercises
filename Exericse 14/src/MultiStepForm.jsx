import { useState, useReducer } from "react";

const startingValues = {
  page: 1, // Starting point
  givenName: "",
  familyName: "",
  mail: "",
  mobile: "",
};

function signupReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.name]: action.content, // update the matching field dynamically
      };
    case "NEXT_STEP":
      return { ...state, page: state.page + 1 };
    case "PREV_STEP":
      return { ...state, page: state.page - 1 };
    case "RESET_FORM":
      return startingValues;
    default:
      return state;
  }
}

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(signupReducer, startingValues);

  const onInput = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      name: e.target.name,
      content: e.target.value,
    });
  };

  const goForward = () => dispatch({ type: "NEXT_STEP" });
  const goBack = () => dispatch({ type: "PREV_STEP" });
  const clearAll = () => dispatch({ type: "RESET_FORM" });

  const onConfirm = () => {
    // Potentially send the data to an API
    alert("Form submitted successfully!");
    clearAll();
  };

  return (
    <div>
      <h2>Multi-Step Registration</h2>
      {state.page === 1 && (
        <div>
          <h3>Step 1: Profile</h3>
          <label>
            First Name:
            <input
              type="text"
              name="givenName"
              value={state.givenName}
              onChange={onInput}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="familyName"
              value={state.familyName}
              onChange={onInput}
            />
          </label>
          <br />
          <button onClick={goForward}>Next</button>
        </div>
      )}
      {state.page === 2 && (
        <div>
          <h3>Step 2: Contact</h3>
          <label>
            Email:
            <input
              type="email"
              name="mail"
              value={state.mail}
              onChange={onInput}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="mobile"
              value={state.mobile}
              onChange={onInput}
            />
          </label>
          <br />
          <button onClick={goBack}>Back</button>
          <button onClick={goForward}>Next</button>
        </div>
      )}
      {state.page === 3 && (
        <div>
          <h3>Step 3: Review</h3>
          <p>
            <strong>First Name:</strong> {state.givenName}
          </p>
          <p>
            <strong>Last Name:</strong> {state.familyName}
          </p>
          <p>
            <strong>Email:</strong> {state.mail}
          </p>
          <p>
            <strong>Phone:</strong> {state.mobile}
          </p>
          <button onClick={goBack}>Back</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      )}
      {state.page > 3 && (
        <div>
          <h3>Form Completed</h3>
          <button onClick={clearAll}>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
