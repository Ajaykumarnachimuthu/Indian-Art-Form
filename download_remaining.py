import os
import urllib.request
import urllib.parse
import json
import time

TARGET_DIR = os.path.join(os.path.dirname(__file__), "assets", "images")

# Specific verified files on Wikimedia Commons
REMAINING = [
    ("sanchi-great-stupa", "Stupa 1, Sanchi 02.jpg"),
    ("gandhara-standing-buddha", "Standing Buddha, Gandhara, 1st century AD, schist - Ethnological Museum, Berlin - DSC01658.JPG"),
    ("kailasa-temple-ellora", "Courtyard and Mahabharata Reliefs at the Kailasa Temple, Ellora 01.jpg"),
    ("khajuraho-kandariya-mahadeva", "Kandariya Mahadeva Temple.jpg"),
    ("konark-sun-temple", "Wheel engraved in the 13th century built Konark Sun Temple in Orissa, India.jpg"),
    ("mughal-miniature-painting", '"Akbar Hunting with Cheetahs", Folio from an Akbarnama MET 81776.jpg'),
    ("deccan-painting-bidriware", "Salabat Jung.jpg"),
    ("bani-thani-kishangarh", "Bani Thani.jpg"),
    ("kangra-gita-govinda", "Krishna and Radha in a Grove (Recto); Princess with Attendants (Verso) LACMA M.77.154.33.jpg"),
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

print(f"Checking remaining {len(REMAINING)} images...")

for item_id, filename in REMAINING:
    target_path = os.path.join(TARGET_DIR, f"{item_id}.jpg")
    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f"[EXISTS] {item_id}.jpg")
        continue

    print(f"\n[FETCHING] {item_id} -> File:{filename}")
    time.sleep(2.5) # Prevent rate limiting
    
    try:
        api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles=File:{urllib.parse.quote(filename)}&prop=imageinfo&iiprop=url&format=json"
        req = urllib.request.Request(api_url, headers=headers)
        data = json.loads(urllib.request.urlopen(req, timeout=20).read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        
        found_url = None
        for pid, page in pages.items():
            imginfo = page.get('imageinfo', [])
            if imginfo and 'url' in imginfo[0]:
                found_url = imginfo[0]['url']
                break
        
        if not found_url:
            clean_q = filename.split('.')[0].replace('"', '').replace(',', '')
            api_url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(clean_q)}&gsrlimit=1&prop=imageinfo&iiprop=url&format=json"
            req = urllib.request.Request(api_url, headers=headers)
            data = json.loads(urllib.request.urlopen(req, timeout=20).read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for pid, page in pages.items():
                imginfo = page.get('imageinfo', [])
                if imginfo and 'url' in imginfo[0]:
                    found_url = imginfo[0]['url']
                    break

        if found_url:
            download_url = found_url.split('?')[0]
            print(f"  Downloading: {download_url}")
            time.sleep(1.0)
            img_req = urllib.request.Request(download_url, headers=headers)
            img_data = urllib.request.urlopen(img_req, timeout=35).read()
            with open(target_path, 'wb') as f:
                f.write(img_data)
            print(f"  --> Saved {item_id}.jpg ({len(img_data)} bytes)")
        else:
            print(f"  --> [FAIL] Could not find URL for {item_id}")
    except Exception as e:
        print(f"  --> [ERROR] {item_id}: {e}")

print("\nAll downloads finished!")
