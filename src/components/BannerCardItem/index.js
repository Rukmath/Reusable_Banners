import './index.css'

const BannerCard = props => {
  const {BannerDetails} = props
  const {headerText, description, className} = BannerDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="custom-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
