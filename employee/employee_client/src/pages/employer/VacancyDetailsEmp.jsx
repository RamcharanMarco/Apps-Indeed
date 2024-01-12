import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import "../../styles/employer/vacancyDetailsEmp.css";
import { BACKEND } from "../../api/env";

function VacancyDetailsEmp() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { employer } = useAuthContext();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [noOfCandidates, setNoOfCandidates] = useState("");
  const [setup, setSetup] = useState("");
  const [jobType, setJobType] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [duties, setDuties] = useState([]);
  const [requirement, setRequirement] = useState('');
  const [duty, setDuty] = useState('');
  




  const getJob = useCallback(async () => {
    setLoading(true);
    setError(null);
    const response = await fetch(
      `${BACKEND}/api/employer/jobs/job/${id}`,
      {
        headers: {
          Authorization: `Bearer ${employer.token}`,
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(true);
    }
    if (response.ok) {
      setLoading(false);
      setJob(json);
      setTitle(json[0].title);
      setCompany(json[0].company);
      setLocation(json[0].location);
      setSalary(json[0].salary);
      setJobType(json[0].jobType);
      setSetup(json[0].setUp);
      setShortDescription(json[0].shortDescription);
      setNoOfCandidates(json[0].noOfCandidates);
      setRequirements(json[0].requirements);
      setDuties(json[0].duties);
    }
  }, [employer, id]);

  useEffect(() => {
    getJob();
  }, [getJob]);

  const deleteJob = async () => {
    const response = await fetch(
      `http://localhost:5000/api/employer/jobs/job/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${employer.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      navigate("/employer/dashboard/vacancies");
      console.log(json);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          height: "80vh",
          backgroundColor: "azure",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>...loading</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          height: "80vh",
          backgroundColor: "azure",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>...ERROR</h1>
      </div>
    );
  }

  const toggle = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const addDuty = (e) => {
    e.preventDefault();
    setDuties((prev) => [duty, ...prev])
    setDuty('')
  };

  const addRequirement = (e) => {
    e.preventDefault();
    setRequirements((prev) => [requirement, ...prev])
    setRequirement('')
  };

  return (
    <div className="vacancyDetailsEmp">
      <div className="nav">
        {edit ? (
          <>
            <button>save</button>
            <button onClick={toggle}>cancel</button>
          </>
        ) : (
          <>
            <button onClick={toggle}>edit</button>
            <button
              onClick={() => {
                deleteJob(job._id);
              }}
            >
              delete job
            </button>
          </>
        )}
      </div>
      <div>
        {job ? (
          <div>
            {job.map((job) => {
              return (
                <div className="container" key={job._id}>
                  <h2>JOB DETAILS</h2>
                  <div>
                    <p>TITLE</p>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      readOnly={!edit}
                    />
                  </div>
                  <div>
                    <p>COMPANY</p>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      readOnly={!edit}
                    />
                  </div>
                  <div>
                    <p>location</p>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      readOnly={!edit}
                    />
                  </div>
                  <div>
                    <p>SALARY</p>
                    <input
                      type="text"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      readOnly={!edit}
                    />
                  </div>
                  <div>
                    <p>JOBTYPE</p>
                    <input
                      type="text"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      readOnly={!edit}
                    />
                  </div>
                  <div>
                    <p>SETUP</p>
                    <input
                      type="text"
                      value={setup}
                      onChange={(e) => setSetup(e.target.value)}
                      readOnly={!edit}
                    />
                  </div>
                  <div>
                    <p>SHORT DESRCIPTION</p>
                    <input
                      type="text"
                      value={shortDescription}
                      onChange={(e) => setShortDescription(e.target.value)}
                      readOnly={!edit}
                    />
                  </div>
                  <div>
                    <p>DUTIES</p>
                    {
                      edit ? 
                      <>
                                            <ul>
                      {duties.map((duty) => {
                          return <li>{duty} delete</li>;
                        })}
                    </ul>
                    <input type="text" value={duty} onChange={(e) => setDuty(e.target.value)} placeholder="enter duty"/>
                    {
                      duty ? <button disabled={duty === ''} onClick={addDuty}>add dity</button> : null
                    }
                      </>
                      :
                      <ul>
                      {duties.map((duty) => {
                          return <li>{duty}</li>;
                        })}
                    </ul>
                    }
                  </div>
                  <div>
                    <p>REQUIREMENTS</p>
                    {
                      edit ? 
                      <>
                                            <ul>
                      {requirements.map((req) => {
                          return <li>{req} delete</li>;
                        })}
                    </ul>
                    <input type="text" value={requirement} onChange={(e) => setRequirement(e.target.value)} placeholder="enter requirmant"/>
                    {
                      requirement ? <button onClick={addRequirement}>add requirement</button> : null
                    }
                      </>
                      :
                      <ul>
                      {requirements.map((req) => {
                          return <li>{req}</li>;
                        })}
                    </ul>
                    }
                  </div>
                  <div>
                    <p>CANDIDATES</p>
                    <input
                      type="text"
                      value={noOfCandidates}
                      onChange={(e) => setNoOfCandidates(e.target.value)}
                      readOnly={!edit}
                    />
                  </div>
                  {edit ? null : (
                    <div>
                      <h1>applicants</h1>
                      <p>you have no applicants for this job</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default VacancyDetailsEmp;
