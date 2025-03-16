import React from "react";
import style from "./Suggestions.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import image from "~/assets/image";

const cx = classNames.bind(style);
function Suggestions() {
  return (
    <section className={cx("suggestions")}>
      <div className={cx("inner")}>
        <h1 className={cx("title")}>Submit a request</h1>
        <form className={cx("form")}>
          <label className={cx("title_1")}> Your name</label>
          <input className={cx("input")} type="text" name="name" />
          <label className={cx("title_1")}> Your email address</label>
          <input className={cx("input")} type="email" name="name" />
          <label className={cx("title_1")}> Your phone number</label>
          <input className={cx("input")} type="number" name="temp" />
          <label className={cx("title_1")}>I'd like to...</label>

          <select className={cx("subjectt")} name="subject">
            <option className={cx("op")} value="collaborate">
              Give Feedback
            </option>
            <option className={cx("op")} value="collaborate">
              Give Suggestions
            </option>
            <option className={cx("op")} value="collaborate">
              Give Opinion
            </option>
            <option className={cx("op")} value="collaborate">
              Give Correction
            </option>
            <option className={cx("op")} value="collaborate">
              Give Informaiton
            </option>
          </select>

          <label className={cx("title_1")}>
            What is your feedback regarding?
          </label>

          <select className={cx("subjectt")} name="subject">
            <option className={cx("op")} value="collaborate">
              Other Feedback
            </option>
            <option className={cx("op")} value="collaborate">
              About Spot
            </option>
            <option className={cx("op")} value="collaborate">
              About Location
            </option>
            <option className={cx("op")} value="collaborate">
              About Correction
            </option>
            <option className={cx("op")} value="collaborate">
              About Informaiton
            </option>
          </select>

          <label className={cx("title_1")}>Submit your inquiry here</label>
          <textarea className={cx("texta")} name="message"></textarea>

          <label className={cx("title_1")}> Ad files or drop files here</label>
          <div className={cx("upload")}>
          <Button className={cx("file-upload")} name="upfile"></Button>
          <img className={cx("upload-icon")} src={image.icon_upload}/>
          </div>
          <label className={cx("title_2")}> 
            Or your can
          </label>

          <div className={cx("upload_input")}>
          <Button  className={cx("gg")}>
            Upload from Google Drive
          </Button>
          <img className={cx("upload")} src={image.upload_img_1}/>
          </div>
          <div className={cx("upload_input")}>
          <Button className={cx("gg")}>
            Upload from Dropbox
          </Button>
          <img className={cx("upload")} src={image.upload_img_2}/>
          </div>
          <div className={cx("upload_input")}>
          <Button className={cx("gg")}>
            Upload from Microsoft Onedrive
          </Button>
          <img className={cx("upload")} src={image.upload_img_3}/>
          </div>

          <Button active className={cx("btn")}> 
            Submit Your Request</Button>
        </form>
      </div>
    </section>
  );
}

export default Suggestions;
