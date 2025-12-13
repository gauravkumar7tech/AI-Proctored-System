import React from "react";
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageContainer = ({title, description, childern}) => (
    <div>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Helmet>
        {childern}
    </div>
);
PageContainer.PropTypes ={
    title:PropTypes.string,
    description:PropTypes.string,
    childern:PropTypes.node,
};
export default PageContainer;