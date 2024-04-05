import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-7">
        <h2 className="text-3xl mb-5">Login With</h2>

        <div>
          <button className="btn btn-outline w-full mb-5">
            {" "}
            <FaGoogle /> Google
          </button>
          <button className="btn btn-outline w-full">
            {" "}
            <FaGithub /> Github
          </button>
        </div>
      </div>

      <div className="p-4 mb-5">
        <h2 className="text-3xl mb-2">Find US</h2>

        <a
          href=""
          className="p-4 flex items-center gap-x-2 border rounded-t-lg"
        >
          <FaFacebook /> Facebook
        </a>
        <a href="" className="p-4 flex items-center gap-x-2 border-x">
          <FaTwitter /> Twitter
        </a>
        <a
          href=""
          className="p-4 flex items-center gap-x-2 border rounded-b-lg"
        >
          <FaInstagram /> Instagram
        </a>
      </div>

      <div className="p-4 mb-7 bg-[#F3F3F3]">
        <h2 className="text-3xl mb-2">Q Zone</h2>

        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
