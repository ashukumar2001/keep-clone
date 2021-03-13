import React from "react";

function TakeNoteInput({ data }) {
  const {
    querySelectorPlaceholder,
    querySelectorInput,
    placeholderText,
  } = data;
  return (
    <>
      <div className={querySelectorPlaceholder}>{placeholderText}</div>
      <div
        className={querySelectorInput}
        contentEditable="true"
        aria-multiline="true"
        role="textbox"
        tabIndex="0"
        spellCheck="true"
        aria-label={placeholderText}
        onInput={(e) => {
          if (!e.target.textContent) {
            document.querySelector(
              "." + querySelectorPlaceholder
            ).style.display = "block";
            return;
          }
          document.querySelector("." + querySelectorPlaceholder).style.display =
            "none";
        }}
        onBlur={(e) => {
          if (!e.target.textContent) {
            document.querySelector(
              "." + querySelectorPlaceholder
            ).style.display = "block";
          }
        }}
      ></div>
    </>
  );
}

export default TakeNoteInput;
