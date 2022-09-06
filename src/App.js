import { useEffect, useState } from "react";

import ButtonLoading from "./components/ButtonLoading";
import Filter from "./components/Filter";
import FilterList from "./components/FilterList";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import TabList from "./components/TabList";
import TicketList from "./components/TicketList";

import TicketData from "./API/TicketData";

function App() {
  const [ticketCount, setTicketCount] = useState(5);

  const [searchId, setSearchId] = useState(null);
  const [stop, setStop] = useState(null);

  const [tickets, setTickets] = useState([]);
  const [filterTickets, setFilterTickets] = useState([]);
  const [sortedTickets, setSortedTickets] = useState([]);

  useEffect(() => {
    if (searchId === null) {
      TicketData.getSearchId().then(searchId => setSearchId(searchId));
    }
  }, [])

  useEffect(() => {
    if (searchId !== null) {
      if (stop !== true) {
        TicketData.getDataTickets(searchId)
          .then(data => {
            setTickets([...tickets, ...data.tickets]);
            setStop(data.stop);
          })
          .catch(() => setTickets([...tickets, ...[]]));
      }
    }
  }, [searchId, stop, tickets])

  return (
    <>
      <Header />
      <Main>
        <Filter>
          <FilterList
            tickets={tickets}
            setFilterTickets={setFilterTickets}
            stop={stop}
          />
        </Filter>
        <Section>
          <TabList
            ticketCount={ticketCount}
            tickets={filterTickets}
            setSortedTickets={setSortedTickets}
          />
          {
            sortedTickets.length === 0
              ? <center>Загрузка</center>
              : <>
                <TicketList tickets={sortedTickets} />
                <ButtonLoading setTicketCount={setTicketCount} />
              </>
          }
        </Section>
      </Main>
    </>
  );
}

export default App;