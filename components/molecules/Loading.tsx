import React, { useEffect, useState } from "react";
import style from "@/styles/loadingStyle.module.css";
import { useGeneralConfig } from "@/contexts/GeneralConfigContext";

const Loading = () => {
    const { loader_img } = useGeneralConfig();
    const [defaultLoaderSrc, setDefaultLoaderSrc] = useState("/defLoading.gif");
    
    useEffect(() => {
        if (loader_img.length > 0)
            if (typeof window !== "undefined") {
                const storedLoader = localStorage.getItem("defaultLoader");
                setDefaultLoaderSrc(storedLoader || loader_img || "/defLoading.gif");
            } else {
                setDefaultLoaderSrc(loader_img || "/defLoading.gif");
            }
    }, [loader_img]);

    return (
        <div className="position-fixed d-flex justify-content-center align-items-center end-0 start-0 top-0 bottom-0 loader-overlay">
            <div className="d-flex justify-content-center flex-column align-items-center">
                <div className="loading-content">
                    <img src={defaultLoaderSrc} alt="Loading..." />
                </div>
            </div>
        </div>
    );
};

export default Loading;
