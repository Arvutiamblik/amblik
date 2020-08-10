exports.linkResolver = function linkResolver(doc) {
  const lang =
    doc.lang === "et-et" ? "" : doc.lang === "en-us" ? "en" : doc.lang;
  if (doc) {
    switch (doc.type) {
      case "home_page":
        return `/${lang}`;
      case "IT Support service plans":
        return `${lang}/it-support`;
      case `${lang}/${doc.uid}`:
        return `/${doc.uid}`;
      case "support":
        return `${lang}/${doc.uid}`;
      case "Services":
        return `${lang}/${doc.uid}`;
      case "Article":
        return `${lang}/${doc.uid}`;
      default:
        if (doc.uid) {
          return `${lang}/${doc.uid}`;
        }
        return `/${doc.type}`;
    }
  }

  return "/";
};
