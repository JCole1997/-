import styled from 'styled-components';

export const  LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`

export const LoginBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  margin: 80px auto 0;
  padding: 50px 50px 30px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1)
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  padding: 0 20px;
  background: hsla(0,0%,71%,.1);
`

export const Button = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #3194d0;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  margin: 20px auto 0;
  text-align: center;
`;