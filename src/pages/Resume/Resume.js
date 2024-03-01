import ResumeJson from "../../components/ResumeComponents/ResumeJson";
import "./Resume.css";

/* imports resume from ResumeJson.js*/
export default function Resume() {
  return (
    <div>
      <h1>CV</h1>
      <ResumeJson></ResumeJson>
    </div>
  );
}
