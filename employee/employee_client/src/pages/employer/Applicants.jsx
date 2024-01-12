import "../../styles/employer/applicants.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Applicants = () => {
  const [applicants, setApplicants] = useState(true);

  return (
    <div className="applicants">
      {applicants ? (
        <div className="applist">
          <div>
            <h1>job title</h1>
            <Link>applicant profile</Link>
            <button>discard</button>
          </div>
          <div>
            <h1>job title</h1>
            <Link>applicant profile</Link>
            <button>discard</button>
          </div>
          <div>
            <h1>job title</h1>
            <Link>applicant profile</Link>
            <button>discard</button>
          </div>
          <div>
            <h1>job title</h1>
            <Link>applicant profile</Link>
            <button>discard</button>
          </div>
          <div>
            <h1>job title</h1>
            <Link>applicant profile</Link>
            <button>discard</button>
          </div>
          <div>
            <h1>job title</h1>
            <Link>applicant profile</Link>
            <button>discard</button>
          </div>
          <div>
            <h1>job title</h1>
            <Link>applicant profile</Link>
            <button>discard</button>
          </div>
          <div>
            <h1>job title</h1>
            <Link>applicant profile</Link>
            <button>discard</button>
          </div>
        </div>
      ) : (
        <p>no applicants now</p>
      )}
    </div>
  );
};

export default Applicants;
