import React, { useEffect, useState } from "react";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the fetch request when the component mounts
    fetch("http://frontedhng.onrender.com/videos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the response data is an array of video objects
        setVideos(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []); // The empty array [] means this effect will run once, similar to componentDidMount

  return (
    <div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                {video.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VideoList;
