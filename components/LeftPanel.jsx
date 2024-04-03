"use client";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import navigationConstants from "../constant/navigation.constant";
import gift from "./../public/assets/icons/gift.svg";
import settings from "./../public/assets/icons/settings.svg";
import help from "./../public/assets/icons/help.svg";
import dashBoardlogo from "./../public/assets/icons/dashBoardlogo.svg";
import styles from "../styles/navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LeftPanel = ({ children }) => {
  const path = usePathname();
  const router = useRouter();
  return (
    <div className="d-flex min-vh-100">
      <nav
        className="d-flex flex-column justify-content-between align-items-baseline p-3 "
        style={{
          background: "rgba(251, 251, 251, 1)",
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "18vw",
          border: "1px solid lightgray",
        }}
      >
        <section>
          <ul
            className="d-flex flex-column justify-start  gap-0"
            style={{ color: "rgba(143, 143, 143, 1)" }}
          >
            <Image
              src={dashBoardlogo}
              height={35}
              alt="logo"
              className="mb-4"
            />
            {navigationConstants.map((item, index) => {
              {
                /* console.log("currentLoggedInUser", currentLoggedInUser); */
              }
              return (
                <li
                  className={`d-flex li align-items-center p-3 pr-4 gap-3 rounded ${
                    path.includes(item.path) ? styles.activeLink : ""
                  }`}
                  key={index}
                  onClick={() => router.push(item.path)}
                >
                  <Image
                    src={path.includes(item.path) ? item.activeIcon : item.icon}
                    alt={item.name}
                    height={16}
                    srcset=""
                  />
                  <Link
                    href="#"
                    className={`no-underline decoration-0 font-semibold text-black`}
                    to={item.path === "/profile" ? `/profile/$$$` : item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <ul className="d-flex flex-column gap-3 mt-2">
            <li className="d-flex li align-items-center p-2 pr-4 gap-3 ">
              <Image src={help} alt="help" srcset="" />
              <Link
                className={`no-underline decoration-0 font-semibold text-black`}
                href="/"
              >
                Help
              </Link>
            </li>
            <li className="d-flex li align-items-center p-2 pr-4 gap-3 ">
              <Image src={settings} alt="settings" srcset="" />
              <Link
                className={`no-underline decoration-0 font-semibold text-black`}
                href="/"
              >
                Settings
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      <section className="overflow-y-auto w-full min-h-screen p-4">
        {children}
      </section>
    </div>
  );
};

export default LeftPanel;
