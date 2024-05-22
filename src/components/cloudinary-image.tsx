"use client"

import { CldImage, CldImageProps } from "next-cloudinary"
import React, { ComponentProps, useState, useTransition } from "react"
import { Star } from "./icons/star"
import { BintangAction } from "../app/galeri/actions"
import { SearchResult } from "../app/galeri/page"
import { FullStar } from "./icons/Fullstar"


export function CloudinaryImage(props: {
    imageData: SearchResult;
    onUnstar?: (unstaredResource: SearchResult) => void;
    // [key: string]: any;
} & Omit<CldImageProps, "src">
) {
    const [transition, startTransition] = useTransition();

    const { imageData, onUnstar } = props;


    const [isFavorited, setIsFavorited] = useState(
        imageData.tags.includes('favorite')
    );

    return (
        <div className="relative">
            <CldImage
                {...props}
                src={imageData.public_id}
            />
            {isFavorited ?
                <FullStar
                    onClick={() => {
                        onUnstar?.(imageData);
                        setIsFavorited(false);
                        startTransition(() => {
                            BintangAction(imageData.public_id, false);
                        });
                    }}
                    className="absolute top-2 right-2 hover:text-white text-yellow-500 cursor-pointer"
                />

                :

                <Star
                    onClick={() => {
                        setIsFavorited(true);
                        startTransition(() => {
                            BintangAction(imageData.public_id, true);
                        });
                    }}
                    className="absolute top-2 right-2 hover:text-yellow-500 cursor-pointer"
                />}
        </div>
    )
}