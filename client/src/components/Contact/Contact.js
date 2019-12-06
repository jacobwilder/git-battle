import React from "react";
import '../../index.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object on the JSX tag

class Contact extends React.Component {
  
  render() {
    return (
        <section className="section">
        <div>
            <h2 className="h2">Meet the Team</h2>
        </div>
        <div className="row">
            <div className="col-md-12">
            <img
                className="contact-img"            
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/JW_bifwpd.png"
                alt="Jake"
             style={{ width: "200px" }}
            />
            <p>
                <li><strong>Jacob Wilder</strong></li>
                <li>API functionality/Design</li>
            </p>
            <a href="https://github.com/jacobwilder" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/jacob-wilder-262b1410b/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
             </a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <img
                className="contact-img"
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/CM_dbwzk9.png"
                alt="Chris"
                style={{ width: "200px" }}
            />
            <p>
                <li><strong>Christopher Mangin</strong></li>
                <li>server-side functionality</li>
            </p>
            <a href="https://github.com/cmangin87" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
             <a
                href="https://www.linkedin.com/in/christopher-mangin-75a7021a/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <img
                className="contact-img"
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/KD_rtivys.png"
                alt="Kevin"
                style={{ width: "200px" }}
            />
                <p>
                    <li><strong>Kevin Darcy</strong></li>
                    <li>Database Manipulation</li>
                </p>
                <a href="https://github.com/k-darc" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
                </a>{" "}
                <a
                    href="https://www.linkedin.com/in/kevin-d-7b87a218b/"
                    className="btn btn-light"
                >
                <i class="fa fa-2x fa-linkedin"></i>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <img
                className="contact-img"
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575562807/image/manuel_usqrdy.png"
                alt="Manuel"
                style={{ width: "200px" }}
            />
            <p>
                <li><strong>Manuel Camilo</strong></li>
                <li>UX/UI Design</li>
            </p>
            <a href="https://github.com/mrcamilo" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/manuel-camilo/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <img
                className="contact-img"
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575427220/image/KB_drkhn9.jpg"
                alt="Kate"
                style={{ width: "200px" }}
            />
            <p>
                <li><strong>Kateryna Bondaruk</strong></li>
                <li>CSS Styling/ Contact Page</li>
            </p>
            <a href="https://github.com/Katebond06" className="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/kateryna-bondaruk-810093177/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            </div>
        </div>
        </section>
        );
    }
}

export default Contact;
