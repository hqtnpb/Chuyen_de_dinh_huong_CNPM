//Layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Destination from "~/pages/Destination";
import Upload from "~/pages/Upload";
import SignUp from "~/pages/SignUp";
import Login from "~/pages/Login";
import Popup from "~/components/PopUp";
import About from "~/pages/About";

//public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/destination", component: Destination },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/signup", component: SignUp, layout: HeaderOnly },
    { path: "/signin", component: Login, layout: HeaderOnly },
    { path: "/popup", component: Popup,},
    { path: "/about", component: About,},
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
