import MenuList from './MenuList.js';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

class WindowedSelect extends React.Component {
  render () {
    const {
      options,
      windowThreshold,
    } = this.props;

    const isWindow = options.length >= windowThreshold;
    return (
      <Select {...this.props}
        components={{
          ...this.props.components,
          ...(
            isWindow
              ? { MenuList }
              : {}
          )
        }}
      />
    );
  }
}

WindowedSelect.propTypes = {};
WindowedSelect.defaultProps = {
  windowThreshold: 100,
};

export default WindowedSelect;