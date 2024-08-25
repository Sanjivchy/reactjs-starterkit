// src/layouts/MainLayout.tsx
import React from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout: React.FC = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <section className="w-full">
        <Outlet /> {/* This will render the child route */}
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
