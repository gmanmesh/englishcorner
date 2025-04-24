

const SpotLight = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-8 text-blue-700">Community Spotlight</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-medium mb-4 text-blue-600">Testimonial</h3>
                        <p className="text-gray-600">"I’ve improved my English so much in just a few months!" – Sarah T.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-medium mb-4 text-blue-600">Student Activities</h3>
                        <img
                            src="https://via.placeholder.com/400x200"
                            alt="Students"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpotLight