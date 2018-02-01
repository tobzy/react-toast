import React, { Component } from 'react';

import './style.css';
import './mobile.css';
class InfoBox extends Component {
  render() {
    let classString = null;
    if(this.props.show){
      classString = "mx-infobox-content show " + this.props.boxType;
    }else {
      classString = "mx-infobox-content " + this.props.boxType;
    }
    return(
      <div className="mx-infobox-wrapper">
        <div className={classString}>
          <div onClick={this.props.onClickHandler}>{this.props.message}</div>
        </div>
      </div>
    );
  }
}

export default InfoBox;
