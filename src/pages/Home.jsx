import Sidebar from "../components/Sidebar";
import './Home.css';

function Homepage() {
    return (
        <div>
            <Sidebar />
            <div className="title-container">
                <h2 className="greet-title">Hello User</h2>
            </div>

            <div className="sub-title-container">
                <p className="sub-title">what's you cooking today?</p>
            </div>
        </div>
    );
}

export default Homepage;