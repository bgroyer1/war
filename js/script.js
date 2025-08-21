const cardApiBtn = document.querySelector('#card')
6
async function apiCall() {
  try {
    const res = await fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
    if (!res.ok) {
      throw Error(`Response failed: ${res.status}`)
    }
    const data = await res.json();
    console.log(data)
  }
  catch(err) {
    console.error(err)
  }
}

cardApiBtn.addEventListener('click', async() => {
  apiCall();
  console.log(cardApiBtn)
})
