let users = [
  {
    name: "Aria Chen",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
    bio: "Lead UX Researcher & Product Designer"
  },
  {
    name: "Marcus Sterling",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    bio: "Senior Full Stack Engineer specializing in React & Node"
  },
  {
    name: "Elena Rostova",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
    bio: "Creative Director & Visual Brand Identity Lead"
  },
  {
    name: "Kai Takahashi",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    bio: "Data Scientist & Machine Learning Architect"
  },
  {
    name: "Sarah Jenkins",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
    bio: "Technical Product Manager & Agile Scrum Lead"
  }
];

function showUsers(arr) {

  const container = document.querySelector(".cards-container");

  // clear old cards
  container.innerHTML = "";

  if (arr.length === 0) {
    container.innerHTML = `<h2 class="no-user">No User Found</h2>`;
    return;
  }

  arr.forEach(function (user) {

    // Create card
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url('${user.pic}')`;
    blurredLayer.classList.add("blurred-layer");

    // Create content
    const content = document.createElement("div");
    content.classList.add("content");

    // Create heading
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    // Create paragraph
    const para = document.createElement("p");
    para.textContent = user.bio;

    // Append heading + para to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Append card to container
    container.appendChild(card);

  });

}
// Initial render
showUsers(users);

let inp = document.querySelector(".input");
let timer;

// Debouncing
inp.addEventListener("input", function () {

  clearTimeout(timer);
  timer = setTimeout(function () {
    let searchText = inp.value.toLowerCase();

    // Fragmentation search
    let newUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchText) ||
        user.bio.toLowerCase().includes(searchText)
      );
    });
    document.querySelector(".cards-container").innerHTML = "";

    showUsers(newUsers);

  }, 300);

});

// The input event listener handles filtering automatically.