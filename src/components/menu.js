import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import ModalWindow from './Modal';
import facebookBtn from '../images/facebook-button.png';

const Menu = (data, props) => {
  const { lang, uid, supportModal, alternateLanguages = null } = data.props;

  /* if(alternateLanguages) {
    lang === alternateLanguages
  } */

  const alternateUid = alternateLanguages !== null && alternateLanguages[0].uid;

  let menuArr = data.data.prismic.allMenus.edges;
  menuArr = menuArr.filter((arr) => arr.node._meta.lang === lang);
  //  console.log(menuArr);
  let path = lang === 'et-et' ? `/${uid}` : `/${lang}/${uid}`;
  let langName = lang === 'et-et' ? 'ee' : lang;
  let prefix = lang === 'et-et' ? '' : lang;
  // console.log(uid);
  return (
    <header
      className={`${data.props.show ? 'header-visible' : 'header-hidden'} ${
        data.props.top ? 'header-transparent' : ''
      }`}>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex justify-content-between align-items-center'>
            <div className='logo'>amblik</div>
            <div className='menu'>
              {menuArr[0].node.menu.map((menuItem, index) => (
                <Link
                  className='link_button'
                  key={index}
                  to={
                    menuItem.menu_anchor
                      ? `/${prefix}#${menuItem.menu_anchor}`
                      : lang === 'et-et' 
                      ? menuItem.menu_link._meta.uid !== 'home' ? `${prefix}/${menuItem.menu_link._meta.uid}` :
                      `${prefix}/` 
                      : menuItem.menu_link._meta.uid !== 'home' ? `/${prefix}/${menuItem.menu_link._meta.uid}` :
                      `/${prefix}/`
                  }>
                  <strong>{menuItem.menu_item}</strong>
                </Link>
              ))}
            </div>
            <div className="d-flex align-content-center header-links">
              <a className="facebook-link" href="https://www.facebook.com/arvutiamblik" target="_blank" rel="noopener noreferrer">
                <img className="facebook-button" alt="facebook" src={facebookBtn} />
              </a>
              <ul className='language-menu'>
                {uid === 'home' && (
                  <>
                    <li className="language-active">
                      <Link to={`/`}>ee</Link>
                    </li>
                    <li>
                      /
                    </li>
                    <li>
                      <Link to={`/ru/`}>ru</Link>
                    </li>
                  </>
                )}
                {lang == 'et-et' &&
                  alternateLanguages !== null &&
                  uid !== 'home' && (
                    <>
                      <li className="language-active">
                        <Link to={`/${uid}`}>ee</Link>
                      </li>
                      <li>
                        /
                      </li>
                      <li>
                        <Link to={`/ru/${alternateUid}`}>ru</Link>
                      </li>
                    </>
                  )}
                {lang == 'ru' && alternateLanguages !== null && uid !== 'home' && (
                  <>
                    <li>
                      <Link to={`/${alternateUid}`}>ee</Link>
                    </li>
                    <li>
                      /
                    </li>
                    <li className="language-active">
                      <Link to={`/ru/${uid}`}>ru</Link>
                    </li>
                  </>
                )}

                {!alternateLanguages && lang == 'et-et' && (
                  <>
                    <li className="language-active">
                      <Link to={`/${uid}`}>ee</Link>
                    </li>
                    <li>
                      /
                    </li>
                    <li>
                      <Link to={`/ru/${uid}`}>ru</Link>
                    </li>
                  </>
                )}
                {!alternateLanguages && lang == 'ru' && (
                  <>
                    <li>
                      <Link to={`/${uid}`}>ee</Link>
                    </li>
                    <li>
                      /
                    </li>
                    <li className="language-active">
                      <Link to={`/ru/${uid}`}>ru</Link>
                    </li>
                  </>
                )}
              </ul>
              <div className="menu-toggle">
                <button className="btn btn-primary button-main text-uppercase">menu</button>
              </div>
              <div className='support-modal'>
                {supportModal && <ModalWindow supportModal={supportModal} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
// eslint-disable-next-line react/display-name
export default (props) => (
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
    render={(data) => <Menu data={data} props={props} />}
  />
);
