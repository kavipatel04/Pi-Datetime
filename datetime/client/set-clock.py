import json, requests 

url = requests.get("https://localhost:3000")
text = url.text

data = json.loads(text)

print(data)