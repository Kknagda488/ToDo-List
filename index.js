const itemArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log(itemArray);

document.querySelector("#enter").addEventListener("click", () => {
  const title = document.querySelector("#title");
  const derc = document.querySelector("#derc");
  createItem(title, derc);
});

document.querySelector("#title").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const title = document.querySelector("#title");
    createItem(title);
  }
});

document.querySelector("#derc").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const title = document.querySelector("#derc");
      createItem(derc);
    }
  });

function displayItems() {
  let items = "";
  itemArray.forEach((element) => {
    items += `<div class="item">
        <div class="input-controller"> 
            <textarea disabled>${element[0]}</textarea>
            <textarea disabled>${element[1]}</textarea>
            <div class="edit-controller">
                <i class="fa-solid fa-check deleteBtn"></i>
                <i class="fa-solid fa-pen-to-square editBtn"></i>
            </div>
        </div>
        <div class="update-controller">
            <button class="saveBtn">Save</button>
            <button class="cancelBtn">Cancel</button>
        </div>
    </div>`;
  });
  document.querySelector(".to-do-list").innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
}

let activateDeleteListeners = () => {
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  deleteBtn.forEach((ad, i) => {
    ad.addEventListener("click", () => {
      deleteItem(i);
    });
  });
};

let deleteItem = function (i) {
  itemArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemArray));
  location.reload();
};

function activateEditListeners() {
  const editBtn = document.querySelectorAll(".editBtn");
  const updateController = document.querySelectorAll(".update-controller");
  const inputs = document.querySelectorAll(".input-controller textarea");
  editBtn.forEach((eB, i) => {
    eB.addEventListener("click", () => {
      updateController[i].style.display = "block";
      console.log(i,eB);
    //   updateController[i].style.display = "block";
      inputs[i].disabled = false;
    });
  });
}

function activateSaveListeners() {
  const saveBtn = document.querySelectorAll(".saveBtn");
  const inputs = document.querySelectorAll(".input-controller textarea");
  saveBtn.forEach((sB, i) => {
    sB.addEventListener("click", () => {
      updateItem(inputs[i].value, i);
    });
    sB.addEventListener("click", () => {
        updateItem(inputs[i].value, i);
    })
  });
}

function activateCancelListeners() {
  const cancelBtn = document.querySelectorAll(".cancelBtn");
  const updateController = document.querySelectorAll(".update-controller");
  const inputs = document.querySelectorAll(".input-controller textarea");
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener("click", () => {
      updateController[i].style.display = "none";
      inputs[i].disabled = true;
      inputs[i].style.border = "none";
    });
    cB.addEventListener("click", () => {
        updateController[i].style.display = "none";
        inputs[i].disabled = true;
        inputs[i].style.border = "none";
    })
  });
}
function activateSaveListeners() {
    const saveBtn = document.querySelectorAll(".saveBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    saveBtn.forEach((sB, i) => {
      sB.addEventListener("click", () => {
        updateItem(inputs[i].value, i);
      });
      sB.addEventListener("click", () => {
        updateItem(inputs[i].value, i);
      });
    });
  }
  
  function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancelBtn");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    cancelBtn.forEach((cB, i) => {
      cB.addEventListener("click", () => {
        updateController[i].style.display = "none";
        inputs[i].disabled = true;
        inputs[i].style.border = "none";
      });

      cB.addEventListener("click", () => {
        updateController[i].style.display = "none";
        inputs[i].disabled = true;
        inputs[i].style.border = "none";
      });
    });
  }
function createItem(title, derc) {
  let newArray = [];
  newArray.push(title.value, derc.value);
  itemArray.push(newArray);
  localStorage.setItem("items", JSON.stringify(itemArray));
  location.reload();
}

const displayDate = () => {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML = `${date[1]} ${date[2]} ${date[3]} ${date[4]}`;
};

function updateItem(text, i) {
  itemArray[i][0] = text;
  localStorage.setItem("items", JSON.stringify(itemArray));
  location.reload();
}

window.onload = () => {
  displayDate();
  displayItems();
};
