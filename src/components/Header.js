import React from 'react';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';

const ButtonPurchase = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    borderRadius: '6px',
    lineHeight: 1.5,
    backgroundColor: '#137CE7',
    border: 'none',
    color: 'white',
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '@media screen and (max-width: 768px)': {
        fontSize: 14,
        fontWeight: 600,

        padding: '4px 8px',
        borderRadius: '6px',
        width: "95%",
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    '@media screen and (max-width: 480px)': {
        fontSize: 14,
        fontWeight: 600,
        padding: '2px 4px',
        borderRadius: '6px',
        width: "95%",
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function Header() {
    return (
        <div className="row">
            <div className="col-md-8">
                <div className="d-flex w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center title1-title2-wrapper">
                        <div className="main-heading">STAKE FUNDS</div>
                        <div className="header-title2">Change Protocol</div>
                        <div className="title3-wrapper">
                            <img src="images/coin.png" alt="Wombat Exchange" className="icon-wombat" />
                            <div className="header-title3">
                                Wombat Exchange {<KeyboardArrowDownIcon className="drawer-downArrow" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 column-purchase-btn">
                <ButtonPurchase>Purchase Insurance</ButtonPurchase>
            </div>
        </div>
    );
}

export default Header;
