import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        location: 'Mumbai',
        date: '',
        email: '',
        details: '',
        budget: '1-3L',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex justify-center pt-10 mt-16 bg-gradient-to-b from-gray-200 to-white">
            <form onSubmit={handleSubmit}>
                <section className="bg-coolGray-50 py-4">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -m-3 mb-3">
                            <div className="w-full md:w-1/4 p-3">
                                <h2 className="text-coolGray-900 text-lg font-semibold">Personal info</h2>
                                <p className="text-xs text-coolGray-500 font-medium">At Inhearts Event Planner, we redefine event experiences with
                                    creativity, precision, and passion.
                                    Our expert team brings dreams to life, crafting unforgettable moments
                                    that surpass expectations. Let us transform your
                                    vision into reality and make your event a masterpiece of memories.
                                    Experience excellence with us today!</p>
                            </div>
                            <div className="w-full md:w-3/4 p-3">
                                <div
                                    className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                                    <div className="flex flex-wrap pb-3 -m-3">
                                        <div className="w-full md:w-1/2 p-3">
                                            <p className="mb-1.5 font-medium text-base text-coolGray-800">Name</p>
                                            <input
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                                type="text" placeholder="John"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-3">
                                            <p className="mb-1.5 font-medium text-base text-coolGray-800">Email</p>
                                            <input
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                                placeholder="johndoe@flex.co"
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-3">
                                            <p className="mb-1.5 font-medium text-base text-coolGray-800">Phone
                                                number</p>
                                            <input
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                                type="text"
                                                id="contact"
                                                name="contact"
                                                value={formData.contact}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="w-full md:w-1/2 p-3">
                                            <p className="mb-1.5 font-medium text-base text-coolGray-800">Country</p>
                                            <div className="relative">
                                                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                                     width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z"
                                                        fill="#8896AB"></path>
                                                </svg>
                                                <select
                                                    className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 hover:border-green-500 rounded-lg shadow-input"
                                                    id="location"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="Mumbai">Mumbai</option>
                                                    <option value="Pune">Pune</option>
                                                    <option value="Varanasi">Varanasi</option>
                                                    <option value="Lonavala">Lonavala</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 p-3">
                                            <p className="mb-1.5 font-medium text-base text-coolGray-800">Event Date</p>
                                            <input
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                                type="date" placeholder="eventDate"
                                                id="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-3">
                                            <p className="mb-1.5 font-medium text-base text-coolGray-800">Budget</p>
                                            <div className="relative">
                                                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                                     width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z"
                                                        fill="#8896AB"></path>
                                                </svg>
                                                <select
                                                    className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 hover:border-green-500 rounded-lg shadow-input"
                                                    id="budget"
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option>1-3L</option>
                                                    <option>4-8L</option>
                                                    <option>8-12L</option>
                                                    <option>12L+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-full p-3">
                                            <p className="mb-1.5 font-medium text-base text-coolGray-800">Details</p>
                                            <input
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                                type="text" placeholder="Details"
                                                value={formData.details}
                                                onChange={handleChange}
                                                id="details"
                                                name="details"
                                            />
                                        </div>
                                        <button type="submit"
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>

                <div className="ml-8">
                    <h2 className="text-lg font-semibold mb-2">Inhearts Event Planner</h2>
                    <p className="text-sm">Email: inheartseventinfo@gmail.com</p>
                    <p className="text-sm">Address: Runwal gardens, Kalyan, Mumbai Maharashtra</p>
                    <p className="text-sm">Lohegaon, Pune, Maharashtra</p>
                    <p className="text-sm">Babatpur, Varanasi, UttarPradesh</p>
                </div>
        </div>
);
};

export default ContactForm;

