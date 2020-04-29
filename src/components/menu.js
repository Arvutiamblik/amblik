import React from 'react';
import {Link, StaticQuery, graphql} from 'gatsby';
import ModalWindow from './Modal';

const Menu = (data, props) => {
   const {lang, uid, supportModal} = data.props
   let menuArr = data.data.prismic.allMenus.edges
  menuArr = menuArr.filter(arr => (
    arr.node._meta.lang === lang
   ))
  //  console.log(menuArr);
  let path = lang === 'et-et' ? `/${uid}` : `/${lang}/${uid}`;
  let langName = lang ==='et-et' ? 'ee' : lang;
  let prefix = lang ==='et-et' ? '' : lang;
  return (
    <header>
      <div id="headerPosition" className="container">
        <div id="dropdownMenuRight">
          <input id="menu-toggle" type="checkbox" />
          <label id="menu-label" htmlFor="menu-toggle">
            <a id="menu-icon" >{langName} <img id="strelka" className="img" alt="" src={lang} /></a>
          </label>
          <ul id="collapse-menu">
            <li><Link to={`/${uid}`}>ee</Link></li>
            <li><Link to={`/ru/${uid}`}>ru</Link></li> 
          </ul>
        </div>
        <h1 id="logo"><big><strong>amblik </strong></big></h1>
       
        {menuArr[0].node.menu.map(menuItem=> (
           <Link id="link_button" to={menuItem.menu_anchor ? `${prefix}#${menuItem.menu_anchor}`:
           `${prefix}/${menuItem.menu_link._meta.uid}`
          }
           ><strong>{menuItem.menu_item}</strong>
           </Link>
        ))}
        
 
        {supportModal && <ModalWindow supportModal={supportModal} />}
      </div>  
    </header>
  );
};
export default (props)  => (
  <StaticQuery
    query={graphql`
      query($lang: String) {
        prismic {
    allMenus(lang: $lang) {
      edges {
        node {
          _meta {
            lang
          }
          menu {
            menu_anchor
            menu_item
            menu_link {
              ... on PRISMIC_Support {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Services {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Menu {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Vitaly_test {
                _linkType
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Home_page {
                heading_description
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Article {
                description
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Blog {
                _linkType
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Table_test {
                _linkType
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Blog2 {
                _linkType
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Service_plan {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Support_modal {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_It_support_service_plan {
                guaranteed_prompt_response_header
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
      }
    `}
    render={data => <Menu data={data} props={props} />}
  />
)



