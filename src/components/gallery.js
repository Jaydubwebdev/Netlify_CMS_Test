export default {
    data() {
        return {
            imagesPerPage: 4,
            totalImages: 18,
            currentPage: 1,
            images: [],
        };
    },
    computed: {
        displayedImages() {
            const start = (this.currentPage - 1) * this.imagesPerPage;
            const end = start + this.imagesPerPage;
            return this.images.slice(start, end);
        },
        pageCount() {
            return Math.ceil(this.totalImages / this.imagesPerPage);
        },
        pages() {
            return Math.ceil(this.images.length / this.imagesPerPage);
        },
    },
    methods: {
        setCurrentPage(page) {
            this.currentPage = page;
        },
        loadImages() {
            const db = firebase.firestore();
            const imagesRef = db.collection('images');

            imagesRef.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const url = doc.data().imageURL;
                    this.images.push({ url });
                });
            });
        },
    },
    created() {
        this.loadImages();
    },
    template: `
    <div class="py-12 bg-white z-0" id="gallery">
      <div class="container px-4 mx-auto">
        <h2 class="mb-4 text-3xl font-bold">Gallery</h2>
        <div class="grid justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" id="gallery">
          <div v-for="(image, index) in displayedImages" :key="index">
            <img :src="image.url" :alt="'Image ' + (index + 1)"
              class="mx-auto mb-4 shadow-md w-full" />
          </div>
        </div>


<div class="flex justify-center mt-8" id="pagination">
    <button @click="currentPage > 1 ? setCurrentPage(currentPage - 1) : null"
        class="mx-2 px-3 py-1 hover:bg-gray-400 hover:text-white focus:outline-none">
        <i class="fas fa-chevron-left"></i>
    </button>

<button v-for="page in pageCount" :key="page" @click="setCurrentPage(page)"
    :class="{ 'bg-gray-400': page === currentPage }"
    class="mx-2 px-3 py-1 hover:bg-gray-400 hover:text-white focus:outline-none">
    {{ page }}
</button>

<button @click="currentPage < pageCount ? setCurrentPage(currentPage + 1) : null"
    class="mx-2 px-3 py-1 hover:bg-gray-400 hover:text-white focus:outline-none">
    <i class="fas fa-chevron-right"></i>
</button>
</div>


      </div>
    </div>
  `,
};