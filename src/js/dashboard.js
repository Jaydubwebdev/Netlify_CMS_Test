import { createApp } from 'vue'
import SideNav from '../components/AdminNav.js'
import LoginForm from '../components/LoginForm.js'

createApp(SideNav).mount('#sidenav')
createApp(LoginForm).mount('#loginform')

// Smooth Scroll
const links = document.querySelectorAll('a[href^="#"]')

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault()
        const targetId = this.getAttribute('href')
        const targetPosition = document.querySelector(targetId).offsetTop - 50
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        })
    })
})