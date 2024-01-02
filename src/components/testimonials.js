export default {
    data() {
        return {
            testimonials: [],
            currentIndex: 0,
        };
    },
    computed: {
        currentTestimonial() {
            return this.testimonials[this.currentIndex];
        },
    },
    methods: {
        goToNextTestimonial() {
            this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        },
        goToPrevTestimonial() {
            this.currentIndex =
                (this.currentIndex + this.testimonials.length - 1) %
                this.testimonials.length;
        },
    },
    created() {
        const db = firebase.firestore();
        const testimonialsRef = db.collection("testimonials");

        testimonialsRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const testimonial = doc.data();
                this.testimonials.push({
                    title: testimonial.title,
                    text: testimonial.message,
                    author: testimonial.reviewer,
                });
            });
        });
    },
    template: `<div class="py-8 bg-gray-100 z-0">
    <div class="container mx-auto">
      <h2 class="mb-8 text-3xl font-bold text-center">What Our Customers Say</h2>
      <div class="testimonial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-slide bg-white shadow-md flex-none flex-grow-0 flex-shrink-0"
        >
          <div class="p-6">
            <p class="mb-4 text-lg font-bold">{{ testimonial.title }}</p>
            <p class="mb-4 text-gray-700">{{ testimonial.text }}</p>
            <p class="text-gray-600">{{ testimonial.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`
};
