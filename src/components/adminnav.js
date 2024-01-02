export default {
    data() {
        return {
            isLoggedIn: false
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
        logout() {
            firebase.auth().signOut();
        }
    },
    template: `<div class="bg-gray-800 h-screen text-gray-100 w-48 fixed left-0 top-0 z-10" v-if="isLoggedIn">
    <div class="px-4 py-2">
      <h2 class="text-lg font-medium">Dashboard</h2>
    </div>
    <ul class="mt-6">
      <li>
        <span class="block hover:bg-gray-700 px-4 py-2 rounded">Dashboard</span>
      </li>
      <li>
        <span class="block hover:bg-gray-700 px-4 py-2 rounded">Settings</span>
      </li>
      <li>
        <button class="block hover:bg-gray-700 px-4 py-2 rounded w-full text-left" @click="logout">
          Logout
        </button>
      </li>
    </ul>
  </div>`
}