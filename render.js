
import {initEventListeners}from "./dom.js";
const commentsElement = document.getElementById("comments" );
import{data}from "./dom.js";
import{fetchAndRenderCommentsTwo} from "./dom.js";
import{postComments} from "./api.js";
import{renderLoginComponent} from "./login-component.js";
let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
token = null;
// рендер
export const renderComments = () =>{
  const appEl = document.getElementById("app");
  if (!token) {
    const commentsHtml = window.comments.map((comment, index) => {
      return ` <li class="comment" data-text="${comment.text}" data-name="${comment.name}"
      data-date= "${comment.date}" data-counter="${comment.likesCounter}">
            <div class="comment-header">
              <div>${comment.name}</div>
              <div>${comment.date}</div>
            </div>
            <div class="comment-body">
              <div  class="comment-text" >
               ${comment.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span  class="likes-counter" data-counter="${comment.likesCounter}">${comment.likesCounter}</span>
                <button class="like-button" ></button>
              <button data-index='${index}' class="delete-button">Удалить</button>
              </div>
            </div>
          </li>`;
      }).join(''); 
      
   const appHtml = `<div class="container">
  
         <ul id="comments" class="comments">${commentsHtml} </ul>
        
      
      <div> Чтобы оставить комментарий, <a id= 'authorization-link' href="#">авторизуйтесь</a></div>`
      
            
     
     
      appEl.innerHTML = appHtml;
      
      document.getElementById('authorization-link').addEventListener('click',() =>{
        renderLoginComponent({ appEl, setToken: (newToken) =>{
          token = newToken
          },
          fetchAndRenderCommentsTwo, 
          }); 
      });
      
         return;   
  }
  const commentsHtml = window.comments.map((comment, index) => {
    return ` <li class="comment" data-text="${comment.text}" data-name="${comment.name}"
    data-date= "${comment.date}" data-counter="${comment.likesCounter}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div  class="comment-text" >
             ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span  class="likes-counter" data-counter="${comment.likesCounter}">${comment.likesCounter}</span>
              <button class="like-button" ></button>
            <button data-index='${index}' class="delete-button">Удалить</button>
            </div>
          </div>
        </li>`;
    }).join(''); 
    
 const appHtml = `<div class="container">

       <ul id="comments" class="comments">${commentsHtml} </ul>
      
    
    <div id= "addFormLoading" class="addFormLoading">
      <div id= "add-form" class="add-form">
        <input
          type="text"
          id="name-input"
          class="add-form-name"
          placeholder="Введите ваше имя"
        />
        <textarea
          type="textarea"
          id="comment-input"
          class="add-form-text"
          placeholder="Введите ваш коментарий"
          rows="4"
        ></textarea>
        <div class="add-form-row">
          <button id="add-button" class="add-form-button">Написать</button>
        </div>
      </div>`
    
          
    initEventListeners();
   
    appEl.innerHTML = appHtml;
    
    const buttonElement = document.getElementById("add-button");
    const commentsElement = document.getElementById("comments" ); 
    const nameInputElement = document.getElementById("name-input" );
 const commentInputElement = document.getElementById("comment-input" );
 
 
    buttonElement.addEventListener("click", () => {
  
   
      nameInputElement.classList.remove('error');
    
      if (nameInputElement.value === '' ) {
        nameInputElement.classList.add('error');
        return;
      }
    
      commentInputElement.classList.remove('error');
    
      if (commentInputElement.value === '' ) {
        commentInputElement.classList.add('error');
        return;
      }
      // рендер нового коммента
      comments.push({
        name: nameInputElement.value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;"),
        date: data (),
        text: commentInputElement.value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;"),
        likesCounter: 0,
          }); 
         
      // post
    const postAndRenderComments = () => {
      
      
    
    return postComments(comments[comments.length - 1].name, comments[comments.length - 1].text, token)
    .then(() => {
      
    }).then(() => {
      return fetchAndRenderCommentsTwo();
     
     })
    .catch((error) =>{
      
    alert('Кажется, у вас сломался интернет, попробуйте позже');
    console.warn(error);
    
    });
    
     } 
    
     
     postAndRenderComments();
     
     nameInputElement.value = '';
     commentInputElement.value = '';
     
      renderComments();
      initEventListeners();
      
    });
    
    } 
    
    