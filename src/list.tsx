import React from "react"
import { Link } from "react-router-dom";

function list() {

  const fakeData = {
    No: 1,
    title: "test",
    userName: "hyun",
    Date: new Date().toLocaleDateString(),
  };

  return (
    <div id="list">
      <div id="header">
        <h1>Hello World, Document Test Page</h1>
      </div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>User Name</td>
              <td>Date</td>
            </tr>
          </thead>

          <tbody id="post-list">
            <tr>
              {/* data binding 필요 */}
              <td>{fakeData.No}</td>
              <td>
                <Link to="/view">{fakeData.title}</Link>
              </td>
              <td>{fakeData.userName}</td>
              <td>{fakeData.Date}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="button-box">
        <Link to="/write"> 글 작성하기 </Link>
      </div>
    </div>
  );
}

export default list