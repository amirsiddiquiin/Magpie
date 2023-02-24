import React from 'react'

export default function PoolsButton() {
    return (
        <>
            <div className='d-flex justify-content-between align-items-center' style={{ marginTop: "2%" }}>
                <div className='d-flex justify-content-between pools-button-wrapper'>
                    <button className='poolBtnMain'>
                        Main Pool
                    </button>
                    <button className='sidePoolBtn'>
                        Side Pool
                    </button>
                    <button className='sidePoolBtn'>
                        BNB Pool
                    </button>
                    <button className='sidePoolBtn'>
                        Magpie LP
                    </button>
                    <button className='sidePoolBtn'>
                        iUSD
                    </button>
                </div>
                <div>
                    <img className="settingIcon" src="images/setting.png" />
                </div>
            </div>
        </>
    )
}
