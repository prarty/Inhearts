import {useState} from 'react';
import emailjs from 'emailjs-com';
import {useDispatch, useSelector} from "react-redux";
import {closeForm} from "../redux/form/formSlice.js";

const QuickEnquiryForm = () => {
    const { isFormOpen } = useSelector(state => state.form.form)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        details: '',
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }
        if (formData.phone.trim() === '') {
            newErrors.phone = 'Phone Number is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            event_date: formData.eventDate,
            message: formData.details
        };

        emailjs.send('service_6nrn2jg', 'template_0xvynlf', templateParams, 'Xm9YLFPU1F2VZD0XM')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                // Optionally, reset the form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
        // Handle form submission logic here (e.g., send data to backend or display a message)
        console.log(formData); // For demonstration, log the form data
        dispatch(closeForm()) // Close the form after submission
    };
    return (
        <div>
            {isFormOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 w-sm h-sm max-h-96 max-w-sm mx-auto rounded-lg shadow-lg text-black">
                        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">Quick Enquiry Form</h2>
                        <div
                            className="bg-gradient-to-br from-red-700 via-red-300 to-red-50 max-w-sm w-sm h-sm max-h-96 p-2 rounded-md shadow-md">
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <div className="flex flex-col md:flex-row md:space-x-2 text-sm">
                                    <div className="flex-1">
                                        <label htmlFor="name" className="block text-xs font-bold text-gray-900">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2"
                                            required
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="email" className="block text-xs font-bold text-gray-900 ">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row md:space-x-4">
                                    <div className="flex-1">
                                        <label htmlFor="phone" className="block text-xs font-bold text-gray-900 ">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2"
                                            required
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs font-bold  mt-1">{errors.phone}</p>}
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="eventDate"
                                               className="block text-xs font-bold text-gray-900 ">
                                            Event Date
                                        </label>
                                        <input
                                            type="date"
                                            id="eventDate"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleChange}
                                            className="mt-1 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="details" className="block text-xs font-bold  text-gray-900 ">
                                        Details
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        value={formData.details}
                                        onChange={handleChange}
                                        rows={2}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-red-950 text-xs font-bold text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        onClick={() => dispatch(closeForm())}
                                        className="ml-4 bg-gray-300 text-xs font-bold  text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuickEnquiryForm;
