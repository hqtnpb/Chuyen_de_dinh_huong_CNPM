import classNames from "classnames/bind";
import styles from "./NoData.module.scss";
const cx = classNames.bind(styles);
function NoDataMessage({ message }) {
    return (
        <div className={cx("no-data")}>
            <p className={cx("message")}>{message}</p>
        </div>
    );
}

export default NoDataMessage;
