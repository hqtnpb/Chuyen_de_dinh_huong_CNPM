import classNames from "classnames/bind";
import styles from "./Destination.module.scss";
import Button from "~/components/Button";
import HeroSection from "~/components/HeroSection";
import Card from "~/components/Card";
import image from "~/assets/image";
const cx = classNames.bind(styles);
const data = [
    {
        imgSrc: image.discover_01,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 4.8,
    },
    {
        imgSrc: image.discover_02,
        category: "City/America",
        title: "New York, USA",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_03,
        category: "City/Asia",
        title: "New Delhi, India",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_04,
        category: "City/Middle East",
        title: "Cairo, Egypt",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_05,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_05,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_06,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_07,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_08,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_09,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_10,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 5.0,
    },
    {
        imgSrc: image.discover_11,
        category: "City/Asia",
        title: "Bali, Indonesia",
        rating: 5.0,
    },
];

function Destination() {
    return (
        <section className={cx("destination")}>
            <HeroSection
                heroBackground={image.destination_bg}
                title={"Find various destinations idea"}
                description={
                    "Discover the world with local experts, one tailor-made trip at a time. One planet. Endless possibilities. The most amazing destinations in the world."
                }
                showForm={false}
                className={cx("destination__hero")}
                destination
            ></HeroSection>
            <div className={cx("container")}>
                <div className={cx("content")}>
                    <div className={cx("top-btn")}>
                        <Button inactive className={cx("btn")}>
                            Popular
                        </Button>
                        <Button inactive className={cx("btn")}>
                            Regions
                        </Button>
                        <Button inactive className={cx("btn")}>
                            Countries
                        </Button>
                        <Button inactive className={cx("btn")}>
                            Cities
                        </Button>
                    </div>
                    <div className={cx("card-list")}>
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                imgSrc={item.imgSrc}
                                category={item.category}
                                title={item.title}
                                rating={item.rating}
                                discover
                            ></Card>
                        ))}
                    </div>
                    <Button active className={cx("bottom-btn")}>
                        Load More
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Destination;
