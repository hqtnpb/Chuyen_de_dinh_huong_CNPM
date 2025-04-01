import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { UserContext } from "~/App";
import axios from "axios";
import styles from "./Notifications.module.scss";
import Button from "~/components/Button";
import { filterPaginationData } from "~/common/filter-pagination-data";
import NoDataMessage from "~/components/NoData";
import NotificationsCard from "~/components/NotificationsCard";
import LoadMoreButton from "~/components/LoadMoreButton";
const cx = classNames.bind(styles);

function Notifications() {
    const [filter, setFilter] = useState("all");
    let filters = ["All", "Like", "Comment", "Reply"];

    let [notifications, setNotifications] = useState(null);
    let {
        userAuth,
        setUserAuth,
        userAuth: { new_notification_available, accessToken },
    } = useContext(UserContext);

    const fetchNotifications = ({ page, deletedDocCount = 0 }) => {
        axios
            .post(
                process.env.REACT_APP_SERVER_DOMAIN +
                    "/notifications/get-notifications",
                { page, filter, deletedDocCount },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then(async ({ data: { notifications: data } }) => {
                if (new_notification_available) {
                    setUserAuth({...userAuth, new_notification_available: false});
                }
                let formattedData = await filterPaginationData({
                    state: notifications,
                    data,
                    page,
                    countRoute: "/notifications/all-notifications-count",
                    data_to_send: { filter },
                    user: accessToken,
                });

                setNotifications(formattedData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (accessToken) {
            fetchNotifications({ page: 1 });
        }
    }, [accessToken, filter]);

    const handleFilter = (e) => {
        let btn = e.target;

        setFilter(btn.innerText.toLowerCase());

        setNotifications(null);
    };
    console.log(notifications);

    return (
        <div className={cx("container")}>
            <div className={cx("notifications")}>
                <h1 className={cx("title")}>Recent Notifications</h1>
                <div className={cx("list-button")}>
                    {filters.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                inactive={filter !== item.toLowerCase()}
                                active={filter === item.toLowerCase()}
                                className={cx("button")}
                                onClick={handleFilter}
                            >
                                {item}
                            </Button>
                        );
                    })}
                </div>

                {notifications !== null ? (
                    <div className={cx("notification-list")}>
                        {notifications.results.length ? (
                            notifications.results.map((item, index) => {
                                return (
                                    <NotificationsCard
                                        key={index}
                                        data={item}
                                        index={index}
                                        notificationState={{
                                            notifications,
                                            setNotifications,
                                        }}
                                    ></NotificationsCard>
                                );
                            })
                        ) : (
                            <NoDataMessage message="No new notifications"></NoDataMessage>
                        )}
                    </div>
                ) : (
                    ""
                )}

                <LoadMoreButton
                    state={notifications}
                    fetchDataFunc={fetchNotifications}
                    additionalParam={{
                        deletedDocCount: notifications?.deletedDocCount,
                    }}
                ></LoadMoreButton>
            </div>
        </div>
    );
}

export default Notifications;
