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
                <h3 className="sub-title">what's you cooking today?</h3>
            </div>
        </div>
    );
}

export default Homepage;