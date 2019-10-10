import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Publication from './Publication';
import Counter from './Counter';
import Controls from './Controls';

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  handleNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handlePrevPage = () => {
    this.setState(prevState => ({
      page: prevState.page - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { page } = this.state;
    return (
      <ReaderDiv className="reader">
        <Publication items={items} page={page} />
        <Counter items={items} page={page} />
        <Controls
          items={items}
          page={page}
          handleNextPage={this.handleNextPage}
          handlePrevPage={this.handlePrevPage}
        />
      </ReaderDiv>
    );
  }
}
Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

const ReaderDiv = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
