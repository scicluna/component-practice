interface ImageProps {
    image: string
}


export function Image({ image }: ImageProps) {
    return (
        <>
            <img src={image} style={{ width: '100%', height: '100%', aspectRatio: '60/100' }}></img>
        </>
    )
}