import RoleLabel from './RoleLabel'
import { useState } from "react";
import { genRoles } from './generateRoles';

function App() {
  const [roles, setRoles] = useState([1, 2, 3]);

  const handleClick = () => {
    setRoles(genRoles());
  }

  return (
    <div className='bg-gray-400 w-screen h-screen'>
      <div className='flex flex-col'> 
        <button 
        className='w-30 bg-gray-500 hover:cursor-pointer'
        onClick={handleClick}
        >
          Regenerate
        </button>
      </div>
      <div className='p-6 rounded flex flex-col gap-3 bg-gray-100 justify-start'>
        {roles.map((roleName, idx) => (
          <RoleLabel key={idx} roleName={roleName.toString()} />
        ))}
      </div>
    </div>
  )
}

export default App
