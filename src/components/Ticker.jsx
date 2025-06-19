import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Ticker = () => {
  const [time, setTime] = useState('');
  const [location, setLocation] = useState({ lat: null, long: null });
  const [error, setError] = useState(null);

  // Updates time every second
  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const isAM = hours < 12;
    const formattedTime = `${now.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })} | ${hours % 12 || 12}:${String(now.getMinutes()).padStart(2, '0')}:${String(
      now.getSeconds()
    ).padStart(2, '0')} ${isAM ? 'AM' : 'PM'}`;
    setTime(formattedTime);
  };

  // Gets user's location
  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
        });
      },
      (err) => {
        setError(err.message);
      }
    );
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    getLocation();
    return () => clearInterval(interval);
  }, []);

  // Dynamic scrolling message
  const message = `📅 ${time} ${
    error
      ? `⚠️ ${error}`
      : location.lat && location.long
      ? `📍 Latitude: ${location.lat.toFixed(3)}, Longitude: ${location.long.toFixed(3)}`
      : '📍 Fetching location...'
  }`;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 text-sm bg-green-800 text-white">
      <Marquee pauseOnHover gradient={false} speed={50}>
        <p className="px-4 py-2">
          {message}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {message}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {message}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {message}
        </p>
      </Marquee>
    </div>
  );
};

export default Ticker;
