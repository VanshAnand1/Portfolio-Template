import CardNav from "./elements/CardNav/CardNav";
// import logo from "../assets/react.svg";
import logo from "../assets/VanshAnandLogo.png";

export const NavigationBar = () => {
  const items = [
    {
      label: "About Me",
      bgColor: "#rgba(111, 31, 209, 1)",
      textColor: "#ddccff",
      links: [
        { label: "Company", href: "#", ariaLabel: "About Company" },
        { label: "Careers", href: "#", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#6f1fd1/1",
      textColor: "#ddccff",
      links: [
        { label: "Featured", href: "#", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Skills",
      bgColor: "#6f1fd1/1",
      textColor: "#ddccff",
      links: [
        { label: "Programming", href: "#", ariaLabel: "" },
        { label: "Development", href: "#", ariaLabel: "" },
        { label: "Libraries", href: "#", ariaLabel: "" },
        { label: "Web Tools", href: "#", ariaLabel: "" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#6f1fd1/1",
      textColor: "#ddccff",
      links: [
        { label: "Email", href: "#", ariaLabel: "Email" },
        { label: "Twitter", href: "#", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Vansh Anand"
      items={items}
      baseColor="transparent"
      menuColor="#ddccff"
      buttonBgColor="#111"
      buttonTextColor="#ddccff"
      ease="power3.out"
      className="rb-glass"
    />
  );
};
