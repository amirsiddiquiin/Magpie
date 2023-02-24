import React, { useState } from "react";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Web3 from 'web3';
import Modal from '@mui/material/Modal';

function ConnectButton() {
    const [walletAddress, setWalletAddress] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);

    async function connectMetamask() {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Connected to Metamask');

                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                console.log('Accounts:', accounts);
                setWalletAddress(accounts[0]);
                setIsModalOpen(false);
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function disconnectMetamask() {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'wallet_disconnect' });
                console.log('Disconnected from Metamask');
                setWalletAddress(null);
                setIsDisconnectModalOpen(false);
            } catch (error) {
                console.log(error);
            }
        }
    }

    function shortenAddress(address) {
        if (!address) {
            return null;
        }
        return address.substring(0, 6) + "..." + address.substring(address.length - 5, address.length);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <span className="Enstyle">
                        EN
                    </span>
                    <Button variant="contained" style={{ borderRadius: 200 }} endIcon={<KeyboardArrowDownIcon />} onClick={() => setIsModalOpen(true)}>
                        {walletAddress ? shortenAddress(walletAddress) : 'Connect Wallet'}
                    </Button>
                    <img src="images/darkMode.png" style={{ marginLeft: 10 }} />
                </div>
            </div>

            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                aria-labelledby="metamask-modal-title"
                aria-describedby="metamask-modal-description"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <div style={{ backgroundColor: '#FFFFFF', padding: 24, borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 id="metamask-modal-title" style={{ margin: 0, fontSize: 20 }}>Connect to Metamask</h2>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" alt="Metamask icon" style={{ height: 50, margin: 15 }} />
                    <Button variant="contained" onClick={connectMetamask}>
                        Connect
                    </Button>
                </div>
            </Modal>

            <Modal
                open={isDisconnectModalOpen}
                onClose={() => setIsDisconnectModalOpen(false)}
                aria-labelledby="disconnect-modal-title"
                aria-describedby="disconnect-modal-description"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <div style={{ backgroundColor: '#FFFFFF', padding: 24, borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 id="disconnect-modal-title" style={{ margin: 0, fontSize: 14 }}>Disconnect from Metamask</h2>
                    <p id="disconnect-modal-description" style={{ margin: '16px 0', textAlign: 'center' }}>Are you sure you want to disconnect from Metamask?</p>
                    <Button variant="contained" onClick={disconnectMetamask}>
                        Yes
                    </Button>
                    <Button variant="outlined" style={{ marginTop: 8 }} onClick={() => setIsDisconnectModalOpen(false)}>
                        Cancel
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default ConnectButton

