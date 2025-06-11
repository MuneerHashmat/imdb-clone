import { useParams } from "react-router-dom"
import "./ContentDetail.css"

const ContentDetail = () => {
  const {type, id}=useParams();
  return (
    <div className="content-detail-container">
        <p>Type: {type}</p>
        <p>Id: {id}</p>
    </div>
  )
}

export default ContentDetail