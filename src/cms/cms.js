
import CMS from 'netlify-cms-app'
import IndexPagePreview from './preview-templates/IndexPagePreview'
CMS.init({
    
 
    collections: [
     { label: "articleAAA", name: "articleaaaa", folder: "src/content/menu", create: true, fields: [
     { label: "slug", name: "slug", widget: "string"},
     { label: "language code", name: "lang", widget: "string"},
     { label: "Text", name: "text", widget: "string"},
    ]},
    ],
    
     
})
CMS.registerPreviewStyle('../components/layout.css')
CMS.registerPreviewTemplate('main_page_et', IndexPagePreview)
