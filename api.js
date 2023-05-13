import {initEventListeners}from "./dom.js";
import {renderComments}from "./render.js";
import { format } from "date-fns";
import {data} from "./dom.js";
let host = "https://webdev-hw-api.vercel.app/api/v2/alina-pitskhelauri/comments";
export function getCommentsLoading(token) {
    
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
    date: format(new Date(comment.date), 'yyyy-MM-dd hh.mm.ss'),
    text: comment.text,
    likesCounter: 0,
    
  }
  
    })
   window .comments = appComments;
    renderComments();
    initEventListeners();
    
  });
  
}).catch((error) =>{
  
alert('Кажется, у вас сломался интернет, попробуйте позже');
console.warn(error);
}); 
}
//2get
export function getComments(token) {
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
     date: format(new Date(comment.date), 'yyyy-MM-dd hh.mm.ss'),
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

export function postComments(nameInputElement,commentInputElement,token) {
  
    return fetch(host, {
        method: "POST",
        body: JSON.stringify({ 
        date: format(new Date(comment.date), 'yyyy-MM-dd hh.mm.ss'),
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
//вход
export function loginUser({login, password,token}) {
 
    return   fetch( "https://webdev-hw-api.vercel.app/api/user/login", {
        method: "POST",
        body: JSON.stringify({ 
        login,
        password,
        token,
        })
    }).then((response) => {
     if(response.status === 400){
      throw new Error('Неверный логин или пароль')
     }
          return response.json();
      })
    }
    //reg
export function registerUser({login, password,token,name}) {
    return   fetch( "https://webdev-hw-api.vercel.app/api/user", {
        method: "POST",
        body: JSON.stringify({ 
        login,
        password,
        token,
        name,
        })
    }).then((response) => {
     if(response.status === 400){
      throw new Error('Такой пользователь уже сущесвует')
     }
          return response.json();
      })
    }
        