
import { Link } from "react-router-dom";
import '../Page/HomePage.css'
// import earth from '../Asset/earth.mp4'

const Home =() => {
    document.title = "SFS Demo | Home"   
    return (
        <div className="homepage">

            {/* <video src={earth} autoPlay muted loop className="video-earth"/> */}
            <div className="earth-overlay"></div>
            
            <div className="home-text">
                <h1 className="success">SFS DEMO</h1>
            </div>

            <Link to="/web/passRegistration" className="regis-btn" style={{ color: 'white' }}>Đăng Ký</Link>
            <Link to="/web/passLogin" className="login-btn" style={{ color: 'white' }}>Đăng Nhập</Link>

            <h2>=========================================...======================================================================</h2>

        </div>

    )
}
export default Home;
