
export async function getAuthenticatedUser() {
  const token = localStorage.getItem("token"); // or from wherever you store it

  if (!token) return null;

  try {
    const response = await fetch("http://127.0.0.1:8000/user/me/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,  // << send JWT here
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Auth check failed", error);
    return null;
  }
}
export async function logout() {
  await fetch("http://127.0.0.1:8000/user/logout/", {
    method: "POST",
  });
  window.location.href = "/login.html";
}
