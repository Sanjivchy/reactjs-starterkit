// src/layouts/MainLayout.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This will render the child route */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
