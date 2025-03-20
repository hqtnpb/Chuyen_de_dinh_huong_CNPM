import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";
const cx = classNames.bind(styles);

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className={cx("pagination")}>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        className={cx("page", { active: page === currentPage })}
                        onClick={() => {
                            setCurrentPage(page);
                        }}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
}

export default Pagination;
