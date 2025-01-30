let bookLikes = document.getElementById('bookLikes');
let bookLike = document.getElementById('bookLike');

function startRender() {
  let templateSectionRef = document.getElementById("bookRenderTemplateSection");
  let renderSection = templateSectionRef;
  renderSection.innerHTML = "";

  if (getFromLocalStorage() !== null) {
    getFromLocalStorage();
  }
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    let name = books[bookIndex].name;
    let author = books[bookIndex].author;
    let likes = books[bookIndex].likes;
    let liked = books[bookIndex].liked;
    let priced = (books[bookIndex].price);
    let price = parseFloat(priced).toFixed(2);
    let publishedYear = books[bookIndex].publishedYear;
    let genre = books[bookIndex].genre;
    let commentText = "";
    for (let [name, comment] of Object.entries(books[bookIndex].comments)) {
      commentText += "<strong>" + comment.name + "</strong>" + " :<br>" + comment.comment + "<br><br>";
    }
   
    renderSection.innerHTML += getBookTemplate(name, author, likes, liked, price, publishedYear, genre, commentText, bookIndex);
    if (liked == true) {
      removeDontLikeClass(bookIndex);
    } else {
      removeLikeClass(bookIndex);
    }
  }
}

function getCommentToDB(bookIndex) {
  let book_input_comment_nickRef = document.getElementById('book_input_comment_nick' + bookIndex);
  let input_nick = book_input_comment_nickRef.value;
  let book_input_commentRef = document.getElementById('book_input_comment' + bookIndex);
  let input_comment = book_input_commentRef.value;
  if (input_nick == "" && input_comment == "") {
    return alert(" Sie müssen die Felder ausfüllen!!!")
  } else {
    let pushArray = { name: input_nick, comment: input_comment };
    books[bookIndex].comments.unshift(pushArray);
    saveToLocalStorage();
    startRender();
  }
  input_nick.value = "";
  input_comment.value = "";
}

function countLikes(valueIndex) {
  let bookLikes = document.getElementById('bookLikes'+ valueIndex);
  if (books[valueIndex].liked == true) { 
    books[valueIndex].likes -= 1;
    bookLikes.innerHTML = books[valueIndex].likes;

  } else {
    books[valueIndex].likes += 1;
    bookLikes.innerHTML = books[valueIndex].likes;
  }

}

function toggleLikes(valueIndex) {
  if (books[valueIndex].liked == true) {
    books[valueIndex].liked = false;
    removeLikeClass(valueIndex);
    countLikes(valueIndex)
  } else {
    books[valueIndex].liked = true;
    removeDontLikeClass(valueIndex);
    countLikes(valueIndex)
  }
}


function removeLikeClass(valueIndex) {
  document.getElementById("likeImage" + valueIndex).classList.remove("likeImage");
  document.getElementById("likeImage" + valueIndex).classList.add("dontLikeImage");
}

function removeDontLikeClass(valueIndex) {
  document.getElementById("likeImage" + valueIndex).classList.remove("dontLikeImage");
  document.getElementById("likeImage" + valueIndex).classList.add("likeImage");
}



