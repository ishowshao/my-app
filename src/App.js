import React from 'react';
import Header from './Header';
import Upload from './Upload';
import InvoiceTable from './InvoiceTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Upload></Upload>
      <InvoiceTable></InvoiceTable>
    </div>
  );
}

export default App;
