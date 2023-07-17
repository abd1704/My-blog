import "./header.css";

export default function header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"><h2>Royal & Original</h2></span>
        <span className="headerTitleLg">BLOG</span>
       
      </div>
      <img
        className="headerImg"
        src="https://e1.pxfuel.com/desktop-wallpaper/67/407/desktop-wallpaper-30-forts-in-maharashtra-to-experience-its-rich-heritage-in-2022-maharashtra-fort.jpg"
        alt=""
      />
    </div>
  );
}