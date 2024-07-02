import * as PrivatePage from "../_features/Private/index";

export default function Private() {
    return (
        <>
            <div className="content">
                <PrivatePage.PrivateOutLook />
                <PrivatePage.PrivateContents />
            </div>
        </>
    )
}