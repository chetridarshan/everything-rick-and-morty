let darshanChetriImages = [
"https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png",
"https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png",
"https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-morty-projectacademy-medium-17.png",
"https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-monsters-transparent-png-stickpng-2.png",
"https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-flying-transparent-png-stickpng-15.png",
"https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-ruefers-deviantart-22.png"
];

const images = document.querySelectorAll("img")

for (let i=0; i < images.length; i++)
{
  const randomImages = Math.floor (Math.random() * darshanChetriImages.length);
  images[i].src = darshanChetriImages[randomImages];
}


const texts = document.querySelectorAll("yt-formatted-string, h1, h2, h3, h4, h5, p, span, label")

for (let i=0; i<texts.length; i++)
{
  texts[i].innerHTML = "Rick and Morty"
}
