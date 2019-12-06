import React from "react";

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
            <div className="col-md">
            <img
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/JW_bifwpd.png"
                alt="Jake"
             style={{ width: "200px" }}
            />
            </div>
            <div className="col-md">
            <a href="https://github.com/jacobwilder" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/jacob-wilder-262b1410b/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
             </a>
            <p>
                “There are only two ways to live your life. One is as though nothing
                is a miracle. The other is as though everything is a miracle.” ―
                Albert Einstein
             </p>
            </div>

            <div className="col-md">
            <img
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/CM_dbwzk9.png"
                alt="Chris"
                style={{ width: "200px" }}
            />
            </div>

            <div className="col-md">
            <a href="https://github.com/cmangin87" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
             <a
                href="https://www.linkedin.com/in/christopher-mangin-75a7021a/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            <p>
                “Life isn't about finding yourself. Life is about creating
                yourself.” ― George Bernard Shaw
            </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md">
            <img
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/KD_rtivys.png"
                alt="Kevin"
                style={{ width: "200px" }}
            />
            </div>
            <div className="col-md">
                <a href="https://github.com/k-darc" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
                </a>{" "}
                <a
                    href="https://www.linkedin.com/in/kevin-d-7b87a218b/"
                    className="btn btn-light"
                >
                <i class="fa fa-2x fa-linkedin"></i>
                </a>
                <p>
                    “Just when you think it can't get any worse, it can. And just when
                    you think it can't get any better, it can.” ― Nicholas Sparks, At
                    First Sight
                </p>
            </div>

            <div className="col-md">
            <img
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575562807/image/manuel_usqrdy.png"
                alt="Manuel"
                style={{ width: "200px" }}
            />
            </div>
            <div className="col-md">
            <a href="https://github.com/mrcamilo" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/manuel-camilo/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            <p>
                “To live is the rarest thing in the world. Most people exist, that
                is all.” ― Oscar Wilde
            </p>
            </div>

            <div className="col-md">
            <img
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575427220/image/KB_drkhn9.jpg"
                alt="Kate"
                style={{ width: "200px" }}
            />
            </div>
            <div className="col-md">
            <a href="https://github.com/Katebond06" className="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/kateryna-bondaruk-810093177/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            <p>
                “You only live once, but if you do it right, once is enough.” ― Mae
                West
            </p>
            </div>
        </div>
        </section>
        );
    }
}

export default Contact;
