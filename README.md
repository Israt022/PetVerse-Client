<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=1000&color=FFD700&center=true&vCenter=true&width=500&lines=PetVerse+🐾;Adopt+Love+%F0%9F%92%96;Find+Your+Perfect+Pet" />
</p>
<p align="center">💖 A Modern Pet Adoption Platform built with MERN Stack 💖</p>

---

## 📌 Project Overview

**PetVerse** is a full-stack pet adoption platform designed to connect pet lovers with pets in need of a home. Users can browse pets, view detailed information, and submit adoption requests. Pet owners or shelters can manage pet listings and handle adoption requests efficiently.

This project simulates a real-world adoption system with secure authentication, protected routes, and scalable backend APIs.

---

## 🌐 Live Links

🔗 **Live Site:** https://pet-verse-mu.vercel.app

🔗 **Server API:** https://pet-verse-server-lovat.vercel.app/ 

---

## 🚀 Features

- 🔐 JWT Authentication with HTTP-only cookies  
- 👤 User registration & login system  
- 🐶 Browse all available pets  
- 🔍 Search pets by name  
- 🧬 Filter pets by species (Dog, Cat, Bird, Rabbit, etc.)  
- 📄 View detailed pet profiles  
- ❤️ Submit adoption requests (logged-in users only)  
- 🚫 Prevent adoption without login (redirect to login)  
- 🏠 Add new pet (private route)  
- ✏️ Update pet details (owner only)  
- ❌ Delete pet listing (owner only)  
- 📋 My Requests page (track adoption status)  
- 📦 My Listings dashboard for owners  
- 📥 Approve / Reject adoption requests  
- 🐕 Auto-mark pets as “Adopted” after approval  
- 📱 Fully responsive design (mobile/tablet/desktop)  
- 🔔 Toast notifications (no alert())  
- ⏳ Loading spinner for data fetching  
- ❌ Custom 404 page  
- 🎯 Protected routes with middleware  

---

## 🛠️ Tech Stack

### Frontend
- Next.js  
- Tailwind CSS  
- Fetch API   
- React Hot Toast  
- Framer Motion (optional)  
- Lucide React / React Icons  

### Backend
- Node.js  
- Express.js  
- MongoDB 
- JWT Authentication  
- cors  
- dotenv  

---

## 📦 NPM Packages

### Client Side
- next
- react-hot-toast
- react-icons
- framer-motion

### Server Side
- express
- cors
- dotenv

---

## 🔐 Authentication Flow

- User registers or logs in
- Server generates JWT token
- Middleware verifies token for private routes
- Role-based access control (User / Owner)

---

## 🧩 Core Modules

### 🐾 Pets Module
- Add Pet  
- Update Pet  
- Delete Pet  
- View Pet Details  
- Mark as Adopted  

### 📩 Adoption Module
- Submit Adoption Request  
- View Request Status  
- Cancel Request  
- Approve / Reject Requests (Owner only)  

### 👤 User Module
- Register  
- Login  
- Role-based authorization  

---

