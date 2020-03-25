function handleSubmit() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    const item = $(this).find("#shopping-list-entry");
    const val = item.val();

    let li = `
        <li>
        <span class="shopping-item">${val}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
        </li>
    `;

    $(".shopping-list").append(li);
    item.val("");
  });
}

function handleClickDelete() {
  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(this)
      .closest("li")
      .remove();
  });
}

function handleToggleCheck() {
  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    $(this)
      .parent()
      .siblings(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
}

$(handleSubmit);
$(handleClickDelete);
$(handleToggleCheck);
