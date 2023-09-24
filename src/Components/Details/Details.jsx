import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle, AiOutlineMail } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../Utility/LocalStoreage";

const Details = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleToast = () => {
    toast.success("You have applied successfully");
    saveJobApplication(parseInt(id));
  };
  return (
    <div className="mb-5">
      <h1 className="text-5xl text-black text-center my-28">Job Details</h1>
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="col-span-3 space-y-6">
          <h1>
            <span className="font-bold">Job Description:</span>
            {job_description}
          </h1>
          <h1>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job_responsibility}
          </h1>
          <h1>
            <span className="font-bold">Educational Requirement:</span>{" "}
            <p>{educational_requirements}</p>
          </h1>
          <h1>
            <span className="font-bold">Experience:</span> <p>{experiences}</p>
          </h1>
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-xl">Job Details</h1>
          <div className="space-y-2">
            <h1 className="flex gap-2">
              <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
              <span className="font-bold">Salary</span> {salary}
            </h1>
            <h1 className="flex gap-2">
              <IoBagHandleOutline className="text-2xl"></IoBagHandleOutline>
              <span className="font-bold">Job Title:</span> {job_title}
            </h1>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-xl">Contact Information</h1>
            <div className="space-y-2">
              <h1 className="flex gap-2">
                <BsTelephone className="text-xl"></BsTelephone>
                <span className="font-bold">Phone:</span>{" "}
                {contact_information.phone}
              </h1>
              <h1 className="flex gap-2">
                <AiOutlineMail className="text-2xl"></AiOutlineMail>
                <span className="font-bold">Email:</span>{" "}
                {contact_information.email}
              </h1>
              <h1 className="flex gap-2">
                <CiLocationOn className="text-2xl"></CiLocationOn>
                <span className="font-bold">Address:</span>{" "}
                {contact_information.address}
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleToast}
              className="btn bg-blue-800 border-none"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Details;
