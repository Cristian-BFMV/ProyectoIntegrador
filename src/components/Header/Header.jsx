import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import './Header.css';

const Header = () => {
  const user = useContext(UserContext);
  return (
    <header>
      <div className="header-content">
        <h2 className="header-brand">Rappi Makers</h2>
        <p className="header-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit dicta cum quibusdam in iste est fugiat ipsa quod, fugit
          exercitationem eveniet, quasi odio explicabo sunt?
          kfjjfksdjfkjsdfkjfskdfj jfds daffd
        </p>
      </div>
      {user && <h1>{user.email}</h1>}
    </header>
  );
};

export default Header;
