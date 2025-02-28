import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
    return <section className={cx("hero")}>
        <div className={cx("container")}>

        </div>
    </section>;
}


export default Home;
