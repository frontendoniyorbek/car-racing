import reload from "./reload";
import request from "./request";
const createForm = document.querySelector('#create-form')

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = createForm["crate-car"].value.trim();
    const color = createForm["crate-car-color"].value;

    const newCar = { name, color }
    console.log(newCar);
    request('http://127.0.0.1:3000/garage', "POST", newCar)
        .then((data) => {
            reload()
        })
        .catch((err) => {
            console.log(err);
        })
    createForm.reset()
})