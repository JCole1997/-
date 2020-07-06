import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`

export const Logo = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 20px;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: cover;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    line-height: 30px;
    right: 5px;
    bottom: 5px;
    width: 30px;
    border-radius: 15px;
    text-align: center;
    color: #969696;
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 40px;
  background-color: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    &.spin-enter {
      transition: all 0.2s ease-in;
    }
    &.spin-enter-active {
      transform: rotate(360deg);
    }
    &.spin-exit {
      transition: all 0.2s ease-out;
    }
    &.spin-exit-active {
      transform: rotate(360deg);
    }
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem= styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 3px;
`;

export const Addition = styled.div`
  position: absolute;
  height: 56px;
  top: 0;
  right: 0;
`

export const Button = styled.button`
  line-height: 38px;
  border-radius: 20px;
  margin-top: 9px;
  margin-right: 30px;
  padding: 0 20px;
  font-size: 14px;
  border: 1px solid rgba(236,97,73,.7);
  &.reg {
    color: rgba(236,97,73);
    background: #fff;
  }
  &.writing {
    color: #fff;
    background: rgba(236,97,73);
  }
`;