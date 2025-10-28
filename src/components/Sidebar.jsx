import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Toggle button (only visible when sidebar is closed) */}
            {!open && (
                <button className="toggle-btn" onClick={() => setOpen(true)}>
                    ☰
                </button>

            )}


            {/* Sidebar */}

            {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
            <div className={`sidebar ${open ? "open" : ""}`}>


                <button className="close-btn" onClick={() => setOpen(false)}>
                    ×
                </button>
                <ul className="sidebar-menu">
                    <li> Home</li>
                    <li> My Recipe List</li>
                    <li> Create </li>
                </ul>

            </div>
        </>
    );
}

export default Sidebar;
