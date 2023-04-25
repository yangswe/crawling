export function getImgUrl(path:string) {
    return new URL(path, import.meta.url)
}