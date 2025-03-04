import classNames from "classnames/bind";

import styles from "./DiscoverSection.module.scss";
import Button from "../Button/Button";
import image from "~/assets/image";
import Card from "../Card/Card";

const cx = classNames.bind(styles);

const cardData = [
    {
        imgSrc: image.discover_01,
        category: "City/Asia",
        title: "Bondi Beach",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_02,
        category: "City/Asia",
        title: "Bondi Beach",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_03,
        category: "City/Asia",
        title: "Bondi Beach",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_04,
        category: "City/Asia",
        title: "Bondi Beach",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_05,
        category: "City/Asia",
        title: "Bondi Beach",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_06,
        category: "City/Asia",
        title: "Bondi Beach",
        rating: 5.0,
    },
];
function DiscoverSection() {
    return (
        <section className={cx("discover")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <h2 className={cx("title")}>
                        Discover your next destination
                    </h2>
                    <div className={cx("card-list")}>
                        {cardData.map((data, index) => (
                            <Card
                                key={index}
                                imgSrc={data.imgSrc}
                                category={data.category}
                                location={data.location}
                                title={data.title}
                                desc={data.desc}
                                rating={data.rating}
                                discover
                            ></Card>
                        ))}
                    </div>
                    <Button active className={cx("btn")}>
                        View All Destinations
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default DiscoverSection;
