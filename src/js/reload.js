import request from "./request"
import "./createupdate";
import { createCars } from "./updateUi";
const reload = () => {
    request("http://127.0.0.1:3000/garage")
        .then((data) => {
            createCars(data)
        })
        .catch((err) => {
            console.log(err);
        });
}

export default reload