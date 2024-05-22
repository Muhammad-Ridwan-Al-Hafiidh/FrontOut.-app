"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

export function ForceRefresh(){
    const router = useRouter();

    useEffect(() => {
        router.refresh();
    },[]);

    return<></>
}