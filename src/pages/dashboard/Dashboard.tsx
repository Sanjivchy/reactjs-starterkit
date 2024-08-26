import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
  const { user, authenticated } = useAuth();
  return (
    <div className='text-center p-20'>
      <h3 className='text-3xl font-bold'>
       Hello Dashboard 👋👋👋, i am {user?.firstName}  {user?.lastName}, {authenticated ? 'yes':'No'}
      </h3>
    </div>
  )
}

export default Dashboard