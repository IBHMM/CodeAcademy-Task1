import User from './classes.mjs'

const tbody = document.querySelector("#user-table-body");
const htmlpages = document.querySelector("#pagination-info");
const input = document.querySelector("#search-input");
const users = [];
let pages = 0;
let currentpage = 1;
let searching = '';
const maxpeople = 5;

const prev = document.querySelector("#previous-button");
const next = document.querySelector("#next-button");

function elementCreater(name) {
    return document.createElement(name);
}

async function TakeData() {
    try {
        const response = await fetch('https://mocki.io/v1/f0b8306c-781b-45f1-9f88-0dc0a039f46f');
        if (response.ok) {
            return await response.json();
        }
        return [];
    } catch(err) {
        console.error(err);
        return [];
    }
}

async function PopulatePerson() {
    const data = await TakeData();
    users.push(...data.map(per => new User(
        per.name, 
        per.birthdate,
        per.email,
        per.phone_number,
        per.job,
        per.company,
        per.address
    )));
    pages = Math.ceil(users.length / maxpeople);
}

function searchPerson(search) {
    if (!search) {
        return users; 
    }
    
    search = search.toLowerCase();
    return users.filter(user => 
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) || 
        user.job.toLowerCase().includes(search) || 
        user.address.toLowerCase().includes(search) || 
        user.company.toLowerCase().includes(search)
    );
}

function SetTable(displayUsers) {
    tbody.innerHTML = "";
    const totalPages = Math.ceil(displayUsers.length / maxpeople);
    htmlpages.innerText = `page ${currentpage} of ${totalPages}`;
    const start = (currentpage - 1) * maxpeople;
    const end = start + maxpeople;
    
    displayUsers.slice(start, end).forEach(user => {
        const tr = elementCreater("tr");
        const row = {
            name: user.name,
            address: user.address,
            email: user.email,
            phone_number: user.phone_number,
            job: user.job,
            company: user.company,
            age: user.calculateAge(),
            retired: user.isRetired(),
        };
        
        Object.values(row).forEach(value => {
            const td = elementCreater("td");
            td.innerText = value;
            tr.append(td);
        });
        
        tbody.append(tr);
    });

    prev.disabled = currentpage === 1;
    next.disabled = currentpage === totalPages;
}

window.onload = async function () {
    await PopulatePerson();
    SetTable(users);
}

next.addEventListener("click", () => {
    if (currentpage < pages) {
        currentpage++;
        SetTable(searchPerson(searching));
    }
});

prev.addEventListener("click", () => {
    if (currentpage > 1) {
        currentpage--;
        SetTable(searchPerson(searching));
    }
});

input.addEventListener("input", e => {
    searching = e.target.value;
    const searchResults = searchPerson(searching);
    currentpage = 1;
    pages = Math.ceil(searchResults.length / maxpeople);
    SetTable(searchResults);
});
