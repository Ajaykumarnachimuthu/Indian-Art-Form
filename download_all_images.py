import os
import urllib.request
import urllib.parse
import json
import time

TARGET_DIR = os.path.join(os.path.dirname(__file__), "assets", "images")
os.makedirs(TARGET_DIR, exist_ok=True)

ITEMS = [
    ("hero-bg", "Courtyard and Mahabharata Reliefs at the Kailasa Temple, Ellora 01.jpg"),
    ("bhimbetka-rock-art", "Rock Shelter 8, Bhimbetka 02.jpg"),
    ("dancing-girl-mohenjodaro", 'Bronze "Dancing Girl," Mohenjo-daro, c. 2500 BC.jpg'),
    ("priest-king-mohenjodaro", "Mohenjo-daro Priesterkönig.jpeg"),
    ("lion-capital-sarnath", "Lion Capital of Ashoka 3.jpg"),
    ("sanchi-great-stupa", "Stupa 1, Sanchi 02.jpg"),
    ("gandhara-standing-buddha", "Standing Buddha, Gandhara, 1st century AD, schist - Ethnological Museum, Berlin - DSC01658.JPG"),
    ("mathura-kushan-sculpture", "Inscribed Seated Buddha Image in Abhaya Mudra - Kushan Period - Katra Keshav Dev - ACCN A-1 - Government Museum - Mathura 2013-02-24 5972.JPG"),
    ("sarnath-gupta-buddha", "Buddha in Sarnath Museum (Dhammajak Mutra).jpg"),
    ("ajanta-cave-murals", "Bodhisattva Padmapani, cave 1, Ajanta, India.jpg"),
    ("descent-of-the-ganges", "Descent of the Ganges 01.jpg"),
    ("kailasa-temple-ellora", "External view of the cave 16, kailash temple, Ellora caves.jpg"),
    ("chola-nataraja-bronze", "Shiva as the Lord of Dance LACMA edit.jpg"),
    ("khajuraho-kandariya-mahadeva", "Kandariya Mahadeva Temple.jpg"),
    ("konark-sun-temple", "Wheel engraved in the 13th century built Konark Sun Temple in Orissa, India.jpg"),
    ("mughal-miniature-painting", '"Akbar Hunting with Cheetahs", Folio from an Akbarnama MET 81776.jpg'),
    ("deccan-painting-bidriware", "Salabat Jung.jpg"),
    ("bani-thani-kishangarh", "Bani Thani.jpg"),
    ("kangra-gita-govinda", "Krishna and Radha in a Grove (Recto); Princess with Attendants (Verso) LACMA M.77.154.33.jpg"),
    ("tanjore-gold-leaf-painting", "Thanjavur art from south India.jpg"),
    ("folk-tribal-traditions", "Warli painting.jpg"),
    ("raja-ravi-varma-shakuntala", "Raja Ravi Varma - Mahabharata - Shakuntala.jpg"),
    ("bengal-school-bharat-mata", "Bharat Mata by Abanindranath Tagore.jpg"),
    ("amrita-sher-gil-three-girls", "Group of Three Girls by Amrita Sher-Gil.jpg"),
    ("progressive-contemporary-art", "Sayed Haider Raza (1995).png")
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://commons.wikimedia.org/'
}

print(f"Downloading authentic images into {TARGET_DIR}...")

for item_id, filename in ITEMS:
    target_path = os.path.join(TARGET_DIR, f"{item_id}.jpg")
    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f"[OK] {item_id}.jpg already exists ({os.path.getsize(target_path)} bytes)")
        continue

    print(f"[FETCHING] {item_id} (File:{filename})")
    try:
        api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles=File:{urllib.parse.quote(filename)}&prop=imageinfo&iiprop=url&format=json"
        req = urllib.request.Request(api_url, headers=headers)
        data = json.loads(urllib.request.urlopen(req, timeout=15).read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        
        found_url = None
        for pid, page in pages.items():
            imginfo = page.get('imageinfo', [])
            if imginfo and 'url' in imginfo[0]:
                found_url = imginfo[0]['url']
                break
        
        # If not found by exact title, use search
        if not found_url:
            search_query = filename.replace('.jpg', '').replace('.JPG', '').replace('.png', '').replace('.jpeg', '')
            api_url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(search_query)}&gsrlimit=1&prop=imageinfo&iiprop=url&format=json"
            req = urllib.request.Request(api_url, headers=headers)
            data = json.loads(urllib.request.urlopen(req, timeout=15).read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for pid, page in pages.items():
                imginfo = page.get('imageinfo', [])
                if imginfo and 'url' in imginfo[0]:
                    found_url = imginfo[0]['url']
                    break

        if found_url:
            download_url = found_url.split('?')[0]
            print(f"  Downloading from: {download_url}")
            img_req = urllib.request.Request(download_url, headers=headers)
            img_data = urllib.request.urlopen(img_req, timeout=30).read()
            with open(target_path, 'wb') as f:
                f.write(img_data)
            print(f"  --> Saved {item_id}.jpg ({len(img_data)} bytes)")
        else:
            print(f"  --> Could not locate image for {item_id}")
    except Exception as e:
        print(f"  --> Error downloading {item_id}: {e}")
    
    time.sleep(0.4)

print("All downloads finished!")
