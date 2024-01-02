export default {
    template: `<div class="py-12 z-0">
        <div class="container mx-auto">
            <h2 class="mb-4 text-3xl font-bold text-center">Location &amp; Hours</h2>
            <div class="flex flex-col items-center justify-center mb-12 lg:flex-row">
                <div class="w-full mb-6 lg:w-1/2 xl:w-1/2 lg:mb-0">
                    <iframe class="w-full h-64 lg:h-96"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.140982347684!2d-97.76442948498254!3d30.29776648179086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59682e3e23d%3A0x98a68c1e82d14d12!2s6630%20Topper%20Run%20%237%2C%20San%20Antonio%2C%20TX%2078219%2C%20United%20States!5e0!3m2!1sen!2sus!4v1647290205059!5m2!1sen!2sus"
                        width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""
                        loading="lazy"></iframe>
                </div>
                <div class="w-full lg:w-1/2 xl:w-1/2 lg:ml-6">
                    <div class="flex flex-col lg:flex-row">
                        <div class="w-full pr-2 mb-4 text-center lg:w-1/2 lg:mb-0">
                            <h3 class="mb-2 text-xl font-bold">Store Hours</h3>
                            <ul class="list-none text-lg">
                                <li><i class="far fa-clock mr-2"></i> Monday: 8:00am-5:00pm</li>
                                <li><i class="far fa-clock mr-2"></i> Tuesday: 8:00am-5:00pm</li>
                                <li><i class="far fa-clock mr-2"></i> Wednesday: 8:00am-5:00pm</li>
                                <li><i class="far fa-clock mr-2"></i> Thursday: 8:00am-5:00pm</li>
                                <li><i class="far fa-clock mr-2"></i> Friday: 8:00am-5:00pm</li>
                                <li><i class="fas fa-battery-empty mr-2"></i> Saturday: Closed</li>
                                <li><i class="fas fa-battery-empty mr-2"></i> Sunday: Closed</li>
                            </ul>
                        </div>
                        <div class="w-full pl-2 text-center lg:w-1/2">
                            <h3 class="mb-2 text-xl font-bold">Contact Us</h3>
                            <ul class="list-none text-lg">
                                <li><i class="fas fa-map-marker-alt mr-2"></i> 6630 Topper Run Ste. 7<br>San Antonio, TX 78219</li>
                                <li><i class="fas fa-phone-alt mr-2"></i> +1 (210) 507-2214</li>
                                <li><i class="far fa-envelope mr-2"></i> FinestStoneCustomGranite@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}