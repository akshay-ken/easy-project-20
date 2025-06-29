import { useRef, useState } from "react";

export function EmailForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const emailRef = useRef(null); //testing ref against useState

  function handleUpdateEmail(event) {
    setEnteredEmail(event.target.value);
  }
  function handleSubmitForm(event) {
    event.preventDefault();
    // const enteredEmail = emailRef.current.value;
    console.log(enteredEmail);
    setEnteredEmail("");
  }
  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col justify-center max-w-sm items-center"
      >
        <label htmlFor="email">Your mail ID</label>
        <input
          type="email"
          id="email"
          className="outline-2"
          value={enteredEmail}
          onChange={handleUpdateEmail}
        />
        <button className="bg-red-300">Save</button>
      </form>
    </>
  );
}
