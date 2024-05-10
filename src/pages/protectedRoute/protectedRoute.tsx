import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setErrors, toggleLoading } from '../../redux/actions/auth';

export default function ProtectedRoute() {
  const dispatch = useDispatch();
  const { loginUsers } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.auth);

  if (loginUsers.length > 0 || isLoading) {
    return <Outlet />;
  } else {
    dispatch(toggleLoading(true));
    dispatch(setErrors('email y/o contraseña invalidos'));
    return <Navigate to="login" />;
  }
}
