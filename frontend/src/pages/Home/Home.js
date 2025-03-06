import classNames from "classnames/bind";

import image from "~/assets/image";
import styles from "./Home.module.scss";
import HeroSection from "~/components/HeroSection";
import FeaturesSection from "~/components/FeaturesSection";
import DiscoverSection from "~/components/DiscoverSection";
import ShareSection from "~/components/ShareSection";
import WatchSection from "~/components/WatchSection";
import video from "~/assets/video";
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx("home")}>
            
            <HeroSection
                heroImage={image.hero_image}
                heroBackground={image.hero_decor_image}
                title={"Explore the Beauty of Journey"}
                description={
                    "Create a fully customized day-by-day itinerary for free. Imagine checking one place for your travel details."
                }
                className={cx()}
            ></HeroSection>
            <FeaturesSection></FeaturesSection>
            <DiscoverSection></DiscoverSection>
            <ShareSection></ShareSection>
            <WatchSection
                title={"Watch our entire trip documentation"}
                videoSrc={video.video_pho}
                videoTitle={
                    "New South Wales, Australia: from Sydney to the Blue Mountains"
                }
                videoDesc={
                    "Watch the best of Sydney. In this video we presented all the beautiful things of Sydney and Australia"
                }
            ></WatchSection>
        </div>
    );
}


export default Home;
