import classNames from "classnames/bind";
import React from "react";
import style from "./Commingsoon.module.scss";
import image from "~/assets/image";
import Button from "~/components/Button";

const cx = classNames.bind(style);
function Commingsoon() {
  return (
    <div className={cx("commingsoon")}>
      {/* <div className={cx("container")}> */}
      <div className={cx("inner")}>
        <div className={cx("content")}>
          <h1 className={cx("title")}>Comming Soon</h1>

          <p className={cx("script")}>
            Are you Ready to get something new from us. Then subscribe the news
            latter to get latest updates?
          </p>
          <div className={cx("action")}>
            <input
              type="email"
              placeholder="Enter your email"
              className={cx("input")}
            />

            <Button active className={cx("btn")}>
              Subscribe
            </Button>
          </div>
          <img className={cx("image_1")} src={image.commingsoon_image_1} />
          {<img className={cx("image_2")} src={image.commingsoon_image_2} />}
          <img className={cx("image_3")} src={image.commingsoon_image_3} />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Commingsoon;
