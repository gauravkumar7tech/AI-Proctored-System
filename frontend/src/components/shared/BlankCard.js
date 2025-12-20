import { card } from '@mui/material';
import React from  'react';
import ProPTypes from 'prop-typees';

const BlankCard = ({children, className}) =>{
    return (
        <card
        sx={{p:0, position : 'relative'}}
        className={className}
        elevation={9}
        varient={undefined}
        >
            {children}
        </card>
    );
};

BlankCard.ProPTypes = {
    children: ProPTypes.node,
};

export default BlankCard;