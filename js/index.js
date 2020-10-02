$(document).ready(function () {
  $("#container1").twentytwenty();
  $("#container2").twentytwenty();
  $("#container3").twentytwenty();
  $("#container4").twentytwenty();
  $("#container5").twentytwenty();
  $("#container6").twentytwenty();
  $("#container7").twentytwenty();
  $("#container8").twentytwenty();
});

const list_items = [
  {
    id: "1",
    img1: "img/01_after.jpg",
    img2: "img/01_before.jpg"
  },
  {
    id: "2",
    img1: "img/02_after.jpg",
    img2: "img/02_before.jpg"
  },
  {
    id: "3",
    img1: "img/03_after.jpg",
    img2: "img/03_before.jpg"
  },
  {
    id: "4",
    img1: "img/04_after.jpg",
    img2: "img/04_before.jpg"
  },
  {
    id: "5",
    img1: "img/05_after.jpg",
    img2: "img/05_before.jpg"
  },
  {
    id: "6",
    img1: "img/06_after.jpg",
    img2: "img/06_before.jpg"
  },
  {
    id: "7",
    img1: "img/07_after.jpg",
    img2: "img/07_before.jpg"
  },
  {
    id: "8",
    img1: "img/08_after.jpg",
    img2: "img/08_before.jpg"
  }
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 1;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
  page--;

	for (let i = 0; i < items.length; i++) {
		let item = items[i];

		let item_element = document.createElement('div');
    item_element.classList.add('ui');
    item_element.classList.add('container');
    item_element.setAttribute("id", "container" + item.id);

    let img1 = "<img src='" + item.img1 + "' />"
    let img2 = "<img src='" + item.img2 + "' />"
    item_element.innerHTML = img1 + img2

    if (item.id - 1 === page) {
      item_element.classList.remove('hidden');
    } else {
      item_element.classList.add('hidden');
    }
		
    wrapper.appendChild(item_element);
	}
}

function ChangePage(items_len, page) {
  for (let i = 1; i <= items_len; i++) {
    let item_element = document.getElementById('container' + i)

    if (i === page) {
      item_element.classList.remove('hidden');
    } else {
      item_element.classList.add('hidden');
    }
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
  let button = document.createElement('a');
  button.classList.add('item');

  button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
    current_page = page;
    
    ChangePage(items.length, current_page);    

		let current_btn = document.querySelector('.pagenumbers a.active');
		current_btn.classList.remove('active');

    button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);