const projects = [
  {
    id: 1,
    title: 'StarLite',
    category: 'Android',
    description: 'A Java-based Android application demonstrating animations, intents, and SQLite CRUD operations. This project was originally developed as part of an interview task. Although time constraints affected the initial delivery, it is now fully functional and working well',
    image:'/images/starlite.png',
    video: 'https://drive.google.com/file/d/1MtTaJdP9Wjay6JpDKJ11-gCwZDRX4Ddl/view?usp=sharing',
    liveLink: null,
    sourceCodeLink: 'https://github.com/ValaniAnjali/StarLite'
  },
  {
    id: 2,
    title: 'Electronic Shop App (Java+Firebase)',
    category: 'Android',
    description: 'An Android Application with java+Firebase includes crud operations with firebase, signin, signup feature with amazing ui.',
    image:'/images/electronicshopapp.png',
    video: 'https://drive.google.com/file/d/1hAoNt0h75uEE3VwbTV-kTmSeQ3nXeqBW/view?usp=sharing',
    liveLink: null,
    sourceCodeLink: 'https://github.com/ValaniAnjali/ElectronicShopAppFirebase'
  },
  {
    id: 3,
    title: 'AV-Whatsapp-Chat',
    category: 'Android',
    description: 'A simple chat application which gives feature like single chat, tab view, signin with google and stores data in firebase real time database.',
    image:'/images/avwhatsappchat.png',
    video: 'https://www.linkedin.com/posts/anjali-valani-831663257_firebase-mobileappdevelopment-learningjourney-activity-7289308398989287425-gXpy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9HduUBgEiPGBCimpw548QeObfVtHi5-Nc',
    liveLink: null,
    sourceCodeLink: 'https://github.com/ValaniAnjali/AV-Whatsapp-Chat'
  },
  {
    id: 4,
    title: 'AV Furniture Shop',
    category: 'MERN',
    description: 'A feature-rich furniture shopping website built with the MERN stack, designed with separate admin and user interfaces. The admin panel allows for seamless product management, while regular users can browse, view, and explore products with ease. ',
    image: '/images/avfurnitureshop.png',
    video: 'https://www.youtube.com/watch?v=8UHZmJu0cYY',
    liveLink: 'https://avfurnitureshop.netlify.app/',
    sourceCodeLink: 'https://github.com/ValaniAnjali/AVFurnitureShop'
  },
  {
    id: 5,
    title: 'Event Booking App',
    category: 'Flutter',
    description: 'A Flutter application for booking events with Firebase backend with google signin feature and hosted it.',
    image: '/images/eventbookingappflutter.png',
    video: 'https://drive.google.com/file/d/1-zwpqhkjOL_oEzfs_YCgfQUl4d0fi7ry/view',
    liveLink: 'https://eventmanagementsystem-99e2a.web.app/',
    sourceCodeLink: 'https://github.com/ValaniAnjali/EventBookingApp'
  },
  {
    id: 6,
    title: 'Agriculture Information Portal',
    category: 'Group Project',
    description: 'A web portal designed through react providing information on crop advisory, weather forecasting, market prices, and government schemes for farmers.',
    image: '/images/agriculturereact.png', 
    video: 'https://drive.google.com/file/d/1cE-GQJiRgJSxBaPhjpZ3MdqhlFq-1Och/view?usp=sharing', 
    liveLink: 'https://saaagriculture.netlify.app', 
    sourceCodeLink: 'https://github.com/ValaniAnjali/agriculture'
  },
  {
    id: 7,
    title: 'Wayfarer Wanderer',
    category: 'Group Project',
    description: 'A travel website developed through react (only has frontend) for exploring destinations, planning trips around the world.',
    image: '/images/wayfarerwanderer.png', 
    video: 'https://www.youtube.com/watch?v=MNF_L1wvTME',
    liveLink: 'https://wayfarer-wanderer.vercel.app/',
    sourceCodeLink: 'https://github.com/Aradhanadevi/Wayfarer-Wanderer'
  },
  {
    id: 8,
    title: 'EazyQuizy',
    category: 'Group Project',
    description: 'An android application with student and user side. allows admin to create quiz, manage users,add department and analyze performance. student can give quizzes, see result, receive instant result in mail, receive notifications, can see their score in graph, can see profile and feature of identifying student and admin based on login.',
    video:'https://www.youtube.com/shorts/OsgxHsYUB00',
    image: '/images/easyquizy.png',
    liveLink: null, 
    sourceCodeLink: 'https://github.com/Aradhanadevi/EazyQuizy'
  },
  {
    id: 9,
    title: 'Movie Booking DNT',
    category: 'Web',
    description: 'A movie booking web application built with Dot net (c#), which helped to learn more about partial view and layout view & mvc architecture more than this it provides crud feature with sql',
    video: 'https://drive.google.com/file/d/1NZJ2q-O9oAPH154OPxwkdVHRaIuLCGYG/view?usp=sharing', 
    image: '/images/moviebookingappdnt.png', 
    liveLink: null, 
    sourceCodeLink: 'https://github.com/ValaniAnjali/MovieBookingDNT'
  },
  {
    id: 10,
    title: 'Portfolio',
    category: 'Web',
    description: 'A personal portfolio website built with html,css,js to showcase projects, skills, and experience with transition and animation on photo. ',
    video: 'https://www.linkedin.com/posts/anjali-valani-831663257_codsoft-activity-7202232142016221185-E1pF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9HduUBgEiPGBCimpw548QeObfVtHi5-Nc', 
    image: '/images/portfolioweb.png',
    liveLink: 'https://anjalivalani.netlify.app/',
    sourceCodeLink: 'https://github.com/ValaniAnjali/portfolio'
  },
  {
    id: 11,
    title: 'AvGamezone',
    category: 'Web',
    description: 'A gaming e- platform built using the html,css,js  have game like guess the number, snack game, tic tac toe , rock paper scisor games.',
    video: null, 
    image: '/images/avgamezoneweb.png', 
    liveLink: 'https://avgamezone.netlify.app/', 
    sourceCodeLink: 'https://github.com/ValaniAnjali/AvGamezone'
  },
  {
    id: 12,
    title: 'LaptopLoreGallery',
    category: 'Web',
    description: 'A laptop gallery website developed using html,css,js, showcasing various laptop collections. and better&responsive ui this was 3rd sem project',
    video: 'https://youtu.be/7kZ8frcUpEA', 
    image: '/images/laptopweb.png',
    liveLink: 'https://laptoploregallery.netlify.app/', 
    sourceCodeLink: 'https://github.com/ValaniAnjali/LaptopLoreGallery'
  },
  {
    id: 13,
    title: 'Personal Portfolio Website',
    category: 'React',
    description: 'Personal portfolio build using react js and next js and with animation using motion and styling using tailwind css. it shows all details,project,skils etc about me. and coding platform i uses',
    video: null,  
    image: '/images/portfolionextjs.png', 
    liveLink: '#',
    sourceCodeLink: 'https://github.com/ValaniAnjali/PortfolioAnjaliValani'
},
 
  {
    id: 14,
    title: 'Android Task Management App',
    category: 'Android',
    description: 'A Java-based Android application for managing tasks efficiently build with sqlite crud,shared preference and add tasks in listview.',
    video: 'https://drive.google.com/file/d/1OdWxuNAL-ROAbkRU3WRP3Mc3uLRFjX5o/view?usp=sharing',  
    image: 'https://assets.plan.io/images/blog/what-is-task-management.png', 
    liveLink: null, 
    sourceCodeLink: 'https://github.com/ValaniAnjali/AndroidTaskManagementApp'
  },  
  {
    id: 15,
    title: 'Calculator',
    category: 'Web',
    description: 'A simple and efficient calculator developed through html css and javascript this was internship task..',
    video: 'https://www.linkedin.com/posts/anjali-valani-831663257_i-am-excited-to-announce-that-i-have-successfully-activity-7200340323204493313-_ciM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9HduUBgEiPGBCimpw548QeObfVtHi5-Nc', 
    image: '/images/basiccalcweb.png',
    liveLink: 'https://maths-calculatorr.netlify.app/',
    sourceCodeLink: 'https://github.com/ValaniAnjali/Codsoft/tree/main/calculator'
  },  
  {
    id: 16,
    title: 'Tic Tac Toe App',
    category: 'Android',
    description: 'A classic Tic Tac Toe game application developed in Java for Android devices.',
    video: 'https://drive.google.com/file/d/1LIHIR9_-igEdpuyfLvtKBUxqltejKODM/view?usp=sharing', 
    image: '/images/tictactoe.png', 
    liveLink: null,
    sourceCodeLink: 'https://github.com/ValaniAnjali/TicTacToeAppjava'
  },
  {
    id: 17,
    title: 'LaptopLoreGallery',
    category: 'React',
    description: 'A laptop gallery website developed using react js simply by taking reference that i created using html,css,js.',
    video: 'https://youtu.be/wYs5gy8zFxQ', 
    image: '/images/reactlaptoploregallery.png',
    liveLink: 'https://laptopreactweb.netlify.app/', 
    sourceCodeLink: 'https://github.com/ValaniAnjali/reactlaptoploregallery'
  },

  {
    id: 18,
    title: 'Music Player',
    category: 'Android',
    description: 'music player app with previous, next, play music, pause music, skip 5 second, rewind 5 second, animation image change with music functionality.',
    video: 'https://drive.google.com/file/d/1UBjn-VGPLkmkl-enerx0-hcs-vxVNYwG/view?usp=sharing', 
    image:'/images/musicplayer.png',
    liveLink: null,
    sourceCodeLink: 'https://github.com/ValaniAnjali/MusicPlayer'
  },
  {
    id: 19,
    title: 'Quiz App (Android - Java)',
    category: 'Android',
    description: 'An Android quiz application built using Java that fetches questions from frontend only   stores high scores and history using sqlite and shared preference.',
    video: 'https://drive.google.com/file/d/1fJfJLlnFzOyPlmRFh4muPy8C6jdn5mcP/view',
    image: '/images/quizappbasic.png', 
    liveLink: null,
    sourceCodeLink: 'https://github.com/ValaniAnjali/QuizAppAdroid-Java'
  },
  {
    id: 20,
    title: 'React Weather App',
    category: 'React',
    description: 'A weather forecasting app built with React, providing real-time weather data and forecasts based on user entered location.',
    video: null, 
    image: '/images/reactwheather.png', 
    liveLink: 'https://wheatherrr.netlify.app/',
    sourceCodeLink: 'https://github.com/ValaniAnjali/reactwheather'
  },


  
  
  
  
  
  
];


import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Android')

  const categories = ['MERN', 'Android', 'Flutter', 'Web', 'React', 'Group Project']


  // Count how many projects in each category
  const getCategoryCount = (category) =>
    projects.filter((project) => project.category === category).length



  const filteredProjects = selectedCategory === ''
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div id="project" className="w-full px-[5%] py-16 min-h-screen flex flex-col justify-center items-center scroll-mt-20">
      
      {/* Animated Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
       
        className='text-center text-5xl font-Ovo mb-12'
      >
        My Projects
      </motion.h2>

{/* Filter Buttons with counts */}
<div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => {
          const count = getCategoryCount(category)
          return (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
              className={`px-6 py-2 rounded-full text-lg font-medium border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'border-gray-400 text-gray-700 hover:bg-black hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category} ({count})
            </motion.button>
          )
        })}
      </div>

      {/* Project Cards Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {filteredProjects.map(({ id, image, title, description, liveLink, sourceCodeLink, video }, index) => (
          <motion.li
            key={id}
            className="border rounded-2xl bg-white p-5 shadow-sm hover:bg-gray-100 duration-300 flex flex-col cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.06,
              boxShadow: '0px 15px 30px rgba(0,0,0,0.15)',
              transition: { duration: 1.2, delay: 0.1 },
            }}
          >
            <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-xl" /> 
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            
            {/* Links */}
            <div className="mt-auto flex flex-wrap justify-center gap-3">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  Live
                </a>
              )}
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Code
              </a>
              {video && (
                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
                >
                  Watch Demo
                </a>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
