import { useState } from "react";
import PropTypes from "prop-types";

import "./NewCardForm.css";

const NewCardForm = ({ boardId, createNewCard }) => {
  const [message, setMessage] = useState("");
  const [invalidForm, setInvalidForm] = useState(true);

  const generateMessage = (event) => {
    setMessage(event.target.value);
    if (event.target.value.length > 0 && event.target.value.length <= 40) {
      setInvalidForm(false);
    } else {
      setInvalidForm(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      message: message,
      board_id: boardId,
      likes_count: 0,
    };
    createNewCard(data);
    setMessage("");
    setInvalidForm(true);
  };

  return (
    <section>
      <h2>Create a New Card</h2>

      <form className="new-card__form" onSubmit={handleSubmit}>
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          className={invalidForm ? "invalid-form-input" : "form-input"}
          name="message"
          value={message}
          onChange={generateMessage}
        />
        <small>Up to 40 characters</small>
        <p id="preview">Preview: {message}</p>
        {!invalidForm ? (
          <input type="Submit" className="submit-btn" />
        ) : (
          <input type="Submit" className="submit-btn-invalid" disabled />
        )}
      </form>
    </section>
  );
};

NewCardForm.propTypes = {
  boardId: PropTypes.number.isRequired,
  createNewCard: PropTypes.func.isRequired,
};

export default NewCardForm;
