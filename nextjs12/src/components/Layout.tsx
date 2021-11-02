import Footer from "./global/Footer"
import NavbarV2 from "./global/NavbarV2/NavbarV2"
import PreviewBanner from "./global/PreviewBanner"

const Layout = ({ children, global, preview, pageContext }) => {
  const { navbar, footer, contactInfo, social } = global
  return (
    <div className="flex flex-col justify-between min-h-screen bg-indigo-500">
      {/* Aligned to the top */}
      <div className="flex-1">
        {preview && <PreviewBanner />}
        <NavbarV2 navbar={navbar} pageContext={pageContext} />
        {children}
      </div>
      {/* Aligned to the bottom */}
      <Footer
        contactInfo={contactInfo}
        pageContext={pageContext}
        social={social}
        {...footer}
      />
    </div>
  )
}

export default Layout
