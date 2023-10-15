import React from 'react';
import {Link} from 'react-router-dom'


 const Navabar=(props)=>  {

    // const [darkMode, setDarkMode] = useState(initialState)
    // const darkMode=()=>{

        
    // }
        return <div>
            <nav className={`navbar navbar-expand-lg fixed-top bg-${props.mode} navbar-${props.mode} `}>
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${props.mode==="primary"?"light":"light"}` } to="/">Monkey News App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
                             <li className="nav-item"><Link className={`nav-link active text-${props.mode==="primary"?"light":"light"}`} aria-current="page" to="/">Home</Link></li>
                             <li className="nav-item"><Link className={`nav-link text-${props.mode==="primary"?"light":"light"}`} to="/business">Business</Link></li>
                             <li className="nav-item"><Link className={`nav-link text-${props.mode==="primary"?"light":"light"}`} to="/entertainment">Entertainment</Link></li>
                             <li className="nav-item"><Link className={`nav-link text-${props.mode==="primary"?"light":"light"}`} to="/general">General</Link></li>
                             <li className="nav-item"><Link className={`nav-link text-${props.mode==="primary"?"light":"light"}`} to="/generalhealth">Generalhealth</Link></li>
                             <li className="nav-item"><Link className={`nav-link text-${props.mode==="primary"?"light":"light"}`} to="/science">Science</Link></li>
                             <li className="nav-item"><Link className={`nav-link text-${props.mode==="primary"?"light":"light"}`} to="/sports">Sports</Link></li>
                             <li className="nav-item"><Link className={`nav-link text-${props.mode==="primary"?"light":"light"}`} to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                    <div class={`form-check form-switch text-${props.mode==="primary"?"light":"light"}`}>
                    <input class="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault"/>
                    <label class="form-check-label " for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>
        </div>
    
}


export default Navabar;