let getUser = document.querySelector(".username");
let usedName = sessionStorage.getItem("LoggedIn-user");
console.log(JSON.parse(JSON.stringify(usedName)));
getUser.textContent = JSON.parse(usedName).username;
let userId = document.querySelector(".userId");
let userOptions = document.querySelector(".userOptions-1");

userId.addEventListener("click", () => {
  if (userOptions.style.display === "none") {
    userOptions.style.display = "block";
    console.log("clicked");
  } else {
    userOptions.style.display = "none";
    console.log("not clicked");
  }
});

// navs
let navHide = document.querySelector(".nav-hide");
let hamburger = document.querySelector(".bi-list");
hamburger.addEventListener("click", () => {
  if (navHide.style.display === "none") {
    navHide.style.display = "block";
  } else {
    navHide.style.display = "none";
  }
});

// packages

var packageData = [
  {
    image: "./images/united state.png",
    place: "United States",
    description:
      "Explore the diverse landscapes and vibrant cities of the United States. From the bustling streets of New York City to the breathtaking beauty of the Grand Canyon, there's something for everyone in the USA.",
    price: 999,
  },
  {
    image: "./images/china.png",
    place: "China",
    description:
      "Experience the rich history and culture of China. Visit iconic landmarks such as the Great Wall and the Forbidden City, Imperial Palace, The Summer Palace, and sample delicious Chinese cuisine.",
    price: 899,
  },
  {
    image: "./images/Greece.png",
    place: "Greece",
    description:
      "Immerse yourself in the ancient history and stunning landscapes of Greece. Explore the ruins of Athens, relax on the beautiful beaches of the Greek Islands, and indulge in delicious Mediterranean cuisine.",
    price: 999,
  },
  {
    image: "./images/Italy.png",
    place: "Italy",
    description:
      "Discover the art, culture, and cuisine of Italy. Visit historic cities such as Rome, Florence, and Venice, and sample world-renowned Italian dishes like pasta and gelato.",
    price: 952,
  },
  {
    image: "./images/france.png",
    place: "France",
    description:
      "Experience the romance and charm of France. Explore the iconic landmarks of Paris, such as the Eiffel Tower and the Louvre, and indulge in French cuisine and wine.",
    price: 950,
  },
  {
    image: "./images/jordan.png",
    place: "Jordan",
    description:
      "Explore the ancient wonders of Jordan. Visit the rock-cut city of Petra, float in the Dead Sea, explore the desert landscapes of Wadi Rum, Ajloun Castle, Karak Castle and Dana Nature Reserve.",
    price: 799,
  },
  {
    image: "./images/Mexico.png",
    place: "Mexico",
    description:
      "Experience the vibrant culture and rich history of Mexico. Visit ancient Mayan ruins, relax on the beautiful beaches of Cancun, and sample delicious Mexican cuisine.",
    price: 899,
  },
  {
    image: "./images/Spain.png",
    place: "Spain",
    description:
      "Discover the vibrant culture and stunning architecture of Spain. Visit historic cities such as Barcelona and Madrid, explore beautiful beaches, and enjoy delicious Spanish tapas.",
    price: 959,
  },
];

var package = document.getElementById("package");

var packageText = document.createElement("div");
packageText.setAttribute("class", "package-text");
package.appendChild(packageText);

var h1tag = document.createElement("h1");
h1tag.innerText = "Packages";
packageText.appendChild(h1tag);

var packageBody = document.createElement("div");
packageBody.setAttribute("class", "package-body");
package.appendChild(packageBody);

for (let i = 0; i < packageData.length; i++) {
  var packageCard = document.createElement("div");
  packageCard.setAttribute("class", "package-card");
  packageBody.appendChild(packageCard);

  var imgg = document.createElement("img");
  imgg.setAttribute("src", packageData[i].image);
  packageCard.appendChild(imgg);

  var packageCardBody = document.createElement("div");
  packageCardBody.setAttribute("class", "package-card-body");
  packageCard.appendChild(packageCardBody);

  var h3tag = document.createElement("h3");
  h3tag.innerText = packageData[i].place;
  packageCardBody.appendChild(h3tag);

  var ptag = document.createElement("p");
  ptag.innerText = packageData[i].description;
  packageCardBody.appendChild(ptag);

  var rating = document.createElement("div");
  rating.setAttribute("class", "rating");
  packageCardBody.appendChild(rating);

  for (var j = 0; j < 5; j++) {
    var itag = document.createElement("i");
    itag.setAttribute("class", "fa-solid fa-star checked");
    rating.appendChild(itag);
  }

  var h4tag = document.createElement("h4");
  h4tag.innerText = "Price: $" + packageData[i].price;
  packageCardBody.appendChild(h4tag);

  var btn = document.createElement("button");
  btn.innerText = "Book Now";
  packageCardBody.appendChild(btn);

  btn.addEventListener("click", (e) => {
    // e.preventDefault()
    window.location.reload();
    window.sessionStorage.setItem(
      "packageInfo",
      JSON.stringify(packageData[i])
    );

    window.open("booknow.html");
  });
}

// admin

let admin = document.querySelector(".admin");

admin.addEventListener("click", () => {
  window.location.href = "./adminlogin.html";
  
});

// destination
let dest = document.querySelector("#destinations");
dest.value = "";
let desti = JSON.parse(sessionStorage.getItem("packageInfo")).place;
dest.value = desti;
// console.log(dest.textContent)

// booking session storage

let booknow = document.querySelector(".booknow");

booknow.addEventListener("click", () => {
  let bookname = document.querySelector("#name").value;
  let bookmobile = document.querySelector("#mobile").value;
  let bookdesti = document.querySelector("#destinations").value;
  let bookmem = document.querySelector("#Members").value;
  let bookstart = document.querySelector("#startdate").value;
  let bookend = document.querySelector("#enddate").value;
  let bookinfo = document.querySelector("#membersinfo").value;

  alert("Booking is Sucessfully!");

  sessionStorage.setItem(
    "bookingdetails",
    JSON.stringify({
      bookname,
      bookmobile,
      bookdesti,
      bookmem,
      bookstart,
      bookend,
      bookinfo,
    })
    
  );
});

// complaints

let compalints = document.querySelector(".sendd");

compalints.addEventListener("click", () => {
  let comname = document.querySelector("#comname").value;
  let comemail = document.querySelector("#comemail").value;
  let commobile = document.querySelector("#commobile").value;
  let commess = document.querySelector("#commess").value;
  console.log("sendd")

  alert("Message sent Sucessfully!");
  sessionStorage.setItem(
    "compalintdetails",
    JSON.stringify({ comname, comemail, commobile, commess })
  );
});
