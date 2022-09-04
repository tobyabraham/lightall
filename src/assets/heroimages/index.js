import imagepath from "../../components/imagepath";
const directory = require.context("../heroimages/", false, /\.(png|jpe?g|svg|jpg)$/);
let imagePaths = imagepath(directory);

let images = [];
imagePaths.map((path) => images.push(require("../heroimages/" + path)));

export default images
