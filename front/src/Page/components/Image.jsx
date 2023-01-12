import { Image as BootstrapImage } from 'react-bootstrap';

function Image(props) {
  const {
    src,
    ...otherProps
  } = props

  return (
    <BootstrapImage 
      width={props.width}
      height={props.height}
      src={ src}
      {...otherProps} />
  )
}

export default Image