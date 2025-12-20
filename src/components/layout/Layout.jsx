import Header from "./components/Header"
import Footer from "./components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main
        className="dark:bg-(--bg-dark) py-(--height--header)"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
