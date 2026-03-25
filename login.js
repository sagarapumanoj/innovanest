const users = [
    { email: "demo@example.com", password: "123456", name: "Demo User", gender: "Male" },
    { email: "alice@mail.com", password: "pass123", name: "Alice", gender: "Female" },
    { email: "bob@mail.com", password: "1234", name: "Bob", gender: "Male" },
    { email: "charlie@mail.com", password: "abcd", name: "Charlie", gender: "Male" },
    { email: "diana@mail.com", password: "qwerty", name: "Diana", gender: "Female" },
    { email: "eve@mail.com", password: "eve123", name: "Eve", gender: "Female" },
    { email: "frank@mail.com", password: "hello", name: "Frank", gender: "Male" },
    { email: "grace@mail.com", password: "grace123", name: "Grace", gender: "Female" },
    { email: "henry@mail.com", password: "secure", name: "Henry", gender: "Male" },
    { email: "ivan@mail.com", password: "testpass", name: "Ivan", gender: "Male" },
    { email: "julia@mail.com", password: "julia2024", name: "Julia", gender: "Female" },
    { email: "karen@mail.com", password: "karen789", name: "Karen", gender: "Female" },
    { email: "liam@mail.com", password: "liam4321", name: "Liam", gender: "Male" },
    { email: "noah@mail.com", password: "noah999", name: "Noah", gender: "Male" },
    { email: "olivia@mail.com", password: "olivia321", name: "Olivia", gender: "Female" }
  ];
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "main.html"; // Redirect to main dashboard
    } else {
      alert("Invalid email or password.");
    }
  });
  
  