import { createContext, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";
import { lookInSession } from "./common/session";
import ScrollToTop from "./common/scrollToTop";
export const UserContext = createContext({});

function App() {
    const [userAuth, setUserAuth] = useState({});

    useEffect(() => {
        let userInSession = lookInSession("user");
        userInSession
            ? setUserAuth(JSON.parse(userInSession))
            : setUserAuth({ accessToken: null });
    }, []);

    return (
        <UserContext.Provider value={{ userAuth, setUserAuth }}>
            <Router>
                <ScrollToTop />
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            const Page = route.component;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return route.children ? (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                >
                                    {route.children.map((child, idx) => (
                                        <Route
                                            key={idx}
                                            path={child.path}
                                            element={<child.component />}
                                        />
                                    ))}
                                </Route>
                            ) : (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
