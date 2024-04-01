import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
    return (
        <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>

            <a href="#" className="text-gray-600 hover:text-purple-600">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>

            <a href="#" className="text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>

            {/* Twitter */}
            <a href="#" className="text-gray-600 hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
        </div>
    )
}
