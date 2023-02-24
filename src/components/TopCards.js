import React from "react";


const TopCards = () => {
    return (
        <div className="row d-flex flex-wrap top-card-wrapper" style={{ marginTop: '2%' }}>
            <div className="col-md-4 top-card-column-wrapper">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">$0.00</h5>
                        <p className="card-text">Your Deposit</p>
                    </div>
                    <div style={{ position: "absolute", right: 0 }}>
                        <img src="images/deposit.png" className="top-card-left-image" />
                    </div>
                </div>
            </div>
            <div className="col-md-4 top-card-column-wrapper">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">$0.00</h5>
                        <p className="card-text">Your rewards</p>
                    </div>
                    <div style={{ position: "absolute", right: 0 }}>
                        <img src="images/IconRewards.png" className="top-card-left-image" />
                    </div>
                </div>
            </div>
            <div className="col-md-4 top-card-column-wrapper">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">$0.00</h5>
                        <p className="card-text">Magpie total TVL</p>
                    </div>
                    <div style={{ position: "absolute", right: 0 }}>
                        <img src="images/Bird1.png" className="top-card-left-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCards;
