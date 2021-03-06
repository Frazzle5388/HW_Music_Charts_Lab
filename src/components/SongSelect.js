import React from "react";

const SongSelector = ({songs, onSongSelected}) => {
    const handleChange = function(event) {
        const chosenSong = songs[event.target.value];
        onSongSelected(chosenSong);
    }

    const songOptions = songs.map((song, index) => {
        return <option value={index} key={index}>{song.feed.entry.im:name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Song</option>
            {songOptions}
        </select>
    )
}

export default SongSelector;