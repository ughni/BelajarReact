import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Beranda from "./Beranda";
import { Navbar } from "./Navbar";

export function Index() {
  return (
    <>
      <Navbar/>
      <Beranda/>
    </>
  )
}



