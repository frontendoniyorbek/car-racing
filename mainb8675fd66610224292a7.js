(()=>{"use strict";const t=async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0;const a=await fetch(t,{method:e,headers:{"Content-Type":"application/json"},body:n?JSON.stringify(n):null});return a.json()},e=document.querySelector("#create-form");e.addEventListener("submit",(n=>{n.preventDefault();const o={name:e["crate-car"].value.trim(),color:e["crate-car-color"].value};console.log(o),t("http://127.0.0.1:3000/garage","POST",o).then((t=>{a()})).catch((t=>{console.log(t)})),e.reset()}));const n=document.getElementById("cars-list"),a=()=>{t("http://127.0.0.1:3000/garage").then((e=>{(e=>{n.innerHTML="",e.forEach((t=>{const{name:e,id:a,color:o}=t;n.innerHTML+=`\n            <li class="list-group-item px-3 pt-2 pb-5">\n                <div class="d-flex justify-content-between">\n                    <div class="car-button">\n                        <button class="btn btn-primary btn-sm">Start</button>\n                        <button class="btn btn-primary btn-sm">Stop</button>\n                        <button class="btn btn-primary btn-sm select-btn" data-id='${a}' data-name='${e}'data-color='${o}'>Select</button>\n                        <button class="btn btn-danger btn-sm delete-btn" type="submit" data-id='${a}'>\n                            <i class="bi bi-trash3"></i>\n                        </button>\n                    </div>\n                    <h5 class="car-name">${e}</h5>\n                </div>\n                <div class="position-relative mt-3">\n                    <i class="fa-solid fa-car-side fs-2 position-absolute start-0" style="color:${o}"></i>\n                    <i class="bi bi-flag-fill fs-2 position-absolute end-0"></i>\n                    <div class="road"></div>\n                </div>\n            </li>\n        `})),document.querySelectorAll(".delete-btn").forEach((e=>{e.addEventListener("click",(()=>{t(`http://127.0.0.1:3000/garage/${e.dataset.id}`,"DELETE",null).then((t=>{a()})).catch((t=>{console.log(t)}))}))}));const o=document.querySelectorAll(".select-btn"),l=document.querySelector("#update-form");let c;o.forEach((t=>{t.addEventListener("click",(()=>{l["update-car"].value=t.dataset.name,l["update-car-color"].value=t.dataset.color,c=t.dataset.id}))})),l.addEventListener("submit",(e=>{if(e.preventDefault(),l["update-car"].value.trim().length){const e=l["update-car"].value.trim(),n=l["update-car-color"].value;t(`http://127.0.0.1:3000/garage/${c}`,"PUT",{name:e,color:n}),a()}else alert("Select, one car")}))})(e)})).catch((t=>{console.log(t)}))};a()})();