
import { Header, Footer } from "../../Components"
import "./MainLayout.css"

export const MainLayout = ({ children }) => {
  return (
    <main className="main-layout">
      <section className="header">
        <Header />
      </section>
      <section className="main-content">
        {children}
      </section>
      <section className="footer">
        <Footer/>
      </section>
    </main>
  )
}