import React from 'react';
import PropTypes from 'prop-types';
export default class Imgcom extends React.Component {
  constructor() {
    super();
 
  }
  render() {
    let styles = {
        backgroundImage:`url(${this.props.src})`,
        width:`${this.props.width}`,
        height:`${this.props.height}`,
        showLoading:`${this.props.showLoading}`
    };
    let onClickfunction = ()=>{
      this.props.onClick();  
    };
    return <div className={this.props.className} onClick={onClickfunction} style={styles}>gkjmhkjhgjhg</div>;
  }
}

Imgcom.propTypes = {
    showLoading: PropTypes.bool,
    src: PropTypes.string,
    className:PropTypes.string,
    onClick:PropTypes.func,
    onLoad:PropTypes.func,
    width:PropTypes.string,
    height:PropTypes.string
};