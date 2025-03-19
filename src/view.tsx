import React from "react"
// import BackButton from "./backButton"

function view() {
  return (
    <div id="view">
      <div className="container">
        <div className="container-header">
          {/* <BackButton /> */}
          <div className="content-header">
            <h1>{}</h1>
            <span className="contents-date">
              {new Date().toLocaleDateString()}
            </span>
          </div>

          <div className="content">
            <div className="profile">
              <img src="/" />

              <span className="user-name">{}</span>
            </div>

            <div className="text-box">
              <p>{}</p>
            </div>
          </div>

          <div className="button-box">
            <button type="button">
              <span>수정하기</span>
            </button>
            <button type="button">
              <span>삭제하기</span>
            </button>
          </div>
        </div>

        <div className="contents" id="post-contents">
          text content
        </div>
      </div>
    </div>
  );
}

export default view