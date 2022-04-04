export default function Svg({ ...props }) {
  return (
    <svg
      width="100"
      height="100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="50" cy="50" r="48" stroke="#5c7ae5" strokeOpacity="1" strokeWidth="4" />
      <path
        d="M41.126 63.53 28.094 50.5l-4.437 4.406 17.469 17.469 37.5-37.5-4.407-4.407-33.093 33.063Z"
        fill="#000"
      />
    </svg>
  )
}
