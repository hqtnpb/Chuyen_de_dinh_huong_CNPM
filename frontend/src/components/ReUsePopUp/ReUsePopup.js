import React from "react";
import classNames from "classnames/bind";
import Button from "../Button";
import styles from "./ReUsePopup.module.scss";


const cx = classNames.bind(styles);

function ReUsePopup({ isOpen, onClose, title, desc, form, children, imageSrc, buttonText, onButtonClick }) {
    if (!isOpen) return null;

    return (
        <div className={cx("popup")}>
            <div className={cx("background")}></div>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    {imageSrc && <img className={cx("img")} src={imageSrc} alt="Popup" />}
                    <div className={cx("content")}>
                        {title && <div className={cx("title")}>{title}</div>}
                        {children}
                        {buttonText && <Button active className={cx("btn")} onClick={onButtonClick}>{buttonText}</Button>}
                        {desc && <p className={cx("desc")}>{desc}</p>}
                    </div>
                    <div className={cx("form")}>
                        {form &&<input className={cx("input")} type="email" placeholder="Your email address" />}
                        <Button className={cx("close")} onClick={onClose}>X</Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ReUsePopup;
