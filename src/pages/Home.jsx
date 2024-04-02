import BackgroundCarousel from "../components/BackgroundCarousel.jsx";
import QuickEnquiryForm from "./QuickEnquiry.jsx";
import {useDispatch, useSelector} from "react-redux";
import {openForm} from "../redux/form/formSlice.js";
import HeadingBar from "../components/Heading.jsx";
import Location from "./Location.jsx";
import CircularLoader from "../components/ProcessFlow.jsx";
import Reviews from "../components/Reviews.jsx";
import {useEffect} from "react";

export default function Home() {
    const { isFormOpen } = useSelector(state => state.form.form)
    const dispatch = useDispatch();

    const toggleEnquiryForm = () => {
        dispatch(openForm())
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(openForm())
        }, 1000); // Show form after 10 seconds (10000 milliseconds)

        return () => clearTimeout(timer);
    }, [dispatch]);
    return (
        <div className="relative h-screen overflow pt-16 overflow-x-hidden">
            <BackgroundCarousel/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div
                    className="bg-black bg-opacity-65 text-white shadow-lg rounded-lg p-8 max-w-full lg:max-w-screen-lg flex flex-col items-center animate-fadeIn">
                    <h1 className="text-6xl md:text-6xl lg:text-6xl font-bold mb-4 text-center">Inhearts Event
                        Planner</h1>
                    <p className="text-4xl md:text-4xl lg:text-4xl font-semibold text-center mb-6">One stop solution for
                        your events</p>
                    <p className="font-grad text-lg md:text-xl lg:text-2xl text-center">We plan your event with
                        affordable
                        packages, ensuring a memorable experience for you and your guests.</p>
                    <button
                        onClick={toggleEnquiryForm}
                        className="bg-red-950 text-white py-4 px-8 rounded-lg mt-6 hover:bg-slate-600 hover:text-white transition duration-300
                         ease-in-out border-2 border-slate-700 hover:border-transparent focus:outline-none focus:border-transparent
                         focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50 text-l font-semibold">
                        Quick Enquiry
                    </button>
                    {isFormOpen && <QuickEnquiryForm />}
                </div>
            </div>
            <div>
            <HeadingBar title={"Our Presence"}/>
            <Location/>
            <HeadingBar title={"Plan Your Event With Us"}/>
             <CircularLoader/>
             <Reviews/>
            </div>
        </div>
    )
}
