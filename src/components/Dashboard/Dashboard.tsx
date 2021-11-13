import { Container } from './DashboardStyles'

import { Summary } from '../Summary/Summary';
import { TransactionsTable } from '../TransactionsTable/TransactionsTable';

export function Dashboard() {
  return (
  <Container>
    <Summary />
    <TransactionsTable />
  </Container>
  );
}
