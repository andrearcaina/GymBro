export const fetchChatRequest = async() => {
    const response = await fetch('https://api.cohere.ai/v1/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.COHERE_API_TOKEN}`,
        },
        body: JSON.stringify({
            model: 'command',
            message: `give me a workout routine for 5 days a week`,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return data;
};