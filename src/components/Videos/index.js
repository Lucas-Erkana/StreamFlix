import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../assets/styles/media.scss";
import { FaPlay } from "react-icons/fa";

import EmptyMessage from "../EmptyMessage";
import Loading from "../../UI/Loading";
import Modal from "../../UI/Modal";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../utils/constants";

const Videos = ({ id }) => {
  const url = `movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [videoPath, setVideoPath] = useState("");
  const isVideos = data.results?.length;

  const handleClick = (path) => {
    setIsOpenModal(true);
    setVideoPath(path);
  };

  return (
    <Loading loading={isLoading}>
      {isVideos ? (
        <div className="media_outer fade_in">
          <div className="media_inner">
            {data.results?.map((video, i) => {
              const { key, name, type } = video;

              const src = `https://i3.ytimg.com/vi/${key}/maxresdefault.jpg`;

              return (
                <div key={i} className="media_item">
                  <figure>
                    <picture>
                      <LazyLoadImage
                        src={src}
                        alt="media"
                        effect="blur"
                        onClick={() => handleClick(videoPath)}
                      />
                    </picture>
                  </figure>
                  <div className="video_info_outer">
                    <div className="video_icon">
                      <FaPlay onClick={() => handleClick(key)} />
                    </div>
                    <div className="video_info_inner">
                      <h4>{name}</h4>
                      <p>{type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <Modal open={isOpenModal} setOpen={setIsOpenModal}>
              <iframe
                title="frame"
                src={`https://www.youtube.com/embed/${videoPath}?autoplay=1&mute=1`}
                frameBorder="0"
                allowFullScreen
              />
            </Modal>
          </div>
        </div>
      ) : (
        <EmptyMessage msg="No videos" isHalf />
      )}
    </Loading>
  );
};

export default Videos;
