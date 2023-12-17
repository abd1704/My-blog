import "./sidebar.css"
import axios from "axios";
import { useEffect,useState } from "react";
import { Url } from "../../Url";
import { Link } from "react-router-dom";

export default function Sidebar() {
const[cats,setCats]=useState([]);
useEffect(()=>{
    const getCats = async ()=>
    {
        const res = await axios.get(`${Url}categories`)
        setCats(res.data)
    };
    getCats();
},[])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT </span>
            <img
                src="data:image/png;base64,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 " 
            alt="" height={100} width={100}
          
            />
            <p><b>Abhishek Tongale</b></p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle"><b><h3>Categories</h3></b></span>
        <ul className="sidebarList">
        {cats.map((c, index) =>(
            <Link to={`/?cat=${c.name}`} className="link" key={index}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            
        ))}
           
            
        </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
            </div>
        </div>
    </div>
  )
}
