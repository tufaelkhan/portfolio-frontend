/* eslint-disable react/prop-types */

const Container = ({bgColor, children}) => {
    
  return (
    <div className={`${bgColor ? 'bg-base-200' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto w-full py-20">
            {children}
        </div>
    </div>
  )
}

export default Container