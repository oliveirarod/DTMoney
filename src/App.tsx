import React, { useState } from 'react';

import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true)
  const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false)

  return ( 
    <TransactionsProvider>
      <GlobalStyle />

      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal 
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
