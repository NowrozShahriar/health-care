import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-menu">
                <section>
                    <h1>eHealthCare</h1>
                    <p><i className="fas fa-phone-alt"></i> (+880)157-777-9999</p>
                    <p><i className="far fa-envelope"></i> support@ehealthcare.com</p>
                    <p><i className="far fa-clock"></i> Open 24/7</p>
                </section>
                <section>
                    <h3>Quick Links</h3>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Services</p>
                    <p>Special Services</p>
                </section>
                <section>
                    <h3>Useful Links</h3>
                    <p>Sitemap</p>
                    <p>Doctor's Information</p>
                    <p>Doctor's Forum</p>
                    <p>Appointment</p>
                </section>
                <section>
                    <h3>Newsletter Subscribe</h3>
                    <input type="text" placeholder="Name" />
                    <br />
                    <input type="email" placeholder="Email" />
                    <br />
                    <button>Subscribe</button>
                </section>
            </div>
            <p style={{fontSize: 'smaller'}}>© 2021 eHealthCare. All rights reserved.</p>
        </div>
    );
};

export default Footer;