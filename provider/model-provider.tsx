"use client";

import PreviewModal from "@/components/preview-model";
import { useEffect, useState } from "react";

const ModalProvider = () => {

    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[])


    if(!isMounted){
        return null;
    }

    return(
        <>
            <PreviewModal />
        </>
    )
}

export default ModalProvider;