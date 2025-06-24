import React from 'react';
import VideoRoom from './components/VideoRoom';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to LiveChat App 🎥💬</h1>
      <p>Let’s build something amazing.</p>
      <VideoRoom roomUrl="https://livechat01.daily.co/test-room" />
    </div>
  );
}

export default App;
