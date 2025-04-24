

const WhyUs = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-8 text-blue-700">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-medium mb-4 text-blue-600">Expert Teachers</h3>
                        <p className="text-gray-600">Learn from certified and experienced English instructors.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-medium mb-4 text-blue-600">Flexible Learning Options</h3>
                        <p className="text-gray-600">Study online or in-person at your convenience.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-medium mb-4 text-blue-600">Interactive Lessons</h3>
                        <p className="text-gray-600">Engage in fun and interactive activities that make learning enjoyable.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
