import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontIcon = ({ icon, className, ...props }) => {
    return <FontAwesomeIcon icon={icon} className={className} {...props} />;
};

export default FontIcon;
