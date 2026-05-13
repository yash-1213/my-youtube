import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useSearchVideo from "../hooks/useSearchVideo";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    videos.length && (
      <div className="flex flex-wrap px-3">
        {videos.map((video) => (
          <Link key={video?.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
