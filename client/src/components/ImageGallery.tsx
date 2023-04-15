import { useState } from "react"
import { galleryImages } from "../assets/galleryImages"
import { Image } from "./Image"


export default function ImageGallery() {
    const [position, setPosition] = useState(0)
    const images = galleryImages

    function handlePosition() {

    }

    return (
        <div className="galleryWrapper">
            {images.map((image, i) => (
                <Image key={i} image={image} handlePosition={handlePosition} />
            ))}
        </div>
    )
}