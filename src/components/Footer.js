import React from "react";
import PropTypes from 'prop-types';
const Footer = (props) => {
  const { title, website, code, isOpen } = props;
  return (
    <div>
      {/* <h3>{props.title} &copy; Footer {new Date().getFullYear()}</h3>
      <p>{props.website} {props.code}</p> */}

      <h3>
        {title} &copy; Footer {new Date().getFullYear()}
      </h3>
      <p>
        {website} {code} {isOpen}
      </p>
    </div>
  );
};
Footer.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    code: PropTypes.number,
    isOpen: PropTypes.bool
}

export default Footer;
