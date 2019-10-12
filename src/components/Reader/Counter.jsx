import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Counter = ({ items, page }) => (
  <CounterP className="counter">
    {page + 1}/{items.length}
  </CounterP>
);

Counter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
};

const CounterP = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 16px;
`;

export default Counter;
