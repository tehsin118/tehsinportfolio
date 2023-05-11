import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.webp";
import work2 from "../assets/images/work_images/2.webp";
import work3 from "../assets/images/work_images/3.png";
import work4 from "../assets/images/work_images/4.png";
import work5 from "../assets/images/work_images/5.png";
import work6 from "../assets/images/work_images/6.png";
import work7 from "../assets/images/work_images/7.png";
import work8 from "../assets/images/work_images/8.png";
import work9 from "../assets/images/work_images/9.png";
import work10 from "../assets/images/work_images/10.png";
import work11 from "../assets/images/work_images/11.png";
import work12 from "../assets/images/work_images/12.png";
import work13 from "../assets/images/work_images/13.webp";
// works small images
import workSmall1 from "../assets/images/work_images/small/supervetMarket.png";
import workSmall2 from "../assets/images/work_images/small/supervetSite.webp";
import workSmall3 from "../assets/images/work_images/small/3.png";
import workSmall4 from "../assets/images/work_images/small/4.png";
import workSmall5 from "../assets/images/work_images/small/5.png";
import workSmall6 from "../assets/images/work_images/small/6.png";
import workSmall7 from "../assets/images/work_images/small/7.png";
import workSmall8 from "../assets/images/work_images/small/8.png";
import workSmall9 from "../assets/images/work_images/small/9.png";
import workSmall10 from "../assets/images/work_images/small/10.png";
import workSmall11 from "../assets/images/work_images/small/11.png";
import workSmall12 from "../assets/images/work_images/small/12.png";
import workSmall13 from "../assets/images/work_images/small/13.webp";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "13",
      tag: "Web Design",
      title: "Trekverse",
      img: work13,
      imgSmall: workSmall13,
      bg: "#FFF0F0",
      client: "Trekverse",
      langages: "HTML CSS SASS, Reactjs",
      link: "https://trekverse-bice.vercel.app/",
      linkText: "trekverse.com",
      description: "",
    },
    // 1
    {
      id: "1",
      tag: "Marketplace",
      title: "Supervet Marketplace",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "Supervet",
      langages: "HTML CSS SASS, Reactjs",
      link: "https://supervet-marketplace.vercel.app/",
      linkText: "supervet-marketplace.com",
      description:
        "Super Vet NFT marketplace is a unique platform that allows creators and fans of the game to buy, sell, and trade non-fungible tokens (NFTs) that are based on the Super Vet game. These NFTs are digital assets that represent unique items, such as characters, items, and potions, in the game.",
    },
    // 2
    {
      id: "2",
      tag: "Web Design",
      title: "Supervet",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "Supervet",
      langages: "HTML SASS React JS",
      link: "https://supervet-v2.vercel.app/",
      linkText: "Supervet-v2.com",
      description:
        "Welcome to the world of the Super Vet where adventure, heroism, and animal rescue collide in a quest to save the innocent creatures of the world. Super Vet is a 3D action-adventure, AAA grade level animal rescue NFT GameFi along with the perks of the first-ever Read To Earn comic series.",
    },
    // 3
    {
      id: "3",
      tag: "Marketplace",
      title: "Multi-art (desktop version)",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF0F0",
      client: "Multi-art",
      langages: "HTML CSS SASS React Js",
      link: "https://multia-art.vercel.app/",
      linkText: "multi-art.com",
      description:
        "Welcome to the multi-art NFT marketplace! This platform offers a seamless experience for buyers and sellers of NFTs. Artists can register and create NFTs to sell, while buyers can browse and bid on a diverse range of NFTs, from digital art to collectibles. The user-friendly interface makes it easy to upload artwork and set prices, while the secure and reliable platform ensures a smooth transaction process. Join the community of artists and collectors today and explore the exciting world of NFTs on this marketplace.",
    },
    // 4
    {
      id: "4",
      tag: "Web Design",
      title: "Time Village",
      img: work4,
      imgSmall: workSmall4,
      bg: "#E9FAFF",
      client: "Time Village",
      langages: "HTML SASS React Js",
      link: "https://time-village.vercel.app/",
      linkText: "time-village.com",
      description:
        "Time Village is an innovative Ethereum-powered social media application that redefines the way people connect, communicate, and engage with online communities without being concerned about security breaches and privacy violations.",
    },
    // 5
    {
      id: "5",
      tag: "Staking",
      title: "Blocknotes Staking",
      img: work5,
      imgSmall: workSmall5,
      bg: "#FFFAE9",
      client: "Blocknotes",
      langages: "HTML SASS React JS",
      link: "https://blocknotes-pink.vercel.app/",
      linkText: "blocknotes.com",
      description:
        "Blocknotes is a tool for innovators who want to harness the power of Web3 in the music industry. Users can trade audio files, such as instrumentals and songs, as NFTs. Customizable profiles allow creators to showcase their talent.",
    },
    // 6
    {
      id: "6",
      tag: "Web Design",
      title: "House of Dragonz",
      img: work6,
      imgSmall: workSmall6,
      bg: "#F4F4FF",
      client: "House of Dragonz",
      langages: "HTML CSS React JS",
      link: "https://house-of-dragonz.vercel.app/",
      linkText: "hosue-of-dragonz.com",
      description: "HOUSE OF DRAGONZ Fight To Ear NFT Marketplace",
    },
    // 7
    {
      id: "7",
      tag: "Staking",
      title: "Rich Ribbit",
      img: work7,
      imgSmall: workSmall7,
      bg: "#FFF0F8",
      client: "Rich Ribbit",
      langages: "HTML SASS React JS",
      link: "https://rich-ribbit.vercel.app/",
      linkText: "rich-ribbit.com",
      description: "Rich Ribbit Staking Website",
    },
    // 8
    {
      id: "8",
      tag: "Web Design",
      title: "SpotLight",
      img: work8,
      imgSmall: workSmall8,
      bg: "#FFF0F8",
      client: "SpotLight",
      langages: "HTML, CSS, Javascript",
      link: "https://catalyst-two.vercel.app/",
      linkText: "spotlight.com",
      description:
        "The Catalyst showcases the exceptional art in the space. We meticulously hand-select only the finest artists across the physical and digital world.",
    },
    // 9
    {
      id: "9",
      tag: "Web Design",
      title: "Blocknotes",
      img: work9,
      imgSmall: workSmall9,
      bg: "#FCF4FF",
      client: "Blocknotes",
      langages: "HTML CSS ReactJs",
      link: "https://blocknotes.vercel.app/",
      linkText: "blocknotes.com",
      description:
        "Blocknotes is a tool for innovators who want to harness the power of Web3 in the music industry. Users can trade audio files, such as instrumentals and songs, as NFTs. Customizable profiles allow creators to showcase their talent.",
    },
    // 10
    {
      id: "10",
      tag: "Marketplace",
      title: "Deflyball",
      img: work10,
      imgSmall: workSmall10,
      bg: "#FCF4FF",
      client: "Deflyball",
      langages: "HTML CSS ReactJs",
      link: "https://defly-ball-marketplace.vercel.app/",
      linkText: "deflyball.com",
      description:
        "Blocknotes is a tool for innovators who want to harness the power of Web3 in the music industry. Users can trade audio files, such as instrumentals and songs, as NFTs. Customizable profiles allow creators to showcase their talent.",
    },
    // 11
    {
      id: "11",
      tag: "Marketplace",
      title: "Lighthouse",
      img: work11,
      imgSmall: workSmall11,
      bg: "#FCF4FF",
      client: "Lighthouse",
      langages: "HTML CSS ReactJs",
      link: "https://lighthouse-eight.vercel.app/",
      linkText: "light-house.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet non diam tincidunt sed pretium aliquam. Lectus necmattis tellus tempus parturient. Sem pretium ipsum vitae.",
    },
    // 12
    {
      id: "12",
      tag: "Staking",
      title: "Lighthouse Staking",
      img: work12,
      imgSmall: workSmall12,
      bg: "#FCF4FF",
      client: "Lighthouse",
      langages: "HTML CSS ReactJs",
      link: "https://lighthouse-staking-five.vercel.app/",
      linkText: "lighthouse-staking.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet non diam tincidunt sed pretium aliquam. Lectus necmattis tellus tempus parturient. Sem pretium ipsum vitae.",
    },
  ];

  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/homeTwo/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/homeTwo/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/homeTwo/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "/homeTwo/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/homeTwo/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "6",
      icon: icon5,
      title: "Web Development",
      des: "I design engaging and functional frontends that bring your website's vision to life with stunning, pixel-perfect designs.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "1",
      icon: icon,
      title: "Ui/Ux Design",
      des: "I convert Figma designs to HTML code, delivering pixel-perfect and responsive websites that enhance user experience.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "Ecommerce Site",
      des: "Build custom ecommerce websites on WordPress that enhance sales and engagement, providing a seamless shopping experience.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    // {
    //   id: "3",
    //   icon: icon2,
    //   title: "Photography",
    //   des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    //   color: "#8774FF",
    //   bg: "#FCF4FF",
    // },
    // {
    //   id: "4",
    //   icon: icon3,
    //   title: "Photography",
    //   des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    //   color: "#FF6080",
    //   bg: "#FFF4F4",
    // },
    // {
    //   id: "5",
    //   icon: icon4,
    //   title: "Managment",
    //   des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    //   color: "#FF75D8",
    //   bg: "#FFF0F8",
    // },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2018-2022",
      title: "BS in Computer Science ",
      place: "UIIT Rawalpindi",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "2016-2018",
      title: "Intermediate in Computer Science",
      place: "JCET Fatehpur, Layyah",
      bg: "#FFF1FB",
    },

    {
      id: 3,
      date: "2014-2016",
      title: "Matriculation",
      place: "City Public School, Fatehpur",
      bg: "#FFF4F4",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "June 2022 - Present",
      title: "Jr. Web Developer",
      place: "Octaloop Technologies",
      bg: "#EEF5FA",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "November 2022",
      title: "Employee of the Month",
      place: "Octaloop Technologies",
      bg: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "HTML5  CSS3",
      number: "80",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Bootstrap, React Bootstrap",
      number: "75",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "SASS",
      number: "70",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "JavaScript React Js",
      number: "55",
    },
    {
      id: "03",
      color: "#ffd003",
      name: "Wordpress",
      number: "70",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+92 302 8760 618",
      // item2: "+452 666 386",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "tehsin118@gmail.com",
      // item2: "example@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Islamabad, Pakistan",
      // item2: "Road, New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
