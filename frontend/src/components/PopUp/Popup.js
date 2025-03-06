import React, { useState } from "react";
import styles from "./Popup.scss";
import classNames from "classnames/bind";
import image from "~/assets/image";
import Button from "../Button";

const cx = classNames.bind(styles)
function Popup() {

    const [modal, setModal] = useState(true);
    const handleModal = () => {
        setModal(!modal)
    }
    return (
        <div>
            {modal && (
                <div className={cx("popup")} >
                    <div className={cx("background")}></div>
                    <div className={cx("container")}>
                        <div className={cx("inner")}>
                            <img className={cx("img")} src={image.popup_image} alt="Pop up" />
                            <div className={cx("content")}>
                                <div className={cx("title")}>
                                    Do you want 10% off your first trip?
                                </div>
                                <Button active className={cx("btn")}>Get My Offer</Button>
                            </div>
                            <Button className={cx("close")} onClick={handleModal}>X</Button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default Popup;