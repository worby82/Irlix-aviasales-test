import { useState } from "react";
import ButtonLoading from "./components/ButtonLoading";
import Filter from "./components/Filter";
import FilterList from "./components/FilterList";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import TabList from "./components/TabList";
import TicketList from "./components/TicketList";

function App() {
  const [activeTab, setActiveTab] = useState('minPrice')
  return (
    <>
      <Header />
      <Main>
        <Filter>
          <FilterList />
        </Filter>
        <Section>
          <TabList activeTab={activeTab} />
          <TicketList />
          <ButtonLoading />
        </Section>
      </Main>
    </>
  );
}

export default App;
