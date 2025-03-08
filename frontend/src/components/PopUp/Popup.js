import React, { useState } from "react";
import styles from "./Popup.module.scss";
import classNames from "classnames/bind";
import image from "~/assets/image";
import ReUsePopup from "~/components/ReUsePopUp/ReUsePopup";
const cx = classNames.bind(styles)
function Popup() {

    const [isPopupOpen, setIsPopupOpen] = useState(true);

    return (

        <div className={cx("modal")}>
            <ReUsePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                title={"Do you want 10% off your first trip?"}
                imageSrc={image.popup_image}
                buttonText={"Get My Offer"}
                onButtonClick={() => alert("Offer claimed!")}
            >
            </ReUsePopup>
        </div>

    )
}

export default Popup;