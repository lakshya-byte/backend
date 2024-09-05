require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData={
  
    "login": "lakshya-byte",
    "id": 177871183,
    "node_id": "U_kgDOCpoZTw",
    "avatar_url": "https://avatars.githubusercontent.com/u/177871183?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lakshya-byte",
    "html_url": "https://github.com/lakshya-byte",
    "followers_url": "https://api.github.com/users/lakshya-byte/followers",
    "following_url": "https://api.github.com/users/lakshya-byte/following{/other_user}",
    "gists_url": "https://api.github.com/users/lakshya-byte/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lakshya-byte/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lakshya-byte/subscriptions",
    "organizations_url": "https://api.github.com/users/lakshya-byte/orgs",
    "repos_url": "https://api.github.com/users/lakshya-byte/repos",
    "events_url": "https://api.github.com/users/lakshya-byte/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lakshya-byte/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-08-08T17:03:01Z",
    "updated_at": "2024-09-05T10:22:01Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login on chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
     res.send('<h2>chai aur code<h2/>')
})

app.get('/github',(req,res)=>{

res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

