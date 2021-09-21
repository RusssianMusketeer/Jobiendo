import React from 'react';
import './job-detail.styles.scss';
import { useLocation } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

const JobDetail = () => {
    const location:any= useLocation();

    return(
        <section>
        <div className="job-detail">
        { ReactHtmlParser(location.state) }
        </div>
        </section>
    )
};

export default JobDetail;