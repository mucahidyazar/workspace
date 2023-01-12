import React from 'react';
import TimelineData from '../data';
import TimlelineItem from './TimelineItem';

const Timeline = () => TimelineData.length > 0 && (
    <div className="timeline-container">
        {TimelineData.map((data, index) => (
            <TimlelineItem data={data} key={index} />
        ))}
    </div>
)

export default Timeline;