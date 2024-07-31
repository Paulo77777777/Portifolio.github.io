var myObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("aparecer");
    } else {
      entry.target.classList.remove("aparecer");
    }
  });
});

var elementos = document.querySelectorAll(".sumir");

elementos.forEach(element => {
  myObserver.observe(element);
});
