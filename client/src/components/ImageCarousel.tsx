import { useEffect, useRef, useState } from "react"
import { galleryImages } from "../assets/galleryImages"
import { Image } from "./Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';


export default function ImageCarousel() {
    const [position, setPosition] = useState(0)
    const wrapper = useRef<HTMLDivElement>(null)
    const images = galleryImages

    function handlePosition(e: React.MouseEvent<HTMLButtonElement>) {
        if (!e.currentTarget) return

        let newPosition = position
        if (e.currentTarget.classList.contains('up')) {
            if (position == 0) {
                newPosition = images.length - 1
            } else newPosition--
        } else if (e.currentTarget.classList.contains('down')) {
            if (position == images.length - 1) {
                newPosition = 0
            } else newPosition++
        }
        setPosition(newPosition)
    }

    useEffect(() => {
        if (!wrapper.current) return

        wrapper.current.style.transform = `translateY(${position * -100}%)`
    }, [position])

    return (
        <div className="galleryWrapper" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', position: "relative" }}>
            <button onClick={handlePosition} className="up scrollbtn"
                style={{
                    position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)',
                    width: '200px', height: '100px', background: 'transparent', border: 'transparent',
                    color: 'grey', cursor: 'pointer', zIndex: '2'
                }}>
                <FontAwesomeIcon icon={faCaretUp} size={'5x'} />
            </button>
            <div ref={wrapper} style={{ width: '100%', height: '100%' }}>
                {images.map((image, i) => (
                    <Image key={i} image={image} />
                ))}
            </div>
            <button onClick={handlePosition} className="down scrollbtn"
                style={{
                    position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
                    width: '200px', height: '100px', background: 'transparent', border: 'transparent',
                    color: 'grey', cursor: 'pointer', zIndex: '2'
                }}>
                <FontAwesomeIcon icon={faCaretDown} size={'5x'} />
            </button>
        </div>
    )
}