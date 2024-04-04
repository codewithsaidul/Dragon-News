import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreackingNews = () => {
  return (
    <div className="mb-5">
      <div className="flex py-6 px-5 bg-[#F3F3F3] items-center">
        <button className="py-3 px-5 bg-[#D72050] text-white">Latest</button>

        <div>
          <Marquee pauseOnHover={true} speed={150}>
            <Link to="/" className="mr-16">
              I can be a React component, multiple React components, or just
              some text.
            </Link>
            <Link to="/" className="mr-16">
              I can be a React component, multiple React components, or just
              some text.
            </Link>
            <Link to="/" className="mr-16">
              I can be a React component, multiple React components, or just
              some text.
            </Link>
            <Link to="/" className="mr-16">
              I can be a React component, multiple React components, or just
              some text.
            </Link>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default BreackingNews