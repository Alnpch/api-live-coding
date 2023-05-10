import { loginUser, registerUser } from "./api.js";
import{fetchAndRenderCommentsTwo} from "./dom.js";
import {renderComments} from "./render.js";


export function renderLoginComponent({ appEl, setToken }){
  let isLoginMode = true;
  const renderForm = () => {
    const  appHtml = `<div class="container">
    <div class="container-login">
   
          <div id= "add-form"  class="add-form">
          <h3> Форма ${isLoginMode ? 'входа' : 'регистации'} </h3>
          ${isLoginMode ? '' : 
          `<input
          type="text"
          id="name-input"
          class="add-form-name"
          placeholder="Имя"
        />`} 
          
            <input
              type="text"
              id="login-input"
              class="add-form-name"
              placeholder="Логин"
            />
            <input
              type="password"
              id="password-input"
              class="add-form-name"
              placeholder="Пароль"
              
            />
            <div class="add-form-row">
              <button id="login-button" class="add-form-button">${isLoginMode ? 'Войти' : 'Зарегестрироваться'} </button>
              
              <button id="toggle-button" class="add-form-button">Перейти ${isLoginMode ? 'к регистрации' : 'ко входу'} </button>
            </div>
            </div>
          </div>
          </div>
         </div>`
         appEl.innerHTML = appHtml;
         document.getElementById('login-button').addEventListener('click',() =>{
          if (isLoginMode) {
           const login = document.getElementById('login-input').value; 
         const password = document.getElementById('password-input').value;
         if (!password) {
          alert("Введите пароль")
          return;
         }
         if (!login) {
          alert("Введите логин")
          return;
         }
          loginUser({login:login, 
          password:password,
        }).then((user) => {
          console.log(user);
          setToken(`Bearer ${user.user.token}`);
          renderComments();
          fetchAndRenderCommentsTwo(); 
        }).catch((error) => {
          alert('Неверный логин или пароль');
        }); 
          } else {
         const login = document.getElementById('login-input').value; 
         const name = document.getElementById('name-input').value; 
         const password = document.getElementById('password-input').value;
         if (!password) {
          alert("Введите пароль")
          return;
         }
         if (!name) {
          alert("Введите имя")
          return;
         }
         if (!login) {
          alert("Введите логин")
          return;
         }
         registerUser({login:login, 
          password:password,
          name: name,
        }).then((user) => {
          console.log(user);
          setToken(`Bearer ${user.user.token}`);
          renderComments();
          fetchAndRenderCommentsTwo(); 
        }).catch((error) => {
          alert('Неверный логин или пароль');
        });
          }
         

          
         });
         document.getElementById('toggle-button').addEventListener('click',() =>{
         isLoginMode = !isLoginMode;
         renderForm();
          });
  };
   renderForm() ;

}