export default {
    methods: {
        toggleMenu() {
            const menuToggle = document.getElementById('menu-toggle')
            const menu = document.getElementById('menu')
            const hamburgerOpen = document.getElementById('hamburger-open')
            const hamburgerClose = document.getElementById('hamburger-close')

            menuToggle.addEventListener('click', function () {
                menu.classList.toggle('hidden')
                hamburgerOpen.classList.toggle('hidden')
                hamburgerClose.classList.toggle('hidden')
            })
        }
    },
    template: `<nav class="fixed w-full py-4 bg-gray-900 z-20">
        <div class="container px-4 mx-auto">
            <div class="flex items-center justify-between">
                <div class="text-xl font-bold text-white">Finest Stone | Custom Granite</div>
                <div class="flex items-center " @click="toggleMenu">
                    <input type="checkbox" id="menu-toggle" class="hidden" />
                    <ul class="hidden text-white md:flex" id="menu">
                        <li class="mr-6">
                            <a href="#about" class="hover:text-gray-400">About</a>
                        </li>
                        <li class="mr-6">
                            <a href="#gal" class="hover:text-gray-400">Gallery</a>
                        </li>
                        <li class="mr-6">
                            <a href="#services" class="hover:text-gray-400">Services</a>
                        </li>
                        <li class="mr-6">
                            <a href="#location" class="hover:text-gray-400">Location</a>
                        </li>
                        <li class="mr-6">
                            <a href="#contact" class="hover:text-gray-400">Contact</a>
                        </li>
                    </ul>
                    <label for="menu-toggle" class="cursor-pointer md:hidden" id="hamburger">
                        <svg class="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            id="hamburger-open">
                            <path fill-rule="evenodd"
                                d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" />
                        </svg>
                        <svg class="hidden w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" id="hamburger-close">
                            <path fill-rule="evenodd"
                                d="M2.71 3.293a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 0L10 8.586l4.586-4.586a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414L12.414 10l4.293 4.293a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414 0L10 11.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 0-1.414L7.586 10 3.293 5.707a1 1 0 0 1 0-1.414z" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    </nav>`
}