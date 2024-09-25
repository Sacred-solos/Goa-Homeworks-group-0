import React, { useState, useEffect } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChange];
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return [isDarkMode, toggleDarkMode];
};

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => setTime(initialTime);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return { time, isActive, startTimer, pauseTimer, resetTimer };
};

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

const App = () => {

  const [formValues, handleInputChange] = useForm({ name: '', email: '' });

  const windowSize = useWindowSize();

  const { data: fact, loading, error } = useFetch('https://uselessfacts.jsph.pl/random.json?language=en');

  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const scrollPosition = useScrollPosition();

  const { time, isActive, startTimer, pauseTimer, resetTimer } = useTimer(60);

  const isOnline = useOnlineStatus();

  return (
    <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
      <h1>Custom Hooks Demo</h1>

      <h2>Form Handling Hook</h2>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <p>
        Name: {formValues.name}, Email: {formValues.email}
      </p>


      <h2>Window Size Hook</h2>
      <p>Width: {windowSize.width}px, Height: {windowSize.height}px</p>

      <h2>Fun Fact</h2>
      {loading ? <p>Loading fun fact...</p> : error ? <p>Error fetching fun fact</p> : <p>{fact.text}</p>}

      <h2>Dark Mode Toggle Hook</h2>
      <button onClick={toggleDarkMode}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <h2>Scroll Position Hook</h2>
      <p>Scroll Position: {scrollPosition}px</p>

      <h2>Timer Hook</h2>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>{isActive ? 'Running' : 'Start Timer'}</button>
      <button onClick={pauseTimer}>Pause Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>

      <h2>Online Status Hook</h2>
      <p>{isOnline ? 'You are online' : 'You are offline'}</p>
    </div>
  );
};

export default App;