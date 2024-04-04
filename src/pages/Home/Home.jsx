import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";


const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>


      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="border">
            <LeftSideNav/>
        </div>

        <div className="lg:col-span-2 border">
            <h2 className="text-4xl">News Comming Soon</h2>
        </div>

        <div className="border">
            <RightSideNav/>
        </div>

      </div>
    </div>
  );
}

export default Home