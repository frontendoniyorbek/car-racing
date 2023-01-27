const elCarsList = document.getElementById('cars-list')
import reload from "./reload";
import request from "./request";

const createCars = (data) => {
    elCarsList.innerHTML = "";
    data.forEach((car) => {
        const { name, id, color } = car
        elCarsList.innerHTML += `
            <li class="list-group-item px-3 pt-2 pb-5">
                <div class="d-flex justify-content-between">
                    <div class="car-button">
                        <button class="btn btn-primary btn-sm">Start</button>
                        <button class="btn btn-primary btn-sm">Stop</button>
                        <button class="btn btn-primary btn-sm select-btn" data-id='${id}' data-name='${name}'data-color='${color}'>Select</button>
                        <button class="btn btn-danger btn-sm delete-btn" type="submit" data-id='${id}'>
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>
                    <h5 class="car-name">${name}</h5>
                </div>
                <div class="position-relative mt-3">
                    <i class="fa-solid fa-car-side fs-2 position-absolute start-0" style="color:${color}"></i>
                    <i class="bi bi-flag-fill fs-2 position-absolute end-0"></i>
                    <div class="road"></div>
                </div>
            </li>
        `
    });

    // delete
    const deleteBtn = document.querySelectorAll('.delete-btn');

    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            request(`http://127.0.0.1:3000/garage/${btn.dataset.id}`, 'DELETE', null)
                .then((data) => {
                    reload()
                })
                .catch((err) => {
                    console.log(err);
                })
        })
    })

    const selectBtn = document.querySelectorAll('.select-btn')
    const updateForm = document.querySelector('#update-form')
    let carId
    selectBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            updateForm["update-car"].value = btn.dataset.name
            updateForm["update-car-color"].value = btn.dataset.color
            carId = btn.dataset.id
        })
    })

    // form
    updateForm.addEventListener('submit', (e) => {
        e.preventDefault()
        if (!updateForm["update-car"].value.trim().length) {
            alert("Select, one car")
        } else {
            const name = updateForm["update-car"].value.trim()
            const color = updateForm["update-car-color"].value
            const updateCar = { name, color }
            request(`http://127.0.0.1:3000/garage/${carId}`, "PUT", updateCar)
            reload()
        }
    })

}

export { createCars };