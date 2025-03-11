import classNames from "classnames/bind";
import styles from "./SearchResult.module.scss";
import image from "~/assets/image";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Paragraph from "~/components/Paragraph";
import Planning from "~/components/Planning";


const cx = classNames.bind(styles)
const cardData = [
    {
        imgSrc: image.explore_search_result_01,
        title: "Bondi Beach",
        category: "Definitively Sydney, Bondi is one of the world’s great beaches. It’s the closest ocean...",
        rating: 4.5,
        location: "Sydney",
    },

    {
        imgSrc: image.explore_search_result_02,
        title: "Sydney Harbour Bridge",
        category: "Sydneysiders love their giant 'coathanger', which opened in 1932. The best way to...",
        rating: 4.8,
        location: "Sydney",
    },

    {
        imgSrc: image.explore_search_result_03,
        title: "Watsons Bay",
        category: "Lovely Watsons Bay, east of the city center and north of Bondi, was once a small...",
        rating: 4.9,
        location: "Sydney",
    }
]

const cardStory =[
    {
        title: "A reason to travel to Sydney in December: the new Sydney...",
        desc:"Sydney is much more than its beaches and landmarks. Meissa Mason shows you her idea of the perfect day in her hometown...",
        image: image.story_explore_01,
    },

    {
        title: "4 days to connect with Sydney, Australia",
        desc:"From hosting one of the largest Pride celebrations in the world to its new indigenous tours, return to Sydney to see it from a new perspective.",
        image: image.story_explore_02,
    },

    {
        title: "Check out Meissa Mason's best day in Sydney, Australia",
        desc:"Sydney is much more than its beaches and landmarks. Meissa Mason shows you her idea of the perfect day in her hometown...",
        image: image.story_explore_03,
    }
]
function SearchResult() {
    return (
        <div className={cx("search-result")}>
            <div className={cx("main")}>
                <div className={cx("container")}>
                    <div className={cx("inner")}>
                        <div className={cx("introduce")}>
                            <img className={cx("background")} src={image.hero_decor_image} alt="Path Way" />
                            <div className={cx("content")}>
                                <h1 className={cx("title")}>Sydney, Australia</h1>
                                <p className={cx("desc")}>Sydney, spectacularly draped around its glorious harbor and beaches, has visual wow factor like few other cities. Scratch the surface and it only gets better.</p>
                                <Button text className={cx("btn")}>Read More</Button>
                                <p className={cx("jump")}>Jump to:</p>
                                <ul className={cx("list")}>
                                    <li className={cx("item")}>Must see experiences</li>
                                    <li className={cx("item")}>Featured & Latest stories</li>
                                    <li className={cx("item")}>Planning a trip</li>
                                </ul>
                            </div>
                            <div className={cx("media")}>
                                <img className={cx("kangooroo")} src={image.kangooroo} alt="Kangooroo" />

                                <img className={cx("img")} src={image.search_result_img} alt="Sydney" />
                                <div className={cx("location")}>
                                    <img className={cx("icon")} src={image.location_icon} alt="Icon" />
                                    <p className={cx("location-name")}>Sydney</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("explore")}>
                <div className={cx("container")}>
                    <div className={cx("explore-inner")}>
                        <div className={cx("explore-text")}>
                            <h2 className={cx("explore-title")}>Explore Sydney</h2>
                            <select className={cx("option-list")}>
                                <option className={cx("option")} value="Top Attractions">Top Attractions</option>
                                <option className={cx("option")} value="Top Restaurants">Top Restaurants</option>
                                <option className={cx("option")} value="Top Entertainment">Top Entertainment</option>
                                <option className={cx("option")} value="Top Shopping">Top Shopping</option>
                            </select>
                        </div>
                        <div className={cx("card-list")}>
                            {cardData.map((data, index) => (
                                <Card
                                    key={index}
                                    imgSrc={data.imgSrc}
                                    title={data.title}
                                    category={data.category}
                                    rating={data.rating}
                                    location={data.location}
                                    searchresult
                                >

                                </Card>
                            ))}
                        </div>
                        <Button active className={cx("btn")}>More in Sydney</Button>
                    </div>
                </div>
            </div>
            <div className={cx("stories")}>
                <div className={cx("container")}>
                    <div className={cx("stories-inner")}>
                        <h2 className={cx("stories-title")}>Latest Stories from Sydney</h2>
                        <div className={cx("stories-list")}>
                            {cardStory.map((data, index) =>(
                                <Planning
                                key={index}
                                title={data.title}
                                desc={data.desc}
                                image={data.image}
                                text></Planning>
                            ))}
                        </div>
                        <Button active className={cx("view-stories")}>View All Stories</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;