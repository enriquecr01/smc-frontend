import React, { memo } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


//===========================================
// STYLES OBJECT
//===========================================
const s = {
    container: "abs fullW fullH",
    slideImage: "fullH fullW imgCover"
};

//===========================================
// SLIDE FUNCTIONAL COMPONENT
//===========================================
const Slide = ({ position, transition, image, title, description, buttonText }) => {
    const s2 = { 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${ image })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        'backgroundAttachment': 'fixed'
    }
    
    return (
        <div className={s.container + " " + position + " " + transition} style={s2}>
            <div className="hero">
                <div className="hero-inner">
                    {title !== '' &&
                        <h1>{title}</h1>
                    }
                    {description !== '' &&
                        <h2>{description}</h2>
                    }
                    {/* The Condition and && is like an ngif in angular only renders if the condition is true */}
                    {buttonText !== '' &&
                        <Button variant="contained" color="primary">
                            <Typography variant="h6">
                            {buttonText}
                            </Typography>
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default memo(Slide);