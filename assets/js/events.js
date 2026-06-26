const container =
document.getElementById("savedContainer");

const saved =
JSON.parse(localStorage.getItem("savedItems")) || [];

if(saved.length===0){

    container.innerHTML="<h2>No Saved Items</h2>";

}

saved.forEach(item=>{

const name =
item.role || item.title;

const company =
item.company || item.organizer || item.type;

const extra =
item.salary ||
item.stipend ||
item.prize ||
item.date;

container.innerHTML += `

<div class="saved-card">

<div class="saved-type">
${item.type}
</div>

<h2>${name}</h2>

<p>${company}</p>

<h3>${extra}</h3>

<div class="actions">

<a href="${item.link}" target="_blank">

<button>
Open
</button>

</a>

<button onclick="removeItem('${name}')">

Remove

</button>

</div>

</div>

`;

});

function removeItem(name){

let saved =
JSON.parse(localStorage.getItem("savedItems")) || [];

saved = saved.filter(item=>

(item.role || item.title)!==name

);

localStorage.setItem(

"savedItems",

JSON.stringify(saved)

);

location.reload();

}
fetch("../assets/data/events.json")
.then(response => response.json())
.then(events => {

    const container =
    document.getElementById("eventsContainer");

    events.forEach(event => {

        container.innerHTML += `
        <div class="event-card">

            <div class="organizer">
                ${event.organizer}
            </div>

            <h2>${event.title}</h2>

            <p>${event.location}</p>

            <div class="details">
                <span>${event.date}</span>
            </div>

           <div class="actions">

<button
onclick='saveItem(${JSON.stringify(event)})'>
Save
</button>

<a href="${event.link}" target="_blank">
    <button>
        Register
    </button>
</a>

</div>

        </div>
        `;
    });

});