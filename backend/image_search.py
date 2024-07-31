import requests
from bs4 import BeautifulSoup

def get_image_urls(query, num_images=10):
    # Format the query for the URL
    query = query.replace(' ', '+')
    url = f"https://www.google.com/search?q={query}&source=lnms&tbm=isch"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
    
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    image_urls = []
    for img in soup.find_all('img', limit=num_images):
        image_url = img.get('src')
        if image_url:
            image_urls.append(image_url)
    
    return image_urls
