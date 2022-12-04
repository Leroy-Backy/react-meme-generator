export default function IsFav(props) {
  return (
    <div onClick={props.changeBool}>{props.isFavourite ? "TRUE" : "FALSE"}</div>
  )
}