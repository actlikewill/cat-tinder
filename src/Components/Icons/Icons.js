export const Heart = ({ hover }) => {
  return (
    <svg x="0px" y="0px" id="heart-icon"
        viewBox="0 0 471.701 471.701" width="32px" style={{enableBackground: "new 0 0 471.701 471.701"}}>
      <g>
        <path fill={`${hover === "heart-icon" ? 'orange' : 'white'}`} d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
          c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
          l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
          C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
          s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
          c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
          C444.801,187.101,434.001,213.101,414.401,232.701z"/>
      </g>
    </svg>
  )
}

export const ThumbsDown = ({ hover }) => {
  return (
    <svg id="thumbs-down" width="32px" height="32px" viewBox="0 0 32 32" id="thumbs-down" >
      <path fill={`${hover === "thumbs-down" ? 'red' : 'white'}`} d="M30,16V9a7.0078,7.0078,0,0,0-7-7H2V16H8.4648l3.5774,5.3662.8453,5.9165A2.0094,2.0094,0,0,0,14.8672,29H17a3.0033,3.0033,0,0,0,3-3V20h6A4.0045,4.0045,0,0,0,30,16ZM8,14H4V4H8Zm20,2a2.0025,2.0025,0,0,1-2,2H18v8a1.0008,1.0008,0,0,1-1,1H14.8672l-.9094-6.3662L10,14.6973V4H23a5.0057,5.0057,0,0,1,5,5Z"/>
      <rect id="_Transparent_Rectangle_" fill="none" data-name="&lt;Transparent Rectangle&gt;" width="32" height="32"/>
    </svg>
  )
}

export const ThumbsUp = ({ hover }) => {

  return (
    <svg id="thumbs-up" width="32px" height="32px" viewBox="0 0 32 32" id="thumbs-up">
      <path fill={`${hover === "thumbs-up" ? 'green' : 'white'}`}d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z" transform="translate(0 0)"/>
      <rect fill="none" id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" width="32" height="32"/>
    </svg>
  )
}