const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-80 shadow-md h-80">
      <img className="rounded-md" src={thumbnails?.medium?.url} alt="thumbnail" />
      <ul>
        <li className="font-bold my-2 overflow-hidden text-ellipsis line-clamp-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
