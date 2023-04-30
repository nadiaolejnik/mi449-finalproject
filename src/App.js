import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mhzmxzfuwdhxlfqxrvnd.supabase.co'
const supabaseKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oem14emZ1d2RoeGxmcXhydm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3ODMzMDksImV4cCI6MTk5ODM1OTMwOX0.DINNdit4JMrbgjCWvynQmRDQhp3O07uxAOvPkdbpzfg'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getTracker() {
  let { data: activitytracker, error } = await supabase
    .from('activitytracker')
    .select('*')

  for (let activity of activitytracker) {
    let activityList = document.getElementById('activitytracker');
    activityList.innerHTML += `<tr><td>${activity.name}</td><td>${activity.starttime}</td><td>${activity.endtime}</td><td>${activity.avgheartbeat}</td><td>${activity.calories}</td></tr>`;
  }
}
getTracker();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



