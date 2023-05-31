import { SidebarNavItem } from "@/components/atoms";
import {
  FaHome,
  FaChalkboardTeacher,
  FaCoins,
  FaHandHoldingHeart,
  FaArchive,
} from "react-icons/fa";

const SidebarNavigation = ({ currentPath }) => {
  const navItems = [
    { path: "/dashboard", icon: <FaHome size={24} />, label: "Dashboard" },
    {
      path: "/customer",
      icon: <FaChalkboardTeacher size={24} />,
      label: "Customer",
    },
    { path: "/fundraising", icon: <FaCoins size={24} />, label: "Fundraising" },
    {
      path: "/volunteer",
      icon: <FaHandHoldingHeart size={24} />,
      label: "Volunteer",
    },
    { path: "/news", icon: <FaArchive size={24} />, label: "News" },
  ];

  return (
    <nav className='mt-8'>
      <ul>
        {navItems.map((item) => (
          <SidebarNavItem
            key={item.path}
            path={item.path}
            isActive={currentPath === item.path}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
