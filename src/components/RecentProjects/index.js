import React from 'react'
import Project from '../Project'
import TourismApp from '../RecentProjects/TourismApp.png'
import PasswordGenerator from '../RecentProjects/PasswordGenerator.png'
import WorkDayScheduler from '../RecentProjects/WorkDayScheduler.png'

function RecentProject() {
    return (
        <div>
            <Project image={TourismApp} name="Tourism Application"
                description="The purpose of this project is to build a web application that allows travellers to search for cities around the world and find useful information so they plan their trips accordingly. For each searched city, the application shows the date, current weather, 5-days weather forecast, local currency of the searched city against Canadian Dollar, popular destination, and google map"
                deployed="https://faisalsnour.github.io/Tourism-App/" repository="https://github.com/faisalsnour/Tourism-App" />
            <Project image={PasswordGenerator} name="Password Generator"
                description="The application generates complex passwords for users between 8 to 128 characters based on four criterias; Uppercase letters, Lowercase letters, Numbers, and Special characters. It verifies and validates user's entry before generating a password, whether the length of password meet the minimum or maximum limit, it also validates that at least one of the four criterias has been selected before processing"
                deployed="https://faisalsnour.github.io/PasswordGenerator/" repository="https://github.com/faisalsnour/PasswordGenerator" />
            <Project image={WorkDayScheduler} name="Work Day Scheduler"
                description="The idea of this project is to build a simple event scheduler for users where they can enter events during their working hours which is typically between 9:00 AM to 5:00 PM. Users events are saved in local storages so even when users close the application, they will find their information once they come back"
                deployed="https://faisalsnour.github.io/WorkDayScheduler/" repository="https://github.com/faisalsnour/WorkDayScheduler" />
        </div>
    )
}

export default RecentProject