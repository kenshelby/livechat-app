import React, { useEffect, useRef } from 'react';
import DailyIframe from '@daily-co/daily-js';

const VideoRoom = ({ roomUrl }) => {
  const callFrameRef = useRef(null);

  useEffect(() => {
    if (!roomUrl) return;

    const callFrame = DailyIframe.createFrame({
      showLeaveButton: true,
      iframeStyle: {
        position: 'relative',
        width: '100%',
        height: '600px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      },
    });

    callFrame.join({ url: roomUrl });
    callFrameRef.current.appendChild(callFrame.iframe);

    return () => callFrame.leave();
  }, [roomUrl]);

  return <div ref={callFrameRef}></div>;
};

export default VideoRoom;
