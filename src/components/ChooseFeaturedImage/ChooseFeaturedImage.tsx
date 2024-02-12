"use client";
import { FC, useState } from "react";
import Modal from "../Modal/Modal";
import Images from "../Images/Images";
interface Image {
  url: string;
  fileName: string;
  id: string;
}
interface ChooseFeaturedImageProps {
  images: Image[];
  featuredImageId?: string;
  setFeaturedImageId?: (image: string) => void;
}

const ChooseFeaturedImage: FC<ChooseFeaturedImageProps> = ({
  images,
  featuredImageId,
  setFeaturedImageId,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <button type="button" onClick={() => setOpenModal(true)}>
        Choose Featured Image
      </button>
      <Modal show={openModal} onClose={onClose}>
        <Images
          images={images}
          featuredImageId={featuredImageId}
          setFeaturedImageId={setFeaturedImageId}
        />
      </Modal>
    </div>
  );
};

export default ChooseFeaturedImage;
