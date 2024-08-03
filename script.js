       const quote =   document.querySelector('.quote')
      const author =   document.querySelector('.author')
      const api = "https://yurippe.vercel.app/api/quotes?character=lelouch&random=1"
async function getQuote(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    quote.innerText = data[0].quote
    author.innerText = "---"+ data[0].character
}

getQuote(api)