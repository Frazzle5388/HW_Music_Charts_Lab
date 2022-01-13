import React from "react";
import MusicContainer from "../containers/MusicContainer";

const SongDetail = ({selectedSong}) => {
    return (

        <>
            <h3>{selectedSong.name}</h3>
        </>
    )
}

export default SongDetail