export default function imagepath(directory) {
    let images = [];
    directory.keys().map((item, index) => images.push(item.replace("./", "")));
    return images;
}
