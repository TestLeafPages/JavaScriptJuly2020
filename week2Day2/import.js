//import
import seaShellHO,{getBill} from "./module.js" 

class seaShellThousandLights extends seaShellHO {
    area = "Thousand Lights";
    continental() {
        console.log(`Continental is available in ${this.area}`);
    }
}

let branch = new seaShellThousandLights();
branch.continental();
branch.indian();

console.log(getBill());