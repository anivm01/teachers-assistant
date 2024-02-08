"use client";
import { FC, useEffect, useState } from "react";
import DeleteFile from "../DeleteFile/DeleteFile";
import axios from "axios";

interface ImageFile {
  url: string;
  fileName: string;
}

interface ImagesProps {
  // Define any props you might need, if necessary
}

const Images: FC<ImagesProps> = ({}) => {
  const [images, setImages] = useState<ImageFile[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/files/images"); // Adjust the endpoint as necessary

        const data = await response.data;
        if (data.success && data.data) {
          setImages(data.data);
        } else {
          console.error("Failed to load images:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>Images</h2>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt="Image"
              style={{ width: "100px", height: "auto" }}
            />
            <DeleteFile fileName={image.fileName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
