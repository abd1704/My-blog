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
            <span className="sidebarTitle">ABOUT ME</span>
            <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400 " 
            alt="" height={100} width={100}
          
            />
            <p>this is about me info </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
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
