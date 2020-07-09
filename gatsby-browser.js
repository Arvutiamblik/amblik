const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/linkResolver');

registerLinkResolver(linkResolver);

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location)

/**
 *
 * @desc - a function to jump to the correct scroll position
 * @param {Location} location -
 */
function scrollToAnchor(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${decodeURI(location.hash)}`)
    
    requestAnimationFrame(() => item.scrollIntoView({behavior: "smooth"}));
  }

  return true
}
