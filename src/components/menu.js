import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import ModalWindow from "./Modal";
import facebookBtn from "../images/facebook-button.png";
import facebookBtnMobile from "../images/facebook-button-mobile.png";
import msPartnerLogo from "../images/ms-partner-logo.png";
import { filterByLang } from "../utils/helpers";

const Menu = (data, props) => {
  const {
    lang,
    uid,
    supportModal,
    alternateLanguages = null,
    toggleMenu,
    menuOpen,
    handleClick,
  } = data.props;
  const menuName = filterByLang(data?.data.prismic?.allMenus?.edges, lang)[0]
    ?.node?.menu_name;
  const linkToFacebook = filterByLang(
    data.data.prismic.allHome_pages.edges,
    lang
  )[0].node.link_to_facebook.url;
  /* if(alternateLanguages) {
    lang === alternateLanguages
  } */

  const alternateUid = alternateLanguages !== null && alternateLanguages[0].uid;

  let menuArr = data.data.prismic.allMenus.edges;
  menuArr = filterByLang(menuArr, lang);
  let path = lang === "et-et" ? `/${uid}` : `/${lang}/${uid}`;
  let langName = lang === "et-et" ? "ee" : lang;
  let prefix = lang === "et-et" ? "" : lang === "en-us" ? "en" : lang;
  return (
    <React.Fragment>
      {!menuOpen && (
        <header
          className={`
            ${data.props.show ? "header-visible" : "header-hidden"} 
            ${data.props.top ? "header-transparent" : ""} 
          `}
        >
          <div className="container">
            <div className="row">
              <div className="header-column col d-flex justify-content-between align-items-center">
                <div className="logos">
                  <div className="logo">
                    <Link to={`/${prefix}/`}>amblik</Link>
                  </div>
                  <div className="d-block d-lg-none">
                    <img
                      className="partner-logo"
                      src={msPartnerLogo}
                      alt="Silver Microsoft Partner"
                    />
                  </div>
                </div>
                <div className="menu">
                  {menuArr[0]?.node?.menu?.map((menuItem, index) => (
                    <Link
                      className="link_button"
                      key={index}
                      to={
                        menuItem.menu_anchor
                          ? `/${prefix}#${menuItem.menu_anchor}`
                          : lang === "et-et"
                          ? menuItem.menu_link._meta.uid !== "home"
                            ? `${prefix}/${menuItem.menu_link._meta.uid}`
                            : `${prefix}/`
                          : menuItem.menu_link._meta.uid !== "home"
                          ? `/${prefix}/${menuItem.menu_link._meta.uid}`
                          : `/${prefix}/`
                      }
                    >
                      <strong>{menuItem.menu_item}</strong>
                    </Link>
                  ))}
                </div>
                <div className="d-flex align-content-center header-links">
                  <a
                    className="facebook-link"
                    href={linkToFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="facebook-button"
                      alt="facebook"
                      src={facebookBtn}
                    />
                  </a>
                  <ul className="language-menu">
                    {uid === "home" && (
                      <>
                        <li className="language-active">
                          <Link to={`/`}>ee</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/ru/`}>ru</Link>
                        </li>
                        <li>
                          <Link to={`/en/`}>en</Link>
                        </li>
                      </>
                    )}
                    {lang == "et-et" &&
                      alternateLanguages !== null &&
                      uid !== "home" && (
                        <>
                          <li className="language-active">
                            <Link to={`/${uid}`}>ee</Link>
                          </li>
                          <li>/</li>
                          <li>
                            <Link to={`/ru/${alternateUid}`}>ru</Link>
                          </li>
                          <li>/</li>
                          <li>
                            <Link to={`/en/${alternateUid}`}>en</Link>
                          </li>
                        </>
                      )}
                    {lang == "ru" &&
                      alternateLanguages !== null &&
                      uid !== "home" && (
                        <>
                          <li>
                            <Link to={`/${alternateUid}`}>ee</Link>
                          </li>
                          <li>/</li>
                          <li className="language-active">
                            <Link to={`/ru/${uid}`}>ru</Link>
                          </li>
                          <li>/</li>
                          <li>
                            <Link to={`/en/${uid}`}>en</Link>
                          </li>
                        </>
                      )}
                    {lang == "en" &&
                      alternateLanguages !== null &&
                      uid !== "home" && (
                        <>
                          <li>
                            <Link to={`/${alternateUid}`}>ee</Link>
                          </li>
                          <li>/</li>
                          <li>
                            <Link to={`/ru/${uid}`}>ru</Link>
                          </li>
                          <li>/</li>
                          <li className="language-active">
                            <Link to={`/en/${uid}`}>en</Link>
                          </li>
                        </>
                      )}

                    {!alternateLanguages && lang == "et-et" && (
                      <>
                        <li className="language-active">
                          <Link to={`/${uid}`}>ee</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/ru/${uid}`}>ru</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/en/${uid}`}>en</Link>
                        </li>
                      </>
                    )}
                    {!alternateLanguages && lang == "ru" && (
                      <>
                        <li>
                          <Link to={`/${uid}`}>ee</Link>
                        </li>
                        <li>/</li>
                        <li className="language-active">
                          <Link to={`/ru/${uid}`}>ru</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/en/${uid}`}>en</Link>
                        </li>
                      </>
                    )}
                    {!alternateLanguages && lang == "en" && (
                      <>
                        <li>
                          <Link to={`/${uid}`}>ee</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/ru/${uid}`}>ru</Link>
                        </li>
                        <li>/</li>
                        <li className="language-active">
                          <Link to={`/en/${uid}`}>en</Link>
                        </li>
                      </>
                    )}
                  </ul>
                  <div className="menu-toggle">
                    <button
                      className="d-flex align-items-center justify-content-center btn btn-primary button-main text-uppercase"
                      onClick={toggleMenu}
                    >
                      <div className="menu-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div>{menuName}</div>
                    </button>
                  </div>
                  <div className="support-modal">
                    {supportModal && (
                      <ModalWindow supportModal={supportModal} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block row">
              <div className="header-column col d-flex justify-content-between align-items-center">
                <div>
                  <img
                    className="partner-logo"
                    src={msPartnerLogo}
                    alt="Silver Microsoft Partner"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
      {/* Mobile header */}
      {menuOpen && (
        <header
          className={`
            ${data.props.show ? "header-visible" : "header-hidden"} 
            ${data.props.top ? "header-transparent" : ""} 
            menu-open
          `}
        >
          <div className="container">
            <div className="row">
              <div className="header-column col d-flex justify-content-end align-items-center">
                <div className="d-flex align-content-center header-links">
                  <div className="menu-toggle">
                    <button
                      className="d-flex align-items-center justify-content-center btn btn-primary button-main text-uppercase"
                      onClick={toggleMenu}
                    >
                      <span className="close-menu"></span>
                    </button>
                  </div>
                  <div className="support-modal">
                    {supportModal && (
                      <ModalWindow supportModal={supportModal} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col my-4">
                <div className="menu">
                  {menuArr[0].node.menu.map((menuItem, index) => (
                    <Link
                      onClick={handleClick}
                      className="link_button"
                      key={index}
                      to={
                        menuItem.menu_anchor
                          ? `/${prefix}#${menuItem.menu_anchor}`
                          : lang === "et-et"
                          ? menuItem.menu_link._meta.uid !== "home"
                            ? `${prefix}/${menuItem.menu_link._meta.uid}`
                            : `${prefix}/`
                          : menuItem.menu_link._meta.uid !== "home"
                          ? `/${prefix}/${menuItem.menu_link._meta.uid}`
                          : `/${prefix}/`
                      }
                    >
                      <strong>{menuItem.menu_item}</strong>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col my-4">
                <ul className="language-menu">
                  {uid === "home" && (
                    <>
                      <li className="language-active">
                        <Link to={`/`}>ee</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link to={`/ru/`}>ru</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link to={`/en/`}>en</Link>
                      </li>
                    </>
                  )}
                  {lang == "et-et" &&
                    alternateLanguages !== null &&
                    uid !== "home" && (
                      <>
                        <li className="language-active">
                          <Link to={`/${uid}`}>ee</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/ru/${alternateUid}`}>ru</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/en/${alternateUid}`}>en</Link>
                        </li>
                      </>
                    )}
                  {lang == "ru" &&
                    alternateLanguages !== null &&
                    uid !== "home" && (
                      <>
                        <li>
                          <Link to={`/${alternateUid}`}>ee</Link>
                        </li>
                        <li>/</li>
                        <li className="language-active">
                          <Link to={`/ru/${uid}`}>ru</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/en/${uid}`}>en</Link>
                        </li>
                      </>
                    )}
                  {lang == "en" &&
                    alternateLanguages !== null &&
                    uid !== "home" && (
                      <>
                        <li>
                          <Link to={`/${alternateUid}`}>ee</Link>
                        </li>
                        <li>/</li>
                        <li>
                          <Link to={`/ru/${uid}`}>ru</Link>
                        </li>
                        <li>/</li>
                        <li className="language-active">
                          <Link to={`/en/${uid}`}>en</Link>
                        </li>
                      </>
                    )}

                  {!alternateLanguages && lang == "et-et" && (
                    <>
                      <li className="language-active">
                        <Link to={`/${uid}`}>ee</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link to={`/ru/${uid}`}>ru</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link to={`/en/${uid}`}>en</Link>
                      </li>
                    </>
                  )}
                  {!alternateLanguages && lang == "ru" && (
                    <>
                      <li>
                        <Link to={`/${uid}`}>ee</Link>
                      </li>
                      <li>/</li>
                      <li className="language-active">
                        <Link to={`/ru/${uid}`}>ru</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link to={`/en/${uid}`}>en</Link>
                      </li>
                    </>
                  )}
                  {!alternateLanguages && lang == "en" && (
                    <>
                      <li>
                        <Link to={`/${uid}`}>ee</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link to={`/ru/${uid}`}>ru</Link>
                      </li>
                      <li>/</li>
                      <li className="language-active">
                        <Link to={`/en/${uid}`}>en</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col my-4">
                <a
                  className="facebook-link"
                  href={linkToFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="facebook-button"
                    alt="facebook"
                    src={facebookBtnMobile}
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      )}
    </React.Fragment>
  );
};
// eslint-disable-next-line react/display-name
export default (props) => (
  <StaticQuery
    query={graphql`
      query($lang: String) {
        prismic {
          allHome_pages(lang: $lang) {
            edges {
              node {
                _meta {
                  lang
                }
                link_to_facebook {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
          }
          allMenus(lang: $lang) {
            edges {
              node {
                _meta {
                  lang
                }
                menu_name
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
