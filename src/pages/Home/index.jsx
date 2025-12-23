import Hero from "./Section/Hero"
import RecentBlog from "./Section/RecentBlog"

const HomePage = () => {
  return (
    <div className="py-20 md:py-30">
      <Hero />
      <RecentBlog />
    </div>
  )
}

export default HomePage