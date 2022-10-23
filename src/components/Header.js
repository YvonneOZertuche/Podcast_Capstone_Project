import StateContext from "../StateContext"

const Header = () => {
  const appState = useContext(StateContext)

  return (
    <>
      <header className='header-bar bg-primary mb-3'>
        <div className='d-flex flex-column flex-md-row align-items-center container p-3'>
          <h1 className='mr-md-auto font-weight-normal my-0'>
            <Link to='/' className='text-white'>
              Your Podcasts
            </Link>
          </h1>
          {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        </div>
      </header>
    </>
  )
}

export default Header
