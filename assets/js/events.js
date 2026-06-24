function saveItem(item){

let saved =
JSON.parse(
localStorage.getItem("savedItems")
) || [];

saved.push(item);

localStorage.setItem(
"savedItems",
JSON.stringify(saved)
);

alert("Event Saved Successfully");

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