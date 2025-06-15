import React from 'react';

const Blog = () => {
  const blogData = {
    title: 'Blog',
    icon: '/assets/star.svg',
    viewAllText: 'View All',
    posts: [
      {
        title: 'How UX works in web',
        date: 'Nov 9, 2023',
        tags: ['UI', 'UX'],
        image: '/assets/image-1.svg',
      },
      {
        title: 'Case study - Analysis Application.',
        date: 'Aug 18, 2023',
        tags: ['DESIGN', 'PRINT'],
        image: '/assets/image-2.svg',
      },
      {
        title: '3 ways to develop your skill',
        date: 'Feb 16, 2023',
        tags: ['FIGMA', 'WEB'],
        image: '/assets/image-3.svg',
      },
    ],
  };

  return (
    <div className="blogContainer py-16 px-6 sm:px-10 lg:px-[10%] flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="syne-text text-3xl sm:text-4xl font-semibold flex items-center gap-2">
          <img
            alt="icon"
            src={blogData.icon}
            loading="lazy"
            width="32"
            height="32"
          />
          {blogData.title}
        </h2>
        <div className="underline underline-offset-4 cursor-pointer text-white text-sm sm:text-base">
          {blogData.viewAllText}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="flex flex-col gap-10">
        {blogData.posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center"
          >
            {/* Image */}
            <div className="imgContainer overflow-hidden rounded-2xl w-full md:w-[285px] h-[215px] shrink-0">
              <img
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover"
                src={post.image}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6">
              <div className="flex flex-col gap-2 text-white">
                <h4 className="text-[#CBCBCB] text-sm">{post.date}</h4>
                <h3 className="syne-text text-xl sm:text-2xl md:text-3xl font-semibold">
                  {post.title}
                </h3>
                <div className="flex gap-2 flex-wrap mt-2">
                  {post.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="syne-text py-1.5 px-5 rounded-full border border-white text-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Read Button */}
              <div className="syne-text bg-white text-[#010208] py-3 px-6 rounded-full text-sm font-semibold cursor-pointer hover:bg-gray-100 transition">
                Read
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
