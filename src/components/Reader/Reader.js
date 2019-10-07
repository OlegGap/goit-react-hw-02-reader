import React, { Component } from 'react';
import queryString from 'query-string';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Publication from './Publication';
import Counter from './Counter';
import Controls from './Controls';

const ReaderDiv = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
export default class Reader extends Component {
  parseQueryFromUrl = () => {
    return queryString.parse(this.props.location.search);
  };

  render() {
    const { items } = this.props;
    const currentPage = Number(this.parseQueryFromUrl().item);
    return (
      <ReaderDiv className="reader">
        <Publication items={items} page={currentPage} />
        <Counter items={items} page={currentPage} />
        <Controls items={items} currentPage={currentPage} />
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
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
