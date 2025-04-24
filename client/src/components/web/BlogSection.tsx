import React from 'react';

const BlogSection: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Mastering English Tenses: A Beginner's Guide",
            author: 'Sarah Johnson',
            date: 'October 15, 2023',
            excerpt: 'Learn the basics of English grammar with our comprehensive guide to verb tenses...',
            image: '/blog/default.jpeg',
            slug: '/blog/grammar',
        },
        {
            id: 2,
            title: '5 Tips for Effective English Pronunciation',
            author: 'Michael Thompson',
            date: 'November 2, 2023',
            excerpt: 'Improve your speaking skills with these practical pronunciation techniques...',
            image: '/blog/five.jpeg',
            slug: '/blog/pronunciation',
        },
        {
            id: 3,
            title: 'The Best Ways to Expand Your Vocabulary',
            author: 'Emily Davis',
            date: 'November 10, 2023',
            excerpt: 'Discover proven strategies to learn new words and improve your fluency...',
            image: '/blog/best.jpeg',
            slug: '/blog/vocabulary',
        },
        {
            id: 4,
            title: 'How to Pass IELTS Writing Section',
            author: 'James Wilson',
            date: 'November 18, 2023',
            excerpt: 'Expert tips for achieving high scores in the IELTS writing module...',
            image: '/testmony/Corporet.jpeg',
            slug: '/blog/ielts',
        },
    ];

    return (
        <div className="py-20 bg-gray-50" id='blog'>
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <h2 className="text-center mb-12 text-4xl md:text-5xl font-extrabold text-orange-600">
                    Latest From Our Blog
                </h2>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                        >
                            <a href={post.slug} aria-label={`Read more about ${post.title}`}>
                                <div className="flex p-4">
                                    {/* Image */}
                                    <div className="w-24 h-24 flex-shrink-0 mr-4">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                                        <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                                        <div className="mt-4 flex items-center text-xs text-gray-500">
                                            <span>{post.author}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="flex justify-center mt-12">
                    <button
                        className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300"
                    >
                        View All Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;