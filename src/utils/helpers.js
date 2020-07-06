export const toNumber = str => +str;

export const filterByLang = (arr, lang) => arr.filter((arr) => arr.node._meta.lang === lang);