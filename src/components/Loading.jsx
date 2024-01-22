import { RotatingLines } from "react-loader-spinner";
import PropTypes from "prop-types";

const Loading = ({ wh }) => {
  Loading.propTypes = {
    wh: PropTypes.number,
  };
  return (
    <div className="w-full flex justify-center mt-20">
      <RotatingLines
        visible={true}
        height={wh}
        width={wh}
        color="#538231"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
