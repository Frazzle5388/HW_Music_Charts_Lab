import React, { useEffect } from "react";
import SongList from "../components/SongList";
import SongDetail from "../components/SongDetail";
import SongSelector from "../components/SongSelect";

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        getSongs();

    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs))
    }

    const onSongSelected = function(song){
        setSelectedSong(song);
    }

    return (
        <>
        <SongSelector songs={songs} onSongSelected={onSongSelected}/>
        {selectedSong ? <SongDetail selectedSong={selectedSong} /> : null}
        </>
    )
}

export default MusicContainer;