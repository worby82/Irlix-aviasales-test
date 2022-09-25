import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchID, loadTickets } from "./store/actions";

import ButtonLoading from "./components/ButtonLoading";
import Filter from "./components/Filter";
import FilterList from "./components/FilterList";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import TabList from "./components/TabList";
import TicketList from "./components/TicketList";

import { load } from "./utils/bem";
import './css/load.css'


function App() {
  const dispatch = useDispatch();

  const searchId = useSelector(state => state.searchId)
  const stop = useSelector(state => state.stop)
  const tickets = useSelector(state => state.tickets)

  const sortedTickets = useSelector(state => state.sortedTickets)

  useEffect(() => {
    if (searchId === null) {
      dispatch(loadSearchID());
    }
  }, [])

  useEffect(() => {
    if (searchId !== null) {
      if (stop !== true) {
        dispatch(loadTickets(searchId));
      }
    }
  }, [searchId, stop, tickets])

  return (
    <>
      <Header />
      <Main>
        <Filter>
          <FilterList tickets={tickets} stop={stop} />
        </Filter>
        <Section>
          <TabList />
          {
            sortedTickets.length === 0
              ? <p className={load()}>Загрузка</p>
              : <>
                <TicketList tickets={sortedTickets} />
                <ButtonLoading />
              </>
          }
        </Section>
      </Main>
    </>
  );
}

export default App;