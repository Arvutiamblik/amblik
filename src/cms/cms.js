import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CMS from 'netlify-cms-app'
import IndexPagePreview from './preview-templates/IndexPagePreview'
CMS.registerPreviewStyle('../components/layout.css')
CMS.registerPreviewTemplate('main_page_et', IndexPagePreview)
