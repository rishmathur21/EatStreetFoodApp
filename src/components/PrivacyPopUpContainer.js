import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPopUpContainer = () => {
    return (

        <div className="my-3 alert alert-warning alert-dismissible fade show" role="alert">
        
       <strong>
       We are an online restaurant guide, and we want to get you the meal that fits you best. <br/> <br/>
        </strong> 

        We collect some information such as what restaurants you click on or what cuisines you prefer in these things called cookies. <br/> <br/>

        We use this information to make suggestions about what restaurants you might like! <br/><br/>

        We <strong> DO NOT </strong> give or sell this information to anyone. Not to any advertisers, restaurants, or social media platforms. <br/><br/>

        We simply want to give you the best experience possible. <br/><br/>

        <Link className="btn btn-info " to={`/privacy-policy/`}> Learn More </Link>


        </div>
    )

}

export default (PrivacyPopUpContainer);

