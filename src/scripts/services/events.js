import { baseUrl, eventsQuantity } from "../variables.js"

async function getUserEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`);
    const events = await response.json();

    const filteredEvents = events.filter(event => event.type === 'CreateEvent' || event.type === 'PushEvent');
    
    return filteredEvents;
}

export { getUserEvents };
