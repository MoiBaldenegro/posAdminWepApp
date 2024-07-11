import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setErrors, toggleLoading } from '../../redux/actions/auth';
import styles from './home.module.css';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Aside from '../../components/aside/aside';
import Loader from '../../components/loaders/loader';

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const { loginUsers } = useSelector((state) => state.auth);
  const { invalidCredentials } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loginUsers.length > 0) {
      dispatch(toggleLoading(false));
    }
  }, [loginUsers, dispatch]);

  if (loginUsers.length !== 1 && isLoading === false) {
    dispatch(setErrors('Email y/o contraseña invalidos'));
    dispatch(toggleLoading(true));
  }
  return (
    <div className={styles.container}>
      {invalidCredentials === false && isLoading ? (
        <Loader />
      ) : loginUsers.length > 0 && loginUsers[0].token ? (
        <>
          <Header />
          <div>
            <Aside />
            <Main />
          </div>
        </>
      ) : null}
    </div>
  );
}
