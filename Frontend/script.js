let input = document.getElementById("taskinput");
let addBtn = document.getElementById("addbtn");
let list = document.getElementById("tasklist");
let toggle = document.getElementById("toggleList");

// ADD TASK
addBtn.addEventListener("click", function () {
  let tasktext = input.value.trim();

  if (tasktext === "") return;

  let li = document.createElement("li");

  // date & time
  let now = new Date();
  let time = now.toLocaleString();

  li.innerHTML = `
    <div>
      ${tasktext}
      <small>${time}</small>
    </div>
  `;

  // delete button
  let delbtn = document.createElement("button");
  delbtn.innerText = "❌";

  delbtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delbtn);
  list.appendChild(li);

  input.value = "";
});

// TOGGLE LIST SHOW/HIDE
toggle.addEventListener("click", function () {
  if (list.style.display === "none") {
    list.style.display = "block";
    toggle.innerText = "All List Here ▼";
  } else {
    list.style.display = "none";
    toggle.innerText = "All List Here ▶";
  }
});