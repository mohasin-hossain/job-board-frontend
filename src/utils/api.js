import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

export const fetchJobs = async () => {
  const { data } = await api.get("/jobs");
  return data.data;
};

export const fetchJobById = async (id) => {
  const { data } = await api.get(`/jobs/${id}`);
  return data.data;
};

export const createJob = async (job) => {
  const { data } = await api.post("/jobs", job);
  return data.data;
};

export const fetchApplications = async (jobId) => {
  const { data } = await api.get(`/applications/${jobId}`);
  return data.data;
};

export const submitApplication = async (application) => {
  const { data } = await api.post("/applications", application);
  return data.data;
};
