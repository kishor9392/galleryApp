import './index.css'

const ThumbnailItem = props => {
  const {imagesList, updateState, isValid} = props

  const {thumbnailAltText, id, thumbnailUrl} = imagesList

  const onTap = () => {
    updateState(id)
  }

  const check = isValid ? 'img3' : ''
  return (
    <li className="list">
      <button className="btn" type="button">
        <img
          src={thumbnailUrl}
          className={`img2 ${check}`}
          alt={thumbnailAltText}
          onClick={onTap}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
