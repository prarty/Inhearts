import PropTypes from "prop-types";

const HeadingBar = ({ title }) => {
    return (
        <div className="bg-white text-center py-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">{title}</h2>
        </div>
    );
};

HeadingBar.propTypes = {
    title: PropTypes.string.isRequired,
};
export default HeadingBar;