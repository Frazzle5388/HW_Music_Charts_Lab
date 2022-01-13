import React from "react";

const SongItem = ({song}) => {
    const handleClick = function() {
        console.log(`Clicked on ${song}`)
    }

    return <li onClick={handleClick}>{song.feed.entry.im:name}</li>
}

export default SongItem;