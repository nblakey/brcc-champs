type SiteImage = {
    alt: string,
    src: string
}

interface ClickableImage extends SiteImage {
    alt: string,
    href: string
    src: string,
}

type HomeConfig = {
    eventDescription: string
    eventName: string
}

type HomeImagery = {
    banner: {
        main: ClickableImage
        host: ClickableImage[]
    }
    coverImages: SiteImage[]
}