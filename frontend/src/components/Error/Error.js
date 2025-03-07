import React from "react";
import style from "./Error.module.scss"
import classNames from "classnames/bind";
import image from "~/assets/image";
import { Button } from "@mui/material";

const cx = classNames.bind(style)
function Error() {
    return <div className={cx("error")}>
        <div className={cx("container")}>
        <img className={cx("image")} src={image.error_image}></img>
        <h1>404 Page</h1>
        <desc className={cx("descript")  }>Sorry, the page you’re looking for doesn’t exist. If you think something is broken, report a porblem</desc>
        <Button className={cx("btn")}> 
            Go To Home
        </Button>
        </div>;
    </div>
    
}

export default Error;
