"use client";

import { CloudinaryImage } from "../../components/cloudinary-image";
import React from "react";
import { ImageGrid } from "../../components/images-grid";
import { SearchResult } from "./page";

export default function GaleriGrid({
    images
    }: {
    images: SearchResult[]
}) {
    return (
        <ImageGrid
            images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        // src={result.public_id}
                        // publicId={result.public_id}
                        imageData={imageData}
                        width="400"
                        height="300"
                        alt="an image of something"
                    />
                );
            }}
        />
    );
}