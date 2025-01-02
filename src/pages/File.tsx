import { useParams } from "react-router";

const File = () => {
  const { "*": splat } = useParams();

  return <div>{splat}</div>;
};

export default File;
