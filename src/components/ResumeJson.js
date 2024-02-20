import React from "react";
import resumeData from "./Json.json";

const ResumeJson = () => {
  return (
    <article class="CV-content">
      <aside class="cv-aside">
        <img
          src="images/IMG_20200512_193617_373.jpg"
          alt="Bild på mig framför tegelvägg"
        />
        <h3>Sammanfattning</h3>
        <p>Jag är en driven programmeringsstudent med god analytisk förmåga</p>
        <h3>Kompetenser</h3>
      </aside>

      <div className="work-education">
        <h1>Arbetslivserfarenhet</h1>
        {resumeData.Arbetslivserfarenhet.map((ae) => (
          <div key={ae.id}>
            <ul className="work-experience">
              <li className="date">{ae.datum}</li>
              <br />
              <li>
                {ae.företag}
                <ul className="work-education-description">
                  <li>{ae.detaljer}</li>
                </ul>
              </li>
              <br />
            </ul>
          </div>
        ))}
        <h1>Utbildning</h1>
        {resumeData.Utbildning.map((u) => (
          <div key={u.id}>
            <ul className="education">
              <li className="date"> {u.datum}</li> <br />
              <li>
                {u.skola}
                <ul className="work-education-description">
                  <li>{u.utbildning}</li>
                </ul>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
};
export default ResumeJson;
