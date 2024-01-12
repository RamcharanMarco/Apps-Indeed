import React from "react";
import "../../styles/user/portfolio.css";
import { useState } from "react";

const Portfolio = () => {
  const [edit, setEdit] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  return (
    <div className="portfolio">
      <div className="nav">
        {edit ? (
          <>
            <button>save</button>
            <button onClick={toggle}>cancel</button>
          </>
        ) : (
          <>
            <button onClick={toggle}>edit</button>
            <button>delete</button>
          </>
        )}
      </div>
      {edit ? 
      <div className="edit-portfolio">
        <input type="file" />
        <div className="personaldetails">
              <div>
                <label>name</label>
                <input type="text" />
              </div>
              <div>
                <label>surname</label>
                <input type="text" />
              </div>
              <div>
                <label>age</label>
                <input type="text" />
              </div>
              <div>
                <label>location</label>
                <input type="text" />
              </div>
                <div>
                <label>gender</label>
                <input type="text" />
              </div>
              <div>
                <label>occupation</label>
                <input type="text" />
              </div>

            </div>
            <div className="about">
              <div>
                <label>about me</label>
                <input type="text" />
              </div>
            </div>
            <div className="hobbiesdetails">
            <div>
            <label>hobbies</label>
            <ul>
              <li>hobby1</li>
              <li>hobby12</li>
            </ul>
            <input type="text" />
            <button>add hobby</button>
          </div>
          <div>
            <label>skills</label>
            <ul>
              <li>skill1</li>
              <li>skill2</li>
            </ul>
            <input type="text" />
            <button>add skill</button>
          </div>
          <div>
            <label>qualifications</label>
            <ul>
              <li>qual1</li>
              <li>qual2</li>
            </ul>
            <input type="text" />
            <button>add qualification</button>
          </div>
            </div>
            <div className="workandedu">
            <div>
            <label>work experience</label>
            <ul>
              <li>we1</li>
              <li>we2</li>
            </ul>
            <input type="text" />
            <button>add we</button>
          </div>
          <div>
            <label>education</label>
            <ul>
              <li>edu1</li>
              <li>edu2</li>
            </ul>
            <input type="text" />
            <button>add education</button>
          </div>
            </div>
      </div>
      : 
      <p>read portfolio page</p>
      }
    </div>
  );
};

export default Portfolio;
