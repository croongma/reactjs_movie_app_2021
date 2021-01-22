import React from "react";

class Detail extends React.Component {
    componentDidMount() {
      const { location, history } = this.props;
    //   console.log(location)
      if (location.state === undefined) { // 버튼이 아닌 url로 접속하면 홈으로 리다이렉트 시킴
        history.push("/");
      }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
          return <span>{location.state.title}</span>;
        } else {
          return null;
        }
    }
}

export default Detail;