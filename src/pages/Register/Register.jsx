
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Register = () => {
  return (
    <div className="bg-[F3F3F3]">
      <Navbar />

      <div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
        <div className="bg-[#fff] shadow-2xl w-1/2 py-7 px-20">
          <form>
            <h2 className="text-4xl text-[#403F3F] font-semibold border-b pb-7 mb-10 text-center">
              Register your account
            </h2>

            <div className="flex flex-col gap-1 mb-5">
              <label className="text-lg text-[#403F3F] font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full text-[#9F9F9F] border-0 outline-none bg-[#F3F3F3] py-2 px-5"
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label className="text-lg text-[#403F3F] font-semibold">
                Photo URL
              </label>
              <input
                type="text"
                name="phot_url"
                placeholder="Your Photo URL"
                required
                className="w-full text-[#9F9F9F] border-0 outline-none bg-[#F3F3F3] py-2 px-5"
              />
            </div>

            <div className="flex flex-col gap-1 mb-5">
              <label className="text-lg text-[#403F3F] font-semibold">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your E-Mail"
                required
                className="w-full text-[#9F9F9F] border-0 outline-none bg-[#F3F3F3] py-2 px-5"
              />
            </div>

            <div className="flex flex-col gap-1 mb-5">
              <label className="text-lg text-[#403F3F] font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                required
                className="w-full text-[#9F9F9F] border-0 outline-none bg-[#F3F3F3] py-2 px-5"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-7 py-3 px-5 bg-[#403F3F] text-white text-lg"
            >
              Login
            </button>
          </form>

          <p className="text-[#706F6F] mt-5 text-center py-8">
            Already Have an Account?
            <Link
              to="/login"
              className="font-semibold bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-clip text-transparent bg-clip-text"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register