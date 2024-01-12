import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/home/home.css";
import "../../styles/home/search.css";
import Job from "../../components/home/Job";
import "animate.css";
import {BACKEND} from '../../api/env'

function Home() {
  const [jobs, setJobs] = useState([]);
  const [jobsList, setJobsList] = useState([]);
  const [job, setJob] = useState("");
  const [val, setVal] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const [no, setNo] = useState(0);
  const [page, setPage] = useState(null);

  const displayJob = (id) => {
    const result = jobsList.find((x) => x._id === id);
    setJob(result);
  };

  const getJobs = async (page) => {
    setPage(page);
    try {
      console.log("fetching data");
      const res = await fetch(`${BACKEND}/api/jobs?page=${page}`);
      const json = await res.json();
      setJobs(json.jobs);
      setJobsList(json.jobs);
      setJob(json.jobs[0]);
      setNo(json.count);
      window.scrollTo(200,0)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
    setPage(1);
  }, []);

  const search = async (e) => {
    e.preventDefault();
    let query = val;
    let loc = location;
    if (val === "") {
      query = "all";
    }
    try {
      console.log("fetching data");
      const res = await fetch(
        `${BACKEND}/api/jobs/search/?query=${query}&location=${loc}`
      );
      const json = await res.json();
      setJobs(json.jobs);
      setJobsList(json.jobs);
      setJob(json[0]);
      console.log(json.jobs[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <nav className="nav2 animate__animated animate__backInRight">
        <div className="search animate__animated animate__backInUp">
          <input
            className="input"
            type="text"
            placeholder="type of job"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onFocus={() => setJobsList(jobs)}
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="all">SELECT LOCATION</option>
            <option value="all">NO LOCATION</option>
            <option value="kzn">KWA-ZULU NATAL</option>
            <option value="gauteng">GAUTENG</option>
            <option value="limpopo">LIMPOPO</option>
            <option value="mpumalanga">MPUMALANGA</option>
            <option value="eastern cape">EASTERN CAPE</option>
            <option value="western cape">WESTERN CAPE</option>
            <option value="northern cape">NORTHERN CAPE</option>
            <option value="free state">FREE STATE</option>
          </select>
          <button onClick={search} className="input">
            Search
          </button>
        </div>
        <p>create your cv and Apply to thousands of jobs from any device</p>
        <p>Employers: Post a job - Your next hire is here</p>
        <h3>{no} jobs available</h3>
      </nav>
      <main>
        <div className="jobslist animate__animated animate__backInRight">
          {jobsList.map((job) => {
            return (
              <div className="jobs" key={job._id}>
                <h1>{job.title}</h1>
                <h3>{job.company}</h3>
                <h3>{job.location}</h3>
                <div style={{ letterSpacing: "0.1rem" }} className="details">
                  <h3
                    style={{
                      backgroundColor: "dodgerblue",
                      margin: "5px",
                      marginLeft: "0px",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                    R {job.salary}
                  </h3>
                  <h3
                    style={{
                      backgroundColor: "dodgerblue",
                      margin: "5px",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                    {job.jobType}
                  </h3>
                </div>
                <div className="summary">
                  <p style={{ margin: "10px 0px", padding: "0px" }}>
                    {job.shortDescription}
                  </p>
                  <ul>
                    {job.duties.map((duty) => {
                      return <li key={duty}>{duty}</li>;
                    })}
                  </ul>
                </div>
                <button
                  id="viewButton"
                  onClick={() => {
                    displayJob(job._id);
                  }}
                  className="viewButton"
                >
                  view job
                </button>
                <button
                  id="viewButtonRedirect"
                  onClick={() =>
                    navigate(`/employee/dashboard/job/apply/${job._id}`)
                  }
                  className="viewButton"
                >
                  view job
                </button>
              </div>
            );
          })}
          {jobsList.length === 0 && <p>no jobs match search</p>}
          <div className="pag">
        {page === 1 ? (
          ""
        ) : (
          <button
            onClick={() => {
              getJobs(page - 1);
            }}
          >
            prev
          </button>
        )}
        <p>{page}</p>
        {no < page * 10 ? (
          ""
        ) : (
          <button
            onClick={() => {
              getJobs(page + 1);
            }}
          >
            next
          </button>
        )}
      </div>
        </div>
        <div
          id="jobView"
          className="jobView animate__animated animate__bounceInDown"
        >
          <Job job={job}></Job>
        </div>
      </main>

      <h3
        style={{
          backgroundColor: "azure",
          padding: "10px",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        for jobs in USA visit <a href="/">Indeed.com</a>
      </h3>
    </div>
  );
}

export default Home;
