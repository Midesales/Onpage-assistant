import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoList() {
  const { videoId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    // Fetch the video URL based on the videoId
    fetch(`https://frontedhng.onrender.com/videos/${videoId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        // Assuming the response data contains the video URL
        setVideoUrl(response.url);
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
      });
  }, [videoId]);

  return (
    <div>
      {videoUrl ? (
        <video controls width="640" height="480">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default VideoList;






