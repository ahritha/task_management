import { sidebarList } from "../../assets/constant";
import { Link, useLocation } from "react-router-dom";


const Sidebar  = ( ) => {
  const location = useLocation()
  const getActive = (path:string) =>{
    if(location.pathname.split('/')[1] === path.split('/')[1]){
      return "active-sidebar ms-3 rounded-2"
    }
  }

  return (
    <div  className="border-end hide-scrollbar sidebar-class overflow-y-scroll ">
      <div className="d-flex mb-2">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="fw-semibold fs-5">Tasks Management</div>
         {/*  <IoCloseCircleOutline onClick={sidebarToggle} className='text-danger sidebar-close-btn cursor-pointer fs-4 position-absolute me-3 end-0'/> */}
        </div>
      </div>

      <ul className="list-unstyled">
        {
          sidebarList.map((item, i) => (<li key={i} className={`${getActive(item.path)} sidebar-list rounded-2`}>
            <Link to={item.path} className={`text-decoration-none text-dark `}>
              <p className="px-3 py-2 fw-semibold ms-3 rounded d-flex align-items-center">
                <item.icon className="me-2" /> 
                <span>{item.title}</span>
              </p>
            </Link>
          </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Sidebar;
