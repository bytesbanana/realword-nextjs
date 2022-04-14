import React, { useEffect, useState } from 'react';

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  return [user];
}
