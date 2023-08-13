import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: 'promptly.ai',
  description: 'Discover & Share Ai Prompts',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"/>
          </div>
          
          <main className="app">
            <Nav />
            {children}
            <Footer/>
          </main>
        </Provider>
        </body>
    </html>
  )
}

