import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// import PropTypes from "prop-types";
// import Potato from './Potato';

// function Food({ favourite }) { // props.favourite와 같음(인자로 받은 객체 내부의 favourite 가져오기)
//   return <h1>I like {favourite}</h1>;
// } 

// component : HTML을 반환하는 함수! 항상 대문자

// class component(react는 자동으로 모든 class component의 render method를 실행함)
// state : object다. component의 data를 넣을 공간이며, 이 데이터는 변한다
class App extends React.Component {
  // state = {
  //   count: 0
  // };
  // add = () => {  // setState를 호출하면, react는 새로운 state와 함께 render function을 다시 호출한다
  //   this.setState(current => ({ count: current.count + 1 })); // current : 현재 state
  // };
  // minus = () => {
  //   this.setState(current => ({ count: current.count - 1 }));
  // };
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); // 비동기 처리, axios가 끝날 때까지 기다린다
    this.setState({ movies, isLoading: false }); // movies : movies
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    this.getMovies();
  }



  /* component 생애주기 */

  // componentDidMount() { 
  //   console.log("Component rendered");
  // }
  // componentDidUpdate() {
  //   console.log("I just updated");
  // }
  // componentWillUnmount() { // component가 사라질때
  //   console.log("Goodbye, cruel world");
  // }

  render() {
    // const { isLoading } = this.state; // const isLoading = this.state.isLoading와 같은 의미
    // return (<div>{isLoading ? "Loading..." : "We are ready"}</div>);
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>) : 
        (<div className="movies">
          {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
        </div>
        )}
      </section>
      );
  }
}

/* function component*/

// function App() {
//   return (
//     <div>
//       { // 중괄호 : javascript
//       foodILike.map(dish => ( // 각 element에 함수 적용한 array 반환
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} /> // key prop는 Food로 전달 X(리액트 내부에서만 사용). Unique key prop을 설정한 것
//       ))}
//     </div>
//   );
// }


export default App;
