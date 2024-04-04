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
    name: "Bookkeeping",
    path: "/bookkeeping",
    // icon: dashboard,
    // activeIcon: activeDashboard,
  },
  {
    name: "GST",
    path: "/gst",
    // icon: learning,
    // activeIcon: activeLearning,
  },
  {
    name: "HST",
    path: "/hst",
    // icon: tools,
    // activeIcon: activeTools,
  },
  {
    name: "Year End",
    path: "/yearEnd",
    // icon: profile,
    // activeIcon: activeProfile,
  },
  {
    name: "Dividends",
    path: "/dividends",
    // icon: tools,
    // activeIcon: activeTools,
  },
  {
    name: "Annual Returns",
    path: "/annualReturns",
    // icon: profile,
    // activeIcon: activeProfile,
  },
  {
    name: "Incorporation",
    path: "/incorporation",
    // icon: tools,
    // activeIcon: activeTools,
  },
  {
    name: "Payroll",
    path: "/payroll",
    // icon: profile,
    // activeIcon: activeProfile,
  },
];

export default navigationConstants;
