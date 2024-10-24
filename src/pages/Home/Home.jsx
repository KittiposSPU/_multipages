import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="box1">
        <span>
          <div className="home-image"></div>
          <div className="home-text">
            <h2 className="home-title">
              <b>Contact</b>
            </h2>
            <h3>Email : kittipos.mek@spumail.net</h3>
          </div>
        </span>
      </div>
      <div className="box2">
        <h1 className="home-title"><b>Introduce Myself</b></h1>
        <h2>ชื่อ : นาย กิตติพศ เมฆสัมพันธ์</h2>
        <h2>รหัส : 6603654</h2>
        <h2>คณะ : เทคโนโลยีสารสนเทศ</h2>
        <h2>สาขา : วิทยาการคอมพิวเตอร์</h2>
        <h2>คำคม : "ไอติมละลายไว แต่ความสุขจากการกินไอติมอยู่ได้นาน"</h2>
      </div>
    </div>
  );
}

export default Home;
