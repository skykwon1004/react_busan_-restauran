import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Nav from "./pages/Nav";
import AllLsit from "./pages/AllLsit";
import GuList from "./pages/GuList";
import Itm from "./pages/Itm";

import './styles/common.css';
import './styles/style.scss';

const App = () => {
    const [busanFood, setBusanFood] = useState([]);
    const [gugun, setGugun] = useState([]);
    const key = `8v5dULy%2FHf6B%2FC2EP8V7CXLuu6c0F7u83NRMm2RCXp3M5%2FxNuil6mDqpwa%2F9k9a6XP99gmGais6FWUpJ7vikzA%3D%3D`
    const getData = async () => {
        const r = await axios.get(`http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${key}&pageNo=1&numOfRows=150&resultType=json`);
        const d = await r.data.getFoodKr.item;
        setBusanFood(d);
        const gugun = d.map(it => it.GUGUN_NM);
        const gugunList = [...new Set(gugun)];
        setGugun(gugunList);
    }
    useEffect(() => {
        getData();
    }, []);

    console.log(busanFood)

    return (
        <Routes>
            <Route path="/" element={<Layout gugun={gugun} />}>
                <Route index element={<AllLsit busanFood={busanFood} />}></Route>
                <Route path=":id" element={<GuList busanFood={busanFood} gugun={gugun} />} />
                <Route path="store/:itm" element={<Itm busanFood={busanFood} />} />
                {/* {
                    gugun.map((it, idx) => {
                        return <Route path={`${it}`} element={<div>{it}</div>} key={idx}></Route>
                    })
                } */}
            </Route>
        </Routes>
    )
}

export default App;