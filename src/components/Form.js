import React, { useState } from "react";

function Form() {
  // State variables for form input values, submitted data, and errors
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  // Event handlers for input changes
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Form submission handler
  function handleSubmit(event) {
    event.preventDefault();
    // Validation: Check if first name is provided
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }

  // Mapping submitted data to JSX elements for rendering
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Controlled input for first name */}
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        {/* Controlled input for last name */}
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render error messages */}
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}

      {/* Displaying list of submissions */}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;

