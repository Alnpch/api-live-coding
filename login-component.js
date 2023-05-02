import{fetchAndRenderCommentsTwo} from "./dom.js";
import {renderComments} from "./render.js";
export function renderLoginComponent({ appEl, setToken }){
    const  appHtml = `<div class="container">
    <div class="container-login">
   
          <div id= "add-form"  class="add-form">
            <input
              type="text"
              id="login-input"
              class="add-form-name"
              placeholder="Логин"
            />
            <textarea
              type="textarea"
              id="password-input"
              class="password-form-text"
              placeholder="Пароль"
              rows="4"
            ></textarea>
            <div class="add-form-row">
              <button id="login-button" class="add-form-button">Войти</button>
            </div>
          </div>
          </div>
         </div>`
         appEl.innerHTML = appHtml;
         document.getElementById('login-button').addEventListener('click',() =>{
          
          setToken("Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k")
          renderComments();
          fetchAndRenderCommentsTwo(); 
         })
}