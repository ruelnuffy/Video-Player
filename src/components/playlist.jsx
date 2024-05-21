// src/components/Playlist.js
import React from "react";

const Playlist = ({ videos, onSelectVideo }) => {
  return (
    <dl class="max-w-full text-gray-900 divide-y divide-black-200 dark:text-black dark:divide-back-700 p-10">
      <div class="flex flex-col w-full">
        {videos.map((video) => (
          <div
            className="flex-1 flex justify-between items-center"
            key={video.id}
            onClick={() => onSelectVideo(video.url)}
          >
            <div className="justify-around relative  items-center p-2">
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-4">
                <div className="h-4 w-48 -300 rounded">
                  <a>
                    <dt className="mb-1 text- lg text-gray-900 dark:text-black w-full">
                      {" "}
                      {video.title}
                    </dt>
                  </a>
                </div>
                <div className="">
                  {" "}
                  <button
                    key={video.id}
                    onClick={() => onSelectVideo(video.url)}
                    type="button"
                    class="text-white py-2 px-6 rounded-md bg-red-500 hover:bg-red-600"
                  >
                    Play Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </dl>
  );
};

export default Playlist;
