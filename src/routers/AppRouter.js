// Librerías
import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

// Components
import { Header } from '../components/Header';
import { EncuestaPage } from '../pages/EncuestaPage';
import { MainPage } from '../pages/MainPage';

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Header/> }>
                    <Route index element={ <MainPage /> } />
                    <Route path="encuesta" element={ <EncuestaPage /> } />
                </Route> 
            </Routes> 
        </BrowserRouter>
    )
}