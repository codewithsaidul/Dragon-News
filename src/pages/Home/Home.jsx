import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreackingNews from "./BreackingNews";


const Home = () => {
  return (
    <div className="mb-10">
        <Header/>

        <BreackingNews/>

        <Navbar/>


      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="border h-fit">
            <LeftSideNav/>
        </div>

        <div className="lg:col-span-2 border h-fit">
            <h2 className="text-4xl">News Comming Soon</h2>
        </div>

        <div className="border h-fit">
            <RightSideNav/>
        </div>

      </div>
    </div>
  );
}

export default Home