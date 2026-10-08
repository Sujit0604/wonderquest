import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

import App from '../App.jsx';
import HomePage from '../components/pages/HomePage.jsx';
import BlogPage from '../components/pages/BlogPage.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
        </Route>
    )
);

export default router;
