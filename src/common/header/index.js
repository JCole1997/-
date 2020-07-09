import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from "./style";

class Header extends Component {

  getListArea() {
    const {
      focus,
      mouseIn,
      spin,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newPage = list.toJS();
    const pageList = [];

    for(let i = (page - 1) * 10; i < page * 10; i++) {
      if(newPage[i] === undefined) break;
      pageList.push(
        <SearchInfoItem key={newPage[i]}>{newPage[i]}</SearchInfoItem>
      );
    }

    if (focus || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, spin)}
            >
              <CSSTransition in={spin} timeout={200} classNames="spin">
                <i className="iconfont spin">&#xe851;</i>
              </CSSTransition>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      focus,
      handleInputFocus,
      handleInputBlur,
      list,
      login,
      logout,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {login ? (
            <NavItem onClick={logout} className="right">
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focus} timeout={200} classNames="slide">
              <NavSearch
                className={focus ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focus ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe623;
            </i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Button className="reg">注册</Button>
            <Link to='/write'>
              <Button className="writing">
                <i className="iconfont">&#xe708;</i>写文章
              </Button>
            </Link>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(["header", "focus"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    spin: state.getIn(["header", "spin"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(['login', 'login'])
    // focus: state.get('header').get('focus')
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      dispatch(actionCreators.switchSpin(spin));
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)