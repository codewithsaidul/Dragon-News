import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  return (
    <div className="p-5">
      <h2 className="text-3xl">All Categories</h2>

      <div className="flex flex-col px-5 gap-y-6 mt-5">
        {categories.map((categori) => (
          <NavLink
            className={({ isActive }) => (isActive ? "bg-[#403F3F] text-xl text-white" : "bg-transparent text-xl text-gray-400")}
            to={`/categori/${categori.id}`}
            key={categori.id}
          >
            {categori.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default LeftSideNav