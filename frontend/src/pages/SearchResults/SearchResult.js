import HeroSection from "~/components/HeroSection";
import classNames from "classnames/bind";
import styles from "./SearchResult.module.scss";
import image from "~/assets/image";
import Button from "~/components/Button";

const cx = classNames.bind(styles)
function SearchResult() {
    return (
        <div className={cx("search-result")}>
            <HeroSection
                heroBackground={image.hero_decor_image}
                title={"Sydney, Australia"}
                description={"Sydney, spectacularly draped around its glorious harbor and beaches, has visual wow factor like few other cities. Scratch the surface and it only gets better."}
                showForm={false}
                searchresult
            >
                <div className={cx("info")}>
                    <div className={cx("more")}>
                        <Button text className={cx("btn")}>Read More</Button>
                        <p className={cx("jump")}>Jump to:</p>
                        <ul className={cx("square-list")}>
                            <li className={cx("square")}>Must see experiences</li>
                            <li className={cx("square")}>Featured & Latest stories</li>
                            <li className={cx("square")}>Planning a trip</li>
                        </ul>
                    </div>
                    <div className={cx("city")}>
                        <div className={cx("location")}>
                            <img className={cx("icon")} src={image.location_icon} alt="Icon" />
                            <span className={cx("location-name")}>Sydney</span>
                        </div>
                        <img className={cx("img")} src={image.search_result_img} alt="Search Result" />
                    </div>
                </div>
                <img className={cx("kangooroo")} src={image.kangooroo} alt="Kangooroo" />

            </HeroSection>
        </div>
    );
}

export default SearchResult;