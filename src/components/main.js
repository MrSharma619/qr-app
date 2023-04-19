import "./main.css";

function Main() {
  return (
    <div className="custom-card">
      <div className="div-qr">
        <img
          className="div-qr-img"
          src="images/image-qr-code.png"
          alt="qr-code"
        />
      </div>
      <br></br>
      <br></br>

      <div className="div-text-bold">
        <span>Improve your front-end skills by building projects</span>
      </div>

      <div className="div-text-light">
        <span>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </span>
      </div>
    </div>
  );
}

export default Main;
