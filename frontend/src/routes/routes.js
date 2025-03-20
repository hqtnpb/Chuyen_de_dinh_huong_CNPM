//Layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Destination from "~/pages/Destination";
import SignUp from "~/pages/SignUp";
import Login from "~/pages/Login";
import Error from "~/components/Error";
import Popup from "~/components/PopUp";
import About from "~/pages/About";
import MoreInPlace from "~/pages/MoreInPlace";
import SpotDetails from "~/pages/SpotDetails";
import SearchResult from "~/pages/SearchResults/SearchResult";

import Contact from "~/pages/Contact/Contact";
import EditorPage from "~/pages/EditorPage";
import Blog from "~/pages/Blog";
import SearchPage from "~/pages/SearchPage";

//public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/destination", component: Destination },
    { path: "/signup", component: SignUp, layout: HeaderOnly },
    { path: "/signin", component: Login, layout: HeaderOnly },
    { path: "/error", component: Error, layout: null },
    { path: "/more", component: MoreInPlace },
    { path: "/popup", component: Popup },
    { path: "/about", component: About },
    { path: "/spotdetails", component: SpotDetails },
    { path: "/searchresult", component: SearchResult },
    { path: "/contact", component: Contact },
    { path: "/editor", component: EditorPage, layout: null },
    { path: "/blog", component: Blog },
    { path: "/search/:query", component: SearchPage },

];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
