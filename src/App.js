
import './App.css';
import ProfileCard from "./Profiles"
import profiles from './data'


function App() {
  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="card-container">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
