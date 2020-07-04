import React from 'react';
import { Link } from 'react-router-dom';



const FooterComponent = ({ restaurant, selectRestaurant }) => {
    return (
        <div>
            <footer className="fixed-bottom page-footer text-white bg-info font-small blue">

            <div className="footer-copyright text-white text-center py-3">  
                <Link className="btn btn-block btn-info" to={`/privacy-policy/`}>
                     Click here to read our Privacy Policy 
                </Link>
            </div>
            <button type="button" className="text-white btn btn-info btn-lg btn-block">
                <Link className="text-white" to="/Home">
                    Home Page
                </Link>
            </button>

            </footer>

        </div>

    )
}

export default FooterComponent;

