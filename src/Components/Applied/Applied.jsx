import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStoreage";

const Applied = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [display, setDisplay] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const storedApplied = getStoredJobApplication();

    const jobsApplied = jobs.filter((job) => storedApplied.includes(job.id));
    setAppliedJobs(jobsApplied);
    setDisplay(jobsApplied);
  }, [jobs]);

  const handleDisplay = (filter) => {
    if (filter === "all") {
      setDisplay(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplay(remoteJobs);
    } else {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplay(onsiteJobs);
    }
  };
  return (
    <div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleDisplay("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleDisplay("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleDisplay("onsite")}>
            <a>On site</a>
          </li>
        </ul>
      </div>
      <h1>Applied Jobs {appliedJobs.length}</h1>
      <ul>
        {display.map((job) => (
          <li key={job.id}>
            {job.job_title} {job.company_name} {job.remote_or_onsite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applied;
