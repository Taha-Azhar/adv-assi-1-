async function processUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const filteredUsers = users.filter(user => {
            const catchPhrase = user.company.catchPhrase.toLowerCase();
            return catchPhrase.includes('group') || catchPhrase.includes('service');
        });

        const formattedUsers = filteredUsers.map(user => {
            const { name, email, address: { city } } = user;
            return `User: ${name} | Email: ${email} | City: ${city}`;
        });

        console.log(formattedUsers);

    } catch (error) {
        console.error('Error:', error);
    }
}

processUserData();