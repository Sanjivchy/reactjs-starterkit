// src/layout/RootLayout.tsx (MainLayout)
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* This header will appear on every route */}
      <main>
        <Outlet /> {/* Renders the child route component */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
