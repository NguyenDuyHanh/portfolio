import Header from "./components/Header"
import Footer from "./components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main
        className="px-4 pt-(--height--header) sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
