import React from "react";
import { Link } from "react-router-dom";

export const SideBar = ({ userInfo }) => {
  // console.log(userInfo.role);
  return (
    <div className="sidebar bg-primary">
      <div className="top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
          alt="no-img"
        />
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title"> MAIN</p>
          <li>
            <Link to="/books" className="link">
              <i className="fa-solid fa-book"></i>
              <span>All books</span>
            </Link>{" "}
          </li>

          <li>
            <Link to="/mybooks" className="link">
              <i className="fa-solid fa-book-open-reader"></i>
              <span>My Books</span>
            </Link>
          </li>

          {userInfo?.role === "teacher" ? (
            <>
              <li>
                <Link to="/addbooks" className="link">
                  <i className="fa-solid fa-book"></i>
                  <span>Add Books</span>
                </Link>
              </li>
              <li>
                <Link to="/transaction" className="link">
                  <i className="fa-solid fa-left-right"></i>
                  <span>Transaction</span>
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <p className="title"> User</p>
          <li>
            <Link to="/" className="link">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
