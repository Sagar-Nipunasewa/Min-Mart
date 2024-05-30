import type {MapProps} from "../../../types";

function Map ({companyLocation}: MapProps) {
    return (
        <div className="w-full mt-[20px] border rounded">
            <iframe
                title="Google Map"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={companyLocation}
                style={{border: "none"}}
            ></iframe>
        </div>
    )
}

export default Map;