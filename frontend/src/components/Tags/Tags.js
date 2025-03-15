import classNames from "classnames/bind";
import { useContext } from "react";

import { EditorContext } from "~/pages/EditorPage/EditorPage";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Tags.module.scss";
const cx = classNames.bind(styles);

function Tags({ tag, tagIndex }) {
    let {
        blog,
        blog: { tags },
        setBlog,
    } = useContext(EditorContext);
    const addEditable = (e) => {
        e.target.setAttribute("contentEditable", true);
        e.target.focus();
    };
    const handleTagDelete = () => {
        tags = tags.filter((t) => t !== tag);
        setBlog({ ...blog, tags });
    };

    const handleTagEdit = (e) => {
        if (e.keyCode === 13 || e.keyCode === 188) {
            e.preventDefault();

            let currentTag = e.target.innerText;

            tags[tagIndex] = currentTag;

            setBlog({ ...blog, tags });

            e.target.setAttribute("contentEditable", false);
        }
    };
    return (
        <div className={cx("tags")}>
            <p
                className={cx("tag")}
                onClick={addEditable}
                onKeyDown={handleTagEdit}
            >
                {tag}
            </p>
            <FontAwesomeIcon
                className={cx("btn")}
                icon={faXmark}
                onClick={handleTagDelete}
            />
        </div>
    );
}

export default Tags;
