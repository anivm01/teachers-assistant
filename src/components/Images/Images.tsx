"use client";
import Button from "../Ui/Button/Button";
import DeleteFile from "../DeleteFile/DeleteFile";

// Define an interface for the image object
interface Image {
  url: string;
  fileName: string;
  id: string;
}

// Define an interface for the component's props
interface ImageGalleryProps {
  images: Image[];
  featuredImageId?: string;
  setFeaturedImageId?: (image: string) => void;
}

// Apply the interface to the function component's props
const Images: React.FC<ImageGalleryProps> = ({
  images,
  featuredImageId,
  setFeaturedImageId,
}) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id}>
          <img
            src={image.url}
            alt="Image"
            style={{ width: "100px", height: "auto" }}
          />
          <DeleteFile fileName={image.fileName} />
          {setFeaturedImageId && (
            <Button
              type="button"
              onClick={() => setFeaturedImageId(image.id)}
              component="button"
              variant="filled"
            >
              Select
            </Button>
          )}
          {featuredImageId === image.id && <p>Selected</p>}
        </div>
      ))}
    </div>
  );
};

export default Images;
