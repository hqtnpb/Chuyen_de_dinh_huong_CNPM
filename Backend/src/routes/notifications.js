const notificationsController = require("../controllers/notifications");
const router = require("express").Router();
const verifyJWT = require("../middleWare/authMiddleWare");

router.get(
    "/new-notification",
    verifyJWT,
    notificationsController.newNotification
);
router.post(
    "/get-notifications",
    verifyJWT,
    notificationsController.getNotifications
);
router.post(
    "/all-notifications-count",
    verifyJWT,
    notificationsController.allNotificationsCount
);
module.exports = router;
