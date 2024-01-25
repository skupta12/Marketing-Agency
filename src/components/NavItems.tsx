import Link from "next/link";

const navItems = [
    {
        id: 1,
        name: "Home",
        href: "/"
    },
    {
        id: 2,
        name: "About",
        href: "/about"
    },
    {
        id: 3,
        name: "Work",
        href: "/work"
    },
    {
        id: 4,
        name: "News",
        href: "/news"
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact"
  }
];

const NavItems = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center cursor pointer gap-5 leading-[1]">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>
            <div className="text-black lg:text-[90px] text-[50px] font-semibold">{item.name}</div>
            </Link>       
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
