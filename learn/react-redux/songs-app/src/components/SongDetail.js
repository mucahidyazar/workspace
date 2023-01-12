import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    return (
        <div>
            {
                props.song 
                    ? (
                        <div>
                            <h3>Details for</h3>
                            <p>Title: {props.song.title}</p>
                            <p>Duration: {props.song.duration}</p>
                        </div>
                    ) : <p>Please select a song</p>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);