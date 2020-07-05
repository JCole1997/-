import React from 'react';
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from "./style";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focus} timeout={200} classNames="slide">
            <NavSearch
              className={props.focus ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focus ? "focused iconfont" : "iconfont"}>
            &#xe623;
          </i>
        </SearchWrapper>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writing">
            <i className="iconfont">&#xe708;</i>写文章
          </Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus'])
    // focus: state.get('header').get('focus')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)