import { ROLE } from '../constants/roles';
import { Navigate, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const PrivateRoute = ({
  children,
  roles,
  navigateToRouteIfNotAuthenticated
}: {
  children: JSX.Element;
  roles: Array<ROLE>;
  navigateToRouteIfNotAuthenticated: string;
}) => {
  const getUser = (): any => {
    let decodedToken = null;
    // token = localstorage.getitem --> then pass that token in jwt decode
    try {
      decodedToken = jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTY4MTAyMjYwNn0.UIva61Il9WWU4wB7csF7g8-LAt-3p6rc91maO5Aqs3o")
    } catch { }
    const currentUser = decodedToken as any;

    return currentUser;
  }

  const location = useLocation();
  const user = getUser();

  const isAuthenticated: boolean = (user && roles.includes(user?.role)) ? true : false;

  if (!isAuthenticated) {
    return <Navigate to={navigateToRouteIfNotAuthenticated} state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;