document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector(".icon-conatiner");
  const items = container.querySelectorAll("li");
  const delay = 60;

  container.addEventListener("click", () => {
    const isInitial = container.classList.toggle("initial");
    
    items.forEach((item, index) => {
      // Create a staggered effect based on index
      setTimeout(() => {
        if (isInitial) {
          item.classList.add("initial");
        } else {
          item.classList.remove("initial");
        }
      }, index * delay);
    });
  });
});