import classNames from "classnames/bind";
import styles from "./BlogContent.module.scss";
import { ca } from "date-fns/locale";
const cx = classNames.bind(styles);
const Img = ({ url, caption }) => {
    return (
        <div>
            <img src={url} className={cx("img")} />
            {caption && <p className={cx("caption")}>{caption}</p>}
        </div>
    );
};

const Quote = ({ quote, caption }) => {
    return (
        <div>
            <p>{quote}</p>
            {caption && <p className={cx("caption")}>{caption}</p>}
        </div>
    );
};

const List = ({ style, items }) => {
    const ListTag = style === "ordered" ? "ol" : "ul";
    return (
        <ListTag className={cx("component-list")}>
            {items.map((item, index) => {
                return (
                    <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                        className={cx("item")}
                    ></li>
                );
            })}
        </ListTag>
    );
};
function BlogContent({ block }) {
    let { type, data } = block;

    if (type === "paragraph") {
        return (
            <p
                dangerouslySetInnerHTML={{ __html: data.text }}
                className={cx("paragraph")}
            ></p>
        );
    }

    if (type === "header") {
        if (data.level === 1) {
            return <h1 dangerouslySetInnerHTML={{ __html: data.text }}></h1>;
        } else if (data.level === 2) {
            return <h2 dangerouslySetInnerHTML={{ __html: data.text }}></h2>;
        } else if (data.level === 3) {
            return <h3 dangerouslySetInnerHTML={{ __html: data.text }}></h3>;
        } else if (data.level === 4) {
            return <h4 dangerouslySetInnerHTML={{ __html: data.text }}></h4>;
        } else if (data.level === 5) {
            return <h5 dangerouslySetInnerHTML={{ __html: data.text }}></h5>;
        } else if (data.level === 6) {
            return <h6 dangerouslySetInnerHTML={{ __html: data.text }}></h6>;
        }
    }

    if (type === "image") {
        return <Img url={data.file.url} caption={data.caption} />;
    }

    if (type === "quote") {
        return <Quote quote={data.text} caption={data.caption} />;
    }

    if (type === "list") {
        return <List style={data.style} items={data.items} className={cx("list")}/>;
    }
}

export default BlogContent;
