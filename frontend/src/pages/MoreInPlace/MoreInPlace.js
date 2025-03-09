import classNames from "classnames/bind";
import styles from "./MoreInPlace.module.scss";
import HeroSection from "~/components/HeroSection";
import image from "~/assets/image";
import Card from "~/components/Card";
import Button from "~/components/Button";
const cx = classNames.bind(styles);

const data = [
    {
        imgSrc: image.more_img_14,
        location: "Sydney",
        title: "Bondi Beach",
        desc: "Definitively Sydney, Bondi is one of the world’s great beaches. It’s the closest ocean...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_15,
        location: "Sydney",
        title: "Sydney Harbour Bridge ",
        desc: "Sydneysiders love their giant 'coathanger', which opened in 1932. The best way to...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_16,
        location: "Sydney",
        title: "Watsons Bay",
        desc: "Lovely Watsons Bay, east of the city center and north of Bondi, was once a small...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_04,
        location: "Sydney",
        title: "Bondi Beach",
        desc: "Definitively Sydney, Bondi is one of the world’s great beaches. It’s the closest ocean...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_05,
        location: "Sydney",
        title: "Sydney Harbour Bridge ",
        desc: "Sydneysiders love their giant 'coathanger', which opened in 1932. The best way to...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_06,
        location: "Sydney",
        title: "Watsons Bay",
        desc: "Lovely Watsons Bay, east of the city center and north of Bondi, was once a small...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_07,
        location: "Sydney",
        title: "Bondi Beach",
        desc: "Definitively Sydney, Bondi is one of the world’s great beaches. It’s the closest ocean...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_08,
        location: "Sydney",
        title: "Sydney Harbour Bridge ",
        desc: "Sydneysiders love their giant 'coathanger', which opened in 1932. The best way to...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_09,
        location: "Sydney",
        title: "Watsons Bay",
        desc: "Lovely Watsons Bay, east of the city center and north of Bondi, was once a small...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_10,
        location: "Sydney",
        title: "Bondi Beach",
        desc: "Definitively Sydney, Bondi is one of the world’s great beaches. It’s the closest ocean...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_11,
        location: "Sydney",
        title: "Sydney Harbour Bridge ",
        desc: "Sydneysiders love their giant 'coathanger', which opened in 1932. The best way to...",
        rating: 4.5,
    },
    {
        imgSrc: image.more_img_12,
        location: "Sydney",                                                                                                                                                                     
        title: "Watsons Bay",
        desc: "Lovely Watsons Bay, east of the city center and north of Bondi, was once a small...",
        rating: 4.5,
    },
];
function MoreInPlace() {
    return (
        <section className={cx("more-in-place")}>
            <HeroSection
                heroBackground={image.hero_decor_image}
                title={"Must see attractions  in Sydney"}
                description={
                    "Discover the world with local experts, one tailor-made trip at a time. One planet. Endless possibilities. The most amazing destinations in the world are waiting for you."
                }
                showForm={false}
                more
            >
                <div className={cx("image-list")}>
                    <img
                        src={image.more_img_01}
                        className={cx("image-item")}
                    ></img>
                    <img
                        src={image.more_img_02}
                        className={cx("image-item")}
                    ></img>
                    <img
                        src={image.more_img_03}
                        className={cx("image-item")}
                    ></img>
                    <img
                        src={image.more_img_13}
                        className={cx("image-item")}
                    ></img>
                </div>
            </HeroSection>
            <div className={cx("container")}>
                <div className={cx("content")}>
                    <div className={cx("top-btn")}>
                        <Button inactive className={cx("btn")}>
                            Sights
                        </Button>
                        <Button inactive className={cx("btn")}>
                            Restaurants
                        </Button>
                        <Button inactive className={cx("btn")}>
                            Entertainment
                        </Button>
                        <Button inactive className={cx("btn")}>
                            Shopping
                        </Button>
                        <Button inactive className={cx("btn")}>
                            Hotels
                        </Button>
                    </div>
                    <div className={cx("card-list")}>
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                imgSrc={item.imgSrc}
                                title={item.title}
                                desc={item.desc}
                                rating={item.rating}
                                location={item.location}
                                className={cx("card-item")}
                                explore
                            ></Card>
                        ))}
                    </div>
                    <Button active className={cx("bottom-btn")}>
                        Load more
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default MoreInPlace;
