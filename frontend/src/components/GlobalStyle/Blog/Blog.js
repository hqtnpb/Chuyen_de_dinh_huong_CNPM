import React from "react";
import "~/Blog.scss";
function Blog() {
    return (

        <div className={cx("main")}>
            <div className={cx("logo")}>
                <img src={image.logo} alt="Blog Map" />
            </div>
            <h1>Inside get your guide</h1>
            <div className={cx("blogsearch")}>
                <img src={image.iconlocation} alt="Icon location" />
                <input placeholder="Search articles..." />
                <button className={cx("search-btn")}>
                </button>
            </div>
            <nav className={cx("nav-btn")}>
                <button className={cx("btn-item")}>All Articles</button>
                <button className={cx("btn-item")}>Food & Drink</button>
                <button className={cx("btn-item")}>Inspiration</button>
                <button className={cx("btn-item")}>Local Guides</button>
                <button className={cx("btn-item")}>Travel Tips</button>
            </nav>
            <div className={cx("blogpost")}>
                <div className={cx("blog-main")}>
                    <img src={image.blog1} alt="Blog 1" />
                    <h2>Best things to do in the Dominican Republic</h2>
                    <p1>We love to travel the world and want you to have the trip of a lifetime!Discover the world with local experts, one tailor-made trip at a time. One planet. Endless possibilities. The most amazing destinations in the world are waiting for you.</p1>
                    <button className={cx("learnmore")}>Learn More</button>
                </div>

                <div className={cx("blog-list")}>
                    <div className={cx("blog-item")}>
                        <img src={image.blog2} alt="Blog 2" />
                        <h6>8 Amazing Places to Celebrate New Year 2023</h6>
                        <p2>Whether it’s champagne to ring in the New Year, a countdown party, or an intimate dinner, everyone plans something special...</p2>
                        <button className={cx("learnmore")}>Learn More</button>
                    </div>
                    <div className={cx("blog-item")}>
                        <img src={image.blog3} alt="Blog 3" />
                        <h6>8 Amazing Places to Celebrate New Year 2023</h6>
                        <p2>Whether it’s champagne to ring in the New Year, a countdown party, or an intimate dinner, everyone plans something special...</p2>
                        <button className={cx("learnmore")}>Learn More</button>
                    </div>
                    <div className={cx("blog-item")}>
                        <img src={image.blog4} alt="Blog 4" />
                        <h6>8 Amazing Places to Celebrate New Year 2023</h6>
                        <p2>Whether it’s champagne to ring in the New Year, a countdown party, or an intimate dinner, everyone plans something special...</p2>
                        <button className={cx("learnmore")}>Learn More</button>
                    </div>
                    <div className={cx("blog-item")}>
                        <img src={image.blog5} alt="Blog 5" />
                        <h6>8 Amazing Places to Celebrate New Year 2023</h6>
                        <p2>Whether it’s champagne to ring in the New Year, a countdown party, or an intimate dinner, everyone plans something special...</p2>
                        <button className={cx("learnmore")}>Learn More</button>
                    </div>
                </div>
                <div className={cx("blog-small-list")}>
                    <div className={cx("blog-item")}>
                        <img src={image.blog6} alt="Blog 6" />
                        <h6>8 Amazing Places to Celebrate New Year 2023</h6>
                        <p2>Whether it’s champagne to ring in the New Year, a countdown party, or an intimate dinner, everyone plans something special...</p2>
                        <button className={cx("learnmore")}>Learn More</button>
                    </div>
                    <div className={cx("blog-item")}>
                        <img src={image.blog7} alt="Blog 7" />
                        <h6>8 Amazing Places to Celebrate New Year 2023</h6>
                        <p2>Whether it’s champagne to ring in the New Year, a countdown party, or an intimate dinner, everyone plans something special...</p2>
                        <button className={cx("learnmore")}>Learn More</button>
                    </div>
                    <div className={cx("blog-item")}>
                        <img src={image.blog8} alt="Blog 8" />
                        <h6>8 Amazing Places to Celebrate New Year 2023</h6>
                        <p2>Whether it’s champagne to ring in the New Year, a countdown party, or an intimate dinner, everyone plans something special...</p2>
                        <button className={cx("learnmore")}>Learn More</button>
                    </div>
                </div>
            </div>
            <button className={cx("loadmore")}>Load More</button>

        </div>
    );

}
export default Blog;