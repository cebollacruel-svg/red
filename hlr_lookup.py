import time
import hmac
import hashlib
import requests

# 🔑 Agrega aquí tu API Key
API_KEY = "AQ.Ab8RN6JiR3b0iDonnKmAP8ik9QJ3CvQspvN1ENgUuPhX02RAtg"

# Número a consultar
msisdn = "+50684126028"

# 1. Generar timestamp actual en segundos
timestamp = str(int(time.time()))

# 2. Crear la firma HMAC-SHA256 usando API_KEY y timestamp
signature = hmac.new(
    API_KEY.encode("utf-8"),
    timestamp.encode("utf-8"),
    hashlib.sha256
).hexdigest()

# 3. Definir headers
headers = {
    "Content-Type": "application/json",
    "X-Digest-Key": API_KEY,
    "X-Digest-Signature": signature,
    "X-Digest-Timestamp": timestamp
}

# 4. Definir cuerpo del request
data = {
    "msisdn": msisdn
}

# 5. Hacer la petición POST
url = "https://www.hlr-lookups.com/api/v2/hlr-lookup"
response = requests.post(url, headers=headers, json=data)

# 6. Mostrar resultado
print("Status code:", response.status_code)
print("Respuesta JSON:", response.json())
