// Toggles
const faqToggles = document.querySelectorAll('[sd-faq-toggle]')

// Wrapper
const faqWrapper = document.querySelector('.faq-wrapper')

// FAQ group
const faqGroup = document.querySelectorAll('[sd-faq-group]')

// FAQ positions
const faqDesktopPosition = document.querySelector('.faq-toggle_wrapper')


window.addEventListener('load', () => {
    updateFAQPositionOnDeviceWidth()
})

window.addEventListener('resize', () => {
    updateFAQPositionOnDeviceWidth()
})

function updateFAQPositionOnDeviceWidth(selectedFAQToggle) {
    if(window.innerWidth > 700) {
        faqDesktopPosition.insertAdjacentElement("afterend", faqWrapper)
    } else if(selectedFAQToggle) {
        selectedFAQToggle.insertAdjacentElement("afterend", faqWrapper)
    } else {
        document.querySelector('.faq-toggle.is-active')
            .insertAdjacentElement("afterend", faqWrapper)
    }
}

faqToggles.forEach(currentFAQToggle => {
    currentFAQToggle.addEventListener('click', (e) => {
        const faqToggleID = currentFAQToggle.getAttribute('sd-faq-toggle');
        updateFAQToggles(currentFAQToggle)
        updateActiveFAQGroup(faqToggleID)
        updateFAQPositionOnDeviceWidth(currentFAQToggle)
    })
})

function updateFAQToggles(clickedToggle) {
    faqToggles.forEach(faqToggle => {
        faqToggle === clickedToggle ?
            faqToggle.classList.toggle('is-active') :
            faqToggle.classList.remove('is-active')
    })
}

function updateActiveFAQGroup(activeToggleID) {
    faqGroup.forEach(group => {
    if (group.getAttribute('sd-faq-group').includes(activeToggleID)) {
      group.classList.toggle('is-active')
    } else {
      group.classList.remove('is-active')
    }
  })
}