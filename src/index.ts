import { domReady, observeElement, waitElement } from '@zero-dependency/dom'

domReady().then(waitPointsButton)

async function waitPointsButton() {
  observeElement(document.body, (mutation, observer) => {
    for (const node of mutation.addedNodes) {
      const pointsButton = (node as Element)
        .querySelector<HTMLElement>(
          'div[data-test-selector="community-points-summary"]'
        )
        ?.querySelector('button')

      if (pointsButton) {
        pointsButton.addEventListener('click', () => {
          // channelPointsRewardMenu()
        })

        observer.disconnect()
      }
    }
  })
}

async function channelPointsRewardMenu() {
  const menu = await waitElement('div.rewards-list')

  if (menu) {
    const rewards = menu.querySelectorAll<HTMLElement>(
      'div.reward-list-item > div > button'
    )
    rewards[0]?.click()

    const button = document
      .querySelector('div#channel-points-reward-center-body')
      ?.querySelector('button')

    button?.click()
  }
}
