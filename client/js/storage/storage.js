const URL = "http://localhost:3333";
const token = localStorage.getItem("token");

export const login = async (email, password) => {
  const res = await fetch(`${URL}/public/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    return { sucess: true, user: data.user };
  } else {
    return { sucess: false, message: data.message };
  }
};

export const cadastro = async (email, name, password) => {
  const res = await fetch(`${URL}/public/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });

  const data = await res.json();

  if (res.ok) {
    return { sucess: true, message: data.message };
  } else {
    return { sucess: false, message: data.message };
  }
};

export const getUsers = async () => {
  const res = await fetch(`${URL}/private/dashboard`, {
    method: "GET",
    headers: {
      authorization: `${token}`,
    },
  });

  const data = await res.json();

  if (res.ok) {
    return { sucess: true, data: data };
  } else {
    return { sucess: false, message: data.message };
  }
};

export const deleteUser = async (id) => {
  const res = await fetch(`${URL}/private/delete`, {
    method: "DELETE",
    headers: {
      authorization: `${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
};
