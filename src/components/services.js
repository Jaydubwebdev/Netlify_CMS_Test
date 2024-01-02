export default {
    data() {
        return {
            isFlipped: false,
        };
    },
    methods: {
        flipCard() {
            this.isFlipped = !this.isFlipped;
        },
    },
    template: `
        <div class="py-12 bg-gray-100 z-0" id="services">
            <div class="container px-4 mx-auto">
                <h2 class="mb-8 text-3xl font-bold text-center text-gray-800">Our Services</h2>
                <div class="mb-8 bg-gray-800 p-8 shadow-lg text-center grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                        <h3 class="mb-2 text-2xl font-bold text-white"><i class="fas fa-toolbox"></i> Granite Fabrication</h3>
                        <p class="text-base text-white">Our experienced team of craftsmen can fabricate any custom granite countertop, island, or vanity to your exact specifications. We use only the highest quality materials and state-of-the-art tools and techniques to ensure a flawless finish.</p>
                    </div>
                    <div>
                        <h3 class="mb-2 text-2xl font-bold text-white"><i class="fas fa-hammer"></i> Granite Installation</h3>
                        <p class="text-base text-white">Our expert installers have years of experience and can install your custom granite countertops, islands, and vanities quickly and efficiently. We use only the highest quality adhesives and sealants to ensure a strong and long-lasting bond.</p>
                    </div>
                    <div>
                        <h3 class="mb-2 text-2xl font-bold text-white"><i class="fas fa-wrench"></i> Granite Repair</h3>
                        <p class="text-base text-white">If your granite countertop, island, or vanity is chipped, cracked, or otherwise damaged, don't worry! Our skilled technicians can repair it to look like new again. We use color-matched epoxy and finishing techniques to make the repair virtually invisible.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-8">
                    <div class="bg-white border border-gray-600 text-center p-6">
                        <i class="fas fa-toolbox fa-4x mb-4 text-gray-800"></i>
                        <h3 class="mb-2 text-xl font-bold text-gray-800">Cabinet Installation</h3>
                        <p class="text-base text-gray-700">We specialize in cabinet installation for kitchens and bathrooms, with a wide range of styles and finishes to choose from. Our expert team can help you choose the perfect cabinets and install them quickly and efficiently.</p>
                    </div>
                    <div class="bg-white border border-gray-600 text-center p-6">
                        <i class="fas fa-border-all fa-4x mb-4 text-gray-800"></i>
                        <h3 class="mb-2 text-xl font-bold text-gray-800">Tile Installation</h3>
                        <p class="text-base text-gray-700">We offer high-quality tile installation services for kitchens, bathrooms, and other areas of your home or business. Our skilled technicians can install a variety of tiles, including ceramic, porcelain, and natural stone.</p>
                    </div>
                    <div class="bg-white border border-gray-600 text-center p-6">
                        <i class="fas fa-layer-group fa-4x mb-4 text-gray-800"></i>
                        <h3 class="mb-2 text-xl font-bold text-gray-800">Flooring Refinishing</h3>
                        <p class="text-base text-gray-700">We can help bring new life to your old hardwood floors with our refinishing services. Our experienced team can sand, stain, and finish your floors to restore their original beauty and shine.</p>
                    </div>
                    <div class="bg-white border border-gray-600 text-center p-6">
                        <i class="fas fa-paint-roller fa-4x mb-4 text-gray-800"></i>
                        <h3 class="mb-2 text-xl font-bold text-gray-800">Painting Services</h3>
                        <p class="text-base text-gray-700">We offer professional painting services for your home or business, including interior and exterior painting. Our team of experts can help you choose the perfect colors and finishes to give your space a fresh new look.</p>
                    </div>
                    <div class="bg-white border border-gray-600 text-center p-6">
                        <i class="fas fa-tools fa-4x mb-4 text-gray-800"></i>
                        <h3 class="mb-2 text-xl font-bold text-gray-800">Handyman Services</h3>
                        <p class="text-base text-gray-700">We offer professional painting services for your home or business, including interior and exterior painting. Our team of experts can help you choose the perfect colors and finishes to give your space a fresh new look.</p>
                    </div>
                    <div class="bg-white border border-gray-600 text-center p-6">
                        <i class="fas fa-faucet fa-4x mb-4 text-gray-800"></i>
                        <h3 class="mb-2 text-xl font-bold text-gray-800">Plumbing Services</h3>
                        <p class="text-base text-gray-700">We offer a wide range of plumbing services for your home or business, including repairs, installations, and maintenance. Our licensed plumbers can handle any job, big or small.</p>
                    </div>
                </div>

                <div class="bg-gray-900 border-2 border-gray-800 overflow-hidden shadow-lg grid lg:grid-cols-2">
                    <div class="flex flex-wrap justify-center md:text-center lg:h-full">
                        <div class="flex items-center justify-center w-full lg:w-1/2 h-40 ">
                            <i class="fas fa-bath fa-5x text-white"></i>
                        </div>
                        <div class="flex flex-col justify-center w-full lg:w-full px-6 py-4">
                            <h3 class="mb-2 text-xl font-bold text-white">Bathroom Remodeling</h3>
                            <p class="text-base text-white mb-4">We offer comprehensive bathroom remodeling services, from design to installation. Our team can help you create the perfect bathroom for your home or business, including custom vanities, showers, and tubs.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center md:text-center lg:h-full">
                        <div class="flex items-center justify-center w-full lg:w-1/2 h-40">
                            <i class="fas fa-blender fa-5x text-white"></i>
                        </div>
                        <div class="flex flex-col justify-center w-full lg:w-full px-6 py-4">
                            <h3 class="mb-2 text-xl font-bold text-white">Kitchen Remodeling</h3>
                            <p class="text-base text-white mb-4">We specialize in kitchen remodeling, from minor upgrades to complete overhauls. Our team can help you design the kitchen of your dreams, with custom cabinets, countertops, and more. We work closely with you throughout the process to ensure that your new kitchen is functional, beautiful, and perfect for your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}