export default class TicketData {
    static async getSearchId() {
        const response = await fetch(`https://front-test.dev.aviasales.ru/search`);
        const search = await response.json();
        return search.searchId;
    }
    static async getDataTickets(searchId) {
        const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
        const data = await response.json();
        // console.log(data);
        return data.tickets;
    }
    static async getDataStop(searchId) {
        const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
        const data = await response.json();
        // console.log(data);
        return data.stop;
    }
}