
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { Clock, User, Tag, Search, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Sample blog posts
  const blogPosts = [
    {
      id: "social-media-trends-2023",
      title: "Top 7 Social Media Trends to Watch in 2023",
      excerpt: "Stay ahead of the curve with these emerging social media trends that will dominate marketing strategies in 2023.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3",
      author: "David Rodriguez",
      date: "April 15, 2023",
      readTime: "8 min read",
      category: "social-media"
    },
    {
      id: "seo-techniques",
      title: "Advanced SEO Techniques That Actually Work in 2023",
      excerpt: "Discover powerful, white-hat SEO strategies that will help your website climb the ranks in today's competitive search landscape.",
      image: "https://images.unsplash.com/photo-1571437599137-55442acede5c?ixlib=rb-4.0.3",
      author: "Amara Johnson",
      date: "March 28, 2023",
      readTime: "10 min read",
      category: "seo"
    },
    {
      id: "google-ads-optimization",
      title: "5 Google Ads Optimization Tips to Lower Your CPA",
      excerpt: "Learn how to optimize your Google Ads campaigns to reduce cost per acquisition and maximize your advertising ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      author: "Marcus Chen",
      date: "March 10, 2023",
      readTime: "7 min read",
      category: "ppc"
    },
    {
      id: "email-marketing-guide",
      title: "The Ultimate Guide to Email Marketing Automation",
      excerpt: "Set up powerful email marketing automation workflows that nurture leads and drive conversions with minimal ongoing effort.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3",
      author: "Sofia Patel",
      date: "February 22, 2023",
      readTime: "12 min read",
      category: "email"
    },
    {
      id: "content-marketing-roi",
      title: "How to Measure and Prove Content Marketing ROI",
      excerpt: "Learn practical methods for tracking and demonstrating the return on investment from your content marketing efforts.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3",
      author: "David Rodriguez",
      date: "February 15, 2023",
      readTime: "9 min read",
      category: "content"
    },
    {
      id: "website-conversion-tips",
      title: "10 Website Changes That Will Boost Your Conversion Rate",
      excerpt: "Implement these proven design and UX tweaks to transform your website into a conversion-generating machine.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      author: "Sofia Patel",
      date: "January 30, 2023",
      readTime: "11 min read",
      category: "web-design"
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Posts" },
    { id: "social-media", name: "Social Media" },
    { id: "seo", name: "SEO" },
    { id: "ppc", name: "PPC" },
    { id: "content", name: "Content" },
    { id: "web-design", name: "Web Design" },
    { id: "email", name: "Email Marketing" }
  ];

  // Filter and search posts
  const filteredPosts = blogPosts.filter(post => {
    // Apply category filter
    const categoryMatch = selectedCategory === "all" || post.category === selectedCategory;
    
    // Apply search filter (if query exists)
    const searchMatch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Digital Marketing Insights & Resources"
        subtitle="Stay updated with the latest trends, tips, and strategies in digital marketing to help your business grow online."
        ctaText="Explore Articles"
        ctaLink="#blog-posts"
      />
      
      {/* Search and Filter Section */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent outline-none"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-nowrap overflow-x-auto pb-2 gap-3 -mx-2 px-2 md:justify-end">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-accent text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section id="blog-posts" className="py-20">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col">
                  <div className="h-60 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                        <Tag size={12} className="mr-1" />
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="inline-flex items-center text-xs text-gray-500">
                        <Clock size={12} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3">
                      <Link to={`/blog/${post.id}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent mr-2">
                          <User size={16} />
                        </div>
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center text-accent font-medium hover:underline"
                    >
                      Read Article <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No articles found matching your criteria.</h3>
              <button 
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }} 
                className="mt-4 text-accent font-medium hover:underline"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-700 text-lg mb-8">
              Get the latest digital marketing insights, tips, and resources delivered straight to your inbox.
            </p>
            
            <form className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent outline-none"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary whitespace-nowrap flex-shrink-0"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
