import Header from './components/Header'
import SideNav from './components/SideNav'

function App() {

  return (
    <>
      <Header/>
      <div className=" w-64 fixed">
        <SideNav selectedIndex={(value) => console.log(value)} />
      </div>
      <div className=" ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className=" md:col-span-2 bg-green-200">
          Control Panel
        </div>
        <div className=" md:col-span-3 bg-red-100">
          Icon Preview
        </div>
        <div className=" bg-blue-100">
          Ads Banner
        </div>
      </div>
    </>
  )
}

export default App
