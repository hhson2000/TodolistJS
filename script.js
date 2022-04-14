function newElement() {
  const content = document.querySelector(".content").value;
  if (content === "") {
    alert("pls enter some word");
  } else {
    displayTask(content);
  }
}

function displayTask(content) {
  document.querySelector(".tasks").innerHTML += `
      <div>
        <span class="taskname">
          ${content}
        </span>
          <button class="btnDelete">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
      </div>
    `;

  const current_tasks = document.querySelectorAll(".btnDelete");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}
