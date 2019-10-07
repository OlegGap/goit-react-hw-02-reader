import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ControlsSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const ButtonStyle = styled.button`
  display: inline-block;
  min-width: 240px;
  border: 0
  padding: 8px 16px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 3px;
  background-color: #3884ff;
  transition: all 200ms ease;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &[disabled] {
    pointer-events: none;
    background-color: #bdbdbd;
  }
  &:hover,
  &:focus {
    background-color: #1f65d6;
  }
`;

const Controls = ({ items, currentPage }) => {
  const disabledButtonNext = currentPage === items.length;
  const disabledButtonPrev = currentPage === 1;

  return (
    <ControlsSection className="controls">
      <Link
        to={{
          pathname: '/reader',
          search: `?item=${disabledButtonPrev ? currentPage : currentPage - 1}`,
        }}
      >
        <ButtonStyle
          type="button"
          className="button"
          disabled={disabledButtonPrev}
        >
          Назад
        </ButtonStyle>
      </Link>
      <Link
        to={{
          pathname: '/reader',
          search: `?item=${disabledButtonNext ? currentPage : currentPage + 1}`,
        }}
      >
        <ButtonStyle
          type="button"
          className="button"
          disabled={disabledButtonNext}
        >
          Вперед
        </ButtonStyle>
      </Link>
    </ControlsSection>
  );
};

Controls.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Controls;
