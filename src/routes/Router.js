import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Rent from "../page/Rent";
import NotFound from "../components/error/NotFound";

const Router = () => {
	return (
		<Routes>
			<Route path="/Kasa" element={<Home />} />
			<Route path="/Kasa/logement/:id" element={<Rent />} />
			<Route path="/Kasa/about" element={<About />} />
			<Route path="/Kasa/*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
