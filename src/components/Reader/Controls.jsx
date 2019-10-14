import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Controls = ({ items, page, handleChangePage }) => (
  <ControlsSection className="controls">
    <ControlsButton
      type="button"
      onClick={handleChangePage}
      className="button"
      disabled={!page}
      name="prev"
    >
      Назад
    </ControlsButton>
    <ControlsButton
      type="button"
      onClick={handleChangePage}
      className="button"
      disabled={page === items.length - 1}
      name="next"
    >
      Вперед
    </ControlsButton>
  </ControlsSection>
);

Controls.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

const ControlsSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const ControlsButton = styled.button`
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

export default Controls;
