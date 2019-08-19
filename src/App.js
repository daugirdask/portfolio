import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import WeatherApp from './apps/weather-app/App';
import TextEditorApp from './apps/text-editor-app/App';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/portfolio/" component={Home}></Route>
      <Route path="/weather-app/" component={WeatherApp}></Route>
      <Route path="/text-editor-app/" component={TextEditorApp}></Route>
    </div>
  </BrowserRouter>
)

export default App;