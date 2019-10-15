import React from 'react';
import PropTypes from 'prop-types';
import { ControlsSection, ControlsButton } from './ControlsStyled.js';

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

export default Controls;
