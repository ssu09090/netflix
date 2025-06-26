import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

const MovieList = () => {
  const [movies,setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //tmdb info
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWNjNjdlOGY2MTdjMjI4YzljOTc2YmIwNWNkMzljYSIsIm5iZiI6MTczNzYwNjUzNC43Nzc5OTk5LCJzdWIiOiI2NzkxYzU4NjUxNDhmODc2N2NmYTZiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NnACMXUNz6GNI8pX87lg-HmC0rc4Dg0UM3CJmRDeTyk";
  const URL =
    `https://api.themoviedb.org/3/movie/popular`;
  //비동기 요청
  const fetchMovies = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          accept:'application/json'
        },
        params:{
          language:'ko-KR',
          region:'KR',
          page:1
        }
      });
      // console.log(response); //status:200 나오면 정상!
      const movies = response.data.results.slice(0,8);
      if (movies){
        setIsLoading(false);
        setMovies(movies);
      } else {
        setError("데이터를 가져오지 못했습니다");
      }
    } catch (error) {
      setError("에러 발생. 데이터 패치를 하지 못함.")
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchMovies();
  }, []);
  
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={"btn-next"} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={"btn-prev"} onClick={onClick}>
      <MdArrowBackIosNew />
    </div>
  );
}

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="movie-list">
      <h2>지금 뜨는 콘텐츠</h2>
      <Slider {...settings}>
        {movies.map((item, idx) => {
          return (
            <div
              key={idx}
              className="movie-card"
              onClick={() => {
                setSelectMovie(item);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
              <p>{idx + 1}</p>
            </div>
          );
        })}
      </Slider>
      {
        /* 상세 설명 팝업 */
        selectMovie && (
          <div className="movie-popup">
            <button
              onClick={() => {
                setSelectMovie(null);
              }}
            >
              ×
            </button>
            {console.log(selectMovie)}
            <div className="img-wrap"><img
              src={`https://image.tmdb.org/t/p/w500/${selectMovie.backdrop_path}`}
            ></img></div>
            <div className="data-wrap">
            <h3>{selectMovie.title}</h3>
            <p className="data">{selectMovie.release_date}</p>
            <p>{selectMovie.overview}</p>
            <button className="start">시작하기 ＞</button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default MovieList;
