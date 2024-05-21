import React, { useState } from "react";
import ReactPlayer from "react-player";
import ctl from "@netlify/classnames-template-literals";

const Video = ({ src, title  }) => {
  const [playbackRate, setPlaybackRate] = useState(1);

  const handlePlaybackRateChange = (event) => {
    setPlaybackRate(parseFloat(event.target.value));
  };

  return (
    <section className={sectionStyle}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>
        <ReactPlayer url={src} controls playbackRate={playbackRate} />
      </div>
      <div className={controlsStyle}>
        <label htmlFor="playbackRate" className="text-black">Playback Speed: </label>
        <select
          id="playbackRate"
          value={playbackRate}
          onChange={handlePlaybackRateChange}
          className={selectStyle}
        >
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
     
    </section>
  );
};

const sectionStyle = ctl(`
  text-center 
  text-white 
  w-3/4
  mx-auto
`);

const controlsStyle = ctl(`
  mt-4
`);

const selectStyle = ctl(`
  ml-2
  bg-gray-700 
  text-white 
  p-1 
  rounded
`);
export default Video;
