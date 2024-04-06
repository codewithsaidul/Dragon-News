import { useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreackingNews from "./BreackingNews";
import AllNews from "../shared/allNews/AllNews";


const Home = () => {
  const [newes, setNews] = useState([]);

  useEffect(() => {
    fetch('./news.json')
    .then(res => res.json())
  .then(data => setNews(data));
  }, [])


  return (
    <div className="mb-10">
      <Header />

      <BreackingNews />

      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
        <div className="h-fit">
          <LeftSideNav />
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-4xl">Dragon News Home</h2>


         <div>
            {
              newes.map(news => <AllNews key={news.id} news={news}/>)
            }
         </div>

        </div>

        <div className="h-fit">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}

export default Home