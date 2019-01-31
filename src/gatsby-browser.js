
  export const shouldUpdateScroll = args => {
    return false;
};

//   export const shouldUpdateScroll = ({
//     routerProps: { location },
//     getSavedScrollPosition
//   }) => {
//     const currentPosition = getSavedScrollPosition(location)
//     const queriedPosition = getSavedScrollPosition({ pathname: `/random` })
//         console.log('hello from gatsby-browser-api')
//     window.scrollTo(...(currentPosition || [0, 0]))

//     return false
//   }

  export const onClientEntry = () => {
    console.log("CLIENT ENTRY")
}