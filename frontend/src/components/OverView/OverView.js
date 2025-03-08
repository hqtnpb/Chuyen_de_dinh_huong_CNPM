import classNames from "classnames/bind";
import styles from "./OverView.module.scss"
import Button from "../Button";
import Paragraph from "../Paragraph";

const cx = classNames.bind(styles)
const cardText = [
    {
        title: "Overview",
        desc: "Sydneysiders love their giant 'coathanger', which opened in 1932. The best way to experience this majestic structure is on foot. Stairs and lifts ascend the bridge from both shores, leading to a footpath on the eastern side (the western side is a bike path).",
    },

    {
        title: "Climbing the bridge",
        desc: "The BridgeClimb experience takes between 1.5 and 3 hours depending on which Climb you choose. A thorough safety briefing as well as special boiler suits, harnesses and a headset are provided. Climbers are given 15 mins to take photos at the top of the climb, but it’s a good hour to climb back down.",
    },

    {
        title: "History",
        desc: "The harbour bridge is a spookily big object – moving around town you’ll catch sight of it in the corner of your eye, sometimes in the most surprising of places. Its enormous dimensions, the arch is 134m high (440 feet) from the top to the water and the span measures 503m (1650 ft). It’s the biggest (although not quite the longest) steel arch bridge in the world.",
    },

    {
        title: "Sydney Harbour Bridge facts",
        desc: "Construction began in 1923 and the bridge opened in 1932 -- connecting Sydney city with the northern suburbs. It has four railroad tracks, a multi-lane highway, a pedestrian walkway and a cycleway. The bridge is made of 53,000 tonnes of steel, held together by reportedly six million hand-driven rivets (we’re not sure who’s willing to check that fact!).",
    }
]

function OverView() {

    return (
        <section className={cx("view")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <div className={cx("content")}>
                        <div className={cx("card-list")}>
                            {cardText.map((data, index) => (
                                <Paragraph
                                    key={index}
                                    title={data.title}
                                    desc={data.desc}
                                    text
                                >
                                </Paragraph>
                            ))}
                        </div>
                        <iframe className={cx("map")} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4428045801196!2d151.2079225802011!3d-33.852477399506164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae5d25ead5e3%3A0x68948eb717c0c43e!2zQ-G6p3UgY-G6o25nIFN5ZG5leQ!5e0!3m2!1svi!2s!4v1741415746527!5m2!1svi!2s"></iframe>
                    </div>
                    <Button active className={cx("btn")}>Suggest an Edit</Button>
                </div>
            </div>
        </section>
    );
}

export default OverView;