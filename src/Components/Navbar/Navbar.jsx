import { FaHome, FaCode, FaLinkedin } from "react-icons/fa";
import { IoIosContact, IoIosMail, IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import "./Navbar.css";

export default function NavBar() {
  const items = [
    { icon: <FaHome className="nav-icon" />, label: "Home", targetId: "home" },
    {
      icon: <IoIosContact className="nav-icon" />,
      label: "Profile",
      targetId: "about",
    },
    {
      icon: <FaCode className="nav-icon" />,
      label: "Projects",
      targetId: "work",
    },
    {
      icon: <IoIosMail className="nav-icon" />,
      label: "Contact",
      targetId: "contact",
    },
    {
      icon: <FaLinkedin className="nav-icon-small" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bhavishya-parmar-23555a284",
    },
    {
      icon: <IoLogoGithub className="nav-icon" />,
      label: "Github",
      url: "https://github.com/bhavishyasinghaniya07",
    },
    {
      icon: <SiLeetcode className="nav-icon-small" />,
      label: "LeetCode",
      url: "https://leetcode.com/u/bhavishya_singhaniya_07/",
    },
  ];
  const handleClick = (item) => {
    if (item.url) {
      window.open(item.url, "_blank");
    } else if (item.targetId) {
      const element = document.getElementById(item.targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        {items.map((it) => {
          return (
            <button
              className="nav-button"
              key={it.label}
              onClick={() => handleClick(it)}
            >
              {it.icon}
              <span className="tooltip">{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// import { useRef, useState } from "react";
// import "./Navbar.css";
// import underline from "../../assets/nav_underline.svg";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import menu_open from "../../assets/menu_open.svg";
// import menu_close from "../../assets/menu_close.svg";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const menuRef = useRef();

//   const openMenu = () => {
//     menuRef.current.style.right = "0";
//   };
//   const closeMenu = () => {
//     menuRef.current.style.right = "-350px";
//   };
//   return (
//     <div className="navbar">
//       <div className="logo">WelCome</div>
//       <img className="nav-mob-open" src={menu_open} onClick={openMenu} alt="" />
//       <ul ref={menuRef} className="nav-menu">
//         <img
//           onClick={closeMenu}
//           src={menu_close}
//           alt=""
//           className="nav-mob-close"
//         />
//         <li>
//           <AnchorLink className="anchor-link" href="#home">
//             <p onClick={() => setMenu("home")}>Home</p>
//           </AnchorLink>
//           {menu === "home" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" offset={50} href="#about">
//             <p onClick={() => setMenu("about")}>About Me</p>
//           </AnchorLink>
//           {menu === "about" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" offset={50} href="#work">
//             <p onClick={() => setMenu("work")}>Projects</p>
//           </AnchorLink>
//           {menu === "services" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" offset={50} href="#footer">
//             <p onClick={() => setMenu("protfolio")}>Links</p>
//           </AnchorLink>
//           {menu === "footer" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" offset={50} href="#contact">
//             <p onClick={() => setMenu("contact")}>Contact</p>
//           </AnchorLink>
//           {menu === "contact" ? <img src={underline} alt="" /> : <></>}
//         </li>
//       </ul>
//       <div className="nav-connect">
//         <AnchorLink className="anchor-link" offset={50} href="#contact">
//           <p onClick={() => setMenu("contact")}></p>
//           Connect With Me{" "}
//         </AnchorLink>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
