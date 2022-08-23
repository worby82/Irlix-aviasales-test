export default class TicketData {
    static async getSearchId() {
        try {
            const response = await fetch(`https://front-test.dev.aviasales.ru/search`);
            const search = await response.json();
            return search.searchId;
        } catch (err) {
            console.log(err.message);
        }
    }
    static async getDataTickets(searchId) {
        try {
            const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err.message);
        }
    }
}