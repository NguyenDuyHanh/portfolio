import Hero from "./sections/Hero"
import RecentBlog from "./sections/RecentBlog"
import OpenSource from "./sections/OpenSource"
import Seo from "../../components/Seo"

const HomePage = () => {
  return (
    <div className="py-20 md:py-30">
      <Seo
        title="Hanh Nguyễn - Software Developer"
        description="Welcome to Hanh Nguyen's personal portfolio website. Explore my projects, blog posts, and get to know more about me."
        name="@hanhnguyen"
        type="website"
      />
      <Hero />
      <RecentBlog />
      <OpenSource />
    </div>
  )
}

export default HomePage