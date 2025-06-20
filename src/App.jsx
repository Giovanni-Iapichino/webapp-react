import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import MoviesIndexPage from "./pages/MoviesIndexPage";
import MoviesShowPage from "./pages/MoviesShowPage";
import Loader from "./components/Loader";
import { LoaderProvider } from "./contexts/LoaderContext";

export default function App() {
  return (
    <>
      <LoaderProvider>
        <Loader />
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />

              <Route path="/movies">
                <Route index element={<MoviesIndexPage />} />
                <Route path=":id" element={<MoviesShowPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </>
  );
}
