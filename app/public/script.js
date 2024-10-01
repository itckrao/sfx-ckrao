async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const users = await response.json();
        populateTable(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function populateTable(users) {
    const tableBody = document.querySelector('#user-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    try {
        const response = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, age })
        });

        if (!response.ok) throw new Error('Failed to add user');
        await fetchUsers(); // Refresh user list
        document.getElementById('form').reset(); // Clear the form
    } catch (error) {
        console.error('Error adding user:', error);
    }
});

// Fetch users when the page loads
window.onload = fetchUsers;
