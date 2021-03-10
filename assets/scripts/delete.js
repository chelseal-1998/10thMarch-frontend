function showData() {
  let list = document.getElementById("data-items");

  fetch("https://infinite-sierra-94687.herokuapp.com/show-data/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => createtr(item));
    });
}
7;

function createtr(blog) {
  const tableitem = `    <tr role="row">
    <td role="cell">${blog.id}</td>
    <td role="cell">${blog.header}</td>
    <td role="cell">${blog.title}</td>
    <td role="cell">${blog.description}</td>
    <td role="cell">${blog.body1}</td>
    <td role="cell">${blog.body2}</td>
    <td role="cell">${blog.body3}</td>
    <td role="cell">${blog.body4}</td>
    <td role="cell">${blog.body5}</td>
    <td role="cell">${blog.image}</td>
    <td role="cell">${blog.category}</td>
    <td role="cell">${blog.video}</td>
    <td><a href="https://infinite-sierra-94687.herokuapp.com/delete-data/${blog.id}/">DELETE</a>
    </td>
    </tr>`;

  let list = document.getElementById("data-items");
  console.log("hello");
  list.innerHTML += tableitem;
}

showData();
