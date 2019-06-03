(function () {
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.hero-title, .hero-paragraph, .hero-download-btn, .hero-cta', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'top',
      interval: 150
    })

    sr.reveal('.hero-illustration', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom'
    })

    sr.reveal('.feature-extended:nth-child(odd) .feature-extended-image', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'left',
      viewFactor: 0.5
    })

    sr.reveal('.feature-extended:nth-child(even) .feature-extended-image', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'right',
      viewFactor: 0.5
    })

    const pricingTables = document.querySelectorAll('.pricing-table')

    pricingTables.forEach(pricingTable => {
      const pricingTableHeader = [].slice.call(pricingTable.querySelectorAll('.pricing-table-header'))
      const pricingTableList = [].slice.call(pricingTable.querySelectorAll('.pricing-table-features li'))
      const pricingTableCta = [].slice.call(pricingTable.querySelectorAll('.pricing-table-cta'))
      const elements = pricingTableHeader.concat(pricingTableList).concat(pricingTableCta)

      sr.reveal(elements, {
        duration: 600,
        distance: '20px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'top',
        viewFactor: 0.5
      })
    })
  }
}())
