import Hero from "./sections/Hero"
import RecentBlog from "./sections/RecentBlog"
import OpenSource from "./sections/OpenSource"

const HomePage = () => {
  return (
    <div className="py-20 md:py-30">
      <Hero />
      <RecentBlog />
      <OpenSource />
    </div>
  )
}

export default HomePage