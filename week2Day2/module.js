//export, export default

export default class seaShellHO {
    area = "MountRoad";
    continental() {
        console.log(`Continental is available in ${this.area}`);
    }
    indian() {
        console.log(`Indian is available in ${this.area}`);
    }
    italian() {
        console.log(`Italian is available in ${this.area}`);
    }
}

function getBill() {
    return "received successfully";
}
export { getBill }