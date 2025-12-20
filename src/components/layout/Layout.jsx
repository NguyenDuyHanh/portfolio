import Header from "./components/Header"
import Footer from "./components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main
        className="dark:bg-(--bg-dark) py-(--height--header) px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
