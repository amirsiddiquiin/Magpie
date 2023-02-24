import React from 'react'

export default function FarmCard({ data }) {
    return (
        <div className="d-flex justify-content-between card-container mt-3" style={{ background: data.background }} >

            <div className="d-flex align-items-center">
                <img className="icon-wraper" src={data.icon} alt="" />
                <div className="card-heading">{data.name}</div>
            </div>

            <div className="d-flex flex-column  justify-content-center align-items-center">
                <div className="card-heading ">{data.apr}</div>
                <div className="card-subheading ">APR</div>
            </div>


            <div className="d-flex flex-column  justify-content-center align-items-center">
                <div className="card-heading ">{data.tvl}</div>
                <div className="card-subheading">TVL</div>
            </div>

            <div className="d-flex flex-column  justify-content-center align-items-center">
                <div className="card-heading ">{data.staked}</div>
                <div className="card-subheading">Your Staked</div>
            </div>

            <div className="d-flex flex-column  justify-content-center align-items-center">
                <div className="card-heading ">{data.rewards}</div>
                <div className="card-subheading ">Rewards</div>
            </div>
            <div>
                <img className="icon-button" src="images/arrow-down-black.png" alt="" />
            </div>
        </div>
    )
}
