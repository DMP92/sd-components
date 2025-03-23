// FAQ object
const faq = {}
// Update faq object
window.addEventListener('DOMContentLoaded', () => {
    faq.groupWrapper = document.querySelector('[sd-faq-element="group-wrapper"]')
    faq.groups = document.querySelectorAll('[sd-faq-group]')
    faq.toggles = document.querySelectorAll('[sd-faq-toggle]')
    faq.desktopPosition = document.querySelector('[sd-faq-element="toggle-wrapper"]')
    
    // Init active variables
    faq.active = {}
    faq.active.toggle = document.querySelector('.faq-toggle.is-active')
    faq.active.group = document.querySelector('.faq-group.is-active')

    updateFAQPositionOnDeviceWidth()
})

// Active FAQ toggle click event listeners
window.addEventListener('DOMContentLoaded', () => {
    faq.toggles.forEach(faqToggle => {
        faqToggle.addEventListener('click', (e) => {
            faq.active.toggle = faqToggle;
            updateFAQToggles()
            updateActiveFAQGroup()
            updateFAQPositionOnDeviceWidth(faqToggle)
        })
    })
})

// Handle FAQ positioning on resize
window.addEventListener('resize', () => {
    updateFAQPositionOnDeviceWidth()
})

function updateFAQPositionOnDeviceWidth() {
    if(window.innerWidth > 700) {
        faq.desktopPosition.insertAdjacentElement("afterend", faq.groupWrapper)
    } else {
        faq.active.toggle.insertAdjacentElement("afterend", faq.groupWrapper)
    }
}

function updateFAQToggles() {
    faq.toggles.forEach(toggle => {
        toggle === faq.active.toggle ?
            toggle.classList.toggle('is-active') :
            toggle.classList.remove('is-active')
    })
}

function updateActiveFAQGroup() {
    const activeToggleID = faq.active.toggle.getAttribute('sd-faq-toggle');
    faq.groups.forEach(group => {
    if (group.getAttribute('sd-faq-group') === activeToggleID) {
      group.classList.toggle('is-active')
    } else {
      group.classList.remove('is-active')
    }
  })
}