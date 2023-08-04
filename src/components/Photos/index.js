import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../assets/styles/media.scss";

import EmptyMessage from "../EmptyMessage";
import Loading from "../../UI/Loading";
import Modal from "../../UI/Modal";
import useFetch from "../../hooks/useFetch";
import {
  API_KEY,
  BACKDROP_NOT_FOUND,
  BACKDROP_URL,
} from "../../utils/constants";

const Photos = ({ id }) => {
  const url = `movie/${id}/images?api_key=${API_KEY}&language=en-US&include_image_language=null`;
  const { data, isLoading } = useFetch(url);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [photoPath, setPhotoPath] = useState("");
  const isPhotos = data.backdrops?.length;

  const handleClick = (path) => {
    setIsOpenModal(true);
    setPhotoPath(path);
  };

  return (
    <Loading loading={isLoading}>
      {isPhotos ? (
        <div className="media_outer fade_in">
          <div className="media_inner">
            {data.backdrops?.map((photo, i) => {
              const { file_path } = photo;

              const src = file_path
                ? BACKDROP_URL + file_path
                : BACKDROP_NOT_FOUND;

              return (
                <div key={i} className="media_item media_item_photos">
                  <figure>
                    <picture>
                      <LazyLoadImage
                        src={src}
                        alt="media"
                        effect="blur"
                        onClick={() => handleClick(file_path)}
                      />
                    </picture>
                  </figure>
                </div>
              );
            })}
            <Modal open={isOpenModal} setOpen={setIsOpenModal}>
              <img src={BACKDROP_URL + photoPath} alt="media" />
            </Modal>
          </div>
        </div>
      ) : (
        <EmptyMessage msg="No photos" isHalf />
      )}
    </Loading>
  );
};

export default Photos;
