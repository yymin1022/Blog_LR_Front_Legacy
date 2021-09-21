import React, {createRef, useEffect} from "react";

const CaulyView = () => {
    const adRef = createRef();

    useEffect(() => {
        const caulyElement = document.createElement("script");
        const caulyScript = document.createElement("script");

        caulyElement.innerHTML = `
            new CaulyAds({
                app_code: 'ITxheEnW',
                placement: 1,
                displayid: 'CaulyAdvertisement',
                passback: function () { },
                success: function () {
                    console.log("Advertisement Load Success!");
                }
            });
        `;
        caulyScript.setAttribute("src", "http://image.cauly.co.kr/websdk/common/lasted/ads.min.js");

        adRef.current.appendChild(caulyElement);
        adRef.current.appendChild(caulyScript);

        
    }, []);

    return(
        <div ref={adRef}></div>
    )
}

export default CaulyView;