import React, { useState } from "react";
import PoolsButton from "../common/PoolsButton";
import PoolCard from "./PoolCard";


const pool = [
    {
        id: 1,
        icon: "images/Wom.png",
        name: "BUSD",
        apr: "10%",
        tvl: "100M",
        staked: "10M BUSD",
        rewards: "1M",
        background: "radial-gradient(39.75% 7610.81% at -12.21% 50%, #FDDD5E 0%, #FFFFFF 100%)"
    },
    {
        id: 2,
        icon: "images/Mgk.png",
        name: "USDC",
        apr: "30%",
        tvl: "2M",
        staked: "100K USDC",
        rewards: "20K",
        background: "radial-gradient(29.88% 5722.13% at -1.17% 50%, #288CFC 0%, #FFFFFF 100%)"
    },
    {
        id: 3,
        icon: "images/Mgk.png",
        name: "USDT",
        apr: "30%",
        tvl: "2M",
        staked: "100K USDT",
        rewards: "20K",
        background: "radial-gradient(39.06% 4635.58% at -9.38% 50%, #53AE94 0%, #EBFAF5 74.8%, #FFFFFF 100%)"
    }
]


const Pools = () => {


    return (
        <div>
            <div style={{ marginTop: "2%", position: "relative", }}>
                <div style={{ zIndex: 2 }}>
                    <div className="main-heading">
                        LIQUIDITY POOLS
                    </div>
                </div>
                {/* <div style={{ position: "absolute", top: "50%", width: "100%", zIndex: 1, marginLeft: 60 }}>
                    <hr style={{ border: '2px solid #B7CFED', width: '88%', margin: '0 auto' }} />
                </div> */}
            </div>
            <div>
                <PoolsButton />
            </div>
            <div>
                {pool.map(item => <PoolCard data={item} />)}
            </div>
        </div>
    );
};

export default Pools;
