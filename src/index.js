import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  const expandBtns = document.querySelectorAll(".expand_button");
  expandBtns.forEach((button) => {
    button.addEventListener("click", expandButtonClickHandler);
    });
};

const expandButtonClickHandler = (event) => {
  const article = event.target.closest(".article");
  if (event.target.innerText === "V") {
    article.children[1].style.display = "none";
    event.target.innerText = ">";
  } else if (event.target.innerText !== "V") {
    article.children[1].style.display = "block";
    event.target.innerText = "V";
  }
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  const highlightBtns = document.querySelectorAll(".highlightBtn");
  highlightBtns.forEach((button) => {
    button.addEventListener("click", highlightBtnClickHandler);
  });
};

const highlightBtnClickHandler =  (event) => {
  const article = event.target.closest(".article");
  if (event.target.innerText === "+") {
    article.classList.add("highlight");
    event.target.innerText = "-";
  } else if (event.target.innerText !== "+") {
    article.classList.remove("highlight");
    event.target.innerText = "+";
  }
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
