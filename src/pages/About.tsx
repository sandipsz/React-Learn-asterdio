import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <div>
      <h1>About</h1>
      <Button onClick={handleClick}>Go to Home</Button>
    </div>
  );
};

export default About;
