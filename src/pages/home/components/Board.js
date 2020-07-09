import React, { PureComponent } from "react";
import { BoardItem, BoardWrapper } from '../style';
import { connect } from 'react-redux';

class Board extends PureComponent {
  render() {
    return (
      <BoardWrapper>
        {this.props.list.map((item) => {
          return <BoardItem key={item.get("id")} imgURL={item.get("imgURL")} />;
        })}
      </BoardWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'boardList'])
})

export default connect(mapState, null)(Board);
