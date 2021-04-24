const main = document.querySelector('#main');
// AOS.init();
// console.log(main)
function getData(){
    // console.log("false")
    spinToggler(false);
    fetch('https://my-all-works-server.herokuapp.com/')
    .then(res => res.json())
    .then(data => {
        console.log();
        main.appendChild(showData(data));
        showDetails(data);
    })
}

const spinToggler = (show) =>{
    // console.log(show);
    if(show){
        // console.log(document.getElementById('spinner-loader').classList)
        document.getElementById('spinner-loader').className = "d-none my-5 spinner-border text-warning";
    }
    else{
        // console.log(document.getElementById('spinner-loader').classList)
        document.getElementById('spinner-loader').className = "d-block my-5 spinner-border text-warning";
    }
}

getData();


function showData(data){
    // console.log(data);
    const row = document.createElement('div');
    row.className = "row py-2"
    spinToggler(true);
    data.forEach(d => {
        const div = document.createElement('div')
        div.className = 'col-lg-4 col-md-6 col-xs-6 my-2';
        div.innerHTML = `<a  href="#${d.name}" class='card hover bg-white text-center p-2 bg-light rounded text-decoration-none text-dark shadow'>
            <h4>${d.name}</h4>
            <img  style="height: 200px" class="img-fluid w-100 mx-auto" src="${d.img}" alt=""/>
        </a>`;
        row.appendChild(div);
    });
    // console.log(row)
    return row;
}

function showDetails(devices){
    // console.log(devices)
    const article = document.createElement('article');
    article.classList.add("py-4");
    const h2 = document.createElement('h2');
    h2.className = 'text-center text-warning';
    h2.innerText = "Devices Details";
    article.appendChild(h2);
    for (let i = 0; i < devices.length; i++) {
        const device = devices[i];
        const div = document.createElement('div');
        div.className = 'card rounded shadow w-100 mx-auto text-center my-5 p-3';
        div.id = device.name;
        div.innerHTML = `
            <img style="height: 350px" class="img-fluid device-img mx-auto" src="${device.img}" alt=""/>
            <h3 class="text-success my-3">${device.name}</h3>
            <div class="p-3">
                <h3>${device.inventor}</h3>
            </div>
            <p style='height: 160px' class="text-warning scroll-off"><small>${device.des}</small></p>
        `;
        article.appendChild(div);
    }
    main.appendChild(article);
}
document.getElementById('year-date').innerHTML = new Date().getFullYear();


