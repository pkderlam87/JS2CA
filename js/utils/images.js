export function randomImages(book) {
    if (book.toLowerCase().includes("chicken")) {
        return `../../image/rowan-s-bwvPzmYXFdk-unsplash.jpg`;
    }
    if (book.toLowerCase().includes("zebra")) {
        return `../../image/redcharlie-F0ivNc3yoOI-unsplash.jpg`;
    }
    if (book.toLowerCase().includes("horse")) {
        return `../../image/navi-photography-xLFfjhvSaZo-unsplash.jpg`;
    }
    if (book.toLowerCase().includes("cat")) {
        return `../../image/miron-cristina-HW_6USwudbo-unsplash.jpg`;
    }
}