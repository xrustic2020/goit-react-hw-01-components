import Section from './components/Section';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './data/user.json';
import statisticsData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <Section>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Section>
  );
}
