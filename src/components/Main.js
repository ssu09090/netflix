import DetailBar from "./DetailBar";
import Membership from "./Membership";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import WhyJoin from "./WhyJoin";
import FAQ from "./FAQ";

const Main = () => {
  return (
    <main id="main">
      {/* <div className="lang">
        <select>
          <option selected>한국어</option>
          <option>English</option>
        </select>
        <Link to="login">
          <button>로그인</button>
        </Link>
      </div> */}
      <div className="banner">
        <h1>영화, 시리즈 등을 무제한으로</h1>
        <p>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다</p>
        <Membership />
      </div>
            <div className="curve-wrap">
              <div className="curve-circle"></div>
              <div className="gradient-line"></div>
            </div>
      <section>
        <DetailBar />
        <MovieList />
        <WhyJoin />
        <FAQ />
      </section>
    </main>
  );
};

export default Main;
