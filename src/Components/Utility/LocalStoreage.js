const getStoredJobApplication = () => {
  const storedJobs = localStorage.getItem("job-applications");
  if (storedJobs) {
    return JSON.parse(storedJobs);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobs = getStoredJobApplication();
  const exists = storedJobs.find((jobId) => jobId === id);
  if (!exists) {
    storedJobs.push(id);
    localStorage.setItem("job-applications", JSON.stringify(storedJobs));
  }
};
export { saveJobApplication, getStoredJobApplication };
