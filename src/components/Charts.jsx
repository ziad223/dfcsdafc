import { CiMenuKebab } from "react-icons/ci";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Charts = () => {

  return (
    <div className='row container mt-5'>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className='chart-left border text-center'>
         <div className="d-flex justify-content-between align-items-center mb-2  p-2">
            <h6 className="text-muted">Total Revenue</h6>
            <CiMenuKebab/>
         </div>
         <CircularProgressbar value={70} text={`${'70'}%`}  strokeWidth = {8} className="w-50 d-block mx-auto" />;
         <h6 className="text-muted mb-3">Total sales made today</h6>
         <h3 className="text-success">$420</h3>
         <p className="text-muted"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dignissimos voluptas nobis nulla cumque.
         </p>
         <button className="btn btn-success w-75">See More</button>
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
      </div>
    </div>
  )
}

export default Charts
