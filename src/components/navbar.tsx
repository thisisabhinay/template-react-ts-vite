import type { FC } from 'react';
import { Link } from "react-router-dom";

interface NavbarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menu: any[]
}

const Navbar: FC<NavbarProps> = ({menu}) => {
  return (
    <div
      id="Navbar"
      className="px-10 pt-10 grid grid-cols-1 auto-rows-max gap-2"
    >
      <ul className="list-none flex items-center gap-4">
        {menu?.length
          ? menu.map((item) => (
              <li className="inline-block">
                <Link to={item.href} className="underline">
                  {item.title}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

export default Navbar;
