import React, { Component } from 'react'
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
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
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
            <CSSTransition
              in={this.state.focus}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focus ? "focused" : ""}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.state.focus ? "focused iconfont" : "iconfont"}>
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

  handleInputFocus() {
    this.setState({
      focus: true,
    });
  }
  handleInputBlur() {
    this.setState({
      focus: false
    })
  }
}

export default Header