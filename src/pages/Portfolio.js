import React from "react";
import Modal from "../components/Modal/Modal.js";
import { useState, useEffect } from "react";

/* Portfolio page */
export default function Portfolio() {
  const [repository, setRepository] = useState(
    []
  ); /* imports my repositories from github with fetch*/
  useEffect(() => {
    fetch("https://api.github.com/users/LindEmma/repos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRepository(data);
      });
  }, []);

  return (
    <>
      <h1>Portfolio</h1>
      <div className="portfolio">
        {/* sends the previously collected information (name, description and link) as props to the modal function to create a modal for each repository */}
        {repository.map((repo) => (
          <Modal
            titel={repo.name}
            p1={repo.description}
            link={repo.html_url}
          ></Modal>
        ))}
        <br></br>
      </div>
    </>
  );
}
