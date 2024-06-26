import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div className='container'>
        <div className='city_img'></div>
        <div className='formcontainer'>
          <form>
            <div className='row flex flex-row'>
            <label style={{margin:'0.5rem'}} >Region</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="text"
              placeholder="Enter your email"
            />
            <br />
            <label style={{margin:'0.5rem'}} >Number of Bags</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="text"
              placeholder="Enter your email"
            />
            <br />
            </div>
            <div className='row flex flex-row'>
            <label style={{margin:'0.5rem'}} >Drop-off </label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="text"
              placeholder="Enter your email"
            />
            <br />
            <label style={{margin:'0.5rem'}} >Pickup</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="text"
              placeholder="Enter your email"
            />
            <br />
            </div>
            <div className='row flex flex-row'>
            <button
              className="m-auto w-full rounded-xl bg-primary px-4 py-2 rounded hover:bg-transparent hover:border-custom-secondary hover:border-3"
              type="submit"
            >
              Search
            </button><button
              className="m-auto w-full rounded-xl bg-transparent px-4 py-2 rounded hover:bg-primary hover:border-none border-custom-secondary border-3"
              type="submit"
            >
              Book now
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
