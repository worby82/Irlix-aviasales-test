import { useEffect, useMemo, useState } from "react";

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
  const [ticketCount, setTicketCount] = useState(5);
  const [filterValue, setFilterValue] = useState([]);

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
      } else {
        sorting(activeTab);
      }
    }
  }, [searchId, stop, tickets, ticketCount, filterValue])

  const changeFilter = (value) => {
    if (!filterValue.includes(value)) {
      setFilterValue([...filterValue, value]);
    } else {
      const copyFilterValue = [...filterValue];
      copyFilterValue.splice(copyFilterValue.indexOf(value), 1)
      setFilterValue(copyFilterValue);
    }
  }

  useMemo(() => {
    if (filterValue.includes('all') === false & filterValue.length > 0) {
          setFilterTickets([...tickets.filter(itemFilter =>
            filterValue.includes(String(itemFilter.segments[0].stops.length))
            & filterValue.includes(String(itemFilter.segments[1].stops.length))
          )])
        } else {
          setFilterTickets([...tickets]);
        }
  }, [filterValue]);

  const sorting = (value) => {
    setActiveTab(value);
    if (filterValue.includes('all') || filterValue.length === 0) {
      setSortedTickets([...tickets].sort(getSortedFunction(value)).slice(0, ticketCount));
    } else {
      setSortedTickets([...filterTickets].sort(getSortedFunction(value)).slice(0, ticketCount));
    }
  }

  const getSortedFunction = (value) => {
    switch (value) {
      case 'fast':
        return (prev, next) => {
          return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration);
        };
      case 'optimal':
        return (prev, next) => {
          return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration) & prev.price - next.price;
        };
      default:
        return (prev, next) => prev.price - next.price;
    }
  }

  return (
    <>
      <Header />
      <Main>
        <Filter>
          <FilterList changeFilter={changeFilter} />
        </Filter>
        <Section>
          <TabList activeTab={activeTab} sorting={sorting} />
          {
            sortedTickets.length === 0
              ? <p><center>Загрузка</center></p>
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