// src/layout/RootLayout.tsx (MainLayout)
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* This header will appear on every route */}
      <main>
        <Outlet /> {/* Renders the child route component */}
      </main>
    </div>
  );
};

export default MainLayout;
