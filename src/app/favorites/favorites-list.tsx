"use client"

import cloudinary from "cloudinary";
import { CloudinaryImage } from "../../components/cloudinary-image";
import React, { useEffect, useState } from "react";
import { SearchResult } from "../galeri/page";
import { ForceRefresh } from "../../components/force-refresh";
import { ImageGrid } from "../../components/images-grid";


export default function FavoritesList({
    initialResources,
}: {
    initialResources: SearchResult[];
}) {

    const [resources, setResources] = useState(initialResources);

    useEffect(() => {
        setResources(initialResources);
    }, [initialResources]);

    return (
        <ImageGrid 
            images={resources}
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
                    onUnstar={(unstaredResource) => {
                        setResources(currentResources =>
                            currentResources.filter(
                                (resource) => resource.public_id !== unstaredResource.public_id
                            )
                        );
                    }}
                />
                );
            }}
        />

    );
}