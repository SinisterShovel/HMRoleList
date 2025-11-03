import React from 'react'

function RoleLabel({roleName}) {
    return (
        <div className='p-4 w-full h-12 flex items-center justify-center rounded text-white bg-gradient-to-r from-purple-500 to-pink-500'>
            {roleName}
        </div>
    )
}

export default RoleLabel