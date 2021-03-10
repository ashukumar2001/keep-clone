import React from "react";
import { MdClose, MdUndo, MdRedo, MdContentCopy } from "react-icons/md";

function Main() {
  return (
    <main>
      <section className="take-note-container">
        <div className="input-container">
          <div className="note-title-placeholder">Title</div>
          <div
            className="note-title-input"
            contentEditable="true"
            aria-multiline="true"
            role="textbox"
            tabIndex="0"
            spellCheck="true"
            aria-label="Title"
            placeholder="Title"
            onInput={(e) => {
              if (!e.target.textContent) {
                document.querySelector(
                  ".note-title-placeholder"
                ).style.display = "block";
                return;
              }
              document.querySelector(".note-title-placeholder").style.display =
                "none";
            }}
            onBlur={(e) => {
              if (!e.target.textContent) {
                document.querySelector(
                  ".note-title-placeholder"
                ).style.display = "block";
              }
            }}
          ></div>
          <div className="note-body-placeholder">Take a note...</div>
          <div
            className="note-body-input"
            contentEditable="true"
            aria-multiline="true"
            role="textbox"
            tabIndex="0"
            spellCheck="true"
            aria-label="Take a note..."
            onInput={(e) => {
              if (!e.target.textContent) {
                document.querySelector(".note-body-placeholder").style.display =
                  "block";
                return;
              }
              document.querySelector(".note-body-placeholder").style.display =
                "none";
            }}
            onBlur={(e) => {
              if (!e.target.textContent) {
                document.querySelector(".note-body-placeholder").style.display =
                  "block";
              }
            }}
          ></div>
          <div className="note-control-btn-container">
            <button className="undo-btn btn">
              <MdUndo />
            </button>
            <button className="redo-btn btn">
              <MdRedo />
            </button>
            <button className="copy-btn btn">
              <MdContentCopy />
            </button>
            <button className="btn close-btn">Close</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;

const autoResize = (e) => {
  e.target.style.height = "auto";
  let maxHeight = 400;
  if (e.target.scrollHeight < maxHeight) {
    e.target.style.height = e.target.scrollHeight + "px";
  } else {
    e.target.style.height = maxHeight + "px";
    e.target.style.overflow = "auto";
  }
};
