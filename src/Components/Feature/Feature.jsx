import { useEffect, useState } from "react";
import Title from "../Title/Title";
import Job from "../Job/Job";

const Feature = () => {
  const [Jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-24">
      <Title
        title="Featured Jobs"
        description="Explore thousands of job opportunities with all the information you need. Its your future"
      ></Title>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {Jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        onClick={() => setDataLength(Jobs.length)}
        className={`flex justify-center my-8 ${
          Jobs.length === dataLength && "hidden"
        }`}
      >
        <button className="btn bg-blue-800">Show all</button>
      </div>
    </div>
  );
};

export default Feature;
