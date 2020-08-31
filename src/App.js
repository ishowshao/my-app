import React from 'react';
import Header from './Header';
import InvoiceUpload from './InvoiceUpload';
import InvoiceTable from './InvoiceTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <InvoiceUpload></InvoiceUpload>
      <InvoiceTable></InvoiceTable>
    </div>
  );
}

export default App;
