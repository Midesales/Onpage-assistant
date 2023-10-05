import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoList() {
  const { videoId } = useParams();
  const [videoUrl, setVideoUrl] = useState("");
  const [transUrl, setTransUrl] = useState("");

 useEffect(() => {
   setVideoUrl(`https://frontedhng.onrender.com/videos/${videoId}`);
 }, [videoId]);


  useEffect(() => {
    setTransUrl( `https://frontedhng.onrender.com/transcript/${videoId}`);
  }, [videoId]);



  return (
    <div>
      {videoUrl ? (
        <div className="flex flex-col gap-8">
          <div>
            <video controls width="640" height="480">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>

          <div>
            <h3 className="font-bold pb-2">Transcript</h3>
            <select
              name="language"
              id="lang"
              className="w-44 text-[#7E7E7E] border-2  outline-none"
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
            <p>{transUrl}</p>

          </div>
        </div>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}


export default VideoList;
