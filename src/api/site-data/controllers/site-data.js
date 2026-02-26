'use strict'

/**
 * Maps the frontend-facing collection API name (used as keys in the response)
 * to the Strapi Document Service UID for that content type.
 *
 * Grouped into three bundles that the frontend requests separately:
 *   global  — nav, footer, routing, popovers (fetched on every app load)
 *   home    — homepage-only sections (fetched only on /)
 *   content — all content page section types (fetched once for any content route)
 */
const BUNDLES = {
  global: [
    { uid: 'api::nav-bar.nav-bar',                             apiName: 'nav-bars' },
    { uid: 'api::main-navigation.main-navigation',             apiName: 'main-navigations' },
    { uid: 'api::main-navigation-dropdown.main-navigation-dropdown', apiName: 'main-navigation-dropdowns' },
    { uid: 'api::footer.footer',                               apiName: 'footers' },
    { uid: 'api::footer-link-column.footer-link-column',       apiName: 'footer-link-columns' },
    { uid: 'api::footer-link-column-link.footer-link-column-link', apiName: 'footer-link-column-links' },
    { uid: 'api::contact-page.contact-page',                   apiName: 'contact-pages' },
    { uid: 'api::general-content-page.general-content-page',   apiName: 'general-content-pages' },
    { uid: 'api::content-page.content-page',                   apiName: 'content-pages' },
    { uid: 'api::home-alert-banner.home-alert-banner',         apiName: 'home-alert-banners' },
  ],

  home: [
    { uid: 'api::home-page.home-page',                                         apiName: 'home-pages' },
    { uid: 'api::homehero.homehero',                                           apiName: 'homeheros' },
    { uid: 'api::homecategory.homecategory',                                   apiName: 'homecategories' },
    { uid: 'api::homecategories-data.homecategories-data',                     apiName: 'homecategories-datas' },
    { uid: 'api::homerun-profitably.homerun-profitably',                       apiName: 'homerun-profitablies' },
    { uid: 'api::homerun-profitablyaccordion.homerun-profitablyaccordion',     apiName: 'homerun-profitablyaccordions' },
    { uid: 'api::homeaccount.homeaccount',                                     apiName: 'homeaccounts' },
    { uid: 'api::homevalue-solution.homevalue-solution',                       apiName: 'homevalue-solutions' },
    { uid: 'api::home-value-solutions-accordion-data.home-value-solutions-accordion-data', apiName: 'home-value-solutions-accordion-datas' },
    { uid: 'api::home-we-serve.home-we-serve',                                 apiName: 'home-we-serves' },
    { uid: 'api::home-we-serve-service-list-data.home-we-serve-service-list-data', apiName: 'home-we-serve-service-list-datas' },
    { uid: 'api::home-about.home-about',                                       apiName: 'home-abouts' },
    { uid: 'api::home-about-about-items-data.home-about-about-items-data',     apiName: 'home-about-about-items-datas' },
    { uid: 'api::home-business.home-business',                                 apiName: 'home-businesses' },
    { uid: 'api::home-small-banner.home-small-banner',                         apiName: 'home-small-banners' },
  ],

  content: [
    { uid: 'api::who-we-serve-header-hero.who-we-serve-header-hero',           apiName: 'who-we-serve-header-heros' },
    { uid: 'api::who-we-serve-markets-served-service.who-we-serve-markets-served-service', apiName: 'who-we-serve-markets-served-services' },
    { uid: 'api::who-we-servemarkets-served-servicesservice.who-we-servemarkets-served-servicesservice', apiName: 'who-we-servemarkets-served-servicesservices' },
    { uid: 'api::about-services-section.about-services-section',               apiName: 'about-services-sections' },
    { uid: 'api::about-services-sectionservice.about-services-sectionservice', apiName: 'about-services-sectionservices' },
    { uid: 'api::about-warehouse-section.about-warehouse-section',             apiName: 'about-warehouse-sections' },
    { uid: 'api::med-supply-content-banner.med-supply-content-banner',         apiName: 'med-supply-content-banners' },
    { uid: 'api::med-supply-content-heading.med-supply-content-heading',       apiName: 'med-supply-content-headings' },
    { uid: 'api::med-supply-content-heading-distribution-card.med-supply-content-heading-distribution-card', apiName: 'med-supply-content-heading-distribution-cards' },
    { uid: 'api::med-supply-content-section.med-supply-content-section',       apiName: 'med-supply-content-sections' },
    { uid: 'api::med-supplycontent-sectionitem.med-supplycontent-sectionitem', apiName: 'med-supplycontent-sectionitems' },
    { uid: 'api::featured-categories-carousel.featured-categories-carousel',   apiName: 'featured-categories-carousels' },
    { uid: 'api::resources-side-by-side.resources-side-by-side',               apiName: 'resources-side-by-sides' },
    { uid: 'api::content-text-section.content-text-section',                   apiName: 'content-text-sections' },
    { uid: 'api::page-content-section18text-section.page-content-section18text-section', apiName: 'page-content-section18text-sections' },
    { uid: 'api::pdf-display.pdf-display',                                     apiName: 'pdf-displays' },
    { uid: 'api::home-about.home-about',                                       apiName: 'home-abouts' },
    { uid: 'api::home-about-about-items-data.home-about-about-items-data',     apiName: 'home-about-about-items-datas' },
    { uid: 'api::homeaccount.homeaccount',                                     apiName: 'homeaccounts' },
    { uid: 'api::homerun-profitably.homerun-profitably',                       apiName: 'homerun-profitablies' },
    { uid: 'api::homerun-profitablyaccordion.homerun-profitablyaccordion',     apiName: 'homerun-profitablyaccordions' },
    { uid: 'api::homehero.homehero',                                           apiName: 'homeheros' },
    { uid: 'api::homevalue-solution.homevalue-solution',                       apiName: 'homevalue-solutions' },
    { uid: 'api::home-value-solutions-accordion-data.home-value-solutions-accordion-data', apiName: 'home-value-solutions-accordion-datas' },
    { uid: 'api::home-we-serve.home-we-serve',                                 apiName: 'home-we-serves' },
    { uid: 'api::home-we-serve-service-list-data.home-we-serve-service-list-data', apiName: 'home-we-serve-service-list-datas' },
    { uid: 'api::home-business.home-business',                                 apiName: 'home-businesses' },
    { uid: 'api::home-small-banner.home-small-banner',                         apiName: 'home-small-banners' },
    { uid: 'api::industry-insights-section.industry-insights-section',         apiName: 'industry-insights-sections' },
    { uid: 'api::industry-insights-section-data.industry-insights-section-data', apiName: 'industry-insights-section-datas' },
    { uid: 'api::website-content.website-content',                             apiName: 'website-contents' },
  ],
}

/**
 * Fetches all entries for a single content type, handling pagination.
 * Uses the Strapi Document Service directly (DB query, not HTTP).
 */
async function fetchAllEntries(strapi, uid) {
  const PAGE_SIZE = 200
  let start = 0
  const all = []

  while (true) {
    const entries = await strapi.documents(uid).findMany({
      populate: '*',
      limit: PAGE_SIZE,
      start,
      status: 'published',
    })

    if (!entries || entries.length === 0) break
    all.push(...entries)
    if (entries.length < PAGE_SIZE) break
    start += PAGE_SIZE
  }

  return all
}

module.exports = {
  /**
   * GET /api/site-data/bundle?name=global|home|content
   *
   * Returns all entries for the requested bundle as a single response.
   * The frontend receives { collections: { 'api-name': [...entries] } }
   * and applies its existing link-resolution logic client-side.
   *
   * Counts as 1 API request against the Strapi Cloud limit regardless
   * of how many collections are in the bundle.
   */
  async bundle(ctx) {
    const { name } = ctx.query

    if (!name || !BUNDLES[name]) {
      return ctx.badRequest(
        `Unknown bundle "${name}". Valid options: ${Object.keys(BUNDLES).join(', ')}`
      )
    }

    const bundleConfig = BUNDLES[name]

    // Deduplicate by apiName so content bundle doesn't double-fetch shared collections
    const seen = new Set()
    const unique = bundleConfig.filter(({ apiName }) => {
      if (seen.has(apiName)) return false
      seen.add(apiName)
      return true
    })

    const results = await Promise.all(
      unique.map(async ({ uid, apiName }) => {
        try {
          const entries = await fetchAllEntries(strapi, uid)
          return { apiName, entries }
        } catch (err) {
          strapi.log.warn(`[site-data] Failed to fetch ${apiName} (${uid}): ${err.message}`)
          return { apiName, entries: [] }
        }
      })
    )

    const collections = {}
    for (const { apiName, entries } of results) {
      collections[apiName] = entries
    }

    ctx.body = { collections }
  },
}
