import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  console.log(job);
  return (
    <div>
      <h1 className="text-5xl text-black text-center my-28">Job Details</h1>
      <div className="grid lg:grid-cols-4">
        <div className="col-span-3"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Details;
