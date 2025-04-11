import { useState } from 'react';
import { LinkedList } from '../lists/LinkedList';

const songList = new LinkedList();
['Song A', 'Song B', 'Song C'].forEach(song => songList.add(song));

const LinkedListPage = () => {
  const [current, setCurrent] = useState(songList.currentSong());

  const handlePlay = () => {
    const next = songList.playNext();
    setCurrent(next);
  };

  const handleReset = () => {
    songList.reset();
    setCurrent(songList.currentSong());
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🎵 Song Player (Linked List)</h2>
      <p>Now Playing: <strong>{current}</strong></p>
      <button onClick={handlePlay}>Next Song</button>
      <button onClick={handleReset}>Restart</button>
    </div>
  );
};

export default LinkedListPage;
