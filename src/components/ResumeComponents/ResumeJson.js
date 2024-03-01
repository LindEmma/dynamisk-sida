import React from "react";
import resumeData from "./Json.json";
import resumeImg from "./Picture/resumebild.jpg";

const ResumeJson = () => {
  return (
    <article class="CV-content">
      <aside class="cv-aside">
        <img
          src={resumeImg}
          alt="Bild på mig framför tegelvägg"
        />
        <h3>Sammanfattning</h3>
        <p>Jag är en driven programmeringsstudent med god analytisk förmåga</p>
        <h3>Kompetenser</h3>
        <p>C# & .NET</p>
        <p>SQL och databaser</p>
        <p>Webbutveckling</p>
        <p>Agila metoder</p>
        <p>B-körkort</p>
        <h3>Kontakt</h3>
        <p>Adress 1, ort</p>
        <p>070-1234567</p>
        <p>min-email@gmail.com</p>
        <h3>Referenser</h3>
        <p>Lämnas vid intresse</p>
        <h3>Språk</h3>
        <p>Svenska - modersmål</p>
        <p>Engelska - flytande i tal och skrift</p>
      </aside>

      <div className="work-education">
        <h1 className="cv-list-title">Arbetslivserfarenhet</h1>

        {/* maps thrugh Json.json file to collect and showcase the resume */}
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
        <h1 className="cv-list-title">Utbildning</h1>
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
