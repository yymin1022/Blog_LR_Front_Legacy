import React, {createRef, useEffect} from "react";

const CaulyView = () => {
    const adRef = createRef();

    useEffect(() => {
        const caulyElement = document.createElement("script");

        caulyElement.innerHTML = `
            new CaulyAds({
                app_code: '${process.env.REACT_APP_CAULY_KEY}',
                placement: 1,
                displayid: 'CaulyAdvertisement',
                passback: function () { },
                success: function () {
                    console.log("Advertisement Load Success!");
                }
            });
        `;

        adRef.current.appendChild(caulyElement);

        
    }, []);

    return(
        <div ref={adRef}></div>
    )
}

export default CaulyView;