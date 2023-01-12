import React from 'react';
import { Link } from 'react-router-dom';

const ArchiveHeader = () => {
    return (
        <div className="ArchiveHeader">
            <div className="ArchiveNav">
                <Link to='/'>HOME</Link>
            </div>
            <div className="ArchiveBrand">
                ARCHIVE
            </div>
        </div>
    );
}

export default ArchiveHeader;
