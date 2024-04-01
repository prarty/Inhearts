import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const CircularLoader = ({ steps, delay }) => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentStep < steps.length - 1) {
                setCurrentStep(prevStep => prevStep + 1);
            } else {
                clearInterval(interval);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [currentStep, delay, steps.length]);

    return (
        <div className="flex justify-center items-center p-20">
            {steps.map((step, index) => (
                <div key={index}>
                    <h1 className="text-center text-xl md:text-xl lg:text-2xl font-bold animate-pulse duration-2000 transition-colors text-gradient">
                        {step.text}
                    </h1>
                    <div
                        key={index}
                        className={`w-[300px] h-[300px] rounded-full flex justify-center items-center bg-blue-500 text-white relative transition-opacity duration-500 ${
                            index <= currentStep ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{transitionDelay: `${index * 0.1}s`}}
                    >
                        <img
                            src={step.imageUrl}
                            alt={step.altText}
                            className="w-full h-full object-cover absolute inset-0 m-auto"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

CircularLoader.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    delay: PropTypes.number.isRequired,
};

// Usage example
const steps = [
    { imageUrl: '/assets/steps/call.gif', altText: 'Step 1', text: 'Connect with us!' },
    { imageUrl: '/assets/steps/gd.gif', altText: 'Step 2', text: 'We discuss your event' },
    { imageUrl: '/assets/steps/plan.gif', altText: 'Step 3', text: 'We plan and organise' },
    { imageUrl: '/assets/steps/Celebration.gif', altText: 'Step 4', text: 'Enjoy the Event!!' },
]; // Replace with your step images and alt text
const delay = 1000; // Time delay between each step in milliseconds

const ProcessFlow = () => {
    return <CircularLoader steps={steps} delay={delay} />;
};

export default ProcessFlow;
