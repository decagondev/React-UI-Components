import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = props => {
  return (
    <div className="header-title-wrapper">
      <div className="header-user-name">Lambda School</div>
      <div className="header-user-tag">@LambdaSchool</div>
      <div className="header-seperator">&bull;</div>
      <div className="header-creation-date">{moment().format("MMM D")}</div>
    </div>
  );
};

export default HeaderTitle;
