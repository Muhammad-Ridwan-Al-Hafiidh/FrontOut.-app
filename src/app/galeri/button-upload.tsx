"use client"
import React from "react";
import { CldUploadButton, CldUploadWidgetInfo, CldUploadWidgetResults } from "next-cloudinary";
import { Button } from "../../components/ui/button"
import { useRouter } from "next/navigation";

export default function ButtonUpload() {
  const router = useRouter();

  return (
    <>
      <Button asChild>
        <div className="flex gap-2 items-center justify-between">
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
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                />
              </svg>
              Upload
            </div>
          </CldUploadButton>
        </div>
      </Button>
    </>
  )
}

const getPublicId = (info: string | CldUploadWidgetInfo): string => {
  if (typeof info === 'string') {
    return info;
  } else {
    return info.public_id;
  }
}