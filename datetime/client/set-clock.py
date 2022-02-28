import json, requests 
import os
import datetime
url = requests.get("http://10.13.68.207:3000/dateinfo")
text = url.text

data = json.loads(text)

os.system(f"sudo timedatectl set-ntp false")
os.system(f"sudo timedatectl set-time {data['year']}-{data['month']}-{data['date']}")
os.system(f"sudo timedatectl set-time {data['hours']}:{data['minutes']}:{data['seconds']}")
os.system(f"sudo timedatectl set-ntp true")

print(data)