import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4"; // Correct path to the video file

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false); // Close video player when clicking outside the video
    }
  };

  return (
    <div className={`videoPlayer ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
