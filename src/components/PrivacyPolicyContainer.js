import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from './FooterComponent';


const PrivacyPopUpContainer = () => {
    return (
        <div className="container">
            <div className="row">
                <Link
                    className="btn btn-outline-info my-2"
                    to="/search">
                        Back To Search
                </Link>
            </div>

            <div className="col-sm-12">
               <h2>
                   Privacy Policy
                   <small className="text-muted"> by The Food App</small>
                </h2>
                <hr/>

                This policy was last updated on 4/20/2020 <br /> <br />

                <h3 className="text-muted"> Web privacy policy </h3>

                We take your privacy seriously, and we know it can be hard to determine if you are being taken advantage of.
                We want you to know how we collect, use, and protect your information. 

                This Statement of Privacy applies to The Food App. By using The Food App you consent to all data practices described in this statement. <br/> <br/>

                <h3 className="text-muted"> What we collect </h3>

                <strong> Information you give us: </strong> 
                We receive and store information you enter on our site such as your name, address, email address, phone number, food preferences, and dietary restrictions.
                This includes any information you submit on a form. <br/> <br/>
                We do not share or sell this information with any third parties. Any sensitive information is kept private and is solely for us to provide the necessary service to you. <br/><br/>

                <strong> Information we automatically collect: </strong> 
                We keep track of information about your interaction with our site. 
                This includes statistics on your page views, traffic to our sites, links or rstaurants that you click on, IP addresses and your device information.
                We look at how you found our site, and keep track of any restaurants you might have ordered from. <br/>

                This information is collected through cookies, your browser or device thorugh IP and MAC addresses, and other tracking technologies. <br/><br/>

                We do not share or sell this information with any third parties. Any sensitive information is kept private and is solely for us to improve your experience with the website.
                We want to make suggestions that are relevant to you, as well as understand how we can improve our service based on your activities. <br/> <br/>
        

                <h3 className="text-muted"> How we use it </h3>

                As mentioned previously, we do not sell, rent or lease customer lists or data to any third parties.<br/>

                We collect and use your personal information to operate the website and deliver the services you have requested. <br/>

                We will only use your personal information such as your email to contact you with identity verifications or important updates about the website, such as a privacy policy change, <br/>

                We track usage behavior to determine which of our services are most popular and how we can deliver you customized content about restaurants you might enjoy.
                This data is to optimize the site for you and improve our business. <br/> <br/>

                <strong> Children Under Thirteen </strong> <br/>

                The Food App does not kowingly collect personal indefiable information from children under the age of thirteen. We expect that children get the consent of their parent or guardian before using our website. <br/><br/> 


                <strong> Data Retention </strong> <br/>
                We will retain your data as long as your account is active and you continue to require our services. We will retain data to comply with legal obligations, resolve disputes and enforce agreements. <br/><br/> 


                <h3 className="text-muted"> Changes to this Statement </h3>

                The Food App reserves the right to change this Privacy Policy. We will notify you about significant changes in the way we treat personal information by sending a notice to your email specified in your account and by placing a notice on our site.
                We will update the privacy policy on this page accordingly. <br/>
                Your continued use of this site will confirm your acknowledgement and agreement to the modified Privacy Policy. <br/> <br/>


                <h3 className="text-muted"> Contact Us </h3>

                We welcome your questions or comments regarding this Statement of Privacy. <br/>
                If you believe we are violating this agreement in any way, or want to further understand your privacy, please contact us at: <br/><br/>

                <strong> Email Address <br/> </strong> 
                thefoodapp@thefoodapp.com <br/> <br/>

                <strong> Telephone Number <br/> </strong>
                123-456-7890 <br/> <br/>

                Effective as of April 20, 2020 <br/><br/>



            </div>

            <FooterComponent></FooterComponent>
        </div>
    )

}

export default (PrivacyPopUpContainer);

