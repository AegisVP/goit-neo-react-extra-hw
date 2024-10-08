import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserBar from '../UserBar/UserBar';
import AuthorizationBar from '../AuthorizationBar/AuthorizationBar';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth';
import style from './Header.module.css';

export default function Header() {
  const isRefresing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={style.header}>
      <Navigation />
      {isRefresing ? 'Wait...' : isLoggedIn ? <UserBar /> : <AuthorizationBar />}
    </header>
  );
}
