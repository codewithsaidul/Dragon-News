import moment from 'moment';
import HeaderImg from '../../../assets/logo.png'

const Header = () => {
  return (
    <div className="text-center mt-12">
      <figure>
        <img className='mx-auto' src={HeaderImg} alt="Header Image" />
      </figure>

      <h2 className="text-lg text-[#706F6F] my-3">
        Journalism Without Fear or Favour
      </h2>

      <p className="text-lg text-[#706F6F] font-medium mb-7">
        <span className="text-[#403F3F] mr-2">{moment().format("dddd,")}</span>
        {moment().format("MMMM D, YYYY")}
      </p>
    </div>
  );
}

export default Header