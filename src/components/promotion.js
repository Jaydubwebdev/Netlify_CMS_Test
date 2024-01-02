export default {
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      document.body.style.overflow = 'hidden';
    },
    hideModal() {
      this.modalVisible = false;
      document.body.style.overflow = '';
    }
  },
  template: `
        <div class="relative bg-gray-500 text-white z-0">
          <div class="container flex flex-col items-center justify-center px-4 py-4 mx-auto sm:px-6 lg:px-8 md:flex-row text-center">
            <p class="mr-2 text-lg font-bold text-white md:text-xl lg:text-2xl md:mr-4">Limited Time Offer: 10% off Kitchen Remodels + Free Vanity!</p>
            <button @click="showModal = true" class="px-4 py-2 mt-4 md:mt-0 md:ml-4 font-bold text-gray-500 transition-colors duration-100 bg-white hover:bg-gray-500 hover:text-white">Learn More</button>
          </div>
          <div class="fixed inset-0 flex text-center items-center justify-center bg-black bg-opacity-70" v-if="showModal" @click.self="showModal = false">
            <div class="bg-gray-800 border border-gray-600 w-4/5 md:w-1/2 lg:w-2/5 p-6">
              <div class="flex justify-end">
                <button class="text-gray-500 hover:text-gray-700" @click="showModal = false">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h3 class="text-2xl font-bold text-gray-100 mb-4">Limited Time Offer Details</h3>
              <p class="text-gray-100 mb-4">
                We're offering a 10% discount on all kitchen remodels for a limited time, and as an added bonus, you'll also receive a free vanity with your remodel! This offer is only valid on new kitchen remodels and does not include any other services or products we offer. To take advantage of this offer, contact us today and schedule a consultation.
              </p>
              <button @click="showModal = false" class="px-4 py-2 font-bold text-gray-600 transition-colors duration-100 bg-gray-100 hover:bg-gray-800 hover:text-gray-100">Close</button>
            </div>
          </div>
        </div>

  `
}