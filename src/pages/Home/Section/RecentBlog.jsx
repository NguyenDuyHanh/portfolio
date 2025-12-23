import BlogCard from "../../../components/Blog/BlogCard";
import SectionHeader from "../../../components/Section/SectionHeader";

const RecentBlog = () => {
  return (
    <section className="mt-10 md:mt-20">
      <SectionHeader
        title="Recent Blog"
        actionText="View All"
        actionTo="/blog"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <BlogCard
          imageSrc="https://res.cloudinary.com/dqfxdklwx/image/upload/v1766344911/blog-portfolio/blogs/y29vtxypy0ooa9iuyzmv.jpg"
          date="22 DEC 2025"
          tags="Writing"
          minRead="4"
          title="Ký ức về những chuyến đi"
          content="Những chuyến đi luôn để lại trong tôi những ký ức khó quên. Mỗi lần đặt chân đến một nơi mới, tôi cảm nhận được sự hứng khởi và tò mò về những điều chưa biết. Những cảnh đẹp thiên nhiên, những con người thân thiện và những trải nghiệm văn hóa đa dạng đã làm phong phú thêm cuộc sống của tôi."
        />
        <BlogCard
          imageSrc="https://res.cloudinary.com/dqfxdklwx/image/upload/v1766344911/blog-portfolio/blogs/y29vtxypy0ooa9iuyzmv.jpg"
          date="22 DEC 2025"
          tags="Writing"
          minRead="4"
          title="Ký ức về những chuyến đi"
          content="Những chuyến đi luôn để lại trong tôi những ký ức khó quên. Mỗi lần đặt chân đến một nơi mới, tôi cảm nhận được sự hứng khởi và tò mò về những điều chưa biết. Những cảnh đẹp thiên nhiên, những con người thân thiện và những trải nghiệm văn hóa đa dạng đã làm phong phú thêm cuộc sống của tôi."
        />
        <BlogCard
          imageSrc="https://res.cloudinary.com/dqfxdklwx/image/upload/v1766344911/blog-portfolio/blogs/y29vtxypy0ooa9iuyzmv.jpg"
          date="22 DEC 2025"
          tags="Writing"
          minRead="4"
          title="Ký ức về những chuyến đi"
          content="Những chuyến đi luôn để lại trong tôi những ký ức khó quên. Mỗi lần đặt chân đến một nơi mới, tôi cảm nhận được sự hứng khởi và tò mò về những điều chưa biết. Những cảnh đẹp thiên nhiên, những con người thân thiện và những trải nghiệm văn hóa đa dạng đã làm phong phú thêm cuộc sống của tôi."
        />
        <BlogCard
          imageSrc="https://res.cloudinary.com/dqfxdklwx/image/upload/v1766344911/blog-portfolio/blogs/y29vtxypy0ooa9iuyzmv.jpg"
          date="22 DEC 2025"
          tags="Writing"
          minRead="4"
          title="Ký ức về những chuyến đi"
          content="Những chuyến đi luôn để lại trong tôi những ký ức khó quên. Mỗi lần đặt chân đến một nơi mới, tôi cảm nhận được sự hứng khởi và tò mò về những điều chưa biết. Những cảnh đẹp thiên nhiên, những con người thân thiện và những trải nghiệm văn hóa đa dạng đã làm phong phú thêm cuộc sống của tôi."
        />
      </div>
    </section>
  );
};

export default RecentBlog;
