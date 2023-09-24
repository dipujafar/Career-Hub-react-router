import PropTypes from "prop-types";
const Title = ({ title, description }) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Title;
