import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Main from '../pages/main';
import Reservation from '../pages/reservation';

function DefaultRouter() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Main />} />
        <Route path='/reservation' element={<Reservation />} />
      </Route>
    </Routes>
  );
}
export default DefaultRouter;
