fetch("../assets/data/hackathons.json")

.then(response => response.json())

.then(data => {

const container =
document.getElementById(
"hackathonsContainer"
);

data.forEach(hackathon => {

container.innerHTML += `

<div class="hackathon-card">

<div class="organizer">
${hackathon.organizer}
</div>

<h2>
${hackathon.title}
</h2>

<p>
${hackathon.description}
</p>

<div class="details">

<span>
Prize: ${hackathon.prize}
</span>

<span>
${hackathon.mode}
</span>

<span>
Deadline: ${hackathon.deadline}
</span>

</div>

<div class="actions">

<button
onclick='saveItem(${JSON.stringify(hackathon)})'>
Save
</button>

<a href="${hackathon.link}" target="_blank">
    <button>
        Register
    </button>
</a>

</div>

</div>

`;

});

});