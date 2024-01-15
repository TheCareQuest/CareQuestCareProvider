
import React, { Suspense } from 'react';
import './App.css';
import Website from './pages/Website.jsx';
import Layout from './components/Layout/Layout.jsx';
import OurCampaigns from './pages/OurCampaigns/OurCampaigns.jsx';
import CharityDetails from './pages/CharityDetails/CharityDetails.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Profile from './pages/Profile/Profile.jsx';
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route index element={<Website />} />
             
              <Route path="OurCampaigns" element={<OurCampaigns />} />
              <Route path="OurCampaigns/:charityTitle" element={<CharityDetails />} />
              <Route path="Profile" element={<Profile />} />
              
             
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
