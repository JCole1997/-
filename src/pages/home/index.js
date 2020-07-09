import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import List from './components/List';
import Board from "./components/Board";
import Writer from "./components/Writer";
import { actionCreators } from './store';


class Home extends PureComponent {
  handleScroll() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='123' src="https://upload.jianshu.io/admin_banners/web_images/4989/7aee9b231d11e9ba92248e65e8f407343f87376e.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Board></Board>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScroll}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvent() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
   if (document.documentElement.scrollTop > 200) {
     dispatch(actionCreators.toggleTopShow(true))
   } else {
     dispatch(actionCreators.toggleTopShow(false));
   }
  },
});

export default connect(mapState, mapDispatch)(Home);