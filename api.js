import {initEventListeners}from "./dom.js";
import{data}from "./dom.js";
import{renderComments}from "./render.js";

const commentsElement = document.getElementById("comments" );
let addForm = document.getElementById("add-form");
let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
let commentsLoading = document.getElementById("commentsLoading" );

let host = "https://webdev-hw-api.vercel.app/api/v2/alina-pitskhelauri/comments";
export function getCommentsLoading(comments) {
    
    return fetch(host, {
    method: "GET",
    headers: {
      Authorization: token,
    },
}).then((response) => {
  if (response.status === 401) {
    // token = prompt("Введите верный пароль");
    // getCommentsLoading();
    throw new Error("Нет авторизации");
  }
  const jsonPromise = response.json();
  jsonPromise.then((responseData) => {
  
  let appComments = responseData.comments.map((comment) => {
  return {
    name: comment.author.name,
    date: data (comment.date),
    text: comment.text,
    likesCounter: 0,
    
  }
  
    })
   window .comments = appComments;
    renderComments();
    initEventListeners();
    
  });
  
}).then(() => {
  
  
}).catch((error) =>{
  
alert('Кажется, у вас сломался интернет, попробуйте позже');
console.warn(error);
}); 
}
//2get
export function getComments(comments) {
    return fetch(host, {
     method: "GET",
     headers: {
      Authorization:token,
    },
 }).then((response) => {
   const jsonPromise = response.json();
   
   jsonPromise.then((responseData) => {
   let appComments = responseData.comments.map((comment) => {
   return {
     name: comment.author.name,
     date: data (comment.date) ,
     text: comment.text,
     likesCounter: 0,
     
   }
   
     })
     window.comments = appComments;
     renderComments();
     initEventListeners();
     
   });
   
 })  
}

export function postComments(nameInputElement,commentInputElement) {
    return   fetch(host, {
        method: "POST",
        body: JSON.stringify({ 
        date: data () ,
        name: nameInputElement,
        text: commentInputElement,
        likesCounter: 0,
        
        }), headers: {
          Authorization: token,
        }
    }).then((response) => {
        if (response.status === 201) {
        
          return response.json();
          
        }
        if (response.status === 500) {
          throw new Error('Сервер сломался, попробуй позже');
        } if (response.status === 400) {
          alert("Имя и комментарий должны быть не короче 3 символов");
          
        }
      })
          
}
