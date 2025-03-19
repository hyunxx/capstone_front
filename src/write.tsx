import React from "react";
import BackButton from "./backButton";

function write() {
  return (
    <div id="write">
      <div className="container">
        <div className="container-header">
          <BackButton />
        </div>
        <form id="post-content">
          <div className="contents">
            <div className="content-header">
              <div className="title">
                <label>
                  Enter the title
                  <input type="text" id="title" />
                </label>
              </div>

              <div>
                <label>
                  Enter the user name
                  <input type="text" id="user_name" />
                </label>

                <label>
                  Enter the password
                  <input type="text" id="passwd" />
                </label>
              </div>
            </div>

            <div className="content">
              <div className="text-box">
                <p>Enter the contents</p>
                <textarea name="" id="text-box"></textarea>
              </div>
            </div>
          </div>
          <div className="button-box">
            <button type="submit">
              <span>Upload</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default write