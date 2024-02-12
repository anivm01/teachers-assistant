"use client";
import { FC, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Loader from "../Loader/Loader";
import { DownloadableProductType } from "@/lib/validators";
import Images from "../Images/Images";
import ChooseFeaturedImage from "../ChooseFeaturedImage/ChooseFeaturedImage";

interface Image {
  url: string;
  fileName: string;
  id: string;
}
interface DownloadableProductFormProps {
  images: Image[];
}

const DownloadableProductForm: FC<DownloadableProductFormProps> = ({
  images,
}) => {
  const router = useRouter();
  const [dpContent, setDpContent] = useState({
    title: "",
    description: "",
  });
  const [slug, setSlug] = useState("");
  const [featuredImageId, setFeaturedImageId] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setDpContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setSlug(dpContent.title.replace(/\s+/g, "-"));
  };

  const { mutate: createDownloadableProduct, isPending } = useMutation({
    mutationFn: async () => {
      const payload: DownloadableProductType = {
        ...dpContent,
        slug,
        featuredImageId,
      };
      const { data } = await axios.post("/api/downloadableProducts", payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          console.log(err);
          return;
        }

        if (err.response?.status === 422) {
          console.log(err);
          return;
        }

        if (err.response?.status === 401) {
          console.log(err);
          return;
        }
      }
      console.log(err);
    },
    onSuccess: (data) => {
      router.push(`/admin`);
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        createDownloadableProduct();
      }}
    >
      <label htmlFor="downloadableProductTitle">Title</label>
      <input
        id="downloadableProductTitle"
        name="title"
        type="text"
        value={dpContent.title}
        onChange={handleChange}
      />
      <label htmlFor="downloadableProductDescription">Description</label>
      <textarea
        id="downloadableProductDescription"
        name="description"
        value={dpContent.description}
        onChange={handleChange}
      />
      <ChooseFeaturedImage
        images={images}
        featuredImageId={featuredImageId}
        setFeaturedImageId={setFeaturedImageId}
      />
      <input type="submit" value="Submit" />
      {isPending && <Loader />}

      {/* <Images
        images={images}
        featuredImage={featuredImageId}
        setFeaturedImage={setFeaturedImageId}
      /> */}
    </form>
  );
};

export default DownloadableProductForm;
