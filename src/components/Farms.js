import { Button, Table } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import FarmCard from "./FarmCard";
import Card from "./FarmCard";


const farms = [
    {
        id: 1,
        icon: "images/Wom.png",
        name: "Convert Wom",
        apr: "10%",
        tvl: "100M",
        staked: "10M mWOM",
        rewards: "1M",
        background: "radial-gradient(39.75% 7610.81% at -12.21% 50%, #FDDD5E 0%, #FFFFFF 100%)"
    },
    {
        id: 1,
        icon: "images/Mgk.png",
        name: "Stake MGP",
        apr: "30%",
        tvl: "2M",
        staked: "100K MGP",
        rewards: "20K",
        background: "radial-gradient(29.88% 5722.13% at -1.17% 50%, #288CFC 0%, #FFFFFF 100%)"
    }
]


const Farms = () => {


    return (
        <div>
            <div style={{ marginTop: "2%", position: "relative" }}>
                <div style={{ zIndex: 2 }}>
                    <div className="main-heading">
                        Magpie Pool
                    </div>
                </div>
                {/* <div style={{ position: "absolute", top: "50%", width: "100%", zIndex: 1, marginLeft: 60 }}>
                    <hr style={{ border: '2px solid #B7CFED', width: '88%', margin: '0 auto' }} />
                </div> */}

            </div>
            <div className="d-flex row"></div>
            {farms.map(item => <FarmCard data={item} />)}
        </div>
    );
};

export default Farms;
