/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/image3.gif";

const imageAltText = "gif of desktop and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Amazon clone",
    description:
      "An Amazon clone developed solely on the frontend emulates the visual presentation of the platform without incorporating the backend operations. This project serves as an opportunity for refining design proficiency, allowing practice in recreating the site's appearance and user interface",
    url: "https://mansi-chaudhary03.github.io/amazon_clone_page/",
  },
  {
    title: "My Resume Site",
    description:
      "A resume is a snapshot of my professional journey, highlighting my skills, work experience, and education. It's a key document in job applications, presenting my qualifications and achievements succinctly to potential employers.",
    url: "https://drive.google.com/file/d/1FpQ4q4yLkFjpLWEPwI7mZDb58xGlicUC/view?usp=drive_link",
  },
  {
    title: "My LinkedIn Site",
    description:
      "LinkedIn: Where I connect, showcase my journey, and unlock career doors",
    url: "https://www.linkedin.com/in/mansi-chaudhary-0b900025b/",
  },
  {
    title: "GitHub",
    description:
      "GitHub: My space to collaborate, code, and showcase my tech journey, fostering innovation and learning in the coding community.",
    url: "https://github.com/Mansi-chaudhary03",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
