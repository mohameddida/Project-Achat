import React from 'react'
import ContactFooter from '../Components/Footer/ContactFooter'
import LinksButton from '../Components/Footer/LinksButton'

const Footer = () => {
    return (
        <footer className="p-10 footer bg-gray-800 overflow-hidden shadow text-gray-50">
            <div>
                <span className="footer-title">Services</span>
                <LinksButton name="Branding" />
                <LinksButton name="Design" />
                <LinksButton name="Marketing" />
                <LinksButton name="Advertisement" />
            </div>
            <div className="divider divider-vertical "></div>
            <div>
                <span className="footer-title">Company</span>
                <LinksButton name="About us" />
                <LinksButton name="Contact" />
                <LinksButton name="Jobs" />
                <LinksButton name="Press kit" />
            </div>
            <div className="divider divider-vertical "></div>
            <div>
                <span class="footer-title">Legal</span>
                <LinksButton name="Terms of use" />
                <LinksButton name="Privacy policy" />
                <LinksButton name="Cookie policy" />
            </div>
            <div className="divider divider-vertical "></div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <ContactFooter />
                </div>
            </div>
        </footer>

    )
}

export default Footer
