const routes = {
    "/": renderMain,
    "about": renderAbout,
    "reviews": renderReviews,
    "catalog": renderCatalog,
};

const handleHashChange = () => {
    const path = window.location.hash.replace("#", "") || "/";
    const renderFunc = routes[path];
    if (renderFunc) {
        renderFunc();
        window.scrollTo(0, 0)
    }
};

const initRouter = () => {
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
};
