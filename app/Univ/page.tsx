import * as UnivPage from "../_features/Univ/index";

export default function Univ() {
    return (
        <>
            <div className="content">
                <UnivPage.UnivOutLook />
                <UnivPage.UnivLesson />
                <UnivPage.UnivClub />
            </div>
        </>
    )
}