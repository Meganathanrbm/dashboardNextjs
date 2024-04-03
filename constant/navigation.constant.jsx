import dashboard from "../public/assets/icons/dashboard.svg";
import activeDashboard from "../public/assets/icons/activeDashboard.svg";
import profile from "../public/assets/icons/profile.svg";
import activeProfile from "../public/assets/icons/activeProfile.svg";
import tools from "../public/assets/icons/tools.svg";
import activeTools from "../public/assets/icons/activeTools.svg";
import learning from "../public/assets/icons/learning.svg";
import activeLearning from "../public/assets/icons/activeLearning.svg";

const navigationConstants = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: dashboard,
    activeIcon: activeDashboard,
  },
  {
    name: "Learning",
    path: "/learning",
    icon: learning,
    activeIcon: activeLearning,
  },
  {
    name: "Tools",
    path: "/tools",
    icon: tools,
    activeIcon: activeTools,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: profile,
    activeIcon: activeProfile,
  },
];

export default navigationConstants;
