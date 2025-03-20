import classNames from "classnames/bind";
import styles from "./LoadMoreButton.module.scss";
import Button from "../Button/Button";
const cx = classNames.bind(styles);

function LoadMoreButton({ state, fetchDataFunc }) {
    if (state !== null && state.totalDocs > state.results.length) {
        return (
            <Button
                className={cx("load-more")}
                onClick={() => {
                    fetchDataFunc({ page: state.page + 1 });
                }}
            >
                Load More
            </Button>
        );
    }
}

export default LoadMoreButton;
