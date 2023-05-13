function updateBody() {
  var bodyStyle = document.getElementsByTagName("body")[0].style;
  const imageArr = [
    "./assets/back1.jpg",
    "./assets/back2.jpg",
    "./assets/back3.jpg",
    "./assets/back4.jpg",
    "./assets/back5.jpg",
  ];
  bodyStyle.backgroundImage = `url('${
    imageArr[Math.floor(Math.random() * imageArr.length)]
  }')`;
}
