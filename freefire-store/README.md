# FF Recargas — React + Firebase (sin servidor propio)

Tienda de recargas de diamantes para Free Fire. Frontend en React,
guardado de pedidos en Firestore, publicada con Firebase Hosting.
No necesitas ningún servidor propio corriendo.

## 1. Crear el proyecto en Firebase

1. Ve a https://console.firebase.google.com
2. Crea un proyecto nuevo (ej: "ff-recargas")
3. Dentro del proyecto: **Compilación > Firestore Database** → Crear base de datos
   (modo producción, región más cercana)
4. **Configuración del proyecto (⚙️) > Tus apps > Agregar app > Web (</>)**
5. Copia el objeto `firebaseConfig` que te da y pégalo en
   `src/firebase/config.js`

## 2. Instalar dependencias (en tu computadora, con Node.js instalado)

```bash
npm install
npm install firebase
```

## 3. Probar en local

```bash
npm run dev
```

## 4. Publicar reglas de seguridad de Firestore

```bash
npm install -g firebase-tools
firebase login
firebase init firestore   # elige tu proyecto, acepta el archivo firestore.rules
firebase deploy --only firestore:rules
```

## 5. Publicar la página (Firebase Hosting)

```bash
npm run build
firebase init hosting     # carpeta pública = "dist" (o "build" según tu setup)
firebase deploy --only hosting
```

Al terminar te da un link tipo:
`https://ff-recargas.web.app`

Ese link ya funciona para cualquier cliente, con SU propio internet,
sin que tú tengas nada prendido de tu lado.

## 6. (Opcional) Conectar tu propio dominio

En Firebase Hosting > Agregar dominio personalizado, sigue los pasos
para apuntar tu dominio (ej: tunegocio.com) al hosting de Firebase.

## 7. Ver los pedidos que van llegando

Firebase Console > Firestore Database > colección `orders`.
Cada pedido tiene: ID de Free Fire, WhatsApp, paquete, precio y estado.
Puedes cambiar el campo `status` manualmente a "entregado" cuando lo proceses.

## Editar precios y paquetes

Todo está en `src/data/packages.js` — cambia montos y precios ahí.

## Métodos de pago

El QR y los datos de Tigo Money son estáticos en el componente de pago
(no hay pasarela automática). El cliente paga y confirma el pedido;
tú validas el pago manualmente por WhatsApp antes de entregar.
