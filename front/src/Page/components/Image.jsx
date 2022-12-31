import { Image as BootstrapImage } from 'react-bootstrap';

function Image(props) {
  const {
    src,
    ...otherProps
  } = props

  return (
    <BootstrapImage src={src} {...otherProps} />
  )
}

export default Image