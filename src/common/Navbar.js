import React, { useState } from "react";
import ConnectButton from "./ConnectButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const navLinks = [{ text: "Stake", className: "navListActive" }, { text: "Claim", className: "navList" }, { text: "Lock", className: "navList" }, { text: "Docs", className: "navList" }, { text: "Governance", className: "navList" }, { text: "Bride", className: "navList" }, { text: "Referral", className: "navList" },];

    return (
        <>
            {/* Navbar for desktop screens */}
            <div
                class="d-flex row justify-content-center align-items-center p-1 desktop-navbar"
                style={{ backgroundColor: "#F0F6FF" }}
            >
                <div class="col-md-8">
                    <ul
                        style={{
                            display: "flex",
                            listStyleType: "none",
                            justifyContent: "space-around",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <li>
                            <img src="images/magpie.png" alt="" />
                        </li>
                        {navLinks.map((link) => (
                            <li className={link.className}>{link.text}</li>
                        ))}
                        <li
                            style={{
                                border: "2px solid #1FB488",
                                borderRadius: 6,
                                padding: 3,
                            }}
                        >
                            <span>
                                <img src="images/shield.png" />{" "}
                                <span
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: "#1FB488",
                                    }}
                                >
                                    Audited
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ConnectButton />
                </div>
            </div>

            {/* Navbar drawer for mobile screens */}
            <div className="mobile-navbar" style={{}}>
                <img src="images/magpie.png" alt="" />
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 20,
                        margin: "0.5rem",
                        zIndex: 1,
                    }}
                >
                    {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} sx={{ zIndex: 2 }}>
                    <List sx={{ width: "80vw", maxWidth: "300px" }}>
                        {navLinks.map((link) => (
                            <ListItem key={link.text}>
                                <ListItemText primary={link.text} className={link.className} />
                            </ListItem>
                        ))}
                        <div style={{ marginTop: "auto" }}>
                            <ConnectButton />
                        </div>
                    </List>
                </Drawer>
            </div>
        </>
    );
}

export default Navbar
