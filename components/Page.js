import Header from '../components/Header'

export default ({ children }) => (
  <div className='bg-ft'>
    <Header />
    {children}
  </div>
)
