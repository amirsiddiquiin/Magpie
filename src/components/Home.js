import React from 'react'
import Farms from './Farms';
import Header from './Header';
import Pools from './Pools';
import Pool from './Pools';
import TopCards from './TopCards';

function Home() {
    return (
        <>
            <div className="home-wrapper" style={{ backgroundImage: `url("images/bkg.png")`, }}>
                <div>
                    <Header />
                </div>
                <div>
                    <TopCards />
                </div>
                <div>
                    <Farms />
                </div>
                <div>
                    <Pools />
                </div>
            </div>
        </>
    )
}

export default Home