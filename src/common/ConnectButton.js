import React from "react";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function ConnectButton() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <span className="Enstyle">
                        EN
                    </span>
                    <Button variant="contained" style={{ borderRadius: 200 }} endIcon={<KeyboardArrowDownIcon />}>
                        Connect Wallet
                    </Button>
                    <img src="images/darkMode.png" style={{ marginLeft: 10 }} />
                </div>
            </div>
        </div>
    )
}

export default ConnectButton