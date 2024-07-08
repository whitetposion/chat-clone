import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ThemeContext } from '../../context/themecontext';
import './Sidedrawer.css';

const SideDrawer = ({ show, onClose, children }) => {
  const {theme} = useContext(ThemeContext) 
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="slide"
      unmountOnExit
    >
      <div className="fixed inset-0 flex ">
        <div className={`relative border-1 border-gray-500 ${theme === "dark" ? "bg-[#212121]": "bg-white"} w-[300px]`}>{children}</div>
        <div className="flex-1 sm:w-64 p-4 shadow-lg h-full" onClick={onClose}></div>
      </div>
    </CSSTransition>
  );
};

export default SideDrawer;
