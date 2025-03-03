import { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

import styles from "./HeroSection.module.scss";
import Button from "~/components/Button/Button";
import image from "~/assets/image";
const cx = classNames.bind(styles);

function HeroSection({
    heroImage,
    heroBackground,
    title,
    description,
    showForm = true,
    children,
    ...props
}) {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    // Tạo ref cho DateRange
    const dateRef = useRef(null);

    // Đóng DateRange khi click ra ngoài
    useEffect(() => {
        function handleClickOutside(event) {
            if (dateRef.current && !dateRef.current.contains(event.target)) {
                setOpenDate(false);
            }
        }

        // Lắng nghe sự kiện click
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className={cx("hero")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <img
                        src={heroBackground}
                        alt="Path way"
                        className={cx("background")}
                    ></img>
                    <div className={cx("content")}>
                        <h1 className={cx("title")}>{title}</h1>
                        <p className={cx("desc")}>{description}</p>

                        <div className={cx("search")}>
                            {showForm && (
                                <form className={cx("form")}>
                                    <img
                                        src={image.location_icon}
                                        className={cx("icon")}
                                    ></img>
                                    <input
                                        type="text"
                                        placeholder="Where do you want to go?"
                                        className={cx("input")}
                                    />
                                    <img
                                        src={image.calendar_icon}
                                        className={cx("icon")}
                                        onClick={() => setOpenDate(!openDate)}
                                    ></img>

                                    {/* Bọc DateRange trong div có ref */}
                                    <div ref={dateRef}>
                                        {openDate && (
                                            <DateRange
                                                editableDateInputs={true}
                                                onChange={(item) =>
                                                    setDate([item.selection])
                                                }
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}
                                                className={cx("date")}
                                            />
                                        )}
                                    </div>

                                    <input
                                        type="text"
                                        placeholder={`${format(
                                            date[0].startDate,
                                            "dd/MM/yyyy"
                                        )} - ${format(
                                            date[0].endDate,
                                            "dd/MM/yyyy"
                                        )}`}
                                        className={cx("input")}
                                        onClick={() => setOpenDate(!openDate)}
                                    />

                                    <Button
                                        active
                                        className={cx("btn")}
                                        type="button"
                                    >
                                        Search
                                    </Button>
                                </form>
                            )}
                        </div>
                        <img
                            src={heroImage}
                            className={cx("image")}
                            alt="Path Way"
                        ></img>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
