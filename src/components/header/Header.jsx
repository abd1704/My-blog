import "./header.css";

export default function header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm"><h2>Royal & Original</h2></span> */}
        <span className="headerTitleLg">FitFreak</span>
       
      </div>
      <img
        className="headerImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ378W23WBSDp12oVqdtGNTT3Q_Dux-IILMKQ&usqp=CAU"
        alt=""
      />
    </div>
  );
}