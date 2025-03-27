import classNames from "classnames/bind";
import { useContext, useState } from "react";

import styles from "./CommentField.module.scss";
import Button from "../Button";
import { UserContext } from "~/App";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BlogContext } from "~/pages/BlogDetails/BlogDetails";
import { set } from "date-fns";
const cx = classNames.bind(styles);

function CommentField({
    action,
    index = undefined,
    replyingTo = undefined,
    setIsReplying,
}) {
    let {
        blog,
        blog: {
            _id,
            author: { _id: blog_author },
            comments,
            comments: { results: commentsArr },

            activity,
            activity: { total_comments, total_parent_comments },
        },
        setBlog,
        setTotalParentCommentsLoaded,
    } = useContext(BlogContext);

    let {
        userAuth: { accessToken, username, profile_img },
    } = useContext(UserContext);

    let [comment, setComment] = useState("");

    const handleComment = () => {
        if (!accessToken) {
            return toast.error("You need to login to comment");
        }
        if (!comment.length) {
            return toast.error("Comment can not be empty");
        }
        //make request to add comment
        axios
            .post(
                process.env.REACT_APP_SERVER_DOMAIN + "/comment/add-comment",
                { _id, blog_author, comment, replying_to: replyingTo },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then(({ data }) => {
                setComment("");

                data.commented_by = {
                    personal_info: { username, profile_img },
                };

                let newCommentArr;

                if (replyingTo) {
                    commentsArr[index].children.push(data._id);

                    data.childrenLevel = commentsArr[index].childrenLevel + 1;
                    data.parentIndex = index;

                    commentsArr[index].isReplyLoaded = true;

                    commentsArr.splice(index + 1, 0, data);

                    newCommentArr = commentsArr;

                    setIsReplying(false);
                } else {
                    data.childrenLevel = 0;

                    newCommentArr = [data, ...commentsArr];
                }

                let parentCommentIncrementVal = replyingTo ? 0 : 1;

                setBlog({
                    ...blog,
                    comments: { ...comments, results: newCommentArr },
                    activity: {
                        ...activity,
                        total_comments: total_comments + 1,
                        total_parent_comments:
                            total_parent_comments + parentCommentIncrementVal,
                    },
                });

                setTotalParentCommentsLoaded(
                    (prevVal) => prevVal + parentCommentIncrementVal
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // console.log(commentsArr[1]);

    return (
        <section className={cx("comment-container")}>
            <Toaster />
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment..."
                className={cx("comment-field")}
            ></textarea>
            <Button
                {...(comment ? { active: true } : { inactive: true })}
                className={cx("comment-button")}
                onClick={handleComment}
            >
                {action}
            </Button>
        </section>
    );
}

export default CommentField;
