/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ReadingModeProvider } from './context/ReadingModeContext';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Viewer } from './pages/Viewer';
import { Bookmarks } from './pages/Bookmarks';
import { Notes } from './pages/Notes';
import { Glossary } from './pages/Glossary';

export default function App() {
  return (
    <Router>
      <ReadingModeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/viewer/:id" element={<Viewer />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/glossary" element={<Glossary />} />
          </Routes>
        </Layout>
      </ReadingModeProvider>
    </Router>
  );
}
