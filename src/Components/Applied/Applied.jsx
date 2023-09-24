import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStoreage";
import { list } from "postcss";

const Applied = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const storedApplied = getStoredJobApplication();

    const jobsApplied = jobs.filter((job) => storedApplied.includes(job.id));
    setAppliedJobs(jobsApplied);
  }, []);
  return (
    <div>
      <h1>Applied Jobs {appliedJobs.length}</h1>
      <ul>
        {appliedJobs.map((job) => (
          <li key={job.id}>
            {job.job_title} {job.company_name} {job.remote_or_onsite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applied;
