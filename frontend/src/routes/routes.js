//Layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Destination from "~/pages/Destination";
import Upload from "~/pages/Upload";
import SignUp from "~/pages/SignUp";
import Login from "~/pages/Login";
import Error from "~/components/Error";
import Popup from "~/components/PopUp";
import About from "~/pages/About";
import MoreInPlace from "~/pages/MoreInPlace";
import SpotDetails from "~/pages/SpotDetails";
import SearchResult from "~/pages/SearchResults/SearchResult";

import Contact from "~/pages/Contact/Contact";
import Suggestions from "~/pages/Suggestions";

//public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/destination", component: Destination },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/signup", component: SignUp, layout: HeaderOnly },
    { path: "/signin", component: Login, layout: HeaderOnly },
    { path: "/error", component: Error },
    { path: "/more", component: MoreInPlace },
    { path: "/popup", component: Popup },
    { path: "/about", component: About },
    { path: "/spotdetails", component: SpotDetails },
    { path: "/searchresult", component: SearchResult},
    { path: "/contact", component: Contact },
    { path: "/suggestions", component: Suggestions, layout: HeaderOnly },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
