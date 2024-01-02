export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
      isLoggedIn: false // add a new property to track login status
    };
  },
  created() {
    // check if user is already logged in
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    async login() {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        console.log("User logged in:", firebase.auth().currentUser);
        this.isLoggedIn = true; // set login status to true
        window.location.href = "/dashboard.html";
      } catch (error) {
        this.errorMessage = error.message;
        console.error("Error logging in:", error.message);
      }
    },
    logout() {
      firebase.auth().signOut();
      this.isLoggedIn = false; // set login status to false
    },
  },
  template: `
    <div class="flex items-center justify-center h-screen bg-gray-100" style="height:100vh;">
      <div class="px-8 py-12 bg-white shadow-lg" style="min-width:350px;" v-if="!isLoggedIn">
        <h2 class="mb-4 text-2xl font-bold text-center">Log In</h2>
        <form @submit.prevent="login">
          <div class="mb-2">
            <label for="email" class="block mb-1 font-semibold text-gray-700">Email</label>
            <input v-model="email" type="email" id="email" name="email" required
                   class="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-400"
                   placeholder="Enter your email">
          </div>
          <div class="mb-2">
            <label for="password" class="block mb-1 font-semibold text-gray-700">Password</label>
            <input v-model="password" type="password" id="password" name="password" required
                   class="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-400"
                   placeholder="Enter your password">
          </div>
          <button type="submit" class="w-full py-2 mt-6 text-white bg-gray-700 hover:bg-white hover:text-gray-700">
            Log In
          </button>
        </form>
      </div>
    </div>
  `,
};
