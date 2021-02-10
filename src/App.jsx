import Section from './components/Section';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import user from './user.json';
import statisticsData from './statistical-data.json';
import friends from './friends.json';

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
    </Section>
  );
}
