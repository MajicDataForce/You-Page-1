document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault(); 
 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try{ 
    const response = await fetch('http://localhost:1080/api/login', {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({username,password})
    });
        
    const data = await response.json();
    document.getElementById('response').textContent = JSON.stringify(data, null, 2);

    console.log(data)

    } catch (err) {
        document.getElementById('response').textContent = 'Error: ' + err.message;
    }

});