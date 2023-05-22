import axios from "axios";

const URL = `http://localhost:8000`;

const register = (user) => {
  try {
    const { name, email, password, confirmPassword } = user;
    console.log("user ", user)
    if (name && email && password && password === confirmPassword) {
      return axios
        .post(`${URL}/register`, user)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid Input");
    }
  } catch (error) {
    console.log(`Error while calling Register API`, error);
  }
};

const login = (user, setLoginUser) => {
  axios.post(`${URL}/login`, user).then((res) => {
    alert(res.data.message);
    if (res.data.user) {
      window.localStorage.setItem("currentUser", JSON.stringify(res.data.user)); /// setting user object in window local storage
      setLoginUser(res.data.user);
    }
  });
};

const bookmarks = (bookmark) => {
  try {
    axios
      .post(`${URL}/bookmarks`, bookmark)
      .then((res) => alert(res.data.message));
  } catch (error) {
    console.log(`Error while calling Bookmarks API`, error);
  }
};

const getBookmarks = () => {
  try {
    return axios.get(`${URL}/bookmarkedNews`);
  } catch (error) {
    console.log(`Error while calling bookmarkedNews API`, error);
  }
};

const deleteBookmarks = (email, title) => {
  const deleteBook = {
    email,
    title,
  };

  try {
    axios
      .post(`${URL}/deleteBookmarks`, deleteBook)
      .then((res) => alert("Bookmark Removed"));
  } catch (error) {
    console.log(`Error while calling DeleteBookmarks API`, error);
  }
};

export { register, login, bookmarks, getBookmarks, deleteBookmarks };
