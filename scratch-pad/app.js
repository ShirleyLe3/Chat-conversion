const API_KEY = "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"

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST", 
        headers: {
            Authorization: `Bearer ${API_KEY}`, 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            model: "text-davinci-003", 
            prompt: "hello, have you been working on achieving your potential?", 
            max_tokens: 7

        })
    })

    const data = await response.json()
    console.log(data)
}
fetchData()

//          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