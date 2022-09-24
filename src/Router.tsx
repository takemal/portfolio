import {Route, Routes} from 'react-router-dom';
import { Home } from './templates/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

