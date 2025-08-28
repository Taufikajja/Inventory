import React from 'react'

const Suppliers = () => {

    const [addEditModal, setAddEditModal] = useState(null);

  return (
    <div className = 'w-full h-full flex flex-col gap-4 p-4'>
        <h1 className = 'text-xl font-bold'>Suppliers Management</h1>
        <div className= 'flex justify-between items-center'>
            <input type="text" placeholder='Search' className='border p-1 bg-white rounded px-4' />
            <button className='px-4 py-1.5 bg-blue-500 text-white rounded cursor-pointer'
            onClick={() => setAddEditModal(1)}>Add Supplier</button>
        </div>


        {addEditModal && (
            <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
                <h1 className='text-xl font-bold'>Add Supplier</h1>
                <form className='flex flex-col gap-4 mt-4'>
                    <input type="text" placeholder='Supplier Name' className='border p-1 bg-white rounded px-4'/>
                      <input type="text" placeholder='Supplier Description' className='border p-1 bg-white rounded px-4' />
                </form>
            </div>
        )}
    </div>
  )
}

export default Suppliers