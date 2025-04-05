import classNames from "classnames/bind";
import styles from "./CommentContainer.module.scss";

import { useEffect, useContext } from "react";
import { BlogContext } from "~/pages/BlogDetails/BlogDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import CommentField from "../CommentField";
import axios from "axios";
import NoDataMessage from "../NoData";
import CommentCard from "../CommentCard";
import Button from "../Button";
const cx = classNames.bind(styles);

export const fetchComments = async ({
    skip = 0,
    blog_id,
    setParentCommentCountFunc,
    comment_array = null,
}) => {
    let res;
    await axios
        .post(
            process.env.REACT_APP_SERVER_DOMAIN + "/comment/get-blog-comments",
            { blog_id, skip }
        )
        .then(({ data }) => {
            data.map((comment) => {
                comment.childrenLevel = 0;
            });

            setParentCommentCountFunc((preVal) => preVal + data.length);

            if (comment_array === null) {
                res = { results: data };
            } else {
                res = { results: [...comment_array, ...data] };
            }
        });

    return res;
};

function CommentContainer() {
    let {
        blog,
        blog: {
            _id,
            title,
            comments: { results: commentsArr },
            activity: { total_parent_comments },
        },
        commentsWrapper,
        setCommentsWrapper,
        totalParentCommentsLoaded,
        setTotalParentCommentsLoaded,
        setBlog,
    } = useContext(BlogContext);

    const loadMoreComments = async () => {
        let newCommentsArr = await fetchComments({
            skip: totalParentCommentsLoaded,
            blog_id: _id,
            setParentCommentCountFunc: setTotalParentCommentsLoaded,
            comment_array: commentsArr,
        });
        setBlog({
            ...blog,
            comments: newCommentsArr,
        });
    };
    return (
        <div className="comment-wrapper">
            {/* Comment Wrapper */}
            {commentsWrapper && (
                <div
                    className={cx("overlay")}
                    onClick={() => setCommentsWrapper(false)}
                ></div>
            )}
            
            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                    x: commentsWrapper ? "0%" : "100%",
                    opacity: commentsWrapper ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className={cx("comment-container")}
            >
                {/* Nút đóng */}
                <button
                    onClick={() => setCommentsWrapper(false)}
                    className={cx("close-button")}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className={cx("comment-title")}>
                    <h2>Comments</h2>
                    <p>{title}</p>
                </div>

                {/* Comment field */}
                <CommentField action={"Comment"}></CommentField>

                {commentsArr && commentsArr.length ? (
                    <section className={cx("comment-list")}>
                        {commentsArr.map((comment, index) => {
                            return (
                                <CommentCard
                                    key={index}
                                    leftVal={comment.childrenLevel * 4}
                                    commentData={comment}
                                    index={index}
                                ></CommentCard>
                            );
                        })}
                    </section>
                ) : (
                    <NoDataMessage message="No Comments"></NoDataMessage>
                )}

                {total_parent_comments > totalParentCommentsLoaded ? (
                    <Button
                        text
                        className={cx("btn")}
                        onClick={loadMoreComments}
                    >
                        Load More
                    </Button>
                ) : (
                    ""
                )}
            </motion.div>
        </div>
    );
}

export default CommentContainer;
