import { useEffect,useContext } from "react";
import { useLocation } from "react-router";
import HomePageContext from '../../context/HomePageContext';

const ScrollToTop = (props:any) => {
const {page,companyPage} =useContext(HomePageContext);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location,page,companyPage]);

  return <>{props.children}</>
};

export default ScrollToTop;