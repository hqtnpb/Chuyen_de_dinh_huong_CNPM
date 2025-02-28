//Layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Destination from "~/pages/Destination";
import Upload from "~/pages/Upload";
import SignUp from "~/pages/SignUp";

//public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/destination", component: Destination },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/signup", component: SignUp, layout: HeaderOnly },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
