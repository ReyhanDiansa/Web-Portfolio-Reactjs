import React from "react";
import { Routes, Route } from "react-router-dom";
import Beranda from "../../pages/Beranda/Beranda";
import Karya from "../../pages/Karya/Karya";
import Kontak from "../../pages/Kontak/Kontak";
import TentangSaya from "../../pages/About me/TentangSaya";
import "./style.css"

const Utama = () => (
    <div className="page">
    <Routes>
        <Route path="/" element={<Beranda/>}/>
        <Route path="/karya" element={<Karya/>}/>
        <Route path="/kontak" element={<Kontak/>}/>
        <Route path="/tentangsaya" element={<TentangSaya/>}/>
    </Routes>
    </div>
)

export default Utama