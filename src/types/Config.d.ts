type SiteImage = {
    alt: string
    src: string
}

interface ClickableImage extends SiteImage {
    href: string
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

type HeaderButton = {
    text: string
    href: string
}

type InformationConfig = {
    headerButtons: HeaderButton[]
    nestedButtons: {
        index0: HeaderButton[]
    }
}
