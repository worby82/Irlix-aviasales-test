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
  const [activeTab, setActiveTab] = useState('minPrice');
  const [searchId, setSearchId] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [stop, setStop] = useState(null);

  useEffect(() => {
    if (searchId === null) {
      TicketData.getSearchId().then(searchId => setSearchId(searchId))
    }
  }, [])

  useEffect(() => {
    if (searchId !== null) {
      console.log(stop);

      if (stop !== true) {
        TicketData.getDataTickets(searchId).then(data => {/* console.log(data);*/ setTickets([...tickets, ...data]); console.log(tickets);console.log(stop);})
        TicketData.getDataStop(searchId).then(data => setStop(data))
      }
    }
  }, [searchId,stop,tickets])

  return (
    <>
      <Header />
      <Main>
        <Filter>
          <FilterList />
        </Filter>
        <Section>
          <TabList activeTab={activeTab} />
          {/* <TicketList tickets={tickets} /> */}
          {
            tickets === []
              ? <p>пусто</p>
              : <TicketList tickets={tickets} />
          }
          <ButtonLoading />
        </Section>
      </Main>
    </>
  );
}

export default App;
