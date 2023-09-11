// Simulated function to fetch user data from an API
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { id: 1, username: 'user123', name: 'John Doe' },
                2: { id: 2, username: 'user456', name: 'Jane Smith' },
            };

            const user = users[userId];
            if (user) {
                resolve(user);
            } else {
                reject('User not found');
            }
        }, 5000); // Simulate a 1-second delay
    });
}

// Async function to fetch user data and display it
async function displayUserData(userId) {
    try {
        console.log('!Fetching user data...');
        const user = await fetchUserData(userId);
        console.log(`User Data: ${JSON.stringify(user)}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Call the async function to display user data
displayUserData(1);
