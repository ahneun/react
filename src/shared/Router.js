import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about/:id" element={<About/>}/>
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;