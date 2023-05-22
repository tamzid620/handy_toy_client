import { Link } from "react-router-dom";
// import lottie from "../../../../public/errorpage.gif"
import lottie from "../../../../public/404.png"
import useTitle from "../../../hooks/useTitle";

const ErrorPage = () => {
    useTitle('Error Found')
    return (
        <div>
            <div className="flex justify-center items-center mb-10">
                <img  style={{ width: '500px' }} src={lottie} alt="" />
            </div>
            <div className="flex justify-center">
                <Link className='px-8 py-3 font-semibold rounded bg-orange-400 text-black' to='/'>Back to homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;