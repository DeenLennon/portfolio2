import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./portfolio.css"
import {motion, useInView, useScroll, useTransform} from "motion/react";

const items = [
  {
    id: "1",
    img: "/landingpage.jpg",
    title: "Web development tutorial website",
    desc: "An astute web developer",
    link: "/",
  },
  {
    id: "2",
    img: "/socialmediaapp.jpg",
    title: "A student base social media application",
    desc: "An astute web developer",
    link: "/",
  },
  {
    id: "3",
    img: "/newsblog.jpg",
    title: "A real time news blog application",
    desc: "An astute web developer",
    link: "/",
  },
  {
    id: "4",
    img: "/cssanimation.jpg",
    title: "Web animation full course",
    desc: "An astute web developer",
    link: "/",
  },
  {
    id: "5",
    img: "/Ecommerce.jpg",
    title: "E-commerce website for electrical solutions",
    desc: "An astute web developer",
    link: "/",
  },
]

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    }
  }
}

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    }
  }
}

const ListItem = ({item}) => {

  const ref = useRef(null)
  const isInView = useInView(ref, {margin: "-100px"});

  return(
    <div className="portfolio-item" ref={ref}>
      <motion.div variants={imgVariants} animate={isInView ? "animate" : "initial"} className="pImg">
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div variants={textVariants} animate={isInView ? "animate" : "initial"} className="pText">
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View</button>
        </motion.a>
      </motion.div>
    </div>
  )
}

const Portfolio = () => {

  const [containerDistance, setContainerDistance] = useState(0)

  const ref = useRef(null)

  useEffect(() => {
    if(ref.current){
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left)
    }
  }, [])

  const {scrollYProgress} = useScroll({target:ref})
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * items.length])

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="portfolio-list" style={{x: xTranslate}}>
        <div className="empty" style={{width:window.innerWidth - containerDistance }}/>
        {items.map(item => (
          <ListItem item={item} key={item.id}/>
        ))}
      </motion.div>
      <section/>
      <section/>
      <section/>
      <section/>
      <section/>
      <div className="progress-bar">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="70" fill="none" stroke="#ddd" strokeWidth={20}/>
          <motion.circle cx="80" cy="80" r="70" fill="none" stroke="#e44a0dff" strokeWidth={20} style={{pathLength: scrollYProgress}} transform="rotate(-90 80 80)"/>
        </svg>
      </div>
    </div>
  )
}

export default Portfolio