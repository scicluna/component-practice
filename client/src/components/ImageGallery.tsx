import { useState } from "react"
import { galleryImages } from "../assets/galleryImages"
import { Image } from "./Image"


export default function ImageGallery() {
    const images = galleryImages

    function handlePosition() {

    }

    return (
        <div className="galleryWrapper">
            {images.map((image, i) => (
                <Image key={i} image={image} />
            ))}
        </div>
    )
}