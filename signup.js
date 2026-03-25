document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const gender = document.getElementById("gender").value;
  
    // 🔍 Check all fields filled
    if (!name || !email || !password || !confirm || !gender) {
      alert("Please fill in all fields.");
      return;
    }
  
    // 🔐 Check password match
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
  
    // 🗂️ Fetch existing users or create empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // ❌ Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert("User with this email already exists!");
      return;
    }
  
    // 🆕 Create new user object
    const newUser = {
      name,
      email,
      password,
      gender
    };
  
    // 📥 Add user to array and save
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert(`Sign up successful, ${name}! Redirecting to login...`);
  
    // ⏳ Redirect
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
  