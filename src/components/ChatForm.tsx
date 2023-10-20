import { useState } from "react";
import "../styles/ChatForm.scss";

const ChatForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formState.name === "" ||
      formState.message === "" ||
      formState.email === ""
    ) {
      setError("Please fill out all fields.");
      return;
    }
    setMessageSent(true);
  };

  return (
    <>
      {messageSent ? (
        <div className="messageSent chatForm">
          <h3>Thanks {formState.name}!</h3>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form className="chatForm" onSubmit={handleSubmit}>
          <div className="formHeader">
            <h2>
              Send us a message <i className="fa-solid fa-envelope" />
            </h2>
          </div>
          <div className="formInputs">
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              value={formState.name}
              placeholder="Name"
              title="Name"
              aria-label="Name"
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
            <textarea
              value={formState.message}
              placeholder="Message"
              title="Message"
              aria-label="Message"
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              title="Email"
              aria-label="Email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />

            <button type="submit" className="submitBtn">
              Send
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ChatForm;
