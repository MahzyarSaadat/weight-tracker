const addEntryBtn = document.getElementById("add-btn");
let lists = [];

const renderItem = () => {
  const listsContainer = document.querySelector(".lists-container");
  listsContainer.innerHTML = "";

  lists.forEach((item) => {
    const listEl = document.createElement("li");
    listEl.setAttribute("id", item.id);
    listEl.classList.add("list");

    const dateEl = document.createElement("span");
    dateEl.textContent = item.today;
    listEl.appendChild(dateEl);

    const weightEl = document.createElement("h4");
    weightEl.textContent = item.weight + "Kg";
    listEl.appendChild(weightEl);

    const workoutNameEl = document.createElement("h4");
    workoutNameEl.textContent = item.workout;
    listEl.appendChild(workoutNameEl);

    const timeEl = document.createElement("span");
    timeEl.textContent = item.time + "minutes";
    listEl.appendChild(timeEl);

    const removeIcon = document.createElement("img");
    removeIcon.setAttribute(
      "src",
      "./icons/delete-trash-interface-icon-svgrepo-com.svg"
    );
    removeIcon.addEventListener("click", () => deleteList(item.id));
    listEl.appendChild(removeIcon);

    listsContainer.appendChild(listEl);
  });
};

const addEntry = () => {
  const WeightValue = document.getElementById("weight").value;
  const specificWorkout = document.getElementById("workout-option").value;
  const timeValue = document.getElementById("workout-time").value;

  if (WeightValue <= 0) {
    alert("please enter your weight");
    return;
  }
  if (timeValue <= 0) {
    alert("please enter correct time");
    return;
  }

  let list = {
    id: Date.now(),
    weight: WeightValue,
    workout: specificWorkout,
    time: timeValue,
    today: currentDay(),
  };

  lists.push(list);
  renderItem();
};

addEntryBtn.addEventListener("click", (e) => {
  addEntry();
});

const currentDay = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
};

const deleteList = (id) => {
  lists = lists.filter((item) => item.id !== id);
  renderItem();
};
