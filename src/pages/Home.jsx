import Sidebar from "../components/Sidebar";
import MainView from "../components/MainView";
import './Home.css';

function Homepage() {
    return (
        <div>

            <div className="title-container">
                <div className="title-left">
                    <Sidebar /> {/* Sidebar toggle button will sit here */}
                    <h2 className="greet-title">Hello User</h2>
                </div>
                <span className="material-symbols-outlined">
                    more_vert
                </span>
            </div>


            <div className="sub-title-container">
                <p className="sub-title">what's you cooking today?</p>
            </div>

            <div>
                <MainView />
            </div>
        </div>
    );
}

export default Homepage;