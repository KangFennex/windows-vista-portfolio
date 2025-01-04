import './TodoApp.scss';
import { useState, createContext, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { LuUser } from "react-icons/lu";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import LoginForm from "./widget-components/todo-app/LoginForm";
import { avatarsList } from './widget-components/todo-app/assets/profilePics/avatarsList';

// Create AuthContext to share authentication state
export const AuthContext = createContext();

function TodoApp() {
  const [buttonColors, setButtonColors] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState(
    {
      text: "",
      isFavorite: false,
      isSoftDeleted: false
    });

  const [displayLogin, setDisplayLogin] = useState(false);
  const [displayRegister, setDisplayRegister] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loggedIn, setLoggedIn] = useState(!!token);
  const [username, setUsername] = useState(localStorage.getItem("username") || null);
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || null);
  const currentAvatarSrc = (avatarsList.find(item => item.title === avatar)?.src);

  const [userHover, setUserHover] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update token and login status
  const handleSetToken = (newToken, newUsername = "", newAvatar = "") => {

    if (newToken) {
      localStorage.setItem("token", newToken);
      console.log("Token stored:", newToken);
      localStorage.setItem("username", newUsername);
      localStorage.setItem("avatar", newAvatar)
      setToken(newToken);
      setUsername(newUsername);
      setAvatar(newAvatar)
      setLoggedIn(!!newToken);

    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("avatar");
      setToken(null);
      setUsername("");
      setAvatar("");
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        if (!storedToken) return;

        console.log("Token being sent:", storedToken);

        const response = await axios.get("http://localhost:5002/auth/user", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        const { username: fetchedUsername, avatar: fetchedAvatar } = response.data;
        handleSetToken(storedToken, fetchedUsername, fetchedAvatar);

      } catch (error) {
        console.error("Failed to fetch user data:", error.response?.data || error.message);
        if (error.response?.status === 403) {
          alert("Session expired. Please log in again.");
        }
      }
    };

    if (token && (!username || !avatar)) {
      fetchUserData();
    }
  }, [token, username, avatar]);


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        if (!token) return;

        const response = await axios.get("http://localhost:5002/todos", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTodoList(response.data); // Store full todo objects
        const initialColors = response.data.map((_, index) =>
          index % 3 === 0 ? "red" : index % 3 === 1 ? "yellow" : "green"
        );
        setButtonColors(initialColors);
      } catch (error) {
        console.error("Failed to fetch todos", error.response?.data || error.message);
        if (error.response?.status === 403) {
          alert("Session expired. Please log in again.");
          handleSetToken(null);
        }
      } finally {
        setLoading(false)
      }
    };

    if (token) {
      fetchTodos();
    }
  }, [token]);


  const onLogOut = () => {
    handleDisplayRegister(false);
    handleDisplayLogin();
    setTodoList([]);
    setNewTodo('');
  };

  const handleAddTodoList = async () => {
    if (newTodo.text.trim() === '') return;

    if (token) {
      try {
        const storedToken = localStorage.getItem("token");
        if (!storedToken) return;

        const response = await axios.post("http://localhost:5002/todos/", { text: newTodo.text }, { headers: { Authorization: `Bearer ${storedToken}` } }
        );

        setTodoList([...todoList, response.data]);
        setNewTodo('');

      } catch (error) {
        console.error("Failed to post new Todo:", error.response?.data || error.message);
        alert("Failed to save your todo. Please try again.");
      }
    } else {
      setTodoList([...todoList, newTodo]);
      setNewTodo(text => ({ ...text, text: "" }));
    }
  };

  const handleDeleteTodo = async (id, index) => {

    if (token) {
    try {
      const response = await axios.delete(`http://localhost:5002/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        const updatedTodos = [...todoList];
        updatedTodos.splice(index, 1);
        setTodoList(updatedTodos);

        const updatedColors = [...buttonColors];
        updatedColors.splice(index, 1);
        setButtonColors(updatedColors);
      }
    } catch (error) {
      console.error("Failed to delete Todo:", error.response?.data || error.message);
      alert("Failed to delete your todo. Please try again.");
    }
  } else {
    const updatedTodos = [...todoList];
    updatedTodos.splice(index, 1);
    setTodoList(updatedTodos);
  }
  };

  const handleFavorite = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos[index].isFavorite = !updatedTodos[index].isFavorite;
    setTodoList(updatedTodos);
  }

  const handleSoftDelete = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos[index].isSoftDeleted = true;
    setTodoList(updatedTodos);
  };

  const handleClickDelete = (id, index) => {
    if (!todoList[index].isSoftDeleted) {
      handleSoftDelete(index);
    } else {
      handleDeleteTodo(id, index)
    }
  };

  const renderTodo = (todo, index) => {
    return (
      <div className="todo-app__todos--item">
        <span className="todo-app__todos--star">
          {todo.isFavorite ? (
            <IoIosStar
              size={12}
              color="orange"
              className="todo-app__todos--star--icon"
              onClick={() => handleFavorite(index)}
            />) : (
            <IoIosStarOutline
              size={12}
              color="orange"
              className="todo-app__todos--star--icon"
              onClick={() => handleFavorite(index)}
            />
          )
          }
        </span>
        <span>{todo.text}</span>
        <span className="todo-app__todos--delete">
          <IoMdClose
            size={todo.isSoftDeleted ? 15 : 13}
            color={todo.isSoftDeleted ? "red" : "orange"}
            onClick={() => handleClickDelete(todo._id, index)}
            className="todo-app__todos--delete--icon"
          />
        </span>
      </div>
    );
  };

  const handleDisplayLogin = () => {
    setDisplayLogin(!displayLogin)
    setDisplayRegister(false);
  }

  const handleDisplayRegister = () => {
    setDisplayRegister(!displayRegister)
  }

  const handleUserHover = () => {
    setUserHover(!userHover)
  };

  return (
    <AuthContext.Provider value={{ loggedIn, token, username, avatar, displayRegister, setToken: handleSetToken }}>
      <div className='todo-app'>
        <div className='todo-app__container'>
          <div className="header">
            <nav className="header__buttons">
              <span className="header__button header__button--red"></span>
              <span className="header__button header__button--yellow"></span>
              <span className="header__button header__button--green"></span>
            </nav>
            <nav className="header__user">
              {loggedIn && currentAvatarSrc ? (
                <img
                  src={currentAvatarSrc}
                  alt="Avatar"
                  className="header__avatar"
                  onClick={displayLogin ? null : handleDisplayLogin}
                />
              ) : (
                <LuUser
                  color={userHover ? "white" : "orange"}
                  size={20}
                  className="header__icon user-icon"
                  onMouseOver={handleUserHover}
                  onClick={displayLogin ? null : handleDisplayLogin}
                />
              )}
            </nav>
          </div>
          <div className='todo-app__input'>
            <input
              placeholder='I will...'
              value={newTodo.text}
              onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTodoList()}
            ></input>
          </div>
          <div>
            {loading ? <p>Loading todos...</p> : (
              <div className="todo-app__todos">
                {todoList.map((todo, index) => (
                  <div key={index}>{renderTodo(todo, index)}</div>
                ))}
              </div>
            )}
          </div>
          {displayLogin && (
            <LoginForm
              handleDisplayLogin={handleDisplayLogin}
              handleDisplayRegister={handleDisplayRegister}
              displayRegister={displayRegister}
              loggedIn={loggedIn}
              onLogOut={onLogOut}
              setTodoList={setTodoList}
            />
          )}

        <div>
          <section className="todo-app__softDeleted">

          </section>
        </div>
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default TodoApp
