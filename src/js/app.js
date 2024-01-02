import { createApp } from 'vue'
import Nav from '../components/Nav.js'
import Hero from '../components/Hero.js'
import Promotion from '../components/Promotion.js'
import About from '../components/About.js'
import Gallery from '../components/Gallery.js'
import Services from '../components/Services.js'
import Location from '../components/Location.js'
import Testimonials from '../components/Testimonials.js'
import Social from '../components/Social.js'
import Contact from '../components/Contact.js'
import Footer from '../components/Footer.js'
import BackToTop from '../components/BackToTop.js'

createApp(Nav).mount('#nav')
createApp(Hero).mount('#hero')
createApp(Promotion).mount('#promotion')
createApp(About).mount('#about')
createApp(Gallery).mount('#gal')
createApp(Services).mount('#services')
createApp(Location).mount('#location')
createApp(Testimonials).mount('#testimonials')
createApp(Social).mount('#social')
createApp(Contact).mount('#contact')
createApp(Footer).mount('#footer')
createApp(BackToTop).mount('#backtotop')

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

// Back To Top Button
var button = document.getElementById("back-to-top-btn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.classList.remove("hidden")
    } else {
        button.classList.add("hidden")
    }
}

// When the user clicks on the button, scroll to the top of the document
button.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// Router
const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
]

function router() {
    // Get the current URL
    const currentUrl = window.location.pathname

    // Find the associated route object based on the URL
    const route = routes.find(route => route.path === currentUrl)

    // Load the component associated with the route
    const component = route ? route.component : NotFound

    // Render the component to the DOM
    new Vue({
        el: '#app',
        render: h => h(component),
    })
}

// Call the router on page load
window.addEventListener('load', router);

// Call the router whenever the URL changes
window.addEventListener('popstate', router);
