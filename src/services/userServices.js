// placer les fetchs ici

// getToken
export async function getToken(userEmail, userPassword) {
  const url = "http://localhost:3001/api/v1/user/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  const data = await response.json();
  return data;
}

// getUser
export async function getUser(token) {
  const url = "http://localhost:3001/api/v1/user/profile";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

// updateUser

export async function updateUser(token, fname, lname) {
  const url = "http://localhost:3001/api/v1/user/profile";
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: fname,
      lastName: lname,
    }),
  });
  const data = await response.json();
  return data;
}
