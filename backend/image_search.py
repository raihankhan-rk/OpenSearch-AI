import aiohttp
from bs4 import BeautifulSoup

async def get_image_urls_async(query, num_images=10):
    query = query.replace(' ', '+')
    url = f"https://www.google.com/search?q={query}&source=lnms&tbm=isch"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
    
    async with aiohttp.ClientSession() as session:
        async with session.get(url, headers=headers) as response:
            html = await response.text()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    image_urls = []
    for img in soup.find_all('img', limit=num_images):
        image_url = img.get('src')
        if image_url:
            image_urls.append(image_url)
    
    return image_urls