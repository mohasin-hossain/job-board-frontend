import { Helmet } from "react-helmet-async";
import CreateJobForm from "../../components/CreateJobForm";

const CreateJob = () => {
  return (
    <div>
      <Helmet>
        <title>Create Job | Job Board</title>
      </Helmet>
      <CreateJobForm />
    </div>
  );
};

export default CreateJob;
