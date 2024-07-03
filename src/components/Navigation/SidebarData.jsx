import { FaHome } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa"; 
import { GiReceiveMoney } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa"; 
import { MdLogout } from "react-icons/md";

export const SidebarData = [
    {
      title: 'Accounts',
      path: '/admin/accounts',
      icon: <FaHome />,
      cName: 'nav-text'
    },
    {
      title: 'Transactions',
      path: '/admin/transactions',
      icon: <FaCreditCard />,
      cName: 'nav-text'
    },
    {
      title: 'Loans',
      path: '/admin/loans',
      icon: <GiReceiveMoney />,
      cName: 'nav-text'
    },
    {
      title: 'Debit Orders',
      path: '/admin/debitorders',
      icon: <FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Logout',
      path: '/login',
      icon: <MdLogout />,
      cName: 'nav-text'
    }
  ];