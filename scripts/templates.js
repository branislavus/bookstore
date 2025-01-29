
function getBookTemplate(name, author, likes, liked, price, publishedYear, genre, commentText, bookIndex) {
  return `<div id="singleBookElement" class="singleBookElement" >
  <div class="upperSection">
  <h2 id="singleBookName" class="singleBookName">${name}</h2>
        <img src="./assets/img/book_logo.jpg" class="book_picture" alt="book_picture">
  </div>
        
        <table id="book_info" class="book_info">
            <tr>
              <th id="bookPrice" class="bookPrice">${price} €</th>
              <th id="bookLikesAndLike" class="bookLikesAndLike">
              <span id="bookLikes" class="bookLikes">${likes}  </span>
              <a onclick="countLikes(${bookIndex})" id="bookLike" class="bookLike" value="${liked}"><img id="likeImage" class="likeImage" src="./assets/icons/dontLove.png" alt=like Image"></a>
            </tr>
            <tr>
              <td>Author :</td>
              <td id="bookAuthor" class="bookAuthor">${author}</td>          
            </tr>
            <tr>
              <td>Erscheinungsjahr :</td>
              <td id="bookYearOfLaunch" class="bookYearOfLaunch">${publishedYear}</td>         
            </tr>
            <tr>
                <td>Genre :</td>
                <td id="bookGenre" class="bookGenre">${genre}</td>
              </tr>
          </table>
          <h3 class="">Komentare</h3>
          <section id="book_comments" class="book_comments">
            <div id="commentRenderWindowTemplate">
                <p id="book_comments_window_comment" class="book_comments_window">${commentText}</p>
            </div>         
          </section >
          <div class="book_input onload="renderCommentWindow(${name})">
          <input type="text" id="book_input_comment_nick${bookIndex}" class="book_input_comment_nick" placeholder="Nickname" required>
          <input type="text" id="book_input_comment${bookIndex}" class="book_input_comment" placeholder="schreibe uns dein Komentar" required>
          <button id="book_input_comment_button" class="book_input_comment_button" onclick="getCommentToDB(${bookIndex})">Senden</button>    
    </div>`;
}

