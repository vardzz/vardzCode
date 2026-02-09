import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface FontIconProps {
    icon: IconDefinition;
    className?: string;
    [key: string]: any; // Allow other props like onClick, style, etc.
}

const FontIcon: React.FC<FontIconProps> = ({ icon, className, ...props }) => {
    return <FontAwesomeIcon icon={icon} className={className} {...props} />;
};

export default FontIcon;
