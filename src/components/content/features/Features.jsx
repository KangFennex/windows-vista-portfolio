import "./Features.scss";

const Features = () => {
    return (
        <section className="features">
            <div className="features__header features-division">
                <h3>About this project</h3>
            </div>

            <div className="features__intro features-division">
                <p>
                    This project began with a awe at experienced developers portfolios recreating the Windows ecosystem. I began with the taskbar, then the desktop, and some apps. As the project grew, I knew that my approach had to fundamentally change. Windows Vista.

                    While I already knew and applied the separation of concerns to previous projects, I had to stop and think deeply about how to divide the projects not only into much smaller components, but separation of every features and functionalities. Each window thus had to be separated from the components to add the animations, the draggable functionalities, and the window content. To this, I had to add safeguards. It went beyond simply having a window component with children components. Each became a wrapper to maximize the reusability of the components.

                    I stopped and re-thought the entire project from the ground-up. It was a tremendous learning experience. The work of Dustin Brett.
                </p>
            </div>

            <div className="features__items features-division">
                <h3>Features</h3>
                <h4 className="features__item">Feature Item 1</h4>
                <h4 className="features__item">Feature Item 2</h4>
            </div>

            <div className="challenges__items features-division">
                <h3>Features</h3>
                <h4 className="challenges__item">React Draggable - whats the category?</h4>
                <h4 className="challenges__item">Backend</h4>
                <h4 className="challenges__item">API</h4>
                <h4 className="challenges__item">Responsiveness across multi-screen</h4>
                <h4 className="challenges__item">Performance</h4>
                <h4 className="challenges__item">Testing</h4>
                <h4 className="challenges__item">Deployment</h4>
            </div>
        </section>
    );
};

export default Features;