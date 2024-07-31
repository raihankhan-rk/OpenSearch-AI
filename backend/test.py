import requests
import pprint
from bs4 import BeautifulSoup

bs = BeautifulSoup()

resp = requests.get('https://images.google.com/search?q=elon+musk')
pprint.pp(resp.text)