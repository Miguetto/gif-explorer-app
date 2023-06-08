import PropTypes from 'prop-types';

export const GifItem = ({ id, titulo, url}) => {
  return (
    <div className="card">
        <img src={ url } alt={ titulo }/>
        <p>{ titulo }</p>
    </div>
  )
}

GifItem.protoTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}
