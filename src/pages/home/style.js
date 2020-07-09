import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  box-sizing: border-box;
  float: left;
  padding-left: 15px;
  padding-top: 30px;
  width: 66.66667%;
  img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 20px;
  }
`;

export const HomeRight = styled.div`
  box-sizing: border-box;  
  margin-left: 4.16667%;
  padding-top: 30px;
  width: 29.16667%;
  height: 300px;
  float: left;
`;

export const BackTop = styled.div`
  position: fixed;
  padding: 4px;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 25px;
  font-size: 17px;
  border: 1px solid #ccc;
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .pic {
    display: block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 4px;
  }
`;

export const ListInfo = styled.div`
  width: 458px;
  float: left;
  .title {
    margin: -7px 0 4px;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    cursor: pointer;
  }
  .title:hover {
    text-decoration: underline;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const LoadMore = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  background-color: #a5a5a5;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  line-height: 1.42857;
  cursor: pointer;
  color: #fff
`

export const BoardWrapper = styled.div`
  margin-top: -10px;
  width: 280px;

`

export const BoardItem = styled.div`
  margin: 7px 0;
  width: 280px;
  height: 50px;
  background: url(${props => props.imgURL});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  overflow: hidden;
  width: 280px;
  height: 300px;
`

export const Download = styled.div`
  position: relative;
  float: left;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  line-height: 1.42857;
  .pic {
  width: 60px;
  height: 60px;
  opacity: .85;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: pointer;
`;

export const DownloadInfo = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 12px;
  .title {
    font-size: 15px;
    color: #333;
  }
  .words {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`