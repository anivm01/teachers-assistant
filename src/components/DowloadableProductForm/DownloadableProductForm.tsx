"use client";
import { FC, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Loader from "../Loader/Loader";
import { DownloadableProductType } from "@/lib/validators";

interface DownloadableProductFormProps {}

const DownloadableProductForm: FC<DownloadableProductFormProps> = ({}) => {
  const router = useRouter();
  const [dpContent, setDpContent] = useState({
    title: "",
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setDpContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { mutate: createDownloadableProduct, isPending } = useMutation({
    mutationFn: async () => {
      const payload: DownloadableProductType = {
        ...dpContent,
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
      console.log(data);
      router.push(`/`);
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
      <button type="submit">Submit</button>
      {isPending && <Loader />}
    </form>
  );
};

export default DownloadableProductForm;
