"use client"
import { CldImage, CldUploadWidgetInfo, CldUploadWidgetResults } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";


export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const router = useRouter();
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(results: CldUploadWidgetResults) => {
          if (results.info) {
            const publicIds = Array.isArray(results.info)
              ? results.info.map((info) => getPublicId(info))
              : [getPublicId(results.info)];

            console.log("refresh", publicIds);
            setTimeout(() => {
              router.refresh();
            }, 1000)
          }
        }}
        uploadPreset="wemndhbp"
      />

      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          blurFaces
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}

const getPublicId = (info: string | CldUploadWidgetInfo): string => {
  if (typeof info === 'string') {
    return info;
  } else {
    return info.public_id;
  }
}
