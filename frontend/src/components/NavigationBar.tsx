import CardNav from "./elements/CardNav/CardNav";
import logo from "../assets/VanshAnandLogo.png";

export const NavigationBar = () => {
  const items = [
    {
      label: "About Me",
      bgColor: "#6f1fd1/1",
      textColor: "#ddccff",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/vanshanand1/",
          ariaLabel: "My LinkedIn Profile",
        },
        {
          label: "GitHub",
          href: "https://github.com/VanshAnand1",
          ariaLabel: "My GitHub Profile",
        },
        {
          label: "Leetcode",
          href: "https://leetcode.com/u/Vansh0711/",
          ariaLabel: "My Leetcode Profile",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#6f1fd1/1",
      textColor: "#ddccff",
      links: [
        {
          label: "Featured",
          href: "#projects",
          ariaLabel: "Featured Projects",
        },
        {
          label: "Repositories",
          href: "https://github.com/VanshAnand1?tab=repositories",
          ariaLabel: "My GitHub Repositories",
        },
      ],
    },
    {
      label: "Skills",
      bgColor: "#6f1fd1/1",
      textColor: "#ddccff",
      links: [{ label: "Skills Section", href: "#skills", ariaLabel: "" }],
    },
    {
      label: "Contact",
      bgColor: "#6f1fd1/1",
      textColor: "#ddccff",
      links: [
        {
          label: "Contact Section",
          href: "#contact",
          ariaLabel: "Contact Section",
        },
        {
          label: "Email",
          href: "mailto:vanshanandutsc@gmail.com",
          ariaLabel: "Email",
        },
        {
          label: "GitHub",
          href: "https://github.com/VanshAnand1",
          ariaLabel: "Twitter",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/vanshanand1/",
          ariaLabel: "LinkedIn",
        },
      ],
    },
  ];

  return (
    <div id="about">
      <CardNav
        logo={logo}
        logoAlt="Vansh Anand"
        items={items}
        baseColor="transparent"
        menuColor="#ddccff"
        buttonBgColor="transparent"
        buttonTextColor="#ddccff"
        ease="power3.out"
        className="rb-glass"
      />
    </div>
  );
};
