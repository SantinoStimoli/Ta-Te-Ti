import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Board from '../components/containers/board';

const AppRouting = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Board />} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </div>
    );
}

export default AppRouting;
