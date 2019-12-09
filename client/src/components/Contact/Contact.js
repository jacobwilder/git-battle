import React from "react";
import '../../index.css';
import animate from '@jam3/gsap-promise';

class Contact extends React.Component {

    componentDidMount() {
        animate.from(this.header, 0.2, { y: -200, delay: 0.1 });
        animate.from(this.contain1, 0.2, {x: -2800, delay: 0.2});
        animate.from(this.contain2, 0.2, {x: -2800, delay: 0.4});
        animate.from(this.contain3, 0.2, {x: -2800, delay: 0.6});
        animate.from(this.contain4, 0.2, {x: -2800, delay: 0.8});
        animate.from(this.contain5, 0.2, {x: -2800, delay: 1.0});
    }
  
  render() {
    return (
        <section className="section">
        <div>
            <h2 className="h2"  ref={c => (this.header = c)}>Meet the Team</h2>
        </div>
        <div className="row contact-container" ref={c => (this.contain1 = c)}>
            <div className="col-md-12">
            <img
                className="contact-img"            
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/JW_bifwpd.png"
                alt="Jake"
             style={{ width: "200px" }}
            />
            <p className="contact-info">
                <li><strong>Jacob Wilder</strong></li>
                <li>API functionality/Design</li>
                <br></br>
            <a href="https://github.com/jacobwilder" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/jacob-wilder-262b1410b/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
             </a>
            </p>
            </div>
        </div>
        <div className="row contact-container" ref={c => (this.contain2 = c)}>
            <div className="col-md-12">
            <img
                className="contact-img"
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/CM_dbwzk9.png"
                alt="Chris"
                style={{ width: "200px" }}
            />
            <p className="contact-info">
                <li><strong>Christopher Mangin</strong></li>
                <li>server-side functionality</li>
                <br></br>
            <a href="https://github.com/cmangin87" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
             <a
                href="https://www.linkedin.com/in/christopher-mangin-75a7021a/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            </p>
            </div>
        </div>
        <div className="row contact-container" ref={c => (this.contain3 = c)}>
            <div className="col-md-12">
            <img
                className="contact-img"
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575506244/image/KD_rtivys.png"
                alt="Kevin"
                style={{ width: "200px" }}
            />
                <p className="contact-info">
                    <li><strong>Kevin Darcy</strong></li>
                    <li>Database Manipulation</li>
                    <br></br>
                <a href="https://github.com/k-darc" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
                </a>{" "}
                <a
                    href="https://www.linkedin.com/in/kevin-d-7b87a218b/"
                    className="btn btn-light"
                >
                <i class="fa fa-2x fa-linkedin"></i>
                </a>
                </p>
            </div>
        </div>
        <div className="row contact-container" ref={c => (this.contain4 = c)}>
            <div className="col-md-12">
            <img
                className="contact-img"
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575562807/image/manuel_usqrdy.png"
                alt="Manuel"
                style={{ width: "200px" }}
            />
            <p className="contact-info">
                <li><strong>Manuel Camilo</strong></li>
                <li>UX/UI Design</li>
                <br></br>
            <a href="https://github.com/mrcamilo" class="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/manuel-camilo/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            </p>
            </div>
        </div>
        <div className="row contact-container" ref={c => (this.contain5 = c)}>
            <div className="col-md-12">
            <img
                className="contact-img"
                src="https://res.cloudinary.com/dmer2gzhp/image/upload/v1575427220/image/KB_drkhn9.jpg"
                alt="Kate"
                style={{ width: "200px" }}
            />
            <p className="contact-info">
                <li><strong>Kateryna Bondaruk</strong></li>
                <li>CSS Styling/ Contact Page</li>
                <br></br>
            <a href="https://github.com/Katebond06" className="btn btn-light">
                <i class="fa fa-2x fa-github-square"></i>
            </a>{" "}
            <a
                href="https://www.linkedin.com/in/kateryna-bondaruk-810093177/"
                className="btn btn-light"
            >
                <i class="fa fa-2x fa-linkedin"></i>
            </a>
            </p>
            </div>
        </div>
        </section>
        );
    }
}

export default Contact;
