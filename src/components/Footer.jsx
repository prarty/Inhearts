import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-start flex-col lg:flex-row">
                {/* Contact Section */}
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <p className="text-sm">Inheartseventplanner@gmail.com</p>
                    <p className="text-sm">+91 7984312849</p>
                    <div className="mb-4 lg:mb-0 mt-4">
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-600">
                                <FontAwesomeIcon icon={faFacebook} size="2x"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-600">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500">
                                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400">
                                <FontAwesomeIcon icon={faTwitter} size="2x"/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Company Details Section */}
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-2">Inhearts Event Planner</h2>
                    <p className="text-sm">Runwal Gardens, Dombivali,<br></br> Mumbai-421204 </p>
                    <p className="text-sm">Gurudwara coloney, Lohegaon,<br></br> Pune-411047 </p>
                    <p className="text-sm">Babatpur, Varanasi-411047 </p>
                </div>
                {/* Social Media Section */}
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
                    <p className="text-sm lg:text-sm">At Inhearts Event Planner, we redefine event experiences with<br/> creativity, precision, and passion.<br/> Our expert team brings dreams to life, crafting unforgettable moments <br/>that surpass expectations.
                        Let us transform your<br/> vision into reality and make your event a masterpiece of memories.<br/> Experience excellence with us today!</p>
                </div>
                {/* QR Code Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">QR Code</h2>
                    <div className="flex items-center">
                        {/*<FontAwesomeIcon icon={faQrcode} className="mr-2" />*/}
                        <img src="/path/to/qr-code.png" alt="QR Code" className="h-10" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">© {new Date().getFullYear()} Inhearts Event Planner. All rights reserved.</p>
            </div>
        </footer>
    )
}
