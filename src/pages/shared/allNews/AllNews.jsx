import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllNews = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;
  return (
    <div className="border mt-5">
      <div className="bg-[#F3F3F3] p-5 flex justify-between items-center mb-4">
        <div className="flex gap-x-3 items-center">
          <figure className="w-12 h-12 rounded-full">
            <img src={author.img} className="rounded-full" alt="" />
          </figure>

          <div>
            <h2 className="text-lg text-[#403F3F] font-bold">{author.name}</h2>
            <span className="text-sm text-[#706F6F]">
              {author.published_date}
            </span>
          </div>
        </div>

        <div className="flex gap-2 text-[#706F6F]">
          <CiBookmark size={24} />

          <CiShare2 size={24} />
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-lg text-[#403F3F] font-bold mb-6">{title}</h2>

        <figure className="mb-8">
          <img src={image_url} alt="" />
        </figure>

        <p className="text-[#706F6F] flex flex-col border-b pb-5 mb-6">
          {details}
          <Link
            to="/"
            className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-clip text-transparent bg-clip-text"
          >
            Read More
          </Link>
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="flex gap-1">
              <FaStar size={20} className="text-[#FF8C47]" />
              <FaStar size={20} className="text-[#FF8C47]" />
              <FaStar size={20} className="text-[#FF8C47]" />
              <FaStar size={20} className="text-[#FF8C47]" />
              <FaStar size={20} className="text-[#FF8C47]" />
            </div>

            <p className="text-[#706F6F]">{rating.number}</p>
          </div>
          <div className="flex gap-1 items-center text-[#706F6F]">
            <FaEye size={24} />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

AllNews.propTypes = {
  news: PropTypes.object,
};

export default AllNews;
