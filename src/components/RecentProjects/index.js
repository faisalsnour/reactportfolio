import React from 'react'
import Project from '../Project'
import TourismApp from '../RecentProjects/TourismApp.png'
import PasswordGenerator from '../RecentProjects/PasswordGenerator.png'
import WorkDayScheduler from '../RecentProjects/WorkDayScheduler.png'
import BurgerLogger from '../RecentProjects/BurgerLogger.png'
import LMS from '../RecentProjects/LMS.png'
import GoldieMohrLtd from '../RecentProjects/GoldieMohrLtd.png'
import './style.css'
// import Foooter from '../Foooter'

function RecentProject() {
    return (
        <div id="recentProjects">
            <Project image={GoldieMohrLtd} name="Goldie Mohr Ltd"
                description="The purpose of this project is to create a new and highly improved website for the company Goldie Mohr Ltd. The website contains home, services & projects, products, about us, careers and contact us pages. It also provide a login features and access to additional pages for registered employees"
                deployed="https://goldie-mohr-full.herokuapp.com/" repository="https://github.com/GoldieMohrProject/goldie-mohr" />
            <Project image={TourismApp} name="Tourism Application"
                description="The purpose of this project is to build a web application that allows travellers to search for cities around the world and find useful information so they plan their trips accordingly. For each searched city, the application shows the date, current weather, 5-days weather forecast, local currency of the searched city against Canadian Dollar, popular destination, and google map"
                deployed="https://faisalsnour.github.io/Tourism-App/" repository="https://github.com/faisalsnour/Tourism-App" />
            <Project image={PasswordGenerator} name="Password Generator"
                description="The application generates complex passwords for users between 8 to 128 characters based on four criterias; Uppercase letters, Lowercase letters, Numbers, and Special characters. It verifies and validates user's entry before generating a password, whether the length of password meet the minimum or maximum limit, it also validates that at least one of the four criterias has been selected before processing"
                deployed="https://faisalsnour.github.io/PasswordGenerator/" repository="https://github.com/faisalsnour/PasswordGenerator" />
            <Project image={WorkDayScheduler} name="Work Day Scheduler"
                description="The idea of this project is to build a simple event scheduler for users where they can enter events during their working hours which is typically between 9:00 AM to 5:00 PM. Users events are saved in local storages so even when users close the application, they will find their information once they come back"
                deployed="https://faisalsnour.github.io/WorkDayScheduler/" repository="https://github.com/faisalsnour/WorkDayScheduler" />
            <Project image={BurgerLogger} name="Burger Logger"
                description="To create a burger logger using MySQL, Node, Express, Handlebars, ORM and Heroku to deploye the application. The application allows users to enter burger names into the database, validates user's entry to ensure a burger name is entered and displays the entered burger on the left side of the page, waiting to be devoured. Once the user clicks the devour button, the burger will move to the right side of the page"
                deployed="https://faisal-burgerlog.herokuapp.com/" repository="https://github.com/faisalsnour/BurgerLogger" />
            <Project image={LMS} name="Library Management System"
                description="To build a management system that helps in handling the primary functions of libraries like maintaining the database for entering new books, tracking books that have been borrowed by members and storing members data in secure database"
                deployed="https://library-management-system-lms.herokuapp.com/" repository="https://github.com/faisalsnour/library-management-system" />
            {/* <Foooter /> */}
        </div>

    )
}

export default RecentProject