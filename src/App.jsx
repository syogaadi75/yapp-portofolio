import { useState } from 'react';
import ReactPageScroller from 'react-page-scroller'
import Contact from './components/Contact';
import Header from './components/Header'
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import Services from './components/Services';
import Skills from './components/Skills';
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

function App(props) {
  const [currentPage, setCurrentPage] = useState(null)

  const handleBeforePageChange = number => {
    setCurrentPage(number)
  };

  const handleFullScreen = useFullScreenHandle();

  return (
    <>
      <FullScreen handle={handleFullScreen}>
        <Header setCurrentPage={setCurrentPage} handleFullScreen={handleFullScreen} currentPage={currentPage} />
        <ReactPageScroller
          pageOnChange={handleBeforePageChange}
          customPageNumber={currentPage}
        >
          <Home setCurrentPage={setCurrentPage} />
          <Services />
          <Skills />
          <MyProjects />
          <Contact />
        </ReactPageScroller>
      </FullScreen>
    </>
  );
}

export default App;
