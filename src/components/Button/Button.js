import React from 'react';
import StyledButton from './Button_styles.js';

class Button extends React.Component {
    render() {
        const { color, textColor, hoverColor, hoverTextColor, outline, textSize } = this.props
        return(
            <div>
                <StyledButton color={color} textColor={textColor} hoverColor={hoverColor} hoverTextColor={hoverTextColor} outline={outline} textSize={textSize}>Normal</StyledButton>
            </div>
        );
    }
}

export default Button;