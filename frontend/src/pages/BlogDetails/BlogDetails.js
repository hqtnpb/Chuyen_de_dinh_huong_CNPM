import classNames from "classnames/bind";
import styles from "./BlogDetails.module.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState, createContext } from "react";

import axios from "axios";
import { getDay } from "~/common/date";
import BlogInteraction from "~/components/BlogInteraction";
import BlogCard from "~/components/BlogCard/BlogCard";
import BlogContent from "~/components/BlogContent/BlogContent";
const cx = classNames.bind(styles);

export const blogStructure = {
    title: "",
    desc: "",
    content: [],
    banner: "",
    activity: { total_likes: 0, total_reads: 0 },
    author: { personal_info: {}, social_links: [] },
    publishedAt: "",
};
export const BlogContext = createContext({});

function BlogDetails() {
    let { blog_id } = useParams();

    const [blog, setBlog] = useState(blogStructure);

    const [relatedBlogs, setRelatedBlogs] = useState(null);
    let {
        title,
        content,
        banner,
        author: {
            personal_info: { username: author_username, profile_img },
            social_links,
        },
        publishedAt,
    } = blog;
    const fetchBlogDetails = () => {
        axios
            .post(
                process.env.REACT_APP_SERVER_DOMAIN +
                    "/render/get-blog-details",
                { blog_id }
            )
            .then(({ data: { blog } }) => {
                setBlog(blog);

                axios
                    .post(
                        process.env.REACT_APP_SERVER_DOMAIN +
                            "/render/search-blogs",
                        { tag: blog.tags[0], limit: 4, eliminate_blog: blog_id }
                    )
                    .then(({ data }) => {
                        setRelatedBlogs(data.blogs);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const resetStates = () => {
        setBlog(blogStructure);
        setRelatedBlogs(null);
    };
    useEffect(() => {
        resetStates();
        fetchBlogDetails();
    }, [blog_id]);
    console.log(content);

    return (
        <BlogContext.Provider value={{ blog, setBlog }}>
            <section className={cx("blog-details")}>
                <div className={cx("container")}>
                    <div className={cx("inner")}>
                        <img src={banner} className={cx("banner")} />
                        <h1 className={cx("title")}>{title}</h1>
                        <Link to={`/user/${author_username}`}>
                            <div className={cx("author")}>
                                <img
                                    src={profile_img}
                                    className={cx("user-avt")}
                                ></img>
                                <div className={cx("info")}>
                                    <p className={cx("name")}>
                                        @{author_username}
                                    </p>
                                    <p className={cx("date")}>
                                        {getDay(publishedAt)} |
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <BlogInteraction></BlogInteraction>
                        <div className={cx("content")}>
                            {content && content[0] && content[0].blocks ? (
                                content[0].blocks.map((block, index) => {
                                    return (
                                        <BlogContent
                                            key={index}
                                            block={block}
                                        ></BlogContent>
                                    );
                                })
                            ) : (
                                <p>Loading content...</p>
                            )}
                        </div>

                        {relatedBlogs !== null && relatedBlogs.length > 0 ? (
                            <div className={cx("related-blogs")}>
                                <div className={cx("header")}>
                                    <h2 className={cx("title")}>
                                        Read Similar Blogs
                                    </h2>
                                </div>
                                <div className={cx("blog-card-list")}>
                                    {relatedBlogs.map((blog, index) => {
                                        return (
                                            <BlogCard
                                                key={index}
                                                blog={blog}
                                            ></BlogCard>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
        </BlogContext.Provider>
    );
}

export default BlogDetails;
