import {renderComments} from "./render.js";
import {getCommentsLoading,getComments,postComments} from "./api.js";



const commentInputElement = document.getElementById("comment-input");


let host = "https://webdev-hw-api.vercel.app/api/v1/alina-pitskhelauri/comments";
let token = "Bearer asb4c4boc86gasb4c4boc86g37k3bk3cg3c03ck3k37w3cc3bo3b8";

// get
export const fetchAndRenderComments = () => {
 return getCommentsLoading();
 
};

// второй get
export const fetchAndRenderCommentsTwo = () => {
return getComments();
   }
  
   fetchAndRenderComments();
   fetchAndRenderCommentsTwo(); 


export const initEventListeners = () => {
const likeElements = document.querySelectorAll('.like-button'); 
const deleteButtonElements = document.querySelectorAll('.delete-button');
// кнопка лайка
for (const likeElement of likeElements) {
  likeElement.addEventListener('click', (event) => {
    likeElement.classList.toggle('-active-like');
    const index = [...document.querySelectorAll('.like-button')].indexOf(likeElement); 
    const count = document.querySelectorAll('.likes-counter')[index]; 
    likeElement.classList.contains('-active-like') ? count.innerHTML++ : count.innerHTML--;
    event.stopPropagation();
    
  })
}
//кнопка удалить 
for (const deleteButtonElement of deleteButtonElements) {
  deleteButtonElement.addEventListener('click', (event) => {
    const index = deleteButtonElement.dataset.index;
    comments.splice(index, 1);
    event.stopPropagation();
    renderComments();
    initEventListeners();
  })
}
//ответ на коммент
const commentElementsAnswer = document.querySelectorAll('.comment');
for (const commentAnswer of commentElementsAnswer) {
  commentAnswer.addEventListener('click', () => {
    const text = commentAnswer.dataset.text;
    const nameComment = commentAnswer.dataset.name;
    commentInputElement.value = text +"\n" + nameComment;
    console.log(commentInputElement);
  })
}
}
// массив объектов
window.comments = [];
  
  
// дата
export function data (comment) {
let myDate = new Date(comment); 
const months = ["01", "02", "03", "04", "05", "06",
"07", "08", "09", "10", "11", "12"];
let year = String(myDate.getFullYear()).slice(2);
let day = myDate.getDate();
if (day < 10) {
  day = '0' + day;
}
let hour = myDate.getHours();
if (hour < 10) {
  hour = '0' + hour;
}
let minute = myDate.getMinutes();
if (minute < 10) {
  minute = '0' + minute;
}
let newDate = day  + "." + months[myDate.getMonth()] + "." 
+ year + " " + hour + ":" +  minute;
return newDate;
}

// проверка инпута



  
 
 
  
 


renderComments();
initEventListeners();

 