export function randomImages(article) {
    if (article.toLowerCase().includes("chicken")) {
        return `../../image/rowan-s-bwvPzmYXFdk-unsplash.jpg`;
    }
    if (article.toLowerCase().includes("zebra")) {
        return `../../image/redcharlie-F0ivNc3yoOI-unsplash.jpg`;
    }
    if (article.toLowerCase().includes("horse")) {
        return `../../image/navi-photography-xLFfjhvSaZo-unsplash.jpg`;
    }
    if (article.toLowerCase().includes("cat")) {
        return `../../image/miron-cristina-HW_6USwudbo-unsplash.jpg`;
    }
}