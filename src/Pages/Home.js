import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="Home">
      <ul>
        <Link className="link" to="/Wired">
          <img
            alt="product img"
            src="https://m.media-amazon.com/images/I/21LFGMQR-EL._AC_UL400_.jpg"
          />
          <p>Wired</p>
        </Link>
      </ul>
      <ul>
        <Link className="link" to="/Wireless">
          <img
            alt="product img"
            src="https://m.media-amazon.com/images/I/51kywrQpbQL._AC_UL400_.jpg"
          />
          <p>Wireless</p>
        </Link>
      </ul>
      <ul>
        <Link className="link" to="/Speaker">
          <img
            alt="product img"
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/a9c78ebe-9361-411a-a94d-66b1d3f258ba._CR0,0,1200,628_SX430_QL70_.jpg"
          />
          <p>Speakers</p>
        </Link>
      </ul>
    </div>
  );
}
