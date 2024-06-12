import { CreatePartieService } from "./../service/createPartieService";

export class PartieView {
    constructor() {
        this.createPartieService = new CreatePartieService();
    }


}