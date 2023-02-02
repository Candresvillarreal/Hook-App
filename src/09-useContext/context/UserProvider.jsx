import React, { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//     id: 123,
//     name: 'Carlos',
//     email: 'carlos@gmail.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
