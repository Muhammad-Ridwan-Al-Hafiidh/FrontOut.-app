

import cloudinary from "cloudinary";
import ButtonUpload from "./button-upload";
import React from "react";
import GaleriGrid from "./galeri-grid";

export type SearchResult = {
    public_id: string;
    tags: string[];
};

export default async function GaleriPage() {
    const results = (await cloudinary.v2.search
        .expression("resource_type:image")
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };


    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <ButtonUpload />
                </div>             
                <GaleriGrid images={results.resources}/>
            </div>
        </section>
    );
}