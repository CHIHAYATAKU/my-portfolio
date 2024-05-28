import * as AboutPage from "../_features/About/index";

export default function About() {
    return (
        <>
            <div className="content">
                <AboutPage.AboutOutLook />
                <AboutPage.AboutCareer />
                <AboutPage.AboutStrengthAndWeakness />
                <AboutPage.AboutAchieve />
                <AboutPage.AboutSkills />
            </div>
        </>
    )
}