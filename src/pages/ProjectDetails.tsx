import { useParams } from "react-router";

const ProjectDetails = () => {
  const params = useParams();
  return (
    <div className="text-2xl text-center mt-3">
      ProjectDetails: {params.pid}
    </div>
  );
};

export default ProjectDetails;
