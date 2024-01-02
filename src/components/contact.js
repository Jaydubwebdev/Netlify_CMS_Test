export default {
    template: `<div class="py-8 bg-white z-0" id="contact">
        <div class="container px-4 mx-auto">
            <h2 class="mb-8 text-3xl font-semibold text-center text-gray-800">Get in Touch</h2>
            <form class="max-w-lg mx-auto" netlify>
                <input type="hidden" name="form-name" value="contact">
                <div class="mb-6">
                    <label for="name" class="block mb-2 font-semibold text-gray-800">Name</label>
                    <input type="text" id="name" name="name"
                        class="w-full px-4 py-3 border-2 border-gray-200 focus:border-gray-700  focus:outline-none"
                        required>
                </div>
                <div class="mb-6">
                    <label for="phone" class="block mb-2 font-semibold text-gray-800">Phone</label>
                    <input type="text" id="phone" name="phone"
                        class="w-full px-4 py-3 border-2 border-gray-200 focus:border-gray-700  focus:outline-none"
                        required>
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 font-semibold text-gray-800">Email</label>
                    <input type="email" id="email" name="email"
                        class="w-full px-4 py-3 border-2 border-gray-200 focus:border-gray-700  focus:outline-none"
                        required>
                </div>
                <div class="mb-6">
                    <label for="how-heard" class="block mb-2 font-semibold text-gray-800">How did you hear about us?</label>
                    <select id="how-heard" name="how-heard"
                        class="w-full px-4 py-3 border-2 border-gray-200 focus:border-gray-700  focus:outline-none"
                        required>
                        <option value="" disabled selected>Select an option</option>
                        <option value="social-media">Social Media</option>
                        <option value="search-engine">Search Engine</option>
                        <option value="listing">Service Listing</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label for="message" class="block mb-2 font-semibold text-gray-800">Message</label>
                    <textarea id="message" name="message" rows="5"
                        class="w-full px-4 py-3 border-2 border-gray-200 focus:border-gray-700 focus:outline-none"
                        required></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="w-full px-6 py-3 text-white transition-colors duration-100 bg-gray-700  hover:bg-white hover:text-gray-800 focus:outline-none">Send
                        Message</button>
                </div>
            </form>
        </div>
    </div>`
}