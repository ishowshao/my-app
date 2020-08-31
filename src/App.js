import React from 'react';
import Header from './Header';
import InvoiceUpload from './InvoiceUpload';
import InvoiceTable from './InvoiceTable';
import './App.css';

function App() {
  const invoiceTable = React.createRef();
  const onUploadSuccess = () => {
    // call InvoiceTable.reload()
    invoiceTable.current.getList();
  };
  return (
    <div className="App">
      <Header></Header>
      <InvoiceUpload onUploadSuccess={onUploadSuccess}></InvoiceUpload>
      <InvoiceTable ref={invoiceTable}></InvoiceTable>
    </div>
  );
}

export default App;
