import "./Resume.scss";

const Resume = () => {
    return (
        <section className="resume">
            <div className="resume__header resume-division">
                <h3>Resume</h3>
            </div>

            <div className="resume__intro resume-division">
                <p>
                    Its a resume
                </p>
            </div>

            <div className="resume__items resume-division">
                <h3>resume</h3>
                <h4 className="resume__item">Feature Item 1</h4>
                <h4 className="resume__item">Feature Item 2</h4>
            </div>
        </section>
    );
};

export default Resume;