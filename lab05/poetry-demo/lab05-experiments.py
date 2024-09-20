import requests
from bs4 import BeautifulSoup, SoupStrainer

def main():
    # print("hello world")
    # user_agent makes it seem like the request is coming from a web browser (versus a bot)
    user_agent = {'User-agent': 'Mozilla/5.0'}
    response = requests.get("https://new.cs.unca.edu/", headers=user_agent)
    # https://stackoverflow.com/questions/1080411/retrieve-links-from-web-page-using-python-and-beautifulsoup
    soup = BeautifulSoup(response.content, 'html.parser', parse_only=SoupStrainer('a'))
    for link in soup:
        if link.has_attr('href'):
            print(link['href'])

    #print(response.content)

if __name__ == "__main__":
    main()
