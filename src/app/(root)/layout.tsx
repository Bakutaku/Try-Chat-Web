import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className='h-2'></div>
      <header className='flex justify-center w-full'>
        <Header/>
      </header>
      <div className='fixed left-3 mt-5'>
          <Sidebar/>
      </div>
      {children}
    </div>
  )
}