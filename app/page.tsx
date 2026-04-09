'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import DriverSeat from '@/components/DriverSeat/DriverSeat';
import Dashboard from '@/components/Dashboard/Dashboard';
import PassengerSeat from '@/components/PassengerSeat/PassengerSeat';
import BackSeat from '@/components/BackSeat/BackSeat';
import Trunk from '@/components/Trunk/Trunk';
import Booking from '@/components/Booking/Booking';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('');

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <DriverSeat />
        <Dashboard onSelectPackage={setSelectedPackage} />
        <PassengerSeat />
        <BackSeat />
        <Trunk />
        <Booking selectedPackage={selectedPackage} />
      </main>
      <Footer />
    </>
  );
}
