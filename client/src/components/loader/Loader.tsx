import './loader.scss';

export  const LoaderCircle = () => {
  return (
    <div className="loader">
    <span className="loader__dot"></span>
    <span className="loader__dot"></span>
    <span className="loader__dot"></span>
  </div>
  )
}

export const LoaderLines = ()=> {
  return(
   <div className="ai-loader">
     <div className="ai-loader__line" style={{width:'70%'}}></div>
     <div className="ai-loader__line" style={{width:'80%'}}></div>
     <div className="ai-loader__line" style={{width:'90%'}}></div>
     <div className="ai-loader__line"></div>
   </div>
  )
}