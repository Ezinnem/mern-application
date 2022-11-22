import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import CreateMember from './components/create-member'
import ListMember from './components/list-member'
function App() {

  return (
    <div className="App">
      <CreateMember />
      <ListMember />
    </div>
  )
}
export default App