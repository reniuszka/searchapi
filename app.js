const result = document.getElementById('result');
const filter = document.getElementById('filter');
// initiliaze an empty array - we are going to put the data that we fetch
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  //   destructing - getting results from json
  //   const data = await res.json();
  const { results } = await res.json();

  //clear results - this loading li will disappear
  result.innerHTML = '';

  //   for eah user from results fetched for api
  // data.results
  results.forEach((user) => {
    //   shows 50users = > 50 objects with properties and values
    //     console.log(user);
    //     creating li
    const li = document.createElement('li');
    // pushing those li's to an array listItems
    listItems.push(li);
    //     adding html to li
    li.innerHTML = `<img
            src="${user.picture.large}"
            alt="${user.name.first}"
          />
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
          </div>`;
    // adding it to result to ul - result
    result.appendChild(li);
  });
}

// e. target. value  means the text entered in the search input.

function filterData(searchTerm) {
  console.log(searchTerm);
  listItems.forEach((item) => {
    //if any li includes the value.tolowercase from input
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      //     display:none
      item.classList.add('hide');
    }
  });
}
